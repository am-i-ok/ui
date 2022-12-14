import { ref } from "vue";
import { defineStore } from "pinia";
import ApiService from "@/core/services/ApiService";

export const useCheckStore = defineStore("checks", () => {
  const checks = ref([]);

  async function list() {
    const result = await ApiService.get("check");
    result.data.forEach((d) => {
      if (d.status === "healthy") {
        d.color = "success"
      } else if (d.status === "unhealthy") {
        d.color = "danger"
      }
    });
    checks.value = result.data;
  }

  return {
    checks, list
  }

});
