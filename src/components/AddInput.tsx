import React, { FC, useState } from "react";
import styled from "@emotion/native";

const Wrapper = styled.View({
  width: "100%",
});

const Input = styled.TextInput({
  borderWidth: 0,
  backgroundColor: "white",
  marginBottom: 8,
  borderRadius: 3,
  padding: 16,
});

export interface AddInputProps {
  onAdd: (label: string) => void;
}

export const AddInput: FC<AddInputProps> = ({ onAdd }) => {
  const [input, setInput] = useState("");

  const formSubmit = (key: string) => {
    if (key === "Enter") {
      onAdd(input);
      setInput("");
    }
  };

  return (
    <Wrapper>
      <Input
        onKeyPress={(e) => formSubmit(e.nativeEvent.key)}
        onChangeText={setInput}
        value={input}
        placeholder="Add a new todo item here"
      />
    </Wrapper>
  );
};
