"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[549],{54465:function(e,t,n){n.d(t,{J:function(){return d}});var r="https://js.stripe.com/v3",o=/^https:\/\/js\.stripe\.com\/v3\/?(\?.*)?$/,i="loadStripe.setLoadParameters was called but an existing Stripe.js script already exists in the document; existing script parameters will be used",a=null,l=function(e){return null!==a||(a=new Promise((function(t,n){if("undefined"!==typeof window)if(window.Stripe&&e&&console.warn(i),window.Stripe)t(window.Stripe);else try{var a=function(){for(var e=document.querySelectorAll('script[src^="'.concat(r,'"]')),t=0;t<e.length;t++){var n=e[t];if(o.test(n.src))return n}return null}();a&&e?console.warn(i):a||(a=function(e){var t=e&&!e.advancedFraudSignals?"?advancedFraudSignals=false":"",n=document.createElement("script");n.src="".concat(r).concat(t);var o=document.head||document.body;if(!o)throw new Error("Expected document.body not to be null. Stripe.js requires a <body> element.");return o.appendChild(n),n}(e)),a.addEventListener("load",(function(){window.Stripe?t(window.Stripe):n(new Error("Stripe.js not available"))})),a.addEventListener("error",(function(){n(new Error("Failed to load Stripe.js"))}))}catch(l){return void n(l)}else t(null)}))),a},s=function(e,t,n){if(null===e)return null;var r=e.apply(void 0,t);return function(e,t){e&&e._registerWrapper&&e._registerWrapper({name:"stripe-js",version:"1.46.0",startTime:t})}(r,n),r},u=Promise.resolve().then((function(){return l(null)})),c=!1;u.catch((function(e){c||console.warn(e)}));var d=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];c=!0;var r=Date.now();return u.then((function(e){return s(e,t,r)}))}},64729:function(e,t,n){n.d(t,{R:function(){return B}});var r,o,i=n(67294),a=n(94192),l=n(19946),s=n(16723),u=n(71646),c=n(23784),d=n(35748),p=n(32984),f=n(9362),v=n(61363),b=n(11497),g=n(64103),m=n(84575),x=n(16567),h=n(14157),R=n(39650),y=n(46045),w=n(18689),O=n(15466),S=n(73781),E=n(31147),I=n(3855),T=n(40476),C=((o=C||{})[o.Open=0]="Open",o[o.Closed=1]="Closed",o),L=(e=>(e[e.Single=0]="Single",e[e.Multi=1]="Multi",e))(L||{}),A=(e=>(e[e.Pointer=0]="Pointer",e[e.Other=1]="Other",e))(A||{}),P=((r=P||{})[r.OpenListbox=0]="OpenListbox",r[r.CloseListbox=1]="CloseListbox",r[r.GoToOption=2]="GoToOption",r[r.Search=3]="Search",r[r.ClearSearch=4]="ClearSearch",r[r.RegisterOption=5]="RegisterOption",r[r.UnregisterOption=6]="UnregisterOption",r[r.RegisterLabel=7]="RegisterLabel",r);function k(e,t=(e=>e)){let n=null!==e.activeOptionIndex?e.options[e.activeOptionIndex]:null,r=(0,m.z2)(t(e.options.slice()),(e=>e.dataRef.current.domRef.current)),o=n?r.indexOf(n):null;return-1===o&&(o=null),{options:r,activeOptionIndex:o}}let D={1:e=>e.dataRef.current.disabled||1===e.listboxState?e:{...e,activeOptionIndex:null,listboxState:1},0(e){if(e.dataRef.current.disabled||0===e.listboxState)return e;let t=e.activeOptionIndex,{isSelected:n}=e.dataRef.current,r=e.options.findIndex((e=>n(e.dataRef.current.value)));return-1!==r&&(t=r),{...e,listboxState:0,activeOptionIndex:t}},2(e,t){var n;if(e.dataRef.current.disabled||1===e.listboxState)return e;let r=k(e),o=(0,b.d)(t,{resolveItems:()=>r.options,resolveActiveIndex:()=>r.activeOptionIndex,resolveId:e=>e.id,resolveDisabled:e=>e.dataRef.current.disabled});return{...e,...r,searchQuery:"",activeOptionIndex:o,activationTrigger:null!=(n=t.trigger)?n:1}},3:(e,t)=>{if(e.dataRef.current.disabled||1===e.listboxState)return e;let n=""!==e.searchQuery?0:1,r=e.searchQuery+t.value.toLowerCase(),o=(null!==e.activeOptionIndex?e.options.slice(e.activeOptionIndex+n).concat(e.options.slice(0,e.activeOptionIndex+n)):e.options).find((e=>{var t;return!e.dataRef.current.disabled&&(null==(t=e.dataRef.current.textValue)?void 0:t.startsWith(r))})),i=o?e.options.indexOf(o):-1;return-1===i||i===e.activeOptionIndex?{...e,searchQuery:r}:{...e,searchQuery:r,activeOptionIndex:i,activationTrigger:1}},4:e=>e.dataRef.current.disabled||1===e.listboxState||""===e.searchQuery?e:{...e,searchQuery:""},5:(e,t)=>{let n={id:t.id,dataRef:t.dataRef},r=k(e,(e=>[...e,n]));return null===e.activeOptionIndex&&e.dataRef.current.isSelected(t.dataRef.current.value)&&(r.activeOptionIndex=r.options.indexOf(n)),{...e,...r}},6:(e,t)=>{let n=k(e,(e=>{let n=e.findIndex((e=>e.id===t.id));return-1!==n&&e.splice(n,1),e}));return{...e,...n,activationTrigger:1}},7:(e,t)=>({...e,labelId:t.id})},_=(0,i.createContext)(null);function z(e){let t=(0,i.useContext)(_);if(null===t){let t=new Error(`<${e} /> is missing a parent <Listbox /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(t,z),t}return t}_.displayName="ListboxActionsContext";let M=(0,i.createContext)(null);function N(e){let t=(0,i.useContext)(M);if(null===t){let t=new Error(`<${e} /> is missing a parent <Listbox /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(t,N),t}return t}function V(e,t){return(0,p.E)(t.type,D,e,t)}M.displayName="ListboxDataContext";let F=i.Fragment,Z=(0,d.yV)((function(e,t){let{value:n,defaultValue:r,name:o,onChange:l,by:u=((e,t)=>e===t),disabled:f=!1,horizontal:v=!1,multiple:g=!1,...h}=e;const O=v?"horizontal":"vertical";let I=(0,c.T)(t),[T=(g?[]:void 0),C]=(0,E.q)(n,l,r),[L,A]=(0,i.useReducer)(V,{dataRef:(0,i.createRef)(),listboxState:1,options:[],searchQuery:"",labelId:null,activeOptionIndex:null,activationTrigger:1}),P=(0,i.useRef)({static:!1,hold:!1}),k=(0,i.useRef)(null),D=(0,i.useRef)(null),z=(0,i.useRef)(null),N=(0,S.z)("string"==typeof u?(e,t)=>{let n=u;return(null==e?void 0:e[n])===(null==t?void 0:t[n])}:u),Z=(0,i.useCallback)((e=>(0,p.E)(U.mode,{1:()=>T.some((t=>N(t,e))),0:()=>N(T,e)})),[T]),U=(0,i.useMemo)((()=>({...L,value:T,disabled:f,mode:g?1:0,orientation:O,compare:N,isSelected:Z,optionsPropsRef:P,labelRef:k,buttonRef:D,optionsRef:z})),[T,f,g,L]);(0,s.e)((()=>{L.dataRef.current=U}),[U]),(0,R.O)([U.buttonRef,U.optionsRef],((e,t)=>{var n;A({type:1}),(0,m.sP)(t,m.tJ.Loose)||(e.preventDefault(),null==(n=U.buttonRef.current)||n.focus())}),0===U.listboxState);let j=(0,i.useMemo)((()=>({open:0===U.listboxState,disabled:f,value:T})),[U,f,T]),$=(0,S.z)((e=>{let t=U.options.find((t=>t.id===e));!t||H(t.dataRef.current.value)})),Q=(0,S.z)((()=>{if(null!==U.activeOptionIndex){let{dataRef:e,id:t}=U.options[U.activeOptionIndex];H(e.current.value),A({type:2,focus:b.T.Specific,id:t})}})),W=(0,S.z)((()=>A({type:0}))),B=(0,S.z)((()=>A({type:1}))),Y=(0,S.z)(((e,t,n)=>e===b.T.Specific?A({type:2,focus:b.T.Specific,id:t,trigger:n}):A({type:2,focus:e,trigger:n}))),q=(0,S.z)(((e,t)=>(A({type:5,id:e,dataRef:t}),()=>A({type:6,id:e})))),G=(0,S.z)((e=>(A({type:7,id:e}),()=>A({type:7,id:null})))),H=(0,S.z)((e=>(0,p.E)(U.mode,{0:()=>null==C?void 0:C(e),1(){let t=U.value.slice(),n=t.findIndex((t=>N(t,e)));return-1===n?t.push(e):t.splice(n,1),null==C?void 0:C(t)}}))),K=(0,S.z)((e=>A({type:3,value:e}))),J=(0,S.z)((()=>A({type:4}))),X=(0,i.useMemo)((()=>({onChange:H,registerOption:q,registerLabel:G,goToOption:Y,closeListbox:B,openListbox:W,selectActiveOption:Q,selectOption:$,search:K,clearSearch:J})),[]),ee={ref:I},te=(0,i.useRef)(null),ne=(0,a.G)();return(0,i.useEffect)((()=>{!te.current||void 0!==r&&ne.addEventListener(te.current,"reset",(()=>{H(r)}))}),[te,H]),i.createElement(_.Provider,{value:X},i.createElement(M.Provider,{value:U},i.createElement(x.up,{value:(0,p.E)(U.listboxState,{0:x.ZM.Open,1:x.ZM.Closed})},null!=o&&null!=T&&(0,w.t)({[o]:T}).map((([e,t],n)=>i.createElement(y._,{features:y.A.Hidden,ref:0===n?e=>{var t;te.current=null!=(t=null==e?void 0:e.closest("form"))?t:null}:void 0,...(0,d.oA)({key:e,as:"input",type:"hidden",hidden:!0,readOnly:!0,name:e,value:t})}))),(0,d.sY)({ourProps:ee,theirProps:h,slot:j,defaultTag:F,name:"Listbox"}))))})),U=(0,d.yV)((function(e,t){var n;let r=(0,l.M)(),{id:o=`headlessui-listbox-button-${r}`,...s}=e,p=N("Listbox.Button"),f=z("Listbox.Button"),m=(0,c.T)(p.buttonRef,t),x=(0,a.G)(),R=(0,S.z)((e=>{switch(e.key){case v.R.Space:case v.R.Enter:case v.R.ArrowDown:e.preventDefault(),f.openListbox(),x.nextFrame((()=>{p.value||f.goToOption(b.T.First)}));break;case v.R.ArrowUp:e.preventDefault(),f.openListbox(),x.nextFrame((()=>{p.value||f.goToOption(b.T.Last)}))}})),y=(0,S.z)((e=>{if(e.key===v.R.Space)e.preventDefault()})),w=(0,S.z)((e=>{if((0,g.P)(e.currentTarget))return e.preventDefault();0===p.listboxState?(f.closeListbox(),x.nextFrame((()=>{var e;return null==(e=p.buttonRef.current)?void 0:e.focus({preventScroll:!0})}))):(e.preventDefault(),f.openListbox())})),O=(0,u.v)((()=>{if(p.labelId)return[p.labelId,o].join(" ")}),[p.labelId,o]),E=(0,i.useMemo)((()=>({open:0===p.listboxState,disabled:p.disabled,value:p.value})),[p]),I={ref:m,id:o,type:(0,h.f)(e,p.buttonRef),"aria-haspopup":!0,"aria-controls":null==(n=p.optionsRef.current)?void 0:n.id,"aria-expanded":p.disabled?void 0:0===p.listboxState,"aria-labelledby":O,disabled:p.disabled,onKeyDown:R,onKeyUp:y,onClick:w};return(0,d.sY)({ourProps:I,theirProps:s,slot:E,defaultTag:"button",name:"Listbox.Button"})})),j=(0,d.yV)((function(e,t){let n=(0,l.M)(),{id:r=`headlessui-listbox-label-${n}`,...o}=e,a=N("Listbox.Label"),u=z("Listbox.Label"),p=(0,c.T)(a.labelRef,t);(0,s.e)((()=>u.registerLabel(r)),[r]);let f=(0,S.z)((()=>{var e;return null==(e=a.buttonRef.current)?void 0:e.focus({preventScroll:!0})})),v=(0,i.useMemo)((()=>({open:0===a.listboxState,disabled:a.disabled})),[a]);return(0,d.sY)({ourProps:{ref:p,id:r,onClick:f},theirProps:o,slot:v,defaultTag:"label",name:"Listbox.Label"})})),$=d.AN.RenderStrategy|d.AN.Static,Q=(0,d.yV)((function(e,t){var n;let r=(0,l.M)(),{id:o=`headlessui-listbox-options-${r}`,...s}=e,g=N("Listbox.Options"),m=z("Listbox.Options"),h=(0,c.T)(g.optionsRef,t),R=(0,a.G)(),y=(0,a.G)(),w=(0,x.oJ)(),E=null!==w?w===x.ZM.Open:0===g.listboxState;(0,i.useEffect)((()=>{var e;let t=g.optionsRef.current;!t||0===g.listboxState&&t!==(null==(e=(0,O.r)(t))?void 0:e.activeElement)&&t.focus({preventScroll:!0})}),[g.listboxState,g.optionsRef]);let I=(0,S.z)((e=>{switch(y.dispose(),e.key){case v.R.Space:if(""!==g.searchQuery)return e.preventDefault(),e.stopPropagation(),m.search(e.key);case v.R.Enter:if(e.preventDefault(),e.stopPropagation(),null!==g.activeOptionIndex){let{dataRef:e}=g.options[g.activeOptionIndex];m.onChange(e.current.value)}0===g.mode&&(m.closeListbox(),(0,f.k)().nextFrame((()=>{var e;return null==(e=g.buttonRef.current)?void 0:e.focus({preventScroll:!0})})));break;case(0,p.E)(g.orientation,{vertical:v.R.ArrowDown,horizontal:v.R.ArrowRight}):return e.preventDefault(),e.stopPropagation(),m.goToOption(b.T.Next);case(0,p.E)(g.orientation,{vertical:v.R.ArrowUp,horizontal:v.R.ArrowLeft}):return e.preventDefault(),e.stopPropagation(),m.goToOption(b.T.Previous);case v.R.Home:case v.R.PageUp:return e.preventDefault(),e.stopPropagation(),m.goToOption(b.T.First);case v.R.End:case v.R.PageDown:return e.preventDefault(),e.stopPropagation(),m.goToOption(b.T.Last);case v.R.Escape:return e.preventDefault(),e.stopPropagation(),m.closeListbox(),R.nextFrame((()=>{var e;return null==(e=g.buttonRef.current)?void 0:e.focus({preventScroll:!0})}));case v.R.Tab:e.preventDefault(),e.stopPropagation();break;default:1===e.key.length&&(m.search(e.key),y.setTimeout((()=>m.clearSearch()),350))}})),T=(0,u.v)((()=>{var e,t,n;return null!=(n=null==(e=g.labelRef.current)?void 0:e.id)?n:null==(t=g.buttonRef.current)?void 0:t.id}),[g.labelRef.current,g.buttonRef.current]),C=(0,i.useMemo)((()=>({open:0===g.listboxState})),[g]),L={"aria-activedescendant":null===g.activeOptionIndex||null==(n=g.options[g.activeOptionIndex])?void 0:n.id,"aria-multiselectable":1===g.mode||void 0,"aria-labelledby":T,"aria-orientation":g.orientation,id:o,onKeyDown:I,role:"listbox",tabIndex:0,ref:h};return(0,d.sY)({ourProps:L,theirProps:s,slot:C,defaultTag:"ul",features:$,visible:E,name:"Listbox.Options"})})),W=(0,d.yV)((function(e,t){let n=(0,l.M)(),{id:r=`headlessui-listbox-option-${n}`,disabled:o=!1,value:a,...u}=e,p=N("Listbox.Option"),v=z("Listbox.Option"),g=null!==p.activeOptionIndex&&p.options[p.activeOptionIndex].id===r,m=p.isSelected(a),x=(0,i.useRef)(null),h=(0,I.E)({disabled:o,value:a,domRef:x,get textValue(){var e,t;return null==(t=null==(e=x.current)?void 0:e.textContent)?void 0:t.toLowerCase()}}),R=(0,c.T)(t,x);(0,s.e)((()=>{if(0!==p.listboxState||!g||0===p.activationTrigger)return;let e=(0,f.k)();return e.requestAnimationFrame((()=>{var e,t;null==(t=null==(e=x.current)?void 0:e.scrollIntoView)||t.call(e,{block:"nearest"})})),e.dispose}),[x,g,p.listboxState,p.activationTrigger,p.activeOptionIndex]),(0,s.e)((()=>v.registerOption(r,h)),[h,r]);let y=(0,S.z)((e=>{if(o)return e.preventDefault();v.onChange(a),0===p.mode&&(v.closeListbox(),(0,f.k)().nextFrame((()=>{var e;return null==(e=p.buttonRef.current)?void 0:e.focus({preventScroll:!0})})))})),w=(0,S.z)((()=>{if(o)return v.goToOption(b.T.Nothing);v.goToOption(b.T.Specific,r)})),O=(0,T.g)(),E=(0,S.z)((e=>O.update(e))),C=(0,S.z)((e=>{!O.wasMoved(e)||o||g||v.goToOption(b.T.Specific,r,0)})),L=(0,S.z)((e=>{!O.wasMoved(e)||o||!g||v.goToOption(b.T.Nothing)})),A=(0,i.useMemo)((()=>({active:g,selected:m,disabled:o})),[g,m,o]);return(0,d.sY)({ourProps:{id:r,ref:R,role:"option",tabIndex:!0===o?void 0:-1,"aria-disabled":!0===o||void 0,"aria-selected":m,disabled:void 0,onClick:y,onFocus:w,onPointerEnter:E,onMouseEnter:E,onPointerMove:C,onMouseMove:C,onPointerLeave:L,onMouseLeave:L},theirProps:u,slot:A,defaultTag:"li",name:"Listbox.Option"})})),B=Object.assign(Z,{Button:U,Label:j,Options:Q,Option:W})},71646:function(e,t,n){n.d(t,{v:function(){return a}});var r=n(67294),o=n(16723),i=n(3855);function a(e,t){let[n,a]=(0,r.useState)(e),l=(0,i.E)(e);return(0,o.e)((()=>a(l.current)),[l,a,...t]),n}},31147:function(e,t,n){n.d(t,{q:function(){return i}});var r=n(67294),o=n(73781);function i(e,t,n){let[i,a]=(0,r.useState)(n),l=void 0!==e,s=(0,r.useRef)(l),u=(0,r.useRef)(!1),c=(0,r.useRef)(!1);return!l||s.current||u.current?!l&&s.current&&!c.current&&(c.current=!0,s.current=l,console.error("A component is changing from controlled to uncontrolled. This may be caused by the value changing from a defined value to undefined, which should not happen.")):(u.current=!0,s.current=l,console.error("A component is changing from uncontrolled to controlled. This may be caused by the value changing from undefined to a defined value, which should not happen.")),[l?e:i,(0,o.z)((e=>(l||a(e),null==t?void 0:t(e))))]}},40476:function(e,t,n){n.d(t,{g:function(){return i}});var r=n(67294);function o(e){return[e.screenX,e.screenY]}function i(){let e=(0,r.useRef)([-1,-1]);return{wasMoved(t){let n=o(t);return(e.current[0]!==n[0]||e.current[1]!==n[1])&&(e.current=n,!0)},update(t){e.current=o(t)}}}},11497:function(e,t,n){n.d(t,{T:function(){return o},d:function(){return i}});var r,o=((r=o||{})[r.First=0]="First",r[r.Previous=1]="Previous",r[r.Next=2]="Next",r[r.Last=3]="Last",r[r.Specific=4]="Specific",r[r.Nothing=5]="Nothing",r);function i(e,t){let n=t.resolveItems();if(n.length<=0)return null;let r=t.resolveActiveIndex(),o=null!=r?r:-1,i=(()=>{switch(e.focus){case 0:return n.findIndex((e=>!t.resolveDisabled(e)));case 1:{let e=n.slice().reverse().findIndex(((e,n,r)=>!(-1!==o&&r.length-n-1>=o)&&!t.resolveDisabled(e)));return-1===e?e:n.length-1-e}case 2:return n.findIndex(((e,n)=>!(n<=o)&&!t.resolveDisabled(e)));case 3:{let e=n.slice().reverse().findIndex((e=>!t.resolveDisabled(e)));return-1===e?e:n.length-1-e}case 4:return n.findIndex((n=>t.resolveId(n)===e.id));case 5:return null;default:!function(e){throw new Error("Unexpected object: "+e)}(e)}})();return-1===i?r:i}},18689:function(e,t,n){function r(e={},t=null,n=[]){for(let[r,a]of Object.entries(e))i(n,o(t,r),a);return n}function o(e,t){return e?e+"["+t+"]":t}function i(e,t,n){if(Array.isArray(n))for(let[r,a]of n.entries())i(e,o(t,r.toString()),a);else n instanceof Date?e.push([t,n.toISOString()]):"boolean"==typeof n?e.push([t,n?"1":"0"]):"string"==typeof n?e.push([t,n]):"number"==typeof n?e.push([t,`${n}`]):null==n?e.push([t,""]):r(n,t,e)}function a(e){var t;let n=null!=(t=null==e?void 0:e.form)?t:e.closest("form");if(n)for(let r of n.elements)if("INPUT"===r.tagName&&"submit"===r.type||"BUTTON"===r.tagName&&"submit"===r.type||"INPUT"===r.nodeName&&"image"===r.type)return void r.click()}n.d(t,{g:function(){return a},t:function(){return r}})},47398:function(e,t,n){n.d(t,{VY:function(){return ue},h4:function(){return le},ck:function(){return ae},fC:function(){return ie},xz:function(){return se}});var r=n(87462),o=n(67294),i=n(25360),a=n(65936),l=n(28771),s=n(36206),u=n(77342),c=n(75320),d=n(9981),p=n(29115),f=n(91276);const v="Collapsible",[b,g]=(0,i.b)(v),[m,x]=b(v),h=(0,o.forwardRef)(((e,t)=>{const{__scopeCollapsible:n,open:i,defaultOpen:a,disabled:l,onOpenChange:s,...d}=e,[p=!1,v]=(0,u.T)({prop:i,defaultProp:a,onChange:s});return(0,o.createElement)(m,{scope:n,disabled:l,contentId:(0,f.M)(),open:p,onOpenToggle:(0,o.useCallback)((()=>v((e=>!e))),[v])},(0,o.createElement)(c.WV.div,(0,r.Z)({"data-state":E(p),"data-disabled":l?"":void 0},d,{ref:t})))})),R="CollapsibleTrigger",y=(0,o.forwardRef)(((e,t)=>{const{__scopeCollapsible:n,...i}=e,a=x(R,n);return(0,o.createElement)(c.WV.button,(0,r.Z)({type:"button","aria-controls":a.contentId,"aria-expanded":a.open||!1,"data-state":E(a.open),"data-disabled":a.disabled?"":void 0,disabled:a.disabled},i,{ref:t,onClick:(0,s.M)(e.onClick,a.onOpenToggle)}))})),w="CollapsibleContent",O=(0,o.forwardRef)(((e,t)=>{const{forceMount:n,...i}=e,a=x(w,e.__scopeCollapsible);return(0,o.createElement)(p.z,{present:n||a.open},(({present:e})=>(0,o.createElement)(S,(0,r.Z)({},i,{ref:t,present:e}))))})),S=(0,o.forwardRef)(((e,t)=>{const{__scopeCollapsible:n,present:i,children:a,...s}=e,u=x(w,n),[p,f]=(0,o.useState)(i),v=(0,o.useRef)(null),b=(0,l.e)(t,v),g=(0,o.useRef)(0),m=g.current,h=(0,o.useRef)(0),R=h.current,y=u.open||p,O=(0,o.useRef)(y),S=(0,o.useRef)();return(0,o.useEffect)((()=>{const e=requestAnimationFrame((()=>O.current=!1));return()=>cancelAnimationFrame(e)}),[]),(0,d.b)((()=>{const e=v.current;if(e){S.current=S.current||{transitionDuration:e.style.transitionDuration,animationName:e.style.animationName},e.style.transitionDuration="0s",e.style.animationName="none";const t=e.getBoundingClientRect();g.current=t.height,h.current=t.width,O.current||(e.style.transitionDuration=S.current.transitionDuration,e.style.animationName=S.current.animationName),f(i)}}),[u.open,i]),(0,o.createElement)(c.WV.div,(0,r.Z)({"data-state":E(u.open),"data-disabled":u.disabled?"":void 0,id:u.contentId,hidden:!y},s,{ref:b,style:{"--radix-collapsible-content-height":m?`${m}px`:void 0,"--radix-collapsible-content-width":R?`${R}px`:void 0,...e.style}}),y&&a)}));function E(e){return e?"open":"closed"}const I=h,T=y,C=O;var L=n(78990);const A="Accordion",P=["Home","End","ArrowDown","ArrowUp","ArrowLeft","ArrowRight"],[k,D,_]=(0,a.B)(A),[z,M]=(0,i.b)(A,[_,g]),N=g(),V=o.forwardRef(((e,t)=>{const{type:n,...i}=e,a=i,l=i;return o.createElement(k.Provider,{scope:e.__scopeAccordion},"multiple"===n?o.createElement(Q,(0,r.Z)({},l,{ref:t})):o.createElement($,(0,r.Z)({},a,{ref:t})))}));V.propTypes={type(e){const t=e.value||e.defaultValue;return e.type&&!["single","multiple"].includes(e.type)?new Error("Invalid prop `type` supplied to `Accordion`. Expected one of `single | multiple`."):"multiple"===e.type&&"string"===typeof t?new Error("Invalid prop `type` supplied to `Accordion`. Expected `single` when `defaultValue` or `value` is type `string`."):"single"===e.type&&Array.isArray(t)?new Error("Invalid prop `type` supplied to `Accordion`. Expected `multiple` when `defaultValue` or `value` is type `string[]`."):null}};const[F,Z]=z(A),[U,j]=z(A,{collapsible:!1}),$=o.forwardRef(((e,t)=>{const{value:n,defaultValue:i,onValueChange:a=(()=>{}),collapsible:l=!1,...s}=e,[c,d]=(0,u.T)({prop:n,defaultProp:i,onChange:a});return o.createElement(F,{scope:e.__scopeAccordion,value:c?[c]:[],onItemOpen:d,onItemClose:o.useCallback((()=>l&&d("")),[l,d])},o.createElement(U,{scope:e.__scopeAccordion,collapsible:l},o.createElement(Y,(0,r.Z)({},s,{ref:t}))))})),Q=o.forwardRef(((e,t)=>{const{value:n,defaultValue:i,onValueChange:a=(()=>{}),...l}=e,[s=[],c]=(0,u.T)({prop:n,defaultProp:i,onChange:a}),d=o.useCallback((e=>c(((t=[])=>[...t,e]))),[c]),p=o.useCallback((e=>c(((t=[])=>t.filter((t=>t!==e))))),[c]);return o.createElement(F,{scope:e.__scopeAccordion,value:s,onItemOpen:d,onItemClose:p},o.createElement(U,{scope:e.__scopeAccordion,collapsible:!0},o.createElement(Y,(0,r.Z)({},l,{ref:t}))))})),[W,B]=z(A),Y=o.forwardRef(((e,t)=>{const{__scopeAccordion:n,disabled:i,dir:a,orientation:u="vertical",...d}=e,p=o.useRef(null),f=(0,l.e)(p,t),v=D(n),b="ltr"===(0,L.gm)(a),g=(0,s.M)(e.onKeyDown,(e=>{var t;if(!P.includes(e.key))return;const n=e.target,r=v().filter((e=>{var t;return!(null!==(t=e.ref.current)&&void 0!==t&&t.disabled)})),o=r.findIndex((e=>e.ref.current===n)),i=r.length;if(-1===o)return;e.preventDefault();let a=o;const l=i-1,s=()=>{a=o+1,a>l&&(a=0)},c=()=>{a=o-1,a<0&&(a=l)};switch(e.key){case"Home":a=0;break;case"End":a=l;break;case"ArrowRight":"horizontal"===u&&(b?s():c());break;case"ArrowDown":"vertical"===u&&s();break;case"ArrowLeft":"horizontal"===u&&(b?c():s());break;case"ArrowUp":"vertical"===u&&c()}null===(t=r[a%i].ref.current)||void 0===t||t.focus()}));return o.createElement(W,{scope:n,disabled:i,direction:a,orientation:u},o.createElement(k.Slot,{scope:n},o.createElement(c.WV.div,(0,r.Z)({},d,{"data-orientation":u,ref:f,onKeyDown:i?void 0:g}))))})),q="AccordionItem",[G,H]=z(q),K=o.forwardRef(((e,t)=>{const{__scopeAccordion:n,value:i,...a}=e,l=B(q,n),s=Z(q,n),u=N(n),c=(0,f.M)(),d=i&&s.value.includes(i)||!1,p=l.disabled||e.disabled;return o.createElement(G,{scope:n,open:d,disabled:p,triggerId:c},o.createElement(I,(0,r.Z)({"data-orientation":l.orientation,"data-state":oe(d)},u,a,{ref:t,disabled:p,open:d,onOpenChange:e=>{e?s.onItemOpen(i):s.onItemClose(i)}})))})),J="AccordionHeader",X=o.forwardRef(((e,t)=>{const{__scopeAccordion:n,...i}=e,a=B(A,n),l=H(J,n);return o.createElement(c.WV.h3,(0,r.Z)({"data-orientation":a.orientation,"data-state":oe(l.open),"data-disabled":l.disabled?"":void 0},i,{ref:t}))})),ee="AccordionTrigger",te=o.forwardRef(((e,t)=>{const{__scopeAccordion:n,...i}=e,a=B(A,n),l=H(ee,n),s=j(ee,n),u=N(n);return o.createElement(k.ItemSlot,{scope:n},o.createElement(T,(0,r.Z)({"aria-disabled":l.open&&!s.collapsible||void 0,"data-orientation":a.orientation,id:l.triggerId},u,i,{ref:t})))})),ne="AccordionContent",re=o.forwardRef(((e,t)=>{const{__scopeAccordion:n,...i}=e,a=B(A,n),l=H(ne,n),s=N(n);return o.createElement(C,(0,r.Z)({role:"region","aria-labelledby":l.triggerId,"data-orientation":a.orientation},s,i,{ref:t,style:{"--radix-accordion-content-height":"var(--radix-collapsible-content-height)","--radix-accordion-content-width":"var(--radix-collapsible-content-width)",...e.style}}))}));function oe(e){return e?"open":"closed"}const ie=V,ae=K,le=X,se=te,ue=re},78990:function(e,t,n){n.d(t,{gm:function(){return i}});var r=n(67294);const o=(0,r.createContext)(void 0);function i(e){const t=(0,r.useContext)(o);return e||t||"ltr"}}}]);