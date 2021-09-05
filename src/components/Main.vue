<template>
    <div class="main">

        <h1>Main page</h1>


        <table v-for="x in productsList" v-bind:key="x.productIdx" >
            <tr>
                <img :src="x.image.url" width="200" style="d">
            </tr>
        </table>

        <button @click="PreBtn">이전</button>
        <button @click="nextBtn">다음</button>


    </div>
</template>
<script>
import axios from 'axios'

export default {
    data () {
        return {
            userInfo : '',
            productsList : [],
            allProductsList : [],
            limit : 5,
            offset : 1,
            allpaging : null,
            page : null
        }
    },
    mounted() {

    //userInfo 가져오기
    const sessionObj = window.sessionStorage.getItem('userInfo');
    let userInfo = sessionObj ? JSON.parse(sessionObj) : null;
    console.log(userInfo.accessToken[0]);


    this.productsMainListaxios()
    this.allProductsListview()
    },
    methods : {

    //전체 등록 상품 조회
    productsMainListaxios(){
        
        axios.get('http://api.zurazu.com/product', {
        params : {
            offset: this.offset,
            limit: this.limit,
            mainCategoryIdx: null, 
            subCategoryIdx: null, 
            notOnlySelectProgressing: true

        }          
        })
        .then(res => {
            console.log('productsMainList');
            console.log(res)
            console.log(res.data.list.products)
            
            this.offset = res.config.params.offset
            this.limit = res.config.params.limit
            this.productsList = res.data.list.products
            
        }
        )
        .catch(error => console.log(error))
        },

        //다음페이지
        nextBtn(){
        
        //총 페이지 수 
        const page = Math.ceil(this.allpaging/this.limit)
        
        //만약 limit * page  = 10 > offset 1 6 12 
        axios.get('http://api.zurazu.com/product', {
            params : {
                offset: this.limit * page < (this.offset+5) ? (this.offset) : (this.offset+5) ,
                limit: this.limit,
                mainCategoryIdx: null, 
                subCategoryIdx: null, 
                notOnlySelectProgressing: true

            }          
        })
        .then(res => {
            this.offset = res.config.params.offset
            this.productsList = res.data.list.products
            
        }
        )
        .catch(error => console.log(error))
        },

        //이전페이지
        PreBtn(){
        axios.get('http://api.zurazu.com/product', {
            params : {
                offset: 0 > (this.offset-5) ? 1 : this.offset - 5,
                limit: this.limit,
                mainCategoryIdx: null, 
                subCategoryIdx: null, 
                notOnlySelectProgressing: true

            }          
        })
        .then(res => {
            this.offset = res.config.params.offset
            this.productsList = res.data.list.products
            
        }
        )
        .catch(error => console.log(error))
        },

        //총 게시물 수 조회
        allProductsListview(){
        axios.get('http://api.zurazu.com/product', {
            params : {
                offset: 1,
                limit: 10000,
                mainCategoryIdx: null, 
                subCategoryIdx: null, 
                notOnlySelectProgressing: true

            }          
        })
        .then(res => {
            this.allProductsList = res.data.list.products
            //전체 배열 객체 수 조회
            this.allpaging = Object.keys(res.data.list.products).length
        
        }
        )
        .catch(error => console.log(error))
        }

    }
}
</script>
<style>

</style>


