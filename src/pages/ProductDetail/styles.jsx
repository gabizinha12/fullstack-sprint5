import styled from "styled-components";

export const Container = styled.main`
  display: flex;
  margin: 0 auto;
  max-width: 1100px;
  padding: 16px;
  width: 80%;
`;

export const ContainerImg = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px;
`;

export const ContainerInfo = styled.div`
  /* align-items: center; */
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: space-between;
  padding: 30px 10px;
`;
export const BoxSize = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  width: 90%;
  height: 175px;
  padding: 15px;
  border-radius: 2px;
`;
export const BoxPrice = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  width: 90%;
  height: 175px;
  box-shadow: 0 0 1em #00000060;
  padding: 15px;
  border-radius: 2px;
`;
export const Btn = styled.button`
  width: 100%;
  height: 40px;
  color: #fff;
  background-color: ${(e) => e.bg};
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-weight: 700;
  margin-bottom: ${(e) => e.mb || 0}px;
`;

export const LabelPrice = styled.p`
  color: #d50000;
  font-weight: 700;
  font-size: 25px;
`;

export const LabelDesc = styled.p`
  font-size: 26px;
  font-weight: 700;
`;

export const ProductImg = styled.img`
  height: 450px;
  cursor: pointer;
`;
