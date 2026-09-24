import React from 'react';
import './Navbar.css';

export default function Navbar({ rolActual, setRolActual, saldo, setSaldo, roles }) {
  return (
    <div className="navbar">
      <h2>Movilidad USAC 🚲</h2>
      <div className="navbar-controls">
        <div>
          <label style={{ marginRight: '10px' }}>Rol:</label>
          <select value={rolActual} onChange={(e) => setRolActual(e.target.value)}>
            {roles.map(rol => (
              <option key={rol} value={rol}>{rol}</option>
            ))}
          </select>
        </div>
        {rolActual !== 'Administrador' && (
          <div className="navbar-controls">
            <span>Saldo: Q{saldo.toFixed(2)}</span>
            <button className="btn-recarga" onClick={() => setSaldo(saldo + 20)}>
              + Q20
            </button>
          </div>
        )}
      </div>
    </div>
  );
}