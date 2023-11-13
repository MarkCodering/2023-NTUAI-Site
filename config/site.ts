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
			label: "Members",
			href: "#members",
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
			label: "Profile",
			href: "/profile",
		},
		{
			label: "Dashboard",
			href: "/dashboard",
		},
		{
			label: "Projects",
			href: "/projects",
		},
		{
			label: "Team",
			href: "/team",
		},
		{
			label: "Calendar",
			href: "/calendar",
		},
		{
			label: "Settings",
			href: "/settings",
		},
		{
			label: "Help & Feedback",
			href: "/help-feedback",
		},
		{
			label: "Logout",
			href: "/logout",
		},
	],
	links: {
		github: "https://github.com/nextui-org/nextui",
		twitter: "https://twitter.com/getnextui",
		docs: "https://nextui-docs-v2.vercel.app",
		discord: "https://discord.gg/9b6yyZKmH4",
		//sponsor: "https://patreon.com/jrgarciadev"
	},
};
