#pragma strict

var level : GameObject;
var todisable : GameObject;

var Sound : AudioClip;
 private var hasPlayed = false; // audio play line

// var LevelUnl : int = 1;
// var PointsToUnlock : int;
// var LockedIcon : GameObject;
static var ShowGUI = false;




 
function Start () {
//LevelUnl =(PlayerPrefs.GetInt("LevelUnl"));
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
 
//PlayerPrefs.DeleteAll();


////CONTENT
////////////////////////////////////////
// Application.LoadLevel ("2d"); //change the level name here
level.active = true;
todisable.active = false;
     if(!hasPlayed){
        audio.PlayOneShot(Sound);
        hasPlayed = true;
    }
///////////////////////////////////////
}
}
}
}
}


 



