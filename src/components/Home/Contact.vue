<template>
  <section id="contact">
    <h2>Contact Me</h2>
    <div class="contact__card">
      <div class="wapper--card">
        <div class="icon">
          <i class="fas fa-map-marker-alt"></i>
        </div>
        <h4>Adress</h4>
        <p>No. 27, 34 lane, Phuong Mai street, Dong Da district, Ha Noi</p>
      </div>
      <div class="wapper--card">
        <div class="icon">
          <i class="far fa-envelope"></i>
        </div>
        <h4>Email</h4>
        <p>hau.nt2271997@gmail.com</p>
      </div>
      <div class="wapper--card">
        <div class="icon">
          <i class="fas fa-phone-alt"></i>
        </div>
        <h4>Phone</h4>
        <p>0338 444 456</p>
      </div>
    </div>
    <h2>Send Message</h2>
    <div class="contact__message">
      <div class="form--message">
        <form class="form-box">
          <div class="input-box">
            <input type="text" class="input-field" required/>
            <label>Your Name</label>
          </div>
          <div class="input-box">
            <input type="text" class="input-field" required/>
            <label>Your Email</label>
          </div>
          <div class="input-box">
            <textarea name="message" rows="10" placeholder="Input your message here"></textarea>
          </div>
          <input type="submit" value="Send Message" class="submit" />
        </form>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "contact",
};
</script>

<style lang="scss" scoped>
@import '@/assets/stylesheets/Home/Contact.scss';
</style>