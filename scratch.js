/*

* create a small single-page web application
* finish the absolute minimum requirements first
* approach your design through the user's perspective
* topic and content are secondary to functionality
* Make frequent commits to the repo

REQUIREMENTS:
--------------------
1. Cache at least 1 element using | selectElementById
2. Cache at least 1 element using | querySelector or querySelectorAll
3. Use the parent-child-sibling relationship to navigate between elements
at least once (firstChild, LastChild, parentNode, nextElementSibling, etc)
4. Iterate over a collection of elements to accomplish some task
5. Create at least 1 element using | createElement
6. Use appendChild and/or prepend to add new elements to the DOM.
7. Use the DocumentFragment interface or HTML templated with the cloneNode
method to create templated content.
8. Modify the HTML or text content of at least one element in response to user
interaction using innerHTML, innerText, or textContent.
10. Modify the style and/or CSS classes of an element in response to user interactions
using the style or classList properties.
11. Modify at least one attribute of an element in response to user interaction.
12. Register at least two different event listeners and create the associated event
handler functions.
13. Use at least two Browser Object Model (BOM) properties or methods.
14. Include at least one form and/or input with HTML attribute validation.
15. Include at least one form and/or input with DOM event-based validation. (This can
be the same form or input as the one above, but should include event-based
validation in addition to the HTML attribute validation.)
16. Ensure that the program runs without errors (comment out things that do not work,
and explain your blockers - you can still receive partial credit).
17. Commit frequently to the git repository.
18. Include a README file that contains a description of your application.
19. Level of effort displayed in creativity, presentation, and user experience.



<!doctype html>
<html>

<head>
    <title>Halloween Taste Buds</title>
    <link rel="stylesheet" href="styles.css">
</head>

<body>
    <header>
        <nav>
            <ul>
                <li><a class="active" href="#home">Home</a></li>
                <li><a href="#portfolio">Portfolio</a></li>
                <li><a href="#about">About</a></li>
                <li style="float:right"><a href="#about">Explore</a></li>
            </ul>
        </nav>
    </header>

    <main>
        <div class="grid-item1">
            <h2>This is Halloween</h2>
            <p>Far far away, where dracula lived in the transylvania hillside with bloodlust and loneliness, the wolves
                hunted in the bright blood moonlight. Twist the bones and bend the back hocus pocus domi ocus. which way
                does the wicked witch fly on spooky halloween nights?</p>
        </div>



        <div class="grid-container">
            <div class="grid-item2">
                <p>What about your favorite Halloween movie?</p>
                <input [type=text]>
                <p>What is your favorite way to decorate?</p>
                <input [type=text]>
                <p>Share you costume ideas below:</p>
                <input [type=text]>
            </div>



            <img class="details-img" src="/Users/jenniferdunsmore/Desktop/IMG_0700.jpeg" alt=>
            <div></div>

            <p></p>
            <table>
                <thead>
                    <tr>
                        <th>Best Halloween Themed Movies</th>
                        <th>Best Themed Decorations</th>
                    </tr>
                </thead>

                <tbody>
                    <tr>
                        <td>Nightmare Before Christmas</td>
                        <td>NBC Decorations</td>
                    </tr>
                    <tr>
                        <td>Hocus Pocus</td>
                        <td>Witches Coven</td>
                    </tr>
                    <tr>
                        <td>Halloween</td>
                        <td>Scary Killer</td>
                    </tr>

                </tbody>
            </table>

    </main>
    <footer>Made with angst by a struggling bootcamp student

        <select name="Exlpore">
            <option value="currentProjects">Current Projects</option>
            <option value="spookyCreations">Spooky Creations</option>
            <option value="fangtasticFinds">Fangtastic</option>


    </footer>

</body>

</html>



-------------------------------------
Landing Page from first SBA----------
-------------------------------------
<!DOCTYPE html>
<html>
<!---............... Landing Page ..................-->

<head>
    <title>Spooky Little Developer's Monster Creations</title>
    <link rel="stylesheet" href="styles.css">
    <div class="snowflakes">
        <div class="snowflake">
            <img src="https://media1.giphy.com/media/0xR7MUO0hJfWtco7C6/giphy.gif" />
        </div>
        <div class="snowflake">
            <img src="https://media1.giphy.com/media/0xR7MUO0hJfWtco7C6/giphy.gif" />
        </div>
        <div class="snowflake">
            <img src="https://media1.giphy.com/media/0xR7MUO0hJfWtco7C6/giphy.gif" />
        </div>
        <div class="snowflake">
            <img src="https://media1.giphy.com/media/0xR7MUO0hJfWtco7C6/giphy.gif" />
        </div>
        <div class="snowflake">
            <img src="https://media1.giphy.com/media/0xR7MUO0hJfWtco7C6/giphy.gif" />
        </div>
        <div class="snowflake">
            <img src="https://media1.giphy.com/media/0xR7MUO0hJfWtco7C6/giphy.gif" />
        </div>
        <div class="snowflake">
            <img src="https://media1.giphy.com/media/0xR7MUO0hJfWtco7C6/giphy.gif" />
        </div>
        <div class="snowflake">
            <img src="https://media1.giphy.com/media/0xR7MUO0hJfWtco7C6/giphy.gif" />
        </div>
        <div class="snowflake">
            <img src="https://media1.giphy.com/media/0xR7MUO0hJfWtco7C6/giphy.gif" />
        </div>
        <div class="snowflake">
            <img src="https://media1.giphy.com/media/0xR7MUO0hJfWtco7C6/giphy.gif" />
        </div>
    </div>
</head>

<body>
    <header>
        <nav>
            <ul>
                <li><a class="active" href="landing.html">Home</a></li>
                <li><a href="index.html">Creations</a></li>
                <li><a href="details.html">About</a></li>
                <li style="float:right"><a href="details.html">Something Wicked This Way Comes...</a></li>
            </ul>
        </nav>
    </header>

    <main>
        <h1>Spooky Little Developer's Monster Creations</h1>
        <div class="image-container">
            <img src="/Users/jenniferdunsmore/Library/Mobile Documents/com~apple~CloudDocs/Downloads/Designer.png">
        </div>
    </main>
    <footer>
        Made with angst by a struggling bootcamp student
    </footer>
</body>

----------------------------------------------------------
styles.css from first SBA
----------------------------------------------------------
@import url(https://fonts.googleapis.com/css?family=Griffy:regular);

body {
    background-color: #0e0d0d;
    opacity: 80%;
    margin: 0;
    padding: 0;
}

/* customizable snowflake styling */
/*
.snowflake {
    color: #fff;
    font-size: 1em;
    font-family: Serif;
    text-shadow: 0 0 1px #000;
}

@-webkit-keyframes snowflakes-fall {
    0% {
        top: -10%;
    }

    100% {
        top: 100%;
    }
}

@-webkit-keyframes snowflakes-shake {
    0% {
        -webkit-transform: translateX(0px);
        transform: translateX(0px);
    }

    50% {
        -webkit-transform: translateX(80px);
        transform: translateX(80px);
    }

    100% {
        -webkit-transform: translateX(0px);
        transform: translateX(0px);
    }
}

@keyframes snowflakes-fall {
    0% {
        top: -10%;
    }

    100% {
        top: 100%;
    }
}

@keyframes snowflakes-shake {
    0% {
        transform: translateX(0px);
    }

    50% {
        transform: translateX(80px);
    }

    100% {
        transform: translateX(0px);
    }
}

.snowflake {
    position: fixed;
    top: -10%;
    z-index: 9999;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    cursor: default;
    -webkit-animation-name: snowflakes-fall, snowflakes-shake;
    -webkit-animation-duration: 10s, 3s;
    -webkit-animation-timing-function: linear, ease-in-out;
    -webkit-animation-iteration-count: infinite, infinite;
    -webkit-animation-play-state: running, running;
    animation-name: snowflakes-fall, snowflakes-shake;
    animation-duration: 10s, 3s;
    animation-timing-function: linear, ease-in-out;
    animation-iteration-count: infinite, infinite;
    animation-play-state: running, running;
}

.snowflake:nth-of-type(0) {
    left: 1%;
    -webkit-animation-delay: 0s, 0s;
    animation-delay: 0s, 0s;
}

.snowflake:nth-of-type(1) {
    left: 10%;
    -webkit-animation-delay: 1s, 1s;
    animation-delay: 1s, 1s;
}

.snowflake:nth-of-type(2) {
    left: 20%;
    -webkit-animation-delay: 6s, .5s;
    animation-delay: 6s, .5s;
}

.snowflake:nth-of-type(3) {
    left: 30%;
    -webkit-animation-delay: 4s, 2s;
    animation-delay: 4s, 2s;
}

.snowflake:nth-of-type(4) {
    left: 40%;
    -webkit-animation-delay: 2s, 2s;
    animation-delay: 2s, 2s;
}

.snowflake:nth-of-type(5) {
    left: 50%;
    -webkit-animation-delay: 8s, 3s;
    animation-delay: 8s, 3s;
}

.snowflake:nth-of-type(6) {
    left: 60%;
    -webkit-animation-delay: 6s, 2s;
    animation-delay: 6s, 2s;
}

.snowflake:nth-of-type(7) {
    left: 70%;
    -webkit-animation-delay: 2s, 1s;
    animation-delay: 2s, 1s
}

.snowflake:nth-of-type(8) {
    left: 80%;
    -webkit-animation-delay: 1s, 0s;
    animation-delay: 1s, 0s;
}

.snowflake:nth-of-type(9) {
    left: 90%;
    -webkit-animation-delay: 3s, 1s;
    animation-delay: 3s, 1s;
}

.snowflake:nth-of-type(10)

/* Demo Purpose Only*/
/*
.demo {
    font-family: 'Raleway', sans-serif;
    color: #fff;
    display: block;
    margin: 0 auto;
    padding: 15px 0;
    text-align: center;
}

.demo a {
    font-family: 'Raleway', sans-serif;
    color: #e1a707;
}

.snowflake img {
    height: 40px;
    bottom: 0;
    display: block;
}
    main {
        padding: 16px;
    }

    /* -------------Main------------------ */
    /* ---------------------------------- */


    /* ---------------------------------- */
    /* -------------Landing-------------- */
    /*
    .image-container {
        width: 60%;
        margin: auto;
        padding-right: 50px;
        border: 2px solid #4e4944;
        box-shadow: 0 0 40px rgba(254, 233, 40, 0.2);
    }

    .image-container img {
        width: 100%;
    }

    /* -------------Landing--------------- */
    /* ---------------------------------- */


    /* ----------------------------------- */
    /* -------------Nav Bar--------------- */
    /*
    ul {
        list-style-type: none;
        margin: 0;
        padding: 0;
        overflow: hidden;
        background-color: #333;
    }

    li {
        float: left;
        border-right: 2px solid #b8d14b;
    }

    li:last-child {
        border-right: none;
    }

    li a {
        display: block;
        color: #ff9b3e;
        text-align: center;
        padding: 14px 16px;
        text-decoration: none;
    }

    li a:hover:not(.active) {
        background-color: #75108b;
    }

    .active {
        text-decoration-color: #75108b;
    }

    a {
        color: #fdf7f7;
        text-decoration: none
    }

    a:hover {
        color: hwb(303 51% 12%);
    }

    nav {
        background-color: #ffa500;
        border-bottom: 5px solid rgb(171, 26, 161);
        padding: 16px;
        padding-left: 15px;
    }

    nav a {
        color: 0a0a09f7;
    }

    nav a:hover {
        color: yellow;
    }

    /*------------- Nav Bar -------------*/
    /* --------------------------------- */


    /*--------------------------------- */
    /* -------------Grid--------------- */
    /*
    img {
        width: 100%;
    }

    /* .......Landing page/title/Spooky Little Developer's Monster Creations .......*/
    /*
    h1 {
        text-align: center;
        color: #e30cd4;
        font-family: 'Griffy', cursive;
        font-size: 50px;
        font-weight: 100;
    }

    /* ...............details/about/This is Halloween ...............................*/
    /*
    h2 {
        text-align: center;
        color: #6de30c;
        font-family: 'Griffy', cursive;
        font-size: 30px;
        font-weight: 100;
    }

    /* ...............details/about/grid-container...............................*/
    /*
    .grid-container {
        display: grid;
        margin: 15px;
        padding: 25px;
        grid-template-columns: 1fr 1fr 1fr;
    }

    /* ..........details/about/grid-items/animation............................... */
    /*
    .grid-item {
        transition: all 0.01s linear;
        margin: 35px;
        padding: 15px;
        border: 4px solid #b8d14b;
        border-radius: 20px;
        box-shadow: 10px 4px #e286f7c9;
        position: relative;
    }

    /* ..........detailsThis is Halloween grid-item1...............................*/
    /*
    .grid-item1 {
        transition: all 0.01s linear;
        margin: 35px;
        padding: 15px;
        border: 4px solid #b8d14b;
        border-radius: 20px;
        box-shadow: 10px 4px #e286f7c9;
        position: relative;
        color: #0aa021;
    }

    /* ..........details/about/grid-item2, box & forms................................*/
    /*
    .grid-item2 {
        transition: all 0.01s linear;
        margin: 35px;
        padding: 15px;
        border: 4px solid #b8d14b;
        border-radius: 20px;
        box-shadow: 10px 4px #e286f7c9;
        position: auto;
        color: #ee2bc0;
    }

    /* ............grid hover- details/about & index...................................*/
    /*
    .grid-item:hover {
        top: 8px;
        left: 2px;
        box-shadow: 15px 15px #f8a408b3;
    }

    /* -------------Grid---------------- */
    /*-----------------------------------*/


    /*..................................*/
    /* -----------NBC gif--------------- */
    /*
    .image-container {
        /*will have to tinker more with grid to fix*/
        /*
        display: grid;
        align-items: right;
    }

    .details-img {
        margin-right: 10px;
    }

    /* -----------NBC gif--------------- */
    /*..................................*/


    /* --------------------------------- */
    /* -------------Table--------------- */
    /*
    .table-container {
        background-color: #ffffff;
        border: 3px solid #0aa021;
        border-radius: 5px;
        padding: 5px;
        font-size: large;
    }

    .details-img {
        width: 100%;
        border: 5px solid hsl(330, 2%, 22%);
        border-radius: 5px;
    }

    div {
        padding-left: 50px;
    }

    thead {
        font-size: larger;
        color: rgb(214, 210, 210);
        padding: 10px;
        text-wrap: normal;
    }

    tbody tr:nth-child(even) {
        background-color: #f8a408b3;
    }

    tbody tr:nth-child(odd) {
        background-color: #fc09dcca;
    }

    /* -------------Table---------------- */
    /* --------------------------------- */


    /* --------------------------------- */
    /* -------------Footer--------------- */
    /*
    footer {
        padding-top: 24px;
        padding-bottom: 24px;
        padding-left: 16px;
        padding-right: 16px;
        text-align: left;
        color: #111010;
        background-color: #ffd900b3;
        opacity: 95%;
        font-family: Griffy, cursive;
        font-weight: 250;
        font-size: smaller;
        border-top: 2px solid rgb(171, 26, 161);
    }

    /* -------------Footer--------------- */
    /* --------------------------------- */
