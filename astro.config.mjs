// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	site: 'https://codex-tutorial-kr.vercel.app',
	integrations: [
		starlight({
			title: 'Codex 입문 - 코딩 몰라도 웹앱 만들기',
			defaultLocale: 'root',
			locales: {
				root: {
					label: '한국어',
					lang: 'ko',
				},
			},
			social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/iu100717-svg/codex-tutorial-kr' }],
			sidebar: [
				{
					label: '시작하기',
					items: [
						{ label: 'Codex란 무엇인가', slug: 'start/what-is-codex' },
						{ label: '5가지 사용 창구 지형도', slug: 'start/surfaces-overview' },
						{ label: '나는 뭘로 시작할까', slug: 'start/which-one' },
						{ label: 'Codex 앱 설치', slug: 'start/install-app' },
						{ label: '요금과 사용 한도', slug: 'start/pricing' },
						{ label: '첫 대화 5분', slug: 'start/first-chat' },
					],
				},
				{
					label: '만들어보기',
					items: [
						{ label: '01. 무엇을 만들지 정하기', slug: 'build/01-plan' },
						{ label: '02. 뼈대 만들기', slug: 'build/02-scaffold' },
						{ label: '03. 실행해서 눈으로 보기', slug: 'build/03-preview' },
						{ label: '04. 고치고 다시 시키기', slug: 'build/04-iterate' },
						{ label: '05. 에러가 났을 때', slug: 'build/05-debug' },
						{ label: '06. GitHub Pages로 배포하기', slug: 'build/06-deploy' },
						{ label: '07. 완성 점검', slug: 'build/07-checklist' },
					],
				},
				{
					label: '다른 창구로도 쓰기',
					items: [
						{ label: 'IDE 확장', slug: 'surfaces/ide' },
						{ label: '웹에서 쓰기', slug: 'surfaces/web' },
						{ label: 'CLI', slug: 'surfaces/cli' },
						{ label: 'GitHub에서 @codex', slug: 'surfaces/github' },
						{ label: '창구 간 설정 공유', slug: 'surfaces/config-sharing' },
					],
				},
				{
					label: '개념 이해하기',
					items: [
						{ label: '승인 모드와 샌드박스', slug: 'concepts/approval-sandbox' },
						{ label: 'AGENTS.md', slug: 'concepts/agents-md' },
						{ label: 'config.toml', slug: 'concepts/config-toml' },
						{ label: '컨텍스트와 대화 관리', slug: 'concepts/context' },
						{ label: '모델 선택', slug: 'concepts/models' },
						{ label: '좋은 프롬프트의 조건', slug: 'concepts/prompting' },
					],
				},
				{
					label: '한 단계 더',
					items: [
						{ label: '코드 리뷰 시키기', slug: 'practice/review' },
						{ label: '긴 작업 맡기기', slug: 'practice/goal-mode' },
						{ label: '서브에이전트', slug: 'practice/subagents' },
						{ label: 'MCP 연결', slug: 'practice/mcp' },
						{ label: '이미지 넣기', slug: 'practice/images' },
						{ label: '웹 검색 활용', slug: 'practice/web-search' },
					],
				},
				{
					label: '조심할 것',
					items: [
						{ label: '비용과 한도 관리', slug: 'pitfalls/cost' },
						{ label: '틀린 코드를 자신 있게 내놓을 때', slug: 'pitfalls/hallucination' },
						{ label: 'API 키·비밀번호 유출', slug: 'pitfalls/secrets' },
						{ label: '내 컴퓨터 파일을 건드린다는 것', slug: 'pitfalls/local-files' },
						{ label: '과제·연구에서의 AI 사용 윤리', slug: 'pitfalls/ethics' },
					],
				},
				{
					label: '참고자료',
					items: [
						{ label: '프롬프트 레시피집', slug: 'reference/prompts' },
						{ label: '에러 메시지별 해결법', slug: 'reference/errors' },
						{ label: '용어집', slug: 'reference/glossary' },
						{ label: '자주 쓰는 명령어·단축키', slug: 'reference/commands' },
						{ label: 'Codex 변경 이력', slug: 'reference/changelog' },
						{ label: '더 읽을거리', slug: 'reference/links' },
					],
				},
				{
					label: '사이트 정보',
					items: [
						{ label: '이 사이트를 만든 이유', slug: 'about/why' },
						{ label: '라이선스', slug: 'about/license' },
						{ label: '오류 제보·기여 방법', slug: 'about/contribute' },
					],
				},
			],
		}),
	],
});
