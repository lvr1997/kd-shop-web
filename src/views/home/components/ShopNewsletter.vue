<template>
    <section class="shop-newsletter section">
        <div class="container">
            <div class="inner-top">
                <a-row>
                    <a-col :lg="16" :offset="4">
                        <div class="inner">
                            <h4>新闻通讯</h4>
                            <p> 订阅我们的时事通讯，首次购买可获得 <span>10%</span> 的折扣</p>
                            <form action="#" method="get" target="_blank" class="newsletter-inner">
                                <input name="EMAIL" placeholder="在这里输入你的邮箱" required type="email">
                                <button class="btn">立即订阅</button>
                            </form>
                        </div>
                    </a-col>
                </a-row>
            </div>
        </div>
    </section>
</template>

<style lang="less" scoped>
.shop-newsletter {
    background: #fff;
}

.shop-newsletter .inner {
    text-align: center;
}

.shop-newsletter .inner h4 {
    color: #333;
    font-size: 17px;
    font-weight: 600;
    margin-bottom: 5px;
    text-transform: uppercase;
}

.shop-newsletter .inner p {
    color: #777;
    font-size: 14px;
    font-weight: 400;
    margin-bottom: 30px;
}

.shop-newsletter .inner p span {
    color: @primary-color;
}

.shop-newsletter .newsletter-inner {
    position: relative;
    display: inline-block;
}

.shop-newsletter .newsletter-inner input {
    width: 480px;
    height: 55px;
    border-radius: 0px;
    padding: 0px 30px;
    font-weight: 400;
    display: inline-block;
    text-shadow: none;
    box-shadow: none;
    border-radius: 0;
    border: none;
    border: 1px solid #ececec;
    border-radius: 30px 0 0 30px;
}

.shop-newsletter .newsletter-inner button {
    border: none;
    text-shadow: none;
    box-shadow: none;
    border-radius: 0;
}

.shop-newsletter .newsletter-inner .btn {
    display: inline-block;
    height: 55px;
    padding: 10px 30px;
    position: relative;
    top: 0;
    background: @primary-color;
    color: #fff;
    left: -4px;
    border-radius: 0 30px 30px 0;
    font-size: 14px;
    font-weight: 500;
    text-transform: uppercase;
}

.shop-newsletter .newsletter-inner .btn:hover {
    background: #333;
    color: #fff;
}
</style>