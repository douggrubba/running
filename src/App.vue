<template>
  <div class="container mx-auto py-10">
    <h1 class="text-6xl text-green font-semibold tracking-wide">running schedule</h1>
    <week 
      v-for="(week, index) in data"
      :key="week"
      :count="index"
      :start="start"
      :week="week.week"
      :totalDays="totalDays"
      :weekCount="data.length"
    />
  </div>

</template>
<script>
import _ from 'lodash-es'
import moment from 'moment'
import plan from './plan-default'
import Week from './components/Week.vue'

export default {
  components: { Week },

  data() {
    return {
      data: plan,
      start: moment('2/15/2021'),
    } 
  },

  computed: {
    totalDays() {
      let count = 0

      _.each(this.data, (week) => {
        count = count + week?.week.length
      })

      return count
    }
  }
}
</script>