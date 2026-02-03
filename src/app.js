
const quizItems = document.querySelectorAll('[data-quiz] .quiz__item');

quizItems.forEach((item) => {
  const correct = item.dataset.answer;
  const feedback = item.querySelector('[data-feedback]');
  const buttons = item.querySelectorAll('button[data-choice]');

  buttons.forEach((button) => {
    button.addEventListener('click', () => {
      const choice = button.dataset.choice;

      buttons.forEach((btn) => {
        btn.classList.remove('correct', 'wrong');
      });

      if (choice === correct) {
        button.classList.add('correct');
        feedback.textContent = 'Richtig. Prüfe zur Vertiefung die entsprechende Infoeinheit und das Transkript.';
      } else {
        button.classList.add('wrong');
        feedback.textContent = 'Nicht ganz. Lies die Infoeinheit erneut und belege deine Antwort mit einer Textstelle.';
      }
    });
  });
});
