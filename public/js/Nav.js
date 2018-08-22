class Nav extends React.Component {
  render() {
    return (

        <nav>
        <ul className="navbar">
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">More Info</a>
          </li>
          <li>
            <a href="#">ACL</a>
          </li>
          <li>
            <a href="#">SXSW</a>
          </li>
          <li>
            <a className="bandsintown" href="https://www.bandsintown.com/en/c/austin-tx">
              Who's coming to town</a>
          </li>
        </ul>
        </nav>

    )
  }
}
