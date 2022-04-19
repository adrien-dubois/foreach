import React, { useState } from 'react'
import Navigation from '../components/Navigation/Navigation'
import { Div, Logo } from '../styles/Update.element'
import { useSelector } from 'react-redux';
import { useUpdateUserMutation } from '../services/appApi';
import { 
    FaEnvelope, 
    FaLock, 
    FaPlusCircle, 
    FaUser 
} from 'react-icons/fa';
import { BiHide, BiShow } from 'react-icons/bi';
import { useNavigate } from 'react-router-dom';

function Update() {

    const user = useSelector((state) => state.user);
    const [updateUser, { isLoading, error }] = useUpdateUserMutation();
    const [passwordShown, setPasswordShown] = useState(false);
    const togglePassword = () => setPasswordShown(!passwordShown);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const [checked, setChecked] = useState(false);
    const navigate = useNavigate();

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

    async function handleUpdate(e) {
    e.preventDefault()
    const url = await uploadImage(image);
    console.log(url);
    const id = user._id;

    //update the user
    updateUser({ _id: id, name, email, password, picture: url }).then(({ data }) => {
        if(data){
            console.log(data);
            navigate("/");
        }
    })
    }
    

  return (
    <Div>
        <Navigation/>
        <div className="profil-card">
            <div className="card-member">

                <div className="left-col background-left">
                    <h6>Carte de membre</h6>
                    <h2>White Rabbit Club</h2>
                    <Logo/>
                </div>

                <div className="right-col">
                    <h6>{user.name}</h6>
                    <h4>Membre n°{user._id}</h4>
                        
                    {/* SWITCH */}
                    <form className='switch-form' action="">
                        <div>
                            <input 
                                type="checkbox" 
                                name="profile" 
                                id="profil" 
                                className='switch'
                                checked={checked}
                                onChange={(e) => setChecked(e.target.checked)}
                            />
                            <label htmlFor="profil">Éditer votre profil</label>
                        </div>
                    </form>

                    {/* UPDATE FORM */}

                    <div className="forms-container">
                        <div className="update-user-profile">

                            <form 
                                action=""
                                className='update-user-profile__form'
                                onSubmit={handleUpdate}
                                autoComplete="off"
                            >

                                <div className="update-user-profile__form__picture">
                                    <img 
                                        src={imagePreview || user.picture} 
                                        alt='member card' 
                                        width="120px" 
                                        className='update-user-profile__form__picture__image'
                                    />

                                    <label 
                                        htmlFor="img-upload" 
                                        className='update-user-profile__form__picture__label'
                                    >

                                        <FaPlusCircle 
                                        className={
                                            checked ? "update-user-profile__form__picture__label__icon" :
                                            "update-user-profile__form__picture__label__icon hide"
                                        }
                                        />

                                    </label>

                                    <input
                                        type="file"
                                        id='img-upload'
                                        hidden
                                        accept='image/png,
                                                image/jpg,
                                                image/jpeg'
                                        onChange={validateImg}
                                    />
                                </div>
                            

                                <div className={checked ? "update-pro" : "update-pro hide"} >
                                    {/* EMAIL */}
                                    <div className="input-field blue-glassmorphism">
                                        <div className="icon">
                                        <FaEnvelope/>
                                        </div>
                                        <input
                                            autoComplete='off'
                                            className='input-update' 
                                            type="text" 
                                            placeholder={user.email}
                                            onChange={ (e) => setEmail(e.target.value) }
                                            value={email || user.email}
                                        />
                                    </div>
                                    
                                    {/* NAME */}
                                    <div className="input-field blue-glassmorphism">
                                        <div className="icon">
                                        <FaUser/>
                                        </div>
                                        <input 
                                        autoComplete='off'
                                        className='input-update'
                                        type="text" 
                                        placeholder={user.name}
                                        onChange={ (e) => setName(e.target.value) }
                                        value={name || user.name}
                                        />
                                    </div>

                                    {/* PASWSORD */}
                                    <div className="input-field blue-glassmorphism">
                                        <div className="icon">
                                        <FaLock/>
                                        </div>
                                        <input 
                                        autoComplete='off'
                                        className='input-update'
                                        type={passwordShown ? "text" : "password"}
                                        placeholder='Mot de passe'
                                        onChange={ (e) => setPassword(e.target.value) }
                                        value={password || user.password}
                                        />
                                        <div className="show" onClick={togglePassword}>
                                        {passwordShown ? <BiHide/> : <BiShow/> }
                                        </div>
                                    </div>
                                    
                                    {/* SUBMIT */}
                                    <button type="submit" className='btn solid'>
                                    {uploadingImg || isLoading ? 'Enregistrement ...' : 'Enregistrer' }  
                                    </button> 
                                </div>

                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
    </Div>
  )
}

export default Update