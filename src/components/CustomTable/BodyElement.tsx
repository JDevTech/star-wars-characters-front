import React, { FC } from "react";
import styled from "styled-components";

const BodyElementContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`;

const DataElement = styled.span`
  color: #000;
  text-align: center;
`;

const BodyElement: FC = ({ children }) => {
  return (
    <BodyElementContainer>
      <DataElement>{children}</DataElement>
    </BodyElementContainer>
  );
};

export default BodyElement;
