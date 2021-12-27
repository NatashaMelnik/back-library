import { useAppDispatch, useAppSelector } from "../../../../app/hooks";
import { useState } from "react";
import Test from "./test.model";
import { TextField } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import Container from "@material-ui/core/Container";
import { refreshTestsList } from "../TestsList/testsListSlice";
import { postTest } from "./createTestAPI";
import { createTest } from "./createTestSlice";

const CreateTest = () => {
  const dispatch = useAppDispatch();

  const newTest: Test = { title: "", description: "", owner: 1, access_code: "code1" };
  const [currentTest, setState] = useState(newTest);
  const owner_id = useAppSelector((state) => state.user.id);

  const onSubmitHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (currentTest.title.length > 0) {
      setState({ ...currentTest, owner: owner_id });
      console.log(currentTest);
      postTest(currentTest).then((res) => {
        if (res) {
          dispatch(createTest(res));
        }
      });
      setState(newTest);
    }
  };
  const onChangeTestTitle = (event: React.ChangeEvent<HTMLInputElement>) => {
    setState({ ...currentTest, title: event.target.value });
  };
  const onChangeTestDescription = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setState({ ...currentTest, description: event.target.value });
  };

  return (
    <Container>
      <form onSubmit={onSubmitHandler}>
        <TextField
          id="outlined-full-width"
          style={{ margin: 8 }}
          placeholder="Title"
          helperText="Test Title"
          fullWidth
          margin="normal"
          onChange={onChangeTestTitle}
          value={currentTest.title}
          InputLabelProps={{
            shrink: true,
          }}
          inputProps={{
            form: {
              autocomplete: 'off',
            }
          }}
          variant="outlined"
        />
        <TextField
          id="standard-full-width"
          style={{ margin: 8 }}
          placeholder="Description"
          helperText="Test Description"
          fullWidth
          margin="normal"
          autoComplete="false"
          onChange={onChangeTestDescription}
          value={currentTest.description}
          inputProps={{
            form: {
              autocomplete: 'off',
            }
          }}
          InputLabelProps={{
            shrink: true,
          }}
        />
        <Button type="submit" variant="outlined" size="small">
          Create test
        </Button>
      </form>
    </Container>
  );
};

export default CreateTest;
