//Get Character
function getCharacter(){
    $.get("dnd",(data) => {
        console.log(data);
        $.each(data, function( index, value ) {
            $("#content").append("<div>" + (index+1) + " " + value.name + "</div>");
        });
    });
};

function getOneCharacter(){
    $.get("dnd/2",(data) => {
        console.log(data);
        console.log(data.id + " " + data.name);
        $("#content").append("<div>" + (data.id) + " " + data.name + "</div>");
    });
};

//Create Character
function createCharacter(){
    $.post("dnd", {name: "Hollynys the Druid"}, (data) =>{
        console.log(data);
    })
    .done(()=>{
        console.log("New charatacter created");  
    })
    .fail((error) =>{
        console.log("Failed to create a new character");
        console.log("Error: " + error);
    });
};

//Update Character
function updateCharacter(){
    $.ajax({
        type: "json",
        method: "PUT",
        data: {"name": "Jansyster the Paladin"},
        url: "dnd/1",
        success: (data) => {
            console.log("Updated character");
        }
    });
};

//Delete Character
function deleteCharacter(){
    $.ajax({
        type: "json",
        method: "DELETE",
        data: {"name": "Jansyster the Paladin"},
        url: "dnd/11",
        success: (data) => {
            console.log("Deleted character");
        }
    });
};