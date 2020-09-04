import React from 'react';
import styled from "styled-components"

const Container = styled.span<{isBlue:boolean}>`
    color:${props => (props.isBlue ? "blue" : "black")}
`;

interface Iprops{
    count: number
}

const Number: React.FunctionComponent<Iprops> = ({count}) =>(
    <Container isBlue={count > 10}>
       {count}
    </Container>
)

export default Number