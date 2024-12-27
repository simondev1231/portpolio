import RootClientLayout from "@/components/utils/RootClientLayout";
import "normalize.css";
import "swiper/css";
import "swiper/css/navigation";
import "../styles/globals.scss";

export const metadata = {
	title: {
		template: "%s | Vulovic",
		default: "Vulovic",
	},
	description:
		"Vulovic - is a creative personal portfolio React template build with NextJS and Tailwindcss.",
	keywords: "React Template, Portfolio Template",
	author: "Nuclear Themes",
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<RootClientLayout>
				<body className="relative">
					{children}
					<div className="portal-root"></div>
				</body>
			</RootClientLayout>
		</html>
	);
}

