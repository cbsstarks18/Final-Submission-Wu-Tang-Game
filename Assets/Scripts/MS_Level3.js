#pragma strict


 private var hasPlayed = false; // audio play line

 var LevelUnl : int = 1;
 var PointsToUnlock : int;
 var LockedIcon : GameObject;


function Start () {
LevelUnl =(PlayerPrefs.GetInt("LevelUnl"));
}

function OnMouseOver(){


  if(Input.GetMouseButtonDown(0) && LevelUnl >= PointsToUnlock){
 Application.LoadLevel ("Level 2"); //change the level name here
 
 
}
}
