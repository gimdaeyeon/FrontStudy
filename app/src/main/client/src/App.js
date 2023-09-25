import './App.css';
import axios from "axios";
import {useEffect, useState} from "react";


function App() {

  const [time, setTime] = useState('');

  useEffect(() => {
    axios.get('/api/time')
        .then(response => setTime(response.data))
        .catch(error => console.log(error))
  }, []);

  return (
    <div>
      백엔드 연결 확인 현재시간 : {time}
    </div>
  );
}

export default App;
