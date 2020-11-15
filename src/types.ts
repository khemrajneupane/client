// Action types
export const ADD_PRODUCT = 'ADD_PRODUCT'
export const REMOVE_PRODUCT = 'REMOVE_PRODUCT'
export const TOGGLE_DIALOG = 'TOGGLE_DIALOG'
// Country List Types
export const COUNTRY_LIST_REQ = 'COUNTRY_LIST_REQ'
export const COUNTRY_LIST_OK = 'COUNTRY_LIST_OK'
export const COUNTRY_LIST_X = 'COUNTRY_LIST_X'
//Basket Action Types
export const ADD_TO_BASKET_OK = 'ADD_TO_BASKET_OK'
export const ADD_TO_BASKET_X = 'ADD_TO_BASKET_X'
export const ADD_TO_BASKET_REQ = 'ADD_TO_BASKET_REQ'
//Delete From Basket Action
export const DELETE_FROM_BASKET_OK = 'DELETE_FROM_BASKET_OK'
//BOOKS ACTIONS
export const BOOKS_LIST = 'BOOKS_LIST'
export const BOOKS_ADD = 'BOOKS_ADD'
export const BOOK_UPDATE = 'BOOK_UPDATE'
export const BOOK_REMOVE = 'BOOK_REMOVE'

//User ACTIONS
export const USER_ADD = 'USER_ADD'
export const USERS_LIST = 'USERS_LIST'
export const USERS_UPDATE = 'USERS_UPDATE'

//Login & Logout Actions
export const USER_LOGIN = 'USER_LOGIN'
export const USER_LOGOUT = 'USER_LOGOUT'

//Author ACTIONS
export const AUTHOR_ADD = 'AUTHOR_ADD'
export const AUTHOR_UPDATE = 'AUTHOR_UPDATE'
export const AUTHORS_LIST = 'AUTHORS_LIST'

// Book Author Add Action type
export const BOOK_AUTHOR_ADD = 'BOOK_AUTHOR_ADD'

//Loan Action type
export const LOAN_ADD = 'LOAN_ADD'
export const LOAN_FETCH = 'LOAN_FETCH'
export const LOAN_REMOVE = 'LOAN_REMOVE'
//export const LOAN_LIST = 'LOAN_FETCH'

// Basket Actions
export const ADD_TO_BASKET = 'ADD_TO_BASKET'
export const DELETE_FROM_BASKET = 'DELETE_FROM_BASKET'

// Enum
export enum DialogType {
  SignIn = 'signIn',
  SignUp = 'signUp',
}

// Languages
export type Languages = {
  name: string
  iso639_1: string
}
// A product
export type Product = {
  id: string
  name: string
  price: number
}
// A Country
export type Countries = {
  alpha2Code?: string
  flag: string
  name: string
  imgUrl: string
  countryName: string
  languages: Languages[]
  population: number
  region: string
  loading: boolean
  nativeName: string
}
// Countries List OK
export type CountriesListOkAction = {
  type: typeof COUNTRY_LIST_OK
  payload: {
    countries: Countries[]
  }
}

export type AddProductAction = {
  type: typeof ADD_PRODUCT
  payload: {
    product: Product
  }
}

export type RemoveProductAction = {
  type: typeof REMOVE_PRODUCT
  payload: {
    product: Product
  }
}

export type ToggleDialogAction = {
  type: typeof TOGGLE_DIALOG
  payload: {
    dialog: DialogType
  }
}

export type UiActions = ToggleDialogAction

// Use this union in reducer
export type ProductActions = AddProductAction | RemoveProductAction

export type ProductState = {
  inCart: Product[]
}

// Using dynamic keys from an enum
export type UiState = {
  dialogOpen: {
    [key in DialogType]?: boolean
  }
}

export type AppState = {
  bookAll: BookState
  user: UserState
  author: AuthorState
  loan: LoanState
  loggedUser: LoggerState
  myBasket: BasketState
  
}
// Types for hooks and table elements

export type FlagType = {
  imgUrl: string
}
/*
export type SearchType = {
  keyword: string
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}
*/
export type MainTableType = {
  countries: Country[]
  handleClickSort: (orderBy: string) => void
  asc: boolean
  orderBy: string
}
export type TableRowType = {
  imgUrl: string
  countryName: string
  languages: Languages[]
  population: number
  region?: string
  addCountryToBasket: any
}

export type Country = {
  alpha2Code?: string
  flag: string
  name: string
  imgUrl: string
  countryName: string
  languages: Languages[]
  population: number
  region: string
  loading: boolean
  nativeName: string
}

export type TableHeaderType = {
  handleSearchChange: (keyword: string) => void
  asc: boolean
  orderBy: string
}

