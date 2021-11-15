# react-rails-graphql

# 主な使用技術

- React
- TypeScript
- Applo Client
- Ruby on Rails
- GraphQL
- Docker

# 実行手順

Dockerを起動して、以下のコマンドを実行してください。

```
docker-compose build
docker-compose up -d
docker-compose run backend --rm rails db:create
docker-compose run backend --rm rails db:migrate
```

その後、テーブルに[初期データを挿入](data.sql)してください。