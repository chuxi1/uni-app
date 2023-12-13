<template>
    <u-swiper
            :list="list3"
            indicator
            indicatorMode="line"
            circular
    ></u-swiper>
</template>
<script>
    export default {
        data() {
            return {
                list3: [
                    'https://cdn.uviewui.com/uview/swiper/swiper3.png',
                    'https://cdn.uviewui.com/uview/swiper/swiper2.png',
                    'https://cdn.uviewui.com/uview/swiper/swiper1.png',
                ],
            }
        }
    }
</script>