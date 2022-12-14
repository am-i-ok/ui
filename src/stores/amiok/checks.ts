import { ref } from "vue";
import { defineStore } from "pinia";
import ApiService from "@/core/services/ApiService";

export const useCheckStore = defineStore("checks", () => {
  const checks = ref([]);

  async function list() {
    const result = await ApiService.get("check");
    checks.value = result.data;
  }

  return {
    checks, list
  }

});
