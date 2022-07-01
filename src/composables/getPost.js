import { ref } from "vue";
import { doc, getDoc } from "firebase/firestore";
import { collectionPosts } from "@/firebase/config";

const getPost = (id) => {
  const post = ref(null);
  const error = ref(null);

  const load = async () => {
    try {
      const postRef = doc(collectionPosts, id);
      const res = await getDoc(postRef);
      if (!res.exists()) {
        throw Error("That post is not exist");
      }

      post.value = { ...res.data(), id: res.id };
    } catch (err) {
      error.value = err.message;
      console.log(error.value);
    }
  };
  //

  return { post, error, load };
};

export default getPost;
