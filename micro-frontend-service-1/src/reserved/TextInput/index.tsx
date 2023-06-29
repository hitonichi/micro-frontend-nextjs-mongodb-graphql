import * as React from "react";

type Props = {
  name: string;
  label: string;
  onChange: any;
  placeholder: any;
  value: any;
  // error: any;
};

const TextInput = ({
  name,
  label,
  onChange,
  placeholder,
  value,
}: // error,
Props) => {
  let wrapperClass = "form-group";
  // if (error && error.length > 0) {
  //   wrapperClass += " " + "has-error";
  // }
  return (
    <div className={wrapperClass}>
      <label htmlFor={name}>{label}</label>
      <div className="field">
        <input
          type="text"
          name={name}
          className="form-control"
          placeholder={placeholder}
          value={value}
          onChange={onChange}
        />
      </div>
    </div>
  );
};

export default TextInput;
