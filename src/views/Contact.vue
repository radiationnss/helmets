<template>
    <div class="container" :class="{'sign-up-active' : signUp}">
        <div class="overlay-container">
            <div class="overlay">
                <div class="overlay-left">
                    <h1>this is is</h1>
                    <button class="invert" id="signIn" @click="signUp = !signUp">Sign In</button>
                </div>
                <div class="overlay-right">
                    <h1>not is is</h1>
                    <button class="invert" id="signUp" @click="signUp = !signUp">Sign Up</button>
                </div>
            </div>
        </div>
    </div>
    
</template>

<script>

</script>

<style>
.overlay-container{
    position: absolute;
    top: 0;
    left: 50%;
    width: 50%;
    height: 100%;
    overflow: hidden;
    transition: transform .5s ease-in-out;
    z-index: 100;
}
.overlay-container .overlay {
    position: relative;
    left: -100%;
    height: 100%;
    width: 200%;
    background: #000;
    color: white;
    transform: translateX(0);
    transition: transform .5s ease-in-out;
}

.overlay-container .overlay-left {
    position: absolute;
    top: 0;
    display: flex;
    align-items: center;
    justify-content: space-around;
    flex-direction: column;
    width: calc(50% - 100px);
    height: calc(100% - 200px);
    text-align: center;
    transform: translateX(-50%);
    transition: transform 0.5s ease-in-out;
}

.overlay-container .overlay-right {
    position: absolute;
    top: 0;
    display: flex;
    align-items: center;
    justify-content: space-around;
    flex-direction: column;
    width: calc(50% - 100px);
    height: calc(100% - 200px);
    text-align: center;
    transform: translateX(0);
    right: 0;
    transition: transform 0.5s ease-in-out;
}

.sign-in {
	 left: 0;
	 z-index: 2;
}
 .sign-up {
	 left: 0;
	 z-index: 1;
	 opacity: 0;
}
 .sign-up-active .sign-in {
	 transform: translateX(100%);
}
 .sign-up-active .sign-up {
	 transform: translateX(100%);
	 opacity: 1;
	 z-index: 5;
	 animation: show 0.5s;
}
 .sign-up-active .overlay-container {
	 transform: translateX(-100%);
}
 .sign-up-active .overlay {
	 transform: translateX(50%);
}
 .sign-up-active .overlay-left {
	 transform: translateX(0);
}
 .sign-up-active .overlay-right {
	 transform: translateX(20%);
}

</style>