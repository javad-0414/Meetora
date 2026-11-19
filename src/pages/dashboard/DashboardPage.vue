
<template>
  <div class="dashboard-page">

    <!-- Welcome -->
    <div class="welcome-section">
      <h4>خوش آمدید 👋</h4>
      <p>در اینجا می‌توانید وضعیت جلسات و اتاق‌های خود را مشاهده کنید.</p>
    </div>

    <!-- Statistics -->
    <div class="row q-col-gutter-md">

      <div class="col-12 col-sm-6 col-md-4">
        <q-card flat bordered class="stat-card">
          <q-card-section>
            <div class="stat-icon blue">
              <q-icon name="meeting_room" size="28px" />
            </div>

            <div class="stat-title">تعداد کل اتاق‌ها</div>
            <div class="stat-number">۱۲</div>
            <div class="stat-description">اتاق ثبت‌شده در سامانه</div>
          </q-card-section>
        </q-card>
      </div>

      <div class="col-12 col-sm-6 col-md-4">
        <q-card flat bordered class="stat-card">
          <q-card-section>
            <div class="stat-icon green">
              <q-icon name="event_available" size="28px" />
            </div>

            <div class="stat-title">رزروهای امروز</div>
            <div class="stat-number">۵</div>
            <div class="stat-description">جلسات برنامه‌ریزی‌شده امروز</div>
          </q-card-section>
        </q-card>
      </div>

      <div class="col-12 col-sm-6 col-md-4">
        <q-card flat bordered class="stat-card">
          <q-card-section>
            <div class="stat-icon orange">
              <q-icon name="calendar_month" size="28px" />
            </div>

            <div class="stat-title">رزروهای آینده</div>
            <div class="stat-number">۱۸</div>
            <div class="stat-description">جلسات ثبت‌شده آینده</div>
          </q-card-section>
        </q-card>
      </div>

    </div>

    <!-- Recent Bookings -->
    <q-card flat bordered class="recent-card">

      <q-card-section class="row items-center justify-between">
        <div>
          <div class="section-title">آخرین رزروها</div>
          <div class="section-description">
            فهرست آخرین جلسات ثبت‌شده
          </div>
        </div>

        <q-btn
          flat
          color="primary"
          label="مشاهده همه"
          icon-right="arrow_back"
          to="/dashboard/bookings"
        />
      </q-card-section>

      <q-separator />

      <q-table
        :rows="bookings"
        :columns="columns"
        row-key="id"
        flat
        hide-pagination
        :rows-per-page-options="[0]"
        no-data-label="رزروی ثبت نشده است"
      >
        <template #body-cell-status="props">
          <q-td :props="props">
            <q-badge
              color="positive"
              label="تأیید شده"
            />
          </q-td>
        </template>
        <template #body-cell-time="props">
          <q-td :props="props">
            <span class="booking-time" dir="ltr">
              <span>{{ props.row.startTime }}</span>
              <span>تا</span>
              <span>{{ props.row.endTime }}</span>
            </span>
          </q-td>
        </template>
      </q-table>

    </q-card>

    <!-- Quick Access -->
    <div class="quick-section">
      <div class="section-title">دسترسی سریع</div>

      <div class="row q-col-gutter-md q-mt-sm">

        <div class="col-12 col-sm-6">
          <q-card flat bordered class="quick-card">
            <q-card-section>
              <q-icon name="meeting_room" size="30px" color="primary" />

              <div class="quick-title">مدیریت اتاق‌ها</div>

              <div class="section-description">
                مشاهده، افزودن، ویرایش و حذف اتاق‌ها
              </div>

              <q-btn
                color="primary"
                outline
                label="ورود به بخش اتاق‌ها"
                to="/dashboard/rooms"
                class="q-mt-md"
              />
            </q-card-section>
          </q-card>
        </div>

        <div class="col-12 col-sm-6">
          <q-card flat bordered class="quick-card">
            <q-card-section>
              <q-icon name="event_available" size="30px" color="secondary" />

              <div class="quick-title">رزرو جلسات</div>

              <div class="section-description">
                مشاهده و مدیریت رزروهای اتاق‌ها
              </div>

              <q-btn
                color="secondary"
                outline
                label="ورود به بخش رزروها"
                to="/dashboard/bookings"
                class="q-mt-md"
              />
            </q-card-section>
          </q-card>
        </div>

      </div>
    </div>

  </div>
</template>

<script setup>
const columns = [
  {
    name: 'room',
    label: 'نام اتاق',
    field: 'room',
    align: 'left'
  },
  {
    name: 'date',
    label: 'تاریخ',
    field: 'date',
    align: 'center'
  },
  {
    name: 'time',
    label: 'ساعت',
    field: 'time',
    align: 'center'
  },
  {
    name: 'status',
    label: 'وضعیت',
    field: 'status',
    align: 'center'
  }
]

const bookings = [
  {
    id: 1,
    room: 'اتاق جلسات شماره ۱',
    date: '۱۴۰۵/۰۸/۲۹',
    startTime: '۰۹:۰۰',
    endTime: '۱۰:۰۰',
    status: 'تأیید شده'
  },
  {
    id: 2,
    room: 'اتاق کنفرانس',
    date: '۱۴۰۵/۰۸/۲۹',
    startTime: '۱۱:۰۰',
    endTime: '۱۲:۰۰',
    status: 'تأیید شده'
  },
  {
    id: 3,
    room: 'اتاق جلسات شماره ۲',
    date: '۱۴۰۵/۰۸/۳۰',
    startTime: '۱۴:۰۰',
    endTime: '۱۵:۰۰',
    status: 'تأیید شده'
  }
]
</script>

<style scoped lang="scss">
.booking-time {
  display: inline-flex;
  direction: ltr;
  align-items: center;
  gap: 6px;
  white-space: nowrap;
}

.welcome-section {
  margin-bottom: 25px;
}

.welcome-section h4 {
  font-size: 23px;
  font-weight: 700;
  color: #172b4d;
  margin: 0 0 8px;
}

.welcome-section p,
.section-description {
  color: #8995a7;
  font-size: 12px;
  margin: 0;
}

.stat-card {
  border-radius: 12px;
  height: 100%;
}

.stat-icon {
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  margin-bottom: 18px;
}

.blue {
  background: #e9f0fc;
  color: #2864b4;
}

.green {
  background: #e4f5ef;
  color: #20a89a;
}

.orange {
  background: #fff2df;
  color: #e9a23b;
}

.stat-title {
  font-size: 13px;
  color: #68768b;
}

.stat-number {
  font-size: 27px;
  font-weight: 800;
  color: #172b4d;
  margin: 8px 0;
}

.stat-description {
  font-size: 11px;
  color: #9aa5b5;
}

.recent-card {
  border-radius: 12px;
  margin-top: 25px;
}

.section-title {
  font-size: 16px;
  font-weight: 700;
  color: #172b4d;
  margin-bottom: 7px;
}

.quick-section {
  margin-top: 28px;
}

.quick-card {
  border-radius: 12px;
  height: 100%;
}

.quick-title {
  font-size: 14px;
  font-weight: 700;
  color: #172b4d;
  margin: 12px 0 7px;
}
</style>
