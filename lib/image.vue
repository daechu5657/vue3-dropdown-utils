<template>
  <img
    class="vue3-img"
    :class="[propsActiveDropDown ? `effectRotate${props?.effect}` : '']"
    :src="props?.img"
    v-if="hasImage"
  />
  <svg
    width="24"
    height="24"
    viewBox="0 0 22 22"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    v-if="!hasImage"
    class="vue3-img"
    :class="[propsActiveDropDown ? `effectRotate${props?.effect}` : '']"
  >
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M16.7071 8.29289C17.0976 8.68342 17.0976 9.31658 16.7071 9.70711L11.7071 14.7071C11.3166 15.0976 10.6834 15.0976 10.2929 14.7071L5.29289 9.70711C4.90237 9.31658 4.90237 8.68342 5.29289 8.29289C5.68342 7.90237 6.31658 7.90237 6.70711 8.29289L11 12.5858L15.2929 8.29289C15.6834 7.90237 16.3166 7.90237 16.7071 8.29289Z"
      fill="#000"
    />
  </svg>
</template>

<script setup lang="ts">
import { effect, onBeforeMount, ref, computed } from "vue";

const props = defineProps({
  activeDropDown: { type: Boolean },
  img: { type: String },
  effect: { type: Number },
});
const propsActiveDropDown = computed(() => props?.activeDropDown);
const hasImage = ref(false);

onBeforeMount(() => {
  hasImage.value = Boolean(props?.img);
});
</script>

<style lang="scss">
.vue3-img {
  position: relative;
  display: flex;
  align-items: center;
  transition: 0.2s;
}
.effectRotate360 {
  transform: rotate(360deg);
}
.effectRotate180 {
  transform: rotate(180deg);
}
.effectRotate90 {
  transform: rotate(90deg);
}
.effectRotate-360 {
  transform: rotate(-360deg);
}
.effectRotate-180 {
  transform: rotate(-180deg);
}
.effectRotate-90 {
  transform: rotate(-90deg);
}
</style>
