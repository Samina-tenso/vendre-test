import { _ as __nuxt_component_0 } from "./nuxt-link-26e5a74c.js";
import { defineComponent, mergeProps, withCtx, createTextVNode, useSSRContext, ref, withAsyncContext, unref } from "vue";
import { ssrRenderAttrs, ssrRenderAttr, ssrInterpolate, ssrRenderComponent, ssrRenderList } from "vue/server-renderer";
import { _ as _export_sfc, d as useRouter } from "../server.mjs";
import "hookable";
import "destr";
import "devalue";
import "klona";
import { a as useLazyAsyncData } from "./asyncData-62f3b23f.js";
import "ufo";
import "ofetch";
import "#internal/nitro";
import "unctx";
import "vue-router";
import "h3";
import "@unhead/ssr";
import "unhead";
import "@unhead/shared";
import "defu";
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "Card",
  __ssrInlineRender: true,
  props: {
    first_name: {},
    last_name: {},
    email: {},
    id: {},
    avatar: {}
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "card" }, _attrs))} data-v-f8481d3b><div class="card__image" data-v-f8481d3b><img${ssrRenderAttr("src", `${_ctx.avatar}`)} alt="employee profile" data-v-f8481d3b></div><div class="card__text" data-v-f8481d3b><h2 data-v-f8481d3b>${ssrInterpolate(_ctx.first_name)}</h2><h2 data-v-f8481d3b>${ssrInterpolate(_ctx.last_name)}</h2></div>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: `/profiles/${_ctx.id}`
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Contact`);
          } else {
            return [
              createTextVNode("Contact")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
    };
  }
});
const Card_vue_vue_type_style_index_0_scoped_f8481d3b_lang = "";
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Card.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-f8481d3b"]]);
async function useGetProfiles(router, page) {
  const {
    data: res,
    error,
    pending
  } = await useLazyAsyncData(
    "profiles",
    () => $fetch("https://reqres.in/api/users", {
      params: { page: page.value }
    }),
    {
      watch: [page],
      transform: (res2) => {
        console.log(res2);
        const pages = res2.total_pages;
        const profiles = res2.data;
        return { profiles, pages };
      }
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
    var _a, _b, _c;
    if (((_a = res.value) == null ? void 0 : _a.pages) && page.value + 1 < ((_b = res == null ? void 0 : res.value) == null ? void 0 : _b.pages) || page.value + 1 == ((_c = res.value) == null ? void 0 : _c.pages)) {
      page.value++;
      router.push({ path: "/profiles", query: { page: page.value } });
    }
  };
  return { res, page, next, previous, error, pending };
}
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const router = useRouter();
    let page = ref(0);
    if (!page.value) {
      page.value = 1;
    }
    const { res, error, pending, previous, next } = ([__temp, __restore] = withAsyncContext(() => useGetProfiles(
      router,
      page
    )), __temp = await __temp, __restore(), __temp);
    return (_ctx, _push, _parent, _attrs) => {
      var _a, _b, _c, _d;
      const _component_NuxtLink = __nuxt_component_0;
      const _component_Card = __nuxt_component_1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "profiles wrapper" }, _attrs))} data-v-2ed14cf1>`);
      if (unref(pending)) {
        _push(`<p data-v-2ed14cf1>Fetching profiles...</p>`);
      } else if (unref(error)) {
        _push(`<p data-v-2ed14cf1> Sorry we are unable to get profiles `);
        _push(ssrRenderComponent(_component_NuxtLink, { to: "/prfiles" }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(` Go back`);
            } else {
              return [
                createTextVNode(" Go back")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</p>`);
      } else {
        _push(`<ul class="profiles__list" data-v-2ed14cf1><!--[-->`);
        ssrRenderList((_a = unref(res)) == null ? void 0 : _a.profiles, (profile) => {
          _push(`<li class="profiles__item" data-v-2ed14cf1>`);
          _push(ssrRenderComponent(_component_Card, {
            first_name: profile.first_name,
            last_name: profile.last_name,
            id: profile.id,
            email: profile.email,
            avatar: profile.avatar
          }, null, _parent));
          _push(`</li>`);
        });
        _push(`<!--]--></ul>`);
      }
      _push(`<div class="button-wrapper" data-v-2ed14cf1>`);
      if (unref(page) > 1) {
        _push(`<button class="button button--prev" data-v-2ed14cf1> Previous </button>`);
      } else {
        _push(`<!---->`);
      }
      _push(` ${ssrInterpolate(unref(page))} / ${ssrInterpolate((_b = unref(res)) == null ? void 0 : _b.pages)} `);
      if (((_c = unref(res)) == null ? void 0 : _c.pages) && unref(page) < ((_d = unref(res)) == null ? void 0 : _d.pages)) {
        _push(`<button class="button button--next" data-v-2ed14cf1> Next </button>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div>`);
    };
  }
});
const index_vue_vue_type_style_index_0_scoped_2ed14cf1_lang = "";
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/profiles/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-2ed14cf1"]]);
export {
  index as default
};
//# sourceMappingURL=index-5ae458bc.js.map
