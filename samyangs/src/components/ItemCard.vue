<template>
    <li>
      <a href="#">
        <div class="thmb">
          <img :src="Items.img" width="380" height="380" :alt="Items.title" />
        </div>
        <div class="inf">
          <span class="brd">[{{ Items.brand }}]</span>
          <p class="tt">{{ Items.title }}</p>
          <div class="dtl">
            <del>{{ Items.beforePrice }}원</del>
            <strong class="prc">{{ Items.price }}원</strong>
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
    Items: Object
  }
};
</script>

<style>
</style>