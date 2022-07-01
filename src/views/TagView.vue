<template>
  <div class="home">
    <h1>By Tag: {{ tag }}</h1>

    <div v-if="error">{{ error }}</div>
    <div v-if="posts.length" class="layout">
      <PostList :posts="tagedPosts"></PostList>
      <TagCloud :posts="posts"></TagCloud>
    </div>
    <SpinnerElem v-else></SpinnerElem>
  </div>
</template>

<script>
import getPosts from "@/composables/getPosts";
import SpinnerElem from "@/components/SpinnerElem.vue";
import PostList from "../components/PostList.vue";
import { computed } from "@vue/runtime-core";
import TagCloud from "@/components/TagCloud.vue";

export default {
  components: { SpinnerElem, PostList, TagCloud },
  props: {
    tag: {},
  },
  setup(props) {
    const { posts, error, load } = getPosts();

    const tagedPosts = computed(() => {
      return posts.value.filter((project) => project.tags.includes(props.tag));
    });

    load();

    return { posts, error, tagedPosts };
  },
};
</script>

<style></style>
