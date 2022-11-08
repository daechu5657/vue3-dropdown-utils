<template>
  <div class="container">
    <button class="button" @click="clickBtn()">
      <span class="text">{{ text }}</span>
      <custom-image
        :activeDropDown="activeDropDown"
        :img="img"
        :effect="effect"
      />
    </button>
    <dropdown
      :items="items"
      :activeDropDown="activeDropDown"
      @hasItem="hasItem"
      @inActiveDropDown="inActiveDropDown"
      @sendInActiveDropDown="inActiveDropDown"
    />
  </div>
</template>

<script setup lang="ts">
import { ref, PropType, onBeforeMount } from "vue";
import dropdown from "./dropdown.vue";
import customImage from "./image.vue";
const activeDropDown = ref(false);
const text = ref("1");
const props = defineProps({
  items: { type: Array as PropType<Array<string>>, default: [] },
  img: { type: String },
  effect: { type: Number },
});
const emits = defineEmits(["returnItemData"]);

const clickBtn = () => {
  event?.stopPropagation();
  activeDropDown.value = !activeDropDown.value;
};
const hasItem = (content: string) => {
  text.value = content;
  emits("returnItemData", content);
};
const inActiveDropDown = () => {
  activeDropDown.value = false;
};

onBeforeMount(() => {
  text.value = props?.items[0];
});
</script>

<style lang="scss">
button:focus {
  border: none;
  outline: none;
}
.container {
  position: relative;
  border-radius: 5px;
  display: inline-block;
  min-width: 100px;
}
.button {
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  position: relative;
  color: #000;
  padding: 5px 10px;
  outline: none;
  border: 0;
  font-size: 18px;
  background-color: #fff;
}
.text {
  position: relative;
  margin: 0 20px;
  line-height: 18px;
}
</style>
