app.post('/comments', (req, res) => {
  // Отримання даних коментаря з запиту
  const name = req.body.name;
  const message = req.body.message;

  // Збереження коментаря у базі даних 

  res.status(200).json({ success: true });
});
