import { combineReducers } from 'redux';
import user from './user_reducer';

const rootReducer=combineReducers({ //각 component별 reducer를 합쳐줌
    user
})

export default rootReducer;