import farmersView from '../components/views/farmersView';
import cowsView from '../components/views/cowsView';

const viewHelper = (id) => {
  $('#app').html('');

  switch (id) {
    case 'cows-link':
      return cowsView.cowsView();
    case 'farmers-link':
      return farmersView.farmersView();
    default:
      return console.warn('nothing clicked');
  }
};

const viewListener = () => {
  $('body').on('click', 'li.nav-item', (e) => {
    viewHelper(e.currentTarget.id);
  });
};

export default { viewListener };
