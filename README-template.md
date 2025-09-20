# Frontend Mentor - Sunnyside agency landing page solution

This is a solution to the [Sunnyside agency landing page challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/sunnyside-agency-landing-page-7yVs3B6ef). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page

### Screenshot

![](./screenshot.png)

### Links

- Solution URL: [Here](https://www.frontendmentor.io/solutions/sunnyside-agency-landing-page-solution-N3tjgNidqu)
- Live Site URL: [Here](https://sunnyside-agency-landing-page-r1gq.vercel.app/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow
- Javascript
- Vite build tool

### What I learned
Learned how to query DOM elements using Javascript

```javascript
const modal = document.querySelector("#modal");
```

Learned how to use the dialog HTML element to create a modal, and how to open that modal using Javascript
```javascript
const burgerMenu = document.querySelector("#open-modal");
burgerMenu.addEventListener("click", () => {
  modal.showModal();
});
```

Learned about the Javascript function `getBoundingClientRect`, which helped with modal interactivity. When clicking anywhere outside the modal the modal closes.

```javascript
modal.addEventListener("click", (event) => {
  const rect = modal.getBoundingClientRect();

  const isInModal =
    event.clientX >= rect.left &&
    event.clientX <= rect.right &&
    event.clientY >= rect.top &&
    event.clientY <= rect.bottom;

  if (!isInModal) {
    modal.close();
  }
});
```

## Author

- Github - [@csaw101](https://www.github.com/csaw101)
- Frontend Mentor - [@csaw101](https://www.frontendmentor.io/profile/csaw101)
