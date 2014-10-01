mithril-webpack
===============

Demonstration of webpack and mithril

After reading http://lhorie.github.io/mithril-blog/integrating-mithril-and-requirejs.html I wanted to look more into mithril so don't take the demo as the ideal way to work or to achieve these goals merely how I got it to work.

My goals were:

1. Use pathname module routing
2. Single page application
3. Nodejs module dependencies
4. Bundle pages into distinct downloads to reduce initial page load

I did manage to do all 4 items.  A bit more setup than I was hoping for.

1. can use any server rewriting, I am using nginx so you need it on your path for it to work.
2. worked mostly as expected.  I had issues getting the basic a href to work here, not sure why.
3. webpack provides this without any problems so far.
4. This was rather easy once I figured out "bundling" was the term I was looking for.

Usage
=====

1. Clone the repository `git clone https://github.com/blanchg/mithril-webpack`
2. Install with npm `npm install`
3. Ensure nginx is installed and available via the path http://nginx.org
4. Start using npm `npm start`
5. When you are finished stop with `npm stop`  
