// your code goes here
// Render Lucide icons
lucide.createIcons();

// Modal logic
const modal = document.getElementById('event-modal');
const modalBackdrop = document.getElementById('modal-backdrop');
const postEventBtn = document.getElementById('post-event-btn');

function openModal() {
    modal.classList.remove('hidden');
    modal.classList.add('flex');
    document.body.classList.add('overflow-hidden');
}

function closeModal() {
    modal.classList.add('hidden');
    modal.classList.remove('flex');
    document.body.classList.remove('overflow-hidden');
}

postEventBtn.addEventListener('click', openModal);
modalBackdrop.addEventListener('click', closeModal);
document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && !modal.classList.contains('hidden')) {
        closeModal();
    }
});

// Dashboard Toggle Logic
const clientViewBtn = document.getElementById('client-view-btn');
const gymViewBtn = document.getElementById('gym-view-btn');
const clientView = document.getElementById('client-view');
const gymView = document.getElementById('gym-view');

clientViewBtn.addEventListener('click', () => {
    clientView.classList.remove('hidden');
    gymView.classList.add('hidden');
    clientViewBtn.classList.add('tab-active');
    gymViewBtn.classList.remove('tab-active');
    gymViewBtn.classList.add('text-gray-400', 'hover:bg-gray-700');
});

gymViewBtn.addEventListener('click', () => {
    gymView.classList.remove('hidden');
    clientView.classList.add('hidden');
    gymViewBtn.classList.add('tab-active');
    clientViewBtn.classList.remove('tab-active');
    clientViewBtn.classList.add('text-gray-400', 'hover:bg-gray-700');
});
