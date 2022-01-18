import React, { ReactElement } from 'react';

import Icon from '../public/assets/icon.svg';

interface Props {}

function App({}: Props): ReactElement {
  return (
    <>
      <h1>Let's Start New Project!</h1>
      <Icon />
    </>
  );
}

export default App;