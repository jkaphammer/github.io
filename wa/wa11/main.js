const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

/* Declaring the array of image filenames */
const imgArr = ['myImg1.jpeg', 'myImg2.jpeg', 'myImg3.jpeg', 'myImg4.jpeg', 'myImg5.jpeg'];
/* Declaring the alternative text for each image file */
const altImg = {'myImg1.jpeg' : 'yorkie puppy',
'myImg2.jpeg' : 'grey domestic cat',
'myImg3.jpeg' : 'brown and white goat standing on a stump',
'myImg4.jpeg' : 'fat orange and white goldfish',
'myImg5.jpeg' : 'horseshoe crab on the beach'
};
/* Looping through images */
for (const image of imgArr){
    const newImage = document.createElement('img');
    newImage.setAttribute('src', `imgArr/${image}`);
    newImage.setAttribute('alt', altImg[image]);
    thumbBar.appendChild(newImage);
    newImage.addEventListener('click', e =>{
        displayedImage.src = e.target.src;
        displayedImage.alt = e.target.alt;
    });
}   

/* Wiring up the Darken/Lighten button */
btn.addEventListener('click', () => {
    const buttonType = btn.getAttribute('class');
    if (buttonType === 'dark'){
        btn.setAttribute('class', 'light');
        btn.textContent('Lighten');
        overlay.style.backgroundColor = 'rgba(0,0,0,0.5)'
    } else{
        btn.setAttribute('class', 'dark');
        btn.textContent('Darken');
        overlay.style.backgroundColor = 'rgba(0,0,0,0)';
    }
})