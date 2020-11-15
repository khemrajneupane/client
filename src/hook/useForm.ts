import { useState } from 'react'

const useForm = (initialState: any) => {
  const [value, setValue] = useState(initialState)
  const handleInputChange = (event: any) => {
    setValue({ ...value, [event.target.name]: event.target.value })
  }
  return {
    value,
    setValue,
    handleInputChange,
  }
}
export default useForm
