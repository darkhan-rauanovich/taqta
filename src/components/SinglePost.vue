<template>
  <div class="post">
    <router-link :to="{ name: 'details', params: { id: post.id } }">
      <h3>{{ post.title }}</h3>
    </router-link>
    <p>{{ snippet }}</p>
    <span v-for="(tag, key) in post.tags" :key="key">
      <router-link :to="{ name: 'tags', params: { tag: tag } }"
        >#{{ tag }}</router-link
      >
    </span>
  </div>
</template>

<script>
import { computed } from "vue";
export default {
  props: {
    post: {
      type: Object,
    },
  },
  setup(props) {
    const snippet = computed(() => {
      return props.post.body.substring(0, 300) + "...";
    });
    return { snippet };
  },
};
</script>

<style>
.post {
  margin: 0 40px 30px;
  padding-bottom: 30px;
  border-bottom: 1px dashed #e7e7e7;
}
.post h3 {
  display: inline-block;
  position: relative;
  font-size: 26px;
  color: white;
  margin-bottom: 10px;
  max-width: 400px;
}
.post h3::before {
  content: "";
  display: block;
  width: 100%;
  height: 100%;
  background: #ff8800;
  position: absolute;
  z-index: -1;
  padding-right: 40px;
  left: -30px;
  transform: rotateZ(-1deg);
}
.post span {
  display: inline-block;
  margin: 10px 10px 0 0;
}

.post span a {
  color: #ccc;
  text-decoration: none;
}
.post span a.router-link-exact-active {
  color: #ff8800;
  font-weight: bold;
}
</style>
