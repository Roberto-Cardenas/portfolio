$(document).ready(function(){

  // Initialize materialize elements
  $('.sidenav').sidenav({
    edge: 'right'
  });

  var projectModal = $('.modal').modal({
    onOpenEnd: initCarousel
  });

  function initCarousel() {
    $('.carousel.carousel-slider').carousel({
      fullWidth: true,
      indicators: true
    });
  };

  // JSON data
  var portfolioData = {
    picture: 'media/profile.jpg',
    languages: [
      'media/html.svg',
      'media/css.svg',
      'media/javascript.svg',
      'media/react.svg',
      'media/php.png',
      'media/mysql.png',
      'media/rails.svg',
      'media/python.svg'
    ],
    projects: [
      {
        name: 'SCMI',
        shortDescription: 'Web Based Self-Service Store Monitoring System',
        description: `SCMI is an online system providing managers and employees with the ability to monitor and control the temperature, humidity, and status of fridges and other components in self-service stores. This project was developed during my time working at Motus Guadalajara in collaboration with RYCSA and ThermoStar. My responsibilities for this project included designing and building the user interface, and designing and building the database and API utilized by the client. Other responsibilities included maintaining constant commmunication and collaboration with the Electrical Engineering team that was in charge of installing the sensors necessary for data collection.`,
        mainPicture: 'media/scmi-main-img.jpg',
        projectLink: null,
        pictures: [
          'media/scmi-main-img.jpg',
          'media/scmi-config-camaras.jpg',
          'media/scmi-config-temps.jpg',
          'media/scmi-control.jpg'
        ],
        languages: [
          'media/javascript.svg',
          'media/php.png',
          'media/mysql.png'
        ]
      },
      {
        name: 'Restofácil',
        shortDescription: 'Browser Based Restaurant Management Software',
        description: 'Restofácil is a system built to provide service industry staff with an easy and fast way of managing tables, orders, and customers. This project was developed during my time as a developer at Motus Guadajalara. My responsibilities for this project included designing and building the user interface as well as designing and building the API it consumed information from.',
        mainPicture: 'media/restofacil-main.jpg',
        projectLink: null,
        pictures: [
          'media/restofacil-main.jpg',
          'media/restofacil-mesas.jpg',
          'media/restofacil-ordenes.png',
          'media/restofacil-menu.jpg',
          'media/restofacil-place-order.jpg'
        ],
        languages: [
          'media/javascript.svg',
          'media/php.png',
          'media/mysql.png'
        ]
      },
      {
        name: 'Waste Website',
        shortDescription: 'Waste Information Website for the Casa Zimbabwe Student Cooperative',
        description: 'This website provides residents of CZ with all the information they need in order to sort waste correctly in their cooperative. Each panel is color coded to represent the corresponding waste bins. This was an independent project I developed during my time as Waste Reduction Manager at the cooperative and I mostly used it as a way to practice developing with REACT.',
        mainPicture: 'media/waste-main.jpg',
        projectLink: null,
        pictures: [
          'media/waste-main.jpg',
          'media/waste-expand-panel.jpg'
        ],
        languages: [
          'media/html.svg',
          'media/css.svg',
          'media/react.svg'
        ]
      },
      {
        name: 'Waste Website Admin',
        shortDescription: 'Administrator Website for Casa Zimbabwe\'s Waste Website',
        description: 'This tool was made for the Waste Reduction Manager so they can easily modify and update the main Waste Website. This project is a little bit more involved than the Waste Website itself, the Waste Reduction Manager can easily and intuitively add, remove and edit panels and their positioning on the page as well as change the current login credentials.',
        mainPicture: 'media/waste-admin-main.jpg',
        projectLink: null,
        pictures: [
          'media/waste-admin-main.jpg',
          'media/waste-admin-panel.jpg',
          'media/waste-admin-add-panel.jpg'
        ],
        languages: [
          'media/html.svg',
          'media/css.svg',
          'media/react.svg'
        ]
      },
      {
        name: 'Waste Website REST API',
        shortDescription: 'REST API for Casa Zimbabwe\'s Waste Information Website',
        description: 'Simple REST API that serves as the backend for both the Waste Websites user facing client and the admin facing client. The API itself is written in PHP and the data is stored in JSON files.',
        mainPicture: 'media/waste-admin-main.jpg',
        projectLink: 'https://github.com/Roberto-Cardenas/cz-waste-api',
        pictures: [
          'media/waste-admin-main.jpg'
        ],
        languages: [
          'media/php.png'
        ]
      }
    ]
  };

  var carouselTags = ['#one!', '#two!', '#three!', '#four!', '#five!'];

  // Insert data into about-me page
  $('#about-me-profile-picture').attr('src', portfolioData.picture);
  
  var languageClone = $('#about-me-languages-clone');
  var languagesDiv = $('#about-me-languages');
  $.each(portfolioData.languages, (i, value) => {
    languageClone.clone().removeClass('hide').attr('src', value).appendTo(languagesDiv);
  });

  // Insert data into projects div
  var projectsDiv = $('#projects-div');
  var projectClone = $('#projects-project-tile-clone');
  $.each(portfolioData.projects, (i, val) => {
    var project = projectClone.clone().removeClass('hide');

    project.find('.project-tile-img').attr('src', val.mainPicture);
    project.find('.project-title').text(val.name);

    var projectLanguagesDiv = project.find('.project-tile-languages');
    $.each(val.languages, (j, language) => {
      languageClone.clone().removeClass('hide').attr('src', language).appendTo(projectLanguagesDiv);
    });

    // Handle a click on the more information button
    project.find('.modal-btn').click(() => {
      var modal = $('#modal1');

      // Set information
      modal.find('#modal-name').text(val.name);
      modal.find('#modal-short-description').text(val.shortDescription);
      modal.find('#modal-description').text(val.description);

      // Show link to project if it exists
      if (val.projectLink) {
        modal.find('.btn').attr('href', val.projectLink)
        modal.find('.btn').removeClass('hide');
      } else {
        modal.find('.btn').addClass('hide');
      }

      // Set images for carousel
      var carouselDiv = modal.find('.carousel.carousel-slider');
      var carouselItemClone = modal.find('#modal-image-clone');

      carouselDiv.empty();

      $.each(val.pictures, (j, picture) => {
        var item = carouselItemClone.clone().removeClass('hide');
        
        item.attr('href', carouselTags[j]);
        item.find('img').attr('src', picture);

        carouselDiv.append(item);
      });

      $('.modal').modal('open');
    });

    projectsDiv.append(project);
  });

  // Handle navigation active tab
  function setActiveTab(current) {
    var tabs = $('.tab');

    $.each(tabs, (_, tab) => $(tab).removeClass('active'));

    $(current).addClass('active');
  }

  function setActiveSidenavTab(current) {
    var tabs = $('.sidenav-tab');

    $.each(tabs, (_, tab) => $(tab).removeClass('active'));

    $(current).addClass('active');
  }

  // Set the active tab on click
  $.each($('.tab'), (_, tab) => $(tab).click(() => setActiveTab(tab)));
  $.each($('.sidenav-tab'), (_, tab) => $(tab).click(() => setActiveSidenavTab(tab)));

  // Set the active tab on scroll
  $(window).on('scroll', function() {
      var y_scroll_pos = window.pageYOffset;
      var projectsPos = $('#projects').offset().top;
      var contactPos = $('#contact').offset().top;

      // Projects
      if(y_scroll_pos >= projectsPos && y_scroll_pos < contactPos) {
        setActiveTab($('.tab')[1]);
        setActiveSidenavTab($('.sidenav-tab')[1]);
      // Contact
      } else if (y_scroll_pos >= contactPos) {
        setActiveTab($('.tab')[2]);
        setActiveSidenavTab($('.sidenav-tab')[2]);
      // About me
      } else {
        setActiveTab($('.tab')[0]);
        setActiveSidenavTab($('.sidenav-tab')[0]);
      }
  });
});

