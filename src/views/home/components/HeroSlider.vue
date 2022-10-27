<template>
  <!-- Slider Area -->
  <section class="hero-slider">
    <!-- Single Slider -->
    <div class="single-slider">
      <div class="container">
        <a-row :getters="0">
          <a-col :lg="18" :offset="6">
            <div class="text-inner">
              <a-row>
                <a-col :lg="14">
                  <div class="hero-text">
                    <h1><span>UP TO 50% OFF </span>开设你的校园小铺</h1>
                    <p>
                      Maboriosam in a nesciung eget magnae <br />
                      dapibus disting tloctio in the find it pereri <br />
                      odiy maboriosm.
                    </p>
                    <div class="button">
                      <router-link :to="{path: '/publish'}" class="btn">发布闲置</router-link>
                    </div>
                  </div>
                </a-col>
              </a-row>
            </div>
          </a-col>
        </a-row>
      </div>
    </div>
    <!--/ End Single Slider -->
  </section>
  <!--/ End Slider Area -->
</template>

<style lang="less" scoped>
.container {
  max-width: 1170px;
  padding-left: 15px;
  padding-right: 15px;
  margin-right: auto;
  margin-left: auto;
}
.hero-slider {
  background: #fff;
  overflow: hidden;

  .single-slider {
    height: auto;
    background-image: url("../../../assets/slider.jpg");
    background-color: #eae6d8;
    background-size: contain;
    background-position: right;
    background-repeat: no-repeat;
    height: 510px;
  }

  .hero-text {
    padding: 0 30px;
    margin-top: 100px;

    h1 {
      line-height: 50px;
      font-size: 47px;
      font-weight: 700;
      color: @primary-color;
      margin-bottom: 20px;

      span {
        font-size: 20px;
        display: block;
        margin-bottom: 12px;
        color: #333;
        font-weight: 700;
        line-height: initial;
      }
    }

    p {
      color: #333;
      margin-bottom: 35px;
    }

    .button {
      margin: 0;
    }

    .btn {
      color: #fff;
      background: #333;
      padding: 13px 30px;
      line-height: initial;
      border: none;
      height: auto;
      z-index: 0;

      &:hover {
        background: @primary-color;
        color: #fff;
      }
    }
  }
}
</style>
