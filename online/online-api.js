'use strict';
window.FarnoorAPI = (() => {
  const config = window.FARNOOR_ONLINE || {};
  const base = new URL('./', location.href);
  const storageKey = 'farnoor.v2.session:' + base.pathname;
  const registrationKey = 'farnoor.v2.registration:' + base.pathname;
  let refreshPending;
  const read = key => { try { return JSON.parse(sessionStorage.getItem(key) || 'null'); } catch { return null; } };
  const write = (key, value) => value ? sessionStorage.setItem(key, JSON.stringify(value)) : sessionStorage.removeItem(key);
  const configured = () => /^https:\/\/[a-z0-9]+\.supabase\.co$/.test(config.url || '') && !!config.key;
  const go = name => location.assign(new URL(name, base));
  async function raw(route, method, payload, session, keepalive=false, requestSignal) {
    if (!configured()) throw Error('Online connection is being configured. Please contact the administrator.');
    const headers = {'Content-Type':'application/json', apikey:config.key};
    // The legacy Edge gateway checks the public project JWT. The service verifies
    // the separate user JWT with Supabase Auth before any protected operation.
    if (config.key.startsWith('eyJ')) headers.Authorization = 'Bearer ' + config.key;
    if (session?.access_token) headers['X-User-Token'] = session.access_token;
    const registration = read(registrationKey);
    if (registration) headers['X-Registration-Token'] = registration;
    return fetch(config.url + '/functions/v1/' + config.functionName, {
      method:'POST', keepalive, mode:'cors', credentials:'omit', cache:'no-store', headers,
      body:JSON.stringify({route, method, payload:payload || {}}), signal:requestSignal || AbortSignal.timeout(route==='/api/workspace'?60000:30000)
    });
  }
  async function refresh(session) {
    if (!session?.refresh_token) return null;
    if (!refreshPending) refreshPending = (async () => {
      const response = await raw('/api/auth/refresh','POST',{refresh_token:session.refresh_token},null);
      const data = await response.json();
      if (!response.ok || !data.session) { write(storageKey,null); return null; }
      write(storageKey,data.session); return data.session;
    })().finally(() => { refreshPending = null; });
    return refreshPending;
  }
  async function request(route, options = {}) {
    const method = options.method || 'GET';
    const requestSignal = route==='/api/workspace' ? AbortSignal.timeout(60000) : undefined;
    const payload = options.payload ?? (options.body ? JSON.parse(options.body) : {});
    let session = read(storageKey);
    if (session && session.expires_at * 1000 <= Date.now() + 60000) session = await refresh(session);
    let response = await raw(route,method,payload,session,!!options.keepalive,requestSignal);
    if (response.status === 401 && session && !route.startsWith('/api/auth/')) {
      session = await refresh(session);
      if (session) response = await raw(route,method,payload,session,false,requestSignal);
    }
    if (response.ok && ['/api/auth/login','/api/auth/register','/api/auth/complete','/api/auth/logout'].includes(route)) {
      const data = await response.clone().json();
      if (route.endsWith('/login') && data.session) write(storageKey,data.session);
      if (route.endsWith('/register') && data.registrationToken) write(registrationKey,data.registrationToken);
      if (route.endsWith('/complete')) write(registrationKey,null);
      if (route.endsWith('/logout')) { write(storageKey,null); write(registrationKey,null); }
    }
    return response;
  }
  return {request,go,configured};
})();
