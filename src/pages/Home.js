import React from 'react'
import Navigation from '../components/Navigation/Navigation'
import { Button } from '../GlobalStyles'
import { Div } from '../styles/Home.elements'
import { FaComments } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { DevLogo } from '../components/SvgComponent'

function Home() {
  return (
    <Div>
      <Navigation/>
      <div className="row">

        <div className="home__bg"> <DevLogo/> </div>

        <div className="col-md-6">
          <div className='txt-title' >
            <h1>Share the world with your friends</h1>
            <p>Foreach vous connecte avec votre monde <span> - Made by devs for devs</span> </p>
            <Link to="/chat">
              <Button>
                Let's chat <FaComments className='message-icon' /> 
              </Button>
            </Link>
          </div>
        </div>

      </div>
    </Div>
  )
}

export default Home