"use strict";(("undefined"!=typeof self?self:global).webpackChunkclient_web=("undefined"!=typeof self?self:global).webpackChunkclient_web||[]).push([[3658],{23731:(e,s,o)=>{o.r(s),o.d(s,{EPISODE_SPONSORS_SHELF_TESTID:()=>E,EpisodeSponsorsWrapper:()=>D,SEE_ALL_EPISODE_SPONSORS_TESTID:()=>v,default:()=>b});var n=o(50959);o(86277);var t=o(13100),r=o(11527);const i=(0,n.lazy)((()=>o.e(1148).then(o.bind(o,61148))));function a({fetchedEpisodeSponsorsData:e,fireTrackingEvent:s,numberOfSponsorsToDisplay:o,firedViewedEvents:a,version:d,reason:p,uri:c}){const{displayedEpisodeSponsorsData:u}=function({fetchedEpisodeSponsorsData:e,numberOfSponsorsToDisplay:s}){return(0,n.useMemo)((()=>({displayedEpisodeSponsorsData:e.slice(0,s)})),[e,s])}({fetchedEpisodeSponsorsData:e,numberOfSponsorsToDisplay:o}),f=(0,t.X)({displayedEpisodeSponsorsData:u,uri:c,reason:p}),l=(0,n.useMemo)((()=>u.map(((e,o)=>(0,r.jsx)(i,{fireTrackingEvent:s,firedViewedEvents:a,version:d,onClick:()=>f({ui_navigate:u.map((({clickthrough:e},s)=>o===s?e:"")),navigate_to_external_uri:u.map(((...[,e])=>o===e))}),...e},`${e.metadata.lineitem_id}-${o}`)))),[u,s,a,d,f]);return{displayedEpisodeSponsorsData:u,displayedSponsors:l}}var d=o(93500),p=o(11317);var c=o(20273);o(92372),o(70069),o(44227),o(91499),o(68856),o(18004),o(16527);function u({firedViewedEvents:e}){const s=(0,n.useRef)();return{firedViewedEvents:s.current=e??s.current??new Set}}function f({uri:e,getEpisodeSponsors:s,fireTrackingEvent:o,numberOfSponsorsToDisplay:t,version:r,reason:i}){const{state:f}=(0,d.b)(),l=function({uri:e,episodeBase62Id:s}){return(0,n.useMemo)((()=>{const o=(0,p.EC)(e),n=s||o?.id;return{uri:(0,p.YD)(n).toURI(),episodeBase62Id:n}}),[e,s])}({...f?.[d.H],uri:e}),{fetchedEpisodeSponsorsData:S}=(0,c.m)({...f,...l,getEpisodeSponsors:s,version:r}),{firedViewedEvents:E}=u({...f?.[d.H]}),v=a({fetchedEpisodeSponsorsData:S,fireTrackingEvent:o,numberOfSponsorsToDisplay:t,firedViewedEvents:E,version:r,reason:i,...l});return{...l,fetchedEpisodeSponsorsData:S,...v,firedViewedEvents:E,reason:i}}const l=3;const S=(0,n.lazy)((()=>o.e(2372).then(o.bind(o,72372)))),E="episode-sponsors-shelf",v="see-all-episode-sponsors";function D(e){const{numberOfSponsorsToDisplay:s}=function({numberOfSponsorsToDisplay:e=l}){return{numberOfSponsorsToDisplay:e}}(e),o=f({...e,numberOfSponsorsToDisplay:s});return o.episodeBase62Id&&o.displayedSponsors.length?(0,r.jsx)(n.Suspense,{fallback:!0,children:(0,r.jsx)(S,{...e,numberOfSponsorsToDisplay:s,state:o})}):null}const b=D},20273:(e,s,o)=>{o.d(s,{F:()=>i,m:()=>a});var n=o(50959),t=o(49857),r=o(99537);const i=420;function a({episodeBase62Id:e,getEpisodeSponsors:s,fetchedEpisodeSponsorsData:a=[],version:d}){const[p,c]=(0,n.useState)(a),u=(0,n.useCallback)((async()=>{try{if(!e)throw new Error("episodeBase62Id is required to fetch episode sponsors");const n=s??(await Promise.resolve().then(o.bind(o,93150))).getEpisodeSponsors;c(await n(e,{version:d}))}catch(e){c([])}}),[e,s,d]),f=(0,t.y1)(u,i);(0,n.useEffect)((function(){a.length||f()}),[f,a.length]);const l=(0,n.useCallback)((()=>({effectCallback:f})),[f]);return(0,r.H)(l),{fetchedEpisodeSponsorsData:p}}},13100:(e,s,o)=>{o.d(s,{X:()=>r});o(86277);var n=o(50959),t=o(24071);function r({uri:e,reason:s,displayedEpisodeSponsorsData:r}){const i=(0,t.s4)(),a=(0,n.useCallback)((async n=>{const{createPodcastAdCtaCardEvent:t}=await o.e(1814).then(o.bind(o,96247));return i.send(t({uri:e,reason:s,lineitem_id:r.map((e=>e.metadata.lineitemId)),...n}))}),[e,r,s,i]);return(0,n.useEffect)((function(){a()}),[a]),a}},99537:(e,s,o)=>{o.d(s,{H:()=>p});var n=o(50959),t=o(10226),r=o(17676),i=o(90979),a=o(65019),d=o(98692);function p(e){const s=(0,t.W6)(r.oFA),o=(0,a.Y)((e=>{const s=e?.item??void 0;return(0,d.k6)(s)&&s.isPodcastAd?s.id??void 0:void 0})),p=(0,i.D)(o);(0,n.useEffect)((function(){const{effectCallback:n,destructor:t}=e();return o!==p&&Boolean(o)&&setTimeout(n,s),t}),[e,o,p,s])}}}]);
//# sourceMappingURL=3658.js.map