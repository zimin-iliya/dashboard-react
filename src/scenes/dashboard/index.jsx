//MUI
import { Box, TextField, useTheme } from "@mui/material";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Header from "../../componets/Header";
import Checkbox from "@mui/material/Checkbox";
import Button from "@mui/material/Button";
//REACT
import { useState } from "react";
import { tokens } from "../../theme";
import Notes from "../../componets/notes";
import { v4 as uuidv4 } from "uuid";

const Dashboard = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [todos, setTodos] = useState([]);
  const [text, setText] = useState("");

  const addTodo = () => {
    console.log(text);
    if (text.trim().length) {
      setTodos([...todos, { id: uuidv4(), text, completed: false }]);
      console.log(todos);
      setText("");
      console.log(todos);
    }
  };

  const deleteTodo = (todoId) => {
    console.log(todoId);
    setTodos(todos.filter((todo) => todo.id !== todoId));
  };

  const toggleToddo = (todoId) => {
    setTodos(
      todos.map((todo) => {
        if (todo.id === todoId) {
          return {
            ...todo,
            completed: !todo.completed,
          };
        }
        return todo;
      })
    );
  };

  return (
    <Box m="20px">
      <Header title="Dashboard" subtitle="Welcome to your dashboard" />
      <TextField
        fullWidth
        variant="filled"
        type="text"
        label="todo"
        value={text}
        name="firstName"
        onChange={(e) => setText(e.target.value)}
        sx={{ gridColumn: "span 2" }}
      />

      <Button
        sx={{
          marginTop: "20px",
          color: "white",
          backgroundColor: "#3f51b5",
        }}
        fullWidth
        variant="outlined"
        size="large"
        onClick={addTodo}
      >
        Add
      </Button>

      {todos.map((todo) => (
        <Box m="20px" key={todo.id} display="span 4" alignItems="flex-start">
          <Card sx={{ maxWidth: 300 }}>
            <CardContent>
              <Typography
                variant="h3"
                style={{
                  color: colors.primary[100],
                }}
              >
                {todo.text}
              </Typography>
            </CardContent>
            <CardActions>
              <Checkbox
                checked={todo.completed}
                onChange={() => toggleToddo(todo.id)}
                style={{
                  color: colors.primary[100],
                }}
              />
              <Button
                style={{
                  color: colors.redAccent[500],
                }}
                size="large"
                onClick={() => deleteTodo(todo.id)}
              >
                Delete &times;
              </Button>
            </CardActions>
          </Card>
        </Box>
      ))}
      <Notes />
    </Box>
  );
};

export default Dashboard;
