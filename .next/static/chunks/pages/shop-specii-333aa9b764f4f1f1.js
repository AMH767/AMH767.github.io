(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[490],{7098:function(a,b,c){(window.__NEXT_P=window.__NEXT_P||[]).push(["/shop-specii",function(){return c(4985)}])},638:function(a,b,c){"use strict";Object.defineProperty(b,"__esModule",{value:!0});var d=c(6856).Z;Object.defineProperty(b,"__esModule",{value:!0}),b.default=function(a,b){var c=g.default,f={loading:function(a){return a.error,a.isLoading,a.pastDelay,null}};if(d(a,Promise)?f.loader=function(){return a}:"function"==typeof a?f.loader=a:"object"==typeof a&&(f=e({},f,a)),(f=e({},f,b)).loadableGenerated&&delete(f=e({},f,f.loadableGenerated)).loadableGenerated,"boolean"==typeof f.ssr&&!f.suspense){if(!f.ssr)return delete f.ssr,h(c,f);delete f.ssr}return c(f)},b.noSSR=h;var e=c(6495).Z,f=c(2648).Z,g=(f(c(7294)),f(c(4302)));function h(a,b){return delete b.webpack,delete b.modules,a(b)}("function"==typeof b.default||"object"==typeof b.default&&null!==b.default)&& void 0===b.default.__esModule&&(Object.defineProperty(b.default,"__esModule",{value:!0}),Object.assign(b.default,b),a.exports=b.default)},6319:function(a,b,c){"use strict";Object.defineProperty(b,"__esModule",{value:!0}),b.LoadableContext=void 0;var d=(0,c(2648).Z)(c(7294)).default.createContext(null);b.LoadableContext=d},4302:function(a,b,c){"use strict";Object.defineProperty(b,"__esModule",{value:!0});var d=c(9658).Z,e=c(7222).Z;Object.defineProperty(b,"__esModule",{value:!0}),b.default=void 0;var f=c(6495).Z,g=(0,c(2648).Z)(c(7294)),h=c(6319),i=c(7294).useSyncExternalStore,j=[],k=[],l=!1;function m(a){var b=a(),c={loading:!0,loaded:null,error:null};return c.promise=b.then(function(a){return c.loading=!1,c.loaded=a,a}).catch(function(a){throw c.loading=!1,c.error=a,a}),c}var n=function(){function a(b,c){d(this,a),this._loadFn=b,this._opts=c,this._callbacks=new Set,this._delay=null,this._timeout=null,this.retry()}return e(a,[{key:"promise",value:function(){return this._res.promise}},{key:"retry",value:function(){var a=this;this._clearTimeouts(),this._res=this._loadFn(this._opts.loader),this._state={pastDelay:!1,timedOut:!1};var b=this._res,c=this._opts;b.loading&&("number"==typeof c.delay&&(0===c.delay?this._state.pastDelay=!0:this._delay=setTimeout(function(){a._update({pastDelay:!0})},c.delay)),"number"==typeof c.timeout&&(this._timeout=setTimeout(function(){a._update({timedOut:!0})},c.timeout))),this._res.promise.then(function(){a._update({}),a._clearTimeouts()}).catch(function(b){a._update({}),a._clearTimeouts()}),this._update({})}},{key:"_update",value:function(a){this._state=f({},this._state,{error:this._res.error,loaded:this._res.loaded,loading:this._res.loading},a),this._callbacks.forEach(function(a){return a()})}},{key:"_clearTimeouts",value:function(){clearTimeout(this._delay),clearTimeout(this._timeout)}},{key:"getCurrentValue",value:function(){return this._state}},{key:"subscribe",value:function(a){var b=this;return this._callbacks.add(a),function(){b._callbacks.delete(a)}}}]),a}();function o(a){return function(a,b){var c=function(){if(!o){var b=new n(a,m);o={getCurrentValue:b.getCurrentValue.bind(b),subscribe:b.subscribe.bind(b),retry:b.retry.bind(b),promise:b.promise.bind(b)}}return o.promise()},d=function(){c();var a=g.default.useContext(h.LoadableContext);a&&Array.isArray(m.modules)&&m.modules.forEach(function(b){a(b)})},e=function(a,b){d();var c=i(o.subscribe,o.getCurrentValue,o.getCurrentValue);return g.default.useImperativeHandle(b,function(){return{retry:o.retry}},[]),g.default.useMemo(function(){var b;return c.loading||c.error?g.default.createElement(m.loading,{isLoading:c.loading,pastDelay:c.pastDelay,timedOut:c.timedOut,error:c.error,retry:o.retry}):c.loaded?g.default.createElement((b=c.loaded)&&b.__esModule?b.default:b,a):null},[a,c])},j=function(a,b){return d(),g.default.createElement(m.lazy,f({},a,{ref:b}))},m=Object.assign({loader:null,loading:null,delay:200,timeout:null,webpack:null,modules:null,suspense:!1},b);m.suspense&&(m.lazy=g.default.lazy(m.loader));var o=null;if(!l){var p=m.webpack?m.webpack():m.modules;p&&k.push(function(a){var b=!0,d=!1,e=void 0;try{for(var f,g=p[Symbol.iterator]();!(b=(f=g.next()).done);b=!0){var h=f.value;if(-1!==a.indexOf(h))return c()}}catch(i){d=!0,e=i}finally{try{b||null==g.return||g.return()}finally{if(d)throw e}}})}var q=m.suspense?j:e;return q.preload=function(){return c()},q.displayName="LoadableComponent",g.default.forwardRef(q)}(m,a)}function p(a,b){for(var c=[];a.length;){var d=a.pop();c.push(d(b))}return Promise.all(c).then(function(){if(a.length)return p(a,b)})}o.preloadAll=function(){return new Promise(function(a,b){p(j).then(a,b)})},o.preloadReady=function(){var a=arguments.length>0&& void 0!==arguments[0]?arguments[0]:[];return new Promise(function(b){var c=function(){return l=!0,b()};p(k,a).then(c,c)})},window.__NEXT_PRELOADREADY=o.preloadReady,b.default=o},4985:function(a,b,c){"use strict";c.r(b),c.d(b,{ShopSpecii:function(){return p}});var d=c(1799),e=c(9396),f=c(5893),g=c(1664),h=c.n(g),i=c(2745);c(5957);var j=c(7079),k=c(6066),l=c(5968),m=c(5152),n=c.n(m),o=n()(function(){return Promise.all([c.e(391),c.e(458)]).then(c.bind(c,7458))},{loadableGenerated:{webpack:function(){return[7458]}},ssr:!1}),p=function(){return(0,f.jsxs)(j.Z,{children:[(0,f.jsx)(i.Z,{pageName:"Сделать заказ"}),(0,f.jsx)("section",{className:"shop-area-three rel z-1 py-50",children:(0,f.jsx)("div",{className:"container-fluid",children:(0,f.jsx)(o,{})})}),(0,f.jsx)("section",{className:"related-product rel z-1 pt-125 rpt-95 pb-130 rpb-100",children:(0,f.jsxs)("div",{className:"container",children:[(0,f.jsx)("div",{className:"section-title text-center mb-60",children:(0,f.jsx)("h3",{children:"Специи"})}),(0,f.jsxs)(k.Z,(0,e.Z)((0,d.Z)({},l.dL),{className:"product-active-two",children:[(0,f.jsxs)("div",{className:"product-item wow fadeInUp delay-0-2s",children:[(0,f.jsx)("div",{className:"image",children:(0,f.jsx)("img",{src:"https://raw.githubusercontent.com/Alen44141/images/main/Specii/badyan.png",alt:"Product"})}),(0,f.jsxs)("div",{className:"content",children:[(0,f.jsx)("h5",{children:(0,f.jsx)(h(),{href:"/product-badyan",children:"Бадьян"})}),(0,f.jsx)("span",{className:"price",children:(0,f.jsx)("span",{children:"180 / 100гр"})})]})]}),(0,f.jsxs)("div",{className:"product-item wow fadeInUp delay-0-4s",children:[(0,f.jsx)("div",{className:"image",children:(0,f.jsx)("img",{src:"https://raw.githubusercontent.com/Alen44141/images/main/Specii/muskatni_orex.png",alt:"Product"})}),(0,f.jsxs)("div",{className:"content",children:[(0,f.jsx)("h5",{children:(0,f.jsx)(h(),{href:"/product-details",children:"Мускатный орех"})}),(0,f.jsx)("span",{className:"price",children:(0,f.jsx)("span",{children:"500 / кг"})})]})]}),(0,f.jsxs)("div",{className:"product-item wow fadeInUp delay-0-6s",children:[(0,f.jsx)("div",{className:"image",children:(0,f.jsx)("img",{src:"https://raw.githubusercontent.com/Alen44141/images/main/Specii/imbir.png",alt:"Product"})}),(0,f.jsxs)("div",{className:"content",children:[(0,f.jsx)("h5",{children:(0,f.jsx)(h(),{href:"/product-details",children:"Имбирь молотый"})}),(0,f.jsx)("span",{className:"price",children:(0,f.jsx)("span",{children:"450"})})]})]}),(0,f.jsxs)("div",{className:"product-item wow fadeInUp delay-0-8s",children:[(0,f.jsx)("span",{className:"offer bg-red",children:"Распродажа"}),(0,f.jsx)("div",{className:"image",children:(0,f.jsx)("img",{src:"https://raw.githubusercontent.com/Alen44141/images/main/Specii/karica_moloti.png",alt:"Product"})}),(0,f.jsxs)("div",{className:"content",children:[(0,f.jsx)("h5",{children:(0,f.jsx)(h(),{href:"/product-details",children:"Карица молотый"})}),(0,f.jsx)("span",{className:"price",children:(0,f.jsx)("span",{children:"45 / 100гр"})})]})]}),(0,f.jsxs)("div",{className:"product-item wow fadeInUp delay-0-2s",children:[(0,f.jsx)("div",{className:"image",children:(0,f.jsx)("img",{src:"https://raw.githubusercontent.com/Alen44141/images/main/Specii/shafran.png",alt:"Product"})}),(0,f.jsxs)("div",{className:"content",children:[(0,f.jsx)("h5",{children:(0,f.jsx)(h(),{href:"/product-details",children:"Шафран молотый"})}),(0,f.jsx)("span",{className:"price",children:(0,f.jsx)("span",{children:"45 / 100гр"})})]})]})]}))]})})]})};b.default=p},2745:function(a,b,c){"use strict";var d=c(5893),e=c(1664),f=c.n(e),g=function(a){var b=a.pageName,c=a.pageTitle;return(0,d.jsx)("section",{className:"page-banner text-white py-165 rpy-130",style:{backgroundImage:"url(assets/images/banner/banner.jpg)"},children:(0,d.jsx)("div",{className:"container",children:(0,d.jsxs)("div",{className:"banner-inner",children:[(0,d.jsx)("h1",{className:"page-title wow fadeInUp delay-0-2s",children:c||b}),(0,d.jsx)("nav",{"aria-label":"breadcrumb",children:(0,d.jsxs)("ol",{className:"breadcrumb justify-content-center wow fadeInUp delay-0-4s",children:[(0,d.jsx)("li",{className:"breadcrumb-item",children:(0,d.jsx)(f(),{href:"/",children:"Home"})}),(0,d.jsx)("li",{className:"breadcrumb-item active",children:b})]})})]})})})};b.Z=g},5957:function(a,b,c){"use strict";var d=c(5893),e=c(7294),f=c(0),g=function(a){var b,c=a.paginationCls,g=a.defaultSort||2,h=(0,e.useState)(1),i=h[0],j=h[1],k=(0,e.useState)([]),l=k[0],m=k[1];return(0,e.useEffect)(function(){(0,f.oA)(c,g,i);var a=document.querySelectorAll(c);m((0,f.ot)(a.length,g))},[i]),(0,d.jsxs)(e.Fragment,{children:[(0,d.jsx)("li",{className:"page-item ".concat(1==i?"disabled":""),children:(0,d.jsx)("a",{className:"page-link",href:"#",onClick:function(a){a.preventDefault(),j(1===i?1:i-1)},children:(0,d.jsx)("i",{className:"fas fa-chevron-left"})})}),l&&l.map(function(a,b){return(0,d.jsx)("li",{className:"page-item ".concat(i===a?"active":""),children:(0,d.jsx)("a",{className:"page-link",href:"#",onClick:function(b){b.preventDefault(),j(a)},children:a})},b)}),(0,d.jsx)("li",{className:"page-item ".concat(i==l.length?"disabled":""),children:(0,d.jsx)("a",{className:"page-link",href:"#",onClick:function(a){a.preventDefault(),j(i===l.length?l.length:i+1)},children:(0,d.jsx)("i",{className:"fas fa-chevron-right"})})})]})};b.Z=g},5968:function(a,b,c){"use strict";c.d(b,{"$K":function(){return h},"$R":function(){return j},GZ:function(){return f},M4:function(){return g},dL:function(){return i},zk:function(){return k}});var d=c(5893),e=function(a){var b=a.arrowCls,c=a.onClick,e=a.icon;return(0,d.jsx)("button",{className:b,onClick:c,children:(0,d.jsx)("i",{className:e})})},f={dots:!0,infinite:!0,autoplay:!1,autoplaySpeed:2e3,arrows:!1,speed:1e3,focusOnSelect:!0,slidesToShow:4,slidesToScroll:2,responsive:[{breakpoint:1200,settings:{slidesToShow:3}},{breakpoint:992,settings:{slidesToShow:2}},{breakpoint:575,settings:{slidesToShow:1,slidesToScroll:1}},]},g={dots:!1,infinite:!0,autoplay:!0,autoplaySpeed:2e3,arrows:!1,speed:1e3,slidesToShow:6,slidesToScroll:1,responsive:[{breakpoint:1200,settings:{slidesToShow:5}},{breakpoint:992,settings:{slidesToShow:4}},{breakpoint:767,settings:{slidesToShow:3}},{breakpoint:575,settings:{slidesToShow:2}},]},h={dots:!1,infinite:!0,autoplay:!1,autoplaySpeed:2e3,arrows:!0,speed:1e3,prevArrow:(0,d.jsx)(e,{arrowCls:"slider-prev slick-arrow",icon:"fas fa-chevron-left"}),nextArrow:(0,d.jsx)(e,{arrowCls:"slider-next slick-arrow",icon:"fas fa-chevron-right"}),focusOnSelect:!0,slidesToShow:6,slidesToScroll:2,responsive:[{breakpoint:1500,settings:{slidesToShow:5}},{breakpoint:1300,settings:{slidesToShow:4}},{breakpoint:992,settings:{slidesToShow:3}},{breakpoint:768,settings:{slidesToShow:2}},{breakpoint:480,settings:{slidesToShow:1,slidesToScroll:1}},]},i={dots:!0,infinite:!0,autoplay:!1,autoplaySpeed:2e3,arrows:!1,speed:1e3,focusOnSelect:!0,slidesToShow:4,slidesToScroll:2,responsive:[{breakpoint:1200,settings:{slidesToShow:3}},{breakpoint:992,settings:{slidesToShow:2}},{breakpoint:575,settings:{slidesToShow:1,slidesToScroll:1}},]},j={slidesToScroll:1,infinite:!0,speed:400,centerMode:!0,arrows:!1,variableWidth:!0,dots:!0,responsive:[{breakpoint:767,settings:{slidesToShow:1,centerMode:!1,variableWidth:!1}},]},k={slidesToShow:2,slidesToScroll:1,infinite:!0,speed:400,arrows:!1,dots:!0,responsive:[{breakpoint:767,settings:{slidesToShow:1,centerMode:!1,variableWidth:!1}},]}},5152:function(a,b,c){a.exports=c(638)}},function(a){a.O(0,[95,55,79,774,888,179],function(){var b;return a(a.s=7098)}),_N_E=a.O()}])