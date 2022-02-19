<template>
    <v-app-bar
      :collapse="!collapseOnScroll"
      :collapse-on-scroll="collapseOnScroll"
      color="#AB47BC"
      text--white
      scroll-target="#scrolling-techniques-6"
    >
      <v-app-bar-nav-icon @click="collapseOnScroll = !collapseOnScroll"></v-app-bar-nav-icon>

      <router-link v-if="collapseOnScroll" to="/">Employee</router-link>
    </v-app-bar>
</template>

<script>
export default {
  name: "navbar",
  data() {
    return {
      collapseOnScroll: true,
    };
  },
};
</script>

<style scopped>
.router-link-active{
    color: #fff;
    text-decoration : none; 
     font-weight: bold;
}
</style>