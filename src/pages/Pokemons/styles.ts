import styled from "styled-components";

export const Container = styled.div`
  margin: 0 auto;
  max-width: 1120px;

  img {
    margin: 0.5rem 0;
    width: 190px;
  }

  ul {
    padding: 1rem;
    margin: 0.5rem;

    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    grid-gap: 1rem;

    border: 2px solid #ffcc00;
    border-radius: 0.5rem;
  }

  li {
    background: #0075be;
    border-radius: 0.5rem;
    color: white;
    padding: 1rem;
    text-align: center;
    list-style-type: none;

    :hover {
      cursor: pointer;
      background: #454b66;
    }
  }

  li:first-letter {
    text-transform: uppercase;
  }
`;
