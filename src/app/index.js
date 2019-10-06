import $ from 'jquery'
import 'slider-pro'
import 'slider-pro/dist/css/slider-pro.min.css'

import 'magnific-popup'
import 'magnific-popup/dist/magnific-popup.css'
import Swal from 'sweetalert2/dist/sweetalert2.js'
import 'dark-mode-switch/dark-mode.css'
import 'dark-mode-switch/dark-mode-switch'
import 'dark-mode-switch/dark-mode-switch.min.js'
import 'sweetalert2/src/sweetalert2.scss'
(function () {
  'use strict'

  $('#main-banner').sliderPro({

    width: '100%',
    height: 500,
    arrows: true,
    buttons: false,
    waitForLayers: true,
    thumbnailWidth: 200,
    thumbnailHeight: 100,
    thumbnailPointer: true,
    autoplay: false,
    autoScaleLayers: false
  })

  $('.popup-gallery').magnificPopup({
    delegate: 'a',
    type: 'image',
    tLoading: 'Loading image #%curr%...',
    mainClass: 'mfp-img-mobile',
    gallery: {
      enabled: true,
      navigateByImgClick: true,
      preload: [0, 1] // Will preload 0 - before current, and 1 after the current image
    },
    image: {
      tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
      titleSrc: function (item) {
        return item.el.attr('title') + '<small>by Marsel Van Oosten</small>'
      }
    }
  })
  Swal.fire({
    title: 'Error!',
    text: 'Do you want to continue',
    type: 'error',
    confirmButtonText: 'Cool'
  })
})() // Page Ready
$(function () {
  $('#oppen').click(function () {
    Swal.fire({
      title: 'Custom width, padding, background.',
      width: 600,
      padding: '3em',
      background: '#fff url(https://sweetalert2.github.io/images/trees.png)',
      backdrop: `
              rgba(0,0,123,0.4)
              url("https://sweetalert2.github.io/images/nyan-cat.gif")
              center left
              repeat
            `
    })
  })
})
