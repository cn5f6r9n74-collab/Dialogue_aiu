# Dialogue Webサイト

国際教養大学（AIU）のサークル「Dialogue」公式サイトです。JavaScriptのフレームワークを使わない静的サイトなので、特別な開発環境なしで更新・公開できます。

## ページ構成

- `site/index.html` — About Us
- `site/activities.html` — 活動内容
- `site/log.html` — 活動Log

すべてのページのフッターには、入会用Google FormとInstagramへのリンクがあります。

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

`file` のパスは、追加したPDFのファイル名と完全に同じにしてください。新しい順に並べると見やすくなります。

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
