import { takeEvery, put, call } from "redux-saga/effects";
import { IAction, IActions, IInitialState, ILoginData, ILoginMessage, IResponseData } from "../../interfaces/redux/Login";
import api from "../api";
// import request from 'superagent';

//action types
enum types {
    LOGIN_REQUESTED = 'LOGIN_REQUESTED',
    LOGIN_SUCCEEDED = 'LOGIN_SUCCEEDED',
    LOGIN_FAILED = 'LOGIN_FAILED',
    LOGOUT = 'LOGOUT'
};


export const actions: IActions= {
    loginRequested : (data: ILoginData, callback) : IAction => {
        console.log('inside');
        return {
            type: typeof types.LOGIN_REQUESTED,
            payload: data,
            callback
        }
    },
    loginSucceeded: (successMessage: ILoginMessage): IAction => ({
        type: types.LOGIN_SUCCEEDED,
        payload: successMessage
    }),
    loginFailed: (errorMesssage: ILoginMessage ): IAction => ({
        type: types.LOGIN_SUCCEEDED,
        payload: errorMesssage
    }),
    logout: () => ({
        type: types.LOGOUT
    })
};

export const initialState : IInitialState = {
    loading: false,
    successMessage: {},
    errorMessage: {},
};

export default function reducer(state=initialState, action: IAction){
    switch(action.type){
        case types.LOGIN_REQUESTED:
            return{
                ...state,
                loading: true
            };
        case types.LOGIN_SUCCEEDED:
            return{
                ...state,
                successMessage: action.payload,
                loading: false
            };
        case types.LOGIN_FAILED:
            return{
                ...state,
                errorMessage: action.payload,
                loading: false
            };
        case types.LOGOUT: 
            return {
                ...state,
                successMessage: {},
                errorMessage: {}
            }
        default:
            return state;
    }
};



export function* saga(){
    yield takeEvery('LOGIN_REQUESTED' as any, loginWorker);
};
 
export function* loginWorker(data: ILoginData){
    try{
        console.log('inside');
        const response: IResponseData = yield call(api.callLogin, data);
        console.log(response);
        const responseData : ILoginMessage = response.data;
        yield put(actions.loginSucceeded(responseData)); 
    }
    catch(error: any){
        yield put(actions.loginFailed(error.response.data)); 
    } 
};