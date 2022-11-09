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
                  <phone-outlined :style="{ color: '#32B87D' }" /> 有关项目问题请联系 →
                </li>
                <li>
                  <mail-outlined :style="{ color: '#32B87D' }" /> lv_alrily188@outlook.com
                </li>
              </ul>
            </div>
            <!--/ End Top Left -->
          </a-col>
          <a-col :lg="14" :md="12" :span="12">
            <!-- Top Right -->
            <div class="right-content">
              <ul class="list-main">
                <li><environment-outlined :style="{ color: '#32B87D' }" /> 北京</li>
                <li>
                  <clock-circle-outlined :style="{ color: '#32B87D' }" />
                  <a href="#">7+24h</a>
                </li>
                <li>
                  <user-outlined :style="{ color: '#32B87D' }" />
                  <a href="#">My account</a>
                </li>
                <li>
                  <poweroff-outlined :style="{ color: '#32B87D' }" />
                  <router-link :to="{ path: '/login' }">登录/退出</router-link>
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
              <a href=""><img src="../assets/logo.png" alt="logo" /></a>
            </div>
            <!--/ End Logo -->
          </a-col>
          <!-- middle -->
          <a-col :lg="16" :md="14">
            <!-- Search Form -->
            <div class="search-bar-top">
              <div class="search-bar">
                <a-select
                  class="search-sel"
                  v-model:value="selectKey"
                  size="large"
                  :options="options"
                />
                <div class="search-form">
                  <a-input
                    class="search-input"
                    v-model:value="searchKey"
                    placeholder="Search Products Here..."
                  ></a-input>
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
                      <a href="#" class="remove" title="Remove this item">
                        <close-outlined />
                      </a>
                      <a class="cart-img" href="#"
                        ><img
                          src="https://wpthemesgrid.com/themes/eshop/images/product-1.jpg"
                          alt="#"
                      /></a>
                      <h4><a href="#">Woman Ring</a></h4>
                      <p class="quantity">1x - <span class="amount">$99.00</span></p>
                    </li>
                    <li>
                      <a href="#" class="remove" title="Remove this item">
                        <close-outlined />
                      </a>
                      <a class="cart-img" href="#"
                        ><img
                          src="https://wpthemesgrid.com/themes/eshop/images/product-2.jpg"
                          alt="#"
                      /></a>
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

    <div class="header-inner">
      <div class="container">
        <div class="cat-nav-head">
          <a-row>
            <a-col v-if="$route.path == '/home'" :lg="6">
              <div class="all-category">
                <h3 class="cat-heading"><menu-outlined />CATEGORIES</h3>
                <ul class="main-category">
                  <li>
                    <a href="#"
                      >New Arrivals
                      <right-outlined />
                    </a>
                    <ul class="sub-category">
                      <li><a href="#">accessories</a></li>
                      <li><a href="#">best selling</a></li>
                      <li><a href="#">top 100 offer</a></li>
                      <li><a href="#">sunglass</a></li>
                      <li><a href="#">watch</a></li>
                      <li><a href="#">man’s product</a></li>
                      <li><a href="#">ladies</a></li>
                      <li><a href="#">westrn dress</a></li>
                      <li><a href="#">denim </a></li>
                    </ul>
                  </li>
                  <li class="main-mega">
                    <a href="#"
                      >best selling
                      <right-outlined />
                    </a>
                    <ul class="mega-menu">
                      <li class="single-menu">
                        <a href="#" class="title-link">Shop Kid's</a>
                        <!-- <div class="image">
													<img src="static/picture/mega-menu1.jpg" alt="#">
												</div> -->
                        <div class="inner-link">
                          <a href="#">Kids Toys</a>
                          <a href="#">Kids Travel Car</a>
                          <a href="#">Kids Color Shape</a>
                          <a href="#">Kids Tent</a>
                        </div>
                      </li>
                      <li class="single-menu">
                        <a href="#" class="title-link">Shop Men's</a>
                        <!-- <div class="image">
													<img src="static/picture/mega-menu2.jpg" alt="#">
												</div> -->
                        <div class="inner-link">
                          <a href="#">Watch</a>
                          <a href="#">T-shirt</a>
                          <a href="#">Hoodies</a>
                          <a href="#">Formal Pant</a>
                        </div>
                      </li>
                      <li class="single-menu">
                        <a href="#" class="title-link">Shop Women's</a>
                        <!-- <div class="image">
													<img src="static/picture/mega-menu3.jpg" alt="#">
												</div> -->
                        <div class="inner-link">
                          <a href="#">Ladies Shirt</a>
                          <a href="#">Ladies Frog</a>
                          <a href="#">Ladies Sun Glass</a>
                          <a href="#">Ladies Watch</a>
                        </div>
                      </li>
                    </ul>
                  </li>
                  <li><a href="#">accessories</a></li>
                  <li><a href="#">top 100 offer</a></li>
                  <li><a href="#">sunglass</a></li>
                  <li><a href="#">watch</a></li>
                  <li><a href="#">man’s product</a></li>
                  <li><a href="#">ladies</a></li>
                  <li><a href="#">westrn dress</a></li>
                  <li><a href="#">denim </a></li>
                </ul>
              </div>
            </a-col>
            <a-col :lg="18">
              <div class="menu-area">
                <!-- Main Menu -->
                <nav class="navbar navbar-expand-lg">
                  <div class="navbar-collapse">
                    <div class="nav-inner">
                      <ul class="nav main-menu menu navbar-nav">
                        <li class="active"><router-link :to="{ path: '/'}">首页</router-link></li>
                        <li><router-link :to="{ path: '/listing'}">买闲置</router-link></li>
                        <li><router-link :to="{ path: '/shop'}">小铺</router-link></li>
                        <!-- <li>
                          <a href="#"
                            >小铺 <down-outlined /><span class="new">New</span>
                          </a>
                          <ul class="dropdown">
                            <li><a href="cart.html">我的小铺</a></li>
                            <li><a href="checkout.html">订单管理</a></li>
                          </ul>
                        </li> -->
                        
                        <li><router-link :to="{ path: '/treeHole'}">树洞 <span class="new">New</span></router-link></li>
                        <li><router-link :to="{ path: '/about'}">联系我们</router-link></li>
                      </ul>
                    </div>
                  </div>
                </nav>
                <!--/ End Main Menu -->
              </div>
            </a-col>
          </a-row>
        </div>
      </div>
    </div>
  </header>
