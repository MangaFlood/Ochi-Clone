# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

# Notes Section

    ## Tailwind CSS

        **leading - Line Height**
        [{In Tailwind CSS, the leading utility is used to control the line height (or vertical spacing between lines of text). It defines how much space is added between the lines of a block of text, making it easier to read or fitting it into a specific layout.

        Here are a few examples of how leading works:

        leading-none: No extra space between lines.
        leading-tight: Slightly reduced line height.
        leading-normal: Default/normal line height.
        leading-relaxed: Slightly increased line height.
        leading-loose: Significantly increased line height.
        You can also define specific line heights using values like leading-5, leading-6, etc.}]

        **Tighter is similar to leading it just adjust the horizontal spacing between the texts or elements**


# locomotive js
locomotive js is a powerful and flexible library for creating smooth scrolling animations on the web. It
allows you to create complex animations with ease, and it's highly customizable.
  https://scroll.locomotive.ca/docs/#/quickstart





# Framer motion
Framer Motion is a popular animation library for React that provides a simple and intuitive API for creating animations
It's highly customizable and allows you to create complex animations with ease.
 to use framer motion just run {npm install framer-motion}

to use it in a component just write {import { motion } from 'framer-motion'}
and then use the motion component like this {motion.div} instead of {div}
We can use initial and then use animate and also transition functionality
like this {motion.div initial={{x:0}} animate={{x:100}} transition={{repeat: , ease: "", duration: }}



---------------------------------------

# project initiation

    ## Components Making and breaking down the website
        All there are the main big over section components of our website. the can be there sub components which wil be mantioned below:-

    > Nav Bar
    > Landing Page
    > Main Moto
    > about
    > Playful eye (projects video behind playful)
    > Projects Cards
    > client review section
    > clients working with us Cards section
    > Are  you ready to work with us (interective ui page)
    > footer