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
              <th class="min-w-10px">Location</th>
              <th class="min-w-120px">Creation Date</th>
              <th class="min-w-120px">Last Seen</th>
              <th class="min-w-100px text-end">Actions</th>
            </tr>
          </thead>
          <!--end::Table head-->

          <!--begin::Table body-->
          <tbody>
            <template v-for="(item, index) in store.agents" :key="index">
              <tr>
                <td>
                  <div class="d-flex align-items-center">
                    <span
                        class="bullet bullet-vertical h-40px"
                        style="margin-right: 10px"
                        :class="`bg-success`"
                    ></span>
                    <span class="svg-icon svg-icon-1" style="margin-right: 10px">
                      <inline-svg
                          :src="item.icon"
                      />
                    </span>
                    <span
                        class="text-dark fw-bold d-block mb-1 fs-6"
                    >{{ item.name }}
                  </span>
                  </div>
                </td>

                <td>
                  <span
                      class="text-dark d-block mb-1 fs-6"
                  >{{ item.location }}
                  </span>
                </td>

                <td>
                  <span>
                    15.12.2022
                  </span>
                </td>

                <td>
                  <span>
                    Few seconds ago
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
import { useAgentsStore } from '@/stores/amiok/agents'

export default defineComponent({
  name: "entities-agents-list",
  components: {},
  props: {
    widgetClasses: String,
  },
  setup() {
    const store = useAgentsStore();
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
