"use strict";(("undefined"!=typeof self?self:global).webpackChunkclient_web=("undefined"!=typeof self?self:global).webpackChunkclient_web||[]).push([[4574],{14774:(e,l,o)=>{o.r(l),o.d(l,{YourSoundCapsuleModal:()=>k});var n=o(30758),u=o(41978),t=o(69505),a=o(61229),s=o(61225),r=o(35512),i=o(17635),c=o(73005),d=o(95477),p=o(8539),m=o(18428),y=o(63259),f=o(89667),b=o(3532),v=(o(82368),o(25598));const w=function(){var e=["IN","BR","ID"],l=(0,u.d4)(v.JJ);return e.includes(null==l?void 0:l.toUpperCase())};var _=o(68688),g=function(e){return e.NOT_AVAILABLE="not-available",e.PREMIUM="premium",e.OPEN_APP="open-app",e}({});const P=function(){var e=w(),l=(0,u.d4)(_.Yb),o=(0,y.V)();return e?l||o?g.PREMIUM:g.OPEN_APP:g.NOT_AVAILABLE},x="BGbkTNBgT3ZySaYM4ufS";var h=o(86070);const R=function(e){var l=e.isPremium,o="".concat(m.BW,"?ref=your_sound_capsule_modal"),n=(0,u.wA)(),t=P(),a=(0,y.V)(),i=(0,b.vh)(),v=function(e,l){var o={category:"your_sound_capsule_modal",action:"click",label:e,destination_url:l},n=a?(0,r.Z)(o):(0,s.Q)(o);i.send(n)};return(0,h.jsxs)("div",{className:x,children:[(0,h.jsx)(c.H,{condensed:!0,size:"small",onClick:function(){v("".concat(t,"-dismiss")),n(f.XL.actions.close())},children:p.Ru.get("web-player.your-sound-capsule-modal.dismiss")}),l&&(0,h.jsx)(d.$,{size:"small",onClick:function(){v("".concat(t,"-get-premium"),o),window.open(o)},children:p.Ru.get("web-player.your-sound-capsule-modal.get-premium")})]})};var A=o(16743),E=o(46600),C=o(22492);const M=function(){switch(P()){case g.PREMIUM:return{title:p.Ru.get("web-player.your-sound-capsule-modal.premium-title"),text:p.Ru.get("web-player.your-sound-capsule-modal.premium-text")};case g.OPEN_APP:return{title:p.Ru.get("web-player.your-sound-capsule-modal.open-app-title"),text:p.Ru.get("web-player.your-sound-capsule-modal.open-app-text")};default:return{title:p.Ru.get("web-player.your-sound-capsule-modal.not-available-title"),text:p.Ru.get("web-player.your-sound-capsule-modal.not-available-text")}}};var k=function(){var e=(0,u.d4)(C.f),l=(0,i.NC)(E.oFY),o=P(),c=M(),d=c.title,p=c.text,m=(0,b.vh)(),f=(0,y.V)();return(0,n.useEffect)((function(){if(e&&l){var n={category:"your_sound_capsule_modal",action:"view",label:"".concat(o,"-view")},u=f?(0,r.Z)(n):(0,s.Q)(n);m.send(u)}}),[e,l,f,m,o]),l?(0,h.jsx)(A.A,{isOpen:e,shouldCloseOnEsc:!0,shouldCloseOnOverlayClick:!0,children:(0,h.jsx)(t.Q,{id:"your-sound-capsule-modal",dialogTitle:d,body:(0,h.jsx)(a.Z,{children:p}),footer:(0,h.jsx)(R,{isPremium:o===g.PREMIUM})})}):null}}}]);
//# sourceMappingURL=your-sound-capsule-modal.js.map