<template>
  <div id="app">
    <header class="syshp_hg">
      <div class="syshp_inr">
        <h1 class="logo">
          <a href="#">
            <img
              src="./assets/img/logo_samyang.png"
              width="161"
              height="120"
              alt="삼양맛샵, 삼양식품 공식 온라인 쇼핑몰"
            />
          </a>
        </h1>
        <div class="sd_bnr">
          <a href="#">
            <img
              src="./assets/img/bnr_membership.jpg"
              width="330"
              height="114"
              alt="새롭게, 더 특별하게! 맛샵멤버십"
            />
          </a>
        </div>
        <div class="srch">
          <input type="text" placeholder="사는 맛을 찾아보세요" />
          <button>검색</button>
        </div>
      </div>
    </header>

    <ItemArea :ItemList="ItemList" />

    <footer class="syshp_fg">
      <div class="syshp_inr">
        <div class="faq">
          <h2 class="tt">삼양맛샵 고객센터</h2>
          <strong class="num">000ㆍ000ㆍ0000</strong>
          <p class="time">AM 9:30 ~ PM 05:30 LUNCH TIME PM 12:00~PM 01:00 / 토, 일 공휴일 휴무</p>
        </div>
        <div class="inf">
          <div class="lst">
            <span>상호명 : 삼양식품㈜</span>
            <span>대표자 : 김현진</span>
            <span>개인정보책임자 : 김현진</span>
            <span>주소 : 서울특별시 한강 이남 어딘가 (삼양식품)</span>
            <span>이메일 : 92729@naver.com</span>
            <span>반품 주소지 : 반품은 살짝 곤란해서 안 받습니다.</span>
            <span>사업자등록번호 : 123456789</span>
            <span>통신판매업 신고번호 : 2020-서울봉천-0000</span>
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
import ItemArea from "./components/ItemArea.vue";
import Items from "./items.js";

export default {
  name: "App",
  data() {
    return {
      ItemList: Items,
    };
  },
  components: {
    ItemArea
  },
  methods: {}
};
</script>

<style lang="scss">
@import "./assets/scss/common", "./assets/scss/basic";

.syshp {
  $pnt-color: #ff661b;

  // .syshp_inr
  &_inr {
    margin: 0 auto;
    max-width: 1170px;
  }

  // .syshp_hg
  &_hg {
    padding-top: 34px;
    text-align: center;
    .syshp_inr:after {
      @include clearfix;
    }
    .logo {
      display: inline-block;
    }
    .sd_bnr {
      float: left;
    }
    .srch {
      position: relative;
      float: right;
      border-bottom: 2px solid $pnt-color;
      margin-top: 70px;
      padding-right: 30px;
      width: 330px;
      box-sizing: border-box;
      input {
        border: 0;
        padding: 0 22px;
        width: 100%;
        height: 50px;
        box-sizing: border-box;
        outline: transparent;
        font-size: 24px;
        &::-webkit-input-placeholder,
        &::-moz-placeholder,
        &:-ms-input-placeholder,
        &::placeholder {
          color: #e8e4e4;
        }
      }
      button {
        position: absolute;
        top: 50%;
        right: 0;
        margin-top: -14px;
        width: 28px;
        height: 28px;
        text-indent: -9999px;
        outline: transparent;
        @include background($img: ic_syshp, $pos: 0 0);
      }
    }
  }

  // .syshp_cg
  &_cg {
    padding: 85px 0 20px;
  }

  // .syshp_fg
  &_fg {
    background: #f0f0f0;
    .faq {
      padding: 40px 0;
      .tt {
        margin-bottom: 8px;
        color: #555;
        font-size: 19px;
        font-weight: normal;
      }
      .num {
        display: inline-block;
        color: #444;
        font-size: 19px;
        vertical-align: middle;
      }
      .time {
        margin-left: 15px;
        display: inline-block;
        color: #999;
        font-size: 15px;
        letter-spacing: -0.4px;
        vertical-align: middle;
      }
    }
    .inf {
      position: relative;
      border-top: 1px solid #d2d2d2;
      padding: 40px 0;
      .lst {
        width: 590px;
        color: #888;
        font-size: 0;
        span {
          display: inline-block;
          margin: 5px 24px 5px 0;
          font-size: 14px;
          letter-spacing: -0.4px;
        }
      }
      .mark {
        position: absolute;
        right: 0;
        top: 40px;
        overflow: hidden;
        li {
          float: left;
          width: 46px;
          height: 52px;
          text-indent: -9999px;
          @include background($img: ic_mark, $bsize: 138px auto);
        }
        .ssl {
          background-position: 0 0;
        }
        .ini {
          background-position: -46px 0;
        }
        .esc {
          background-position: -92px 0;
        }
      }
      .dsc {
        position: absolute;
        bottom: 40px;
        right: 0;
        color: #777;
        letter-spacing: -0.4px;
      }
    }
  }
}
</style>
