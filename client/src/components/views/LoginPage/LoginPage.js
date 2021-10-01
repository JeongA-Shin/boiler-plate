import axios from 'axios'
import React,{useState} from 'react'
import {useDispatch} from 'react-redux';
import {loginUser} from '../../../_actions/user_action';
import {withRouter} from 'react-router-dom'

function LoginPage(props) {
    //각 component별 state만들기
    const dispatch=useDispatch();
    const [Email, setEmail] = useState("")
    const [Password, setPassword] = useState("")

    const onEmailHandler=(event)=>{
        setEmail(event.currentTarget.value)
    }

    const onPasswordHandler=(event)=>{
        setPassword(event.currentTarget.value)
    }


    const onSubmitHandler=(event)=>{
        event.preventDefault(); {/* 버튼을 눌렀을 때(login버튼-제출버튼) submit이 아니라 새로고침만 되도록 하는 것을 막기 위한 것 */}
        let body={
            email:Email,
            password:Password
        }

        //dispatch를 이용해서 action(action의 이름은 loginUser)을 취함
        //action은 _actions폴더를 참고
        dispatch(loginUser(body))
            .then(response=>{
                if(response.payload.loginSuccess){
                    props.history.push('/')//로그인 성공 후 시작 페이지로 다시 돌아가기
                }else{
                    alert('Error')
                }
            })
    }

    return (
        <div style={{
            display:'flex',justifyContent:'center',alignItems:'center'
            ,width:'100%',height:'100vh'
        }}>
            <form style={{display:'flex',flexDirection:'column'}}
                onSubmit={onSubmitHandler} 
                > {/* 버튼을 눌렀을 때 submit 동작이 되도록 */}
                <label>Email</label>
                <input type="email" value={Email} onChange={onEmailHandler} />
                 {/*내가 타이핑을 하면 onChange(onEmailHanlder)를 발생시켜서 state(value)가 바뀌게 함 */}
                
                <label>Password</label>
                <input type="password" value={Password} onChange={onPasswordHandler} />

                <br/>
                <button>
                    Login
                </button>


            </form>
        </div>
    )
}

export default withRouter(LoginPage)
