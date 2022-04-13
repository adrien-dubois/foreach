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
            cursor: pointer;
        }
    }
`;