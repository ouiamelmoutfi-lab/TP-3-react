import { useState } from 'react';

function AdminPanel() {
  const [role, setRole] = useState('admin');

  return (
    <div>
      {role === 'admin' && (
        <div>
          <h2>Panel Administrateur</h2>
          <p>Bienvenue dans l'espace administrateur.</p>
        </div>
      )}

      <button onClick={() => setRole(role === 'admin' ? 'user' : 'admin')}>
        Changer le rôle
      </button>
    </div>
  );
}

export default AdminPanel;