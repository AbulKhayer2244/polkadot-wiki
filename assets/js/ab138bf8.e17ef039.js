(self.webpackChunk=self.webpackChunk||[]).push([[8791],{7940:(e,t,o)=>{"use strict";o.d(t,{Z:()=>d});var n=o(4165),a=o(5861),r=o(7294),i=o(3444),s=o(1165),l=o(7425);function p(e,t,o){return c.apply(this,arguments)}function c(){return(c=(0,a.Z)((0,n.Z)().mark((function e(t,o,a){var r,l,p,c,u;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:r=void 0,l=void 0,e.t0=t,e.next="polkadot"===e.t0?5:"kusama"===e.t0?7:"statemine"===e.t0?9:"statemint"===e.t0?11:13;break;case 5:return r="wss://rpc.polkadot.io",e.abrupt("break",14);case 7:return r="wss://kusama-rpc.polkadot.io/",e.abrupt("break",14);case 9:return r="wss://statemine-rpc.polkadot.io/",e.abrupt("break",14);case 11:return r="wss://statemint-rpc.polkadot.io/",e.abrupt("break",14);case 13:console.log("Unknown socket url provided, no connection made.");case 14:if(void 0!==r){e.next=18;break}return e.abrupt("return");case 18:return p=new i.U(r),e.next=21,s.G.create({provider:p});case 21:c=e.sent,(u=o.split(".")).forEach((function(e){e in c&&(c=c[e])})),e.t1=u[0],e.next="consts"===e.t1?27:"query"===e.t1?29:34;break;case 27:return l=c.toString(),e.abrupt("break",35);case 29:return e.next=31,c();case 31:return l=(l=e.sent).toString(),e.abrupt("break",35);case 34:console.log("Unknown path prefix ("+u[0]+") in "+o);case 35:return e.abrupt("return",l);case 36:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function u(e,t,o,n){switch(t){case"humanReadable":(0,l.HumanReadable)(e,o,n);break;case"blocksToDays":(0,l.BlocksToDays)(e,n);break;default:return void console.log("Ignoring unknown filter type")}}const d=function(e){var t=e.network,o=e.path,i=e.defaultValue,s=e.filter,l=void 0===s?void 0:s,c=(0,r.useState)(""),d=c[0],h=c[1];return t=t.toLowerCase(),(0,r.useEffect)((function(){void 0!==l?u(i.toString(),l,t,h):h(i.toString());var e=void 0;switch(t){case"polkadot":e="wss://rpc.polkadot.io";break;case"kusama":e="wss://kusama-rpc.polkadot.io/";break;case"statemine":e="wss://statemine-rpc.polkadot.io/";break;case"statemint":e="wss://statemint-rpc.polkadot.io/";break;default:console.log("Unknown network provided, "+t)}if(void 0===e)console.log("Failed to connect to a valid websocket, applying default");else{var r=function(){var e=(0,a.Z)((0,n.Z)().mark((function e(){var a;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p(t,o,h);case 2:if(void 0!==(a=e.sent)){e.next=7;break}return e.abrupt("return");case 7:void 0!==l?u(a,l,t,h):h(a);case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();try{r()}catch(s){console.log(s)}}}),[]),d}},7425:e=>{var t={polkadot:{precision:1e10,symbol:"DOT"},kusama:{precision:1e12,symbol:"KSM"},statemint:{precision:1e10,symbol:"DOT"},statemine:{precision:1e12,symbol:"KSM"}};e.exports={HumanReadable:function(e,o,n){var a=void 0;if("polkadot"===o||"statemint"===o)a=3;else{if("kusama"!==o&&"statemine"!==o)return void console.log("Unknown network type found when attempting to apply 'Human Readable' filter");a=6}e=parseFloat(e),n((e=Number.isInteger(e/t[o].precision)?e/t[o].precision+" "+t[o].symbol:(e/t[o].precision).toFixed(a)+" "+t[o].symbol).toString())},BlocksToDays:function(e,t){t((e=6*e/86400).toString())}}},3433:(e,t,o)=>{"use strict";o.r(t),o.d(t,{assets:()=>u,contentTitle:()=>p,default:()=>m,frontMatter:()=>l,metadata:()=>c,toc:()=>d});var n=o(7462),a=o(3366),r=(o(7294),o(3905)),i=o(7940),s=["components"],l={id:"learn-proxies",title:"Proxy Accounts",sidebar_label:"Proxy Accounts",description:"Learn about account proxies and how they can benefit your account(s).",keywords:["proxy","proxies","proxy accounts","proxy types"],slug:"../learn-proxies"},p=void 0,c={unversionedId:"learn/learn-proxies",id:"learn/learn-proxies",title:"Proxy Accounts",description:"Learn about account proxies and how they can benefit your account(s).",source:"@site/../docs/learn/learn-proxies.md",sourceDirName:"learn",slug:"/learn-proxies",permalink:"/docs/learn-proxies",draft:!1,editUrl:"https://github.com/w3f/polkadot-wiki/edit/master/docs/learn/learn-proxies.md",tags:[],version:"current",lastUpdatedBy:"Keith Alfaro",lastUpdatedAt:1663544579,formattedLastUpdatedAt:"Sep 18, 2022",frontMatter:{id:"learn-proxies",title:"Proxy Accounts",sidebar_label:"Proxy Accounts",description:"Learn about account proxies and how they can benefit your account(s).",keywords:["proxy","proxies","proxy accounts","proxy types"],slug:"../learn-proxies"},sidebar:"docs",previous:{title:"NPoS Election Algorithms",permalink:"/docs/learn-phragmen"},next:{title:"Randomness",permalink:"/docs/learn-randomness"}},u={},d=[{value:"Proxy Types",id:"proxy-types",level:2},{value:"Any Proxies",id:"any-proxies",level:3},{value:"Non-transfer Proxies",id:"non-transfer-proxies",level:3},{value:"Governance Proxies",id:"governance-proxies",level:3},{value:"Staking Proxies",id:"staking-proxies",level:3},{value:"Identity Judgement Proxies",id:"identity-judgement-proxies",level:3},{value:"Cancel Proxies",id:"cancel-proxies",level:3},{value:"Auction Proxies",id:"auction-proxies",level:3},{value:"Anonymous Proxies",id:"anonymous-proxies",level:3},{value:"Time-delayed Proxies",id:"time-delayed-proxies",level:3},{value:"Why use a Proxy?",id:"why-use-a-proxy",level:2},{value:"How to set up a Proxy",id:"how-to-set-up-a-proxy",level:2},{value:"Using the Polkadot-JS UI",id:"using-the-polkadot-js-ui",level:3},{value:"Removing Proxies",id:"removing-proxies",level:3},{value:"How to view your Proxies",id:"how-to-view-your-proxies",level:2},{value:"Putting It All Together",id:"putting-it-all-together",level:2},{value:"Proxy Deposits",id:"proxy-deposits",level:2},{value:"Resources",id:"resources",level:2}],h={toc:d};function m(e){var t=e.components,l=(0,a.Z)(e,s);return(0,r.kt)("wrapper",(0,n.Z)({},h,l,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Polkadot provides a module that allows users to set proxy accounts to perform a limited number of\nactions on their behalf. Much like the Stash and Controller account relationship in\n",(0,r.kt)("a",{parentName:"p",href:"/docs/learn-staking"},"staking"),", proxies allow users to keep one account in cold storage and actively\nparticipate in the network with the weight of the tokens in that account."),(0,r.kt)("p",null,"Check out our Polkadot YouTube video that explains what proxy accounts are:"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://www.youtube.com/watch?v=1tcygkq52tU"},(0,r.kt)("img",{parentName:"a",src:"https://img.youtube.com/vi/1tcygkq52tU/0.jpg",alt:"Proxy Accounts"}))),(0,r.kt)("h2",{id:"proxy-types"},"Proxy Types"),(0,r.kt)("p",null,"You can set a proxy account via the Proxy module. When you set a proxy, you must choose a type of\nproxy for the relationship. Polkadot offers:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Any"),(0,r.kt)("li",{parentName:"ul"},"Non-transfer"),(0,r.kt)("li",{parentName:"ul"},"Governance"),(0,r.kt)("li",{parentName:"ul"},"Staking"),(0,r.kt)("li",{parentName:"ul"},"Identity Judgement"),(0,r.kt)("li",{parentName:"ul"},"Auction")),(0,r.kt)("p",null,"When a proxy account makes a ",(0,r.kt)("inlineCode",{parentName:"p"},"proxy")," transaction, Polkadot filters the desired transaction to ensure\nthat the proxy account has the appropriate permission to make that transaction on behalf of the cold\naccount."),(0,r.kt)("h3",{id:"any-proxies"},"Any Proxies"),(0,r.kt)("p",null,"As implied by the name, a proxy type of ",(0,r.kt)("strong",{parentName:"p"},"Any")," allows the proxy account to make any transaction,\nincluding balance transfers. In most cases, this should be avoided as the proxy account is used more\nfrequently than the cold account and is therefore less secure."),(0,r.kt)("h3",{id:"non-transfer-proxies"},"Non-transfer Proxies"),(0,r.kt)("p",null,"Proxies that are of the type ",(0,r.kt)("strong",{parentName:"p"},"Non-transfer")," are accounts that allow any type of transaction except\n",(0,r.kt)("a",{parentName:"p",href:"/docs/learn-balance-transfers"},"balance transfers")," (including ",(0,r.kt)("a",{parentName:"p",href:"/docs/learn-DOT/#vesting"},"vested"),"\ntransfers)."),(0,r.kt)("h3",{id:"governance-proxies"},"Governance Proxies"),(0,r.kt)("p",null,"The ",(0,r.kt)("strong",{parentName:"p"},"Governance")," type will allow proxies to make transactions related to governance (i.e., from\nthe Democracy, Council, Treasury, Technical Committee, and Elections pallets)."),(0,r.kt)("admonition",{title:"Explainers on governance proxies",type:"note"},(0,r.kt)("p",{parentName:"admonition"},"See ",(0,r.kt)("a",{parentName:"p",href:"/docs/maintain-guides-democracy#governance-proxies"},"Governance")," for more information\non governance proxies or watch our\n",(0,r.kt)("a",{parentName:"p",href:"https://www.youtube.com/watch?v=q5qLFhG4SDw&list=PLOyWqupZ-WGuAuS00rK-pebTMAOxW41W8&index=27&ab_channel=Polkadot"},"technical explainer video that explores this concept"),".")),(0,r.kt)("h3",{id:"staking-proxies"},"Staking Proxies"),(0,r.kt)("p",null,"The ",(0,r.kt)("strong",{parentName:"p"},"Staking")," type allows staking-related transactions, but do not confuse a staking proxy with\nthe controller account. Within the staking pallet, some transactions must come from the stash\naccount, while others must come from the controller account. The stash account is meant to stay in\ncold storage, while the controller account makes day-to-day transactions like setting session keys\nor deciding which validators to nominate. The stash account still needs to make some transactions\nsuch as bonding extra funds or designating a new controller account. A proxy doesn't change the\n",(0,r.kt)("em",{parentName:"p"},"roles")," of stash and controller accounts, but does allow the stash to be accessed even less\nfrequently than using a controller account."),(0,r.kt)("h3",{id:"identity-judgement-proxies"},"Identity Judgement Proxies"),(0,r.kt)("p",null,"The ",(0,r.kt)("strong",{parentName:"p"},"Identity Judgement")," proxies are in charge of allowing registrars to make judgement on an\naccount's identity. If you are unfamiliar with judgements and identities on chain, please refer to\n",(0,r.kt)("a",{parentName:"p",href:"/docs/learn-identity#judgements"},"this page"),"."),(0,r.kt)("h3",{id:"cancel-proxies"},"Cancel Proxies"),(0,r.kt)("p",null,"Proxies that are of the type ",(0,r.kt)("strong",{parentName:"p"},"Cancel")," allow accounts to reject and remove any time-delay proxy\nannouncements."),(0,r.kt)("h3",{id:"auction-proxies"},"Auction Proxies"),(0,r.kt)("p",null,"Proxies that are of the type ",(0,r.kt)("strong",{parentName:"p"},"Auction")," are accounts that allow transactions pertaining to\nparachain auctions and crowdloans. The Auction proxy account can sign those transactions on behalf\nof an account in cold storage. If you already setup a Non-transfer proxy account, it can do\neverything an Auction proxy can do. Before participating in a crowdloan using an Auction proxy, it\nis recommended that you check with the respective parachain team for any possible issues pertaining\nto the crowdloan rewards distribution."),(0,r.kt)("h3",{id:"anonymous-proxies"},"Anonymous Proxies"),(0,r.kt)("p",null,"Polkadot includes a function to create an ",(0,r.kt)("strong",{parentName:"p"},"Anonymous proxy"),". Such type of proxy is the only way of\naccessing a designated primary account. That is, it generates an address but no corresponding\nprivate key. Normally, a primary account designates a proxy account, but anonymous proxies are the\nopposite. The account that creates the proxy relationship is the proxy account and the new account\nis the primary."),(0,r.kt)("admonition",{title:"Use extreme care with anonymous proxies. Once you remove the proxy relationship, the",type:"danger"},(0,r.kt)("p",{parentName:"admonition"},"primary account will be inaccessible.")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"anonymous proxy",src:o(8525).Z,width:"2102",height:"728"})),(0,r.kt)("admonition",{title:"Explainer video on anonymous proxies",type:"note"},(0,r.kt)("p",{parentName:"admonition"},"Learn more about anonymous proxies from our\n",(0,r.kt)("a",{parentName:"p",href:"https://www.youtube.com/watch?v=iWq53zXo7dw&list=PLOyWqupZ-WGuAuS00rK-pebTMAOxW41W8&index=28&ab_channel=Polkadot"},"technical explainer video"),".")),(0,r.kt)("h3",{id:"time-delayed-proxies"},"Time-delayed Proxies"),(0,r.kt)("p",null,"We can add an additional layer of security to proxies by giving them a delay time. The delay will be\nquantified in number of blocks. Polkadot has 6\nseconds of block-time. A delay value of 10 will mean 10 blocks, which equals to 1 minute of delay.\nThe proxy will announce it's intended action and wait for the number of blocks defined in the delay\ntime before executing it. The proxy will include the hash of the intended function call in the\nannouncement. Within this time window, the intended action may be cancelled by accounts that control\nthe proxy. Now we can use proxies knowing that any malicious actions can be noticed and reverted\nwithin a delay period."),(0,r.kt)("admonition",{title:"The Polkadot-JS UI cannot handle complicated proxy setups",type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"The Polkadot-JS UI cannot handle complicated proxy setups (e.g. a proxy -> multisig -> an anonymous\nproxy which is part of another multisig). These complex setups must be done using the\n",(0,r.kt)("a",{parentName:"p",href:"https://polkadot.js.org/apps/#/extrinsics"},"extrinsics tab")," directly."),(0,r.kt)("p",{parentName:"admonition"},"These complex proxy setups should only be performed if you are comfortable enough interacting\ndirectly with the chain, as you will be unable to sign extrinsics using the UI.")),(0,r.kt)("h2",{id:"why-use-a-proxy"},"Why use a Proxy?"),(0,r.kt)("p",null,"Proxies are great to use for specific purposes because they add in a layer of security. Rather than\nusing funds in one sole account, smaller accounts with unique roles complete tasks for the main\nstash account. This drives attention away from the main account and to proxies."),(0,r.kt)("p",null,"Anonymous proxies, in particular, can be used for permissionless management. In this example below,\nthere is a multisig with four different accounts inside. Two of the accounts, Alice and Bob, have an\nanonymous proxy attached to them. In the case that the multisig account wanted to add or remove\nAlice or Bob or even add in a new account into the anonymous proxy, the anonymous proxy would take\ncare of that change. If a multisig wanted to modify itself without an anonymous proxy, a whole new\nmultisig would be created."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"anonymous multisig proxy",src:o(1463).Z,width:"2182",height:"1202"})),(0,r.kt)("h2",{id:"how-to-set-up-a-proxy"},"How to set up a Proxy"),(0,r.kt)("h3",{id:"using-the-polkadot-js-ui"},"Using the Polkadot-JS UI"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://support.polkadot.network/support/solutions/articles/65000182179-how-to-create-a-proxy-account"},"Creating a Proxy")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://support.polkadot.network/support/solutions/articles/65000182196"},"Creating an Anonymous Proxy"))),(0,r.kt)("h3",{id:"removing-proxies"},"Removing Proxies"),(0,r.kt)("p",null,"Under the ",(0,r.kt)("a",{parentName:"p",href:"https://polkadot.js.org/apps/#/accounts"},"accounts tab in the Polkadot-JS UI"),' there is\nblue button next to the account that has proxies. Hovering on the blue button lets you click on a\nlink that says "proxy overview", which displays a pop-up window like the one shown below. In this\npop-up window, you have an option to clear individual proxy accounts or all of them. Under the hood,\nthe UI is calling the extrinsics ',(0,r.kt)("inlineCode",{parentName:"p"},"removeProxy")," for individual accounts and ",(0,r.kt)("inlineCode",{parentName:"p"},"removeProxies")," for\nclearing all of the proxy accounts."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Remove Proxies",src:o(3405).Z,width:"2560",height:"1252"})),(0,r.kt)("p",null,"The procedure for removing an Anonymous Proxy is different and there are a few functions on the\nextrinsic page that will help do this."),(0,r.kt)("admonition",{title:"There is no way to get access to the primary account after deleting the anonymous proxy",type:"warning"},(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("inlineCode",{parentName:"p"},"removeProxy")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"removeProxies")," do not work for anonymous proxies. You must use the ",(0,r.kt)("inlineCode",{parentName:"p"},"killAnonymous"),"\nfunction which must be called ",(0,r.kt)("strong",{parentName:"p"},"from")," the ",(0,r.kt)("em",{parentName:"p"},"anonymous")," proxy. This means that the anonymous proxy\nmust be added as an account to the Polkadot-JS UI.")),(0,r.kt)("p",null,"The following steps can be used to remove your anonymous proxy:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Step 0"),": You need to know the following information:"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"the ",(0,r.kt)("strong",{parentName:"li"},"account")," you created the anonymous proxy from"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"type of proxy"),", index (almost always 0)"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"block height")," it was created at"),(0,r.kt)("li",{parentName:"ul"},"the ",(0,r.kt)("strong",{parentName:"li"},"extrinsic index"),' in the block (on most block explorers, you will see the extrinsic ID\nlisted as something along the lines of "9000-2" -> 9000 is the block height (block number) and 2\nis the extrinsic index. You can find this information by looking up your account in a block\nexplorer.')),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("img",{alt:"anon proxy info",src:o(8288).Z,width:"1832",height:"718"}))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Step 1"),": Go to ",(0,r.kt)("a",{parentName:"p",href:"https://polkadot.js.org/apps/#/accounts"},"https://polkadot.js.org/apps/#/accounts")," (make sure you are on correct network).")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Step 2"),": Click ",(0,r.kt)("inlineCode",{parentName:"p"},"Proxied")," and add your address, name it ",(0,r.kt)("inlineCode",{parentName:"p"},"ANON PROXY"),". You should now see this\naddress in accounts. Now you need to call ",(0,r.kt)("inlineCode",{parentName:"p"},"killAnonymous")," from the anonymous proxy. It is\nimportant to note that anonymous proxies ",(0,r.kt)("em",{parentName:"p"},"work backwards"),"; the original account acts as the proxy."),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("img",{alt:"add proxy to delete",src:o(9411).Z,width:"2168",height:"570"}))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Step 3"),": Go to ",(0,r.kt)("a",{parentName:"p",href:"https://polkadot.js.org/apps/#/extrinsics"},"https://polkadot.js.org/apps/#/extrinsics"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Step 4"),": Call extrinsic ",(0,r.kt)("inlineCode",{parentName:"p"},"proxy.killAnonymous")," using the selected account ANON PROXY and the\nfollowing parameters:"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Spawner: (original account)"),(0,r.kt)("li",{parentName:"ul"},"Proxy type (kind of proxy)"),(0,r.kt)("li",{parentName:"ul"},"Index 0 (almost always, but can be seen in creating extrinsic)"),(0,r.kt)("li",{parentName:"ul"},"Block number x"),(0,r.kt)("li",{parentName:"ul"},"Extrinsic index y")),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("img",{alt:"call extrinsic",src:o(7810).Z,width:"2788",height:"1216"}))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Step 5"),": Submit and sign extrinsic"),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("img",{alt:"sign extrinsic",src:o(7810).Z,width:"2788",height:"1216"})))),(0,r.kt)("h2",{id:"how-to-view-your-proxies"},"How to view your Proxies"),(0,r.kt)("p",null,'To view your proxy, head over to the Chain State (underneath "Developer") page on\n',(0,r.kt)("a",{parentName:"p",href:"https://polkadot.js.org/apps/?rpc=wss%3A%2F%2Frpc.polkadot.io#/chainstate"},"Polkadot-JS Apps"),". If\nyou've created your proxy on a Kusama account, it is required to change your network accordingly\nusing the top left navigation button. On this page, the proxy pallet should be selected, returning\nthe announcements and proxies functions. The proxies function will allow you to see your created\nproxies for either one account or for all accounts (using the toggle will enable this). Proxy\nannouncements are what time lock proxies do to announce they are going to conduct an action."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"view proxies",src:o(2273).Z,width:"2880",height:"708"})),(0,r.kt)("h2",{id:"putting-it-all-together"},"Putting It All Together"),(0,r.kt)("p",null,"If the idea of proxy types and their application seems abstract, it is. Here is an example of how\nyou might use these accounts. Imagine you have one account as your primary token-holding account,\nand don't want to access it very often, but you do want to participate in governance and staking.\nYou could set Governance and Staking proxies."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"proxies",src:o(4817).Z,width:"2030",height:"828"})),(0,r.kt)("p",null,"In this example, the primary account A would only make two transactions to set account B as its\ngovernance proxy and account C as its staking proxy. Now, account B could participate in governance\nactivity on behalf of A."),(0,r.kt)("p",null,"Likewise, account C could perform actions typically associated with a stash account, like bonding\nfunds and setting a Controller, in this case account D. Actions that normally require the Stash,\nlike bonding extra tokens or setting a new Controller, can all be handled by its proxy account C. In\nthe case that account C is compromised, it doesn't have access to transfer-related transactions, so\nthe primary account could just set a new proxy to replace it."),(0,r.kt)("p",null,"By creating multiple accounts that act for a single account, it lets you come up with more granular\nsecurity practices around how you protect private keys while still being able to actively\nparticipate in a network."),(0,r.kt)("h2",{id:"proxy-deposits"},"Proxy Deposits"),(0,r.kt)("p",null,"Proxies require deposits in the native currency (i.e. DOT or KSM) in order to be created. The\ndeposit is required because adding a proxy requires some storage space on-chain, which must be\nreplicated across every peer in the network. Due to the costly nature of this, these functions could\nopen up the network to a Denial-of-Service attack. In order to defend against this attack, proxies\nrequire a deposit to be reserved while the storage space is consumed over the life time of the\nproxy. When the proxy is removed, so is the storage space, and therefore the deposit is returned."),(0,r.kt)("p",null,"The deposits are calculated in the runtime, and the function can be found in the runtime code. For\nexample, the deposits are calculated in Polkadot with the following functions:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},"// One storage item; key size 32, value size 8.\npub const ProxyDepositBase: Balance = deposit(1, 8);\n// Additional storage item size of 33 bytes.\npub const ProxyDepositFactor: Balance = deposit(0, 33);\n")),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"ProxyDepositBase")," is the required amount to be reserved for an account to have a proxy list\n(creates one new item in storage). For every proxy the account has, an additional amount defined by\nthe ",(0,r.kt)("inlineCode",{parentName:"p"},"ProxyDepositFactor")," is reserved as well (appends 33 bytes to storage location)."),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"ProxyDepositBase")," is\n",(0,r.kt)(i.Z,{network:"polkadot",path:"consts.proxy.proxyDepositBase",defaultValue:20008e7,filter:"humanReadable",mdxType:"RPC"}),"\n","\nand the ",(0,r.kt)("inlineCode",{parentName:"p"},"ProxyDepositFactor")," is\n",(0,r.kt)(i.Z,{network:"polkadot",path:"consts.proxy.proxyDepositFactor",defaultValue:33e7,filter:"humanReadable",mdxType:"RPC"}),".\n",""),(0,r.kt)("p",null,"The required deposit amount for one proxy is equal to:"),(0,r.kt)("p",null,"",(0,r.kt)(i.Z,{network:"polkadot",path:"consts.proxy.proxyDepositBase",defaultValue:20008e7,filter:"humanReadable",mdxType:"RPC"}),"\n"," +\n",(0,r.kt)(i.Z,{network:"polkadot",path:"consts.proxy.proxyDepositFactor",defaultValue:33e7,filter:"humanReadable",mdxType:"RPC"}),"\n"," ","*","\nnum_proxies"),(0,r.kt)("h2",{id:"resources"},"Resources"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://crates.parity.io/pallet_proxy/index.html"},"Proxy pallet documentation")))}m.isMDXComponent=!0},8288:(e,t,o)=>{"use strict";o.d(t,{Z:()=>n});const n=o.p+"assets/images/kill-proxy-1-8274fe3883aa7d8f42473dc89eae2fab.png"},9411:(e,t,o)=>{"use strict";o.d(t,{Z:()=>n});const n=o.p+"assets/images/kill-proxy-2-db6c545b04378352b97320b19b022165.png"},7810:(e,t,o)=>{"use strict";o.d(t,{Z:()=>n});const n=o.p+"assets/images/kill-proxy-3-9fc147340cbd7a8da97d9e5f763328fb.png"},1463:(e,t,o)=>{"use strict";o.d(t,{Z:()=>n});const n=o.p+"assets/images/multisig_proxy_diagram-94c4da090dc2d8bf9787fd9ea25b2109.png"},2273:(e,t,o)=>{"use strict";o.d(t,{Z:()=>n});const n=o.p+"assets/images/polkadot_view_proxies-b136067580a258208b105b05da441ee7.png"},8525:(e,t,o)=>{"use strict";o.d(t,{Z:()=>n});const n=o.p+"assets/images/proxy_anonymous_diagram-b539913fb66a972847a9b038e043e7a0.png"},4817:(e,t,o)=>{"use strict";o.d(t,{Z:()=>n});const n=o.p+"assets/images/regular_proxy_diagram-6558bb6be6ff1c749cf9fde1f0d30ff5.png"},3405:(e,t,o)=>{"use strict";o.d(t,{Z:()=>n});const n=o.p+"assets/images/remove_proxies-836d853807d8a0dc0fb671e51736abfc.png"},3971:()=>{},6601:()=>{}}]);