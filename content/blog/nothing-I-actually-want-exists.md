---
title: 'Nothing I Actually Want Exists (Yet)'
description: 'Pining over a list of daydream toys and tools.'
pubDate: 'Jan 20 2025'
heroImage: '/blog-placeholder-2.jpg'
tags:
  - 'thoughts'
  - 'personal-knowledge'
  - 'game emulation'
  - 'e-ink'
---

# Introduction

On balance, I'm a pretty critical person. Of myself, of others, of art, of government, of software, of rules, of anything really. This has accompanied a waning sense of pride in that criticism as I've aged.

It was a trait I played off as good-faith ribbing, as it did precipitate positive habits that I still carry with me - things like writing and plumbing my thoughts, engaging in healthy dialogue about problems I notice, and asking the right questions to strengthen my learning. It even became a persona in college, where I hosted a music review talk show on the student radio station. Despite my mixed feelings about it, it's core to my character.

Being this kind of person for so long has split my brain into two concurrent processes, one that's experiential and allows things to pass through honestly, and another that sits in a reactionary state, ready to poke holes. It's not always a pleasant experience or a worthwhile use of my mental energy.

As I've come to realize my own requirements and the things I really want, I've faced an ever-increasing mountain of imperfect tools, chains of command, platforms, and gadgets. It's not anyone's fault but mine that I view them in this light. I can't expect everything in the world to appeal to me, but it does keep me dreaming. I figure I'll work through some of these latent ideations and see if my complaints are coherent, examine the playing field of options, and conject what I can do about it.

## Daydream 1: the PKMS unicorn

#### The problem

Over the past two years, I fell into a modern procrastination trap of getting really into "productivity software," from task managers to social media limiters to personal knowledge management systems (PKMSes). I found it appealing to take learning seriously enough to have dedicated tools for it, and as a data engineer with experience designing graph database schemata, I particularly liked the now-common page backlinking. It gives the impression that you're growing a repository of information where each note serves a purpose, rather than a stack of unrelated papers.

After trying a lot of these tools, I'm left with mixed opinions, and I don't think a perfect solution exists.

#### The requirements.

##### 1) True access across all devices without data exposure

I want a tool vailable even on highly-restricted enterprise machines, meaning no need to install uncommon 3rd-party apps that need file system access. Ideally, the tool is accessible via some web interface, reading from and writing to a remote server, to avoid any interaction with local storage at all.

If my notes must be stored locally per-machine (for instance with tools that rely on P2P sync), they must be encrypted at rest. The common pushback you'll get from PKMS devs is "if encryption is so important, encrypt your entire disk", but this is not always possible when your hardware is managed on your behalf in enterprise environments.

True universal access means no lock-in with any specific software ecosystem, either. I don't know what tools I'm going to be using in the future, and the last thing I want is to run the risk of some calamitous .

Ruled out:

- Obsidian
- Joplin
- Apple Notes
- Logseq

##### 2) Built around tags, not folders

- Must embrace the "throw it all together and index it" approach similar to how email solved the inboxes problem
- First class tag system, treating them as fundamental or important as folders, with search and feature parity
- Nice to have: "supertag" system that allows for hierarchical tags

##### 3) Minimal interaction with cloud services

- Nothing against the cloud, it's a beautiful thing, but these kinds of thoughts are private and should be held locally
- Best case scenario is remote access to a private, self-hosted server with notes stored locally

Ruled out: Notion, Monday.com

##### 4) File-based Markdown note structure

- Ensures portability of my notes to other systems, if need be
- The notes should be readable as standalone files, not just in the context of the system
- Many newer tools store data in relational DB files, usually through SQLite3, obfuscating the notes.

Ruled out:

#### Where I landed

After all of my previous requirements were applied, I was left with the following options:

- Silverbullet.,d
- Siyuan
- Anytype.io
- A paper journal

A paper journal, and a self-hosted Silverbullet.md instance.

For my purposes, I am a proponent of the folder-less, file-based tools that index notes on a series of tags. For me, [[email already solved this problem of folders vs. tags for content]] - I would rather pull up a list of relevant files with a quick text search for a tag than browse a file system looking for something relevant. I concede that the folder approach has a nice quality of "proximity" between related concepts, but it's heuristic, and can be replicated in a dynamic way using linked pages, creating a much more concrete relationship between concepts.

