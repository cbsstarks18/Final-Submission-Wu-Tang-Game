#pragma strict


 //Variables
 var call = false; // will be true when clicked

static var ShowGUI = false;
 
function Start () {

ShowGUI = true;
 
}
 
function Update () {
 
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
 
call = true; // 
 DoAction ();  // if touched will call function to execute things you want
}
}
}
else{
 call = false;
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
 DoAction (); // if pressed will call function to execute things you want
 }
 else {
 call = false;
 }
}




// variable call is to make sure that tasks will be executed when clicked on button, and nor earlyer. coz function can automatycly be called from first frame.
function DoAction (){  //function that when variable call is true will be executed
if (call == true){  //when clicked or touched call wil be true and will execute all tasks, to make sure it wont execute it at begining of runtime
Time.timeScale = 1;
PlayerPrefs.DeleteKey("pref");
Application.LoadLevel ("menu1");

// write your code lines here to be executed.
}}
