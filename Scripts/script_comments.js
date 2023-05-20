var form = document.getElementById('comment-form');
form.addEventListener('submit', function(event) {
  event.preventDefault();

  // Отримуємо дані з форми
  var name = document.getElementById('comment-name').value;
  var message = document.getElementById('comment-message').value;

  // Відправляємо дані на сервер за допомогою AJAX
  var xhr = new XMLHttpRequest();
  xhr.open('POST', '/comment.php', true);
  xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
  xhr.onreadystatechange = function() {
    if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
      // Відображаємо новий коментар на сторінці
      var commentList = document.getElementById('comment-list');
      var comment = document.createElement('div');
      comment.classList.add('comment');
      comment.innerHTML = '<strong>' + name + '</strong>: ' + message;
      commentList.appendChild(comment);

      // Очищуємо форму
      document.getElementById('comment-name').value = '';
      document.getElementById('comment-message').value = '';
    }
  };
  xhr.send('name=' + encodeURIComponent(name) + '&message=' + encodeURIComponent(message));
});
