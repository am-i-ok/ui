import { ref } from "vue";
import { defineStore } from "pinia";
import ApiService from "@/core/services/ApiService";

export const useAgentsStore = defineStore("agents", () => {
  const agents = ref([]);

  async function list() {
    const result = await ApiService.get("agent");
    agents.value = result.data;
  }

  return {
    agents, list
  }

});
