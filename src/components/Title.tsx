import React from "react";
import styled from "styled-components";

const Title = () => {
  const PAGE_TITLE = "국내 모든 임상시험 검색하고 온라인으로 참여하기";
  return (
    <STitle>
      <h1>{PAGE_TITLE}</h1>
    </STitle>
  );
};

export default Title;

const STitle = styled.div`
  font-size: 1.8rem;
  font-weight: 700;
  margin-bottom: 2rem;
  text-align: center;
  width: 22rem;
  line-height: 2.3rem;
`;
