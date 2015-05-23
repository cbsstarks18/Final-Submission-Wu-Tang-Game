#pragma strict

var Sound : AudioClip;
 private var hasPlayed = false; // audio play line

 var LevelUnl : int = 1;
 var PointsToUnlock : int;
 var LockedIcon : GameObject;
static var ShowGUI = false;

function Start () {
LevelUnl =(PlayerPrefs.GetInt("LevelUnl"));
}

function OnMouseOver(){


  if(Input.GetMouseButtonDown(0) && LevelUnl >= PointsToUnlock){
 Application.LoadLevel ("Level 2"); //change the level name here
     if(!hasPlayed){
        audio.PlayOneShot(Sound);
        hasPlayed = true;
    }
 
}
}
