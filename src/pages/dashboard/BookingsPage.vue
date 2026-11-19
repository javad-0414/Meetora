
<template>
  <div class="bookings-page">
    <!-- عنوان صفحه -->
    <div class="page-heading">
      <div>
        <h5>مدیریت رزرو جلسات</h5>
        <p>رزروها را ثبت و مدیریت کنید.</p>
      </div>

      <q-btn
        color="primary"
        icon="add"
        label="ثبت رزرو جدید"
        @click="openAddDialog"
      />
    </div>

    <!-- جدول رزروها -->
    <q-card flat bordered class="bookings-card">
      <q-card-section>
        <div class="text-h6">فهرست رزروها</div>
      </q-card-section>

      <q-table
        :rows="bookings"
        :columns="columns"
        row-key="id"
        flat
        bordered
        :pagination="pagination"
        no-data-label="هنوز رزروی ثبت نشده است"
      >
        <template #body-cell-time="props">
          <q-td :props="props">
            <span class="booking-time" dir="ltr">
              {{ props.row.startTime }} تا {{ props.row.endTime }}
            </span>
          </q-td>
        </template>

        <template #body-cell-actions="props">
          <q-td :props="props" align="center">
            <q-btn
              flat
              round
              dense
              color="negative"
              icon="delete"
              @click="deleteBooking(props.row.id)"
            />
          </q-td>
        </template>
      </q-table>
    </q-card>

    <!-- فرم ثبت رزرو -->
    <q-dialog v-model="showDialog">
      <q-card class="booking-dialog">
        <q-card-section>
          <div class="text-h6">ثبت رزرو جدید</div>
        </q-card-section>

        <q-card-section class="q-gutter-md">

          
          <q-input
            v-model="form.date"
            label="تاریخ رزرو"
            outlined
            readonly
            placeholder="انتخاب تاریخ"
          >
            <template #append>
              <q-icon name="event" class="cursor-pointer">
                <q-popup-proxy
                  cover
                  transition-show="scale"
                  transition-hide="scale"
                >
                  <div class="calendar-ltr" dir="ltr">
                    <q-date
                      v-model="form.date"
                      calendar="persian"
                    />
                  </div>
                </q-popup-proxy>
              </q-icon>
            </template>
          </q-input>


          
          <div class="row q-col-gutter-sm q-mx-none" dir="rtl">

            <!-- ساعت شروع -->
            <div class="col-6 q-px-sm">
              <q-input
                v-model="form.startTime"
                label="ساعت شروع"
                outlined
                readonly
                placeholder="انتخاب ساعت"
                dir="ltr"
              >
                <template #append>
                  <q-icon name="access_time" class="cursor-pointer">
                    <q-popup-proxy
                        cover
                        transition-show="scale"
                        transition-hide="scale"
                    >
                      <div class="time-picker-ltr" dir="ltr">
                        <q-time
                          v-model="form.startTime"
                          format24h
                        />
                      </div>
                    </q-popup-proxy>
                  </q-icon>
                </template>
              </q-input>
            </div>

            <!-- ساعت پایان -->
            <div class="col-6 q-px-sm">
              <q-input
                v-model="form.endTime"
                label="ساعت پایان"
                outlined
                readonly
                placeholder="انتخاب ساعت"
                dir="ltr"
              >
                <template #append>
                  <q-icon name="access_time" class="cursor-pointer">
                    <q-popup-proxy
                      cover
                      transition-show="scale"
                      transition-hide="scale"
                    >
                      <div class="time-picker-ltr" dir="ltr">
                        <q-time
                          v-model="form.endTime"
                          format24h
                        />
                      </div>
                    </q-popup-proxy>
                  </q-icon>
                </template>
              </q-input>
            </div>

          </div>
          <!-- انتخاب اتاق‌های آزاد -->
          <div class="q-mt-md">
            <q-select
              v-model="form.roomId"
              :options="availableRoomOptions"
              label="انتخاب اتاق آزاد"
              outlined
              emit-value
              map-options
              :disable="!canCheckAvailability || availableRooms.length === 0"
              :hint="
                !canCheckAvailability
                  ? 'ابتدا تاریخ و ساعت جلسه را انتخاب کنید.'
                  : 'فقط اتاق‌های آزاد در این بازه نمایش داده می‌شوند.'
              "
            />
          </div>

          <!-- وضعیت اتاق‌های رزروشده -->
          <div v-if="canCheckAvailability" class="availability-section">

            <div class="text-subtitle2 q-mb-sm">
              وضعیت اتاق‌ها در بازه انتخاب‌شده
            </div>

            <div v-if="reservedBookings.length">
              <q-card
                v-for="booking in reservedBookings"
                :key="booking.id"
                flat
                bordered
                class="reserved-room-card q-mb-sm"
              >
                <q-card-section class="row items-center justify-between">
                  <div>
                    <div class="text-weight-medium">
                      {{ booking.room }}
                    </div>

                    <div class="text-caption text-grey-7" dir="ltr">
                      {{ booking.startTime }} تا {{ booking.endTime }}
                    </div>
                  </div>

                  <q-badge color="negative" label="رزروشده" />
                </q-card-section>
              </q-card>
            </div>

            <q-banner
              v-else
              rounded
              class="bg-green-1 text-green-9"
            >
              در این بازه زمانی هنوز اتاقی رزرو نشده است.
            </q-banner>

            <div class="text-caption text-grey-7 q-mt-sm">
              تعداد اتاق‌های آزاد: {{ availableRooms.length }}
            </div>
          </div>

        </q-card-section>

        <q-card-actions align="left" class="q-pa-md">
          <q-btn
            flat
            label="انصراف"
            color="grey"
            v-close-popup
          />
          <q-btn
            color="primary"
            label="ثبت رزرو"
            @click="addBooking"
          />
        </q-card-actions>
      </q-card>
    </q-dialog>
    <!-- تأیید حذف رزرو -->
    <q-dialog v-model="showDeleteDialog">
      <q-card class="booking-dialog">
        <q-card-section>
          <div class="text-h6">حذف رزرو</div>
          <p class="q-mt-md">
            آیا از حذف این رزرو اطمینان دارید؟
          </p>
        </q-card-section>

        <q-card-actions align="left" class="q-pa-md">
          <q-btn
            flat
            label="انصراف"
            color="grey"
            v-close-popup
          />

          <q-btn
            color="negative"
            label="حذف رزرو"
            @click="confirmDeleteBooking"
          />
        </q-card-actions>
      </q-card>
    </q-dialog>
  </div>
