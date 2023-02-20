import paper from '../assets/images/paper.svg';
import scissors from '../assets/images/scissors.svg';
import rock from '../assets/images/rock.svg';

const data = [
  {
    type: 'paper',
    beats: 'rock',
    imgSrc: paper,
  },
  {
    type: 'scissors',
    beats: 'paper',
    imgSrc: scissors,
  },
  {
    type: 'rock',
    beats: 'scissors',
    imgSrc: rock,
  },
];

export default data;
