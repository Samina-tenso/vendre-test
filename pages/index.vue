<template>
  <div>
    <Head>
      <Title>Vendre profiles</Title>
      <Meta name="description" :content="title" />
    </Head>
  </div>
</template>

<script setup lang="ts">
const title = ref("my title");
const name = "Profiles of employees";

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
