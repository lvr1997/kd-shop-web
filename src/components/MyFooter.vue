<template>
  <footer class="footer">
    <div class="footer-top section">
      <div class="container">
        <a-row>
          <a-col :lg="10" :md="12">
            <div class="single-footer about">
              <div class="logo">
                <a href=""><img src="../assets/logo.png" alt="#" /></a>
              </div>
              <p class="text">
                Praesent dapibus, neque id cursus ucibus, tortor neque egestas augue,
                magna eros eu erat. Aliquam erat volutpat. Nam dui mi, tincidunt quis,
                accumsan porttitor, facilisis luctus, metus.
              </p>
              <p class="call">
                Got Question? Call us 24/7<span
                  ><a href="tel:123456789">+0123 456 789</a></span
                >
              </p>
            </div>
          </a-col>
          <a-col :lg="4" :md="12">
            <div class="single-footer links">
              <h4>Information</h4>
              <ul>
                <li><a href="#">About Us</a></li>
                <li><a href="#">Faq</a></li>
                <li><a href="#">Terms & Conditions</a></li>
                <li><a href="#">Contact Us</a></li>
                <li><a href="#">Help</a></li>
              </ul>
            </div>
          </a-col>
          <a-col :lg="4" :md="12">
            <div class="single-footer links">
              <h4>Customer Service</h4>
              <ul>
                <li><a href="#">Payment Methods</a></li>
                <li><a href="#">Money-back</a></li>
                <li><a href="#">Returns</a></li>
                <li><a href="#">Shipping</a></li>
                <li><a href="#">Privacy Policy</a></li>
              </ul>
            </div>
          </a-col>
          <a-col :lg="6" :md="12">
            <div class="single-footer social">
              <h4>Get In Tuch</h4>
              <!-- Single Widget -->
              <div class="contact">
                <ul>
                  <li>NO. 342 - London Oxford Street.</li>
                  <li>012 United Kingdom.</li>
                  <li>info@eshop.com</li>
                  <li>+032 3456 7890</li>
                </ul>
              </div>
              <!-- End Single Widget -->
              <ul>
                <li>
                  <a href="#"><i class="ti-facebook"></i></a>
                </li>
                <li>
                  <a href="#"><i class="ti-twitter"></i></a>
                </li>
                <li>
                  <a href="#"><i class="ti-flickr"></i></a>
                </li>
                <li>
                  <a href="#"><i class="ti-instagram"></i></a>
                </li>
              </ul>
            </div>
          </a-col>
        </a-row>
      </div>
    </div>
    <div class="copyright">
      <div class="container">
        <div class="inner">
          <a-row class="row">
            <a-col :lg="12">
              <div class="left">
                <p>Copyright &copy; 2022. 【kd.shop】校园二手交易平台</p>
              </div>
            </a-col>
            <a-col :lg="12">
              <div class="right">
                <!-- <img src="static/picture/payments.png" alt="#"> -->
              </div>
            </a-col>
          </a-row>
        </div>
      </div>
    </div>
  </footer>
</template>

<style lang="less" scoped>
.footer {
  background: #222;
}
.footer .about {
  padding-right: 50px;
}
.footer .single-footer h4 {
  font-size: 17px;
  font-weight: 600;
  color: #fff;
  text-transform: capitalize;
  margin-bottom: 30px;
}
.footer .about .logo {
  margin-bottom: 20px;
}
.footer .about .logo img {
}
.footer .about .text {
  color: #fff;
  font-weight: 400;
}
.footer .about .call {
  color: #fff;
  margin-top: 15px;
  font-weight: 400;
}
.footer .about .call span {
  display: block;
}
.footer .about .call a {
  color: #f7941d;
  font-size: 20px;
  font-weight: 600;
}
.footer .links ul {
}
.footer .links ul li {
  display: block;
  margin-bottom: 8px;
}
.footer .links ul li:last-child {
  margin-bottom: 0;
}
.footer .links ul li a {
  color: #fff;
  font-weight: 400;
}
.footer .links ul li a:hover {
  color: #f7941d;
  padding-left: 10px;
}
.footer .social {
}
.footer .social .contact {
}
.footer .social .contact ul {
}
.footer .social .contact ul li {
  color: #fff;
  display: block;
  margin-bottom: 4px;
  font-weight: 400;
}
.footer .contact ul li:last-child {
  margin-bottom: 0;
}
.footer .social ul {
  margin-top: 20px;
}
.footer .social ul li {
  display: inline-block;
  margin-right: 25px;
}
.footer .social ul li:last-child {
  margin-right: 0;
}
.footer .social ul li a {
  color: #fff;
  display: block;
  font-size: 16px;
}
.footer .social ul li a:hover {
  color: @primary-color;
}
/* Copyright */
.footer .copyright {
}
.footer .copyright .inner {
  border-top: 1px solid #eeeeee3d;
  padding: 20px 0;
}
.footer .copyright .left {
}
.footer .copyright .right {
  float: right;
}
.footer .copyright p {
  color: #fff;
}
.footer .copyright p a {
  color: #fff;
  text-decoration: underline;
}
</style>