</template>

<script >
import { defineComponent, ref } from "vue";
import {
  PhoneOutlined,
  MailOutlined,
  EnvironmentOutlined,
  ClockCircleOutlined,
  UserOutlined,
  PoweroffOutlined,
  SearchOutlined,
  HeartOutlined,
  ShoppingOutlined,
  CloseOutlined,
  MenuOutlined,
  RightOutlined,
  DownOutlined,
} from "@ant-design/icons-vue";

export default defineComponent({
  setup() {
    const selectKey = ref("全部");
    const searchKey = ref("");
    const options = [{ value: "全部" }, { value: "电子产品" }, { value: "学习书籍" }];

    const onSearch = (value) => {
      console.log("use value", value);
      console.log("or use this.value", searchKey.value);
    };

    return {
      selectKey,
      options,
      searchKey,
      onSearch,
    };
  },
  components: {
    PhoneOutlined,
    MailOutlined,
    EnvironmentOutlined,
    ClockCircleOutlined,
    UserOutlined,
    PoweroffOutlined,
    SearchOutlined,
    HeartOutlined,
    ShoppingOutlined,
    CloseOutlined,
    MenuOutlined,
    RightOutlined,
    DownOutlined,
  },
});
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
    background-color: #32b87d;
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
      color: #32b87d;
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
          background: #32b87d;
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

.ant-select-item-option {
  line-height: 32px;
}

/* Topbar Left Nav */
.header.shop .top-left .list-main li:first-child {
  padding-left: 0;
}

