(this["webpackJsonpshopping-cart"]=this["webpackJsonpshopping-cart"]||[]).push([[0],{72:function(e,t,c){},81:function(e,t,c){},82:function(e,t,c){},83:function(e,t,c){"use strict";c.r(t);var s=c(1),n=c.n(s),a=c(30),i=c.n(a),r=(c(72),c(17)),l=c(11),j=c(2);function o(){return Object(j.jsx)("div",{children:"Home"})}var d=c(3),b=c(9),h=c(60);c(84);h.a.initializeApp({apiKey:"AIzaSyDmNd3snO0p5P5XZf44aAY52FLs6hR96Q4",authDomain:"shopping-cart-194e5.firebaseapp.com",projectId:"shopping-cart-194e5",storageBucket:"shopping-cart-194e5.appspot.com",messagingSenderId:"381315497170",appId:"1:381315497170:web:7f903c8d21ca4a6700410b"});var x=h.a.firestore(),u=c(37),O=c(31);function p(e){var t=e.data;return Object(j.jsx)("div",{className:"shop-list",children:Object(j.jsxs)(O.a,{className:"d-flex flex-wrap justify-content-center align-items-center gap-5",md:5,xs:8,children:[console.log(t),t.map((function(e){return Object(j.jsxs)(u.a,{bg:"light",text:"dark",style:{width:"18rem"},children:[Object(j.jsx)(u.a.Img,{variant:"top",src:e.pic}),Object(j.jsx)(u.a.Header,{children:e.title}),Object(j.jsxs)(u.a.Body,{children:[Object(j.jsxs)(u.a.Text,{children:[e.desc.substring(0,100),"..."]}),Object(j.jsxs)("div",{className:"d-flex flex-row justify-content-center align-items-center gap-3",children:[Object(j.jsxs)(u.a.Subtitle,{children:[e.price," $"]}),Object(j.jsx)(r.b,{to:"/products/".concat(e.id),role:"button",className:"btn btn-outline-primary",children:"More info"})]})]})]},e.id)}))]})})}var m=c(34),f=c(26),g=c(27);function v(e){var t=e.onCategory;return Object(j.jsxs)("div",{children:[Object(j.jsx)("div",{className:"mt-5",children:Object(j.jsx)("h6",{className:"display-6",children:"Categories"})}),Object(j.jsx)("hr",{}),Object(j.jsx)("div",{className:"mb-3",children:Object(j.jsxs)(g.a,{variant:"pills",defaultActiveKey:"link-0",className:"flex-column",children:[Object(j.jsx)(g.a.Item,{children:Object(j.jsx)(g.a.Link,{as:r.b,to:"/shop",eventKey:"link-0",onClick:function(){t("")},children:"All products"})}),Object(j.jsx)(g.a.Item,{children:Object(j.jsx)(g.a.Link,{as:r.b,to:"/shop?q=kitchen",eventKey:"link-1",onClick:function(){t("Kitchen")},children:"Kitchen"})}),Object(j.jsx)(g.a.Item,{children:Object(j.jsx)(g.a.Link,{as:r.b,to:"/shop?q=living-room",eventKey:"link-2",onClick:function(){t("Living Room")},children:"Living Room"})}),Object(j.jsx)(g.a.Item,{children:Object(j.jsx)(g.a.Link,{as:r.b,to:"/shop?q=bedroom",eventKey:"link-3",onClick:function(){t("Bedroom")},children:"Bedroom"})})]})})]})}function y(){var e=Object(s.useState)(null),t=Object(b.a)(e,2),c=t[0],n=t[1],a=Object(s.useState)(!1),i=Object(b.a)(a,2),r=i[0],l=i[1],o=Object(s.useState)(""),h=Object(b.a)(o,2),u=h[0],g=h[1];return Object(s.useEffect)((function(){var e=x.collection("products");u&&(e=e.where("category","==",u)),e.get().then((function(e){if(e.empty)l("We are out of items right now!"),n([]);else{var t=[];e.docs.forEach((function(e){t.push(Object(d.a)({id:e.id},e.data()))})),l(!1),n(t),console.log("Use Effect Shop",c)}})).catch((function(e){l(e.message)}))}),[u]),Object(j.jsx)("div",{className:"shop",style:{minHeight:"800px"},children:Object(j.jsx)(O.a,{className:"my-3",style:{minHeight:"800px"},children:Object(j.jsxs)(m.a,{className:"gap-2 justify-content-center",style:{minHeight:"800px"},children:[Object(j.jsx)(f.a,{className:"bg-light border rounded",xs:8,md:2,children:Object(j.jsx)(v,{onCategory:function(e){g(e)}})}),Object(j.jsxs)(f.a,{className:"border rounded p-3",children:[r&&Object(j.jsx)("p",{className:"error",children:r}),c&&Object(j.jsx)(p,{data:c})]})]})})})}function N(){return Object(j.jsx)("div",{children:"About"})}var k=c(67),w=c(52),S=c.p+"static/media/fav.e0e2f892.svg",I=c.p+"static/media/shipping.9b8df7ce.svg";function A(){var e=Object(s.useState)(null),t=Object(b.a)(e,2),c=t[0],n=t[1],a=Object(s.useState)(!1),i=Object(b.a)(a,2),r=(i[0],i[1],Object(s.useState)(!1)),o=Object(b.a)(r,2),d=o[0],h=o[1],u=Object(l.f)().id;return Object(s.useEffect)((function(){x.collection("products").doc(u).get().then((function(e){e.exists?(n(e.data()),h(!1)):h("The product does not exist")}))}),[u]),Object(j.jsxs)(O.a,{className:"mt-4",children:[d&&Object(j.jsx)("p",{className:"error",children:d}),c&&Object(j.jsxs)(m.a,{className:"gap-5 justify-content-center",children:[Object(j.jsx)(f.a,{xs:"12",md:"8",lg:"7",children:Object(j.jsx)(k.a,{src:c.pic,fluid:!0})}),Object(j.jsxs)(f.a,{xs:"10",md:"4",lg:"4",children:[Object(j.jsx)("h2",{className:"display-2",children:c.title}),Object(j.jsx)("hr",{}),Object(j.jsx)("p",{style:{textAlign:"justify"},children:c.desc}),Object(j.jsx)("hr",{}),Object(j.jsx)(O.a,{children:Object(j.jsxs)(m.a,{className:"justify-content-center align-items-center my-3",children:[Object(j.jsxs)(f.a,{xs:"12",lg:"7",className:"d-flex flex-direction-row gap-3 justify-content-center",children:[Object(j.jsx)("h6",{className:"display-6",children:"Price:"}),Object(j.jsxs)("h6",{className:"display-6",children:[c.price," $"]})]}),Object(j.jsx)(f.a,{xs:"12",lg:"5",children:Object(j.jsx)(w.a,{variant:"outline-primary",children:"Add to cart"})})]})}),Object(j.jsx)("hr",{}),Object(j.jsxs)(O.a,{children:[Object(j.jsxs)(m.a,{className:"d-flex gap-2",children:[Object(j.jsx)(f.a,{xs:"1",children:Object(j.jsx)("img",{src:S,alt:"Favorite Icon"})}),Object(j.jsx)(f.a,{xs:"10",className:"d-flex justify-content-start",children:Object(j.jsx)("p",{className:"text-muted",style:{textAlign:"justify"},children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum rutrum nunc in metus cursus eleifend."})})]}),Object(j.jsxs)(m.a,{className:"d-flex gap-2",children:[Object(j.jsx)(f.a,{xs:"1",children:Object(j.jsx)("img",{src:I,alt:"Shipping Icon"})}),Object(j.jsx)(f.a,{xs:"10",className:"d-flex justify-content-start",children:Object(j.jsx)("p",{className:"text-muted",style:{textAlign:"justify"},children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum rutrum nunc in metus cursus eleifend."})})]})]})]})]})]})}c(81);var H,C,E=c(56),L=c(35),B=["title","titleId"];function K(){return K=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var c=arguments[t];for(var s in c)Object.prototype.hasOwnProperty.call(c,s)&&(e[s]=c[s])}return e},K.apply(this,arguments)}function z(e,t){if(null==e)return{};var c,s,n=function(e,t){if(null==e)return{};var c,s,n={},a=Object.keys(e);for(s=0;s<a.length;s++)c=a[s],t.indexOf(c)>=0||(n[c]=e[c]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(s=0;s<a.length;s++)c=a[s],t.indexOf(c)>=0||Object.prototype.propertyIsEnumerable.call(e,c)&&(n[c]=e[c])}return n}function M(e,t){var c=e.title,n=e.titleId,a=z(e,B);return s.createElement("svg",K({xmlns:"http://www.w3.org/2000/svg",height:"24px",viewBox:"0 0 24 24",width:"24px",fill:"#000000",ref:t,"aria-labelledby":n},a),c?s.createElement("title",{id:n},c):null,H||(H=s.createElement("path",{d:"M0 0h24v24H0z",fill:"none"})),C||(C=s.createElement("path",{d:"M7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zM1 2v2h2l3.6 7.59-1.35 2.45c-.16.28-.25.61-.25.96 0 1.1.9 2 2 2h12v-2H7.42c-.14 0-.25-.11-.25-.25l.03-.12.9-1.63h7.45c.75 0 1.41-.41 1.75-1.03l3.58-6.49c.08-.14.12-.31.12-.48 0-.55-.45-1-1-1H5.21l-.94-2H1zm16 16c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2z"})))}var P=s.forwardRef(M);c.p;function F(){var e=Object(s.useState)(!1),t=Object(b.a)(e,2),c=t[0],n=t[1];return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)(w.a,{onClick:function(){return n(!0)},variant:"link",children:Object(j.jsx)(P,{fill:"#936fac"})}),Object(j.jsxs)(L.a,{show:c,onHide:function(){return n(!1)},placement:"end",children:[Object(j.jsx)(L.a.Header,{closeButton:!0,children:Object(j.jsx)(L.a.Title,{children:"Shopping Cart"})}),Object(j.jsx)(L.a.Body,{children:"Some text as placeholder. In real life you can have the elements you have chosen. Like, text, images, lists, etc."})]})]})}function R(){return Object(j.jsx)("div",{children:Object(j.jsx)(E.a,{bg:"light",expand:"lg",className:"py-4 border-bottom",children:Object(j.jsxs)(O.a,{children:[Object(j.jsx)(r.c,{exact:!0,to:"/home",className:"navbar-brand",children:"MinimFurn"}),Object(j.jsx)(E.a.Toggle,{"aria-controls":"basic-navbar-nav"}),Object(j.jsxs)(E.a.Collapse,{className:"justify-content-end gap-5",id:"basic-navbar-nav",children:[Object(j.jsxs)(g.a,{className:"gap-3",children:[Object(j.jsx)(r.c,{exact:!0,to:"/home",className:"nav-link",children:"Home"}),Object(j.jsx)(r.c,{exact:!0,to:"/shop",className:"nav-link",children:"Shop"}),Object(j.jsx)(r.c,{exact:!0,to:"/about",className:"nav-link",children:"About"})]}),Object(j.jsx)(F,{})]})]})})})}var T=function(){return Object(j.jsx)("div",{className:"App",children:Object(j.jsxs)(r.a,{children:[Object(j.jsx)(R,{}),Object(j.jsxs)(l.c,{children:[Object(j.jsx)(l.a,{exact:!0,path:"/home",children:Object(j.jsx)(o,{})}),Object(j.jsx)(l.a,{exact:!0,path:"/shop",children:Object(j.jsx)(y,{})}),Object(j.jsx)(l.a,{exact:!0,path:"/about",children:Object(j.jsx)(N,{})}),Object(j.jsx)(l.a,{path:"/products/:id",children:Object(j.jsx)(A,{})})]})]})})};c(82);i.a.render(Object(j.jsx)(n.a.StrictMode,{children:Object(j.jsx)(T,{})}),document.getElementById("root"))}},[[83,1,2]]]);
//# sourceMappingURL=main.e49ae96d.chunk.js.map