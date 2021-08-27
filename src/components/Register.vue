<template >
    <div class="register"> 
    <form @submit.prevent="submitForm">
<!-- @ 는 v-on 과 같은 표현식이다. 폼 내부에서 버튼을 누르면 submit 이벤트가 form 으로 전송되고 v-on:submit이 실행된다.
이때 페이지가 새로고침되므로 .prevent를 통해 새로고침을 막고 methods의 함수롤 호출하게 한다. -->
	<div class="container">

        <div class="wrapper1">
            <div class="title">
            ZURAZU            
            </div>
        </div>
        
        
        <div class="wrapper2">
            <div class="registerTemplate">
                <h2>가입하기</h2>
                <div>
                    <label for="email">이메일 주소 (ID) </label>
                    <input type="text" id="email" v-model="email" />
                </div>

                <div>
                    <label for="password">비밀번호</label>
                    <input type="password" id="password" v-model="password" />
                </div>

                <div>
                    <label for="passwordConfirm">비밀번호 확인</label>
                    <input type="password" id="passwordConfirm" v-model="passwordConfirm" />
                </div>

                <div>
                    <label for="name">실명</label>
                    <input type="text" id="name" v-model="name" />
                </div>

                <div>
                    <label for="sex">성별</label>
                    <select name="sex">
                        <option value="">성별 선택</option>
                        <option value="남">남</option>
                        <option value="여">여</option>
                    </select>
                </div>

                <form name="해당 폼의 이름" action="값을 보낼 주소" method="post">
                    <label for="date">생년월일</label>
                    <input type='date' name='userBirthday' value='1999-03-30'/>
                </form>

                <div class="checkbox_group">

                    <input type="checkbox" id="check_all" >
                    <label for="check_all">전체 동의</label>
                    
                    <input type="checkbox" id="check_1" class="normal" >
                    <label for="check_1">개인정보 처리방침 동의</label>
                    
                    <input type="checkbox" id="check_2" class="normal" >
                    <label for="check_2">서비스 이용약관 동의</label>
                    
                    <input type="checkbox" id="check_3" class="normal" >
                    <label for="check_3">마케팅 수신 동의</label>
                    
                </div>

                <button type="submit">회원가입</button>
            </div>
        </div>
    </div>

	</form>




    </div>
</template>
<script>
export default {
    data() {
        return {
			email: '',
			name: '',
			password: '',
			passwordConfirm: '',
        }
    },

    methods: {
		submitForm() {
			console.log('test');
		},
    },
}
</script>
<style>
html, body {
		margin: 0;
		padding: 0;
		height: 100%;
        width: 100%;
        background: #E5E5E5;
		}
</style>
<style scoped>

.register{
    background: #E5E5E5;

}
.container{
    display: flex;
    height: 100vh;
    width: 100vw;

}
.wrapper1{
    flex: 1;
    font-size: 30px;
    color: #214AD9;
    font-weight : bolder;
    align-self:center;
    margin-left: 20%;
    padding-bottom: 5rem;
    
}

.wrapper2{
    flex: 2;
    align-self:center;
}

.registerTemplate{

    width : 300px;
    height: 400px;
    padding: 50px;
    background: white;

}

.registerTemplate>div{


}

button {
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
</style>