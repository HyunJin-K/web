<template>
  <li>
    <a href="#">
      <div class="thmb">
        <img :src="FilterArr.img" width="380" height="380" :alt="FilterArr.title" />
      </div>
      <div class="inf">
        <span class="brd">[{{ FilterArr.brand }}]</span>
        <p class="tt">{{ FilterArr.title }}</p>
        <div class="dtl">
          <del>{{ FilterArr.beforePrice.toLocaleString() }}원</del>
          <strong class="prc">{{ FilterArr.price.toLocaleString() }}원</strong>
          <div class="btn">
            <a href="#" class="bt_cart">카트담기</a>
            <a href="#" class="bt_fvrt">즐겨찾기</a>
          </div>
        </div>
      </div>
    </a>
  </li>
</template>

<script>
export default {
  name: "ItemCard",
  props: {
    FilterArr: Object
  }
};
</script>

<style>
</style>