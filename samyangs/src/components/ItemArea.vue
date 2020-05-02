<template>
  <div class="syshp_cg">
    <div class="syshp_inr">
      <ul class="syshp_tb" id="sortAllTab" role="tablist">
        <li class="is_on">
          <a role="tab" v-on:click="tabAll">전체보기</a>
        </li>
        <li>
          <a role="tab" v-on:click="tabRamen1">봉지면</a>
        </li>
        <li>
          <a role="tab" v-on:click="tabRamen2">용기면</a>
        </li>
        <li>
          <a role="tab" v-on:click="tabSnack">스낵</a>
        </li>
        <li>
          <a role="tab" v-on:click="tabDessert">디저트/간편식</a>
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
              v-bind:ItemList="ItemList[i]"
              v-for="(list, i) in ItemList"
              :key="i"
              v-on:click.native="openLayer(i)"
            />
          </ul>

          <!-- Layer : Item Detail -->
          <div class="ly_item_dtl" v-if="LayerStatus">
            <div class="inr">
              <div class="thmb">
                <img :src="ItemList[clickedItem].img" :alt="ItemList[clickedItem].title" />
              </div>
              <div class="inf">
                <span class="brd">{{ ItemList[clickedItem].brand }}</span>
                <strong class="tt">{{ ItemList[clickedItem].title }}</strong>

                <!-- 가격 영역 -->
                <div class="dtl">
                  <div class="dtl_gr">
                    <span class="dtl_tt">판매가</span>
                    <div class="dtl_con">
                      <span class="prc_sell">{{ ItemList[clickedItem].beforePrice.toLocaleString() }}원</span>
                    </div>
                  </div>
                  <div class="dtl_gr">
                    <span class="dtl_tt">할인가</span>
                    <div class="dtl_con">
                      <span class="prc_dc">{{ ItemList[clickedItem].price.toLocaleString() }}원</span>
                    </div>
                  </div>
                  <div class="dtl_gr">
                    <div class="dtl_gr_ls">
                      <span class="dtl_tt">적립금</span>
                      <div class="dtl_con">
                        <span class="prc">{{ Math.floor(ItemList[clickedItem].price * 0.02).toLocaleString() }}원 </span>
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
                  <span class="opt_prc">{{ (ItemList[clickedItem].price * ctrlNum).toLocaleString() }}원</span>
                </div>

                <div class="total">
                  <span class="txt">
                    총 합계
                    <em>{{ (ItemList[clickedItem].price * ctrlNum).toLocaleString() }}</em>원
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
      ItemListOrg: [...this.ItemList],
      ItemFilter: [],
      LayerStatus: false,
      clickedItem: 1,
      ctrlNum: 1,
    };
  },
  components: {
    ItemCard
  },
  props: {
    ItemList: Array
  },
  methods: {
    // About Tab
    tabAll(){
      this.ItemList = this.ItemListOrg;
    },
    tabRamen1(){
      console.log(this.ItemList[1].type.includes('용기면'));
    },
    tabRamen2(){
    },
    tabSnack(){
    },
    tabDessert(){
    },

    // About Sort
    sortDate() {
      this.ItemList = [...this.ItemListOrg];
    },
    sortName() {
      this.ItemList.sort(function(a, b) {
        return a.title < b.title ? -1 : a.title > b.title ? 1 : 0;
      });
    },
    sortLowPrice() {
      this.ItemList.sort(function(a, b) {
        return a.price - b.price;
      });
    },
    sortHighPrice() {
      this.ItemList.sort(function(a, b) {
        return b.price - a.price;
      });
    },

    // About Layer
    openLayer($param) {
      event.preventDefault();
      this.LayerStatus = true;
      this.clickedItem = $param;
      var body = document.getElementsByTagName('body')[0];
      body.classList.add('scroll_fix');
    },
    closeLayer(){
      this.LayerStatus = false
      var body = document.getElementsByTagName('body')[0];
      body.classList.remove('scroll_fix');
      this.ctrlNum = 1;
    },

    // About CtrlNum
    ctrlDecrease(){
      if(this.ctrlNum > 1){
        this.ctrlNum = this.ctrlNum - 1;
      }
    },
    ctrlIncrease(){
      this.ctrlNum = this.ctrlNum + 1;
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

    // 정렬 선택 레이어
    var btsort = document.getElementById('btLayerSort');
    btsort.addEventListener('click', function(e){
      e.preventDefault();
      var clickNow = this.getAttribute('href');
      var layerNow = document.querySelector(clickNow);

      if(layerNow.style.display == 'block'){
        layerNow.style.display = 'none';
      }else{
        layerNow.style.display = 'block';
      }
      
    });
  }
};
</script>

<style>
</style>