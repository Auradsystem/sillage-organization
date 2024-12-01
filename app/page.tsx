'use client';

import { useState } from 'react';

export default function Home() {
  const [activeTab, setActiveTab] = useState('vision');

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className="bg-white shadow-sm">
        <div className="max-w-6xl mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <div className="text-blue-600 font-bold text-xl">Sillage</div>
            <div className="flex space-x-4">
              {['Vision', 'Rôles', 'Gouvernance', 'Étapes'].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab.toLowerCase())}
                  className={`px-4 py-2 rounded-lg transition-colors ${
                    activeTab === tab.toLowerCase()
                      ? 'bg-blue-500 text-white'
                      : 'hover:bg-gray-100'
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Contenu */}
      <main className="max-w-6xl mx-auto p-6">
        {activeTab === 'vision' && (
          <div className="bg-white rounded-lg shadow p-6">
            <h1 className="text-2xl font-bold mb-4">Vision</h1>
            <p>Notre vision commune pour Sillage.</p>
          </div>
        )}

        {activeTab === 'rôles' && (
          <div className="bg-white rounded-lg shadow p-6">
            <h1 className="text-2xl font-bold mb-4">Rôles</h1>
            <p>Description des rôles au sein de Sillage.</p>
          </div>
        )}

        {activeTab === 'gouvernance' && (
          <div className="bg-white rounded-lg shadow p-6">
            <h1 className="text-2xl font-bold mb-4">Gouvernance</h1>
            <p>Notre modèle de gouvernance.</p>
          </div>
        )}

        {activeTab === 'étapes' && (
          <div className="bg-white rounded-lg shadow p-6">
            <h1 className="text-2xl font-bold mb-4">Étapes</h1>
            <p>Les prochaines étapes du projet.</p>
          </div>
        )}
      </main>
    </div>
  );
}
