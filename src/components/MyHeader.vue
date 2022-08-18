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
                                    <phone-outlined :style="{ color: '#F7941D' }" /> +060 (800) 801-582
                                </li>
                                <li>
                                    <mail-outlined :style="{ color: '#F7941D' }" /> support@shophub.com
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
                                    <environment-outlined :style="{ color: '#F7941D' }" /> Store location
                                </li>
                                <li>
                                    <clock-circle-outlined :style="{ color: '#F7941D' }" /> <a href="#">Daily deal</a>
                                </li>
                                <li>
                                    <user-outlined :style="{ color: '#F7941D' }" /> <a href="#">My account</a>
                                </li>
                                <li>
                                    <poweroff-outlined :style="{ color: '#F7941D' }" /> <a href="javascript:;">Login</a>
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
                    <a-col :lg="2" :md="2" :span="12">
                        <!-- Logo -->
                        <div class="logo">
                            <a href=""><img src="https://wpthemesgrid.com/themes/eshop/images/logo.png" alt="logo"></a>
                        </div>
                        <!--/ End Logo -->
                        <!-- Search Form -->
                        <a-input-group class="search-top" compact>
                            <a-select value="All Category">
                                <a-select-option value="1">Cloths</a-select-option>
                                <a-select-option value="2">Papers</a-select-option>
                            </a-select>
                            <a-input style="width: 50%" placeholder="Search Products Here..."/>
                        </a-input-group>
                        <!-- <div class="search-top">
                            <div class="top-search"><a href="#0"><i class="ti-search"></i></a></div>
                           
                            <div class="search-top">
                                <form class="search-form">
                                    <input type="text" placeholder="Search here..." name="search">
                                    <button value="search" type="submit"><i class="ti-search"></i></button>
                                </form>
                            </div>
                        </div> -->
                        <div class="mobile-nav"></div>
                    </a-col>

                    <!-- <a-col :lg="8" :md="7" :span="12">
                        <div class="search-bar-top">
                            <div class="search-bar">
                                <select>
                                    <option selected>All Category</option>
                                    <option>watch</option>
                                    <option>mobile</option>
                                    <option>kid’s item</option>
                                </select>
                                <form>
                                    <input name="search" placeholder="Search Products Here....." type="search">
                                    <button class="btnn"><i class="ti-search"></i></button>
                                </form>
                            </div>
                        </div>
                    </a-col> -->

                    <a-col :lg="2" :md="3" :span="12">
                        <div class="right-bar">
                            <!-- Search Form -->
                            <div class="sinlge-bar">
                                <a href="#" class="single-icon"><i class="fa fa-heart-o" aria-hidden="true"></i></a>
                            </div>
                            <div class="sinlge-bar">
                                <a href="#" class="single-icon"><i class="fa fa-user-circle-o"
                                        aria-hidden="true"></i></a>
                            </div>
                            <div class="sinlge-bar shopping">
                                <a href="#" class="single-icon"><i class="ti-bag"></i> <span
                                        class="total-count">2</span></a>
                                <!-- Shopping Item -->
                                <div class="shopping-item">
                                    <div class="dropdown-cart-header">
                                        <span>2 Items</span>
                                        <a href="#">View Cart</a>
                                    </div>
                                    <ul class="shopping-list">
                                        <li>
                                            <a href="#" class="remove" title="Remove this item"><i
                                                    class="fa fa-remove"></i></a>
                                            <a class="cart-img" href="#"><img src="static/picture/product-1.jpg"
                                                    alt="#"></a>
                                            <h4><a href="#">Woman Ring</a></h4>
                                            <p class="quantity">1x - <span class="amount">$99.00</span></p>
                                        </li>
                                        <li>
                                            <a href="#" class="remove" title="Remove this item"><i
                                                    class="fa fa-remove"></i></a>
                                            <a class="cart-img" href="#"><img src="static/picture/product-2.jpg"
                                                    alt="#"></a>
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
import { defineComponent } from 'vue';
import { PhoneOutlined, MailOutlined, EnvironmentOutlined, ClockCircleOutlined, UserOutlined, PoweroffOutlined } from '@ant-design/icons-vue'

export default defineComponent({
    components: { PhoneOutlined, MailOutlined, EnvironmentOutlined, ClockCircleOutlined, UserOutlined, PoweroffOutlined }
})
</script>

<style>
/* Topbar */
.topbar {
    background-color: #fff;
    border-bottom: 1px solid #e2e2e2;
    padding: 15px 0;
}

