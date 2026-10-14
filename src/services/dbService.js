import { supabase } from '../lib/supabase.js';

/**
 * Robust Database Service with In-Memory Cache & Fast Timeout (1.5s)
 * Guarantees instantaneous page load (0ms cached, max 1.5s live)
 */

// In-Memory cache store
const cacheStore = new Map();
const CACHE_TTL_MS = 60 * 1000; // 1 minute cache

async function withCacheAndTimeout(cacheKey, queryFn, fallbackVal) {
  // Check memory cache
  const cached = cacheStore.get(cacheKey);
  if (cached && (Date.now() - cached.timestamp < CACHE_TTL_MS)) {
    return cached.data;
  }

  // Fast timeout wrapper (1500ms max)
  const timeoutPromise = new Promise((_, reject) => 
    setTimeout(() => reject(new Error('Query timeout')), 1500)
  );

  try {
    const result = await Promise.race([queryFn(), timeoutPromise]);
    if (result && Array.isArray(result) && result.length > 0) {
      cacheStore.set(cacheKey, { data: result, timestamp: Date.now() });
      return result;
    }
    return result || fallbackVal;
  } catch (err) {
    // If cache had stale data, use it
    if (cached?.data) return cached.data;
    return fallbackVal;
  }
}

// Invalidate specific cache keys on write
export function invalidateCache(key) {
  if (key) cacheStore.delete(key);
  else cacheStore.clear();
}

// ================= HERO BANNERS =================
export async function getActiveHeroBanners() {
  return withCacheAndTimeout('hero_banners', async () => {
    const { data, error } = await supabase
      .from('hero_banners')
      .select('*')
      .order('sort_order', { ascending: true });
    if (error) throw error;
    return data || [];
  }, []);
}


export async function saveHeroBanner(banner) {
  invalidateCache('hero_banners');
  try {
    const { data, error } = await supabase
      .from('hero_banners')
      .upsert(banner)
      .select();

    if (error) throw error;
    return { success: true, data };
  } catch (err) {
    console.error('Error saving hero banner:', err);
    return { success: false, error: err.message };
  }
}

export async function deleteHeroBanner(id) {
  invalidateCache('hero_banners');
  try {
    const { error } = await supabase
      .from('hero_banners')
      .delete()
      .eq('id', id);

    if (error) throw error;
    return { success: true };
  } catch (err) {
    console.error('Error deleting hero banner:', err);
    return { success: false, error: err.message };
  }
}

// ================= CATEGORIES & SUBCATEGORIES =================
export async function getNavbarCategoriesWithSubcategories() {
  return withCacheAndTimeout('navbar_categories', async () => {
    const { data: categories, error: catError } = await supabase
      .from('categories')
      .select('*')
      .order('sort_order', { ascending: true });

    if (catError) throw catError;

    const { data: subcategories, error: subError } = await supabase
      .from('subcategories')
      .select('*');

    if (subError) throw subError;

    const combined = (categories || []).map(cat => ({
      ...cat,
      subcategories: (subcategories || []).filter(sub => sub.category_id === cat.id)
    }));

    return combined;
  }, []);
}

export async function saveCategory(category) {
  invalidateCache('navbar_categories');
  try {
    const { data, error } = await supabase
      .from('categories')
      .upsert(category)
      .select();

    if (error) throw error;
    return { success: true, data };
  } catch (err) {
    return { success: false, error: err.message };
  }
}

export async function deleteCategory(id) {
  invalidateCache('navbar_categories');
  try {
    const { error } = await supabase
      .from('categories')
      .delete()
      .eq('id', id);

    if (error) throw error;
    return { success: true };
  } catch (err) {
    return { success: false, error: err.message };
  }
}

export async function saveSubcategory(subcat) {
  invalidateCache('navbar_categories');
  try {
    const { data, error } = await supabase
      .from('subcategories')
      .insert(subcat)
      .select();

    if (error) throw error;
    return { success: true, data };
  } catch (err) {
    return { success: false, error: err.message };
  }
}

export async function deleteSubcategory(id) {
  invalidateCache('navbar_categories');
  try {
    const { error } = await supabase
      .from('subcategories')
      .delete()
      .eq('id', id);

    if (error) throw error;
    return { success: true };
  } catch (err) {
    return { success: false, error: err.message };
  }
}

// ================= PRODUCTS INVENTORY =================
export async function getAllProducts() {
  return withCacheAndTimeout('all_products', async () => {
    const { data, error } = await supabase
      .from('products')
      .select('*')
      .order('created_at', { ascending: false });

    if (error) throw error;
    return data || [];
  }, []);
}

export async function getHomeCarouselProducts() {
  return withCacheAndTimeout('home_carousel_products', async () => {
    const { data, error } = await supabase
      .from('products')
      .select('*')
      .eq('show_on_home_categories', true);

    if (error) throw error;
    return data || [];
  }, []);
}

export async function getHomeFeaturedProducts() {
  return withCacheAndTimeout('home_featured_products', async () => {
    const { data, error } = await supabase
      .from('products')
      .select('*')
      .eq('show_on_home_featured', true)
      .limit(4);

    if (error) throw error;
    return data || [];
  }, []);
}

