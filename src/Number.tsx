import React from 'react';
import styled from "styled-components";

const Container = styled.span<{isBlue:boolean}>`
    color: ${props => props.isBlue ? props.theme.blueColor : "Black"};
    font-weight: bold;
`;

interface IProps {
    count:number;
}

const Number:React.FunctionComponent<IProps> = ({count}) => {
    return(
        <Container isBlue={count > 10}>{count}</Container>
    );
}

export default Number;