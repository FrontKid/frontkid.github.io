const mobileMenu = () => {
  const refs = {
    mobileBurger: document.querySelector('.mobile-burger-icon'),
    mobileClose: document.querySelector('.mobile-close'),
    mobile: document.querySelector('.mobile'),
  }

  refs.mobileBurger && refs.mobileBurger.addEventListener('click', (e) => {
    refs.mobile.classList.remove('mobile-hidden')
  })

  refs.mobileClose && refs.mobileClose.addEventListener('click', (e) => {
    refs.mobile.classList.add('mobile-hidden')
  })

}

export default mobileMenu