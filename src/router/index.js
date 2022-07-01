import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import DetailsView from "../views/DetailsView.vue";
import CreateView from "../views/CreateView.vue";
import TagView from "../views/TagView.vue";
import RealTime from "../views/RealtimeView.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/create",
    name: "create",
    component: CreateView,
  },
  {
    path: "/realtime",
    name: "realtime",
    component: RealTime,
  },
  {
    path: "/posts/:id",
    name: "details",
    component: DetailsView,
    props: true,
  },
  {
    path: "/tags/:tag",
    name: "tags",
    component: TagView,
    props: true,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;