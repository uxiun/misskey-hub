import{_ as w,f as L,u as oe,p as re,g as $,q as le,s as i,r as z,o as s,m as k,w as E,b as y,h as o,c,t as x,v as H,n as I,x as te,y as de,C as pe,z as se,A as ue,B as ae,D as N,d as ne,E as F,F as _e,G as he,H as fe,T as be,j as S,I as ge,a as p,l as O,J as P,K as R,L as W,M as me,N as ke,O as Le,e as we,k as ye,P as Ne,Q as $e}from"./app.61f9ffd2.js";const Be=L({__name:"NavbarBrand",setup(_){const v=oe(),n=re(),l=$(),e=le(),b=i(()=>l.value.home||v.value),h=i(()=>n.value.title),d=i(()=>e.value&&l.value.logoDark!==void 0?l.value.logoDark:l.value.logo),u=()=>{if(!d.value)return null;const t=te("img",{class:"logo",src:de(d.value),alt:h.value});return l.value.logoDark===void 0?t:te(pe,()=>t)};return(t,a)=>{const r=z("RouterLink");return s(),k(r,{to:o(b)},{default:E(()=>[y(u),o(h)?(s(),c("span",{key:0,class:H(["site-name",{"can-hide":o(d)}])},x(o(h)),3)):I("",!0)]),_:1},8,["to"])}}});var xe=w(Be,[["__file","NavbarBrand.vue"]]);const Ce=["href","rel","target","aria-label"],Te=L({inheritAttrs:!1}),Me=L({...Te,__name:"AutoLink",props:{item:{type:Object,required:!0}},setup(_){const v=_,n=se(),l=fe(),{item:e}=ue(v),b=i(()=>F(e.value.link)),h=i(()=>_e(e.value.link)||he(e.value.link)),d=i(()=>{if(!h.value){if(e.value.target)return e.value.target;if(b.value)return"_blank"}}),u=i(()=>d.value==="_blank"),t=i(()=>!b.value&&!h.value&&!u.value),a=i(()=>{if(!h.value){if(e.value.rel)return e.value.rel;if(u.value)return"noopener noreferrer"}}),r=i(()=>e.value.ariaLabel||e.value.text),f=i(()=>{const g=Object.keys(l.value.locales);return g.length?!g.some(C=>C===e.value.link):e.value.link!=="/"}),m=i(()=>f.value?n.path.startsWith(e.value.link):!1),B=i(()=>t.value?e.value.activeMatch?new RegExp(e.value.activeMatch).test(n.path):m.value:!1);return(g,C)=>{const V=z("RouterLink"),T=z("AutoLinkExternalIcon");return o(t)?(s(),k(V,ae({key:0,class:{"router-link-active":o(B)},to:o(e).link,"aria-label":o(r)},g.$attrs),{default:E(()=>[N(g.$slots,"before"),ne(" "+x(o(e).text)+" ",1),N(g.$slots,"after")]),_:3},16,["class","to","aria-label"])):(s(),c("a",ae({key:1,class:"external-link",href:o(e).link,rel:o(a),target:o(d),"aria-label":o(r)},g.$attrs),[N(g.$slots,"before"),ne(" "+x(o(e).text)+" ",1),o(u)?(s(),k(T,{key:0})):I("",!0),N(g.$slots,"after")],16,Ce))}}});var A=w(Me,[["__file","AutoLink.vue"]]);const De=L({__name:"DropdownTransition",setup(_){const v=l=>{l.style.height=l.scrollHeight+"px"},n=l=>{l.style.height=""};return(l,e)=>(s(),k(be,{name:"dropdown",onEnter:v,onAfterEnter:n,onBeforeLeave:v},{default:E(()=>[N(l.$slots,"default")]),_:3}))}});var Se=w(De,[["__file","DropdownTransition.vue"]]);const Re=["aria-label"],Ae={class:"title"},ze=p("span",{class:"arrow down"},null,-1),Ee=["aria-label"],Ie={class:"title"},He={class:"navbar-dropdown"},Oe={class:"navbar-dropdown-subtitle"},Pe={key:1},We={class:"navbar-dropdown-subitem-wrapper"},Fe=L({__name:"NavbarDropdown",props:{item:{type:Object,required:!0}},setup(_){const v=_,{item:n}=ue(v),l=i(()=>n.value.ariaLabel||n.value.text),e=S(!1),b=se();ge(()=>b.path,()=>{e.value=!1});const h=u=>{u.detail===0?e.value=!e.value:e.value=!1},d=(u,t)=>t[t.length-1]===u;return(u,t)=>(s(),c("div",{class:H(["navbar-dropdown-wrapper",{open:e.value}])},[p("button",{class:"navbar-dropdown-title",type:"button","aria-label":o(l),onClick:h},[p("span",Ae,x(o(n).text),1),ze],8,Re),p("button",{class:"navbar-dropdown-title-mobile",type:"button","aria-label":o(l),onClick:t[0]||(t[0]=a=>e.value=!e.value)},[p("span",Ie,x(o(n).text),1),p("span",{class:H(["arrow",e.value?"down":"right"])},null,2)],8,Ee),y(Se,null,{default:E(()=>[O(p("ul",He,[(s(!0),c(R,null,W(o(n).children,a=>(s(),c("li",{key:a.text,class:"navbar-dropdown-item"},[a.children?(s(),c(R,{key:0},[p("h4",Oe,[a.link?(s(),k(A,{key:0,item:a,onFocusout:r=>d(a,o(n).children)&&a.children.length===0&&(e.value=!1)},null,8,["item","onFocusout"])):(s(),c("span",Pe,x(a.text),1))]),p("ul",We,[(s(!0),c(R,null,W(a.children,r=>(s(),c("li",{key:r.link,class:"navbar-dropdown-subitem"},[y(A,{item:r,onFocusout:f=>d(r,a.children)&&d(a,o(n).children)&&(e.value=!1)},null,8,["item","onFocusout"])]))),128))])],64)):(s(),k(A,{key:1,item:a,onFocusout:r=>d(a,o(n).children)&&(e.value=!1)},null,8,["item","onFocusout"]))]))),128))],512),[[P,e.value]])]),_:1})],2))}});var Ve=w(Fe,[["__file","NavbarDropdown.vue"]]);const Ke=_=>!F(_)||/github\.com/.test(_)?"GitHub":/bitbucket\.org/.test(_)?"Bitbucket":/gitlab\.com/.test(_)?"GitLab":/gitee\.com/.test(_)?"Gitee":null,je={key:0,class:"navbar-items"},Ge=L({__name:"NavbarItems",setup(_){const v=()=>{const t=me(),a=oe(),r=re(),f=$();return i(()=>{var T,K,j;const m=Object.keys(r.value.locales);if(m.length<2)return[];const B=t.currentRoute.value.path,g=t.currentRoute.value.fullPath,C=t.currentRoute.value.hash;return[{text:(T=f.value.selectLanguageText)!=null?T:"unknown language",ariaLabel:(j=(K=f.value.selectLanguageAriaLabel)!=null?K:f.value.selectLanguageText)!=null?j:"unknown language",children:m.map(M=>{var J,Q,U,X,Y,Z;const ie=(Q=(J=r.value.locales)==null?void 0:J[M])!=null?Q:{},G=(X=(U=f.value.locales)==null?void 0:U[M])!=null?X:{},q=`${ie.lang}`,ce=(Y=G.selectLanguageName)!=null?Y:q;let D;if(q===r.value.lang)D=g;else{const ee=B.replace(a.value,M);t.getRoutes().some(ve=>ve.path===ee)?D=`${ee}${C}`:D=(Z=G.home)!=null?Z:M}return{text:ce,link:D}})}]})},n=()=>{const t=$(),a=i(()=>t.value.repo),r=i(()=>a.value?Ke(a.value):null),f=i(()=>a.value&&!F(a.value)?`https://github.com/${a.value}`:a.value),m=i(()=>f.value?t.value.repoLabel?t.value.repoLabel:r.value===null?"Source":r.value:null);return i(()=>!f.value||!m.value?[]:[{text:m.value,link:f.value}])},l=t=>ke(t)?Le(t):t.children?{...t,children:t.children.map(l)}:t,b=(()=>{const t=$();return i(()=>(t.value.navbar||[]).map(l))})(),h=v(),d=n(),u=i(()=>[...b.value,...h.value,...d.value]);return(t,a)=>o(u).length?(s(),c("nav",je,[(s(!0),c(R,null,W(o(u),r=>(s(),c("div",{key:r.text,class:"navbar-item"},[r.children?(s(),k(Ve,{key:0,item:r},null,8,["item"])):(s(),k(A,{key:1,item:r},null,8,["item"]))]))),128))])):I("",!0)}});var qe=w(Ge,[["__file","NavbarItems.vue"]]);const Je=["title"],Qe={class:"icon",focusable:"false",viewBox:"0 0 32 32"},Ue=we('<path d="M16 12.005a4 4 0 1 1-4 4a4.005 4.005 0 0 1 4-4m0-2a6 6 0 1 0 6 6a6 6 0 0 0-6-6z" fill="currentColor"></path><path d="M5.394 6.813l1.414-1.415l3.506 3.506L8.9 10.318z" fill="currentColor"></path><path d="M2 15.005h5v2H2z" fill="currentColor"></path><path d="M5.394 25.197L8.9 21.691l1.414 1.415l-3.506 3.505z" fill="currentColor"></path><path d="M15 25.005h2v5h-2z" fill="currentColor"></path><path d="M21.687 23.106l1.414-1.415l3.506 3.506l-1.414 1.414z" fill="currentColor"></path><path d="M25 15.005h5v2h-5z" fill="currentColor"></path><path d="M21.687 8.904l3.506-3.506l1.414 1.415l-3.506 3.505z" fill="currentColor"></path><path d="M15 2.005h2v5h-2z" fill="currentColor"></path>',9),Xe=[Ue],Ye={class:"icon",focusable:"false",viewBox:"0 0 32 32"},Ze=p("path",{d:"M13.502 5.414a15.075 15.075 0 0 0 11.594 18.194a11.113 11.113 0 0 1-7.975 3.39c-.138 0-.278.005-.418 0a11.094 11.094 0 0 1-3.2-21.584M14.98 3a1.002 1.002 0 0 0-.175.016a13.096 13.096 0 0 0 1.825 25.981c.164.006.328 0 .49 0a13.072 13.072 0 0 0 10.703-5.555a1.01 1.01 0 0 0-.783-1.565A13.08 13.08 0 0 1 15.89 4.38A1.015 1.015 0 0 0 14.98 3z",fill:"currentColor"},null,-1),et=[Ze],tt=L({__name:"ToggleColorModeButton",setup(_){const v=$(),n=le(),l=()=>{n.value=!n.value};return(e,b)=>(s(),c("button",{class:"toggle-color-mode-button",title:o(v).toggleColorMode,onClick:l},[O((s(),c("svg",Qe,Xe,512)),[[P,!o(n)]]),O((s(),c("svg",Ye,et,512)),[[P,o(n)]])],8,Je))}});var at=w(tt,[["__file","ToggleColorModeButton.vue"]]);const nt=["title"],ot=p("div",{class:"icon","aria-hidden":"true"},[p("span"),p("span"),p("span")],-1),rt=[ot],lt=L({__name:"ToggleSidebarButton",emits:["toggle"],setup(_){const v=$();return(n,l)=>(s(),c("div",{class:"toggle-sidebar-button",title:o(v).toggleSidebar,"aria-expanded":"false",role:"button",tabindex:"0",onClick:l[0]||(l[0]=e=>n.$emit("toggle"))},rt,8,nt))}});var st=w(lt,[["__file","ToggleSidebarButton.vue"]]);const ut=L({__name:"Navbar",emits:["toggle-sidebar"],setup(_){const v=$(),n=S(null),l=S(null),e=S(0),b=i(()=>e.value?{maxWidth:e.value+"px"}:{});let h;ye(()=>{const t=d(n.value,"paddingLeft")+d(n.value,"paddingRight"),a=()=>{var r;window.innerWidth<=719?e.value=0:e.value=n.value.offsetWidth-t-(((r=l.value)==null?void 0:r.offsetWidth)||0)};a(),window.addEventListener("resize",a,!1),window.addEventListener("orientationchange",a,!1),h=new ResizeObserver((r,f)=>{document.documentElement.style.setProperty("--globalHeaderHeight",n.value.offsetHeight+"px")}),h.observe(n.value)}),Ne(()=>{h.disconnect()});function d(u,t){var f,m,B;const a=(B=(m=(f=u==null?void 0:u.ownerDocument)==null?void 0:f.defaultView)==null?void 0:m.getComputedStyle(u,null))==null?void 0:B[t],r=Number.parseInt(a,10);return Number.isNaN(r)?0:r}return(u,t)=>{const a=z("NavbarSearch");return s(),c("header",{ref_key:"navbar",ref:n,class:"navbar"},[y(st,{onToggle:t[0]||(t[0]=r=>u.$emit("toggle-sidebar"))}),p("span",{ref_key:"navbarBrand",ref:l},[y(xe)],512),p("div",{class:"navbar-items-wrapper",style:$e(o(b))},[N(u.$slots,"before"),y(qe,{class:"can-hide"}),N(u.$slots,"after"),o(v).colorModeSwitch?(s(),k(at,{key:0})):I("",!0),y(a)],4)],512)}}});var ct=w(ut,[["__file","Navbar.vue"]]);export{A,Se as D,ct as N,qe as a,Ke as r};