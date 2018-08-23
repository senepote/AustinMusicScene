class Music extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      infoVisible: true,
      eventsVisible: false,
      venuesVisible: false,
      photosVisible: false,
      aboutVisible: false,
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

  render() {
    return (
    <div className="the-core">
        <Header />


      <div className="container">

        {this.state.infoVisible
          ? <Info
          toggleState={this.toggleState}
          /> : ''}

        {this.state.photosVisible
          ? <Photos
          toggleState={this.toggleState}
          photos={this.state.photos}
          /> : ''}
        <div className="infobutton">
          <button
            className='photobutton'
            onClick={() => this.toggleState('photosVisible' ,'infoVisible')}
            >Photos</button>
        </div>
      </div>

      <div className="container">


        {this.state.infoVisible
          ? <Info2
          toggleState={this.toggleState}
          /> : ''}

        {this.state.eventsVisible
          ? <Festivals
            toggleState={this.toggleState}
            event={this.state.event}
            /> : ''}
        <div className="infobutton">
          <button className='eventbutton'
            onClick={()=> this.toggleState('eventsVisible','infoVisible')}
            >Events</button>
        </div>
      </div>

      <div className="container">


        {this.state.infoVisible
          ? <Info3
          toggleState={this.toggleState}
          /> : ''}


        {this.state.venuesVisible
          ? <Venues
          toggleState={this.toggleState}
          venue={this.state.venue}
          /> : ''}
          <div className="infobutton">
          <button className='venuebutton'
            onClick={()=> this.toggleState('venuesVisible','infoVisible')}
            >Venues</button>
          </div>
      </div>

        <Footer />
    </div>
    )
  }
}
