class App extends React.Component {
  render(){
    return (
      <div className='main'>
        <Header />
          <div className='content'></div>
        <Footer />
      </div>
    )
  }
}

ReactDOM.render(
  <App />,
  document.querySelector('.container')
)
