webpackJsonp([40],{EBQz:function(t,e,s){"use strict";var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"articles-container"},[s("div",{staticClass:"article-top"},[s("div",[t._v(t._s(t.user&&t.user.id==this.currentId?"我":t.sex?"她":"他")+"的话题")])]),t.articles.length>0?t._l(t.articles,function(e,a){return s("div",{staticClass:"articles-item",class:{"articles-item-no":0===a}},[s("h2",{staticClass:"articles-title"},[s("a",{attrs:{href:"/topic/"+e.id,target:"_blank"}},[t._v(t._s(e.name))])]),s("p",{staticClass:"articles-user-info"},[s("img",{attrs:{src:e.user.avatarURL,alt:""}}),s("span",[t._v(t._s(e.user.name))])]),s("div",{staticClass:"golang123-editor",class:e.show?"":"articles-hidden",domProps:{innerHTML:t._s(e.content)}}),s("p",{staticClass:"articles-button"},[s("a",{staticClass:"no-underline",attrs:{href:"/topic/"+e.id}},[t._v("阅读全文"),s("Icon",{attrs:{type:"chevron-right"}})],1)])])}):s("div",{staticClass:"articles-item-empty"},[t._v("\n        还没有话题\n    ")])],2)},r=[],i={render:a,staticRenderFns:r};e.a=i},fLGP:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=s("fzrW"),r=s("EBQz"),i=s("VU/8"),n=i(a.a,r.a,!1,null,null,null);e.default=n.exports},fzrW:function(t,e,s){"use strict";var a=s("V8bM");e.a={data:function(){return{sex:0}},asyncData:function(t){return a.a.getUserArticles({client:t.req,params:{userID:t.params.id},query:{orderType:1,desc:1,pageSize:20}}).then(function(e){return{articles:e.data.articles||[],user:t.user,currentId:t.params.id}}).catch(function(e){console.log(e),t.error({statusCode:404,message:"Page not found"})})},mounted:function(){this.$data.sex=this.$parent.currentUser.sex}}}});
//# sourceMappingURL=index.ea18a91b31a4f25c8a8d.js.map