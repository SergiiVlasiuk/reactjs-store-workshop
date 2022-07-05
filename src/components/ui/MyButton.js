import './MyButton.css'

const MyButton = ({ children, ...props }) => {
  const cssClasses = props?.className ? props?.className + ' button' : 'button'
  return (
    <button {...props} className={cssClasses}>
      {children}
    </button>
  )
}

export default MyButton
