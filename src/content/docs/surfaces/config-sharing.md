---
title: "창구 간 설정 공유"
description: "여러 창구를 오갈 때 설정과 대화 기록이 어떻게 공유되는지 정리한다."
verified: "2026-08-19"
codexVersion: "TODO:확인"
---

## 목표

앱, IDE 확장, 웹, CLI, GitHub 연동 사이에서 무엇이 공유되고 무엇이 안 되는지 파악한다.

## 사전 조건

- [ ] [다른 창구로도 쓰기](/surfaces/ide/) 섹션의 나머지 페이지를 읽었다

## 창구마다 공유되는 것

<!-- TODO:확인 — 아래 표의 실제 값(공유 여부)을 창구별로 확인해서 채울 것 -->

| 항목 | 앱 | IDE 확장 | 웹 | CLI |
| --- | --- | --- | --- | --- |
| 로그인 계정 | TODO:확인 | TODO:확인 | TODO:확인 | TODO:확인 |
| 대화 기록 | TODO:확인 | TODO:확인 | TODO:확인 | TODO:확인 |
| 설정 파일([AGENTS.md](/concepts/agents-md/), [config.toml](/concepts/config-toml/)) | TODO:확인 | TODO:확인 | TODO:확인 | TODO:확인 |

## 설정 파일은 왜 중요한가

여러 창구를 오가더라도, 프로젝트 폴더 안에 있는 설정 파일은 창구와 무관하게 그 프로젝트에 적용되는 경우가 많다. 자세한 내용은 [AGENTS.md](/concepts/agents-md/)와 [config.toml](/concepts/config-toml/)에서 다룬다.

## 다음 단계

- [승인 모드와 샌드박스](/concepts/approval-sandbox/)
