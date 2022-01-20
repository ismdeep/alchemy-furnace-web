<template>
  <div>
    <div v-for="run in runs" v-bind:key="run.id">
      <div>
        {{run.exit_code}} {{run.name}} {{run.created_at}}
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "Task",
  data() {
    return {
      taskID: '',
      runs: []
    }
  },
  created() {
    this.$data.taskID = this.$route.params.task_id;
    axios.get(`/api/v1/tasks/${this.$data.taskID}/runs`, {params: {page: 1, size: 10}}).then(({data,status}) => {
      console.log(data)
      console.log(status)
      this.$data.runs = data.data.list;
    })
  }
}
</script>

<style scoped>

</style>