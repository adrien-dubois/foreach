import styled from 'styled-components'

export const Div = styled.section`

    .msg-container{
        border: 1px solid var(--grey-color);
        border-radius: 0 0 6px 6px;
        position: relative;
        height: 28px;
        background: rgb(39, 51, 89, 0.4);
        box-shadow: 0 4px 30px rgba(0, 0, 0, 0.2);
        backdrop-filter: blur(5px);
        -webkit-backdrop-filter: blur(5px);

        .form-control{
            width: 96%;
            height: 26px;
            border: none;
            max-width: 100%;
            background: 0 0;
            padding-left: 10px;
            font-size: 1rem;
            outline: none;
            color: var(--white-color);
        }
        .send-btn{
            position: absolute;
            top: 2px;
            right: 9px;
            background: transparent;
            svg{
                font-size: 20px;
                cursor: pointer;
                color: var(--grey-color);
                transition: color .3s ease-in;

                &:hover{
                    color: var(--white-color);
                }
            }
        }
    }

`;

export const MsgOutput = styled.div`
    height: 80vh;
    border: 1px solid var(--grey-color);
    overflow-y: scroll;
    overflow-x: hidden;
    border-radius: 6px 6px 0 0;
    background: #272F4D;
    display: grid;

    &::-webkit-scrollbar-track {
        padding: 2px 0;
        background-color: #404040;
    }

    &::-webkit-scrollbar {
        width: 10px;
    }

    &::-webkit-scrollbar-thumb {
        border-radius: 10px;
        box-shadow: inset 0 0 6px rgba(0,0,0,.3);
        background-color: #737272;
        border: 1px solid #000;
    }

    .alert{
        padding: 1rem .8rem;
        width: 100%;
        text-align: center;
        font-style: italic;
        font-weight: 500;
        background: rgba(244, 59, 71, 0.4);
        box-shadow: 0 4px 30px rgba(0, 0, 0, 0.2);
        backdrop-filter: blur(5px);
        -webkit-backdrop-filter: blur(5px);
        border: 1px solid rgba(0, 0, 0, 0.3);
    }

    .msg-wrapper{

        &__date{
            padding: 1rem .8rem;
            width: 100%;
            text-align: center;
            font-weight: 500;
            background: rgb(39, 51, 89, 0.4);
            box-shadow: 0 4px 30px rgba(0, 0, 0, 0.2);
            backdrop-filter: blur(5px);
            -webkit-backdrop-filter: blur(5px);
            border: 1px solid rgba(0, 0, 0, 0.3);
        }
        &__msg{
            position: relative;
            font-size: 1rem;
            background: var(--msg-color);
            max-width: 80%;
            width: auto;
            margin: 10px 0;
            margin-left: 25%;
            margin-right: 5px;
            padding: 6px 15px;
            box-shadow: 3px 3px 6px rgba(0, 0, 0, .4);
            border-radius: 20px;
            background-attachment: fixed;
            float: right;
            clear: both;
    
            &::before{
                content: '';
                position: absolute;
                z-index: 0;
                bottom: 0;
                right: -8px;
                height: 20px;
                width: 20px;
                background: var(--msg-color);
                background-attachment: fixed;
                border-bottom-left-radius: 15px;
            }
            &::after{
                content: '';
                position: absolute;
                z-index: 1;
                bottom: 0;
                right: -10px;
                height: 20px;
                width: 10px;
                background: #272F4D;
                background-attachment: fixed;
                border-bottom-left-radius: 10px;
            }
    
    
        }
    }
    
        
`;