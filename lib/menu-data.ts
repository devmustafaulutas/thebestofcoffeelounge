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
    id: "kampanyalar",
    name: "Kampanyalar",
    slug: "kampanyalar",
    description: "Tatlı ve sıcak içecek eşleşmeleri tek siparişte.",
    image: "/images/categories/campaigns.png",
    itemCount: 2,
    items: [
      {
        id: "tatli-turk-kahvesi-cay-250",
        name: "Tatlı + Türk Kahvesi & Çay",
        description: "Tatlı yanında Türk kahvesi ve çay sunan kampanya seti.",
        price: 250,
        image:
          "https://images.unsplash.com/photo-1515823662972-da6a2e4d3002?auto=format&fit=crop&w=1200&q=80",
        tags: ["Kampanya"],
        isPopular: true,
      },
      {
        id: "tatli-turk-kahvesi-cay-300",
        name: "Tatlı + Türk Kahvesi & Çay (Premium)",
        description:
          "Daha yüksek segment tatlı eşleşmesiyle sunulan kampanya seti.",
        price: 300,
        image:
          "https://images.unsplash.com/photo-1551024506-0bccd828d307?auto=format&fit=crop&w=1200&q=80",
        tags: ["Kampanya", "Premium"],
        isSignature: true,
      },
    ],
  },
  {
    id: "sicak-kahveler",
    name: "Sıcak Kahveler",
    slug: "sicak-kahveler",
    description: "Espresso bazlı klasikler ve yöresel kahve seçenekleri.",
    image: "/images/categories/hot-coffee.jpg",
    itemCount: 17,
    items: [
      {
        id: "americano",
        name: "Americano",
        description: "Espresso bazlı, dengeli ve temiz içimli sıcak kahve.",
        price: 135,
        image:
          "https://images.unsplash.com/photo-1551030173-122aabc4489c?auto=format&fit=crop&w=1200&q=80",
        tags: ["Kahve"],
        isPopular: true,
      },
      {
        id: "latte",
        name: "Latte",
        description: "Yumuşak içimli, bol sütlü klasik latte.",
        price: 150,
        image: "/images/products/latte.jpg",
        tags: ["Kahve"],
        isPopular: true,
      },
      {
        id: "flat-white",
        name: "Flat White",
        description:
          "Yoğun espresso karakterini koruyan ipeksi sütlü kahve.",
        price: 175,
        image:
          "https://images.unsplash.com/photo-1577968897966-3d4325b36b61?auto=format&fit=crop&w=1200&q=80",
        tags: ["Kahve"],
      },
      {
        id: "mocha",
        name: "Mocha",
        description: "Çikolata dokunuşlu, tatlı ve dolgun aromalı kahve.",
        price: 175,
        image:
          "https://images.immediate.co.uk/production/volatile/sites/2/2021/11/Mocha-1fc71f7.png?quality=90&resize=708,643",
        tags: ["Kahve", "Çikolatalı"],
        isPopular: true,
      },
      {
        id: "caramel-macchiato",
        name: "Caramel Macchiato",
        description: "Karamel notalarıyla katmanlı espresso deneyimi.",
        price: 175,
        image: "/images/products/caramel-macchiato.jpg",
        tags: ["Kahve", "Karamel"],
      },
      {
        id: "red-eye",
        name: "Red Eye",
        description: "Filtre kahve ve ekstra shot ile sert içim sevenlere.",
        price: 155,
        image:
          "https://cdn.myikas.com/images/b7b83104-e4da-47d7-9cda-1ff5540c79ce/0c2fa380-39df-41c4-9127-fe25b8a218b9/image_1080.webp",
        tags: ["Kahve", "Yoğun"],
      },
      {
        id: "dead-eye",
        name: "Dead Eye",
        description:
          "Birden fazla shot ile daha yoğun ve yüksek gövdeli kahve.",
        price: 170,
        image:
          "https://images.unsplash.com/photo-1510591509098-f4fdc6d0ff04?auto=format&fit=crop&w=1200&q=80",
        tags: ["Kahve", "Yoğun"],
        isSignature: true,
      },
      {
        id: "filtre-kahve",
        name: "Filtre Kahve",
        description: "Günlük taze demlenen yumuşak içimli filtre kahve.",
        price: 125,
        image:
          "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=1200&q=80",
        tags: ["Kahve"],
      },
      {
        id: "vanilya-latte",
        name: "Vanilya Latte",
        description: "Vanilya aromasıyla daha tatlı ve kremamsı latte.",
        price: 175,
        image:
          "https://images.unsplash.com/photo-1517701604599-bb29b565090c?auto=format&fit=crop&w=1200&q=80",
        tags: ["Kahve", "Vanilya"],
      },
      {
        id: "strawberry-mocha-latte",
        name: "Strawberry Mocha Latte",
        description: "Çilek ve mocha notalarını birleştiren farklı yorum.",
        price: 185,
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYXTZIpLrGCbtXYDn_HepaHpcxoW8sab7-4Q&s",
        tags: ["Kahve", "Çilekli"],
        isSignature: true,
      },
      {
        id: "white-mocha",
        name: "White Mocha",
        description: "Beyaz çikolata dokulu tatlı ve yumuşak kahve.",
        price: 175,
        image:
          "https://images.unsplash.com/photo-1572442388796-11668a67e53d?auto=format&fit=crop&w=1200&q=80",
        tags: ["Kahve", "Beyaz Çikolata"],
      },
      {
        id: "espresso-shot",
        name: "Espresso Shot",
        description: "Tek shot yoğun espresso.",
        price: 100,
        image: "/images/products/espresso.jpg",
        tags: ["Kahve"],
      },
      {
        id: "double-espresso",
        name: "Double Espresso",
        description:
          "Çift shot espresso ile daha sert ve uzun bitişli içim.",
        price: 145,
        image: "/images/products/espresso.jpg",
        tags: ["Kahve"],
        isPopular: true,
      },
      {
        id: "turk-kahvesi",
        name: "Türk Kahvesi",
        description: "Geleneksel sunumlu, yoğun aromalı Türk kahvesi.",
        price: 100,
        image: "/images/products/turkish-coffee.jpg",
        tags: ["Geleneksel", "Kahve"],
        isPopular: true,
      },
      {
        id: "double-turk-kahvesi",
        name: "Double Türk Kahvesi",
        description:
          "Daha güçlü ve daha yoğun içim isteyenlere çift porsiyon.",
        price: 150,
        image: "/images/products/turkish-coffee.jpg",
        tags: ["Geleneksel", "Kahve"],
      },
      {
        id: "dibek",
        name: "Dibek Kahvesi",
        description:
          "Yumuşak içimli, aromatik ve geleneksel dibek kahvesi.",
        price: 120,
        image:
          "https://www.yoreselbakkal.com.tr/idea/jl/78/myassets/products/121/dibek-kahve.png?revision=1770984380",
        tags: ["Geleneksel", "Kahve"],
        isSignature: true,
      },
      {
        id: "cappuccino",
        name: "Cappuccino",
        description:
          "Dengeli süt köpüğüyle servis edilen klasik cappuccino.",
        price: 155,
        image: "/images/products/cappuccino.jpg",
        tags: ["Kahve"],
      },
    ],
  },
  {
    id: "soguk-kahveler",
    name: "Soğuk Kahveler",
    slug: "soguk-kahveler",
    description:
      "Buzlu espresso bazlı ferah kahve seçenekleri ve frappe çeşitleri.",
    image: "/images/categories/cold-coffee.jpg",
    itemCount: 15,
    items: [
      {
        id: "ice-latte",
        name: "Ice Latte",
        description: "Buz, süt ve espresso ile hafif ve ferah içim.",
        price: 155,
        image: "/images/products/ice-latte.jpg",
        tags: ["Kahve"],
        isPopular: true,
      },
      {
        id: "ice-mocha",
        name: "Ice Mocha",
        description:
          "Çikolata ve espresso birleşimiyle serinletici seçenek.",
        price: 185,
        image:
          "https://images.unsplash.com/photo-1638176066666-ffb2f013c7dd?auto=format&fit=crop&w=1200&q=80",
        tags: ["Kahve", "Çikolatalı"],
      },
      {
        id: "ice-americano",
        name: "Ice Americano",
        description:
          "Temiz içimli, buzlu ve sert karakterli americano.",
        price: 145,
        image:
          "https://images.unsplash.com/photo-1592663527359-cf6642f54cff?auto=format&fit=crop&w=1200&q=80",
        tags: ["Kahve"],
        isPopular: true,
      },
      {
        id: "ice-caramel-macchiato",
        name: "Ice Caramel Macchiato",
        description: "Karamel aromasıyla katmanlı buzlu kahve.",
        price: 185,
        image:
          "https://images.unsplash.com/photo-1529474944862-8b53b33e28c9?auto=format&fit=crop&w=1200&q=80",
        tags: ["Kahve", "Karamel"],
      },
      {
        id: "ice-red-eye",
        name: "Ice Red Eye",
        description:
          "Soğuk servis edilen ekstra shot destekli yoğun kahve.",
        price: 165,
        image:
          "https://images.unsplash.com/photo-1517701604599-bb29b565090c?auto=format&fit=crop&w=1200&q=80",
        tags: ["Kahve", "Yoğun"],
      },
      {
        id: "ice-dead-eye",
        name: "Ice Dead Eye",
        description: "Daha sert, daha koyu ve daha yüksek kafein hissi.",
        price: 180,
        image:
          "https://images.unsplash.com/photo-1517701604599-bb29b565090c?auto=format&fit=crop&w=1200&q=80",
        tags: ["Kahve", "Yoğun"],
        isSignature: true,
      },
      {
        id: "ice-filtre-kahve",
        name: "Ice Filtre Kahve",
        description: "Buzla servis edilen filtre kahve alternatifi.",
        price: 135,
        image:
          "https://images.unsplash.com/photo-1517701604599-bb29b565090c?auto=format&fit=crop&w=1200&q=80",
        tags: ["Kahve"],
      },
      {
        id: "ice-vanilya-latte",
        name: "Ice Vanilya Latte",
        description: "Vanilya notalı yumuşak ve ferah latte.",
        price: 185,
        image:
          "https://images.unsplash.com/photo-1541167760496-1628856ab772?auto=format&fit=crop&w=1200&q=80",
        tags: ["Kahve", "Vanilya"],
      },
      {
        id: "ice-strawberry-mocha-latte",
        name: "Ice Strawberry Mocha Latte",
        description:
          "Çilek ve mocha karakterini bir araya getiren buzlu latte.",
        price: 195,
        image:
          "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?auto=format&fit=crop&w=1200&q=80",
        tags: ["Kahve", "Çilekli"],
        isSignature: true,
      },
      {
        id: "ice-white-mocha-latte",
        name: "Ice White Mocha Latte",
        description: "Beyaz çikolatalı buzlu latte.",
        price: 195,
        image:
          "https://images.unsplash.com/photo-1529474944862-8b53b33e28c9?auto=format&fit=crop&w=1200&q=80",
        tags: ["Kahve", "Beyaz Çikolata"],
      },
      {
        id: "ice-hazelnut-latte",
        name: "Ice Hazelnut Latte",
        description: "Fındık aromalı kremamsı buzlu latte.",
        price: 195,
        image:
          "https://images.unsplash.com/photo-1542990253-0d0f5be5f0ed?auto=format&fit=crop&w=1200&q=80",
        tags: ["Kahve", "Fındık"],
        isPopular: true,
      },
      {
        id: "coffee-frappe",
        name: "Coffee Frappe",
        description: "Kahve bazlı köpüklü frappe.",
        price: 240,
        image:
          "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?auto=format&fit=crop&w=1200&q=80",
        tags: ["Kahve", "Frappe"],
      },
      {
        id: "mocha-frappe",
        name: "Mocha Frappe",
        description: "Çikolata notalı soğuk kahve frappe.",
        price: 240,
        image:
          "https://images.unsplash.com/photo-1638176066666-ffb2f013c7dd?auto=format&fit=crop&w=1200&q=80",
        tags: ["Kahve", "Frappe", "Çikolatalı"],
      },
      {
        id: "caramel-frappe",
        name: "Caramel Frappe",
        description: "Karamel aromalı yoğun ve köpüklü frappe.",
        price: 240,
        image:
          "https://images.unsplash.com/photo-1529474944862-8b53b33e28c9?auto=format&fit=crop&w=1200&q=80",
        tags: ["Kahve", "Frappe", "Karamel"],
      },
      {
        id: "white-mocha-frappe",
        name: "White Mocha Frappe",
        description: "Beyaz çikolata bazlı ferah frappe.",
        price: 240,
        image:
          "https://images.unsplash.com/photo-1572442388796-11668a67e53d?auto=format&fit=crop&w=1200&q=80",
        tags: ["Kahve", "Frappe", "Beyaz Çikolata"],
        isSignature: true,
      },
    ],
  },
  {
    id: "sicak-icecekler",
    name: "Sıcak İçecekler",
    slug: "sicak-icecekler",
    description: "Kahve dışı sıcak içecekler ve kış favorileri.",
    image: "/images/categories/hot-drinks.jpg",
    itemCount: 8,
    items: [
      {
        id: "cay",
        name: "Çay",
        description: "Gün boyu tercih edilen klasik demli çay.",
        price: 40,
        image:
          "https://images.unsplash.com/photo-1571934811356-5cc061b6821f?auto=format&fit=crop&w=1200&q=80",
        tags: ["Sıcak İçecek"],
        isPopular: true,
      },
      {
        id: "duble-cay",
        name: "Duble Çay",
        description: "Daha yoğun ve büyük porsiyon çay.",
        price: 60,
        image:
          "https://images.unsplash.com/photo-1556679343-c7306c1976bc?auto=format&fit=crop&w=1200&q=80",
        tags: ["Sıcak İçecek"],
      },
      {
        id: "menengic",
        name: "Menengiç",
        description: "Yöresel aroması belirgin, sütlü menengiç içeceği.",
        price: 120,
        image:
          "https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=1200&q=80",
        tags: ["Geleneksel"],
        isSignature: true,
      },
      {
        id: "caramel-sicak-cikolata",
        name: "Caramel Sıcak Çikolata",
        description: "Karamel dokunuşlu yoğun sıcak çikolata.",
        price: 190,
        image:
          "https://images.unsplash.com/photo-1517578239113-b03992dcdd25?auto=format&fit=crop&w=1200&q=80",
        tags: ["Sıcak İçecek", "Çikolatalı"],
      },
      {
        id: "sicak-cikolata",
        name: "Sıcak Çikolata",
        description: "Yoğun kakao lezzetiyle klasik sıcak çikolata.",
        price: 170,
        image:
          "https://images.unsplash.com/photo-1542990253-0d0f5be5f0ed?auto=format&fit=crop&w=1200&q=80",
        tags: ["Sıcak İçecek", "Çikolatalı"],
        isPopular: true,
      },
      {
        id: "beyaz-sicak-cikolata",
        name: "Beyaz Sıcak Çikolata",
        description:
          "Beyaz çikolata bazlı daha yumuşak içimli seçenek.",
        price: 170,
        image:
          "https://images.unsplash.com/photo-1511920170033-f8396924c348?auto=format&fit=crop&w=1200&q=80",
        tags: ["Sıcak İçecek", "Beyaz Çikolata"],
      },
      {
        id: "salep",
        name: "Salep",
        description: "Tarçınla tamamlanan kışlık klasik salep.",
        price: 170,
        image:
          "https://images.unsplash.com/photo-1544787219-7f47ccb76574?auto=format&fit=crop&w=1200&q=80",
        tags: ["Sıcak İçecek"],
        isPopular: true,
      },
      {
        id: "cilekli-sicak-cikolata",
        name: "Çilekli Sıcak Çikolata",
        description: "Meyvemsi dokunuşlu sıcak çikolata yorumu.",
        price: 190,
        image:
          "https://images.unsplash.com/photo-1517578239113-b03992dcdd25?auto=format&fit=crop&w=1200&q=80",
        tags: ["Sıcak İçecek", "Çikolatalı"],
        isSignature: true,
      },
    ],
  },
  {
    id: "tatlilar",
    name: "Tatlılar",
    slug: "tatlilar",
    description: "Kahve yanına güçlü eşlik eden vitrindeki tatlılar.",
    image: "/images/categories/desserts.jpg",
    itemCount: 8,
    items: [
      {
        id: "magnolia",
        name: "Magnolia",
        description:
          "Krema ve meyve dokusunu bir araya getiren hafif tatlı.",
        price: 300,
        image:
          "https://images.unsplash.com/photo-1488477181946-6428a0291777?auto=format&fit=crop&w=1200&q=80",
        tags: ["Tatlı"],
      },
      {
        id: "tiramisu",
        name: "Tiramisu",
        description: "Kahve aromalı İtalyan klasik tatlı.",
        price: 300,
        image: "/images/products/tiramisu.jpg",
        tags: ["Tatlı"],
        isPopular: true,
      },
      {
        id: "churros",
        name: "Churros",
        description: "Dışı çıtır, içi yumuşak sıcak tatlı.",
        price: 300,
        image:
          "https://images.unsplash.com/photo-1624697821742-3c10e7bb8d8a?auto=format&fit=crop&w=1200&q=80",
        tags: ["Tatlı"],
      },
      {
        id: "profiterol",
        name: "Profiterol",
        description: "Çikolata soslu klasik profiterol.",
        price: 300,
        image:
          "https://images.unsplash.com/photo-1568051243858-533a607809a5?auto=format&fit=crop&w=1200&q=80",
        tags: ["Tatlı"],
      },
      {
        id: "san-sebastian",
        name: "San Sebastian",
        description: "Karamelize üst katmanlı yoğun cheesecake.",
        price: 300,
        image: "/images/products/san-sebastian.jpg",
        tags: ["Tatlı"],
        isPopular: true,
        isSignature: true,
      },
      {
        id: "kalp-pasta",
        name: "Kalp Pasta",
        description: "Özel sunumlu pasta seçeneği.",
        price: 300,
        image:
          "https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=1200&q=80",
        tags: ["Tatlı"],
      },
      {
        id: "fistik-ruyasi",
        name: "Fıstık Rüyası",
        description: "Antep fıstığı karakteri öne çıkan imza tatlı.",
        price: 300,
        image:
          "https://images.unsplash.com/photo-1551024506-0bccd828d307?auto=format&fit=crop&w=1200&q=80",
        tags: ["Tatlı", "Fıstıklı"],
        isSignature: true,
      },
      {
        id: "latte-mono",
        name: "Latte Mono",
        description: "Vitrin tipi özel pasta/tatlı seçeneği.",
        price: 300,
        image:
          "https://images.unsplash.com/photo-1464306076886-da185f6a9d05?auto=format&fit=crop&w=1200&q=80",
        tags: ["Tatlı"],
      },
    ],
  },
  {
    id: "milkshake",
    name: "Milkshake",
    slug: "milkshake",
    description: "Kremsi, yoğun ve tatlı soğuk içecekler.",
    image: "/images/categories/milkshake.jpg",
    itemCount: 5,
    items: [
      {
        id: "frambuaz-milkshake",
        name: "Frambuaz Milkshake",
        description: "Meyvemsi asiditesi belirgin, kremsi milkshake.",
        price: 240,
        image:
          "https://images.unsplash.com/photo-1579954115545-a95591f28bfc?auto=format&fit=crop&w=1200&q=80",
        tags: ["Milkshake"],
      },
      {
        id: "strawberry-milkshake",
        name: "Strawberry Milkshake",
        description: "Çilek aromalı serin ve tatlı milkshake.",
        price: 240,
        image:
          "https://images.unsplash.com/photo-1553361371-9b22f78e8b1d?auto=format&fit=crop&w=1200&q=80",
        tags: ["Milkshake"],
        isPopular: true,
      },
      {
        id: "chocolate-milkshake",
        name: "Chocolate Milkshake",
        description: "Yoğun çikolata lezzetli klasik milkshake.",
        price: 240,
        image:
          "https://images.unsplash.com/photo-1572490122747-3e9197aa8e42?auto=format&fit=crop&w=1200&q=80",
        tags: ["Milkshake"],
        isPopular: true,
      },
      {
        id: "caramel-milkshake",
        name: "Caramel Milkshake",
        description: "Karamel tonlu, dolgun kıvamlı milkshake.",
        price: 240,
        image:
          "https://images.unsplash.com/photo-1579954115545-a95591f28c9?auto=format&fit=crop&w=1200&q=80",
        tags: ["Milkshake"],
      },
      {
        id: "oreo-milkshake",
        name: "Oreo Milkshake",
        description: "Bisküvi dokulu, tatlı ve yoğun milkshake.",
        price: 240,
        image:
          "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=1200&q=80",
        tags: ["Milkshake"],
        isSignature: true,
      },
    ],
  },
  {
    id: "frozen",
    name: "Frozen",
    slug: "frozen",
    description: "Buz kırıklı, meyve bazlı ferah frozen içecekler.",
    image: "/images/categories/frozen.jpg",
    itemCount: 3,
    items: [
      {
        id: "apple-frozen",
        name: "Apple Frozen",
        description: "Elma aromalı buzlu ve ferah frozen.",
        price: 240,
        image:
          "https://images.unsplash.com/photo-1560008581-09826d1de69e?auto=format&fit=crop&w=1200&q=80",
        tags: ["Frozen"],
      },
      {
        id: "strawberry-frozen",
        name: "Strawberry Frozen",
        description: "Çilek aromalı buz kırıklı frozen içecek.",
        price: 240,
        image:
          "https://images.unsplash.com/photo-1497534446932-c925b458314e?auto=format&fit=crop&w=1200&q=80",
        tags: ["Frozen"],
        isPopular: true,
      },
      {
        id: "bogurtlen-frozen",
        name: "Böğürtlen Frozen",
        description: "Yoğun meyve notalı mor renkli frozen.",
        price: 240,
        image:
          "https://images.unsplash.com/photo-1505252585461-04db1eb84625?auto=format&fit=crop&w=1200&q=80",
        tags: ["Frozen"],
      },
    ],
  },
 
  {
    id: "soguk-icecekler",
    name: "Soğuk İçecekler",
    slug: "soguk-icecekler",
    description: "Gazlı, meyveli ve şişe içecek seçenekleri.",
    image: "/images/categories/cold-drinks.jpg",
    itemCount: 16,
    items: [
      {
        id: "su",
        name: "Su",
        description: "Günlük serinleme için klasik şişe su.",
        price: 40,
        image:
          "https://images.unsplash.com/photo-1548839140-29a749e1cf4d?auto=format&fit=crop&w=1200&q=80",
        tags: ["Soğuk İçecek"],
      },
      {
        id: "cam-su",
        name: "Cam Su",
        description: "Cam şişede premium su servisi.",
        price: 50,
        image:
          "https://images.unsplash.com/photo-1519976959117-f9d81f2e0302?auto=format&fit=crop&w=1200&q=80",
        tags: ["Soğuk İçecek"],
      },
      {
        id: "fuse-tea",
        name: "Fuse Tea",
        description: "Şişe soğuk çay seçeneği.",
        price: 100,
        image:
          "https://images.unsplash.com/photo-1556679343-c7306c1976bc?auto=format&fit=crop&w=1200&q=80",
        tags: ["Soğuk İçecek", "Çay"],
      },
      {
        id: "churchill",
        name: "Churchill",
        description:
          "Soda bazlı, ferah ve kafe menülerinde sevilen karışım.",
        price: 120,
        image:
          "https://images.unsplash.com/photo-1541014741259-de529411b96a?auto=format&fit=crop&w=1200&q=80",
        tags: ["Soğuk İçecek"],
        isPopular: true,
      },
      {
        id: "zencefil-gazoz",
        name: "Zencefil Gazoz",
        description: "Zencefil aromalı ferah gazoz.",
        price: 90,
        image:
          "https://images.unsplash.com/photo-1544145945-f90425340c7e?auto=format&fit=crop&w=1200&q=80",
        tags: ["Gazlı"],
      },
      {
        id: "cappy",
        name: "Cappy",
        description: "Meyve suyu alternatifi soğuk içecek.",
        price: 100,
        image:
          "https://images.unsplash.com/photo-1621506289937-a8e4df240d0b?auto=format&fit=crop&w=1200&q=80",
        tags: ["Meyveli"],
      },
      {
        id: "ananas",
        name: "Ananas",
        description: "Ananas aromalı soğuk içecek.",
        price: 90,
        image:
          "https://images.unsplash.com/photo-1553530666-ba11a7da3888?auto=format&fit=crop&w=1200&q=80",
        tags: ["Meyveli"],
      },
      {
        id: "avoya-incir-lavanta",
        name: "Avoya İncir Lavanta",
        description: "Lavanta ve incir notalı özel soğuk içecek.",
        price: 100,
        image:
          "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&w=1200&q=80",
        tags: ["Özel İçecek"],
        isSignature: true,
      },
      {
        id: "sade-soda",
        name: "Sade Soda",
        description: "Klasik sade soda.",
        price: 60,
        image:
          "https://images.unsplash.com/photo-1541014741259-de529411b96a?auto=format&fit=crop&w=1200&q=80",
        tags: ["Gazlı"],
      },
      {
        id: "gazoz",
        name: "Gazoz",
        description: "Klasik gazoz.",
        price: 90,
        image:
          "https://images.unsplash.com/photo-1544145945-f90425340c7e?auto=format&fit=crop&w=1200&q=80",
        tags: ["Gazlı"],
      },
      {
        id: "mandalinali-gazoz",
        name: "Mandalinalı Gazoz",
        description: "Narenciye aromalı gazoz.",
        price: 90,
        image:
          "https://images.unsplash.com/photo-1571689936114-b16146cc6136?auto=format&fit=crop&w=1200&q=80",
        tags: ["Gazlı", "Meyveli"],
      },
      {
        id: "babanas",
        name: "Babanas",
        description: "Meyvemsi aromalı özel soğuk içecek.",
        price: 90,
        image:
          "https://images.unsplash.com/photo-1497534446932-c925b458314e?auto=format&fit=crop&w=1200&q=80",
        tags: ["Meyveli"],
      },
      {
        id: "meyveli-soda",
        name: "Meyveli Soda",
        description: "Hafif aromalı meyveli soda.",
        price: 70,
        image:
          "https://images.unsplash.com/photo-1541014741259-de529411b96a?auto=format&fit=crop&w=1200&q=80",
        tags: ["Gazlı", "Meyveli"],
      },
      {
        id: "cola",
        name: "Cola",
        description: "Klasik kola.",
        price: 100,
        image:
          "https://images.unsplash.com/photo-1561758033-d89a9ad46330?auto=format&fit=crop&w=1200&q=80",
        tags: ["Gazlı"],
        isPopular: true,
      },
      {
        id: "sprite",
        name: "Sprite",
        description: "Limon aromalı gazlı içecek.",
        price: 100,
        image:
          "https://images.unsplash.com/photo-1527960471264-932f39eb5846?auto=format&fit=crop&w=1200&q=80",
        tags: ["Gazlı"],
      },
      {
        id: "fanta",
        name: "Fanta",
        description: "Portakal aromalı gazlı içecek.",
        price: 100,
        image:
          "https://images.unsplash.com/photo-1625772452859-1c03d884dcd7?auto=format&fit=crop&w=1200&q=80",
        tags: ["Gazlı"],
      },
    ],
  },
   {
    id: "yiyecekler",
    name: "Yiyecekler",
    slug: "yiyecekler",
    description:
      "Pilav, tost, atıştırmalık ve hızlı servis ürünleri tek başlıkta.",
    image: "/images/categories/food.jpg",
    itemCount: 16,
    items: [
      {
        id: "tavuklu-pilav-15",
        name: "Tavuklu Pilav 1.5 Porsiyon",
        description: "Daha doyurucu porsiyonda tavuklu pilav.",
        price: 220,
        image:
          "https://images.unsplash.com/photo-1567529692333-de9fd6772897?auto=format&fit=crop&w=1200&q=80",
        tags: ["Pilav"],
      },
      {
        id: "tavuklu-pilav",
        name: "Tavuklu Pilav",
        description: "Klasik tavuklu pilav servisi.",
        price: 160,
        image:
          "https://images.unsplash.com/photo-1567529692333-de9fd6772897?auto=format&fit=crop&w=1200&q=80",
        tags: ["Pilav"],
        isPopular: true,
      },
      {
        id: "soteli-pilav",
        name: "Soteli Pilav",
        description: "Sote lezzetiyle zenginleştirilmiş pilav.",
        price: 190,
        image:
          "https://images.unsplash.com/photo-1536304993881-ff86e0c9c842?auto=format&fit=crop&w=1200&q=80",
        tags: ["Pilav"],
      },
      {
        id: "soteli-pilav-15",
        name: "Soteli Pilav 1.5 Porsiyon",
        description: "Büyük porsiyon soteli pilav.",
        price: 240,
        image:
          "https://images.unsplash.com/photo-1536304993881-ff86e0c9c842?auto=format&fit=crop&w=1200&q=80",
        tags: ["Pilav"],
      },
      {
        id: "cigerli-pilav",
        name: "Ciğerli Pilav",
        description: "Ciğer eşliğinde daha yoğun aromalı pilav.",
        price: 170,
        image:
          "https://images.unsplash.com/photo-1567529692333-de9fd6772897?auto=format&fit=crop&w=1200&q=80",
        tags: ["Pilav"],
        isSignature: true,
      },
      {
        id: "salatali-pilav",
        name: "Salatalı Pilav",
        description: "Daha hafif servis için salata eşlikli pilav.",
        price: 150,
        image:
          "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=1200&q=80",
        tags: ["Pilav"],
      },
      {
        id: "cig-kofte-durum",
        name: "Çiğ Köfte Dürüm",
        description:
          "Pratik servis edilen dürüm formunda çiğ köfte.",
        price: 110,
        image:
          "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=1200&q=80",
        tags: ["Aparatif"],
      },
      {
        id: "doritoslu-cigkofte",
        name: "Doritoslu Çiğ Köfte",
        description:
          "Kıtır dokulu ekstra katmanla servis edilen çiğ köfte.",
        price: 140,
        image:
          "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=1200&q=80",
        tags: ["Aparatif"],
      },
      {
        id: "cigkofte-porsiyon",
        name: "Çiğ Köfte Porsiyon",
        description: "Tabakta servis edilen çiğ köfte porsiyonu.",
        price: 210,
        image:
          "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=1200&q=80",
        tags: ["Aparatif"],
      },
      {
        id: "karisik-tost",
        name: "Karışık Tost",
        description:
          "Sucuk ve kaşar dengesiyle klasik karışık tost.",
        price: 225,
        image:
          "https://images.unsplash.com/photo-1528736235302-52922df5c122?auto=format&fit=crop&w=1200&q=80",
        tags: ["Tost"],
        isPopular: true,
      },
      {
        id: "kasarli-tost",
        name: "Kaşarlı Tost",
        description: "Bol kaşarlı sade ve güvenli tercih.",
        price: 200,
        image:
          "https://images.unsplash.com/photo-1619096252214-ef06c45683e3?auto=format&fit=crop&w=1200&q=80",
        tags: ["Tost"],
      },
      {
        id: "sucuklu-tost",
        name: "Sucuklu Tost",
        description: "Daha yoğun aromalı sucuklu tost.",
        price: 200,
        image:
          "https://images.unsplash.com/photo-1528736235302-52922df5c122?auto=format&fit=crop&w=1200&q=80",
        tags: ["Tost"],
      },
      {
        id: "sosisli",
        name: "Sosisli",
        description: "Patates kızartması eşlikli sıcak sandviç.",
        price: 210,
        image:
          "https://images.unsplash.com/photo-1612392062798-3a8d3d7f8859?auto=format&fit=crop&w=1200&q=80",
        tags: ["Sandviç"],
      },
      {
        id: "patates-tabagi",
        name: "Patates Tabağı",
        description: "Dışı çıtır, içi yumuşak patates kızartması.",
        price: 180,
        image:
          "https://images.unsplash.com/photo-1630384060421-cb20d0e0649d?auto=format&fit=crop&w=1200&q=80",
        tags: ["Atıştırmalık"],
      },
      {
        id: "misir-tabagi",
        name: "Mısır Tabağı",
        description:
          "Sade atıştırmalık olarak servis edilen mısır tabağı.",
        price: 100,
        image:
          "https://images.unsplash.com/photo-1551754655-cd27e38d2076?auto=format&fit=crop&w=1200&q=80",
        tags: ["Atıştırmalık"],
      },
      {
        id: "lux-karisik-cerez-tabagi",
        name: "Lüx Karışık Çerez Tabağı",
        description: "Paylaşımlık sunuma uygun karışık çerez tabağı.",
        price: 150,
        image:
          "https://images.unsplash.com/photo-1505576399279-565b52d4ac71?auto=format&fit=crop&w=1200&q=80",
        tags: ["Atıştırmalık"],
        isSignature: true,
      },
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