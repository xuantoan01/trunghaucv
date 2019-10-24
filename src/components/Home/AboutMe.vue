<template>
  <section id="about">
    <div class="about__left">
      <img src="@/assets/images/Coder.png" alt="">
    </div>
    <div class="about__right">
      <h2>About Me</h2>
      <p>Hello, I'm a Hau, fontend developer based on Ha Noi. I was born in Vinh Yen-Vinh Phuc.
        I like music, movie and coding. I am a hard-working, gentle, eager to learn  have rich experience in website design, building and customization. Also I am good at :
      </p>
      <div class="language">
        <span>HTML</span>
        <span>CSS</span>
        <span>JavaScript</span>
        <span>Jquery</span>
        <span>Vuejs</span>
        <span>Wordpress</span>
        <span>C</span>
      </div>
      <a href>
        Download CV
        <i class="fas fa-download"></i>
      </a>
    </div>
  </section>
</template>

<script>
import $ from 'jquery';
export default {
  name:'about_me',
  data() {
    return {
      
    }
  },
   beforeMount() {
    $(document).ready(function() {
      $(window).scroll(function() {
        var animate = $("html, body").scrollTop();
        /////////////////////
      if(animate>180){
        $(".about__left").addClass('fadeInLeft animated slow');
        $(".about__right h2").addClass('fadeInRight animated slow');
        $(".about__right p").addClass('fadeInRight animated slow');
        $(".about__right .language").addClass('fadeInRight animated slow')
      }
      });
    });
  },
  methods: {
    
  },
}
</script>

<style lang="scss" scoped>
@import '@/assets/stylesheets/Home/About.scss';
</style>