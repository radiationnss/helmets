<template>
    <h1>this is the shop page</h1>
    <h2>This is all our products</h2>
    <div class="container">
        <div class="row">
            <div
                v-for="product in allProducts" 
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

<style scoped>
    .card {
        display: flex;
    }
</style>

<script>
    //console.log("muji");
    import axios from 'axios';

    export default{
        name: 'Shop',
        data() {
            return {
                allProducts:[]
            }
        },
        components: {

        },
        mounted() {
            this.getAllProducts()
        },
        methods: {
            getAllProducts() {
                axios
                    .get('/api/v1/all-products/')
                    .then(response => {
                        this.allProducts = response.data
                    })
                    .catch(error => {
                        console.log(error)
                    })
            }
        }
    }
</script>