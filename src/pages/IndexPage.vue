
<template>
  <q-page class="home-page">

    <!-- Hero Section -->
    <section id="home" class="hero-section">
      <div class="hero-content">

        <div class="hero-badge">
          <q-icon name="event_available" />
          مدیریت هوشمند جلسات
        </div>

        <h1>
          جلسات خود را
          <span>هوشمندانه مدیریت کنید</span>
        </h1>

        <p>
          با میتورا، اتاق جلسات موردنظر خود را به‌سادگی
          پیدا و در زمان دلخواه رزرو کنید.
          مدیریت فضاهای جلسات، ساده‌تر از همیشه.
        </p>

        <div class="hero-actions">
          <q-btn
            color="primary"
            unelevated
            label="شروع استفاده از میتورا"
            to="/register"
            icon-right="arrow_back"
            size="lg"
            class="main-btn"
          />

          <q-btn
            outline
            color="primary"
            label="ورود به حساب"
            to="/login"
            size="lg"
            class="main-btn"
          />
        </div>

        <div class="hero-note">
          <q-icon name="check_circle" color="positive" />
          رزرو آسان، سریع و بدون تداخل زمانی
        </div>

      </div>

      <div class="hero-visual">
        <div class="visual-card">
          <div class="visual-top">
            <div>
              <span class="visual-caption">فضای جلسات</span>
              <h3>اتاق‌های شما</h3>
            </div>
            <q-icon name="meeting_room" size="32px" color="primary" />
          </div>

          <div class="room-preview">
            <q-icon name="groups" size="35px" />
            <div>
              <strong>اتاق جلسات مرکزی</strong>
              <small>ظرفیت ۱۲ نفر</small>
            </div>
            <q-space />
            <q-badge color="positive">آزاد</q-badge>
          </div>

          <div class="room-preview">
            <q-icon name="groups" size="35px" />
            <div>
              <strong>اتاق کنفرانس</strong>
              <small>ظرفیت ۲۰ نفر</small>
            </div>
            <q-space />
            <q-badge color="negative">رزرو شده</q-badge>
          </div>

          <div class="visual-bottom">
            <q-icon name="calendar_month" color="primary" />
            مدیریت آسان زمان جلسات
          </div>
        </div>
      </div>
    </section>

    <!-- Features Section -->
    <section id="features" class="features-section">

      <div class="section-heading">
        <span>امکانات میتورا</span>
        <h2>همه چیز برای یک جلسه منظم</h2>
        <p>
          ابزارهای موردنیاز برای مدیریت اتاق‌ها و
          برنامه‌ریزی جلسات در یک محیط ساده.
        </p>
      </div>

      <div class="features-grid">

        <div class="feature-card">
          <q-icon name="meeting_room" />
          <h3>مدیریت اتاق‌ها</h3>
          <p>
            مشاهده و مدیریت اتاق‌های جلسات
            و مشخصات هر اتاق.
          </p>
        </div>

        <div class="feature-card">
          <q-icon name="calendar_month" />
          <h3>رزرو آسان</h3>
          <p>
            انتخاب تاریخ و ساعت موردنظر
            برای برگزاری جلسات.
          </p>
        </div>

        <div class="feature-card">
          <q-icon name="event_busy" />
          <h3>جلوگیری از تداخل</h3>
          <p>
            بررسی زمان‌های رزروشده و جلوگیری
            از ثبت رزروهای هم‌زمان.
          </p>
        </div>

      </div>
    </section>

    <!-- About Section -->
    <section id="about" class="about-section">
      <div>
        <span class="about-label">درباره میتورا</span>
        <h2>مدیریت جلسات، بدون پیچیدگی</h2>
      </div>

      <p>
        میتورا با هدف ساده‌سازی فرآیند رزرو اتاق‌های جلسات
        طراحی شده است. این سامانه به اعضای یک مجموعه کمک
        می‌کند تا اتاق مناسب را انتخاب کنند، زمان جلسات را
        مدیریت کنند و از تداخل برنامه‌ها جلوگیری شود.
      </p>
    </section>

    <!-- Final CTA -->
    <section class="cta-section">
      <h2>برای مدیریت بهتر جلسات آماده‌اید؟</h2>
      <p>
        همین حالا وارد میتورا شوید و تجربه‌ای ساده‌تر
        در رزرو اتاق‌های جلسات داشته باشید.
      </p>

      <q-btn
        unelevated
        color="white"
        text-color="primary"
        label="ثبت‌نام در میتورا"
        to="/register"
        size="lg"
      />
    </section>

  </q-page>
