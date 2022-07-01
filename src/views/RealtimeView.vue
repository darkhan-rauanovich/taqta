<template>
  <h1>Realtime database</h1>
  <p>{{ posts }}</p>
</template>

<script>
import { ref } from "@vue/reactivity";
import { collectionPosts } from "@/firebase/config";
import { onSnapshot, query, orderBy } from "@firebase/firestore";
export default {
  setup() {
    const posts = ref([]);

    const _query = query(collectionPosts, orderBy("createdAt", "desc"));

    onSnapshot(_query, (querySnapshot) => {
      let docs = querySnapshot.docs.map((doc) => {
        return { ...doc.data(), id: doc.id };
      });

      posts.value = docs;
    });

    return { posts };
  },
};
</script>

<style></style>
