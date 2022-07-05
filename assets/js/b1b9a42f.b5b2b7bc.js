"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[7899],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return h}});var a=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function r(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=a.createContext({}),s=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},d=function(e){var t=s(e.components);return a.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,d=r(e,["components","mdxType","originalType","parentName"]),u=s(n),h=o,m=u["".concat(c,".").concat(h)]||u[h]||p[h]||i;return n?a.createElement(m,l(l({ref:t},d),{},{components:n})):a.createElement(m,l({ref:t},d))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,l=new Array(i);l[0]=u;var r={};for(var c in t)hasOwnProperty.call(t,c)&&(r[c]=t[c]);r.originalType=e,r.mdxType="string"==typeof e?e:o,l[1]=r;for(var s=2;s<i;s++)l[s]=n[s];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},89067:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return l},default:function(){return p},frontMatter:function(){return i},metadata:function(){return r},toc:function(){return s}});var a=n(83117),o=(n(67294),n(3905));const i={},l="Deploying a Candy Machine",r={unversionedId:"sugar/asset-preparation-and-deployment",id:"sugar/asset-preparation-and-deployment",title:"Deploying a Candy Machine",description:"Apart from the launch command, discussed in the Quick Start section above, Sugar provide commands to manage the whole process of deployment of a Candy Machine, from the validation of assets to withdrawing funds and closing a Candy Machine account.",source:"@site/docs/sugar/06-asset-preparation-and-deployment.md",sourceDirName:"sugar",slug:"/sugar/asset-preparation-and-deployment",permalink:"/sugar/asset-preparation-and-deployment",draft:!1,editUrl:"https://github.com/metaplex/docs/tree/main/docs/sugar/06-asset-preparation-and-deployment.md",tags:[],version:"current",sidebarPosition:6,frontMatter:{},sidebar:"sidebar",previous:{title:"Upload Methods",permalink:"/sugar/upload-methods"},next:{title:"Introduction",permalink:"/sdk/js/getting-started"}},c={},s=[{value:"Preparing Your Assets",id:"preparing-your-assets",level:2},{value:"Collection Assets",id:"collection-assets",level:3},{value:"1. <code>create-config</code>",id:"1-create-config",level:3},{value:"2. <code>validate</code>",id:"2-validate",level:3},{value:"3. <code>upload</code>",id:"3-upload",level:3},{value:"4. <code>deploy</code>",id:"4-deploy",level:3},{value:"5. <code>verify</code>",id:"5-verify",level:3},{value:"Other Commands",id:"other-commands",level:2},{value:"<code>mint</code>",id:"mint",level:3},{value:"<code>collection</code>",id:"collection",level:3},{value:"<code>show</code>",id:"show",level:3},{value:"<code>update</code>",id:"update",level:3},{value:"<code>withdraw</code>",id:"withdraw",level:3},{value:"<code>bundlr</code>",id:"bundlr",level:3},{value:"Further Reading",id:"further-reading",level:2}],d={toc:s};function p(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"deploying-a-candy-machine"},"Deploying a Candy Machine"),(0,o.kt)("p",null,"Apart from the ",(0,o.kt)("inlineCode",{parentName:"p"},"launch")," command, discussed in the ",(0,o.kt)("inlineCode",{parentName:"p"},"Quick Start")," section above, Sugar provide commands to manage the whole process of deployment of a Candy Machine, from the validation of assets to withdrawing funds and closing a Candy Machine account."),(0,o.kt)("p",null,"In this section we will cover the commands involved in deploying a Candy Machine in the order that they should be executed."),(0,o.kt)("h2",{id:"preparing-your-assets"},"Preparing Your Assets"),(0,o.kt)("p",null,"The preparation of the assets is similar to the instructions provided in the ",(0,o.kt)("a",{parentName:"p",href:"http://docs.metaplex.com/candy-machine-v2/preparing-assets"},"Candy Machine v2 documentation"),". By default, Sugar loads media/metadata files from an ",(0,o.kt)("inlineCode",{parentName:"p"},"assets")," folder in the directory where the command has been executed, but the name of the folder can be specified as a command-line parameter."),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/26067212/165969928-992c3c7e-8069-4590-97f0-e6c19cd37d74.png",alt:"Screen Shot 2022-04-29 at 10 50 00 AM"})),(0,o.kt)("p",null,"Example image of how your asset folder should look. "),(0,o.kt)("h3",{id:"collection-assets"},"Collection Assets"),(0,o.kt)("p",null,"In addition, if you want a collection NFT to be created and set automatically, you will need to additionally include a ",(0,o.kt)("inlineCode",{parentName:"p"},"collection.json")," and a ",(0,o.kt)("inlineCode",{parentName:"p"},"collection.png/jpg")," in your ",(0,o.kt)("inlineCode",{parentName:"p"},"assets")," folder. They should be in the same format as the other assets. An example of a ",(0,o.kt)("inlineCode",{parentName:"p"},"collection.json")," file is below:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "name": "Your Collection Name",\n  "symbol": "SYMBOL",\n  "description": "A description of your collection",\n  "image": "collection.png",\n  "attributes": [],\n  "properties": {\n    "files": [\n      {\n        "uri": "collection.png",\n        "type": "image/png"\n      }\n    ]\n  }\n}\n')),(0,o.kt)("p",null,"If you have a preexisting collection NFT and want to use it for your new Candy Machine, skip this step and use the ",(0,o.kt)("inlineCode",{parentName:"p"},"collection set")," command after deploying the Candy Machine as shown ",(0,o.kt)("a",{parentName:"p",href:"#collection"},"here"),". "),(0,o.kt)("h3",{id:"1-create-config"},"1. ",(0,o.kt)("inlineCode",{parentName:"h3"},"create-config")),(0,o.kt)("p",null,"By default, Sugar looks for a ",(0,o.kt)("inlineCode",{parentName:"p"},"config.json")," file in the current directory to load the Candy Machine configuration ","\u2014"," the configuration file name can be specified with a ",(0,o.kt)("inlineCode",{parentName:"p"},"-c")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"--config")," option."),(0,o.kt)("p",null,"You can either create this file manually, following the instructions above, or use the ",(0,o.kt)("inlineCode",{parentName:"p"},"create-config")," command:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"sugar create-config\n")),(0,o.kt)("p",null,"Executing the command starts an interactive process consisting in a sequence of prompts to gather information about all configuration options. At the end of it, a configuration file is saved (default to ",(0,o.kt)("inlineCode",{parentName:"p"},"config.json"),") or its content is displayed on screen. To specify a custom file name, use the option ",(0,o.kt)("inlineCode",{parentName:"p"},"-c"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"sugar create-config -c my-config.json\n")),(0,o.kt)("h3",{id:"2-validate"},"2. ",(0,o.kt)("inlineCode",{parentName:"h3"},"validate")),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"validate")," command is used to check that all files in the assets folder are in the correct format:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"sugar validate\n")),(0,o.kt)("p",null,"if your assets are in a folder named ",(0,o.kt)("inlineCode",{parentName:"p"},"assets")," or:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"sugar validate <ASSETS_DIR>\n")),(0,o.kt)("p",null,"to specify a custom asset ",(0,o.kt)("inlineCode",{parentName:"p"},"<ASSETS DIR>")," folder name."),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("strong",{parentName:"p"},"Note:")," It is important to validate your assets before the upload to avoid having to repeat the upload process.")),(0,o.kt)("h3",{id:"3-upload"},"3. ",(0,o.kt)("inlineCode",{parentName:"h3"},"upload")),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"upload")," command uploads assets to the specified storage and creates the cache file for the Candy Machine:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"sugar upload\n")),(0,o.kt)("p",null,"if your assets are in a folder named ",(0,o.kt)("inlineCode",{parentName:"p"},"assets")," or:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"sugar upload <ASSETS DIR>\n")),(0,o.kt)("p",null,"There is also the option to specify the path for the configuration file with the ",(0,o.kt)("inlineCode",{parentName:"p"},"-c")," option (default ",(0,o.kt)("inlineCode",{parentName:"p"},"config.json"),") and the name of the cache file with the option ",(0,o.kt)("inlineCode",{parentName:"p"},"--cache")," (default ",(0,o.kt)("inlineCode",{parentName:"p"},"cache.json"),")."),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"upload")," command can be resumed (re-run) at any point in case the upload is not completed successfully ","\u2014"," only files that have not yet being uploaded are processed. It also automatically detects when the content of media/metadata files change and re-uploads them, updating the cache file accordingly. In other words, if you need to change a file, you only need to copy the new (modified) file to your assets folder and re-run the ",(0,o.kt)("inlineCode",{parentName:"p"},"upload")," command. There is no need to manually edit the cache file."),(0,o.kt)("h3",{id:"4-deploy"},"4. ",(0,o.kt)("inlineCode",{parentName:"h3"},"deploy")),(0,o.kt)("p",null,"Once all assets are uploaded and the cache file is successfully created, you are ready to deploy your items to Solana:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"sugar deploy\n")),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"deploy")," command will write the information of your cache file to the Candy Machine account on-chain. This effectively creates the Candy Machine and displays its on-chain ID ","\u2014"," use this ID to query its information on-chain using an ",(0,o.kt)("a",{parentName:"p",href:"https://explorer.solana.com/"},"explorer"),". You can specify the path for the configuration file with the ",(0,o.kt)("inlineCode",{parentName:"p"},"-c")," option (default ",(0,o.kt)("inlineCode",{parentName:"p"},"config.json"),") and the name of the cache file with the option ",(0,o.kt)("inlineCode",{parentName:"p"},"--cache")," (default ",(0,o.kt)("inlineCode",{parentName:"p"},"cache.json"),") in case you are not using the default names."),(0,o.kt)("p",null,"After a successful deploy, the Candy Machine is ready to be minted according to its ",(0,o.kt)("inlineCode",{parentName:"p"},"goLiveDate")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"whitelistMintSettings"),"."),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("strong",{parentName:"p"},"Note:")," The authority wallet (the one used to create the Candy Machine) can mint bypassing the ",(0,o.kt)("inlineCode",{parentName:"p"},"goLiveDate")," setting.")),(0,o.kt)("h3",{id:"5-verify"},"5. ",(0,o.kt)("inlineCode",{parentName:"h3"},"verify")),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"verify")," command checks that all items in your cache file have been successfully written on-chain:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"sugar verify\n")),(0,o.kt)("p",null,"if you are using the default cache file name (",(0,o.kt)("inlineCode",{parentName:"p"},"cache.json"),") or:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"sugar verify --cache <CACHE>\n")),(0,o.kt)("p",null,"to specify a different cache file path. If you deploy has been successfully, the verification return no errors. At this point, you can set up your ",(0,o.kt)("a",{parentName:"p",href:"http://docs.metaplex.com/candy-machine-v2/mint-frontend"},"minting webpage")," to allow your community the chance to mint."),(0,o.kt)("h2",{id:"other-commands"},"Other Commands"),(0,o.kt)("p",null,"Sugar includes other commands to manage a Candy Machine."),(0,o.kt)("h3",{id:"mint"},(0,o.kt)("inlineCode",{parentName:"h3"},"mint")),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"mint")," command mints NFTs from a Candy Machine from the command-line."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"sugar mint\n")),(0,o.kt)("p",null,"if you are using the default cache file name (",(0,o.kt)("inlineCode",{parentName:"p"},"cache.json"),") or:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"sugar mint --cache <CACHE>\n")),(0,o.kt)("p",null,"to specify a different cache file path. You can specify the number of NFTs to mint using the option ",(0,o.kt)("inlineCode",{parentName:"p"},"-n"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"sugar mint -n 10\n")),(0,o.kt)("p",null,"The above command will mint 10 NFTs from the Candy Machine."),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("strong",{parentName:"p"},"Note:")," It is not possible to mint tokens from the command line if you have ",(0,o.kt)("inlineCode",{parentName:"p"},"gatekeeper")," settings enabled. If you would like to mint tokens, update the ",(0,o.kt)("inlineCode",{parentName:"p"},"goLiveDate")," to ",(0,o.kt)("inlineCode",{parentName:"p"},"null")," and temporarily disable the ",(0,o.kt)("inlineCode",{parentName:"p"},"gatekeeper")," settings.")),(0,o.kt)("h3",{id:"collection"},(0,o.kt)("inlineCode",{parentName:"h3"},"collection")),(0,o.kt)("p",null,"You can use the ",(0,o.kt)("inlineCode",{parentName:"p"},"collection")," commands to manually set or remove the collection NFT. You can only modify the collection on your Candy Machine before any NFTs have been minted from it. "),(0,o.kt)("p",null,"You can set a preexisting collection NFT on your candy machine with the following command:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"sugar collection set <COLLECTION MINT ID>\n")),(0,o.kt)("p",null,"where the ",(0,o.kt)("inlineCode",{parentName:"p"},"<COLLECTION MINT ID>")," is the mint ID of the collection NFT, which is the address you use to view the NFT in explorers."),(0,o.kt)("p",null,"To remove the collection NFT: "),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"sugar collection remove\n")),(0,o.kt)("h3",{id:"show"},(0,o.kt)("inlineCode",{parentName:"h3"},"show")),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"show")," command displays the on-chain config of an existing candy machine:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"sugar show <CANDY MACHINE>\n")),(0,o.kt)("p",null,"where the ",(0,o.kt)("inlineCode",{parentName:"p"},"<CANDY MACHINE>")," is the Candy Machine ID ","\u2014"," the ID given by the ",(0,o.kt)("inlineCode",{parentName:"p"},"deploy")," command."),(0,o.kt)("h3",{id:"update"},(0,o.kt)("inlineCode",{parentName:"h3"},"update")),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"update")," command is used to modify the current configuration of a Candy Machine. Most configuration settings can be updated in a CMv2 with a single command, with the exception of:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"number")," of items in the Candy Machine can only be updated when ",(0,o.kt)("inlineCode",{parentName:"li"},"hiddenSettings")," are being used;"),(0,o.kt)("li",{parentName:"ul"},"switching to use ",(0,o.kt)("inlineCode",{parentName:"li"},"hiddenSettings")," is only possible if the ",(0,o.kt)("inlineCode",{parentName:"li"},"number")," of items is equal to ",(0,o.kt)("inlineCode",{parentName:"li"},"0"),". After the switch, you will be able to update the ",(0,o.kt)("inlineCode",{parentName:"li"},"number")," of items.")),(0,o.kt)("p",null,"To update the configuration, modify your ",(0,o.kt)("inlineCode",{parentName:"p"},"config.json")," (or equivalent) file and execute:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"sugar update\n")),(0,o.kt)("p",null,"if you are using the default cache file name (",(0,o.kt)("inlineCode",{parentName:"p"},"cache.json"),") and configuration file (",(0,o.kt)("inlineCode",{parentName:"p"},"config.json"),"). Otherwise, use:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"sugar update -c <CONFIG> --cache <CACHE>\n")),(0,o.kt)("p",null,"where ",(0,o.kt)("inlineCode",{parentName:"p"},"<CONFIG>")," is the path to the configuration file and ",(0,o.kt)("inlineCode",{parentName:"p"},"<CACHE>")," is the path to the cache file."),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"You need to be careful when updating a live Candy Machine, since setting a wrong value will immediately affect its functionality.")),(0,o.kt)("h3",{id:"withdraw"},(0,o.kt)("inlineCode",{parentName:"h3"},"withdraw")),(0,o.kt)("p",null,"When the mint from a Candy Machine is complete, it is possible to recover the funds used to pay rent for the data stored on-chain. To initiate the withdraw:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"sugar withdraw <CANDY MACHINE>\n")),(0,o.kt)("p",null,"where the ",(0,o.kt)("inlineCode",{parentName:"p"},"<CANDY MACHINE>")," is the Candy Machine ID ","\u2014"," the ID given by the ",(0,o.kt)("inlineCode",{parentName:"p"},"deploy")," command. It is possible to withdraw funds from all Candy Machines associated with the current keypair:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"sugar withdraw\n")),(0,o.kt)("p",null,"or list all Candy Machines and their associated funds from the current keypair:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"sugar withdraw --list\n")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"You should not withdraw the rent of a live Candy Machine, as the Candy Machine will stop working when you drain its account.")),(0,o.kt)("h3",{id:"bundlr"},(0,o.kt)("inlineCode",{parentName:"h3"},"bundlr")),(0,o.kt)("p",null,"When you use ",(0,o.kt)("inlineCode",{parentName:"p"},"bundlr")," as your upload method, Sugar automatically funds your account on the Bundlr Network to cover the storage costs. Once the upload is completed, there could be left over funds in your Bundlr account. You can verify your balance on the Bundlr Network with the following command:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"sugar bundlr balance\n")),(0,o.kt)("p",null,"This will retrieve the balance for the current keypair. You can specify an alternative keypair using the option ",(0,o.kt)("inlineCode",{parentName:"p"},"--keypair"),". The remaining balance (if there is any) can be withdrawn:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"sugar bundlr withdraw\n")),(0,o.kt)("p",null,"At the end of the withdraw, the funds available on the Bundlr Network will be transferred to your Solana address."),(0,o.kt)("h2",{id:"further-reading"},"Further Reading"),(0,o.kt)("p",null,"The ",(0,o.kt)("a",{parentName:"p",href:"http://docs.metaplex.com/candy-machine-v2/introduction"},"Candy Machine v2 documentation")," provides a more detailed explanation of each step of the deploy of a Candy Machine. Although there a differences in Sugar commands, the overall process is similar."))}p.isMDXComponent=!0}}]);