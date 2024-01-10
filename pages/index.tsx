import { Link } from "@nextui-org/link";
import { button as buttonStyles } from "@nextui-org/theme";
import { siteConfig } from "@/config/site";
import { title, subtitle } from "@/components/primitives";
import { GithubIcon } from "@/components/icons";
import DefaultLayout from "@/layouts/default";
import TeamSection from "@/components/sections/team";
import Pricing from "@/components/sections/pricing";
import EventTimeline from "@/components/sections/events";

export default function IndexPage() {
	return (
		<DefaultLayout>
			<section className="flex flex-col items-center bg-cover bg-center justify-center gap-4 py-8 md:py-10 h-screen bg-no-repeat"
				style={{
					backgroundImage: "url('background-1.jpg')",
					backgroundColor: "rgba(0, 0, 0, 0.4)",
					backgroundBlendMode: "darken",
					backgroundSize: "cover",
					backgroundPosition: "center center",
					backgroundRepeat: "no-repeat",
				}}>
				<div className="text-center justify-center" id="home" >
					<h1 className={title()}>Making&nbsp;</h1>
					<h1 className={title({ color: "violet" })}>AI&nbsp;</h1>
					<h1 className={title()}>
						technology accessible for all NTU students
					</h1>
					<h4 className={subtitle({ class: "mt-4" })}>
						NTUAI Club is a student organization that aims to make AI technology accessible for all NTU students.
					</h4>
				</div>

				<div className="flex gap-3">
					<Link
						href='#about'
						className={buttonStyles({
							color: "primary",
							radius: "full",
							variant: "shadow",
						})}
					>
						Getting Started
					</Link>
					<Link
						isExternal
						className={buttonStyles({ variant: "bordered", radius: "full" })}
						href={siteConfig.links.github}
					>
						<GithubIcon size={20} />
						GitHub
					</Link>
				</div>
			</section>
			<section className="flex flex-col items-center bg-cover bg-center justify-center gap-4 py-8 md:py-10">
				<div className="mt-2" id="about">
					<h2 className="text-5xl pt-10 font-bold text-center">About Us</h2>
					<p className="p-12 text-center">
						NTUAI Club is a student organization that aims to make AI technology accessible for all NTU students <br />
						We are a group of students who are passionate about AI and want to share our knowledge with others. <br />
						We hope to build a community of students who are interested in AI and want to learn more about it.
					</p>
					<img src="/hero.jpg" className="w-1/2 mx-auto rounded-xl" />
				</div>

				{
				 //* Create timeline component for events
				 
				<div className="mt-8 mb-8" id="events">
					<h2 className="text-5xl pt-10 pb-10 font-bold text-center">2024 Events</h2>
					{/* @ts-ignore */}
					<EventTimeline />
				</div>
				}
			</section>
			<section className="flex flex-col items-center bg-cover bg-center justify-center gap-4 py-8 md:py-10" id="pricing">
				<Pricing />
			</section>
		</DefaultLayout>
	);
}