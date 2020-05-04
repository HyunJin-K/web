<template>
  <div id="app">
    <header class="syshp_hg">
      <div class="syshp_inr">
        <h1 class="logo">
          <a href="#" v-on:click="pageInit">
            <img
              src="@/assets/img/logo_samyang.png"
              width="161"
              height="120"
              alt="삼양맛샵, 삼양식품 공식 온라인 쇼핑몰"
            />
          </a>
        </h1>
        <form class="srch" v-on:submit="formSearch(0)">
          <fieldset>
            <legend>상품 검색창</legend>
            <input type="text" placeholder="사는 맛을 찾아보세요" data-func="searchIpt" />
            <button>검색</button>
          </fieldset>
        </form>
      </div>
    </header>

    <div class="syshp_cg">
      <div class="syshp_inr">
        <!-- Area : 탭메뉴 & 탭별 배너 -->
        <ul class="syshp_tb" id="sortAllTab" role="tablist" v-if="searchStatus == 1">
          <li class="is_on">
            <a role="tab" v-on:click="AllFilter">전체보기</a>
          </li>
          <li>
            <a role="tab" v-on:click="commonFilter('봉지면')">봉지면</a>
          </li>
          <li>
            <a role="tab" v-on:click="commonFilter('용기면')">용기면</a>
          </li>
          <li>
            <a role="tab" v-on:click="commonFilter('스낵')">스낵</a>
          </li>
          <li>
            <a role="tab" v-on:click="commonFilter('디저트/간편식')">디저트/간편식</a>
          </li>
        </ul>

        <div class="syshp_bnr" v-if="searchStatus == 1">
          <img :src="bnrImg" :alt="bnrImgDsc" />
        </div>

        <!-- Area : 검색결과 표시 -->
        <div class="syshp_rslt" v-if="searchStatus == 2">
          <h2 class="sbj">
            <em>"{{ typeItem }}"</em> 에 대한 검색 결과입니다.
          </h2>
          <p class="dsc">검색하신 내용과 일치하는 검색결과 입니다.</p>
          <form class="srch" v-on:submit="formSearch(1)">
            <fieldset>
              <legend>상품 재검색</legend>
              <input type="text" data-func="searchIpt" />
              <button>검색</button>
            </fieldset>
          </form>
        </div>

        <div class="syshp_dtl">
          <h2 class="hide">상품 리스트</h2>
          <div class="hd">
            <span class="prd_num">
              상품
              <em>{{ItemNum}}</em>개
            </span>

            <!-- 768px 이하일 경우 사용하는 정렬 버튼 -->
            <a href="#sortItems" class="bt_lysort" id="btLayerSort">정렬 선택 레이어</a>
            <ul class="sort" id="sortItems" role="tablist">
              <li class="is_on">
                <a role="tab" v-on:click="sortDate">등록일순</a>
              </li>
              <li>
                <a role="tab" v-on:click="sortName">상품명순</a>
              </li>
              <li>
                <a role="tab" v-on:click="sortLowPrice">낮은가격순</a>
              </li>
              <li>
                <a role="tab" v-on:click="sortHighPrice">높은가격순</a>
              </li>
            </ul>
          </div>

          <div class="cg" role="tabpanel">
            <!-- Area : Item List -->
            <ul class="itm_lst">
              <ItemCard
                v-bind:FilterArr="FilterArr[i]"
                v-for="(list, i) in FilterArr"
                :key="i"
                v-on:click.native="openLayer(i)"
              />
            </ul>

            <!-- Area : 검색 결과 없을 때 -->
            <p class="no_lst" v-if="noListArea">검색 결과가 없습니다. 재검색 해주시기 바랍니다.</p>

            <!-- Layer : Item Detail -->
            <div class="ly_item_dtl" v-if="LayerStatus">
              <div class="inr">
                <div class="thmb">
                  <img :src="FilterArr[clickedItem].img" :alt="FilterArr[clickedItem].title" />
                </div>
                <div class="inf">
                  <span class="brd">{{ FilterArr[clickedItem].brand }}</span>
                  <strong class="tt">{{ FilterArr[clickedItem].title }}</strong>

                  <!-- 가격 영역 -->
                  <div class="dtl">
                    <div class="dtl_gr">
                      <span class="dtl_tt">판매가</span>
                      <div class="dtl_con">
                        <span
                          class="prc_sell"
                        >{{ FilterArr[clickedItem].beforePrice.toLocaleString() }}원</span>
                      </div>
                    </div>
                    <div class="dtl_gr">
                      <span class="dtl_tt">할인가</span>
                      <div class="dtl_con">
                        <span class="prc_dc">{{ FilterArr[clickedItem].price.toLocaleString() }}원</span>
                      </div>
                    </div>
                    <div class="dtl_gr">
                      <div class="dtl_gr_ls">
                        <span class="dtl_tt">적립금</span>
                        <div class="dtl_con">
                          <span
                            class="prc"
                          >{{ Math.floor(FilterArr[clickedItem].price * 0.02).toLocaleString() }}원</span>
                          <span class="dsc">(적립금으로 상품을 결제할 경우 적립 제외)</span>
                        </div>
                      </div>
                      <div class="dtl_gr_ls">
                        <span class="dtl_tt">배송비</span>
                        <div class="dtl_con">
                          <span class="prc">2,500원</span>
                          <p class="dsc">(적립금으로 상품을 결제할 경우 적립 제외)</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div class="opt">
                    <div class="ctrl_num">
                      <button type="button" v-on:click="ctrlDecrease">수량 감소</button>
                      <input type="number" value="1" v-model="ctrlNum" />
                      <button type="button" class="bt_up" v-on:click="ctrlIncrease">수량 증가</button>
                    </div>
                    <span
                      class="opt_prc"
                    >{{ (FilterArr[clickedItem].price * ctrlNum).toLocaleString() }}원</span>
                  </div>

                  <div class="total">
                    <span class="txt">
                      총 합계
                      <em>{{ (FilterArr[clickedItem].price * ctrlNum).toLocaleString() }}</em>원
                    </span>
                  </div>

                  <div class="bt_area">
                    <button type="button">장바구니</button>
                    <button type="button" class="bt_buy">구매하기</button>
                  </div>
                </div>

                <button type="button" class="bt_clse" v-on:click="closeLayer">Close Layer</button>
              </div>
            </div>
            <!-- // Layer : Item Detail -->
          </div>
        </div>
      </div>
    </div>

    <footer class="syshp_fg">
      <div class="syshp_inr">
        <div class="faq">
          <h2 class="tt">삼양맛샵 고객센터</h2>
          <strong class="num">000ㆍ000ㆍ0000</strong>
          <p class="time">AM 9:30 ~ PM 05:30 LUNCH TIME PM 12:00~PM 01:00 / 토, 일 공휴일 휴무</p>
        </div>
        <div class="inf">
          <div class="lst">
            <span>상호명 :삼양식품㈜</span>
            <span>대표자 :김현진</span>
            <span>개인정보책임자 :김현진</span>
            <span>주소 :서울특별시 한강 이남 어딘가 (삼양식품)</span>
            <span>이메일 :92729@naver.com</span>
            <span>반품 주소지 :반품은 살짝 곤란해서 안 받습니다.</span>
            <span>사업자등록번호 :123456789</span>
            <span>통신판매업 신고번호 :2020-서울봉천-0000</span>
          </div>
          <ul class="mark">
            <li class="ssl">SSL 보안 확인</li>
            <li class="ini">INIPAY 유효성 확인</li>
            <li class="esc">ESCROW INIPAY 유효성 확인</li>
          </ul>
          <p class="dsc">COPYRIGHT ⓒ 삼양맛샵 / 위 페이지는 삼양맛샵 페이지의 COPY 페이지 입니다.</p>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
