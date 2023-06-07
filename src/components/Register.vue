<template>
    <form @submit.prevent="submitForm" class="sign-up">
        <label>Username</label>
        <input type="text" v-model="username" class="input">
        <label>Password</label>
        <input type="password" v-model="password" class="input">
        <label>Confirm Password</label>
        <input type="password" v-model="password2" class="input">
        <div v-if="errors.length">
            <p v-for="error in errors" v-bind:key="error">{{ error }}</p>
        </div>
        <button @click="changeSignUpValue">Register</button>
    </form>
</template>

<script>

import axios from 'axios';
export default {
    name:'Register',
    data() {
        return {
            username: '',
            password: '',
            password2: '',
            errors: []
        }
    },
    mounted() {
    document.title = 'register'
  },
    methods: {
        submitForm(){
            this.errors=[]

            if (this.username === '') {
                this.errors.push('the username is missing!!!')
            }
            if (this.password === '') {
                this.errors.push('the password is missing!!!')
            }
            if (this.password != this.password2) {
                this.errors.push('password not same :(')
            }

            if(!this.errors.length) {
                const formData = {
                    username: this.username,
                    password: this.password
                }

                axios
                    .post("/api/v1/users/", formData)
                    .then(() => {
                        // Hard reload the page
                        location.reload()
                        })
                    .catch(error => {
                        if(error.response) {
                            for (const property in error.response.data) {
                                this.error.push(`${property}: ${error.response.data[property]}`)
                            }

                            console.log(JSON.stringify(error.response.data))
                        } else if (error.message) {
                            this.errors.push('Something went wrong, please try again')

                            console.log(JSON.stringify(error))
                        }
                    })
            }
        }
    }
}

</script>