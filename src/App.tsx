import axios from 'axios';
import { useEffect, useState } from 'react';

const App = () => {
  const [data, setData] = useState<string>('');

  useEffect(() => {
    axios.get('https://main.d3n487s9fis2jz.amplifyapp.com/dev/prime-calculation/go/start')
      .then(response => setData(response.data.message))
      .catch(error => console.error(error));
  }, []);

  return <div>hello , {data}</div>;
};

export default App;
