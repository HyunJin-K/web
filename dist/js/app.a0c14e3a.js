(function(t){function s(s){for(var i,c,l=s[0],o=s[1],n=s[2],u=0,d=[];u<l.length;u++)c=l[u],Object.prototype.hasOwnProperty.call(r,c)&&r[c]&&d.push(r[c][0]),r[c]=0;for(i in o)Object.prototype.hasOwnProperty.call(o,i)&&(t[i]=o[i]);p&&p(s);while(d.length)d.shift()();return a.push.apply(a,n||[]),e()}function e(){for(var t,s=0;s<a.length;s++){for(var e=a[s],i=!0,l=1;l<e.length;l++){var o=e[l];0!==r[o]&&(i=!1)}i&&(a.splice(s--,1),t=c(c.s=e[0]))}return t}var i={},r={app:0},a=[];function c(s){if(i[s])return i[s].exports;var e=i[s]={i:s,l:!1,exports:{}};return t[s].call(e.exports,e,e.exports,c),e.l=!0,e.exports}c.m=t,c.c=i,c.d=function(t,s,e){c.o(t,s)||Object.defineProperty(t,s,{enumerable:!0,get:e})},c.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,s){if(1&s&&(t=c(t)),8&s)return t;if(4&s&&"object"===typeof t&&t&&t.__esModule)return t;var e=Object.create(null);if(c.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:t}),2&s&&"string"!=typeof t)for(var i in t)c.d(e,i,function(s){return t[s]}.bind(null,i));return e},c.n=function(t){var s=t&&t.__esModule?function(){return t["default"]}:function(){return t};return c.d(s,"a",s),s},c.o=function(t,s){return Object.prototype.hasOwnProperty.call(t,s)},c.p="/";var l=window["webpackJsonp"]=window["webpackJsonp"]||[],o=l.push.bind(l);l.push=s,l=l.slice();for(var n=0;n<l.length;n++)s(l[n]);var p=o;a.push([0,"chunk-vendors"]),e()})({0:function(t,s,e){t.exports=e("56d7")},"56d7":function(t,s,e){"use strict";e.r(s);e("e623"),e("e379"),e("5dc8"),e("37e1");var i=e("2b0e"),r=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{attrs:{id:"app"}},[t._m(0),e("ItemArea",{attrs:{ItemList:t.ItemList}}),t._m(1)],1)},a=[function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("header",{staticClass:"syshp_hg"},[i("div",{staticClass:"syshp_inr"},[i("h1",{staticClass:"logo"},[i("a",{attrs:{href:"#"}},[i("img",{attrs:{src:e("a1b0"),width:"161",height:"120",alt:"삼양맛샵, 삼양식품 공식 온라인 쇼핑몰"}})])]),i("div",{staticClass:"sd_bnr"},[i("a",{attrs:{href:"#"}},[i("img",{attrs:{src:e("d99b"),width:"330",height:"114",alt:"새롭게, 더 특별하게! 맛샵멤버십"}})])]),i("div",{staticClass:"srch"},[i("input",{attrs:{type:"text",placeholder:"사는 맛을 찾아보세요"}}),i("button",[t._v("검색")])])])])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("footer",{staticClass:"syshp_fg"},[e("div",{staticClass:"syshp_inr"},[e("div",{staticClass:"faq"},[e("h2",{staticClass:"tt"},[t._v("삼양맛샵 고객센터")]),e("strong",{staticClass:"num"},[t._v("000ㆍ000ㆍ0000")]),e("p",{staticClass:"time"},[t._v("AM 9:30 ~ PM 05:30 LUNCH TIME PM 12:00~PM 01:00 / 토, 일 공휴일 휴무")])]),e("div",{staticClass:"inf"},[e("div",{staticClass:"lst"},[e("span",[t._v("상호명 :삼양식품㈜")]),e("span",[t._v("대표자 :김현진")]),e("span",[t._v("개인정보책임자 :김현진")]),e("span",[t._v("주소 :서울특별시 한강 이남 어딘가 (삼양식품)")]),e("span",[t._v("이메일 :92729@naver.com")]),e("span",[t._v("반품 주소지 :반품은 살짝 곤란해서 안 받습니다.")]),e("span",[t._v("사업자등록번호 :123456789")]),e("span",[t._v("통신판매업 신고번호 :2020-서울봉천-0000")])]),e("ul",{staticClass:"mark"},[e("li",{staticClass:"ssl"},[t._v("SSL 보안 확인")]),e("li",{staticClass:"ini"},[t._v("INIPAY 유효성 확인")]),e("li",{staticClass:"esc"},[t._v("ESCROW INIPAY 유효성 확인")])]),e("p",{staticClass:"dsc"},[t._v("COPYRIGHT ⓒ 삼양맛샵 / 위 페이지는 삼양맛샵 페이지의 COPY 페이지 입니다.")])])])])}],c=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"syshp_cg"},[e("div",{staticClass:"syshp_inr"},[t._m(0),e("div",{staticClass:"syshp_bnr"},[e("img",{attrs:{src:t.bnrImg,alt:t.bnrImgDsc}})]),e("div",{staticClass:"syshp_dtl"},[e("h2",{staticClass:"hide"},[t._v("상품 리스트")]),e("div",{staticClass:"hd"},[e("span",{staticClass:"prd_num"},[t._v(" 상품 "),e("em",[t._v(t._s(t.ItemNum))]),t._v("개 ")]),e("ul",{staticClass:"sort",attrs:{id:"sortItems",role:"tablist"}},[e("li",{staticClass:"is_on"},[e("a",{attrs:{role:"tab"},on:{click:t.sortDate}},[t._v("등록일순")])]),e("li",[e("a",{attrs:{role:"tab"},on:{click:t.sortName}},[t._v("상품명순")])]),e("li",[e("a",{attrs:{role:"tab"},on:{click:t.sortLowPrice}},[t._v("낮은가격순")])]),e("li",[e("a",{attrs:{role:"tab"},on:{click:t.sortHighPrice}},[t._v("높은가격순")])])])]),e("div",{staticClass:"cg",attrs:{role:"tabpanel"}},[e("ul",{staticClass:"itm_lst"},t._l(t.ItemList,(function(s,i){return e("ItemCard",{key:i,attrs:{ItemList:t.ItemList[i]},nativeOn:{click:function(s){return t.openLayer(i)}}})})),1),t.LayerStatus?e("div",{staticClass:"ly_item_dtl"},[e("div",{staticClass:"inr"},[e("div",{staticClass:"thmb"},[e("img",{attrs:{src:t.ItemList[t.clickedItem].img,alt:t.ItemList[t.clickedItem].title}})]),e("div",{staticClass:"inf"},[e("span",{staticClass:"brd"},[t._v(t._s(t.ItemList[t.clickedItem].brand))]),e("strong",{staticClass:"tt"},[t._v(t._s(t.ItemList[t.clickedItem].title))]),e("div",{staticClass:"dtl"},[e("div",{staticClass:"dtl_gr"},[e("span",{staticClass:"dtl_tt"},[t._v("판매가")]),e("div",{staticClass:"dtl_con"},[e("span",{staticClass:"prc_sell"},[t._v(t._s(t.ItemList[t.clickedItem].beforePrice.toLocaleString())+"원")])])]),e("div",{staticClass:"dtl_gr"},[e("span",{staticClass:"dtl_tt"},[t._v("할인가")]),e("div",{staticClass:"dtl_con"},[e("span",{staticClass:"prc_dc"},[t._v(t._s(t.ItemList[t.clickedItem].price.toLocaleString())+"원")])])]),e("div",{staticClass:"dtl_gr"},[e("div",{staticClass:"dtl_gr_ls"},[e("span",{staticClass:"dtl_tt"},[t._v("적립금")]),e("div",{staticClass:"dtl_con"},[e("span",{staticClass:"prc"},[t._v(t._s(Math.floor(.02*t.ItemList[t.clickedItem].price).toLocaleString())+"원 ")]),e("span",{staticClass:"dsc"},[t._v("(적립금으로 상품을 결제할 경우 적립 제외)")])])]),t._m(1)])]),e("div",{staticClass:"opt"},[e("div",{staticClass:"ctrl_num"},[e("button",{attrs:{type:"button"},on:{click:t.ctrlDecrease}},[t._v("수량 감소")]),e("input",{directives:[{name:"model",rawName:"v-model",value:t.ctrlNum,expression:"ctrlNum"}],attrs:{type:"number",value:"1"},domProps:{value:t.ctrlNum},on:{input:function(s){s.target.composing||(t.ctrlNum=s.target.value)}}}),e("button",{staticClass:"bt_up",attrs:{type:"button"},on:{click:t.ctrlIncrease}},[t._v("수량 증가")])]),e("span",{staticClass:"opt_prc"},[t._v(t._s((t.ItemList[t.clickedItem].price*t.ctrlNum).toLocaleString())+"원")])]),e("div",{staticClass:"total"},[e("span",{staticClass:"txt"},[t._v(" 총 합계 "),e("em",[t._v(t._s((t.ItemList[t.clickedItem].price*t.ctrlNum).toLocaleString()))]),t._v("원 ")])]),t._m(2)]),e("button",{staticClass:"bt_clse",attrs:{type:"button"},on:{click:t.closeLayer}},[t._v("Close Layer")])])]):t._e()])])])])},l=[function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("ul",{staticClass:"syshp_tb",attrs:{id:"sortAllTab",role:"tablist"}},[e("li",{staticClass:"is_on"},[e("a",{attrs:{role:"tab"}},[t._v("전체보기")])]),e("li",[e("a",{attrs:{role:"tab"}},[t._v("봉지면")])]),e("li",[e("a",{attrs:{role:"tab"}},[t._v("용기면")])]),e("li",[e("a",{attrs:{role:"tab"}},[t._v("스낵")])]),e("li",[e("a",{attrs:{role:"tab"}},[t._v("디저트/간편식")])])])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"dtl_gr_ls"},[e("span",{staticClass:"dtl_tt"},[t._v("배송비")]),e("div",{staticClass:"dtl_con"},[e("span",{staticClass:"prc"},[t._v("2,500원")]),e("p",{staticClass:"dsc"},[t._v("(적립금으로 상품을 결제할 경우 적립 제외)")])])])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"bt_area"},[e("button",{attrs:{type:"button"}},[t._v("장바구니")]),e("button",{staticClass:"bt_buy",attrs:{type:"button"}},[t._v("구매하기")])])}],o=e("2909"),n=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("li",[e("a",{attrs:{href:"#"}},[e("div",{staticClass:"thmb"},[e("img",{attrs:{src:t.ItemList.img,width:"380",height:"380",alt:t.ItemList.title}})]),e("div",{staticClass:"inf"},[e("span",{staticClass:"brd"},[t._v("["+t._s(t.ItemList.brand)+"]")]),e("p",{staticClass:"tt"},[t._v(t._s(t.ItemList.title))]),e("div",{staticClass:"dtl"},[e("del",[t._v(t._s(t.ItemList.beforePrice.toLocaleString())+"원")]),e("strong",{staticClass:"prc"},[t._v(t._s(t.ItemList.price.toLocaleString())+"원")]),t._m(0)])])])])},p=[function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"btn"},[e("a",{staticClass:"bt_cart",attrs:{href:"#"}},[t._v("카트담기")]),e("a",{staticClass:"bt_fvrt",attrs:{href:"#"}},[t._v("즐겨찾기")])])}],u={name:"ItemCard",props:{ItemList:Object}},d=u,m=e("2877"),_=Object(m["a"])(d,n,p,!1,null,null,null),v=_.exports,g={name:"ItemArea",data:function(){return{bnrImg:"",bnrImgDsc:"",ItemNum:this.ItemList.length,ItemListOrg:Object(o["a"])(this.ItemList),LayerStatus:!1,clickedItem:1,ctrlNum:1}},components:{ItemCard:v},props:{ItemList:Array},methods:{sortDate:function(t){t.preventDefault(),this.ItemList=Object(o["a"])(this.ItemListOrg)},sortName:function(t){t.preventDefault(),this.ItemList.sort((function(t,s){return t.title<s.title?-1:t.title>s.title?1:0}))},sortLowPrice:function(t){t.preventDefault(),this.ItemList.sort((function(t,s){return t.price-s.price}))},sortHighPrice:function(t){t.preventDefault(),this.ItemList.sort((function(t,s){return s.price-t.price}))},openLayer:function(t){event.preventDefault(),this.LayerStatus=!0,this.clickedItem=t;var s=document.getElementsByTagName("body")[0];s.classList.add("scroll_fix")},closeLayer:function(){this.LayerStatus=!1;var t=document.getElementsByTagName("body")[0];t.classList.remove("scroll_fix"),this.ctrlNum=1},ctrlDecrease:function(){this.ctrlNum>1&&(this.ctrlNum=this.ctrlNum-1)},ctrlIncrease:function(){this.ctrlNum=this.ctrlNum+1}},mounted:function(){function t(t){for(var s,e=document.getElementById(t),i=e.getElementsByTagName("li"),r=0;r<i.length;r++)s=i[r].getElementsByTagName("a")[0],s.addEventListener("click",(function(t){t.preventDefault();for(var s=0;s<i.length;s++)i[s].classList.remove("is_on");this.parentNode.classList.add("is_on")}))}t("sortItems"),t("sortAllTab")}},f=g,h=Object(m["a"])(f,c,l,!1,null,null,null),b=h.exports,y=[{type:"봉지면",img:"https://www.sydeliciousshop.com/resources/goods/202004/evtGtnejSZ6DTPYTupVYcA.jpg",brand:"삼양식품",title:"도전 불닭볶음면 140g*5입+NEW 핵불닭볶음면 140g*5입",beforePrice:10750,price:9900},{type:"봉지면",img:"https://www.sydeliciousshop.com/resources/goods/202003/EQZiQKJaTB2FNor5tK4Dpg.jpg",brand:"삼양식품",title:"도전! 불닭비빔면 140g*5입",beforePrice:5500,price:4400},{type:"봉지면",img:"https://www.sydeliciousshop.com/resources/goods/202003/azRurSG2QcW0ZetMbR6xTA.jpg",brand:"삼양식품",title:"짜짜로니 140g * 40입",beforePrice:36e3,price:31520},{type:"봉지면",img:"https://www.sydeliciousshop.com/resources/goods/202002/usJM8xC3QOyJoEf!aKIvqw.jpg",brand:"삼양식품",title:"열무비빔면 130g*4입",beforePrice:3600,price:2880},{type:"용기면",img:"https://www.sydeliciousshop.com/resources/goods/202001/39dqTNe!Qi2BNdQcvJuWXg.jpg",brand:"삼양식품",title:"신림동 백순대볶음면 큰컵 110g",beforePrice:1600,price:1280},{type:"봉지면",img:"https://www.sydeliciousshop.com/resources/goods/201912/7AY3GGkrSrWqdODYdAmMNg.jpg",brand:"삼양식품",title:"NEW 핵불닭볶음면 140g * 10입",beforePrice:10500,price:9900},{type:"봉지면",img:"https://www.sydeliciousshop.com/resources/goods/201912/JUCXJ7ByS6mEyuRiAidyyA.jpg",brand:"삼양식품",title:"삼양라면 매운맛 큰컵 110g",beforePrice:1100,price:880},{type:"스낵",img:"https://www.sydeliciousshop.com/resources/goods/201911/S0v7NQZwQWCm5FioImHC_w.jpg",brand:"삼양식품",title:"별뽀빠이 72g*48입",beforePrice:38400,price:33600},{type:"스낵",img:"https://www.sydeliciousshop.com/resources/goods/201911/7JyZzvAPQhWqQ8ZaxY!pZQ.jpg",brand:"삼양식품",title:"부셔먹는 라면스낵 불닭 90g * 24입",beforePrice:18e3,price:15700},{type:"용기면",img:"https://www.sydeliciousshop.com/resources/goods/201911/j9T58PcOTs!c_4OHkfVqkg.jpg",brand:"삼양식품",title:"나가사끼짬뽕 컵 65*g*6입",beforePrice:6300,price:5520},{type:"스낵",img:"https://www.sydeliciousshop.com/resources/goods/201911/PkDdbhrdQ8eg_rpjT8W9kQ.jpg",brand:"삼양식품",title:"사또밥 67g*20입",beforePrice:26e3,price:22800},{type:"용기면",img:"https://www.sydeliciousshop.com/resources/goods/201911/L9nyesJRR2Sp1eLB8G6opw.jpg",brand:"삼양식품",title:"맛있는라면 큰컵 112g*16입",beforePrice:22400,price:19680},{type:"봉지면",img:"https://www.sydeliciousshop.com/resources/goods/201911/ph58PokuQYShdmmo0IHC6g.jpg",brand:"삼양식품",title:"맛있는라면 해물맛 115g * 40입",beforePrice:42e3,price:36720},{type:"스낵",img:"https://www.sydeliciousshop.com/resources/goods/201911/GxC!his7Tx6r0a_5xgmmJg.jpg",brand:"삼양식품",title:"왕짱구 275g*10입",beforePrice:28e3,price:24500},{type:"용기면",img:"https://www.sydeliciousshop.com/resources/goods/201911/BnmM3MT5SwCC3YIKXlGb7A.jpg",brand:"삼양식품",title:"간짬뽕 큰컵 105g*16입",beforePrice:21600,price:18880}],C={name:"App",data:function(){return{ItemList:y}},components:{ItemArea:b},methods:{}},I=C,w=(e("5c0b"),Object(m["a"])(I,r,a,!1,null,null,null)),L=w.exports;i["a"].config.productionTip=!1,new i["a"]({render:function(t){return t(L)}}).$mount("#app")},"5c0b":function(t,s,e){"use strict";var i=e("9c0c"),r=e.n(i);r.a},"9c0c":function(t,s,e){},a1b0:function(t,s,e){t.exports=e.p+"img/logo_samyang.3f544a06.png"},d99b:function(t,s,e){t.exports=e.p+"img/bnr_membership.b7ede0db.jpg"}});
//# sourceMappingURL=app.a0c14e3a.js.map