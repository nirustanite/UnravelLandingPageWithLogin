export interface ILoginData {
    username: string;
    password: string;
}

export interface ILoginMessage{
    username: string;
    status:  boolean;
    message: string;
}

export interface IInitialState{
    loading: boolean;
    successMessage: ILoginMessage | {};
    errorMessage: ILoginMessage | {};
}

export interface IAction {
    type: string;
    payload: ILoginData | ILoginMessage;
    callback?: () => void;
}

export interface IResponseData {
    data: ILoginMessage;
}

export interface IActions{
    loginRequested : (data: ILoginData, callback: () => void ) => IAction;
    loginSucceeded: (successMessage: ILoginMessage) =>  IAction;
    loginFailed: (errorMesssage: ILoginMessage) => IAction;
    logout: () => void
}

export interface IRootState {
    login: any
}
  
