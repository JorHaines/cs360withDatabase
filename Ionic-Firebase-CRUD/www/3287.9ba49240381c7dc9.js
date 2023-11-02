"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[3287],{3287:(q,O,h)=>{h.r(O),h.d(O,{startInputShims:()=>X});var y=h(5861),C=h(8360),m=h(839),K=h(7484);h(4874),h(6225);const A=new WeakMap,I=(e,t,s,n=0,o=!1)=>{A.has(e)!==s&&(s?k(e,t,n,o):H(e,t))},k=(e,t,s,n=!1)=>{const o=t.parentNode,r=t.cloneNode(!1);r.classList.add("cloned-input"),r.tabIndex=-1,n&&(r.disabled=!0),o.appendChild(r),A.set(e,r);const c="rtl"===e.ownerDocument.dir?9999:-9999;e.style.pointerEvents="none",t.style.transform=`translate3d(${c}px,${s}px,0) scale(0)`},H=(e,t)=>{const s=A.get(e);s&&(A.delete(e),s.remove()),e.style.pointerEvents="",t.style.transform=""},P="input, textarea, [no-blur], [contenteditable]",U="$ionPaddingTimer",T=(e,t,s)=>{const n=e[U];n&&clearTimeout(n),t>0?e.style.setProperty("--keyboard-offset",`${t}px`):e[U]=setTimeout(()=>{e.style.setProperty("--keyboard-offset","0px"),s&&s()},120)},N=(e,t,s)=>{e.addEventListener("focusout",()=>{t&&T(t,0,s)},{once:!0})};let D=0;const p="data-ionic-skip-scroll-assist",V=(e,t,s,n,o,r,a,c=!1)=>{const i=r&&(void 0===a||a.mode===K.a.None),S=function(){var u=(0,y.Z)(function*(){t.hasAttribute(p)?t.removeAttribute(p):J(e,t,s,n,o,i,c)});return function(){return u.apply(this,arguments)}}();return e.addEventListener("focusin",S,!0),()=>{e.removeEventListener("focusin",S,!0)}},w=e=>{document.activeElement!==e&&(e.setAttribute(p,"true"),e.focus())},J=function(){var e=(0,y.Z)(function*(t,s,n,o,r,a,c=!1){if(!n&&!o)return;const i=((e,t,s)=>{var n;return((e,t,s,n)=>{const o=e.top,r=e.bottom,a=t.top,i=a+15,u=Math.min(t.bottom,n-s)-50-r,v=i-o,l=Math.round(u<0?-u:v>0?-v:0),_=Math.min(l,o-a),M=Math.abs(_)/.3;return{scrollAmount:_,scrollDuration:Math.min(400,Math.max(150,M)),scrollPadding:s,inputSafeY:4-(o-i)}})((null!==(n=e.closest("ion-item,[ion-item]"))&&void 0!==n?n:e).getBoundingClientRect(),t.getBoundingClientRect(),s,e.ownerDocument.defaultView.innerHeight)})(t,n||o,r);if(n&&Math.abs(i.scrollAmount)<4)return w(s),void(a&&null!==n&&(T(n,D),N(s,n,()=>D=0)));if(I(t,s,!0,i.inputSafeY,c),w(s),(0,m.r)(()=>t.click()),a&&n&&(D=i.scrollPadding,T(n,D)),typeof window<"u"){let S;const u=function(){var l=(0,y.Z)(function*(){void 0!==S&&clearTimeout(S),window.removeEventListener("ionKeyboardDidShow",v),window.removeEventListener("ionKeyboardDidShow",u),n&&(yield(0,C.c)(n,0,i.scrollAmount,i.scrollDuration)),I(t,s,!1,i.inputSafeY),w(s),a&&N(s,n,()=>D=0)});return function(){return l.apply(this,arguments)}}(),v=()=>{window.removeEventListener("ionKeyboardDidShow",v),window.addEventListener("ionKeyboardDidShow",u)};if(n){const l=yield(0,C.g)(n);if(i.scrollAmount>l.scrollHeight-l.clientHeight-l.scrollTop)return"password"===s.type?(i.scrollAmount+=50,window.addEventListener("ionKeyboardDidShow",v)):window.addEventListener("ionKeyboardDidShow",u),void(S=setTimeout(u,1e3))}u()}});return function(s,n,o,r,a,c){return e.apply(this,arguments)}}(),X=function(){var e=(0,y.Z)(function*(t,s){const n=document,o="ios"===s,r="android"===s,a=t.getNumber("keyboardHeight",290),c=t.getBoolean("scrollAssist",!0),i=t.getBoolean("hideCaretOnScroll",o),S=t.getBoolean("inputBlurring",o),u=t.getBoolean("scrollPadding",!0),v=Array.from(n.querySelectorAll("ion-input, ion-textarea")),l=new WeakMap,_=new WeakMap,F=yield K.K.getResizeMode(),M=function(){var f=(0,y.Z)(function*(d){yield new Promise(b=>(0,m.c)(d,b));const x=d.shadowRoot||d,g=x.querySelector("input")||x.querySelector("textarea"),L=(0,C.f)(d),W=L?null:d.closest("ion-footer");if(g){if(L&&i&&!l.has(d)){const b=((e,t,s)=>{if(!s||!t)return()=>{};const n=c=>{(e=>e===e.getRootNode().activeElement)(t)&&I(e,t,c)},o=()=>I(e,t,!1),r=()=>n(!0),a=()=>n(!1);return(0,m.a)(s,"ionScrollStart",r),(0,m.a)(s,"ionScrollEnd",a),t.addEventListener("blur",o),()=>{(0,m.b)(s,"ionScrollStart",r),(0,m.b)(s,"ionScrollEnd",a),t.removeEventListener("blur",o)}})(d,g,L);l.set(d,b)}if("date"!==g.type&&"datetime-local"!==g.type&&(L||W)&&c&&!_.has(d)){const b=V(d,g,L,W,a,u,F,r);_.set(d,b)}}});return function(x){return f.apply(this,arguments)}}();S&&(()=>{let e=!0,t=!1;const s=document;(0,m.a)(s,"ionScrollStart",()=>{t=!0}),s.addEventListener("focusin",()=>{e=!0},!0),s.addEventListener("touchend",a=>{if(t)return void(t=!1);const c=s.activeElement;if(!c||c.matches(P))return;const i=a.target;i!==c&&(i.matches(P)||i.closest(P)||(e=!1,setTimeout(()=>{e||c.blur()},50)))},!1)})();for(const f of v)M(f);n.addEventListener("ionInputDidLoad",f=>{M(f.detail)}),n.addEventListener("ionInputDidUnload",f=>{(f=>{if(i){const d=l.get(f);d&&d(),l.delete(f)}if(c){const d=_.get(f);d&&d(),_.delete(f)}})(f.detail)})});return function(s,n){return e.apply(this,arguments)}}()}}]);