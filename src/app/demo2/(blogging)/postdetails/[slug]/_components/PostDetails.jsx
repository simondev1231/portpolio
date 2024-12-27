"use client";

import { MarkdownRenderer } from "@/components/utils";
import { createSlug } from "@/lib";
import { shimmer, toBase64 } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function PostDetails({ postData }) {
	const { date, cover, category, content } = postData;
	console.log(postData);

	return (
		<React.Fragment>
			<div className="post-header mb-8">
				<div className="fiximage mb-5 overflow-hidden rounded border border-white border-opacity-20">
					{/* <img src={cover}/> */}
					<Image
						src={cover}
						height={650}
						width={1350}
						alt="Blog Image"
						placeholder="blur"
						blurDataURL={`data:image/svg+xml;base64,${toBase64(shimmer(1350, 650))}`}
						className="object-cover object-center"
					/>
				</div>
				<div className="flex flex-wrap justify-between gap-x-4">
					<div className="mb-0 flex gap-2 text-heading">
						Category :{" "}
						<div className="inline-flex list-none gap-1.5">
							{category.map((cat, i) => (
								<span key={i} className="after:content-[','] last:after:hidden">
									<Link
										href={`/category/${createSlug(cat)}/1`}
										className="text-body hover:text-primary"
									>
										{cat}
									</Link>
								</span>
							))}
						</div>
					</div>
					<p className="mb-0 text-heading">
						Published on :
						<span className="ml-1.5 text-body">
							{`${new Date(date).toLocaleDateString("en-us", {
								month: "short",
							})} ${new Date(date).toLocaleDateString("en-us", {
								day: "2-digit",
							})}, ${new Date(date).getFullYear({
								year: "numeric",
							})}`}
						</span>
					</p>
				</div>
			</div>
			<div className="post-body mt-4">
				<MarkdownRenderer>{content}</MarkdownRenderer>
			</div>
		</React.Fragment>
	);
}
