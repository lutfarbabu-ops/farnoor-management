'use strict';
const el=id=>document.getElementById(id);let pendingPerson=null,busy=false;
function message(text,success=false){const node=el('authMessage');node.textContent=text;node.classList.toggle('success',success);node.hidden=!text;}
async function request(endpoint,data){const response=await FarnoorAPI.request('/api/auth/'+endpoint,{method:'POST',credentials:'same-origin',headers:{'Content-Type':'application/json'},body:JSON.stringify(data)});let body;try{body=await response.json();}catch{throw Error('Could not connect to the server. Please try again.');}if(!response.ok)throw Error(body.error||'Please try again.');return body;}
async function act(task){if(busy)return;busy=true;document.querySelectorAll('button').forEach(b=>b.disabled=true);message('');try{await task();}catch(error){message(error.message||'Connection failed. Please try again.');}finally{busy=false;document.querySelectorAll('button').forEach(b=>b.disabled=false);}}
function step(name){for(const [form,phase]of [['registrationForm','Identity'],['codeForm','Code'],['passwordForm','Password']]){el(form).hidden=phase!==name;el('step'+phase).removeAttribute('aria-current');}el('step'+name).setAttribute('aria-current','step');el('registrationDetails').hidden=name==='Identity'||!pendingPerson;message('');}
function loginView(){el('registration').hidden=true;el('loginForm').hidden=false;message('');clearLogin();el('loginPassword').value='';el('newPassword').value='';el('confirmPassword').value='';}
el('openRegistration').onclick=()=>{el('loginForm').hidden=true;el('registration').hidden=false;step('Identity');el('registerUsername').focus();};
el('backToLogin').onclick=loginView;
el('changeRegistration').onclick=()=>step('Identity');
el('loginForm').onsubmit=e=>{e.preventDefault();act(async()=>{await request('login',Object.fromEntries(new FormData(e.target)));el('loginPassword').value='';FarnoorAPI.go('index.html');});};
async function send(person){await request('register',person);pendingPerson=person;for(const [id,key] of [['pendingUsername','username'],['pendingDepartment','department'],['pendingEmail','email']])el(id).textContent=person[key];step('Code');el('verificationCode').value='';el('verificationCode').focus();}
el('registrationForm').onsubmit=e=>{e.preventDefault();act(()=>send(Object.fromEntries(new FormData(e.target))));};
el('resendCode').onclick=()=>act(()=>send(pendingPerson));
el('codeForm').onsubmit=e=>{e.preventDefault();act(async()=>{const code=el('verificationCode').value.replace(/[০-৯]/g,c=>'০১২৩৪৫৬৭৮৯'.indexOf(c));await request('verify',{code});el('verificationCode').value='';step('Password');el('newPassword').focus();});};
el('confirmPassword').oninput=el('newPassword').oninput=()=>el('confirmPassword').setCustomValidity('');
el('passwordForm').onsubmit=e=>{e.preventDefault();if(el('newPassword').value!==el('confirmPassword').value){el('confirmPassword').setCustomValidity('Passwords must match.');el('confirmPassword').reportValidity();return;}act(async()=>{const result=await request('complete',Object.fromEntries(new FormData(e.target)));loginView();clearLogin();pendingPerson=null;message('Registration complete. Log in with your username and password.',true);el('loginUsername').focus();});};
document.querySelectorAll('[data-password]').forEach(button=>button.onclick=()=>{const input=el(button.dataset.password),visible=input.type==='password';input.type=visible?'text':'password';button.textContent=visible?'Hide':'Show';button.setAttribute('aria-pressed',String(visible));});
FarnoorAPI.request('/api/auth/status',{credentials:'same-origin'}).then(r=>r.json()).then(data=>{el('emailSetupNotice').hidden=data.emailConfigured;if(data.authenticated)FarnoorAPI.go('index.html');}).catch(()=>message('Could not connect to the server. Please try again.'));

// Start each visit with empty fields; use the app's registered-user chooser.
let usernameTimer,searchVersion=0,chosenIndex=-1,loginEdited=false;
function hideUsers(){el('usernameSuggestions').hidden=true;el('loginUsername').setAttribute('aria-expanded','false');chosenIndex=-1;}
function clearLogin(){el('loginForm').reset();el('loginUsername').value='';el('loginPassword').value='';el('loginPassword').type='password';hideUsers();el('usernameSearchStatus').hidden=true;clearTimeout(usernameTimer);searchVersion++;}
function chooseUser(name){el('loginUsername').value=name;searchVersion++;hideUsers();el('usernameSearchStatus').hidden=true;el('loginPassword').value='';el('loginPassword').focus();}
el('loginUsername').addEventListener('input',()=>{
 loginEdited=true;clearTimeout(usernameTimer);hideUsers();const prefix=el('loginUsername').value.normalize('NFKC').trim(),version=++searchVersion;el('usernameSearchStatus').hidden=true;
 if(Array.from(prefix).length<2)return;
 usernameTimer=setTimeout(async()=>{try{const data=await request('usernames',{prefix});if(version!==searchVersion)return;const list=el('usernameSuggestions');list.replaceChildren();for(const name of data.usernames){const option=document.createElement('button');option.type='button';option.setAttribute('role','option');option.setAttribute('aria-selected','false');option.textContent=name;option.onclick=()=>chooseUser(name);list.append(option);}list.hidden=!data.usernames.length;el('loginUsername').setAttribute('aria-expanded',String(!!data.usernames.length));el('usernameSearchStatus').textContent=data.usernames.length?'Select your registered username.':'No registered users found.';el('usernameSearchStatus').hidden=false;}catch{if(version===searchVersion){el('usernameSearchStatus').textContent='Could not load registered users. You can still type your username.';el('usernameSearchStatus').hidden=false;}}},250);
});
el('loginPassword').addEventListener('input',()=>{loginEdited=true;});
el('loginUsername').addEventListener('keydown',event=>{const options=Array.from(el('usernameSuggestions').querySelectorAll('button'));if(event.key==='Escape'){searchVersion++;hideUsers();return;}if(el('usernameSuggestions').hidden||!options.length)return;if(event.key==='ArrowDown'||event.key==='ArrowUp'){event.preventDefault();chosenIndex=(chosenIndex+(event.key==='ArrowDown'?1:-1)+options.length)%options.length;options.forEach((option,i)=>{option.id='username-option-'+i;option.setAttribute('aria-selected',String(i===chosenIndex));});el('loginUsername').setAttribute('aria-activedescendant',options[chosenIndex].id);}else if(event.key==='Enter'&&chosenIndex>=0){event.preventDefault();chooseUser(options[chosenIndex].textContent);}});
document.addEventListener('click',event=>{if(!event.target.closest('#usernameSuggestions')&&event.target!==el('loginUsername'))hideUsers();});
window.addEventListener('pageshow',()=>{loginEdited=false;clearLogin();for(const delay of [100,500])setTimeout(()=>{if(!loginEdited)clearLogin();},delay);});
clearLogin();
