import axios from 'axios';
import React,{useEffect} from 'react';
import { useDispatch } from 'react-redux';
import {auth} from '../_actions/user_action';

export default function(SpecificComponent,option,adminRoute=null){
    //파라미터의 option으로 올 수 있는 값:
    //null : 아무나 출입이 가능한 페이지
    //true : 로그인한 유저만 출입이 가능한 페이지
    //false : 로그인한 유저는 출입 불가능

    function AuthenticationCheck(props){
        const dispatch=useDispatch()
        useEffect(() => {
            //backend(index.js의 auth부분)에서 처리한 것이 response에 다 들어가 있음
            dispatch(auth()).then(response=>{
                //분기처리
                //로그인 하지 않은 상태
                if(!response.payload.isAuth){
                    //그런데 로그인이 필요한 페이지로 들어오려고 하면
                    if(option == true){
                        props.history.push('/login')
                    }
                }else{
                    //로그인한 상태
                    //admin이 아닌데 admin만 들어갈 수 있는 페이지에 접근
                    if(adminRoute && !response.payload.isAdmin){
                        props.history.push('/')
                    }else{
                        //로그인한 유저가 들어갈 수 없는 페이지에 접근
                        if(option == false){
                            props.history.push('/')
                        }
                    }
                }
            })
        }, [])

        return (
            <SpecificComponent />
        )
    }
    return AuthenticationCheck
}