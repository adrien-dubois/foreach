import React, { useState } from 'react'
import Navigation from '../components/Navigation/Navigation'
import { Div } from '../styles/Update.element'
import { useSelector } from 'react-redux';
import { useUpdateUserMutation } from '../services/appApi';

function Update() {

    const user = useSelector((state) => state.user);
    const [updateUser, { isLoading, error }] = useUpdateUserMutation();
    const [passwordShown, setPasswordShown] = useState(false);
    const togglePassword = () => setPasswordShown(!passwordShown);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');

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

    async function handleSignup(e) {
    e.preventDefault()

    const url = await uploadImage(image);
    console.log(url);

    //signup the user
    updateUser({ name, email, password, picture: url }).then(({ data }) => {
        if(data){
        console.log(data);
        }
    })
    }
    

  return (
    <Div>
        <Navigation/>
        Update
        
    </Div>
  )
}

export default Update