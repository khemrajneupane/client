import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import loanList from "../redux/actions/LoanAction/loanFetchAllAction"
import userList from "../redux/actions/UserActions/userGetAllAction"
import { AppState } from "../types"

const useUser = () => {
    const dispatch = useDispatch()
    const [id, setId] = useState('')
    const [username, setUsername] = useState<any | undefined>('')
    const users = useSelector((state: AppState) => state.user.users)
    const checkAdmin = users.find(user => user.username === username)
  
    useEffect(()=>{
    const loggedUserJSON = window.localStorage.getItem("userId");
    const usernm = window.localStorage.getItem("username");
    if (loggedUserJSON && usernm) {
      const loggedUsr = JSON.parse(loggedUserJSON);
      const loggedUsername = JSON.parse(usernm);
      setId(loggedUsr)
      setUsername(loggedUsername)
      userList(dispatch)
      loanList(dispatch)
    }
  },[dispatch,id, username])
  return [id, username, checkAdmin]
}

export default useUser