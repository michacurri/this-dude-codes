import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Footer = () => {
  return(
    <footer>
      <ul class="social">
        <li><a href="https://github.com/michacurri" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={['fab', 'github']} /></a></li>
        <li><a href="https://www.linkedin.com/in/mkcurrie/" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={['fab', 'linkedin']} /></a></li>
        <li><a href="https://twitter.com/thisdudecodes" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={['fab', 'twitter']} /></a></li>
      </ul>
      <h5>&copy; thisdude.codes 2021</h5>
    </footer>
  )
}

export default Footer