.container {
    max-width: 1170px;
    padding-left: 15px;
    padding-right: 15px;
    margin-right: auto;
    margin-left: auto;
}

/* Logo */
.header .logo {
    float: left;
    margin-top: 35px;
    -webkit-transition: all 0.4s ease;
    -moz-transition: all 0.4s ease;
    transition: all 0.4s ease;
}

.header .navbar {
    padding: 0;
}

/* Main Menu */
.navbar-expand-lg .navbar-collapse {
    display: block !important;
}

.header.v3 .navbar-expand-lg .navbar-collapse {
    display: block !important;
    background: #333;
}

.header .nav li a i {
    margin-left: 6px;
    font-size: 10px;
}

/* Dropdown Menu */
.header .nav li .dropdown {
    background: #fff;
    width: 220px;
    position: absolute;
    top: 100%;
    z-index: 999;
    -webkit-box-shadow: 0px 3px 5px #3333334d;
    -moz-box-shadow: 0px 3px 5px #3333334d;
    box-shadow: 0px 3px 5px #3333334d;
    transform-origin: 0 0 0;
    transform: scaleY(0.2);
    -webkit-transition: all 0.3s ease 0s;
    -moz-transition: all 0.3s ease 0s;
    transition: all 0.3s ease 0s;
    opacity: 0;
    visibility: hidden;
    padding: 10px;
    left: 0;
    margin: 0;
}

.header .nav li:hover .dropdown {
    opacity: 1;
    visibility: visible;
    transform: translateY(0px);
}

.header .nav li .dropdown li {
    float: none;
    margin: 0;
}

.header .nav li .dropdown li a {
    padding: 8px 15px;
    color: #666;
    display: block;
    font-weight: 400;
    text-transform: capitalize;
    background: transparent;
}

.header .nav li .dropdown li a:before {
    display: none;
}

.header .nav li .dropdown li:last-child a {
    border-bottom: 0px;
}

.header .nav li .dropdown li:hover a {
    color: #fff;
    background: #F7941D;
}

.header .nav li .dropdown li a:hover {
    border-color: transparent;
}

.header .nav li .dropdown li i {
    float: right;
    margin-top: 8px;
    font-size: 10px;
    z-index: 5;
}

.header .nav li .dropdown.sub-dropdown {
    background: #fff;
    width: 220px;
    position: absolute;
    left: 186px;
    top: 0;
    z-index: 999;
    -webkit-box-shadow: 0px 3px 5px rgba(0, 0, 0, 0.2);
    -moz-box-shadow: 0px 3px 5px rgba(0, 0, 0, 0.2);
    box-shadow: 0px 3px 10px rgba(0, 0, 0, 0.2);
    box-shadow: 0px 3px 5px #3333334d;
    transform-origin: 0 0 0;
    transform: scaleY(0.2);
    -webkit-transition: all 0.3s ease 0s;
    -moz-transition: all 0.3s ease 0s;
    transition: all 0.3s ease 0s;
    opacity: 0;
    visibility: hidden;
    padding: 10px;
}

.header .nav li .dropdown li:hover .dropdown.sub-dropdown {
    opacity: 1;
    visibility: visible;
    transform: translateY(0px);
}

.header .nav li .dropdown.sub-dropdown li a {
    padding: 8px 15px;
    color: #666;
    display: block;
    font-weight: 400;
    text-transform: capitalize;
    background: transparent;
}

.header .nav li .dropdown li:hover .dropdown.sub-dropdown li a {
    background: transparent;
}

.header .nav li .dropdown li .dropdown.sub-dropdown li a:hover {
    color: #fff;
    background: #F7941D;
}

.header .nav li .dropdown.sub-dropdown li:last-child a {
    border-bottom: 0px solid;
}

.mobile-search {
    display: none;
}

.header.shop .topbar {
    border: none;
    padding: 12px 0px;
}

.header.shop .nav-inner {
    margin-right: 188px;
}

.header.shop .logo {
    float: left;
    margin-top: 35px;
}

.header.shop .top-contact {
    margin-top: 0px;
}

.header.shop .topbar p {
    color: #ccc;
}

.header.shop .topbar .login a {
    color: #F7941D;
}

/* Topbar Left Nav */
.header.shop .left-nav {}

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

.header.shop .right-content {
    float: right;
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
    color: #F7941D;
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
    color: #F7941D;
}

