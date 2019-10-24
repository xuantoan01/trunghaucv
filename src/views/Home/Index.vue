<template>
  <div>
    <about-me></about-me>
    <my-ability></my-ability>
    <skills></skills>
    <experience></experience>
    <contact></contact>
  </div>
</template>

<script>
import AboutMe from "@/components/Home/AboutMe.vue";
import MyAbility from "@/components/Home/MyAbility.vue";
import Skills from "@/components/Home/Skills.vue";
import Experience from "@/components/Home/Experience.vue";
import Contact from "@/components/Home/Contact.vue";
export default {
  name: "home_index",
  components: {
    AboutMe,
    MyAbility,
    Skills,
    Experience,
    Contact,
  }
};
</script>

<style lang="scss" scoped>
</style>