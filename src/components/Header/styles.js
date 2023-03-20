import styled from "styled-components";

export const ContainerHeader = styled.div`
  width: 100vw;
  height: 70px;
  background: #126ba5;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 2;
  a {
    font-family: "Playball";
    font-weight: 400;
    font-size: 38px;
    line-height: 49px;
    color: #ffffff;
    margin-left: 20px;
    text-decoration: none;
  }
`;

export const UserImage = styled.img`
  margin-right: 20px;
  width: 51px;
  height: 51px;
  left: 306px;
  top: 9px;
  border-radius: 98.5px;
`;
