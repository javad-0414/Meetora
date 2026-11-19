
<template>
  <div class="not-found-page">
    <div class="not-found-content">
      <div class="brand">
        <q-icon name="meeting_room" size="34px" />
        <span>MEETORA</span>
      </div>

      <div class="error-code">404</div>

      <h4>صفحه موردنظر پیدا نشد</h4>

      <p>
        متأسفانه صفحه‌ای که به دنبال آن هستید وجود ندارد
        یا ممکن است آدرس آن تغییر کرده باشد.
      </p>

      <q-btn
        color="primary"
        icon="home"
        label="بازگشت به صفحه اصلی"
        to="/"
        unelevated
        rounded
        no-caps
      />
    </div>
  </div>
</template>

<style scoped lang="scss">
.not-found-page {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  direction: rtl;
  text-align: center;
  padding: 24px;
  background: #f3f5f9;
}

.not-found-content {
  max-width: 520px;
}

.brand {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  color: #172b4d;
  font-size: 22px;
  font-weight: 700;
  letter-spacing: 1px;
  margin-bottom: 24px;
}

.error-code {
  font-size: clamp(100px, 22vw, 180px);
  line-height: 1;
  font-weight: 800;
  color: #2864b4;
  opacity: 0.9;
}

h4 {
  color: #172b4d;
  font-size: 25px;
  font-weight: 700;
  margin: 24px 0 12px;
}

p {
  color: #7b8494;
  line-height: 2;
  margin-bottom: 28px;
}
</style>
