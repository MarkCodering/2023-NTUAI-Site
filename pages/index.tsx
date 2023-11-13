import { Link } from "@nextui-org/link";
import { Snippet } from "@nextui-org/snippet";
import { Code } from "@nextui-org/code";
import { button as buttonStyles } from "@nextui-org/theme";
import { siteConfig } from "@/config/site";
import { title, subtitle } from "@/components/primitives";
import { GithubIcon } from "@/components/icons";
import DefaultLayout from "@/layouts/default";
import TeamSection from "@/components/sections/team";
import Pricing from "@/components/sections/pricing";

export default function IndexPage() {
	return (
		<DefaultLayout>
			<section className="flex flex-col items-center bg-cover bg-center justify-center gap-4 py-8 md:py-10 h-screen bg-no-repeat"
				style={{
					backgroundImage: "url('background-1.jpg')",
					backgroundColor: "rgba(0, 0, 0, 0.3)",
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
						isExternal
						href={siteConfig.links.docs}
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

				{/**
				 * Create timeline component for events
				 */}
				<div className="mt-8 mb-8" id="events">
					<h2 className="text-5xl pt-10 font-bold text-center">Events</h2>
					<p className="p-12 text-center">
						We will be hosting a series of events to help students learn more about AI and its applications in the real world. <br />
						Stay tuned for more information on our upcoming events!
					</p>
					<div className="container mx-auto max-w-7xl px-6 flex-grow">
						<div className="flex flex-col md:grid grid-cols-9 mx-auto p-2 text-white">
							<div className="flex flex-row-reverse md:contents">
								<div className="bg-blue-500 col-start-1 col-end-5 p-4 rounded-xl my-4 ml-auto shadow-md">
									<h3 className="font-semibold text-lg mb-1">Event 1</h3>
									<p className="leading-tight text-justify">
										Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi,
										quaerat?
									</p>
								</div>
								<div className="col-start-5 col-end-6 md:mx-auto relative mr-10">
									<div className="h-full w-6 flex items-center justify-center">
										<div className="h-full w-1 bg-blue-800 pointer-events-none" />
									</div>
									<div className="w-6 h-6 absolute top-1/2 -mt-3 rounded-full bg-blue-500 shadow" />
								</div>
							</div>
							<div className="flex md:contents">
								<div className="col-start-5 col-end-6 mr-10 md:mx-auto relative">
									<div className="h-full w-6 flex items-center justify-center">
										<div className="h-full w-1 bg-blue-800 pointer-events-none" />
									</div>
									<div className="w-6 h-6 absolute top-1/2 -mt-3 rounded-full bg-blue-500 shadow" />
								</div>
								<div className="bg-blue-500 col-start-6 col-end-10 p-4 rounded-xl my-4 mr-auto shadow-md">
									<h3 className="font-semibold text-lg mb-1">Event 2</h3>
									<p className="leading-tight text-justify">
										Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi,
										quaerat?
									</p>
								</div>
							</div>
							<div className="flex flex-row-reverse md:contents">
								<div className="bg-blue-500 col-start-1 col-end-5 p-4 rounded-xl my-4 ml-auto shadow-md">
									<h3 className="font-semibold text-lg mb-1">Event 3</h3>
									<p className="leading-tight text-justify">
										Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi,
										quaerat?
									</p>
								</div>
								<div className="col-start-5 col-end-6 md:mx-auto relative mr-10">
									<div className="h-full w-6 flex items-center justify-center">
										<div className="h-full w-1 bg-blue-800 pointer-events-none" />
									</div>
									<div className="w-6 h-6 absolute top-1/2 -mt-3 rounded-full bg-blue-500 shadow" />
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
			<section className="flex flex-col items-center bg-black bg-center justify-center gap-4 py-8 md:py-10" id="members">
				<TeamSection />
			</section>
			<section className="flex flex-col items-center bg-cover bg-center justify-center gap-4 py-8 md:py-10" id="pricing">
				<Pricing />
			</section>
		</DefaultLayout>
	);
}
