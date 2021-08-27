<template>
    <div class="Login">
    
        <div class="wrapper">
            <div class="LoginTemplate">
                
            <form class="title">
            {{title}}
            </form>

                <form class="EmailInsert">
                    <input placeholder="이메일" />
                </form>

                <form class="PwInsert">
                    <input placeholder="비밀번호" />
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
        </div>

</div>
</template>

<script>
export default{

name : 'login',
data () {
    return {
        title : "ZURAZU"
    }
}

}
</script>


<style scoped>
body{
    background: #E5E5E5;
}
.wrapper {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 5rem;
}
.title{
    font-size: 30px;
    color: #214AD9;
    font-weight : bolder;
    margin-top: 1.5rem;
    margin-bottom: 1.5em;

}
.LoginTemplate{
    display: flex;
    width : 27rem;
    margin-left: auto;
    margin-right: auto;
    margin-top: 5em;
    flex-direction: column;
    align-items: center;
    height: 1vh;
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