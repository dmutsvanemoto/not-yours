import { render } from '@testing-library/react';

import NotYourChatUi from './not-your-chat-ui';

describe('NotYourChatUi', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<NotYourChatUi />);
    expect(baseElement).toBeTruthy();
  });
});
