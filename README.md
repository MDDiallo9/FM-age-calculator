# Frontend Mentor - Age calculator app solution

This is a solution to the [Age calculator app challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/age-calculator-app-dF9DFFpj-Q). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)

## Overview

### The challenge

Users should be able to:

- View an age in years, months, and days after submitting a valid date through the form
- Receive validation errors if:
  - Any field is empty when the form is submitted
  - The day number is not between 1-31
  - The month number is not between 1-12
  - The year is in the future
  - The date is invalid e.g. 31/04/1991 (there are 30 days in April)
- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page
- **Bonus**: See the age numbers animate to their final number when the form is submitted

### Screenshot

![](https://raw.githubusercontent.com/MDDiallo9/FM-age-calculator/main/screen.png)

### Links

- Solution URL: [Github Repo](https://github.com/MDDiallo9/FM-age-calculator/)
- Live Site URL: [Link](https://fm-age-calculator-five.vercel.app/)

## My process

I looked up a library to get the duration from a given date to the current day , I quickly found date-fns and the necessary functions using the official documentation.
I then started working on the mobile layout using tailwind , I also worked on a simple 3 input form to get the user's date of birth.

### Built with

- React + Vite
- Tailwind CSS
- Date-fns library


### What I learned

This frontend mentor project helped me understand React and TailwindCSS better. I was surprised by how much time I saved by using tailwind.

### Useful Ressources

- Date-fns documentation : [Link](https://date-fns.org/v2.16.1/docs/Duration)
- TailwindCSS cheat sheet : [Link](https://tailwindcomponents.com/cheatsheet/)
- React Documentation : [Link](https://react.dev/)



/////////////
# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
