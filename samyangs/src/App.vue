<template>
  <div id="app">
    <header class="syshp_hg">
      <div class="syshp_inr">
        <h1 class="logo">
          <a href="#">
            <img
              src="@/assets/img/logo_samyang.png"
              width="161"
              height="120"
              alt="삼양맛샵, 삼양식품 공식 온라인 쇼핑몰"
            />
          </a>
        </h1>
        <div class="sd_bnr">
          <a href="#">
            <img
              src="@/assets/img/bnr_membership.jpg"
              width="330"
              height="114"
              alt="새롭게, 더 특별하게! 맛샵멤버십"
            />
          </a>
        </div>
        <div class="srch">
          <input type="text" placeholder="사는 맛을 찾아보세요" v-model="typeItem" />
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
import ItemArea from "./components/ItemArea.vue";
import Items from "./items.js";

export default {
  name: "App",
  data() {
    return {
      ItemList: Items,
      typeItem : '',
    };
  },
  components: {
    ItemArea
  },
  methods: {}
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
    .syshp_inr:after{
      @include clearfix;
    }
    .logo{display:inline-block;}
    .sd_bnr{float:left;}
    .srch{
      position:relative; float:right; border-bottom:2px solid $pnt-color; margin-top:70px; padding-right:30px; width:330px; box-sizing:border-box;
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
        .sd_bnr{display:none;}
        .srch{float:none; margin:40px auto 0;}
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
        width:100%;
        input{font-size:16px;}
      }
    }

    // .syshp_cg
    &_cg{
      padding-top:40px;
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
