<template>
  <li>
    <a href="#">
      <div class="thmb">
        <img :src="ItemList.img" width="380" height="380" :alt="ItemList.title" />
      </div>
      <div class="inf">
        <span class="brd">[{{ ItemList.brand }}]</span>
        <p class="tt">{{ ItemList.title }}</p>
        <div class="dtl">
          <del>{{ ItemList.beforePrice.toLocaleString() }}원</del>
          <strong class="prc">{{ ItemList.price.toLocaleString() }}원</strong>
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
    ItemList: Object
  }
};
</script>

<style>
</style>