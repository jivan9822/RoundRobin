import classes from './displayfinal.module.css';

const DisplayFinalData = (props) => {
  const data = props.finalData ?? [];
  return (
    <div className={classes.mainDiv}>
      {data.map((each, ind) => {
        return (
          <ul key={ind}>
            <h1>{each[0]}</h1>
            {each[1].map((ele, i) => {
              return <li key={i}>{ele}</li>;
            })}
          </ul>
        );
      })}
    </div>
  );
};
export default DisplayFinalData;
