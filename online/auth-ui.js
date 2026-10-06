'use strict';
const el=id=>document.getElementById(id);let pendingPerson=null,busy=false;
function message(text,success=false){const node=el('authMessage');node.textContent=text;node.classList.toggle('success',success);node.hidden=!text;}
async function request(endpoint,data){const response=await FarnoorAPI.request('/api/auth/'+endpoint,{method:'POST',credentials:'same-origin',headers:{'Content-Type':'application/json'},body:JSON.stringify(data)});let body;try{body=await response.json();}catch{throw Error('Could not connect to the server. Please try again.');}if(!response.ok)throw Error(body.error||'Please try again.');return body;}
async function act(task){if(busy)return;busy=true;document.querySelectorAll('button').forEach(b=>b.disabled=true);message('');try{await task();}catch(error){message(error.message||'Connection failed. Please try again.');}finally{busy=false;document.querySelectorAll('button').forEach(b=>b.disabled=false);}}
function step(name){for(const [form,phase]of [['registrationForm','Identity'],['codeForm','Code'],['passwordForm','Password']]){el(form).hidden=phase!==name;el('step'+phase).removeAttribute('aria-current');}el('step'+name).setAttribute('aria-current','step');message('');}
function loginView(){el('registration').hidden=true;el('loginForm').hidden=false;message('');el('loginPassword').value='';el('newPassword').value='';el('confirmPassword').value='';}
el('openRegistration').onclick=()=>{el('loginForm').hidden=true;el('registration').hidden=false;step('Identity');el('registerUsername').focus();};
el('backToLogin').onclick=loginView;
el('changeRegistration').onclick=()=>step('Identity');
el('loginForm').onsubmit=e=>{e.preventDefault();act(async()=>{await request('login',Object.fromEntries(new FormData(e.target)));el('loginPassword').value='';FarnoorAPI.go('index.html');});};
async function send(person){await request('register',person);pendingPerson=person;step('Code');el('verificationCode').value='';el('verificationCode').focus();}
el('registrationForm').onsubmit=e=>{e.preventDefault();act(()=>send(Object.fromEntries(new FormData(e.target))));};
el('resendCode').onclick=()=>act(()=>send(pendingPerson));
el('codeForm').onsubmit=e=>{e.preventDefault();act(async()=>{const code=el('verificationCode').value.replace(/[০-৯]/g,c=>'০১২৩৪৫৬৭৮৯'.indexOf(c));await request('verify',{code});el('verificationCode').value='';step('Password');el('newPassword').focus();});};
el('confirmPassword').oninput=el('newPassword').oninput=()=>el('confirmPassword').setCustomValidity('');
el('passwordForm').onsubmit=e=>{e.preventDefault();if(el('newPassword').value!==el('confirmPassword').value){el('confirmPassword').setCustomValidity('Passwords must match.');el('confirmPassword').reportValidity();return;}act(async()=>{const result=await request('complete',Object.fromEntries(new FormData(e.target)));loginView();el('loginUsername').value=result.username;pendingPerson=null;message('Registration complete. Log in with your username and password.',true);el('loginPassword').focus();});};
document.querySelectorAll('[data-password]').forEach(button=>button.onclick=()=>{const input=el(button.dataset.password),visible=input.type==='password';input.type=visible?'text':'password';button.textContent=visible?'Hide':'Show';button.setAttribute('aria-pressed',String(visible));});
FarnoorAPI.request('/api/auth/status',{credentials:'same-origin'}).then(r=>r.json()).then(data=>{el('emailSetupNotice').hidden=data.emailConfigured;if(data.authenticated)FarnoorAPI.go('index.html');}).catch(()=>message('Could not connect to the server. Please try again.'));
