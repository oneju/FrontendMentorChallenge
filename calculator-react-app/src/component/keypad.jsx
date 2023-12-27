import styled from "styled-components";

const Keypad = ({ calc }) => {
  return (
    <div>
      <ButtonContainer>
        <Button value={7} onClick={(e) => calc(e)}>
          7
        </Button>
        <Button value={8} onClick={(e) => calc(e)}>
          8
        </Button>
        <Button value={9} onClick={(e) => calc(e)}>
          9
        </Button>
        <DelButton value="del" onClick={(e) => calc(e)}>
          DEL
        </DelButton>
        <Button value={4} onClick={(e) => calc(e)}>
          4
        </Button>
        <Button value={5} onClick={(e) => calc(e)}>
          5
        </Button>
        <Button value={6} onClick={(e) => calc(e)}>
          6
        </Button>
        <Button value="+" onClick={(e) => calc(e)}>
          +
        </Button>
        <Button value={1} onClick={(e) => calc(e)}>
          1
        </Button>
        <Button value={2} onClick={(e) => calc(e)}>
          2
        </Button>
        <Button value={3} onClick={(e) => calc(e)}>
          3
        </Button>
        <Button value="-" onClick={(e) => calc(e)}>
          -
        </Button>
        <Button value="." onClick={(e) => calc(e)}>
          .
        </Button>
        <Button value={0} onClick={(e) => calc(e)}>
          0
        </Button>
        <Button value="/" onClick={(e) => calc(e)}>
          /
        </Button>
        <Button value="*" onClick={(e) => calc(e)}>
          ×
        </Button>
        <ResetButton value="reset" onClick={(e) => calc(e)}>
          RESET
        </ResetButton>
        <EnterButton value="=" onClick={(e) => calc(e)}>
          =
        </EnterButton>
      </ButtonContainer>
    </div>
  );
};
export default Keypad;
const ButtonContainer = styled.div`
  padding: 1rem;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-column-gap: 10px;
  grid-row-gap: 10px;
  background-color: ${(props) => props.theme.color.componentBgColor};
  border-radius: 0.5rem;

  margin: 0 1rem 1rem 1rem;
`;
const Button = styled.button`
  background-color: hsl(30, 25%, 89%);
  border: none;
  color: ${(props) => props.theme.color.basicText};
  font-size: 32px;
  height: 4rem;
  border-radius: 0.3rem;
  cursor: pointer;
  font-family: "League Spartan", sans-serif;
  box-shadow: inset 0 -5px ${(props) => props.theme.color.mainKeyShadow};
  background-color: ${(props) => props.theme.color.mainKeyColor};

  &:active {
    background-color: #ffffff8e;
    margin-left: 2px;
    margin-top: 2px;
  }
`;

const DelButton = styled(Button)`
  font-size: 24px;
  color: ${(props) => props.theme.color.keyText};
  box-shadow: inset 0 -7px ${(props) => props.theme.color.delKeyShadow};
  background-color: ${(props) => props.theme.color.delKeyColor};
`;

const ResetButton = styled(Button)`
  font-size: 24px;
  color: ${(props) => props.theme.color.keyText};
  grid-column: 1/3;
  box-shadow: inset 0 -7px ${(props) => props.theme.color.delKeyShadow};
  background-color: ${(props) => props.theme.color.delKeyColor};
`;
const EnterButton = styled(Button)`
  font-size: 24px;
  color: ${(props) => props.theme.color.keyText};
  grid-column: 3/5;
  box-shadow: inset 0 -7px ${(props) => props.theme.color.enterKeyShadow};
  background-color: ${(props) => props.theme.color.enterKeyColor};
`;
