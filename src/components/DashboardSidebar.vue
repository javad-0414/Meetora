
<template>
  <aside class="dashboard-sidebar">

    <!-- Logo -->
    <div class="sidebar-brand">
      <q-icon name="meeting_room" size="32px" />
      <span>MEETORA</span>
    </div>

    <q-separator color="blue-grey-8" />

    <!-- Navigation -->
    <div class="sidebar-menu">

      <div class="menu-title">منوی اصلی</div>

      <q-list>
        <q-item
          clickable
          v-ripple
          to="/dashboard"
          exact
          class="menu-item"
          active-class="active-menu"
        >
          <q-item-section avatar>
            <q-icon name="dashboard" />
          </q-item-section>

          <q-item-section>
            داشبورد
          </q-item-section>
        </q-item>

        <q-item
          clickable
          v-ripple
          to="/dashboard/rooms"
          class="menu-item"
          active-class="active-menu"
        >
          <q-item-section avatar>
            <q-icon name="meeting_room" />
          </q-item-section>

          <q-item-section>
            مدیریت اتاق‌ها
          </q-item-section>
        </q-item>

        <q-item
          clickable
          v-ripple
          to="/dashboard/bookings"
          class="menu-item"
          active-class="active-menu"
        >
          <q-item-section avatar>
            <q-icon name="event_available" />
          </q-item-section>

          <q-item-section>
            رزرو جلسات
          </q-item-section>
        </q-item>
      </q-list>

    </div>

    <!-- Footer -->
    <div class="sidebar-footer">
      <q-separator color="blue-grey-8" />

      <div class="sidebar-version">
        MEETORA
        <span>نسخه 1.0</span>
      </div>
    </div>

  </aside>
</template>

<style scoped lang="scss">
.dashboard-sidebar {
  width: 250px;
  min-height: 100vh;
  background: #172b4d;
  color: white;
  display: flex;
  flex-direction: column;
  padding: 24px 16px;
}

.sidebar-brand {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  font-size: 23px;
  font-weight: 800;
  letter-spacing: 1px;
  padding-bottom: 25px;
}

.sidebar-menu {
  padding-top: 25px;
}

.menu-title {
  color: #9eacc1;
  font-size: 12px;
  margin: 0 12px 15px;
}

.menu-item {
  min-height: 48px;
  border-radius: 9px;
  margin-bottom: 8px;
  color: #d0d9e8;
  transition: 0.2s;
}

.menu-item:hover {
  background: rgba(255, 255, 255, 0.08);
}

.active-menu {
  background: #2864b4;
  color: white;
  font-weight: 600;
}

.sidebar-footer {
  margin-top: auto;
}

.sidebar-version {
  display: flex;
  justify-content: space-between;
  color: #9eacc1;
  font-size: 11px;
  padding: 18px 5px 0;
}

.sidebar-version span {
  direction: rtl;
}

@media (max-width: 700px) {
  .dashboard-sidebar {
    width: 210px;
  }
}
</style>
