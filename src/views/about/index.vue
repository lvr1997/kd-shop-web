<template>
  <main>
    <!-- breadcrumb-area-start -->
    <Breadcrumb :title="title" :nav="nav"></Breadcrumb>
    <!-- breadcrumb-area-end -->

    <!-- contact-form-area start -->
    <section class="contact-us section">
      <div class="contact-head">
        <a-row>
          <a-col :lg="16" :span="24">
            <div class="form-main">
              <div class="title">
                <h4>Get in touch</h4>
                <h3>Write us a message</h3>
              </div>
              <div class="form-group message">
                <label>your message<span>*</span></label>
                <textarea name="message" placeholder=""></textarea>
              </div>
              <div class="form-group button">
                <button type="submit" class="btn">Send Message</button>
              </div>
            </div>
          </a-col>
          <a-col :lg="8" :span="24">
            <div class="single-head">
              <div class="single-info">
                <i><phone-outlined /></i>
                <h4 class="title">Call us Now:</h4>
                <ul>
                  <li>+123 456-789-1120</li>
                  <li>+522 672-452-1120</li>
                </ul>
              </div>
              <div class="single-info">
                <i><mail-outlined /></i>
                <h4 class="title">Email:</h4>
                <ul>
                  <li><a href="mailto:info@yourwebsite.com">info@yourwebsite.com</a></li>
                  <li>
                    <a href="mailto:info@yourwebsite.com">support@yourwebsite.com</a>
                  </li>
                </ul>
              </div>
              <div class="single-info">
                <i><send-outlined /></i>
                <h4 class="title">Our Address:</h4>
                <ul>
                  <li>KA-62/1, Travel Agency, 45 Grand Central Terminal, New York.</li>
                </ul>
              </div>
            </div>
          </a-col>
        </a-row>
      </div>
    </section>
    <!-- contact-form-area end -->
  </main>
</template>

<script setup lang="ts">
import Breadcrumb from "../../components/Breadcrumbs.vue";
import { SendOutlined, MailOutlined, PhoneOutlined } from "@ant-design/icons-vue";
import { ref } from "vue";

const title = ref("联系我们");
const nav = ref(["Home", "Contact"]);
</script>

<style lang="less" scoped>
.contact-us {
  position: relative;
  z-index: 43;
  padding: 100px 0;
  .contact-head {
    max-width: 1170px;
    padding-right: 15px;
    padding-left: 15px;
    margin-right: auto;
    margin-left: auto;
  }
  .form-main {
    box-shadow: 0px 0px 15px #0000001a;
    padding: 50px;
    .form-group {
      margin-bottom: 1rem;
      label {
        color: #333;
        position: relative;
        display: inline-block;
        margin-bottom: 0.5rem;
      }
      textarea {
        height: 180px;
        width: 100%;
        border: 1px solid #e6e2f5;
        padding: 15px 20px;
        color: #333;
        border-radius: 0px;
        resize: none;
        font-weight: 400;
        font-size: 14px;
        line-height: 24px;
      }
      &.button {
        margin: 0;
        .btn {
          height: 50px;
          border: none;
          position: relative;
          font-weight: 500;
          font-size: 14px;
          color: #fff;
          background: #333;
          display: inline-block;
          -webkit-transition: all 0.4s ease;
          -moz-transition: all 0.4s ease;
          transition: all 0.4s ease;
          z-index: 5;
          display: inline-block;
          padding: 13px 32px;
          border-radius: 0px;
          text-transform: uppercase;
        }
      }
    }
  }
  .title {
    margin-bottom: 30px;
    h4 {
      font-size: 17px;
      font-weight: 500;
      margin-bottom: 5px;
      color: #32b87d;
    }
    h3 {
      font-size: 25px;
      text-transform: capitalize;
      font-weight: 600;
    }
  }

  .single-head {
    padding: 50px;
    box-shadow: 0px 0px 15px #0000001a;
    height: 100%;
    .single-info {
      text-align: left;
      margin-bottom: 30px;
      i {
        color: #fff;
        font-size: 18px;
        display: inline-block;
        margin-bottom: 15px;
        height: 40px;
        width: 40px;
        display: block;
        text-align: center;
        border-radius: 3px;
        line-height: 40px;
        background: #32b87d;
      }
      .title {
        margin-bottom: 10px;
        font-weight: 500;
        color: #333;
        font-size: 18px;
      }
    }
  }
}
</style>