</template>

<style scoped lang="scss">
.home-page {
  background: #ffffff;
  color: #172b4d;
}

.hero-section {
  max-width: 1250px;
  margin: auto;
  padding: 90px 35px;
  display: grid;
  grid-template-columns: 1fr 0.9fr;
  align-items: center;
  gap: 60px;
}

.hero-badge {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  background: #eaf1fc;
  color: #2864b4;
  padding: 9px 16px;
  border-radius: 30px;
  font-size: 13px;
}

.hero-content h1 {
  font-size: clamp(30px, 4vw, 48px);
  line-height: 1.8;
  font-weight: 800;
  margin: 25px 0 15px;
}

.hero-content h1 span {
  display: block;
  color: #2864b4;
}

.hero-content > p {
  color: #69768c;
  font-size: 15px;
  line-height: 2.3;
  max-width: 520px;
}

.hero-actions {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  margin-top: 28px;
}

.main-btn {
  border-radius: 10px;
  padding: 8px 18px;
}

.hero-note {
  display: flex;
  align-items: center;
  gap: 8px;
  margin-top: 25px;
  font-size: 13px;
  color: #69768c;
}

.hero-visual {
  background: linear-gradient(145deg, #eaf1fc, #f2f8f8);
  border-radius: 28px;
  padding: 35px;
}

.visual-card {
  background: white;
  border-radius: 20px;
  padding: 25px;
  box-shadow: 0 15px 45px #172b4d12;
}

.visual-top {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 25px;
}

.visual-caption {
  color: #8793a7;
  font-size: 12px;
}

.visual-top h3 {
  margin: 5px 0;
  font-size: 20px;
}

.room-preview {
  display: flex;
  align-items: center;
  gap: 12px;
  background: #f7f9fc;
  padding: 15px;
  border-radius: 12px;
  margin-bottom: 12px;
  color: #2864b4;
}

.room-preview div {
  display: flex;
  flex-direction: column;
  gap: 6px;
  color: #172b4d;
}

.room-preview strong {
  font-size: 13px;
}

.room-preview small {
  color: #8994a6;
}

.visual-bottom {
  display: flex;
  align-items: center;
  gap: 10px;
  color: #69768c;
  font-size: 13px;
  margin-top: 20px;
}

.features-section {
  background: #f7f9fc;
  padding: 85px 25px;
}

.section-heading {
  text-align: center;
  max-width: 650px;
  margin: auto;
}

.section-heading > span,
.about-label {
  color: #2864b4;
  font-weight: 700;
  font-size: 14px;
}

.section-heading h2,
.about-section h2 {
  font-size: 30px;
  margin: 15px 0;
  font-weight: 800;
}

.section-heading p,
.about-section p {
  color: #69768c;
  line-height: 2.2;
  font-size: 14px;
}

.features-grid {
  max-width: 1150px;
  margin: 45px auto 0;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 22px;
}

.feature-card {
  background: white;
  border: 1px solid #edf0f5;
  border-radius: 17px;
  padding: 30px;
  transition: 0.25s;
}

.feature-card:hover {
  transform: translateY(-6px);
  box-shadow: 0 12px 30px #172b4d0d;
}

.feature-card > .q-icon {
  font-size: 36px;
  color: #2864b4;
}

.feature-card h3 {
  font-size: 17px;
  margin: 20px 0 10px;
}

.feature-card p {
  font-size: 13px;
  line-height: 2.2;
  color: #69768c;
}

.about-section {
  max-width: 1100px;
  margin: auto;
  padding: 85px 30px;
  display: grid;
  grid-template-columns: 0.8fr 1.2fr;
  gap: 60px;
  align-items: center;
}

.cta-section {
  background: #172b4d;
  color: white;
  text-align: center;
  padding: 65px 20px;
}

.cta-section h2 {
  font-size: 27px;
}

.cta-section p {
  color: #c3cede;
  line-height: 2.2;
  margin: 20px auto 25px;
}

@media (max-width: 800px) {
  .hero-section {
    grid-template-columns: 1fr;
    padding: 55px 22px;
    gap: 35px;
  }

  .features-grid {
    grid-template-columns: 1fr;
    max-width: 500px;
  }

  .about-section {
    grid-template-columns: 1fr;
    gap: 15px;
  }

  .hero-visual {
    padding: 18px;
  }
}

@media (max-width: 450px) {
  .hero-actions {
    flex-direction: column;
  }

  .main-btn {
    width: 100%;
  }

  .section-heading h2,
  .about-section h2 {
    font-size: 24px;
  }
}
</style>

