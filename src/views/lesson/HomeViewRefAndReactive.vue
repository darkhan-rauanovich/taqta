<template>
  <div class="home">
    <h1>Home</h1>
    <h2>Ref</h2>
    <h4>
      Name: {{ ninjaOne.name }} <br />
      Age: {{ ninjaOne.age }}
    </h4>
    <button @click="updateNinjaOne">Update ninja one</button>
    <h2>Reactive</h2>
    <h4>
      Name: {{ ninjaTwo.name }} <br />
      Age: {{ ninjaTwo.age }}
    </h4>
    <button @click="updateNinjaTwo">Update ninja two</button>
  </div>
</template>

<script>
import { reactive, ref } from "vue";
// @ is an alias to /src
// reactive don't work with primitive values like const name = reactive("darik") but ref worked

export default {
  name: "HomeView",
  setup() {
    const ninjaOne = ref({ name: "Mario", age: 30 });
    const ninjaTwo = reactive({ name: "darik", age: 19 });

    const updateNinjaOne = () => {
      ninjaOne.value.age = 40;
    };

    const updateNinjaTwo = () => {
      ninjaTwo.age = 20;
    };

    return { ninjaOne, ninjaTwo, updateNinjaOne, updateNinjaTwo };
  },
  data() {
    return {
      score: 5,
    };
  },
};
</script>
