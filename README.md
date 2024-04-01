# README

This README would normally document whatever steps are necessary to get the
application up and running.

Things you may want to cover:

* Ruby version

* System dependencies

* Configuration

* Database creation

* Database initialization

* How to run the test suite

* Services (job queues, cache servers, search engines, etc.)

* Deployment instructions

* ...

# Introduction

::: mermaid
flowchart TD;
  A(File uploading) --> B[Split file into chunks]
  B --> BB[/Chunk State/]
  BB --> C[Save chunks to the IndexedDB</br> with file metadata]
  C --> D[Send request to initiate upload]
  D --> E{Online?}
  E -->|Yes| G[Send request to upload chunk]
  G --> BB
  E -->|No| F[Retry]
  F --> D
  G -->|Save bucket id| C
  G -->|Upload chunk| GG{Online?}
  GG -->|No| GGG[Retry]
  GG -->|Yes| H[(AWS S3)]
  GGG --> G
  H -->|ETag| BB
  BB --> I{All chunks uploaded?}
  I -->|No| G
  I -->|Yes| J[Send request to complete upload</br> inlude an array of ETags]
  J --> H
  J --> K{Success?}
  K -->|Yes| L[Delete chunks from IndexedDB]
  K -->|No| M(Show error)
:::

# Kudos to

- Alicia Rojas and her article about [PWA for Rails](https://alicia-paz.medium.com/make-your-rails-app-work-offline-part-1-pwa-setup-3abff8666194)