<template>
  <nav>
    <v-toolbar flat app class="cyan accent-3">
      <v-toolbar-title>
        <v-toolbar-side-icon color="black--text" @click="drawer = !drawer"></v-toolbar-side-icon>
        <span class="font-weight-black font-italic display-1 deep-orange--text">V.G.S </span>
        <span class="title brown--text text--darken-1">Electronics</span>
        <!-- <v-icon color="deep-orange" right x-large>toys</v-icon> -->
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn flat color="black" @click="$router.push('/')">
        <v-icon left>home</v-icon>
        <span>Home</span>
      </v-btn>
      <v-btn flat color="black" @click="$router.push('products')">
        <v-icon left>shopping_cart</v-icon>
        <span>Products</span>
      </v-btn>
      <v-btn flat color="black" @click="$router.push('complaint')">
        <v-icon left>bug_report</v-icon>
        <span>Complaint</span>
      </v-btn>
      <v-btn flat color="black" @click="$router.push('account')">
        <v-icon left>exit_to_app</v-icon>
        <span>Account</span>
      </v-btn>
    </v-toolbar>

    <v-navigation-drawer v-model="drawer" app class="light-blue accent-3">
      <v-list>
        <v-list-tile v-for="option in options" :key="option.text" router :to="option.route">
          <v-list-tile-action>
            <v-icon class="white--text">{{ option.icon }}</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title class="white--text">{{ option.text }}</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>

  </nav>
</template>

<script>
// eslint-disable-next-line
/* eslint-disable */

export default {
  data() {
    return {
      drawer: false,
      options: [
        { icon: 'home', text: 'Home', route: '/'},
        { icon: 'shopping_cart', text: 'Products', route: '/products'},
        { icon: 'bug_report', text: 'Complaint', route: '/complaint'},
        { icon: 'exit_to_app', text: 'Account', route: '/account'}
      ]
    }
  }
}
</script>
