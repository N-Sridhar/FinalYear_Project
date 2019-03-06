<template>
  <div class="account">
    <h1>This is Account page</h1>
    <v-container>
      <v-layout row>
        <v-flex xs12 sm6 offset-sm3 my-4>
          <v-card color="brown darken-1">
            <v-card-text>
              <span class="display-1 font-weight-black">Sridhar</span>
              <v-container>
                <form @submit.prevent="onSignUp">
                  <v-layout row>
                    <v-flex xs12>
                      <v-text-field append-icon="home" name="email" label="Mail" id="email" v-model="email" type="email" outline required>
                      </v-text-field>
                    </v-flex>
                  </v-layout>
                  <v-layout row wrap>
                    <v-flex xs12>
                      <v-text-field append-icon="vpn_key" name="password" label="Password" id="password" v-model="password" type="password" outline required>
                      </v-text-field>
                    </v-flex>
                  </v-layout>
                  <v-layout row>
                    <v-flex xs12>
                      <v-text-field name="confirmPassword" label="Confirm Password" id="confirmPassword" v-model="confirmPassword"
                      type="password" :rules="[confirmPasswords]" outline required>
                      </v-text-field>
                    </v-flex>
                  </v-layout>
                  <v-layout row>
                    <v-flex xs12>
                      <v-btn type="submit">Sign Up</v-btn>
                    </v-flex>
                  </v-layout>
                </form>
              </v-container>
            </v-card-text>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
// eslint-disable-next-line
/* eslint-disable */

export default {
  data () {
    return {
      email: '', password: '', confirmPassword: ''
    }
  },
  computed: {
    confirmPasswords () {
      return this.password !== this.confirmPassword ? 'Passwords do not match' : 'Passwords matched'
    },
    user () {
      return this.$store.getters.user
    }
  },
  watch: {
    user(value) {
      if (value !== null && value !== undefined) {
        this.$router.push('/')
      }
    }
  },
  methods: {
    onSignUp () {
      // console.log({email: this.email, password: this.password, confirmPassword: this.confirmPassword })
      this.$store.dispatch('signUserUp', {email: this.email, password: this.password})
    }
  },
}
</script>
