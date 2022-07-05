import './MyInput.css'
import useInput from '../../hooks/useInput'

const MyInput = ({ value: inputValue, onBlur }) => {
  console.log('input: ', inputValue)
  const input = useInput(inputValue)

  console.log('input: ', input)

  return (
    <input type="text" {...input.bind} onBlur={onBlur} />
  )
}

export default MyInput
