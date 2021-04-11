<template>
<div>
  <!-- FONTS -->
  <link href='https://fonts.googleapis.com/css?family=Open+Sans:300,400,600' rel='stylesheet' type='text/css'>
  <link href='https://fonts.googleapis.com/css?family=Montserrat' rel='stylesheet' type='text/css'>

  <!-- PAGE STUFF -->
  <input type="checkbox" id="menuCheckbox"/>
  <input type="checkbox" id="searchCheckbox"/>

  <div class="photo-container">
    <div class="close">close</div>
    <div class="photo-details">
      <h2>Photo Details</h2>
      <ul>
        <li class="rela-inline"><span>PUBLISHED : </span> Jan 1, 1980</li>
        <li class="rela-inline"><span>DIMENSIONS : </span>9999 x 9999</li>
        <li class="rela-inline"><span>MAKE : </span>Canon</li>
        <li class="rela-inline"><span>MODEL : </span>Canon EOS 6D</li>
        <li class="rela-inline"><span>EXPOSURE TIME : </span>0.004</li>
        <li class="rela-inline"><span>APERTURE : </span>5</li>
        <li class="rela-inline"><span>FOCAL LENGTH : </span>178</li>
        <li class="rela-inline"><span>ISO : </span>100</li>
      </ul>
    </div>
    <div class="abs-center photo-tab"></div>
  </div>

  <div class="side-menu">
    <label for="menuCheckbox" class="checkbox-label side-menu-label">
      <div class="abs-center white-x"></div>
    </label>
    <div class="rela-block menu-content">
      <h3 class="rela-block list-header">Browse</h3>
      <ul class="rela-block options-list">
        <li>Featured</li>
        <li>Popular</li>
        <li>New</li>
        <li>Collections</li>
      </ul>
      <h3 class="rela-block list-header">Explore</h3>
      <ul class="rela-block options-list">
        <li>Made with Unsplash</li>
        <li>Tagged Photos</li>
        <li>Developers</li>
        <li>Backstage</li>
        <li>Submit a Photo</li>
      </ul>
    </div>
    <div class="social-buttons-container">
      <div class="rela-inline social-button twitter"></div>
      <div class="rela-inline social-button facebook"></div>
      <div class="rela-inline social-button pinterest"></div>
      <div class="rela-inline social-button instagram"></div>
    </div>
  </div>

  <div class="rela-block top-bar"><a href="https://codepen.io/mavrK/" class="link">Made by one cool dude</a></div>

  <div class="rela-block top-container">
    <div class="rela-block top-center-container">
      <div class="inner-container top-text-container">
        <h2 class="rela-block top-main-text">Unsplash</h2>
        <p>Free High-resolution images every ten days.</p>
        <div class="rela-inline button white-text">Subscribe</div>
      </div>
      <div class="inner-container top-search-container">
        <p class="search-text">Search Unsplash</p>
        <input type="text" placeholder="Type Something" class="top-search"/>
      </div>
    </div>
    <label for="menuCheckbox" class="checkbox-label menu-label">
      <div class="abs-center black-lines"></div>
    </label>
    <label for="searchCheckbox" class="checkbox-label search-label">
      <div class="abs-center magnifying-glass"></div>
    </label>
  </div>

  <div class="rela-block image-layout-selector">
    <div class="floated layout-option rows">
      <div class="abs-center bars rotated"></div>
    </div>
    <div class="floated layout-option columns active">
      <div class="abs-center bars"></div>
    </div>
  </div>

  <div class="rela-block image-grid-container">
    <div class="floated image-column 1">
      <div class="rela-block image"></div>
      <div class="rela-block image"></div>
      <div class="rela-block image"></div>
      <div class="rela-block image"></div>
      <div class="rela-block image"></div>
      <div class="rela-block image"></div>
    </div>
    <div class="floated image-column 2">
      <div class="rela-block image"></div>
      <div class="rela-block image"></div>
      <div class="rela-block image"></div>
      <div class="rela-block image"></div>
      <div class="rela-block image"></div>
      <div class="rela-block image"></div>
    </div>
    <div class="floated image-column 3">
      <div class="rela-block image"></div>
      <div class="rela-block image"></div>
      <div class="rela-block image"></div>
      <div class="rela-block image"></div>
      <div class="rela-block image"></div>
      <div class="rela-block image"></div>
    </div>
  </div>

  <div class="rela-block button black-text load-button">Load More</div>

