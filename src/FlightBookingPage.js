import React, { useState, useEffect } from 'react';

const FlightBookingPage =() => {
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    fetchFlightData();
  }, []);

  const fetchFlightData = async () => {
    try {
      const response = await fetch(
        "https://api.flightapi.io/onewaytrip/6548baada77ee98d9fe895e9/HEL/OUL/2024-05-20/1/0/0/Economy/USD"
      );

      if (response.ok) {
        const data = await response.json();
        setSearchResults(data); 
      } else {
        console.error('Error fetching flight data');
      }
    } catch (error) {
      console.error('Error fetching flight data:', error);
    }
  };

  return (
    <div>
      <h1>Flight Booking</h1>
      <div>
        {searchResults.map((flight, index) => (
          <div key={index}>
            <p>Airline: {flight.airline}</p>
            <p>Departure: {flight.departure}</p>
            <p>Arrival: {flight.arrival}</p>
            <p>Price: {flight.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default FlightBookingPage;
