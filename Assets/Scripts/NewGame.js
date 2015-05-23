#pragma strict
 var levels1 : GameObject;
  var creditsWin : GameObject;
  var LEVELSchooser : GameObject;
    var TotalLifes :int = 0;
  var call = false;
// var NewGame : GameObject;
// var Continue : GameObject;
// var Credits : GameObject;
// var Exit : GameObject;

 var menubuttons : GameObject;
 
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
guiTexture.HitTest(touch.position) ){
 
PlayerPrefs.DeleteAll();

  call = true;
TotalLifes = 3;
	PlayerPrefs.DeleteAll();
go ();
}
}
}
}else{
 
//Stops Action
 
}
}

//public var Attention : String = "";


function go (){
if (call == true){
	//yield WaitForSeconds (1);
	
	 PlayerPrefs.SetInt("TotalLifes", TotalLifes);
	levels1.active = false;
	creditsWin.active = false;
	menubuttons.active = false;
	LEVELSchooser.active = true;
}}
