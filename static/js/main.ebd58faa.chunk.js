(this.webpackJsonpVmeste=this.webpackJsonpVmeste||[]).push([[0],{211:function(e,t,a){e.exports=a(322)},322:function(e,t,a){"use strict";a.r(t);a(212),a(238),a(240),a(241),a(243),a(244),a(245),a(246),a(247),a(248),a(249),a(250),a(252),a(253),a(254),a(255),a(256),a(257),a(258),a(259),a(260),a(261),a(263),a(264),a(265),a(266),a(267),a(268),a(269),a(270),a(271),a(272),a(273),a(274),a(275),a(276),a(277),a(278),a(279),a(280);var n=a(0),c=a.n(n),l=a(49),r=a.n(l),i=a(51),o=a.n(i),m=a(88),s=a.n(m),u=a(120),E=a(70),d=a(125),p=a.n(d),b=a(124),f=a.n(b),h=(a(289),a(38)),g=a.n(h),k=a(39),v=a.n(k),w=a(90),N=a.n(w),j=a(67),O=a.n(j),x=a(121),y=a.n(x),V=a(89),C=a.n(V),M=a(122),P=a.n(M),U=function(e){var t=e.id,a=e.go,n=e.fetchedUser;return c.a.createElement(g.a,{id:t},c.a.createElement(v.a,null,"Example"),n&&c.a.createElement(O.a,{title:"User Data Fetched with VK Bridge"},c.a.createElement(y.a,{before:n.photo_200?c.a.createElement(P.a,{src:n.photo_200}):null,description:n.city&&n.city.title?n.city.title:""},"".concat(n.first_name," ").concat(n.last_name))),c.a.createElement(O.a,{title:"Navigation Example"},c.a.createElement(C.a,null,c.a.createElement(N.a,{size:"xl",level:"2",onClick:a,"data-to":"Map"},"Map")),c.a.createElement(C.a,null,c.a.createElement(N.a,{size:"xl",level:"2",onClick:a,"data-to":"News"},"News"))))},_=a(32),A=a(55),I=a.n(A),K=a(52),z=a.n(K),F=a(53),S=a.n(F),W=a(54),B=a.n(W),J=(a(87),Object(_.b)()),T=function(e){return c.a.createElement(g.a,{id:e.id},c.a.createElement(v.a,{left:c.a.createElement(I.a,{onClick:e.go,"data-to":"home"},J===_.a?c.a.createElement(z.a,null):c.a.createElement(S.a,null))},"Persik"),c.a.createElement("img",{className:"Persik",src:B.a,alt:"Persik The Cat"}))},D=a(342),G=a(341),q=Object(_.b)(),H=(!1).Friend,L=(!1).Photo,Q=(!1).Voice,R=(!1).Music,X=function(e){return c.a.createElement(g.a,{id:e.id},c.a.createElement(v.a,{left:c.a.createElement(I.a,{onClick:e.go,"data-to":"home"},q===_.a?c.a.createElement(z.a,null):c.a.createElement(S.a,null))},"Map"),c.a.createElement("img",{className:"News",src:B.a,alt:"News"}),c.a.createElement(D.a,{control:c.a.createElement(G.a,{checked:H,name:"Friend"}),label:"\u0421 \u0437\u0430\u043f\u0438\u0441\u044f\u043c\u0438 \u0434\u0440\u0443\u0437\u0435\u0439"}),c.a.createElement(D.a,{control:c.a.createElement(G.a,{checked:L,name:"Photo"}),label:"\u0421 \u0444\u043e\u0442\u043e\u0433\u0440\u0430\u0444\u0438\u044f\u043c\u0438"}),c.a.createElement(D.a,{control:c.a.createElement(G.a,{checked:Q,name:"Voice"}),label:"\u0421 \u0433\u043e\u043b\u043e\u0441\u043e\u0432\u044b\u043c\u0438 \u0437\u0430\u043f\u0438\u0441\u044f\u043c\u0438"}),c.a.createElement(D.a,{control:c.a.createElement(G.a,{checked:R,name:"Music"}),label:"\u0421 \u043c\u0443\u0437\u044b\u043a\u043e\u0439"}))},Y=Object(_.b)(),Z=function(e){return c.a.createElement(g.a,{id:e.id},c.a.createElement(v.a,{left:c.a.createElement(I.a,{onClick:e.go,"data-to":"home"},Y===_.a?c.a.createElement(z.a,null):c.a.createElement(S.a,null))},"News"),c.a.createElement("img",{className:"News",src:B.a,alt:"News"}))},$=function(){var e=Object(n.useState)("home"),t=Object(E.a)(e,2),a=t[0],l=t[1],r=Object(n.useState)(null),i=Object(E.a)(r,2),m=i[0],d=i[1],b=Object(n.useState)(c.a.createElement(f.a,{size:"large"})),h=Object(E.a)(b,2),g=h[0],k=h[1];Object(n.useEffect)((function(){function e(){return(e=Object(u.a)(s.a.mark((function e(){var t;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o.a.send("VKWebAppGetUserInfo");case 2:t=e.sent,d(t),k(null);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}o.a.subscribe((function(e){var t=e.detail,a=t.type,n=t.data;if("VKWebAppUpdateConfig"===a){var c=document.createAttribute("scheme");c.value=n.scheme?n.scheme:"client_light",document.body.attributes.setNamedItem(c)}})),function(){e.apply(this,arguments)}()}),[]);var v=function(e){l(e.currentTarget.dataset.to)};return c.a.createElement(p.a,{activePanel:a,popout:g},c.a.createElement(U,{id:"home",fetchedUser:m,go:v}),c.a.createElement(T,{id:"persik",go:v}),c.a.createElement(Z,{id:"News",go:v}),c.a.createElement(X,{id:"Map",go:v}))};o.a.send("VKWebAppInit"),r.a.render(c.a.createElement($,null),document.getElementById("root"))},54:function(e,t,a){e.exports=a.p+"static/media/persik.4e1ec840.png"},87:function(e,t,a){}},[[211,1,2]]]);
//# sourceMappingURL=main.ebd58faa.chunk.js.map