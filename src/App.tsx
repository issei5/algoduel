import { API } from 'aws-amplify';

function App() {
  return (
    <div>
      <button onClick={callLambda}>Call Lambda</button>
    </div>
  );
}

async function callLambda() {
  try {
    const response = await API.get('myApiName', '/path', {
      queryStringParameters: {
        param1: 'value1',
        param2: 'value2',
      },
    });
    console.log('Response:', response);
  } catch (error) {
    console.error('Error calling API:', error);
  }
}

export default App;
