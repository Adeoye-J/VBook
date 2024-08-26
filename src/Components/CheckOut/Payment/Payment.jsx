import React, { useState } from 'react';

const Payment = () => {
  const [cardNumber, setCardNumber] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [cvc, setCvc] = useState('');
  const [error, setError] = useState('');

  const handleCardNumberChange = (e) => {
    const value = e.target.value.replace(/\D/g, ''); // Remove non-numeric characters
    setCardNumber(value);
  };

  const handleExpiryDateChange = (e) => {
    const value = e.target.value.replace(/\D/g, ''); // Remove non-numeric characters
    setExpiryDate(value);
  };

  const handleCvcChange = (e) => {
    const value = e.target.value.replace(/\D/g, ''); // Remove non-numeric characters
    setCvc(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (cardNumber.length !== 16 || expiryDate.length !== 4 || cvc.length !== 3) {
      setError('Please fill out all fields correctly.');
    } else {
      setError('');
      console.log('Card Number:', cardNumber);
      console.log('Expiry Date:', expiryDate);
      console.log('CVC:', cvc);
    }
  };

  return (
    <div style={{ padding: '20px', maxWidth: '400px', margin: '0 auto' }}>
      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: '10px' }}>
          <label>Card Number</label>
          <input
            type="text"
            value={cardNumber}
            onChange={handleCardNumberChange}
            maxLength="16"
            placeholder="1234 5678 9012 3456"
            style={{ width: '100%', padding: '10px', fontSize: '16px' }}
          />
        </div>
        <div style={{ marginBottom: '10px' }}>
          <label>Expiry Date (MMYY)</label>
          <input
            type="text"
            value={expiryDate}
            onChange={handleExpiryDateChange}
            maxLength="4"
            placeholder="MMYY"
            style={{ width: '100%', padding: '10px', fontSize: '16px' }}
          />
        </div>
        <div style={{ marginBottom: '20px' }}>
          <label>CVC</label>
          <input
            type="text"
            value={cvc}
            onChange={handleCvcChange}
            maxLength="3"
            placeholder="CVC"
            style={{ width: '100%', padding: '10px', fontSize: '16px' }}
          />
        </div>
        {error && <div style={{ color: 'red', marginBottom: '10px' }}>{error}</div>}
        <button type="submit" style={{ padding: '10px', width: '100%', fontSize: '16px' }} >
          Simulate Payment
        </button>
      </form>
    </div>
  );
};

export default Payment;
