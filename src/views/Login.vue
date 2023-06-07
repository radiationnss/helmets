<template>
  <div class="lol">
    <div class="container-fluid" :class="{'sign-up-active' : signUp}">
      <div class="overlay-container">
        <div class="overlay">
          <div class="overlay-left">
            <h2>Have an account?</h2>
            <p>Please login with your personal info</p>
            <button class="invert" id="signIn" @click="signUp = !signUp">Login</button>
          </div>
          <div class="overlay-right">
            <h2>Don't have an account?</h2>
            <p>Please enter your personal details</p>
            <button class="invert" id="signUp" @click="signUp = !signUp">Register</button>
          </div>
        </div>
      </div>
      <Register/>
      <LoginForm/>
    </div>
  </div>
  </template>
  
  <script>

  import Register from '@/components/Register.vue';
  import LoginForm from '@/components/LoginForm.vue';

  export default {
    data: () => {
      return {
        signUp: false
      }
    },
    components: {
        Register,
        LoginForm
    }
  }
  </script>
  
  <style lang="scss" scoped>

 
    body {
      margin: 0;
      padding: 0;
      width: 100%;
      height: 100vh;
      overflow: hidden;
      background: red;
    }
    .container-fluid {
        position: relative;
        width: 100%;
        height: 100vh;
        // overflow: hidden;
      .overlay-container {
        position: absolute;
        top: 0;
        width: 50%;
        height: 100%;
        overflow: hidden;
        transition: transform .5s ease-in-out;
        z-index: 100;
      }
    
  
      .overlay {
        position: relative;
        left: -100%;
        height: 100%;
        width: 200%;
        background: linear-gradient(to right, #000000, #0047AB);
        transform: translateX(0);
        transition: transform .5s ease-in-out;
      }
  
      @mixin overlays($property) {
        position: absolute;
        top: 0;
        display: flex;
        //align-items: center;
        justify-content: space-around;
        flex-direction: column;
        padding: 70px 40px;
        width: calc(50% - 80px);
        height: calc(100% - 140px);
        text-align: center;
        transform: translateX($property);
        transition: transform .5s ease-in-out;
      }
  
      .overlay-left {
        @include overlays(-20%);
      }
  
      .overlay-right {
        @include overlays(0);
        right: 0;
      }
    }
  
    h2 {
      margin: 0;
    }
  
    p {
      margin: 20px 0 30px;
    }
  
    a {
      color: #222;
      text-decoration: none;
      margin: 15px 0;
      font-size: 1rem;
    }
  
    button {
      border-radius: 20px;
      color: #fff;
      font-size: 1rem;
      font-weight: bold;
      padding: 10px 40px;
      letter-spacing: 1px;
      text-transform: uppercase;
      cursor: pointer;
      transition: transform .1s ease-in;
  
      &:active {
        transform: scale(.9);
      }
  
      &:focus {
        outline: none;
      }
    }
  
    button.invert {
      background-color: transparent;
      border-color: #fff;
    }
  
    form {
      position: absolute;
      top: 0;
      display: flex;
      align-items: center;
      justify-content: space-around;
      flex-direction: column;
      padding: 100px;
      width: calc(50%);
      height: calc(100%);
      text-align: center;
      transition: all .5s ease-in-out;
  
      div {
        font-size: 1rem;
      }
  
      input {
        background-color: #eee;
        border: none;
        padding: 8px 15px;
        margin: 6px 0;
        width: calc(100% - 30px);
        border-radius: 15px;
        border-bottom: 1px solid #ddd;
        box-shadow: inset 0 1px 2px rgba(0, 0, 0, .4), 
                          0 -1px 1px #fff, 
                          0 1px 0 #fff;
        overflow: hidden;
  
        &:focus {
          outline: none;
          background-color: #fff;
        }
      }
    }

    .sign-in {
      left: 0;
      z-index: 5;
      opacity: 1;
    }
  
    .sign-up {
      left: 0;
      z-index: 1;
      opacity: 0;
    }
  
    .sign-up-active {
    .sign-in {
        transform: translateX(100%);
        opacity: 0;
      }
  
      .sign-up {
        transform: translateX(100%);
        opacity: 1;
        z-index: 5;
        animation: show .5s;
      }
  
      .overlay-container {
        transform: translateX(-100%);
      }
  
      .overlay {
        transform: translateX(50%);
      }
  
      .overlay-left {
        transform: translateX(0);
      }
  
      .overlay-right {
        transform: translateX(20);
      }
    }
  
    @keyframes show {
      0% {
        opacity: 0;
        z-index: 1;
      }
      49% {
        opacity: 0;
        z-index: 1;
      }
      50% {
        opacity: 1;
        z-index: 10;
      }
    }
  </style>