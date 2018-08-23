class Nav extends React.Component {
  render() {
    return (

        <nav>
        <ul className="navbar">
          <button className="about">
            About
          </button>
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
        </ul>
        </nav>

    )
  }
}
