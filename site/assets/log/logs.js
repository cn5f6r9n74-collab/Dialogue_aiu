/*
  活動Logを追加するには、この配列の先頭に1件ずつ追加します。
  PDFは assets/log/ に置き、file の名前をPDFのファイル名と一致させてください。

  例:
  {
    date: "2026.11.06",
    title: "発表タイトル",
    presenter: "発表者名（任意）",
    description: "この回で扱った本やテーマの短い紹介。",
    file: "assets/log/2026-11-presentation.pdf"
  },
*/
window.logEntries = [];
