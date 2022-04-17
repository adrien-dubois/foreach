import React, { useState, useContext } from 'react'
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
import { BiShow, BiHide } from 'react-icons/bi'
import { Link, useNavigate } from 'react-router-dom'
import { useLoginUserMutation } from '../services/appApi'
import { AppContext } from '../context/appContext'

function Login() {

    // Input form states
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loginUser, { isLoading, error }] = useLoginUserMutation();
    const navigate = useNavigate();
    const { socket } = useContext(AppContext)
    const [passwordShown, setPasswordShown] = useState(false);

    function handleLogin(e){
      e.preventDefault();

      // LOGIN LOGIC
      loginUser({ email, password }).then(({ data }) => {
        if(data) {
          // socket work
          socket.emit('new-user');
          // navigate to the chat
          navigate('/chat');
        }
      })
    }

    const togglePassword = () => setPasswordShown(!passwordShown);
    

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

            {error && 
              <p className="danger">{error.data}</p>
            }

              {/* EMAIL */}
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

              {/* PASSWORD */}
              <div className="input-field blue-glassmorphism">
                <div className="icon">
                  <FaLock/>
                </div>
                <input 
                  type={passwordShown ? "text" : "password"} 
                  placeholder='Mot de passe'
                  onChange={ (e) => setPassword(e.target.value) }
                  value={password}
                  required
                />
                <div 
                  className="show" 
                  onClick={togglePassword}
                >
                  {passwordShown ? <BiHide/> : <BiShow/>}
                </div>
              </div>
             
             {/* SUBMIT */}
             <button type="submit"  className='btn solid'>
               {isLoading ? (
                 <div className="spinner">
                  <svg>
                    <circle cx="70" cy="70" r="70"></circle>
                  </svg>
                 </div>
                 
               ) : "Connexion"}
             </button>

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