import styled from 'styled-components';

/* eslint-disable-next-line */
export interface MessageProps {}

const StyledMessage = styled.div`
  color: pink;
`;

export function Message(props: MessageProps) {
  return (
    <StyledMessage>
      <h1>Welcome to Message!</h1>
    </StyledMessage>
  );
}

export default Message;
