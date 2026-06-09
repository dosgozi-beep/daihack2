<!DOCTYPE html>
<html lang="ja">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0, viewport-fit=cover">
<meta name="theme-color" content="#161616">
<meta name="description" content="4年間の動き方を、先輩から学んで、後輩に渡す。大学生活の進行中の道を見つけて残すアプリ。">

<!-- OGP -->
<meta property="og:title" content="ダイハック">
<meta property="og:description" content="4年間の動き方を、先輩から学んで、後輩に渡す">
<meta property="og:image" content="./assets/icon-512.png">
<meta property="og:type" content="website">

<!-- PWA -->
<link rel="manifest" href="./manifest.json">
<link rel="icon" href="./assets/icon.svg" type="image/svg+xml">
<link rel="apple-touch-icon" href="./assets/icon-192.png">
<meta name="apple-mobile-web-app-capable" content="yes">
<meta name="apple-mobile-web-app-status-bar-style" content="default">
<meta name="apple-mobile-web-app-title" content="ダイハック">

<title>ダイハック</title>

<!-- Fonts -->
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=M+PLUS+Rounded+1c:wght@500;700;800;900&display=swap" rel="stylesheet">

<link rel="stylesheet" href="./style.css">
</head>
<body>

<!-- ローディングオーバーレイ：データ読み込み中 -->
<div id="loading" class="loading-overlay">
  <div class="loading-content">
    <div class="loading-logo">ダイハック</div>
    <div class="loading-bar"><div class="loading-bar-fill"></div></div>
    <div class="loading-text">読み込み中</div>
  </div>
</div>

<!-- アプリ本体 -->
<div id="app" class="app" hidden>

  <!-- 画面：ホーム -->
  <section id="screen-home" class="screen" data-screen="home" hidden>
    <div class="screen-body" id="home-body"></div>
  </section>

  <!-- 画面：モデル詳細 -->
  <section id="screen-model" class="screen" data-screen="model" hidden>
    <header class="screen-header">
      <button class="header-back" data-action="back">← BACK</button>
      <span class="header-label">MODEL / DETAIL</span>
    </header>
    <div class="screen-body" id="model-body"></div>
  </section>

  <!-- 画面：探す（検索・絞り込み） -->
  <section id="screen-search" class="screen" data-screen="search" hidden>
    <header class="screen-header">
      <span class="header-label header-label-strong">探す</span>
    </header>
    <div class="screen-body" id="search-body"></div>
  </section>

  <!-- 画面：計画ページ -->
  <section id="screen-plan" class="screen" data-screen="plan" hidden>
    <header class="screen-header">
      <span class="header-label header-label-strong">わたしの計画</span>
      <button class="header-gear" data-action="open-settings" aria-label="設定">⚙</button>
    </header>
    <div class="screen-body" id="plan-body"></div>
  </section>

  <!-- 画面：団体一覧 -->
  <section id="screen-orgs" class="screen" data-screen="orgs" hidden>
    <header class="screen-header">
      <span class="header-label header-label-strong">団体</span>
    </header>
    <div class="screen-body" id="orgs-body"></div>
  </section>

  <!-- 画面：団体詳細 -->
  <section id="screen-org" class="screen" data-screen="org" hidden>
    <header class="screen-header">
      <button class="header-back" data-action="back">← BACK</button>
      <span class="header-label">DANTAI / ORG</span>
    </header>
    <div class="screen-body" id="org-body"></div>
  </section>

  <!-- 画面：リミックスシート（モーダル風） -->
  <section id="screen-remix" class="screen screen-modal" data-screen="remix" hidden>
    <div class="modal-backdrop" data-action="close-modal"></div>
    <div class="modal-sheet" id="remix-body"></div>
  </section>

  <!-- 画面：申請フォーム -->
  <section id="screen-apply" class="screen" data-screen="apply" hidden>
    <header class="screen-header">
      <button class="header-back" data-action="back">← MY PLAN</button>
      <span class="header-label">APPLY / MODEL</span>
    </header>
    <div class="screen-body" id="apply-body"></div>
  </section>

  <!-- 画面：設定（マイページ機能） -->
  <section id="screen-settings" class="screen" data-screen="settings" hidden>
    <header class="screen-header">
      <button class="header-back" data-action="back">← BACK</button>
      <span class="header-label">SETTINGS</span>
    </header>
    <div class="screen-body" id="settings-body"></div>
  </section>

  <!-- ボトムタブバー（4タブ） -->
  <nav class="tab-bar" id="tab-bar">
    <a class="tab" href="#/home" data-tab="home">
      <span class="tab-icon">⌂</span>
      <span class="tab-label">ホーム</span>
    </a>
    <a class="tab" href="#/search" data-tab="search">
      <span class="tab-icon">⌕</span>
      <span class="tab-label">探す</span>
    </a>
    <a class="tab" href="#/plan" data-tab="plan">
      <span class="tab-icon">▤</span>
      <span class="tab-label">計画</span>
    </a>
    <a class="tab" href="#/orgs" data-tab="orgs">
      <span class="tab-icon">◈</span>
      <span class="tab-label">団体</span>
    </a>
  </nav>

</div>

<!-- トースト通知エリア -->
<div id="toast-area" class="toast-area" aria-live="polite"></div>

<script src="./script.js"></script>
</body>
</html>
