import React from 'react';
import './App.css';
import { IconsTest } from './component/IconsTest';
import { ModalTest } from './component/ModalTest';
import { TippyTooltip } from './component/TippyTooltip';
import { ToastNotification } from './component/ToastNotification';

function App() {

  return (
    <div>
      <TippyTooltip />
      <ToastNotification />
      <ModalTest />
      <IconsTest />
    </div>
  );
}

export default App;
