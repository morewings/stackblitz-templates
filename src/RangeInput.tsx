import type { FC, ChangeEvent } from 'react';
import { useId, useState, useCallback } from 'react';
import classes from './RangeInput.module.css';

type ScaleMark = {
  /** Range value to attach mark to */
  value: number;
  /** Label to display at the provided mark */
  label: string;
};

type Props = {
  /** Provide an optional label to the range input */
  label?: string;
  /** Set a default value. Can be value for controlled mode */
  defaultValue?: number;
  /** Set a minimum available value in the range */
  min?: number;
  /** Set a maximum available value in the range */
  max?: number;
  /** Set a step increment/decrement amount */
  step?: number;
  /**
   * Configure scale below range track
   */
  scale?: ScaleMark[];
  /** Callback to capture changes */
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
  /** Disable the input */
  disabled?: boolean;
};

export const RangeInput: FC<Props> = ({
  label,
  max = 100,
  min = 0,
  step,
  defaultValue = 0,
  scale,
  onChange,
  disabled,
}) => {
  // Id is required to connect the input with the label
  const id = useId();
  // Derivative id for scale element
  const scaleId = `${id}-scale`;
  const [value, setValue] = useState(defaultValue);
  const handleChange = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      setValue(event.target.valueAsNumber);
      onChange?.(event);
    },
    [onChange],
  );
  return (
    <div className={classes.wrapper}>
      {label && (
        <label htmlFor={id} className={classes.label}>
          {label}
        </label>
      )}
      <div className={classes.inputWrapper}>
        <input
          className={classes.input}
          type="range"
          id={id}
          value={value}
          min={min}
          max={max}
          step={step}
          onChange={handleChange}
          list={scale && scaleId}
          disabled={disabled}
        />
        {scale && (
          <datalist id={scaleId} className={classes.scale}>
            {scale.map(({ label, value }) => (
              <option key={value} value={value} label={label} />
            ))}
          </datalist>
        )}
      </div>

      <output name="result" htmlFor={id} className={classes.output}>
        {value}&deg;
      </output>
    </div>
  );
};
