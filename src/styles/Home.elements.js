import styled from 'styled-components'

export const Div = styled.section`
    background-image: var(--welcome-gradient);
    background-color: var(--welcome-bg);
    height: 100vh;
    width: 100%;
    color: var(--white-color);
    font-family: var(--poppins-font);

    .row{
        display: grid;
        grid-template-columns: repeat(12,1fr);
        grid-gap: 20px;

        .col-md-6{
            grid-column: span 6;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;

            .txt-title{
                h1{
                    font-size: 2rem;
                    font-weight: 600;
                    letter-spacing: 1px;
                    font-family: var(--krona-font);
                }
                p{
                    margin-bottom: 1.5rem;
                    font-size: calc(1.2rem+1.2vw);
                    letter-spacing: 1px;

                    span{
                        font-style: italic;
                    }
                }
            }
        }

        .home__bg{
            grid-column: span 6;
            height: 90vh;
            display: flex;
            justify-content: center;
            align-items: center;
            overflow-x: hidden;
        }
    }
`