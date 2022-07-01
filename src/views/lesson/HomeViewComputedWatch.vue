<template>
  <div class="home">
    <h1>Basty paraqsha</h1>
    <input type="text" v-model="search" />
    <p>Search term - {{ search }}</p>
    <p v-for="(name, key) in matchingNames" :key="key">{{ name }}</p>
  </div>
</template>

<script>
import { ref, computed, watch, watchEffect } from "vue";
// @ is an alias to /src
// reactive don't work with primitive values like const name = reactive("darik") but ref worked

export default {
  name: "HomeView",
  setup() {
    const search = ref("");
    const names = ref([
      "mario",
      "yoshi",
      "luigi",
      "toad",
      "bowser",
      "koopa",
      "peach",
    ]);

    watch(search, () => {
      console.log("change");
    });

    watchEffect(() => {
      console.log("Watch effect", search.value);
    });

    // stop watching

    // const stopWatch = watch(search, () => {
    //   console.log("change");
    // });

    // const stopWatchEffect = watchEffect(() => {
    //   console.log("Watch effect", search.value);
    // });

    // const handleClick = () => {
    //   stopWatch();
    //   stopWatchEffect();
    // };
    // just return this and use your template

    const matchingNames = computed(() => {
      return names.value.filter((name) => name.includes(search.value));
    });

    return { names, search, matchingNames };
  },
};
</script>
