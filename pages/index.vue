<template>
  <section class="h-full pt-15">
    <m-stepper :items="['مرحله ۱', 'مرحله ۲', 'مرحله ۳']" :disabled="selectedCurrency">
      <!-- Step 1 -->
      <template v-slot:item.1>
        <div class="section">
          <h1 class="text-xl">مرحله ۱: انتخاب ارز</h1>
          <m-select
            :options="currencies"
            v-model="selectedCurrency"
            placeholder="select"
          ></m-select>
        </div>
      </template>

      <!-- Step 2 -->
      <template v-slot:item.2>
        <div class="section">
          <h1 class="text-xl">مرحله ۲: تبدیل</h1>

          <div v-if="selectedCurrencyLabel" dir="auto" class="text-center my-5 font-bold">
            1 {{ selectedCurrencyLabel }} = $ {{ formatPrice(selectedCurrency) }} =
            {{ formatPrice(unitPrice) }} ریال
          </div>

          <div>
            <label for="quantity">مقدار {{ selectedCurrencyLabel }}:</label>
            <m-currency-input v-model="quantity" @input="updateTomanValue" />
          </div>

          <div>
            <label for="toman">به ریال:</label>
            <m-currency-input v-model="toman" @input="updateQuantity" />
          </div>
          <div>ارزش پایه به ریال: {{ formatPrice(unitPrice) }}</div>
        </div>
      </template>

      <!-- Step 3 -->
      <template v-slot:item.3>
        <div class="section">
          <h1 class="text-xl">مرحله ۳: رسید</h1>
          <!-- رسید -->
          <div class="max-w-md mx-auto bg-white shadow-md rounded-lg p-4 mt-6">
            <h2 class="text-lg font-semibold text-gray-700">رسید</h2>
            <div class="mt-4">
              <div class="flex justify-between">
                <span>مقدار {{ selectedCurrencyLabel }}:</span>
                <span>{{ formatPrice(quantity) }}</span>
              </div>
              <div class="flex justify-between mt-2">
                <span>ارزش پایه:</span>
                <span> {{ formatPrice(unitPrice) }} ریال</span>
              </div>
              <div class="flex justify-between mt-4">
                <span>مجموع:</span>
                <span>{{ formatPrice(toman) }} ریال</span>
              </div>
            </div>
            <div class="mt-8 font-semibold">
              <label class="inline-flex items-center">
                <input type="checkbox" class="form-checkbox" v-model="depositToAccount" />
                <span class="mr-2">واریز به حساب</span>
              </label>
            </div>
            <button
              class="w-full bg-primary hover:bg-purple text-white font-bold py-2 px-4 rounded mt-4"
            >
              نهایی کردن
            </button>
          </div>
        </div>
      </template>
    </m-stepper>
  </section>
</template>

<script setup lang="ts">
import { ref, computed, watch } from "vue";
import currenciesList from "~/data/currencies";
import { formatPrice, limitDecimalPlaces } from "~/helpers/utils";

definePageMeta({
  layout: "default",
});

const DOLLAR_TO_RIAL = 58_000; // 1 $ === 50_000 Rial

// Step 1
// -----------------------------
const currencies = ref(currenciesList);

const selectedCurrency = ref(0);

// Finding the label of the selected currency
const selectedCurrencyLabel = computed(
  () =>
    selectedCurrency.value !== 0 &&
    currencies.value.filter((_) => _.value === selectedCurrency.value)[0].label
);

// Step 2
// -----------------------------
const toman = ref<number>(0);
const quantity = ref<number>(0);

const unitPrice = computed(() => DOLLAR_TO_RIAL * selectedCurrency.value);

// If user selects a value, by default we put 1 for quantity
watch(unitPrice, () => {
  quantity.value = 1;
  updateTomanValue();
  updateQuantity();
});

const updateTomanValue = () => (toman.value = quantity.value * unitPrice.value);
const updateQuantity = () => (quantity.value = toman.value / unitPrice.value);

// Step 3
// -----------------------------
const depositToAccount = ref(false);
</script>

<style lang="scss">
h1 {
  @apply mb-4;
}

.section {
  @apply mt-6 border p-4 outline-1 outline rounded-3 w-full;
}
</style>
