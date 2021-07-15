import styled from "styled-components";

export const ListItem = styled.li`
  font-size: 0.8125rem;
  font-weight: 600;
  color: #585858;
  margin-right: 10px;
  @media (max-width: 1200px) {
    display: none;
  }
  &:not(:last-child):hover {
    text-decoration: underline;
  }
`;

export const ItemLink = styled.a`
  font-size: 0.8125rem;
  font-weight: 600;
  color: ${({ theme }) => theme.text};
  margin-right: 10px;
`;
