<template>
	<header class="header shop">
		<!-- Topbar -->
		<div class="topbar">
			<div class="container">
				<a-row>
					<a-col :lg="10" :md="12" :span="12">
						<!-- Top Left -->
						<div class="top-left">
							<ul class="list-main">
								<li>
									<phone-outlined :style="{ color: '#32B87D' }" /> +060 (800) 801-582
								</li>
								<li>
									<mail-outlined :style="{ color: '#32B87D' }" /> support@shophub.com
								</li>
							</ul>
						</div>
						<!--/ End Top Left -->
					</a-col>
					<a-col :lg="14" :md="12" :span="12">
						<!-- Top Right -->
						<div class="right-content">
							<ul class="list-main">
								<li>
									<environment-outlined :style="{ color: '#32B87D' }" /> Store location
								</li>
								<li>
									<clock-circle-outlined :style="{ color: '#32B87D' }" /> <a href="#">Daily deal</a>
								</li>
								<li>
									<user-outlined :style="{ color: '#32B87D' }" /> <a href="#">My account</a>
								</li>
								<li>
									<poweroff-outlined :style="{ color: '#32B87D' }" /> <a href="javascript:;">Login</a>
								</li>
							</ul>
						</div>
						<!-- End Top Right -->
					</a-col>
				</a-row>
			</div>
		</div>
		<!-- End Topbar -->
		<div class="middle-inner">
			<div class="container">
				<a-row>
					<!-- logo -->
					<a-col :lg="4" :md="4">
						<!-- Logo -->
						<div class="logo">
							<a href=""><img src="../assets/logo.png" alt="logo"></a>
						</div>
						<!--/ End Logo -->
					</a-col>
					<!-- middle -->
					<a-col :lg="16" :md="14">
						<!-- Search Form -->
						<div class="search-bar-top">
							<div class="search-bar">
								<a-select class="search-sel" v-model:value="selectKey" size="large"
									:options="options" />
								<div class="search-form">
									<a-input class="search-input" v-model:value="searchKey" placeholder="Search Products Here..."></a-input>
									<a-button class="search-btn" @click="onSearch">
										<template #icon>
											<search-outlined />
										</template>
									</a-button>
								</div>
							</div>
						</div>

						<div class="mobile-nav"></div>
					</a-col>
					<!-- right -->
					<a-col :lg="4" :md="6">
						<div class="right-bar">
							<div class="sinlge-bar">
								<a href="#" class="single-icon">
									<heart-outlined />
								</a>
							</div>
							<div class="sinlge-bar">
								<a href="#" class="single-icon">
									<user-outlined />
								</a>
							</div>
							<div class="sinlge-bar shopping">
								<a href="#" class="single-icon">
									<shopping-outlined />
									<span class="total-count">2</span>
								</a>
								<!-- Shopping Item -->
								<div class="shopping-item">
									<div class="dropdown-cart-header">
										<span>2 Items</span>
										<a href="#">View Cart</a>
									</div>
									<ul class="shopping-list">
										<li>
											<a href="#" class="remove" title="Remove this item"><close-outlined /></a>
											<a class="cart-img" href="#"><img src="https://wpthemesgrid.com/themes/eshop/images/product-1.jpg" alt="#"></a>
											<h4><a href="#">Woman Ring</a></h4>
											<p class="quantity">1x - <span class="amount">$99.00</span></p>
										</li>
										<li>
											<a href="#" class="remove" title="Remove this item"><close-outlined /></a>
											<a class="cart-img" href="#"><img src="https://wpthemesgrid.com/themes/eshop/images/product-2.jpg" alt="#"></a>
											<h4><a href="#">Woman Necklace</a></h4>
											<p class="quantity">1x - <span class="amount">$35.00</span></p>
										</li>
									</ul>
									<div class="bottom">
										<div class="total">
											<span>Total</span>
											<span class="total-amount">$134.00</span>
										</div>
										<a href="checkout.html" class="btn animate">Checkout</a>
									</div>
								</div>
								<!--/ End Shopping Item -->
							</div>
						</div>
					</a-col>
				</a-row>
			</div>
		</div>
	</header>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import { PhoneOutlined, MailOutlined, EnvironmentOutlined, ClockCircleOutlined, UserOutlined, PoweroffOutlined, SearchOutlined, HeartOutlined, ShoppingOutlined, CloseOutlined } from '@ant-design/icons-vue'

