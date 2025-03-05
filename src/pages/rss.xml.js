import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import { SITE_TITLE, SITE_DESCRIPTION } from '../consts';

export async function GET(context) {
	const blogPosts = await getCollection('blog');

	// Debugging: Log blogPosts to check if data is retrieved
	console.log("Fetched blog posts:", blogPosts);

	return rss({
		title: SITE_TITLE,
		description: SITE_DESCRIPTION,
		site: context.site,
		trailingSlash: false,
		stylesheet: '/rss/pretty-feed-v3.xsl',
		items: blogPosts.map((post) => {
			console.log("Processing post:", post); // Log each post for debugging

			// Generate category tags if they exist
			const categories = post.data.tags
				? post.data.tags.map((tag) => `<category>${tag}</category>`).join('')
				: '';

			return {
				title: post.data.title,
				description: post.data.description,
				pubDate: post.data.pubDate,
				lastModified: post.data.updatedDate || post.data.pubDate,
				link: `/blog/${post.id}/`,
				customData: `
					<language>en-us</language> 
					${categories}
				`.trim(),
			};
		}),
	});
}
