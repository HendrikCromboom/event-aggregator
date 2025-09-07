# event-aggregator

## Introduction

Event Aggregator is a portfolio projects that focusses heavily on architecture. The problem/need that the app is supposed to be solving is clearly defined, and its solution is defined before the first line of code is commited.

## The challenge

Events are fun, but it's hard to keep track of them. The amount of times I see a review of an event and think to myself, I would have went if I had known it existed. There are a pletora of different websites that host events and social media pages often have their own system as well. 

## The solution

An event aggregator app: an app that gathers most if not every event around you and allows you to keep track of them in some way.

I will roll out a clean, performant POC with minimal overhead.

The app will contain a couple of in memory queue's that are filled with information by API results and scraper results, those events will then be cleaned, decoupled, deduplicated and funneled to a secondary set of in memory queue's where they await expiration. This will also seperate the Read and Write queues so we should be able to avoid locking databases if we ever choose to use them when scaleing.
In the POC I will attempt to use simple in memory storage, if this isn't sufficient I will use a local or cloud queue instead and eventually a relational database.

## The Event Object

id: string: "evt_1932761892_j2..."

title: string: "Brussels Jazz Festival 2o25"

description: string: "Annual jazz festival featuring international artists..."

date: string: "2025-09-15" (YYYY-MM-DD)

time: string: "19:00" (HH-MM)

city: string: "brussels" (lowercase, indexed)

venue: string: "Ancienne Belgique"

category: string: "music" (lowercase, indexed)

source: string: "eventbrite"

sourceUrl: string: "https://eventbrite.com/e/jazz-test"

createdAt: number: 1777828182900000 (timestamp)

## Proposed Memory Ibdexes

events

eventsByCity

eventsByDate

eventsByCategory

eventsByExpiry

## Estimated in memory lookup

Per event object: 10 strings + 1 number: 500-1000 bytes

Total events: 50-100K: 25-100MB

Query time: <1ms with 5 indexes

I estimate that it would be sufficient to keep the application fast and just in memory during the POC phase.

## Overall architecture

Backend: Node.js(TS: Typing will make the API calls more universal, Axios/Fetch: API calls, Redis: Queues, Node.js Cluster/PM2: Clusters and overal Process Management)
Front-End: React(TS: Same as above, Tailwind, Leaflet: Maps, Framer Motion: Animations)
