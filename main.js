var canvas = new fabric.Canvas("myCanvas");

block_width = 30;
block_height = 30;

player_x = 10;
player_y = 10;

player_obj = "";
block_obj = "";

function player_update(){
    fabric.Image.fromURL("superman.png",function(Img){
        player_obj = Img;
        player_obj.scaleToWidth(100);
        player_obj.scaleToHeight(120);
        player_obj.set({
            top:player_y,
            left:player_x
        });
        canvas.add(player_obj);
    });
}

function new_image(getImage){
    fabric.Image.fromURL(getImage,function(Img){
        block_obj = Img;
        block_obj.scaleToWidth(block_width);
        block_obj.scaleToHeight(block_height);
        block_obj.set({
            top:player_y,
            left:player_x
        });
        canvas.add(block_obj);
    });
}

window.addEventListener("keydown" , my_keydown);
function my_keydown(e){
    keypressed = e.keyCode;
    if(e.shiftKey == true && keypressed == '80'){
        console.log("Shift + P is Pressed.");
        block_height = block_height + 10;
        block_width = block_width + 10;
        document.getElementById("c_width").innerHTML = block_width;
        document.getElementById("c_height").innerHTML = block_height;
    }

    if(e.shiftKey == true && keypressed == '77'){
        console.log("Shift + M is Pressed.");
        block_height = block_height - 10;
        block_width = block_width - 10;
        document.getElementById("c_width").innerHTML = block_width;
        document.getElementById("c_height").innerHTML = block_height;
    }

    if(keypressed == '70'){
        new_image("ironman_face.png");
        console.log("F Is Pressed.");
    }

    if(keypressed == '66'){
        new_image("spiderman_body.png");
        console.log("B Is Pressed.");
    }

    if(keypressed == '76'){
        new_image("hulk_legs.png");
        console.log("L Is Pressed.");
    }

    if(keypressed == '82'){
        new_image("thor_right_hand.png");
        console.log("R Is Pressed.");
    }

    if(keypressed == '72'){
        new_image("captain_america_left_hand.png");
        console.log("H Is Pressed.");
    }

    if(keypressed == '37'){
        left();
        console.log("Left Arrow Key Is Pressed.");
    }

    if(keypressed == '38'){
        up();
        console.log("Up Arrow Key Is Pressed.");
    }

    if(keypressed == '39'){
        right();
        console.log("Right Arrow Key Is Pressed.")
    }

    if(keypressed == '40'){
        down();
        console.log("Down Arrow Key Is Pressed.");
    }
}