export default defineComponent({
	setup() {
		const selectKey = ref('全部')
		const searchKey = ref<String>('')
		const options = [{ value: '全部' }, { value: '电子产品' }, { value: '学习书籍' }]

		const onSearch = (value: String) => {
			console.log('use value', value);
			console.log('or use this.value', searchKey.value);
		}

		return {
			selectKey,
			options,
			searchKey,
			onSearch
		}
	},
	components: {
		PhoneOutlined, MailOutlined, EnvironmentOutlined, ClockCircleOutlined, UserOutlined, PoweroffOutlined, SearchOutlined, HeartOutlined, ShoppingOutlined, CloseOutlined
	}
})
</script>

<style lang="less">
/* Topbar */
.topbar {
	background-color: #fff;
	border-bottom: 1px solid #e2e2e2;
	padding: 15px 0;
}

/* Logo */
.header .logo {
	float: left;
	margin-top: 35px;
	-webkit-transition: all 0.4s ease;
	-moz-transition: all 0.4s ease;
	transition: all 0.4s ease;
}

.ant-select-dropdown {
	padding: 0 !important;
}

.ant-select-item {
	&:hover {
		background-color: #32B87D;
		color: #fff;
	}
}

.header.shop {
	background: #fff;

	.topbar {
		border: none;
		background-color: #fff;
		padding: 12px 0px;

		p {
			color: #ccc;
		}

		.login a {
			color: #32B87D;
		}

		.right-content {
			float: right;
		}
	}

	.logo {
		float: left;
		margin: 19px 0 0;
	}

	.right-nav li a {
		color: #333;
	}

	.top-contact {
		margin-top: 0px;
	}

	.middle-inner {
		padding: 20px 0;
		background: #fff;
		border-top: 1px solid #eee;
	}


	.header-inner {
		background: #333;
	}


	.nav-inner {
		margin: 0;
		float: left;
	}

	//导航栏中间
	.search-bar-top {
		text-align: center;
		margin-top: 10px;

		.search-bar {
			width: 535px;
			height: 50px;
			display: inline-block;
			background: #fff;
			position: relative;
			margin: 0;
			line-height: 45px;
			border-radius: 5px;
			border: 1px solid #ececec;

			.search-sel,
			.search-form {
				display: inline-block;
				float: left;
			}

			.search-sel {
				.ant-select-selector {
					clear: initial;
					margin: 0;
					height: 48px;
					width: 150px;
					border: none;
					text-align: left;
					background: transparent;
					text-transform: capitalize;
					padding: 0 0 0 20px;
					border-right: 1px solid #eee;
					line-height: 50px;
					font-size: 14px;
					font-weight: 400;

					.ant-select-selection-item {
						line-height: 50px;
					}
				}

			}

			.search-form {
				width: 328px;

				.search-input {
					height: 50px;
					background: transparent;
					color: #666;
					border-radius: 0;
					border: none;
					font-size: 14px;
					font-weight: 400;
					padding: 0 25px 0 20px;
					width: 328px;
				}

				.search-btn {
					height: 50px;
					line-height: 53px;
					width: 62px;
					text-align: center;
					font-size: 18px;
					color: #fff;
					background: #333333;
					position: absolute;
					right: -2px;
					top: -1px;
					border: none;
					border-radius: 0 5px 5px 0;
					-webkit-transition: all 0.4s ease;
					-moz-transition: all 0.4s ease;
					transition: all 0.4s ease;

					&:hover {
						color: #fff;
						background: @primary-color;
					}
				}
			}


		}
	}

	// 导航栏右半部分
	.right-bar {
		display: inline-block;
		padding: 0;
		margin: 0;
		top: 20px;
		float: right;
		position: relative;

		.sinlge-bar {
			display: inline-block;
			margin-right: 25px;

			.single-icon {
				color: #333;
				font-size: 20px;
				position: relative;

				&:hover {
					color: @primary-color;
				}

				.total-count {
					position: absolute;
					top: -7px;
					right: -8px;
					background: #32B87D;
					width: 18px;
					height: 18px;
					line-height: 18px;
					text-align: center;
					color: #fff;
					border-radius: 100%;
					font-size: 11px;
				}
			}

			&:last-child {
				margin-right: 0px;
			}

			li a:hover {
				color: @primary-color;
			}
		}

		.sinlge-bar.top-search a {
			transform: translateY(3px);
		}

		&:hover {
			color: @primary-color;
		}
	}

}

.container {
	max-width: 1170px;
	padding-left: 15px;
	padding-right: 15px;
	margin-right: auto;
	margin-left: auto;
}


