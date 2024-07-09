import React, { useState, useEffect } from "react";
import { TextField } from "@mui/material";
import { Controller } from "react-hook-form";
import { styled } from "@mui/material/styles";
import CharacterCounter from "./CharacterCounter";

// Create a styled TextField component
const CustomStyledTextField = styled(TextField)({
  width: "90%",
  "& .MuiInput-underline:after": {
    borderBottomColor: "#08A5AA", // Active color
  },
  "& .MuiInput-underline.Mui-error:after": {
    borderBottomColor: "#f44336", // Error color
  },
});

const CustomInput = React.forwardRef(
  (
    {
      name,
      control,
      label,
      defaultValue = "",
      rules = {},
      type = "text",
      autoFocus,
      multiline,
      characterLimit = 2000,
    },
    ref
  ) => {
    const [charCount, setCharCount] = useState(defaultValue.length);

    useEffect(() => {
      setCharCount(defaultValue.length);
    }, [defaultValue]);

    const isTextType = type === "text" || multiline;

    return (
      <Controller
        name={name}
        control={control}
        defaultValue={defaultValue}
        rules={{
          ...rules,
          validate: (value) =>
            !isTextType ||
            value.length <= characterLimit ||
            `Character limit exceeded (${characterLimit})`,
        }}
        render={({ field, fieldState: { error } }) => (
          <div>
            <CustomStyledTextField
              {...field}
              inputRef={ref}
              label={label}
              variant="standard"
              autoFocus={autoFocus}
              error={!!error}
              type={type}
              multiline={multiline}
              helperText={error ? error.message : ""}
              onChange={(e) => {
                if (isTextType) {
                  setCharCount(e.target.value.length);
                }
                field.onChange(e);
              }}
              value={field.value}
            />
            {isTextType && (
              <CharacterCounter count={charCount} limit={characterLimit} />
            )}
          </div>
        )}
      />
    );
  }
);

export default CustomInput;
