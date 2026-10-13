/**
 * UI Service: Handles Toasts, Modals, and Notifications
 * Premium responsive toast notification designed for mobile & desktop
 */
export class NotificationService {
  static showToast(message, type = 'success') {
    let container = document.getElementById('toast-container');
    if (!container) {
      container = document.createElement('div');
      container.id = 'toast-container';
      container.className = 'fixed top-5 left-1/2 -translate-x-1/2 z-[10000] flex flex-col items-center pointer-events-none w-full px-4';
      document.body.appendChild(container);
    }

    const toast = document.createElement('div');
    toast.className = 'flex items-center gap-2.5 bg-[#000104]/95 text-white px-4 py-3 rounded-2xl sm:rounded-full shadow-2xl border border-white/15 backdrop-blur-md text-xs sm:text-sm font-semibold max-w-[92vw] sm:max-w-md transform -translate-y-4 opacity-0 transition-all duration-300 pointer-events-auto cursor-pointer';

    const iconSvg = `
      <span class="w-5 h-5 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center flex-shrink-0">
        <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7" />
        </svg>
      </span>
    `;

    toast.innerHTML = `
      ${iconSvg}
      <span class="flex-1 text-neutral-100 truncate">${message}</span>
    `;

    container.appendChild(toast);

    // Trigger enter animation
    requestAnimationFrame(() => {
      toast.classList.remove('-translate-y-4', 'opacity-0');
      toast.classList.add('translate-y-0', 'opacity-100', 'scale-100');
    });

    const removeToast = () => {
      toast.classList.add('-translate-y-4', 'opacity-0', 'scale-95');
      setTimeout(() => {
        if (toast.parentElement) toast.remove();
      }, 300);
    };

    toast.addEventListener('click', removeToast);
    setTimeout(removeToast, 2800);
  }
}

