import { Box, TextField, useTheme } from "@mui/material";
import supabase from "../config/supabaseClient";
import { useState, useEffect } from "react";

const Notes = () => {
const [fetchingError, setFetchingError] = useState(null);
const [message, setMessage] = useState(null);

useEffect(() => {
  const fetchMessage = async () => {
    const { data, error } = await supabase.from("msg").select();

    if (error) {
      setFetchingError(error.message);
      setFetchingError(null);
      console.log(fetchingError);
    }
    if (data) {
      console.log(message);
      console.log(data);
      setMessage(data);
      setFetchingError(null);
    }
  };
  fetchMessage();
}, []);

  return (
    <Box> 
{fetchingError && <p>{fetchingError}</p>}

{message && (
    <Box >
        {message.map(message => (
            <Box key={message.id}>
            <p>{message.message}</p>
            </Box>
        ))}
         </Box>
    )}
    </Box>
    );
};
    // <Box m="20px">
    //   {message.map((message) => (
    //     <Box m="20px" key={message.id} display="span 4" alignItems="flex-start">
    //       <Card sx={{ maxWidth: 300 }}>
    //         <CardContent>
    //           <Typography
    //             variant="h3"
    //             style={{
    //               color: colors.primary[100],
    //             }}
    //           >
    //             {message.text}
    //           </Typography>
    //         </CardContent>
    //          <CardActions>
    //           <Checkbox
    //             checked={todo.completed}
    //             onChange={() => toggleToddo(todo.id)}
    //             style={{
    //               color: colors.primary[100],
    //             }}
    //           />
    //           <Button
    //             style={{
    //               color: colors.redAccent[500],
    //             }}
    //             size="large"
    //             onClick={() => deleteTodo(todo.id)}
    //           >
    //             Delete &times;
    //           </Button>
    //         </CardActions> 
    //       </Card>
    //     </Box>
    //   ))} 
    // </Box>


export default Notes;
