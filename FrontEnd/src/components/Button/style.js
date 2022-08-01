import styled from "styled-components";

export const StyledButton = styled.button`
  background-color: #31090c;
  color: #fff;

  height: 40px;
  width: ${({ width }) => width || "150px"};

  border-style: none;
  border-radius: 10px;

  cursor: pointer;
  font-family: "Inter", sans-serif;
  &:hover {
    background-color: #1b0406;
    transition: 0.3s;
  }
`;
