

 


 
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
 
Application.OpenURL("https://www.youtube.com/user/SuperKREPSINIS");;
}
}
}else{
 
//Stops Action
 
}
}
}
public var Attention : String = "";


function OnMouseOver(){
 if(Input.GetMouseButtonDown(0)){
Application.OpenURL("https://www.youtube.com/user/SuperKREPSINIS");

}
}



