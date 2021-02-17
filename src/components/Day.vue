<template>
  <div :class="classStr">
    <div class="flex-grow-0 p-5 text-3xl font-bold">{{ day.day }}</div>
    <div class="flex-1 text-right p-5 text-3xl font-light">{{ addMi }}</div>
  </div>
</template>

<script>
import _ from 'lodash-es'
import moment from 'moment';

export default {
  props: ['day', 'start', 'weekNum'],

  data() {
    return {
      days: ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun']
    }
  },

  computed: {
    classStr() {
      let classStr = 'flex flex-row transition-colors ease-in-out duration-200 bg-green-600'

      if (this?.day?.desc === 'rest') {
        classStr = 'flex flex-row transition-colors ease-in-out duration-200 bg-green-800 text-green-600'
      } else if (_.isNumber(this?.day?.desc)) {
        classStr = 'flex flex-row transition-colors ease-in-out duration-200 bg-green-400 hover:bg-green-500 hover:shadow-inner'
      } 
      else if (this.isToday) {
        classStr = 'flex flex-row transition-colors ease-in-out duration-200 bg-blue-400 hover:bg-blue-500 hover:shadow-inner'
      }

      return classStr
    },

    addMi() {
      return _.isNumber(this?.day?.desc) ? `🏃‍♂️ ${this?.day?.desc} mi` : this?.day?.desc
    },

    isToday() {
      const offsetDay = this.start.add(
        ((this.weekNum - 1) * 7) + this.days.indexOf(this.day.day),
        'days'
      )
      
      const offset = moment().diff(offsetDay, 'days')

      return offset === 0
    }
  }
}
</script>