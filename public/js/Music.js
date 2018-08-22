class Music extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      navVisible: true,
      eventsVisible: false,
      venuesVisible: false
    }
    this.toggleState = this.toggleState.bind(this)
  }
    toggleState(st1, st2){
    this.setState({
      [st1]: !this.state[st1],
      [st2]: !this.state[st2]
    })
  }

  render(){
    return (
      <div className="the-core">
        <Header />


        <div className='info'>
          <p>words about music and stuff and things and and and and and and</p>
        </div>

        <button className='eventbutton'
          onClick={()=> this.toggleState('eventsVisible')}>
          Events
        {this.state.eventsVisible
          ? <Festivals
          toggleState={this.toggleState}
          /> : ''}
        </button>

        <button className='venuebutton'
          onClick={()=> this.toggleState('venuesVisible')}>
          Venues
        {this.state.venuesVisible
          ? <Venues
          toggleState={this.toggleState}
          /> : ''}
        </button>

        <Footer />
      </div>
    )
  }
}
