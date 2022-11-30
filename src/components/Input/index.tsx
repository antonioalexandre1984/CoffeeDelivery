import { InputStyleContainer, InputWrapper } from './styles';
import { forwardRef, InputHTMLAttributes } from 'react';
import { RegularText } from '../Typography';

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  error?: string;
  //rightText?: string;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ error, className, ...props }, ref) => {
    return (
      <InputWrapper className={className}>
        <InputStyleContainer ref={ref} {...props} />
        {error && <RegularText>{error}</RegularText>}
      </InputWrapper>
    );
  }
)


