import classes from './alert.module.css';

const Alert = (props) => {
  const onYesHandler = (e) => {
    e.preventDefault();
    props.handleAddMore(false);
    props.handleGroupName('');
    props.handleNoOfPlayers(0);
    props.setIsValid(false);
  };
  const onNoHandler = (e) => {
    e.preventDefault();
    props.onDataToServer(e);
  };
  return (
    <div className={classes.mainAlert}>
      <div className={classes.subDiv}>
        <p>Do you want to add more team?</p>
        <div>
          <button className={classes.btn} onClick={onYesHandler}>
            Yes
          </button>
          <button className={classes.btn} onClick={onNoHandler}>
            No
          </button>
        </div>
      </div>
    </div>
  );
};
export default Alert;
