#pragma strict



 
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
 
//PlayerPrefs.DeleteAll();

PlayerPrefs.DeleteKey("didwin");
Application.LoadLevel ("menu1");
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