import { useState } from 'react';

export default function Home() {
  const [activeTab, setActiveTab] = useState('vision');

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <header className="bg-white shadow-sm">
        <div className="max-w-6xl mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-bold text-blue-600">Sillage</h1>
            <nav className="flex space-x-4">
              {['Vision', 'Rôles', 'Gouvernance', 'Étapes'].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab.toLowerCase())}
                  className={`px-4 py-2 rounded-lg transition-colors ${
                    activeTab === tab.toLowerCase()
                      ? 'bg-blue-500 text-white'
                      : 'bg-gray-100 hover:bg-gray-200'
                  }`}
                >
                  {tab}
                </button>
              ))}
            </nav>
          </div>
        </div>
      </header>

      {/* Contenu principal */}
      <main className="max-w-6xl mx-auto p-6">
        <div className="bg-white rounded-lg shadow-lg p-6">
          {activeTab === 'vision' && (
            <div>
              <h2 className="text-2xl font-bold mb-4">Vision</h2>
              <p className="text-gray-600">
                Notre vision commune pour Sillage est de créer une marque de parfum innovante,
                basée sur l'excellence et la créativité.
              </p>
            </div>
          )}

          {activeTab === 'rôles' && (
            <div>
              <h2 className="text-2xl font-bold mb-4">Rôles</h2>
              <p className="text-gray-600">
                Une organisation claire où chaque associé apporte son expertise.
              </p>
            </div>
          )}

          {activeTab === 'gouvernance' && (
            <div>
              <h2 className="text-2xl font-bold mb-4">Gouvernance</h2>
              <p className="text-gray-600">
                Un modèle de gouvernance collaborative et transparente.
              </p>
            </div>
          )}

          {activeTab === 'étapes' && (
            <div>
              <h2 className="text-2xl font-bold mb-4">Étapes</h2>
              <p className="text-gray-600">
                Les prochaines étapes clés de notre développement.
              </p>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}
