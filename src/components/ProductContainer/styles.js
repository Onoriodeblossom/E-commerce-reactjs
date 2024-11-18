import { styled } from "styled-components";
import { Container } from "../container";
import { FlexibleDiv } from "../flexibleDiv/flexibleDiv.component";

export const ProductCardContainerWrapper = styled(Container)`
  background-color: ${({ background }) => (background ? background : "#fff")};
  width: 95%;
  border-radius: 10px;
  margin-top: 20px;
  padding: 20px;
  align-items: center;
  justify-content: flex-start;
  flex-direction: column;

  box-shadow: rgba(99, 99, 99, 0.2) 2px 3px 8px 3px;
`;

export const Title = styled.p`
  color: #000;
  font-size: 28px;
`;
export const ProductCardWrapper = styled.div`
  background-color: ${({ background }) => (background ? background : "gray")};
  border-radius: 10px;
  margin-top: 20px;
  padding: 20px;
  padding-top: 0px;
  width: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
/* gap:5px; */
  row-gap: 5px;

  box-shadow: rgba(99, 99, 99, 0.2) 2px 3px 8px 3px;

  @media (max-width: 1030px) {
    
  }
`;
