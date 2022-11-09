import React, { ReactNode } from "react";
import { BiSearch } from "react-icons/bi";
import styled from "styled-components";

const DropDown = () => {
  return (
    <Container>
      <p>추천 검색어</p>
      <ListItem>검색 결과</ListItem>
    </Container>
  );
};

export default DropDown;

const Container = styled.ul`
  border-radius: 15px;
  background-color: ${({ theme }) => theme.color.white};
  width: 30rem;
  margin-top: 0.5rem;
  padding-top: 1rem;
  padding-bottom: 1rem;
  & > p {
    font-size: 0.8rem;
    padding-left: 1rem;
    color: ${({ theme }) => theme.color.gray};
  }
`;

interface ListItemProps {
  children: ReactNode;
}

const ListItem = ({ children }: ListItemProps) => {
  return (
    <SListItem>
      <BiSearch />
      {children}
    </SListItem>
  );
};

const SListItem = styled.li`
  font-size: 1rem;
  display: flex;
  align-items: center;
  padding: 0.8rem;
  & > svg {
    font-size: 1.2rem;
    margin-right: 10px;
    color: ${({ theme }) => theme.color.gray};
  }
`;
