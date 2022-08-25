import React from "react";
import { BackgroundImage, Body, DirectoryItemContainer } from "./directory";

const DirectoryItem = ({ category: { title, imageUrl } }) => (
  <DirectoryItemContainer>
    <BackgroundImage imageUrl={imageUrl}/>
    <Body>
      <h2>{title}</h2>
      <p>Shop now</p>
    </Body>
  </DirectoryItemContainer>
);

export default DirectoryItem;
