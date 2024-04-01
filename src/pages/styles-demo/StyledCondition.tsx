import styled from "styled-components";

const Title = styled.h1<{ $primary?: boolean }>`
    font-size: 1.5em;
    text-align: center;
    color: ${props => props.$primary ? '#BF4F74' : '#333'};
`;


export default function StyledCondition({ primary }: { primary?: boolean }) {
    return (
        <>
            <Title $primary={primary}>Hello, React</Title>
        </>
    );
}