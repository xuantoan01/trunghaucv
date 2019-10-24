<template>
  <section id="header">
    <div class="header__menu">
      <ul>
        <li>
          <span>Home</span>
        </li>
        <li>
          <span>About</span>
        </li>
        <li>
          <span>Skills</span>
        </li>
        <li>
          <span>Experiences</span>
        </li>
        <li>
          <span>Contact</span>
        </li>
      </ul>
    </div>
    <div class="header__content">
      <div class="infomation">
        <div class="infomation__wrapper">
          <span>Hello I'm</span>
          <h2>Nguyen Trung Hau</h2>
          <h3>Frontend Developer</h3>
          <div class="infomation--contact">
            <ul>
              <li>
                <i class="far fa-envelope"></i>
                hau.nt2271997@gmail.com
              </li>
              <li>
                <i class="fas fa-phone-alt"></i>
                0338 444 456
              </li>
              <li>
                <i class="fas fa-map-marker-alt"></i>
                No. 27, 34 lane, Phuong Mai street, Dong Da district, Ha Noi
              </li>
            </ul>
          </div>
          <div class="box--icon">
            <a href="#" class="btn--icon">
              <i class="fab fa-facebook-f"></i>
            </a>
            <a href="#" class="btn--icon">
              <i class="fab fa-twitter"></i>
            </a>
            <a href="#" class="btn--icon">
              <i class="fab fa-google-plus-g"></i>
            </a>
            <a href="#" class="btn--icon">
              <i class="fab fa-instagram"></i>
            </a>
          </div>
        </div>
      </div>
      <div class="avatar">
        <div class="image--border"></div>
        <img src="@/assets/images/avatar.jpg" alt />
      </div>
    </div>
  </section>
</template>

<script>
import $ from "jquery";
export default {
  name: "header",
  data() {
    return {};
  },
  beforeMount() {
    $(document).ready(function() {
      $(".header__menu ul li:nth-child(1) span").css("color", "#0bceaf");
      /////////////////////////////////
      $(".header__menu ul li:nth-child(1)").click(function() {
        $("html, body").animate(
          { scrollTop: $("section#header").offset().top },
          1000
        );
      });
      /////////////////////////////////
      $(".header__menu ul li:nth-child(2)").click(function() {
        $("html, body").animate(
          { scrollTop: $("section#about").offset().top },
          1000
        );
      });
      /////////////////////////////////
      $(".header__menu ul li:nth-child(3)").click(function() {
        $("html, body").animate(
          { scrollTop: $("section#skills").offset().top },
          1000
        );
      });
      /////////////////////////////////
      $(".header__menu ul li:nth-child(4)").click(function() {
        $("html, body").animate(
          { scrollTop: $("section#experience").offset().top },
          1000
        );
      });
      /////////////////////////////////
      $(".header__menu ul li:nth-child(5)").click(function() {
        $("html, body").animate(
          { scrollTop: $("section#contact").offset().top },
          1000
        );
      });
      ////////////////////////////////
      $(".infomation").addClass("fadeInLeft animated");
      $(".avatar").addClass("fadeInRight animated");
      /////////////////////////////////
      $(window).scroll(function() {
        var animate = $("html, body").scrollTop();
        /////////////////////
        if (animate > 80) {
          $(".header__menu").css({
            background: "#202026",
            "box-shadow": "-1rem 0 3rem #000"
          });
        } else {
          $(".header__menu").css({ background: "", "box-shadow": "" });
        }
        ////////////////////
        if (animate >= 0 && animate < 450) {
          $(".header__menu ul li:nth-child(1) span").css("color", "#0bceaf");
        } else {
          $(".header__menu ul li:nth-child(1) span").css("color", "#fff");
        }
        if (animate > 450 && animate < 1500) {
          $(".header__menu ul li:nth-child(2) span").css("color", "#0bceaf");
        } else {
          $(".header__menu ul li:nth-child(2) span").css("color", "#fff");
        }
        if (animate > 1500 && animate < 2300) {
          $(".header__menu ul li:nth-child(3) span").css("color", "#0bceaf");
        } else {
          $(".header__menu ul li:nth-child(3) span").css("color", "#fff");
        }
        if (animate > 2300 && animate < 3100) {
          $(".header__menu ul li:nth-child(4) span").css("color", "#0bceaf");
        } else {
          $(".header__menu ul li:nth-child(4) span").css("color", "#fff");
        }
        if (animate > 3100) {
          $(".header__menu ul li:nth-child(5) span").css("color", "#0bceaf");
        } else {
          $(".header__menu ul li:nth-child(5) span").css("color", "#fff");
        }
      });
    });
  },
  methods: {}
};
</script>

<style lang="scss" scoped>
@import "@/assets/stylesheets/Layout/Header.scss";
</style>