</template>

<script setup>
import { ref, reactive, computed, watch } from 'vue'
import { useQuasar } from 'quasar'

const $q = useQuasar()

const bookings = ref([])

const rooms = ref([
  { id: 1, name: 'اتاق جلسات شماره ۱' },
  { id: 2, name: 'اتاق کنفرانس' },
  { id: 3, name: 'اتاق جلسات شماره ۲' },
  { id: 4, name: 'اتاق مدیریت' },
  { id: 5, name: 'اتاق همایش' },
  { id: 6, name: 'اتاق کوچک' }
])

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
    field: 'startTime',
    align: 'center'
  },
  {
    name: 'actions',
    label: 'عملیات',
    field: 'actions',
    align: 'center'
  }
]

const pagination = ref({
  rowsPerPage: 5
})

const showDialog = ref(false)
const showDeleteDialog = ref(false)
const selectedBookingId = ref(null)

const form = reactive({
  roomId: null,
  date: '',
  startTime: '',
  endTime: ''
})

// بررسی معتبر بودن بازه زمانی
const canCheckAvailability = computed(() => {
  return (
    !!form.date &&
    !!form.startTime &&
    !!form.endTime &&
    form.startTime < form.endTime
  )
})

// پیدا کردن رزروهای تداخل‌دار
const reservedBookings = computed(() => {
  if (!canCheckAvailability.value) return []

  return bookings.value.filter(booking => {
    const sameDate = booking.date === form.date

    const hasOverlap =
      form.startTime < booking.endTime &&
      form.endTime > booking.startTime

    return sameDate && hasOverlap
  })
})

