import React from "react";
import { BiSearch } from "react-icons/bi";
import styled from "styled-components";
import useGetSearshList from "../lib/hooks/useGetSearshList";
import { useRecoilValue } from "recoil";
import { selectedIndex } from "@/lib/states/selectedIndex";
import { formatListItem } from "../lib/util/formatListItem";

// 검색어 없을시 "검색어 없음"
// 입력한 텍스트와 일치하는 부분은 볼드처리 <strong>

const DropDown = () => {
  const { inputValue, searchResultsList } = useGetSearshList();
  const selected = useRecoilValue(selectedIndex);
  const DESCRIPTION = searchResultsList.length ? "추천 검색어" : "검색어 없음";

  return inputValue ? (
    <Container>
      <p>{DESCRIPTION}</p>
      {searchResultsList.map(({ sickCd, sickNm }, idx) => (
        <ListItem
          key={sickCd}
          className={selected === idx ? "selected" : ""}
          sickNm={sickNm}
          inputValue={inputValue}
        />
      ))}
    </Container>
  ) : null;
};

export default DropDown;

const Container = styled.ul`
  border-radius: 15px;
  background-color: ${({ theme }) => theme.color.white};
  width: 40rem;
  margin-top: 0.5rem;
  padding-top: 1rem;
  padding-bottom: 1rem;
  & > p {
    font-size: 0.8rem;
    padding-left: 1rem;
    color: ${({ theme }) => theme.color.gray};
    margin-bottom: 5px;
  }
`;

interface ListItemProps {
  inputValue: string;
  sickNm: string;
  className: string;
}

const ListItem = ({ sickNm, inputValue, className }: ListItemProps) => {
  const formatSickNm = formatListItem(sickNm, inputValue);
  return (
    <SListItem className={className}>
      <BiSearch />
      {formatSickNm}
    </SListItem>
  );
};

const SListItem = styled.li`
  font-size: 1rem;
  display: flex;
  align-items: center;
  padding: 0.8rem;
  overflow-wrap: break-word;
  &.selected {
    background-color: lightgray;
  }
  & > svg {
    font-size: 1.2rem;
    margin-right: 10px;
    color: ${({ theme }) => theme.color.gray};
  }
  & > strong {
    font-weight: 700;
  }
`;
