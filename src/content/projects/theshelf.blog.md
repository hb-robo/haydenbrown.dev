---
title: "theshelf.blog"
status: "in-progress"
tags: ["Astro", "SQLite", "ETL Pipelines"]
description: "Art criticism platform supplemented by integrated feeds of consumption data, such as playtime or reading pace."
link: "https://github.com/hb-robo/theshelf.blog"
category: "data-engineering"
order: 1
---

Art criticism and personal writing outlet that integrates consumption data from Last.fm, Goodreads, and gaming platforms to provide richer context. Each work accumulates standalone "thoughts" until a verdict can be made about whether it has earned space on the titular shelf.

Relational schema models artworks, essays, and their many-to-many relationships. A thought titled "Color as Narrative" might reference paintings from different centuries, while a single painting accumulates multiple thoughts over time. This approach is "prismatic" because a single work can be examined from multiple angles, from formal analysis to historical context or personal response.

Built with Astro for static generation and SQLite for relational queries. Markdown for essay content with YAML frontmatter linking to artwork IDs.
