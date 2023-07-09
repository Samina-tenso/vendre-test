<template>
  <div class="profiles wrapper">
    <p v-if="pending">Fetching profiles...</p>
    <p v-else-if="error">
      Sorry we are unable to get profiles
      <NuxtLink to="/prfiles"> Go back</NuxtLink>
    </p>
    <ul v-else="res?.profiles" class="profiles__list">
      <li
        :key="profile.id"
        v-for="profile of res?.profiles"
        class="profiles__item"
      >
        <Card
          :isLink="true"
          :first_name="profile.first_name"
          :last_name="profile.last_name"
          :id="profile.id"
          :email="profile.email"
          :avatar="profile.avatar"
        />
      </li>
    </ul>
    <div class="button-wrapper">
      <button
        :class="`${
          page > 1 ? ' button--active' : 'button--disabled'
        }  button button--prev`"
        @click="previous()"
      >
        Previous
      </button>
      {{ page }} / {{ res?.pages }}
      <button
        :class="`${
          res?.pages && page < res?.pages
            ? ' button--active'
            : 'button--disabled'
        }  button button--next`"
        @click="next()"
      >
        Next
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import useGetProfiles from "../../composables/index";
const router = useRouter();

let page = ref(0);
if (!page.value) {
  page.value = 1;
}
const { res, error, pending, previous, next } = await useGetProfiles(
  router,
  page
);
</script>

<style lang="scss" scoped>
.profiles {
  &__list {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
  }
  &__item {
    list-style: none;
    &:not(last-child) {
      padding-right: 1rem;
    }
  }

  .button-wrapper {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 1rem;
  }
  .button {
    display: flex;
    justify-content: center;
    width: 4rem;
    padding: 1rem 3rem 1rem 3rem;
    background-color: white;
    border: none;
    filter: drop-shadow(0px 4px 8px rgba(0, 0, 0, 0.1));
    font-weight: 300;
    &:hover {
      filter: drop-shadow(0px 4px 2px rgba(0, 0, 0, 0.1));
    }
    &--disabled {
      color: rgba(0, 0, 0, 0.2);
      filter: drop-shadow(0px 0px 0px rgba(0, 0, 0, 0.1));
      background-color: rgba(71, 71, 71, 0.1);
    }
    &--prev {
      border-radius: 2.5rem 0 0 2.5rem;
    }
    &--next {
      border-radius: 0 2.5rem 2.5rem 0;
    }
  }
}
</style>
