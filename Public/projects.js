

var app = new Vue({
    el: '#projects',
    data: {
        projects:[
            {id:1, title:"C# Chess Game", gif:"Images/chess.gif", jpg:"Images/chess.jpg", description:"<p>I created this to teach myself the fundamentals of C#.<br/> <br/>The console draws up an ASCII representation of a chess board, from a Board object that contains an array of Piece objects.<br/> <br/>  Any setup is possible by creating the right objects in the form CeatePiecename(new point(x ,y), colourString).<br/> <br/> If I were to take this project further, I would probably attempt to make the game functional on larger boards, and allow it take in setup objects that would tell the program which pieces to create on setup.</p>", link:"https://github.com/MrSuperJolly/Chess"},
            {id:2, title:"2nd project", gif:"Images/test.jpg", jpg:"Images/test2.jpg", description:"This is a test", link:"https://www.facebook.com/"}
           
        
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



