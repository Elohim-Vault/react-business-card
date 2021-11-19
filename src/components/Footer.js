import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithubSquare, faLinkedin, faTwitterSquare  } from '@fortawesome/free-brands-svg-icons'


export default function Footer() {
    return (
        <div className="footer">
            <a className="icon" href="https://github.com/Gabriel-Jeronimo">
                <FontAwesomeIcon  icon={faGithubSquare} size="2x" />
            </a>
            <a className="icon" href="https://www.linkedin.com/in/gabriel-jeronimodev/">
                <FontAwesomeIcon className="icon" icon={faLinkedin} size="2x" />
            </a>
            <a className="icon" href="https://twitter.com/HereJers">
                <FontAwesomeIcon className="icon" icon={faTwitterSquare} size="2x" />
            </a>
        </div>
    )
}