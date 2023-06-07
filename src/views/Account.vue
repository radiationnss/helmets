<template>
    <button @click="logout()">Log Out</button>
</template>

<script>
import axios from 'axios';

    export default {
        name:'Account',
        methods: {
            logout() {
                axios.defaults.headers.common["Authorization"] = ""

                localStorage.removeItem("token")
                localStorage.removeItem("username")
                localStorage.removeItem("userid")

                this.$store.commit('removeToken')

                this.$router.push('/')
            }
        }
    }
</script>