// شناسه اتاق‌های رزروشده
const reservedRoomIds = computed(() => {
  return reservedBookings.value.map(booking => booking.roomId)
})

// اتاق‌های آزاد
const availableRooms = computed(() => {
  if (!canCheckAvailability.value) return []

  return rooms.value.filter(room => {
    return !reservedRoomIds.value.includes(room.id)
  })
})

// گزینه‌های قابل نمایش در فهرست انتخاب اتاق
const availableRoomOptions = computed(() => {
  return availableRooms.value.map(room => ({
    label: room.name,
    value: room.id
  }))
})

// پاک کردن انتخاب اتاق در صورت تغییر تاریخ یا ساعت
watch(
  () => [form.date, form.startTime, form.endTime],
  () => {
    if (
      form.roomId &&
      !availableRooms.value.some(room => room.id === form.roomId)
    ) {
      form.roomId = null
    }
  }
)

function openAddDialog() {
  form.roomId = null
  form.date = ''
  form.startTime = ''
  form.endTime = ''

  showDialog.value = true
}


function addBooking() {
  if (
    !form.date ||
    !form.startTime ||
    !form.endTime ||
    !form.roomId
  ) {
    $q.notify({
      type: 'warning',
      message: 'لطفاً تمام فیلدها را تکمیل کنید.'
    })
    return
  }

  if (form.endTime <= form.startTime) {
    $q.notify({
      type: 'warning',
      message: 'ساعت پایان باید بعد از ساعت شروع باشد.'
    })
    return
  }

  // بررسی مجدد آزاد بودن اتاق
  const isAvailable = availableRooms.value.some(
    room => room.id === form.roomId
  )

  if (!isAvailable) {
    $q.notify({
      type: 'negative',
      message: 'این اتاق در بازه انتخاب‌شده آزاد نیست.'
    })
    form.roomId = null
    return
  }

  const selectedRoom = rooms.value.find(
    room => room.id === form.roomId
  )

  bookings.value.push({
    id: Date.now(),
    roomId: form.roomId,
    room: selectedRoom.name,
    date: form.date,
    startTime: form.startTime,
    endTime: form.endTime
  })

  showDialog.value = false

  $q.notify({
    type: 'positive',
    message: 'رزرو با موفقیت ثبت شد.'
  })
}

function deleteBooking(id) {
  selectedBookingId.value = id
  showDeleteDialog.value = true
}

function confirmDeleteBooking() {
  bookings.value = bookings.value.filter(
    booking => booking.id !== selectedBookingId.value
  )

  showDeleteDialog.value = false
  selectedBookingId.value = null

  $q.notify({
    type: 'positive',
    message: 'رزرو با موفقیت حذف شد.'
  })
}
</script>

<style scoped lang="scss">
.calendar-ltr {
  direction: ltr;
  text-align: left;
}

.calendar-ltr :deep(.q-date) {
  direction: ltr !important;
}

.calendar-ltr :deep(.q-date__calendar-weekdays),
.calendar-ltr :deep(.q-date__calendar-days) {
  direction: ltr !important;
}

:deep(.q-field--readonly .q-field__control::before) {
  border-style: solid;
}

.page-heading {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 16px;
  margin-bottom: 24px;

  h5 {
    margin: 0 0 8px;
    color: #172b4d;
    font-weight: 700;
  }

  p {
    margin: 0;
    color: #7b8494;
  }
}

.bookings-card {
  border-radius: 12px;
  background: white;
}

.booking-dialog {
  width: 450px;
  max-width: 95vw;
  border-radius: 14px;
  direction: ltr;
  text-align: left;
}

.booking-time {
  direction: ltr;
  display: inline-block;
  white-space: nowrap;
}

@media (max-width: 600px) {
  .page-heading {
    align-items: flex-start;
    flex-direction: column;
  }
}

.availability-section {
  margin-top: 20px;
}

.reserved-room-card {
  border-radius: 10px;
  background: #fffafa;
}
</style>
