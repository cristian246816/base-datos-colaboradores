const Alert = ({ msg, msgType }) => {
  return (
    <>
      {msg && (
        <div className={`alert alert-${msgType} `} role="alert">
          {msg}
        </div>
      )}
    </>
  );
};

export default Alert;