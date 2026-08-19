---
title: "MCP 연결"
description: "Codex가 외부 도구·서비스와 연결하는 방법인 MCP를 소개한다."
verified: "2026-08-19"
codexVersion: "TODO:확인"
---

## 목표

MCP가 무엇이고, 언제 필요해지는지 감을 잡는다.

## 사전 조건

- [ ] [완성 점검](/build/07-checklist/)까지 완료했다

## MCP란

MCP는 Codex 같은 에이전트가 외부 도구나 서비스(예: 데이터베이스, 사내 시스템, 다른 앱)와 정해진 방식으로 연결할 수 있게 해주는 규격이다. MCP로 연결된 도구가 있으면, Codex는 자기가 원래 할 수 없던 일(예: 특정 서비스에서 데이터 가져오기)까지 할 수 있게 된다.

<!-- TODO:확인 — Codex에서 MCP를 연결하는 정확한 방법과 [config.toml](/concepts/config-toml/)과의 관계 -->

## 이 사이트 실습에서는 필요한가

[만들어보기](/build/01-plan/)에서 만드는 정적 웹사이트는 MCP 없이 완성할 수 있다. MCP는 Codex가 외부 서비스와 상호작용해야 하는, 더 복잡한 프로젝트로 넘어갈 때 알아두면 되는 개념이다.

## 다음 단계

- [이미지 넣기](/practice/images/)
