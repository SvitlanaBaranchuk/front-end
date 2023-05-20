const commentForm = document.getElementById('comment-form');

commentForm.addEventListener('submit', (e) => {
  e.preventDefault();

  const nameInput = document.getElementById('comment-name');
  const messageInput = document.getElementById('comment-message');

  const name = nameInput.value;
  const message = messageInput.value;

  // Очищення поля вводу
  nameInput.value = '';
  messageInput.value = '';

  // Відправка коментаря на сервер
  fetch('/comments', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ name, message })
  })
  .then(response => {
    if (response.ok) {
      // Успішно опубліковано
      // Оновлення списку коментарів 
    } else {
      // Помилка при опублікуванні коментаря
    }
  })
  .catch(error => {
    // Помилка з'єднання або інша помилка
  });
});
