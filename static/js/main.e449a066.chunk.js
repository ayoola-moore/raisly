(this.webpackJsonpraisely=this.webpackJsonpraisely||[]).push([[0],{69:function(e,a,t){e.exports=t(97)},74:function(e,a,t){},75:function(e,a,t){},97:function(e,a,t){"use strict";t.r(a);var r=t(0),n=t.n(r),l=t(63),s=t.n(l),i=(t(74),t(75),t(38)),m=t(68),o=t(67),c=t(36),u=t(53),d=t.n(u);var h=function(e){var a=e.txt,t=e.styleProps;return n.a.createElement("div",{className:"".concat(t||null," messageDefault")},a)},p=function(){var e=Object(r.useState)({text:"",styleName:""}),a=Object(m.a)(e,2),t=a[0],l=a[1],s=Object(o.a)({initialValues:{firstName:"",lastName:"",email:"",password:""},validationSchema:c.a({firstName:c.b().max(15,"Must be 15 characters or less").required("First name required"),lastName:c.b().max(20,"Must be 20 characters or less").required("Last name required"),password:c.b().max(50,"Enter a secured password").required("Password required"),email:c.b().lowercase().email("Enter an email address").notOneOf(["test@test.com"],"Invalid email").required("Email required").test("checkEmail","Email exist",(function(e){return new Promise((function(e,a){d()("https://api.raisely.com/v3/check-user",{method:"POST",headers:{"Content-Type":"application/json"},data:JSON.stringify({campaignUuid:"46aa3270-d2ee-11ea-a9f0-e9a68ccff42a",data:{email:s.values.email}})}).then((function(a){var t="Ok"!==a.data.data.status;e(t)})).catch((function(e){console.warn(e)}))}))}))}),onSubmit:function(e){d()("https://api.raisely.com/v3/signup",{method:"POST",headers:{"Content-Type":"application/json"},data:JSON.stringify({campaignUuid:"46aa3270-d2ee-11ea-a9f0-e9a68ccff42a",data:e})}).then((function(e){l(Object(i.a)(Object(i.a)({},t),{},{text:e.data.message,styleName:"success"}))})).catch((function(e){l(Object(i.a)(Object(i.a)({},t),{},{text:e.response.data.errors[0].message,styleName:"error"}))}))}});return n.a.createElement(n.a.Fragment,null,t.text.length<1?null:n.a.createElement(h,{txt:t.text,styleProps:t.styleName}),n.a.createElement("form",{onSubmit:s.handleSubmit},n.a.createElement("div",{className:"input-wrapper"},n.a.createElement("label",{htmlFor:"firstName"},"First Name"),n.a.createElement("input",{id:"firstName",name:"firstName",type:"text",onChange:s.handleChange,onBlur:s.handleBlur,value:s.values.firstName}),s.touched.firstName&&s.errors.firstName?n.a.createElement("div",null,s.errors.firstName):null),n.a.createElement("div",{className:"input-wrapper"},n.a.createElement("label",{htmlFor:"lastName"},"Last Name"),n.a.createElement("input",{id:"lastName",name:"lastName",type:"text",onChange:s.handleChange,onBlur:s.handleBlur,value:s.values.lastName}),s.touched.lastName&&s.errors.lastName?n.a.createElement("div",null,s.errors.lastName):null),n.a.createElement("div",{className:"input-wrapper"},n.a.createElement("label",{htmlFor:"email"},"Email Address"),n.a.createElement("input",{id:"email",name:"email",type:"email",onChange:s.handleChange,onBlur:s.handleBlur,value:s.values.email}),s.touched.email&&s.errors.email?n.a.createElement("div",null,s.errors.email):null),n.a.createElement("div",{className:"input-wrapper"},n.a.createElement("label",{htmlFor:"password"},"Password"),n.a.createElement("input",{id:"password",name:"password",type:"password",onChange:s.handleChange,onBlur:s.handleBlur,value:s.values.password}),s.touched.password&&s.errors.password?n.a.createElement("div",null,s.errors.password):null),n.a.createElement("button",{type:"submit",disabled:!(s.isValid&&s.dirty)},"Submit")))};var f=function(){return n.a.createElement("div",{className:"App"},n.a.createElement("h1",null," Job hunting sucks...hahah... But here we go :) "),n.a.createElement(p,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(n.a.createElement(n.a.StrictMode,null,n.a.createElement(f,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[69,1,2]]]);
//# sourceMappingURL=main.e449a066.chunk.js.map