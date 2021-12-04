<template>
  <Layout>
    <template v-slot:page-bottom-ads>
      <Copyright />
    </template>
  </Layout>
  <!-- <Copyright /> -->
</template>
<script setup>
import DefaultTheme from 'vitepress/theme'
import Copyright from './Copyright.vue'
const { Layout } = DefaultTheme
</script>
