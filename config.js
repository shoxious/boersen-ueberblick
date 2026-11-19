// Client Key aus dem TikTok-Developer-Portal (öffentlich, kein Geheimnis).
// Für das Demo-Video den Sandbox-Key eintragen, nach der Freigabe den Production-Key.
window.TIKTOK_CONFIG = {
  clientKey: "sbawckowi93mqnmiw8",   // Sandbox "Demo" – nach der Freigabe durch den Production-Key ersetzen
  scopes: "user.info.basic,video.upload",
  redirectUri: "https://shoxious.github.io/boersen-ueberblick/callback.html",
};
