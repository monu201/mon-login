(this.webpackJsonplogin=this.webpackJsonplogin||[]).push([[0],{31:function(e,t,a){},32:function(e,t,a){},33:function(e,t,a){},43:function(e,t,a){},62:function(e,t,a){},63:function(e,t,a){},64:function(e,t,a){},65:function(e,t,a){"use strict";a.r(t);var c=a(1),s=a.n(c),n=a(10),i=a.n(n),l=(a(31),a(32),a(9)),r=(a(33),a(0)),j=function(){return Object(r.jsx)("nav",{class:"navbar navbar-expand-lg navbar-primary bg-dark",children:Object(r.jsxs)("div",{className:"container-fluid",children:[Object(r.jsx)("a",{className:"navbar-brand",href:"https://www.freecodecamp.org/",children:"Home"}),Object(r.jsx)("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarNavAltMarkup","aria-controls":"navbarNavAltMarkup","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(r.jsx)("i",{className:"ri-menu-line burgur"})}),Object(r.jsx)("div",{class:"collapse navbar-collapse",id:"navbarNavAltMarkup",children:Object(r.jsxs)("div",{class:"navbar-nav",children:[Object(r.jsx)("a",{className:"nav-link active",href:"https://www.linkedin.com/in/monish-prasad-952a17206/",children:"Linkedin"}),Object(r.jsx)(l.c,{className:"nav-link",activeClassName:"bg",to:"/signup",exact:!0,children:"SignUp"}),Object(r.jsx)(l.c,{className:"nav-link",activeClassName:"bg",to:"/login",exact:!0,children:"Login"})]})})]})})},o=a(2),b=a(8),d=(a(43),a(13)),u=a.n(d),h=function(){var e=Object(c.useState)(""),t=Object(b.a)(e,2),a=t[0],s=t[1],n=Object(c.useState)(""),i=Object(b.a)(n,2),l=i[0],j=i[1],o=Object(c.useState)(""),d=Object(b.a)(o,2),h=d[0],x=d[1],m=Object(c.useState)(!1),O=Object(b.a)(m,2),p=O[0],f=O[1],g=Object(c.useState)(Object(r.jsx)("h2",{children:"Registration done"})),v=Object(b.a)(g,2),N=v[0],w=v[1];return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)("div",{className:"message",children:p&&N}),Object(r.jsxs)("form",{className:"details",onSubmit:function(e){e.preventDefault();var t={fullname:a,password:l,email:h};u.a.post("https://mon-login-portal.herokuapp.com/login/app",t).then((function(e){"err"===e.data.error?(f(!0),w(Object(r.jsxs)("h2",{children:["User exists",Object(r.jsx)("br",{}),"Check inputs"]})),console.log(e.data)):(f(!0),w(Object(r.jsx)("h2",{children:"Registration done"})),console.log(e.data))})),s(""),j(""),x("")},children:[Object(r.jsx)("h2",{children:"Sign Up"}),Object(r.jsxs)("div",{className:"d-flex mon",children:[Object(r.jsx)("i",{className:"ri-account-circle-fill"}),"\xa0\xa0",Object(r.jsx)("input",{className:"input",required:"true",name:"fullname",value:a,type:"text",onChange:function(e){s(e.target.value)},placeholder:"Enter Username"})]}),Object(r.jsx)("br",{}),Object(r.jsxs)("div",{className:"d-flex mon",children:[Object(r.jsx)("i",{className:"ri-mail-fill"}),"\xa0\xa0",Object(r.jsx)("input",{type:"email",required:"true",name:"email",value:h,className:"input",onChange:function(e){x(e.target.value)},placeholder:"Enter Email"})]}),Object(r.jsx)("br",{}),Object(r.jsxs)("div",{className:"d-flex mon",children:[Object(r.jsx)("i",{className:"ri-lock-fill"}),"\xa0\xa0",Object(r.jsx)("input",{type:"text",required:"true",name:"password",value:l,className:"input",onChange:function(e){j(e.target.value)},placeholder:"Enter Password"})]}),Object(r.jsx)("br",{}),Object(r.jsx)("div",{children:Object(r.jsx)("button",{className:"btn btn-primary",children:"Sign Up"})})]})]})},x=(a(62),function(){var e=Object(c.useState)(""),t=Object(b.a)(e,2),a=t[0],s=t[1],n=Object(c.useState)(""),l=Object(b.a)(n,2),j=l[0],o=l[1],d=Object(c.useState)(!1),h=Object(b.a)(d,2),x=h[0],m=h[1],O=Object(c.useState)(!1),p=Object(b.a)(O,2),f=p[0],g=p[1],v=function(){return Object(r.jsx)("div",{className:"port"})},N=function(){return Object(r.jsx)("div",{className:"ee d-flex justify-content-center",children:Object(r.jsxs)("div",{className:"port2 ",children:[Object(r.jsx)("h2",{children:"hello there!!!"}),Object(r.jsx)("button",{className:"btn btn-primary",onClick:function(){m(!1)},children:"Log out"})]})})},w=function(){return Object(r.jsx)("div",{className:"ee d-flex justify-content-center",children:Object(r.jsxs)("div",{className:"port2 ",children:[Object(r.jsx)("h2",{children:"Check input"}),Object(r.jsx)("button",{className:"btn btn-primary",onClick:function(){g(!1)},children:"Type again"})]})})},k=function(){return Object(r.jsxs)("div",{children:[i.a.createPortal(Object(r.jsx)(v,{}),document.getElementById("portal")),i.a.createPortal(Object(r.jsx)(N,{}),document.getElementById("portal-2"))]})},y=function(){return Object(r.jsxs)("div",{children:[i.a.createPortal(Object(r.jsx)(v,{}),document.getElementById("portal")),i.a.createPortal(Object(r.jsx)(w,{}),document.getElementById("portal-2"))]})};return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)("div",{className:"tt",children:Object(r.jsx)("h2",{children:x})}),Object(r.jsxs)("form",{className:"pp",onSubmit:function(e){e.preventDefault();var t={u:a,p:j};u.a.post("https://mon-login-portal.herokuapp.com/login/check",t).then((function(e){"wrong password"===e.data.user||"wrong username"===e.data.user?g(!0):m(!0)})),o(""),s("")},children:[Object(r.jsx)("h2",{children:"Login"}),Object(r.jsxs)("div",{className:"d-flex mon",children:[Object(r.jsx)("i",{className:"ri-account-circle-fill"}),"\xa0\xa0",Object(r.jsx)("input",{className:"input",name:"user",onChange:function(e){s(e.target.value)},value:a,type:"text",placeholder:" Enter Username"})]}),Object(r.jsx)("br",{}),Object(r.jsxs)("div",{className:"d-flex mon",children:[Object(r.jsx)("i",{className:"ri-lock-fill"}),"\xa0\xa0 ",Object(r.jsx)("input",{placeholder:"Enter Password",name:"password",value:j,onChange:function(e){o(e.target.value)},className:"input",type:"password"})]}),Object(r.jsx)("br",{}),Object(r.jsx)("button",{className:"btn btn-primary",type:"submit",children:"Lets's Go"})]}),x&&Object(r.jsx)(k,{}),f&&Object(r.jsx)(y,{})]})}),m=(a(63),function(){return Object(r.jsxs)("footer",{children:[Object(r.jsx)("span",{className:"footer-header",children:"Check out my social media profiles"}),Object(r.jsx)("br",{}),Object(r.jsxs)("div",{className:"dd d-flex justify-content-center",children:[Object(r.jsxs)("a",{href:"https://www.linkedin.com/in/monish-prasad-952a17206/",className:"d-flex",children:[Object(r.jsx)("i",{className:"ri-linkedin-box-fill"}),"Linkedin"]}),Object(r.jsxs)("a",{href:"https://mail.google.com/mail/u/0/?ogbl#inbox",className:"d-flex",children:[Object(r.jsx)("i",{className:"ri-google-fill"})," Google"]}),Object(r.jsxs)("a",{href:"https://www.linkedin.com/in/monish-prasad-952a17206/",className:"d-flex",children:[Object(r.jsx)("i",{className:"ri-twitter-fill"})," Twitter"]}),Object(r.jsxs)("a",{href:"https://www.instagram.com/pr__monish/",className:"d-flex",children:[Object(r.jsx)("i",{className:"ri-instagram-fill"})," Instagram"]}),Object(r.jsxs)("a",{href:"https://github.com/monu201",className:"d-flex",children:[Object(r.jsx)("i",{className:"ri-github-fill"}),"github"]}),Object(r.jsxs)("a",{href:"https://www.linkedin.com/in/monish-prasad-952a17206/",className:"d-flex",children:[Object(r.jsx)("i",{class:"ri-facebook-box-fill"}),"Facebook"]})]})]})}),O=(a(64),function(){return Object(r.jsxs)("div",{className:"auth",children:[Object(r.jsx)("h2",{className:"auth2",children:"Welcome !!!!"}),Object(r.jsxs)("div",{className:"d-flex justify-content-center",children:[Object(r.jsx)(l.b,{to:"/signup",children:Object(r.jsx)("button",{className:"btn btn-primary",children:"Sign up"})}),Object(r.jsx)(l.b,{to:"/login",children:Object(r.jsx)("button",{className:"btn btn-primary",children:"Login"})})]})]})});var p=function(){return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)(j,{}),Object(r.jsx)(o.a,{path:"/",exact:!0,children:Object(r.jsx)(O,{})}),Object(r.jsx)(o.a,{path:"/signup",exact:!0,children:Object(r.jsx)(h,{})}),Object(r.jsx)(o.a,{path:"/login",exact:!0,children:Object(r.jsx)(x,{})}),Object(r.jsx)(o.a,{path:"/auth",exact:!0,children:Object(r.jsx)(O,{})}),Object(r.jsx)(m,{})]})},f=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,66)).then((function(t){var a=t.getCLS,c=t.getFID,s=t.getFCP,n=t.getLCP,i=t.getTTFB;a(e),c(e),s(e),n(e),i(e)}))};i.a.render(Object(r.jsx)(s.a.StrictMode,{children:Object(r.jsx)(l.a,{children:Object(r.jsx)(p,{})})}),document.getElementById("root")),f()}},[[65,1,2]]]);
//# sourceMappingURL=main.e9cd2c80.chunk.js.map