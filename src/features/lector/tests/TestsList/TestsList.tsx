import FileCopyOutlinedIcon from "@material-ui/icons/FileCopyOutlined";
import EqualizerOutlinedIcon from "@material-ui/icons/EqualizerOutlined";
import SettingsOutlinedIcon from "@material-ui/icons/SettingsOutlined";
import EditIcon from "@material-ui/icons/Edit";
import IconButton from "@material-ui/core/IconButton";
import { fetchTestsLists, refreshTestsList } from "./testsListSlice";
import { useAppDispatch, useAppSelector } from "../../../../app/hooks";
import { useDispatch } from "react-redux";
import CreateTest from '../createTest/createTest';
import { useHistory } from "react-router-dom";

interface Question {
  question: string;
  max_score: number;
}
interface Test {
  title: string;
  description: string;
  owner: string;
  questions: Array<Question>;
}
interface Tests {
  testsList: Array<Test>;
}

const DisplayTests = () => {
  const history = useHistory();

  const dispatch = useDispatch();
  const testsList: any = useAppSelector((state) => []);

  const loadedTestsList = dispatch(fetchTestsLists());

  function goToTestDetails (item: any) {
    history.push(`/l/tests/${item.id}`); // set Id after server conected
  }


  return (
    <div>
      <div>
        <h1>Tests:</h1>
      </div>
      <div>
        {testsList.map((item: any) => {
          return (
            <div>
              <h2>{item.title}</h2>
              <h3>{item.description}</h3>
              <p>{item.owner}</p>
              <IconButton aria-label="edit">
                <EditIcon />
              </IconButton>
              <IconButton aria-label="copy link">
                <FileCopyOutlinedIcon />
              </IconButton>
              <IconButton aria-label="show statistic">
                <EqualizerOutlinedIcon />
              </IconButton>
              <IconButton aria-label="settings">
                <SettingsOutlinedIcon onClick={() => goToTestDetails(item)}/>
              </IconButton>
            </div>
          );
        })}
      </div>
      {/* after tests button */}
      <CreateTest/>
    </div>
  );
};

export default DisplayTests;
