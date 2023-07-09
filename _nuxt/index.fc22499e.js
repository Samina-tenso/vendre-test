import{_ as $}from"./nuxt-link.e2ca9b7d.js";import{f as w,o as a,c as n,a as c,t as v,b as y,w as N,d as f,_ as L,l as B,r as F,k as A,g as t,F as D,m as G,n as C}from"./entry.c740962f.js";import{a as I}from"./asyncData.a84ba3e0.js";const P={class:"card"},S={class:"card__image"},z=["src"],E={class:"card__text"},R=w({__name:"Card",props:{first_name:{},last_name:{},email:{},id:{},avatar:{}},setup(d){return(e,s)=>{const i=$;return a(),n("div",P,[c("div",S,[c("img",{src:`${e.avatar}`,alt:"employee profile"},null,8,z)]),c("div",E,[c("h2",null,v(e.first_name),1),c("h2",null,v(e.last_name),1)]),y(i,{to:`/profiles/${e.id}`},{default:N(()=>[f("Contact")]),_:1},8,["to"])])}}});const T=L(R,[["__scopeId","data-v-f8481d3b"]]);async function j(d,e){const{data:s,error:i,pending:o}=await I("profiles",()=>$fetch("https://reqres.in/api/users",{params:{page:e.value}}),{watch:[e],transform:r=>{console.log(r);const l=r.total_pages;return{profiles:r.data,pages:l}}});return i&&console.log(i.value),{res:s,page:e,next:()=>{var r,l,p;((r=s.value)!=null&&r.pages&&e.value+1<((l=s==null?void 0:s.value)==null?void 0:l.pages)||e.value+1==((p=s.value)==null?void 0:p.pages))&&(e.value++,d.push({path:"/profiles",query:{page:e.value}}))},previous:()=>{e.value--,d.push({path:"/profiles",query:{page:e.value}})},error:i,pending:o}}const H={class:"profiles wrapper"},J={key:0},K={key:1},M={key:2,class:"profiles__list"},O={class:"button-wrapper"},Q=w({__name:"index",async setup(d){let e,s;const i=B();let o=F(0);o.value||(o.value=1);const{res:u,error:h,pending:r,previous:l,next:p}=([e,s]=A(()=>j(i,o)),e=await e,s(),e);return(U,m)=>{var x,g,k,b;const V=$,q=T;return a(),n("div",H,[t(r)?(a(),n("p",J,"Fetching profiles...")):t(h)?(a(),n("p",K,[f(" Sorry we are unable to get profiles "),y(V,{to:"/prfiles"},{default:N(()=>[f(" Go back")]),_:1})])):(a(),n("ul",M,[(a(!0),n(D,null,G((x=t(u))==null?void 0:x.profiles,_=>(a(),n("li",{key:_.id,class:"profiles__item"},[y(q,{first_name:_.first_name,last_name:_.last_name,id:_.id,email:_.email,avatar:_.avatar},null,8,["first_name","last_name","id","email","avatar"])]))),128))])),c("div",O,[t(o)>1?(a(),n("button",{key:0,class:"button button--prev",onClick:m[0]||(m[0]=_=>t(l)())}," Previous ")):C("",!0),f(" "+v(t(o))+" / "+v((g=t(u))==null?void 0:g.pages)+" ",1),(k=t(u))!=null&&k.pages&&t(o)<((b=t(u))==null?void 0:b.pages)?(a(),n("button",{key:1,class:"button button--next",onClick:m[1]||(m[1]=_=>t(p)())}," Next ")):C("",!0)])])}}});const Z=L(Q,[["__scopeId","data-v-2ed14cf1"]]);export{Z as default};
