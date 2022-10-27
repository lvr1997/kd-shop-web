<template>
    <section class="shop-blog section">
        <div class="container">
            <a-row>
                <a-col :span="24">
                    <div class="section-title">
                        <h2>From Our Blog</h2>
                    </div>
                </a-col>

            </a-row>
            <a-row>
                <a-col :lg="8" :md="12">
                    <!-- Start Single Blog  -->
                    <div class="shop-single-blog">
                        <img src="@/assets/images/blogs/blog1.jpg" alt="#">
                        <div class="content">
                            <p class="date">22 July , 2020. Monday</p>
                            <a href="#" class="title">Sed adipiscing ornare.</a>
                            <a href="#" class="more-btn">Continue Reading</a>
                        </div>
                    </div>
                    <!-- End Single Blog  -->
                </a-col>
                <a-col :lg="8" :md="12">
                    <!-- Start Single Blog  -->
                    <div class="shop-single-blog">
                        <img src="@/assets/images/blogs/blog2.jpg" alt="#">
                        <div class="content">
                            <p class="date">22 July, 2020. Monday</p>
                            <a href="#" class="title">Man’s Fashion Winter Sale</a>
                            <a href="#" class="more-btn">Continue Reading</a>
                        </div>
                    </div>
                    <!-- End Single Blog  -->
                </a-col>
                <a-col :lg="8" :md="12">
                    <!-- Start Single Blog  -->
                    <div class="shop-single-blog">
                        <img src="@/assets/images/blogs/blog3.jpg" alt="#">
                        <div class="content">
                            <p class="date">22 July, 2020. Monday</p>
                            <a href="#" class="title">Women Fashion Festive</a>
                            <a href="#" class="more-btn">Continue Reading</a>
                        </div>
                    </div>
                    <!-- End Single Blog  -->
                </a-col>

            </a-row>
        </div>
    </section>
</template>

<style lang="less" scoped>
.shop-blog.grid .shop-single-blog {
    margin-top: 30px;
}

.shop-blog .shop-single-blog {
    text-align: center;
    -webkit-transition: all 0.4s ease;
    -moz-transition: all 0.4s ease;
    transition: all 0.4s ease;
}

.shop-blog .shop-single-blog:hover {
    box-shadow: 0px 10px 10px #0000000a;
}

.shop-blog .shop-single-blog img {
    height: 100%;
    width: 100%;
}

.shop-blog .shop-single-blog .content {
    padding: 40px;
}

.shop-blog .shop-single-blog .content .title {
    font-size: 17px;
    font-weight: 600;
    color: #333;
}

.shop-blog .shop-single-blog .content .title:hover {
    color: @primary-color;
}

.shop-blog .shop-single-blog .content .date {
    font-size: 14px;
    font-weight: 400;
    margin-bottom: 5px;
    color: #B7B7B7;
}

.shop-blog .shop-single-blog .content .more-btn {
    font-size: 14px;
    font-weight: 400;
    color: #3c3c3c;
    margin-top: 10px;
    display: block;
}

.shop-blog .shop-single-blog .content .more-btn:hover {
    color: @primary-color;
}

/* Related Product */
.related-product {
    padding-top: 0;
}

.related-product .section-title {
    text-align: center;
    margin-bottom: 10px;
    padding: 0;
}

.related-product .section-title h2 {
    font-size: 25px;
    margin-bottom: 0;
    text-transform: capitalize;
    position: relative;
    color: #2c2d3f;
    font-weight: 700;
    padding-bottom: 15px;
}

/* Blog Sidebar */
.main-sidebar {
    background: #fff;
    margin-top: 30px;
    padding: 40px;
    background: transparent;
    border: 1px solid #eeeeeec2;
}

.main-sidebar .single-widget {
    margin-bottom: 50px;
}

.main-sidebar .single-widget .title {
    position: relative;
    font-size: 18px;
    font-weight: 600;
    text-transform: capitalize;
    margin-bottom: 30px;
    display: block;
    background: #fff;
    padding-left: 12px;
}

