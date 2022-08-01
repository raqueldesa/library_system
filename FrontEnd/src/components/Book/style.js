import styled from "styled-components";

export const StyledBook = styled.div`
  width: 250px;
  height: 200px;

  border-radius: 7px;

  background-color: rgba(255, 255, 255, 0.8);
  box-shadow: 0 0 6px 0px rgba(0, 0, 0, 0.9);

  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;

  padding: 20px;
  margin-top: 10px;

  .info {
    height: 50%;

    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
  }

  button {
    height: 40px;
    width: 40px;
    margin: 5px;

    font-size: 16px;

    border-style: none;
    border-radius: 10px;

    cursor: pointer;
  }
  .edit {
    &:hover {
      background-color: #076503;
      transition: 0.3s;
      color: white;
    }
  }
  .remove {
    &:hover {
      background-color: #910303;
      transition: 0.3s;
      color: white;
    }
  }
`;
export default StyledBook;
