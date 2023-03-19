import { useState } from 'react';
import Alert from './Alert';
import axios from 'axios';
import PlayerNameForm from './PlayerNameForm';
import classes from './inputform.module.css';

const InputForm = (props) => {
  const [groupName, setGroupName] = useState('');
  const [playerData, setPlayerData] = useState([]);
  const [noOfPlayers, setNoOfPlayers] = useState('');
  const [isValid, setIsValid] = useState(false);
  const [addMore, setAddMore] = useState(false);
  const handleAddMore = (data) => {
    setAddMore(data);
  };
  const handleGroupName = (data) => {
    setGroupName(data);
  };
  const handleNoOfPlayers = (data) => {
    setNoOfPlayers(data);
  };
  const getData = (data) => {
    setPlayerData((old) => [...old, [groupName, data]]);
  };
  const onDataToServer = (e) => {
    e.preventDefault();
    axios
      .post('/players', { data: playerData })
      .then((res) => {
        console.log(res);
        props.getData(res.data);
        props.displayDataHandler(true);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const onSubmitHandler = (e) => {
    e.preventDefault();
    setIsValid(true);
  };
  return (
    <div className={classes.mainDiv}>
      <form className={classes.formDiv} onSubmit={onSubmitHandler}>
        <div>
          <input
            name='groupName'
            type='text'
            value={groupName}
            placeholder='Group Name'
            onChange={(e) => setGroupName(e.target.value)}
          />
        </div>
        <div>
          <input
            name='groupName'
            type='number'
            placeholder='Number of Players'
            value={noOfPlayers}
            onChange={(e) => setNoOfPlayers(e.target.value)}
          />
        </div>
        <button className={classes.btn}>Submit</button>
      </form>
      {isValid && (
        <PlayerNameForm
          players={new Array(+noOfPlayers).fill(0)}
          handleAddMore={handleAddMore}
          getData={getData}
        />
      )}
      {addMore && (
        <Alert
          handleAddMore={handleAddMore}
          handleGroupName={handleGroupName}
          handleNoOfPlayers={handleNoOfPlayers}
          onDataToServer={onDataToServer}
          setIsValid={setIsValid}
        />
      )}
    </div>
  );
};
export default InputForm;
