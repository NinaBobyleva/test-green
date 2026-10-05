import { useState } from "react";

export const useInputChange = ({
  initialValue
}: {initialValue: string}) => {
  const [value, setValue] = useState(initialValue);
  const [isDirty, setIsDirty] = useState(false);
  const [error, setError] = useState("");

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value ?? "");
    setIsDirty(false);
    setError("");
  };

  const onBlur = () =>
    {
      if (!value.trim()) {
        setIsDirty(true);
        console.log(1);
        setError("Необходимо заполнить все поля");
      } else {
        setIsDirty(false);
        setError("");
      }
    };

  return {
    value,
    onChange,
    setValue,
    onBlur,
    setError,
    isDirty,
    error
  };
};
