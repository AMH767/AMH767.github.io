(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[222],{4184:function(a,b){var c,d; /*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/ !function(){"use strict";var e={}.hasOwnProperty;function f(){for(var a=[],b=0;b<arguments.length;b++){var c=arguments[b];if(c){var d=typeof c;if("string"===d||"number"===d)a.push(c);else if(Array.isArray(c)){if(c.length){var g=f.apply(null,c);g&&a.push(g)}}else if("object"===d){if(c.toString!==Object.prototype.toString&&!c.toString.toString().includes("[native code]")){a.push(c.toString());continue}for(var h in c)e.call(c,h)&&c[h]&&a.push(h)}}}return a.join(" ")}a.exports?(f.default=f,a.exports=f):void 0!==(d=(function(){return f}).apply(b,c=[]))&&(a.exports=d)}()},5248:function(a,b,c){(window.__NEXT_P=window.__NEXT_P||[]).push(["/checkout",function(){return c(8283)}])},8283:function(a,b,c){"use strict";c.r(b);var d=c(5893),e=c(7294),f=c(7691),g=c(2745),h=c(7079),i=function(){var a=(0,e.useState)([]),b=a[0],c=a[1],i=(0,e.useState)(0),j=i[0],k=i[1],l=(0,e.useState)(0),m=l[0],n=l[1],o=(0,e.useState)(0),p=o[0],q=o[1];return(0,e.useEffect)(function(){var a=JSON.parse(localStorage.getItem("munfirm"));q(a.totalPrice),n(a.shipping),k(a.vat),c(a.cartData)},[]),(0,d.jsxs)(h.Z,{children:[(0,d.jsx)(g.Z,{pageName:"Checkout"}),(0,d.jsx)("div",{className:"checkout-form-area py-130 rpy-100",children:(0,d.jsxs)("div",{className:"container",children:[(0,d.jsxs)(f.Z,{className:"checkout-faqs wow fadeInUp delay-0-2s",id:"checkout-faqs",children:[(0,d.jsxs)("div",{className:"alert bg-lighter",children:[(0,d.jsxs)("h6",{children:["Returning customer?"," ",(0,d.jsx)(f.Z.Toggle,{as:"a",className:"collapsed card-header c-cursor","data-toggle":"collapse","data-target":"#collapse0","aria-expanded":"false",eventKey:"collapse0",children:"Click here to login"})]}),(0,d.jsx)(f.Z.Collapse,{eventKey:"collapse0",className:"content",children:(0,d.jsxs)("form",{onSubmit:function(a){return a.preventDefault()},action:"#",children:[(0,d.jsx)("p",{children:"Please login your accont."}),(0,d.jsxs)("div",{className:"row",children:[(0,d.jsx)("div",{className:"col-md-6",children:(0,d.jsx)("div",{className:"form-group",children:(0,d.jsx)("input",{type:"email",id:"email-address",name:"email-address",className:"form-control",defaultValue:"",placeholder:"Your Email Address",required:""})})}),(0,d.jsx)("div",{className:"col-md-6",children:(0,d.jsx)("div",{className:"form-group",children:(0,d.jsx)("input",{type:"password",id:"password",name:"password",className:"form-control",defaultValue:"",placeholder:"Your Password",required:""})})})]}),(0,d.jsxs)("div",{className:"form-footer",children:[(0,d.jsxs)("button",{type:"submit",className:"theme-btn style-two",children:["login ",(0,d.jsx)("i",{className:"fas fa-angle-double-right"})]}),(0,d.jsx)("input",{type:"checkbox",name:"loss-passowrd",id:"loss-passowrd",required:""}),(0,d.jsx)("label",{htmlFor:"loss-passowrd",children:"Remember me"})]}),(0,d.jsx)("a",{href:"#",children:"Lost your password?"})]})})]}),(0,d.jsxs)("div",{className:"alert bg-lighter",children:[(0,d.jsxs)("h6",{children:["Have a coupon?"," ",(0,d.jsx)(f.Z.Toggle,{as:"a",className:"collapsed card-header c-cursor","data-toggle":"collapse","data-target":"#collapse3","aria-expanded":"false",eventKey:"collapse3",children:"Click here to enter your code"})]}),(0,d.jsx)(f.Z.Collapse,{eventKey:"collapse3",className:"content",children:(0,d.jsxs)("form",{onSubmit:function(a){return a.preventDefault()},action:"#",children:[(0,d.jsx)("p",{children:"If you have a coupon code, please apply it below."}),(0,d.jsx)("div",{className:"form-group",children:(0,d.jsx)("input",{type:"text",id:"coupon-code",name:"coupon-code",className:"form-control",defaultValue:"",placeholder:"Coupon Code",required:""})}),(0,d.jsxs)("button",{type:"submit",className:"theme-btn style-two",children:["apply coupon ",(0,d.jsx)("i",{className:"fas fa-angle-double-right"})]})]})})]})]}),(0,d.jsx)("h4",{className:"form-title mt-50 mb-25",children:"Billing Details"}),(0,d.jsx)("form",{onSubmit:function(a){return a.preventDefault()},id:"checkout-form",className:"checkout-form wow fadeInUp delay-0-2s",name:"checkout-form",action:"#",method:"post",children:(0,d.jsxs)("div",{className:"row",children:[(0,d.jsx)("div",{className:"col-lg-12",children:(0,d.jsx)("h6",{children:"Personal Information"})}),(0,d.jsx)("div",{className:"col-md-6",children:(0,d.jsx)("div",{className:"form-group",children:(0,d.jsx)("input",{type:"text",id:"first-name",name:"first-name",className:"form-control",defaultValue:"",placeholder:"First Name",required:""})})}),(0,d.jsx)("div",{className:"col-md-6",children:(0,d.jsx)("div",{className:"form-group",children:(0,d.jsx)("input",{type:"text",id:"last-name",name:"last-name",className:"form-control",defaultValue:"",placeholder:"Last Name",required:""})})}),(0,d.jsx)("div",{className:"col-md-6",children:(0,d.jsx)("div",{className:"form-group",children:(0,d.jsx)("input",{type:"text",id:"number",name:"number",className:"form-control",defaultValue:"",placeholder:"Phone Number",required:""})})}),(0,d.jsx)("div",{className:"col-md-6",children:(0,d.jsx)("div",{className:"form-group",children:(0,d.jsx)("input",{type:"email",id:"email",name:"email",className:"form-control",defaultValue:"",placeholder:"Email Address",required:""})})}),(0,d.jsx)("div",{className:"col-md-6",children:(0,d.jsx)("div",{className:"form-group",children:(0,d.jsx)("input",{type:"text",id:"company-name",name:"company-name",className:"form-control",defaultValue:"",placeholder:"Company name (optional)"})})}),(0,d.jsx)("div",{className:"col-md-6",children:(0,d.jsx)("div",{className:"form-group",children:(0,d.jsx)("input",{type:"text",id:"company-address",name:"company-address",className:"form-control",defaultValue:"",placeholder:"Company Address (optional)"})})}),(0,d.jsx)("div",{className:"col-lg-12",children:(0,d.jsx)("h6",{children:"Your Address"})}),(0,d.jsx)("div",{className:"col-md-6 mb-30",children:(0,d.jsx)("div",{className:"form-group",children:(0,d.jsxs)("select",{name:"country",id:"country",children:[(0,d.jsx)("option",{value:"value1",children:"Select Country"}),(0,d.jsx)("option",{value:"value2",children:"Australia"}),(0,d.jsx)("option",{value:"value3",children:"Canada"}),(0,d.jsx)("option",{value:"value4",children:"China"}),(0,d.jsx)("option",{value:"value5",children:"Morocco"}),(0,d.jsx)("option",{value:"value6",children:"Saudi Arabia"}),(0,d.jsx)("option",{value:"value7",children:"United Kingdom (UK)"}),(0,d.jsx)("option",{value:"value8",children:"United States (US)"})]})})}),(0,d.jsx)("div",{className:"col-md-6",children:(0,d.jsx)("div",{className:"form-group",children:(0,d.jsx)("input",{type:"text",id:"city",name:"city",className:"form-control",defaultValue:"",placeholder:"City",required:""})})}),(0,d.jsx)("div",{className:"col-md-6",children:(0,d.jsx)("div",{className:"form-group",children:(0,d.jsx)("input",{type:"text",id:"state",name:"state",className:"form-control",defaultValue:"",placeholder:"State",required:""})})}),(0,d.jsx)("div",{className:"col-md-6",children:(0,d.jsx)("div",{className:"form-group",children:(0,d.jsx)("input",{type:"text",id:"zip",name:"zip",className:"form-control",defaultValue:"",placeholder:"Zip",required:""})})}),(0,d.jsx)("div",{className:"col-md-6",children:(0,d.jsx)("div",{className:"form-group",children:(0,d.jsx)("input",{type:"text",id:"street-name",name:"street-name",className:"form-control",defaultValue:"",placeholder:"House, street name",required:""})})}),(0,d.jsx)("div",{className:"col-md-6",children:(0,d.jsx)("div",{className:"form-group",children:(0,d.jsx)("input",{type:"text",id:"apartment-name",name:"apartment-name",className:"form-control",defaultValue:"",placeholder:"Apartment, suite, unit etc. (optional)"})})}),(0,d.jsx)("div",{className:"col-lg-12",children:(0,d.jsx)("h6",{children:"Order Notes (optional)"})}),(0,d.jsx)("div",{className:"col-md-12",children:(0,d.jsx)("div",{className:"form-group mb-0",children:(0,d.jsx)("textarea",{name:"order-note",id:"order-note",className:"form-control",rows:5,placeholder:"Notes about your order, e.g. special notes for delivery.",defaultValue:""})})})]})}),(0,d.jsx)("div",{className:"payment-cart-total pt-25",children:(0,d.jsxs)("div",{className:"row justify-content-between",children:[(0,d.jsx)("div",{className:"col-lg-6",children:(0,d.jsxs)("div",{className:"payment-method mt-45 wow fadeInUp delay-0-2s",children:[(0,d.jsx)("h4",{className:"form-title my-25",children:"Payment Method"}),(0,d.jsxs)(f.Z,{defaultActiveKey:"collapseOne",as:"ul",id:"paymentMethod",className:"mb-30",children:[(0,d.jsxs)("li",{className:"custom-control custom-radio",children:[(0,d.jsx)("input",{type:"radio",className:"custom-control-input",id:"methodone",name:"defaultExampleRadios",defaultChecked:!0}),(0,d.jsxs)(f.Z.Toggle,{as:"label",className:"custom-control-label",htmlFor:"methodone","data-toggle":"collapse","data-target":"#collapseOne",eventKey:"collapseOne",children:["Direct Bank Transfer"," ",(0,d.jsx)("i",{className:"fas fa-money-check"})]}),(0,d.jsx)(f.Z.Collapse,{eventKey:"collapseOne","data-parent":"#paymentMethod",style:{},children:(0,d.jsx)("p",{children:"Make your payment directly into our bank account. Please use your Order ID as the payment reference. Your order will not be shipped our account."})})]}),(0,d.jsxs)("li",{className:"custom-control custom-radio",children:[(0,d.jsx)("input",{type:"radio",className:"custom-control-input",id:"methodtwo",name:"defaultExampleRadios"}),(0,d.jsxs)(f.Z.Toggle,{as:"label",className:"custom-control-label collapsed",htmlFor:"methodtwo","data-toggle":"collapse","data-target":"#collapseTwo",eventKey:"collapseTwo",children:["Cash On Delivery ",(0,d.jsx)("i",{className:"fas fa-truck"})]}),(0,d.jsx)(f.Z.Collapse,{eventKey:"collapseTwo","data-parent":"#paymentMethod",style:{},children:(0,d.jsx)("p",{children:"Pay with cash upon delivery."})})]}),(0,d.jsxs)("li",{className:"custom-control custom-radio",children:[(0,d.jsx)("input",{type:"radio",className:"custom-control-input",id:"methodthree",name:"defaultExampleRadios"}),(0,d.jsxs)(f.Z.Toggle,{as:"label",className:"custom-control-label collapsed",htmlFor:"methodthree","data-toggle":"collapse","data-target":"#collapsethree",eventKey:"collapsethree",children:["Paypal ",(0,d.jsx)("i",{className:"fab fa-cc-paypal"})]}),(0,d.jsx)(f.Z.Collapse,{eventKey:"collapsethree","data-parent":"#paymentMethod",style:{},children:(0,d.jsx)("p",{children:"Pay via PayPal; you can pay with your credit card if you don’t have a PayPal account."})})]})]}),(0,d.jsx)("p",{children:"Your personal data will be used to process your order, support your experience throughout this website, and for other purposes described in our privacy policy."}),(0,d.jsx)("button",{type:"button",className:"theme-btn mt-15",children:"Place order"})]})}),(0,d.jsx)("div",{className:"col-lg-5",children:(0,d.jsxs)("div",{className:"shoping-cart-total mt-45 wow fadeInUp delay-0-4s",children:[(0,d.jsx)("h4",{className:"form-title m-25",children:"Cart Totals"}),(0,d.jsx)("table",{children:(0,d.jsxs)("tbody",{children:[b.map(function(a){return(0,d.jsxs)("tr",{children:[(0,d.jsxs)("td",{children:[a.title," ",(0,d.jsxs)("strong",{children:["\xd7 ",a.quantity]})]}),(0,d.jsxs)("td",{children:["$",(a.quantity*a.price).toFixed(2)]})]},a.id)}),(0,d.jsxs)("tr",{children:[(0,d.jsx)("td",{children:"Shipping Fee"}),(0,d.jsxs)("td",{children:["$",m.toFixed(2)]})]}),(0,d.jsxs)("tr",{children:[(0,d.jsx)("td",{children:"Vat"}),(0,d.jsxs)("td",{children:["$",Number(j).toFixed(2)]})]}),(0,d.jsxs)("tr",{children:[(0,d.jsx)("td",{children:(0,d.jsx)("strong",{children:"Order Total"})}),(0,d.jsx)("td",{children:(0,d.jsxs)("strong",{children:["$",Number(p).toFixed(2)]})})]})]})})]})})]})})]})})]})};b.default=i},2745:function(a,b,c){"use strict";var d=c(5893),e=c(1664),f=c.n(e),g=function(a){var b=a.pageName,c=a.pageTitle;return(0,d.jsx)("section",{className:"page-banner text-white py-165 rpy-130",style:{backgroundImage:"url(assets/images/banner/banner.jpg)"},children:(0,d.jsx)("div",{className:"container",children:(0,d.jsxs)("div",{className:"banner-inner",children:[(0,d.jsx)("h1",{className:"page-title wow fadeInUp delay-0-2s",children:c||b}),(0,d.jsx)("nav",{"aria-label":"breadcrumb",children:(0,d.jsxs)("ol",{className:"breadcrumb justify-content-center wow fadeInUp delay-0-4s",children:[(0,d.jsx)("li",{className:"breadcrumb-item",children:(0,d.jsx)(f(),{href:"/",children:"Home"})}),(0,d.jsx)("li",{className:"breadcrumb-item active",children:b})]})})]})})})};b.Z=g},7691:function(a,b,c){"use strict";c.d(b,{Z:function(){return F}});var d,e=c(7462),f=c(3366),g=c(4184),h=c.n(g),i=c(7294),j=c(7150),k=c(6792),l=c(5017),m=i.createContext(null);m.displayName="AccordionContext";var n=m,o=["as","children","eventKey","onClick"],p=i.forwardRef(function(a,b){var c,d,g,h,j=a.as,k=void 0===j?"button":j,m=a.children,p=a.eventKey,q=a.onClick,r=(0,f.Z)(a,o),s=(c=p,d=q,g=(0,i.useContext)(n),h=(0,i.useContext)(l.Z),function(a){h&&h(c===g?null:c,a),d&&d(a)});return"button"===k&&(r.type="button"),i.createElement(k,(0,e.Z)({ref:b,onClick:s},r),m)}),q=c(3640),r=c(3170),s=c(1404),t=c(6833),u=c(4509),v=["onEnter","onEntering","onEntered","onExit","onExiting","className","children","dimension","getDimensionValue"],w={height:["marginTop","marginBottom"],width:["marginLeft","marginRight"]};function x(a,b){var c=b["offset"+a[0].toUpperCase()+a.slice(1)],d=w[a];return c+parseInt((0,q.Z)(b,d[0]),10)+parseInt((0,q.Z)(b,d[1]),10)}var y=((d={})[r.Wj]="collapse",d[r.Ix]="collapsing",d[r.d0]="collapsing",d[r.cn]="collapse show",d),z=i.forwardRef(function(a,b){var c=a.onEnter,d=a.onEntering,g=a.onEntered,j=a.onExit,k=a.onExiting,l=a.className,m=a.children,n=a.dimension,o=void 0===n?"height":n,p=a.getDimensionValue,q=void 0===p?x:p,w=(0,f.Z)(a,v),z="function"==typeof o?o():o,A=(0,i.useMemo)(function(){return(0,t.Z)(function(a){a.style[z]="0"},c)},[z,c]),B=(0,i.useMemo)(function(){return(0,t.Z)(function(a){var b="scroll"+z[0].toUpperCase()+z.slice(1);a.style[z]=a[b]+"px"},d)},[z,d]),C=(0,i.useMemo)(function(){return(0,t.Z)(function(a){a.style[z]=null},g)},[z,g]),D=(0,i.useMemo)(function(){return(0,t.Z)(function(a){a.style[z]=q(z,a)+"px",(0,u.Z)(a)},j)},[j,q,z]),E=(0,i.useMemo)(function(){return(0,t.Z)(function(a){a.style[z]=null},k)},[z,k]);return i.createElement(r.ZP,(0,e.Z)({ref:b,addEndListener:s.Z},w,{"aria-expanded":w.role?w.in:null,onEnter:A,onEntering:B,onEntered:C,onExit:D,onExiting:E}),function(a,b){return i.cloneElement(m,(0,e.Z)({},b,{className:h()(l,m.props.className,y[a],"width"===z&&"width")}))})});z.defaultProps={in:!1,timeout:300,mountOnEnter:!1,unmountOnExit:!1,appear:!1,getDimensionValue:x};var A=z,B=["children","eventKey"],C=i.forwardRef(function(a,b){var c=a.children,d=a.eventKey,g=(0,f.Z)(a,B),h=(0,i.useContext)(n);return i.createElement(l.Z.Provider,{value:null},i.createElement(A,(0,e.Z)({ref:b,in:h===d},g),i.createElement("div",null,i.Children.only(c))))});C.displayName="AccordionCollapse";var D=["as","activeKey","bsPrefix","children","className","onSelect"],E=i.forwardRef(function(a,b){var c=(0,j.Ch)(a,{activeKey:"onSelect"}),d=c.as,g=c.activeKey,m=c.bsPrefix,o=c.children,p=c.className,q=c.onSelect,r=(0,f.Z)(c,D),s=h()(p,(0,k.vE)(m,"accordion"));return i.createElement(n.Provider,{value:g||null},i.createElement(l.Z.Provider,{value:q||null},i.createElement(void 0===d?"div":d,(0,e.Z)({ref:b},r,{className:s}),o)))});E.displayName="Accordion",E.Toggle=p,E.Collapse=C;var F=E}},function(a){a.O(0,[95,856,79,774,888,179],function(){var b;return a(a.s=5248)}),_N_E=a.O()}])