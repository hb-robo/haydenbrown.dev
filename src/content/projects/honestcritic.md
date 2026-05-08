---
title: "HonestCritic"
status: "shelved"
tags: ["Browser Extension", "JavaScript", "Content Scripts"]
description: "Browser extension that redacts user ratings until you submit your own rating. Prevents anchoring bias in media criticism."
link: "https://github.com/hb-robo/honestcritic"
category: "web"
order: 2
---

Built after noticing how seeing "8.5/10" before watching something colors your perception. Extension uses content scripts to identify and blur rating elements on sites like IMDb, Letterboxd, and Goodreads.

Tracks which items you've rated locally, revealing scores only after you've formed your own opinion. Simple premise, interesting implementation challenge—every site structures ratings differently.

Currently supports RateYourMusic. Working on Goodreads and Rotten Tomatoes.
