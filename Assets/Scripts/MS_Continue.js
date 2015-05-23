#pragma strict

	var levels1 : GameObject;
	var creditsWin : GameObject;
	var LEVELSchooser : GameObject;
	var menubuttons : GameObject;
  
  
function Start () {

}

function OnMouseOver(){
 if(Input.GetMouseButtonDown(0)){

	
	levels1.active = false;
	creditsWin.active = false;
	menubuttons.active = false;
	LEVELSchooser.active = true;
}
}



     
