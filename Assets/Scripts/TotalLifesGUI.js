#pragma strict
var scoreText:GUIText;
var TotalLifes : int;





function Update () {
TotalLifes =(PlayerPrefs.GetInt("TotalLifes"));
  scoreText.text = "Lives: " + TotalLifes;
}