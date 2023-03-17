"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[37],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return m}});var a=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},d=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,s=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),c=p(n),m=i,h=c["".concat(s,".").concat(m)]||c[m]||u[m]||r;return n?a.createElement(h,l(l({ref:t},d),{},{components:n})):a.createElement(h,l({ref:t},d))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,l=new Array(r);l[0]=c;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:i,l[1]=o;for(var p=2;p<r;p++)l[p]=n[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},94975:function(e,t,n){n.r(t),n.d(t,{assets:function(){return s},contentTitle:function(){return l},default:function(){return u},frontMatter:function(){return r},metadata:function(){return o},toc:function(){return p}});var a=n(83117),i=(n(67294),n(3905));const r={sidebar_label:"iOS SDK"},l="Introduction",o={unversionedId:"sdks/ios/index",id:"sdks/ios/index",title:"Introduction",description:"The Metaplex iOS SDK is a library that allows you to:",source:"@site/docs/02-sdks/01-ios/index.md",sourceDirName:"02-sdks/01-ios",slug:"/sdks/ios/",permalink:"/sdks/ios/",draft:!1,editUrl:"https://github.com/metaplex/docs/tree/main/docs/02-sdks/01-ios/index.md",tags:[],version:"current",lastUpdatedAt:1679052860,formattedLastUpdatedAt:"Mar 17, 2023",frontMatter:{sidebar_label:"iOS SDK"},sidebar:"sidebar",previous:{title:"Android SDK",permalink:"/sdks/android/"},next:{title:"JS SDK",permalink:"/sdks/js/"}},s={},p=[{value:"Stability",id:"stability",level:2},{value:"References",id:"references",level:2},{value:"Getting started",id:"getting-started",level:2},{value:"Installation",id:"installation",level:3},{value:"Requirements",id:"requirements",level:4},{value:"Setup",id:"setup",level:3},{value:"NFTs",id:"nfts",level:2},{value:"Your first request",id:"your-first-request",level:3},{value:"The <code>Nft</code> model",id:"the-nft-model",level:3},{value:"Identity",id:"identity",level:2},{value:"GuestIdentityDriver",id:"guestidentitydriver",level:3},{value:"KeypairIdentityDriver",id:"keypairidentitydriver",level:3},{value:"ReadOnlyIdentityDriver",id:"readonlyidentitydriver",level:3},{value:"Storage",id:"storage",level:2},{value:"URLSharedStorageDriver",id:"urlsharedstoragedriver",level:3},{value:"MemoryStorageDriver",id:"memorystoragedriver",level:3},{value:"Sample app",id:"sample-app",level:2}],d={toc:p};function u(e){let{components:t,...r}=e;return(0,i.kt)("wrapper",(0,a.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"introduction"},"Introduction"),(0,i.kt)("p",null,"The ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/metaplex-foundation/metaplex-ios#metaplex-ios-sdk"},"Metaplex iOS SDK")," is a library that allows you to:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Load and Deserialize Accounts"),(0,i.kt)("li",{parentName:"ul"},"Create transactions"),(0,i.kt)("li",{parentName:"ul"},"Run Actions (mint NFT, create an auction, and so on)")),(0,i.kt)("p",null,"It works both in iOS and other Apple platforms that support Swift."),(0,i.kt)("h2",{id:"stability"},"Stability"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/resources/stability-index"},"Stability 1 - Experimental")),(0,i.kt)("p",null,"This project is in active development. ",(0,i.kt)("strong",{parentName:"p"},"All")," interfaces are ",(0,i.kt)("em",{parentName:"p"},"very likely")," to change very frequently. Please use caution when making use of this library. Bugs or behavior changes may surprise users when Experimental API modifications occur."),(0,i.kt)("h2",{id:"references"},"References"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/metaplex-foundation/metaplex-ios#metaplex-ios-sdk"},"API documentation")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/metaplex-foundation/metaplex-ios"},"Source code"))),(0,i.kt)("h2",{id:"getting-started"},"Getting started"),(0,i.kt)("h3",{id:"installation"},"Installation"),(0,i.kt)("h4",{id:"requirements"},"Requirements"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"iOS 11.0+ / macOS 10.13+ / tvOS 11.0+ / watchOS 3.0+"),(0,i.kt)("li",{parentName:"ul"},"Swift 5.3+")),(0,i.kt)("p",null,"From Xcode 11, you can use ",(0,i.kt)("a",{parentName:"p",href:"https://swift.org/package-manager/"},"Swift Package Manager")," to add Solana.swift to your project."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"File > Swift Packages > Add Package Dependency"),(0,i.kt)("li",{parentName:"ul"},"Add ",(0,i.kt)("inlineCode",{parentName:"li"},"https://github.com/metaplex-foundation/metaplex-ios")),(0,i.kt)("li",{parentName:"ul"},'Select "branch" with "master"'),(0,i.kt)("li",{parentName:"ul"},"Select Metaplex")),(0,i.kt)("p",null,"If you encounter any problems or have a question on adding the package to an Xcode project, I suggest reading the ",(0,i.kt)("a",{parentName:"p",href:"https://developer.apple.com/documentation/xcode/adding_package_dependencies_to_your_app"},"Adding Package Dependencies to Your App")," guide article from Apple."),(0,i.kt)("h3",{id:"setup"},"Setup"),(0,i.kt)("p",null,"The entry point to the Swift SDK is a ",(0,i.kt)("inlineCode",{parentName:"p"},"Metaplex")," instance that will give you access to its API."),(0,i.kt)("p",null,"Set the ",(0,i.kt)("inlineCode",{parentName:"p"},"SolanaConnectionDriver")," and set up your environment. Provide a ",(0,i.kt)("inlineCode",{parentName:"p"},"StorageDriver")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"IdentityDriver"),". You can also use the concrete implementations URLSharedStorageDriver for URLShared and GuestIdentityDriver for a guest Identity Driver. "),(0,i.kt)("p",null,"You can customise who the SDK should interact on behalf of and which storage provider to use when uploading assets. We might provide a default and simple implementation in the future."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-swift"},"let solanaDriver = SolanaConnectionDriver(endpoint: RPCEndpoint.mainnetBetaSolana)\nlet identityDriver = GuestIdentityDriver(solanaRPC: solana.solanaRPC)\nlet storageDriver = URLSharedStorageDriver(urlSession: URLSession.shared)\nlet metaplex Metaplex(connection: solana, identityDriver: identityDriver, storageDriver: storageDriver)\n")),(0,i.kt)("h1",{id:"usage"},"Usage"),(0,i.kt)("p",null,"Once properly configured, that ",(0,i.kt)("inlineCode",{parentName:"p"},"Metaplex")," instance can be used to access modules providing different sets of features. Currently, there is only one NFT module that can be accessed via the ",(0,i.kt)("inlineCode",{parentName:"p"},"nfts()")," method. From that module, you will be able to find, create and update NFTs with more features to come."),(0,i.kt)("h2",{id:"nfts"},"NFTs"),(0,i.kt)("p",null,"The NFT module can be accessed via ",(0,i.kt)("inlineCode",{parentName:"p"},"Metaplex.nfts()")," and provide the following methods. Currently, we only support reading methods. Writing and creating NFTs will be supported in the future."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"findNftByMint(mint, callback)"),(0,i.kt)("li",{parentName:"ul"},"findNftByMintList(mints, callback)"),(0,i.kt)("li",{parentName:"ul"},"findNftsByOwner(owner, callback)"),(0,i.kt)("li",{parentName:"ul"},"findNftsByCreator(creator, position = 1, callback)"),(0,i.kt)("li",{parentName:"ul"},"findNftsByCandyMachine(candyMachine, version = 2, callback)")),(0,i.kt)("p",null,"All the methods return a callback. It's also possible to wrap them inside either RX, and async Result or Combine. We only provide this interface since is the most compatible without forcing any specific framework. "),(0,i.kt)("h3",{id:"your-first-request"},"Your first request"),(0,i.kt)("p",null,"The following code snippet is a basic one you can use to get NFTs from a publicKey. This use case maybe very common for a wallet:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-swift"},'let ownerPublicKey = PublicKey(string: "5LeMDmNW6bQFWQjMhcTZnp6LVHTQQfUpY9jn6YH6RpyE")!\nmetaplex.nft.findNftsByOwner(publicKey: ownerPublicKey) { [weak self] result in\n    switch result {\n        case .success(let nftList):\n            break\n        case .failure:\n            break\n    }\n}\n')),(0,i.kt)("p",null,"This will return an array of NFTs owned by that specific public key."),(0,i.kt)("h3",{id:"the-nft-model"},"The ",(0,i.kt)("inlineCode",{parentName:"h3"},"Nft")," model"),(0,i.kt)("p",null,"All the methods above either return or interact with an ",(0,i.kt)("inlineCode",{parentName:"p"},"Nft")," object. The ",(0,i.kt)("inlineCode",{parentName:"p"},"Nft")," object is a read-only data representation of your NFT that contains all the information you need at the top level."),(0,i.kt)("p",null,"You can see its full data representation by checking the code but here is an overview of the properties that are available on the ",(0,i.kt)("inlineCode",{parentName:"p"},"Nft")," object."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-swift"},"// Always loaded.\npublic let metadataAccount: MetadataAccount\n    \npublic let updateAuthority: PublicKey\npublic let mint: PublicKey\npublic let name: String\npublic let symbol: String\npublic let uri: String\npublic let sellerFeeBasisPoints: UInt16\npublic let creators: [MetaplexCreator]\npublic let primarySaleHappened: Bool\npublic let isMutable: Bool\npublic let editionNonce: UInt8?\n\n// Sometimes loaded.\npublic let masterEditionAccount: MasterEditionAccount?\n")),(0,i.kt)("p",null,"As you can see, some properties are loaded on demand. This is because they are not always needed and/or can be expensive to load."),(0,i.kt)("p",null,"In order to load these properties, you may run the ",(0,i.kt)("inlineCode",{parentName:"p"},"metadata")," properties of the ",(0,i.kt)("inlineCode",{parentName:"p"},"Nft")," object."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-swift"},"nft.metadata(metaplex: self.metaplex) { result in\n    switch result {\n    case .success(let metadata):\n        ...\n    case .failure:\n        ...\n    }\n}\n")),(0,i.kt)("h2",{id:"identity"},"Identity"),(0,i.kt)("p",null,"The current identity of a ",(0,i.kt)("inlineCode",{parentName:"p"},"Metaplex")," instance can be accessed via ",(0,i.kt)("inlineCode",{parentName:"p"},"metaplex.identity()")," and provide information on the wallet we are acting on behalf of when interacting with the SDK."),(0,i.kt)("p",null,"This method returns an identity object with the following interface. All the methods required a solana api instance"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-swift"},"public protocol IdentityDriver {\n    var publicKey: PublicKey { get }\n    func sendTransaction(serializedTransaction: String, onComplete: @escaping(Result<TransactionID, IdentityDriverError>) -> Void)\n    func signTransaction(transaction: Transaction, onComplete: @escaping (Result<Transaction, IdentityDriverError>) -> Void)\n    func signAllTransactions(transactions: [Transaction], onComplete: @escaping (Result<[Transaction?], IdentityDriverError>) -> Void)\n}\n")),(0,i.kt)("p",null,"The implementation of these methods depends on the concrete identity driver being used. For example, using a KeypairIdentity or a Guest (no publickey added)."),(0,i.kt)("p",null,"Let\u2019s have a quick look at the concrete identity drivers available to us."),(0,i.kt)("h3",{id:"guestidentitydriver"},"GuestIdentityDriver"),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"GuestIdentityDriver")," driver is the simplest identity driver. It is essentially a ",(0,i.kt)("inlineCode",{parentName:"p"},"null")," driver that can be useful when we don\u2019t need to send any signed transactions. It will return failure if you use ",(0,i.kt)("inlineCode",{parentName:"p"},"signTransaction")," methods."),(0,i.kt)("h3",{id:"keypairidentitydriver"},"KeypairIdentityDriver"),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"KeypairIdentityDriver")," driver accepts a ",(0,i.kt)("inlineCode",{parentName:"p"},"Account")," object as a parameter."),(0,i.kt)("h3",{id:"readonlyidentitydriver"},"ReadOnlyIdentityDriver"),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"KeypairIdentityDriver")," driver accepts a ",(0,i.kt)("inlineCode",{parentName:"p"},"PublicKey")," object as a parameter. It's a read only similar to the GuestIdentity, but it has a provided ",(0,i.kt)("inlineCode",{parentName:"p"},"PublicKey"),". It will return failure if you use ",(0,i.kt)("inlineCode",{parentName:"p"},"signTransaction")," methods."),(0,i.kt)("h2",{id:"storage"},"Storage"),(0,i.kt)("p",null,"You may access the current storage driver using ",(0,i.kt)("inlineCode",{parentName:"p"},"metaplex.storage()")," which will give you access to the following interface."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-swift"},"public protocol StorageDriver {\n    func download(url: URL, onComplete: @escaping(Result<NetworkingResponse, StorageDriverError>) -> Void)\n}\n")),(0,i.kt)("p",null,"Currently, it's only used to retrieve json data off-chain. "),(0,i.kt)("h3",{id:"urlsharedstoragedriver"},"URLSharedStorageDriver"),(0,i.kt)("p",null,"This will use URLShared networking. Which is the default iOS networking implementation. This maybe the most useful call."),(0,i.kt)("h3",{id:"memorystoragedriver"},"MemoryStorageDriver"),(0,i.kt)("p",null,"This will use return Empty Data object with 0 size. "),(0,i.kt)("h2",{id:"sample-app"},"Sample app"),(0,i.kt)("p",null,"The SDK comes with a ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/metaplex-foundation/metaplex-ios/tree/main/Sample"},"sample app"),". Please clone it run it on your phone and take what is can help you. "),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Sample App",src:n(56192).Z+"#radius#shadow",title:"Sample App",width:"300",height:"649"})))}u.isMDXComponent=!0},56192:function(e,t,n){t.Z=n.p+"assets/images/app-20ab30583743bbf8db31d706739bc538.gif"}}]);