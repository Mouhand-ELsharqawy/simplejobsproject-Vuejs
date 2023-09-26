<template>
  <h1> Job Details Page </h1>
  <!-- <p> the job id is {{ $route.params.id }} </p> -->
  <div v-if="user">
    <p> the job id is {{ id }} </p>
  <p> name:  {{ user.name }}, username: {{ user.username }}, 
    useremail: {{ user.email }}, userjob: {{ user.company.name }}, 
    user phone {{ user.phone }}, </p>
  </div>
  <div v-else>
    <p> data details loading... </p>
  </div>
  
</template>

<script>
export default {
    props: ['id'],
    data(){
        return {
            user: null
        }
    },
    mounted(){
        fetch('https://jsonplaceholder.typicode.com/users/'+this.id)
        .then( res => res.json())
        .then( data => this.user = data)
        .catch( error => console.log(error.message))
    }
    // data(){
    //     return{
    //         id: this.$route.params.id
    //     }
    // }
}
</script>

<style>

</style>