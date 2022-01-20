<template>
  <div>
    <div v-for="task in tasks" v-bind:key="task.id">
      <span>
        <a :href="'/tasks/'+task.id">{{task.name}}</a>
      </span>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: 'Tasks',
  data() {
    return {
      'tasks': []
    }
  },
  created() {
    axios.get(`/api/v1/tasks`).then(({data,status}) => {
      console.log(data)
      console.log(status)
      this.$data.tasks = data.data;
    })
  }
}
</script>
