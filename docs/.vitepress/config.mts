import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
	title: 'Purchas Docs',
	description: 'A Purchas docs website',
	themeConfig: {
		// https://vitepress.dev/reference/default-theme-config
		nav: [
			{ text: 'Home', link: '/' },
			{ text: 'Start', link: '/installation' },
		],

		sidebar: [
			{
				text: '安装',
				items: [{ text: '已有项目中添加', link: '/installation' }],
			},
			{
				text: '常规使用',
				items: [{ text: 'Flex', link: '/common/flex' }],
			},
		],

		socialLinks: [{ icon: 'github', link: 'https://github.com/lastshrek' }],
	},
})
