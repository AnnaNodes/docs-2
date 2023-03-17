"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[4344],{3905:function(t,e,n){n.d(e,{Zo:function(){return u},kt:function(){return p}});var a=n(67294);function i(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function r(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function o(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?r(Object(n),!0).forEach((function(e){i(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function s(t,e){if(null==t)return{};var n,a,i=function(t,e){if(null==t)return{};var n,a,i={},r=Object.keys(t);for(a=0;a<r.length;a++)n=r[a],e.indexOf(n)>=0||(i[n]=t[n]);return i}(t,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(a=0;a<r.length;a++)n=r[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(i[n]=t[n])}return i}var c=a.createContext({}),l=function(t){var e=a.useContext(c),n=e;return t&&(n="function"==typeof t?t(e):o(o({},e),t)),n},u=function(t){var e=l(t.components);return a.createElement(c.Provider,{value:e},t.children)},h={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},d=a.forwardRef((function(t,e){var n=t.components,i=t.mdxType,r=t.originalType,c=t.parentName,u=s(t,["components","mdxType","originalType","parentName"]),d=l(n),p=i,m=d["".concat(c,".").concat(p)]||d[p]||h[p]||r;return n?a.createElement(m,o(o({ref:e},u),{},{components:n})):a.createElement(m,o({ref:e},u))}));function p(t,e){var n=arguments,i=e&&e.mdxType;if("string"==typeof t||i){var r=n.length,o=new Array(r);o[0]=d;var s={};for(var c in e)hasOwnProperty.call(e,c)&&(s[c]=e[c]);s.originalType=t,s.mdxType="string"==typeof t?t:i,o[1]=s;for(var l=2;l<r;l++)o[l]=n[l];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},34383:function(t,e,n){n.r(e),n.d(e,{assets:function(){return c},contentTitle:function(){return o},default:function(){return h},frontMatter:function(){return r},metadata:function(){return s},toc:function(){return l}});var a=n(83117),i=(n(67294),n(3905));const r={},o="The Contracts",s={unversionedId:"guides/archived/architecture/contracts",id:"guides/archived/architecture/contracts",title:"The Contracts",description:"Token Metadata",source:"@site/docs/04-guides/07-archived/00-architecture/00-contracts.md",sourceDirName:"04-guides/07-archived/00-architecture",slug:"/guides/archived/architecture/contracts",permalink:"/guides/archived/architecture/contracts",draft:!1,editUrl:"https://github.com/metaplex/docs/tree/main/docs/04-guides/07-archived/00-architecture/00-contracts.md",tags:[],version:"current",lastUpdatedAt:1679052860,formattedLastUpdatedAt:"Mar 17, 2023",sidebarPosition:0,frontMatter:{},sidebar:"sidebar",previous:{title:"Overview",permalink:"/guides/archived/architecture/overview"},next:{title:"Basic Single Item Auction End To End",permalink:"/guides/archived/architecture/basic_flow"}},c={},l=[{value:"Token Metadata",id:"token-metadata",level:2},{value:"Token Vault",id:"token-vault",level:2},{value:"Auction",id:"auction",level:2},{value:"Metaplex",id:"metaplex",level:2}],u={toc:l};function h(t){let{components:e,...n}=t;return(0,i.kt)("wrapper",(0,a.Z)({},u,n,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"the-contracts"},"The Contracts"),(0,i.kt)("h2",{id:"token-metadata"},"Token Metadata"),(0,i.kt)("p",null,"This is the bedrock contract of the entire ecosystem. All that you need to interact with it is your own mint for which you have the mint authority. It is primarily a \"mint decorator.\" It allows you to decorate your mint with a Metadata PDA that gives it a name, symbol, uri, list of creators with royalty splits, and whether it's been sold. You can do this with any mint with any supply. Phantom Wallet uses this Metadata account and its URI field, which often links to a Manifest.json file of a certain format, to display NFTs in their 'Collections' category on their UI."),(0,i.kt)("p",null,'Furthermore, if your mint has one token in its supply, you can give it an additional decoration PDA, of type MasterEdition. This PDA denotes the mint as a special type of object that can mint other mints - which we call Editions (as opposed to MasterEditions because they can\'t print other mints themselves). This makes this mint like the "master records" that record studios used to use to make new copies of records back in the day. The MasterEdition PDA will take away minting and freezing authority from you in the process and will contain information about total supply, maximum possible supply, etc.'),(0,i.kt)("p",null,"The existence of Metadata and its sister PDA MasterEdition makes a very powerful combination for a mint that enables the entire rest of the Metaplex contract stack. Now you can create:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Normal mints that just have names (Metadata but no MasterEdition)"),(0,i.kt)("li",{parentName:"ul"},"One of a kind NFTs (Metadata + MasterEdition with ",(0,i.kt)("inlineCode",{parentName:"li"},"max_supply")," of 0)"),(0,i.kt)("li",{parentName:"ul"},"NFTs that can print limited edition child NFTs (Metadata + MasterEdition with ",(0,i.kt)("inlineCode",{parentName:"li"},"max_supply")," of say 10)"),(0,i.kt)("li",{parentName:"ul"},"NFTs that can print unlimited open edition NFTs (Metadata + MasterEdition with unlimited ",(0,i.kt)("inlineCode",{parentName:"li"},"max_supply"),")")),(0,i.kt)("p",null,"You can also easily transfer ownership of these PDA records with the ",(0,i.kt)("inlineCode",{parentName:"p"},"updateAuthority")," key on Metadata between parties, so you can sell printing rights to another party, or just give them the token itself while retaining the printing rights."),(0,i.kt)("h2",{id:"token-vault"},"Token Vault"),(0,i.kt)("p",null,"Token Vault acts like a corporation or safe escrow for arbitrary token allotments. You can create a vault object, and insert any number of tokens from any number of mints into safety deposit boxes, and then activate the vault. It has a few different states, but the important ones are ",(0,i.kt)("strong",{parentName:"p"},"Activated"),", which is when it's locked and nobody can access its contents, and ",(0,i.kt)("strong",{parentName:"p"},"Combined,")," when the vault has essentially been opened and the vault authority can withdraw the contents."),(0,i.kt)("p",null,"Going from ",(0,i.kt)("strong",{parentName:"p"},"Activated")," to ",(0,i.kt)("strong",{parentName:"p"},"Combined")," has only one restraint - that there are no outstanding fractional shares in circulation. You can in principle go straight from ",(0,i.kt)("strong",{parentName:"p"},"Activated")," to ",(0,i.kt)("strong",{parentName:"p"},"Combined")," immediately if you issue 0 fractional shares (which is what the Metaplex front-end contract does during Auction creation)."),(0,i.kt)("p",null,"Once the vault is ",(0,i.kt)("strong",{parentName:"p"},"Activated"),", you can then mint treasury shares that represent fractional ownership of the tokens inside the vault. The treasury shares are valued based on an external price indicator account that does not need to be owned by the vault and is considered the vault's price oracle, and these shares can then be sold on a dex or in an AMM or whatever you desire. This allows you, as the vault owner, to take your NFT(s) and turn them into a sort of corporation and sell partial ownership to other parties. If the external price oracle has its price driven by a proper third party such as a dex or other price discovery mechanism, then the entire system is balanced."),(0,i.kt)("p",null,"When there are outstanding shares, you cannot, as the vault owner, ",(0,i.kt)("strong",{parentName:"p"},"Combine")," the vault, and retrieve your tokens, until you buy out the shares in circulation. You have to provide the number_of_shares_outstanding","*","price_from_oracle in the token_mint of the vault to the vault to unlock it. Then shareholders can return at their leisure to trade in shares for their winnings."),(0,i.kt)("h2",{id:"auction"},"Auction"),(0,i.kt)("p",null,"The Auction Contract represents an auction primitive, and it knows nothing about NFTs, or Metadata, or anything else in the Metaplex ecosystem. All it cares about is that it has a resource address, it has auction mechanics, and it is using those auction mechanics to auction off that resource. It currently supports English Auctions and Open Edition Auctions (no winners but bids are tracked.) Its only purpose is to track who won what place in an auction and to collect money for those wins. When you place bids, or cancel them, you are interacting with this contract. However, when you redeem bids, you are not interacting with this contract, but Metaplex, because while it can provide proof that you did indeed win 4th place, it has no opinion on how the resource being auctioned off is divvied up between 1st, 2nd, 3rd, and 4th place winners, for example."),(0,i.kt)("p",null,"This contract will be expanded in the future to include other auction types, and better guarantees between that the auctioneer claiming the bid actually has provided the prize by having the winner sign a PDA saying that they received the prize. Right now this primitive contract should ",(0,i.kt)("em",{parentName:"p"},"not")," be used in isolation, but in companionship with another contract (like Metaplex in our case) that makes such guarantees that prizes are delivered if prizes are won."),(0,i.kt)("h2",{id:"metaplex"},"Metaplex"),(0,i.kt)("p",null,"This is the granddaddy contract of them all. The primary product of the Metaplex contract are AuctionManagers, and they are the nexus of the other three contract's structs. The purpose of an AuctionManager is to understand that an Auction object is auctioning off the contents of a Vault, and that the contents of a Vault are different types of NFT arrangements, such as:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Limited Edition Prints (Printing a new child edition from limited supply)"),(0,i.kt)("li",{parentName:"ul"},"Open Edition Prints (Printing a new child edition from unlimited supply)"),(0,i.kt)("li",{parentName:"ul"},"Full Rights Transfers (Giving away token + metadata ownership)"),(0,i.kt)("li",{parentName:"ul"},"Single Token Transfers (Giving away a token but not metadata ownership)")),(0,i.kt)("p",null,"It orchestrates disbursements of those contents to winners of an auction. An AuctionManager requires both a Vault and an Auction to run, and it requires that the Auction's resource key be set to the Vault."),(0,i.kt)("p",null,"Due to each type of NFT transfer above requiring slightly different nuanced handling and checking, Metaplex handles knowing about those things, and making the different CPI calls to the Token Metadata contract to make those things happen as required during the redemption phase. It also has full authority over all the objects like Vault and Auction, and handles all royalties payments by collecting funds from the auction into its own central escrow account and then disbursing to artists."))}h.isMDXComponent=!0}}]);