import { tns } from './../../node_modules/tiny-slider/src/tiny-slider';

// Section New Furniture Slider
// eslint-disable-next-line no-unused-vars
const option = {
  items: 1,
  slideBy: 'page',
  controls: false,
  mouseDrag: true,
  swipeAngle: 20,
  startIndex: 1,
  navContainer: '.slider-pagination-dots',
  gutter: 15,
  responsive: {
    576: {
      items: 2
    },
    992: {
      items: 3
    },
    1200: {
      items: 4
    }
  }
};

tns(Object.assign({ container: '.new-furniture-slider-bed' }, option));
tns(Object.assign({ container: '.new-furniture-slider' }, option));

// Section Brand Slider
const brandsSlider = tns({
  container: '.brands-slider .row',
  items: 1,
  slideBy: 'page',
  nav: false,
  gutter: 15,
  controls: false,
  mouseDrag: true,
  swipeAngle: 20,
  startIndex: 1,
  responsive: {
    768: {
      items: 2
    },
    992: {
      items: 3
    },
    1200: {
      items: 6
    }
  }
});

document
  .querySelector('.brands-slider .btn-prev')
  .addEventListener('click', () => brandsSlider.goTo('prev'));
document
  .querySelector('.brands-slider .btn-next')
  .addEventListener('click', () => brandsSlider.goTo('next'));

// Section Blog Slider
// eslint-disable-next-line no-unused-vars
const blogSlider = tns({
  container: '.blog-slider',
  items: 1,
  slideBy: 'page',
  controls: false,
  mouseDrag: true,
  swipeAngle: 20,
  startIndex: 1,
  navContainer: '.blog-slider-pagination-dots',
  responsive: {
    576: {
      items: 2,
      gutter: 15
    },
    992: {
      items: 3,
      gutter: 15
    }
  }
});

// Stars on the photos
const stars = document.getElementsByClassName('stars');

for (let i = 0; i < stars.length; ++i) {
  for (let j = 0; j < stars[i].children.length; ++j) {
    stars[i].children[j].addEventListener('click', function (e) {
      e.preventDefault();
      emptyStar(stars[i].children);
      fillStar(j, stars[i].children);
    });
  }
}

function fillStar (index, list) {
  for (let i = 0; i < index + 1; i++) {
    list[i].classList.add('full');
  }
}

function emptyStar (list) {
  for (let i = 0; i < list.length; i++) {
    list[i].classList.remove('full');
  }
}

const tabs = document.querySelectorAll('#nav-tab li > a');

function tabClick (event) {
  event.preventDefault();

  for (let i = 0; i < tabs.length; i++) {
    tabs[i].classList.remove('active');
  }

  let clickedTab = event.currentTarget;
  clickedTab.classList.add('active');

  let contentPanes = document.querySelectorAll('.tab-pane');
  for (let i = 0; i < contentPanes.length; i++) {
    contentPanes[i].classList.remove('active');
  }

  let anchorReference = event.target;

  let activePaneId = anchorReference.getAttribute('href');

  let activePane = document.querySelector(activePaneId);

  activePane.classList.add('active');
}

for (let i = 0; i < tabs.length; i++) {
  // console.log();
  // const tabSlider = tns({
  //   container: tabs[i].attributes.href.value,
  //   items: 1,
  //   slideBy: 'page',
  //   controls: false,
  //   mouseDrag: true,
  //   swipeAngle: 20,
  //   startIndex: 1,
  //   navContainer: '.slider-pagination-dots',
  //   responsive: {
  //     576: {
  //       items: 2
  //     },
  //     992: {
  //       items: 3
  //     },
  //     1200: {
  //       items: 4
  //     }
  //   }
  // });

  tabs[i].addEventListener('click', tabClick);
}
