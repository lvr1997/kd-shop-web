<template>
    <div class="preloader" v-show="visible">
        <div class="preloader-inner">
            <div class="preloader-icon">
                <span></span>
                <span></span>
            </div>
        </div>
    </div>
</template>

<script setup>
defineProps({
    visible: {
        type: "boolean",
        default: false
    }
})
</script>

<style lang="less">
.preloader {
    position: fixed;
    top: 0;
    left: 0;
    z-index: 999999999;
    width: 100%;
    height: 100%;
    background-color: #fff;
    overflow: hidden;
}

.preloader-inner {
    position: absolute;
    top: 50%;
    left: 50%;
    -webkit-transform: translate(-50%, -50%);
    -moz-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
}

.preloader-icon {
    width: 100px;
    height: 100px;
    display: inline-block;
    padding: 0px;
}

.preloader-icon span {
    position: absolute;
    display: inline-block;
    width: 100px;
    height: 100px;
    border-radius: 100%;
    background: #F7941D;
    -webkit-animation: preloader-fx 1.6s linear infinite;
    animation: preloader-fx 1.6s linear infinite;
}

.preloader-icon span:last-child {
    animation-delay: -0.8s;
    -webkit-animation-delay: -0.8s;
}

@keyframes preloader-fx {
    0% {
        transform: scale(0, 0);
        opacity: 0.5;
    }

    100% {
        transform: scale(1, 1);
        opacity: 0;
    }
}

@-webkit-keyframes preloader-fx {
    0% {
        -webkit-transform: scale(0, 0);
        opacity: 0.5;
    }

    100% {
        -webkit-transform: scale(1, 1);
        opacity: 0;
    }
}
</style>