const buttons = document.querySelectorAll('.faq-btn');

buttons.forEach((button) =>
  button.addEventListener('click', () => {
    if (button.classList.contains('active')) {
      button.classList.toggle('active');
    } else {
      buttons.forEach((button) => button.classList.remove('active'));
      button.classList.add('active');
    }
  })
);
