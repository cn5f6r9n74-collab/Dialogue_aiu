/*
  紹介型読書会で扱った本を追加するには、この配列の先頭に1件ずつ追加します。
  title、author、cover、url を記入してください。cover には書影の画像URL、url には書籍情報ページのURLを入れます。
*/
window.introducedBooks = [
  {
    title: "世界リスク社会論",
    author: "ウルリッヒ・ベック 著／島村賢一 訳",
    cover: "https://img.hanmoto.com/bd/img/9784480093103_600.jpg",
    url: "https://www.kinokuniya.co.jp/f/dsg-01-9784480093103",
  },
  {
    title: "愛するということ",
    author: "エーリッヒ・フロム 著／鈴木晶 訳",
    cover: "https://img.hanmoto.com/bd/img/9784314011778_600.jpg",
    url: "https://www.kinokuniya.co.jp/f/dsg-01-9784314011778",
  },
  {
    title: "海と毒薬",
    author: "遠藤周作 著",
    cover: "https://img.hanmoto.com/bd/img/9784101123028_600.jpg",
    url: "https://www.kinokuniya.co.jp/f/dsg-01-9784101123028",
  },
  {
    title: "センスの哲学",
    author: "千葉雅也 著",
    cover: "https://img.hanmoto.com/bd/img/9784163918273_600.jpg",
    url: "https://www.kinokuniya.co.jp/f/dsg-01-9784163918273",
  },
  {
    title: "言語の力",
    author: "ビオリカ・マリアン 著",
    cover: "https://img.hanmoto.com/bd/img/9784046063779_600.jpg",
    url: "https://www.kinokuniya.co.jp/f/dsg-01-9784046063779",
  },
  {
    title: "現代民主主義",
    author: "山本圭 著",
    cover: "https://img.hanmoto.com/bd/img/9784121026316_600.jpg",
    url: "https://www.kinokuniya.co.jp/f/dsg-01-9784121026316",
  },
  {
    title: "日本の思想",
    author: "丸山真男 著",
    cover: "https://img.hanmoto.com/bd/img/9784004120391_600.jpg",
    url: "https://www.kinokuniya.co.jp/f/dsg-01-9784004120391",
  },
  {
    title: "偶然性・アイロニー・連帯",
    author: "リチャード・ローティ 著",
    cover: "https://img.hanmoto.com/bd/img/9784000004497_600.jpg",
    url: "https://www.kinokuniya.co.jp/f/dsg-01-9784000004497",
  },
  {
    title: "悪口ってなんだろう",
    author: "和泉悠 著",
    cover: "https://img.hanmoto.com/bd/img/9784480684592_600.jpg",
    url: "https://www.kinokuniya.co.jp/f/dsg-01-9784480684592",
  },
  {
    title: "ヤバい経済学",
    author: "スティーヴン・D・レヴィット／スティーヴン・J・ダブナー 著",
    cover: "https://img.hanmoto.com/bd/img/9784492313787_600.jpg",
    url: "https://www.kinokuniya.co.jp/f/dsg-01-9784492313787",
  },
  {
    title: "なぜ人は締め切りを守れないのか",
    author: "難波優輝 著",
    cover: "https://img.hanmoto.com/bd/img/9784911288207_600.jpg",
    url: "https://www.kinokuniya.co.jp/f/dsg-01-9784911288207",
  },
  {
    title: "リベラリズム",
    author: "宇野重規・加藤晋・井上彰 編",
    cover: "https://img.hanmoto.com/bd/img/9784130331135_600.jpg",
    url: "https://www.kinokuniya.co.jp/f/dsg-01-9784130331135",
  },
  {
    title: "生きがいについて",
    author: "神谷美恵子 著",
    cover: "https://img.hanmoto.com/bd/img/9784622081814_600.jpg",
    url: "https://www.kinokuniya.co.jp/f/dsg-01-9784622081814",
  },
  {
    title: "これからの「正義」の話をしよう",
    author: "マイケル・サンデル 著",
    cover: "https://img.hanmoto.com/bd/img/9784152091314_600.jpg",
    url: "https://www.kinokuniya.co.jp/f/dsg-01-9784152091314",
  },
  {
    title: "ゆたかさをどう測るか",
    author: "山田鋭夫 著",
    cover: "https://img.hanmoto.com/bd/img/9784480076700_600.jpg",
    url: "https://www.kinokuniya.co.jp/f/dsg-01-9784480076700",
  },
  {
    title: "バカと無知",
    author: "橘玲 著",
    cover: "https://img.hanmoto.com/bd/img/9784106109683_600.jpg",
    url: "https://www.kinokuniya.co.jp/f/dsg-01-9784106109683",
  },
  {
    title: "暇と退屈の倫理学",
    author: "國分功一郎 著",
    cover: "https://img.hanmoto.com/bd/img/9784101035413_600.jpg",
    url: "https://www.kinokuniya.co.jp/f/dsg-01-9784101035413",
  },
  {
    title: "THINK LIKE A MONK",
    author: "Jay Shetty 著",
    cover: "https://books.google.co.jp/books/content?id=IcMNywEACAAJ&printsec=frontcover&img=1&zoom=1",
    url: "https://books.google.com/books?id=IcMNywEACAAJ",
  },
  {
    title: "哲学と科学",
    author: "澤瀉久敬 著",
    cover: "https://img.hanmoto.com/bd/img/9784140912881_600.jpg",
    url: "https://www.kinokuniya.co.jp/f/dsg-01-9784140912881",
  },
  {
    title: "人間の建設",
    author: "小林秀雄・岡潔 著",
    cover: "https://img.hanmoto.com/bd/img/9784101007083_600.jpg",
    url: "https://www.kinokuniya.co.jp/f/dsg-01-9784101007083",
  },
  {
    title: "歴史とは何か",
    author: "E. H. カー 著",
    cover: "https://img.hanmoto.com/bd/img/9784000256742_600.jpg",
    url: "https://www.hanmoto.com/bd/isbn/9784000256742",
  },
  {
    title: "近代日本の対中国感情",
    author: "金山泰志 著",
    cover: "https://img.hanmoto.com/bd/img/9784121028426_600.jpg",
    url: "https://www.kinokuniya.co.jp/f/dsg-01-9784121028426",
  },
  {
    title: "雪国",
    author: "川端康成 著",
    cover: "https://img.hanmoto.com/bd/img/9784101002446_600.jpg",
    url: "https://www.kinokuniya.co.jp/f/dsg-01-9784101002446",
  },
  {
    title: "三十路の逆立ち",
    author: "くどうれいん 著",
    cover: "https://img.hanmoto.com/bd/img/9784065431764_600.jpg",
    url: "https://www.kodansha.co.jp/book/products/0000425616",
  },
  {
    title: "武士道",
    author: "新渡戸稲造 著",
    cover: "https://img.hanmoto.com/bd/img/9784003311813_600.jpg",
    url: "https://www.hanmoto.com/bd/isbn/9784003311813",
  },
  {
    title: "残像に口紅を",
    author: "筒井康隆 著",
    cover: "https://img.hanmoto.com/bd/img/9784122022874_600.jpg",
    url: "https://www.kinokuniya.co.jp/f/dsg-01-9784122022874",
  },
  {
    title: "世界の終りとハードボイルド・ワンダーランド",
    author: "村上春樹 著",
    cover: "https://img.hanmoto.com/bd/img/9784103534174_600.jpg",
    url: "https://www.shinchosha.co.jp/book/353417/",
  },
  {
    title: "夜と霧",
    author: "ヴィクトール・E・フランクル 著",
    cover: "https://img.hanmoto.com/bd/img/9784622039709_600.jpg",
    url: "https://www.msz.co.jp/book/detail/03970/",
  },
];
