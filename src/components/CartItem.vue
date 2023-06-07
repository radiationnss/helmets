<template>
    <div class="box">
        <img :src="item.product.get_thumbnail">
        <div class="content">
            <h3><router-link :to="item.product.get_absolute_url">{{ item.product.name }}</router-link></h3>
            <h4>Price: ${{ item.product.price }}</h4>
            <div class="unit">Quantity: <a @click="incrementQuantity(item)">+</a> {{item.quantity}} <a @click="decrementQuantity(item)">-</a></div>
            <button class="btn-area" @click="removeFromCart(item)"><i aria-hidden="true" class="fa fa-trash"></i> <span class="btn2">Remove</span></button>
        </div>
    </div>
</template>

<script>
export default {
    name: 'CartItem',
    props: {
        initialItem: Object
    },
    data() {
        return {
            item: this.initialItem
        }
    },
    methods: {
        getItemTotal(item) {
            return item.quantity * item.product.price
        },
        decrementQuantity(item) {
            item.quantity -= 1

            if (item.quantity === 0) {
                this.$emit('removeFromCart', item)
            }

            this.updateCart()
        },
        incrementQuantity(item) {
            item.quantity += 1

            this.updateCart()
        },
        updateCart() {
            localStorage.setItem('cart', JSON.stringify(this.$store.state.cart))
        },
        removeFromCart(item) {
            this.$emit('removeFromCart', item)

            this.updateCart()
        },
    },
}
</script>

<style scoped>

.box {
	display: flex;
	width: 100%;
	height: 200px;
	overflow: hidden;
	margin-bottom: 20px;
	background: #fff;
	transition: all .6s ease;
	box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
}
.box:hover {
	border: none;
	transform: scale(1.01);
}
.box img {
	width: 300px;
	height: 200px;
	object-fit: cover;
}
.content {
	padding: 20px;
	width: 100%;
	position: relative;
}
.content h3 {
	margin-bottom: 30px;
}
.content h4 {
	margin-bottom: 50px;
}
.btn-area {
	position: absolute;
	bottom: 20px;
	right: 20px;
	padding: 10px 25px;
	background-color: #3a71a9;
	color: white;
	cursor: pointer;
	border-radius: 5px;
}
.btn-area:hover {
	background-color: #76bfb6;
	color: #fff;
	font-weight: 600;
}
.unit input {
	width: 40px;
	padding: 5px;
	text-align: center;
}
.btn-area i {
	margin-right: 5px;
}

@media screen and (max-width: 700px) {
	.content h3 {
		margin-bottom: 15px;
	}
	.content h4 {
		margin-bottom: 20px;
	}
	.btn2 {
		display: none;
	}
	.box {
		height: 150px;
	}
	.box img {
		height: 150px;
		width: 200px;
	}
}

</style>