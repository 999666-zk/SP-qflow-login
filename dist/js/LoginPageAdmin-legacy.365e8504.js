"use strict";(self["webpackChunkSMGS"]=self["webpackChunkSMGS"]||[]).push([[483],{37400:function(t,e,a){a.r(e),a.d(e,{default:function(){return f}});var o=function(){var t=this,e=t._self._c;return e("div",[e("div",{class:"allView"==t.styleData.qf_homeStyle?"everyDayRate login-wrap":"everyDayRate-lr login-wrap-lr",style:{backgroundImage:"allView"==t.styleData.qf_homeStyle?"url(".concat(0==t.imgObj.flag?t.Imgs[t.Imgs.length-1]:t.Imgs[t.aroundNum],")"):"none",width:"".concat(100-t.changeWidth,"%")},on:{click:function(e){return e.stopPropagation(),t.hiddenRight.apply(null,arguments)}}},[e("div",{class:"allView"==t.styleData.qf_homeStyle?t.styleData.qf_login:"right-lr",attrs:{id:"mobile_form"}},[e("div",{class:"allView"==t.styleData.qf_homeStyle?"left-box":"left-box-lr"},[e("div",{directives:[{name:"show",rawName:"v-show",value:"leftAndright"==t.styleData.qf_homeStyle,expression:"styleData.qf_homeStyle == 'leftAndright'"}],attrs:{id:"swiper-out-box"}},[e("el-carousel",{attrs:{direction:t.styleData.qf_swiper_way,autoplay:t.styleData.qf_loopvalue,loop:!0,arrow:"never",interval:3500,"indicator-position":t.styleData.qf_swiper_pages}},t._l(t.Imgs,(function(t,a){return e("el-carousel-item",{key:a},[e("img",{staticClass:"swipermy-imgs",attrs:{src:t,alt:"swipermy-imgs"}})])})),1)],1)]),e("div",{class:"allView"==t.styleData.qf_homeStyle?"right-box":"right-box-lr"},[e("div",{staticClass:"inner-box"},[e("LoginForm",{attrs:{allObj:t.allData,styleData:t.styleData,logo_path:t.logo_path,isAdmin:t.isAdmin}})],1)]),e("div",{staticClass:"setting-right"},[e("SettingTools",{ref:"child",on:{openBox:t.openB,closeBox:t.closeB,pullData:t.getAllData,loginwaycheck:t.getway,footArea:t.getTopData,sendImgs:t.getImgs,allright:t.getBlu,theNewImg:t.getNewImg,logo:t.getlogo,pubkey:t.getpubkey,icon:t.geticon}})],1)]),1==t.styleData.login_footer&&"allView"===t.styleData.qf_homeStyle?e("div",{staticClass:"footer-bottom"},[e("div",{staticClass:"footer-bottom-center"},[e("div",{staticClass:"move-box"},[e("div",{staticClass:"top-area",class:"footer-bottom-center-up"==t.styleData.qf_footer&&0==t.allRight?t.styleData.qf_footer:"top-area"},t._l(t.footDatas.topArea,(function(a,o){return e("div",{key:o,staticClass:"footer-item"},[e("a",{attrs:{href:a.href}},[a.img?e("img",{attrs:{src:a.img,alt:"",width:"20px",height:"20px"}}):t._e(),e("img",{attrs:{onerror:"this.style.display='none'",src:"#",alt:""}}),e("p",{staticStyle:{float:"right",height:"20px","line-height":"20px",margin:"0px 0px 0px 5px",color:"#fff"}},[t._v(" "+t._s(a.text)+" ")])])])})),0),e("div",{staticClass:"under-area",class:"footer-bottom-center-down"==t.styleData.qf_footer&&0==t.allRight?t.styleData.qf_footer:"under-area"},t._l(t.footDatas.underArea,(function(a,o){return e("div",{key:o,staticClass:"footer-item"},[e("a",{attrs:{href:a.href}},[a.img?e("img",{attrs:{src:a.img,alt:"",width:"20px",height:"20px"}}):t._e(),e("img",{attrs:{onerror:"this.style.display='none'",src:"#",alt:""}}),e("p",{staticStyle:{float:"right",height:"20px","line-height":"20px",margin:"0px 0px 0px 5px",color:"#fff"}},[t._v(" "+t._s(a.text)+" ")])])])})),0)])])]):t._e()])])},i=[],s=a(95684),l=a(58595),n=a(81833),r={name:"LoginPage",filters:{capitalize:function(t){return t+"登录"}},props:{msg:String},data:function(){return{styleData:{},logo_path:"",footerData:[],open:!1,param:{username:"",password:""},rules:{username:[{required:!0,message:"请输入用户名",trigger:"blur"}],password:[{required:!0,message:"请输入密码",trigger:"blur"}]},form:{settingData:""},isAdmin:!0,title:"",pubKey:"",EMAIL_REGEX:/^(?=.{1,254}$)(?=.{1,64}@)[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+)*@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/,MOBILENUM_REGEX:/^\d{4,11}$/,changeWidth:0,loginWays:[],footDatas:{},allRight:!1,Imgs:[],imgObj:{},allData:{},icon_path:"",ipAddress:""}},created:function(){},beforeUpdate:function(){this.setIcon()},computed:{aroundNum:function(){return Math.floor(Math.random()*this.Imgs.length)}},methods:{hiddenRight:function(){this.$refs.child.closeRight()},closeB:function(t){this.changeWidth=t},openB:function(t){this.changeWidth=t},getpubkey:function(t){this.pubKey=t},getNewImg:function(t){this.imgObj=t},getImgs:function(t){this.Imgs=t},getway:function(t){this.loginWays=t},getTopData:function(t){this.footDatas=t},getBlu:function(t){this.allRight=t},getAllData:function(t){this.styleData=t.styleData,this.footerData=t.footerData,this.loginWays=t.loginWays,this.footDatas=t.footData,this.allData=t},getlogo:function(t){this.logo_path=t},geticon:function(t){console.log(t),this.icon_path=t},setIcon:function(){document.querySelector("link").href=this.icon_path}},mounted:function(){},components:{LoginForm:s.Z,SettingTools:l.Z,HeadTop:n.Z}},g=r,c=a(43736),h=(0,c.Z)(g,o,i,!1,null,"2caf76f0",null),f=h.exports}}]);
//# sourceMappingURL=LoginPageAdmin-legacy.365e8504.js.map