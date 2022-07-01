import { ref } from "vue";
import { collectionPosts } from "@/firebase/config";
import { getDocs, orderBy, query } from "firebase/firestore";

const getPosts = () => {
  const posts = ref([]);
  const error = ref(null);

  const load = async () => {
    try {
      const _query = query(collectionPosts, orderBy("createdAt", "desc"));
      const res = await getDocs(_query);
      posts.value = res.docs.map((doc) => {
        return { ...doc.data(), id: doc.id };
      });
    } catch (err) {
      error.value = err.message;
      console.log(error.value);
    }
  };

  return { posts, error, load };
};

export default getPosts;
