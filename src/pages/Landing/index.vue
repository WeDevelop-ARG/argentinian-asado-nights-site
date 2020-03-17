<template>
  <div>
    <Header :scrollDuration="this.scrollDuration" />
    <UpcomingEvents />
    <PreviousEvents />
    <Culture />
    <ContactForm />
    <div class="darker-background">
      <ContactInfo />
      <Footer />
    </div>
  </div>
</template>

<script>
import Header from '../../components/Header'
import UpcomingEvents from '../../components/UpcomingEvents'
import PreviousEvents from '../../components/PreviousEvents'
import Culture from '../../components/Culture'
import ContactForm from '../../components/ContactForm'
import ContactInfo from '../../components/ContactInfo'
import Footer from '../../components/Footer'

export default {
  name: 'landing',
  components: {
    Header,
    UpcomingEvents,
    PreviousEvents,
    Culture,
    ContactForm,
    ContactInfo,
    Footer
  },
  data () {
    return {
      scrollDuration: 2000
    }
  }
}
</script>

<style scoped>
  .darker-background {
    background-color: #212121;
  }
</style>
