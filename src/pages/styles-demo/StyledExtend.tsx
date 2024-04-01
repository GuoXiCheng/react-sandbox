import styled from "styled-components";

const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: #BF4F74;
`;

const SubTitle = styled(Title)`
  font-size: 1em;
  color: #BF1F71;
`;

export default function StyledExtend() {
    return (
        <>
            <Title>Styled Title</Title>
            <SubTitle>Styled SubTitle</SubTitle>
        </>
    );
}