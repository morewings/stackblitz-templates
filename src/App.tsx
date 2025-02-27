import { usePrimaryPointerQuery } from './usePrimaryPointerQuery.ts';
import {useAnyPointerQuery} from './useAnyPointerQuery.ts';
import {useAnyStylusQuery} from './useAnyStylusQuery.ts';
import classes from './App.module.css';
import { Pointers } from './types.ts';

const pointersMapping = {
  [Pointers.none]: '🔉',
  [Pointers.coarse]: '🫵',
  [Pointers.fine]: '🖱️',
};

const App = () => {
  const primaryPointer = usePrimaryPointerQuery();
  const hasCoarse = useAnyPointerQuery(Pointers.coarse);
  const hasFine = useAnyPointerQuery(Pointers.fine);
  const hasVoice = useAnyPointerQuery(Pointers.none);
  const hasStylus = useAnyStylusQuery();
  return (
    <div className={classes.app}>
      {primaryPointer && (
        <div>The primary pointer is: {pointersMapping[primaryPointer]}</div>
      )}
      <div>
        All available pointers:
        {hasCoarse && pointersMapping[Pointers.coarse]}
        {hasFine && pointersMapping[Pointers.fine]}
        {hasVoice && pointersMapping[Pointers.none]}
      </div>
      <div>Precisely detected: {hasStylus && '✍🏻'}</div>

    </div>
  );
};

export default App;
