
<template>
  <q-layout view="hHh lpR fFf" dir="rtl">

    <AppHeader />

    <q-page-container>
      <router-view />
      <AppFooter />
    </q-page-container>

  </q-layout>
</template>

<script setup>
import AppHeader from '../components/AppHeader.vue'
import AppFooter from '../components/AppFooter.vue'
</script>
