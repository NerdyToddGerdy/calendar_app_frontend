# 99 Bottles of Beer on the Wall

#### [Hosted on Heroku](https://beerswall99.herokuapp.com/) + [gitHub Repository](https://github.com/d0ughtyj/wdir-project3)

Discover recommendations of beer styles based on your preferences!  Use the sliders to set ranges for IBU, ABV and SRM to filter the list.  Click on a style for more information.  Favorite a style to save it to your profile.  Click on the Brewery information to find locations serving and making beer near you!

**Guest Sign In**:  username: guest | password: guest123

![](http://i.imgur.com/j2lui3i.png)

### Filter Selections and Favorite
![](http://i.imgur.com/R0Y7PuO.png)

### Locate Breweries and Bars
![](http://i.imgur.com/PrLiYfz.png)

### Technologies Used

```
+ Mongo, Express, AngularJS, Node
+ Express sessions, bcrypt
+ Slider Directive
+ Google Fusion Tables + ng-map AngularJS Google Maps V3 Directive
+ API (BreweryDB, The Beer Mapping Project)
+ HTML, Javascript, jQuery
+ Bootstrap Framework | CSS
+ MVC Structure | Models - Users, Beer Styles + Includes
+ RESTful routes: Users
```

### Upcoming Features
+ Additional maps for viewing, user input for location update.
+ Further responsive design.
+ Searchable database of specific beers.  Beer recommendations based off of style favorites.  
+ Admin user with privileges to update database of styles.
+ Routing for profile page and maps.
+ Additional complexity added to animation/transition.

### Known Issues
+ Brewery data includes entry errors, such as incorrect country.  Data uploaded via geocaching based on location name.  All locations should be United States at this time.  Ratings are based on inconsistent user feedback.
+ Beer Style data incomplete.
+ Connectivity of Google Fusion Tables to AngularJS.

### Resources
+ [IBU](https://en.wikipedia.org/wiki/Beer_measurement#Bitterness)
+ [ABV](https://en.wikipedia.org/wiki/Alcohol_by_volume)
+ [SRM](https://en.wikipedia.org/wiki/Standard_Reference_Method) & [SRM Palette](http://www.cloneabeer.com/CABebc.php)
+ [Users and Sessions](https://github.com/singular000/botch_app/blob/master/public/js/app.js )
+ [Authentication](https://codepen.io/aronrodrigues/pen/YXvBWW)
+ [Angular JS Slider](https://github.com/angular-slider/angularjs-slider)
+ [99 Bottles of Beer on the Wall Lyrics](http://www.99-bottles-of-beer.net/lyrics.html)
+ [Color Palette](http://i.imgur.com/2XM2vid.png)

## API
![](http://i.imgur.com/bWXH2Uq.png)

[BreweryDB API](http://www.brewerydb.com/developers)

![](http://i.imgur.com/njeMioq.png)

[The Beer Mapping Project](https://disneytermsofuse.com/)

---

### Collaborators
+ [Jim Doughty @ d0ughtyj](https://github.com/d0ughtyj)
+ [Charlie Prindle @ cprindle1](https://github.com/cprindle1)
+ [Cathleen Wright @ cwithac](https://github.com/cwithac)

*Project Management with [ZenHub](https://www.zenhub.com/)*

---

[General Assembly](https://generalassemb.ly/), 2017
