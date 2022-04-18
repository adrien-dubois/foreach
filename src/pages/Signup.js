import React, { useState } from 'react'
import Navigation from '../components/Navigation/Navigation'
import { Div } from '../styles/Signup.elements'
import { LoginSvg } from '../components/SvgComponent'
import { 
  FaLock, 
  FaFacebook, 
  FaTwitter, 
  FaLinkedinIn,
  FaEnvelope,
  FaUser,
  FaPlusCircle,
  FaGoogle 
} from 'react-icons/fa'
import { Link, useNavigate } from 'react-router-dom'
import LogoChat from '../assets/user.png'
import { useSignupUserMutation } from '../services/appApi'
import { BiShow, BiHide } from 'react-icons/bi'



function Signup() {

  // Input form states
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [signupUser, { isLoading, error }] = useSignupUserMutation();
  const navigate = useNavigate()
  const [passwordShown, setPasswordShown] = useState(false);
  const togglePassword = () => setPasswordShown(!passwordShown);

  // Image upload state
  const [image, setImage] = useState(null)
  const [uploadingImg, setUploadingImg] = useState(false)
  const [imagePreview, setImagePreview] = useState(null)

  // Verify if size is not too much, else create object
  function validateImg(e) {
    const file = e.target.files[0];
    if(file.size >= 1048576) {
      return alert('La taille maximale est de 1Mo')
    } else {
      setImage(file);
      setImagePreview(URL.createObjectURL(file));
    }
  }

  // Upload image on Cloudinary service with a try & catch
  // Give the api adress, your template ID (upload_preset), choose post method and data body 
  async function uploadImage() {
    const data = new FormData()
    data.append('file', image)
    data.append('upload_preset', 'cgfg9dao')
    try{
      setUploadingImg(true)
      let res = await fetch('https://api.cloudinary.com/v1_1/white-umbrella-dev/image/upload', {
        method: 'post',
        body: data
      })
      const urlData = await res.json()
      setUploadingImg(false)
      return urlData.url
    } catch(error) {
      setUploadingImg(false)
      console.log(error);
    }
  }

  // Assure if an image has been selected
  // And prevent default the form
  async function handleSignup(e) {
    e.preventDefault()
    if(!image) return alert('Merci de choisir une photo de profil');
    const url = await uploadImage(image);
    console.log(url);

    //signup the user
    signupUser({ name, email, password, picture: url }).then(({ data }) => {
      if(data){
        console.log(data);
        navigate("/chat");
      }
    })
  }

  return (
    <Div>
      <Navigation/>

      {/* FORMS */}
      <div className="forms-container">
        <div className="signin-signup">

            {/* REGISTER */}
           <form 
            action="" 
            className="sign-up-form" 
            onSubmit={handleSignup}
           >
             <h2 className="title">
               Inscription
             </h2>

            {/* AVATAR */}
             <div className="signup-profile-pic">
               <img src={ imagePreview || LogoChat} className="signup-profile-pic__img" alt='Avatar'/>
               <label htmlFor='image-upload' className='image-upload-label'>
                <FaPlusCircle className='image-upload-label__icon'/>
               </label>
               <input 
                type="file" 
                id="image-upload"
                hidden
                accept='image/png,
                        image/jpg,
                        image/jpeg'
                onChange={validateImg}
               />
             </div>

             {error && 
             <p className="danger">{error.data}</p> }
             
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
                  />
              </div>
             
             {/* NAME */}
              <div className="input-field blue-glassmorphism">
                <div className="icon">
                  <FaUser/>
                </div>
                  <input 
                  type="text" 
                  placeholder='Nom / Prénom'
                  onChange={ (e) => setName(e.target.value) }
                  value={name}
                  />
              </div>

              {/* PASWSORD */}
              <div className="input-field blue-glassmorphism">
                <div className="icon">
                  <FaLock/>
                </div>
                <input 
                  type={passwordShown ? "text" : "password"}
                  placeholder='Mot de passe'
                  onChange={ (e) => setPassword(e.target.value) }
                  value={password}
                />
                <div className="show" onClick={togglePassword}>
                  {passwordShown ? <BiHide/> : <BiShow/> }
                </div>
              </div>
             
             {/* SUBMIT */}
             <button type="submit" className='btn solid'>
              {uploadingImg || isLoading ? 'Inscription en cours ...' : 'Inscription' }  
             </button> 

             <p className="register-text">
               Déjà inscrit? <Link to='/login'>Se connecter</Link>
             </p>

            {/* SOCIAL MEDIAS */}
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
           
           <div className="image">
             <LoginSvg  />
           </div>

        </div>
      </div>



    </Div>
  )
}

export default Signup