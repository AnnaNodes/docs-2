"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[8561],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=u(n),m=a,h=d["".concat(s,".").concat(m)]||d[m]||p[m]||i;return n?r.createElement(h,o(o({ref:t},c),{},{components:n})):r.createElement(h,o({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var u=2;u<i;u++)o[u]=n[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},38545:function(e,t,n){n.d(t,{Q:function(){return l},U:function(){return o}});var r=n(67294),a=n(45697),i=n.n(a);function o(e){let{children:t}=e;return r.createElement("div",{className:"accordion"},t)}function l(e){let{open:t,title:n,actions:a,keepAlive:i=!0,children:o}=e;const[l,u]=(0,r.useState)(t),c=l||i;return r.createElement("div",{className:["accordion-item",l?"accordion-item-opened":"accordion-item-closed"].join(" ")},r.createElement("div",{className:"accordion-item-header",onClick:()=>u(!l)},r.createElement("h3",null,r.createElement(s,{opened:l}),r.createElement("span",null,n)),a),r.createElement("div",{className:"accordion-item-content"},c&&o))}function s(e){let{opened:t}=e;return t?r.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"192",height:"192",fill:"currentColor",viewBox:"0 0 256 256"},r.createElement("rect",{width:"256",height:"256",fill:"none"}),r.createElement("path",{d:"M215.4,92.9A8,8,0,0,0,208,88H48a8,8,0,0,0-7.4,4.9,8.4,8.4,0,0,0,1.7,8.8l80,80a8.2,8.2,0,0,0,11.4,0l80-80A8.4,8.4,0,0,0,215.4,92.9Z"})):r.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"192",height:"192",fill:"currentColor",viewBox:"0 0 256 256"},r.createElement("rect",{width:"256",height:"256",fill:"none"}),r.createElement("path",{d:"M181.7,122.3l-80-80a8.4,8.4,0,0,0-8.8-1.7A8,8,0,0,0,88,48V208a8,8,0,0,0,4.9,7.4,8.5,8.5,0,0,0,3.1.6,8.3,8.3,0,0,0,5.7-2.3l80-80A8.1,8.1,0,0,0,181.7,122.3Z"}))}o.propTypes={children:i().any},l.propTypes={open:i().bool,title:i().string,children:i().any,actions:i().any,keepAlive:i().bool},s.propTypes={opened:i().bool}},38901:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return l},default:function(){return d},frontMatter:function(){return o},metadata:function(){return s},toc:function(){return c}});var r=n(83117),a=(n(67294),n(3905)),i=n(38545);const o={description:"Restricts the mint to holders of a specified collection, requiring a burn of the NFT."},l="NFT Burn",s={unversionedId:"programs/candy-machine/available-guards/nft-burn",id:"programs/candy-machine/available-guards/nft-burn",title:"NFT Burn",description:"Restricts the mint to holders of a specified collection, requiring a burn of the NFT.",source:"@site/docs/01-programs/02-candy-machine/09-available-guards/09-nft-burn.md",sourceDirName:"01-programs/02-candy-machine/09-available-guards",slug:"/programs/candy-machine/available-guards/nft-burn",permalink:"/programs/candy-machine/available-guards/nft-burn",draft:!1,editUrl:"https://github.com/metaplex/docs/tree/main/docs/01-programs/02-candy-machine/09-available-guards/09-nft-burn.md",tags:[],version:"current",lastUpdatedAt:1679052860,formattedLastUpdatedAt:"Mar 17, 2023",sidebarPosition:9,frontMatter:{description:"Restricts the mint to holders of a specified collection, requiring a burn of the NFT."},sidebar:"sidebar",previous:{title:"Mint Limit",permalink:"/programs/candy-machine/available-guards/mint-limit"},next:{title:"NFT Gate",permalink:"/programs/candy-machine/available-guards/nft-gate"}},u={},c=[{value:"Overview",id:"overview",level:2},{value:"Guard Settings",id:"guard-settings",level:2},{value:"Mint Settings",id:"mint-settings",level:2},{value:"Route Instruction",id:"route-instruction",level:2}],p={toc:c};function d(e){let{components:t,...o}=e;return(0,a.kt)("wrapper",(0,r.Z)({},p,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"nft-burn"},"NFT Burn"),(0,a.kt)("h2",{id:"overview"},"Overview"),(0,a.kt)("p",null,"The\xa0",(0,a.kt)("strong",{parentName:"p"},"NFT Burn"),"\xa0guard restricts the mint to holders of a predefined NFT Collection and burns the holder's NFT. Thus, the mint address of the NFT to burn must be provided by the payer when minting."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"CandyMachinesV3-GuardsNFTBurn.png",src:n(12049).Z+"#radius",width:"2472",height:"936"})),(0,a.kt)("h2",{id:"guard-settings"},"Guard Settings"),(0,a.kt)("p",null,"The NFT Burn guard contains the following settings:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Required Collection"),": The mint address of the required NFT Collection. The NFT we use to mint with must be part of this collection.")),(0,a.kt)(i.U,{mdxType:"Accordion"},(0,a.kt)(i.Q,{title:"JS SDK",open:!0,mdxType:"AccordionItem"},(0,a.kt)("div",{className:"accordion-item-padding"},(0,a.kt)("p",null,"Here\u2019s an example of how to set up a Candy Machine using the NFT Burn guard."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"const { candyMachine } = await metaplex.candyMachines().create({\n  // ...\n  guards: {\n    nftBurn: {\n      requiredCollection: requiredCollectionNft.address,\n    },\n  },\n});\n")),(0,a.kt)("p",null,"API References: ",(0,a.kt)("a",{parentName:"p",href:"https://metaplex-foundation.github.io/js/classes/js.CandyMachineClient.html#create"},"Operation"),", ",(0,a.kt)("a",{parentName:"p",href:"https://metaplex-foundation.github.io/js/types/js.CreateCandyMachineInput.html"},"Input"),", ",(0,a.kt)("a",{parentName:"p",href:"https://metaplex-foundation.github.io/js/types/js.CreateCandyMachineOutput.html"},"Output"),", ",(0,a.kt)("a",{parentName:"p",href:"https://metaplex-foundation.github.io/js/classes/js.CandyMachineBuildersClient.html#create"},"Transaction Builder"),", ",(0,a.kt)("a",{parentName:"p",href:"https://metaplex-foundation.github.io/js/types/js.NftBurnGuardSettings.html"},"Guard Settings"),".")))),(0,a.kt)("h2",{id:"mint-settings"},"Mint Settings"),(0,a.kt)("p",null,"The NFT Burn guard contains the following Mint Settings:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Mint"),": The mint address of the NFT to burn. This must be part of the required collection and must belong to the payer."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Token Account")," (optional): You may optionally provide the token account linking the NFT with its owner explicitly. By default, the associated token account of the payer will be used.")),(0,a.kt)("p",null,"Note that, if you\u2019re planning on constructing instructions without the help of our SDKs, you will need to provide these Mint Settings and more as a combination of instruction arguments and remaining accounts. See the ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/metaplex-foundation/mpl-candy-guard#nftburn"},"Candy Guard\u2019s program documentation")," for more details."),(0,a.kt)(i.U,{mdxType:"Accordion"},(0,a.kt)(i.Q,{title:"JS SDK",open:!0,mdxType:"AccordionItem"},(0,a.kt)("div",{className:"accordion-item-padding"},(0,a.kt)("p",null,"When minting via the JS SDK, simply provide the mint address of the NFT to burn via the ",(0,a.kt)("inlineCode",{parentName:"p"},"mint")," attribute like so."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"const { nft } = await metaplex.candyMachines().mint({\n  // ...\n  guards: {\n    nftBurn: {\n      mint: nftToBurn.address,\n    },\n  }\n});\n")),(0,a.kt)("p",null,"You may also provide the ",(0,a.kt)("inlineCode",{parentName:"p"},"tokenAccount")," attribute explicitly should the NFT not use an associated token account."),(0,a.kt)("p",null,"API References: ",(0,a.kt)("a",{parentName:"p",href:"https://metaplex-foundation.github.io/js/classes/js.CandyMachineClient.html#mint"},"Operation"),", ",(0,a.kt)("a",{parentName:"p",href:"https://metaplex-foundation.github.io/js/types/js.MintFromCandyMachineInput.html"},"Input"),", ",(0,a.kt)("a",{parentName:"p",href:"https://metaplex-foundation.github.io/js/types/js.MintFromCandyMachineOutput.html"},"Output"),", ",(0,a.kt)("a",{parentName:"p",href:"https://metaplex-foundation.github.io/js/classes/js.CandyMachineBuildersClient.html#mint"},"Transaction Builder"),", ",(0,a.kt)("a",{parentName:"p",href:"https://metaplex-foundation.github.io/js/types/js.NftBurnGuardMintSettings.html"},"Mint Settings"),".")))),(0,a.kt)("h2",{id:"route-instruction"},"Route Instruction"),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"The NFT Burn guard does not support the route instruction.")))}d.isMDXComponent=!0},12049:function(e,t,n){t.Z=n.p+"assets/images/CandyMachinesV3-GuardsNFTBurn-1607930741512f0276d8acda3f5d7c1f.png"}}]);