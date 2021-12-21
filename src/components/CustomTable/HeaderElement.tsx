import React, { FC } from "react";
import styled from "styled-components";

interface ITitleProps {
  isSorter: boolean;
}

interface IHeaderElement {
  isSorter: boolean;
  onClick: React.MouseEventHandler<HTMLDivElement>;
}

const HeaderElementContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`;

const TitleElement = styled.span<ITitleProps>`
  color: #000;
  text-align: center;
  cursor: ${(p) => (p.isSorter ? "pointer" : "default")};
  font-weight: ${(p) => (p.isSorter ? "600" : "500")};
  text-decoration: ${(p) => (p.isSorter ? "underline" : "none")};
`;

const HeaderElement: FC<IHeaderElement> = ({ children, onClick, isSorter }) => {
  return (
    <HeaderElementContainer>
      <TitleElement isSorter={isSorter} onClick={onClick}>
        {children}
      </TitleElement>
    </HeaderElementContainer>
  );
};

export default HeaderElement;
