const commentList = document.getElementById('comment-list');

fetch('/comments')
  .then((response) => response.json())
  .then((data) => {
    // Отримання коментарів і відображення їх на сторінці
    data.forEach((comment) => {
      const commentItem = document.createElement('div');
      commentItem.textContent = comment.message;
      commentList.appendChild(commentItem);
    });
  })
  .catch((error) => {
    console.error('Помилка запиту до сервера:', error);
  });
