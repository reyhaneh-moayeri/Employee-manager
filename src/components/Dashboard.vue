<template>
  <v-container>
   Dashboard
     <v-btn
      class="mx-2"
      fab
      dark
      large
      color="#EC407A"
      fixed
      right=0
      bottom=0
      @click="goToDashboard"
    >
      <v-icon dark>
        mdi-pencil
      </v-icon>
    </v-btn>
 </v-container>
</template>

<script>
export default {
  name: "dashboard",
  data() {
    return {};
  },
  methods:{
      goToDashboard(){
          this.$router.push('/new')
      }
  }
};
</script>
