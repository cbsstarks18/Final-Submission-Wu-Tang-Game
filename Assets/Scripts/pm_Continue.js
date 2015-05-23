//	Do not remoove this -----> arWe2793 (Arvydas Andrius) https://www.youtube.com/user/SuperKREPSINIS
#pragma strict

var buttons : GameObject;
var pref : int = 0;

var call = false;
 // will be true when clicked
var callTOUCH = false;
//var on : GameObject;
static var ShowGUI = false;
 
function Start () {
pref = 0;

ShowGUI = true;
 
}
 
function Update () {
//pref =(PlayerPrefs.GetInt("pref"));
 
//The 'ShowGUI' enables you do either view or not view the actual GUI
 
if(ShowGUI == true ){
 
guiTexture.enabled = true;
 
}else{
 
guiTexture.enabled = false;
 
}
 
if(ShowGUI == true){
 
if(Input.touchCount > 0 ){
 
for(var i : int = 0; i < Input.touchCount; i++){
 
var touch : Touch = Input.GetTouch(i);
 
if(touch.phase == TouchPhase.Began && // if touched on gui texture
guiTexture.HitTest(touch.position)){
 
callTOUCH = true; // 
 DoAction ();  // if touched will call function to execute things you want
}
}
}
else{
 callTOUCH = false;
//Stops Action
// thing that when finger or mouse released will be stoped, if you will
// leave this emty, it wont stop action, like you main character wont stop runing.
}
}
}

// part of mouse click
function OnMouseOver(){
 if(Input.GetMouseButtonDown(0)){
 call = true; // will set call true to hellp fully  execute all task's you want
 DoAction (); 
 
//Time.timeScale = 1;
// if pressed will call function to execute things you want
 }
 else {
//call = false;
 }
}




// variable call is to make sure that tasks will be executed when clicked on button, and nor earlyer. coz function can automatycly be called from first frame.
function DoAction (){  //function that when variable call is true will be executed
if (call == true){  //when clicked or touched call wil be true and will execute all tasks, to make sure it wont execute it at begining of runtime
 
PlayerPrefs.SetInt("pref", pref);
//buttons.active = false;
//PlayerPrefs.SetInt("pref", 0);
// write your code lines here to be executed.
}
}
