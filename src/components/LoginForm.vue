<template>
  <form @submit.prevent="submitForm" class="sign-in">
      <h2>Sign In</h2>
      <div>Use your account</div>
      <input type="text" v-model="username" placeholder="Username" />
      <input type="password" v-model="password" placeholder="Password" />
      <a href="#">Forgot your password?</a>
      <button>Sign In</button>
  </form>
</template>

<style scoped>
input {
  position: relative;
  height: 50px;
  width: 95%;
  outline: none;
  font-size: 1rem;
  color: #707070;
  border: 1px solid #ddd;
  border-radius: 6px;
  padding: 0 15px;
}

button {
      border-radius: 20px;
      color: #fff;
      background: linear-gradient(to right, #000000, #0047AB);
      font-size: 1rem;
      font-weight: bold;
      padding: 10px 40px;
      letter-spacing: 1px;
      text-transform: uppercase;
      cursor: pointer;
      transition: transform .1s ease-in;

    }

    button:active {
        transform: scale(.9);
      }
  
      button:focus {
        outline: none;
      }
</style>


<script>
import axios from 'axios';


export default{
  name:'loginform',
  data() {
    return {
      username: '',
      password: '',
      errors: []
    }
  },
  mounted() {
    document.title = 'login'
  },
  methods: {
    async submitForm() {
      axios.defaults.headers.common["Authorization"] = ""

      localStorage.removeItem("token")

      const formData = {
        username: this.username,
        password: this.password
      }
      await axios
                .post("api/v1/token/login/", formData)
                .then(response => {
                  const token = response.data.auth_token

                  this.$store.commit('setToken', token)

                  axios.defaults.headers.common["Authorization"] = "Token " + token

                  localStorage.setItem("token", token)

                  const toPath = this.$route.query.to || '/account'

                  this.$router.push(toPath)
                })
                .catch(error => {
                  if(error.response) {
                    for (const property in error.response.data) {
                      this.errors.push(`${property}: ${error.response.data[property]}`)
                    }
                  }
                    else {
                      this.errors.push('Something went wrong. Please try again')

                      console.log(JSON.stringify(error))
                    }
                })
    }
  }
}

</script>