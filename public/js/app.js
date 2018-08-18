class App extends React.Component {
  render(){
    return (
      <div className='main'>
        <Music />
      </div>
    )
  }
}

ReactDOM.render(
  <App />,
  document.querySelector("main")
)
