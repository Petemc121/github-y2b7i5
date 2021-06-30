import _ from 'lodash';
import './style.css';
import Vietnam from './vietnam.jpg';

function component() {
  const element = document.createElement('div');
 

  // Lodash, now imported by this script
  element.innerHTML = _.join(['Hello', 'webpack'], ' ');
  element.classList.add('hello');

   // Add the image to our existing div.
   const Image = new Image();
   Image.src = Vietnam;
 
   element.appendChild(Vietnam);

  return element;
}

document.body.appendChild(component());
