
<template>
  <q-header class="main-header">
    <q-toolbar class="header-toolbar">

      <div class="brand">
        <q-icon name="meeting_room" size="32px" color="primary" />
        <span>MEETORA</span>
      </div>

      <q-space />

      <div class="nav-links">
        <a href="#home">صفحه اصلی</a>
        <a href="#features">امکانات</a>
        <a href="#about">درباره ما</a>
      </div>

      <q-space />

      <div class="header-actions">
        <q-btn
          flat
          color="primary"
          label="ورود"
          to="/login"
        />

        <q-btn
          unelevated
          color="primary"
          label="ثبت‌نام"
          to="/register"
          class="register-btn"
        />
      </div>

    </q-toolbar>
  </q-header>
</template>

<style scoped lang="scss">
.main-header {
  background: #ffffff;
  color: #172b4d;
  border-bottom: 1px solid #edf0f5;
}

.header-toolbar {
  max-width: 1250px;
  height: 76px;
  margin: auto;
  padding: 0 24px;
}

.brand {
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 22px;
  font-weight: 800;
  letter-spacing: 1px;
  color: #172b4d;
}

.nav-links {
  display: flex;
  align-items: center;
  gap: 32px;
}

.nav-links a {
  text-decoration: none;
  color: #536078;
  font-size: 14px;
  transition: 0.2s;
}

.nav-links a:hover {
  color: #2864b4;
}

.header-actions {
  display: flex;
  align-items: center;
  gap: 10px;
}

.register-btn {
  border-radius: 9px;
  padding: 0 12px;
}

@media (max-width: 650px) {
  .header-toolbar {
    padding: 0 12px;
  }

  .nav-links {
    display: none;
  }

  .brand {
    font-size: 17px;
  }
}
</style>
