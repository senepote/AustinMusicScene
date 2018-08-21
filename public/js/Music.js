class Music extends React.Component {
  render(){
    return (
      <div className="the-core">
        <Header />

        <nav>
        <ul>
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
        </ul>
        </nav>

        <div className='info'>
          <p>words about music and stuff and things and and and and and and</p>
        </div>

        <div className='eventsvenues'>
          <ul>
            <li>ACL</li>
            <li>SXSW</li>
            <li>Any given day of the week...</li>
          </ul>
        </div>

        <div className='eventsvenues'>
        <ul>
          <li>Emos</li>
          <li>Come and Take It</li>
          <li>Elysium</li>
        </ul>
        </div>

        <Footer />
      </div>
    )
  }
}
