<template>
  <div class="ability">
    <h2>What can i do</h2>
    <div class="ability__card">
      <div class="one--card">
        <div class="face face1">
          <div class="content">
            <img src="@/assets/images/sketch.png" alt />
            <h3>UI Design</h3>
          </div>
        </div>
        <div class="face face2">
          <div class="content">
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perspiciatis sit eos eaque suscipit labore itaque quia voluptate quo pariatur nihil maxime, enim qui magni cum ullam alias voluptatum. Reprehenderit, voluptatem</p>
          </div>
        </div>
      </div>
      <div class="one--card">
        <div class="face face1">
          <div class="content">
            <img src="@/assets/images/data.png" alt />
            <h3>Web Development</h3>
          </div>
        </div>
        <div class="face face2">
          <div class="content">
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perspiciatis sit eos eaque suscipit labore itaque quia voluptate quo pariatur nihil maxime, enim qui magni cum ullam alias voluptatum. Reprehenderit, voluptatem</p>
          </div>
        </div>
      </div>
      <div class="one--card">
        <div class="face face1">
          <div class="content">
            <img src="@/assets/images/api.png" alt />
            <h3>Restful API</h3>
          </div>
        </div>
        <div class="face face2">
          <div class="content">
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perspiciatis sit eos eaque suscipit labore itaque quia voluptate quo pariatur nihil maxime, enim qui magni cum ullam alias voluptatum. Reprehenderit, voluptatem</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "my_ability",
  data() {
    return {};
  },
  methods: {}
};
</script>

<style lang="scss" scoped>
@import '@/assets/stylesheets/Home/MyAbility.scss';
</style>