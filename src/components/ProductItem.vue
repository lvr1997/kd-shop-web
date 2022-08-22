<template>
    <div class="single-product">
        <div class="product-img">
            <a href="javascript:;">
                <img class="default-img" :src="goodImg" alt="#">
                <!-- <img class="hover-img" src="static/picture/p10.jpg" alt="#"> -->
                <!-- <span class="price-dec">30% Off</span>  右上角标签 -->
                <!-- <span class="out-of-stock">Hot</span> -->
                <!-- <span class="new">New</span> -->
            </a>
            <div class="button-head">
                <div class="product-action">
                    <a title="Quick View" href="#"><eye-outlined /><em>预览</em></a>
                    <a title="Wishlist" href="#"><heart-outlined /><em>添加至收藏</em></a>
                    <a title="Compare" href="#"><bar-chart-outlined /><em>与同类比较</em></a>
                </div>
                <div class="product-action-2">
                    <a title="Add to cart" href="#">Add to cart</a>
                </div>
            </div>
        </div>
        <div class="product-content">
            <h3><a href="javascript:;">{{ goodName }}</a></h3>
            <div class="product-price">
                <span>￥{{ goodPrice }}</span>
            </div>
        </div>
    </div>
</template>
<script lang="ts" setup>
import { EyeOutlined, HeartOutlined, BarChartOutlined } from '@ant-design/icons-vue';

defineProps<{
    goodImg?: string
    goodName?: string
    goodPrice?: number

}>()



</script>

