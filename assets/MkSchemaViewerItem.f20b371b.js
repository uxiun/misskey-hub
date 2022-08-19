import{_ as w,u as x,j,o as s,c as t,b as m,w as I,n as c,t as a,a as l,m as R,K as b,L as y,a6 as S,d as i,r as k,a3 as V,a4 as N}from"./app.a03ede0c.js";const L=n=>n[0].toLowerCase()+n.slice(1,n.length).replace(/[A-Z]/g,h=>`-${h.toLowerCase()}`),C={props:{schema:{type:Object,required:!0}},setup(n){const h=x(),e=n.schema.$ref?n.schema.$ref.replace("#/components/schemas/","").replace("misskey://",""):null,d=j(!1),r=S("schemas");return{refName:e,refPath:n.schema.$ref?`${h.value}docs/api/entity/${L(e)}.html`:null,expandRef:d,schemas:r}}},o=n=>(V("data-v-25f799d0"),n=n(),N(),n),M={class:"mk-schema-viewer-item"},q={key:0},B={key:0,class:"nullable"},O={key:1,class:"description"},A={key:1},K={key:0,class:"nullable"},P={key:1,class:"description"},T={key:2,class:"string"},D=o(()=>l("code",null,"string",-1)),E={key:0,class:"nullable"},F={key:1,class:"enum"},W=i("enum: "),Z={key:2,class:"nullable"},z=i("default: "),G={key:3,class:"description"},H={key:3,class:"number"},J=o(()=>l("code",null,"number",-1)),Q={key:0,class:"nullable"},U={key:1,class:"nullable"},X=i("default: "),Y={key:2,class:"description"},p={key:4,class:"integer"},$=o(()=>l("code",null,"integer",-1)),ee={key:0,class:"nullable"},se={key:1,class:"nullable"},te=i("default: "),ce={key:2,class:"description"},ae={key:5,class:"boolean"},le=o(()=>l("code",null,"boolean",-1)),ne={key:0,class:"nullable"},de={key:1,class:"nullable"},ie=i("default: "),oe={key:2,class:"description"},he={key:6,class:"array"},ue=o(()=>l("div",{class:"label"},"Array of:",-1)),_e={key:0,class:"description"},me={key:1,class:"nullable"},re={key:2,class:"nullable"},fe=i("default: "),be={key:7,class:"object"},ye=o(()=>l("code",null,"object",-1)),ke={key:0,class:"nullable"},ve={key:1,class:"nullable"},ge=i("default: "),we={key:2,class:"description"},xe={key:8,class:"object"},je=o(()=>l("div",{class:"label"},"Object:",-1)),Ie={key:0,class:"description"},Re={class:"kv"},Se={class:"k"},Ve={key:0,class:"required",title:"Required"},Ne={class:"v"},Le={key:1,class:"nullable"},Ce={key:2,class:"nullable"},Me=i("default: ");function qe(n,h,e,d,r,Be){const v=k("RouterLink"),_=k("MkSchemaViewerItem",!0);return s(),t("div",M,[e.schema.$ref&&e.schema.$ref.startsWith("misskey://")?(s(),t("div",q,[m(v,{to:d.refPath},{default:I(()=>[i(a(d.refName),1)]),_:1},8,["to"]),e.schema.nullable?(s(),t("span",B,"(nullable)")):c("",!0),e.schema.description?(s(),t("div",O,a(e.schema.description),1)):c("",!0)])):e.schema.$ref?(s(),t("div",A,[l("button",{onClick:h[0]||(h[0]=u=>d.expandRef=!d.expandRef)},a(d.expandRef?"-":"+")+" ["+a(d.refName)+"]",1),e.schema.nullable?(s(),t("span",K,"(nullable)")):c("",!0),e.schema.description?(s(),t("div",P,a(e.schema.description),1)):c("",!0),d.schemas&&d.expandRef?(s(),R(_,{key:2,schema:d.schemas[d.refName]},null,8,["schema"])):c("",!0)])):e.schema.type==="string"?(s(),t("div",T,[D,e.schema.nullable?(s(),t("span",E,"(nullable)")):c("",!0),e.schema.enum?(s(),t("div",F,[W,(s(!0),t(b,null,y(e.schema.enum,u=>(s(),t("code",null,a(u),1))),256))])):c("",!0),e.schema.default!==void 0?(s(),t("div",Z,[z,l("code",null,a(e.schema.default),1)])):c("",!0),e.schema.description?(s(),t("div",G,a(e.schema.description),1)):c("",!0)])):e.schema.type==="number"?(s(),t("div",H,[J,e.schema.nullable?(s(),t("span",Q,"(nullable)")):c("",!0),e.schema.default!==void 0?(s(),t("div",U,[X,l("code",null,a(e.schema.default),1)])):c("",!0),e.schema.description?(s(),t("div",Y,a(e.schema.description),1)):c("",!0)])):e.schema.type==="integer"?(s(),t("div",p,[$,e.schema.nullable?(s(),t("span",ee,"(nullable)")):c("",!0),e.schema.default!==void 0?(s(),t("div",se,[te,l("code",null,a(e.schema.default),1)])):c("",!0),e.schema.description?(s(),t("div",ce,a(e.schema.description),1)):c("",!0)])):e.schema.type==="boolean"?(s(),t("div",ae,[le,e.schema.nullable?(s(),t("span",ne,"(nullable)")):c("",!0),e.schema.default!==void 0?(s(),t("div",de,[ie,l("code",null,a(e.schema.default),1)])):c("",!0),e.schema.description?(s(),t("div",oe,a(e.schema.description),1)):c("",!0)])):e.schema.type==="array"?(s(),t("div",he,[ue,e.schema.description?(s(),t("div",_e,a(e.schema.description),1)):c("",!0),m(_,{schema:e.schema.items},null,8,["schema"]),e.schema.nullable?(s(),t("span",me,"(nullable)")):c("",!0),e.schema.default!==void 0?(s(),t("div",re,[fe,l("code",null,a(e.schema.default),1)])):c("",!0)])):e.schema.type==="object"&&e.schema.properties==null?(s(),t("div",be,[ye,e.schema.nullable?(s(),t("span",ke,"(nullable)")):c("",!0),e.schema.default!==void 0?(s(),t("div",ve,[ge,l("code",null,a(e.schema.default),1)])):c("",!0),e.schema.description?(s(),t("div",we,a(e.schema.description),1)):c("",!0)])):e.schema.type==="object"?(s(),t("div",xe,[je,e.schema.description?(s(),t("div",Ie,a(e.schema.description),1)):c("",!0),(s(!0),t(b,null,y(Object.entries(e.schema.properties),([u,g])=>{var f;return s(),t("div",Re,[l("div",Se,[i(a(u),1),((f=e.schema.required)!=null?f:[]).includes(u)?(s(),t("span",Ve,"*")):c("",!0)]),l("div",Ne,[m(_,{schema:g},null,8,["schema"])])])}),256)),e.schema.nullable?(s(),t("span",Le,"(nullable)")):c("",!0),e.schema.default!==void 0?(s(),t("div",Ce,[Me,l("code",null,a(e.schema.default),1)])):c("",!0)])):c("",!0)])}var Ae=w(C,[["render",qe],["__scopeId","data-v-25f799d0"],["__file","MkSchemaViewerItem.vue"]]);export{Ae as default};
