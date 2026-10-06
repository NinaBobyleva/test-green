import styles from "./mask.module.css";
import { InputMask } from "@react-input/mask";

type InputMaskProp = {
  placeholder?: string;
  value?: string;
  name?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur?: (
    e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => void;
  error?: string | boolean;
  style?: React.CSSProperties | undefined;
  ref?: React.RefObject<HTMLInputElement | null>;
  readOnly?: boolean;
  showMask: boolean;
  replacement: Record<string, RegExp>;
  labelTop?: number;
};

export const Mask = ({
  value,
  name,
  onBlur,
  onChange,
  showMask,
  error,
  replacement,
  style,
  labelTop,
}: InputMaskProp) => {
  return (
    <div className={styles.inputMaskBox}>
      <label
        style={{
          top: typeof labelTop === "number" ? `${labelTop}px` : labelTop,
        }}
        className={styles.inputMaskLabel}
      >
        +7
      </label>
      <InputMask
        value={value}
        name={name}
        style={style}
        replacement={replacement}
        onBlur={onBlur}
        onChange={onChange}
        showMask={!!showMask}
        className={error ? styles.inputMaskError : styles.inputMask}
        mask="(___) ___-__-__"
      />
    </div>
  );
};
