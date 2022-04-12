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
    border-radius: 6px 6px 0 0;

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
`;