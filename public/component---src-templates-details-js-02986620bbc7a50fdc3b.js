(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{218:function(e,t,n){"use strict";n.r(t);n(210),n(30);var r=n(0),a=n.n(r);n(58),n(21),n(16),n(17),n(10),n(20),n(47),n(31),n(57),n(29),n(59),n(39);function o(e){return e.type&&"Tab"===e.type.tabsRole}function l(e){return e.type&&"TabPanel"===e.type.tabsRole}function s(e){return e.type&&"TabList"===e.type.tabsRole}function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){return r.Children.map(e,function(e){return null===e?null:function(e){return o(e)||s(e)||l(e)}(e)?t(e):e.props&&e.props.children&&"object"==typeof e.props.children?Object(r.cloneElement)(e,function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),r.forEach(function(t){c(e,t,n[t])})}return e}({},e.props,{children:i(e.props.children,t)})):e})}function u(e,t){return r.Children.forEach(e,function(e){null!==e&&(o(e)||l(e)?t(e):e.props&&e.props.children&&"object"==typeof e.props.children&&(s(e)&&t(e),u(e.props.children,t)))})}n(83),n(18);var d,f=n(220),p=n.n(f),b=0;function h(){return"react-tabs-"+b++}function m(e){var t=0;return u(e,function(e){o(e)&&t++}),t}function v(){return(v=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function y(e){return e&&"getAttribute"in e}function g(e){return y(e)&&"tab"===e.getAttribute("role")}function C(e){return y(e)&&"true"===e.getAttribute("aria-disabled")}try{d=!("undefined"==typeof window||!window.document||!window.document.activeElement)}catch(M){d=!1}var P=function(e){var t,n;function c(){for(var t,n=arguments.length,r=new Array(n),a=0;a<n;a++)r[a]=arguments[a];return(t=e.call.apply(e,[this].concat(r))||this).tabNodes=[],t.handleKeyDown=function(e){if(t.isTabFromContainer(e.target)){var n=t.props.selectedIndex,r=!1,a=!1;32!==e.keyCode&&13!==e.keyCode||(r=!0,a=!1,t.handleClick(e)),37===e.keyCode||38===e.keyCode?(n=t.getPrevTab(n),r=!0,a=!0):39===e.keyCode||40===e.keyCode?(n=t.getNextTab(n),r=!0,a=!0):35===e.keyCode?(n=t.getLastTab(),r=!0,a=!0):36===e.keyCode&&(n=t.getFirstTab(),r=!0,a=!0),r&&e.preventDefault(),a&&t.setSelected(n,e)}},t.handleClick=function(e){var n=e.target;do{if(t.isTabFromContainer(n)){if(C(n))return;var r=[].slice.call(n.parentNode.children).filter(g).indexOf(n);return void t.setSelected(r,e)}}while(null!=(n=n.parentNode))},t}n=e,(t=c).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n;var f=c.prototype;return f.setSelected=function(e,t){if(!(e<0||e>=this.getTabsCount())){var n=this.props;(0,n.onSelect)(e,n.selectedIndex,t)}},f.getNextTab=function(e){for(var t=this.getTabsCount(),n=e+1;n<t;n++)if(!C(this.getTab(n)))return n;for(var r=0;r<e;r++)if(!C(this.getTab(r)))return r;return e},f.getPrevTab=function(e){for(var t=e;t--;)if(!C(this.getTab(t)))return t;for(t=this.getTabsCount();t-- >e;)if(!C(this.getTab(t)))return t;return e},f.getFirstTab=function(){for(var e=this.getTabsCount(),t=0;t<e;t++)if(!C(this.getTab(t)))return t;return null},f.getLastTab=function(){for(var e=this.getTabsCount();e--;)if(!C(this.getTab(e)))return e;return null},f.getTabsCount=function(){return m(this.props.children)},f.getPanelsCount=function(){return function(e){var t=0;return u(e,function(e){l(e)&&t++}),t}(this.props.children)},f.getTab=function(e){return this.tabNodes["tabs-"+e]},f.getChildren=function(){var e=this,t=0,n=this.props,c=n.children,u=n.disabledTabClassName,f=n.focus,p=n.forceRenderTabPanel,b=n.selectedIndex,m=n.selectedTabClassName,v=n.selectedTabPanelClassName;this.tabIds=this.tabIds||[],this.panelIds=this.panelIds||[];for(var y=this.tabIds.length-this.getTabsCount();y++<0;)this.tabIds.push(h()),this.panelIds.push(h());return i(c,function(n){var c=n;if(s(n)){var h=0,y=!1;d&&(y=a.a.Children.toArray(n.props.children).filter(o).some(function(t,n){return document.activeElement===e.getTab(n)})),c=Object(r.cloneElement)(n,{children:i(n.props.children,function(t){var n="tabs-"+h,a=b===h,o={tabRef:function(t){e.tabNodes[n]=t},id:e.tabIds[h],panelId:e.panelIds[h],selected:a,focus:a&&(f||y)};return m&&(o.selectedClassName=m),u&&(o.disabledClassName=u),h++,Object(r.cloneElement)(t,o)})})}else if(l(n)){var g={id:e.panelIds[t],tabId:e.tabIds[t],selected:b===t};p&&(g.forceRender=p),v&&(g.selectedClassName=v),t++,c=Object(r.cloneElement)(n,g)}return c})},f.isTabFromContainer=function(e){if(!g(e))return!1;var t=e.parentElement;do{if(t===this.node)return!0;if(t.getAttribute("data-tabs"))break;t=t.parentElement}while(t);return!1},f.render=function(){var e=this,t=this.props,n=(t.children,t.className),r=(t.disabledTabClassName,t.domRef),o=(t.focus,t.forceRenderTabPanel,t.onSelect,t.selectedIndex,t.selectedTabClassName,t.selectedTabPanelClassName,function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(t,["children","className","disabledTabClassName","domRef","focus","forceRenderTabPanel","onSelect","selectedIndex","selectedTabClassName","selectedTabPanelClassName"]));return a.a.createElement("div",v({},o,{className:p()(n),onClick:this.handleClick,onKeyDown:this.handleKeyDown,ref:function(t){e.node=t,r&&r(t)},"data-tabs":!0}),this.getChildren())},c}(r.Component);P.defaultProps={className:"react-tabs",focus:!1},P.propTypes={};var N=1,T=function(e){var t,n;function r(t){var n;return(n=e.call(this,t)||this).handleSelected=function(e,t,r){var a=n.props.onSelect,o=n.state.mode;if("function"!=typeof a||!1!==a(e,t,r)){var l={focus:"keydown"===r.type};o===N&&(l.selectedIndex=e),n.setState(l)}},n.state=r.copyPropsToState(n.props,{},t.defaultFocus),n}return n=e,(t=r).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n,r.getDerivedStateFromProps=function(e,t){return r.copyPropsToState(e,t)},r.getModeFromProps=function(e){return null===e.selectedIndex?N:0},r.copyPropsToState=function(e,t,n){void 0===n&&(n=!1);var a={focus:n,mode:r.getModeFromProps(e)};if(a.mode===N){var o=m(e.children)-1,l=null;l=null!=t.selectedIndex?Math.min(t.selectedIndex,o):e.defaultIndex||0,a.selectedIndex=l}return a},r.prototype.render=function(){var e=this.props,t=e.children,n=(e.defaultIndex,e.defaultFocus,function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,["children","defaultIndex","defaultFocus"])),r=this.state,o=r.focus,l=r.selectedIndex;return n.focus=o,n.onSelect=this.handleSelected,null!=l&&(n.selectedIndex=l),a.a.createElement(P,n,t)},r}(r.Component);function O(){return(O=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}T.defaultProps={defaultFocus:!1,forceRenderTabPanel:!1,selectedIndex:null,defaultIndex:null},T.propTypes={},T.tabsRole="Tabs";var k=function(e){var t,n;function r(){return e.apply(this,arguments)||this}return n=e,(t=r).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n,r.prototype.render=function(){var e=this.props,t=e.children,n=e.className,r=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,["children","className"]);return a.a.createElement("ul",O({},r,{className:p()(n),role:"tablist"}),t)},r}(r.Component);function _(){return(_=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}k.defaultProps={className:"react-tabs__tab-list"},k.propTypes={},k.tabsRole="TabList";var E=function(e){var t,n;function r(){return e.apply(this,arguments)||this}n=e,(t=r).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n;var o=r.prototype;return o.componentDidMount=function(){this.checkFocus()},o.componentDidUpdate=function(){this.checkFocus()},o.checkFocus=function(){var e=this.props,t=e.selected,n=e.focus;t&&n&&this.node.focus()},o.render=function(){var e,t=this,n=this.props,r=n.children,o=n.className,l=n.disabled,s=n.disabledClassName,c=(n.focus,n.id),i=n.panelId,u=n.selected,d=n.selectedClassName,f=n.tabIndex,b=n.tabRef,h=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(n,["children","className","disabled","disabledClassName","focus","id","panelId","selected","selectedClassName","tabIndex","tabRef"]);return a.a.createElement("li",_({},h,{className:p()(o,(e={},e[d]=u,e[s]=l,e)),ref:function(e){t.node=e,b&&b(e)},role:"tab",id:c,"aria-selected":u?"true":"false","aria-disabled":l?"true":"false","aria-controls":i,tabIndex:f||(u?"0":null)}),r)},r}(r.Component);function I(){return(I=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}E.defaultProps={className:"react-tabs__tab",disabledClassName:"react-tabs__tab--disabled",focus:!1,id:null,panelId:null,selected:!1,selectedClassName:"react-tabs__tab--selected"},E.propTypes={},E.tabsRole="Tab";var S=function(e){var t,n;function r(){return e.apply(this,arguments)||this}return n=e,(t=r).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n,r.prototype.render=function(){var e,t=this.props,n=t.children,r=t.className,o=t.forceRender,l=t.id,s=t.selected,c=t.selectedClassName,i=t.tabId,u=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(t,["children","className","forceRender","id","selected","selectedClassName","tabId"]);return a.a.createElement("div",I({},u,{className:p()(r,(e={},e[c]=s,e)),role:"tabpanel",id:l,"aria-labelledby":i}),o||s?n:null)},r}(r.Component);S.defaultProps={className:"react-tabs__tab-panel",forceRender:!1,selectedClassName:"react-tabs__tab-panel--selected"},S.propTypes={},S.tabsRole="TabPanel";var w=n(222),j=n.n(w),x=n(209),R=n(102);n.d(t,"query",function(){return F});t.default=function(e){return a.a.createElement(x.a,null,a.a.createElement(R.a,{title:e.data.contentfulProduct.name,keywords:["gatsby","application","react"]}),a.a.createElement("div",{className:"container details-page"},a.a.createElement("div",{className:"product-details"},a.a.createElement("div",{className:"Product-Screenshot"},null===e.data.contentfulProduct.productMorePhotos?a.a.createElement("div",{className:"no-image"},"No Image"):a.a.createElement(T,null,e.data.contentfulProduct.productMorePhotos.map(function(e){return a.a.createElement(S,{key:e.id},a.a.createElement(E,null,a.a.createElement("img",{src:e.fixed.src})))}),a.a.createElement(k,null,e.data.contentfulProduct.productMorePhotos.map(function(e){return a.a.createElement(E,{key:e.id},a.a.createElement("img",{src:e.fixed.src}))})))),a.a.createElement("div",null,a.a.createElement("h2",null,e.data.contentfulProduct.name)),a.a.createElement(j.a,{name:"rate1",starCount:5,value:e.data.contentfulProduct.rating}),a.a.createElement("div",{className:"row buynowinner"},a.a.createElement("div",{className:"col-sm-2"},a.a.createElement("span",{className:"price"},"Preis: €",e.data.contentfulProduct.price)),a.a.createElement("div",{className:"col-sm-10 text-left"},a.a.createElement("a",{href:"#",className:"Product snipcart-add-item","data-item-id":e.data.contentfulProduct.slug,"data-item-price":e.data.contentfulProduct.price,"data-item-image":null===e.data.contentfulProduct.image?"":e.data.contentfulProduct.image.fixed.src,"data-item-name":e.data.contentfulProduct.name,"data-item-url":"/"},a.a.createElement("i",{className:"fas fa-tags"}),"Einkaufen"))),a.a.createElement("div",{dangerouslySetInnerHTML:{__html:e.data.contentfulProduct.details.childMarkdownRemark.html}}))))};var F="76391227"},220:function(e,t,n){var r;n(40),function(){"use strict";var n={}.hasOwnProperty;function a(){for(var e=[],t=0;t<arguments.length;t++){var r=arguments[t];if(r){var o=typeof r;if("string"===o||"number"===o)e.push(r);else if(Array.isArray(r)&&r.length){var l=a.apply(null,r);l&&e.push(l)}else if("object"===o)for(var s in r)n.call(r,s)&&r[s]&&e.push(s)}}return e.join(" ")}e.exports?(a.default=a,e.exports=a):void 0===(r=function(){return a}.apply(t,[]))||(e.exports=r)}()},222:function(e,t,n){"use strict";n(60),n(30),n(101),n(58),n(57),Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),a=n(0),o=c(a),l=c(n(47)),s=c(n(220));function c(e){return e&&e.__esModule?e:{default:e}}var i=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var n=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this));return n.state={value:e.value},n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,a.Component),r(t,[{key:"componentWillReceiveProps",value:function(e){var t=e.value;null!=t&&t!==this.state.value&&this.setState({value:t})}},{key:"onChange",value:function(e){var t=this.props,n=t.editing,r=t.value;n&&null==r&&this.setState({value:e})}},{key:"onStarClick",value:function(e,t,n,r){r.stopPropagation();var a=this.props,o=a.onStarClick;a.editing&&o&&o(e,t,n,r)}},{key:"onStarHover",value:function(e,t,n,r){r.stopPropagation();var a=this.props,o=a.onStarHover;a.editing&&o&&o(e,t,n,r)}},{key:"onStarHoverOut",value:function(e,t,n,r){r.stopPropagation();var a=this.props,o=a.onStarHoverOut;a.editing&&o&&o(e,t,n,r)}},{key:"renderStars",value:function(){for(var e=this,t=this.props,n=t.name,r=t.starCount,a=t.starColor,l=t.emptyStarColor,s=t.editing,c=this.state.value,i=function(e,t){return{float:"right",cursor:s?"pointer":"default",color:t>=e?a:l}},u={display:"none",position:"absolute",marginLeft:-9999},d=[],f=function(t){var r=n+"_"+t,a=o.default.createElement("input",{key:"input_"+r,style:u,className:"dv-star-rating-input",type:"radio",name:n,id:r,value:t,checked:c===t,onChange:e.onChange.bind(e,t,n)}),l=o.default.createElement("label",{key:"label_"+r,style:i(t,c),className:"dv-star-rating-star "+(c>=t?"dv-star-rating-full-star":"dv-star-rating-empty-star"),htmlFor:r,onClick:function(r){return e.onStarClick(t,c,n,r)},onMouseOver:function(r){return e.onStarHover(t,c,n,r)},onMouseLeave:function(r){return e.onStarHoverOut(t,c,n,r)}},e.renderIcon(t,c,n,r));d.push(a),d.push(l)},p=r;p>0;p--)f(p);return d.length?d:null}},{key:"renderIcon",value:function(e,t,n,r){var a=this.props,l=a.renderStarIcon,s=a.renderStarIconHalf;return"function"==typeof s&&Math.ceil(t)===e&&t%1!=0?s(e,t,n,r):"function"==typeof l?l(e,t,n,r):o.default.createElement("i",{key:"icon_"+r,style:{fontStyle:"normal"}},"★")}},{key:"render",value:function(){var e=this.props,t=e.editing,n=e.className,r=(0,s.default)("dv-star-rating",{"dv-star-rating-non-editable":!t},n);return o.default.createElement("div",{style:{display:"inline-block",position:"relative"},className:r},this.renderStars())}}]),t}();i.propTypes={name:l.default.string.isRequired,value:l.default.number,editing:l.default.bool,starCount:l.default.number,starColor:l.default.string,onStarClick:l.default.func,onStarHover:l.default.func,onStarHoverOut:l.default.func,renderStarIcon:l.default.func,renderStarIconHalf:l.default.func},i.defaultProps={starCount:5,editing:!0,starColor:"#ffb400",emptyStarColor:"#333"},t.default=i,e.exports=t.default}}]);
//# sourceMappingURL=component---src-templates-details-js-02986620bbc7a50fdc3b.js.map