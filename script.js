document.addEventListener('DOMContentLoaded', function() {
    initializeApp();
});

function initializeApp() {
    createNavButtons();
    populateValues();
    populateAssociates();
    showSection('vision');
    initializeAnimations();
}

function createNavButtons() {
    const navButtons = document.getElementById('nav-buttons');
    const sections = ['Vision', 'Rôles', 'Gouvernance', 'Étapes'];
    
    sections.forEach(section => {
        const button = document.createElement('button');
        button.className = 'nav-button px-4 py-2 rounded-lg bg-gray-100 hover:bg-blue-500 hover:text-white';
        button.textContent = section;
        button.onclick = () => showSection(section.toLowerCase());
        navButtons.appendChild(button);
    });
}

function showSection(sectionId) {
    // Cache toutes les sections
    document.querySelectorAll('.content-section').forEach(section => {
        section.classList.add('hidden');
        section.classList.remove('active');
    });
    
    // Affiche la section sélectionnée
    const selectedSection = document.getElementById(sectionId);
    if (selectedSection) {
        selectedSection.classList.remove('hidden');
        setTimeout(() => {
            selectedSection.classList.add('active');
        }, 50);
    }

    // Met à jour les boutons de navigation
    updateNavButtons(sectionId);
}

function updateNavButtons(activeSection) {
    document.querySelectorAll('.nav-button').forEach(button => {
        if (button.textContent.toLowerCase() === activeSection) {
            button.classList.add('active');
        } else {
            button.classList.remove('active');
        }
    });
}

function populateValues() {
    const valuesList = document.getElementById('values-list');
    appData.values.forEach(value => {
        const li = document.createElement('li');
        li.className = 'flex items-center';
        li.innerHTML = `
            <span class="w-2 h-2 rounded-full bg-blue-500 mr-2"></span>
            ${value}
        `;
        valuesList.appendChild(li);
    });
}

function populateAssociates() {
    const container = document.getElementById('associates-cards');
    appData.associates.forEach(associate => {
        const card = document.createElement('div');
        card.className = 'card bg-white p-6 rounded-lg shadow-lg cursor-pointer';
        card.innerHTML = `
            <div class="flex items-center mb-4">
                <div class="w-12 h-12 ${associate.color} rounded-full flex items-center justify-center text-white text-2xl">
                    ${associate.icon}
                </div>
                <div class="ml-4">
                    <h2 class="text-xl font-bold">${associate.name}</h2>
                    <p class="text-sm text-gray-600">${associate.title}</p>
                </div>
            </div>
            <ul class="space-y-2">
                ${associate.responsibilities.map(resp => `
                    <li class="flex items-center text-sm">
                        <span class="w-1.5 h-1.5 rounded-full bg-gray-400 mr-2"></span>
                        ${resp}
                    </li>
                `).join('')}
            </ul>
        `;
        card.onclick = () => showAssociateDetails(associate);
        container.appendChild(card);
    });
}

function showAssociateDetails(associate) {
    const modal = document.getElementById('modal');
    const content = document.getElementById('modal-content');
    
    content.innerHTML = `
        <h2 class="text-2xl font-bold mb-4">${associate.name}</h2>
        <p class="text-gray-600 mb-4">${associate.title}</p>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
            ${Object.entries(associate.details).map(([category, items]) => `
                <div class="bg-gray-50 p-4 rounded-lg">
                    <h3 class="font-semibold mb-2 capitalize">${category}</h3>
                    <ul class="space-y-2">
                        ${items.map(item => `
                            <li class="flex items-center text-sm">
                                <span class="w-1.5 h-1.5 rounded-full bg-gray-400 mr-2"></span>
                                ${item}
                            </li>
                        `).join('')}
                    </ul>
                </div>
            `).join('')}
        </div>
    `;
    
    modal.classList.remove('hidden');
    modal.querySelector('div').classList.add('modal-enter');
}

function closeModal() {
    const modal = document.getElementById('modal');
    modal.classList.add('hidden');
}

function initializeAnimations() {
    gsap.from(".card", {
        duration: 0.5,
        y: 30,
        opacity: 0,
        stagger: 0.2,
        ease: "power2.out"
    });
}

// Ferme la modal si on clique en dehors
document.getElementById('modal').addEventListener('click', function(e) {
    if (e.target === this) {
        closeModal();
    }
});