export async function saveProduct(product) {
  invalidateCache('all_products');
  invalidateCache('home_carousel_products');
  invalidateCache('home_featured_products');
  try {
    const { data, error } = await supabase
      .from('products')
      .upsert(product)
      .select();

    if (error) throw error;
    return { success: true, data };
  } catch (err) {
    console.error('Error saving product:', err);
    return { success: false, error: err.message };
  }
}

export async function deleteProduct(id) {
  invalidateCache('all_products');
  invalidateCache('home_carousel_products');
  invalidateCache('home_featured_products');
  try {
    const { error } = await supabase
      .from('products')
      .delete()
      .eq('id', id);

    if (error) throw error;
    return { success: true };
  } catch (err) {
    console.error('Error deleting product:', err);
    return { success: false, error: err.message };
  }
}


// ================= ORDERS & CHECKOUT =================
export async function createOrder(orderPayload) {
  try {
    const { data, error } = await supabase
      .from('orders')
      .insert([orderPayload])
      .select();

    if (error) throw error;
    return { success: true, data: data[0] };
  } catch (err) {
    console.error('Error inserting order in Supabase:', err);
    return { success: false, error: err.message };
  }
}

export async function getAllOrders() {
  try {
    const { data, error } = await supabase
      .from('orders')
      .select('*')
      .order('created_at', { ascending: false });

    if (error) throw error;
    return data || [];
  } catch (err) {
    console.error('Error fetching orders:', err);
    return [];
  }
}

export async function updateOrderStatus(orderId, newStatus) {
  try {
    const { data, error } = await supabase
      .from('orders')
      .update({ status: newStatus })
      .eq('id', orderId)
      .select();

    if (error) throw error;
    return { success: true, data };
  } catch (err) {
    console.error('Error updating order status:', err);
    return { success: false, error: err.message };
  }
}

// ================= SERVICES & INQUIRIES =================
export async function getAllServices() {
  try {
    const { data, error } = await supabase
      .from('services')
      .select('*')
      .order('created_at', { ascending: false });

    if (error) throw error;
    return data || [];
  } catch (err) {
    return [];
  }
}

export async function saveService(service) {
  invalidateCache('services');
  try {
    const { data, error } = await supabase
      .from('services')
      .upsert(service)
      .select();

    if (error) throw error;
    return { success: true, data };
  } catch (err) {
    console.error('Error saving service:', err);
    return { success: false, error: err.message };
  }
}

export async function deleteService(id) {
  invalidateCache('services');
  try {
    const { error } = await supabase
      .from('services')
      .delete()
      .eq('id', id);

    if (error) throw error;
    return { success: true };
  } catch (err) {
    console.error('Error deleting service:', err);
    return { success: false, error: err.message };
  }
}

export async function createServiceInquiry(inquiry) {
  try {
    const { data, error } = await supabase
      .from('service_inquiries')
      .insert([inquiry])
      .select();

    if (error) throw error;
    return { success: true, data: data[0] };
  } catch (err) {
    return { success: false, error: err.message };
  }
}

export async function getAllServiceInquiries() {
  try {
    const { data, error } = await supabase
      .from('service_inquiries')
      .select('*')
      .order('created_at', { ascending: false });

    if (error) throw error;
    return data || [];
  } catch (err) {
    return [];
  }
}

// ================= ARTICLES / BLOG =================
export async function getAllArticles() {
  return withCacheAndTimeout('articles', async () => {
    const { data, error } = await supabase
      .from('articles')
      .select('*')
      .order('created_at', { ascending: false });

    if (error) throw error;
    return data || [];
  }, []);
}

export async function saveArticle(article) {
  invalidateCache('articles');
  try {
    const { data, error } = await supabase
      .from('articles')
      .upsert(article)
      .select();

    if (error) throw error;
    return { success: true, data };
  } catch (err) {
    return { success: false, error: err.message };
  }
}

export async function deleteArticle(id) {
  invalidateCache('articles');
  try {
    const { error } = await supabase
      .from('articles')
      .delete()
      .eq('id', id);

    if (error) throw error;
    return { success: true };
  } catch (err) {
    return { success: false, error: err.message };
  }
}

// ================= STORAGE UPLOAD (crockery-images bucket) =================
export async function uploadImageToStorage(file, folder = 'products') {
  try {
    if (!file) return { success: false, error: 'No file provided' };
    const cleanFileName = file.name ? file.name.replace(/[^a-zA-Z0-9.-]/g, '_') : 'img.png';
    const filePath = `${folder}/${Date.now()}_${cleanFileName}`;

    const { data, error } = await supabase.storage
      .from('crockery-images')
      .upload(filePath, file, {
        cacheControl: '3600',
        upsert: true
      });

    if (error) {
      console.warn('Storage upload error, using local/data fallback:', error);
      return { success: false, error: error.message };
    }

    const { data: publicUrlData } = supabase.storage
      .from('crockery-images')
      .getPublicUrl(filePath);

    return { success: true, publicUrl: publicUrlData.publicUrl };
  } catch (err) {
    console.error('Storage upload exception:', err);
    return { success: false, error: err.message };
  }
}


