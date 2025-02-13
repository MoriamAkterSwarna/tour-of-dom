
// Vide 25-6: Style in JavaScript start here 



const sections = document.querySelectorAll('section');
// console.log(sections); 

for(const section of sections) {
    // console.log(section);  
    section.style.border = '1px solid steelblue';
    section.style.padding = '10px'; 
    section.style.margin = '10px'; 
    section.style.borderRadius = '10px';
    section.style.backgroundColor = 'lightblue';
}


const placesContainer = document.getElementById('places-container');
// console.log(placesContainer);
// placesContainer.style.backgroundColor = 'lightgreen';

placesContainer.classList.add('yellow-bg');
placesContainer.classList.add('large-text');





// Vide 25-6: Style in JavaScript start here 