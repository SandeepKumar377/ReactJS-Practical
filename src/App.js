import React from 'react';
import './App.css';
import { CountupTest } from './components/CountupTest';
import { CreditCardTest } from './components/CreditCardTest';
import { DatePickerTest } from './components/DatePickerTest';
import { IconsTest } from './components/IconsTest';
import { IdleTimerTest } from './components/IdleTimerTest';
import { ModalTest } from './components/ModalTest';
import { ReactColorPicker } from './components/ReactColorPicker';
import { TippyTooltip } from './components/TippyTooltip';
import { ToastNotification } from './components/ToastNotification';

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
