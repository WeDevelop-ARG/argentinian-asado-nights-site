import Vue from 'vue'
import moment from 'moment'
import { getStateImageByName } from '../mixins/states/getStateImageByName'

Vue.filter('toUpperCase', function (value) {
  if (!value) return ''

  return value.toString().toUpperCase()
})

Vue.filter('formatShortMonthDay', function (date) {
  if (!date) return ''

  return moment(date).format('MMM DD')
})

Vue.filter('formatFullMonthDay', function (date) {
  if (!date) return ''

  return moment(date).format('MMMM DD')
})

Vue.filter('getStateImage', function (name) {
  return getStateImageByName(name)
})
