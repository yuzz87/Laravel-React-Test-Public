# Laravel React Task App

Laravel + React + MySQL で構築したタスク管理アプリです。  
バックエンドは Laravel API、フロントエンドは React + Vite、開発環境は Docker Compose で構築しています。

- React: `http://localhost:5174`
- Laravel API: `http://localhost:8000/api`

---

## 概要

このアプリは、新しいポートフォリオで Laravel を活用するために、Laravel の基本的な使い方と React との連携方法を学習する目的で作成しました。

---

## 使用技術

### Frontend
- React
- Vite
- JavaScript

### Backend
- Laravel
- Laravel Sanctum
- PHP
- MySQL

### Environment
- Docker
- Docker Compose

---

## 主な機能

- ユーザー登録
- ログイン
- ログアウト
- 認証済みユーザー情報取得
- タスク一覧取得
- タスク作成
- API エラーハンドリング
  - 401 Unauthorized
  - 404 Not Found
  - 422 Validation Error
  - 500 Internal Server Error

---
## API 構成

### 認証不要

- `POST /api/register`
- `POST /api/login`

### 認証必要

- `GET /api/me`
- `POST /api/logout`
- `GET /api/tasks`
- `POST /api/tasks`
- `GET /api/tasks/{id}`
- `PUT /api/tasks/{id}`
- `DELETE /api/tasks/{id}`

認証は Bearer Token を使用します。

---

## 開発環境

- Frontend: `http://localhost:5174`
- Backend API: `http://localhost:8000/api`
- MySQL: `127.0.0.1:3308`

---

## 初回セットアップ

### Docker Desktop を起動

### .envを追加
```
cp backend/.env.example backend/.env
cp frontend/.env.example frontend/.env
```

### Docker コンテナ起動

```
docker compose up -d --build
```

---

## 動作確認手順

### コンテナ状態確認

```
docker composeps
```

以下が `Up` になっていれば正常

- `myapp-backend`
- `myapp-frontend`
- `myapp-mysql`
--- 
## ブラウザ確認

- React: `http://localhost:5174`
- Laravel API: `http://localhost:8000/api`

---

## よく使うコマンド

### 起動

```
docker compose up-d--build
```

### 停止

```
docker compose down
```

### ログ確認

```
docker compose logs-f
docker compose logs-f backend
docker compose logs-f frontend
docker compose logs-f mysql
```
---

### 登録例
- NAME
```
TestUser
```
- Email
```
test1234@example.com
```
- Password
```
test1234
``` 