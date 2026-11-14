import heroTeapotImg from '../assets/images/hero_teapot_studio_1794644959505.jpg';
import heroMilkteaImg from '../assets/images/hero_milktea_studio_1794644960638.jpg';
import straightTeaImg from '../assets/images/style_straight_tea_1794644961584.jpg';
import britishMilkteaImg from '../assets/images/style_british_milktea_1794644961557.jpg';
import japaneseTetsubinPourImg from '../assets/images/japanese_tetsubin_clean_1794645701462.jpg';

export interface HeroSlide {
  id: string;
  kicker: string;
  brandTitle: string;
  headline: string;
  subtitle: string;
  ctaLabel: string;
  ctaTarget: string;
  image: string;
  imageAlt: string;
}

export interface TeaStyleItem {
  id: 'straight' | 'british' | 'japanese';
  title: string;
  englishTitle: string;
  meta: string;
  feature: string;
  benefit: string;
  image: string;
  imageAlt: string;
  menuCategory: 'straight' | 'milk';
}

export interface MenuItem {
  id: string;
  category: 'straight' | 'milk';
  categoryLabel: string;
  name: string;
  englishName: string;
  price: string;
  recommended: boolean;
  description: string;
  tastingNote: string;
  servingTip: string;
  styleTag: string;
}

export interface RouteStep {
  number: string;
  title: string;
  description: string;
}

export const HERO_SLIDES: HeroSlide[] = [
  {
    id: 'signature-black-tea',
    kicker: 'A healing time for me',
    brandTitle: 'TEA TIME',
    headline: '향긋한 홍차 한 잔의 여유',
    subtitle: '일상 속 여유를 선물하는 대구 공평로 홍차 전문 카페',
    ctaLabel: '시그니처 메뉴 보기',
    ctaTarget: '#menu',
    image: heroTeapotImg,
    imageAlt: '부드러운 파스텔 블루 배경 위 흰 도자기 티팟에서 찻잔으로 홍차를 따르는 모습',
  },
  {
    id: 'three-tea-styles',
    kicker: 'Signature Tea Guide',
    brandTitle: 'TEA TIME',
    headline: '취향으로 고르는 세 가지 티 스타일',
    subtitle: '깔끔한 스트레이트티부터 영국식·일본식 밀크티까지 직접 비교해 보세요',
    ctaLabel: '티 스타일 가이드 보기',
    ctaTarget: '#tea-guide',
    image: heroMilkteaImg,
    imageAlt: '차분한 블루 톤 배경 위 로열 밀크티와 우유 피처, 찻잎이 놓인 티타임 연출',
  },
];

export const TEA_STYLES: TeaStyleItem[] = [
  {
    id: 'straight',
    title: '스트레이트티',
    englishTitle: 'Straight Tea',
    meta: '찻잎 본연의 향 · 깔끔한 여운',
    feature:
      '차 본연의 향과 맛을 즐기기 위해 우유나 설탕, 꿀 등을 넣지 않고 그냥 찻잎만 물에 우려내 마시는 방식입니다.',
    benefit:
      '첨가물 없이 차 본연의 깊은 풍미를 온전히 느낄 수 있으며, 향긋하고 깔끔한 뒷맛을 선사합니다.',
    image: straightTeaImg,
    imageAlt: '유리 티팟과 도자기 찻잔에 맑고 투명한 호박빛으로 우러난 스트레이트 홍차',
    menuCategory: 'straight',
  },
  {
    id: 'british',
    title: '영국식 밀크티',
    englishTitle: 'British Milk Tea',
    meta: '홍차·우유·설탕 개별 제공 · 맞춤 조합',
    feature:
      '홍차 중심의 전통적인 티 스타일로, 진하게 우린 홍차와 따뜻한 우유, 설탕이 각각 따로 제공됩니다.',
    benefit:
      '개인의 기호에 맞게 우유와 당도를 직접 조절해 조합해 드실 수 있으며, 일본식 밀크티보다 우리는 시간이 빠릅니다.',
    image: britishMilkteaImg,
    imageAlt: '화이트 도자기 티팟과 찻잔, 우유 크리머, 원당이 함께 차려진 전통 영국식 밀크티',
    menuCategory: 'milk',
  },
  {
    id: 'japanese',
    title: '일본식 밀크티',
    englishTitle: 'Japanese Royal Milk Tea',
    meta: '우유와 함께 끓인 진한 풍미 · 부드러운 단맛',
    feature:
      '영국식에서 영향을 받았지만 더 달고 부드러운 스타일로, 찻잎을 물과 함께 끓인 뒤 설탕과 우유를 넣어 한 번 더 끓여냅니다.',
    benefit:
      '미리 찻잎을 걸러내면 처음부터 끝까지 일관적인 맛을 즐길 수 있고, 직접 찻잎을 거르면 시간이 지날수록 온기에 우러나 더 진한 풍미를 느낄 수 있습니다.',
    image: japaneseTetsubinPourImg,
    imageAlt: '검은 무쇠 주전자에서 거름망을 통해 도자기 컵으로 부드럽게 따라지는 일본식 밀크티',
    menuCategory: 'milk',
  },
];

