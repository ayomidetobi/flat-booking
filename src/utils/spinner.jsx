function Spinner() {
  return (
    <div className="mx-auto d-flex justify-content-center align-content-center my-5">
      <div className="spinner-border" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
    </div>
  );
}

export default Spinner;
