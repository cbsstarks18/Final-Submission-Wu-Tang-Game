#pragma strict	
	var level : GameObject;
	var todisable : GameObject;

	var Sound : AudioClip;
	private var hasPlayed = false; // audio play line


function Start () {

}

function OnMouseOver(){


 if(Input.GetMouseButtonDown(0)){

 
 level.active = true;  //ENABLE LEVEL1 CHOOSER
todisable.active = false;  //DISABLE "LEVELSCHOOSER"


     if(!hasPlayed){
        audio.PlayOneShot(Sound);
        hasPlayed = true;
    }
 
}
}