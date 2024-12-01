{activeTab === 'rôles' && (
  <div>
    <h2 className="text-2xl font-bold mb-6">Rôles & Responsabilités</h2>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {/* Carte Aurad */}
      <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
        <div className="flex items-center mb-4">
          <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center text-white text-xl">
            💰
          </div>
          <div className="ml-4">
            <h3 className="font-bold">Aurad System</h3>
            <p className="text-sm text-gray-600">Gestion financière et marketing digital</p>
          </div>
        </div>
        <ul className="space-y-2">
          <li className="flex items-center text-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-500 mr-2"></span>
            Élaboration et suivi des budgets
          </li>
          <li className="flex items-center text-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-500 mr-2"></span>
            Marketing digital et influence
          </li>
          <li className="flex items-center text-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-500 mr-2"></span>
            Développement e-commerce
          </li>
        </ul>
      </div>

      {/* Carte Sylvain */}
      <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
        <div className="flex items-center mb-4">
          <div className="w-12 h-12 bg-emerald-500 rounded-full flex items-center justify-center text-white text-xl">
            🧪
          </div>
          <div className="ml-4">
            <h3 className="font-bold">Sylvain Rochette</h3>
            <p className="text-sm text-gray-600">Produit, qualité et fournisseurs</p>
          </div>
        </div>
        <ul className="space-y-2">
          <li className="flex items-center text-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 mr-2"></span>
            Supervision des gammes de parfums
          </li>
          <li className="flex items-center text-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 mr-2"></span>
            Relations fournisseurs
          </li>
          <li className="flex items-center text-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 mr-2"></span>
            Contrôle qualité
          </li>
        </ul>
      </div>

      {/* Carte Sokona */}
      <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
        <div className="flex items-center mb-4">
          <div className="w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center text-white text-xl">
            🤝
          </div>
          <div className="ml-4">
            <h3 className="font-bold">Sokona Cissé</h3>
            <p className="text-sm text-gray-600">Partenariats, stratégie et distribution</p>
          </div>
        </div>
        <ul className="space-y-2">
          <li className="flex items-center text-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-purple-500 mr-2"></span>
            Développement des partenariats
          </li>
          <li className="flex items-center text-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-purple-500 mr-2"></span>
            Stratégie de marque
          </li>
          <li className="flex items-center text-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-purple-500 mr-2"></span>
            Supervision distribution
          </li>
        </ul>
      </div>
    </div>
  </div>
)}
