# Introduction

This is a responsive image gallery that uses transitions, animations and the [Unsplash API](https://unsplash.com/developers). If you plan on using this api, be sure to check out their documentation and guidelines.

To view the results, visit <https://jessicakarpovich.github.io/image-gallery/>.

# Project Setup

Before you get started, check to make sure you have Sass, nvm, node, gulp, and gulp-sass. 

1. If you haven’t already, install Sass by going through the steps explained [here](http://sass-lang.com/install) on the official documentation.

2. Next, install or update nvm by following the steps [here](https://github.com/creationix/nvm) under **Installation**.

3. Once complete, scroll down to the **Usage** section on the above link and follow the steps to install node.

4. Follow the instructions under **Getting Started** [here](https://github.com/gulpjs/gulp/blob/master/docs/getting-started.md) to install the gulp command globally and in your project directory.

5. Install the gulp-sass plugin by following the [instructions](https://www.npmjs.com/package/gulp-sass/).


## Optional Steps ##
1. If you plan on making changes to the sass files, run `gulp watch` in the terminal to have the CSS immediately updated. 

- *Note:* Before using the above command, you may need to install Browsersync, or to remove some code from the gulpfile. 

- Browsersync allows you to see your changes applied live in your browser. To install it go [here](https://browsersync.io/#install).

2. To use Autoprefixer, to add vendor prefixes to CSS, install [gulp-postcss](https://github.com/postcss/gulp-postcss) and [Autoprefixer](https://github.com/postcss/autoprefixer) by using `npm install gulp-postcss autoprefixer` in your project directory.

# Current Functionality #
A fetch request is sent to pull 12 landscape cloud images from Unsplash and display them using a 1, 2, ar 3 column layout. I chose to use 12 images because 6 is too few and 12 is the next LCM of 2 and 3 (to match the 2 and 3 column layout). 

On small screen sizes, the like count and photographer's name is immediately visible over the image. On larger displays, it appears on hover using a transition. To initially hide it I use:
`height: 0;`
`overflow: hidden;`
and on hover set a height, padding and a negative top margin.

When the logo (Clouds) is clicked, the logo and quote change color.