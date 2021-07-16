import styled from "styled-components";

export const ListItem = styled.li``;

export const ItemLink = styled.a`
  font-size: 0.8125rem;
  font-weight: 600;
  color: #000;
  margin-right: 10px;
  display: flex;
  text-transform: uppercase;
  padding-bottom: 5px;
  vertical-align: baseline;
  &:hover {
    border-bottom: 2px solid ${({ theme }) => theme.text};
  }
`;

export const LinkSpan = styled.span``;
