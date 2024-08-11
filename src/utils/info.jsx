function Info() {
  return (
    <>
      <div className="bg-warning-subtle rounded text-center  p-3 fw-bold">
        {' '}
        The API instance may spin down due to inactivity, which could delay
        response by 50 seconds or more on first call.
      </div>
    </>
  );
}

export default Info;
