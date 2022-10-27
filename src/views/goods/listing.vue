<template>
  <!-- breadcrumb-area-start -->
  <Breadcrumb :title="title" :nav="nav"></Breadcrumb>
  <!-- breadcrumb-area-end -->
  <div class="goods_listing">
    <a-row>
      <a-col :lg="6" :md="8" :span="24">
        <div class="shop-sidebar">
          <div class="single-widget category">
            <h3 class="title">Categories</h3>
            <ul class="categor-list">
              <li><a href="#">T-shirts</a></li>
              <li><a href="#">jacket</a></li>
              <li><a href="#">jeans</a></li>
              <li><a href="#">sweatshirts</a></li>
              <li><a href="#">trousers</a></li>
              <li><a href="#">kitwears</a></li>
              <li><a href="#">accessories</a></li>
            </ul>
          </div>

          <div class="single-widget range">
            <h3 class="title">Shop by Price</h3>
            <div class="price-filter">
              <a-slider v-model:value="price" range />
              <div class="price-filter-amount">
                已选择范围：{{ price[0] + "-" + price[1] }}
              </div>
            </div>
            <ul class="check-box-list">
              <li>
                <label class="checkbox-inline" for="1"
                  >$20 - $50<span class="count">(3)</span></label
                >
              </li>
              <li>
                <label class="checkbox-inline" for="2"
                  >$50 - $100<span class="count">(5)</span></label
                >
              </li>
              <li>
                <label class="checkbox-inline" for="3"
                  >$100 - $250<span class="count">(8)</span></label
                >
              </li>
            </ul>
          </div>

          <!-- 网站使用者 反馈  开始 -->
          <div class="single-widget recent-post">
            <h3 class="title">Recent post</h3>

            <div class="single-post first">
              <div class="image">
                <img src="images/single-shop-img1.png" alt="#" />
              </div>
              <div class="content">
                <h5><a href="#">Girls Dress</a></h5>
                <p class="price">$99.50</p>
                <a-rate class="reviews" :value="4" disabled />
              </div>
            </div>

            <div class="single-post first">
              <div class="image">
                <img src="images/single-shop-img2.png" alt="#" />
              </div>
              <div class="content">
                <h5><a href="#">Women Clothings</a></h5>
                <p class="price">$99.50</p>
                <a-rate class="reviews" :value="4" disabled />
              </div>
            </div>

            <div class="single-post first">
              <div class="image">
                <img src="images/single-shop-img3.png" alt="#" />
              </div>
              <div class="content">
                <h5><a href="#">Man Tshirt</a></h5>
                <p class="price">$99.50</p>
                <a-rate class="reviews" :value="4" disabled />
              </div>
            </div>
          </div>

          <div class="single-widget category">
            <h3 class="title">Manufacturers</h3>
            <ul class="categor-list">
              <li><a href="#">Forever</a></li>
              <li><a href="#">giordano</a></li>
              <li><a href="#">abercrombie</a></li>
              <li><a href="#">ecko united</a></li>
              <li><a href="#">zara</a></li>
            </ul>
          </div>
        </div>
      </a-col>
      <!-- 右侧  开始 -->
      <a-col :lg="18" :md="16" :span="24">
        <a-row>
          <a-col :span="24">
            <div class="shop-top">
              <div class="shop-shorter">
                <div class="single-shorter">
                  <label>Show :</label>
                  <a-select>
                    <a-select-option value="10"></a-select-option>
                    <a-select-option value="15"></a-select-option>
                  </a-select>
                </div>
                <div class="single-shorter">
                  <label>Sort By :</label>
                  <a-select>
                    <a-select-option value="Name"></a-select-option>
                    <a-select-option value="Price"></a-select-option>
                  </a-select>
                </div>
              </div>
              <ul class="view-mode">
                <li class="active">
                  <a href="shop-grid.html"><i class="fa fa-th-large"></i></a>
                </li>
                <li>
                  <a href="shop-list.html"><i class="fa fa-th-list"></i></a>
                </li>
              </ul>
            </div>
          </a-col>
        </a-row>
        <a-row>
          <a-col :lg="8" :md="12" v-for="item in goods">
            <ProductItem
              :goodImg="item.goodImg"
              :goodName="item.goodName"
              :goodPrice="item.goodPrice"
            />
          </a-col>
        </a-row>
      </a-col>
      <!-- 右侧  结束 -->
    </a-row>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import Breadcrumb from "../../components/Breadcrumbs.vue";
