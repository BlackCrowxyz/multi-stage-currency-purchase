import { VNode } from "vue";
import { limitDecimalPlaces } from "../helpers/utils";
import VMoney from "v-money3";

// Adjusting the directive to use argument (binding.arg) for the limit
export default defineNuxtPlugin((nuxtApp) => {
  // model-limit
  nuxtApp.vueApp.directive("model-limit", {
    beforeMount(el, binding, vnode: VNode) {
      el.addEventListener("input", () => {
        const limit = binding.value;
        const value = el.value;
        let newValue = limitDecimalPlaces(value, limit);
        el.value = newValue;
        vnode.component?.emit("update:modelValue", parseFloat(newValue));
      });
    },
  });
  // v-money3
  nuxtApp.vueApp.directive("money", VMoney);
});
