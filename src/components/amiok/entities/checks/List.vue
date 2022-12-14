<template>
  <!--begin::Tables Widget 13-->
  <div :class="widgetClasses" class="card">
    <!--begin::Body-->
    <div class="card-body py-3">
      <!--begin::Table container-->
      <div class="table-responsive">
        <!--begin::Table-->
        <table
          class="table table-row-bordered table-row-gray-100 align-middle gs-0 gy-3"
        >
          <!--begin::Table head-->
          <thead>
            <tr class="fw-bold text-muted">
              <th class="min-w-10px">Name</th>
              <th class="min-w-10px">Agents</th>
              <th class="min-w-10px">Endpoint</th>
              <th class="min-w-100px text-end">Actions</th>
            </tr>
          </thead>
          <!--end::Table head-->

          <!--begin::Table body-->
          <tbody>
            <template v-for="(item, index) in store.checks" :key="index">
              <tr>
                <td>
                  <div class="d-flex align-items-center">
                    <span
                        class="bullet bullet-vertical h-40px"
                        style="margin-right: 10px"
                        :class="`bg-${item.color}`"
                    ></span>
                    <span
                        class="text-dark fw-bold d-block mb-1 fs-6"
                    >{{ item.name }}
                  </span>
                  </div>
                </td>

                <td>
                  <div class="symbol-group symbol-hover flex-nowrap">
                    <template v-for="(item, i) in item.agents" :key="i">
                      <div
                          class="symbol symbol-35px symbol-circle"
                          data-bs-toggle="tooltip"
                          :title="item.location"
                      >
                        <img alt="Pic" :src="item.icon" />
                      </div>
                    </template>
                  </div>
                </td>

                <td>
                  <span
                      class="text-dark d-block mb-1 fs-6"
                  >{{ item.endpoint }}
                  </span>
                </td>

                <td class="text-end">
                  <a
                    href="#"
                    class="btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1"
                  >
                    <span class="svg-icon svg-icon-3">
                      <inline-svg
                        src="/media/icons/duotune/general/gen019.svg"
                      />
                    </span>
                  </a>

                  <a
                    href="#"
                    class="btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1"
                  >
                    <span class="svg-icon svg-icon-3">
                      <inline-svg src="/media/icons/duotune/art/art005.svg" />
                    </span>
                  </a>

                  <a
                    href="#"
                    class="btn btn-icon btn-bg-light btn-active-color-primary btn-sm"
                  >
                    <span class="svg-icon svg-icon-3">
                      <inline-svg
                        src="/media/icons/duotune/general/gen027.svg"
                      />
                    </span>
                  </a>
                </td>
              </tr>
            </template>
          </tbody>
          <!--end::Table body-->
        </table>
        <!--end::Table-->
      </div>
      <!--end::Table container-->
    </div>
    <!--begin::Body-->
  </div>
  <!--end::Tables Widget 13-->
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import { useCheckStore } from '@/stores/amiok/checks'

export default defineComponent({
  name: "entities-checks-list",
  components: {},
  props: {
    widgetClasses: String,
  },
  setup() {
    const store = useCheckStore();
    store.list();

    setInterval(store.list, 500);
    const checkedRows = ref<Array<number>>([]);

    return {
      store,
      checkedRows,
    };
  },
});
</script>
