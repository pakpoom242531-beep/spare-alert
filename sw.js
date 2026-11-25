importScripts('https://cdn.onesignal.com/sdks/web/v16/OneSignalSDK.sw.js');

self.addEventListener('push', function(event) {
  if ('setAppBadge' in navigator) {
    navigator.setAppBadge(1).catch(() => {});
  }
});

self.addEventListener('notificationclick', function(event) {
  event.notification.close();
  if ('clearAppBadge' in navigator) {
    navigator.clearAppBadge().catch(() => {});
  }
});
