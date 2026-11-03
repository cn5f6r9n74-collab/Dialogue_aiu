# Dialogue Webサイト

国際教養大学（AIU）のサークル「Dialogue」公式サイトです。JavaScriptのフレームワークを使わない静的サイトなので、特別な開発環境なしで更新・公開できます。

## ページ構成

- `site/index.html` — About Us
- `site/activities.html` — 活動内容
- `site/log.html` — 活動Log

すべてのページのフッターには、入会用Google FormとInstagramへのリンクがあります。

## 紹介型読書会で扱った本を追加する方法

`site/assets/books/introduced-books.js` の先頭に1件追加します。

```js
{
  title: "本のタイトル",
  author: "著者名 著",
  cover: "書影の画像URL",
  url: "書籍情報ページのURL",
},
```

活動内容ページの「これまでに紹介した本」に、書影・著者名・書籍情報へのリンクが自動で表示されます。

## 活動LogにPDFを追加する方法

1. PDFを `site/assets/log/` に入れます。ファイル名は半角英数字とハイフンを使うと安全です（例：`2026-11-philosophy.pdf`）。
2. `site/assets/log/logs.js` を開き、先頭の `logEntries` に1件追加します。

```js
{
  date: "2026.11.06",
  title: "発表タイトル",
  presenter: "発表者名（任意）",
  description: "この回で扱った本やテーマの短い紹介。",
  file: "assets/log/2026-11-philosophy.pdf"
},
```

`file` のパスは、追加したPDFのファイル名と完全に同じにしてください。新しい順に並べると見やすくなります。サイトでは各資料に**閲覧する**と**PDFをダウンロード**の二つのボタンが自動で表示されます。

公開済みの資料だけを追加してください。著作権や発表者の許可が必要な画像・引用を含む場合は、公開前に確認します。

## 公開する方法（Netlify）

このサイトはNetlifyで無料公開できます。NetlifyアカウントとGitHubアカウントが必要です。

1. GitHubで空の非公開または公開リポジトリを作成します（例：`dialogue-aiu`）。
2. このフォルダの内容をそのリポジトリへ追加してGitHubへ送信します。Codexを使う場合は、このフォルダをプロジェクトとして開き、「GitHubに公開したい」と伝えれば、認証が必要な箇所を案内します。
3. [Netlify](https://www.netlify.com/) にGitHubでログインし、**Add new site** → **Import an existing project** を選びます。
4. GitHubの `dialogue-aiu` リポジトリを選択します。設定ファイルが入っているため、公開フォルダは自動で `site` になります。**Deploy site** を押します。
5. 発行された `*.netlify.app` のURLを開き、各ページとPDFを確認します。

以後はGitHubへ変更を送信するたびにNetlifyが自動で公開を更新します。

### 独自ドメインを使う場合（任意）

Netlifyのサイト設定から **Domain management** → **Add a domain** を選びます。大学やサークルで取得・管理しているドメインがある場合のみ、Netlifyが示すDNSレコードをそのドメインの管理サービスで設定してください。取得やDNS変更の権限がなければ、まずはNetlifyの無料URLのままで問題ありません。

## 公開前チェック

- Google Formが正しい募集フォームを開くこと
- Instagramアカウント名・リンクが正しいこと
- ログのPDFを開けること
- スマートフォンでもメニューと本文が読みやすいこと
