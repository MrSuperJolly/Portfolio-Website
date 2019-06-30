
let allRect;
let animationSpeed;
let spacing;
let monsterrat;
let logo;
let logo_x;
let logo_y;
let hoverAnimation = false;
let logoText = "JOLLY."
let defaultColor = '#808080';
let hoverColour;



function preload() {
    
    
    $('#email_icon').hover(setDisplayEmail, setDisplayDefault);
    $('#about_icon').hover(setDisplayAbout, setDisplayDefault);
    
    
}

function setup(){
    const canvas = createCanvas(600,100)
    canvas.parent('logo');
    logo_x = 0;
    logo_y = 0;
    logo = createGraphics(600, 100);
    console.log(logo);
    spacing = logo.width / 6
    const red_rect = new Rectangle(0 , 0, color(229, 38, 30), spacing, 200);
    const orange_rect = new Rectangle(spacing , 0, color(235, 117, 50),spacing, 200);
    const yellow_rect = new Rectangle(spacing  * 2 , 0, color(247, 208, 56), spacing, 200);
    const green_rect  = new Rectangle(spacing  * 3, 0, color(163, 224, 71), spacing, 200);
    const teal_rect  = new Rectangle(spacing  * 4 , 0, color(73, 218, 154), spacing, 200);
    const lightblue_rect  = new Rectangle(spacing  * 5 , 0, color(52, 187, 230), spacing, 200);
    const blue_rect  = new Rectangle(spacing  * 6 , 0, color(67, 85, 219), spacing, 200);
    animationSpeed = 5
    logo_Rect = [red_rect, orange_rect, yellow_rect, green_rect, teal_rect, lightblue_rect, blue_rect];
    
    
    
}
    

function draw(){

    clear();
    
    background('##FFFAFA');

    logo_Rect.sort(function(a, b){return b.x - a.x});

    for (obj of logo_Rect){
        logo.noStroke()
        
        obj.changeColor(obj.startingColor);
        if(hoverAnimation)
        {
            obj.changeWidth(300);
        }
        else
        {
            obj.changeWidth(obj.startingWidth);
        }
        

        logo.fill(obj.rgb);
        logo.rect(obj.x, obj.y, obj.width, obj.height);

        if (mouseX - logo_x <= logo.width && mouseX - logo_x >= 0 && mouseY - logo_y <= logo.height && mouseY - logo_y >= 0){    
            if(obj.x <= spacing * -1){
                obj.x = (logo_Rect.length -1) * spacing;
            }
            
            obj.x -= animationSpeed;
        }
        else
        {
            if(obj.x % spacing != 0){
                obj.x += animationSpeed / 2 ;
            }
        }
    } 


   
    drawText(logoText);
 
    
    image(logo, logo_x, logo_y);
    let leftMostColor = get(0,0);
    
    hoverColour = `rgba(${leftMostColor[0]},${leftMostColor[1]},${leftMostColor[2]},${leftMostColor[3]})`
}

function setDisplay(whichDisplay){

    if(whichDisplay == "default")
    {
        logoText = "JOLLY."
        $('#email_icon').css("color", defaultColor);
        $('#about_icon').css("color", defaultColor);
        hoverAnimation = false;
        
    }
    else if(whichDisplay == "email")
    {
        logoText = "Email"
        $('#email_icon').css("color", hoverColour);
        $('#about_icon').css("color", defaultColor);
        hoverAnimation = true;
    }
    else if(whichDisplay == "about")
    {
        logoText = "About"
        $('#email_icon').css("color", defaultColor);
        $('#about_icon').css("color", hoverColour);
        hoverAnimation = true;
    }

}

function setDisplayDefault(){
   
    setDisplay("default")
}
function setDisplayEmail(){
    
    setDisplay("email")
}
function setDisplayAbout(){
    
    setDisplay("about")
}



class Rectangle {
    constructor(x, y, rgb, width, height){
    this.x = x;
    this.y = y;
    this.rgb = rgb;
    this.startingColor = rgb;
    this.startingWidth = width;
    this.startingHeight = height;
    this.width = width;
    this.height = height;
    }

    changeColor(color){
        let init_color = this.rgb;
        let final_color = color;
        let transition;
        let totalColorLevels;
        let totalFinalColorLevels;
        transition = lerpColor(init_color, final_color, 0.3);
        totalColorLevels = this.rgb.levels[0] + this.rgb.levels[1], + this.rgb.levels[2];
        totalFinalColorLevels = color.levels[0] + color.levels[1], + color.levels[2];
       

        if(totalColorLevels - totalFinalColorLevels >= 10 && totalColorLevels - totalFinalColorLevels <= 10){
            this.rgb = final_color;
        }
        else
        {
            this.rgb = transition;
        }

    }

    changeWidth(x){

        if (this.width < x){
            this.width = this.width + 6;
        }

        if (this.width > x){
            this.width = this.width - 8;
        }

    }

    
    
}

function drawText(word){
        
    let posX = 1
    if(word == "JOLLY."){
        for(const letter of word){
        
       
            logo.textSize(90);
            logo.fill(255);
            logo.text(letter ,posX ,logo.height - 10);
            posX += spacing;
        
        }
    }
    else
    {
        logo.textSize(90);
        logo.fill(255);
        logo.text(word ,0,logo.height - 10);
            
    }

   


}