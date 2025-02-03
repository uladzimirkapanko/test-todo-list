import React, { FC } from "react";
import styled from "@emotion/native";
import { CheckBox } from "react-native-web";

export const Wrapper = styled.View({
  display: "flex",
  alignItems: "center",
  flexDirection: "row",
  gap: 10,
  width: "100%",
  borderRadius: 4,
  marginBottom: 8,
  padding: 16,
  backgroundColor: "white",
});

const Label = styled.Text<{ checked: boolean }>(({ checked }) => ({
  textDecorationLine: checked ? "line-through" : "none",
  fontWeight: "400",
  fontSize: 20,
  margin: 0,
  display: "flex",
  flexDirection: "row",
  flexWrap: "nowrap",
  justifyContent: "flex-start",
  alignItems: "center",
}));

export interface TodoItemProps {
  id: string;
  label: string;
  checked?: boolean;
  onPress?: (checked: boolean) => void;
}

export const TodoItem: FC<TodoItemProps> = ({
  id,
  label,
  checked = false,
  onPress,
}) => {
  return (
    <Wrapper>
      <CheckBox id={id} value={checked} onValueChange={onPress} />
      <Label checked={checked}>{label}</Label>
    </Wrapper>
  );
};
