(self["webpackChunkSMGS"]=self["webpackChunkSMGS"]||[]).push([[950],{1950:function(t,e,s){"use strict";s.d(e,{Z:function(){return h}});var i=function(){var t=this,e=t._self._c;return e("div",{staticStyle:{"user-select":"none"}},[e("drag-verify-img-chip",{ref:"sss",attrs:{imgsrc:t.checkImg,isPassing:t.isPassing,showRefresh:!0,barWidth:40,text:"Swiping to the right side",successText:"Verification passed",handlerIcon:"el-icon-d-arrow-right",successIcon:"el-icon-circle-check",width:280,refreshIcon:"el-icon-refresh-right",successTip:"Verification passed, more than 80% of users",failTip:"Verification failed, please try again"},on:{"update:isPassing":function(e){t.isPassing=e},"update:is-passing":function(e){t.isPassing=e},refresh:t.reimg,passcallback:t.pass,passfail:t.nopass}})],1)},r=[],n=(s(9653),s(30536)),a=s.n(n),o={props:{message:Object,mainKey:Number},components:{dragVerifyImgChip:a()},data:function(){return{pick:"",imgURl:["./verify1.png","./verify2.png","./verify3.png","./verify4.png","./verify5.png","./verify6.png"],checkImg:"",isPassing:null}},computed:{},methods:{pass:function(){var t=this.message.isPass;this.$emit("sendMessage",{isPass:!t})},nopass:function(){var t=this.message.isFailed;this.$emit("sendFiledMessage",{isFailed:!t})},reimg:function(){var t=this.getRandomInt(6);this.checkImg=this.imgURl[t]},getRandomInt:function(t){return Math.floor(Math.random()*t)}},created:function(){},mounted:function(){this.reimg();var t=1,e=6,s=Math.floor(Math.random()*(e-t+1))+t;this.checkImg="./verify".concat(s,".png")},watch:{mainKey:function(t,e){t!==e&&this.reimg()}}},c=o,d=s(43736),l=(0,d.Z)(c,i,r,!1,null,"1454e2d8",null),h=l.exports},30536:function(t,e,s){var i,r,n;t=s.nmd(t);var a=s(1692)["default"];s(27479),s(87714),s(82801),s(1174),s(69600),s(92222),s(21249),s(38862),s(41539),s(57658),s(21703),s(74916),s(77601),s(57327),s(9653),s(15306),s(68309),function(s,o){"object"==a(e)&&"object"==a(t)?t.exports=o():(r=[],i=o,n="function"===typeof i?i.apply(e,r):i,void 0===n||(t.exports=n))}("undefined"!=typeof self&&self,(function(){return function(t){function e(i){if(s[i])return s[i].exports;var r=s[i]={i:i,l:!1,exports:{}};return t[i].call(r.exports,r,r.exports,e),r.l=!0,r.exports}var s={};return e.m=t,e.c=s,e.d=function(t,s,i){e.o(t,s)||Object.defineProperty(t,s,{configurable:!1,enumerable:!0,get:i})},e.n=function(t){var s=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(s,"a",s),s},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="/dist/",e(e.s=3)}([function(t,e){function s(t,e){var s=t[1]||"",r=t[3];if(!r)return s;if(e&&"function"==typeof btoa){var n=i(r);return[s].concat(r.sources.map((function(t){return"/*# sourceURL="+r.sourceRoot+t+" */"}))).concat([n]).join("\n")}return[s].join("\n")}function i(t){return"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(t))))+" */"}t.exports=function(t){var e=[];return e.toString=function(){return this.map((function(e){var i=s(e,t);return e[2]?"@media "+e[2]+"{"+i+"}":i})).join("")},e.i=function(t,s){"string"==typeof t&&(t=[[null,t,""]]);for(var i={},r=0;r<this.length;r++){var n=this[r][0];"number"==typeof n&&(i[n]=!0)}for(r=0;r<t.length;r++){var a=t[r];"number"==typeof a[0]&&i[a[0]]||(s&&!a[2]?a[2]=s:s&&(a[2]="("+a[2]+") and ("+s+")"),e.push(a))}},e}},function(t,e,s){function i(t){for(var e=0;e<t.length;e++){var s=t[e],i=l[s.id];if(i){i.refs++;for(var r=0;r<i.parts.length;r++)i.parts[r](s.parts[r]);for(;r<s.parts.length;r++)i.parts.push(n(s.parts[r]));i.parts.length>s.parts.length&&(i.parts.length=s.parts.length)}else{var a=[];for(r=0;r<s.parts.length;r++)a.push(n(s.parts[r]));l[s.id]={id:s.id,refs:1,parts:a}}}}function r(){var t=document.createElement("style");return t.type="text/css",h.appendChild(t),t}function n(t){var e,s,i=document.querySelector("style["+m+'~="'+t.id+'"]');if(i){if(p)return g;i.parentNode.removeChild(i)}if(y){var n=u++;i=f||(f=r()),e=a.bind(null,i,n,!1),s=a.bind(null,i,n,!0)}else i=r(),e=o.bind(null,i),s=function(){i.parentNode.removeChild(i)};return e(t),function(i){if(i){if(i.css===t.css&&i.media===t.media&&i.sourceMap===t.sourceMap)return;e(t=i)}else s()}}function a(t,e,s,i){var r=s?"":i.css;if(t.styleSheet)t.styleSheet.cssText=b(e,r);else{var n=document.createTextNode(r),a=t.childNodes;a[e]&&t.removeChild(a[e]),a.length?t.insertBefore(n,a[e]):t.appendChild(n)}}function o(t,e){var s=e.css,i=e.media,r=e.sourceMap;if(i&&t.setAttribute("media",i),v.ssrId&&t.setAttribute(m,e.id),r&&(s+="\n/*# sourceURL="+r.sources[0]+" */",s+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(r))))+" */"),t.styleSheet)t.styleSheet.cssText=s;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(s))}}var c="undefined"!=typeof document;if("undefined"!=typeof DEBUG&&DEBUG&&!c)throw new Error("vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment.");var d=s(7),l={},h=c&&(document.head||document.getElementsByTagName("head")[0]),f=null,u=0,p=!1,g=function(){},v=null,m="data-vue-ssr-id",y="undefined"!=typeof navigator&&/msie [6-9]\b/.test(navigator.userAgent.toLowerCase());t.exports=function(t,e,s,r){p=s,v=r||{};var n=d(t,e);return i(n),function(e){for(var s=[],r=0;r<n.length;r++){var a=n[r],o=l[a.id];o.refs--,s.push(o)}e?(n=d(t,e),i(n)):n=[];for(r=0;r<s.length;r++){o=s[r];if(0===o.refs){for(var c=0;c<o.parts.length;c++)o.parts[c]();delete l[o.id]}}}};var b=function(){var t=[];return function(e,s){return t[e]=s,t.filter(Boolean).join("\n")}}()},function(t,e,s){"use strict";e.a={name:"dragVerifyImgChip",props:{isPassing:{type:Boolean,default:!1},width:{type:Number,default:250},height:{type:Number,default:40},text:{type:String,default:"swiping to the right side"},successText:{type:String,default:"success"},background:{type:String,default:"#eee"},progressBarBg:{type:String,default:"#76c61d"},completedBg:{type:String,default:"#76c61d"},circle:{type:Boolean,default:!1},radius:{type:String,default:"4px"},handlerIcon:{type:String},successIcon:{type:String},handlerBg:{type:String,default:"#fff"},textSize:{type:String,default:"14px"},textColor:{type:String,default:"#333"},imgsrc:{type:String},barWidth:{type:Number,default:40},barRadius:{type:Number,default:8},showRefresh:{type:Boolean,default:!1},refreshIcon:{type:String},showTips:{type:Boolean,default:!0},successTip:{type:String,default:"验证通过，超过80%用户"},failTip:{type:String,default:"验证未通过，拖动滑块将悬浮图像正确合并"},diffWidth:{type:Number,default:20}},mounted:function(){var t=this.$refs.dragVerify;t.style.setProperty("--textColor",this.textColor),t.style.setProperty("--width",Math.floor(this.width/2)+"px"),t.style.setProperty("--pwidth",-Math.floor(this.width/2)+"px")},computed:{handlerStyle:function(){return{left:"0px",width:this.height+"px",height:this.height+"px",background:this.handlerBg}},message:function(){return this.isPassing?"":this.text},successMessage:function(){return this.isPassing?this.successText:""},dragVerifyStyle:function(){return{width:this.width+"px",height:this.height+"px",lineHeight:this.height+"px",background:this.background,borderRadius:this.circle?this.height/2+"px":this.radius}},dragVerifyImgStyle:function(){return{width:this.width+"px",position:"relative",overflow:"hidden"}},progressBarStyle:function(){return{background:this.progressBarBg,height:this.height+"px",borderRadius:this.circle?this.height/2+"px 0 0 "+this.height/2+"px":this.radius}},textStyle:function(){return{height:this.height+"px",width:this.width+"px",fontSize:this.textSize}}},data:function(){return{isMoving:!1,x:0,isOk:!1,isKeep:!1,clipBarx:0,showErrorTip:!1}},methods:{draw:function(t,e,s,i){var r=this.barWidth,n=this.barRadius,a=Math.PI;t.beginPath(),t.moveTo(e,s),t.arc(e+r/2,s-n+2,n,.72*a,2.26*a),t.lineTo(e+r,s),t.arc(e+r+n-2,s+r/2,n,1.21*a,2.78*a),t.lineTo(e+r,s+r),t.lineTo(e,s+r),t.arc(e+n-2,s+r/2,n+.4,2.76*a,1.24*a,!0),t.lineTo(e,s),t.lineWidth=2,t.fillStyle="rgba(255, 255, 255, 0.8)",t.strokeStyle="rgba(255, 255, 255, 0.8)",t.stroke(),t[i](),t.globalCompositeOperation="destination-over"},checkimgLoaded:function(){var t=this.barWidth,e=this.$refs.checkImg.height,s=this.$refs.checkImg.width,i=Math.floor(this.width/2),r=i+Math.ceil(Math.random()*(i-t-this.barRadius-5)),n=25+Math.floor(Math.random()*(e-t-25-20));this.$refs.maincanvas.setAttribute("width",s),this.$refs.maincanvas.setAttribute("height",e),this.$refs.maincanvas.style.display="block";var a=this.$refs.maincanvas.getContext("2d");this.draw(a,r,n,"fill"),this.clipBarx=r;var o=this.$refs.movecanvas;o.setAttribute("width",s),o.setAttribute("height",e),this.$refs.movecanvas.style.display="block";var c=t+2*this.barRadius+3,d=this.$refs.movecanvas.getContext("2d");d.clearRect(0,0,s,e),this.draw(d,r,n,"clip"),d.drawImage(this.$refs.checkImg,0,0,s,e);n=n-2*this.barRadius-1;var l=d.getImageData(r,n,c,c);o.setAttribute("width",c),o.setAttribute("height",e),d.putImageData(l,0,n)},dragStart:function(t){if(!this.isPassing){this.isMoving=!0;var e=this.$refs.handler;this.x=(t.pageX||t.touches[0].pageX)-parseInt(e.style.left.replace("px",""),10)}this.showBar=!0,this.showErrorTip=!1,this.$emit("handlerMove")},dragMoving:function(t){if(this.isMoving&&!this.isPassing){var e=(t.pageX||t.touches[0].pageX)-this.x;this.$refs.handler.style.left=e+"px",this.$refs.progressBar.style.width=e+this.height/2+"px",this.$refs.movecanvas.style.left=e+"px"}},dragFinish:function(t){if(this.isMoving&&!this.isPassing){var e=(t.pageX||t.changedTouches[0].pageX)-this.x;if(Math.abs(e-this.clipBarx)>this.diffWidth){this.isOk=!0;var s=this;setTimeout((function(){s.$refs.handler.style.left="0",s.$refs.progressBar.style.width="0",s.$refs.movecanvas.style.left="0",s.isOk=!1}),500),this.$emit("passfail"),this.showErrorTip=!0}else this.passVerify();this.isMoving=!1}},passVerify:function(){var t=this;this.$emit("update:isPassing",!0),this.isMoving=!1,this.$refs.handler.children[0].className=this.successIcon,this.$refs.progressBar.style.background=this.completedBg,this.$refs.message.style["-webkit-text-fill-color"]="unset",this.$refs.message.style.animation="slidetounlock2 3s infinite",this.$refs.progressBar.style.color="#fff",this.$refs.progressBar.style.fontSize=this.textSize,this.isKeep=!0,setTimeout((function(){t.$refs.movecanvas.style.left=t.clipBarx+"px",setTimeout((function(){t.isKeep=!1,t.$refs.maincanvas.style.display="none",t.$refs.movecanvas.style.display="none"}),200)}),100),this.$emit("passcallback")},reset:function(){this.reImg(),this.checkimgLoaded()},reImg:function(){this.$emit("update:isPassing",!1);var t=this.$options.data();for(var e in t)Object.prototype.hasOwnProperty.call(t,e)&&this.$set(this,e,t[e]);var s=this.$refs.handler,i=this.$refs.message;s.style.left="0",this.$refs.progressBar.style.width="0",s.children[0].className=this.handlerIcon,i.style["-webkit-text-fill-color"]="transparent",i.style.animation="slidetounlock 3s infinite",i.style.color=this.background,this.$refs.movecanvas.style.left="0px"},refreshimg:function(){this.$emit("refresh")}},watch:{imgsrc:{immediate:!1,handler:function(){this.reImg()}}}}},function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=s(4);i.a.install=function(t){t.component(i.a.name,i.a)},e.default=i.a},function(t,e,s){"use strict";function i(t){s(5),s(8)}var r=s(2),n=s(11),a=s(10),o=i,c=a(r.a,n.a,!1,o,"data-v-74b8cf9d",null);e.a=c.exports},function(t,e,s){var i=s(6);"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals),s(1)("d4320ae6",i,!0,{})},function(t,e,s){e=t.exports=s(0)(!1),e.push([t.i,".drag_verify[data-v-74b8cf9d]{position:relative;background-color:#e8e8e8;text-align:center;overflow:hidden}.drag_verify .dv_handler[data-v-74b8cf9d]{position:absolute;top:0;left:0;cursor:move}.drag_verify .dv_handler i[data-v-74b8cf9d]{color:#666;padding-left:0;font-size:16px}.drag_verify .dv_handler .el-icon-circle-check[data-v-74b8cf9d]{color:#6c6;margin-top:9px}.drag_verify .dv_progress_bar[data-v-74b8cf9d]{position:absolute;height:34px;width:0}.drag_verify .dv_text[data-v-74b8cf9d]{position:absolute;top:0;color:transparent;-moz-user-select:none;-webkit-user-select:none;user-select:none;-o-user-select:none;-ms-user-select:none;background:-webkit-gradient(linear,left top,right top,color-stop(0,var(--textColor)),color-stop(.4,var(--textColor)),color-stop(.5,#fff),color-stop(.6,var(--textColor)),color-stop(1,var(--textColor)));-webkit-background-clip:text;-webkit-text-fill-color:transparent;-webkit-text-size-adjust:none;animation:slidetounlock 3s infinite}.drag_verify .dv_text [data-v-74b8cf9d]{-webkit-text-fill-color:var(--textColor)}.goFirst[data-v-74b8cf9d]{left:0!important;transition:left .5s}.goKeep[data-v-74b8cf9d]{transition:left .2s}.goFirst2[data-v-74b8cf9d]{width:0!important;transition:width .5s}.drag-verify-container[data-v-74b8cf9d]{position:relative;line-height:0}.refresh[data-v-74b8cf9d]{position:absolute;right:5px;top:5px;cursor:pointer;font-size:20px;z-index:200}.tips[data-v-74b8cf9d]{position:absolute;bottom:0;height:20px;line-height:20px;text-align:center;width:100%;font-size:12px;z-index:200}.tips.success[data-v-74b8cf9d]{background:hsla(0,0%,100%,.6);color:green}.tips.danger[data-v-74b8cf9d]{background:rgba(0,0,0,.6);color:#ff0}.main-canvas[data-v-74b8cf9d]{width:100%;height:100%}.main-canvas[data-v-74b8cf9d],.move-canvas[data-v-74b8cf9d]{position:absolute;top:0;left:0}",""])},function(t,e){t.exports=function(t,e){for(var s=[],i={},r=0;r<e.length;r++){var n=e[r],a=n[0],o=n[1],c=n[2],d=n[3],l={id:t+":"+r,css:o,media:c,sourceMap:d};i[a]?i[a].parts.push(l):s.push(i[a]={id:a,parts:[l]})}return s}},function(t,e,s){var i=s(9);"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals),s(1)("2d0d93c2",i,!0,{})},function(t,e,s){e=t.exports=s(0)(!1),e.push([t.i,"@-webkit-keyframes slidetounlock{0%{background-position:var(--pwidth) 0}to{background-position:var(--width) 0}}@-webkit-keyframes slidetounlock2{0%{background-position:var(--pwidth) 0}to{background-position:var(--pwidth) 0}}",""])},function(t,e){t.exports=function(t,e,s,i,r,n){var o,c=t=t||{},d=a(t.default);"object"!==d&&"function"!==d||(o=t,c=t.default);var l,h="function"==typeof c?c.options:c;if(e&&(h.render=e.render,h.staticRenderFns=e.staticRenderFns,h._compiled=!0),s&&(h.functional=!0),r&&(h._scopeId=r),n?(l=function(t){t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,t||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),i&&i.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(n)},h._ssrRegister=l):i&&(l=i),l){var f=h.functional,u=f?h.render:h.beforeCreate;f?(h._injectStyles=l,h.render=function(t,e){return l.call(e),u(t,e)}):h.beforeCreate=u?[].concat(u,l):[l]}return{esModule:o,exports:c,options:h}}},function(t,e,s){"use strict";var i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"drag-verify-container"},[s("div",{style:t.dragVerifyImgStyle},[s("img",{ref:"checkImg",staticStyle:{width:"100%"},attrs:{crossOrigin:"anonymous",src:t.imgsrc,alt:""},on:{load:t.checkimgLoaded}}),t._v(" "),s("canvas",{ref:"maincanvas",staticClass:"main-canvas"}),t._v(" "),s("canvas",{ref:"movecanvas",staticClass:"move-canvas",class:{goFirst:t.isOk,goKeep:t.isKeep}}),t._v(" "),t.showRefresh&&!this.isPassing?s("div",{staticClass:"refresh"},[s("i",{class:t.refreshIcon,on:{click:t.refreshimg}})]):t._e(),t._v(" "),t.showTips&&t.isPassing?s("div",{staticClass:"tips success"},[t._v(t._s(t.successTip))]):t._e(),t._v(" "),t.showTips&&!t.isPassing&&t.showErrorTip?s("div",{staticClass:"tips danger"},[t._v(t._s(t.failTip))]):t._e()]),t._v(" "),s("div",{ref:"dragVerify",staticClass:"drag_verify",style:t.dragVerifyStyle,on:{mousemove:t.dragMoving,mouseup:t.dragFinish,mouseleave:t.dragFinish,touchmove:t.dragMoving,touchend:t.dragFinish}},[s("div",{ref:"progressBar",staticClass:"dv_progress_bar",class:{goFirst2:t.isOk},style:t.progressBarStyle},[t._v("\n      "+t._s(t.successMessage)+"\n    ")]),t._v(" "),s("div",{ref:"message",staticClass:"dv_text",style:t.textStyle},[t._v("\n      "+t._s(t.message)+"\n    ")]),t._v(" "),s("div",{ref:"handler",staticClass:"dv_handler dv_handler_bg",class:{goFirst:t.isOk},style:t.handlerStyle,on:{mousedown:t.dragStart,touchstart:t.dragStart}},[s("i",{class:t.handlerIcon})])])])},r=[],n={render:i,staticRenderFns:r};e.a=n}])}))}}]);
//# sourceMappingURL=950-legacy.a4402638.js.map