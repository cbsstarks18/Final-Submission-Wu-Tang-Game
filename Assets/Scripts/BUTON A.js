#pragma strict
  var levels1 : GameObject;
  var creditsWin : GameObject;
  var LEVELSchooser : GameObject;
   var menubuttons : GameObject;
 
 public var Attention : String = "";
 
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
 
if(touch.phase == TouchPhase.Began &&
guiTexture.HitTest(touch.position)){
 
//This space is where the action happens when you touch your custom GUI button on
//your device.
 PlayerPrefs.DeleteAll();
 levels1.active = false;
  creditsWin.active = false;
// NewGame.active = false;
// Continue.active = false;
// Credits.active = false;
// Exit.active = false;
 menubuttons.active = false;
 LEVELSchooser.active = true;
}
}
}else{
 
//Stops Action
 
}
}
}
