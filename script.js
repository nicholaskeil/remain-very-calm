//draggable functions for "body parts"
$(function() {
$( "#draggable" ).draggable();
});
$(function() {
$( "#draggable2" ).draggable();
});
$(function() {
$( "#draggable3" ).draggable();
});
$(function() {
$( "#draggable4" ).draggable();
});
$(function() {
$( "#draggable5" ).draggable();
});

//divIDs List:
document.getElementById("#draggable");
document.getElementById("#draggable2")
document.getElementById("#draggable3")
document.getElementById("#draggable4")
document.getElementById("#draggable5")

//variables: random number variable, prefix variables
  min = Math.ceil(1);
  max = Math.floor(20);
  var num = Math.floor(Math.random() * (max - min)) + min;
  var legsImages = "legs_";
var bodyImages = "body_"
var armLeftImages = "arm_"
var armRightImages = "arm_"
var faceImages = "face_"

//variables: prefix + number combined, used in function below
var legNum = legsImages+[num];
var bodyNum = bodyImages+[num];
var leftArmNum = armLeftImages+[num];
var rightArmNum = armRightImages+[num];
var faceNum = faceImages+[num];

//LEGS
function getRandomLegImage() {
	document.getElementById("draggable").innerHTML = '<img src="legs_folder/' + legNum +'.png" >';
	console.log(legNum)
};
getRandomLegImage()

//BODY
function getRandomBodyImage() {
	document.getElementById("draggable2").innerHTML = '<img src="body_folder/' + bodyNum +'.png" >';
	console.log(bodyNum)
};
getRandomBodyImage()

//LEFT ARM
function getRandomLeftArmImage() {
	document.getElementById("draggable3").innerHTML = '<img src="arm_folder/' + leftArmNum +'.png" >';
	console.log(leftArmNum)
};
getRandomLeftArmImage()

//RIGHT ARM
function getRandomRightArmImage() {
	document.getElementById("draggable4").innerHTML = '<img src="arm_2_folder/' + rightArmNum +'.png" >';
	console.log(rightArmNum)	
};
getRandomRightArmImage()

//FACE
function getRandomFaceImage() {
	document.getElementById("draggable5").innerHTML = '<img src="face_folder/' + faceNum +'.png" >';
	console.log(faceNum)
};
getRandomFaceImage()