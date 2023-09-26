<template>
  <h1> Jobs </h1>
  <!-- <div v-for="job in jobs" :key="job.id" class="job" >
    
    <router-link :to="{name: 'Jobdetail', params: {id: job.id}}"> 
    <h2> {{ job.name }} ( {{  }} ) </h2>
    </router-link>
  </div> -->

  <div v-if="users.length">
    <div v-for="user in users" :key="user.id" class="job">
      <router-link :to="{name: 'Jobdetail', params: { id: user.id}}">
      <h2> {{ user.name }}   "  {{ user.company.name }}  "</h2>
      </router-link>
    </div>
  </div>
  <div v-else>
    <p> data loading... </p>
  </div>
  
</template>

<script>
export default {
    data(){
        return{
            users:[
                // { title:"title 1 ",id:1, details:"lorem" },
                // { title:"title 2 ",id:2, details:"lorem" },
                // { title:"title 3 ",id:3, details:"lorem" },
            ]
        }
    },
    mounted() {
      fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(data => this.users = data)
      .catch(error => console.log(error.message))
    }
}
</script>

<style>

 .job h2{
    background: #f4f4f4;
    padding: 20px;
    border-radius: 10px;
    margin: 10px auto;
    max-width: 600px;
    cursor: pointer;
    color: #444;
  }
  .job h2:hover {
    background: #ddd;
  }
  .job a{
    text-decoration: none;
  }
</style>