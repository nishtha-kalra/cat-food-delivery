import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useParams } from 'react-router-dom';
import DeliveryCard from './DeliveryCard';

function DeliveryPage() {
  const { userId } = useParams(); // Get userId from the URL
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:3000/comms/your-next-delivery/${userId}`)
      .then(response => response.json())
      .then(data => setUser(data))
      .catch(error => console.error('Error fetching data:', error));
  }, [userId]);

  if (!user) {
    return <div>Loading...</div>;
  }

  return <DeliveryCard user={user} />;
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/your-next-delivery/:userId" element={<DeliveryPage />} />
      </Routes>
    </Router>
  );
}

export default App;
