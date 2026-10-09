<script setup lang="ts">
import { computed } from "vue";
import { useRoute } from "vue-router";
import { useHead } from "@unhead/vue";

const route = useRoute();

const baseUrl = "https://talksharp.co";

const title = computed(
  () =>
    (route.meta.title as string) ||
    "TalkSharp | Learn African Languages Online"
);

const description = computed(
  () =>
    (route.meta.description as string) ||
    "Learn African languages with TalkSharp."
);

const canonical = computed(
  () => `${baseUrl}${route.path === "/" ? "/" : route.path.replace(/\/$/, "")}`
);

useHead({
  title,

  meta: [
    {
      name: "description",
      content: description,
    },
    {
      name: "robots",
      content: "index, follow",
    },
    {
      property: "og:type",
      content: "website",
    },
    {
      property: "og:title",
      content: title,
    },
    {
      property: "og:description",
      content: description,
    },
    {
      property: "og:url",
      content: canonical,
    },
    {
      property: "og:image",
      content: `${baseUrl}/og-image.png`,
    },
    {
      name: "twitter:card",
      content: "summary_large_image",
    },
    {
      name: "twitter:title",
      content: title,
    },
    {
      name: "twitter:description",
      content: description,
    },
    {
      name: "twitter:image",
      content: `${baseUrl}/og-image.png`,
    },
  ],

  link: [
    {
      rel: "canonical",
      href: canonical,
    },
  ],
});
</script>