class Nav extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      aboutVisible: false
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

        <nav>
        <ul className="navbar">

          <li className="nav">
            <a href="#">More Info</a>
          </li>
          <li className="nav">
            <a href="https://www.aclfestival.com/information/">ACL</a>
          </li>
          <li className="nav">
            <a href="https://www.sxsw.com/">SXSW</a>
          </li>
          <li className="nav">
            <a className="bandsintown" href="https://www.bandsintown.com/en/c/austin-tx">
              Who's coming to town</a>
          </li>
          <li className="nav2">
          <button className="about"
          onClick={() => this.toggleState('aboutVisible')}
          >
            About
          </button>

          {this.state.aboutVisible
            ? <About
            toggleState={this.toggleState}
            /> : ''}
          </li>
        </ul>
        </nav>

    )
  }
}
