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

    .membre{
        li{
            .row{
            display: grid;
            grid-template-columns: repeat(12, 1fr);
            grid-gap: 20px;

            .col-2{
                grid-column: span 2;
                margin-bottom: 0;
                position: relative;

                .member-pic{
                    width: 30px;
                    height: 30px;
                    border-radius: 50%;
                    object-fit: cover;
                }

                .online, .offline{
                    font-size: 11px;
                    position: absolute;
                    z-index: 99;
                    bottom: 0;
                    left: 5px;
                }

                .online{
                    color: green;
                }
                .offline{
                    color: red;
                }
            }

            .col-9{
                grid-column: span 9;

                .offtxt{
                    margin-left: 5px;
                    font-style: italic;
                    opacity: .6;
                }
            }

            .col-1{
                grid-column: span 1;
            }
        }
        }
    }

    .chatroom, .membre{
        li{
            cursor: pointer;
            display: flex;
            justify-content: space-between;

            .notifs{
                padding: 2px 12px;
                border-radius: 50%;
                background: var(--msg-color);
                color: white;
            }
            
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

            &:hover{
                background: rgba(255, 255, 255, 0.05);
                backdrop-filter: blur(5px);
                -webkit-backdrop-filter: blur(5px);
                border: 1px solid rgba(255, 255, 255, 0.3);
            }
        }
    }
`;