import React,{useState} from 'react'
import {useDispatch} from 'react-redux';
import {registerUser} from '../../../_actions/user_action';
import Axios from 'axios';
import { withRouter } from 'react-router-dom';

function RegisterPage(props) {

        //각 component별 state만들기
        const dispatch=useDispatch();

        const [Email, setEmail] = useState("")
        const [Password, setPassword] = useState("")
        const [Name, setName] = useState("")
        const [ConfirmPassword, setConfirmPassword] = useState("")
        
        const onEmailHandler=(event)=>{
            setEmail(event.currentTarget.value)
        }
    
        const onNameHandler=(event)=>{
            setName(event.currentTarget.value)
        }

        const onPasswordHandler=(event)=>{
            setPassword(event.currentTarget.value)
        }

        const onConfirmPasswordHandler=(event)=>{
            setConfirmPassword(event.currentTarget.value)
        }
    
    
        const onSubmitHandler=(event)=>{
            event.preventDefault(); {/* 버튼을 눌렀을 때(login버튼-제출버튼) submit이 아니라 새로고침만 되도록 하는 것을 막기 위한 것 */}
            
            if(Password != ConfirmPassword){
                return alert('비밀번호와 비밀번호 확인이 같아야 합니다!')
            }

            let body={
                email:Email,
                password:Password,
                name:Name
            }

            //dispatch를 이용해서 action(user action)을 취함
            //action은 _actions폴더를 참고
            dispatch(registerUser(body))
                .then(response=>{
                   if(response.payload.success){
                       props.history.push('/login') //회원가입에 성공하면 login화면으로 보내줌
                   }else{
                       alert("Failed to Register")
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
                
                <label>Name</label>
                <input type="text" value={Name} onChange={onNameHandler} />

                <label>Password</label>
                <input type="password" value={Password} onChange={onPasswordHandler} />

                <label> Confirm Password</label>
                <input type="password" value={ConfirmPassword} onChange={onConfirmPasswordHandler} />

                <br/>
                <button>
                    회원가입
                </button>
            </form>
        </div>
    )
}

export default withRouter(RegisterPage)
