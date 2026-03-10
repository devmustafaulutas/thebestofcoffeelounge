export interface MenuItem {
  id: string
  name: string
  description: string
  price: number
  image?: string
  tags?: string[]
  isNew?: boolean
  isPopular?: boolean
  isSignature?: boolean
}

export interface MenuCategory {
  id: string
  name: string
  slug: string
  description: string
  image: string
  itemCount: number
  items: MenuItem[]
}

export const menuCategories: MenuCategory[] = [
  {
    id: "sicak-kahveler",
    name: "Sıcak Kahveler",
    slug: "sicak-kahveler",
    description: "El yapımı özel harmanlarımız",
    image: "/images/categories/hot-coffee.jpg",
    itemCount: 10,
    items: [
      { id: "turk-kahvesi", name: "Türk Kahvesi", description: "Geleneksel yöntemle pişirilen, köpüklü Türk kahvesi", price: 85, image: "/images/products/turkish-coffee.jpg", tags: ["Geleneksel"], isSignature: true },
      { id: "espresso", name: "Espresso", description: "Yoğun aromalı, kremsi single shot espresso", price: 100, image: "/images/products/espresso.jpg" },
      { id: "double-espresso", name: "Double Espresso", description: "Ekstra güçlü, çift shot espresso", price: 140, image: "https://images.unsplash.com/photo-1510591509098-f4fdc6d0ff04?w=600&q=80", isPopular: true },
      { id: "americano", name: "Americano", description: "Espresso ve sıcak su karışımı", price: 135, image: "https://images.unsplash.com/photo-1551030173-122aabc4489c?w=600&q=80" },
      { id: "latte", name: "Caffè Latte", description: "Kremsi sütlü kahve, ipeksi köpükle", price: 150, image: "/images/products/latte.jpg", isPopular: true },
      { id: "cappuccino", name: "Cappuccino", description: "Klasik İtalyan usulü, yoğun köpüklü", price: 155, image: "/images/products/cappuccino.jpg" },
      { id: "flat-white", name: "Flat White", description: "Avustralya usulü, yoğun espresso", price: 175, image: "https://images.unsplash.com/photo-1577968897966-3d4325b36b61?w=600&q=80", isNew: true },
      { id: "mocha", name: "Mocha", description: "Espresso, çikolata ve süt uyumu", price: 175, image: "https://images.unsplash.com/photo-1578314675249-a6910f80cc4e?w=600&q=80" },
      { id: "caramel-macchiato", name: "Caramel Macchiato", description: "Karamel, vanilya, süt ve espresso", price: 175, image: "/images/products/caramel-macchiato.jpg", isPopular: true },
      { id: "white-mocha", name: "White Mocha", description: "Beyaz çikolata ve espresso", price: 185, image: "https://images.unsplash.com/photo-1572442388796-11668a67e53d?w=600&q=80" },
    ],
  },
  {
    id: "soguk-kahveler",
    name: "Soğuk Kahveler",
    slug: "soguk-kahveler",
    description: "Serinleten buzlu lezzetler",
    image: "/images/categories/cold-coffee.jpg",
    itemCount: 7,
    items: [
      { id: "ice-latte", name: "Ice Latte", description: "Buzlu süt ve espresso", price: 155, image: "/images/products/ice-latte.jpg", isPopular: true },
      { id: "ice-americano", name: "Ice Americano", description: "Klasik americano, buz üstünde", price: 145, image: "https://images.unsplash.com/photo-1592663527359-cf6642f54cff?w=600&q=80" },
      { id: "ice-mocha", name: "Ice Mocha", description: "Soğuk çikolatalı kahve keyfi", price: 185, image: "https://images.unsplash.com/photo-1638176066666-ffb2f013c7dd?w=600&q=80" },
      { id: "ice-caramel-macchiato", name: "Ice Caramel Macchiato", description: "Katmanlı buzlu karamelli kahve", price: 185, image: "https://images.unsplash.com/photo-1529474944862-8b53b33e28c9?w=600&q=80", isSignature: true },
      { id: "cold-brew", name: "Cold Brew", description: "12 saat demlenmiş, pürüzsüz", price: 175, image: "/images/products/cold-brew.jpg", isNew: true },
      { id: "frappe", name: "Coffee Frappe", description: "Buzlu, kremsi ve ferahlatıcı", price: 195, image: "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=600&q=80" },
      { id: "hazelnut-latte", name: "Fındık Latte", description: "Fındık aromalı buzlu latte", price: 195, image: "https://images.unsplash.com/photo-1542990253-0d0f5be5f0ed?w=600&q=80", isPopular: true },
    ],
  },
  {
    id: "sicak-icecekler",
    name: "Sıcak İçecekler",
    slug: "sicak-icecekler",
    description: "Isıtan özel tatlar",
    image: "/images/categories/hot-drinks.jpg",
    itemCount: 7,
    items: [
      { id: "cay", name: "Çay", description: "Demli Türk çayı", price: 40, image: "https://images.unsplash.com/photo-1571934811356-5cc061b6821f?w=600&q=80" },
      { id: "double-cay", name: "Double Çay", description: "Ekstra demli çay", price: 60, image: "https://images.unsplash.com/photo-1556679343-c7306c1976bc?w=600&q=80" },
      { id: "salep", name: "Salep", description: "Tarçınlı, kremsi kış klasiği", price: 170, image: "https://images.unsplash.com/photo-1544787219-7f47ccb76574?w=600&q=80", isPopular: true },
      { id: "sicak-cikolata", name: "Sıcak Çikolata", description: "Belçika çikolatası ile", price: 170, image: "https://images.unsplash.com/photo-1542990253-0d0f5be5f0ed?w=600&q=80" },
      { id: "beyaz-sicak-cikolata", name: "Beyaz Sıcak Çikolata", description: "Kremsi beyaz çikolata", price: 170, image: "https://images.unsplash.com/photo-1511920170033-f8396924c348?w=600&q=80" },
      { id: "caramel-sicak-cikolata", name: "Karamelli Sıcak Çikolata", description: "Karamel ve çikolata uyumu", price: 190, image: "https://images.unsplash.com/photo-1517578239113-b03992dcdd25?w=600&q=80", isNew: true },
      { id: "bitki-cayi", name: "Bitki Çayı", description: "Adaçayı, papatya, zencefil-limon", price: 100, image: "https://images.unsplash.com/photo-1576092768241-dec231879fc3?w=600&q=80" },
    ],
  },
  {
    id: "tatlilar",
    name: "Tatlılar",
    slug: "tatlilar",
    description: "El yapımı lezzetler",
    image: "/images/categories/desserts.jpg",
    itemCount: 6,
    items: [
      { id: "san-sebastian", name: "San Sebastian", description: "Bask usulü cheesecake", price: 300, image: "/images/products/san-sebastian.jpg", isSignature: true, isPopular: true },
      { id: "tiramisu", name: "Tiramisu", description: "Klasik İtalyan tiramisu", price: 300, image: "/images/products/tiramisu.jpg" },
      { id: "profiterol", name: "Profiterol", description: "Çikolata soslu profiterol", price: 300, image: "https://images.unsplash.com/photo-1568051243858-533a607809a5?w=600&q=80", isPopular: true },
      { id: "magnolia", name: "Magnolia", description: "Kremalı magnolia puding", price: 280, image: "https://images.unsplash.com/photo-1488477181946-6428a0291777?w=600&q=80" },
      { id: "fistik-ruyasi", name: "Fıstık Rüyası", description: "Antep fıstıklı özel tatlı", price: 320, image: "https://images.unsplash.com/photo-1551024506-0bccd828d307?w=600&q=80", isNew: true },
      { id: "churros", name: "Churros", description: "Çikolata sosuyla sıcak churros", price: 280, image: "https://images.unsplash.com/photo-1624697821742-3c10e7bb8d8a?w=600&q=80" },
    ],
  },
  {
    id: "milkshake",
    name: "Milkshake",
    slug: "milkshake",
    description: "Kremsi soğuk içecekler",
    image: "/images/categories/milkshake.jpg",
    itemCount: 5,
    items: [
      { id: "cikolata-milkshake", name: "Çikolata Milkshake", description: "Yoğun çikolatalı milkshake", price: 240, image: "https://images.unsplash.com/photo-1572490122747-3e9197aa8e42?w=600&q=80", isPopular: true },
      { id: "cilek-milkshake", name: "Çilek Milkshake", description: "Taze çilekli pembe lezzet", price: 240, image: "https://images.unsplash.com/photo-1553361371-9b22f78e8b1d?w=600&q=80" },
      { id: "karamel-milkshake", name: "Karamel Milkshake", description: "Karamel aromalı", price: 240, image: "https://images.unsplash.com/photo-1579954115545-a95591f28bfc?w=600&q=80" },
      { id: "oreo-milkshake", name: "Oreo Milkshake", description: "Oreo bisküvili özel tarif", price: 260, image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=600&q=80", isSignature: true },
      { id: "frambuaz-milkshake", name: "Frambuaz Milkshake", description: "Ekşi-tatlı frambuaz", price: 260, image: "https://images.unsplash.com/photo-1553361371-9b22f78e8b1d?w=600&q=80", isNew: true },
    ],
  },
  {
    id: "frozen",
    name: "Frozen",
    slug: "frozen",
    description: "Buzlu meyveli içecekler",
    image: "/images/categories/frozen.jpg",
    itemCount: 4,
    items: [
      { id: "cilek-frozen", name: "Çilek Frozen", description: "Taze çilek ile buzlu içecek", price: 240, image: "https://images.unsplash.com/photo-1497534446932-c925b458314e?w=600&q=80", isPopular: true },
      { id: "mango-frozen", name: "Mango Frozen", description: "Tropikal mango lezzeti", price: 240, image: "https://images.unsplash.com/photo-1546549032-9571cd6b27df?w=600&q=80" },
      { id: "yesil-elma-frozen", name: "Yeşil Elma Frozen", description: "Ferahlatıcı yeşil elma", price: 240, image: "https://images.unsplash.com/photo-1560008581-09826d1de69e?w=600&q=80" },
      { id: "bogurtlen-frozen", name: "Böğürtlen Frozen", description: "Koyu meyveli yoğun lezzet", price: 260, image: "https://images.unsplash.com/photo-1505252585461-04db1eb84625?w=600&q=80", isNew: true },
    ],
  },
  {
    id: "yiyecekler",
    name: "Yiyecekler",
    slug: "yiyecekler",
    description: "Doyurucu lezzetler",
    image: "/images/categories/food.jpg",
    itemCount: 7,
    items: [
      { id: "tavuklu-pilav", name: "Tavuklu Pilav", description: "Nohutlu pilav üstünde tavuk", price: 160, image: "https://images.unsplash.com/photo-1567529692333-de9fd6772897?w=600&q=80", isPopular: true },
      { id: "tavuklu-pilav-buyuk", name: "Tavuklu Pilav 1.5", description: "Büyük porsiyon", price: 220, image: "https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?w=600&q=80" },
      { id: "soteli-pilav", name: "Soteli Pilav", description: "Sebzeli sote ile pilav", price: 190, image: "https://images.unsplash.com/photo-1536304993881-ff86e0c9c842?w=600&q=80" },
      { id: "karisik-tost", name: "Karışık Tost", description: "Sucuklu kaşarlı tost", price: 225, image: "https://images.unsplash.com/photo-1528736235302-52922df5c122?w=600&q=80", isPopular: true },
      { id: "kasarli-tost", name: "Kaşarlı Tost", description: "Bol kaşarlı sıcak tost", price: 200, image: "https://images.unsplash.com/photo-1619096252214-ef06c45683e3?w=600&q=80" },
      { id: "patates-tabagi", name: "Patates Tabağı", description: "Çıtır patates kızartması", price: 180, image: "https://images.unsplash.com/photo-1630384060421-cb20d0e0649d?w=600&q=80" },
      { id: "cig-kofte-durum", name: "Çiğ Köfte Dürüm", description: "Acılı veya acısız", price: 110, image: "https://images.unsplash.com/photo-1561043433-aaf687c4cf04?w=600&q=80" },
    ],
  },
  {
    id: "soguk-icecekler",
    name: "Soğuk İçecekler",
    slug: "soguk-icecekler",
    description: "Serinleten seçenekler",
    image: "/images/categories/cold-drinks.jpg",
    itemCount: 8,
    items: [
      { id: "su", name: "Su", description: "Doğal kaynak suyu", price: 40, image: "https://images.unsplash.com/photo-1548839140-29a749e1cf4d?w=600&q=80" },
      { id: "cam-su", name: "Cam Su", description: "Premium cam şişe", price: 50, image: "https://images.unsplash.com/photo-1519976959117-f9d81f2e0302?w=600&q=80" },
      { id: "cola", name: "Cola", description: "Klasik kola", price: 100, image: "https://images.unsplash.com/photo-1561758033-d89a9ad46330?w=600&q=80" },
      { id: "fanta", name: "Fanta", description: "Portakallı gazoz", price: 100, image: "https://images.unsplash.com/photo-1625772452859-1c03d884dcd7?w=600&q=80" },
      { id: "sprite", name: "Sprite", description: "Limonlu gazoz", price: 100, image: "https://images.unsplash.com/photo-1527960471264-932f39eb5846?w=600&q=80" },
      { id: "fuse-tea", name: "Fuse Tea", description: "Şeftali veya limon", price: 100, image: "https://images.unsplash.com/photo-1556679343-c7306c1976bc?w=600&q=80" },
      { id: "churchill", name: "Churchill", description: "Premium soda", price: 120, image: "https://images.unsplash.com/photo-1541014741259-de529411b96a?w=600&q=80", isPopular: true },
      { id: "taze-portakal", name: "Taze Portakal Suyu", description: "Günlük taze sıkılmış", price: 150, image: "https://images.unsplash.com/photo-1621506289937-a8e4df240d0b?w=600&q=80", isSignature: true },
    ],
  },
]

export function formatPrice(price: number): string {
  return new Intl.NumberFormat("tr-TR", {
    style: "currency",
    currency: "TRY",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(price)
}
