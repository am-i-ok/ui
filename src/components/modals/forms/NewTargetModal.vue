<template>
  <!--begin::Modal - New Target-->
  <div
    class="modal fade"
    id="kt_modal_new_target"
    ref="newTargetModalRef"
    tabindex="-1"
    aria-hidden="true"
  >
    <!--begin::Modal dialog-->
    <div class="modal-dialog modal-dialog-centered mw-650px">
      <!--begin::Modal content-->
      <div class="modal-content rounded">
        <!--begin::Modal header-->
        <div class="modal-header pb-0 border-0 justify-content-end">
          <!--begin::Close-->
          <div
            class="btn btn-sm btn-icon btn-active-color-primary"
            data-bs-dismiss="modal"
          >
            <span class="svg-icon svg-icon-1">
              <inline-svg src="/media/icons/duotune/arrows/arr061.svg" />
            </span>
          </div>
          <!--end::Close-->
        </div>
        <!--begin::Modal header-->

        <!--begin::Modal body-->
        <div class="modal-body scroll-y px-10 px-lg-15 pt-0 pb-15">
          <!--begin:Form-->
          <el-form
            id="kt_modal_new_target_form"
            @submit.prevent="submit()"
            :model="checkData"
            :rules="rules"
            ref="formRef"
            class="form"
          >
            <!--begin::Heading-->
            <div class="mb-13 text-center">
              <!--begin::Title-->
              <h1 class="mb-3">Create New Check</h1>
              <!--end::Title-->

              <!--begin::Description-->
              <div class="text-gray-400 fw-semobold fs-5">
                If you need more info, please check
                <a href="#" class="fw-bold link-primary">Project Guidelines</a>.
              </div>
              <!--end::Description-->
            </div>
            <!--end::Heading-->

            <!--begin::Input group-->
            <div class="d-flex flex-column mb-8 fv-row">
              <!--begin::Label-->
              <label class="d-flex align-items-center fs-6 fw-semobold mb-2">
                <span class="required">Name</span>
                <i
                  class="fas fa-exclamation-circle ms-2 fs-7"
                  data-bs-toggle="tooltip"
                  title="Specify a target name for future usage and reference"
                ></i>
              </label>
              <!--end::Label-->

              <el-form-item prop="targetTitle">
                <el-input
                  v-model="checkData.name"
                  placeholder="Enter logical name"
                  name="targetTitle"
                ></el-input>
              </el-form-item>
            </div>
            <!--end::Input group-->

            <!--begin::Input group-->
            <div class="d-flex flex-column mb-8 fv-row">
              <!--begin::Label-->
              <label class="d-flex align-items-center fs-6 fw-semobold mb-2">
                <span class="required">Endpoint</span>
                <i
                    class="fas fa-exclamation-circle ms-2 fs-7"
                    data-bs-toggle="tooltip"
                    title="Specify a target name for future usage and reference"
                ></i>
              </label>
              <!--end::Label-->

              <el-form-item prop="targetTitle">
                <el-input
                    v-model="checkData.endpoint"
                    placeholder="Enter a valid http address"
                    name="targetTitle"
                ></el-input>
              </el-form-item>
            </div>
            <!--end::Input group-->

            <!--begin::Input group-->
            <div class="row g-9 mb-8">
              <!--begin::Col-->
              <div class="col-md-6 fv-row">
                <label class="required fs-6 fw-semobold mb-2">Interval</label>

                <el-form-item prop="interval">
                  <el-select
                    v-model="checkData.interval"
                    placeholder="Select interval"
                    name="interval"
                    as="select"
                  >
                    <el-option value="">Select interval...</el-option>
                    <el-option label="1 Second" value="1"
                      >1 Second</el-option
                    >
                    <el-option label="3 Seconds" value="3"
                      >3 Seconds</el-option
                    >
                    <el-option label="5 Seconds" value="5"
                    >5 Seconds</el-option
                    >
                    <el-option label="5 Seconds" value="10"
                    >10 Seconds</el-option
                    >
                    <el-option label="30 Seconds" value="30"
                    >30 Seconds</el-option
                    >
                    <el-option label="1 Minute" value="60"
                    >1 Minute</el-option
                    >
                  </el-select>
                </el-form-item>
              </div>
              <!--end::Col-->

            </div>
            <!--end::Input group-->

            <!--begin::Input group-->
            <div class="d-flex flex-column mb-8 fv-row">
              <!--begin::Label-->
              <label class="d-flex align-items-center fs-6 fw-semobold mb-2">
                <span class="required">Agents</span>
                <i
                  class="fas fa-exclamation-circle ms-2 fs-7"
                  data-bs-toggle="tooltip"
                  title="Specify a least one agent"
                ></i>
              </label>
              <!--end::Label-->

              <el-form-item prop="agents">
                <el-select
                  v-model="checkData.agents"
                  multiple
                  filterable
                  allow-create
                  default-first-option
                  placeholder="Choose agents from which the check will be initiated"
                >
                  <template v-for="(item, index) in store.agents" :key="index">
                    <el-option :label=item.name :value=item._id> </el-option>
                  </template>
                </el-select>
              </el-form-item>
            </div>
            <!--end::Input group-->

            <!--begin::Actions-->
            <div class="text-center">
              <button
                type="reset"
                id="kt_modal_new_target_cancel"
                class="btn btn-light me-3"
              >
                Cancel
              </button>

              <!--begin::Button-->
              <button
                :data-kt-indicator="loading ? 'on' : null"
                class="btn btn-lg btn-primary"
                type="submit"
              >
                <span v-if="!loading" class="indicator-label">
                  Create
                  <span class="svg-icon svg-icon-3 ms-2 me-0">
                    <inline-svg src="/media/icons/duotune/arrows/arr064.svg" />
                  </span>
                </span>
                <span v-if="loading" class="indicator-progress">
                  Please wait...
                  <span
                    class="spinner-border spinner-border-sm align-middle ms-2"
                  ></span>
                </span>
              </button>
              <!--end::Button-->
            </div>
            <!--end::Actions-->
          </el-form>
          <!--end:Form-->
        </div>
        <!--end::Modal body-->
      </div>
      <!--end::Modal content-->
    </div>
    <!--end::Modal dialog-->
  </div>
  <!--end::Modal - New Target-->
