import { useState } from 'react';
import classes from './inputform.module.css';

const PlayerNameForm = (props) => {
  const [player, setPlayer] = useState({});
  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    setPlayer((old) => {
      return {
        ...old,
        [name]: value,
      };
    });
  };
  const onSubmitHandler = (e) => {
    e.preventDefault();
    const Players = Object.values(player);
    props.getData(Players);
    props.handleAddMore(true);
  };
  return (
    <form className={classes.formDiv}>
      {props.players.map((each, ind) => {
        return (
          <div key={ind}>
            <input
              type='text'
              placeholder={`Name of Player-${ind + 1}`}
              name={`Player-${ind + 1}`}
              onChange={onChangeHandler}
            />
          </div>
        );
      })}
      <button className={classes.btn2} onClick={onSubmitHandler}>
        Submit
      </button>
    </form>
  );
};
export default PlayerNameForm;
