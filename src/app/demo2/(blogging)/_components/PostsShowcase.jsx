"use client";

import { childrenAnimation } from "@/lib/motion";
import { motion } from "framer-motion";
import Blog from "./Blog";

export default function PostsShowcase({ posts }) {
	return (
		<div className="grid grid-cols-2 gap-7">
			{posts &&
				posts?.map((post, index) => (
					<motion.div
						initial="hidden"
						whileInView="visible"
						viewport={{ once: true }}
						transition={{ delay: 0.2 * index }}
						variants={childrenAnimation}
						className="col-span-2 sm:col-span-1"
						key={index}
					>
						<Blog post={post} />
					</motion.div>
				))}
		</div>
	);
}
