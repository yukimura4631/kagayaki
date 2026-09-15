const salonData = {
  features: [
    {
      title: 'お肌に優しい施術と化粧品',
      description: '肌を丁寧に扱うハンドケアと、刺激を抑えた化粧品で素肌の調子を整えます。',
      icon: 'water-drop',
    },
    {
      title: '表情筋をほぐすフェイスケア',
      description: '顔の巡りを促進し、むくみや硬さをやわらげるケアを行います。',
      icon: 'face-line',
    },
    {
      title: '強引な勧誘・販売はありません',
      description: '契約や化粧品の押し売りはなし。施術料金のみで気軽に通えます。',
      icon: 'shine',
    },
  ],
  campaign: {
    basePrice: '4,400円（税込）',
    promoPrice: '3,300円（税込）',
    note: '初回限定・12月31日まで。基礎化粧品セットをプレゼント。',
    bullets: ['入会金なし', '高額コース契約なし', '化粧品購入の義務なし'],
  },
  treatmentSteps: [
    { number: '01', title: 'カウンセリング', description: 'お客様の肌状態を確認し、最適な化粧品を選びます。' },
    { number: '02', title: 'クレンジング', description: 'メイク落としとハンドクレンジングで余分な角質や皮脂を落とします。' },
    { number: '03', title: '葉緑素パック', description: '葉緑素入りの泥パックで毛穴の汚れを吸着して取り除きます。' },
    { number: '04', title: 'フェイスケア', description: '顔の凝りをほぐし、リンパの流れをスムーズに整えます。 ' },
    { number: '05', title: 'ベントーゼ吸引', description: '毛穴に詰まった余分な皮脂や汚れを吸引します。' },
    { number: '06', title: '仕上げ', description: 'Dioシリーズの化粧品で肌を潤いのある状態に整えます。' },
  ],
  productInfo: {
    title: '40年の実績と信頼。',
    description: '当店では、1986年創業から40年の実績を持つイプセン化粧品を使用。添加物や刺激的な成分を避けた、肌に優しい品質を大切にしています。',
    items: ['イプセンの低刺激処方', '肌を守る成分設計', '長年の信頼に裏付けられた品質'],
  },
  shop: {
    name: 'Face Beauty かがやき',
    addressLine1: '千葉県船橋市前貝塚565-11',
    addressLine2: '塚田プラザ103号（旧 井丸跡地）',
    phone: '080-6522-5488',
    payment: '現金/各種カード決済',
    note: '予約優先',
    hours: '10:00〜18:00',
    closed: '毎週水曜日',
  },
  reservation: {
    link: '#contact',
    lineUrl: 'https://line.me/R/ti/p/@751loeky',
    phone: '080-6522-5488',
  },
};

export default salonData;
