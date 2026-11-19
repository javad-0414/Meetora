
<template>
  <footer class="main-footer">

    <div class="footer-content">

      <div class="footer-brand">
        <div class="brand-title">
          <q-icon name="meeting_room" size="25px" />
          MEETORA
        </div>

        <p>
          میتورا؛ راهکاری ساده برای مدیریت و
          رزرو اتاق‌های جلسات.
        </p>
      </div>

      <div class="footer-info">
        <span>مدیریت بهتر، جلسات منظم‌تر</span>

        <span>© تمامی حقوق محفوظ است.</span>

        <q-btn
          flat
          dense
          color="white"
          icon="keyboard_arrow_up"
          label="بازگشت به بالا"
          @click="scrollToTop"
          class="back-to-top"
        />
      </div>

    </div>

  </footer>
</template>

<script setup>
function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  })
}
</script>

<style scoped lang="scss">
.main-footer {
  background: #172b4d;
  color: white;
  padding: 20px 24px;
  width: 100%;
}

.footer-content {
  max-width: 1200px;
  margin: auto;

  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 20px;
}

.brand-title {
  display: flex;
  align-items: center;
  gap: 9px;
  font-size: 19px;
  font-weight: 800;
}

.footer-brand p {
  color: #c3cede;
  font-size: 12px;
  line-height: 1.8;
  margin: 7px 0 0;
}

.footer-info {
  display: flex;
  align-items: center;
  gap: 18px;
  color: #c3cede;
  font-size: 11px;
}

.back-to-top {
  font-size: 12px;
}

@media (max-width: 650px) {
  .footer-content {
    flex-direction: column;
    align-items: flex-start;
  }

  .footer-info {
    flex-wrap: wrap;
    gap: 10px;
  }
}
</style>