.main-sidebar .single-widget .title::before {
    position: absolute;
    content: "";
    left: 0;
    bottom: -1px;
    height: 100%;
    width: 3px;
    background: @primary-color;
}

.main-sidebar .single-widget:last-child {
    margin: 0;
}

.main-sidebar .search {
    position: relative;
}

.main-sidebar .search input {
    width: 100%;
    height: 45px;
    box-shadow: none;
    text-shadow: none;
    font-size: 14px;
    border: none;
    color: #222;
    background: transparent;
    padding: 0 70px 0 20px;
    -webkit-transition: all 0.4s ease;
    -moz-transition: all 0.4s ease;
    transition: all 0.4s ease;
    border-radius: 0;
    border: 1px solid #eee;
}

.main-sidebar .search .button {
    position: absolute;
    right: 0;
    top: 0;
    height: 44px;
    width: 50px;
    line-height: 45px;
    box-shadow: none;
    text-shadow: none;
    text-align: center;
    border: none;
    font-size: 14px;
    color: #fff;
    background: #333;
    -webkit-transition: all 0.4s ease;
    -moz-transition: all 0.4s ease;
    transition: all 0.4s ease;
}

.main-sidebar .search .button:hover {
    background: @primary-color;
    color: #fff;
}

/* Category List */
.main-sidebar .categor-list {
    margin-top: 15px;
}

.main-sidebar .categor-list li {}

.main-sidebar .categor-list li {
    margin-bottom: 10px;
}

.main-sidebar .categor-list li:last-child {
    margin-bottom: 0px;
}

.main-sidebar .categor-list li a {
    display: inline-block;
    color: #333;
    font-size: 14px;
}

.main-sidebar .categor-list li a:hover {
    color: @primary-color;
    padding-left: 7px;
}

.main-sidebar .categor-list li a i {
    display: inline-block;
    margin-right: 0px;
    font-size: 9px;
    transform: translateY(-1px);
    opacity: 0;
    visibility: hidden;
    -webkit-transition: all 0.4s ease;
    -moz-transition: all 0.4s ease;
    transition: all 0.4s ease;
}

.main-sidebar .categor-list li a:hover i {
    margin-right: 6px;
    opacity: 1;
    visibility: visible;
}

/* Recent Post */
.main-sidebar .recent-post {}

.main-sidebar .single-post {
    position: relative;
    border-bottom: 1px solid #ddd;
    display: inline-block;
    padding: 17px 0;
}

.main-sidebar .single-post:last-child {
    padding-bottom: 0px;
    border: none;
}

.main-sidebar .single-post .image {}

.main-sidebar .single-post .image img {
    float: left;
    width: 80px;
    height: 80px;
    margin-right: 20px;
}

.main-sidebar .single-post .content {
    padding-left: 100px;
}

.main-sidebar .single-post .content h5 {
    line-height: 18px;
}

.main-sidebar .single-post .content h5 a {
    color: #2C2D3F;
    font-weight: 500;
    font-size: 14px;
    font-weight: 500;
    margin-top: 10px;
    display: block;
    margin-bottom: 10px;
    margin-top: 0;
}

.main-sidebar .single-post .content h5 a:hover {
    color: @primary-color;
}

.main-sidebar .single-post .content .comment {}

.main-sidebar .single-post .content .comment li {
    color: #888;
    display: inline-block;
    margin-right: 15px;
    font-weight: 400;
    font-size: 14px;
}

.main-sidebar .single-post .content .comment li:last-child {
    margin-right: 0;
}

.main-sidebar .single-post .content .comment li i {
    display: inline-block;
    margin-right: 5px;
}

/* Blog Tags */
.main-sidebar .side-tags {}

.main-sidebar .side-tags .tag {
    margin-top: 40px;
}

.main-sidebar .side-tags .tag li {
    display: inline-block;
    margin-right: 7px;
    margin-bottom: 20px;
}

.main-sidebar .side-tags .tag li a {
    background: #fff;
    color: #333;
    padding: 8px 14px;
    text-transform: capitalize;
    border-radius: 0;
    font-size: 13px;
    background: #F6F7FB;
}

