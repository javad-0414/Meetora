
<template>
  <q-page class="auth-page flex flex-center">

    <q-card class="auth-card">

      <q-card-section class="text-center">
        <q-icon name="meeting_room" size="45px" color="primary" />

        <div class="text-h5 text-weight-bold q-mt-md">
          ثبت‌نام در میتورا
        </div>

        <div class="text-grey q-mt-sm">
          حساب کاربری جدید ایجاد کنید
        </div>
      </q-card-section>

      <q-card-section>
        <q-form @submit.prevent="handleRegister">

          <q-input
            v-model="form.fullName"
            outlined
            label="نام و نام خانوادگی"
            lazy-rules
            :rules="[
              val => !!val || 'نام الزامی است'
            ]"
          />

          <q-input
            v-model="form.email"
            outlined
            label="ایمیل"
            type="email"
            class="q-mt-md"
            lazy-rules
            :rules="[
              val => !!val || 'ایمیل الزامی است',
              val => /.+@.+\..+/.test(val) || 'ایمیل معتبر نیست'
            ]"
          />

          <q-input
            v-model="form.password"
            outlined
            label="رمز عبور"
            :type="showPassword ? 'text' : 'password'"
            class="q-mt-md"
            lazy-rules
            :rules="[
              val => !!val || 'رمز عبور الزامی است',
              val => val.length >= 8 || 'حداقل ۸ کاراکتر وارد کنید'
            ]"
          >

            <template #append>
              <q-icon
                :name="showPassword ? 'visibility_off' : 'visibility'"
                class="cursor-pointer"
                @click="showPassword = !showPassword"
              />
            </template>
          </q-input>

          <q-btn
            type="submit"
            color="primary"
            label="ایجاد حساب کاربری"
            class="full-width q-mt-lg"
            unelevated
            :loading="auth.loading"
          />

        </q-form>

        <div class="text-center q-mt-lg">
          قبلاً ثبت‌نام کرده‌اید؟
          <router-link to="/login">ورود</router-link>
        </div>
      </q-card-section>

      <q-card-section class="text-center">
        <router-link to="/">بازگشت به صفحه اصلی</router-link>
      </q-card-section>

    </q-card>
  </q-page>
</template>

<script setup>
import { useRouter } from 'vue-router'
import { useQuasar } from 'quasar'
import { useAuthStore } from '../stores/auth'
import { reactive, ref } from 'vue'

const showPassword = ref(false)

const router = useRouter()
const $q = useQuasar()
const auth = useAuthStore()

const form = reactive({
  fullName: '',
  email: '',
  password: ''
})

async function handleRegister() {
  try {
    await auth.register(form)

    $q.notify({
      type: 'positive',
      message: 'ثبت‌نام با موفقیت انجام شد'
    })

    router.push('/')
  } catch (error) {
    $q.notify({
      type: 'negative',
      message: error.response?.data?.message || 'ثبت‌نام ناموفق بود'
    })
  }
}
</script>

<style scoped lang="scss">
.auth-page {
  min-height: 100vh;
  background: #f3f5f9;
  padding: 20px;
}

.auth-card {
  width: 100%;
  max-width: 420px;
  border-radius: 18px;
  padding: 15px;
}

a {
  color: #2864b4;
  text-decoration: none;
}
</style>
