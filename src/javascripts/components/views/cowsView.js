import cowData from '../../helpers/data/cowData';
import card from '../cards/cowCard';
// STUDENTS DO THIS
// 1. Create a new card component in this file: src/javascripts/components/cards/cowCard.js
// 2. Make a call to FB to get all cows called getAllCows
// 3. Render cards to the DOM
const cowsView = () => {
  cowData.getAllCows()
    .then((response) => {
      if (response.length) {
        response.forEach((cow) => {
          $('#app').append(card.cowMaker(cow));
        });
      } else {
        $('#app').append('<h2>NO COWS</h2>');
      }
    });
};

export default { cowsView };
