<template>
  <div
    class="vue3-dropdown-container"
    :class="{ 'active-dropdown': propsActiveDropDown }"
  >
    <div
      class="vue3-dropdown-item-wrap"
      :class="{ 'clicked-items': content === clickedItem }"
      v-for="(content, index) in items"
      :key="index"
      @click="clickItem(content)"
    >
      <span class="vue3-dropdown-items">
        {{ content }}
      </span>
    </div>
  </div>
</template>
<script setup lang="ts">
import { ref, PropType, onMounted, computed } from "vue";

const props = defineProps({
  items: { type: Array as PropType<Array<string>>, default: [] },
  activeDropDown: { type: Boolean, default: false },
});
const emits = defineEmits(["hasItem", "inActiveDropDown"]);
const propsActiveDropDown = computed(() => props?.activeDropDown);
const clickedItem = ref("");

const clickItem = (content: string) => {
  clickedItem.value = content;
  emits("hasItem", content);
  emits("inActiveDropDown");
};

const sendInActiveDropDown = () => {
  emits("inActiveDropDown");
};

onMounted(() => {
  window.addEventListener("click", sendInActiveDropDown);
});
</script>

<style lang="scss">
.vue3-dropdown-container {
  width: 100%;
  position: absolute;
  visibility: hidden;
  opacity: 0;
  background-color: #fff;
  border-radius: 5px;
  transition: 0.2s;
  margin-top: 10px;
}
.active-dropdown {
  visibility: visible;
  opacity: 1;
}
.vue3-dropdown-item-wrap {
  position: relative;
  cursor: pointer;
  display: flex;
  padding: 5px 10px;
  &:hover {
    background-color: #00000085;
  }
  &:last-child:hover {
    border-bottom-left-radius: 5px;
    border-bottom-right-radius: 5px;
  }
  &:first-child:hover {
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
  }
}
.vue3-dropdown-items {
  position: relative;
  text-align: center;
  color: #000;
  font-size: 18px;
  line-height: 18px;
  margin: 0 20px;
}
.clicked-items {
  pointer-events: none;
  background-color: rgba(0, 0, 0, 0.2);
  cursor: default;
  span {
    color: #00000080;
  }
}
</style>
