import { createSlug } from "@/lib";
import { shimmer, toBase64 } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";

const Blog = ({ post: { title, date, thumb, category, slug } }) => {
	return (
		<article className="blog card p-4 md:p-5">
			<div className="blog-top relative mb-4">
				<Link
					href={`/demo2/postdetails/${slug}`}
					className="fiximage hover-scale block"
					title={title}
				>
					<Image
						src={thumb}
						height={289}
						width={600}
						alt="Blog Image"
						placeholder="blur"
						blurDataURL={`data:image/svg+xml;base64,${toBase64(shimmer(400, 240))}`}
						className="object-cover object-center"
					/>
				</Link>
				<div className="blog-date absolute left-auto right-5 top-5 inline-block min-h-[60px] min-w-[60px] rounded bg-primary p-2 text-center text-grey">
					<span className="month block text-sm uppercase leading-none">
						{new Date(date).toLocaleDateString("en-us", {
							month: "short",
						})}
					</span>
					<span className="date block text-2xl leading-none">
						{new Date(date).toLocaleDateString("en-us", {
							day: "2-digit",
						})}
					</span>
					<span className="year block text-sm leading-none">
						{new Date(date).getFullYear({
							year: "numeric",
						})}
					</span>
				</div>
			</div>
			<h5 className="mb-0">
				<Link
					href={`/demo2/postdetails/${slug}`}
					className=" block overflow-hidden overflow-ellipsis whitespace-nowrap transition-colors duration-500 hover:text-primary"
					title={title}
				>
					{title}
				</Link>
			</h5>
			<div className="flex list-none gap-1.5 text-sm">
				{category.map((cat, i) => (
					<span key={i} className="after:content-[','] last:after:hidden">
						<Link
							href={`/demo2/category/${createSlug(cat)}/1`}
							className=" hover:text-primary"
						>
							{cat}
						</Link>
					</span>
				))}
			</div>
		</article>
	);
};

export default Blog;
