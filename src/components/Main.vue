<template>
    <div class="main">

        <h1>Main page</h1>
        
    </div>
</template>
<script>
//import axios from 'axios'
//import { axiosApiInstance } from '@/util/axiosApiInstance'


export default {
    data () {
        return {
            userInfo : '',
            
        }
    },
    mounted() {
        
    //userInfo 가져오기
    const sessionObj = window.sessionStorage.getItem('userInfo');
    let userInfo = sessionObj ? JSON.parse(sessionObj) : null;
    console.log(userInfo.accessToken[0]);

    },
    methods : {
        
    }
}
</script>
<style>

</style>


