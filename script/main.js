"use strict";
import portfolioRenderViaClick from "./components/Portfolio.js";
import modal from "./components/modal.js"
import mobileMenu from "./components/mobile-menu.js"
window.addEventListener('DOMContentLoaded', () => {
  portfolioRenderViaClick()
  modal()
  mobileMenu()
})



