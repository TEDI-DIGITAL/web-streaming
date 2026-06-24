const WHATSAPP = "51 970743783";

const productos = [
  {
    nombre: "Netflix Premium - TV",
    precio: "S/14.99 mensual",
    categoria: ["Streaming"],
    logo: "N",
    img: "https://upload.wikimedia.org/wikipedia/commons/f/ff/Netflix-new-icon.png", 
    desc: "Películas y series populares para disfrutar todos los días. Resolución 4K Ultra HD",
    bullets: ["1 dispositivo TV", "Activación inmediata"],
    accent: "#3b1423",
    tag: "Más vendido",
    disponible: true
  
  },
  {
    nombre: "Netflix Premium - MÓVIL",
    precio: "S/16.99 mensual",
    categoria: ["Streaming"],
    logo: "N",
    img: "https://upload.wikimedia.org/wikipedia/commons/f/ff/Netflix-new-icon.png", 
    desc: "Películas y series populares para disfrutar todos los días. Resolución 4K Ultra HD",
    bullets: ["1 dispositivo MÓVIL", "Activación inmediata"],
    accent: "#3b1423",
    
    disponible: true
  
  },

  {
    nombre: "Netflix Premium- PC",
    precio: "S/15.99 mensual",
    categoria: ["Streaming"],
    logo: "N",
    img: "https://upload.wikimedia.org/wikipedia/commons/f/ff/Netflix-new-icon.png", 
    desc: "Películas y series populares para disfrutar todos los días.  Resolución 4K Ultra HD",
    bullets: ["1 dispositivo PC O LAPTOP", "Activación inmediata"],
    accent: "#3b1423",
    
    disponible: true
  
  },

  {
    nombre: "Disney+ Premium",
    precio: "S/11.99 mensual",
    categoria: ["Streaming"],
    logo: "D+",
    img:"https://store-images.s-microsoft.com/image/apps.14187.14495311847124170.7646206e-bd82-4cf0-8b8c-d06a67bc302c.2e474878-acb7-4afb-a503-c2a1a32feaa8",
    desc: "Disney, Marvel, Star Wars y más en excelente calidad.",
    bullets: ["1 dispositivo (TV, MÓVIL O PC)", "Resolución 4K", "Garantía y soporte"],
    accent: "#132e4b",
    disponible: true
  },

  {
    nombre: "Prime Video",
    precio: "S/7.99 mensual",
    categoria: ["Streaming"],
    logo: "PV",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqYuNqOTcadR3ZUX0RSKx7aiNFgfwPUHXSvg&s", 
    desc: "Series, películas y contenido exclusivo con acceso rápido.",
    bullets: ["1 dispositivo (TV, MÓVIL O PC)", "Activación rápida", "Soporte"],
    accent: "#113146",
    
    disponible: true
  },
 
  {
    nombre: "HBO MAX ",
    precio: "S/6.99 mensual",
    categoria: ["Streaming"],
    logo: "MAX",
      img: "https://i.pinimg.com/736x/84/6d/4e/846d4e8c9e4df3ba6c8f292c1bee2117.jpg",
    desc: "Series premium, películas y títulos exclusivos.",
    bullets: ["1 dispositivo (TV, MÓVIL O PC)", "Activación rápida", "Garantía y soporte"],
    accent: "#2e1b55",
    disponible: true
  },
 
  {
    nombre: "Crunchyroll",
    precio: "S/4.99 mensual",
    categoria: ["Anime"],
    logo: "CR",
    img: "https://static.vecteezy.com/system/resources/previews/056/658/335/non_2x/crunchyroll-logo-square-rounded-crunchyroll-logo-crunchyroll-logo-free-download-free-png.png",
    desc: "Anime y series para disfrutar sin complicaciones.",
    bullets: ["1 dispositivo (TV, MÓVIL O PC)", "Garantía y soporte"],
    accent: "#37261d",
    disponible: true
  },
  {
    nombre: "Paramount+ PREMIUM",
    precio: "S/17.99 mensual",
    categoria: ["Streaming", "Mundial 2026"],
    logo: "P+",
    img: "https://static.vecteezy.com/system/resources/thumbnails/056/658/340/small_2x/paramount-logo-square-rounded-paramount-logo-paramount-logo-free-download-free-png.png",
    desc: "104 partidos del Mundial 2026, Películas, series y contenido variado en una sola plataforma.",
    bullets: ["1 dispositivo (TV, MÓVIL O PC)", "Garantía y soporte"],
    accent: "#113047",
    tag: "MUNDIAL 2026",
    disponible: true
  },
  {
    nombre: "Vix Premium",
    precio: "S/4.99 mensual",
    categoria: ["Streaming"],
    logo: "VIX",
    img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIqCW3gbYXWf8E6S05kHVVM4zhG5HHxG32nA&s",
    desc: "Contenido latino y entretenimiento premium.",
    bullets: ["1 dispositivo", "Garantía y soporte"],
    accent: "#2d214f",
    disponible: true
  },
  {
    nombre: "ChatGPT PLUS",
    precio: "S/14.99 mensual",
    categoria: ["Herramientas"],
    logo: "AI",
    img:"https://www.shutterstock.com/image-vector/chatgpt-logo-vector-illustration-chat-600nw-2664020573.jpg",
    desc: "Herramienta útil para estudio, trabajo y productividad.",
    bullets: ["1 dispositivo (TV, MÓVIL O PC)", "Acceso inmediato", "Uso personal"],
    accent: "#123c36",
    disponible: true
  },

  {
    nombre: "GEMINI PRO",
    precio: "S/14.99 mensual",
    categoria: ["Herramientas"],
    logo: "AI",
    img:"https://framerusercontent.com/images/LG6s4Z4XkHXw5FjGTIJZ9EEm7g.png?width=512&height=512",
    desc: "Herramienta útil para estudio, trabajo y productividad.",
    bullets: ["1 dispositivo (TV, MÓVIL O PC)", "Acceso inmediato", "Uso Compartido"],
    accent: "#123c36",
    disponible: true
  },
   {
    nombre: "GEMINI PRO - PERSONAL",
    precio: "S/19.99 mensual",
    categoria: ["Herramientas"],
    logo: "AI",
    img:"https://framerusercontent.com/images/LG6s4Z4XkHXw5FjGTIJZ9EEm7g.png?width=512&height=512",
    desc: "Herramienta útil para estudio, trabajo y productividad.",
    bullets: ["1 dispositivo (TV, MÓVIL O PC)", "Acceso inmediato", "Uso Personal"],
    accent: "#123c36",
    disponible: true
  },

  {
    nombre: "IPTV",
    precio: "S/9.99 mensual",
    categoria: ["IPTV"],
    logo: "TV",
    img:"https://i.pinimg.com/564x/7f/ed/09/7fed09a53d85c6435192217fc80bcae2.jpg",
    desc: "Canales en vivo y variedad de contenido en un solo servicio.",
    bullets: ["📺 +4500 canales en vivo 🎬 +30,000 películas 📺 +2,000 series completas", "Acceso rápido"],
    accent: "#143f39",
    disponible: true
  },

  {
    nombre: "DGO PREMIUM",
    precio: "S/34.99 mensual",
    categoria: ["Mundial 2026"],
    logo: "TV",
    img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_4BifFxFZyifzGaD9wWLQlXb-q1-bdRUVkQ&s",
    desc: "104 PARTIDOS DEL MUNDIAL 2026, más de 100 canales en vivo.",
    bullets: ["Todo el Mundial por DSPORTS", "Todo el Fútbol Peruano", "Copa Sudamericana y Libertadores"],
    accent: "#143f39",
    tag: "MUNDIAL 2026",
    disponible: true
  },

  {
    nombre: "Canva Pro",
    precio: "S/11.99 mensual",
    categoria: ["Herramientas"],
    logo: "C",
    img:"https://cdn.shopify.com/s/files/1/0720/6925/1288/files/canva-edu-pro-subscription.png?v=1758679050",
    desc: "Diseño y herramientas premium activadas en tu propio correo.",
    bullets: ["A tu mismo correo", "Acceso completo"],
    accent: "#123247",
    disponible: true
  },
  {
    nombre: "YouTube Premium",
    precio: "S/7.99 por 1 mes",
    categoria: ["Música"],
    logo: "YT",
    img:"https://static0.howtogeekimages.com/wordpress/wp-content/uploads/sharedimages/2024/11/yt-premium-logo.jpg?q=70&fit=contain&w=420&dpr=1",
    desc: "Disfruta YouTube sin anuncios con activación al correo que se te otorga.",
    bullets: ["Plan individual", "Te otorgamos el correo", "Acceso a YouTube Music"],
    accent: "#3b1423",
    disponible: true
  },
   {
    nombre: "YouTube Premium Personal",
    precio: "S/10.99 por 1 mes",
    categoria: ["Música"],
    logo: "YT",
    img:"https://static0.howtogeekimages.com/wordpress/wp-content/uploads/sharedimages/2024/11/yt-premium-logo.jpg?q=70&fit=contain&w=420&dpr=1",
    desc: "Disfruta YouTube sin anuncios con activación a tu correo personal",
    bullets: ["Plan individual", "Activación a tu correo", "Acceso a YouTube Music"],
    accent: "#3b1423",
    disponible: true
  },
  
  {
    nombre: "Spotify Premium",
    precio: "S/9.99 mensual",
    categoria: ["Música"],
    logo: "SP",
    img:"https://cdn.pixabay.com/photo/2016/10/22/00/15/spotify-1759471_1280.jpg",
    desc: "Música premium con acceso cómodo y uso personal.",
    bullets: ["Entregamos correo y contraseña", "Uso confidencial", "Solo para usted"],
    accent: "#153d34",
    disponible: true
  }
];
const grid = document.getElementById('productsGrid');
const filters = document.getElementById('filters');
const searchInput = document.getElementById('searchInput');
let categoriaActiva = 'Todos';

