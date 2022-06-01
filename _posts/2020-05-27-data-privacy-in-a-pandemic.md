---
layout: post
title: "Data Privacy In a Pandemic"
subtitle: "Analyzing Different Approaches to Covid-19 Contact Tracing"
date: 2020-05-27 10:00:00AM
date-written: "May 27, 2020"
blurb: "As nations around the world begin to gradually reopen, governments are looking at all options in hopes of containing future outbreaks Their holy grail: Contact Tracing Apps"
hero_image: "assets/img/blog/data-privacy-pandemic/hero.jpeg"
hero_image_owner: "Tim Mossholder"
hero_image_owner_url: "https://unsplash.com/@timmossholder?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"
hero_image_location: "Unsplash"
hero_image_location_url: "https://unsplash.com/s/photos/corona?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"
data_lyket_id: "pandemic-privacy"
---

As nations around the world begin to gradually reopen, governments are looking at all options in hopes of containing future outbreaks.
<br> <br>
Their holy grail: Contact Tracing Apps
<br><br>
Experts have already raised concerns about the security and effectiveness of these apps. But, before we get into that, let’s discuss the analog counterpart.
<br><br>
For many of us, this may be the first time we have heard of Contact Tracing, but it is nothing new. Contact Tracing has been used by public health officials for centuries. Most notably, to contain STD/STI transmissions.
<br><br>
First, they isolate the infected person to prevent further spread, and then they track down every individual who they were in contact with. They do all of this without disclosing the identity of the individual. That last part is critical to this operation, contact tracing does not require the identity to be revealed and privacy is essential.
<br><br>
So, what have governments and private companies been doing to bring the process to the digital world? Well, let’s discuss the two approaches being used.
<br><br>
<h1 class="text-2xl pt-5">Centralized Approach</h1>
I started working with a dataset curated by @walkerkq on GitHub (https://github.com/walkerkq/musiclyrics). The dataset has the song name, artist, rank, lyrics, and the year it was on the Billboard Top 100 Charts for all songs in the Billboard Top 100 Charts from 1965 to 2015. I used Pandas to read the csv file into a Python notebook. I added a column, ‘Query’ which I would use when working with Spotify’s API afterward.
<br><br>


I started working with a dataset curated by @walkerkq on GitHub (https://github.com/walkerkq/musiclyrics). The dataset has the song name, artist, rank, lyrics, and the year it was on the Billboard Top 100 Charts for all songs in the Billboard Top 100 Charts from 1965 to 2015. I used Pandas to read the csv file into a Python notebook. I added a column, ‘Query’ which I would use when working with Spotify’s API afterward.
zw