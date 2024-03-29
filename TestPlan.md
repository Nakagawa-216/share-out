# Share-outのテスト計画

## はじめに

本ドキュメントの目的は明示的にテストケースをまとめ、
テスト全体を見える化して、自身や閲覧者の方にも何をしたか理解しやすいようにすることです。

## テスト対象

### Rails

1. ユーザー認証機能（Devise & Devise_token_auth）
2. ユーザーページ（マイページ含む）機能（UsersController）

### Nuxt.js

1. 

## テストケース一覧

### Rails

1. ユーザー認証機能 - [テストケース](./testcases/UserAuth.md)
2. ユーザーページ（マイページ含む）機能 - [テストケース](./testcases/UserPage.md)

## テスト戦略

### 全般

本PJではTDDの練習として、テストケースとテストを作成し、
その後（または並行して）機能の実装を行います。
詳細は上記の"テストケース一覧”のナビゲーションから閲覧可能です。

### Rails

Railsでは基本的にコントローラ単位でテストケースを作成します。

### Nuxt.js

Nuxt.jsでは○○単位でテストケースを作成します。

## テストしない機能

