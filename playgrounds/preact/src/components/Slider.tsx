import type { FieldElementProps } from '@formisch/preact';
import { ReadonlySignal } from '@preact/signals';
import clsx from 'clsx';
import { forwardRef } from 'preact/compat';
import { InputErrors } from './InputErrors';
import { InputLabel } from './InputLabel';

interface SliderProps extends FieldElementProps {
  class?: string;
  label?: string;
  min?: number;
  max?: number;
  step?: number;
  required?: boolean;
  input: ReadonlySignal<string | number | undefined>;
  errors: ReadonlySignal<[string, ...string[]] | null>;
}

/**
 * Range slider that allows users to select predefined numbers. Various
 * decorations can be displayed in or around the field to communicate the
 * entry requirements.
 */
export const Slider = forwardRef<HTMLInputElement, SliderProps>(
  ({ label, input, errors, ...props }: SliderProps) => {
    const { name, required } = props;
    return (
      <div class={clsx('px-8 lg:px-10', props.class)}>
        <InputLabel name={name} label={label} required={required} />
        <input
          {...props}
          class="w-full"
          type="range"
          id={name}
          value={input}
          aria-invalid={!!errors?.value}
          aria-errormessage={`${name}-error`}
        />
        <InputErrors name={name} errors={errors} />
      </div>
    );
  }
);