</div>
</template>

<script>
export default {
  name: "demo"
}
// Pinspiration
// https://www.behance.net/gallery/35580657/Unsplash-Website-Redesign

// Array for feed images
var imgArray = ['https://ribbonaroundabomb.files.wordpress.com/2013/06/hipster-art-three-of-the-possessed.jpg',
  'https://41.media.tumblr.com/dec02412e0834d4a0d7f5f518cde3ab1/tumblr_mf0e9t1dGp1rhrqzqo1_1280.jpg',
  'https://s-media-cache-ak0.pinimg.com/564x/24/3d/c2/243dc20dd6d5b00f713de85458182537.jpg',
  'http://s5.favim.com/610/69/Favim.com-hot-art-beautiful-black-633061.jpg',
  'http://favim.com/610/201108/24/Favim.com-black-black-and-white-cute-girl-hair-129749.jpg',
  'http://artfucksme.com/wp-content/uploads/2015/04/gia3.jpg',
  'https://d13yacurqjgara.cloudfront.net/users/464297/screenshots/1849217/dribbb2-01_1x.jpg',
  'http://animalnewyork.com/wp-content/uploads/glitch-pillows.jpg',
  'https://i.ytimg.com/vi/l8gT1KywQpU/maxresdefault.jpg',
  'https://s-media-cache-ak0.pinimg.com/736x/7e/fe/f0/7efef0e2ba68011139130b19ff6aaf87.jpg',
  'https://i.ytimg.com/vi/UsfhWF6mE7A/maxresdefault.jpg',
  'https://s-media-cache-ak0.pinimg.com/236x/89/da/4c/89da4cd694aa1a134a8db877f68517b9.jpg',
  'http://wallpapers.wallhaven.cc/wallpapers/full/wallhaven-326146.jpg',
  'https://cdn-img-2.wanelo.com/p/eb6/752/4fa/2b3876bbab34d77bac4d463/x354-q80.jpg',
  'http://s2.favim.com/orig/30/amazing-astronaut-beautiful-earth-hipster-Favim.com-245303.jpg',
  'https://s-media-cache-ak0.pinimg.com/236x/fd/5b/1c/fd5b1c54cb4f4fd484c0a27e6a1885de.jpg',
  'https://s-media-cache-ak0.pinimg.com/736x/06/7f/a1/067fa1766c1e02258e9bb751460a47bd.jpg',
  'https://pbs.twimg.com/media/Ce0fLfjUAAAQbs8.jpg',
  'http://wallup.net/wp-content/uploads/2016/01/239135-No_Mans_Sky-video_games-pixel_art-fan_art-736x459.jpg',
  'http://cdn.arenabg.com/resize/500/-/var/assets/posters/2013-05/ea31966a0c2e34bd6982873170f36cc79bdf31e7.jpg',
  'http://static.giantbomb.com/uploads/original/3/35099/2184043-fez9.jpg',
  'https://pbs.twimg.com/media/Ce7EjAZVAAEmq0K.jpg',
  'http://www.heart-machine.com/wp-content/uploads/2015/01/HLD_Screenshot_01_rise_1080.png',
  'http://designbent.com/wp-content/uploads/2013/05/The_Connection.jpg',
  'http://cache.spreadshirt.net/Public/submissions/lafraise/785/106785.jpg',
  'http://images.wookmark.com/156306_tumblr_mcebl1vava1r46py4o1_1280.jpg',
  'https://s-media-cache-ak0.pinimg.com/736x/03/37/0c/03370c885c0ef23326cb667a3637b0af.jpg',
  'http://media-cache-ak0.pinimg.com/736x/2a/4c/4b/2a4c4b85a760a54dbd68f253199cbbe4.jpg',
  'http://fraghero.com/wp-content/uploads/2016/02/7-6.jpg',
  'https://fat.gfycat.com/SaltyLavishIndianrhinoceros.gif','',
  'https://seesouthernstars.files.wordpress.com/2015/06/porkey.jpg'];

