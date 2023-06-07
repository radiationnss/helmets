<script>
  import axios from 'axios';
  export default {
    props: {},
    data() {
      return {
              cart: {
                items: []
              }
       }
    },
    methods:{
      logout() {
                axios.defaults.headers.common["Authorization"] = ""

                localStorage.removeItem("token")
                localStorage.removeItem("username")
                localStorage.removeItem("userid")

                this.$store.commit('removeToken')

                this.$router.push('/')
            }
    },
    mounted() {
      this.cart = this.$store.state.cart
    },
    computed: {
      cartTotalLength() {
        let totalLength = 0

        for (let i = 0; i< this.cart.items.length; i++) {
          totalLength += this.cart.items[i].quantity
        }

        return totalLength
      }
    }
  }
</script>

<template>
  <nav>
      <input type="checkbox" id="check">
      <label for="check" class="checkbtn">
        <i class="bi bi-list"></i>
      </label>
      <label class="logo">
          Auction house of nepal</label>
      <ul>
          <li><a class="active"><router-link to="/">Home</router-link></a></li>
          <li><a href=""><router-link to="/about">About</router-link></a></li>
          <li><a href=""><router-link to="/shop">Shop</router-link></a></li>
          <li><a href=""><router-link to="/contact">Contact</router-link></a></li>
          <div class="pt-4">
        <div v-if="$store.state.isAuthenticated">
          <li><a><router-link to="/account">Account</router-link></a></li>
          <button @click="logout()">logout</button>
        </div>
        <div v-else>
          <li><a><router-link to="/login">Login</router-link></a></li>
        </div>
        <li><a><router-link to="/shop">Cart ({{ cartTotalLength }})</router-link></a></li>
      </div>
      </ul>
  </nav>
</template>



<style>
:root {
  --sidebar-bg-color:#000000;
  --sidebar-item-hover:#0047AB;
  --sidebar-item-active:#FFCC00;
}
</style>

<style scoped>

* {
    padding: 0;
    margin: 0;
    text-decoration: none;
    list-style: none;
    box-sizing: border-box;
}

nav{
    background: #0707070e;
    height: 80px;
    width: 100%;
}

label.logo{
    color: #FF2B2B;
    font-size: 40px;
    line-height: 80px;
    padding: 0 100px;
    font-weight: bold;
}

nav ul {
    float: right;
    margin-right: 20px;
}

nav ul li {
    display: inline-block;
    line-height: 80px;
    margin: 0 5px;
}

nav ul li a{
    color: white;
    font-size: 17px;
    padding: 7px 13px;
    border-radius: 3px;
    text-transform: uppercase;
}

a.active,a:hover{
    background: #1b9bff;
    transition: .5s;
}

.checkbtn {
    font-size: 30px;
    color: white;
    float: right;
    line-height: 80px;
    margin-right: 40px;
    cursor: pointer;
    display: none;
}

#check{
    display: none;
}

@media (max-width:952px){
    label.logo{
        font-size: 30px;
        padding-left: 50px;
    }
    nav ul li a{
        font-size: 16px;
    }
}

@media (max-width: 858px){
    .checkbtn{
        display: block;
    }
    ul{
        position: fixed;
        width: 100%;
        height: 100vh;
        background: #2c3e50;
        top: 80px;
        left: -100%;
        text-align: center;
        transition: all .5s;
    }
    nav ul li {
        display: block;
        margin: 50px 0;
        line-height: 30px;
    }
    nav ul li a {
        font-size: 20px;
    }
    a:hover,a.active{
        background: none;
        color: #0082e6;
    }
    #check:checked ~ ul{
        left:0;
    }
}

</style>