<style lang="less" scoped>
.single-product{
	margin-top:50px;
}
.single-product .product-img {
  position: relative;
  overflow: hidden;
  cursor:pointer;
}
.single-product .product-img a {
  display: block;
  position: relative;
}
.single-product .product-img a img {
  width: 100%;
}
.single-product .product-img a img.hover-img {
  position: absolute;
  left: 0;
  top: 0;
  z-index: 1;
  opacity: 0;
  transition: opacity 0.5s ease, transform 2s cubic-bezier(0, 0, 0.44, 1.18), -webkit-transform 2s cubic-bezier(0, 0, 0.44, 1.18);
}
.single-product .product-img a span.price-dec {
	background-color: #f6931d;
	display: inline-block;
	font-size: 11px;
	color: #fff;
	right: 20px;
	top: 20px;
	padding: 1px 16px;
	font-weight: 700;
	border-radius: 0;
	text-align: center;
	position: absolute;
	text-transform: uppercase;
	border-radius: 30px;
	height: 26px;
	line-height: 25px;
}
.single-product .product-img a span.new {
	background-color: #8493ca;
	display: inline-block;
	font-size: 11px;
	color: #fff;
	right: 20px;
	top: 20px;
	padding: 1px 16px;
	font-weight: 700;
	border-radius: 0;
	text-align: center;
	position: absolute;
	text-transform: uppercase;
	border-radius: 30px;
	height: 26px;
	line-height: 24px;
}
.single-product .product-img a span.out-of-stock {
	background-color: #ed1b24;
	display: inline-block;
	font-size: 11px;
	color: #fff;
	right: 20px;
	top: 20px;
	padding: 1px 16px;
	font-weight: 700;
	border-radius: 0;
	text-align: center;
	position: absolute;
	text-transform: uppercase;
	border-radius: 30px;
	height: 26px;
	line-height: 24px;
}
.single-product .product-img .product-action {
	display: inline-block;
	position: absolute;
	right: 0;
	bottom: 0;
	z-index: 99;
	border-radius: 3px;
}
.single-product .product-img .product-action a {
	background-color: transparent;
	color: #333;
	display: block;
	font-size: 16px;
	display: inline-block;
	margin-right: 15px;
	text-align: right;
	height: 52px;
	position: relative;
	top: 2px;
}
.single-product .product-img .product-action a:last-child{
	margin-right:0;
	border:none;
}
.single-product .product-img .product-action a span {
  line-height: 40px;
}
.single-product .product-img .product-action a em {
	visibility: hidden;
	position: absolute;
	background: @primary-color !important;
	color: #fff !important;
	text-align: center;
	padding: 5px 12px;
	z-index: 3;
	opacity: 0;
	-webkit-transition: opacity .6s, margin .3s;
	-o-transition: opacity .6s, margin .3s;
	transition: opacity .6s, margin .3s;
	font-size: 11px;
	right: 0;
	line-height: 14px;
	top: -12px;
	margin-top: -5px;
	margin-right: 0;
	display: inline-block;
	width: 120px;
	border-radius:15px 0 0 15px;
}
.single-product .product-img .button-head .product-action a em::after {
	position: absolute;
	content: "";
	right: 0;
	bottom: -12px;
	border: 6px solid @primary-color;
	border-left:0px solid transparent;
	border-right:6px solid transparent;
	border-bottom:6px solid transparent;
}
.single-product .product-img .product-action a:hover {
	color:@primary-color;
}
.single-product .product-img .product-action a:hover em {
  visibility: visible;
  opacity: 1;
  color:#333;
  background:#fff;
  margin-top: -12px;
}
.single-product .product-img .product-action.pro-action-width-dec a {
  width: 30px;
  height: 30px;
  font-size: 14px;
}
.single-product .product-img .product-action.pro-action-width-dec a i {
  line-height: 30px;
}
.single-product .product-img .product-action.pro-action-width-dec-2 {
  bottom: 45px;
}
.single-product .product-img .product-action-2 {
	position: absolute;
	left: 0;
	bottom: 0;
	text-align: left;
	z-index: 99;
	-webkit-transition: all 250ms ease-out;
	-o-transition: all 250ms ease-out;
	transition: all 250ms ease-out;
}
.single-product .product-img .product-action-2 a {
	display: block;
	background-color: transparent;
	color: #333;
	text-align: left;
	font-size: 12px;
	font-weight: 600;
	text-transform: uppercase;
	line-height: 1;
	display: inline-block;
}
.single-product .product-img .product-action-2 a:hover {
  color:@primary-color;
}
.single-product .button-head {
	background: #fff;
	display: inline-block;
	height: 40px;
	width: 100%;
	position: absolute;
	left: 0;
	bottom: -50px;
	z-index: 9;
	height: 50px;
	line-height: 50px;
	-webkit-transition:all 0.4s ease;
	-moz-transition:all 0.4s ease;
	transition:all 0.4s ease;
}
.single-product:hover .button-head{
	bottom:0;
}
.single-product .product-img .shop-list-quickview {
  position: absolute;
  top: 50%;
  -webkit-transform: translateY(-50%);
  -ms-transform: translateY(-50%);
  transform: translateY(-50%);
  left: 0;
  right: 0;
  text-align: center;
  z-index: 99;
  margin-top: 20px;
  visibility: hidden;
  opacity: 0;
  -webkit-transition: all .35s ease 0s;
  -o-transition: all .35s ease 0s;
  transition: all .35s ease 0s;
}
.single-product .product-img .shop-list-quickview a {
  color: #000;
  background-color: #fff;
  display: inline-block;
  width: 50px;
  height: 50px;
  border-radius: 100%;
  font-size: 18px;
}
.single-product .product-img .shop-list-quickview a:hover {
  background-color: #222;
  color: #fff;
}
.single-product .product-img .shop-list-quickview a i {
  line-height: 50px;
}
.single-product .product-content{
	margin-top:20px;
}
.single-product .product-img:hover.default-overlay::before {
  background-color: rgba(38, 38, 38, 0.2);
  z-index: 9;
  -webkit-transition: all 250ms ease-out;
  -o-transition: all 250ms ease-out;
  transition: all 250ms ease-out;
  pointer-events: none;
  opacity: 1;
}
.single-product .product-img:hover.default-overlay.metro-overlay::before {
  background-color: rgba(38, 38, 38, 0.4);
  z-index: 9;
  -webkit-transition: all 250ms ease-out;
  -o-transition: all 250ms ease-out;
  transition: all 250ms ease-out;
  pointer-events: none;
  opacity: 1;
}
// .single-product .product-img:hover img.hover-img {
//   opacity: 1;
// }
.single-product .product-img:hover img.default-img {
  transform: scale(1.5);
}
.single-product .product-content h3 {
    line-height: 22px;
}
.single-product .product-content h3 a {
	font-size: 14px;
	font-weight: 500;
	margin: 0;
}
.single-product .product-content h3 a:hover{
	color:@primary-color;
}
.single-product .product-content .product-price {
  margin: 6px 0 0 0;
}
.single-product .product-content .product-price span {
	font-size: 15px;
	font-weight: 500;
}
.single-product .product-content .product-price span.old {
  text-decoration: line-through;
  opacity: .6;
  margin-right: 2px;
}
</style>