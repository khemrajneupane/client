import { Dispatch } from 'react'

import { AuthorFetchActions, Authors, AUTHORS_LIST } from '../../../types'
import authorServices from '../../../services/authorServices'

// Users Fetch
function fetchAuthors(authors: Authors[]): AuthorFetchActions {
  return {
    type: AUTHORS_LIST,
    payload: {
        authors,
    },
  }
}
const authorList = async (dispatch: Dispatch<any>) => {
  try {
    const allAuthors = await authorServices.getAll()
    dispatch(fetchAuthors(allAuthors))
  }catch(error){
    console.log(error)
  }
}

export default authorList
