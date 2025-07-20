self.addEventListener('notificationclick', function(event) {
  event.notification.close();
  event.waitUntil(
    clients.openWindow('https://tiktok.com') // Cambia a donde quieras redirigir
  );
});
