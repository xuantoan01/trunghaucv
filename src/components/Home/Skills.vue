<template>
  <section id="skills">
    <div class="skills__technical">
      <h2 class="skills__title">Technical Skills</h2>
      <div v-for="item in technicalSkills" :key="item.index">
        <span>{{item.name}}</span>
        <el-progress :percentage="item.percentage" :stroke-width="8" :color="colorBackground"></el-progress>
      </div>
    </div>
    <div class="skills__professional">
      <h2 class="skills__title">Professional Skills</h2>
      <div class="professional--process" >
        <div class="one--skill" v-for="item in professionalSkills" :key="item.index">
          <el-progress type="circle" :percentage="item.percentage" :stroke-width="8" :color="colorBackground"></el-progress>
          <p>{{item.name}}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import $ from 'jquery';
export default {
  name:'skills',
  data() {
    return {
      colorBackground: '#0bceaf',
      technicalSkills:[
        {
          name:'HTML',
          percentage:90,

        },
        {
          name:'CSS',
          percentage:80,
          
        },
        {
          name:'JavaScript',
          percentage:80,
          
        },
        {
          name:'Jquery',
          percentage:70,
          
        },
        {
          name:'Vuejs',
          percentage:70,
          
        },
        {
          name:'Wordpress',
          percentage:60,
          
        }
      ],
      professionalSkills:[
        {
          name:'Communication',
          percentage:95,
        },
        {
          name:'Team Work',
          percentage:85,
        },
        {
          name:'Project Management',
          percentage:70,
        },
        {
          name:'Creativity',
          percentage:65,
        }
      ]
    }
  },
  beforeMount() {
    $(document).ready(function() {
      $(window).scroll(function() {
        var animate = $("html, body").scrollTop();
        /////////////////////
      if(animate>1300){
        $(".skills__technical").addClass('fadeInLeft animated slow');
        $(".skills__professional").addClass('fadeInRight animated slow');
      }
      });
    });
  },
  methods: {
    
  },
}
</script>

<style lang="scss" scoped>
@import '@/assets/stylesheets/Home/Skills.scss';
</style>