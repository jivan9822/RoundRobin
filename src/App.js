import InputForm from './InputForm';
import { useState } from 'react';
import DisplayFinalData from './DisplayFinalData';
import Cart from './Cart';

function App() {
  const [finalData, setFinalData] = useState([]);
  const [displayData, setDisplayData] = useState(false);
  const displayDataHandler = (data) => {
    setDisplayData(true);
  };
  const getData = (data) => {
    setFinalData([...data]);
  };
  return (
    <Cart>
      {!displayData && (
        <InputForm getData={getData} displayDataHandler={displayDataHandler} />
      )}
      {displayData && <DisplayFinalData finalData={finalData} />}
    </Cart>
  );
}

export default App;
