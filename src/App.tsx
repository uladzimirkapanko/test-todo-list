import React from "react";
import { v4 as uuid } from "uuid";
import { useCallback, useState, useEffect } from "react";
import styled from "@emotion/native";
import { AddInput } from "./components/AddInput";
import { TodoItem } from "./components/TodoItem";
import { TodoList } from "./components/TodoList";
import { Header } from "./components/Header";

const ContentWrapper = styled.View({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  width: 300,
});

/**
 * This is the initial todo state.
 * Instead of loading this data on every reload,
 * we should save the todo state to local storage,
 * and restore on page load. This will give us
 * persistent storage.
 */
const initialData: Todo[] = [
  {
    id: uuid(),
    label: "Buy groceries",
    checked: false,
  },
  {
    id: uuid(),
    label: "Reboot computer",
    checked: false,
  },
  {
    id: uuid(),
    label: "Ace Sandbox interview",
    checked: true,
  },
];

function App() {
  const [todos, setTodos] = useState<Todo[]>(initialData);

  const addTodo = useCallback((label: string) => {
    setTodos((prev) => [
      {
        id: uuid(),
        label,
        checked: false,
      },
      ...prev,
    ]);
  }, []);

  const handleCheckboxPress = useCallback((checked: boolean) => {
    // handle the check/uncheck logic
  }, []);

  return (
    <ContentWrapper>
      <Header>Todo List</Header>
      <AddInput onAdd={addTodo} />
      <TodoList
        data={todos}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TodoItem {...item} onPress={handleCheckboxPress} />
        )}
      />
    </ContentWrapper>
  );
}

export default App;
