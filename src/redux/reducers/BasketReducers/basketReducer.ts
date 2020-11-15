import { ADD_TO_BASKET, BasketActions, BasketState, DELETE_FROM_BASKET } from '../../../types'

const basketReducer = (
  state: BasketState = { myBasket: []},
  action: BasketActions
): BasketState => {
  switch (action.type) {
  case ADD_TO_BASKET:
    const { book } = action.payload
    if (state.myBasket.find((value) => value.id === book.id)) {
      return state
    }
    return { ...state, myBasket: [...state.myBasket, book] }
    case DELETE_FROM_BASKET:
    const remainingBooksInBasket = state.myBasket.filter((value) => value.id !== action.payload.book.id)
    return {
     ...state, myBasket: remainingBooksInBasket
    }
  default:
    return state
  }
}
export default basketReducer