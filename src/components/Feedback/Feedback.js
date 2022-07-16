const Feedback = ({ message, type }) => {
    return <div className={`feedback ${type}`}>{message}</div>;
  };
  export default Feedback;
  