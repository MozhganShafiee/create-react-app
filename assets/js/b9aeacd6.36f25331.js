"use strict";(self.webpackChunkcra_docs=self.webpackChunkcra_docs||[]).push([[4205],{876:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var r=n(2784);function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){s(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,s=function(e,t){if(null==e)return{};var n,r,s={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(s[n]=e[n]);return s}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(s[n]=e[n])}return s}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,s=e.mdxType,a=e.originalType,l=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),u=p(n),m=s,f=u["".concat(l,".").concat(m)]||u[m]||d[m]||a;return n?r.createElement(f,o(o({ref:t},c),{},{components:n})):r.createElement(f,o({ref:t},c))}));function m(e,t){var n=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var a=n.length,o=new Array(a);o[0]=u;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:s,o[1]=i;for(var p=2;p<a;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},3063:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return i},contentTitle:function(){return l},metadata:function(){return p},toc:function(){return c},default:function(){return u}});var r=n(7896),s=n(1461),a=(n(2784),n(876)),o=["components"],i={id:"adding-css-reset",title:"Adding a CSS Reset",sidebar_label:"Adding CSS Reset"},l=void 0,p={unversionedId:"adding-css-reset",id:"adding-css-reset",title:"Adding a CSS Reset",description:"This project setup uses [PostCSS Normalize] for adding a [CSS Reset].",source:"@site/../docs/adding-css-reset.md",sourceDirName:".",slug:"/adding-css-reset",permalink:"/docs/adding-css-reset",editUrl:"https://github.com/facebook/create-react-app/edit/main/docusaurus/website/../docs/adding-css-reset.md",tags:[],version:"current",lastUpdatedBy:"Max Romanyuta",lastUpdatedAt:1618194630,formattedLastUpdatedAt:"4/11/2021",frontMatter:{id:"adding-css-reset",title:"Adding a CSS Reset",sidebar_label:"Adding CSS Reset"},sidebar:"docs",previous:{title:"Adding Sass Stylesheets",permalink:"/docs/adding-a-sass-stylesheet"},next:{title:"Post-Processing CSS",permalink:"/docs/post-processing-css"}},c=[{value:"<code>index.css</code>",id:"indexcss",children:[],level:2},{value:"Browser support",id:"browser-support",children:[],level:2}],d={toc:c};function u(e){var t=e.components,n=(0,s.Z)(e,o);return(0,a.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"This project setup uses ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/csstools/postcss-normalize"},"PostCSS Normalize")," for adding a ",(0,a.kt)("a",{parentName:"p",href:"https://cssreset.com/what-is-a-css-reset/"},"CSS Reset"),"."),(0,a.kt)("p",null,"To start using it, add ",(0,a.kt)("inlineCode",{parentName:"p"},"@import-normalize;")," anywhere in your CSS file(s). You only need to include it once and duplicate imports are automatically removed. Since you only need to include it once, a good place to add it is ",(0,a.kt)("inlineCode",{parentName:"p"},"index.css")," or ",(0,a.kt)("inlineCode",{parentName:"p"},"App.css"),"."),(0,a.kt)("h2",{id:"indexcss"},(0,a.kt)("inlineCode",{parentName:"h2"},"index.css")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-css"},"@import-normalize; /* bring in normalize.css styles */\n\n/* rest of app styles */\n")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("strong",{parentName:"p"},"Tip"),': If you see an "',(0,a.kt)("em",{parentName:"p"},"Unknown at rule @import-normalize css(unknownAtRules)"),'" warning in VSCode, change the ',(0,a.kt)("inlineCode",{parentName:"p"},"css.lint.unknownAtRules")," setting to ",(0,a.kt)("inlineCode",{parentName:"p"},"ignore"),".")),(0,a.kt)("p",null,"You can control which parts of ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/csstools/normalize.css"},"normalize.css")," to use via your project's ",(0,a.kt)("a",{parentName:"p",href:"https://browserl.ist/"},"browserslist"),"."),(0,a.kt)("p",null,"Results when ",(0,a.kt)("a",{parentName:"p",href:"https://browserl.ist/"},"browserslist")," is ",(0,a.kt)("inlineCode",{parentName:"p"},"last 3 versions"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-css"},"/**\n * Add the correct display in IE 9-.\n */\n\naudio,\nvideo {\n  display: inline-block;\n}\n\n/**\n * Remove the border on images inside links in IE 10-.\n */\n\nimg {\n  border-style: none;\n}\n")),(0,a.kt)("p",null,"Results when ",(0,a.kt)("a",{parentName:"p",href:"https://browserl.ist/"},"browserslist")," is ",(0,a.kt)("inlineCode",{parentName:"p"},"last 2 versions"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-css"},"/**\n * Remove the border on images inside links in IE 10-.\n */\n\nimg {\n  border-style: none;\n}\n")),(0,a.kt)("h2",{id:"browser-support"},"Browser support"),(0,a.kt)("p",null,"Browser support is dictated by what normalize.css ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/csstools/normalize.css#browser-support"},"supports"),". As of this writing, it includes:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Chrome (last 3)"),(0,a.kt)("li",{parentName:"ul"},"Edge (last 3)"),(0,a.kt)("li",{parentName:"ul"},"Firefox (last 3)"),(0,a.kt)("li",{parentName:"ul"},"Firefox ESR"),(0,a.kt)("li",{parentName:"ul"},"Opera (last 3)"),(0,a.kt)("li",{parentName:"ul"},"Safari (last 3)"),(0,a.kt)("li",{parentName:"ul"},"iOS Safari (last 2)"),(0,a.kt)("li",{parentName:"ul"},"Internet Explorer 9+")))}u.isMDXComponent=!0}}]);