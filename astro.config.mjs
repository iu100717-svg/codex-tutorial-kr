// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	// TODO:확인 — Vercel 배포 후 실제 도메인으로 교체 (예: https://codex-tutorial-kr.vercel.app 또는 커스텀 도메인)
	site: 'https://example.vercel.app',
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
			social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/withastro/starlight' }],
			sidebar: [
				{
					label: 'Guides',
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: 'Example Guide', slug: 'guides/example' },
					],
				},
				{
					label: 'Reference',
					items: [{ autogenerate: { directory: 'reference' } }],
				},
			],
		}),
	],
});
