/**
 * Product & Category Component Renderers
 * Pure MVVM View layer matching Figma Node 1754:2258 and Node 1754:1755
 */

export function renderProductCard(product, onAddToCart) {
  const card = document.createElement('div');
  card.className = 'w-[230px] sm:w-[240px] flex-shrink-0 flex flex-col justify-between group';
  
  const imgSrc = product.image.startsWith('/') ? product.image : '/' + product.image;
  
  card.innerHTML = `
    <a href="/product?id=${product.id}" class="w-full aspect-square bg-white rounded-lg p-5 flex items-center justify-center shadow-sm card-hover border border-neutral-100 block group-hover:shadow-md transition-shadow">
      <img src="${imgSrc}" alt="${product.name}" class="max-h-36 max-w-full object-contain group-hover:scale-105 transition-transform duration-300">
    </a>
    <div class="pt-4 space-y-1.5 flex flex-col items-start">
      <a href="/product?id=${product.id}" class="text-[15px] text-[#3C4245] font-normal truncate hover:text-[#000104] transition-colors block max-w-full">
        ${product.name}
      </a>
      <div class="text-xl font-bold text-[#000104]">
        ${product.formattedPrice || ((product.currency || '€') + product.price)}
      </div>
      <button class="add-cart-btn mt-2 inline-flex items-center gap-2 px-4 py-1.5 border border-neutral-400 rounded text-xs font-semibold text-[#000104] hover:bg-[#000104] hover:text-white transition-smooth btn-press">
        <img src="/assets/icons/cart.svg" alt="" class="w-3.5 h-3.5 object-contain">
        <span>Cart</span>
      </button>
    </div>
  `;

  const addBtn = card.querySelector('.add-cart-btn');
  if (addBtn) {
    addBtn.addEventListener('click', (e) => {
      e.preventDefault();
      e.stopPropagation();
      onAddToCart(product);
    });
  }

  return card;
}

export function renderCategoryCard(cat, onAddToCart) {
  const card = document.createElement('div');
  const isSelected = cat.id === 1;
  const cardBgClass = isSelected ? 'bg-[#EDEDED]' : 'bg-white border border-neutral-200/80';
  card.className = 'w-[230px] flex-shrink-0 flex flex-col group cursor-pointer relative';

  const imgSrc = cat.image.startsWith('/') ? cat.image : '/' + cat.image;

  card.innerHTML = `
    <div class="h-[290px] w-full rounded-2xl ${cardBgClass} flex items-center justify-center overflow-hidden relative card-hover transition-transform duration-300 group-hover:shadow-md">
      ${isSelected ? '<div class="w-40 h-40 rounded-full bg-white absolute pointer-events-none shadow-sm"></div>' : ''}
      <img src="${imgSrc}" alt="${cat.name}" class="h-40 max-w-[85%] object-contain relative z-10 group-hover:scale-105 transition-smooth">
    </div>
    <div class="pt-3 flex flex-col items-start">
      <h4 class="font-bold text-[18px] text-[#000104] group-hover:text-neutral-700 transition-colors">
        ${cat.name}
      </h4>
      <span class="text-[15px] font-medium text-[#5E666C] mt-0.5">$${cat.price}</span>
    </div>
  `;

  card.addEventListener('click', () => {
    window.location.href = `/product?id=${cat.id}`;
  });

  return card;
}
