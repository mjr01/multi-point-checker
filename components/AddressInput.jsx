import { useState } from 'react';

export default function AddressInput({ onSubmit }) {
  const [address, setAddress] = useState('');
  
  const isValidEVM = (addr) => {
    return /^0x[a-fA-F0-9]{40}$/.test(addr);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isValidEVM(address)) {
      onSubmit(address);
    } else {
      alert('Invalid EVM address format');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={address}
        onChange={(e) => setAddress(e.target.value)}
        placeholder="Enter EVM address (0x...)"
      />
      <button type="submit">Check Points</button>
    </form>
  );
}
