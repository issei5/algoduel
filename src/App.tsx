import { get } from 'aws-amplify/api';

function App() {
  return (
    <div>
      <button onClick={callLambda}>Call Lambda</button>
    </div>
  );
}

async function callLambda() {
  try {
    const restOperation = get({
      apiName: 'GoPrimeCalculator',
      path: '/prime-calculation/go/start'
    });
    const response = await restOperation.response;
    console.log('GET call succeeded: ', response);
  } catch (error) {
    console.log(error);
  }
}

export default App;
