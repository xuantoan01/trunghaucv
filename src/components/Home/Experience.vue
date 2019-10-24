<template>
  <section id="experience">
    <div class="exp">
      <h2>Education</h2>
      <div class="item" v-for="item in educationInfo" :key="item.index">
        <h4>
          {{item.title}}
          <a href>{{item.place}}</a>
        </h4>
        <div class="years">{{item.years}}</div>
        <p>{{item.content}}</p>
      </div>
    </div>
    <div class="exp">
      <h2>Work Experience</h2>
      <div class="item" v-for="item in workExpInfo" :key="item.index">
        <h4>
          {{item.title}}
          <a href>{{item.place}}</a>
        </h4>
        <div class="years">{{item.years}}</div>
        <p>{{item.content}}</p>
      </div>
    </div>
  </section>
</template>

<script>
import $ from 'jquery';
export default {
  name: "experience",
  data() {
    return {
      educationInfo: [
        {
          title: "Computer Engineering From",
          place: "Ha Noi university of science and technology",
          years: "2015-2016",
          content:
            "I learned a lot of basic knowledge about mathematics, the subjects helped me to be confident about mathematical knowledge as well as the foundation for later knowledge."
        },
        {
          title: "Computer Engineering From",
          place: "Ha Noi university of science and technology",
          years: "2016-2017",
          content:
            "I learned more about logic, basic computer structures such as hardware, bits, as well as knowledge of C programming"
        },
        {
          title: "Computer Engineering From",
          place: "Ha Noi university of science and technology",
          years: "2017-2018",
          content:
            "I learned more about programming, information technology subjects, more practice and code. DIYing some small projects helps me to be more confident in group activities, group management ..."
        },
      ],
      workExpInfo: [
        {
          title: "UI/UX Designer",
          place: "VCCORP",
          years: "06/2019-10/2019",
          content:'I learned about javascript frameworks, studied more about frontend, Participated in a project called Virtual assistant book meeting schedule with vuejs framework.'
        },
      ]
    };
  },
  beforeMount() {
    $(document).ready(function() {
      $(window).scroll(function() {
        var animate = $("html, body").scrollTop();
        /////////////////////
      if(animate>1900){
        $(".item").addClass('fadeInUp animated slow');
      }
      });
    });
  },
};
</script>

<style lang="scss" scoped>
@import '@/assets/stylesheets/Home/Experience.scss';
</style>