.main-sidebar .side-tags .tag a:hover {
    color: #fff;
    background: @primary-color;
    border-color: transparent;
}

/* Blog Newslatter CSS */
.main-sidebar .newsletter {}

.main-sidebar .newsletter .letter-inner {
    position: relative;
    padding: 35px 30px;
    box-shadow: 0px 0px 12px #00000014;
    z-index: 2;
    overflow: hidden;
}

.main-sidebar .newsletter .letter-inner h4 {
    text-transform: capitalize;
    margin-bottom: 25px;
    font-size: 18px;
    font-weight: 600;
    line-height: 24px;
}

.main-sidebar .newsletter .letter-inner p {
    margin-bottom: 20px;
}

.main-sidebar .newsletter .letter-inner .form-inner {
    position: relative;
}

.main-sidebar .newsletter .letter-inner input {
    width: 100%;
    height: 45px;
    background: #fff;
    border: none;
    border: 1px solid #ddd;
    padding: 0px 60px 0px 20px;
    box-shadow: none;
    text-shadow: none;
    border-radius: 0;
}

.main-sidebar .newsletter .letter-inner .form-inner a {
    height: 42px;
    width: 100%;
    background: @primary-color;
    color: #fff;
    font-size: 14px;
    display: block;
    text-align: center;
    line-height: 42px;
    margin-top: 10px;
    text-transform: uppercase;
    font-weight: 500;
}

.main-sidebar .newsletter .letter-inner .form-inner a:hover {
    background: #333;
    color: #fff;
}

/* Blog Single CSS */
.blog-single {
    background: #fff;
    padding: 70px 0 100px;
}

.blog-single .blog-single-main {
    margin-top: 30px;
    background: #fff;
}

.blog-single .blog-detail {
    background: #fff;
}

.blog-single .image {
    position: relative;
}

.blog-single .image img {
    width: 100%;
    height: 100%;
}

.blog-single .blog-title {
    font-size: 24px;
    font-weight: 600;
    text-transform: capitalize;
    margin: 40px 0 15px 0;
}

.blog-single .blog-meta {
    margin-bottom: 0;
    overflow: hidden;
    border-bottom: 1px solid #dddddd6e;
    padding-bottom: 20px;
    margin-bottom: 25px;
}

.blog-single .blog-meta .author i {
    color: @primary-color;
    margin-right: 10px;
    font-size: 13px;
}

.blog-single .blog-meta .author a {
    font-size: 13px;
    border-right: 1px solid #ddd;
    padding: 0px 15px;
}

.blog-single .blog-meta .author a:first-child {
    padding-left: 0;
}

.blog-single .blog-meta .author a:last-child {
    padding-right: 0;
    border: none;
}

.blog-single .blog-meta span {
    display: inline-block;
    font-size: 14px;
    color: #666;
}

.blog-single .blog-meta span a i {
    margin-right: 10px;
    color: @primary-color;
}

.blog-single .blog-meta span a:hover {
    color: @primary-color;
}

.blog-single .content p {
    margin-bottom: 25px;
    line-height: 26px;
}

.blog-single .content p:last-child {
    margin: 0;
}

.blog-single blockquote {
    position: relative;
    font-size: 13px;
    font-weight: 400;
    padding-left: 20px;
    padding: 10px 20px;
    background: #F6F6F6;
    padding: 30px 40px 30px 70px;
    color: #555;
    border: none;
    margin-bottom: 25px;
    border-left: 3px solid @primary-color;
}

.blog-single blockquote i {
    font-size: 30px;
    color: @primary-color;
    position: absolute;
    left: 20px;
    top: 20px;
}

.blog-single .content .img-post {
    margin-bottom: 25px;
}

.blog-single .share-social .content-tags {
    position: relative;
    margin-top: 25px;
}

.blog-single .share-social .content-tags h4 {
    position: absolute;
    left: 0;
    top: 7px;
    font-size: 15px;
    font-weight: 500;
}

.blog-single .share-social .content-tags .tag-inner {
    padding-left: 60px;
}

.blog-single .share-social .content-tags .tag-inner li {
    display: inline-block;
    margin-right: 7px;
    margin-bottom: 10px;
    margin-top: 4px;
}

