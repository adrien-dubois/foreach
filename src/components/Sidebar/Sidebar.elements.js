import styled from 'styled-components'

export const Div = styled.section`

    h2{
        font-weight: 400;
    }

    .chat{
        margin-top: 1rem;
    }

    ul>li{
        padding: 6px 8px;
        border: 1px solid var(--opaque-bg);
        
        &:nth-child(1){
            border-radius: 8px 8px 0 0;
        }
        &:last-child{
            border-radius: 0 0 8px 8px;
        }
    }

    .chatroom, .membre{
        li{
            cursor: pointer;
            display: flex;
            justify-content: space-between;
            &.actif{
                background: rgb(39, 51, 89, 0.4);
                box-shadow: 0 4px 30px rgba(0, 0, 0, 0.2);
                backdrop-filter: blur(5px);
                -webkit-backdrop-filter: blur(5px);
                border: 1px solid rgba(0, 0, 0, 0.3);
                padding: 6px 8px;
                border: 1px solid var(--opaque-bg);
            }
            &.disabling {
                pointer-events:none; 
                color: #555;         
            }
        }
    }
`;