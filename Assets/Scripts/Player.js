#pragma strict

var sounds: AudioClip[]; // set the array size and fill the elements with the sounds
 
function Update(){ // call this function to play a random sound
    if (audio.isPlaying) return; // don't play a new sound while the last hasn't finished
    audio.clip = sounds[Random.Range(0,sounds.length)];
    audio.Play();
}