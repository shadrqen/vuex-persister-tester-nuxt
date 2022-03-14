<template>
  <v-row justify="center" align="center">
    <v-col cols="12" sm="8" md="6">
      <v-card>
        <v-card-title class="headline">
          Vuex Persister Test
        </v-card-title>
        <v-card-text>
          <div class="count">
            COUNT: {{ count }}
          </div>
          <div class="name">
            NAME: {{ name }}
          </div>
        </v-card-text>
        <v-card-actions>
          <v-btn
            color="primary"
            @click="SET_NAME('Some random name')"
          >
            Change Name
          </v-btn>
          <v-spacer />
          <v-btn
            color="primary"
            @click="SET_COUNT"
          >
            Increment Count
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
export default {
  name: 'IndexPage',
  computed: {
    ...mapState(['count']),
    ...mapState('user', ['name'])
  },
  methods: {
    ...mapMutations(['SET_COUNT']),
    ...mapMutations('user', ['SET_NAME'])
  }
}
</script>