// Loop for placing the images into the divs on the page
for(var i=0;i<imgArray.length;i++) {

  // Changing height to width ratio of div based on the ratio of the image - SIZING NOT WORKING 100%
  var img = new Image();
  img.src = imgArray[i];
  if((img.width / img.height) > 1.2) {$('.image').eq(i).addClass('wide')}
  else if((img.width / img.height) < 0.8333) {$('.image').eq(i).addClass('long')}
  else {$('.image').eq(i).addClass('square')}; // Fallback to normal square

  // Setting the Background image
  $('.image').eq(i).css('background-image', 'url("'+imgArray[i]+'")');
};

// Load More images function - NOT WORKING PROPERLY WITH THE SIZING
$('.load-button').click(function(){
  for(var j = 1; j < 4; j++){
    var imageNum = $('.image').length; // Getting total number of images on the page.

    for(var i = 1; i < 4; i++){
      var thisImageNum = imageNum + i;
      $('.image-column.'+i).append('<div class="rela-block image '+thisImageNum+'"></div>');

      var img = new Image();
      img.src = imgArray[thisImageNum - 1];
      if((img.width / img.height) > 1.2) {$('.image.'+thisImageNum).addClass('wide')}
      else if((img.width / img.height) < 0.8333) {$('.image.'+thisImageNum).addClass('long')}
      else {$('.image.'+thisImageNum).addClass('square')};

      // Setting the Background image
      $('.image.'+thisImageNum).css('background-image', 'url("'+imgArray[thisImageNum - 1]+'")');
    };
  };
  return false;
});

// Image Layout Switching Function
$('.layout-option').click(function(){
  $('.layout-option').removeClass('active');
  $(this).addClass('active');
  $(this).hasClass('rows')?$('.image-column').addClass('rows'):$('.image-column').removeClass('rows');
  return false;
});

// Display Image function
// Click function written this way due to dynamically added images
$('.image-grid-container').on('click', '.image', function() {

  // get the url image clicked
  var thisBG = $(this).css('background-image');

  //assign background to the pop-up and display
  $('.photo-tab').css('background',thisBG+' center no-repeat');
  $('.photo-container').addClass('displayed');
  return false;
});

// closing the menu-overlay
$('.close, .photo-container').click(function(){
  $('.photo-tab').css('background','none');
  $('.photo-container').removeClass('displayed'); return false;
});
// preventing clicks on the menu closing it for now because there is nothing inside yet.
$('.photo-tab').click(function(){ return false; });
</script>

