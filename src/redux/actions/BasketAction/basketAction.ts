import {  ADD_TO_BASKET, BasketActions, Books, DELETE_FROM_BASKET } from '../../../types'

  export const addBookToBasket = (book: Books, id: any): BasketActions => {
    return {
      type: ADD_TO_BASKET,
      payload: {
        book,
        id
      },
    }
  }
  
  export const deleteBookFromBasket = (book: Books): BasketActions => {
    return {
      type: DELETE_FROM_BASKET,
      payload: {
        book,
      },
    }
  }