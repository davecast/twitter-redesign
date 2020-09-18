const $links = document.querySelectorAll('.navigation__link');

$links.forEach((link) => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    const $current = document.querySelector('.navigation__link--active');
    let $pressLink;

    if (e.target.classList.contains('navigation__link')) {
      $pressLink = e.target;
    } else {
      $pressLink = e.target.parentElement;
    }

    $current.classList.remove('navigation__link--active');
    $current.children[0].className = $current.children[0].className.replace(/-a/g,''); 
    $pressLink.classList.add('navigation__link--active');
    $pressLink.children[0].className = `${$pressLink.children[0].className}-a`; 
  })
})