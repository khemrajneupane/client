import { Dispatch } from "react";

import loginServices from "../../../services/loginServices";
import { LoggedUser, LoggingAction, Users, USER_LOGIN } from "../../../types";
import userList from '../UserActions/userGetAllAction'
import bookList from '../BookActions/bookGetAllAction'
//login
function login(usrInfo: LoggedUser): LoggingAction {
    return {
      type: USER_LOGIN,
      payload: {
        usrInfo
      }
    }
  }

export const logIn = async(user: Users, dispatch: Dispatch<any>) =>  {
    try{
    const aUser = await loginServices.login(user);
    const loggedToken = window.localStorage.setItem("loggedUser", JSON.stringify(aUser));
    window.localStorage.setItem("userId", JSON.stringify(aUser.userInfo.id));
    window.localStorage.setItem("username", JSON.stringify(aUser.userInfo.username));
    aUser.token = loggedToken
    const cookies = document.cookie
   const loggedCookies = cookies.slice(18, cookies.length)
   aUser.token = loggedCookies
    dispatch(login(aUser))
    bookList(dispatch)
    userList(dispatch)
    
    }catch(error){
        console.log(error)
    }  
}

