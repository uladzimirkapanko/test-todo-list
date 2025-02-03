import styled from "@emotion/native";
import { FlatList } from "react-native";

export const TodoList = styled(FlatList<Todo>)({
  width: "100%",
});
