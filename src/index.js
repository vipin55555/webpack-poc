import '../src/assets/style/style.scss';
import randomImg from '../src/assets/image/printer.png';
import { randomQuotes } from './quote';


let imageTag = document.getElementById('img-tag')

imageTag.src = randomImg;
imageTag.style.height = '300px';
imageTag.style.weight = '300px';

randomQuotes();

let quoteButton = document.getElementById('quote-button');
quoteButton.addEventListener('click', () => randomQuotes())