/**
 * Testimonials View Component (MVVM)
 * Figma Node 1754:3171 layout:
 * - 3 Horizontal landscape cards
 * - Left card: Warm peach (#FFF0EB), tilted -10deg
 * - Center card: Olive (#F0F2E5), straight 0deg, slightly taller height with comfortable padding
 * - Right card: Soft blue (#C3E4EE), tilted +10deg
 * - Clean circular arrows (← and →) between cards
 */

export function renderTestimonialCarousel(testimonials, activeIndex) {
  const container = document.getElementById('testimonials-container');
  if (!container) return;

  const current = testimonials[activeIndex];
  const prev = testimonials[(activeIndex - 1 + testimonials.length) % testimonials.length];
  const next = testimonials[(activeIndex + 1) % testimonials.length];

  const prevAvatar = prev.avatar.startsWith('/') ? prev.avatar : `/${prev.avatar}`;
  const currentAvatar = current.avatar.startsWith('/') ? current.avatar : `/${current.avatar}`;
  const nextAvatar = next.avatar.startsWith('/') ? next.avatar : `/${next.avatar}`;

  container.innerHTML = `
    <!-- 1. Left Tilted Card (-10 deg, Peach #FFF0EB) -->
    <div 
      id="test-prev-card"
      class="hidden md:flex w-[420px] lg:w-[480px] min-h-[210px] sm:min-h-[230px] bg-[#FFF0EB] rounded-[24px] p-6 sm:p-7 shadow-sm transform -rotate-[8deg] lg:-rotate-[10deg] opacity-85 hover:opacity-100 hover:rotate-0 transition-all duration-300 relative flex-shrink-0 cursor-pointer items-center"
    >
      <img src="/assets/icons/quote-icon.svg" alt="" class="w-5 h-5 absolute top-4 sm:top-5 left-5 sm:left-6 opacity-90">
      <div class="flex gap-5 items-center w-full">
        <div class="flex flex-col items-center justify-center gap-1.5 pr-5 border-r border-dashed border-[#000104]/30 flex-shrink-0 w-28 text-center">
          <img src="${prevAvatar}" alt="${prev.name}" class="w-14 h-14 rounded-full object-cover shadow-sm">
          <div>
            <h5 class="font-bold text-sm text-[#000104] leading-tight mt-1">${prev.name}</h5>
            <span class="text-[11px] text-[#5E666C]">${prev.location}</span>
          </div>
        </div>
        <p class="text-xs sm:text-[13px] text-[#5E666C] leading-relaxed line-clamp-4 flex-1">
          ${prev.quote}
        </p>
      </div>
    </div>

    <!-- Left Navigation Arrow (←) -->
    <button 
      id="test-prev-btn" 
      class="w-10 h-10 sm:w-11 sm:h-11 rounded-full border border-neutral-300 bg-white flex items-center justify-center hover:bg-neutral-50 transition-all flex-shrink-0 z-20 btn-press shadow-sm hover:scale-105" 
      aria-label="Previous Testimonial"
    >
      <svg class="w-4 h-4 text-neutral-800" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" d="M10 19l-7-7m0 0l7-7m-7 7h18"/>
      </svg>
    </button>

    <!-- 2. Center Card (Straight, Olive #F0F2E5, slightly taller height with comfortable padding) -->
    <div 
      class="w-full max-w-[460px] sm:max-w-[500px] lg:max-w-[540px] min-h-[220px] sm:min-h-[240px] bg-[#F0F2E5] rounded-[24px] p-6 sm:p-7 shadow-md relative z-10 card-hover flex-shrink-0 flex items-center"
    >
      <img src="/assets/icons/quote-icon.svg" alt="" class="w-5 h-5 sm:w-6 sm:h-6 absolute top-4 sm:top-5 left-5 sm:left-6 opacity-90">
      <div class="flex gap-5 sm:gap-6 items-center w-full">
        <div class="flex flex-col items-center justify-center gap-1.5 pr-5 sm:pr-6 border-r border-dashed border-[#000104]/30 flex-shrink-0 text-center w-28 sm:w-32">
          <img 
            src="${currentAvatar}" 
            alt="${current.name}" 
            class="w-14 h-14 sm:w-16 sm:h-16 rounded-full object-cover shadow-sm border-2 border-white"
          >
          <div>
            <h4 class="font-bold text-[#000104] text-sm sm:text-base leading-tight mt-1">${current.name}</h4>
            <p class="text-[11px] sm:text-xs text-[#5E666C] mt-0.5">${current.location}</p>
          </div>
        </div>

        <p class="text-xs sm:text-[13px] lg:text-[14px] text-[#5E666C] leading-relaxed line-clamp-4 flex-1">
          ${current.quote}
        </p>
      </div>
    </div>

    <!-- Right Navigation Arrow (→) -->
    <button 
      id="test-next-btn" 
      class="w-10 h-10 sm:w-11 sm:h-11 rounded-full border border-neutral-300 bg-white flex items-center justify-center hover:bg-neutral-50 transition-all flex-shrink-0 z-20 btn-press shadow-sm hover:scale-105" 
      aria-label="Next Testimonial"
    >
      <svg class="w-4 h-4 text-neutral-800" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3"/>
      </svg>
    </button>

    <!-- 3. Right Tilted Card (+10 deg, Soft Blue #C3E4EE) -->
    <div 
      id="test-next-card"
      class="hidden md:flex w-[420px] lg:w-[480px] min-h-[210px] sm:min-h-[230px] bg-[#C3E4EE] rounded-[24px] p-6 sm:p-7 shadow-sm transform rotate-[8deg] lg:rotate-[10deg] opacity-85 hover:opacity-100 hover:rotate-0 transition-all duration-300 relative flex-shrink-0 cursor-pointer items-center"
    >
      <img src="/assets/icons/quote-icon.svg" alt="" class="w-5 h-5 absolute top-4 sm:top-5 left-5 sm:left-6 opacity-90">
      <div class="flex gap-5 items-center w-full">
        <div class="flex flex-col items-center justify-center gap-1.5 pr-5 border-r border-dashed border-[#000104]/30 flex-shrink-0 w-28 text-center">
          <img src="${nextAvatar}" alt="${next.name}" class="w-14 h-14 rounded-full object-cover shadow-sm">
          <div>
            <h5 class="font-bold text-sm text-[#000104] leading-tight mt-1">${next.name}</h5>
            <span class="text-[11px] text-[#5E666C]">${next.location}</span>
          </div>
        </div>
        <p class="text-xs sm:text-[13px] text-[#5E666C] leading-relaxed line-clamp-4 flex-1">
          ${next.quote}
        </p>
      </div>
    </div>
  `;
}
