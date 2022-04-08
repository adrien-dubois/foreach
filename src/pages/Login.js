import React from 'react'
import Navigation from '../components/Navigation/Navigation'
import { Div } from '../styles/Login.elements'
import { LoginSvg, RegisterSvg } from '../components/SvgComponent'
import { 
  FaLock, 
  FaFacebook, 
  FaTwitter, 
  FaLinkedinIn,
  FaEnvelope, 
  FaGoogle 
} from 'react-icons/fa'

function Login() {
  return (
    
    <Div>
      <Navigation/>

      {/* FORMS */}
      <div className="forms-container">
        <div className="signin-signup">

           <div className="image">
             <RegisterSvg />
           </div>

            {/* CONNECTION */}
           <form action="" className="sign-in-form">
             <h2 className="title">Se connecter</h2>
             
              <div className="input-field blue-glassmorphism">
                <div className="icon">
                  <FaEnvelope/>
                </div>
                  <input type="text" placeholder='E-Mail'/>
              </div>

              <div className="input-field blue-glassmorphism">
                <div className="icon">
                  <FaLock/>
                </div>
                <input type="password" placeholder='Mot de passe' />
              </div>
             
             <input type="submit" value="Connexion" className='btn solid' /> 

             <p className="social-text">
               Ou connectez-vous via vos réseaux
             </p>
             <div className="social-media">

               <a href="# " className="social-media__icon">
                <FaFacebook/>
               </a>
               
               <a href="# " className="social-media__icon">
                 <FaTwitter/>
                 </a
               
               ><a href="# " className="social-media__icon">
                 <FaGoogle/>
               </a>
               
               <a href="# " className="social-media__icon">
                 <FaLinkedinIn/>
               </a>

             </div>
           </form>
           

        </div>
      </div>



    </Div>
    
  )
}

export default Login