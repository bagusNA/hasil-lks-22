import{i as d,r,o as c,c as _,a as o,w as p,b as n,v as l,d as u,e as f}from"./index.9f713a0e.js";const b=o("div",{class:"hero py-5 bg-light"},[o("div",{class:"container"},[o("h2",null,"Create Form")])],-1),h={class:"py-5"},v={class:"container"},g={class:"row"},w={class:"col-md-6 col-lg-4"},x=["onSubmit"],y={class:"form-group mb-3"},k=o("label",{for:"name",class:"mb-1 text-muted"},"Form Name",-1),V={class:"form-group my-3"},S=o("label",{for:"slug",class:"mb-1 text-muted"},"Form Slug",-1),U={class:"form-group my-3"},F=o("label",{for:"description",class:"mb-1 text-muted"},"Description",-1),B={class:"form-group my-3"},C=o("label",{for:"allowed-domains",class:"mb-1 text-muted"},"Allowed Domains",-1),D=o("div",{class:"form-text"},'Separate domains using comma ",". Ignore for public access.',-1),M={class:"form-check form-switch","aria-colspan":"my-3"},A=o("label",{class:"form-check-label",for:"limit_one_response"},"Limit to 1 response",-1),N=o("div",{class:"mt-4"},[o("button",{type:"submit",class:"btn btn-primary"},"Save")],-1),I={__name:"CreateFormView",setup(j){const a=d("endpoint")+"/api/v1/forms",s=r({name:null,slug:null,description:null,allowed_domains:null,limit_one_response:!1}),m=async()=>{const i=s.allowed_domains.toString().split(","),e=await f(a,{name:s.name,slug:s.slug,description:s.description,allowed_domains:i,limit_one_response:s.limit_one_response});console.log(e)};return(i,e)=>(c(),_("main",null,[b,o("div",h,[o("div",v,[o("div",g,[o("div",w,[o("form",{action:"#",onSubmit:p(m,["prevent"])},[o("div",y,[k,n(o("input",{"onUpdate:modelValue":e[0]||(e[0]=t=>s.name=t),type:"text",id:"name",name:"name",class:"form-control",autofocus:""},null,512),[[l,s.name]])]),o("div",V,[S,n(o("input",{"onUpdate:modelValue":e[1]||(e[1]=t=>s.slug=t),type:"text",id:"slug",name:"slug",class:"form-control"},null,512),[[l,s.slug]])]),o("div",U,[F,n(o("textarea",{"onUpdate:modelValue":e[2]||(e[2]=t=>s.description=t),id:"description",name:"description",rows:"4",class:"form-control"},null,512),[[l,s.description]])]),o("div",B,[C,n(o("input",{"onUpdate:modelValue":e[3]||(e[3]=t=>s.allowed_domains=t),type:"text",id:"allowed-domains",name:"allowed_domains",class:"form-control"},null,512),[[l,s.allowed_domains]]),D]),o("div",M,[n(o("input",{"onUpdate:modelValue":e[4]||(e[4]=t=>s.limit_one_response=t),type:"checkbox",id:"limit_one_response",name:"limit_one_response",class:"form-check-input",role:"switch"},null,512),[[u,s.limit_one_response]]),A]),N],40,x)])])])])]))}};export{I as default};