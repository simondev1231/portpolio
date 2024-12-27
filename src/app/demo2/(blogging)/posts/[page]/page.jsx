import { Breadcrumb } from "@/components/elements";
import { getAllCategories, getPostsByPage, getRecentPosts } from "@/lib/blogging";

import Link from "next/link";
import React from "react";
import PostsShowcase from "../../_components/PostsShowcase";
import PostsSidebar from "../../_components/PostsSidebar";

export const metadata = {
	title: "Posts",
};

export default function PostsPage({ params }) {
	const { page } = params;

	const { posts, hasMore } = getPostsByPage(parseInt(page));
	const categories = getAllCategories();
	const recentPosts = getRecentPosts();

	return (
		<React.Fragment>
			<Breadcrumb
				title="Blogs"
				paths={[
					{
						name: "Home",
						link: "/demo2/",
					},
					{
						name: "Blogs",
						link: "",
					},
				]}
				blurred
			/>
			<div className="blogs py-24 lg:py-28 xl:py-32">
				<div className="container mx-auto">
					<div className="grid grid-cols-1 gap-7 lg:grid-cols-12">
						<div className="col-span-1 lg:col-span-9">
							<PostsShowcase posts={posts} />
							<div className="flex gap-3 pt-10 text-center">
								{page !== "1" && (
									<Link
										href={`/demo2/posts/${String(parseInt(page) - 1)}`}
										className="btn btn-small"
									>
										<span>Prev</span>
									</Link>
								)}
								{hasMore && (
									<Link
										href={`/demo2/posts/${String(parseInt(page) + 1)}`}
										className="btn btn-small"
									>
										<span>Next</span>
									</Link>
								)}
							</div>
						</div>
						<div className="col-span-1 lg:col-span-3">
							<PostsSidebar categories={categories} recentPosts={recentPosts} />
						</div>
					</div>
				</div>
			</div>
		</React.Fragment>
	);
}
