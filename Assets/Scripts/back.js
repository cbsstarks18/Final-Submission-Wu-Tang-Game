




#pragma strict
 var levels : GameObject;
 var creditsWin : GameObject;
  var LEVELSchooser : GameObject;
// var NewGame : GameObject;
// var Continue : GameObject;
// var Credits : GameObject;
// var Exit : GameObject;
 
  var on : GameObject;
 
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
 
PlayerPrefs.DeleteAll();
 levels.active = false;
 creditsWin.active = false;
 on.active = true;
 LEVELSchooser.active = false;
// NewGame.active = true;
// Continue.active = true;
// Credits.active = true;
// Exit.active = true;
}
}
}else{
 
//Stops Action
 
}
}
}
public var Attention : String = "";