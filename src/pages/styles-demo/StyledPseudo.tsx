import styled from "styled-components";

const Button = styled.button`
  &:hover {
    background-color: #FF6B98;
  }

  &::before {
    content: '🚀';
    margin-right: 5px;
  }
`;

export default function StyledPsendo() {
    return (
        <>
            <Button>click</Button>
        </>
    );
}