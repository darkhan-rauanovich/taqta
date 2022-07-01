<template>
  <div class="post-list">
    <div v-for="(post, key) in posts" :key="key">
      <SinglePost :post="post"></SinglePost>
    </div>
  </div>
</template>

<script>
// import { onMounted, onUnmounted, onUpdated } from "vue";
import SinglePost from "./SinglePost.vue";
export default {
  props: {
    posts: {
      type: Array,
    },
  },
  setup() {
    // onMounted(() => {
    //   console.log("Component mounted");
    // });
    // onUnmounted(() => console.log("Component unmounted"));
    // onUpdated(() => console.log("Component updated"));
  },
  components: { SinglePost },
};
</script>

<style></style>
