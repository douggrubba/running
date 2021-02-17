<template>
  <h4 class="mt-10 text-5xl italic text-green-400 pl-6 font-semibold text-right">Week {{ num }}</h4>
  <div class="border-t-8 mt-2 border-l-8 border-r-8 border-white rounded">
    <div
      v-for="(day, index) in week"
      :key="index"
      class="flex flex-col border-b-8 border-white"
    >
      <day
        :day="day"
        :start="start"
        :weekNum="num"
      />
    </div>
  </div>
</template>

<script>
import Day from './Day.vue'

export default {
  components: { Day },
  
  props: ['week', 'start', 'count', 'weekCount', 'totalDays'],

  computed: {
    num() {
      return (this?.weekCount - 1) === this?.count ? '∞' : this?.count + 1
    }
  }
}
</script>