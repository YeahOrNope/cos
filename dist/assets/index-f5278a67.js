var W=Object.defineProperty;var X=(e,n,t)=>n in e?W(e,n,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[n]=t;var k=(e,n,t)=>(X(e,typeof n!="symbol"?n+"":n,t),t);(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const a of r)if(a.type==="childList")for(const s of a.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&i(s)}).observe(document,{childList:!0,subtree:!0});function t(r){const a={};return r.integrity&&(a.integrity=r.integrity),r.referrerPolicy&&(a.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?a.credentials="include":r.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function i(r){if(r.ep)return;r.ep=!0;const a=t(r);fetch(r.href,a)}})();function _(){}function z(e){return e()}function I(){return Object.create(null)}function x(e){e.forEach(z)}function L(e){return typeof e=="function"}function J(e,n){return e!=e?n==n:e!==n||e&&typeof e=="object"||typeof e=="function"}function K(e){return Object.keys(e).length===0}function Y(e,n,t){e.insertBefore(n,t||null)}function P(e){e.parentNode&&e.parentNode.removeChild(e)}function Z(e){return document.createElement(e)}function ee(e){return Array.from(e.childNodes)}let C;function O(e){C=e}const b=[],j=[];let A=[];const N=[],te=Promise.resolve();let T=!1;function ne(){T||(T=!0,te.then(M))}function H(e){A.push(e)}const $=new Set;let w=0;function M(){if(w!==0)return;const e=C;do{try{for(;w<b.length;){const n=b[w];w++,O(n),re(n.$$)}}catch(n){throw b.length=0,w=0,n}for(O(null),b.length=0,w=0;j.length;)j.pop()();for(let n=0;n<A.length;n+=1){const t=A[n];$.has(t)||($.add(t),t())}A.length=0}while(b.length);for(;N.length;)N.pop()();T=!1,$.clear(),O(e)}function re(e){if(e.fragment!==null){e.update(),x(e.before_update);const n=e.dirty;e.dirty=[-1],e.fragment&&e.fragment.p(e.ctx,n),e.after_update.forEach(H)}}function ie(e){const n=[],t=[];A.forEach(i=>e.indexOf(i)===-1?n.push(i):t.push(i)),t.forEach(i=>i()),A=n}const ae=new Set;function se(e,n){e&&e.i&&(ae.delete(e),e.i(n))}function oe(e,n,t){const{fragment:i,after_update:r}=e.$$;i&&i.m(n,t),H(()=>{const a=e.$$.on_mount.map(z).filter(L);e.$$.on_destroy?e.$$.on_destroy.push(...a):x(a),e.$$.on_mount=[]}),r.forEach(H)}function ue(e,n){const t=e.$$;t.fragment!==null&&(ie(t.after_update),x(t.on_destroy),t.fragment&&t.fragment.d(n),t.on_destroy=t.fragment=null,t.ctx=[])}function ce(e,n){e.$$.dirty[0]===-1&&(b.push(e),ne(),e.$$.dirty.fill(0)),e.$$.dirty[n/31|0]|=1<<n%31}function fe(e,n,t,i,r,a,s=null,l=[-1]){const f=C;O(e);const o=e.$$={fragment:null,ctx:[],props:a,update:_,not_equal:r,bound:I(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(n.context||(f?f.$$.context:[])),callbacks:I(),dirty:l,skip_bound:!1,root:n.target||f.$$.root};s&&s(o.root);let y=!1;if(o.ctx=t?t(e,n.props||{},(d,g,...p)=>{const m=p.length?p[0]:g;return o.ctx&&r(o.ctx[d],o.ctx[d]=m)&&(!o.skip_bound&&o.bound[d]&&o.bound[d](m),y&&ce(e,d)),g}):[],o.update(),y=!0,x(o.before_update),o.fragment=i?i(o.ctx):!1,n.target){if(n.hydrate){const d=ee(n.target);o.fragment&&o.fragment.l(d),d.forEach(P)}else o.fragment&&o.fragment.c();n.intro&&se(e.$$.fragment),oe(e,n.target,n.anchor),M()}O(f)}class le{constructor(){k(this,"$$");k(this,"$$set")}$destroy(){ue(this,1),this.$destroy=_}$on(n,t){if(!L(t))return _;const i=this.$$.callbacks[n]||(this.$$.callbacks[n]=[]);return i.push(t),()=>{const r=i.indexOf(t);r!==-1&&i.splice(r,1)}}$set(n){this.$$set&&!K(n)&&(this.$$.skip_bound=!0,this.$$set(n),this.$$.skip_bound=!1)}}const de="4";typeof window<"u"&&(window.__svelte||(window.__svelte={v:new Set})).v.add(de);var ye=Object.defineProperty,pe=(e,n)=>{for(var t in n)ye(e,t,{get:n[t],enumerable:!0})},S={};pe(S,{audioClassification:()=>_e,audioToAudio:()=>ke,automaticSpeechRecognition:()=>Ae,conversational:()=>Ce,documentQuestionAnswering:()=>De,featureExtraction:()=>Se,fillMask:()=>qe,imageClassification:()=>Oe,imageSegmentation:()=>Ee,imageToImage:()=>Te,imageToText:()=>xe,objectDetection:()=>Ve,questionAnswering:()=>Be,request:()=>u,sentenceSimilarity:()=>Ie,streamingRequest:()=>q,summarization:()=>je,tableQuestionAnswering:()=>Ne,tabularClassification:()=>Qe,tabularRegression:()=>Ge,textClassification:()=>Re,textGeneration:()=>Ue,textGenerationStream:()=>ze,textToImage:()=>$e,textToSpeech:()=>ve,tokenClassification:()=>Le,translation:()=>Pe,visualQuestionAnswering:()=>Fe,zeroShotClassification:()=>Me,zeroShotImageClassification:()=>He});function D(e){return/^http(s?):/.test(e)||e.startsWith("/")}var h=new Map,me=10*60*1e3,ge=1e3,F="https://huggingface.co";async function G(e,n,t){if(D(e))return null;const i=`${e}:${n}`;let r=h.get(i);if(r&&r.date<new Date(Date.now()-me)&&(h.delete(i),r=void 0),r===void 0){const a=await((t==null?void 0:t.fetch)??fetch)(`${F}/api/models/${e}?expand[]=pipeline_tag`,{headers:n?{Authorization:`Bearer ${n}`}:{}}).then(s=>s.json()).then(s=>s.pipeline_tag).catch(()=>null);if(!a)return null;r={task:a,date:new Date},h.set(i,{task:a,date:new Date}),h.size>ge&&h.delete(h.keys().next().value)}return r.task}var R="https://api-inference.huggingface.co",E=null;async function Q(e,n){const{accessToken:t,model:i,...r}=e;let{model:a}=e;const{forceTask:s,includeCredentials:l,taskHint:f,...o}=n??{},y={};if(t&&(y.Authorization=`Bearer ${t}`),!a&&!E&&f){const v=await fetch(`${F}/api/tasks`);v.ok&&(E=await v.json())}if(!a&&E&&f){const v=E[f];v&&(a=v.models[0].id)}if(!a)throw new Error("No model provided, and no default model found for this task");const d="data"in e&&!!e.data;d?(n!=null&&n.wait_for_model&&(y["X-Wait-For-Model"]="true"),(n==null?void 0:n.use_cache)===!1&&(y["X-Use-Cache"]="false"),n!=null&&n.dont_load_model&&(y["X-Load-Model"]="0")):y["Content-Type"]="application/json";const g=(()=>D(a)?a:s?`${R}/pipeline/${s}/${a}`:`${R}/models/${a}`)();let p;typeof l=="string"?p=l:typeof l=="boolean"?p=l?"include":void 0:l===void 0&&(p="same-origin");const m={headers:y,method:"POST",body:d?e.data:JSON.stringify({...r,options:n&&o}),credentials:p,signal:n==null?void 0:n.signal};return{url:g,info:m}}async function u(e,n){var a,s;const{url:t,info:i}=await Q(e,n),r=await((n==null?void 0:n.fetch)??fetch)(t,i);if((n==null?void 0:n.retry_on_error)!==!1&&r.status===503&&!(n!=null&&n.wait_for_model))return u(e,{...n,wait_for_model:!0});if(!r.ok){if((a=r.headers.get("Content-Type"))!=null&&a.startsWith("application/json")){const l=await r.json();if(l.error)throw new Error(l.error)}throw new Error("An error occurred while fetching the blob")}return(s=r.headers.get("Content-Type"))!=null&&s.startsWith("application/json")?await r.json():await r.blob()}function we(e){let n,t,i,r=!1;return function(s){n===void 0?(n=s,t=0,i=-1):n=be(n,s);const l=n.length;let f=0;for(;t<l;){r&&(n[t]===10&&(f=++t),r=!1);let o=-1;for(;t<l&&o===-1;++t)switch(n[t]){case 58:i===-1&&(i=t-f);break;case 13:r=!0;case 10:o=t;break}if(o===-1)break;e(n.subarray(f,o),i),f=t,i=-1}f===l?n=void 0:f!==0&&(n=n.subarray(f),t-=f)}}function he(e,n,t){let i=U();const r=new TextDecoder;return function(s,l){if(s.length===0)t==null||t(i),i=U();else if(l>0){const f=r.decode(s.subarray(0,l)),o=l+(s[l+1]===32?2:1),y=r.decode(s.subarray(o));switch(f){case"data":i.data=i.data?i.data+`
`+y:y;break;case"event":i.event=y;break;case"id":e(i.id=y);break;case"retry":const d=parseInt(y,10);isNaN(d)||n(i.retry=d);break}}}}function be(e,n){const t=new Uint8Array(e.length+n.length);return t.set(e),t.set(n,e.length),t}function U(){return{data:"",event:"",id:"",retry:void 0}}async function*q(e,n){var o,y;const{url:t,info:i}=await Q({...e,stream:!0},n),r=await((n==null?void 0:n.fetch)??fetch)(t,i);if((n==null?void 0:n.retry_on_error)!==!1&&r.status===503&&!(n!=null&&n.wait_for_model))return q(e,{...n,wait_for_model:!0});if(!r.ok){if((o=r.headers.get("Content-Type"))!=null&&o.startsWith("application/json")){const d=await r.json();if(d.error)throw new Error(d.error)}throw new Error(`Server response contains error: ${r.status}`)}if(!((y=r.headers.get("content-type"))!=null&&y.startsWith("text/event-stream")))throw new Error("Server does not support event stream content type, it returned "+r.headers.get("content-type"));if(!r.body)return;const a=r.body.getReader();let s=[];const f=we(he(()=>{},()=>{},d=>{s.push(d)}));try{for(;;){const{done:d,value:g}=await a.read();if(d)return;f(g);for(const p of s)if(p.data.length>0){const m=JSON.parse(p.data);if(typeof m=="object"&&m!==null&&"error"in m)throw new Error(m.error);yield m}s=[]}}finally{a.releaseLock()}}var c=class extends TypeError{constructor(e){super(`Invalid inference output: ${e}. Use the 'request' method with the same parameters to do a custom call with no type checking.`),this.name="InferenceOutputError"}};async function _e(e,n){const t=await u(e,{...n,taskHint:"audio-classification"});if(!(Array.isArray(t)&&t.every(r=>typeof r.label=="string"&&typeof r.score=="number")))throw new c("Expected Array<{label: string, score: number}>");return t}async function Ae(e,n){const t=await u(e,{...n,taskHint:"automatic-speech-recognition"});if(!(typeof(t==null?void 0:t.text)=="string"))throw new c("Expected {text: string}");return t}async function ve(e,n){const t=await u(e,{...n,taskHint:"text-to-speech"});if(!(t&&t instanceof Blob))throw new c("Expected Blob");return t}async function ke(e,n){const t=await u(e,{...n,taskHint:"audio-to-audio"});if(!(Array.isArray(t)&&t.every(r=>typeof r.label=="string"&&typeof r.blob=="string"&&typeof r["content-type"]=="string")))throw new c("Expected Array<{label: string, blob: string, content-type: string}>");return t}async function Oe(e,n){const t=await u(e,{...n,taskHint:"image-classification"});if(!(Array.isArray(t)&&t.every(r=>typeof r.label=="string"&&typeof r.score=="number")))throw new c("Expected Array<{label: string, score: number}>");return t}async function Ee(e,n){const t=await u(e,{...n,taskHint:"image-segmentation"});if(!(Array.isArray(t)&&t.every(r=>typeof r.label=="string"&&typeof r.mask=="string"&&typeof r.score=="number")))throw new c("Expected Array<{label: string, mask: string, score: number}>");return t}async function xe(e,n){var i;const t=(i=await u(e,{...n,taskHint:"image-to-text"}))==null?void 0:i[0];if(typeof(t==null?void 0:t.generated_text)!="string")throw new c("Expected {generated_text: string}");return t}async function Ve(e,n){const t=await u(e,{...n,taskHint:"object-detection"});if(!(Array.isArray(t)&&t.every(r=>typeof r.label=="string"&&typeof r.score=="number"&&typeof r.box.xmin=="number"&&typeof r.box.ymin=="number"&&typeof r.box.xmax=="number"&&typeof r.box.ymax=="number")))throw new c("Expected Array<{label:string; score:number; box:{xmin:number; ymin:number; xmax:number; ymax:number}}>");return t}async function $e(e,n){const t=await u(e,{...n,taskHint:"text-to-image"});if(!(t&&t instanceof Blob))throw new c("Expected Blob");return t}function V(e){if(globalThis.Buffer)return globalThis.Buffer.from(e).toString("base64");{const n=[];return e.forEach(t=>{n.push(String.fromCharCode(t))}),globalThis.btoa(n.join(""))}}async function Te(e,n){let t;e.parameters?t={...e,inputs:V(new Uint8Array(e.inputs instanceof ArrayBuffer?e.inputs:await e.inputs.arrayBuffer()))}:t={accessToken:e.accessToken,model:e.model,data:e.inputs};const i=await u(t,{...n,taskHint:"image-to-image"});if(!(i&&i instanceof Blob))throw new c("Expected Blob");return i}async function He(e,n){const t={...e,inputs:{image:V(new Uint8Array(e.inputs.image instanceof ArrayBuffer?e.inputs.image:await e.inputs.image.arrayBuffer()))}},i=await u(t,{...n,taskHint:"zero-shot-image-classification"});if(!(Array.isArray(i)&&i.every(a=>typeof a.label=="string"&&typeof a.score=="number")))throw new c("Expected Array<{label: string, score: number}>");return i}async function Ce(e,n){const t=await u(e,{...n,taskHint:"conversational"});if(!(Array.isArray(t.conversation.generated_responses)&&t.conversation.generated_responses.every(r=>typeof r=="string")&&Array.isArray(t.conversation.past_user_inputs)&&t.conversation.past_user_inputs.every(r=>typeof r=="string")&&typeof t.generated_text=="string"&&(typeof t.warnings>"u"||Array.isArray(t.warnings)&&t.warnings.every(r=>typeof r=="string"))))throw new c("Expected {conversation: {generated_responses: string[], past_user_inputs: string[]}, generated_text: string, warnings: string[]}");return t}async function Se(e,n){const t=e.model?await G(e.model,e.accessToken,n):void 0,i=await u(e,{...n,taskHint:"feature-extraction",...t==="sentence-similarity"&&{forceTask:"feature-extraction"}});let r=!0;const a=(s,l,f=0)=>f>l?!1:s.every(o=>Array.isArray(o))?s.every(o=>a(o,l,f+1)):s.every(o=>typeof o=="number");if(r=Array.isArray(i)&&a(i,3,0),!r)throw new c("Expected Array<number[][][] | number[][] | number[] | number>");return i}async function qe(e,n){const t=await u(e,{...n,taskHint:"fill-mask"});if(!(Array.isArray(t)&&t.every(r=>typeof r.score=="number"&&typeof r.sequence=="string"&&typeof r.token=="number"&&typeof r.token_str=="string")))throw new c("Expected Array<{score: number, sequence: string, token: number, token_str: string}>");return t}async function Be(e,n){const t=await u(e,{...n,taskHint:"question-answering"});if(!(typeof t=="object"&&!!t&&typeof t.answer=="string"&&typeof t.end=="number"&&typeof t.score=="number"&&typeof t.start=="number"))throw new c("Expected {answer: string, end: number, score: number, start: number}");return t}async function Ie(e,n){const t=e.model?await G(e.model,e.accessToken,n):void 0,i=await u(e,{...n,taskHint:"sentence-similarity",...t==="feature-extraction"&&{forceTask:"sentence-similarity"}});if(!(Array.isArray(i)&&i.every(a=>typeof a=="number")))throw new c("Expected number[]");return i}async function je(e,n){const t=await u(e,{...n,taskHint:"summarization"});if(!(Array.isArray(t)&&t.every(r=>typeof(r==null?void 0:r.summary_text)=="string")))throw new c("Expected Array<{summary_text: string}>");return t==null?void 0:t[0]}async function Ne(e,n){const t=await u(e,{...n,taskHint:"table-question-answering"});if(!(typeof(t==null?void 0:t.aggregator)=="string"&&typeof t.answer=="string"&&Array.isArray(t.cells)&&t.cells.every(r=>typeof r=="string")&&Array.isArray(t.coordinates)&&t.coordinates.every(r=>Array.isArray(r)&&r.every(a=>typeof a=="number"))))throw new c("Expected {aggregator: string, answer: string, cells: string[], coordinates: number[][]}");return t}async function Re(e,n){var r;const t=(r=await u(e,{...n,taskHint:"text-classification"}))==null?void 0:r[0];if(!(Array.isArray(t)&&t.every(a=>typeof(a==null?void 0:a.label)=="string"&&typeof a.score=="number")))throw new c("Expected Array<{label: string, score: number}>");return t}async function Ue(e,n){const t=await u(e,{...n,taskHint:"text-generation"});if(!(Array.isArray(t)&&t.every(r=>typeof(r==null?void 0:r.generated_text)=="string")))throw new c("Expected Array<{generated_text: string}>");return t==null?void 0:t[0]}async function*ze(e,n){yield*q(e,{...n,taskHint:"text-generation"})}function B(e){return Array.isArray(e)?e:[e]}async function Le(e,n){const t=B(await u(e,{...n,taskHint:"token-classification"}));if(!(Array.isArray(t)&&t.every(r=>typeof r.end=="number"&&typeof r.entity_group=="string"&&typeof r.score=="number"&&typeof r.start=="number"&&typeof r.word=="string")))throw new c("Expected Array<{end: number, entity_group: string, score: number, start: number, word: string}>");return t}async function Pe(e,n){const t=await u(e,{...n,taskHint:"translation"});if(!(Array.isArray(t)&&t.every(r=>typeof(r==null?void 0:r.translation_text)=="string")))throw new c("Expected type Array<{translation_text: string}>");return t==null?void 0:t[0]}async function Me(e,n){const t=B(await u(e,{...n,taskHint:"zero-shot-classification"}));if(!(Array.isArray(t)&&t.every(r=>Array.isArray(r.labels)&&r.labels.every(a=>typeof a=="string")&&Array.isArray(r.scores)&&r.scores.every(a=>typeof a=="number")&&typeof r.sequence=="string")))throw new c("Expected Array<{labels: string[], scores: number[], sequence: string}>");return t}async function De(e,n){var a;const t={...e,inputs:{question:e.inputs.question,image:V(new Uint8Array(e.inputs.image instanceof ArrayBuffer?e.inputs.image:await e.inputs.image.arrayBuffer()))}},i=(a=B(await u(t,{...n,taskHint:"document-question-answering"})))==null?void 0:a[0];if(!(typeof(i==null?void 0:i.answer)=="string"&&(typeof i.end=="number"||typeof i.end>"u")&&(typeof i.score=="number"||typeof i.score>"u")&&(typeof i.start=="number"||typeof i.start>"u")))throw new c("Expected Array<{answer: string, end?: number, score?: number, start?: number}>");return i}async function Fe(e,n){var a;const t={...e,inputs:{question:e.inputs.question,image:V(new Uint8Array(e.inputs.image instanceof ArrayBuffer?e.inputs.image:await e.inputs.image.arrayBuffer()))}},i=(a=await u(t,{...n,taskHint:"visual-question-answering"}))==null?void 0:a[0];if(!(typeof(i==null?void 0:i.answer)=="string"&&typeof i.score=="number"))throw new c("Expected Array<{answer: string, score: number}>");return i}async function Ge(e,n){const t=await u(e,{...n,taskHint:"tabular-regression"});if(!(Array.isArray(t)&&t.every(r=>typeof r=="number")))throw new c("Expected number[]");return t}async function Qe(e,n){const t=await u(e,{...n,taskHint:"tabular-classification"});if(!(Array.isArray(t)&&t.every(r=>typeof r=="number")))throw new c("Expected number[]");return t}var We=class{constructor(e="",n={}){k(this,"accessToken");k(this,"defaultOptions");this.accessToken=e,this.defaultOptions=n;for(const[t,i]of Object.entries(S))Object.defineProperty(this,t,{enumerable:!1,value:(r,a)=>i({...r,accessToken:e},{...n,...a})})}endpoint(e){return new Xe(e,this.accessToken,this.defaultOptions)}},Xe=class{constructor(e,n="",t={}){for(const[i,r]of Object.entries(S))Object.defineProperty(this,i,{enumerable:!1,value:(a,s)=>r({...a,accessToken:n,model:e},{...t,...s})})}};function Je(e){let n;return{c(){n=Z("main"),n.innerHTML=""},m(t,i){Y(t,n,i)},p:_,i:_,o:_,d(t){t&&P(n)}}}function Ke(e){return new We({}.VITE_HUGGING_FACE_ACCESS_TOKEN),[]}class Ye extends le{constructor(n){super(),fe(this,n,Ke,Je,J,{})}}new Ye({target:document.getElementById("app")});
