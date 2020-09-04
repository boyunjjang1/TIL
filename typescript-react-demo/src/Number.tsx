import React from 'react';
import styled from "styled-components"
import { countReset } from 'console';

const Container = styled.span`
        
`;

interface Iprops{
    count: number
}

const Number: React.FunctionComponent<Iprops> = ({count}) =>(
    <Container>
       {count}
    </Container>
)

export default Number