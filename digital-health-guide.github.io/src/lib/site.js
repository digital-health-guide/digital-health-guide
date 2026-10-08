// Constants shared by the client-side components. Keep this free of any
// content imports so it stays cheap to ship to the browser.

export const SITE_URL = 'https://digital-health-guide.github.io';
export const SITE_NAME = 'Digital Health Guide';
export const REPOSITORY = 'https://github.com/digital-health-guide/digital-health-guide';
export const GITLAB_REPOSITORY = 'https://gitlab.com/digital-health-guide/digital-health-guide';

/**
 * Project links offered by the header's link picker. Labels are proper names
 * or file names, so they are the same in every locale; only the picker's own
 * accessible name (strings.js `pickerLink`) is translated.
 * @type {{ label: string, href: string, newTab?: boolean }[]}
 */
export const PROJECT_LINKS = [
	{ label: 'GitHub', href: REPOSITORY, newTab: true },
	{ label: 'GitLab', href: GITLAB_REPOSITORY, newTab: true },
	{ label: 'Lily Design System', href: 'https://github.com/LilyDesignSystem', newTab: true },
	{ label: 'llms.txt', href: `${SITE_URL}/llms.txt` },
	{ label: 'sitemap.xml', href: `${SITE_URL}/sitemap.xml` }
];

/** Themes vendored into static/themes/ by bin/sync-lily.mjs. */
export const THEMES = [
	'light',
	'dark',
	'united-kingdom-national-health-service-england-for-patients',
	'united-kingdom-national-health-service-england-for-practitioners',
	'united-kingdom-national-health-service-scotland-for-patients',
	'united-kingdom-national-health-service-scotland-for-practitioners',
	'united-kingdom-national-health-service-wales-for-patients',
	'united-kingdom-national-health-service-wales-for-practitioners',
	'united-kingdom-government-digital-service'
];

export const THEME_LABELS = {
	light: 'Light',
	dark: 'Dark',
	'united-kingdom-national-health-service-england-for-patients': 'NHS England — patients',
	'united-kingdom-national-health-service-england-for-practitioners': 'NHS England — practitioners',
	'united-kingdom-national-health-service-scotland-for-patients': 'NHS Scotland — patients',
	'united-kingdom-national-health-service-scotland-for-practitioners':
		'NHS Scotland — practitioners',
	'united-kingdom-national-health-service-wales-for-patients': 'NHS Wales — patients',
	'united-kingdom-national-health-service-wales-for-practitioners': 'NHS Wales — practitioners',
	'united-kingdom-government-digital-service': 'GOV.UK'
};
