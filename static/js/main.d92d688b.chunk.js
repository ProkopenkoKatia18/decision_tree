(this.webpackJsonpchoise_tree=this.webpackJsonpchoise_tree||[]).push([[0],{15:function(e,t,n){},16:function(e,t,n){},18:function(e,t,n){"use strict";n.r(t);var s=n(1),i=n.n(s),r=n(7),l=n.n(r),a=(n(15),n(2)),o=(n(16),n(10)),u=n(8),d=n(6),c=function e(t){var n,s,i;Object(d.a)(this,e),this.value=t.question,this.left=null,this.middle=null,this.right=null,this.leftValue=(null===t||void 0===t||null===(n=t.answers)||void 0===n?void 0:n.left)||null,this.middleValue=(null===t||void 0===t||null===(s=t.answers)||void 0===s?void 0:s.middle)||null,this.rightValue=(null===t||void 0===t||null===(i=t.answers)||void 0===i?void 0:i.right)||null,this.parentValue=t.parentAnswer||null},h=function(){function e(){Object(d.a)(this,e),this.root=null}return Object(u.a)(e,[{key:"insert",value:function(e){var t=new c(e);null===this.root?this.root=t:this.insertNode(this.root,t)}},{key:"insertNode",value:function(e,t){return e.leftValue&&t.parentValue==e.leftValue?void(e.left=t):e.rightValue&&t.parentValue==e.rightValue?void(e.right=t):e.middleValue&&t.parentValue==e.middleValue?void(e.middle=t):(e.left&&this.insertNode(e.left,t),e.right&&this.insertNode(e.right,t),void(e.middle&&this.insertNode(e.middle,t)))}},{key:"getRoot",value:function(){return this.root}},{key:"find",value:function(e,t,n,s,i,r,l){if(!this.root)return!1;if(console.log("currentRoot",t),console.log("prevRoot",n),l((function(n){return[].concat(Object(o.a)(n),[{selectedQuestion:t.value,selectedAnswer:e}])})),e==t.leftValue){var a=t.left;s(t),i(a),r([null===a||void 0===a?void 0:a.leftValue,null===a||void 0===a?void 0:a.middleValue,null===a||void 0===a?void 0:a.rightValue])}if(e==t.rightValue){var u=t.right;i(u),r([null===u||void 0===u?void 0:u.leftValue,null===u||void 0===u?void 0:u.middleValue,null===u||void 0===u?void 0:u.rightValue])}if(e==t.middleValue){var d=t.middle;i(d),r([null===d||void 0===d?void 0:d.leftValue,null===d||void 0===d?void 0:d.middleValue,null===d||void 0===d?void 0:d.rightValue])}if("\u041d\u0435\u0442\u0443"==e){var c=n.middle;i(c),r([null===c||void 0===c?void 0:c.leftValue,null===c||void 0===c?void 0:c.middleValue,null===c||void 0===c?void 0:c.rightValue])}if("\u041d\u0435\u0442, \u043d\u0435 \u0434\u043e\u0441\u0442\u0430\u0442\u043e\u0447\u043d\u043e"==e||"\u041d\u0435\u0442, \u043d\u0435\u0441\u043a\u043e\u043b\u044c\u043a\u043e"==e){var h=n.left;i(h),r([null===h||void 0===h?void 0:h.leftValue,null===h||void 0===h?void 0:h.middleValue,null===h||void 0===h?void 0:h.rightValue])}}}]),e}(),w=n(9);var p=n(0),j=new h;!function(e){var t=w[0];Object.entries(t).map((function(t){var n=Object(a.a)(t,2),s=(n[0],n[1]);return e.insert(s)}))}(j);var v=function(){var e=Object(s.useState)(""),t=Object(a.a)(e,2),n=t[0],i=t[1],r=Object(s.useState)([]),l=Object(a.a)(r,2),o=l[0],u=l[1],d=Object(s.useState)([]),c=Object(a.a)(d,2),h=c[0],w=c[1],v=Object(s.useState)([]),m=Object(a.a)(v,2),f=m[0],A=m[1],b=Object(s.useState)(""),q=Object(a.a)(b,2),O=q[0],g=q[1],R=Object(s.useState)(j.getRoot()),x=Object(a.a)(R,2),V=x[0],C=x[1],N=Object(s.useState)(j.getRoot()),S=Object(a.a)(N,2),y=S[0],F=S[1],k=Object(s.useState)(""),W=Object(a.a)(k,2),M=W[0],Q=W[1];Object(s.useEffect)((function(){var e=[null===V||void 0===V?void 0:V.leftValue,null===V||void 0===V?void 0:V.middleValue,null===V||void 0===V?void 0:V.rightValue];A(e)}),[]),Object(s.useMemo)((function(){V.leftValue||V.middleValue||V.rightValue?u(V.value):g(V.value)}),[V,n]);return Object(p.jsx)(p.Fragment,{children:O?Object(p.jsxs)("div",{className:"answer",children:["\u041e\u0441\u043d\u043e\u0432\u044b\u0432\u0430\u044f\u0441\u044c \u043d\u0430 \u0432\u0430\u0448\u0438\u0445 \u043e\u0442\u0432\u0435\u0442\u0430\u0445 \u043c\u043e\u0436\u0435\u043c \u043f\u0440\u0435\u0434\u043b\u043e\u0436\u0438\u0442\u044c \u0441\u043b\u0435\u0434\u0443\u0435\u0449\u0435\u0435:",Object(p.jsx)("span",{children:O}),!!h.length&&Object(p.jsxs)("div",{className:"answers-tree",children:[Object(p.jsx)("h3",{className:"answers-title",children:"Answers"}),Object(p.jsx)("ul",{className:"answers-list",children:h.map((function(e,t){return Object(p.jsxs)("li",{children:[Object(p.jsx)("span",{children:e.selectedQuestion})," ",Object(p.jsx)("strong",{children:e.selectedAnswer})]},t)}))})]}),Object(p.jsx)("button",{className:"questionnaire-start-btn",onClick:function(){window.location.reload()},children:"Restart"})]}):Object(p.jsxs)("div",{className:"survey-container",children:[Object(p.jsx)("div",{className:"survey-question-headline",children:o}),Object(p.jsxs)("div",{className:"select-control-wrapper",children:[Object(p.jsxs)("select",{name:"",id:"",className:"select-option",onChange:function(e){var t=e.target;i(t.value),t.value="Choose an option"},children:[Object(p.jsx)("option",{value:"Choose an option",children:"Choose an option"}),f.map((function(e){return e&&Object(p.jsx)("option",{value:e,children:e},e)}))]}),M&&Object(p.jsx)("span",{className:"error-message",children:M})]}),Object(p.jsx)("button",{className:"questionnaire-start-btn",onClick:function(){n?(j.find(n,V,y,F,C,A,w),Q("")):Q("\u041f\u043e\u0436\u0430\u043b\u0443\u0439\u0441\u0442\u0430, \u0441\u0434\u0435\u043b\u0430\u0439\u0442\u0435 \u0441\u0432\u043e\u0439 \u0432\u044b\u0431\u043e\u0440")},children:"\u0414\u0430\u043b\u044c\u0448\u0435"}),!!h.length&&Object(p.jsxs)("div",{className:"answers-tree",children:[Object(p.jsx)("h3",{className:"answers-title",children:"Answers"}),Object(p.jsx)("ul",{className:"answers-list",children:h.map((function(e){return Object(p.jsx)("li",{className:"selected-question-list-item",children:Object(p.jsxs)("div",{className:"answers-container",children:[Object(p.jsx)("strong",{children:"\u041f\u0440\u0435\u0434\u0435\u0434\u0443\u0449\u0438\u0439 \u0432\u043e\u043f\u0440\u043e\u0441:"})," ",Object(p.jsx)("span",{className:"selected-question-title",children:e.selectedQuestion}),Object(p.jsx)("strong",{children:"\u041f\u0440\u0435\u0434\u0435\u0434\u0443\u0449\u0438\u0439 \u043e\u0442\u0432\u0435\u0442:"})," ",Object(p.jsx)("span",{children:e.selectedAnswer})]})},e.selectedQuestion)}))})]})]})})};var m=function(){var e=Object(s.useState)(!1),t=Object(a.a)(e,2),n=t[0],i=t[1];return Object(p.jsx)("div",{className:"App",children:Object(p.jsxs)("div",{className:"questionnaire-container",children:[!n&&Object(p.jsxs)("div",{className:"questionnaire-inner",children:[Object(p.jsx)("h1",{className:"questionnaire-headline",children:"Your vacation problem assistant"}),Object(p.jsx)("button",{className:"questionnaire-start-btn",onClick:function(){return i(!0)},children:"Start"})]}),n&&Object(p.jsx)(v,{})]})})};l.a.render(Object(p.jsx)(i.a.StrictMode,{children:Object(p.jsx)(m,{})}),document.getElementById("root"))},9:function(e){e.exports=JSON.parse('[{"restKind":{"question":"\u041a\u0430\u043a\u043e\u0439 \u0432\u0438\u0434 \u043e\u0442\u0434\u044b\u0445\u0430 \u0432\u044b \u043b\u044e\u0431\u0438\u0442\u0435?","parentAnswer":null,"answers":{"left":"\u0410\u043a\u0442\u0438\u0432\u043d\u044b\u0439","middle":"\u041f\u0430\u0441\u0438\u0432\u043d\u044b\u0439","right":"\u0421\u043c\u0435\u0448\u0430\u043d\u043d\u044b\u0439"}},"wherePlace":{"question":"\u0413\u0434\u0435 \u0431\u0443\u0434\u0435\u0442 \u043c\u0435\u0441\u0442\u043e \u043e\u0442\u0434\u044b\u0445\u0430?","parentAnswer":"\u0410\u043a\u0442\u0438\u0432\u043d\u044b\u0439","answers":{"left":"\u041d\u0430 \u0443\u043b\u0438\u0446\u0435","middle":"\u0414\u043e\u043c\u0430","right":"\u0413\u043e\u0440\u043e\u0434"}},"extremeRest":{"question":"\u041f\u0440\u0435\u0434\u043f\u043e\u0447\u0438\u0442\u0430\u0435\u0442\u0435 \u043b\u0438 \u044d\u043a\u0441\u0442\u0440\u0438\u043c\u0430\u043b\u044c\u043d\u044b\u0439 \u043e\u0442\u0434\u044b\u0445?","parentAnswer":"\u041d\u0430 \u0443\u043b\u0438\u0446\u0435","answers":{"left":"\u0414\u0430, \u044d\u043a\u0441\u0442\u0440\u0438\u043c\u0430\u043b\u044c\u043d\u044b\u0439","right":"\u041d\u0435\u0442, \u043d\u0435 \u044d\u043a\u0441\u0442\u0440\u0438\u043c\u0430\u043b\u044c\u043d\u044b\u0439"}},"extremeYesResult":{"question":"\u041f\u0440\u044b\u0436\u043e\u043a \u0441 \u043c\u043e\u0441\u0442\u0430. \u041a\u0430\u0442\u0430\u043d\u0438\u0435 \u043d\u0430 \u0433\u0438\u0434\u0440\u043e\u0441\u043a\u0443\u0442\u0435\u0440\u0430\u0445. \u041a\u0430\u0442\u0430\u043d\u0438\u0435 \u043d\u0430 \u043c\u043e\u0442\u043e\u0446\u0438\u043a\u043b\u0430\u0445. \u041a\u0430\u0442\u0430\u043d\u0438\u044f \u043d\u0430 \u0432\u043e\u0434\u043d\u044b\u0445 \u043b\u044b\u0436\u0430\u0445.","parentAnswer":"\u0414\u0430, \u044d\u043a\u0441\u0442\u0440\u0438\u043c\u0430\u043b\u044c\u043d\u044b\u0439"},"extremeNoResult":{"question":"\u041a\u0430\u0442\u0430\u043d\u0438\u044f \u043d\u0430 \u043b\u0438\u0441\u0430\u043f\u0435\u0442\u0435. \u041f\u043e\u0445\u043e\u0434 \u0432 \u0431\u0430\u0441\u0435\u0439\u043d. \u0420\u043e\u043b\u0438\u043a\u0438.","parentAnswer":"\u041d\u0435\u0442, \u043d\u0435 \u044d\u043a\u0441\u0442\u0440\u0438\u043c\u0430\u043b\u044c\u043d\u044b\u0439"},"inviteFriends":{"question":"\u0425\u043e\u0442\u0438\u0442\u0435 \u043b\u0438 \u043f\u0440\u0438\u0433\u043b\u0430\u0441\u0438\u0442\u044c \u0434\u0440\u0443\u0437\u0435\u0439?","parentAnswer":"\u0414\u043e\u043c\u0430","answers":{"left":"\u0414\u0430, \u0432\u0441\u0435\u0445","middle":"\u041f\u0440\u0438\u0433\u043b\u0430\u0441\u0438\u0442\u044c \u043d\u0435 \u0432\u0441\u0435\u0445 \u0434\u0440\u0443\u0437\u0435\u0439","right":"\u041d\u0435\u0442, \u043d\u0435 \u043f\u0440\u0438\u0433\u043b\u0430\u0448\u0430\u0442\u044c"}},"whoFriendsWith":{"question":"\u041a\u043e\u0433\u043e \u0445\u043e\u0442\u0438\u0442\u0435 \u043f\u0440\u0438\u0433\u043b\u0430\u0441\u0438\u0442\u044c?","parentAnswer":"\u041f\u0440\u0438\u0433\u043b\u0430\u0441\u0438\u0442\u044c \u043d\u0435 \u0432\u0441\u0435\u0445 \u0434\u0440\u0443\u0437\u0435\u0439","answers":{"left":"\u041c\u0430\u0448\u0443 \u0438 \u0414\u0430\u0448\u0443","middle":"\u041d\u0430\u0441\u0442\u044e \u0438 \u0421\u0430\u0448\u0443","right":"\u041d\u0438\u043a\u0443 \u0438 \u0422\u0430\u043d\u044e"}},"MashaAndDariaResult":{"question":"\u041f\u0438\u0436\u0430\u043c\u043d\u0430\u044f \u0432\u0435\u0447\u0435\u0440\u0438\u043d\u043a\u0430. \u041d\u0430\u0441\u0442\u043e\u043b\u043a\u0438.","parentAnswer":"\u041c\u0430\u0448\u0443 \u0438 \u0414\u0430\u0448\u0443"},"NastyaAndSashaResult":{"question":"\u041f\u0438\u0436\u0430\u043c\u043d\u0430\u044f \u0432\u0435\u0447\u0435\u0440\u0438\u043d\u043a\u0430. \u041d\u0430\u0441\u0442\u043e\u043b\u043a\u0438. \u0411\u0438\u0442\u0432\u0430 \u043f\u043e\u0434\u0443\u0448\u043a\u0430\u043c\u0438. \u041f\u0440\u044f\u0442\u043a\u0438. \u041c\u0430\u043d\u0438\u043a\u044e\u0440.","parentAnswer":"\u041d\u0430\u0441\u0442\u044e \u0438 \u0421\u0430\u0448\u0443"},"NikaAndTanyaResult":{"question":"\u041f\u0438\u0436\u0430\u043c\u043d\u0430\u044f \u0432\u0435\u0447\u0435\u0440\u0438\u043d\u043a\u0430. \u041d\u0430\u0441\u0442\u043e\u043b\u043a\u0438. \u0411\u0438\u0442\u0432\u0430 \u043f\u043e\u0434\u0443\u0448\u043a\u0430\u043c\u0438. \u041f\u0440\u044f\u0442\u043a\u0438. \u0411\u044c\u044e\u0442\u0438 \u0432\u0435\u0447\u0435\u0440.","parentAnswer":"\u041d\u0438\u043a\u0443 \u0438 \u0422\u0430\u043d\u044e"},"friendsYesResult":{"question":"\u041f\u0438\u0436\u0430\u043c\u043d\u0430\u044f \u0432\u0435\u0447\u0435\u0440\u0438\u043d\u043a\u0430. \u041d\u0430\u0441\u0442\u043e\u043b\u043a\u0438. \u0411\u0438\u0442\u0432\u0430 \u043f\u043e\u0434\u0443\u0448\u043a\u0430\u043c\u0438. \u041f\u0440\u044f\u0442\u043a\u0438.","parentAnswer":"\u0414\u0430, \u0432\u0441\u0435\u0445"},"friendsNoResult":{"question":"\u0419\u043e\u0433\u0430. \u0424\u0438\u0442\u043d\u0435\u0441.","parentAnswer":"\u041d\u0435\u0442, \u043d\u0435 \u043f\u0440\u0438\u0433\u043b\u0430\u0448\u0430\u0442\u044c"},"townChoice":{"question":"\u0414\u043e\u0441\u0442\u0430\u0442\u043e\u0447\u043d\u043e \u043b\u0438 \u0440\u0435\u0441\u0443\u0440\u0441\u043e\u0432?","parentAnswer":"\u0413\u043e\u0440\u043e\u0434","answers":{"left":"\u0414\u0430, \u0434\u043e\u0441\u0442\u0430\u0442\u043e\u0447\u043d\u043e","right":"\u041d\u0435\u0442, \u043d\u0435 \u0434\u043e\u0441\u0442\u0430\u0442\u043e\u0447\u043d\u043e"}},"townYesAnswer":{"question":"\u0412 \u043a\u0430\u043a\u043e\u0439 \u0433\u043e\u0440\u043e\u0434 \u0445\u043e\u0442\u0438\u0442\u0435 \u043f\u043e\u0435\u0445\u0430\u0442\u044c?","parentAnswer":"\u0414\u0430, \u0434\u043e\u0441\u0442\u0430\u0442\u043e\u0447\u043d\u043e","answers":{"left":"\u0425\u0430\u0440\u044c\u043a\u043e\u0432","middle":"\u041e\u0434\u0435\u0441\u0441\u0430","right":"\u041b\u044c\u0432\u043e\u0432"}},"kharkovResult":{"question":"\u0421\u0430\u043c\u0430\u044f \u043d\u0435\u0437\u0430\u0431\u044b\u0432\u0430\u0435\u043c\u0430\u044f \u043f\u043e\u0435\u0437\u0434\u043a\u0430 \u0434\u043b\u044f \u0412\u0430\u0441 \u0431\u0443\u0434\u0435\u0442 \u0433\u043e\u0440\u043e\u0434 \u0425\u0430\u0440\u044c\u043a\u043e\u0432. \u041e\u0431\u044f\u0437\u0430\u0442\u0435\u043b\u044c\u043d\u043e \u0441\u0445\u043e\u0434\u0438\u0442\u0435 \u043d\u0430 \u043a\u043e\u043b\u0435\u0441\u043e \u043e\u0431\u043e\u0437\u0440\u0435\u043d\u0438\u044f.","parentAnswer":"\u0425\u0430\u0440\u044c\u043a\u043e\u0432"},"odessaResult":{"question":"\u0421\u0430\u043c\u0430\u044f \u043d\u0435\u0437\u0430\u0431\u044b\u0432\u0430\u0435\u043c\u0430\u044f \u043f\u043e\u0435\u0437\u0434\u043a\u0430 \u0434\u043b\u044f \u0412\u0430\u0441 \u0431\u0443\u0434\u0435\u0442 \u0433\u043e\u0440\u043e\u0434 \u041e\u0434\u0435\u0441\u0441\u0430. \u041d\u0435 \u043e\u0431\u043e\u0439\u0434\u0438\u0442\u0435 \u0441\u0442\u043e\u0440\u043e\u043d\u043e\u0439 \u041e\u0434\u0435\u0441\u0441\u043a\u0438\u0439 \u0442\u0435\u0430\u0442\u0440 \u043e\u043f\u0435\u0440\u044b \u0438 \u0431\u0430\u043b\u0435\u0442\u0430.","parentAnswer":"\u041e\u0434\u0435\u0441\u0441\u0430"},"lvivResult":{"question":"\u0421\u0430\u043c\u0430\u044f \u043d\u0435\u0437\u0430\u0431\u044b\u0432\u0430\u0435\u043c\u0430\u044f \u043f\u043e\u0435\u0437\u0434\u043a\u0430 \u0434\u043b\u044f \u0412\u0430\u0441 \u0431\u0443\u0434\u0435\u0442 \u0433\u043e\u0440\u043e\u0434 \u041b\u044c\u0432\u043e\u0432. \u0412\u0430\u043c \u0442\u043e\u0447\u043d\u043e \u043f\u043e\u043d\u0440\u0430\u0432\u0438\u0442\u0441\u044f \u041f\u0430\u043b\u0430\u0446 \u041f\u043e\u0442\u043e\u0446\u043a\u0438\u0445.","parentAnswer":"\u041b\u044c\u0432\u043e\u0432"},"preparation":{"question":"\u041d\u0443\u0436\u043d\u044b \u043b\u0438 \u0434\u043b\u044f \u044d\u0442\u043e\u0433\u043e \u043f\u0440\u0438\u0433\u043e\u0442\u043e\u0432\u043b\u0435\u043d\u0438\u044f","parentAnswer":"\u041f\u0430\u0441\u0438\u0432\u043d\u044b\u0439","answers":{"left":"\u041d\u0435\u0442, \u043f\u0440\u0438\u0433\u043e\u0442\u043e\u0432\u043b\u0435\u043d\u0438\u044f \u043d\u0435 \u043d\u0443\u0436\u043d\u044b","right":"\u0414\u0430, \u043f\u0440\u0438\u0433\u043e\u0442\u043e\u0432\u043b\u0435\u043d\u0438\u044f \u043d\u0443\u0436\u043d\u044b"}},"preparationNoResult":{"question":"\u0420\u0438\u0441\u043e\u0432\u0430\u0442\u044c. \u0427\u0438\u0442\u0430\u0442\u044c \u043a\u043d\u0438\u0433\u0443. \u0421\u043b\u0443\u0448\u0430\u0442\u044c \u043c\u0443\u0437\u044b\u043a\u0443.","parentAnswer":"\u041d\u0435\u0442, \u043f\u0440\u0438\u0433\u043e\u0442\u043e\u0432\u043b\u0435\u043d\u0438\u044f \u043d\u0435 \u043d\u0443\u0436\u043d\u044b"},"preparationQuestions":{"question":"\u0415\u0441\u0442\u044c \u043b\u0438 \u0441\u0440\u0435\u0434\u0441\u0442\u0432\u0430 \u043d\u0435 \u044d\u0442\u043e?","parentAnswer":"\u0414\u0430, \u043f\u0440\u0438\u0433\u043e\u0442\u043e\u0432\u043b\u0435\u043d\u0438\u044f \u043d\u0443\u0436\u043d\u044b","answers":{"left":"\u0414\u0430, \u0435\u0441\u0442\u044c","right":"\u041d\u0435\u0442\u0443"}},"preparationChoices":{"question":"\u041a\u0430\u043a\u043e\u0433\u043e \u0440\u043e\u0434\u0430 \u043f\u0440\u0438\u0433\u043e\u0442\u043e\u0432\u043b\u0435\u043d\u0438\u044f?","parentAnswer":"\u0414\u0430, \u0435\u0441\u0442\u044c","answers":{"left":"\u0415\u0434\u0430","middle":"\u0412\u044b\u0431\u043e\u0440 \u0444\u0438\u043b\u044c\u043c\u0430","right":"\u041f\u0440\u0435\u043d\u0430\u0434\u043b\u0435\u0436\u043d\u043e\u0441\u0442\u0438"}},"foodChoices":{"question":"\u0415\u0441\u0442\u044c \u043b\u0438 \u0432\u0441\u0435 \u0433\u043e\u0442\u043e\u0432\u043e\u0435 \u0434\u043e\u043c\u0430?","parentAnswer":"\u0415\u0434\u0430","answers":{"left":"\u0414\u0430, \u043d\u0443\u0436\u043d\u043e \u043f\u0440\u0438\u0433\u043e\u0442\u043e\u0432\u0438\u0442\u044c","right":"\u041d\u0435\u0442, \u043d\u0443\u0436\u043d\u043e \u043a\u0443\u043f\u0438\u0442\u044c"}},"yesFoodChoiceResult":{"question":"\u0421\u0435\u043c\u0435\u0439\u043d\u043e\u0435 \u043f\u0440\u0438\u0433\u043e\u0442\u043e\u0432\u043b\u0435\u043d\u0438\u0435 \u0441\u043b\u0430\u0434\u043e\u0441\u0442\u0435\u0439. \u041f\u0440\u043e\u0441\u043c\u043e\u0442\u0440 \u0444\u0438\u043b\u044c\u043c\u0430 \u0441 \u0435\u0434\u043e\u0439.","parentAnswer":"\u0414\u0430, \u043d\u0443\u0436\u043d\u043e \u043f\u0440\u0438\u0433\u043e\u0442\u043e\u0432\u0438\u0442\u044c"},"noFoodChoice":{"question":"\u0427\u0442\u043e \u0431\u044b \u0432\u044b \u0445\u043e\u0442\u0435\u043b\u0438?","parentAnswer":"\u041d\u0435\u0442, \u043d\u0443\u0436\u043d\u043e \u043a\u0443\u043f\u0438\u0442\u044c","answers":{"left":"\u0421\u043b\u0430\u0434\u043a\u043e\u0435","middle":"\u0424\u0440\u0443\u043a\u0442\u044b","right":"\u041f\u0438\u0446\u0446\u0430 \u0438\u043b\u0438 \u0441\u0443\u0448\u0438"}},"noFoodChoiceSweetsResult":{"question":"\u041f\u0440\u043e\u0441\u043c\u043e\u0442\u0440 \u0444\u0438\u043b\u044c\u043c\u0430 \u0441\u043e \u0441\u043b\u0430\u0434\u043e\u0441\u0442\u044f\u043c\u0438. \u041f\u0440\u0438\u0433\u043e\u0442\u043e\u0432\u043b\u0435\u043d\u0438\u0435 \u0441\u043b\u0430\u0434\u043e\u0441\u0442\u0435\u0439. \u0421\u043b\u0430\u0434\u043a\u0430\u044f \u0432\u0435\u0447\u0435\u0440\u0438\u043d\u043a\u0430.","parentAnswer":"\u0421\u043b\u0430\u0434\u043a\u043e\u0435"},"noFoodChoiceFruitResult":{"question":"\u041f\u0440\u043e\u0441\u043c\u043e\u0442\u0440 \u0444\u0438\u043b\u044c\u043c\u0430 \u0441 \u0444\u0440\u0443\u043a\u0442\u0430\u043c\u0438. \u0420\u0435\u043b\u0430\u043a\u0441 \u0432 \u0432\u0430\u043d\u043d\u043e\u0439 \u0441 \u0444\u0440\u0443\u043a\u0442\u0430\u043c\u0438.","parentAnswer":"\u0424\u0440\u0443\u043a\u0442\u044b"},"noFoodChoicePizzaSushiResult":{"question":"\u041f\u0440\u043e\u0441\u043c\u043e\u0442\u0440 \u0444\u0438\u043b\u044c\u043c\u0430 \u0441 \u043f\u0438\u0446\u0446\u0435\u0439 \u0438\u043b\u0438 \u0441\u0443\u0448\u0430\u043c\u0438. \u0420\u043e\u043c\u0430\u043d\u0442\u0438\u0447\u0435\u0441\u043a\u0438\u0439 \u0443\u0436\u0438\u043d.","parentAnswer":"\u041f\u0438\u0446\u0446\u0430 \u0438\u043b\u0438 \u0441\u0443\u0448\u0438"},"filmChoice":{"question":"\u041a\u0430\u043a\u043e\u0433\u043e \u0440\u043e\u0434\u0430 \u0444\u0438\u043b\u044c\u043c?","parentAnswer":"\u0412\u044b\u0431\u043e\u0440 \u0444\u0438\u043b\u044c\u043c\u0430","answers":{"left":"1950-2000","middle":"2000-2010","right":"2010-2021"}},"filmLeftChoiceResult":{"question":"\u041f\u0440\u043e\u0432\u0435\u0434\u0438\u0442\u0435 \u0432\u0440\u0435\u043c\u044f \u0441 \u0438\u043d\u0442\u0435\u0440\u0435\u0441\u043e\u043c \u043f\u043e\u0441\u043c\u043e\u0442\u0440\u0435\u0432 \u0444\u0438\u043b\u044c\u043c\u044b: \\"\u0410\u0441\u0444\u0430\u043b\u044c\u0442\u043e\u0432\u044b\u0435 \u0414\u0436\u0443\u043d\u0433\u043b\u0438\\", \\"\u0412\u0435\u043b\u0438\u043a\u043e\u043b\u0435\u043f\u043d\u0430\u044f \u0432\u043e\u0441\u044c\u043c\u0435\u0440\u043a\u0430\\", \\"\u0414\u0432\u0435\u043d\u0430\u0434\u0446\u0430\u0442\u044c \u0441\u0442\u0443\u043b\u044c\u0435\u0432\\", \\"\u0414\u0435\u0441\u044f\u0442\u044c \u043d\u0435\u0433\u0440\u0435\u0442\u044f\u0442\\", \\"\u0414\u043e\u0441\u043f\u0435\u0445\u0438 \u0411\u043e\u0433\u0430\\"","parentAnswer":"1950-2000"},"filmMiddleChoiceResult":{"question":"\u041f\u0440\u043e\u0432\u0435\u0434\u0438\u0442\u0435 \u0432\u0440\u0435\u043c\u044f \u0441 \u0438\u043d\u0442\u0435\u0440\u0435\u0441\u043e\u043c \u043f\u043e\u0441\u043c\u043e\u0442\u0440\u0435\u0432 \u0444\u0438\u043b\u044c\u043c\u044b: \\"\u0411\u043e\u043b\u044c\u0448\u043e\u0439 \u043a\u0443\u0448\\", \\"\u0411\u043b\u043e\u043d\u0434\u0438\u043d\u043a\u0430 \u0432 \u0437\u0430\u043a\u043e\u043d\u0435\\", \\"\u0412\u043b\u0430\u0441\u0442\u0435\u043b\u0438\u043d \u041a\u043e\u043b\u0435\u0446\\", \\"\u0411\u0435\u0437\u0441\u043b\u0430\u0432\u043d\u044b\u0435 \u0443\u0431\u043b\u044e\u0434\u043a\u0438\\", \\"\u041f\u0440\u0435\u0434\u043b\u043e\u0436\u0435\u043d\u0438\u0435\\"","parentAnswer":"2000-2010"},"filmRightChoiceResult":{"question":"\u041f\u0440\u043e\u0432\u0435\u0434\u0438\u0442\u0435 \u0432\u0440\u0435\u043c\u044f \u0441 \u0438\u043d\u0442\u0435\u0440\u0435\u0441\u043e\u043c \u043f\u043e\u0441\u043c\u043e\u0442\u0440\u0435\u0432 \u0444\u0438\u043b\u044c\u043c\u044b: \\"\u0425\u043e\u0431\u0431\u0438\u0442\\", \\"\u0417\u0435\u043b\u0435\u043d\u0430\u044f \u043a\u043d\u0438\u0433\u0430\\", \\"\u0418\u0441\u0442\u043e\u0440\u0438\u044f \u0434\u0435\u043b\u044c\u0444\u0438\u043d\u0430\\", \\"\u0410\u043a\u0432\u0430\u043c\u0435\u043d\\", \\"\u0424\u0430\u043d\u0442\u0430\u0441\u0442\u0438\u0447\u0435\u0441\u043a\u0438\u0435 \u0442\u0432\u0430\u0440\u0438\\"","parentAnswer":"2010-2021"},"equipmentsChoice":{"question":"\u0417\u0430\u043a\u0430\u0437\u044b\u0432\u0430\u0442\u044c \u0432 \u0438\u043d\u0442\u0435\u0440\u043d\u0435\u0442\u0435 \u0438\u043b\u0438 \u043a\u0443\u043f\u0438\u0442\u044c \u0432 \u043c\u0430\u0433\u0430\u0437\u0438\u043d\u0435 \u0438\u043b\u0438 \u0435\u0441\u0442\u044c \u0434\u043e\u043c\u0430?","parentAnswer":"\u041f\u0440\u0435\u043d\u0430\u0434\u043b\u0435\u0436\u043d\u043e\u0441\u0442\u0438","answers":{"left":"\u0417\u0430\u043a\u0430\u0437\u044b\u0432\u0430\u0442\u044c","middle":"\u041a\u0443\u043f\u0438\u0442\u044c \u0432 \u043c\u0430\u0433\u0430\u0437\u0438\u043d\u0435","right":"\u0415\u0441\u0442\u044c \u0434\u043e\u043c\u0430"}},"equipmentRightChoiceResult":{"question":"\u0427\u0438\u0442\u0430\u0442\u044c \u043a\u043d\u0438\u0433\u0443. \u0421\u043e\u0431\u0438\u0440\u0430\u0442\u044c \u043f\u0430\u0437\u043b\u044b. \u0420\u0435\u043b\u0430\u043a\u0441 \u0432 \u0432\u0430\u043d\u043d\u043e\u0439.","parentAnswer":"\u0415\u0441\u0442\u044c \u0434\u043e\u043c\u0430"},"equipmentsShopChoice":{"question":"\u0427\u0442\u043e \u043d\u0443\u0436\u043d\u043e \u0432 \u043c\u0430\u0433\u0430\u0437\u0438\u043d\u0435?","parentAnswer":"\u041a\u0443\u043f\u0438\u0442\u044c \u0432 \u043c\u0430\u0433\u0430\u0437\u0438\u043d\u0435","answers":{"left":"\u0411\u043e\u043c\u0431\u043e\u0447\u043a\u0438 \u0434\u043b\u044f \u0432\u0430\u043d\u043d\u043e\u0439","middle":"\u041c\u0430\u0441\u043e\u0447\u043a\u0438","right":"\u041a\u0440\u0435\u043c\u0430 \u0438\u043b\u0438 \u043c\u0430\u0441\u043b\u0430"}},"equipmentsShopLeftChoiceResult":{"question":"\u0420\u0435\u043b\u0430\u043a\u0441 \u0432 \u0432\u0430\u043d\u043d\u043e\u0439. \u0420\u043e\u043c\u0430\u043d\u0442\u0438\u0447\u0435\u0441\u043a\u0438\u0439 \u0432\u0435\u0447\u0435\u0440.","parentAnswer":"\u0411\u043e\u043c\u0431\u043e\u0447\u043a\u0438 \u0434\u043b\u044f \u0432\u0430\u043d\u043d\u043e\u0439"},"equipmentsShopMiddleChoiceResult":{"question":"\u0411\u044c\u044e\u0442\u0438 \u0432\u0435\u0447\u0435\u0440. \u041c\u0430\u0441\u0430\u0436 \u043b\u0438\u0446\u0430.","parentAnswer":"\u041c\u0430\u0441\u043e\u0447\u043a\u0438"},"equipmentsShopRightChoiceResult":{"question":"\u041e\u0431\u0449\u0438\u0439 \u0443\u0445\u043e\u0434 \u0437\u0430 \u043a\u043e\u0436\u0435\u0439. \u0411\u044c\u044e\u0442\u0438 \u0432\u0435\u0447\u0435\u0440. \u041c\u0430\u0441\u0441\u0430\u0436.","parentAnswer":"\u041a\u0440\u0435\u043c\u0430 \u0438\u043b\u0438 \u043c\u0430\u0441\u043b\u0430"},"equipmentsOrderChoice":{"question":"\u0427\u0442\u043e \u043d\u0443\u0436\u043d\u043e \u0437\u0430\u043a\u0430\u0437\u044b\u0432\u0430\u0442\u044c?","parentAnswer":"\u0417\u0430\u043a\u0430\u0437\u044b\u0432\u0430\u0442\u044c","answers":{"left":"\u041f\u0430\u0437\u043b\u044b","middle":"\u041d\u0438\u0442\u043a\u0438 \u0434\u043b\u044f \u0432\u044f\u0437\u0430\u043d\u0438\u044f","right":"\u0411\u0438\u0441\u0435\u0440 \u0438 \u043a\u0430\u043d\u0432\u0430"}},"equipmentsOrderLeftChoiceResult":{"question":"\u0421\u043e\u0431\u0438\u0440\u0430\u043d\u0438\u0435 \u043f\u0430\u0437\u043b\u043e\u0432.","parentAnswer":"\u041f\u0430\u0437\u043b\u044b"},"equipmentsOrderMiddleChoiceResult":{"question":"\u0412\u044f\u0437\u0430\u043d\u0438\u0435 \u0438\u043b\u0438 \u043f\u043b\u0435\u0442\u0435\u043d\u0438\u0435","parentAnswer":"\u041d\u0438\u0442\u043a\u0438 \u0434\u043b\u044f \u0432\u044f\u0437\u0430\u043d\u0438\u044f"},"equipmentsOrderRightChoiceResult":{"question":"\u0412\u044b\u0448\u0438\u0432\u0430\u043d\u0438\u0435 \u0438\u043b\u0438 \u043f\u043b\u0435\u0442\u0435\u043d\u0438\u0435","parentAnswer":"\u0411\u0438\u0441\u0435\u0440 \u0438 \u043a\u0430\u043d\u0432\u0430"},"combinedRestVariants":{"question":"\u041e\u0434\u0438\u043d \u0432\u0438\u0434 \u0438\u043b\u0438 \u043d\u0435\u0441\u043a\u043e\u043b\u044c\u043a\u043e \u0441\u043c\u0435\u0448\u0430\u043d\u043d\u044b\u0445?","parentAnswer":"\u0421\u043c\u0435\u0448\u0430\u043d\u043d\u044b\u0439","answers":{"left":"\u0414\u0430, \u043e\u0434\u0438\u043d \u0432\u0438\u0434","right":"\u041d\u0435\u0442, \u043d\u0435\u0441\u043a\u043e\u043b\u044c\u043a\u043e"}},"onlyOneKind":{"question":"\u041f\u0440\u0435\u0434\u043f\u043e\u0447\u0438\u0442\u0430\u0435\u0442\u0435 \u043e\u0442\u0434\u044b\u0445 \u043d\u0430 \u0441\u0443\u0448\u0435 \u0438\u043b\u0438 \u043d\u0430 \u0432\u043e\u0434\u0435?","parentAnswer":"\u0414\u0430, \u043e\u0434\u0438\u043d \u0432\u0438\u0434","answers":{"left":"\u041d\u0430 \u0441\u0443\u0448\u0435","right":"\u041d\u0430 \u0432\u043e\u0434\u0435"}},"withFriends":{"question":"\u0425\u043e\u0442\u0438\u0442\u0435 \u043f\u0440\u0438\u0433\u043b\u0430\u0441\u0438\u0442\u044c \u0434\u0440\u0443\u0437\u0435\u0439?","parentAnswer":"\u041d\u0430 \u0441\u0443\u0448\u0435","answers":{"left":"\u0414\u0430","middle":"\u041d\u0435 \u0432\u0441\u0435\u0445 \u0434\u0440\u0443\u0437\u0435\u0439","right":"\u041d\u0435\u0442"}},"whoWithCombined":{"question":"\u041a\u043e\u0433\u043e \u0445\u043e\u0442\u0438\u0442\u0435 \u0432\u0437\u044f\u0442\u044c \u0441 \u0441\u043e\u0431\u043e\u0439?","parentAnswer":"\u041d\u0435 \u0432\u0441\u0435\u0445 \u0434\u0440\u0443\u0437\u0435\u0439","answers":{"left":"\u0410\u0440\u0442\u0435\u043c\u0430 \u0438 \u041a\u0430\u0442\u044e","middle":"\u0410\u043d\u0434\u0440\u0435\u044f \u0438 \u041d\u0430\u0441\u0442\u044e","right":"\u0410\u043b\u0435\u043d\u0443 \u0438 \u0412\u043b\u0430\u0434\u0430"}},"yesWithFriendsCombinedResult":{"question":"\u041f\u0438\u043a\u043d\u0438\u043a. \u041f\u043e\u0445\u043e\u0434 \u0432 \u043f\u0430\u0440\u043a. \u041f\u043e\u0445\u043e\u0434 \u043d\u0430 \u0430\u0442\u0440\u0430\u043a\u0446\u0438\u043e\u043d\u044b.","parentAnswer":"\u0414\u0430"},"notWithFriendsCombinedResult":{"question":"\u041f\u0440\u043e\u0433\u0443\u043b\u043a\u0430 \u0432 \u043f\u0430\u0440\u043a\u0435. \u041f\u0440\u043e\u0433\u0443\u043b\u043a\u0430 \u0432 \u0441\u0430\u0434\u0443. \u041f\u0440\u043e\u0433\u0443\u043b\u043a\u0430 \u043f\u043e \u043b\u0435\u0441\u0443.","parentAnswer":"\u041d\u0435\u0442"},"ArtemAndKateResult":{"question":"\u041f\u0438\u043a\u043d\u0438\u043a. \u041f\u043e\u0445\u043e\u0434 \u0432 \u043f\u0430\u0440\u043a. \u041f\u043e\u0445\u043e\u0434 \u043d\u0430 \u0430\u0442\u0440\u0430\u043a\u0446\u0438\u043e\u043d\u044b. \u041d\u0430\u0441\u0442\u043e\u043b\u043a\u0438. \u041f\u0435\u0439\u043d\u0442-\u0431\u043e\u043b.","parentAnswer":"\u0410\u0440\u0442\u0435\u043c\u0430 \u0438 \u041a\u0430\u0442\u044e"},"AndreyAndNastyaResult":{"question":"\u041f\u0438\u043a\u043d\u0438\u043a. \u041f\u043e\u0445\u043e\u0434 \u0432 \u043f\u0430\u0440\u043a. \u041f\u043e\u0445\u043e\u0434 \u043d\u0430 \u0430\u0442\u0440\u0430\u043a\u0446\u0438\u043e\u043d\u044b. \u041d\u0430\u0441\u0442\u043e\u043b\u043a\u0438.","parentAnswer":"\u0410\u043d\u0434\u0440\u0435\u044f \u0438 \u041d\u0430\u0441\u0442\u044e"},"AlenaAndVladResult":{"question":"\u041f\u0438\u043a\u043d\u0438\u043a. \u041f\u043e\u0445\u043e\u0434 \u0432 \u043f\u0430\u0440\u043a. \u041f\u043e\u0445\u043e\u0434 \u043d\u0430 \u0430\u0442\u0440\u0430\u043a\u0446\u0438\u043e\u043d\u044b. \u041d\u0430\u0441\u0442\u043e\u043b\u043a\u0438.","parentAnswer":"\u0410\u043b\u0435\u043d\u0443 \u0438 \u0412\u043b\u0430\u0434\u0430"},"withFriendsWater":{"question":"\u0425\u043e\u0442\u0438\u0442\u0435 \u043f\u0440\u0438\u0433\u043b\u0430\u0441\u0438\u0442\u044c \u0434\u0440\u0443\u0437\u0435\u0439?","parentAnswer":"\u041d\u0430 \u0432\u043e\u0434\u0435","answers":{"left":"\u0414\u0430, \u043f\u0440\u0438\u0433\u043b\u0430\u0448\u0443","middle":"\u0422\u043e\u043b\u044c\u043a\u043e \u043e\u043f\u0440\u0435\u0434\u0435\u043b\u0435\u043d\u043d\u044b\u0445","right":"\u041d\u0435\u0442, \u043d\u0435 \u043f\u0440\u0438\u0433\u043b\u0430\u0448\u0443"}},"whoWithCombinedWater":{"question":"\u041a\u043e\u0433\u043e \u0445\u043e\u0442\u0438\u0442\u0435 \u0432\u0437\u044f\u0442\u044c \u0441 \u0441\u043e\u0431\u043e\u0439?","parentAnswer":"\u0422\u043e\u043b\u044c\u043a\u043e \u043e\u043f\u0440\u0435\u0434\u0435\u043b\u0435\u043d\u043d\u044b\u0445","answers":{"left":"\u0418\u043b\u043e\u043d\u0443 \u0438 \u042e\u0440\u0443","middle":"\u0414\u0435\u043d\u0438\u0441\u0430 \u0438 \u0411\u043e\u0433\u0434\u0430\u043d\u0430","right":"\u0410\u043d\u0434\u0440\u0435\u044f \u0438 \u0410\u0440\u0442\u0435\u043c\u0430"}},"yesWithFriendsCombinedWater":{"question":"\u041f\u0438\u043a\u043d\u0438\u043a. \u041f\u043e\u0445\u043e\u0434 \u0432 \u043f\u0430\u0440\u043a. \u041f\u043e\u0445\u043e\u0434 \u043d\u0430 \u0430\u0442\u0440\u0430\u043a\u0446\u0438\u043e\u043d\u044b.","parentAnswer":"\u0414\u0430, \u043f\u0440\u0438\u0433\u043b\u0430\u0448\u0443"},"notWithFriendsCombinedWater":{"question":"\u041f\u0440\u043e\u0433\u0443\u043b\u043a\u0430 \u0432 \u043f\u0430\u0440\u043a\u0435. \u041f\u0440\u043e\u0433\u0443\u043b\u043a\u0430 \u0432 \u0441\u0430\u0434\u0443. \u041f\u0440\u043e\u0433\u0443\u043b\u043a\u0430 \u043f\u043e \u043b\u0435\u0441\u0443.","parentAnswer":"\u041d\u0435\u0442, \u043d\u0435 \u043f\u0440\u0438\u0433\u043b\u0430\u0448\u0443"},"IlonaAndYuraWaterResult":{"question":"\u041c\u043e\u0440\u0441\u043a\u0430\u044f \u043f\u0440\u043e\u0433\u0443\u043b\u043a\u0430. \u041f\u043e\u0445\u043e\u0434 \u043d\u0430 \u043f\u043b\u044f\u0436.","parentAnswer":"\u0418\u043b\u043e\u043d\u0443 \u0438 \u042e\u0440\u0443"},"DenisAndBogdanResult":{"question":"\u0420\u043e\u043c\u0430\u043d\u0442\u0438\u0447\u0435\u0441\u043a\u0438\u0439 \u0443\u0436\u0438\u043d \u043d\u0430 \u0431\u0435\u0440\u0435\u0433\u0443 \u043f\u0440\u0438 \u0441\u0432\u0435\u0447\u0430\u0445. \u0410\u043a\u0432\u0430\u043f\u0430\u0440\u043a.","parentAnswer":"\u0414\u0435\u043d\u0438\u0441\u0430 \u0438 \u0411\u043e\u0433\u0434\u0430\u043d\u0430"},"AndreyAndArtemResult":{"question":"\u0420\u044b\u0431\u0430\u043b\u043a\u0430. \u041f\u0440\u043e\u0433\u0443\u043b\u043a\u0430 \u043d\u0430 \u043a\u0430\u0442\u0435\u0440\u0435. \u0410\u043a\u0432\u0430\u043f\u0430\u0440\u043a.","parentAnswer":"\u0410\u043d\u0434\u0440\u0435\u044f \u0438 \u0410\u0440\u0442\u0435\u043c\u0430"}}]')}},[[18,1,2]]]);
//# sourceMappingURL=main.d92d688b.chunk.js.map