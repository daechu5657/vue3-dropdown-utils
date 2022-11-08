<template>
  <div class="test">
    <vue3-dropdown-utils
      :items="['1', '2', '3', '4', '5']"
      @returnItemData="returnItemData"
      :effect="180"
    />
  </div>
</template>

<script setup lang="ts">
const returnItemData = (data: string) => {
  console.log(data);
};
</script>
<style>
.test {
  margin: 100px;
}
</style>
