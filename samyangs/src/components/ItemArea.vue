<template>
  <div class="syshp_cg">
    <div class="syshp_inr">
      <ul class="syshp_tb">
        <li class="is_on">
          <a href="#">전체보기</a>
        </li>
        <li>
          <a href="#">봉지면</a>
        </li>
        <li>
          <a href="#">용기면</a>
        </li>
        <li>
          <a href="#">스낵</a>
        </li>
        <li>
          <a href="#">디저트/간편식</a>
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
            <em>00</em>개
          </span>
          <ul class="sort">
            <li>
              <a href="#">상품명순</a>
            </li>
            <li>
              <a href="#">낮은가격순</a>
            </li>
            <li>
              <a href="#">높은가격순</a>
            </li>
          </ul>
        </div>

        <div class="cg">
          <ul class="itm_lst">
            <ItemCard v-bind:Items="Items[i]" v-for="(list, i) in Items" :key="i" />
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ItemCard from "./ItemCard.vue";

export default {
  name: "ItemArea",
  data(){
    return{
      bnrImg : '',
      bnrImgDsc : '',
    }
  },
  components: {
    ItemCard
  },
  props: {
    Items: Array
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
      color: #222;
    }
    a {
      color: #666;
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
        color: #333;
      }
      a {
        color: #777;
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
        letter-spacing:-0.4px;
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