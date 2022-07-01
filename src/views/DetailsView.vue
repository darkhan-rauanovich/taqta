<template>
  <div v-if="error">{{ error }}</div>
  <div v-if="post" class="post">
    <h3>{{ post.title }}</h3>
    <p class="pre">{{ post.body }}</p>
    <button class="delete" @click="handleClick">Delete post</button>
  </div>
  <SpinnerElem v-else></SpinnerElem>
</template>

<script>
import getPost from "@/composables/getPost";
import SpinnerElem from "@/components/SpinnerElem.vue";
import { deleteDoc, doc } from "@firebase/firestore";
import { collectionPosts } from "@/firebase/config";
import { useRouter } from "vue-router";

export default {
  components: { SpinnerElem },
  props: ["id"],
  setup(props) {
    const { post, load, error } = getPost(props.id);
    const router = useRouter();

    load();

    const handleClick = async () => {
      await deleteDoc(doc(collectionPosts, props.id));
      router.push({ name: "home" });
    };

    return { post, error, handleClick };
  },
};
</script>

<style>
.post {
  max-width: 1200px;
  margin: 0 auto;
}
.post p {
  color: #444;
  line-height: 1.5em;
  margin-top: 40px;
}
.pre {
  white-space: pre-wrap;
}

button.delete {
  margin: 10px auto;
}
</style>
