webpackJsonp([28],{"/myT":function(t,e,i){"use strict";var a=i("V8bM"),n=i("y8ae");i("9oAv");e.a={props:["user"],data:function(){return{q:"",userData:this.user}},methods:{onSearch:function(){var t="http://zhannei.baidu.com/cse/search?s=2990237584871814305&entry=1&q="+encodeURIComponent(this.q);window.open(t)},onSignin:function(){location.href="/signin?ref="+encodeURIComponent(location.href)},onSignout:function(){var t=this;a.a.logout().then(function(e){e.errNo===n.a.SUCCESS&&(t.userData=null,window.location.href="/signin")}).catch(function(t){console.log(t)})}},mounted:function(){}}},"1zF1":function(t,e,i){var a=i("J5qy");"string"==typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);i("rjj0")("3d0b3a19",a,!0)},"5X1F":function(t,e,i){"use strict";function a(t){i("snl6")}Object.defineProperty(e,"__esModule",{value:!0});var n=i("nisC"),r=i("BCpo"),o=i("VU/8"),s=a,l=o(n.a,r.a,!1,s,null,null);e.default=l.exports},"9oAv":function(t,e,i){"use strict";var a=i("FhoZ"),n=i.n(a);if(n.a.bdStatEnable&&"undefined"!=typeof window){!function(){var t=document.createElement("script");t.src="https://hm.baidu.com/hm.js?"+n.a.bdStatSI;var e=document.getElementsByTagName("script")[0];e.parentNode.insertBefore(t,e)}()}},"9xKZ":function(t,e,i){e=t.exports=i("FZ+f")(!1),e.push([t.i,'body{background:#e1e1e1}.timeline-box{width:1200px;padding-bottom:60px;margin:0 auto;background:#fff;min-height:400px}.timeline-title{font-size:26px;padding-top:30px;text-align:center;margin-top:20px;margin-bottom:24px}.timeline-item-year{width:1px;height:60px;margin-left:599px;background:#e9eaec}.timeline-item-year div{text-align:center;width:100px;height:24px;line-height:24px;margin-left:-49px;background:#2d8cf0;color:#fff}.timeline-item-content{position:relative}.timeline-item-line{width:1px;background:#e9eaec;position:absolute;margin-left:599px;left:0;right:0;top:0;bottom:0}.timeline-item-circle{border:1px solid #19be6b;background:#a7f2cc;margin-left:-8px;margin-top:41px;width:16px;height:16px;border-radius:8px;display:inline-block;vertical-align:top}.timeline-item-bubble{-webkit-box-shadow:0 1px 6px rgba(14,22,30,.3);box-shadow:0 1px 6px rgba(14,22,30,.3);position:relative;margin-left:10px;margin-right:10px;margin-top:20px;width:520px;background:#fff;padding:20px;border-radius:6px;display:inline-block;vertical-align:top;border:1px solid #e2e2e2}.timeline-item-bubble-odd{margin-left:630px}.timeline-item-bubble-odd:before{border:8px solid transparent;border-right:10px solid #000}.timeline-item-bubble-odd:after,.timeline-item-bubble-odd:before{content:"";display:block;position:absolute;width:0;height:0;top:20px;left:-18px;-webkit-box-sizing:border-box;box-sizing:border-box}.timeline-item-bubble-odd:after{border:8px solid transparent;border-right:10px solid #fff}.timeline-item-bubble-even{margin-left:48px}.timeline-item-bubble-even:before{border:8px solid transparent;border-left:10px solid #000}.timeline-item-bubble-even:after,.timeline-item-bubble-even:before{content:"";display:block;position:absolute;width:0;height:0;top:20px;right:-18px;-webkit-box-sizing:border-box;box-sizing:border-box}.timeline-item-bubble-even:after{border:8px solid transparent;border-left:10px solid #fff}.timeline-item-title{font-size:20px;color:#000}.timeline-item-time{margin:5px 0 10px;font-size:14px}.timeline-item-time-text{margin-left:4px}.timeline-item-editor{font-size:16px}.timeline-item-editor a{text-decoration:underline}',""])},BCpo:function(t,e,i){"use strict";var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("app-header",{attrs:{user:t.user}}),i("div",{staticClass:"timeline-box"},[i("h1",{staticClass:"timeline-title"},[t._v("Golang中文社区成长历史")]),i("div",[i("ul",t._l(t.list,function(e,a){return i("li",[0==a||t.list[a].year!=t.list[a-1].year?i("div",{staticClass:"timeline-item"},[i("div",{staticClass:"timeline-item-year"},[i("div",[t._v(t._s(t._f("formatYear")(e.date)))])])]):t._e(),i("div",{staticClass:"timeline-item"},[i("div",{staticClass:"timeline-item-content"},[t._m(0,!0),i("div",{staticClass:"timeline-item-bubble",class:[a%2==0?"timeline-item-bubble-even":"timeline-item-bubble-odd"]},[i("p",{staticClass:"timeline-item-title"},[t._v(t._s(e.name))]),i("p",{staticClass:"timeline-item-time"},[i("Icon",{attrs:{type:"ios-clock-outline"}}),i("span",{staticClass:"timeline-item-time-text"},[t._v(t._s(t._f("formatDate")(e.date)))])],1),i("div",{staticClass:"timeline-item-editor",domProps:{innerHTML:t._s(e.content)}})])])])])}))])]),i("app-footer")],1)},n=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"timeline-item-line"},[i("div",{staticClass:"timeline-item-circle"})])}],r={render:a,staticRenderFns:n};e.a=r},Bv19:function(t,e,i){"use strict";var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"golang-top-header"},[i("div",{staticClass:"golang-top-box"},[i("div",{staticClass:"golang-top-header-left"},[t._m(0),i("div",{staticClass:"golang-header-search"},[i("form",{staticClass:"golang-top-search",attrs:{action:"",target:"_blank",method:"get"},on:{submit:function(e){e.preventDefault(),t.onSearch(e)}}},[i("input",{directives:[{name:"model",rawName:"v-model",value:t.q,expression:"q"}],staticClass:"golang-top-input",attrs:{type:"text",name:"topSearch"},domProps:{value:t.q},on:{input:function(e){e.target.composing||(t.q=e.target.value)}}})])])]),t._m(1),i("div",{staticClass:"golang-top-header-right"},[i("ul",[t._m(2),t._m(3),t.userData?[i("li",[i("Tooltip",{attrs:{trigger:"hover",title:"提示标题",placement:"bottom"}},[i("a",{staticClass:"header-usre-box",attrs:{href:"/user/"+t.user.id}},[i("span",{staticClass:"header-avatar"},[i("img",{attrs:{src:t.user.avatarURL,alt:""}})]),i("span",{staticClass:"header-user-name"},[t._v(t._s(t.user.name))])]),i("ul",{staticClass:"header-user-box",attrs:{slot:"content"},slot:"content"},[i("li",[i("a",{attrs:{href:"/user/"+t.user.id}},[t._v("个人首页")])]),i("li",[i("a",{attrs:{href:"/ac/pwdModify"}},[t._v("修改密码")])]),i("li",{on:{click:t.onSignout}},[t._v("退  出")])])])],1)]:[i("a",{on:{click:t.onSignin}},[i("li",[t._v("登录")])]),t._m(4)]],2)])])])},n=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"golang-logo-container"},[i("a",{attrs:{href:"/"}},[t._v("Golang123")])])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"golang-top-header-nav"},[i("ul",[i("li",[i("a",{attrs:{href:"/"}},[t._v("首页")])]),i("li",[i("a",{attrs:{href:"/vote"}},[t._v("投票")])]),i("li",[i("a",{attrs:{href:"/timeline"}},[t._v("成长历史")])]),i("li",[i("a",{attrs:{href:"/about"}},[t._v("关于")])])])])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("li",[i("a",{attrs:{href:"https://github.com/shen100/golang123",target:"_blank"}},[t._v("golang123源码")])])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("li",[i("a",{attrs:{href:"https://github.com/shen100/golang123/issues",target:"_blank"}},[t._v("问题反馈")])])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("a",{attrs:{href:"/signup"}},[i("li",[t._v("注册")])])}],r={render:a,staticRenderFns:n};e.a=r},J3Se:function(t,e,i){"use strict";var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"golang-footer"},[i("div",{staticClass:"golang-footer-page-link"},[i("a",{attrs:{href:"https://github.com/shen100/golang123",target:"_blank"}},[i("div",{staticClass:"golang-footer-github"},[i("Icon",{staticStyle:{"margin-right":"1px"},attrs:{type:"social-github"}})],1),i("span",{staticStyle:{"margin-left":"2px"}},[t._v("Github")])]),i("span",[t._v("  | ")]),i("a",{attrs:{href:"https://github.com/shen100/golang123/issues",target:"_blank"}},[t._v("问题反馈")]),i("span",[t._v("  |  ")]),i("a",{attrs:{href:"/vote"}},[t._v("投票")]),i("span",[t._v("  |  ")]),i("a",{attrs:{href:"/rank"}},[t._v("积分榜")]),i("span",[t._v("  |  ")]),i("a",{attrs:{href:"/links"}},[t._v("友情链接")]),i("span",[t._v("  |  ")]),i("a",{attrs:{href:"/timeline"}},[t._v("成长历史")]),i("span",[t._v("  |  ")]),i("a",{attrs:{href:"/about"}},[t._v("关于我们")])]),t._m(0)])},n=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"golang-footer-copyright"},[i("span",[t._v("© 2017 "),i("a",{attrs:{href:"/"}},[t._v("golang中文社区")]),t._v(" "),i("a",{attrs:{href:"/"}},[t._v("golang123.com")]),t._v(" 版权所有")]),i("span",[t._v(" | ")]),i("span",[t._v("京ICP备12045181号-2")])])}],r={render:a,staticRenderFns:n};e.a=r},J5qy:function(t,e,i){e=t.exports=i("FZ+f")(!1),e.push([t.i,"",""])},"YXP+":function(t,e,i){"use strict";function a(t){i("1zF1")}var n=i("/myT"),r=i("Bv19"),o=i("VU/8"),s=a,l=o(n.a,r.a,!1,s,null,null);e.a=l.exports},nisC:function(t,e,i){"use strict";var a=i("YXP+"),n=i("yqLL");e.a={data:function(){return{list:[{name:"升级后台管理",date:{year:2017,month:11,date:26},content:"后台管理增加话题管理、回复管理"},{name:"话题置顶",date:{year:2017,month:10,date:18},content:"增加话题置顶功能，话题列表支持分页"},{name:"iris升级",date:{year:2017,month:8,date:28},content:"golang123升级iris框架到最新版8.4.0"},{name:"支持投票功能",date:{year:2017,month:8,date:20},content:'对拿不准的功能, 会定期在&nbsp;<a href="/vote" target="_blank">投票专栏</a>&nbsp;发起投票, 征求大家的意见'},{name:"架构调整，支持前后端同构渲染",date:{year:2017,month:8,date:9},content:"基于nuxt框架，支持前后端同构渲染"},{name:"集成 Markdown 编辑器",date:{year:2017,month:7,date:28},content:"集成 Markdown 编辑器，支持图片上传、表格、全屏模式"},{name:"golang123首次提交代码",date:{year:2017,month:7,date:21},content:'代码地址: <a href="https://github.com/shen100/golang123" target="_blank">https://github.com/shen100/golang123</a>'}]}},asyncData:function(t){return{user:t.user}},head:function(){return{title:"Golang中文社区成长历史"}},mounted:function(){},filters:{formatYear:function(t){return""+t.year},formatDate:function(t){var e=t.year,i=t.month,a=t.date;return i<10&&(i="0"+i),a<10&&(a="0"+a),e+"-"+i+"-"+a}},middleware:"userInfo",components:{"app-header":a.a,"app-footer":n.a}}},snl6:function(t,e,i){var a=i("9xKZ");"string"==typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);i("rjj0")("2ca8ef17",a,!0)},yqLL:function(t,e,i){"use strict";var a=i("J3Se"),n=i("VU/8"),r=n(null,a.a,!1,null,null,null);e.a=r.exports}});
//# sourceMappingURL=index.c0c192af8eae5f4ceb14.js.map