<template>
  <div class="wrapper">
    <p v-if="pending">Fetching user..</p>
    <div class="profile" v-else-if="profile?.email">
      <Card
        :isLink="false"
        :first_name="profile.first_name"
        :last_name="profile.last_name"
        :id="profile.id"
        :email="profile.email"
        :avatar="profile.avatar"
      />
      <NuxtLink to="/profiles"> Go back to all profiles</NuxtLink>
    </div>

    <p v-else="error">
      Sorry we are unable to get this user
      <NuxtLink to="/profiles"> Go back to all profiles</NuxtLink>
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

<style lang="scss" scoped>
.profile {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
</style>