/* Topbar Left Nav */
.header.shop .top-left .list-main li:first-child {
	padding-left: 0;
}

.header.shop .top-left .list-main li i {
	display: inline-block;
	margin-right: 4px;
	font-size: 15px;
	color: #F7941D;
	position: relative;
	top: 3px;
}

.header.shop .list-main li {
	display: inline-block;
	color: #333;
	font-size: 13px;
	font-weight: 500;
	border-right: 1px solid #f0f0f0;
	padding: 0px 13px;
}

.header.shop .list-main li i {
	display: inline-block;
	margin-right: 4px;
	font-size: 15px;
	color: #32B87D;
	position: relative;
	top: 1px;
}

.header.shop .list-main li:last-child {
	padding-right: 0;
	border: none;
}

.header.shop .list-main li a {
	color: #333;
}

.header.shop .list-main li a:hover {
	color: #32B87D;
}

/* Topbar end */

/* Shopping Cart */
.header .shopping {
	display: inline-block;
	z-index: 9999;
}

.header .shopping .icon {
	position: relative;
	cursor: pointer;
	color: #222;
}

.header .shopping .shopping-item {
	position: absolute;
	top: 68px;
	right: 0;
	width: 300px;
	background: #fff;
	padding: 20px 25px;
	-webkit-transition: all 0.3s ease 0s;
	-moz-transition: all 0.3s ease 0s;
	transition: all 0.3s ease 0s;
	-webkit-transform: translateY(10px);
	-moz-transform: translateY(10px);
	transform: translateY(10px);
	-webkit-box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.2);
	-moz-box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.2);
	box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
	opacity: 0;
	visibility: hidden;
	z-index: 99;
}

.header .shopping:hover .shopping-item {
	transform: translateY(0px);
	opacity: 1;
	visibility: visible;
}

.header .shopping .dropdown-cart-header {
	padding-bottom: 10px;
	margin-bottom: 15px;
	border-bottom: 1px solid #e6e6e6;
}

.header .shopping .dropdown-cart-header span {
	text-transform: uppercase;
	color: #222;
	font-size: 13px;
	font-weight: 600;
}

.header .shopping .dropdown-cart-header a {
	float: right;
	text-transform: uppercase;
	color: #222;
	font-size: 13px;
	font-weight: 600;
}

.header .shopping .dropdown-cart-header a:hover {
	color: @primary-color;
}

.header .shopping-list li {
	overflow: hidden;
	border-bottom: 1px solid #e6e6e6;
	padding-bottom: 15px;
	margin-bottom: 15px;
	position: relative;
}

.header .shopping-list li .remove {
	position: absolute;
	left: 0;
	bottom: 16px;
	margin-top: -20px;
	height: 20px;
	width: 20px;
	line-height: 18px;
	text-align: center;
	background: #fff;
	color: #222;
	border-radius: 0;
	font-size: 11px;
	border: 1px solid #ededed;
}

.header .shopping-list li .remove:hover {
	background: #222;
	color: #fff !important;
	border-color: transparent;
}

.header .shopping-list .cart-img {
	float: right;
	border: 1px solid #ededed;
	overflow: hidden;
}

.header .shopping-list .cart-img img {
	width: 70px;
	height: 70px;
	border-radius: 0;

}

.header .shopping-list .cart-img:hover img {
	transform: scale(1.09);
}

.header .shopping-list .quantity {
	line-height: 22px;
	font-size: 13px;
	padding-bottom: 30px;
}

.header .shopping-list h4 {
	font-size: 14px;
}

.header .shopping-list h4 a {
	font-weight: 600;
	font-size: 13px;
	color: #333;
}

.header .shopping-list h4 a:hover {
	color: @primary-color
}

.header .shopping-item .bottom {
	text-align: center;
}

.header .shopping-item .total {
	overflow: hidden;
	display: block;
	padding-bottom: 10px;
}

.header .shopping-item .total span {
	text-transform: uppercase;
	color: #222;
	font-size: 13px;
	font-weight: 600;
	float: left;
}

.header .shopping-item .total .total-amount {
	float: right;
	font-size: 14px;
}

.header .shopping-item .bottom .btn {
	background: #222;
	padding: 10px 20px;
	display: block;
	color: #fff;
	margin-top: 10px;
	border-radius: 0px;
	text-transform: uppercase;
	font-size: 14px;
	font-weight: 500;
}

.header .shopping-item .bottom .btn:hover {
	background: @primary-color;
	color: #fff;
}
/* Shopping Cart end */
</style>