export type SiteConfig = typeof siteConfig;

export const siteConfig = {
	name: "NTUAI - Making AI Accessible to NTU Students",
	description: "NTUAI is a student-led club to make AI accessible to NTU students. We aim to provide a platform for students to learn and apply AI in their projects.",
	navItems: [
		{
			label: "About",
			href: "#about",
		},
		{
			label: "Events",
			href: "#events",
		},
		{
			label: "Pricing",
			href: "#pricing",
		},
		{
			label: "Contact",
			href: "#contact",
		}
	],
	navMenuItems: [
		{
			label: "About",
			href: "#about",
		},
		{
			label: "Events",
			href: "#events",
		},
		{
			label: "Pricing",
			href: "#pricing",
		},
		{
			label: "Contact",
			href: "#contact",
		},
	],
	links: {
		github: "https://github.com/NTUAI",
		//twitter: "https://twitter.com/getnextui",
		home: "#about",
		discord: "https://discord.gg/BYPhBCVf",
		//sponsor: "https://patreon.com/jrgarciadev"
		instagram: "https://www.instagram.com/ntuaiclub/",
	},
};
