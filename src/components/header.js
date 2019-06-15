import React from 'react'
import Link from 'gatsby-link'



const Header = ({ siteTitle }) => (
  <div className="Header">
    <div className="HeaderGroup">
       <Link to="/"><img src={require('../images/logo.svg')} width="30"></img></Link>
        <link to="/home">Home</link>
        <link to="/pricing">Pricing</link>
        <link to="/tourism">Tourism</link>
    </div>
  </div>
)

export default Header