.blog-single .share-social .content-tags .tag-inner li:last-child {
    margin-right: 0px;
    margin-bottom: 0px;
}

.blog-single .share-social .content-tags .tag-inner li a {
    border-radius: 30px;
    padding: 5px 15px;
    background: #f4f7fc;
    font-size: 13px;
}

.blog-single .share-social .content-tags .tag-inner li a:hover {
    color: #fff;
    background: @primary-color;
}

/* Comments */
.blog-single .comments {
    margin-top: 40px;
}

.blog-single .comments .comment-title {
    position: relative;
    font-size: 18px;
    font-weight: 600;
    text-transform: capitalize;
    margin-bottom: 30px;
    display: block;
    background: #fff;
    padding-left: 12px;
}

.blog-single .comments .comment-title:before {
    position: absolute;
    content: "";
    left: 0;
    bottom: -1px;
    height: 100%;
    width: 3px;
    background: @primary-color;
}

.blog-single .comments {}

.blog-single .comments .single-comment {
    position: relative;
    margin-bottom: 40px;
    border-radius: 5px;
    padding-left: 95px;
}

.blog-single .comments .single-comment.left {
    margin-left: 110px;
}

.blog-single .comments .single-comment img {
    height: 70px;
    width: 70px;
    border-radius: 100%;
    position: absolute;
    left: 0;
}

.blog-single .single-comment .content {}

.blog-single .single-comment .content h4 {
    color: #333;
    font-size: 16px;
    font-weight: 500;
    margin-bottom: 10px;
    display: inline-block;
    margin-bottom: 18px;
    text-transform: capitalize;
}

.blog-single .single-comment .content h4 span {
    display: inline-block;
    font-size: 13px;
    color: #8D8D8D;
    margin: 0;
    font-weight: 400;
    text-transform: capitalize;
    display: block;
    margin-top: 5px;
}

.blog-single .single-comment .content p {
    color: #666;
    font-weight: 400;
    display: block;
    margin: 0;
    margin-bottom: 20px;
    line-height: 22px;
}

.blog-single .single-comment .content .button {}

.blog-single .single-comment .content .btn {
    display: inline-block;
    color: #666;
    font-weight: 400;
    color: #6a6a6a;
    border-radius: 4px;
    text-transform: capitalize;
    font-size: 14px;
    background: transparent;
    padding: 0;
}

.blog-single .single-comment .content a i {
    display: inline-block;
    margin-right: 5px;
}

.blog-single .single-comment .content a:hover {
    color: @primary-color;
}

/* Comment Form */
.blog-single .reply form {
    padding: 40px;
    border: 1px solid #eee;
}

.blog-single .reply .reply-title {
    position: relative;
    font-size: 18px;
    font-weight: 600;
    text-transform: capitalize;
    margin-bottom: 30px;
    display: block;
    background: #fff;
    padding-left: 12px;
}

.blog-single .reply .reply-title:before {
    position: absolute;
    content: "";
    left: 0;
    bottom: -1px;
    height: 100%;
    width: 3px;
    background: @primary-color;
}

.blog-single .reply .form-group {
    margin-bottom: 20px;
}

.blog-single .reply .form-group input {
    width: 100%;
    height: 45px;
    line-height: 50px;
    padding: 0 20px;
    border-radius: 0px;
    color: #333 !important;
    border: none;
    border: 1px solid #eee;
}

.blog-single .reply .form-group textarea {
    width: 100%;
    height: 200px;
    line-height: 50px;
    padding: 0 20px;
    border-radius: 0px;
    color: #333 !important;
    border: none;
    border: 1px solid #eee;
}

.blog-single .reply .form-group label {
    color: #333;
    position: relative;
}

.blog-single .reply .form-group label span {
    color: #ff2c18;
    display: inline-block;
    position: absolute;
    right: -12px;
    top: 4px;
    font-size: 16px;
}

.blog-single .reply .button {
    text-align: left;
    margin-bottom: 0px;
}

.blog-single .reply .button .btn {
    height: 50px;
    border: none;
}
</style>