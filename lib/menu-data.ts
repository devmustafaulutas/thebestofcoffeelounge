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
    image: "/images/categories/campaing.png",
    itemCount: 2,
    items: [
      {
        id: "tatli-turk-kahvesi-cay-250",
        name: "Tatlı + Türk Kahvesi & Çay",
        description: "Tatlı yanında Türk kahvesi ve çay sunan kampanya seti.",
        price: 250,
        image:
          "/images/products/campaign-one.avif",
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
          "/images/products/campaign-one.avif",
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
        id: "americano",
        name: "Americano",
        description: "Espresso bazlı, dengeli ve temiz içimli sıcak kahve.",
        price: 135,
        image:
          "/images/products/americano.avif",
        tags: ["Kahve"],
        isPopular: true,
      },
      {
        id: "filtre-kahve",
        name: "Filtre Kahve",
        description: "Günlük taze demlenen yumuşak içimli filtre kahve.",
        price: 125,
        image:
          "/images/products/filtre-kahve.jpg",
        tags: ["Kahve"],
      },
      {
        id: "toffee-nut",
        name: "Toffee Nut",
        description: "Günlük taze demlenen yumuşak içimli filtre kahve.",
        price: 125,
        image:
          "/images/products/toffee-nut.jpg",
        tags: ["Kahve"],
      },
      {
        id: "red-eye",
        name: "Red Eye",
        description: "Filtre kahve ve ekstra shot ile sert içim sevenlere.",
        price: 155,
        image:
          "/images/products/red-eye.webp",
        tags: ["Kahve", "Yoğun"],
      },
      {
        id: "black-eye",
        name: "Black Eye",
        description: "Filtre kahve ve ekstra shot ile sert içim sevenlere.",
        price: 155,
        image:
          "/images/products/black-eye.jpg",
        tags: ["Kahve", "Yoğun"],
      },
      {
        id: "dead-eye",
        name: "Dead Eye",
        description:
          "Birden fazla shot ile daha yoğun ve yüksek gövdeli kahve.",
        price: 170,
        image:
          "/images/products/dead-eye-coffee.jpeg",
        tags: ["Kahve", "Yoğun"],
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
          "/images/products/flat-white-coffee.avif",
        tags: ["Kahve"],
      },
      {
        id: "vanilya-latte",
        name: "Vanilya Latte",
        description: "Vanilya aromasıyla daha tatlı ve kremamsı latte.",
        price: 175,
        image:
          "/images/products/vanillia-latte-coffe.jpg",
        tags: ["Kahve", "Vanilya"],
      },
      {
        id: "mocha",
        name: "Mocha",
        description: "Çikolata dokunuşlu, tatlı ve dolgun aromalı kahve.",
        price: 175,
        image:
          "/images/products/mocha-coffee.png",
        tags: ["Kahve", "Çikolatalı"],
        isPopular: true,
      },
      {
        id: "white-mocha",
        name: "White Mocha",
        description: "Beyaz çikolata dokulu tatlı ve yumuşak kahve.",
        price: 175,
        image:
          "/images/products/white-mocha-coffee.avif",
        tags: ["Kahve", "Beyaz Çikolata"],
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
        id: "strawberry-mocha-latte",
        name: "Strawberry Mocha Latte",
        description: "Çilek ve mocha notalarını birleştiren farklı yorum.",
        price: 185,
        image:
          "/images/products/strawberry-mocha-latte.jpeg",
        tags: ["Kahve", "Çilekli"],
        isSignature: true,
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
        id: "damla-sakizli-turk-kahvesi",
        name: "Damla Sakızlı Türk Kahvesi",
        description:
          "Damla sakızı ile beraber geleneksel türk kahvesi.",
        price: 150,
        image: "/images/products/damla-sakizli-turk-kahvesi.jpeg",
        tags: ["Geleneksel", "Kahve"],
      },
      {
        id: "dibek",
        name: "Dibek Kahvesi",
        description:
          "Yumuşak içimli, aromatik ve geleneksel dibek kahvesi.",
        price: 120,
        image:
          "/images/products/dibek-coffee.png",
        tags: ["Geleneksel", "Kahve"],
        isSignature: true,
      },
      {
        id: "menengic",
        name: "Menengiç",
        description: "Yöresel aroması belirgin, sütlü menengiç içeceği.",
        price: 120,
        image:
          "/images/products/menengic-kahvesi.jpg",
        tags: ["Geleneksel", "Kahve"],
        isPopular: true,
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
        id: "ice-americano",
        name: "Ice Americano",
        description:
          "Temiz içimli, buzlu ve sert karakterli americano.",
        price: 145,
        image:
          "/images/products/ice-americano.webp",
        tags: ["Kahve"],
        isPopular: true,
      },
      {
        id: "ice-filtre-kahve",
        name: "Ice Filtre Kahve",
        description: "Buzla servis edilen filtre kahve alternatifi.",
        price: 135,
        image:
          "/images/products/ice-filter-coffee.jpg",
        tags: ["Kahve"],
      },
      {
        id: "ice-red-eye",
        name: "Ice Red Eye",
        description:
          "Soğuk servis edilen ekstra shot destekli yoğun kahve.",
        price: 165,
        image:
          "/images/products/ice-red-eye.jpg",
        tags: ["Kahve", "Yoğun"],
      },
      {
        id: "ice-black-eye",
        name: "Ice Black Eye",
        description:
          "Soğuk servis edilen ekstra shot destekli yoğun kahve.",
        price: 165,
        image:
          "/images/products/ice-black-eye.jpg",
        tags: ["Kahve", "Yoğun"],
      },
      {
        id: "ice-dead-eye",
        name: "Ice Dead Eye",
        description: "Daha sert, daha koyu ve daha yüksek kafein hissi.",
        price: 180,
        image:
          "/images/products/ice-dead-eye.webp",
        tags: ["Kahve", "Yoğun"],
        isSignature: true,
      },
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
          "/images/products/ice-mocha.avif",
        tags: ["Kahve", "Çikolatalı"],
      },
      {
        id: "ice-caramel-macchiato",
        name: "Ice Caramel Macchiato",
        description: "Karamel aromasıyla katmanlı buzlu kahve.",
        price: 185,
        image:
          "/images/products/ice-caramel-machiato.jpg",
        tags: ["Kahve", "Karamel"],
      },
      {
        id: "ice-vanilya-latte",
        name: "Ice Vanilya Latte",
        description: "Vanilya notalı yumuşak ve ferah latte.",
        price: 185,
        image:
          "/images/products/ice-vanillia-latte.webp",
        tags: ["Kahve", "Vanilya"],
      },
      {
        id: "ice-hazelnut-latte",
        name: "Ice Hazelnut Latte",
        description: "Fındık aromalı kremamsı buzlu latte.",
        price: 195,
        image:
          "/images/products/ice-hazelnut-coffee.jpg",
        tags: ["Kahve", "Fındık"],
        isPopular: true,
      },
      {
        id: "ice-white-mocha-latte",
        name: "Ice White Mocha Latte",
        description: "Beyaz çikolatalı buzlu latte.",
        price: 195,
        image:
          "/images/products/ice-white-chochlate-latte.png",
        tags: ["Kahve", "Beyaz Çikolata"],
      },
      {
        id: "ice-strawberry-mocha-latte",
        name: "Ice Strawberry Mocha Latte",
        description:
          "Çilek ve mocha karakterini bir araya getiren buzlu latte.",
        price: 195,
        image:
          "/images/products/ice-strawberry-mocha-latte.webp",
        tags: ["Kahve", "Çilekli"],
        isSignature: true,
      },
      {
        id: "coffee-frappe",
        name: "Coffee Frappe",
        description: "Kahve bazlı köpüklü frappe.",
        price: 240,
        image:
          "/images/products/coffee-frappe.jpg",
        tags: ["Kahve", "Frappe"],
      },
      {
        id: "mocha-frappe",
        name: "Mocha Frappe",
        description: "Çikolata notalı soğuk kahve frappe.",
        price: 240,
        image:
          "/images/products/ice-mocha-frappe.jpg",
        tags: ["Kahve", "Frappe", "Çikolatalı"],
      },
      {
        id: "caramel-frappe",
        name: "Caramel Frappe",
        description: "Karamel aromalı yoğun ve köpüklü frappe.",
        price: 240,
        image:
          "/images/products/caramel-frappe.jpg",
        tags: ["Kahve", "Frappe", "Karamel"],
      },
      {
        id: "white-mocha-frappe",
        name: "White Mocha Frappe",
        description: "Beyaz çikolata bazlı ferah frappe.",
        price: 240,
        image:
          "/images/products/white-mocha-frappe.webp",
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
          "/images/products/cay.jpeg",
        tags: ["Sıcak İçecek"],
        isPopular: true,
      },
      {
        id: "duble-cay",
        name: "Duble Çay",
        description: "Daha yoğun ve büyük porsiyon çay.",
        price: 60,
        image:
          "/images/products/cay.jpeg",
        tags: ["Sıcak İçecek"],
      },
      {
        id: "salep",
        name: "Salep",
        description: "Tarçınla tamamlanan kışlık klasik salep.",
        price: 170,
        image:
          "/images/products/salep.jpg",
        tags: ["Sıcak İçecek"],
        isPopular: true,
      },
      {
        id: "sicak-cikolata",
        name: "Sıcak Çikolata",
        description: "Yoğun kakao lezzetiyle klasik sıcak çikolata.",
        price: 170,
        image:
          "/images/products/hot-chochlate.avif",
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
          "/images/products/white-choclate.jpg",
        tags: ["Sıcak İçecek", "Beyaz Çikolata"],
      },
      {
        id: "caramel-sicak-cikolata",
        name: "Caramel Sıcak Çikolata",
        description: "Karamel dokunuşlu yoğun sıcak çikolata.",
        price: 190,
        image:
          "/images/products/caramel-hot-chochlate.avif",
        tags: ["Sıcak İçecek", "Çikolatalı"],
      },
      {
        id: "cilekli-sicak-cikolata",
        name: "Çilekli Sıcak Çikolata",
        description: "Meyvemsi dokunuşlu sıcak çikolata yorumu.",
        price: 190,
        image:
          "/images/products/strawberry-hot-chochlate.jpg",
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
        id: "tiramisu",
        name: "Tiramisu",
        description: "Kahve aromalı İtalyan klasik tatlı.",
        price: 300,
        image: "/images/products/tiramisu.jpg",
        tags: ["Tatlı"],
        isPopular: true,
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
        id: "magnolia",
        name: "Magnolia",
        description:
          "Krema ve meyve dokusunu bir araya getiren hafif tatlı.",
        price: 300,
        image:
          "/images/products/magnolia.avif",
        tags: ["Tatlı"],
      },
      {
        id: "profiterol",
        name: "Profiterol",
        description: "Çikolata soslu klasik profiterol.",
        price: 300,
        image:
          "/images/products/profiterol.webp",
        tags: ["Tatlı"],
      },
      {
        id: "churros",
        name: "Churros",
        description: "Dışı çıtır, içi yumuşak sıcak tatlı.",
        price: 300,
        image:
          "/images/products/churros.jpg",
        tags: ["Tatlı"],
      },
      {
        id: "latte-mono",
        name: "Latte Mono",
        description: "Vitrin tipi özel pasta/tatlı seçeneği.",
        price: 300,
        image:
          "/images/products/latte-mono.png",
        tags: ["Tatlı"],
      },
      {
        id: "fistik-ruyasi",
        name: "Fıstık Rüyası",
        description: "Antep fıstığı karakteri öne çıkan imza tatlı.",
        price: 300,
        image:
          "/images/products/fistik-ruyasi.jpg",
        tags: ["Tatlı", "Fıstıklı"],
        isSignature: true,
      },
      {
        id: "kalp-pasta",
        name: "Kalp Pasta",
        description: "Özel sunumlu pasta seçeneği.",
        price: 300,
        image:
          "/images/products/kalpli-pasta.jpeg",
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
        id: "chocolate-milkshake",
        name: "Chocolate Milkshake",
        description: "Yoğun çikolata lezzetli klasik milkshake.",
        price: 240,
        image:
          "/images/products/chochlate-milkshake.jpeg",
        tags: ["Milkshake"],
        isPopular: true,
      },
      {
        id: "strawberry-milkshake",
        name: "Strawberry Milkshake",
        description: "Çilek aromalı serin ve tatlı milkshake.",
        price: 240,
        image:
          "/images/products/strawberry-milkshake.jpg",
        tags: ["Milkshake"],
        isPopular: true,
      },
      {
        id: "caramel-milkshake",
        name: "Caramel Milkshake",
        description: "Karamel tonlu, dolgun kıvamlı milkshake.",
        price: 240,
        image:
          "/images/products/caramel-milkshake.jpg",
        tags: ["Milkshake"],
      },
      {
        id: "frambuaz-milkshake",
        name: "Frambuaz Milkshake",
        description: "Meyvemsi asiditesi belirgin, kremsi milkshake.",
        price: 240,
        image:
          "/images/products/strawberry-milkshake.avif",
        tags: ["Milkshake"],
      },
      {
        id: "oreo-milkshake",
        name: "Oreo Milkshake",
        description: "Bisküvi dokulu, tatlı ve yoğun milkshake.",
        price: 240,
        image:
          "/images/products/oreo-milkshake.jpeg",
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
    itemCount: 8,
    items: [
      {
        id: "apple-frozen",
        name: "Apple Frozen",
        description: "Elma aromalı buzlu ve ferah frozen.",
        price: 240,
        image:
          "/images/products/apple-frozen.jpeg",
        tags: ["Frozen"],
      },
      {
        id: "strawberry-frozen",
        name: "Strawberry Frozen",
        description: "Çilek aromalı buz kırıklı frozen içecek.",
        price: 240,
        image:
          "/images/products/strawberry-frozen.jpg",
        tags: ["Frozen"],
        isPopular: true,
      },
      {
        id: "watermelon-frozen",
        name: "Karpuzlu Frozen",
        description: "Karpuz aromalı, hafif ve ferah frozen içecek.",
        price: 240,
        image:
          "/images/products/watermelon-frozen.jpg",
        tags: ["Frozen"],
      },
      {
        id: "pineapple-frozen",
        name: "Ananas Frozen",
        description: "Ananas aromalı tropikal ve serinletici frozen.",
        price: 240,
        image:
          "/images/products/pineapple-frozen.avif",
        tags: ["Frozen"],
      },
      {
        id: "mango-frozen",
        name: "Mango Frozen",
        description: "Yoğun mango karakterli, tropikal frozen içecek.",
        price: 240,
        image:
          "/images/products/mango-frozen.jpg",
        tags: ["Frozen"],
      },
      {
        id: "passion-fruit-frozen",
        name: "Çarkıfelek Frozen",
        description: "Çarkıfelek meyveli, canlı aromalı frozen içecek.",
        price: 240,
        image:
          "/images/products/passion-fruit-forzen.jpeg",
        tags: ["Frozen"],
      },
      {
        id: "orman-meyveli-frozen",
        name: "Orman Meyveli Frozen",
        description: "Karışık kırmızı meyve notalarıyla ferah frozen.",
        price: 240,
        image:
          "/images/products/jungle-juice-frozen.avif",
        tags: ["Frozen"],
      },
      {
        id: "bogurtlen-frozen",
        name: "Böğürtlen Frozen",
        description: "Yoğun meyve notalı mor renkli frozen.",
        price: 240,
        image:
          "/images/products/strawberry-frozen.jpg",
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
          "/images/products/water.avif",
        tags: ["Soğuk İçecek"],
      },
      {
        id: "cam-su",
        name: "Cam Su",
        description: "Cam şişede premium su servisi.",
        price: 50,
        image:
          "/images/products/damla-water.jpg",
        tags: ["Soğuk İçecek"],
      },
      {
        id: "sade-soda",
        name: "Sade Soda",
        description: "Klasik sade soda.",
        price: 60,
        image:
          "/images/products/beypazari.jpg",
        tags: ["Gazlı"],
      },
      {
        id: "meyveli-soda",
        name: "Meyveli Soda",
        description: "Hafif aromalı meyveli soda.",
        price: 70,
        image:
          "/images/products/frutti.jpg",
        tags: ["Gazlı", "Meyveli"],
      },
      {
        id: "churchill",
        name: "Churchill",
        description:
          "Soda bazlı, ferah ve kafe menülerinde sevilen karışım.",
        price: 120,
        image:
          "/images/products/churchill.jpg",
        tags: ["Soğuk İçecek"],
        isPopular: true,
      },
      {
        id: "gazoz",
        name: "Gazoz",
        description: "Klasik gazoz.",
        price: 90,
        image:
          "/images/products/nigde-gazoz.jpeg",
        tags: ["Gazlı"],
      },
      {
        id: "zencefil-gazoz",
        name: "Zencefil Gazoz",
        description: "Zencefil aromalı ferah gazoz.",
        price: 90,
        image:
          "/images/products/beyoglu-zencefil-aromali-gazoz.jpg",
        tags: ["Gazlı"],
      },
      {
        id: "mandalinali-gazoz",
        name: "Mandalinalı Gazoz",
        description: "Narenciye aromalı gazoz.",
        price: 90,
        image:
          "/images/products/frutti.avif",
        tags: ["Gazlı", "Meyveli"],
      },
      {
        id: "cola",
        name: "Cola",
        description: "Klasik kola.",
        price: 100,
        image:
          "/images/products/coca-cola.webp",
        tags: ["Gazlı"],
        isPopular: true,
      },
      {
        id: "fanta",
        name: "Fanta",
        description: "Portakal aromalı gazlı içecek.",
        price: 100,
        image:
          "/images/products/fanta.jpeg",
        tags: ["Gazlı"],
      },
      {
        id: "sprite",
        name: "Sprite",
        description: "Limon aromalı gazlı içecek.",
        price: 100,
        image:
          "/images/products/sprite.png",
        tags: ["Gazlı"],
      },
      {
        id: "fuse-tea",
        name: "Fuse Tea",
        description: "Şişe soğuk çay seçeneği.",
        price: 100,
        image:
          "/images/products/fuse-tea.jpeg",
        tags: ["Soğuk İçecek", "Çay"],
      },
      {
        id: "italian-soda",
        name: "Italian Soda",
        description:
          "Turunç veya çilek opsiyonlu, ferah ve gazlı özel soğuk içecek.",
        price: 180,
        image:
          "/images/products/italian-soda.avif",
        tags: ["Soğuk İçecek", "Gazlı", "Meyveli"],
      },
      {
        id: "cappy",
        name: "Cappy",
        description: "Meyve suyu alternatifi soğuk içecek.",
        price: 100,
        image:
          "/images/products/cappy.jpg",
        tags: ["Meyveli"],
      },
      {
        id: "ananas",
        name: "Ananas",
        description: "Ananas aromalı soğuk içecek.",
        price: 90,
        image:
          "/images/products/pineapple.webp",
        tags: ["Meyveli"],
      },
      {
        id: "babanas",
        name: "Babanas",
        description: "Meyvemsi aromalı özel soğuk içecek.",
        price: 90,
        image:
          "/images/products/babanas.jpg",
        tags: ["Meyveli"],
      },
      {
        id: "avoya-incir-lavanta",
        name: "Avoya İncir Lavanta",
        description: "Lavanta ve incir notalı özel soğuk içecek.",
        price: 100,
        image:
          "/images/products/avoya.jpeg",
        tags: ["Özel İçecek"],
        isSignature: true,
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
        id: "tavuklu-pilav",
        name: "Tavuklu Pilav",
        description: "Klasik tavuklu pilav servisi.",
        price: 160,
        image:
          "/images/products/tavuk-pilav.png",
        tags: ["Pilav"],
        isPopular: true,
      },
      {
        id: "tavuklu-pilav-15",
        name: "Tavuklu Pilav 1.5 Porsiyon",
        description: "Daha doyurucu porsiyonda tavuklu pilav.",
        price: 220,
        image:
          "/images/products/tavuk-pilav.png",
        tags: ["Pilav"],
      },
      {
        id: "soteli-pilav",
        name: "Soteli Pilav",
        description: "Sote lezzetiyle zenginleştirilmiş pilav.",
        price: 190,
        image:
          "/images/products/tavuk-sote-pilav.jpg",
        tags: ["Pilav"],
      },
      {
        id: "soteli-pilav-15",
        name: "Soteli Pilav 1.5 Porsiyon",
        description: "Büyük porsiyon soteli pilav.",
        price: 240,
        image:
          "/images/products/tavuk-sote-pilav.jpg",
        tags: ["Pilav"],
      },
      {
        id: "cigerli-pilav",
        name: "Ciğerli Pilav",
        description: "Ciğer eşliğinde daha yoğun aromalı pilav.",
        price: 170,
        image:
          "/images/products/ciger-pilav.jpg",
        tags: ["Pilav"],
        isSignature: true,
      },
      {
        id: "salatali-pilav",
        name: "Salatalı Pilav",
        description: "Daha hafif servis için salata eşlikli pilav.",
        price: 150,
        image:
          "/images/products/pilav-salatasi.webp",
        tags: ["Pilav"],
      },
      {
        id: "cig-kofte-durum",
        name: "Çiğ Köfte Dürüm",
        description:
          "Pratik servis edilen dürüm formunda çiğ köfte.",
        price: 110,
        image:
          "/images/products/cig-kofte-durum.jpeg",
        tags: ["Aparatif"],
      },
      {
        id: "doritoslu-cigkofte",
        name: "Doritoslu Çiğ Köfte",
        description:
          "Kıtır dokulu ekstra katmanla servis edilen çiğ köfte.",
        price: 140,
        image:
          "/images/products/doritoslu-cig-kofte-durum.jpg",
        tags: ["Aparatif"],
      },
      {
        id: "cigkofte-porsiyon",
        name: "Çiğ Köfte Porsiyon",
        description: "Tabakta servis edilen çiğ köfte porsiyonu.",
        price: 210,
        image:
          "/images/products/cig-kofte-porsiyon.jpg",
        tags: ["Aparatif"],
      },
      {
        id: "kasarli-tost",
        name: "Kaşarlı Tost",
        description: "Bol kaşarlı sade ve güvenli tercih.",
        price: 200,
        image:
          "/images/products/kasarli-tost.webp",
        tags: ["Tost"],
      },
      {
        id: "sucuklu-tost",
        name: "Sucuklu Tost",
        description: "Daha yoğun aromalı sucuklu tost.",
        price: 200,
        image:
          "/images/products/sucuklu-tost.avif",
        tags: ["Tost"],
      },
      {
        id: "karisik-tost",
        name: "Karışık Tost",
        description:
          "Sucuk ve kaşar dengesiyle klasik karışık tost.",
        price: 225,
        image:
          "/images/products/karisik-tost.jpg",
        tags: ["Tost"],
        isPopular: true,
      },
      {
        id: "sosisli",
        name: "Sosisli",
        description: "Patates kızartması eşlikli sıcak sandviç.",
        price: 210,
        image:
          "/images/products/sosisli.jpg",
        tags: ["Sandviç"],
      },
      {
        id: "patates-tabagi",
        name: "Patates Tabağı",
        description: "Dışı çıtır, içi yumuşak patates kızartması.",
        price: 180,
        image:
          "/images/products/patates-tabagi.png",
        tags: ["Atıştırmalık"],
      },
      {
        id: "misir-tabagi",
        name: "Mısır Tabağı",
        description:
          "Sade atıştırmalık olarak servis edilen mısır tabağı.",
        price: 100,
        image:
          "/images/products/popcorn.jpg",
        tags: ["Atıştırmalık"],
      },
      {
        id: "lux-karisik-cerez-tabagi",
        name: "Lüx Karışık Çerez Tabağı",
        description: "Paylaşımlık sunuma uygun karışık çerez tabağı.",
        price: 150,
        image:
          "/images/products/cerez-tabagi.jpeg",
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