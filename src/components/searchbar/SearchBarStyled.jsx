import styled from "styled-components";

// Styled components
export const SubmitIcon = styled.div`
  position: relative;
  width: 25px;
  height: 25px;

  * {
    position: absolute;
    top: 0;
    left: 0;
  }

  button {
    cursor: pointer;
    z-index: 1;
    width: 100%;
    height: 100%;
    background: none;
    border: none;
  }
`;

export const Icon = styled.img`
  object-fit: contain;
  height: 25px;
  width: 25px;
`;

export const SearchForm = styled.form`
  position: fixed;
  border-top: 1px solid #ddd;
  z-index: 1100;
  bottom: 0;
  left: 0;
  display: flex;
  flex-direction: row;
  column-gap: 15px;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 50px;
  background-color: #fff;
  padding-block: 20px;
  @media only screen and (min-width: 801px) {
    padding: 1.5rem;
  }
`;

export const Input = styled.input`
  display: block;
  background-color: transparent;

  &[type="text"] {
    caret: var(--col-dark-green);
    color: #000;
    border: none;
    border-bottom: 1px solid #000;
    font-family: "Poppins", sans-serif;
    margin: 0px 15px;

    &:focus,
    &:visited,
    &:active {
      outline: none;
    }
  }
`;

export const InputContainer = styled.div`
  width: max-content;
  height: 100%;
  padding: 0px 25px;
  border-radius: 25px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #ddd;
  cursor: pointer;
`;

export const ContainerEmpty = styled.div`
  height: 130px;
`;
