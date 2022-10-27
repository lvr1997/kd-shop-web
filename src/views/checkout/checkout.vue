<template>
  <main>
    <!-- breadcrumb-area-start -->
    <Breadcrumb :title="title" :nav="nav"></Breadcrumb>
    <!-- breadcrumb-area-end -->

    <!-- Start Checkout -->
    <section class="checkout section">
      <a-row>
        <a-col :lg="16" :span="24">
          <div class="checkout-form">
            <h2>Make Your Checkout Here</h2>
            <p>Please register in order to checkout more quickly</p>
          </div>
        </a-col>
        <a-col :lg="8" :span="24">
          <div class="order-details">
            <!-- Order Widget -->
            <div class="single-widget">
              <h2>CART TOTALS</h2>
              <div class="content">
                <ul>
                  <li>Sub Total<span>$330.00</span></li>
                  <li>(+) Shipping<span>$10.00</span></li>
                  <li class="last">Total<span>$340.00</span></li>
                </ul>
              </div>
            </div>
            <!--/ End Order Widget -->
            <!-- Order Widget -->
            <div class="single-widget">
              <h2>Payments</h2>
              <div class="content">
                <div class="checkbox">
                  <a-radio-group v-model:value="payMethod">
                    <a-radio :value="1">微信</a-radio>
                    <a-radio :value="2">支付宝</a-radio>
                    <a-radio :value="3">银联卡</a-radio>
                  </a-radio-group>
                </div>
              </div>
            </div>
            <!--/ End Order Widget -->
            <!-- Payment Method Widget -->
            <div class="single-widget payement">
              <div class="content">
                <!-- 这个图片可以放付款码  -->
                <img src="static/picture/payment-method.png" alt="#" />
              </div>
            </div>
            <!--/ End Payment Method Widget -->
            <!-- Button Widget -->
            <div class="single-widget get-button">
              <div class="content">
                <div class="button">
                  <a href="#" class="btn">proceed to checkout</a>
                </div>
              </div>
            </div>
            <!--/ End Button Widget -->
          </div>
        </a-col>
      </a-row>
    </section>
    <!--/ End Checkout -->
    <ShopService />
    <ShopNewsletter />
  </main>
</template>

<script setup lang="ts">
import { ref } from "vue";
import Breadcrumb from "@/components/Breadcrumbs.vue";
import ShopService from "../home/components/ShopService.vue";
import ShopNewsletter from "../home/components/ShopNewsletter.vue";

const title = "结算";
const nav = ["Home", "Checkout"];
const payMethod = ref<number>(1)
</script>

<style lang="less" scoped>
.checkout {
  max-width: 1170px;
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;
  .checkout-form {
    margin-top: 30px;
    h2 {
      font-size: 25px;
      color: #333;
      font-weight: 700;
      line-height: 27px;
    }
    p {
      font-size: 16px;
      color: #333;
      font-weight: 400;
      margin-top: 12px;
      margin-bottom: 30px;
      line-height: 24px;
    }
  }

  .order-details {
    margin-top: 30px;
    background: #fff;
    padding: 15px 0 30px 0;
    border: 1px solid #eee;
    .single-widget {
      margin-bottom: 30px;
      h2 {
        position: relative;
        font-size: 15px;
        font-weight: 600;
        padding: 10px 30px;
        line-height: 24px;
        text-transform: uppercase;
        color: #333;
        padding-bottom: 5px;
        &:before {
          position: absolute;
          content: "";
          left: 30px;
          bottom: 0;
          height: 2px;
          width: 50px;
          background: #32b87d;
        }
      }

      .content {
        ul {
          margin-top: 30px;
          li {
            display: block;
            padding: 0px 30px;
            font-size: 15px;
            font-weight: 400;
            color: #333;
            margin-bottom: 12px;
            &.last {
              padding-top: 12px;
              border-top: 1px solid #ebebeb;
              display: block;
              font-size: 15px;
              font-weight: 400;
              color: #333;
            }
            span {
              display: inline-block;
              float: right;
            }
          }
        }
        .checkbox {
          text-align: left;
          margin: 0;
          padding: 0px 30px;
          margin-top: 30px;
          label {
            color: #555555;
            position: relative;
            font-size: 14px;
            // padding-left: 20px;
            margin-top: -5px;
            font-weight: 400;
            display: block;
            margin-bottom: 15px;
            &:last-child {
              margin-bottom: 0;
            }

            input {
              display: none;
            }
          }
        }
      }

      &.payement {
        padding: 0px 38px;
        text-align: center;
        margin-top: 30px;
      }
      &.get-button {
        text-align: center;
        padding: 0px 35px;
        .btn {
          height: 46px;
          width: 100%;
          line-height: 19px;
          text-align: center;
          border-radius: 0;
          text-transform: uppercase;
          color: #fff;
          position: relative;
          font-weight: 500;
          font-size: 14px;
          background: #333;
          transition: all 0.4s ease;
          z-index: 5;
          display: inline-block;
          padding: 13px 32px;
          &:hover {
            background: #32b87d;
          }
        }
      }
      &:last-child {
        margin: 0;
      }
    }
  }
}
</style>
