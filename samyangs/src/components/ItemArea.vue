<template>
  <div class="syshp_cg">
    <div class="syshp_inr">
      <ul class="syshp_tb" id="sortAllTab" role="tablist">
        <li class="is_on">
          <a role="tab">전체보기</a>
        </li>
        <li>
          <a role="tab">봉지면</a>
        </li>
        <li>
          <a role="tab">용기면</a>
        </li>
        <li>
          <a role="tab">스낵</a>
        </li>
        <li>
          <a role="tab">디저트/간편식</a>
        </li>
      </ul>

      <div class="syshp_bnr">
        <img :src="bnrImg" :alt="bnrImgDsc" />
      </div>

      <div class="syshp_dtl">
        <h2 class="hide">상품 리스트</h2>
        <div class="hd">
          <span class="prd_num">
            상품
            <em>{{ItemNum}}</em>개
          </span>
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
            <ItemCard v-bind:ItemList="ItemList[i]" v-for="(list, i) in ItemList" :key="i" />
          </ul>

          <!-- Layer : Item Detail -->
          <div class="ly_item_dtl">
            <div class="inr">
              <div class="thmb">
                <img src="#" alt="">
              </div>
              <div class="inf">
                <span class="brd">브랜드</span>
                <strong class="tt">상품명</strong>

                <!-- 가격 영역 -->
                <div class="prc_area">
                  <div class="prc_gr">
                    <span class="prc_tt">판매가</span>
                    <div class="prc_dtl">
                      <span class="prc">가격</span>
                    </div>
                  </div>
                  <div class="prc_gr">
                    <span class="prc_tt">판매가</span>
                    <div class="prc_dtl">
                      <span class="prc">가격</span>
                    </div>
                  </div>
                  <div class="prc_gr">
                    <span class="prc_tt">판매가</span>
                    <div class="prc_dtl">
                      <span class="prc">가격</span>
                      <p class="dsc">(적립금으로 상품을 결제할 경우 적립 제외)</p>
                    </div>
                  </div>
                  <div class="prc_gr">
                    <span class="prc_tt">판매가</span>
                    <div class="prc_dtl">
                      <span class="prc">가격</span>
                      <p class="dsc">(적립금으로 상품을 결제할 경우 적립 제외)</p>
                    </div>
                  </div>
                </div>

                <div class="opt">
                  <div class="ctrl_num">
                    <button type="button">수량 감소</button>
                    <input type="number">
                    <button type="button">수량 증가</button>
                  </div>
                  <span class="prc">총가격</span>
                </div>

                <div class="total">
                  <span class="txt">
                    총 합계 <strong class="prc">총가격</strong>원
                  </span>
                </div>

                <div class="bt_area">
                  <button type="button">장바구니</button>
                  <button type="button">구매하기</button>
                </div>
              </div>
            </div>
          </div>
          <!-- // Layer : Item Detail -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ItemCard from "./ItemCard.vue";

export default {
  name: "ItemArea",
  data() {
    return {
      bnrImg: "",
      bnrImgDsc: "",
      ItemNum: this.ItemList.length,
      ItemListOrg: [...this.ItemList]
    };
  },
  components: {
    ItemCard
  },
  props: {
    ItemList: Array
  },
  methods: {
    sortDate(e) {
      e.preventDefault();
      this.ItemList = [...this.ItemListOrg];
    },
    sortName(e) {
      e.preventDefault();
      this.ItemList.sort(function(a, b) {
        return a.title < b.title ? -1 : a.title > b.title ? 1 : 0;
      });
    },
    sortLowPrice(e) {
      e.preventDefault();
      this.ItemList.sort(function(a, b) {
        return a.price - b.price;
      });
    },
    sortHighPrice(e) {
      e.preventDefault();
      this.ItemList.sort(function(a, b) {
        return b.price - a.price;
      });
    }
  },
  mounted() {
    // tab menu on effect
    function tabEffect($param) {
      var sortTab = document.getElementById($param);
      var sortTabLi = sortTab.getElementsByTagName("li");
      var sortTabLiBtn;

      for (var i = 0; i < sortTabLi.length; i++) {
        // a버튼
        sortTabLiBtn = sortTabLi[i].getElementsByTagName("a")[0];

        sortTabLiBtn.addEventListener("click", function(e) {
          e.preventDefault();
          for (var j = 0; j < sortTabLi.length; j++) {
            sortTabLi[j].classList.remove("is_on");
          }
          this.parentNode.classList.add("is_on");
        });
      }
    }
    tabEffect("sortItems");
    tabEffect("sortAllTab");
  }
};
</script>

<style lang="scss">
@import "../assets/scss/basic";

.syshp {
  // .syshp_tb
  &_tb {
    text-align: center;
    font-size: 0;
    li {
      display: inline-block;
      position: relative;
      padding: 0 40px;
      font-size: 15px;
      letter-spacing: -0.5px;
      + li:before {
        position: absolute;
        left: 0;
        top: 50%;
        margin-top: -5px;
        background: #e2e2e2;
        width: 1px;
        height: 10px;
        content: "";
      }
    }
    .is_on a {
      color: #000;
    }
    a {
      color: #888;
    }
  }
  // .syshp_bnr
  &_bnr {
    margin-top: 18px;
  }
  // .syshp_dtl
  &_dtl {
    margin-top: 40px;
    .hd {
      border-bottom: 1px solid #e2e2e2;
      padding-bottom: 18px;
    }
    .sort {
      float: right;
      overflow: hidden;
      li {
        position: relative;
        float: left;
        padding: 0 24px;
        font-size: 13px;
        + li:before {
          position: absolute;
          left: 0;
          top: 50%;
          margin-top: -5px;
          background: #e2e2e2;
          width: 1px;
          height: 10px;
          content: "";
        }
      }
      .is_on a {
        color: #000;
      }
      a {
        color: #888;
      }
    }
    .prd_num {
      display: inline-block;
      em {
        color: #ff6639;
      }
    }
    .cg {
      padding-top: 40px;
    }
    .itm_lst {
      margin-right: -15px;
      overflow: hidden;
      li {
        float: left;
        margin: 0 15px 100px 0;
        width: calc(33.3% - 15px);
      }
      .thmb {
        position: relative;
        padding-top: 100%;
        background: #f2f2f2;
        box-sizing: border-box;
        img {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          margin: auto;
          width: auto;
          height: auto;
          max-width: 100%;
          max-height: 100%;
        }
      }
      .inf {
        padding-top: 18px;
      }
      .brd {
        color: #888;
        font-size: 18px;
      }
      .tt {
        font-size: 19px;
        letter-spacing: -0.4px;
        @include text-ellipsis;
      }
      .dtl {
        margin-top: 16px;
        overflow: hidden;
        del {
          color: #888;
          font-size: 18px;
        }
        .prc {
          margin-left: 15px;
          font-size: 22px;
        }
        .btn {
          float: right;
          a {
            display: inline-block;
            margin: 0 12px;
            width: 28px;
            height: 28px;
            text-indent: -9999px;
            @include background($img: ic_syshp);
          }
          .bt_cart {
            background-position: -29px 0;
          }
          .bt_fvrt {
            background-position: -58px 0;
          }
        }
      }
    }
  }
}
</style>