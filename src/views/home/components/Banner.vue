<template>
    <section class="small-banner section">
        <div class="container-fluid">
            <a-row>
                <a-col :lg="8" :md="12">
                    <div class="single-banner">
                        <img src="@/assets/images/banners/mini-banner1.jpg" alt="#">
                        <div class="content">
                            <p>Man's Collectons</p>
                            <h3>Summer travel <br> collection</h3>
                            <a href="#">Discover Now</a>
                        </div>
                    </div>
                </a-col>
                <a-col :lg="8" :md="12">
                    <div class="single-banner">
                        <img src="@/assets/images/banners/mini-banner2.jpg" alt="#">
                        <div class="content">
                            <p>Bag Collectons</p>
                            <h3>Awesome Bag <br> 2020</h3>
                            <a href="#">Shop Now</a>
                        </div>
                    </div>
                </a-col>
                <a-col :lg="8">
                    <div class="single-banner tab-height">
                        <img src="@/assets/images/banners/mini-banner3.jpg" alt="#">
                        <div class="content">
                            <p>Flash Sale</p>
                            <h3>Mid Season <br> Up to <span>40%</span> Off</h3>
                            <a href="#">Discover Now</a>
                        </div>
                    </div>
                </a-col>
            </a-row>
        </div>
    </section>
</template>

<style lang="less" scoped>
.small-banner {
    padding: 30px 0;
    padding-bottom: 0;

    .container-fluid {
        width: 100%;
        padding-right: 15px;
        padding-left: 15px;
        margin-right: auto;
        margin-left: auto;
    }

    .single-banner {
        overflow: hidden;
        position: relative;

        img {
            height: 100%;
            width: 100%;
            -webkit-transition: all 0.4s ease;
            -moz-transition: all 0.4s ease;
            transition: all 0.4s ease;
        }

        .content {
            position: absolute;
            left: 0;
            top: 50%;
            transform: translateY(-50%);
            padding-left: 35px;
        }

        h3 {
            font-size: 22px;
            font-weight: 700;
            text-transform: capitalize;
            color: #333;

            span {
                color: @primary-color;
            }

        }
    }

    p {
        font-size: 14px;
        color: @primary-color;
        font-weight: 500;
        margin-bottom: 5px;
        text-transform: capitalize;
    }

    a {
        color: #333;
        margin-top: 22px;
        display: block;
        font-size: 12px;
        font-weight: 500;
        display: inline-block;
        text-transform: uppercase;
        border-bottom: 2px solid #333;

        &:hover {
            color: @primary-color;
            border-color: @primary-color;
        }
    }
}
</style>