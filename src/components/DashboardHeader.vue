
<template>
  <header class="dashboard-header">

    <!-- Page Title -->
    <div class="header-title">
      <h2>{{ title }}</h2>
      <p>به سامانه مدیریت جلسات میتورا خوش آمدید.</p>
    </div>

    <!-- User Information -->
    <div class="header-user">

      <div class="user-info">
        <span class="user-name">{{ userName }}</span>
        <span class="user-role">کاربر سامانه</span>
      </div>

      <q-avatar color="blue-1" text-color="primary" size="42px">
        <q-icon name="person" size="24px" />
      </q-avatar>

    </div>

  </header>
</template>

<script setup>
defineProps({
  title: {
    type: String,
    default: 'داشبورد'
  },

  userName: {
    type: String,
    default: 'کاربر میتورا'
  }
})
</script>

<style scoped lang="scss">
.dashboard-header {
  min-height: 100px;
  background: white;
  border-bottom: 1px solid #e8edf4;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px 30px;
  gap: 20px;
}

.header-title h2 {
  font-size: 21px;
  font-weight: 700;
  color: #172b4d;
  margin: 0 0 7px;
}

.header-title p {
  font-size: 12px;
  color: #8995a7;
  margin: 0;
}

.header-user {
  display: flex;
  align-items: center;
  gap: 12px;
}

.user-info {
  display: flex;
  flex-direction: column;
  gap: 5px;
}

.user-name {
  color: #172b4d;
  font-size: 13px;
  font-weight: 600;
}

.user-role {
  color: #8995a7;
  font-size: 11px;
}

@media (max-width: 600px) {
  .dashboard-header {
    padding: 16px;
  }

  .header-title h2 {
    font-size: 17px;
  }

  .header-title p {
    display: none;
  }
}
</style>
