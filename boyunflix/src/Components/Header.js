import React from "react";
import {Link, withRouter} from "react-router-dom"
// withRouter : 다른 컴포넌트를 감싸는 Router, 정보도 준다
import styled from "styled-components";

const Header = styled.header`
  color: white;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 50px;
  display: flex;
  align-items: center;
  background-color: rgba(20,20,20, 0.8);
  z-index:10;
  box-shadow: 0px 0px 5px 2px rgba(0,0,0,0.8);
`;
// 스크롤을 해도 해당위치에 있게 하기위해 position:fixed 사용

const List = styled.ul`
  display: flex;
`;

const Item = styled.li`
  width: 80px;
  height: 50px;
  text-align: center;
  border-bottom: 5px solid ${props => props.current ? "#3498db":"transparent"};
  transition: border-bottom .3s ease-in-out;
`;
// styled-components는 SC에 props를 주는것이 가능하다.

const SLink = styled(Link)`
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

// Local에서 css 사용하는 모듈

export default withRouter(({location: {pathname}})=>(
    <Header>
        <List>
            <Item current={pathname === "/"}>
                <SLink to="/">Movies</SLink>
            </Item>
            <Item current={pathname === "/tv"}>
                <SLink to="/tv">TV</SLink>
            </Item>
            <Item current={pathname === "/search"}>
                <SLink to="/search">Search</SLink>
            </Item>
        </List>
    </Header>
))