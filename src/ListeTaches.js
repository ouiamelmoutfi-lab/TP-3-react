
import { useState } from 'react';

function ListeTaches() {
  const [taches, setTaches] = useState([
    { id: 1, titre: 'Apprendre React' },
    { id: 2, titre: 'Créer une application' },
    { id: 3, titre: 'Tester le code' }
  ]);

  const [nouvelleTache, setNouvelleTache] = useState('');

  function ajouterTache(e) {
    e.preventDefault();

    if (nouvelleTache.trim() !== '') {
      const tache = {
        id: Date.now(),
        titre: nouvelleTache
      };

      setTaches([...taches, tache]);
      setNouvelleTache('');
    }
  }

  return (
    <div>
      <h3>Liste des tâches</h3>

      <form onSubmit={ajouterTache}>
        <input
          type="text"
          value={nouvelleTache}
          onChange={(e) => setNouvelleTache(e.target.value)}
          placeholder="Nouvelle tâche"
        />

        <button type="submit">Ajouter</button>
      </form>

      <ul>
        {taches.map((tache) => (
          <li key={tache.id}>{tache.titre}</li>
        ))}
      </ul>
    </div>
  );
}

export default ListeTaches;
