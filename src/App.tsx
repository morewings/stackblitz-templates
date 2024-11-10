import { ChangeEvent, useCallback } from 'react';
import { RangeInput } from './RangeInput.tsx';
import classes from './App.module.css';

const scale = [
  {
    value: -50,
    label: '🧊',
  },
  {
    value: -25,
    label: '❄️',
  },

  {
    value: 0,
    label: '💧',
  },
  {
    value: 25,
    label: '🌞',
  },
  {
    value: 50,
    label: '🫠',
  },
];

const App = () => {
  const handleChange = useCallback((event: ChangeEvent<HTMLInputElement>) => {
      console.log('Temperature recorded:', event.target.valueAsNumber)
  }, []);
  return (
    <div className={classes.app}>
      <RangeInput label="Temperature:" min={-50} max={50} scale={scale} onChange={handleChange} />
      <RangeInput label="Temperature (no scale):" min={-50} max={50} onChange={handleChange} />
      <RangeInput label="Temperature (disabled):" min={-50} max={50} scale={scale} onChange={handleChange} disabled />
    </div>
  );
};

export default App;