import Items from "./items.js";
import ItemCard from "./components/ItemCard.vue";

export default {
  name: "App",
  data() {
    return {
      ItemList: Items,
      ItemListOrg: [...Items],
      typeItem: "", // 검색한 단어
      searchStatus: 1,
      bnrImg: require("@/assets/img/bnr_all.jpg"),
      bnrImgDsc: "삼양맛샵 앱을 다운 받으세요!",
      FilterArr: Items, // 필터처리된 상품
      ItemNum: Items.length,
      LayerStatus: false,
      noListArea: false,  // 검색 리스트가 없을 경우
      clickedItem: 1,
      ctrlNum: 1
    };
  },
  components: {
    ItemCard
  },
  methods: {
    // tab 효과
    tabEffect($param) {
      // 탭 is_on 효과
      var tabinit = document.querySelectorAll($param + " li");
      for (var k = 0; k < tabinit.length; k++) {
        tabinit[k].className = "";
      }
      var eventNow = event.target.parentNode;
      eventNow.className = "is_on";
    },

    // 검색용 공통 함수
    formSearch(num) {
      event.preventDefault();
      var searchIpt = document.querySelectorAll('input[data-func="searchIpt"]');
      this.typeItem = searchIpt[num].value;

      if (this.typeItem == "") {
        alert("검색어를 입력해주세요");
        return false;
      } else {
        this.searchStatus = 2;

        // org값 초기화
        this.ItemListOrg = [...this.ItemList];
        this.FilterArr = this.ItemListOrg;

        var searchResult = this.FilterArr.filter(el => {
          return el.title.indexOf(this.typeItem) != -1;
        });

        // 검색결과가 없을 때
        if(searchResult == 0){
          this.noListArea = true;
        }else{
          this.noListArea = false;
        }

        this.FilterArr = searchResult;
        this.ItemNum = this.FilterArr.length;

        // 검색창 초기화
        for (var i = 0; i < searchIpt.length; i++) {
          searchIpt[i].value = "";
        }
      }
    },

    // Items Filter
    commonFilter($param) {
      this.tabEffect("#sortAllTab");

      this.FilterArr = [];

      var FilterItems = this.ItemList.filter(x => {
        return x.type == $param;
      });
      for (var i = 0; i < FilterItems.length; i++) {
        this.FilterArr.unshift(FilterItems[i]);
      }

      this.ItemNum = this.FilterArr.length;
      this.ItemListOrg = [...this.FilterArr];
      this.bnrImgDsc = $param;

      var sortTab = document.querySelectorAll("#sortItems li");
      for (var j = 0; j < sortTab.length; j++) {
        sortTab[j].className = "";
      }
      var sortTabFirst = sortTab[0];
      sortTabFirst.className = "is_on";

      if ($param == "봉지면") {
        this.bnrImg =
          "https://www.sydeliciousshop.com/resources/category/201911/n_LtGoydSumH_JkHSSCpKg.jpg";
      } else if ($param == "용기면") {
        this.bnrImg =
          "https://www.sydeliciousshop.com/resources/category/201911/pgc9DDGcSDq55_aNRZMZJg.jpg";
      } else if ($param == "스낵") {
        this.bnrImg =
          "https://www.sydeliciousshop.com/resources/category/201911/Vj2GwTB9S!22EjbwQFJ8Xg.jpg";
      } else if ($param == "디저트/간편식") {
        this.bnrImg =
          "https://www.sydeliciousshop.com/resources/category/201911/VfaGcaR9S6yNoHcANJSqAA.jpg";
      }
    },

    // 전체보기 필터
    AllFilter() {
      // tab
      this.tabEffect("#sortAllTab");

      this.FilterArr = this.ItemList;
      this.ItemNum = this.ItemList.length;
      this.ItemListOrg = [...this.ItemList];
      this.bnrImg = require("@/assets/img/bnr_all.jpg");
      this.bnrImgDsc = "삼양맛샵 앱을 다운 받으세요!";
      this.noListArea = false;
    },

    // About Sort
    sortDate() {
      this.FilterArr.sort(function(a, b) {
        return a.num - b.num;
      });
    },
    sortName() {
      this.FilterArr.sort(function(a, b) {
        return a.title < b.title ? -1 : a.title > b.title ? 1 : 0;
      });
    },
    sortLowPrice() {
      this.FilterArr.sort(function(a, b) {
        return a.price - b.price;
      });
    },
    sortHighPrice() {
      this.FilterArr.sort(function(a, b) {
        return b.price - a.price;
      });
    },

    // About Layer
    openLayer($param) {
      event.preventDefault();
      this.LayerStatus = true;
      this.clickedItem = $param;
      var body = document.getElementsByTagName("body")[0];
      body.classList.add("scroll_fix");
    },
    closeLayer() {
      this.LayerStatus = false;
      var body = document.getElementsByTagName("body")[0];
      body.classList.remove("scroll_fix");
      this.ctrlNum = 1;
    },

    // About CtrlNum
    ctrlDecrease() {
      if (this.ctrlNum > 1) {
        this.ctrlNum = this.ctrlNum - 1;
      }
    },
    ctrlIncrease() {
      this.ctrlNum = this.ctrlNum + 1;
    },

    // 로고 클릭시 홈화면 처리
    pageInit() {
      this.FilterArr = this.ItemList;
      this.ItemNum = this.FilterArr.length;
      this.searchStatus = 1;
      this.AllFilter();
    }
  },
  mounted() {
    // 정렬 선택 레이어
    var btsort = document.getElementById("btLayerSort");
    btsort.addEventListener("click", function(e) {
      e.preventDefault();
      var clickNow = this.getAttribute("href");
      var layerNow = document.querySelector(clickNow);

      if (layerNow.style.display == "block") {
        layerNow.style.display = "none";
      } else {
        layerNow.style.display = "block";
      }
    });

    // 정렬 탭 is_on
    var sortTab = document.querySelectorAll("#sortItems li");
    for (var k = 0; k < sortTab.length; k++) {
      sortTab[k].addEventListener("click", function() {
        for (var j = 0; j < sortTab.length; j++) {
          sortTab[j].className = "";
        }
        var eventNow = event.target.parentNode;
        eventNow.className = "is_on";
      });
    }
  }
};
</script>

