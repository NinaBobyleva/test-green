import styles from "./input.module.css";
import classNames from "classnames";

type InputProp = {
  type: string;
  placeholder?: string;
  value?: string;
  name?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur?: (
    e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => void;
  error?: boolean;
  style?: React.CSSProperties | undefined;
  ref?: React.RefObject<HTMLInputElement | null>;
  readOnly?: boolean;
};

export const Input = ({
  type,
  placeholder,
  name,
  onChange,
  onBlur,
  error,
  value,
  style,
  ref,
  readOnly,
}: InputProp) => {
  return (
    <input
      className={classNames(styles.input, { [styles.inputError]: error })}
      style={style}
      onChange={onChange}
      onBlur={onBlur}
      value={value}
      name={name}
      type={type}
      placeholder={placeholder}
      ref={ref}
      readOnly={readOnly}
    />
  );
};
