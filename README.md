# Angular, Gulp and JSPM
___

This is an opionated starter for getting (static) sites up and running quickly with AngularJS (1.5.x) and JSPM.  It utilizes a bunch of gulp tasks for the build, and expects views and styles to be written with a BEM mindset, and ES2015 written in accordance with ESLint rules, specifically the XO rule set.

### To get started

`npm install` and then `jspm install`.  Gulp tasks can be found in the `tasks` directory, and all tasks can be run with `gulp`.

The folder architecture and overall Angular setup is in large part modelled after [Todd Motto's Angular StyleGuide](https://github.com/toddmotto/angular-styleguide).


The folder structure is currently set up for client side only, with plans to include additional Server directory and integrate Express.js and Mongo.


A sample component can be found in `dev/client/app/common/components/nav`.  All components should be created within either `common` or `components` directories. This includes page components - each page can be its own component, than included on the corresponding `pages/pagename/pagetitle.pug` file.

The `data` directory is mainly for easy SEO inclusion.  It maps to the `pages` directory, so each `.pug` file in the `pages` directory requires a matching file in the `data` directory:

`pages/about/about.pug` needs `data/about.pug.json`

Then just copy over the meta object, and extend the new page with the `main.layout.pug`.


###Issues

This is a WIP, it's not a perfect set up.  The most noteable issue is when changing a component pug file, the scripts Gulp task also needs to run, in order to update the view Angular renders.  This often results in having to reload the page an additional time after BrowserSync reloads.