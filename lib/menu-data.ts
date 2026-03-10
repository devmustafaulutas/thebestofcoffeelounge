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
    name: "Sicak Kahveler",
    slug: "sicak-kahveler",
    description: "El yapimi ozel harmanlarimiz",
    image: "/images/categories/hot-coffee.jpg",
    itemCount: 10,
    items: [
      {
        id: "turk-kahvesi",
        name: "Turk Kahvesi",
        description: "Geleneksel yontemle pisirilen, kopuklu Turk kahvesi",
        price: 85,
        image: "/images/products/turkish-coffee.jpg",
        tags: ["Geleneksel"],
        isSignature: true,
      },
      {
        id: "espresso",
        name: "Espresso",
        description: "Yogun aromali, kremsi single shot espresso",
        price: 100,
        image: "/images/products/espresso.jpg",
      },
      {
        id: "double-espresso",
        name: "Double Espresso",
        description: "Ekstra guclu, cift shot espresso",
        price: 140,
        image: "/images/products/espresso.jpg",
        isPopular: true,
      },
      {
        id: "americano",
        name: "Americano",
        description: "Espresso ve sicak su karisimi",
        price: 135,
        image: "/images/products/espresso.jpg",
      },
      {
        id: "latte",
        name: "Caffe Latte",
        description: "Kremsi sutlu kahve, ipeksi kopukle",
        price: 150,
        image: "/images/products/latte.jpg",
        isPopular: true,
      },
      {
        id: "cappuccino",
        name: "Cappuccino",
        description: "Klasik Italyan usulu, yogun kopuklu",
        price: 155,
        image: "/images/products/cappuccino.jpg",
      },
      {
        id: "flat-white",
        name: "Flat White",
        description: "Avustralya usulu, yogun espresso",
        price: 175,
        image: "/images/products/latte.jpg",
        isNew: true,
      },
      {
        id: "mocha",
        name: "Mocha",
        description: "Espresso, cikolata ve sut uyumu",
        price: 175,
        image: "/images/products/latte.jpg",
      },
      {
        id: "caramel-macchiato",
        name: "Caramel Macchiato",
        description: "Karamel, vanilya, sut ve espresso",
        price: 175,
        image: "/images/products/latte.jpg",
        isPopular: true,
      },
      {
        id: "white-mocha",
        name: "White Mocha",
        description: "Beyaz cikolata ve espresso",
        price: 185,
        image: "/images/products/latte.jpg",
      },
    ],
  },
  {
    id: "soguk-kahveler",
    name: "Soguk Kahveler",
    slug: "soguk-kahveler",
    description: "Serinleten buzlu lezzetler",
    image: "/images/categories/cold-coffee.jpg",
    itemCount: 7,
    items: [
      {
        id: "ice-latte",
        name: "Ice Latte",
        description: "Buzlu sut ve espresso",
        price: 155,
        image: "/images/products/ice-latte.jpg",
        isPopular: true,
      },
      {
        id: "ice-americano",
        name: "Ice Americano",
        description: "Klasik americano, buz ustunde",
        price: 145,
        image: "/images/products/ice-latte.jpg",
      },
      {
        id: "ice-mocha",
        name: "Ice Mocha",
        description: "Soguk cikolatali kahve keyfi",
        price: 185,
        image: "/images/products/ice-latte.jpg",
      },
      {
        id: "ice-caramel-macchiato",
        name: "Ice Caramel Macchiato",
        description: "Katmanli buzlu karamelli kahve",
        price: 185,
        image: "/images/products/ice-latte.jpg",
        isSignature: true,
      },
      {
        id: "cold-brew",
        name: "Cold Brew",
        description: "12 saat demlenmis, puruzsuz",
        price: 175,
        image: "/images/products/cold-brew.jpg",
        isNew: true,
      },
      {
        id: "frappe",
        name: "Coffee Frappe",
        description: "Buzlu, kremsi ve ferahlatici",
        price: 195,
        image: "/images/products/ice-latte.jpg",
      },
      {
        id: "hazelnut-latte",
        name: "Findik Latte",
        description: "Findik aromali buzlu latte",
        price: 195,
        image: "/images/products/ice-latte.jpg",
        isPopular: true,
      },
    ],
  },
  {
    id: "sicak-icecekler",
    name: "Sicak Icecekler",
    slug: "sicak-icecekler",
    description: "Isitan ozel tatlar",
    image: "/images/categories/hot-drinks.jpg",
    itemCount: 7,
    items: [
      {
        id: "cay",
        name: "Cay",
        description: "Demli Turk cayi",
        price: 40,
      },
      {
        id: "double-cay",
        name: "Double Cay",
        description: "Ekstra demli cay",
        price: 60,
      },
      {
        id: "salep",
        name: "Salep",
        description: "Tarcinli, kremsi kis klasigi",
        price: 170,
        isPopular: true,
      },
      {
        id: "sicak-cikolata",
        name: "Sicak Cikolata",
        description: "Belcika cikolatasi ile",
        price: 170,
      },
      {
        id: "beyaz-sicak-cikolata",
        name: "Beyaz Sicak Cikolata",
        description: "Kremsi beyaz cikolata",
        price: 170,
      },
      {
        id: "caramel-sicak-cikolata",
        name: "Karamelli Sicak Cikolata",
        description: "Karamel ve cikolata uyumu",
        price: 190,
        isNew: true,
      },
      {
        id: "bitki-cayi",
        name: "Bitki Cayi",
        description: "Adacayi, papatya, zencefil-limon",
        price: 100,
      },
    ],
  },
  {
    id: "tatlilar",
    name: "Tatlilar",
    slug: "tatlilar",
    description: "El yapimi lezzetler",
    image: "/images/categories/desserts.jpg",
    itemCount: 6,
    items: [
      {
        id: "san-sebastian",
        name: "San Sebastian",
        description: "Bask usulu cheesecake",
        price: 300,
        image: "/images/products/san-sebastian.jpg",
        isSignature: true,
        isPopular: true,
      },
      {
        id: "tiramisu",
        name: "Tiramisu",
        description: "Klasik Italyan tiramisu",
        price: 300,
        image: "/images/products/tiramisu.jpg",
      },
      {
        id: "profiterol",
        name: "Profiterol",
        description: "Cikolata soslu profiterol",
        price: 300,
        image: "/images/products/tiramisu.jpg",
        isPopular: true,
      },
      {
        id: "magnolia",
        name: "Magnolia",
        description: "Kremali magnolia puding",
        price: 280,
        image: "/images/products/tiramisu.jpg",
      },
      {
        id: "fistik-ruyasi",
        name: "Fistik Ruyasi",
        description: "Antep fistikli ozel tatli",
        price: 320,
        image: "/images/products/tiramisu.jpg",
        isNew: true,
      },
      {
        id: "churros",
        name: "Churros",
        description: "Cikolata sosuyla sicak churros",
        price: 280,
        image: "/images/products/tiramisu.jpg",
      },
    ],
  },
  {
    id: "milkshake",
    name: "Milkshake",
    slug: "milkshake",
    description: "Kremsi soguk icecekler",
    image: "/images/categories/milkshake.jpg",
    itemCount: 5,
    items: [
      {
        id: "cikolata-milkshake",
        name: "Cikolata Milkshake",
        description: "Yogun cikolatali milkshake",
        price: 240,
        isPopular: true,
      },
      {
        id: "cilek-milkshake",
        name: "Cilek Milkshake",
        description: "Taze cilekli pembe lezzet",
        price: 240,
      },
      {
        id: "karamel-milkshake",
        name: "Karamel Milkshake",
        description: "Karamel aromali",
        price: 240,
      },
      {
        id: "oreo-milkshake",
        name: "Oreo Milkshake",
        description: "Oreo biskuvili ozel tarif",
        price: 260,
        isSignature: true,
      },
      {
        id: "frambuaz-milkshake",
        name: "Frambuaz Milkshake",
        description: "Eksi-tatli frambuaz",
        price: 260,
        isNew: true,
      },
    ],
  },
  {
    id: "frozen",
    name: "Frozen",
    slug: "frozen",
    description: "Buzlu meyveli icecekler",
    image: "/images/categories/frozen.jpg",
    itemCount: 4,
    items: [
      {
        id: "cilek-frozen",
        name: "Cilek Frozen",
        description: "Taze cilek ile buzlu icecek",
        price: 240,
        isPopular: true,
      },
      {
        id: "mango-frozen",
        name: "Mango Frozen",
        description: "Tropikal mango lezzeti",
        price: 240,
      },
      {
        id: "yesil-elma-frozen",
        name: "Yesil Elma Frozen",
        description: "Ferahlatici yesil elma",
        price: 240,
      },
      {
        id: "bogurtlen-frozen",
        name: "Bogurtlen Frozen",
        description: "Koyu meyveli yogun lezzet",
        price: 260,
        isNew: true,
      },
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
      {
        id: "tavuklu-pilav",
        name: "Tavuklu Pilav",
        description: "Nohutlu pilav ustunde tavuk",
        price: 160,
        isPopular: true,
      },
      {
        id: "tavuklu-pilav-buyuk",
        name: "Tavuklu Pilav 1.5",
        description: "Buyuk porsiyon",
        price: 220,
      },
      {
        id: "soteli-pilav",
        name: "Soteli Pilav",
        description: "Sebzeli sote ile pilav",
        price: 190,
      },
      {
        id: "karisik-tost",
        name: "Karisik Tost",
        description: "Sucuklu kasarli tost",
        price: 225,
        isPopular: true,
      },
      {
        id: "kasarli-tost",
        name: "Kasarli Tost",
        description: "Bol kasarli sicak tost",
        price: 200,
      },
      {
        id: "patates-tabagi",
        name: "Patates Tabagi",
        description: "Citir patates kizartmasi",
        price: 180,
      },
      {
        id: "cig-kofte-durum",
        name: "Cig Kofte Durum",
        description: "Acili veya acisiz",
        price: 110,
      },
    ],
  },
  {
    id: "soguk-icecekler",
    name: "Soguk Icecekler",
    slug: "soguk-icecekler",
    description: "Serinleten secenekler",
    image: "/images/categories/cold-drinks.jpg",
    itemCount: 8,
    items: [
      {
        id: "su",
        name: "Su",
        description: "Dogal kaynak suyu",
        price: 40,
      },
      {
        id: "cam-su",
        name: "Cam Su",
        description: "Premium cam sise",
        price: 50,
      },
      {
        id: "cola",
        name: "Cola",
        description: "Klasik kola",
        price: 100,
      },
      {
        id: "fanta",
        name: "Fanta",
        description: "Portakalli gazoz",
        price: 100,
      },
      {
        id: "sprite",
        name: "Sprite",
        description: "Limonlu gazoz",
        price: 100,
      },
      {
        id: "fuse-tea",
        name: "Fuse Tea",
        description: "Seftali veya limon",
        price: 100,
      },
      {
        id: "churchill",
        name: "Churchill",
        description: "Premium soda",
        price: 120,
        isPopular: true,
      },
      {
        id: "taze-portakal",
        name: "Taze Portakal Suyu",
        description: "Gunluk taze sikilmis",
        price: 150,
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
