
const Dummy = (props) => {
  return (
    <div>
          <h1>Hello 👋 from {props.name}</h1>
          {props.children}
    </div>
  )
}

export default Dummy
