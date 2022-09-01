---
title: NextJS Prisma
description: A NextJS app using Prisma with a PostgreSQL database
tags:
  - next
  - prisma
  - postgresql
  - typescript
---

# NextJS Prisma Example

This example is a [NextJS](https://nextjs.org/) todo app that uses
[Prisma](https://www.prisma.io/) to store todos in Postgres.

[![Deploy on Railway](https://railway.app/button.svg)](https://railway.app/new/template/HRZqTF)

## ✨ Features

- Prisma
- NextJS
- Postgres
- TypeScript

## 💁‍♀️ How to use

- [Provision a Postgres container on Railway](https://dev.new)
- Connect to your Railway project with `railway link`
- Migrate the database `railway run yarn migrate:dev`
- Run the NextJS app `railway run yarn dev`

## 📝 Notes

This app is a simple todo list where the data is persisted to Postgres. [Prisma
migrations](https://www.prisma.io/docs/concepts/components/prisma-migrate#prisma-migrate)
can be created with `railway run yarn migrate:dev` and deployed with `railway run yarn migrate:deploy`. The Prisma client can be regenerated with
`yarn generate`.

[swr](https://swr.vercel.app/) is used to fetch data on the client and perform optimistic updates.
