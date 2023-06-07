<template>
    <div class="page-product">
        <img :src="product.get_image">
        <h1>{{ product.name }}</h1>
        <p>{{ product.description }}</p>
        <p><strong>{{ product.price }}</strong></p>
        <!-- <input type="number" class="input" min="1" v-model="quantity"> -->
        <button @click="addToCart">Add to Cart</button>
    </div>
</template>

<style scoped>
    .page-product {
        display: flex;
    }
</style>

<script>
    import axios from 'axios'

    export default {
        name:'Product',
        data() {
            return {
                product: {},
                quantity: 1
            }
        },
        mounted() {
            this.getProduct()
        },
        methods:{
            async getProduct() {
                this.$store.commit('setIsLoading', true)

                const category_slug = this.$route.params.category_slug
                const product_slug = this.$route.params.product_slug

                await axios
                    .get(`/api/v1/products/${category_slug}/${product_slug}`)
                    .then(response=> {
                        this.product = response.data

                        document.title = this.product.name + ' | Helmet Pasal'
                    })
                    .catch(error=> {
                        console.log(error)
                    })

                this.$store.commit('setIsLoading', false)
            },
            addToCart() {
                if(isNaN(this.quantity) || this.quantity < 1) {
                    this.quantity = 1
                }

                const item = {
                    product : this.product,
                    quantity : this.quantity
                }

                this.$store.commit('addToCart', item)
            }
        }
    }
</script>