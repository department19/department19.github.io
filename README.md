# Welcome to my portfolio website

https://department19.github.io/


## Components to the website
### UI Elements
- Navigation bar/pane
- Landing page banner
	- Portrait
	- List of languages I can use and currently learning
- Main content sections
	- About me:
		A relatively brief biography of myself
	- Projects:
		Consist of tile elements linking to the github repo for the website, all of my personal projects and the corresponding github repos and links to group projects I've worked on
	- Blog:
		A log to make public notes of learning, but this isn't optimal in the current format?
	- Contact:
		consider a forms element for an email? or maybe just a stylistic card layout of my lanes of contact?

### JS Elements
- toggling for navigation bar/panel and animation
- toggle for theme toggling
- tracking for animation on scroll
- tracking for mouse hover for tile animation

## Responsiveness considerations
- ...


## Bugs


## Development Log

### Scroll snapping
I had previously attempted to implement scroll snapping in a HTML document and I would run into the problem of it breaking the navigation bar scroll animation to the specific section when in use. After looking into it more, it seems that scroll snapping functions a lot better when the child content overflows the parent box and then you ensure each child element height correspond to the parent box height.
But the problem of using the navigation to scroll to the element is still breaking, currently contemplating looking into using JS to either diable the scroll snap for the animation duration or to use the `.scrollIntoView` method.
A note should also be made that that `scroll-snap-stop: always;` needs to be used so that sections aren't skipped when for example swiping fast on a touch screen.


### Initial commits
Laid out the general files for the website and plans on the structure and components of the website