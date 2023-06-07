<script>
import SidebarLink from './SidebarLink'
import axios from 'axios';
import { collapsed, toggleSidebar, sidebarWidth } from './state'

export default {
  props: {},
  components: { SidebarLink },
  setup() {
    return { collapsed,
      toggleSidebar,
      sidebarWidth, 
      cart: {
        items:[]
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
    beforeCreate() {
      this.$store.commit('initializeStore')

      const token = this.$store.state.token

      if (token) {
          axios.defaults.headers.common['Authorization'] = "Token " + token
      } else {
          axios.defaults.headers.common['Authorization'] = ""
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
  <div class="sidebar" :style="{ width: sidebarWidth }">
    <h1>
      <span v-if="collapsed">
        <div>H</div>
        <div>P</div>
      </span>
      <span v-else>Helmet Pasal</span>
    </h1>

    <SidebarLink to="/" icon="fas fa-home">Home</SidebarLink>
    <SidebarLink to="/about" icon="fas fa-columns">About</SidebarLink>
    <SidebarLink to="/shop" icon="fa-solid fa-store">Shop</SidebarLink>
    <SidebarLink to="/contact" icon="fas fa-users">contacts</SidebarLink>
    <div class="pt-4">
        <div v-if="$store.state.isAuthenticated">
          <SidebarLink to="/account" icon="fa-solid fa-user">Account</SidebarLink>
          <SidebarLink to="/" icon="fa-solid fa-right-from-bracket" @click="logout()">logout</SidebarLink>
        </div>
        <div v-else>
          <SidebarLink to="/login" icon="fa-solid fa-user">Login</SidebarLink>
        </div>
        <SidebarLink to="/cart" icon="fa-solid fa-cart-shopping">Cart ( {{ cartTotalLength }} )</SidebarLink>
      </div>
    <span
      class="collapse-icon"
      :class="{ 'rotate-180': collapsed }"
      @click="toggleSidebar"
    >
      <i class="fas fa-angle-double-left" />
    </span>
  </div>
</template>

<style>
:root {
  --sidebar-bg-color: #000000;
  --sidebar-item-hover: #0047ab88;
  --sidebar-item-active: #0047AB;
}
</style>

<style scoped>
.sidebar {
  color: white;
  background-color: var(--sidebar-bg-color);

  float: left;
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  bottom: 0;
  padding: 0.5em;

  transition: 0.3s ease;

  display: flex;
  flex-direction: column;
}

.sidebar h1 {
  height: 2.5em;
}

.collapse-icon {
  position: absolute;
  bottom: 0;
  padding: 0.75em;

  color: rgba(255, 255, 255, 0.7);

  transition: 0.2s linear;
}

.rotate-180 {
  transform: rotate(180deg);
  transition: 0.2s linear;
}
</style>