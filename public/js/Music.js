class Music extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      navVisible: true,
      eventsVisible: false,
      venuesVisible: false,
      event: {},
      venue: {}
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

        <Info />

        <button className='eventbutton'
          onClick={()=> this.toggleState('eventsVisible')}>
          Events
        {this.state.eventsVisible
          ? <Festivals
          toggleState={this.toggleState}
          event={this.state.event}
          /> : ''}
        </button>

        <button className='venuebutton'
          onClick={()=> this.toggleState('venuesVisible')}>
          Venues
        {this.state.venuesVisible
          ? <Venues
          toggleState={this.toggleState}
          venue={this.state.venue}
          /> : ''}
        </button>

        <Footer />
      </div>
    )
  }
}
