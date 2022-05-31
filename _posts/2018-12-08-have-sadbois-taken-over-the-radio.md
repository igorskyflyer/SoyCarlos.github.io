---
layout: post
title: "Have Sad Bois Taken Over the Radio?"
subtitle: "An Empirical Study on the Moods in Music in the United States"
date: 2018-12-08 10:00:00AM
date-written: "December 8, 2018"
blurb: "It is often said that music is a reflection of the society at that time. Turning on the news on any given day often gives bleak news of a new epidemic, or a new study on the poor mental health of the…"
hero_image: "assets/img/blog/sadbois/hero.jpeg"
hero_image_owner: ""
hero_image_owner_url: ""
hero_image_location: "Unsplash"
hero_image_location_url: ""
---
<h1 class="text-2xl">Introduction</h1>

It is often said that music is a reflection of the society at that time. Turning on the news on any given day often gives bleak news of a new epidemic, or a new study on the poor mental health of the public, or any other similarly gloomy subjects. At the same time, there has appeared to be a rise in sad music especially in the world of hip-hop. Giving fame to artists like Lil Uzi Vert, best known for “All My Friends are Dead” and Lil Peep who was known as a pioneer of emo rap. Both artists are known to be part of the emo hip-hop and rap subgenre. The sub-genre has been around since the 2000s but it is not until recently that is has started to become mainstream. I decided to look at the top charts in the United States over the decades to find out if the music in the U.S. has become increasingly emo.
<br><br>
Feel free to skip to the results section if you are only interested in the findings.

<h1 class="text-2xl pt-5">Getting the Data</h1>

I started working with a dataset curated by @walkerkq on GitHub (https://github.com/walkerkq/musiclyrics). The dataset has the song name, artist, rank, lyrics, and the year it was on the Billboard Top 100 Charts for all songs in the Billboard Top 100 Charts from 1965 to 2015. I used Pandas to read the csv file into a Python notebook. I added a column, ‘Query’ which I would use when working with Spotify’s API afterward.
<br><br>

I started working with a dataset curated by @walkerkq on GitHub (https://github.com/walkerkq/musiclyrics). The dataset has the song name, artist, rank, lyrics, and the year it was on the Billboard Top 100 Charts for all songs in the Billboard Top 100 Charts from 1965 to 2015. I used Pandas to read the csv file into a Python notebook. I added a column, ‘Query’ which I would use when working with Spotify’s API afterward.
