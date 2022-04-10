import React, { useState } from 'react'
import Navigation from '../components/Navigation/Navigation'
import { Div } from '../styles/Login.elements'
import { RegisterSvg } from '../components/SvgComponent'
import { 
  FaLock, 
  FaFacebook, 
  FaTwitter, 
  FaLinkedinIn,
  FaEnvelope, 
  FaGoogle 
} from 'react-icons/fa'
import { Link } from 'react-router-dom'

function Login() {

    // Input form states
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    function handleLogin(e){
      e.preventDefault();
      //login logic
    }

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
           <form 
            action="" 
            className="sign-in-form"
            onSubmit={handleLogin}
          >
             <h2 className="title">Se connecter</h2>
             
              <div className="input-field blue-glassmorphism">
                <div className="icon">
                  <FaEnvelope/>
                </div>
                <input 
                    type="text" 
                    placeholder='E-Mail'
                    onChange={ (e) => setEmail(e.target.value) }
                    value={email}
                    required
                  />
              </div>

              <div className="input-field blue-glassmorphism">
                <div className="icon">
                  <FaLock/>
                </div>
                <input 
                  type="password" 
                  placeholder='Mot de passe'
                  onChange={ (e) => setPassword(e.target.value) }
                  value={password}
                  required
                />
              </div>
             
             <input type="submit" value="Connexion" className='btn solid' /> 

             <p className="register-text">
               Pas encore inscrit? <Link to='/signup'>S'inscrire</Link>
             </p>

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