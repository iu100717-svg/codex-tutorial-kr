# codex-tutorial-kr

비전공 학부생을 대상으로 한 ChatGPT Codex 한국어 튜토리얼 사이트.
[Astro Starlight](https://starlight.astro.build) 기반, GitHub Pages로 공개 운영합니다.

## 프로젝트 구조

```
.
├── public/                        # 정적 파일 (favicon 등)
├── src/
│   ├── assets/                    # 문서에 삽입하는 이미지
│   ├── content/
│   │   └── docs/                  # 실제 문서 페이지 (.md/.mdx)
│   └── content.config.ts
├── astro.config.mjs                # 사이트 제목, 사이드바, 언어 설정
├── CLAUDE.md                       # 작업 규칙 (Claude Code용)
└── package.json
```

## 로컬 실행 방법

```bash
npm install
npm run dev
```

`http://localhost:4321` 에서 확인할 수 있습니다.

| 명령어 | 설명 |
| :--- | :--- |
| `npm install` | 의존성 설치 |
| `npm run dev` | 로컬 개발 서버 실행 |
| `npm run build` | `./dist/` 에 프로덕션 빌드 생성 |
| `npm run preview` | 빌드 결과 로컬 미리보기 |

## 배포

[Vercel](https://vercel.com)에 연결되어 있습니다: https://codex-tutorial-kr.vercel.app

Framework Preset은 **Astro** 로 자동 인식되며 별도 설정 없이 `npm run build` 결과(`./dist/`)가
배포됩니다. `main` 브랜치에 push할 때마다 자동으로 다시 배포됩니다.

## 기여 방법

오류 제보나 개선 제안은 이슈로 남겨 주세요.
