<template>
  <div class="wrapper">
    <NuxtLink to="/profiles"> Go back to all users</NuxtLink>
    <p v-if="pending">Fetching user..</p>
    <div v-else-if="profile?.email">
      <p>Email: {{ profile.email }}</p>
    </div>
    <p v-else="error">
      Sorry we are unable to get this user
      <NuxtLink to="/profiles"> Go back to all users</NuxtLink>
    </p>
  </div>
</template>

<script setup lang="ts">
const route = useRoute();

const {
  data: profile,
  error,
  pending,
} = await useLazyFetch(`https://reqres.in/api/users/${route.params.id}`, {
  transform: (result: Result) => {
    const profile: Profile = result.data;
    console.log(profile);
    return profile;
  },
});
if (error.value) {
  console.log(error.value);
}
</script>

<style lang="scss" scoped></style>
