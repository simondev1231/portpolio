"use client";

import { createSlug } from "@/lib";
import { childrenAnimation } from "@/lib/motion";
import { motion } from "framer-motion";
import Link from "next/link";

export default function PostsSidebar({ categories, recentPosts }) {
	return (
		<div className="widget sticky top-[107px] mt-8 space-y-10 lg:mt-0">
			<motion.div
				initial="hidden"
				whileInView="visible"
				viewport={{ once: true }}
				transition={{ delay: 0.2 }}
				variants={childrenAnimation}
				className="widget widget-category card rounded p-4"
			>
				<h5 className="border-b border-white border-opacity-20 pb-2 font-medium text-primary">
					Categories
				</h5>
				<ul className="styledlist mb-0 list-none pl-0">
					{categories.map((category) => (
						<li key={category.name}>
							<Link
								href={`/demo2/category/${createSlug(category.name)}/1`}
								className="clearfix hover:text-primary"
							>
								{category.name}
								<span className="float-right">({category.count})</span>
							</Link>
						</li>
					))}
				</ul>
			</motion.div>
			<motion.div
				initial="hidden"
				whileInView="visible"
				viewport={{ once: true }}
				transition={{ delay: 0.4 }}
				variants={childrenAnimation}
				className="widget widget-recentpost card rounded p-4"
			>
				<h5 className="border-b border-white border-opacity-20 pb-2 font-medium text-primary">
					Recent Posts
				</h5>
				<ul className="mb-0 list-none pl-0">
					{recentPosts.map((post, index) => (
						<li key={index} className="mb-4 last:mb-0">
							<p className="mb-0">
								<Link
									href={`/demo2/postdetails/${post.slug}`}
									className="text-heading no-underline hover:text-primary hover:underline"
								>
									{post.title}{" "}
								</Link>
							</p>
							<small className="text-body">
								{`${new Date(post.date).toLocaleDateString("en-us", {
									month: "short",
								})} ${new Date(post.date).toLocaleDateString("en-us", {
									day: "2-digit",
								})}, ${new Date(post.date).getFullYear({
									year: "numeric",
								})}`}
							</small>
						</li>
					))}
				</ul>
			</motion.div>
		</div>
	);
}
