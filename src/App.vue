<template>
  <v-app dark>
    <Navbar />
    <v-content >
      <router-view></router-view>
    </v-content>

  </v-app>
</template>

<script>
// eslint-disable-next-line
/* eslint-disable */
import Navbar from '@/components/Navbar'

export default {
  name: 'App',
  components: { Navbar },
  data () {
    return {

    }
  }
}
</script>

<style lang="scss">

</style>
