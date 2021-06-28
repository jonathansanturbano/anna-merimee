// This file is automatically compiled by Webpack, along with any other files
// present in this directory. You're encouraged to place your actual application logic in
// a relevant structure within app/javascript and only use these pack files to reference
// that code so it'll be compiled.

require("@rails/ujs").start();
require("turbolinks").start();
require("@rails/activestorage").start();
require("channels");
require("./index");

// Uncomment to copy all static images under ../images to the output folder and reference
// them with the image_pack_tag helper in views (e.g <%= image_pack_tag 'rails.png' %>)
// or the `imagePath` JavaScript helper below.
//
// const images = require.context('../images', true)
// const imagePath = (name) => images(name, true)

import "swiper/swiper.scss";
import "swiper/components/navigation/navigation.scss";
import "bootstrap/dist/css/bootstrap.min.css";

import { introOpacity } from "../vanilla/intro_opacity";
import { previewImageOnFileSelect } from "../vanilla/photo_preview";
import { initSweetalert } from "../plugins/init_sweetalert";

document.addEventListener("turbolinks:load", () => {
  introOpacity();
  previewImageOnFileSelect();
  initSweetalert("#sweet-alert-demo", {});
});
