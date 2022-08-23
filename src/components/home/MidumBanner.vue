<template>
    <section class="cown-down">
        <section class="section-inner">
            <a-row>
                <a-col class="padding-left" :lg="12">
                    <div class="image">
                        <img src="../../assets/images/banners/video-bg.png" alt="#">
                    </div>
                </a-col>
                <a-col class="padding-right" :lg="12">
                    <div class="content">
                        <div class="heading-block">
                            <p class="small-title">Deal of day</p>
                            <h3 class="title">Beatutyful dress for women</h3>
                            <p class="text">Suspendisse massa leo, vestibulum cursus nulla sit amet, frungilla placerat
                                lorem. Cars fermentum, sapien. </p>
                            <h1 class="price">$1200 <s>$1890</s></h1>
                            <div class="coming-time">
                                <div class="clearfix" data-countdown="2023/02/30">
                                    <div class="cdown"><span class="days"><strong>191</strong>
                                            <p>Days.</p>
                                        </span></div>
                                    <div class="cdown"><span class="hour"><strong> 6</strong>
                                            <p>Hours.</p>
                                        </span></div>
                                    <div class="cdown"><span class="minutes"><strong>14</strong>
                                            <p>MINUTES.</p>
                                        </span></div>
                                    <div class="cdown"><span class="second"><strong> 45</strong>
                                            <p>SECONDS.</p>
                                        </span></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </a-col>
            </a-row>
        </section>
    </section>
</template>
<style lang="less" scoped>
.cown-down {
	position: relative;
	height: 515px;
	overflow:hidden;
    .section-inner {
        width: 100%;
		height: 100%;
        margin-left: auto;
        margin-right: auto;
    }
}
.cown-down .padding-right{
	padding-left: 0;
	padding-right:0;
}
.cown-down .padding-left{
	padding-left:0;
	padding-right: 0;
}
.cown-down .image {
	overflow: hidden;
}
.cown-down .image img {
	width:100%;
	height:515px
}
.cown-down .content {
	text-align: center;
	background: #FDFBEF;
	height: 100%;
	position:relative;
}
.cown-down .content .heading-block{
	position:absolute;
	left:0;
	top:50%;
	transform:translateY(-50%);
	padding: 75px;
}
.cown-down .content .small-title {
	font-size: 13px;
	color: #777;
	display: block;
	text-transform: uppercase;
	margin-bottom: 5px;
	font-weight: 600;
}
.cown-down .content .title {
	font-size: 25px;
	font-weight: 600;
	margin-bottom: 20px;
	text-transform: capitalize;
}
.cown-down .content .price {
	margin-top: 35px;
	font-size: 35px;
	font-weight: 700;
	color: #F7941D;
}
.cown-down .content .price s{
	margin-top: 35px;
	font-size: 24px;
	font-weight: 500;
	color:#666;
}
.cown-down .content .cdown {
	float: none;
	text-align:center;
	margin-top:40px;
	width: 80px;
	display:inline-block;
	
}
.cown-down .content .cdown {
	text-align: center;
}
.cown-down .content .cdown{
	display:inline-block;
}
.cown-down .content .cdown span {
	color: #333;
	font-size: 22px;
	font-weight:400;
	text-transform:uppercase;
}
.cown-down .content .cdown p{
	font-size:13px;
	color:#666;
	text-transform:uppercase;
}
</style>