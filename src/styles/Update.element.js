import styled from 'styled-components'
import { LogoWR2 } from '../components/SvgComponent';

export const Div = styled.div`
    background-image: var(--welcome-gradient);
    background-color: var(--welcome-bg);
    height: 100vh;
    width: 100%;
    color: var(--white-color);
    font-family: var(--poppins-font);
    overflow: hidden;
    position: relative;

    .profil-card{
        display: flex;
        justify-content: center;
        height: 60vh;
        align-items: center;
        text-decoration: none;
        border: none;
        box-sizing: border-box;
        position: relative;

        .card-member{
            background: rgb(39, 51, 89, 0.4);
            box-shadow: 0 4px 30px rgba(0, 0, 0, 0.6);
            backdrop-filter: blur(5px);
            -webkit-backdrop-filter: blur(5px);
            border: 1px solid rgba(0, 0, 0, 0.3);
            border-radius: 1rem;
            display: flex;
            margin: 1.5rem;
            overflow: hidden;
            width: 42rem;
            height: 26rem;

            .background-left{
                background-color: #0f0e13;
                background-image: 
                radial-gradient(at 0% 100%, hsla(253,16%,7%,1) 0, transparent 53%), 
                radial-gradient(at 50% 150%, hsla(339,49%,30%,1) 0, transparent 50%);
            }

            .left-col{
                color: var(--white-color);
                padding: 2rem;
                max-width: 10rem;
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: space-between;

                h6{
                    text-align: center;
                    opacity: .6;
                    letter-spacing: .1rem;
                    text-transform: uppercase;	
                }

                h2{
                    letter-spacing: .1rem;
                    margin-top: 30px;
                    font-size: 1.3rem;
                    text-align: center;
                    text-transform: uppercase;
                    font-family: var(--poppins-font);
                }
            }

            .right-col{
                width: 100%;
                padding: 2rem;
                display: flex;
                flex-direction: column;
                align-items: flex-start;
                position: relative;
                
                h4{
                    overflow: hidden;
                    max-width: 16ch;
                    text-overflow: ellipsis;
                    white-space: nowrap;
                    font-size: 1.1rem;
                    font-weight: normal;
                    margin-bottom: .6rem;
                }
               
                h6{
                    font-size: 1.3rem;
                    text-transform: uppercase;
                    opacity: .8;
                    font-weight: 600;
                }
                

                /* SWITCH PART */
                .switch-form{
                    position: relative;
                    z-index: 2;
                    .switch{
                        appearance: none;
                        background: rgba(255, 255, 255, 0.05);
                        backdrop-filter: blur(5px);
                        -webkit-backdrop-filter: blur(5px);
                        width: 4rem;
                        height: 1.5rem;
                        border-radius: 1.5rem;
                        vertical-align: middle;
                        transition: all 0.3s ease-in-out;
                    }

                    .switch + label{
                        margin-left: -0.8rem;
                    }

                    input:checked.switch{
                        background: #a8a8a853;
                        backdrop-filter: blur(5px);
                        -webkit-backdrop-filter: blur(5px);
                    }

                    .switch + label::before{
                        display: inline-block;
                        content: '';
                        background-color: white;
                        height: 1.2rem;
                        width: 1.2rem;
                        border-radius: 50%;
                        vertical-align: middle;
                        position: relative;
                        left: -3rem;
                        transition: all 0.3s ease-in-out;
                    }

                    input:checked.switch + label::before{
                        position: relative;
                        left: -0.5rem;
                        transition: all 0.3s ease-in-out;
                    }
                }

                /* UPDATE FORM PART */

                .forms-container{
                    position: relative;
                    width: 100%;
                    height: 100%;
                    top: -24%;
                    left: -7%;
                    z-index: 1;

                    .update-user-profile{
                        position: absolute;
                        width: 100%;
                        top: 25%;
                        display: grid;
                        grid-template-columns: 1fr;
                        justify-content: space-between;
                        text-align: center;
                        align-items: flex-start;
    
                        &__form{
                            display: flex;
                            align-items: center;
                            justify-content: center;
                            flex-direction: column;
                            padding: 0 1rem;

                            .input-field{
                                max-width: 380px;
                                width: 100%;
                                height: 55px;
                                margin: 10px 0;
                                border-radius: 55px;
                                display: grid;
                                grid-template-columns: 15% 70% 15%;
                                padding: 0 .2rem;

                                .icon{
                                    text-align: center;
                                    line-height: 55px;
                                    svg{
                                        color: var(--grey-color);
                                        font-size: 1.1rem;
                                    }
                                }

                                .show{
                                    text-align: center;
                                    margin-top: 1rem;
                                    align-items: center;
                                    transition: all .4s ease-in;
                                    svg{
                                        color: var(--grey-color);
                                        font-size: 1.4rem;
                                    }
                                }

                                .input-update{
                                    background: none;
                                    outline: none;
                                    border: none;
                                    line-height: 1;
                                    font-weight: 600;
                                    font-size: 1.1rem;
                                    color: var(--white-color);
                                }

                                .input-update::placeholder{
                                    font-weight: 500;
                                    color: var(--grey-color);
                                }
                            }

                            .btn{
                                width: 130px;
                                height: 39px;
                                border: none;
                                outline: none;
                                border-radius: 49px;
                                cursor: pointer;
                                font-size: .75rem;
                                color: var(--white-color);
                                text-transform: uppercase;
                                font-weight: 600;
                                margin: 10px 0;
                                background-image: linear-gradient(to right, #f43b47 0%, #453a94 100%);
                                background-size: 200% auto;
                                box-shadow: 0 0 10px #eee;
                                transition: all .3s ease-out ;

                                &:hover{
                                    background-position: right center;
                                    letter-spacing: 1px;
                                }
                            }

                            &__picture{
                                position: relative;
                                top: -1rem;
                                left: 28%;
        
                                &__image{
                                    width: 80px;
                                    height: 80px;
                                    border-radius: 50%;
                                    border: 2px solid var(--grey-color);
                                    margin-top: -50px;
                                    background: rgb(39, 51, 89, 0.4);
                                    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.2);
                                    backdrop-filter: blur(5px);
                                    -webkit-backdrop-filter: blur(5px);
                                    object-fit: contain;
                                }
                                &__label{
                                    &__icon{
                                        position: absolute;
                                        bottom: 0;
                                        left: 50px;
                                        color: var(--white-color);
                                        background: transparent;
                                        cursor: pointer;
                                        z-index: 99;
                                        transition: all .4s ease-in-out;
        
                                        &:hover{
                                            color: #F43B47;
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }

            .update-pro{
                visibility: visible;
                opacity: 1;
                width: 100%;
            }

            .hide{
                visibility: hidden;
                opacity: 0;
            }
        }
    }
`;

export const Logo = styled(LogoWR2)`
    height: 130px;
`;