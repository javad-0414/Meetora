
<template>
  <div class="rooms-page">

    <!-- Page Introduction -->
    <div class="page-intro">
      <div>
        <h4>مدیریت اتاق‌ها</h4>
        <p>در این بخش می‌توانید اتاق‌های جلسات را مدیریت کنید.</p>
      </div>

      <q-btn
        color="primary"
        icon="add"
        label="افزودن اتاق"
        @click="openAddDialog"
      />
    </div>

    <!-- Rooms Table -->
    <q-card flat bordered class="rooms-card">

      <q-card-section>
        <div class="section-title">فهرست اتاق‌ها</div>
        <div class="section-description">
          تعداد کل اتاق‌ها: {{ rooms.length }}
        </div>
      </q-card-section>

      <q-separator />

      <q-table
        :rows="rooms"
        :columns="columns"
        row-key="id"
        flat
        :rows-per-page-options="[5, 10]"
        no-data-label="هیچ اتاقی ثبت نشده است"
      >

        <!-- Capacity -->
        <template #body-cell-capacity="props">
          <q-td :props="props">
            {{ props.value }} نفر
          </q-td>
        </template>

        <!-- Actions -->
        <template #body-cell-actions="props">
          <q-td :props="props">
            <q-btn
              flat
              round
              dense
              color="primary"
              icon="edit"
              @click="openEditDialog(props.row)"
            >
              <q-tooltip>ویرایش اتاق</q-tooltip>
            </q-btn>

            <q-btn
              flat
              round
              dense
              color="negative"
              icon="delete"
              @click="openDeleteDialog(props.row)"
            >
              <q-tooltip>حذف اتاق</q-tooltip>
            </q-btn>
          </q-td>
        </template>

      </q-table>
    </q-card>

    <!-- Add / Edit Dialog -->
    <q-dialog v-model="formDialog">
      <q-card class="form-dialog">

        <q-card-section>
          <div class="dialog-title">
            {{ isEditing ? 'ویرایش اتاق' : 'افزودن اتاق جدید' }}
          </div>
        </q-card-section>

        <q-separator />

        <q-card-section>
          <q-form @submit="saveRoom">

            <q-input
              v-model="form.name"
              outlined
              label="نام اتاق"
              placeholder="مثلاً اتاق کنفرانس"
              :rules="[val => !!val.trim() || 'نام اتاق را وارد کنید']"
            />

            <q-input
              v-model.number="form.capacity"
              outlined
              type="number"
              label="ظرفیت اتاق"
              suffix="نفر"
              class="q-mt-md"
              :rules="[
                val => val > 0 || 'ظرفیت باید بیشتر از صفر باشد'
              ]"
            />

            <div class="dialog-actions">
              <q-btn
                flat
                label="انصراف"
                color="grey-7"
                v-close-popup
              />

              <q-btn
                color="primary"
                :label="isEditing ? 'ذخیره تغییرات' : 'ثبت اتاق'"
                type="submit"
              />
            </div>

          </q-form>
        </q-card-section>

      </q-card>
    </q-dialog>

    <!-- Delete Confirmation -->
    <q-dialog v-model="deleteDialog">
      <q-card class="delete-dialog">

        <q-card-section>
          <div class="dialog-title">حذف اتاق</div>

          <p class="delete-message">
            آیا از حذف اتاق «{{ selectedRoom?.name }}» اطمینان دارید؟
          </p>
        </q-card-section>

        <q-card-actions align="left">
          <q-btn
            flat
            label="انصراف"
            color="grey-7"
            v-close-popup
          />

          <q-btn
            color="negative"
            label="حذف اتاق"
            @click="deleteRoom"
          />
        </q-card-actions>

      </q-card>
    </q-dialog>

  </div>
</template>

<script setup>
import { ref, reactive } from 'vue'
import { useQuasar } from 'quasar'

const $q = useQuasar()

// Table columns
const columns = [
  {
    name: 'id',
    label: 'شناسه',
    field: 'id',
    align: 'center'
  },
  {
    name: 'name',
    label: 'نام اتاق',
    field: 'name',
    align: 'left'
  },
  {
    name: 'capacity',
    label: 'ظرفیت',
    field: 'capacity',
    align: 'center'
  },
  {
    name: 'actions',
    label: 'عملیات',
    field: 'actions',
    align: 'center'
  }
]

// Sample rooms
const rooms = ref([
  { id: 1, name: 'اتاق جلسات شماره ۱', capacity: 10 },
  { id: 2, name: 'اتاق کنفرانس', capacity: 20 },
  { id: 3, name: 'اتاق جلسات شماره ۲', capacity: 8 },
  { id: 4, name: 'اتاق مدیریت', capacity: 6 },
  { id: 5, name: 'اتاق همایش', capacity: 30 },
  { id: 6, name: 'اتاق کوچک', capacity: 4 }
])

// Form states
const formDialog = ref(false)
const deleteDialog = ref(false)
const isEditing = ref(false)
const selectedRoom = ref(null)

// Form data
const form = reactive({
  id: null,
  name: '',
  capacity: 1
})

// Open add dialog
function openAddDialog() {
  isEditing.value = false

  form.id = null
  form.name = ''
  form.capacity = 1

  formDialog.value = true
}

// Open edit dialog
function openEditDialog(room) {
  isEditing.value = true

  form.id = room.id
  form.name = room.name
  form.capacity = room.capacity

  formDialog.value = true
}

// Save room
function saveRoom() {
  if (isEditing.value) {
    const index = rooms.value.findIndex(
      room => room.id === form.id
    )

    if (index !== -1) {
      rooms.value[index] = {
        ...form
      }
    }
  } else {
  const newId = rooms.value.length
    ? Math.max(...rooms.value.map(room => room.id)) + 1
    : 1

  rooms.value.push({
    id: newId,
    name: form.name.trim(),
    capacity: form.capacity
  })
}
}

// Open delete dialog
function openDeleteDialog(room) {
  selectedRoom.value = room
  deleteDialog.value = true
}

// Delete room
function deleteRoom() {
  rooms.value = rooms.value.filter(
    room => room.id !== selectedRoom.value.id
  )

  deleteDialog.value = false

  $q.notify({
    type: 'positive',
    message: 'اتاق با موفقیت حذف شد.',
    position: 'top'
  })

  selectedRoom.value = null
}
</script>

<style scoped lang="scss">

.page-intro {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  margin-bottom: 25px;
}

.page-intro h4 {
  font-size: 23px;
  font-weight: 700;
  color: #172b4d;
  margin: 0 0 8px;
}

.page-intro p,
.section-description {
  color: #8995a7;
  font-size: 12px;
  margin: 0;
}

.rooms-card {
  border-radius: 12px;
}

.section-title,
.dialog-title {
  font-size: 16px;
  font-weight: 700;
  color: #172b4d;
}

.section-description {
  margin-top: 7px;
}

.form-dialog {
  width: 100%;
  max-width: 450px;
  border-radius: 12px;
}

.delete-dialog {
  width: 100%;
  max-width: 380px;
  border-radius: 12px;
}

.delete-message {
  font-size: 13px;
  color: #68768b;
  line-height: 2;
  margin: 15px 0 0;
}

.dialog-actions {
  display: flex;
  justify-content: flex-end;
  gap: 10px;
  margin-top: 25px;
}

@media (max-width: 550px) {
  .page-intro {
    align-items: flex-start;
    flex-direction: column;
  }
}

.form-dialog,
.delete-dialog {
  direction: ltr;
  text-align: left;
}
</style>
