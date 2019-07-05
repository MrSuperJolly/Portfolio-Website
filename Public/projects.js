

var app = new Vue({
    el: '#projects',
    data: {
        projects:[
            {id:1, title:"C# Chess Game", gif:"Images/chess.gif", jpg:"Images/chess.jpg", description:"<p>I created this to teach myself the fundamentals of C#.<br/> <br/>The console draws up an ASCII representation of a chess board, from a Board object that contains an array of Piece objects.<br/> <br/>  Any setup is possible by creating the right objects in the form CeatePiecename(new point(x ,y), colourString).<br/> <br/> If I were to take this project further, I would probably attempt to make the game functional on larger boards, and allow it take in setup objects that would tell the program which pieces to create on setup.</p>", link:"https://github.com/MrSuperJolly/Chess"},
            {id:2, title:"Open Hexagon Mod", gif:"Images/openhexagon.gif", jpg:"Images/openhexagon.png", description:"<p>A set of levels created with JSON and Lua files for the open source game open hexagon. <br/><br/> Making use of a prebuilt function that displays a string as a message, and using lua to detect key presses, I created make shift input forms that could allow the player to enter values while playing the game. <br/> This allowed me to make a level where you could choose customisable level options before the walls started spawning.<br/>After that was complete I made a level with an array of level objects, that could be individually choses with the same makeshift input method. Using text files and luas io functions best times on levels are kept track of, which allowed me to make an unlock system that will only let you progress to the next level once completeting the one before.<br/><br/>Any sort of unlockable progression systems were never really added to the original game.</p>", link:"https://github.com/MrSuperJolly/openhexagon-pack"},
            {id:3, title:"Leave a Note", gif:"Images/leaveanote.gif", jpg:"Images/leaveanote.png", description:"<p>p5 Javascript example of a website page where you can type and leave notes that get saved to a database that is connected to a node.js express server.<br/> <br/>All notes in the database are displayed when the page is loaded.</p>", link:"https://github.com/MrSuperJolly/Leaveanote"}
        
        ]
        ,
        project_display: {title:"Not Found", gif:"", description:"Not Found", link:""},

        hidden:true,

        window: {
            width: 0,
            height: 0,
            size: "normal"
        },

        


    },

    created() {
        window.addEventListener('resize', this.handleResize)
    },


    methods: {
        displayModal: function(x){

            this.project_display = {
                title: this.projects[x].title,
                gif: this.projects[x].gif,
                description: this.projects[x].description,
                link: this.projects[x].link
            }

            this.hidden = false;

            

        },

        navTo: function(link){
            window.location.href = link;
        },

        handleResize: function() {
            this.window.width = window.innerWidth;
            this.window.height = window.innerHeight;

            if(this.window.width < 1000){
                this.window.size = "compact";
            }
            else
            {
                this.window.size = "normal"
            }
        }

        
    }


});


app.projects.forEach( function(project, i) {
    $('#thumbnail-'+ i).hover(
        function() {$(this).attr("src", project.gif);
    },
        function() {$(this).attr("src", project.jpg);
    });
    
     
});



