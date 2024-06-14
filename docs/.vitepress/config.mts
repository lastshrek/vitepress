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
				text: '介绍',
				items: [
					{ text: '介绍', link: '/introduction' },
					{ text: '核心理念', link: '/core-concepts' },
				],
			},
			{
				text: '安装',
				items: [{ text: '已有项目中添加', link: '/installation' }],
			},
			{
				text: '布局',
				items: [
					{ text: 'Basic', link: '/common/basic' },
					{ text: 'Flex', link: '/common/flex' },
					{ text: 'Grid', link: '/common/grid' },
				],
			},
			{
				text: '间距',
				items: [
					{ text: 'Padding', link: '/common/padding' },
					{ text: 'Margin', link: '/common/margin' },
					{ text: 'Space Between', link: '/common/space-between' },
				],
			},
			{
				text: '尺寸',
				items: [{ text: 'Sizing', link: '/common/sizing' }],
			},
			{
				text: '文字排版',
				items: [
					{ text: 'Font', link: '/common/font' },
					{ text: 'Line', link: '/common/line' },
					{ text: 'Text', link: '/common/text' },
				],
			},
			{
				text: '背景',
				items: [{ text: 'Background', link: '/common/background' }],
			},
			{
				text: '边框',
				items: [{ text: 'Border', link: '/common/border' }],
			},
			{
				text: '效果',
				items: [
					{ text: 'Box Shadow', link: '/common/box-shadow' },
					{ text: 'Opacity', link: '/common/opacity' },
				],
			},
			{
				text: '自定义样式',
				items: [{ text: 'Customize', link: '/common/customize' }],
			},
		],

		socialLinks: [{ icon: 'github', link: 'https://github.com/lastshrek' }],
	},
	markdown: {
		lineNumbers: true,
	},
})
