import styled from "styled-components";

export const StyledContainerBooks = styled.div`
  height: 80%;
  width: 100%;
  overflow-y: scroll;

  display: flex;
  justify-content: center;
  flex-wrap: wrap;

  gap: 20px;

`;

export const StyledDivVidro = styled.div`
  height: ${({ height }) => height || "200px"};
  width: ${({ width }) => width || "550px"};
  padding: 50px;
  border-radius: 10px;

  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.7);
  background-color: rgba(255, 255, 255, 0.1);
  color: rgb(255, 254, 254);
  z-index: 10;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  gap: 30px;
`;
