import styled from "styled-components";
import {
  BaseButton,
  GoogleSignInBtn,
  InvertedButton,
} from "../button/button-styled";

export const CartDropdownDiv = styled.div`
  position: absolute;
  width: 300px;
  height: 340px;
  display: flex;
  flex-direction: column;
  padding: 20px;
  border: 1px solid black;
  background-color: white;
  top: 90px;
  right: 40px;
  z-index: 5;

  ${BaseButton},
  ${GoogleSignInBtn},
  ${InvertedButton} {
    margin-top: auto;
  }
`;

export const EmptyMessage = styled.span`
  font-size: 18px;
  margin: 50px auto;
`;

export const CartItemsStyleCont = styled.div`
  height: 240px;
  display: flex;
  flex-direction: column;
  overflow: auto;
  overflow-x: hidden;
`;
