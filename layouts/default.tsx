import { Navbar } from "@/components/navbar";
import { Link } from "@nextui-org/link";
import { Head } from "./head";

export default function DefaultLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<div className="relative flex flex-col h-screen">
			<Head />
			<Navbar />
			<main className="flex-col">
				{children}
			</main>
			<footer className="w-full flex-col items-center justify-center py-6">
				<div className="flex flex-row items-center justify-center gap-4">
					<Link
						isExternal
						href="https://www.facebook.com/ntu.aiclub"
						className="text-1xl"
					>
						Facebook
					</Link>
					<Link
						isExternal
						href="https://www.instagram.com/ntu.aiclub/"
						className="text-1xl"
					>
						Instragram
					</Link>
					<Link
						isExternal
						href="
						https://www.linkedin.com/company/ntuaiclub/"
						className="text-1xl"
					>
						LinkedIn
					</Link>
					<Link
						isExternal
						href="
						https://www.youtube.com/channel/UCXkM5WVl0jYz9n9XJ5f2J6Q"
						className="text-1xl"
					>
						GitHub
					</Link>
				</div>
				<div className="flex flex-row items-center justify-center gap-4 mt-4">
					2023 © NTUAI Club
				</div>
			</footer>
		</div>
	);
}
