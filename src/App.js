import React from 'react';
import './App.css';
import { CountupTest } from './component/CountupTest';
import { CreditCardTest } from './component/CreditCardTest';
import { DatePickerTest } from './component/DatePickerTest';
import { IconsTest } from './component/IconsTest';
import { IdleTimerTest } from './component/IdleTimerTest';
import { ModalTest } from './component/ModalTest';
import { ReactColorPicker } from './component/ReactColorPicker';
import { TippyTooltip } from './component/TippyTooltip';
import { ToastNotification } from './component/ToastNotification';

function App() {

  return (
    <div>
      <DatePickerTest />
      <CreditCardTest />
      <ReactColorPicker />
      <IdleTimerTest />
      <CountupTest />
      <TippyTooltip />
      <ToastNotification />
      <ModalTest />
      <IconsTest />
    </div>
  );
}

export default App;
