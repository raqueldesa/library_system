import styled from "styled-components";

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;

  height: 100%;
  gap: 10px;
`;

export const StyledInputArea = styled.div`
  display: flex;
  flex-direction: column;

  input {
    font-family: "Inter", sans-serif;
    background-color: #ffff;

    border-style: none;
    border-radius: 10px;

    height: 40px;
    padding: 0 10px;

    font-size: 14px;

    overflow: hidden;
  }
  p {
    color: #dcf7ff;
    font-size: 11px;

    font-family: "Inter", sans-serif;
  }
`;
