
<template>
  <q-layout view="hHh Lpr fFf" dir="rtl">

    <div class="dashboard-container">

      <!-- Sidebar -->
      <DashboardSidebar />

      <!-- Main Content -->
      <div class="dashboard-main">

        <!-- Header -->
        <DashboardHeader :title="pageTitle" />

        <!-- Page Content -->
        <main class="dashboard-content">
          <router-view />
        </main>

      </div>

    </div>

  </q-layout>
</template>

<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'

import DashboardSidebar from '../components/DashboardSidebar.vue'
import DashboardHeader from '../components/DashboardHeader.vue'

const route = useRoute()

const pageTitle = computed(() => {
  return route.meta.title || 'داشبورد'
})
</script>

<style scoped lang="scss">
.dashboard-container {
  display: flex;
  min-height: 100vh;
  background: #f3f5f9;
}

.dashboard-main {
  flex: 1;
  min-width: 0;
  display: flex;
  flex-direction: column;
}

.dashboard-content {
  flex: 1;
  padding: 28px;
}

@media (max-width: 700px) {
  .dashboard-content {
    padding: 16px;
  }
}
</style>
