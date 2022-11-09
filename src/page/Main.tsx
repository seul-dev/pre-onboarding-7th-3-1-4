import React from "react";
import styled from "styled-components";
import SearchBar from "@/components/SearchBar";
import DropDown from "@/components/DropDown";

const Main = () => {
  return (
    <Layout>
      <Title>
        <h1>국내 모든 임상시험 검색하고 온라인으로 참여하기</h1>
      </Title>
      <SearchBar />
      <DropDown />
    </Layout>
  );
};

export default Main;

const Layout = styled.div`
  height: 100%;
  width: 100%;
  min-height: 100vh;
  min-width: 100vw;
  padding-top: 10rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${({ theme }) => theme.color.skyblue};
`;

const Title = styled.div`
  font-size: 1.8rem;
  font-weight: 700;
  margin-bottom: 2rem;
  text-align: center;
  width: 22rem;
  line-height: 2.3rem;
`;
