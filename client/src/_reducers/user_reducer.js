import {
    LOGIN_USER,
    REGISTER_USER,
    AUTH_USER
} from '../_actions/types';

// previous state+action => next state
export default function (state={},action) {//여기서 파라미터의 state는 previous state를 가르킴, 즉 현재는 {}이므로 비어있는 상태
    switch (action.type) {
        case LOGIN_USER:
            return {...state,loginSuccess:action.payload} //...:그냥 그대로 가져오는 것. 따라서 빈 상태 그대로
            break;
        case REGISTER_USER:
            return {...state,register:action.payload} //...:그냥 그대로 가져오는 것. 따라서 빈 상태 그대로
            break;
        case AUTH_USER:
            return {...state,userData:action.payload} //...:그냥 그대로 가져오는 것. 따라서 빈 상태 그대로
            break;
        default:
            return state;
    }
}