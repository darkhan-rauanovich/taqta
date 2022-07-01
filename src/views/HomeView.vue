<template>
  <div class="home">
    <h1>Basty paraqsha</h1>
    <div v-if="error">{{ error }}</div>
    <div v-if="posts.length" class="layout">
      <PostList :posts="posts"></PostList>
      <TagCloud :posts="posts"></TagCloud>
    </div>
    <SpinnerElem v-else></SpinnerElem>
  </div>
</template>

<script>
// @ is an alias to /src
import PostList from "../components/PostList.vue";
import getPosts from "../composables/getPosts";
import SpinnerElem from "@/components/SpinnerElem.vue";
import TagCloud from "@/components/TagCloud.vue";

export default {
  name: "HomeView",
  setup() {
    const { posts, load, error } = getPosts();

    load();

    return { posts, error };
  },
  components: { PostList, SpinnerElem, TagCloud },
};
</script>

<style>
.home {
  max-width: 1200px;
  margin: 0 auto;
  padding: 10px;
}
.layout {
  display: grid;
  grid-template-columns: 3fr 1fr;
  gap: 20px;
}
</style>
