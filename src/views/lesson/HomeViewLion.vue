<template>
  <div class="home">
    <h1>Basty paraqsha</h1>
    <button @click="showPosts = !showPosts">toggle posts</button>
    <button @click="posts.pop()">deleta a post</button>
    <PostList v-if="showPosts" :posts="posts"></PostList>
  </div>
</template>

<script>
// @ is an alias to /src
import { ref } from "vue";
import PostList from "../../components/PostList.vue";

export default {
  name: "HomeView",
  setup() {
    const posts = ref([
      {
        title: "Blogqa qoş keldiñiz",
        body: "Auyrsynudyŋ özi auyrsynu Nemese būl säuletşige odan da ülken närse kedergi bolmasa, osy läzzat üşin azap pen azaptyŋ ülken uaqyttary qabyldanatyn läzzattar. Jäne būl titirkendirgiş.",
        id: 1,
      },
      {
        title: "top 5 css tips",
        body: "Auyrsynudyŋ özi auyrsynu Nemese būl säuletşige odan da ülken närse kedergi bolmasa, osy läzzat üşin azap pen azaptyŋ ülken uaqyttary qabyldanatyn läzzattar. Jäne būl titirkendirgiş.",
        id: 2,
      },
    ]);

    const showPosts = ref(true);

    return { posts, showPosts };
  },
  components: { PostList },
};
</script>
