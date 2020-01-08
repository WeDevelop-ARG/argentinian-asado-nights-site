<template>
  <div class="contact-form" id="join">
    <div class="line third-line"></div>
    <div class="title-section">
      <h3 class="title">Join the event</h3>
      <div class="title-underline"></div>
    </div>
    <div class="form-section">
      <div class="content">
        <h5 class="subtitle">Do you want to be part of the next Asado Night experience?</h5>
        <p class="description">Join us by completing the form below. All fields are mandatory.</p>
        <form class="form" v-on:submit="sendRecipient">
          <div class="input-group">
            <input class="input" name="name" type="text" v-model.trim="$v.name.$model" placeholder="Name">
            <div class="error" v-if="$v.name.$dirty && !$v.name.required">Field is required</div>
          </div>
          <div class="input-group">
            <input class="input" name="surname" type="text" v-model.trim="$v.surname.$model" placeholder="Surname">
            <div class="error" v-if="$v.surname.$dirty && !$v.surname.required">Field is required</div>
          </div>
          <div class="input-group">
            <input class="input" name="email" type="email" v-model.trim="$v.email.$model" placeholder="Email">
            <div class="error" v-if="$v.email.$dirty && !$v.email.required">Field is required</div>
            <div class="error" v-if="$v.email.$dirty && !$v.email.email">Invalid email</div>
          </div>
          <div class="input-group">
            <input class="input" name="phone" type="text" v-model.trim="$v.phone.$model" placeholder="Phone number">
            <div class="error" v-if="$v.phone.$dirty && !$v.phone.required">Field is required</div>
            <div class="error" v-if="$v.phone.$dirty && !$v.phone.numeric">Invalid phone number</div>
          </div>
          <div class="input-group full-width-input">
            <input class="input" name="company" type="text" v-model.trim="$v.company.$model" placeholder="Company">
            <div class="error" v-if="$v.company.$dirty && !$v.company.required">Field is required</div>
          </div>
          <button
            type="submit"
            class="submit-button"
            :class="{'active-submit-button': !$v.$invalid}"
            :disabled="$v.$invalid"
          >
            Join the event
          </button>
        </form>
      </div>
      <img src="../assets/img/wine.svg" class="image" alt="">
    </div>
    <div class="line first-line"></div>
  </div>
</template>

<script>
import { required, email, numeric } from 'vuelidate/lib/validators'
import mailshake from 'mailshake-node'

export default {
  name: 'ContactForm',
  data () {
    return {
      name: '',
      surname: '',
      email: '',
      phone: '',
      company: ''
    }
  },
  validations: {
    name: {
      required
    },
    surname: {
      required
    },
    email: {
      required,
      email
    },
    phone: {
      required,
      numeric
    },
    company: {
      required
    }
  },
  methods: {
    sendRecipient: function (e) {
      e.preventDefault()
      const { email, name, surname, phone, company } = this
      console.log(process.env)
      mailshake(process.env.VUE_APP_MAILSHAKE_API_KEY).recipients.add({
        campaignID: process.env.VUE_APP_CAMPAIGN_ID,
        addAsNewList: true,
        addresses: [
          {
            emailAddress: email,
            fullName: `${name} ${surname}`,
            fields: {
              phone,
              company
            }
          }
        ]
      })
        .then(result => {
          this.$router.push('thankyou')
        })
        .catch(err => {
          console.error(`${err.code}: ${err.message}`)
        })
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

  .input-group {
    display: flex;
    flex-direction: column;
    margin-bottom: 40px;
    width: 48.5%;
  }

  .error {
    margin-top: 5px;
    color: #CA3B3B;
    font-size: 12px;
    line-height: 18px;
  }
  .line {
    position: absolute;
    left: 25.7%;
    border: 0.5px solid rgba(211, 213, 216, 0.24);
  }

  .first-line {
    height: 168px;
    top: 750px;
  }

  .third-line {
    height: 207px;
    top: -120px;
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
    opacity: 0.6;
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
    width: 100%;
    padding-bottom: 8px;
    border: none;
    border-bottom: 1px solid #F0E6DF;
    background-color: transparent;
    color: #F0E6DF;
    font-family: 'Roboto', sans-serif;
    font-size: 16px;
    line-height: 19px;
    outline: none;
    appearance: none;
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
    opacity: 0.6;
    color: #F0E6DF;
  }

  .submit-button {
    margin-top: 50px;
    padding: 25px 45px;
    border: none;
    background-color: rgba(240, 230, 223, 0.16);
    cursor: not-allowed;
    font-weight: 600;
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

  @media(min-width: 1920px) {
    .contact-form {
      padding: 110px 0 200px 300px;
    }
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

    .third-line {
      top: -130px;
    }
  }

    @media (max-width: 1024px) {
    .contact-form {
      padding: 80px 0 200px 100px;
    }

    .title {
      margin-bottom: 20px;
      font-size: 36px;
      line-height: 52px;
    }

    .title-underline {
      top: 38px;
      left: 20px;
      height: 4px;
      width: 200px;
    }

    .image {
      width: 27%;
    }

    .subtitle {
      margin-bottom: 5px;
      font-size: 14px;
      line-height: 22px;
    }

    .description {
      margin: 0 0 50px 0;
      font-size: 14px;
      line-height: 22px;
    }

    .line {
      left: 21.5%;
    }

    .first-line {
      top: 560px;
      height: 175px;
    }

    .third-line {
      top: 1270px;
      height: -100px;
    }

    .form {
      padding-right: 30%;
    }

    .input-group {
      margin-bottom: 35px;
    }

    .input {
      font-size: 14px;
      line-height: 16px;
    }

    .submit-button {
      margin-top: 15px;
      padding: 20px 30px;
      font-size: 12px;
      line-height: 16px;
    }
  }

  @media (max-width: 768px) {
    .line {
      left: 11%;
    }

    .contact-form {
      padding-left: 45px;
    }

    .form {
      padding-right: 150px;
    }

    .third-line {
      top: -60px;
      height: 120px;
    }

    .image {
      display: none;
    }
  }

  @media (max-width: 576px) {
    .line {
      left: 13%;
    }

    .first-line {
      height: 68px;
      top: 718px;
    }

    .third-line {
      height: 83px;
      top: -40px;
    }

    .contact-form {
      padding: 54px 16px 110px 16px;
    }

    .input-group {
      width: 100%;
    }

    .form {
      padding-right: 12px;
    }
  }

  @media (max-width: 360px) {
    .line {
      left: 11.5%;
    }
  }
</style>
