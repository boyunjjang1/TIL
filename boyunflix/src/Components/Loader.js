import React from "react";
import styled from "styled-components";

const Container = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  font-size: 50px;
  margin-top: 20px;
`;

// emoji는 span으로 감싸져야 하고 image role이 있어야하며 접근하기 쉬어야함
// 시각장애인들에겐 screen reader기능을 제공하는데 그걸 위해 ㅎㅎ
export default () => <Container>
    <span role="img" aria-label="Loading">
        ⏰
    </span>
</Container>