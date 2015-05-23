#pragma strict

	var levels : GameObject;
	var creditsWin : GameObject;
	var LEVELSchooser : GameObject;
	var menubuttons : GameObject;
function Start () {

}

function OnMouseOver(){

 if(Input.GetMouseButtonDown(0)){
 levels.active = false;
 menubuttons.active = false;
 creditsWin.active = true;
 LEVELSchooser.active = false;
 
}
}