<template>
  <div>
    <label for="filter">Filter</label>
    <input id="filter" type="text" :value="filter" @input="updateFilter" />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  computed: {
    filter() {
      return this.$store.state.filter
    }
  },
  methods: {
    updateFilter(event: InputEvent) {
      this.$store.commit('setFilter', (event.target as HTMLInputElement).value)
    }
  }
})
</script>