(image: it's also superior for navigation using graphs)

4. A lot of these PKMS tools are commonly blocked in enterprise software environments, especially the cloud tools like Notion.
5. The ones that aren't flagged by enterprise OSes rely on P2P syncing, meaning they will store your (usually Markdown) notes in plain unencrypted text, making them unsuitable for use on a work machine if the notes contain anything sensitive that could be read by an administrative tool.

I tried a number of tools that

## Daydream 2: the Remarkable, but better

## Daydream 3: an uncompromised physical video gaming experience

Video games are near and dear to me, but I never really settled on any kind of coherent stance on how they "should" be played.

Like many other people who switched to PC at the beginning of the 8th generation of consoles, I quickly found myself shedding physical discs and cartridges entirely for the significantly cheaper Steam copies. This was back in the day of Steam Flash Sales and the early Humble Bundles, when they gave out games like candy. Purchasing the same games on PSN or XBLA would run you a comparative fortune for worse performance. And when everything is digital, and your gaming device is just the PC you already need for other things, suddenly having all of those plastic cases and controllers feels wasteful, excessive even. It's easy to convince yourself that these physical things are vestigial.

The digital life was fun for around a decade of ignorant bliss, until [[Capcom retroactively destroyed Steam Deck support for 20 games in my library with DRM]], games that were purchased under the pretense of them being, y'know, playable. To say this shook me up was putting it lightly, I spun into a whole media ownership crisis for all of last spring. I still think Valve is the clear best gaming company in the "Big 4", but I no longer trust the platform like I once did. If I only I could sell these games...

Oh, right! Consoles. If there's one way to fight this paranoia about your previous purchases getting taken out back in the dead of night,

I have to hand it to Nintendo for being possibly the only company that still respects this vision. For all its faults and limitations, the Switch is the one light in a DRM-filled digital darkness, a platform that produced a staggering number of complete physical games from companies big and small, with Nintendo themselves leading the charge. The same year Call of Duty crested the 100GB mark, Nintendo EPD dropped Super Mario Odyssey in a 5.7 GB package.

## Daydream 3: the legal emulation device

## Daydream 4: ANC headphones that don't explode

## Daydream 6:

Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vitae ultricies leo integer malesuada nunc vel risus commodo viverra. Adipiscing enim eu turpis egestas pretium. Euismod elementum nisi quis eleifend quam adipiscing. In hac habitasse platea dictumst vestibulum. Sagittis purus sit amet volutpat. Netus et malesuada fames ac turpis egestas. Eget magna fermentum iaculis eu non diam phasellus vestibulum lorem. Varius sit amet mattis vulputate enim. Habitasse platea dictumst quisque sagittis. Integer quis auctor elit sed vulputate mi. Dictumst quisque sagittis purus sit amet.

Morbi tristique senectus et netus. Id semper risus in hendrerit gravida rutrum quisque non tellus. Habitasse platea dictumst quisque sagittis purus sit amet. Tellus molestie nunc non blandit massa. Cursus vitae congue mauris rhoncus. Accumsan tortor posuere ac ut. Fringilla urna porttitor rhoncus dolor. Elit ullamcorper dignissim cras tincidunt lobortis. In cursus turpis massa tincidunt dui ut ornare lectus. Integer feugiat scelerisque varius morbi enim nunc. Bibendum neque egestas congue quisque egestas diam. Cras ornare arcu dui vivamus arcu felis bibendum. Dignissim suspendisse in est ante in nibh mauris. Sed tempus urna et pharetra pharetra massa massa ultricies mi.

Mollis nunc sed id semper risus in. Convallis a cras semper auctor neque. Diam sit amet nisl suscipit. Lacus viverra vitae congue eu consequat ac felis donec. Egestas integer eget aliquet nibh praesent tristique magna sit amet. Eget magna fermentum iaculis eu non diam. In vitae turpis massa sed elementum. Tristique et egestas quis ipsum suspendisse ultrices. Eget lorem dolor sed viverra ipsum. Vel turpis nunc eget lorem dolor sed viverra. Posuere ac ut consequat semper viverra nam. Laoreet suspendisse interdum consectetur libero id faucibus. Diam phasellus vestibulum lorem sed risus ultricies tristique. Rhoncus dolor purus non enim praesent elementum facilisis. Ultrices tincidunt arcu non sodales neque. Tempus egestas sed sed risus pretium quam vulputate. Viverra suspendisse potenti nullam ac tortor vitae purus faucibus ornare. Fringilla urna porttitor rhoncus dolor purus non. Amet dictum sit amet justo donec enim.

Mattis ullamcorper velit sed ullamcorper morbi tincidunt. Tortor posuere ac ut consequat semper viverra. Tellus mauris a diam maecenas sed enim ut sem viverra. Venenatis urna cursus eget nunc scelerisque viverra mauris in. Arcu ac tortor dignissim convallis aenean et tortor at. Curabitur gravida arcu ac tortor dignissim convallis aenean et tortor. Egestas tellus rutrum tellus pellentesque eu. Fusce ut placerat orci nulla pellentesque dignissim enim sit amet. Ut enim blandit volutpat maecenas volutpat blandit aliquam etiam. Id donec ultrices tincidunt arcu. Id cursus metus aliquam eleifend mi.

Tempus quam pellentesque nec nam aliquam sem. Risus at ultrices mi tempus imperdiet. Id porta nibh venenatis cras sed felis eget velit. Ipsum a arcu cursus vitae. Facilisis magna etiam tempor orci eu lobortis elementum. Tincidunt dui ut ornare lectus sit. Quisque non tellus orci ac. Blandit libero volutpat sed cras. Nec tincidunt praesent semper feugiat nibh sed pulvinar proin gravida. Egestas integer eget aliquet nibh praesent tristique magna.