.header.shop .top-left .list-main li i {
  display: inline-block;
  margin-right: 4px;
  font-size: 15px;
  color: #f7941d;
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
  color: #32b87d;
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
  color: #32b87d;
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
  color: @primary-color;
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

/* 分类栏 导航 */
.anticon-menu {
  margin-right: 15px;
}

.ant-col {
  padding-left: 15px;
  padding-right: 15px;
}

.header.shop .all-category {
  color: #fff;
  background: transparent;
  position: relative;
  background: @primary-color;
}

.header.shop .all-category h3 {
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

.header.shop .main-category li {
  display: block;
  border-bottom: 1px solid #f6f6f6;
  position: relative;
}

.header.shop .main-category li:last-child {
  border: none;
}

.header.shop .main-category li a {
  font-size: 14px;
  font-weight: 600;
  color: #333;
  padding: 13px 25px 13px 25px;
  display: block;
  text-transform: uppercase;
}

.header.shop .main-category li a i {
  display: inline-block;
  float: right;
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
  border-left: 3px solid @primary-color;
  -webkit-box-shadow: 0px 5px 15px #0000000a;
  -moz-box-shadow: 0px 5px 15px #0000000a;
  box-shadow: 0px 5px 15px #0000000a;
}

.header.shop .main-category li:hover .sub-category {
  opacity: 1;
  visibility: visible;
}

.header.shop .main-category li a {
  text-transform: capitalize;
  font-weight: 400;
}

.header.shop .main-category li a:hover {
  color: @primary-color;
}

.header.shop .main-category .main-mega {
  position: relative;
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
  border-left: 3px solid @primary-color;
  opacity: 0;
  visibility: hidden;
  -webkit-transition: all 0.4s ease;
  -moz-transition: all 0.4s ease;
  transition: all 0.4s ease;
}

.header.shop .main-category li:hover .mega-menu {
  opacity: 1;
  visibility: visible;
}

.header.shop .main-category li .mega-menu .single-menu {
  width: 33%;
  display: inline-block;
  border: none;
  padding: 0;
  padding-right: 20px;
}

.header.shop .main-category li .mega-menu .single-menu a {
  padding: 0;
}

.header.shop .main-category li .mega-menu .single-menu .image {
  overflow: hidden;
}

.header.shop .main-category li .mega-menu .single-menu img {
  display: block;
  height: 100%;
  width: 100%;
  cursor: pointer;
}

.header.shop .main-category li .mega-menu .single-menu .image:hover img {
  transform: scale(1.1);
}

.header.shop .main-category li .mega-menu .single-menu .title-link {
  margin-bottom: 20px;
  background: @primary-color;
  color: #fff;
  padding: 2px 13px;
  border-radius: 3px;
  display: inline-block;
  font-size: 14px;
}

.header.shop .main-category li .mega-menu .single-menu .title-link:hover {
  background: #333;
  color: #fff;
}

.header.shop .main-category li .mega-menu .single-menu .inner-link {
  margin-top: 25px;
}

.header.shop .main-category li .mega-menu .single-menu .inner-link a {
  margin-bottom: 10px;
}

.header.shop .main-category li .mega-menu .single-menu .inner-link a:hover {
  color: @primary-color;
  background: transparent;
}

.header.shop .main-category li .mega-menu .single-menu .inner-link a:last-child {
  margin-bottom: 0px;
}

.header.shop .menu-origin {
  float: none;
  display: inline-block;
  float: right;
}

.header.shop .nav li {
  margin-right: 40px;
  float: left;
  position: relative;
}

.header.shop .nav li {
  margin-right: 5px;
  position: relative;
  float: none;
}

.header.shop .nav li:last-child {
  margin-right: 0;
}

.header.shop .nav li .new {
  background: @primary-color;
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
  padding: 0px 9px;

  &::before {
    position: absolute;
    content: "";
    left: 4px;
    bottom: -8px;
    border: 4px solid @primary-color;
    border-bottom-color: transparent;
    border-left-color: transparent;
    border-right-color: transparent;
  }
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

.header.shop .nav li:hover a {
  color: #fff;
  background: @primary-color;
}

.header.shop .nav li.active a {
  color: #fff;
  background: @primary-color;
}

.header.shop .nav .dropdown li {
  margin: 0;
}

.header.shop .nav li .dropdown li:hover a {
  background: @primary-color;
}

.header.shop .nav li .dropdown li a {
  color: #333;
  padding: 8px 15px;
  font-weight: 400;
  background: #fff;
}

.header.shop .nav li .dropdown li a {
  font-weight: 400;
  font-size: 14px;
}

.header.shop .nav li .dropdown li a:hover {
  color: #fff;
}

.header.shop .nav li .dropdown li .dropdown.sub-dropdown li a:hover {
  background: @primary-color;
}

/* Main Menu */
@media (min-width: 992px) {
  .navbar-expand-lg .navbar-nav {
    -ms-flex-direction: row;
    flex-direction: row;
  }
}

.navbar-nav {
  display: -ms-flexbox;
  display: flex;
  -ms-flex-direction: column;
  flex-direction: column;
  padding-left: 0;
  margin-bottom: 0;
  list-style: none;
}

.navbar-expand-lg .navbar-collapse {
  display: block !important;
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
  background: #f7941d;
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
  background: #f7941d;
}

.header .nav li .dropdown.sub-dropdown li:last-child a {
  border-bottom: 0px solid;
}

.mobile-search {
  display: none;
}

/* Header Sticky */
.header .header-inner {
  width: 100%;
  z-index: 999;
}

.header.sticky.off-sticky {
  display: none;
}

.header.sticky .all-category {
}

.header.sticky .all-category h3 {
  cursor: pointer;
}

.header.sticky .all-category .main-category {
  opacity: 0;
  visibility: hidden;
  -webkit-transition: all 0.4s ease;
  -moz-transition: all 0.4s ease;
  transition: all 0.4s ease;
}

.header.sticky .all-category:hover .main-category {
  opacity: 1;
  visibility: visible;
}

.header.sticky .header-inner .nav li a {
  color: #333;
}

.header.sticky.v3 .header-inner .nav li a {
  color: #fff;
}

.header.sticky .header-inner .nav li:hover a {
  color: #fff;
}

.header.sticky.v2 .header-inner .nav li:hover a {
  color: #f7941d;
}

.header.sticky .header-inner .nav li .dropdown li a {
  color: #333;
}

.header.sticky.v2 .header-inner .nav li .dropdown li a {
  color: #333;
}

.header.sticky .header-inner .nav li .dropdown li a:hover {
  color: #fff;
}

.header.sticky .header-inner .nav li.active a {
  color: #fff;
}

.header.sticky .header-inner {
  position: fixed;
  top: 0;
  left: 0;
  background: #fff;
  animation: fadeInDown 1s both 0.2s;
  -webkit-box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.3);
  -moz-box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.3);
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.3);
  z-index: 999;
}

.header.sticky.v3 .header-inner {
  box-shadow: none;
}

.header.sticky.v3 .navbar-expand-lg .navbar-collapse {
  animation: fadeInDown 1s both 0.2s;
  -webkit-box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.3);
  -moz-box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.3);
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.3);
}
</style>
