import React from 'react';
import './App.css';
import { LineChart } from './components/chart/LineChart';
import { CountupTest } from './components/CountupTest';
import { CreditCardTest } from './components/CreditCardTest';
import { DatePickerTest } from './components/DatePickerTest';
import { IconsTest } from './components/IconsTest';
import { IdleTimerTest } from './components/IdleTimerTest';
import { ModalTest } from './components/ModalTest';
import { ReactColorPicker } from './components/ReactColorPicker';
import { SpinnersTest } from './components/SpinnersTest';
import { TippyTooltip } from './components/TippyTooltip';
import { ToastNotification } from './components/ToastNotification';
import { VideoPlayerTest } from './components/VideoPlayerTest';

function App() {

  return (
    <div className="App">
      <LineChart />
      <SpinnersTest />
      <VideoPlayerTest />
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