import ProductItem from "@/components/ProductItem.vue";

import p5 from "@/assets/images/goods/p5.jpg";
import p7 from "@/assets/images/goods/p7.jpg";
import p9 from "@/assets/images/goods/p9.jpg";
import p11 from "@/assets/images/goods/p11.jpg";
import p13 from "@/assets/images/goods/p13.jpg";
import p15 from "@/assets/images/goods/p15.jpg";
import p17 from "@/assets/images/goods/p17.jpg";
import p31 from "@/assets/images/goods/p31.jpg";

const title = "Shop";
const nav = ["Home", "Shop"];

const price = ref<[number, number]>([20, 50]);

const goods = ref([
  {
    goodId: 1,
    goodName: "包包",
    goodPrice: 99,
    goodImg: p5,
    categoryId: 5,
  },
  {
    goodId: 2,
    goodName: "裤子",
    goodPrice: 88,
    goodImg: p7,
    categoryId: 4,
  },
  {
    goodId: 3,
    goodName: "手提包",
    goodPrice: 77,
    goodImg: p9,
    categoryId: 5,
  },
  {
    goodId: 4,
    goodName: "帽子",
    goodPrice: 66,
    goodImg: p11,
    categoryId: 3,
  },
  {
    goodId: 5,
    goodName: "大衣",
    goodPrice: 55,
    goodImg: p13,
    categoryId: 1,
  },
  {
    goodId: 6,
    goodName: "眼镜",
    goodPrice: 77,
    goodImg: p15,
    categoryId: 3,
  },
  {
    goodId: 7,
    goodName: "上衣",
    goodPrice: 76,
    goodImg: p17,
    categoryId: 1,
  },
  {
    goodId: 5,
    goodName: "鞋",
    goodPrice: 73,
    goodImg: p31,
    categoryId: 2,
  },
]);
</script>

<style lang="less" scoped>
.goods_listing {
  max-width: 1170px;
  /* width: 100%; */
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;
  padding: 100px 0;
  position: relative;
  .shop-sidebar {
    .single-widget {
      margin-top: 30px;
      background: #f6f7fb;
      padding: 30px;
      &:first-child {
        margin-top: 0;
      }
      .title {
        position: relative;
        font-size: 18px;
        font-weight: 500;
        text-transform: capitalize;
        margin-bottom: 25px;
        display: block;
        border-bottom: 1px solid #ddd;
        padding-bottom: 15px;
      }
      .categor-list {
        margin-top: 10px;
        li {
          margin-bottom: 10px;
          a {
            display: inline-block;
            color: #666;
            font-weight: 400;
            font-size: 14px;
            text-transform: capitalize;
            &:hover {
              color: #32b87d;
            }
          }
        }
      }
      &.range {
        .price-filter {
          display: block;
          margin-top: 20px;
          .price-filter-amount {
            font-weight: 600;
            font-size: 14px;
            color: #222;
            margin-top: 15px;
          }
        }
        .check-box-list {
          margin-top: 15px;
          li {
            margin-bottom: 5px;
            label {
              margin: 0;
              font-size: 14px;
              font-weight: 400;
              color: #333;
              cursor: pointer;
            }
          }
          .count {
            margin-left: 5px;
            color: #666;
          }
        }
      }

      &.recent-post {
        .single-post {
          position: relative;
          margin-top: 30px;
          padding-bottom: 30px;
          border-bottom: 1px solid #ddd;
          &.first {
            padding-top: 0px;
          }
          .image img {
            height: 80px;
            width: 80px;
            position: absolute;
            left: 0;
            top: 0;
            border-radius: 100%;
          }
          .content {
            padding-left: 100px;
            h5 {
              line-height: 18px;
            }
            .price {
              display: block;
              color: #333;
              font-weight: 500;
              margin: 5px 0 0px 0;
              text-transform: uppercase;
              font-size: 14px;
              line-height: 24px;
            }
            .reviews {
              font-size: 12px;
            }
          }
        }
      }
    }
  }

  .shop-top {
    clear: both;
    background: #f6f7fb;
    padding: 18px 20px 50px 20px;
    .shop-shorter {
      float: left;
      .single-shorter {
        display: inline-block;
        margin-right: 10px;
        &:last-child {
          margin: 0;
        }
        label {
          display: inline-block;
          float: left;
          margin: 4px 5px 0 0;
          font-weight: 500;
        }
      }
    }
  }
}
</style>
