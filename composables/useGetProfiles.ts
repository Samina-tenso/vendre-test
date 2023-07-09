export default async function useGetProfiles(
  router: any,
  page: Ref<number>
): Promise<GetProfiles> {
  const {
    data: res,
    error,
    pending,
  } = await useLazyAsyncData(
    "profiles",
    (): Promise<Page> =>
      $fetch("https://reqres.in/api/users", {
        params: { page: page.value },
      }),
    {
      watch: [page],
      transform: (res: Page) => {
        console.log(res);
        const pages = res.total_pages;
        const profiles = res.data;
        return { profiles, pages };
      },
    }
  );
  if (error) {
    console.log(error.value);
  }

  const previous = () => {
    page.value--;
    router.push({ path: "/profiles", query: { page: page.value } });
  };

  const next = () => {
    if (
      (res.value?.pages && page.value + 1 < res?.value?.pages) ||
      page.value + 1 == res.value?.pages
    ) {
      page.value++;
      router.push({ path: "/profiles", query: { page: page.value } });
    }
  };
  return { res, page, next, previous, error, pending };
}
