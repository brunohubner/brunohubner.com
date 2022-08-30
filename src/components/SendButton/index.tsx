import './styles.scss';
import { IoSendSharp } from 'react-icons/io5';
import { ButtonHTMLAttributes } from 'react';

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  onClick(): void;
}

export function SendButton({ onClick, disabled = false, ...rest }: Props) {
  return (
    <button
      type="button"
      onClick={() => onClick()}
      className="SendButton"
      style={{
        color: disabled ? '#ddd' : '#fff',
        cursor: disabled ? 'not-allowed' : 'pointer'
      }}
      disabled={disabled}
      {...rest}
    >
      <IoSendSharp size={30} />
    </button>
  );
}
