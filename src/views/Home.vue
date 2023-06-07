<template>
  <h1>this is home page</h1>

  <h2>latest product</h2>
  <div class="container">
    <div class="row">
      <div 
        v-for="product in latestProducts" 
        class="card" 
        style="width: 18rem;"
        v-bind:key="product.id">
        <img :src="product.get_thumbnail" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">{{ product.name }}</h5>
          <p class="card-text">{{ product.price }}</p>
          <router-link v-bind:to="product.get_absolute_url" class="btn btn-primary">detail page</router-link>
        </div>
      </div>
    </div>
  </div>
  

</template>

<script>
  import axios from 'axios';

  export default {
    name: 'Home',
    data() {
      return {
        latestProducts:[]
      }
    },
    components: {

    },
    mounted() {
      this.getLatestProducts()

      document.title = 'Home | Helmet Pasal'
    },
    methods: {
      getLatestProducts() {
        axios
          .get('/api/v1/latest-products/')
          .then(response => {
            this.latestProducts = response.data
          })
          .catch(error => {
            console.log(error)
          })
      }
    }
  }
</script>