function whatsappLink(producto = '') {
  const msg = producto
    ? `Hola TEDI👋\n\nEstoy interesado en:\n📦 ${producto.nombre}\n💰 ${producto.precio}\n\n¿Sigue disponible? Quiero comprar hoy.`
    : 'Hola TEDI👋 Estoy interesado en sus servicios digitales. ¿Podrían brindarme información?';
  return `https://api.whatsapp.com/send/?phone=${WHATSAPP}&text=${encodeURIComponent(msg)}`;
}

document.getElementById('floatWhatsapp').href = whatsappLink();
document.getElementById('heroWhatsapp').href = whatsappLink();

function renderFilters(){
  // Definimos categorías con emoji
  const cats = [
    {name: 'Todos', emoji: '📺'},
    {name: 'Mundial 2026', emoji: '🏆'}, // <-- AGREGADO: Nueva categoría para el mundial
    {name: 'Streaming', emoji: '🎬'},
    {name: 'Anime', emoji: '⭐'},
    {name: 'Herramientas', emoji: '🔧'},
    {name: 'IPTV', emoji: '📡'},
    {name: 'Música', emoji: '🎵'}
  ];

  filters.innerHTML = cats.map(cat => `
    <button class="filter-btn ${cat.name === categoriaActiva ? 'active' : ''}" data-cat="${cat.name}">
      ${cat.emoji} ${cat.name}
    </button>
  `).join('');

  document.querySelectorAll('.filter-btn').forEach(btn => btn.addEventListener('click', () => {
    categoriaActiva = btn.dataset.cat;
    renderFilters();
    renderProducts();
  }));
}
function renderProducts(){
  const q = searchInput.value.toLowerCase().trim();

  // 1. MODIFICADO: Ahora usamos .includes() para verificar si la categoría activa está en la lista
  let list = productos.filter(p =>
    (categoriaActiva === 'Todos' || p.categoria.includes(categoriaActiva)) &&
    p.nombre.toLowerCase().includes(q)
  );

  // 2. INTACTO: Se mantiene tu ordenamiento inteligente (los que tienen 'tag' van primero)
  list.sort((a, b) => {
    if (a.tag && !b.tag) return -1;
    if (!a.tag && b.tag) return 1;
    return 0;
  });

  // 3. INTACTO: Renderizado exacto de tus tarjetas premium
  grid.innerHTML = list.map(p => {
    const disponible = p.disponible !== false;
    const statusText = disponible ? "● Disponible" : "● Agotado";

    return `
      <article class="product ${!disponible ? 'agotado' : ''}" style="--accent:${p.accent};">
        ${p.tag ? `<span class="tag">${p.tag}</span>` : ''}

        <span class="status ${disponible ? 'available' : 'soldout'}">
          ${statusText}
        </span>

        <div class="logo">
          ${p.img ? `<img src="${p.img}" alt="${p.nombre}">` : p.logo}
        </div>

        <h3>${p.nombre}</h3>
        <div class="price">${p.precio}</div>
        <p>${p.desc}</p>

        <ul>
          ${p.bullets.map(b => `<li>${b}</li>`).join('')}
        </ul>

        ${
          disponible
            ? `<a class="buy" target="_blank" href="${whatsappLink(p)}">Comprar ahora 🚀</a>`
            : `<a class="buy disabled" href="#" onclick="return false;">Agotado ❌</a>`
        }
      </article>
    `;
  }).join('') || `<p>No se encontraron servicios.</p>`;
}
searchInput.addEventListener('input', renderProducts);
renderFilters();
renderProducts();
