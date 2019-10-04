---
title: 'Reviewing Code: A Checklist'
layout: post
---

You’ve been there. A 10,000 line [pull request](https://help.github.com/articles/using-pull-requests/) lands in your email and you don’t even know where to begin. _No description provided._

Should you start by installing it, running the test suite, or should you just start scrolling though while your eyes glaze over from the red and green stripes? Is this developer really looking for feedback or are they on a deadline and pressuring you to say [“lgtm”](https://en.wiktionary.org/wiki/LGTM). Will your one innocuous comment ignite a flame war?

[Code review](https://en.wikipedia.org/wiki/Code_review), or more generally peer review, has a long record of [finding defects](https://kev.inburke.com/kevin/the-best-ways-to-find-bugs-in-your-code/) in not just software engineering, but in science, academia, and many other industries. While some argue about the specific percentages of issues that it finds compared to an automated test suite, or others method of testing, code review is an incredibly useful tool in any software teams arsenal against bugs and poor software architecture. But only if it remains a sharp one. Laziness can creep into code review very easily if you’re not careful.

[Jason Brennan](https://twitter.com/jasonbrennan) has written two great pieces on the topic of diligently [writing](http://nearthespeedoflight.com/article/2013_07_10_pull_requests_volume_1__writing_a_great_pull_request) and [reviewing](http://nearthespeedoflight.com/article/2013_07_15_pull_requests_volume_2__giving_great_pull_request_reviews) pull requests, and I’ve used his series as an inspiration for my own system. I’ve also found it’s handy to have a short-form checklist to go over when performing code reviews to remind myself what I’m going for. Maybe it’ll help you and your team too.

## For the engineer drafting the pull request

* Provide a screenshot, GIF, or video of the change if possible. People like pictures.
* Explain **what** changed and **why**.
* List step-by-step how to test the changes.
* Link to any relevant task(s) or ticket(s) in the bug tracker.
* Link to any existing documentation that could make the change easier to understand for the reviewer.
* Mark any areas that are work in progress or require follow up.
	* Note anything that is waiting on other departments or team members.
* Call out any legal, security, or privacy concerns.
* If any third-party dependencies have been added, explain what they are and why you chose them.
* Double check that the code is styled, documented, and tested to your team’s standards.
* Mention people who would be interested in the changeset:
	* Engineer(s) who wrote the old version
	* Designer(s)
	* Product manager (if they’re interested)
* Give the diff one final pass yourself before asking others to take a look. You might catch a few silly things like typos in comments.
* Annotate particularly tricky sections in the diff to make what’s going on even clearer. Maybe even turn these into code comments.
* Get a coffee and wait for the constructive criticism to roll in.

## For the reviewer

_I find it’s helpful to do these in order if you can._

Most importantly, remember that the engineer on the other side of the screen is a person. Try not to be curt or hurtful in your comments.

### The Pull Request

Start here to build an understanding of what you’re about to be diving into.

* Let your teammate know that you’re reviewing their work however’s customary: a comment, a message, making yourself the assignee.
* Read over the pull request description and any linked documents to understand the nature of the changes.
	* Ask questions about anything you don’t understand or if there isn’t enough detail to properly review.

### The Product

Does it work as you’d expect? You can write lots of pretty code that doesn’t work.

* [Checkout the pull request](https://help.github.com/articles/checking-out-pull-requests-locally/) locally.
* Confirm that the project builds and compiles.
* Look for any new warnings or errors that have been introduced.
* Run the unit / integration tests to look for any new failures.
* Follow the steps provided to test the changes or determine a testing plan for it and run through those tests, noting any issues in your comments.
	* Test things that the original engineer might not have considered like errors, failures, other inputs.
* Look for significant changes in performance.
	* Profile the changes if performance seems to have regressed.
* Run the application in another language and region to check for [internationalization and localization](https://en.wikipedia.org/wiki/Internationalization_and_localization) issues.
* Confirm that the changes are [fully accessible](https://en.wikipedia.org/wiki/Computer_accessibility) to customers with disabilities.

### The Code

Alright, it’s time to start looking at the code, line by line.

* Deleted code
	* If code was deleted, was its functionality adequately replaced or is what it provided no longer required?
* Added code
	* Does the new code introduced conform to the teams’s standards for style, documentation, and testing?
	* Does new code make sense when read? Is anything too clever or inexplicable?
	* Is new code safe?
		* Does it have the potential to crash or hang?
		* Are there any obvious race conditions or concurrency concerns?
	* Is new code fast?
		* If not, can you suggest optimizations?
	* Is it well-designed and well-factored?
		* If not, try to propose alternative solutions or schedule a time to whiteboard with the engineer.
	* Is it well-named?
		* Are the names of types and functions obvious and unambiguous?
* Modified code
	* Do you understand why the modifications were made?
	* Do the modifications improve the factoring, design, or performance of the software?
	* Do the modifications change any of the fundamental assumptions that the original code made?
* Dependencies
	* Make sure to understand the implications of new dependencies on third-party code, including their licenses.
* Assets and Resources
	* Do all assets and resources exist in all the right formats and sizes?
	* Are they finalized and ready to go into production?
*  Configuration changes
	* Do you understand the effects of these changes and how they can be rolled back?

---

Adding a system like this to my own pull request reviews has helped me catch a lot more, but I’m sure there are still things I’m missing. If you have ideas about how this checklist can be improved, [pull requests are welcome](https://github.com/mattbischoff/matthewbischoff.com/pulls)!
