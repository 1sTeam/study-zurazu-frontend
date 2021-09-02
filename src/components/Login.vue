<template>
    <div class="Login">
        <form @submit.prevent="submitLogin"> 
            <div class="LoginTemplate">
                
            <form class="title">
            {{title}}
            </form>

                <form class="EmailInsert">
                    <input placeholder="이메일" id="emailInput" v-model="emailInput" />
                </form>

                <form class="PwInsert">
                    <input type = "password" placeholder="비밀번호"  id="passwordInput" v-model="passwordInput" />
                </form>


                <form class="loginChk">
                <input type = "checkbox" name="loginChk" value = "true">로그인 상태유지<br>
                </form>

                <button class="login_btn">로그인</button>
                
                
                <div class="LoginBottom">
                    <div class="SearchId">아이디 찾기</div>
                    <div class="line">|</div>
                    <div class="SearchPw">비밀번호 찾기</div>
                    <div class="line">|</div>
                    <div class="Join">회원가입</div>
                </div >
            </div>
        </form>
</div>
</template>

<script>
import Axios from 'axios';

export default{
    name : 'login',
    data () {
        return {
            title : "ZURAZU",
            emailInput : '',
            passwordInput : '',
        }
    },
    methods : {
        submitLogin(){
			console.log('test');
            Axios.post('http://api.zurazu.com/member/login', {
            email: this.emailInput,
            password: this.passwordInput,
        })
        .then(res => {
        console.log(res)
        if (res.status === 200) {
            alert('로그인 성공');
            const accessToken = res.data.list.accessToken;
            const refreshToken = res.data.list.refreshToken;
            const userInfo = {
                accessToken: accessToken,
                refreshToken: refreshToken,
            };
            window.sessionStorage.setItem("userInfo",JSON.stringify(userInfo));
            console.log(sessionStorage.getItem('userInfo'))
        }}
        )
        .catch(error => console.log(error))


        },

        
}


    }
    

</script>


<style scoped>

.title{
    font-size: 30px;
    color: #214AD9;
    font-weight : bolder;

    margin-bottom: 1.5em;

}
.LoginTemplate{
    display: flex;
    width : 27rem;
    margin-left: auto;
    margin-right: auto;
    margin-top: 10em;
    flex-direction: column;
    align-items: center;
    height: 100vh;
}
.EmailInsert,.PwInsert {

    padding: 10px 10px;
    font-size: 16px;
    width: 85%;

    background-color : rgba(10,160,244,0.12);

}

.EmailInsert:hover, .PwInsert:hover
.EmailInsert:focus-within, .PwInsert:focus-within {
    background-color: rgba(10,160,244,0.3);
}
.loginChk {
    width: 85%;
    padding-top: 1.5rem;
    padding-bottom: 0.5rem;
    font-size: 14px;

}

.login_btn{
    cursor: pointer;
    background-color: #214AD9;
    margin-top: 1em;
    color: white;
    font-weight:bold;
    font-size: 20px;
    border: none;
    width: 85%;
    padding-top: 0.7rem;
    padding-bottom: 0.7rem;
    }

.LoginBottom {
    width: 85%;
    cursor: pointer;
    display: flex;
    margin-top: 1.5rem;
    font-size: 14px;
    justify-content: space-around;
}

input{
    background: none;
    border-width: 0;
    outline: none;

}
</style>