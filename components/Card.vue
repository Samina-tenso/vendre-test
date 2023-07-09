<template>
  <div class="card">
    <div class="card__image">
      <img :src="`${avatar}`" alt="employee profile" />
    </div>
    <div class="card__text">
      <h2>{{ first_name }}</h2>
      <h2>{{ last_name }}</h2>
    </div>
    <div v-if="isLink">
      <NuxtLink :to="`/profiles/${id}`">Contact</NuxtLink>
    </div>
    <div v-else>
      <p>Email: {{ email }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  isLink: boolean;
  first_name: string;
  last_name: string;
  email: string;
  id: number;
  avatar: string;
}>();
</script>

<style lang="scss" scoped>
.card {
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: rgb(255, 255, 255);
  padding: 1rem 1rem 4rem 1rem;
  margin-bottom: 1rem;
  border-radius: 4%;
  text-align: center;
  width: 240px;
  filter: drop-shadow(0px 4px 8px rgba(0, 0, 0, 0.1));
  &:hover {
    filter: drop-shadow(0px 4px 2px rgba(0, 0, 0, 0.1));
  }
  &__image {
    width: 10rem;
    height: 10rem;
    img {
      object-fit: cover;
      border-radius: 50%;
      width: 100%;
      height: 100%;
    }
  }
  &__text {
    display: flex;
    gap: 0.5rem;
    flex-direction: row;
  }
}
</style>
