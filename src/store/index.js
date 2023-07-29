import { createStore } from "vuex";
import { auth } from "./auth.module";
import { main } from "./main.module";
const store = createStore({
  modules: {
    auth,main,
  },
});
export default store;