export type TableCellType = { name: string } & TableHeaderType

export type CardType = {
  flag: string
  name: string
  aCountry: Countries
}
//********************************** Books *******/
export type BookId = {
  id: string
}
//Books
export type Books = {
  id: string //BookId
  title: string
  category: string
  description: string
  isAvailable: boolean
  isbn: string
  publishedYear: string
  publisher: string
  total: number
  rating: number
  image: string
  author: Authors[] //author: AuthorId 

}

// Book fetch Actions
export type BookActions = {
  type: typeof BOOKS_LIST
  payload: {
    books: Books[]
  }
}

// Book fetch Actions
export type BookAddActions = {
  type: typeof BOOKS_ADD
  payload: {
    book: Books
  }
}
// Book Update Actions
export type BookUpdateActions = {
  type: typeof BOOK_UPDATE
  payload: {
    book: Books
    //author: AuthorId
  }
}
// Book Remove Actions
export type BookRemoveActions = {
  type: typeof BOOK_REMOVE
  payload: {
    book: Books
  }
}
// Book State
export type BookState = {
  books: Books[]
}
// Loan State
export type LoanState = {
  loans: Loan[]
}

//Search Type
export type SearchType = {
  keyword: string
  handleSearchChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}
// SignUpFormType
export type SignUpFormType = {
  username: string
  email: string
  password: string
}
//Book List Types
export type BookListType ={
  book: Books[]
}

//********************************** Users *******/
//User Id type
export type UserId = {
  id: string
}
//User type
export type Users = {
  username: string
  email: string
  password: string
  rePassword: string
  token: string
  isAdmin: boolean
  id: string //UserId
  joinedDate: string
  image: string
  
}
// User add actions
export type UserAddActions = {
  type: typeof USER_ADD
  payload: {
    user: Users
  }
}
// Users Actions
export type UserFetchActions = {
  type: typeof USERS_LIST
  payload: {
    users: Users[]
  }
}
// Users Update Actions
export type UserUpdateActions = {
  type: typeof USERS_UPDATE
  payload: {
    users: Users
  }
}
// Users Logged Actions
export type UserLoggedActions = {
  type: typeof USERS_LIST
  payload: {
    users: Users
  }
}

// UserInfo type
export type UserInfo = {
  username: string
  email: string
  token: string
}
// User State
export type UserState = {
  users: Users[]
}

//********************************** Author *******/

//Author type
export type Authors = {
  firstName: string
  lastName: string
  email: string
  dob: string
  id: string
}
// Author action
export type AuthorAddActions = {
  type: typeof AUTHOR_ADD
  payload: {
    author: Authors
  }
}
// Author update action
export type AuthorUpdateActions = {
  type: typeof AUTHOR_UPDATE
  payload: {
    author: Authors
    //id: AuthorId
  }
}

// Authors Actions
export type AuthorFetchActions = {
  type: typeof AUTHORS_LIST
  payload: {
    authors: Authors[]
  }
}

//*************************BookAuthor */
export type AuthorId = {
  id: string
}

// Author State
export type AuthorState = {
  authors: Authors[]
}
/**************** Loan Type */
//Loan Type
export type Loan = {
 user: Users[]//string[] //UserId
 book: Books[]//string[] //BookId
 id: any
}
//Usr type
export type UsR = {
  idU: string
}
//Usr type
export type BoK = {
  idB: string
}
//Loan Add Action

export type LoanAddActions = {
  type: typeof LOAN_ADD
  payload: {
        loans: Loan
  }
}
//Loan Remove Action

export type LoanRemoveActions = {
  type: typeof LOAN_REMOVE
  payload: {
        loan: Loan
  }
}
//Loan Fetch Action

export type LoanFetchActions = {
  type: typeof LOAN_FETCH
  payload: {
        loans: Loan[]
  }
}

//Loan Id type
export type LoanId = {
  id: string
}

/********* Login Type */
//Logged User Type
export type LoggedUser = {
  username: string
  email: string
  token: string
  id: UserId
}
//User Login Action
export type LoggingAction = {
  type: typeof USER_LOGIN
  payload: {
    usrInfo: LoggedUser
  }
}
//Logged User State
export type LoggerState = {
  loggedUser: LoggedUser[]
}

/**************Basket************/
//Basket State
export type BasketState = {
  myBasket: Books[]
}
export type AddToBasketAction = {
  type: typeof ADD_TO_BASKET
  payload: {
    book: Books
    id: string
  }
}
export type DeleteFromBasketAction = {
  type: typeof DELETE_FROM_BASKET
  payload: {
    book: Books
  }
}
export type BasketActions = AddToBasketAction | DeleteFromBasketAction
