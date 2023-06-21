---
import BaseLayout from '../layouts/BaseLayout.astro'
const allPosts = await Astro.glob('../pages/posts/*.md');
const pageTitle = "My Astro Learning Blog";
---

<BaseLayout pageTitle={pageTitle}>
  <p>This is where I will post about my journey learning Astro.</p>
  <ul>
    {allPosts.map((post) => (
      <li>
        <a href={post.url}>{post.frontmatter.title}</a>
      </li>
    ))}
  </ul>
</BaseLayout>;
