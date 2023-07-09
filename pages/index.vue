<template>
  <div></div>
</template>

<script setup lang="ts">
import path from "path";

definePageMeta({
  middleware: [
    function (to, from) {
      if (to.path !== "/profiles") {
        return navigateTo("/profiles");
      }
    },
  ],
});
</script>

<style lang="scss" scoped></style>