.header.shop .nav li {
    margin-right: 40px;
    float: left;
    position: relative;
}

.header.shop .nav li {
    margin-right: 38px;
    position: relative;
}

.header.shop .nav li:last-child {
    margin: 0 !important;
}

.header.shop .nav li .new {
    background: #F7941D;
    color: #fff;
    text-transform: uppercase;
    font-size: 10px;
    padding: 0px 9px;
    position: absolute;
    left: 0;
    top: 6px;
    font-weight: 500;
}

.header.shop .nav li .new::before {
    position: absolute;
    content: "";
    left: 4px;
    bottom: -8px;
    border: 4px solid #F7941D;
    border-bottom-color: transparent;
    border-left-color: transparent;
    border-right-color: transparent;
}
/* Shopping Cart */
.header .shopping {
	display: inline-block;
	z-index: 9999;
}
.header .shopping .icon {
	position: relative;
	cursor:pointer;
	color:#222;
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
	opacity:0;
	visibility:hidden;
	z-index:99;
}
.header .shopping:hover .shopping-item{
	transform: translateY(0px);
	opacity:1;
	visibility:visible;
}
.header .shopping .dropdown-cart-header{
	padding-bottom: 10px;
    margin-bottom: 15px;
	border-bottom:1px solid #e6e6e6;
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
.header .shopping .dropdown-cart-header a:hover{
	color:#F7941D;
}
.header .shopping-list li {
	overflow: hidden;
	border-bottom: 1px solid #e6e6e6;
	padding-bottom: 15px;
	margin-bottom: 15px;
	position:relative;
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
.header .shopping-list li .remove:hover{
	background:#222;
	color:#fff !important;
	border-color:transparent;
}
.header .shopping-list .cart-img {
	float: right;
	border: 1px solid #ededed;
	overflow:hidden;
}
.header .shopping-list .cart-img img {
	width: 70px;
	height: 70px;
	border-radius:0;
	
}
.header .shopping-list .cart-img:hover img{
	transform:scale(1.09);
}
.header .shopping-list .quantity{
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
.header .shopping-list h4 a:hover{
	color:#F7941D;
}
.header .shopping-item .bottom {
	text-align: center;
}
.header .shopping-item .total {
	overflow:hidden;
	display: block;
    padding-bottom: 10px;
}
.header .shopping-item .total span {
	text-transform:uppercase;
	color:#222;
	font-size:13px;
	font-weight:600;
	float:left;
}
.header .shopping-item .total .total-amount {
	float:right;
	font-size:14px;
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
.header .shopping-item .bottom .btn:hover{
	background:#F7941D;
	color:#fff;
}
.header.shop{
	background:#fff;
}
.header.shop .nav-inner {
	margin: 0;
	float: left;
}
.header.shop .topbar {
	background-color: #fff;
	border: none;
}
.header.shop.v3 .topbar{
	padding:0;
}
.header.shop.v3 .topbar .inner-content{
	border-bottom:1px solid #eee;
	padding: 12px 0px;
}
.header.shop .right-nav li a {
	color: #333;
}
.header.shop .logo {
	float: left;
	margin: 19px 0 0;
}
.header.shop .top-contact {
	margin-top:0px;
}
/* Header Middle */
.header.shop .search-bar-top {
	text-align: center;
	margin-top: 10px;
}
.header.shop .search-bar {
	margin-top: 33px;
	width: 460px;
	height: 40px;
	display: inline-block;
	background: #fff;
	position: relative;
}
.header.shop .search-bar {
	width: 535px;
	height: 50px;
	display: inline-block;
	background: #fff;
	position: relative;
	margin: 0;
	line-height: 45px;
	border-radius: 5px;
	border: 1px solid #ececec;
}
.header.shop .nice-select {
	clear: initial;
	margin: 0;
	height: 48px;
	width: 150px;
	border: none;
	text-align: center;
	background: transparent;
	text-transform: capitalize;
	padding: 0 0 0 20px;
	border-right: 1px solid #eee;
	line-height: 50px;
	font-size: 14px;
	font-weight: 400;
}
.header.shop .nice-select::after {
	border-color: #666;
	right: 20px;
}
.header.shop .nice-select .list {
	border-radius:0px;
}
.header.shop .nice-select .list li.focus{
	font-weight:400;
}
.header.shop .nice-select .list li {
	color: #666;
	border-radius: 0px;
	font-size: 14px;
	font-weight: 400;
}
.header.shop .nice-select .list li:hover{
	background:#F7941D;
	color:#fff;
}
.header.shop .search-bar form {
	display: inline-block;
	float: left;
	width: 260px;
}
.header.shop .search-bar input {
	height: 48px;
	background: transparent;
	color: #666;
	border-radius: 0;
	border: none;
	font-size: 14px;
	font-weight: 400;
	padding: 0 25px 0 20px;
	width: 328px;
}
.header.shop .search-bar .btnn {
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
}
.header.shop .search-bar .btnn:hover{
	color:#fff;
	background:#F7941D;
}
/* Search Form */
.header.shop .search-top {
	opacity: 1;
	visibility: visible;
	top: 0;
	background: transparent;
	border: none;
	box-shadow: none;
	padding: 0;
	top: 0;
}
.header.shop .middle-inner {
	padding: 20px 0;
	background: #fff;
	border-top: 1px solid #eee;
}
.header.shop.v3 .middle-inner {
	border:none;
}
.header.shop .header-inner {
	background: #333;
}
.header.shop.v3 .header-inner {
	background: transparent;
}
.header.shop.v2 .header-inner {
	background: #fff;
	border-top:1px solid #eee;
}
.header.shop .topbar p {
	color: #333;
}
.header.shop .all-category {
	color: #fff;
	background: transparent;
	position: relative;
	background: #f7941d;
}
.header.shop .all-category h3{
	padding: 20px 25px;
}
.header.shop .cat-heading {
	font-size: 20px;
	color: #fff;
}
.header.shop .cat-heading i {
	color: #fff;
	display: inline-block;
	margin-right: 15px;
	font-size: 22px;
}
.header.shop .main-category {
	position: absolute;
	left: 0;
	top: 64px;
	background: #fff;
	z-index: 1;
	width: 100%;
	-webkit-box-shadow: 0px 5px 15px #0000000a;
	-moz-box-shadow: 0px 5px 15px #0000000a;
	box-shadow: 0px 5px 15px #0000000a;
}
.header.shop .main-category li{
	display:block;
	border-bottom:1px solid #f6f6f6;
	position:relative;
}
.header.shop .main-category li:last-child{
	border:none;
}
.header.shop .main-category li a {
	font-size: 14px;
	font-weight: 600;
	color: #333;
	padding: 13px 25px 13px 25px;
	display: block;
	text-transform: uppercase;
}
.header.shop .main-category li a i{
	display:inline-block;
	float:right;
}
.header.shop .sub-category {
	background: #fff;
	width: 220px;
	position: absolute;
	left: 238px;
	top: 0;
	z-index: 999999;
	opacity: 0;
	visibility: hidden;
	-webkit-transition: all 0.4s ease;
	-moz-transition: all 0.4s ease;
	transition: all 0.4s ease;
	border-left: 3px solid #F7941D;
	-webkit-box-shadow: 0px 5px 15px #0000000a;
	-moz-box-shadow: 0px 5px 15px #0000000a;
	box-shadow: 0px 5px 15px #0000000a;
}
.header.shop .main-category li:hover .sub-category{
	opacity:1;
	visibility:visible;
}
.header.shop .main-category li a{
	text-transform:capitalize;
	font-weight:400;
}
.header.shop .main-category li a:hover{
	color:#F7941D;
}
.header.shop .main-category .main-mega{
	position:relative;
}
.header.shop .main-category li .mega-menu {
	width: 850px;
	display: inline-block;
	height: auto;
	position: absolute;
	left: 238px;
	top: 0;
	z-index: 99999;
	background: #fff;
	border: none;
	padding: 30px;
	border-left: 3px solid #F7941D;
	opacity:0;
	visibility:hidden;
	-webkit-transition:all 0.4s ease;
	-moz-transition:all 0.4s ease;
	transition:all 0.4s ease;
}
.header.shop .main-category li:hover .mega-menu{
	opacity:1;
	visibility:visible;
}
.header.shop .main-category li .mega-menu .single-menu {
	width: 33%;
	display: inline-block;
	border: none;
	padding: 0;
	padding-right: 20px;
}
.header.shop .main-category li .mega-menu .single-menu a{
	padding:0;
}
.header.shop .main-category li .mega-menu .single-menu .image{
	overflow:hidden;
}
.header.shop .main-category li .mega-menu .single-menu img{
	display:block;
	height:100%;
	width:100%;
	cursor:pointer;
}
.header.shop .main-category li .mega-menu .single-menu .image:hover img{
	transform:scale(1.1);
}
.header.shop .main-category li .mega-menu .single-menu .title-link {
	margin-bottom: 20px;
	background: #F7941D;
	color: #fff;
	padding: 2px 13px;
	border-radius: 3px;
	display: inline-block;
	font-size: 14px;
}
.header.shop .main-category li .mega-menu .single-menu .title-link:hover{
	background:#333;
	color:#fff;
}
.header.shop .main-category li .mega-menu .single-menu .inner-link{
	margin-top:25px;
}
.header.shop .main-category li .mega-menu .single-menu .inner-link a{
	margin-bottom:10px;
}
.header.shop .main-category li .mega-menu .single-menu .inner-link a:hover{
	color:#F7941D;
	background:transparent;
}
.header.shop .main-category li .mega-menu .single-menu .inner-link a:last-child{
	margin-bottom:0px;
}
.header.shop .menu-origin {
	float:none;
	display: inline-block;
	float: right;
}
.header.shop .nav li {
	margin-right: 40px;
	float: left;
	position: relative;
}
.header.shop .nav li {
	margin-right:5px;
	position: relative;
	float: none;
}
.header.shop .nav li:last-child{
	margin-right:0;
}
.header.shop .nav li .new {
	background: #F7941D;
	color: #fff;
	text-transform: uppercase;
	font-size: 9px;
	position: absolute;
	left: 21px;
	top: 2px;
	font-weight: 500;
	height: 18px;
	line-height: 18px;
	text-align: center;
	display: block;
}
.header.shop.v2 .nav li a{
	color:#333;
}
.header.shop .nav li a {
	color: #fff;
	text-transform: capitalize;
	font-size: 15px;
	padding: 20px 15px;
	font-weight: 500;
	display: block;
	position: relative;
	-webkit-transition: all 0.4s ease;
	-moz-transition: all 0.4s ease;
	transition: all 0.4s ease;
}
.header.shop .nav li:hover a{
	color:#fff;
	background:#F7941D;
}
.header.shop.v2 .nav li:hover a{
	color:#F7941D;
	background:transparent;
}
.header.shop .nav li.active a{
	color:#fff;
	background:#F7941D;
}
.header.shop.v2 .nav li.active a{
	color:#333 !important;
	background:transparent !important;
}
.header.shop.v2 .nav li.active a{
	color:#F7941D !important;
}
.header.shop .nav .dropdown li{
	margin:0;
}
.header.shop .nav li .dropdown li:hover a{
	background:#F7941D;
}
.header.shop.v2 .nav li.active .dropdown li a{
	color:#333 !important;
}
.header.shop.v2 .nav li.active .dropdown li a:hover{
	color:#fff !important;
	background:#F7941D !important;
}
.header.shop.v2 .nav li.active .dropdown li a:hover{
	color:#fff !important;
}
.header.shop.v2 .nav li .dropdown li:hover a{
	color:#F7941D;
}
.header.shop .nav li .dropdown li a {
	color: #333;
	padding: 8px 15px;
	font-weight: 400;
	background:#fff;
}
.header.shop.v2 .nav li .dropdown li a {
	color: #333;
	background:#fff;
}
.header.shop .nav li .dropdown li a {
	font-weight: 400;
	font-size: 14px;
}
.header.shop .nav li .dropdown li a:hover{
	color:#fff;
}
.header.shop.v2 .nav li .dropdown li a:hover{
	color:#fff !important;
	background:#F7941D;
}
.header.shop .nav li .dropdown li .dropdown.sub-dropdown li a:hover{
	background:#F7941D;
}
.header.shop .right-bar {
	display: inline-block;
	padding: 0;
	margin: 0;
	top: 20px;
	float: right;
	position: relative;
}
.header.shop .right-bar .sinlge-bar.top-search a {
	transform: translateY(3px);
}
.header.shop .right-bar .sinlge-bar.top-search a:hover {
	color:#F7941D;
}
.header.shop .right-bar .sinlge-bar .single-icon{
	color:#333;
	font-size:20px;
	position:relative;
}
.header.shop .right-bar .sinlge-bar .single-icon:hover{
	color:#F7941D;
}
.header.shop .right-bar .sinlge-bar .single-icon .total-count {
	position: absolute;
	top: -7px;
	right: -8px;
	background: #f6931d;
	width: 18px;
	height: 18px;
	line-height: 18px;
	text-align: center;
	color: #fff;
	border-radius: 100%;
	font-size: 11px;
}
.header.shop .right-bar .sinlge-bar{
	display:inline-block;
	margin-right:25px;
}
.header.shop .right-bar .sinlge-bar:last-child{
	margin-right:0px;
}
.header.shop .right-bar .sinlge-bar li a:hover{
	color:#F7941D;
}
.mobile-search{
	display:none;
}
/* Header Search */
/* Search */
.header .search-top{
	display:none;
}
.header .search-top a{
	font-size:17px;
}
.header .search-top a:hover{
	color:#F7941D;
}
.header .search-form {
	position: absolute;
	left: -128px;
	z-index: 9999;
	opacity: 0;
	visibility: hidden;
	-webkit-transition: all 0.5s ease;
	-moz-transition: all 0.5s ease;
	transition: all 0.5s ease;
	top: 46px;
	background: #ffffff75;
	padding: 7px;
	border-radius: 5px;
	transform: scaleY(0);
	box-shadow: 0px 4px 7px #0000003b;
	padding: 0;
	border-radius: 0;
}
.header .search-top.active .search-form {
	opacity:1;
	visibility:visible;
	transform: scaleY(1);
}
.header .search-form input {
	width: 220px;
	height: 45px;
	line-height: 45px;
	padding: 0 60px 0 15px;
	-webkit-transition: all 0.4s ease;
	-moz-transition: all 0.4s ease;
	transition: all 0.4s ease;
	border-radius: 3px;
	border: none;
	background: #fff;
	color: #333;
	border-radius: 0;
}
.header .search-form button {
	position: absolute;
	right: 0;
	height: 45px;
	top: 0;
	width: 45px;
	background: transparent;
	border: none;
	color: #3353ea;
	border-radius: 0 3px 3px 0;
	border-radius: 0;
	border-left: 1px solid #eee;
	font-size: 15px;
	color: #333;
	-webkit-transition: all 0.4s ease;
	-moz-transition: all 0.4s ease;
	transition: all 0.4s ease;
}
.header .search-form button:hover{
	color:#fff;
	background:#F7941D;
	border-color:transparent;
}
/* Header Sticky */
.header .header-inner{
	width:100%;
	z-index:999;
}
.header.sticky.off-sticky{
	display:none;
}
.header.sticky .all-category{}
.header.sticky .all-category h3{
	cursor:pointer;
	
}
.header.sticky .all-category .main-category{
	opacity:0;
	visibility:hidden;
	-webkit-transition:all 0.4s ease;
	-moz-transition:all 0.4s ease;
	transition:all 0.4s ease;
}
.header.sticky .all-category:hover .main-category{
	opacity:1;
	visibility:visible;
}
.header.sticky .header-inner .nav li a {
	color: #333;
}
.header.sticky.v3 .header-inner .nav li a {
	color: #fff;
}
.header.sticky .header-inner .nav li:hover a{
	color:#fff;
}
.header.sticky.v2 .header-inner .nav li:hover a{
	color:#F7941D;
}
.header.sticky .header-inner .nav li .dropdown li a{
	color:#333;
}
.header.sticky.v2 .header-inner .nav li .dropdown li a{
	color:#333;
}
.header.sticky .header-inner .nav li .dropdown li a:hover{
	color:#fff;
}
.header.sticky .header-inner .nav li.active a {
	color: #fff;
}
.header.sticky .header-inner{
	position:fixed;
	top:0;
	left:0;
	background:#fff;
	animation: fadeInDown 1s both 0.2s;
	-webkit-box-shadow:0px 0px 10px rgba(0, 0, 0, 0.3);
	-moz-box-shadow:0px 0px 10px rgba(0, 0, 0, 0.3);
	box-shadow:0px 0px 10px rgba(0, 0, 0, 0.3);
	z-index:999;
}
.header.sticky.v3 .header-inner{
	box-shadow:none;
}
.header.sticky.v3 .navbar-expand-lg .navbar-collapse{
	animation: fadeInDown 1s both 0.2s;
	-webkit-box-shadow:0px 0px 10px rgba(0, 0, 0, 0.3);
	-moz-box-shadow:0px 0px 10px rgba(0, 0, 0, 0.3);
	box-shadow:0px 0px 10px rgba(0, 0, 0, 0.3);
}
/*======================================
	End Header CSS
========================================*/
</style>