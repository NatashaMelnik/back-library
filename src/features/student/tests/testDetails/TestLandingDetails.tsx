import { useParams } from 'react-router';
import { Box, Container,Button } from '@material-ui/core';
import { useHistory } from 'react-router';
import { History } from 'history';


export default function TestDetails() {
  // console.log(History)
  const history = useHistory()
console.log(history)
  interface Params {
    id: string
  }

  interface Tests {
    id: Number,
    title: string,
    description: string,
    owner: string
  }

  const params = useParams<Params>()

  const tests: Tests[] = [
    {
      id: 1,
      title: 'REDUX',
      description: 'redux,redux-tool-kit',
      owner: 'Alexander Kotov'
    },
    {
      id: 2,
      title: 'JavaScript',
      description: 'Promise, Arrays, some other desc',
      owner: 'Alexander Kotov'
    },
    {
      id: 3,
      title: 'REACT',
      description: 'Components, react-router',
      owner: 'Alexander Kotov'
    },
  ]

  return (
    <Container>
      {
        tests.map((item) => {
          if (item.id === Number(params.id)) {
            return (<Container>
                <Box fontSize="h3.fontSize">{item.title}</Box>
                <Box fontSize={16} letterSpacing={3} m={8} style={{ color: "darkslategrey"}}>{item.description}</Box>
                {/* <Box fontSize={16}>{item.owner}</Box> */}
            </Container>);
          }
        })
       }
       <Button variant="contained" onClick={() => {history.push(`/s/tests/${params.id}/questions`)}}>Start</Button>
    </Container>
  );
}