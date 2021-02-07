(this["webpackJsonpreact-shopping-cart"]=this["webpackJsonpreact-shopping-cart"]||[]).push([[0],{79:function(n,t,e){"use strict";e.r(t);var r=e(4),i=e(0),c=e(10),a=e.n(c),o=e(45),s=e(26),d=e(49),u=e(48),j=e.n(u),l=e(54),b=e(115),x=e(113),f=e(110),p=e(112),h=e(59),m=e.n(h),O=e(111),v=e(106),g=e(19),C=e(20);function w(){var n=Object(g.a)(["\n  display: flex;\n  justify-content: space-between;\n  flex-direction: column;\n  width: 100%;\n  height: 100%;\n  border: 1px solid lightblue;\n  border-radius: 20px;\n\n  button {\n    border-radius: 0 0 20px 20px;\n  }\n\n  img {\n    max-height: 250px;\n    object-fit: cover;\n    border-radius: 20px 20px 0 0;\n  }\n\n  div {\n    font-family: Arial, Helvetica, sans-serif;\n    padding: 1rem;\n    height: 100%;\n  }\n"]);return w=function(){return n},n}var y=C.a.div(w()),k=function(n){var t=n.item,e=n.handleAddToCart;return Object(r.jsxs)(y,{children:[Object(r.jsx)("img",{src:t.image,alt:t.title}),Object(r.jsxs)("div",{children:[Object(r.jsx)("h3",{children:t.title}),Object(r.jsx)("p",{children:t.description}),Object(r.jsxs)("h3",{children:["$",t.price.toFixed(2)]})]}),Object(r.jsx)(v.a,{onClick:function(){return e(t)},children:"Add to cart"})]})};function T(){var n=Object(g.a)(["\n  display: flex;\n  justify-content: space-between;\n  font-family: Arial, Helvetica, sans-serif;\n  border-bottom: 1px solid lightblue;\n  padding-bottom: 20px;\n\n  div {\n    flex: 1;\n  }\n\n  .information,\n  .buttons {\n    display: flex;\n    justify-content: space-between;\n  }\n\n  img {\n    max-width: 120px;\n    object-fit: cover;\n    margin-left: 20px;\n  }\n"]);return T=function(){return n},n}var F=C.a.div(T()),A=function(n){var t=n.item,e=n.addToCart,i=n.removeFromCart;return Object(r.jsxs)(F,{children:[Object(r.jsxs)("div",{children:[Object(r.jsx)("h3",{children:t.title}),Object(r.jsxs)("div",{className:"information",children:[Object(r.jsxs)("p",{children:["Price: $",t.price]}),Object(r.jsxs)("p",{children:["Total: $",(t.amount*t.price).toFixed(2)]})]}),Object(r.jsxs)("div",{className:"buttons",children:[Object(r.jsx)(v.a,{size:"small",disableElevation:!0,variant:"contained",onClick:function(){return i(t.id)},children:"-"}),Object(r.jsx)("p",{children:t.amount}),Object(r.jsx)(v.a,{size:"small",disableElevation:!0,variant:"contained",onClick:function(){return e(t)},children:"+"})]})]}),Object(r.jsx)("img",{src:t.image,alt:t.title})]})};function z(){var n=Object(g.a)(["\n  font-family: Arial, Helvetica, sans-serif;\n  width: 500px;\n  padding: 20px;\n"]);return z=function(){return n},n}var E=C.a.aside(z()),S=function(n){var t,e=n.cartItems,i=n.addToCart,c=n.removeFromCart;return Object(r.jsxs)(E,{children:[Object(r.jsx)("h2",{children:"Your Shopping Cart"}),0===e.length?Object(r.jsx)("p",{children:"Your cart is empty"}):null,e.map((function(n){return Object(r.jsx)(A,{item:n,addToCart:i,removeFromCart:c},n.id)})),Object(r.jsxs)("h2",{children:["Total: $",(t=e,t.reduce((function(n,t){return n+t.amount*t.price}),0)).toFixed(2)]})]})},$=e(109);function H(){var n=Object(g.a)(["\n  position: fixed;\n  z-index: 100;\n  right: 30px;\n  top: 30px;\n  background: rgba(255, 255, 255, 0.8);\n  transform: scale(1.5);\n"]);return H=function(){return n},n}function I(){var n=Object(g.a)(["\n  margin: 1rem;\n"]);return I=function(){return n},n}var N=C.a.div(I()),J=Object(C.a)($.a)(H()),Y=function(){var n=Object(l.a)(j.a.mark((function n(){return j.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,fetch("https://fakestoreapi.com/products");case 2:return n.next=4,n.sent.json();case 4:return n.abrupt("return",n.sent);case 5:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),B=function(){var n,t=Object(i.useState)(!1),e=Object(d.a)(t,2),c=e[0],a=e[1],u=Object(i.useState)([]),j=Object(d.a)(u,2),l=j[0],h=j[1],g=Object(b.a)("products",Y),C=g.data,w=g.isLoading,y=g.error,T=function(n){h((function(t){return t.find((function(t){return t.id===n.id}))?t.map((function(t){return t.id===n.id?Object(s.a)(Object(s.a)({},t),{},{amount:t.amount+1}):t})):[].concat(Object(o.a)(t),[Object(s.a)(Object(s.a)({},n),{},{amount:1})])}))};return w?Object(r.jsx)(f.a,{}):y?Object(r.jsx)("div",{children:"Something went wrong..."}):Object(r.jsxs)(N,{children:[Object(r.jsxs)(x.a,{anchor:"right",open:c,onClose:function(){return a(!1)},children:[Object(r.jsx)(v.a,{className:"close",disableElevation:!0,size:"small",variant:"contained",onClick:function(){return a(!1)},children:"X"}),Object(r.jsx)(S,{cartItems:l,addToCart:T,removeFromCart:function(n){h((function(t){return t.reduce((function(t,e){return e.id===n?1===e.amount?t:[].concat(Object(o.a)(t),[Object(s.a)(Object(s.a)({},e),{},{amount:e.amount-1})]):[].concat(Object(o.a)(t),[e])}),[])}))}})]}),Object(r.jsx)(J,{onClick:function(){return a(!0)},children:Object(r.jsx)(O.a,{badgeContent:(n=l,n.reduce((function(n,t){return n+t.amount}),0)),color:"error",children:Object(r.jsx)(m.a,{})})}),Object(r.jsx)(p.a,{container:!0,spacing:3,children:null===C||void 0===C?void 0:C.map((function(n){return Object(r.jsx)(p.a,{item:!0,xs:12,sm:4,children:Object(r.jsx)(k,{item:n,handleAddToCart:T})},n.id)}))})]})},L=e(114),P=e(58),X=new L.a;a.a.render(Object(r.jsx)(P.a,{client:X,children:Object(r.jsx)(B,{})}),document.getElementById("root"))}},[[79,1,2]]]);
//# sourceMappingURL=main.0ebf0f8e.chunk.js.map