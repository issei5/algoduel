import axios from 'axios';
import { useEffect, useState } from 'react';

const App = () => {
  const [data, setData] = useState<string>('');

  useEffect(() => {
    axios.get('https://your-api-gateway-endpoint.amazonaws.com/dev')
      .then(response => setData(response.data.message))
      .catch(error => console.error(error));
  }, []);

  return <div>{data}</div>;
};

export default App;
