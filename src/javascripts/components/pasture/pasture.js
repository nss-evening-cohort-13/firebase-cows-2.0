import cowData from '../../helpers/data/cowData';

// ADD COW COMPONENTS HERE
const cowsOnDom = (obj) => {
  $('#app').html('');
  Object.keys(obj).forEach((item) => {
    $('#app').append(`<div id="pasture"><h3>${obj[item].name}</h3></div>`);
  });
};

const buildCows = () => {
  cowData
    .getCows()
    .then((resp) => cowsOnDom(resp.data))
    .catch((error) => console.error('get cows broke', error));
};

export default { buildCows };
