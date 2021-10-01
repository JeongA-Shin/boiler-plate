import axios from 'axios';
import {
    LOGIN_USER,
    REGISTER_USER,
    AUTH_USER
}from './types';

//user의 여러 action 중 login
export function loginUser(DataToSubmit){
    //action
    //* 백엔드(index.js 참고) /api/user/login 라우팅을 만들어 놓음 - 로그인을 위한 것,그 쪽으로 정보를 보내줌 
    const request= axios.post('/api/users/login',DataToSubmit)
            .then(response=>response.data) //{/*request를 보낸후 :.then-> response를 받고*/}

    //action(state변화)후 Reducer에 넘겨줄 것
    //여기서 받는 reducer은 _reducers 폴더의 user_reducer.js
    return {
        type:LOGIN_USER,
        payload:request
    }
        
}


//user의 여러 action 중 register(회원가입)
export function registerUser(DataToSubmit){
    //action
    //* 백엔드(index.js 참고) /api/user/register 라우팅을 만들어 놓음 - 등록을 위한 것,그 쪽으로 정보를 보내줌 
    const request= axios.post('/api/users/register',DataToSubmit)
            .then(response=>response.data) //{/*request를 보낸후 :.then-> response를 받고*/}

    //action(state변화)후 Reducer에 넘겨줄 것
    //여기서 받는 reducer은 _reducers 폴더의 user_reducer.js
    return {
        type:REGISTER_USER,
        payload:request
    }
        
}

export function auth(){ //get method니까 딱히 보낼 데이터가 필요 없음(그래서 딱히 파라미터로 전달 되는 데이터 없음)
    //action
    //* 백엔드(index.js 참고) /api/user/register 라우팅을 만들어 놓음 - 등록을 위한 것,그 쪽으로 정보를 보내줌 
    const request= axios.get('/api/users/auth')
            .then(response=>response.data) //{/*request를 보낸후 :.then-> response를 받고*/}

    //action(state변화)후 Reducer에 넘겨줄 것
    //여기서 받는 reducer은 _reducers 폴더의 user_reducer.js
    return {
        type:AUTH_USER,
        payload:request
    }
        
}