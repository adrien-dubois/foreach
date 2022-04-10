import styled from 'styled-components'

export const Div = styled.section`
    background-image: var(--welcome-gradient);
    background-color: var(--welcome-bg);
    min-height: 100vh;
    width: 100%;
    color: var(--white-color);
    font-family: var(--poppins-font);
    position: relative;
    overflow: hidden;

    .container{
        margin-top: 1rem;
        margin-left: auto;
        margin-right: auto;
        padding-left: 1rem;
        padding-right: 1rem;

        @media (min-width: 992px){
            width: 970px;
        }

        @media (min-width: 1200px) {
            width: 1170px;
        }

        @media (min-width: 1400px) {
            width: 1320px;
        }

        .row{
            display: grid;
            grid-template-columns: repeat(12, 1fr);
            grid-gap: 20px;

            .col-4{
                grid-column: span 4;
            }

            .col-8{
                grid-column: span 8;
            }
        }
    }
`;