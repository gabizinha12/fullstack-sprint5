import styled from "styled-components";

export const Container = styled.div`
  padding: 0 100px;
  @media (max-width: 1200px) {
    padding-bottom: 30px;
  }
`;

export const SearchIcon = styled.img`
  width: 24px;
  opacity: 26%;
  top: 83px;
  position: absolute;
  padding-left: 10px;
  color: rgba(0, 0, 0, 0.26);
  line-height: 40px;
`;
export const SearchInput = styled.input`
  height: 40px;
  width: 100%;
  border-radius: 4px;
  border: 1px solid rgba(0, 0, 0, 0.23);
  padding-left: 40px;
`;
