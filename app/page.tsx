'use client';

import { useState } from 'react';

export default function Home() {
  const [activeTab, setActiveTab] = useState('vision');

  const menuItems = [
    { id: 'vision', label: 'Vision' },
    { id: 'roles', label: 'Rôles' },
    { id: 'gouvernance', label: 'Gouvernance' },
  ];

  return (
    <main className="max-w-6xl mx-auto p-6">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold mb-4">Sillage</h1>
        <p className="text-xl text-gray-600">Organisation & Structure</p>
      </div>

      <div className="flex space-x-2 mb-6">
        {menuItems.map((item) => (
          <button
            key={item.id}
            onClick={() => setActiveTab(item.id)}
            className={`px-4 py-2 rounded-lg transition-colors ${
              activeTab === item.id
                ? 'bg-blue-500 text-white'
                : 'bg-gray-100 hover:bg-gray-200'
            }`}
          >
            {item.label}
          </button>
        ))}
      </div>

      <div className="bg-white rounded-lg shadow-lg p-6">
        {activeTab === 'vision' && (
          <div>
            <h2 className="text-2xl font-bold mb-4">Vision Commune</h2>
            <p className="text-gray-700">
              Nous avançons ensemble sur le projet Sillage, avec une dynamique déjà en place 
              grâce aux contributions de chacun.
            </p>
          </div>
        )}

        {activeTab === 'roles' && (
          <div>
            <h2 className="text-2xl font-bold mb-4">Rôles</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Contenu des rôles ici */}
            </div>
          </div>
        )}

        {activeTab === 'gouvernance' && (
          <div>
            <h2 className="text-2xl font-bold mb-4">Gouvernance</h2>
            <p className="text-gray-700">
              Notre modèle de gouvernance est basé sur la collaboration et la transparence.
            </p>
          </div>
        )}
      </div>
    </main>
  );
}
