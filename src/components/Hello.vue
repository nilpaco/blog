<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <select v-model="selected">
      <option disabled value="">Please select one</option>
      <option v-for="station in stations" v-bind:value="station.id" v-bind:key="station.id">{{ station.name }}</option>
    </select>
    <select v-model="selected2">
      <option disabled value="">Please select one</option>
      <option v-for="station in stations" v-bind:value="station.id" v-bind:key="station.id">{{ station.name }}</option>
    </select>
    <span>Selected: {{ selected }} {{ selected2 }}</span>
  </div>
</template>

<script>
export default {
  name: 'hello',
  data () {
    return {
      msg: 'Welcome to Your Vue.js PWA',
      selected: '',
      selected2: '',
      stations: []
    }
  },
  methods: {
    getStations: function () {
      let url = 'http://barcelonaapi.marcpous.com/fgc/stations.json'
      this.$http.get(url).then((repsonse) => {
        this.stations = repsonse.body.data.fgc
        console.log(this.stations)
      }, reposen => {
        // error
      })
    }
  },
  created () {
    this.getStations()
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
h1,
h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #35495E;
}
</style>
