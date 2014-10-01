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

Goal 1 can use any server rewriting, I am using nginx so you need it on your path for it to work.
Goal 2 worked mostly as expected.  I had issues getting the basic a href to work here, not sure why.
Goal 3 webpack provides this without any problems so far.
Goal 4 This was rather easy once I figured out "bundling" was the term I was looking for.
