import { useState } from 'react';

export default function Home() {
  const [activeTab, setActiveTab] = useState('vision');

  return (
    <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '20px' }}>
      {/* Navigation */}
      <nav style={{ marginBottom: '20px' }}>
        <div style={{ display: 'flex', gap: '10px' }}>
          {['Vision', 'Rôles', 'Gouvernance', 'Étapes'].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab.toLowerCase())}
              style={{
                padding: '10px 20px',
                backgroundColor: activeTab === tab.toLowerCase() ? '#2563eb' : '#f3f4f6',
                color: activeTab === tab.toLowerCase() ? 'white' : 'black',
                border: 'none',
                borderRadius: '8px',
                cursor: 'pointer'
              }}
            >
              {tab}
            </button>
          ))}
        </div>
      </nav>

      {/* Contenu */}
      <div style={{ backgroundColor: 'white', padding: '20px', borderRadius: '8px', boxShadow: '0 1px 3px rgba(0,0,0,0.1)' }}>
        {activeTab === 'vision' && (
          <div>
            <h1 style={{ fontSize: '24px', marginBottom: '16px' }}>Vision</h1>
            <p>Notre vision commune pour Sillage</p>
          </div>
        )}

        {activeTab === 'rôles' && (
          <div>
            <h1 style={{ fontSize: '24px', marginBottom: '16px' }}>Rôles</h1>
            <p>Les rôles au sein de l'organisation</p>
          </div>
        )}

        {activeTab === 'gouvernance' && (
          <div>
            <h1 style={{ fontSize: '24px', marginBottom: '16px' }}>Gouvernance</h1>
            <p>Notre modèle de gouvernance</p>
          </div>
        )}

        {activeTab === 'étapes' && (
          <div>
            <h1 style={{ fontSize: '24px', marginBottom: '16px' }}>Étapes</h1>
            <p>Les prochaines étapes du projet</p>
          </div>
        )}
      </div>
    </div>
  );
}
