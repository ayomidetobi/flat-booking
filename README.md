# Flat Booking - React Frontend

This project is a Vite-powered React application for managing flat bookings.

## Prerequisites

Ensure you have the following installed on your system:

- Node.js (>=14.0.0)
- npm (comes with Node.js)
- A running instance of the Django API. If you haven't set up the Django API yet, follow the instructions [here](https://github.com/ayomidetobi/flat-booking-api).

## Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/ayomidetobi/flat-booking.git
cd flat-booking
```

### 2. Install dependencies

```bash
npm install
```

### 3. Create a `.env` file

In the root directory of the project, create a .env file and add the following line:

```bash
VITE_API_URL=http://localhost:8000/api/
```

### 4. Start the development server

Make sure your Django API is running. Then, start the React development server:

```bash
npm run dev
```

Ensure your Django API is up and running before using the React application. If you encounter any issues, please refer to the documentation or open an issue in the respective repositories.