<style scoped>
/*
// MIXINS
// Dummy Variable
$x = false;
// The top, left, right, and bottom are optional
setup(display, position, margin, top = null, right = null, bottom = null, left = null)
    display display
    position position
    margin margin
    if position == "absolute" || "fixed"
        top top
        left left
        right right
        bottom bottom

font(font-family, font-size, letter-spacing, font-weight, line-height = null)
    font-family font-family
    font-size font-size
    letter-spacing letter-spacing
    font-weight font-weight
    line-height line-height

// GENERAL FONTS AND CLASSES AND SETUP STUFF
* {box-sizing: border-box; transition: 0.333s ease;}

.rela-block
    setup(block, relative, auto)
.rela-inline
    setup(inline-block, relative, auto)
.floated
    setup(inline-block, relative, $x)
    float left

.abs-center
    setup($x, absolute, $x, 50%, $x, $x, 50%)
    transform translate(-50%, -50%)
    text-align center
    width 88%

// --- PAGE STYLINGS ---
body
    font("Open Sans", 18px, 2px, 400, 24px)
    background-color #ECECEC
    transition 0s

.photo-container
    z-index -1
    setup($x,fixed,$x,0,0,0,0)
    opacity 0
    background-color rgba(0,0,0,0.73)
    &.displayed {z-index: 200; opacity: 1;}
    &.displayed .photo-tab {top: 45%}
    &.displayed .photo-details {bottom: 4%; transition: 0.35s ease, bottom 0.35s 0.35s ease}
    & .close {color: white; margin: 30px; cursor: pointer;}

.photo-details
    setup($x,absolute,$x,$x,$x,-30%,50%)
    transform translateX(-50%)
    color white
    width 60%
    max-width 700px
    font("Open Sans",14px,2px,300,24px)
    & h2 {font("Montserrat",18px,4px,400,30px); text-transform: uppercase;}
    & ul {text-align: justify; margin-left: -15px}
    & li {margin: auto 15px}
    & span {font-weight: 600}

.photo-tab
    z-index 300
    top 55%
    width 50%
    padding-bottom 50%
    margin auto
    background-size contain !important
    background-position center !important

.side-menu
    z-index 100
    setup($x, fixed, $x, 0, $x, 0, -360px)
    width 360px
    background-color #1A1A1A
    padding-top 80px

.list-header
    color #888
    margin-bottom 10px
    padding-left 30px

.options-list
    margin-bottom 40px
    & li
        height 50px
        color #CCC
        line-height 50px
        padding-left 30px
        transition 0.15s ease
        cursor pointer
        &:hover {background-color: rgba(255,255,255,0.2); color: #FFF}

.social-buttons-container
    setup($x, absolute, $x, $x, 0, 0, 0)
    height 60px
    text-align center

.social-button
    height 55px
    width 55px
    margin 0 5px
    background-size cover !important
    transform scale(0.75)
    cursor pointer
    &.twitter
        background url('https://cdn2.iconfinder.com/data/icons/black-white-social-media/32/twitter_online_social_media-128.png') no-repeat center
    &.facebook
        background url('https://cdn2.iconfinder.com/data/icons/black-white-social-media/32/online_social_media_facebook-128.png') no-repeat center
    &.pinterest
        background url('https://cdn2.iconfinder.com/data/icons/black-white-social-media/32/online_social_media_pinterest-128.png') no-repeat center
    &.instagram
        background url('https://cdn2.iconfinder.com/data/icons/black-white-social-media/32/instagram_online_social_media_photo-128.png') no-repeat center
    &:hover
        transform scale(1)
        transition 0.3s cubic-bezier(0.3, 0.2, 0, 2.5)

.top-bar
    z-index 5
    height 200px
    background-color #1A1A1A
    text-align center
    overflow hidden
    & .link
        position relative
        font-size 14px
        letter-spacing 0
        top 30px
        text-decoration none
        color #999

.checkbox-label
    z-index 101
    height 40px
    width 40px
    cursor pointer
    &:after
        height 100%
        font("Open Sans", 18px, 0px, 600, 24px)
        color black
        opacity 0
        transition 0.25s ease
    &:hover:after {opacity: 1}
    &.side-menu-label {opacity:1; setup($x,absolute,$x,20px,20px)}
    &.menu-label
        setup($x, absolute, $x, 20px, $x, $x, 20px)
        &:after{content: "MENU"; setup($x, absolute, $x, 20%, $x, $x, 45%)}
        &:hover:after{left: 100%}
    &.search-label
        setup($x, absolute, $x, 20px, 20px)
        &:after{content: "SEARCH"; setup($x, absolute, $x, 20%, $x, $x, -100%)}
        &:hover:after{left: -170%}

.black-lines
    height 2px
    width 18px
    background-color #222
    left 40%
    &:before, &:after
        content ""
        position absolute
        left 0
        height 2px
        width 26px
        background-color #222
        transition 0.2s ease
    &:before {top: -7px}
    &:after {top: 7px}

.magnifying-glass
    height 32px
    width 36px
    &:before
        content ""
        setup($x, absolute, $x, 3px, $x, $x, 3px)
        height 16px
        width 16px
        border 2px solid #222
        border-radius 100%
        transform rotate(45deg)
    &:after
        content ""
        setup($x, absolute, $x, $x, 10px, 3px)
        height 12px
        width 2px
        background-color #222
        transform rotate(-49deg)

.white-x
    height 40px
    width 40px
    &:before, &:after
        content ""
        setup($x, absolute, $x, 50%, $x, $x, 50%)
        height 2px
        width 26px
        background-color white
    &:before{transform: translate(-50%, -50%) rotate(-45deg)}
    &:after{transform: translate(-50%, -50%) rotate(45deg)}

input[type=checkbox] {display: none}
#menuCheckbox:checked ~ .side-menu{left: 0; box-shadow: 2px 0px 18px 0px rgba(0,0,0,0.5)}
#searchCheckbox:checked
    &~ .top-container .top-center-container
        & .top-text-container {left: -100%}
        & .top-search-container {left: 0}

.top-container
    z-index 10
    height 200px
    width 88%
    max-width 1200px
    padding-top 25px
    margin -100px auto 50px
    background-color white
    text-align center
    box-shadow 0px 3px 12px 0px rgba(0,0,0,0.2)
    & p {color: #777; margin: 0 auto 25px}
    & h2 {color: #2B2B2B; margin: 0 auto 12px}

.top-center-container
    height 190px
    width 84%
    overflow-x hidden

.inner-container
    width 100%
    overflow hidden
    setup($x, absolute, $x, 0, $x, 0, $x)
    &.top-text-container
        left 0
        transition 0.4s ease
    &.top-search-container
        left 100%
        transition 0.4s ease
        & .search-text
            setup($x, absolute, $x, 0, $x, $x, 40px)
            font("Open Sans", 16px, 0, 600, 20px)
            color #2B2B2B

.top-search
    setup(block, relative, 25px auto)
    font("Open Sans", 44px, 0, 600, 70px)
    height 70px
    width 85%
    padding 0 20px
    color #2B2B2B
    border none
    border-bottom 2px solid #999
    &:focus {outline: none; border-bottom: 2px solid #2B2B2B}

.top-main-text{text-transform: uppercase; font("Open Sans", 24px, 5px, 600, 30px)}

.button
    font("Open Sans", 16px, 0px, 400, 30px)
    $buttonColor = #2B2B2B;
    margin 0 auto 25px
    width 180px
    padding 8px
    border 1px solid $buttonColor
    cursor pointer
    text-align center
    &.white-text
        color white
        background-color $buttonColor
        &:hover
            color $buttonColor
            background-color transparent
    &.black-text
        color $buttonColor
        background-color transparent
        &:hover
            color white
            background-color $buttonColor
    &.load-button
        border-width 4px
        font-weight 600
        margin-bottom 50px

.image-layout-selector
    margin-bottom 50px
    height 50px
    width 100px
    & .layout-option
        height 100%
        position relative
        width 50%
        cursor pointer
        &.active .bars
            &:before, &:after {background-color: #1A1A1A}

.bars
    height 60%
    width 60%
    &:before, &:after
        content ""
        background-color #999
        transition 0.3333s ease
    &:before {color:black; setup($x, absolute, $x, 0, 60%, 0, 0)}
    &:after {color: black; setup($x, absolute, $x, 0, 0, 0, 60%)}
    &.rotated {transform: translate(-50%, -50%) rotate(90deg)}

.image-grid-container
    margin-bottom 40px
    height auto
    width 88%
    max-width 1200px
    overflow hidden

.image-column
    position relative
    width 33.3333333%
    text-align center
    &.rows {width: 100%}
    &.rows .image {padding-top: 50%; margin-bottom: 60px}

.image
    width 88%
    margin-bottom 30px
    box-shadow 0px 8px 25px -5px rgba(0,0,0,0.5)
    background-repeat no-repeat !important
    background-position center !important
    background-size cover !important
    cursor pointer
    &.wide {padding-top: 50%;}
    &.square {padding-top: 80%;}
    &.long {padding-top: 110%;}
    &.wide:before {padding-top: 25%;}
    &.square:before {padding-top: 42%;}
    &.long:before {padding-top: 59%;}
    &:before
        content "View Image"
        setup($x, absolute, $x, 0, 0, 0, 0)
        color white
        opacity 0
        background-color rgba(0,0,0,0.7)
        transition 0.33333s ease
    &:hover::before{opacity:1}

// MEDIA QUERIES
@media screen and (min-width:1400px)
    .photo-tab {padding-bottom: 45%; width 45%;}

@media screen and (max-width:629px)
    .photo-details {width: 88%}
    .photo-tab {padding-bottom: 80%; width 80%;}
    .top-container {height: 220px}
    .top-center-container{width: 75%}
    .top-search{height: 50px; font("Open Sans", 32px, 0, 600, 50px)}
    .image-layout-selector{height: 0; margin-bottom: 0}
    .image-column{width: 100%}
    .image-column .image{padding-top: 50%; margin-bottom: 40px}

@media screen and (max-width:500px)
    .top-search {height: 36px; font("Open Sans", 20px, 0, 600, 36px)}

*/
</style>
