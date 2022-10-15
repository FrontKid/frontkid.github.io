import PORTFOLIO_CATALOG from "../constants/portfolio_catalog.js";
import { ROOT_PORTFOLIO } from "../constants/root.js"

const portfolioBtns = document.querySelectorAll('.portfolio__btn')

function renderAll(catalog) {
  for (const port of PORTFOLIO_CATALOG) {
    const { img, title, subTitle } = port

    //render html when page was loaded
    catalog = portfolioInner(catalog, img, title, subTitle)
  }

  ROOT_PORTFOLIO.innerHTML = catalog;
}

function portfolioInner(layout, img, title, subTitle) {
  layout += `
    <li class="portfolio__cards-item">
      <img class="portfolio__card-img" width="370" src="${img}" />
      <div class="portfolio__card-box">  
        <h2 class="portfolio__card-title">${title}</h2>
        <p class="portfolio__card-subtitle">${subTitle}</p>
      </div>
    </li>
  `
  return layout
}

export function portfolioRenderViaClick() {
  window.addEventListener('DOMContentLoaded', () => {
    let htmlPortfolioCatalog = ""
    renderAll(htmlPortfolioCatalog)
    portfolioBtns.forEach(btn => btn.addEventListener('click', (e) => {
      htmlPortfolioCatalog = ''
      let curentInner = e.target.getAttribute("name");
      const active = e.target

      const currentActive = document.getElementsByClassName("active");
      currentActive[0].className = currentActive[0].className.replace(" active", "");
      active.classList.add('active');

      if (curentInner === 'Усі') {
        renderAll(htmlPortfolioCatalog)
        return
      }

      PORTFOLIO_CATALOG.forEach(({ img, title, subTitle }) => {
        if (subTitle === curentInner) {

          //render html when button was pressed
          htmlPortfolioCatalog = portfolioInner(htmlPortfolioCatalog, img, title, subTitle)
        }

        ROOT_PORTFOLIO.innerHTML = htmlPortfolioCatalog;
      })
    }))
  })

}
portfolioRenderViaClick()