<style lang="scss">
@import "./assets/scss/common",
        "./assets/scss/basic";

.syshp{
  $pnt-color:#ff661b;

  // .syshp_inr
  &_inr{margin:0 auto; padding:0 10px; max-width:1170px;}

  // .syshp_hg
  &_hg{
    padding-top:34px; text-align:center;
    .syshp_inr{position:relative;}
    .logo{display:inline-block;}
    .srch{
      position:absolute; right:0; bottom:0;
      fieldset{position:relative; border-bottom:2px solid $pnt-color; padding-right:30px; width:330px; box-sizing:border-box;}
      input{border:0; padding:0 22px; width:100%; height:50px; box-sizing:border-box; outline:transparent; font-size:24px;
        &::-webkit-input-placeholder,
        &::-moz-placeholder,
        &:-ms-input-placeholder,
        &::placeholder{color:#e8e4e4;}
      }
      button{
        position:absolute; top:50%; right:0; margin-top:-14px; width:28px; height:28px; text-indent:-9999px; outline:transparent;
        @include background($img:ic_syshp, $pos:0 0);
      }
    }
  }

  // .syshp_cg
  &_cg{padding:85px 0 20px;}

  // .syshp_fg
  &_fg{
    background:#f0f0f0;
    .faq{
      padding:40px 0;
      .tt{margin-bottom:8px; color:#555; font-size:19px; font-weight:normal}
      .num{display:inline-block; color:#444; font-size:19px; vertical-align:middle}
      .time{margin-left:15px; display:inline-block; color:#999; font-size:15px; letter-spacing:-0.4px; vertical-align:middle}
    }
    .inf{
      position:relative; border-top:1px solid #d2d2d2; padding:40px 0;
      .lst{
        width:590px; color:#888; font-size:0;
        span{display:inline-block; margin:5px 24px 5px 0; font-size:14px; letter-spacing:-0.4px}
      }
      .mark{
        position:absolute; right:0; top:40px; overflow:hidden;
        li{
          float:left; width:46px; height:52px; text-indent:-9999px;
          @include background($img:ic_mark, $bsize:138px auto);
        }
        .ssl{background-position:0 0}
        .ini{background-position:-46px 0}
        .esc{background-position:-92px 0}
      }
      .dsc{position:absolute; bottom:40px; right:0; color:#777; letter-spacing:-0.4px}
    }
  }

  // .syshp_rslt : 검색결과
  &_rslt{
    margin:30px auto 80px; padding:0 15px; max-width:860px; text-align:center;
    .sbj{
      font-size:31px; letter-spacing:-0.4px;
      em{color:$pnt-color;}
    }
    .dsc{margin-top:15px; color:#555; font-size:18px;}
    .srch{
      fieldset{position:relative; margin-top:45px; border:1px solid $pnt-color; padding-right:120px; height:58px; font-size:16px;}
      input{border:0; padding:0 20px; width:100%; height:100%; color:#777; text-align:left; box-sizing:border-box; outline:transparent;}
      button{position:absolute; top:0; right:0; bottom:0; background:$pnt-color; width:120px; color:#fff; font-weight:bold; outline:transparent;}
    }
  }

  // .syshp_tb
  &_tb{
    text-align:center; font-size:0;
    li{
      display:inline-block; position:relative; padding:0 40px; font-size:15px; letter-spacing:-0.5px;
      + li:before{position:absolute; left:0; top:50%; margin-top:-5px; background:#e2e2e2; width:1px; height:10px; content:""}
    }
    .is_on a{color:#000;}
    a{color:#888;}
  }

  // .syshp_bnr
  &_bnr{
    margin-top:25px;
    img{width:auto; height:auto; max-width:100%; max-height:100%;}
  }

  // .syshp_dtl
  &_dtl{
    margin-top:40px;
    .hd{
      position:relative; border-bottom:1px solid #e2e2e2; padding-bottom:18px;
      &:after{@include clearfix;}
    }
    .bt_lysort{
      display:none; float:right; width:28px; height:28px; text-indent:-9999px;
      @include background($img:ic_syshp, $pos:-87px 0);
    }
    .sort{
      float:right;
      li{
        position:relative; display:inline-block; font-size:13px;
        + li:before{position:absolute; left:0; top:50%; margin-top:-5px; background:#e2e2e2; width:1px; height:10px; content:""}
      }
      .is_on a{color:#000;}
      a{display:block; padding:0 24px; color:#888;}
    }
    .prd_num{
      display:inline-block;
      em{color:#ff6639;}
    }
    .cg{padding-top:40px; overflow:hidden;}
    .itm_lst{
      margin-right:-15px; overflow:hidden;
      li{float:left; margin:0 15px 100px 0; width:calc(33.3% - 15px)}
      .thmb{
        position:relative; padding-top:100%; background:#f2f2f2; box-sizing:border-box;
        img{position:absolute; top:0; left:0; right:0; bottom:0; margin:auto; width:auto; height:auto; max-width:100%; max-height:100%}
      }
      .inf{padding-top:18px}
      .brd{color:#888; font-size:18px}
      .tt{
        font-size:19px; letter-spacing:-0.4px;
        @include text-ellipsis
      }
      .dtl{
        margin-top:16px; overflow:hidden;
        del{color:#888; font-size:18px}
        .prc{margin-left:15px; font-size:22px;}
        .btn{
          float:right;
          a{
            display:inline-block; margin-right:12px; width:28px; height:28px; text-indent:-9999px;
            @include background($img:ic_syshp);
          }
          .bt_cart{background-position:-29px 0;}
          .bt_fvrt{background-position:-58px 0;}
        }
      }
    }
    .no_lst{margin-bottom:20px; padding:70px 15px; background:#f9f9f9; color:#999; font-size:15px; text-align:center;}
  }

  // .ly_item_dtl
  @at-root{
    .ly_item_dtl{
      position:fixed; top:0; left:0; right:0; bottom:0; background:rgba(0, 0, 0, 0.2); text-align:center; z-index:100;
      &:after{display:inline-block; height:100%; vertical-align:middle; content:""}
      .inr{display:inline-block; position:relative; padding:40px; background:#fff; width:90%; max-width:1170px; max-height:90%; font-size:0; box-sizing:border-box; overflow-y:auto; vertical-align:middle;}
      .thmb{
        display:inline-block; padding-top:15px; width:45%; vertical-align:top;
        img{width:auto; height:auto; max-width:100%; max-height:100%}
      }
      .inf{
        display:inline-block; padding-left:5%; width:50%; vertical-align:top; box-sizing:border-box; font-size:14px; text-align:left;
        .dsc{color:#888;}
      }
      .brd{display:block; color:#888; font-size:1.43em;}
      .tt{display:block; margin-top:14px; font-size:1.78em;}
      .dtl{
        margin-top:20px; border:solid #aaa; border-width:1px 0;
        // .dtl_gr
        &_gr{
          display:table; border-top:1px solid #e2e2e2; padding:20px 0; width:100%; table-layout:fixed;
          &:first-child{border-top:0;}
          // 더 깊은 depth : border처리 없는 영역
          &_ls{
            display:table; width:100%; table-layout:fixed;
            + .dtl_gr_ls{margin-top:24px;}
            .dtl_tt,
            .dtl_con{vertical-align:top;}
          }
        }
        // .dtl_tt
        &_tt{display:table-cell; padding-right:15px; width:100px; box-sizing:border-box; color:#555; font-weight:bold; vertical-align:middle;}
        // .dtl_con
        &_con{display:table-cell; vertical-align:middle;}
        .prc{ 
          // .prc_sell
          &_sell{font-size:1.29em;}
          // .prc_dc
          &_dc{font-size:1.64em; font-weight:bold;}
        }
      }
      .opt{
        margin-top:30px; padding:25px 20px; background:#f5f5f5;
        &:after{@include clearfix;}
        // 수량 조정 버튼
        @at-root .ctrl_num{
          display:inline-block; border:1px solid #e2e2e2; height:28px; font-size:0;
          input{
            display:inline-block; border:solid #e2e2e2; border-width:0 1px; width:40px; height:100%; vertical-align:middle; font-size:12px; text-align:center; outline:transparent;
            &::-webkit-inner-spin-button,
            &::-webkit-outer-spin-button{-webkit-appearance:none; -moz-appearance:none; appearance:none;}
          }
          button{
            display:inline-block; position:relative; background:#fff; width:28px; height:100%; vertical-align:middle; font-size:0; outline:transparent; text-align:center;
            &:before{display:inline-block; background:#111; width:16px; height:1px; content:"";}
          }
          .bt_up:after{display:inline-block; position:absolute; top:50%; left:50%; margin:-8px 0 0 0; background:#111; width:1px; height:16px; content:"";}
        }
        // .opt_prc
        &_prc{float:right; font-size:1.5em;}
      }
      .total{
        margin-top:25px; text-align:right;
        .txt{
          color:$pnt-color; font-size:1.57em;
          em{font-weight:bold; font-size:1.28em;}
        }
      }
      .bt_area{
        margin-top:20px; text-align:right; font-size:0;
        button{display:inline-block; margin-left:10px; border:1px solid $pnt-color; width:40%; height:60px; line-height:60px; box-sizing:border-box; color:$pnt-color; font-size:17px; text-align:center;}
        .bt_buy{background:$pnt-color; color:#fff; font-weight:bold;}
      }
      .bt_clse{
        position:absolute; top:10px; right:10px; width:50px; height:50px; font-size:0;
        &:before,
        &:after{display:inline-block; background:#000; width:1px; height:25px; transform:rotate(45deg); content:""}
        &:after{margin-left:-1px; transform:rotate(-45deg);}
      }
    } // .ly_item_dtl
  }
}

@media only screen and (max-width:980px){
  .syshp{
      // .syshp_hg
      &_hg{
        .logo{display:block;}
        .srch{
          position:static;
          fieldset{margin:40px auto 0;}
        }
      }
      // .syshp_fg
      &_fg{
        .faq .time{display:block; margin:10px 0 0;}
      }
  }
}

@media only screen and (min-width:415px) and (max-width:980px){
  .syshp{
    // .syshp_dtl
    &_dtl{
      .itm_lst li{margin-bottom:60px; width:calc(50% - 15px);}
    }
  }
}

/* ~ Tablet */
@media only screen and (max-width:768px){
  .syshp{
    // .syshp_tb
    &_tb{
      li{
        display:block; margin-top:-1px;
        + li:before{display:none;}
      }
      a{display:block; border:1px solid #aaa; padding:10px 0;}
      .is_on a{background:#f8f8f8; font-weight:bold;}
    }

    // .syshp_dtl
    &_dtl{
      .hd{padding-bottom:10px;}
      .cg{padding-top:20px;}
      .bt_lysort{display:block;}
      .sort{
        display:none; position:absolute; top:36px; right:0; background:#fff; width:250px; z-index:1; box-shadow:0 0 3px rgba(0,0,0,.2);
        li{
          display:block; text-align:center;
          + li:before{display:none;}
        }
        a{padding:15px 24px;}
        .is_on a{background:#f8f8f8; font-weight:bold;}
      }
      .itm_lst{
        .dtl .btn{display:none;}
      }
      .no_lst{margin-bottom:0;}
    }

    // .syshp_fg
    &_fg{
      .inf{
        .lst{width:auto;}
        .mark{position:static; margin-top:10px;}
        .dsc{position:static; margin-top:5px;}
      }
    }
  }
  .ly_item_dtl{
    .inr{padding:40px 20px 20px;}
    .thmb{display:block; width:auto;}
    .inf{display:block; margin-top:20px; padding-left:0; width:auto;}
    .bt_clse{position:fixed; top:12px; right:50%; margin-right:-25px; border-radius:50%; background:#fff; box-shadow:0 0 3px rgba(0,0,0,.3);}
  }
}

/* ~ Mobile */
@media only screen and (max-width:414px){
  .syshp{
    // .syshp_hg
    &_hg{
      .srch{
        fieldset{width:100%;}
        input{font-size:16px;}
      }
    }

    // .syshp_cg
    &_cg{
      padding-top:40px;
    }

    // .syshp_rslt
    &_rslt{
      .sbj{font-size:22px;}
      .dsc{font-size:14px;}
      .srch{
        margin-top:30px; padding-right:80px; height:40px;
        button{width:80px;}
      }
    }

    // .syshp_tb
    &_tb{
      li{padding:0 10px;}
    }

    // .syshp_bnr
    &_bnr{display:none;}

    // .syshp_dtl
    &_dtl{
      .itm_lst{
        margin-right:0;
        li{float:none; margin:0 0 50px; width:100%;}
      }
    }
    
  }
  .ly_item_dtl{
    .inf{font-size:12px;}
    .bt_area button{display:block; margin:10px 0 0; width:100%;}
  }
}
</style>
