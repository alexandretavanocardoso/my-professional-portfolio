(function(){"use strict";var a={9697:function(a,t,e){var o=e(9242),n=e(3396);function i(a,t,e,o,i,r){const s=(0,n.up)("HomeComponent");return(0,n.wg)(),(0,n.iD)("div",null,[(0,n.Wm)(s)])}const r={class:"container"};function s(a,t,e,o,i,s){const l=(0,n.up)("HeaderComponent");return(0,n.wg)(),(0,n.iD)("div",null,[(0,n.Wm)(l,{onNavigate:t[0]||(t[0]=t=>a.navigatePage=t)}),(0,n._)("div",r,[((0,n.wg)(),(0,n.j4)(n.Ob,null,[(0,n._)("div",null,[((0,n.wg)(),(0,n.j4)((0,n.LL)(a.navigatePage)))])],1024))])])}const l=a=>((0,n.dD)("data-v-ca3efe94"),a=a(),(0,n.Cn)(),a),c={class:"navbar navbar-expand-lg",style:{"background-color":"rgba(92, 92, 92, 0.9)"}},d={class:"container-fluid"},m=l((()=>(0,n._)("button",{class:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarNav","aria-controls":"navbarNav","aria-expanded":"false","aria-label":"Toggle navigation"},[(0,n._)("span",{class:"navbar-toggler-icon"})],-1))),v={class:"collapse navbar-collapse",id:"navbarNav"},p={class:"navbar-nav"},g={class:"nav-item"},b={class:"nav-item"},u={class:"nav-item"},f={class:"nav-item"},h={class:"nav-item"};function _(a,t,e,o,i,r){return(0,n.wg)(),(0,n.iD)("nav",c,[(0,n._)("div",d,[(0,n._)("a",{class:"navbar-brand text-white",href:"#",onClick:t[0]||(t[0]=a=>r.navigateNextPage("AboutMeComponent"))},"💻 ALEXANDRE TAVANO"),m,(0,n._)("div",v,[(0,n._)("ul",p,[(0,n._)("li",g,[(0,n._)("a",{onClick:t[1]||(t[1]=a=>r.navigateNextPage("AboutMeComponent")),class:"nav-link text-white","aria-current":"page",href:"#"},"Sobre mim")]),(0,n._)("li",b,[(0,n._)("a",{onClick:t[2]||(t[2]=a=>r.navigateNextPage("SkillComponent")),class:"nav-link text-white",href:"#"},"Habilidades")]),(0,n._)("li",u,[(0,n._)("a",{onClick:t[3]||(t[3]=a=>r.navigateNextPage("ProjectComponent")),class:"nav-link text-white",href:"#"},"Projetos")]),(0,n._)("li",f,[(0,n._)("a",{onClick:t[4]||(t[4]=a=>r.navigateNextPage("FormationAcademicComponent")),class:"nav-link text-white",href:"#"},"Formação Acadêmica")]),(0,n._)("li",h,[(0,n._)("a",{onClick:t[5]||(t[5]=a=>r.navigateNextPage("ContactMeComponent")),class:"nav-link text-white",href:"#"},"Contato")])])])])])}var k={name:"HeaderComponent",methods:{navigateNextPage(a){this.$emit("navigate",a)}}},C=e(89);const w=(0,C.Z)(k,[["render",_],["__scopeId","data-v-ca3efe94"]]);var x=w,y=e(7139);const A=a=>((0,n.dD)("data-v-936b1070"),a=a(),(0,n.Cn)(),a),I={class:"row card-background"},P={class:"col-md-12"},D=A((()=>(0,n._)("h2",{class:"title"},"Alexandre Tavano Cardoso",-1))),M=A((()=>(0,n._)("p",{class:"description"},[(0,n.Uk)(" Me chamo Alexandre Tavano Cardoso, tenho 20 anos, atualmente sou desenvolvedor fullstack, estou sempre buscando aprimorar meus conhecimentos e métodos para melhorar minha performance e minhas habilidades, visando um código limpo e com qualidade. "),(0,n._)("br"),(0,n._)("br"),(0,n._)("b",null,"Github: "),(0,n._)("a",{href:"https://github.com/alexandretavanocardoso",target:"_blank",rel:"noopener noreferrer"},"Meu Github"),(0,n.Uk)(),(0,n._)("br"),(0,n._)("b",null,"Linkedin: "),(0,n._)("a",{href:"https://www.linkedin.com/in/alexandretavano/",target:"_blank",rel:"noopener noreferrer"},"Meu Linkedin")],-1))),j={class:"about2"},T=A((()=>(0,n._)("img",{src:"https://img.icons8.com/material-sharp/100/000000/espresso-cup--v1.png"},null,-1))),O=A((()=>(0,n._)("div",null,[(0,n._)("img",{src:"https://img.icons8.com/external-vitaliy-gorbachev-lineal-vitaly-gorbachev/100/000000/external-graphic-sales-vitaliy-gorbachev-lineal-vitaly-gorbachev.png"}),(0,n._)("h4",null,[(0,n._)("b",null,"3"),(0,n.Uk)(" Anos de experiência")])],-1)));function F(a,t,e,o,i,r){return(0,n.wg)(),(0,n.iD)("div",I,[(0,n._)("div",P,[D,M,(0,n._)("div",j,[(0,n._)("div",null,[T,(0,n._)("h4",null,[(0,n._)("b",null,(0,y.zw)(a.coffe),1),(0,n.Uk)(" Copos de café")])]),O])])])}var S={name:"AboutMeComponent",data:()=>({coffe:0}),created(){setInterval(this.coffe=Math.floor(1e3*Math.random())+1,1e3)}};const E=(0,C.Z)(S,[["render",F],["__scopeId","data-v-936b1070"]]);var L=E;const W={class:"div-main"},N={class:"col-md-3 card-skill"},H=["src"];function G(a,t,e,o,i,r){return(0,n.wg)(),(0,n.iD)("div",W,[((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(a.skills,((a,t)=>((0,n.wg)(),(0,n.iD)("div",{class:"row",key:t},[(0,n._)("div",N,[(0,n._)("img",{src:a.img},null,8,H),(0,n._)("h4",null,(0,y.zw)(a.title),1),(0,n._)("p",null,(0,y.zw)(a.categoria),1)])])))),128))])}var B={name:"SkillComponent",data:()=>({skills:[{img:"https://img.icons8.com/color/144/000000/vue-js.png",title:"Vuejs",categoria:"Frontend"},{img:"https://img.icons8.com/color/144/000000/html-5--v1.png",title:"Html",categoria:"Frontend"},{img:"https://img.icons8.com/color/144/000000/sass.png",title:"Sass",categoria:"Frontend"},{img:"https://img.icons8.com/color/144/7950F2/css3.png",title:"Css",categoria:"Frontend"},{img:"https://img.icons8.com/color/144/000000/javascript--v1.png",title:"Javascript",categoria:"Frontend"},{img:"https://img.icons8.com/ios-filled/100/000000/jquery.png",title:"Jquery",categoria:"Frontend"},{img:"https://img.icons8.com/ios-filled/150/000000/c-sharp-logo.png",title:"C#",categoria:"Backend"},{img:"https://img.icons8.com/color/144/000000/net-framework.png",title:".Net Core",categoria:"Backend"},{img:"https://img.icons8.com/dotty/100/000000/sql.png",title:"Sql Server",categoria:"Backend"},{img:"https://img.icons8.com/ios-glyphs/240/000000/github.png",title:"Github",categoria:"Versionamento"},{img:"https://img.icons8.com/external-tal-revivo-color-tal-revivo/100/000000/external-bitbucket-is-a-web-based-version-control-repository-hosting-service-logo-color-tal-revivo.png",title:"BitBucket",categoria:"Versionamento"},{img:"https://img.icons8.com/color/144/000000/heroku.png",title:"Heroku",categoria:"Hospedagem"},{img:"https://img.icons8.com/fluency/100/000000/sprint-iteration.png",title:"Scrum",categoria:"Métodos Ágeis"},{img:"https://img.icons8.com/external-flaticons-flat-flat-icons/100/000000/external-kanban-project-management-flaticons-flat-flat-icons-2.png",title:"Kanban",categoria:"Métodos Ágeis"}]})};const z=(0,C.Z)(B,[["render",G],["__scopeId","data-v-13dbccdc"]]);var Z=z;const q={class:"div-main"},V={class:"col-md-4"},U={class:"card card-project"},J={class:"card-body"},K={class:"card-title"},R={class:"buttons"},Y=["href"],$=["href"];function Q(a,t,e,o,i,r){return(0,n.wg)(),(0,n.iD)("div",q,[((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(a.projects,((a,t)=>((0,n.wg)(),(0,n.iD)("div",{class:"row",key:t},[(0,n._)("div",V,[(0,n._)("div",U,[(0,n._)("div",J,[(0,n._)("h5",K,(0,y.zw)(a.title),1),(0,n._)("div",R,[(0,n._)("a",{target:"_blank",href:a.linkGit,class:"btn btn-primary btn-sm"},"Github",8,Y),a.outherLink?((0,n.wg)(),(0,n.iD)("a",{key:0,target:"_blank",href:a.outherLink,class:"btn btn-danger btn-sm"},"Hospedagem",8,$)):(0,n.kq)("",!0)])])])])])))),128))])}var X={name:"ProjectComponent",data:()=>({projects:[{title:"my-professional-portfolio",linkGit:"https://github.com/alexandretavanocardoso/my-professional-portfolio",outherLink:"https://alexandre-tavano-cardoso.herokuapp.com"},{title:"ETEC_Projeto_Atelie_Moonchild",linkGit:"https://github.com/alexandretavanocardoso/ETEC_Projeto_Atelie_Moonchild",outherLink:""},{title:"alexandretavanocardoso",linkGit:"https://github.com/alexandretavanocardoso/alexandretavanocardoso",outherLink:""},{title:"Decrypt_CSharp",linkGit:"https://github.com/alexandretavanocardoso/Decrypt_CSharp",outherLink:""},{title:"Vidracaria_Portal",linkGit:"https://github.com/alexandretavanocardoso/Vidracaria_Portal",outherLink:""}]})};const aa=(0,C.Z)(X,[["render",Q],["__scopeId","data-v-40517142"]]);var ta=aa;const ea={class:"accordion accordion-flush",id:"accordionFlushExample",style:{"margin-top":"120px"}},oa=(0,n.uE)('<div class="accordion-item" data-v-390dfabf><h2 class="accordion-header" id="flush-headingOne" data-v-390dfabf><button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne" data-v-390dfabf> Etec Comendador João Rays - Curso Técnico, Desenvolvimento de sistema </button></h2><div id="flush-collapseOne" class="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample" data-v-390dfabf><div class="accordion-body" data-v-390dfabf> Módulo I <br data-v-390dfabf> 1. Linguagem, Trabalho e Tecnologia <br data-v-390dfabf> 2. Programação e Algoritmos <br data-v-390dfabf> 3. Banco de Dados I <br data-v-390dfabf> 4. Análise e Projeto de Sistemas <br data-v-390dfabf> 5. Design Digital <br data-v-390dfabf> 6. Programação Web I <br data-v-390dfabf> 7. Fundamentos da Informática <br data-v-390dfabf> 8. Técnicas de Programação <br data-v-390dfabf><br data-v-390dfabf> Módulo II <br data-v-390dfabf> 1. Inglês Instrumental <br data-v-390dfabf> 2. Desenvolvimento de Sistemas <br data-v-390dfabf> 3. Banco de Dados II <br data-v-390dfabf> 4. Internet e Protocolos <br data-v-390dfabf> 5. Programação de Aplicativos Mobile I <br data-v-390dfabf> 6. Programação Web II <br data-v-390dfabf> 7. Planejamento do Trabalho de Conclusão de Curso (TCC) <br data-v-390dfabf><br data-v-390dfabf> Módulo III <br data-v-390dfabf> 1. Segurança de Sistemas de Informação <br data-v-390dfabf> 2. Banco de Dados III <br data-v-390dfabf> 3. Sistemas Embarcados <br data-v-390dfabf> 4. Programação de Aplicativos Mobile II <br data-v-390dfabf> 5. Programação Web III <br data-v-390dfabf> 6. Qualidade e Teste de Software <br data-v-390dfabf> 7. Ética e Cidadania Organizacional <br data-v-390dfabf> 8. Desenvolvimento do Trabalho de Conclusão de Curso (TCC) </div></div></div><div class="accordion-item" data-v-390dfabf><h2 class="accordion-header" id="flush-headingTwo" data-v-390dfabf><button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo" data-v-390dfabf> Faculdade FGP - Sistema de Informação </button></h2><div id="flush-collapseTwo" class="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample" data-v-390dfabf><div class="accordion-body" data-v-390dfabf> Este curso tem como objetivo, formar profissionais que, apoiados nos conceitos e técnicas de informática, teoria de sistemas e administração, contribuam na solução de problemas de tratamento de informação nas organizações, por meio da concepção. </div></div></div>',2),na=[oa];function ia(a,t,e,o,i,r){return(0,n.wg)(),(0,n.iD)("div",ea,na)}var ra={name:"FormationAcademicComponent"};const sa=(0,C.Z)(ra,[["render",ia],["__scopeId","data-v-390dfabf"]]);var la=sa;const ca=a=>((0,n.dD)("data-v-1652c9a9"),a=a(),(0,n.Cn)(),a),da={class:"row div-main"},ma=(0,n.uE)('<div class="col-md-6 div-main-addres" data-v-1652c9a9><div class="div-addres" data-v-1652c9a9><ul data-v-1652c9a9><li data-v-1652c9a9><b data-v-1652c9a9>Cidade: </b>Barra Bonita, SP</li><li data-v-1652c9a9><b data-v-1652c9a9>Celular: </b>(14) 99907-4567</li><li data-v-1652c9a9><b data-v-1652c9a9>E-mail: </b><a href="mailto:AlexandreTavanoDeveloper@outlook.com" target="_blank" data-v-1652c9a9>AlexandreTavanoDeveloper@outlook.com</a></li></ul></div><div class="div-button" data-v-1652c9a9><a class="btn btn-outline-dark" href="https://github.com/alexandretavanocardoso" target="_blank" data-v-1652c9a9><img src="https://img.icons8.com/ios-glyphs/240/000000/github.png" data-v-1652c9a9> Github</a><a class="btn btn-outline-info" href="https://www.linkedin.com/in/alexandretavano/" target="_blank" data-v-1652c9a9><img src="https://img.icons8.com/color/144/000000/linkedin-circled.png" data-v-1652c9a9> Linkedin</a></div></div>',1),va={class:"col-md-6",style:{"margin-top":"20px"}},pa={class:"form-floating"},ga=ca((()=>(0,n._)("img",{src:"https://img.icons8.com/ios/50/000000/whatsapp--v1.png"},null,-1)));function ba(a,t,e,i,r,s){return(0,n.wg)(),(0,n.iD)("div",da,[ma,(0,n._)("div",va,[(0,n._)("div",pa,[(0,n.wy)((0,n._)("textarea",{class:"form-control size-text-area","onUpdate:modelValue":t[0]||(t[0]=t=>a.messageWhatsApp=t)},null,512),[[o.nr,a.messageWhatsApp]]),(0,n._)("button",{type:"button",class:"btn btn-outline-dark btn-zap",onClick:t[1]||(t[1]=a=>s.sendMessageWhatsApp())},[ga,(0,n.Uk)(" Enviar mensagem")])])])])}var ua={name:"ContactMeComponent",data:()=>({messageWhatsApp:"Olá, tudo bem ?",messageWhatsAppLink:"",linkWhatsApp:""}),methods:{sendMessageWhatsApp(){this.messageWhatsApp.length<1&&(this.messageWhatsApp="Olá, tudo bem ?"),this.messageWhatsAppLink=this.messageWhatsApp.replace(" ","%20"),window.location=`https://wa.me/5514999074567?text=${this.messageWhatsAppLink}`}}};const fa=(0,C.Z)(ua,[["render",ba],["__scopeId","data-v-1652c9a9"]]);var ha=fa,_a={name:"HomeComponent",data:()=>({navigatePage:"AboutMeComponent"}),components:{HeaderComponent:x,AboutMeComponent:L,SkillComponent:Z,ProjectComponent:ta,FormationAcademicComponent:la,ContactMeComponent:ha}};const ka=(0,C.Z)(_a,[["render",s],["__scopeId","data-v-044c5bfa"]]);var Ca=ka,wa={name:"App",components:{HomeComponent:Ca}};const xa=(0,C.Z)(wa,[["render",i],["__scopeId","data-v-1e4d2266"]]);var ya=xa,Aa=e(65),Ia=(0,Aa.MT)({state:{},getters:{},mutations:{},actions:{},modules:{}});(0,o.ri)(ya).use(Ia).mount("#app")}},t={};function e(o){var n=t[o];if(void 0!==n)return n.exports;var i=t[o]={exports:{}};return a[o](i,i.exports,e),i.exports}e.m=a,function(){var a=[];e.O=function(t,o,n,i){if(!o){var r=1/0;for(d=0;d<a.length;d++){o=a[d][0],n=a[d][1],i=a[d][2];for(var s=!0,l=0;l<o.length;l++)(!1&i||r>=i)&&Object.keys(e.O).every((function(a){return e.O[a](o[l])}))?o.splice(l--,1):(s=!1,i<r&&(r=i));if(s){a.splice(d--,1);var c=n();void 0!==c&&(t=c)}}return t}i=i||0;for(var d=a.length;d>0&&a[d-1][2]>i;d--)a[d]=a[d-1];a[d]=[o,n,i]}}(),function(){e.n=function(a){var t=a&&a.__esModule?function(){return a["default"]}:function(){return a};return e.d(t,{a:t}),t}}(),function(){e.d=function(a,t){for(var o in t)e.o(t,o)&&!e.o(a,o)&&Object.defineProperty(a,o,{enumerable:!0,get:t[o]})}}(),function(){e.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(a){if("object"===typeof window)return window}}()}(),function(){e.o=function(a,t){return Object.prototype.hasOwnProperty.call(a,t)}}(),function(){var a={143:0};e.O.j=function(t){return 0===a[t]};var t=function(t,o){var n,i,r=o[0],s=o[1],l=o[2],c=0;if(r.some((function(t){return 0!==a[t]}))){for(n in s)e.o(s,n)&&(e.m[n]=s[n]);if(l)var d=l(e)}for(t&&t(o);c<r.length;c++)i=r[c],e.o(a,i)&&a[i]&&a[i][0](),a[i]=0;return e.O(d)},o=self["webpackChunkmy_portfolio"]=self["webpackChunkmy_portfolio"]||[];o.forEach(t.bind(null,0)),o.push=t.bind(null,o.push.bind(o))}();var o=e.O(void 0,[998],(function(){return e(9697)}));o=e.O(o)})();
//# sourceMappingURL=app.bcc6c089.js.map