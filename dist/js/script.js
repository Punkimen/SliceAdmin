// (function () {
//   'use strict'
//   var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
//   tooltipTriggerList.forEach(function (tooltipTriggerEl) {
//     new bootstrap.Tooltip(tooltipTriggerEl)
//   })
// })()
(function () {
  'use strict'
  const loginForm = document.querySelector('.login-form')
  const enterBlock = document.querySelector('.enter__block')
  const afterLogin = document.querySelector('.after__enter')
  if (loginForm) {
    loginForm.addEventListener('submit', e => {
      e.preventDefault()
      enterBlock.classList.add('d-none')
      afterLogin.classList.remove('d-none')
    })
  }
})();
(function () {
  'use strict'
  const reportBtns = document.querySelectorAll('.report__btn')

  function getSiblings(elem) {
    let siblings = [];
    let sibling = elem;
    while (sibling.previousSibling) {
      sibling = sibling.previousSibling;
      sibling.nodeType == 1 && siblings.push(sibling);
    }

    sibling = elem;
    while (sibling.nextSibling) {
      sibling = sibling.nextSibling;
      sibling.nodeType == 1 && siblings.push(sibling);
    }

    return siblings;
  }

  reportBtns.forEach(el => {
    el.addEventListener('click', e => {
      el.classList.remove('unactive')
      getSiblings(el).forEach(el => {
        el.classList.add('unactive')
      })
    })
  })
})()