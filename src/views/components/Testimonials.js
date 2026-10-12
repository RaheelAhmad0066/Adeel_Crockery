/**
 * Testimonials View Component
 * Exact Figma Node 1754:3171 Implementation
 * Tilted cards with dotted divider and quote text
 */

export function renderTestimonialCarousel(testimonials, activeIndex) {
  const container = document.getElementById('testimonials-container');
  if (!container) return;

  const current = testimonials[activeIndex];
  const prev = testimonials[(activeIndex - 1 + testimonials.length) % testimonials.length];
  const next = testimonials[(activeIndex + 1) % testimonials.length];

  container.innerHTML = `
    <!-- Left Card (-15 deg tilted) -->
    <div class="hidden md:block w-[420px] lg:w-[480px] bg-[#FFF0EB] rounded-lg p-7 shadow-sm transform -rotate-12 opacity-75 hover:opacity-100 hover:rotate-0 transition-all duration-300 relative flex-shrink-0 cursor-pointer" id="test-prev-card">
      <div class="text-6xl font-quote text-[#000104] select-none leading-none mb-2">“</div>
      <div class="flex gap-5 items-start">
        <div class="flex flex-col items-center gap-2 pr-5 border-r border-dashed border-[#000104]/30 flex-shrink-0 w-28 text-center">
          <img src="${prev.avatar}" alt="${prev.name}" class="w-14 h-14 rounded-full object-cover">
          <div>
            <h5 class="font-bold text-sm text-[#000104] leading-tight">${prev.name}</h5>
            <span class="text-xs text-[#5E666C]">${prev.location}</span>
          </div>
        </div>
        <p class="text-xs lg:text-sm text-[#5E666C] leading-relaxed line-clamp-4 flex-1">
          ${prev.quote}
        </p>
      </div>
    </div>

    <!-- Left Arrow Navigation -->
    <button id="test-prev-btn" class="w-10 h-10 rounded-full border border-neutral-400 flex items-center justify-center hover:bg-neutral-100 transition-colors flex-shrink-0 z-20 btn-press">
      <svg class="w-5 h-5 text-neutral-800" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.8" d="M10 19l-7-7m0 0l7-7m-7 7h18"/></svg>
    </button>

    <!-- Center Card (Jenny Wilson Highlight in #F0F2E5) -->
    <div class="w-full max-w-[650px] bg-[#F0F2E5] rounded-lg p-8 sm:p-9 shadow-md relative z-10 card-hover">
      <div class="text-7xl font-quote text-[#000104] select-none leading-none -mt-4 mb-1">“</div>
      <div class="flex flex-col sm:flex-row gap-6 items-start sm:items-center">
        <!-- Author Profile Column -->
        <div class="flex sm:flex-col items-center gap-3 sm:pr-8 sm:border-r border-dashed border-[#000104]/30 flex-shrink-0 text-center w-full sm:w-36">
          <img src="${current.avatar}" alt="${current.name}" class="w-16 h-16 sm:w-20 sm:h-20 rounded-full object-cover border-2 border-white shadow-sm">
          <div>
            <h4 class="font-bold text-[#000104] text-base sm:text-lg leading-snug">${current.name}</h4>
            <p class="text-xs sm:text-sm text-[#5E666C]">${current.location}</p>
          </div>
        </div>

        <!-- Quote Column -->
        <div class="flex-1">
          <p class="text-sm sm:text-[18px] text-[#5E666C] leading-relaxed font-normal">
            ${current.quote}
          </p>
        </div>
      </div>
    </div>

    <!-- Right Arrow Navigation -->
    <button id="test-next-btn" class="w-10 h-10 rounded-full border border-neutral-400 flex items-center justify-center hover:bg-neutral-100 transition-colors flex-shrink-0 z-20 btn-press">
      <svg class="w-5 h-5 text-neutral-800" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.8" d="M14 5l7 7m0 0l-7 7m7-7H3"/></svg>
    </button>

    <!-- Right Card (+15 deg tilted in #B8DBE5) -->
    <div class="hidden md:block w-[420px] lg:w-[480px] bg-[#B8DBE5] rounded-lg p-7 shadow-sm transform rotate-12 opacity-85 hover:opacity-100 hover:rotate-0 transition-all duration-300 relative flex-shrink-0 cursor-pointer" id="test-next-card">
      <div class="text-6xl font-quote text-[#000104] select-none leading-none mb-2">“</div>
      <div class="flex gap-5 items-start">
        <div class="flex flex-col items-center gap-2 pr-5 border-r border-dashed border-[#000104]/30 flex-shrink-0 w-28 text-center">
          <img src="${next.avatar}" alt="${next.name}" class="w-14 h-14 rounded-full object-cover">
          <div>
            <h5 class="font-bold text-sm text-[#000104] leading-tight">${next.name}</h5>
            <span class="text-xs text-[#5E666C]">${next.location}</span>
          </div>
        </div>
        <p class="text-xs lg:text-sm text-[#5E666C] leading-relaxed line-clamp-4 flex-1">
          ${next.quote}
        </p>
      </div>
    </div>
  `;
}
