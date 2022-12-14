import ApiService from "@/core/services/ApiService";

/**
 * @description get token form localStorage
 */

export const createCheck = (check: any) => {
  return ApiService.post("check", check);
};

export default { createCheck };
