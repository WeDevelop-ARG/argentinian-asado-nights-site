<template>
  <div class="contact-form">
    <div class="title-section">
      <h3 class="title">Join the event</h3>
      <div class="title-underline"></div>
    </div>
    <div class="form-section">
      <div class="content">
        <h5 class="subtitle">Do you want to be part of the next Asado Night experience?</h5>
        <p class="description">Join us by completing the form below. All fields are mandatory.</p>
        <form class="form">
          <input class="input" name="name" type="text" v-model.trim="contact.name" placeholder="Name">
          <input class="input" name="surname" type="text" v-model.trim="contact.surname" placeholder="Surname">
          <input class="input" name="email" type="email" v-model.trim="contact.email" placeholder="Email">
          <input class="input" name="phone" type="text" v-model.trim="contact.phone" placeholder="Phone number">
          <input class="input full-width-input" name="company" type="text" v-model.trim="contact.company" placeholder="Company">
          <button
            type="submit"
            class="submit-button"
            :class="{'active-submit-button': !checkDisabled}"
            :disabled="checkDisabled"
          >
            Join the event
          </button>
        </form>
      </div>
      <img src="../assets/img/wine.svg" alt="">
    </div>
    <div class="line first-line"></div>
  </div>
</template>

<script>
export default {
  name: 'ContactForm',
  data () {
    return {
      contact: {
        name: '',
        surname: '',
        email: '',
        phone: '',
        company: ''
      }
    }
  },
  computed: {
    checkDisabled: function () {
      const { email, name, surname, phone, company } = this.contact

      return [name, surname, email, phone, company].includes('')
    }
  }
}
</script>

<style scoped>
  .contact-form {
    display: flex;
    flex-direction: column;
    color: #F0E6DF;
    padding: 110px 0 200px 190px;
    position: relative;
  }

  .line {
    position: absolute;
    left: 25.68%;
    border: 1px solid rgba(211, 213, 216, 0.24);
  }

  .first-line {
    height: 168px;
    top: 750px;
  }

  .title-section {
    position: relative;
  }

  .title {
    margin: 0 0 40px 0;
    font-family: 'Kaushan Script', cursive;
    font-weight: normal;
    font-size: 55px;
    line-height: 80px;
    z-index: 2;
    position: relative;
  }

  .title-underline {
    width: 300px;
    height: 8px;
    background: #78ACE6;
    transform: rotate(-1.58deg);
    position: absolute;
    top: 58px;
    left: 36px;
    z-index: 1;
  }

  .subtitle {
    margin-top: 0;
    margin-bottom: 12px;
    font-weight: 600;
    font-size: 20px;
    line-height: 20px;
  }

  .description {
    margin: 0;
    font-weight: 300;
    font-size: 18px;
    line-height: 18px;
  }

  .form-section {
    display: flex;
    align-items: center;
  }

  .form {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    margin-top: 80px;
    padding-right: 140px;
  }

  .input {
    margin-bottom: 40px;
    padding-bottom: 8px;
    border: none;
    border-bottom: 1px solid #F0E6DF;
    background-color: transparent;
    color: #F0E6DF;
    font-family: 'Roboto', sans-serif;
    font-size: 16px;
    line-height: 19px;
    outline: none;
    width: 48.5%;
  }

  .full-width-input {
    width: 100%;
  }

  .input:-webkit-autofill {
    -webkit-text-fill-color: #F0E6DF;
    box-shadow: 0 0 0 1000px #393939 inset;
  }

  .input::placeholder {
    font-weight: 300;
    color: #F0E6DF;
  }

  .submit-button {
    margin-top: 50px;
    padding: 25px 45px;
    border: none;
    background-color: rgba(240, 230, 223, 0.16);
    cursor: not-allowed;
    font-weight: bold;
    font-size: 16px;
    line-height: 22px;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    color: #F0E6DF;
  }

  .active-submit-button {
    cursor: pointer;
    background-color: #78ACE6;
  }

  @media (max-width: 1366px) {
    .line {
      left: 24.9%;
    }
  }

  @media (max-width: 1280px) {
    .line {
      left: 23.2%;
    }
  }
</style>