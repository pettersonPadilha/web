import styled from "styled-components";

export const Container = styled.div`
    .button {
        max-width: 600px;
        background: var(--red-900);
        border: 0;
        padding: 0.4rem;
        color: white;
        border-radius: 0.5rem;
        transition: filter 0.8s ease;
        &[disabled] {
            cursor: not-allowed;
            svg {
                animation: animate 2s infinite;
            }
        }
        &:hover {
           filter: blur(0.8px);
       }
    }
    .buttonText {
        color: white;
    }

    @keyframes animate{
        from {transform: rotate(0deg)}
        to{ transform:rotate(360deg)}
    }
`
