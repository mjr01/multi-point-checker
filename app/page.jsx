import { useState } from 'react';
import AddressInput from '../components/AddressInput';
import PointsDisplay from '../components/PointsDisplay';
import { fetchAllPoints } from '../utils/api';

export default function Home() {
  const [results, setResults] = useState(null);
  const [address, setAddress] = useState('');
  const [loading, setLoading] = useState(false);

  const handleCheckPoints = async (addr) => {
    setLoading(true);
    setAddress(addr);
    const data = await fetchAllPoints(addr);
    setResults(data);
    setLoading(false);
  };

  return (
    <div>
      <h1>Multi-Protocol Point Checker</h1>
      <AddressInput onSubmit={handleCheckPoints} />
      {loading && <p>Loading...</p>}
      {results && <PointsDisplay results={results} address={address} />}
    </div>
  );
}