export const MENU_ITEMS: MenuItem[] = [
  {
    id: 'english-breakfast',
    category: 'straight',
    categoryLabel: 'Straight Tea',
    name: '잉글리시 블랙퍼스트',
    englishName: 'English Breakfast',
    price: '5,000원',
    recommended: true,
    description: '강하고 진한 맛이 특징인 영국의 아침을 깨우는 홍차',
    tastingNote: '묵직한 바디감과 구수한 맥아향이 어우러져 나른한 오후에 기분 좋은 활력을 줍니다.',
    servingTip: '스트레이트티로 깔끔하게 즐기거나 영국식 밀크티 베이스로도 훌륭합니다.',
    styleTag: '묵직한 클래식 홍차',
  },
  {
    id: 'darjeeling',
    category: 'straight',
    categoryLabel: 'Straight Tea',
    name: '다질링',
    englishName: 'Darjeeling',
    price: '6,000원',
    recommended: true,
    description: '섬세하고 향기로운 맛으로 tea의 샴페인 혹은 홍차의 샹젤리제로 불리는 홍차',
    tastingNote: '청포도를 연상시키는 산뜻한 머스캣 향과 맑고 투명한 수색이 돋보입니다.',
    servingTip: '첨가물 없는 스트레이트티로 섬세한 아로마를 천천히 음미해 보세요.',
    styleTag: '우아한 플로럴 아로마',
  },
  {
    id: 'happiness',
    category: 'straight',
    categoryLabel: 'Straight Tea',
    name: '해피니스',
    englishName: 'Happiness',
    price: '6,000원',
    recommended: true,
    description: '달콤한 과일, 썬플라워, 수레국화 블렌딩으로 화려함이 특징인 블렌딩 티',
    tastingNote: '입안 가득 퍼지는 화사한 꽃향기와 은은한 과일의 달콤함이 기분을 밝혀줍니다.',
    servingTip: '향긋한 블렌딩을 좋아하시거나 가벼운 티타임을 원하시는 분께 추천합니다.',
    styleTag: '화려한 꽃과 과일 블렌딩',
  },
  {
    id: 'green-tea',
    category: 'straight',
    categoryLabel: 'Straight Tea',
    name: '녹차',
    englishName: 'Green Tea',
    price: '5,000원',
    recommended: true,
    description: '산화시키지 않은 찻잎을 사용하여 만든 담백하고 맑은 차',
    tastingNote: '부드러운 감칠맛과 맑은 초록빛 여운이 입안을 개운하게 정리해 줍니다.',
    servingTip: '식후 깔끔한 마무리가 필요할 때 따뜻하게 즐기기 좋습니다.',
    styleTag: '담백하고 맑은 여운',
  },
  {
    id: 'chatramue',
    category: 'milk',
    categoryLabel: 'Milk Tea',
    name: '차뜨라무',
    englishName: 'ChaTraMue Thai Milk Tea',
    price: '5,000원',
    recommended: false,
    description: '태국의 대표적인 태국식 밀크티 프랜차이즈의 시그니처 밀크티',
    tastingNote: '바닐라와 향신료의 달콤하고 이국적인 풍미가 부드러운 우유와 진하게 어우러집니다.',
    servingTip: '달콤하고 진한 휴식이 필요한 날 시원하게 또는 따뜻하게 추천합니다.',
    styleTag: '달콤하고 이국적인 태국식',
  },
  {
    id: 'yorkshire-gold',
    category: 'milk',
    categoryLabel: 'Milk Tea',
    name: '요크셔 골드',
    englishName: 'Yorkshire Gold',
    price: '6,000원',
    recommended: false,
    description: '영국 헤로게이트의 역사와 함께한 전통 클래식 티로 밀크티에 최적화된 홍차',
    tastingNote: '아쌈과 케냐 찻잎이 블렌딩되어 우유를 더해도 찻잎의 진한 존재감이 살아있습니다.',
    servingTip: '전통 영국식 밀크티의 정석을 경험하고 싶다면 가장 먼저 선택해 보세요.',
    styleTag: '정통 영국식 밀크티',
  },
  {
    id: 'raspberry-chocolat',
    category: 'milk',
    categoryLabel: 'Milk Tea',
    name: '산딸기 쇼콜라',
    englishName: 'Framboise Chocolat',
    price: '7,000원',
    recommended: true,
    description: '프람보아즈(라즈베리)의 새콤달콤한 맛과 초콜릿의 깊은 향기가 조화를 이룬 홍차',
    tastingNote: '카카오의 묵직한 달콤함 뒤로 산딸기의 상큼한 향기가 감도는 디저트 같은 밀크티입니다.',
    servingTip: '달콤한 초콜릿 풍미와 산뜻한 베리의 조화를 선호하는 분들께 적극 추천합니다.',
    styleTag: '상큼한 베리 & 진한 초콜릿',
  },
  {
    id: 'florence',
    category: 'milk',
    categoryLabel: 'Milk Tea',
    name: '플로렌스',
    englishName: 'Florence',
    price: '7,000원',
    recommended: true,
    description: '초콜릿과 헤이즐넛의 달콤하고 고소한 만남이 돋보이는 시그니처 홍차',
    tastingNote: '구운 헤이즐넛의 고소함과 부드러운 밀크 초콜릿의 여운이 포근하게 감싸줍니다.',
    servingTip: '디저트와 함께하거나 따뜻한 밀크티 한 잔으로 위로를 받고 싶을 때 어울립니다.',
    styleTag: '고소한 헤이즐넛 & 쇼콜라',
  },
];

export const ROUTE_STEPS: RouteStep[] = [
  {
    number: '01',
    title: '대구대학교 출발',
    description: '경산 대구대 캠퍼스에서 시내버스 또는 자차를 이용하여 대구 도심 방면으로 이동합니다.',
  },
  {
    number: '02',
    title: "지하철 1호선 '중앙로역' 하차",
    description: '대구 도심 중심가인 중앙로역에 도착 후 동성로·공평로 방면 출구로 나옵니다.',
  },
  {
    number: '03',
    title: '도보로 공평로 방향 이동 (약 10분)',
    description: '대구 동성로 및 공평로 인근 골목으로 도보 이동하여 1층 티타임 카페에 도착합니다.',
  },
];

export const STORE_INFO = {
  address: '대구광역시 중구 공평로 20 1층',
  addressSub: '지하철 1호선 중앙로역 도보 약 10분 · 동성로 공평로 인근',
  phone: '0507-1474-8444',
  hours: '매일 13:00 ~ 21:00 (라스트오더 20:30)',
  parking: '주차장 없음 (인근 공영주차장 이용 권장)',
  payment: '민생 회복 소비 쿠폰 사용 가능',
};
