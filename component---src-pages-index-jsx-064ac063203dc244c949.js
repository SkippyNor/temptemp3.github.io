(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{160:function(e,t,a){"use strict";a.r(t),a.d(t,"pageQuery",function(){return d});var n=a(9),r=a.n(n),i=a(0),o=a.n(i),s=a(164),l=a.n(s),p=a(167),c=a(179),m=a(202),u=a(163),g=a.n(u),h=(a(299),a(56)),f=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props.data.allMarkdownRemark.edges,t=this.props.data.tagsGroup.group;return o.a.createElement(p.a,null,o.a.createElement("div",{className:"container index-container"},o.a.createElement(l.a,{title:g.a.siteTitle}),o.a.createElement(m.a,null),o.a.createElement(c.a,{postEdges:e}),o.a.createElement("div",null,o.a.createElement(h.Link,{to:"/categories/blog/"},"blog")),t.map(function(e){return o.a.createElement("div",null,o.a.createElement(h.Link,{to:"/tags/"+e.tag+"/"},e.tag))})))},t}(o.a.Component);t.default=f;var d="1701607277"},163:function(e,t,a){a(36);var n={siteTitle:"temp23",siteTitleShort:"temp23",siteTitleAlt:"Temptemp3's blog",siteLogo:"/logos/logo-1024.png",siteUrl:"https://temptemp3.github.io",pathPrefix:"/",siteDescription:"Articles written by Temptemp3",siteRss:"/rss.xml",siteFBAppID:"",googleAnalyticsID:"UA-104620931-1",disqusShortname:"temptemp3",postDefaultCategoryID:"blog",dateFromFormat:"YYYY-MM-DD",dateFormat:"DD/MM/YYYY",userName:"",userEmail:"",userTwitter:"",userLocation:"North Pole, Earth",userAvatar:"https://api.adorable.io/avatars/150/test.png",userDescription:"",userLinks:[{label:"GitHub",url:"https://github.com/temptemp3",iconClassName:"fa fa-github"}],copyright:"Copyright © 2019. temptemp3",themeColor:"#c62828",backgroundColor:"#e0e0e0"};"/"===n.pathPrefix?n.pathPrefix="":n.pathPrefix="/"+n.pathPrefix.replace(/^\/|\/$/g,""),"/"===n.siteUrl.substr(-1)&&(n.siteUrl=n.siteUrl.slice(0,-1)),n.siteRss&&"/"!==n.siteRss[0]&&(n.siteRss="/"+n.siteRss),e.exports=n},167:function(e,t,a){"use strict";var n=a(9),r=a.n(n),i=a(0),o=a.n(i),s=a(164),l=a.n(s),p=a(163),c=a.n(p),m=(a(190),a(191),a(56)),u=a(192),g=a.n(u),h=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){return o.a.createElement(o.a.Fragment,null,o.a.createElement(g.a,{bg:"light",expand:"lg",fixed:this.props.fixed},o.a.createElement(g.a.Brand,{onClick:function(){Object(m.navigate)("/")}},c.a.siteTitle)))},t}(i.Component),f=a(193),d=a.n(f);a.d(t,"a",function(){return E});var E=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props.children;return o.a.createElement("div",null,o.a.createElement(h,null),o.a.createElement(l.a,null,o.a.createElement("meta",{name:"description",content:c.a.siteDescription})),o.a.createElement(d.a,{className:"pt-3"},e),o.a.createElement("footer",{className:"p-3 float-right"},"© Nicholas Shellabarger"))},t}(o.a.Component)},174:function(e,t,a){var n,r,i;i=function(){return function(){return function(e){var t=[];if(e[0].match(/^[^\/:]+:\/*$/)&&e.length>1){var a=e.shift();e[0]=a+e[0]}e[0].match(/^file:\/\/\//)?e[0]=e[0].replace(/^([^\/:]+):\/*/,"$1:///"):e[0]=e[0].replace(/^([^\/:]+):\/*/,"$1://");for(var n=0;n<e.length;n++){var r=e[n];if("string"!=typeof r)throw new TypeError("Url must be a string. Received "+r);""!==r&&(n>0&&(r=r.replace(/^[\/]+/,"")),r=n<e.length-1?r.replace(/[\/]+$/,""):r.replace(/[\/]+$/,"/"),t.push(r))}var i=t.join("/"),o=(i=i.replace(/\/(\?|&|#[^!])/g,"$1")).split("?");return i=o.shift()+(o.length>0?"?":"")+o.join("&")}("object"==typeof arguments[0]?arguments[0]:[].slice.call(arguments))}},e.exports?e.exports=i():void 0===(r="function"==typeof(n=i)?n.call(t,a,t,e):n)||(e.exports=r)},179:function(e,t,a){"use strict";var n=a(9),r=a.n(n),i=a(0),o=a.n(i),s=a(56),l=function(e){function t(){return e.apply(this,arguments)||this}r()(t,e);var a=t.prototype;return a.getPostList=function(){var e=[];return this.props.postEdges.forEach(function(t){e.push({path:t.node.fields.slug,tags:t.node.frontmatter.tags,cover:t.node.frontmatter.cover,title:t.node.frontmatter.title,date:t.node.fields.date,excerpt:t.node.excerpt,timeToRead:t.node.timeToRead})}),e},a.render=function(){var e=this.getPostList();return o.a.createElement("div",null,e.map(function(e){return o.a.createElement(s.Link,{to:e.path,key:e.title},o.a.createElement("h2",null,e.title))}))},t}(o.a.Component);t.a=l},202:function(e,t,a){"use strict";var n=a(9),r=a.n(n),i=a(0),o=a.n(i),s=a(164),l=a.n(s),p=a(174),c=a.n(p),m=a(163),u=a.n(m),g=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e,t,a,n,r=this.props,i=r.postNode,s=r.postPath,p=r.postSEO;if(p){var m=i.frontmatter;e=m.title,t=m.description?m.description:i.excerpt,a=m.cover,n=c()(u.a.siteUrl,u.a.pathPrefix,s)}else e=u.a.siteTitle,t=u.a.siteDescription,a=u.a.siteLogo;a=c()(u.a.siteUrl,u.a.pathPrefix,a);var g=c()(u.a.siteUrl,u.a.pathPrefix),h=[{"@context":"http://schema.org","@type":"WebSite",url:g,name:e,alternateName:u.a.siteTitleAlt?u.a.siteTitleAlt:""}];return p&&h.push({"@context":"http://schema.org","@type":"BreadcrumbList",itemListElement:[{"@type":"ListItem",position:1,item:{"@id":n,name:e,image:a}}]},{"@context":"http://schema.org","@type":"BlogPosting",url:g,name:e,alternateName:u.a.siteTitleAlt?u.a.siteTitleAlt:"",headline:e,image:{"@type":"ImageObject",url:a},description:t}),o.a.createElement(l.a,null,o.a.createElement("meta",{name:"description",content:t}),o.a.createElement("meta",{name:"image",content:a}),o.a.createElement("script",{type:"application/ld+json"},JSON.stringify(h)),o.a.createElement("meta",{property:"og:url",content:p?n:g}),p?o.a.createElement("meta",{property:"og:type",content:"article"}):null,o.a.createElement("meta",{property:"og:title",content:e}),o.a.createElement("meta",{property:"og:description",content:t}),o.a.createElement("meta",{property:"og:image",content:a}),o.a.createElement("meta",{property:"fb:app_id",content:u.a.siteFBAppID?u.a.siteFBAppID:""}),o.a.createElement("meta",{name:"twitter:card",content:"summary_large_image"}),o.a.createElement("meta",{name:"twitter:creator",content:u.a.userTwitter?u.a.userTwitter:""}),o.a.createElement("meta",{name:"twitter:title",content:e}),o.a.createElement("meta",{name:"twitter:description",content:t}),o.a.createElement("meta",{name:"twitter:image",content:a}))},t}(i.Component);t.a=g}}]);
//# sourceMappingURL=component---src-pages-index-jsx-064ac063203dc244c949.js.map