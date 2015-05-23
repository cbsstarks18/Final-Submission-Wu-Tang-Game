#pragma strict
var MsClicked = false;
 
  var menubuttons : GameObject;
 
static var ShowGUI = false;
 
function Start () {

ShowGUI = true;
 
}
 
function Update () {
if ( MsClicked == true){
Application.LoadLevel ("menu1");

}
 
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
 
Application.LoadLevel ("menu1");

}
}
}
else{
 
//Stops Action
 
}
}
}



function OnMouseOver(){
 if(Input.GetMouseButtonDown(0)){
MsClicked = true;

}
}
public var Attention : String = "";