import BookingTables from './components/BookingTables';

function App() {
  return (
    <div className="bg-light ">
      <div className="container py-5">
        <h1 className="text-center py-3">Bookings List</h1>
        <BookingTables />
      </div>
    </div>
  );
}

export default App;
