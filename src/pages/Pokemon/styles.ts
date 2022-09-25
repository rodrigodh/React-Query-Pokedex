import styled from "styled-components";

export const Container = styled.div`
  padding: 1rem;
  margin: 1rem auto;
  max-width: 520px;

  border: 2px solid #dfdfdf;
  border-radius: 0.5rem;

  display: flex;
  flex-direction: column;

  > img {
    align-self: center;
    width: 200px;
  }

  button {
    decoration: none;
    transition: 0.3s;
    border: 2px solid #fb1b1b;
    padding: 0.5rem;
    border-radius: 0.5rem;
    background: transparent;
    width: intrinsic;

    svg {
      color: #fb1b1b;
    }
  }

  button:hover {
    opacity: 0.5;
    cursor: pointer;
  }

  h3 {
    margin-bottom: 1rem;
    margin-top: 1rem;
  }

  p {
    margin: 0;
  }

  h1:first-letter,
  li:first-letter {
    text-transform: uppercase;
  }
`;
