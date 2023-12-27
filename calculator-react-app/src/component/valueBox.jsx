import styled from "styled-components";

const ValueBox = ({ display }) => {
  return (
    <div>
      <InputContainer>
        <InputValue>{display ? display : 0}</InputValue>
      </InputContainer>
    </div>
  );
};
export default ValueBox;
const InputContainer = styled.div`
  background-color: ${(props) => props.theme.color.displayBgColor};
  height: 4rem;
  text-align: right;
  padding: 0.3rem 1.5rem;

  border-radius: 0.7rem;
  margin: 1rem;
`;
const InputValue = styled.h1`
  color: ${(props) => props.theme.color.displayText};

  width: 100%;
`;
