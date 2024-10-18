const customName = document.getElementById('customname');
const randomize = document.querySelector('.randomize');
const story = document.querySelector('.story');

function randomValueFromArray(array){
  const random = Math.floor(Math.random()*array.length);
  return array[random];
}

const storyText = "It was 94 fahrenheit outside, so :insertx: started to cry. They decided to go to :inserty:, and what happened next shocked them. Hit that like button if you want to know what happens next. Then :insertz:. Bob saw the whole thing, but was not surprised — :insertx: weighs 300 pounds, and that is totally relavent to the story.";
const insertX = ["Kirby", "Big Daddy", "Gilgamesh"];
const insertY = ["Ur", "Uruk", "Giza"];
const insertZ = ["they imploded", "they got arrested for tax fraud", "they turned into a slug and slimed away"]

randomize.addEventListener('click', result);

function result() {
  let newStory = storyText;
  let xItem = randomValueFromArray(insertX);
  let yItem = randomValueFromArray(insertY);
  let zItem = randomValueFromArray(insertZ);


  newStory = newStory.replaceAll(':insertx:', xItem);
  newStory = newStory.replaceAll(':inserty:', yItem);
  newStory = newStory.replaceAll(':insertz:', zItem);

  if(customName.value !== '') {
    const name = customName.value;
    newStory = newStory.replaceAll('Bob', name);
  }

  if(document.getElementById("uk").checked) {
    const weight = Math.round(300/14) + " stone";
    const temperature =  Math.round((94-32)*(5/9)) + " centigrade";

    newStory = newStory.replaceAll('300 pounds', weight);
    newStory = newStory.replaceAll('94 fahrenheit', temperature);


  }

  story.textContent = newStory;
  story.style.visibility = 'visible';
}