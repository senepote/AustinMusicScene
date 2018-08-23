class Music extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      navVisible: true,
      eventsVisible: false,
      venuesVisible: false,
      photosVisible: false,
      event: {},
      venue: {},
      photos:{}
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

        <div className="container">


        <button className='eventbutton'
          onClick={()=> this.toggleState('photosVisible')}>
          Photos
        {this.state.photosVisible
          ? <Photos
          toggleState={this.toggleState}
          event={this.state.event}
          /> : ''}
        </button>

        <button className='eventbutton'
          onClick={()=> this.toggleState('eventsVisible')}>
          Events
        {this.state.eventsVisible
          ?
            <Festivals
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
        </div>
        <Footer />
      </div>
    )
  }
}
