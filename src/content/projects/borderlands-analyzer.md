---
title: "Borderlands Loot Optimizer"
status: "shelved"
tags: ["Python", "XML Parsing", "Combinatorial Optimization"]
description: "Parses Unreal Engine weapon definitions to calculate optimal gun rolls per character build. Handles multiplicative damage bonuses and conditional modifiers."
link: "https://github.com/hb-robo/lootmath.com/tree/main/borderlands"
category: "data-analysis"
order: 4
---

Borderlands generates millions of possible weapon combinations from manufacturers, parts, and elemental effects. Each part contributes stat modifiers that can be additive or multiplicative.

Parser extracts weapon definitions from XML game files, building a model of how different parts combine. Optimization layer searches for best-in-slot configurations given player inputs (character class, skill tree, class mod).

Challenge is handling conditional modifiers—some bonuses only apply to specific manufacturers or weapon types. Current implementation uses constraint satisfaction to prune invalid combinations before brute-force search.

Useful for theorycrafting and understanding why certain legendary drops are valued despite lower base stats.
