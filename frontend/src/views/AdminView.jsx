import React from 'react';
import '../styles/vistas.css';

export default function AdminView({ vehiculos, actualizarEstado }) {
  const estadosPosibles = ['disponible', 'alquilada', 'en uso', 'devuelta', 'mantenimiento'];

  return (
    <div>
      <h3 className="vista-header">Administración - Control de Flota</h3>
      <table className="tabla-admin">
        <thead>
          <tr>
            <th>ID</th>
            <th>Tipo</th>
            <th>Estado Actual</th>
            <th>Acción de Admin</th>
          </tr>
        </thead>
        <tbody>
          {vehiculos.map(v => (
            <tr key={v.id}>
              <td>{v.id}</td>
              <td>{v.tipo}</td>
              <td>
                <span className="badge" style={{
                  backgroundColor: v.estado === 'disponible' ? '#2ecc71' : (v.estado === 'en uso' ? '#f1c40f' : '#e74c3c'),
                  color: v.estado === 'en uso' ? 'black' : 'white'
                }}>
                  {v.estado}
                </span>
              </td>
              <td>
                <select value={v.estado} onChange={(e) => actualizarEstado(v.id, e.target.value)}>
                  {estadosPosibles.map(estado => (
                    <option key={estado} value={estado}>{estado}</option>
                  ))}
                </select>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}