import styled from 'styled-components';

/* eslint-disable-next-line */
export interface NotYourChatUiProps {}

const StyledNotYourChatUi = styled.div`
  color: pink;
`;

export function NotYourChatUi(props: NotYourChatUiProps) {
  return (
    <StyledNotYourChatUi>
      <h1>Welcome to NotYourChatUi!</h1>
    </StyledNotYourChatUi>
  );
}

export default NotYourChatUi;
