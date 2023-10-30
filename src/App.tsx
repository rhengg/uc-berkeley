import React from 'react';
import Card from './components/Card';
import './css/styles.css';

function App() {
  return (
    <div style={{ display: 'flex', flexDirection: 'row', gap: '2rem', alignItems: 'center' }}>
      <button className='large-primary-btn'>Button Primary</button>
      <button className='large-secondary-btn'>Button Primary</button>
      <button className='small-primary-btn'>Button Primary</button>
      <button className='small-secondary-btn'>Button Primary</button>

      <Card
        name='Arijit Singh'
        origin='India'
      />
    </div>
  );
}

export default App;
