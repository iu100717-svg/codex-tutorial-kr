---
title: "config.toml"
description: "Codex의 동작 방식을 세부적으로 설정하는 파일을 설명한다."
verified: "2026-08-19"
codexVersion: "TODO:확인"
---

## 목표

config.toml이 AGENTS.md와 무엇이 다른지 알고, 언제 이 파일을 열어봐야 하는지 이해한다.

## config.toml이란

config.toml은 Codex의 동작 방식 자체를 설정하는 파일이다. [승인 모드와 샌드박스](/concepts/approval-sandbox/)에서 다룬 승인 단계, 사용할 [모델](/concepts/models/) 같은 것을 여기서 지정한다.

## AGENTS.md와 무엇이 다른가

| | AGENTS.md | config.toml |
| --- | --- | --- |
| 다루는 내용 | 프로젝트 규칙, 배경 지식 | Codex 자체의 동작 설정 |
| 예시 | "커밋 메시지는 한국어로" | "위험한 명령은 항상 물어보기" |
| 적용 범위 | 보통 프로젝트 단위 | 보통 내 컴퓨터 전체 |

<!-- TODO:확인 — config.toml의 적용 범위(프로젝트별로 둘 수 있는지, 전역 설정과의 우선순위)를 정확히 확인할 것 -->

## 어디에 있는가

<!-- TODO:확인 — config.toml 파일의 정확한 위치(운영체제별 경로)와 파일이 없을 때 생성하는 방법 -->

## 자주 바꾸는 항목

<!-- TODO:확인 — config.toml에서 초보자가 가장 먼저 알아둘 만한 설정 항목과 정확한 문법(키 이름, 값 형식) -->

이 파일은 문법을 잘못 쓰면 Codex가 아예 실행되지 않을 수 있다. 처음이라면 직접 손으로 고치기보다, Codex에게 "config.toml에서 (원하는 설정)을 바꾸고 싶어. 어떻게 고치면 돼?"라고 물어보고 안내를 따르는 편이 안전하다.

## 다음 단계

- [컨텍스트와 대화 관리](/concepts/context/)
