import { useState } from 'react';
import DataTable from 'react-data-table-component';
import useBookings from '../services/bookingApi';
import Spinner from '../utils/spinner';

const columns = [
  {
    name: 'Flat Name',
    selector: (row) => row.flat_name || `Flat ${row.flat}`,
    sortable: true,
  },
  {
    name: 'Booking ID',
    selector: (row) => row.id,
    sortable: true,
  },
  {
    name: 'Checkin',
    selector: (row) => row.checkin,
    sortable: true,
  },
  {
    name: 'Checkout',
    selector: (row) => row.checkout,
    sortable: true,
  },
  {
    name: 'Previous Booking ID',
    selector: (row) => row.previous_booking_id || '-',
    sortable: true,
  },
];

function BookingTables() {
  const [currentPage, setCurrentPage] = useState(1);
  const [ordering, setOrdering] = useState('');
  const [pageSize, setPageSize] = useState(3);
  const {
    data: bookingsData,
    isLoading,
    isError,
  } = useBookings(currentPage, ordering, pageSize);

  const handlePrevClick = () => {
    if (currentPage > 1) {
      setCurrentPage((prevPage) => prevPage - 1);
    }
  };

  const handleNextClick = () => {
    if (bookingsData && bookingsData.next) {
      setCurrentPage((prevPage) => prevPage + 1);
    }
  };
  const handleOrderChange = (event) => {
    const newOrdering = event.target.value;
    setOrdering(newOrdering);

    setCurrentPage(1);
  };
  const handlePageSizeChange = (event) => {
    const selectedPageSize = parseInt(event.target.value, 10);
    setPageSize(selectedPageSize);
    setCurrentPage(1);
  };

  {
    isError && <p>an error occur</p>;
  }

  return (
    <div className="bg-white p-5 rounded shadow-sm ">
      <span className="pe-4">Sort by</span>
      <select
        className="form-select w-25 my-5 d-inline"
        aria-label="Ordering select"
        onChange={handleOrderChange}
        value={ordering}
      >
        <option value="">Default</option>
        <option value="checkin">Checkin Ascending</option>
        <option value="-checkin">Checkin Descending</option>
      </select>

      {isLoading ? (
        <Spinner />
      ) : (
        <DataTable
          columns={columns}
          data={bookingsData?.results || []}
          highlightOnHover
          pointerOnHover
          striped
        />
      )}

      <select
        className="form-select w-25 my-3 d-inline"
        aria-label="Page size select"
        onChange={handlePageSizeChange}
        value={pageSize}
      >
        <option value="2">2 per page</option>
        <option value="3">3 per page</option>
        <option value="10">10 per page</option>
      </select>
      <nav
        aria-label="Page navigation example"
        className="d-inline float-end mt-3"
      >
        <ul className="pagination">
          <li className={`page-item ${currentPage === 1 ? 'disabled' : ''}`}>
            <button
              className="page-link"
              onClick={handlePrevClick}
              disabled={currentPage === 1}
            >
              Previous
            </button>
          </li>
          <li
            className={`page-item ${!bookingsData || !bookingsData.next ? 'disabled' : ''}`}
          >
            <button
              className="page-link"
              onClick={handleNextClick}
              disabled={!bookingsData || !bookingsData.next}
            >
              Next
            </button>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default BookingTables;