</template>

<style lang="scss">
.el-select {
  width: 100%;
}

.el-date-editor.el-input,
.el-date-editor.el-input__inner {
  width: 100%;
}
</style>

<script lang="ts">
import { defineComponent, ref } from "vue";
import { hideModal } from "@/core/helpers/dom";
import { createCheck } from "@/core/services/CheckService";
import Swal from "sweetalert2";
import {useAgentsStore} from "@/stores/amiok/agents";

interface NewAddressData {
  name: string;
  endpoint: string;
  interval: string;
  agents: string;
}

export default defineComponent({
  name: "new-target-modal",
  components: {},
  setup() {
    const formRef = ref<null | HTMLFormElement>(null);
    const newTargetModalRef = ref<null | HTMLElement>(null);
    const loading = ref<boolean>(false);

    const store = useAgentsStore();
    store.list();

    setInterval(store.list, 500);

    const checkData = ref<NewAddressData>({
      name: "",
      endpoint: "",
      interval: "",
      agents: "",
    });

    const rules = ref({
      name: [
        {
          required: true,
          message: "Please input Check name",
          trigger: "blur",
        },
      ],
      endpoint: [
        {
          required: true,
          message: "Please input a valid http endpoint",
          trigger: "blur",
        },
      ],
      interval: [
        {
          required: true,
          message: "Please input a interval",
          trigger: "blur",
        },
      ],
      agents: [
        {
          required: true,
          message: "Please select Agents",
          trigger: "blur",
        },
      ],
    });

    const submit = () => {
      if (!formRef.value) {
        return;
      }

      formRef.value.validate((valid: boolean) => {
        if (valid) {
          loading.value = true;

          createCheck(checkData.value)
              .then(() => {
                loading.value = false;
                Swal.fire({
                  text: "Check has been created",
                  icon: "success",
                  buttonsStyling: false,
                  confirmButtonText: "Ok, got it!",
                  heightAuto: false,
                  customClass: {
                    confirmButton: "btn btn-primary",
                  },
                }).then(() => {
                  checkData.value = {
                    name: "",
                    endpoint: "",
                    agents: "",
                    interval: ""
                  }
                  hideModal(newTargetModalRef.value);
                });
              })
              .catch((err) => {
                loading.value = false;
                Swal.fire({
                  text: "Check creation failed",
                  icon: "error",
                  buttonsStyling: false,
                  confirmButtonText: "Ok, got it!",
                  heightAuto: false,
                  customClass: {
                    confirmButton: "btn btn-primary",
                  },
                }).then(() => {
                  hideModal(newTargetModalRef.value);
                });
              })
        } else {
          Swal.fire({
            text: "Sorry, looks like there are some errors detected, please try again.",
            icon: "error",
            buttonsStyling: false,
            confirmButtonText: "Ok, got it!",
            heightAuto: false,
            customClass: {
              confirmButton: "btn btn-primary",
            },
          });
          return false;
        }
      });
    };

    return {
      store,
      checkData,
      submit,
      loading,
      formRef,
      rules,
      newTargetModalRef,
    };
  },
});
</script>

<style lang="scss">
.override-styles {
  z-index: 99999 !important;
  pointer-events: initial;
}
</style>
