/*****************API******************/
// Die URL des RSS-Feeds
const rssFeedUrl = 'https://api.storyblok.com/v1/cdn/stories/?version=published&token=iPF9VlfryqqMlj8F0MWNOgtt';

// Funktion zum Abrufen und Parsen des RSS-Feeds
function parseRssFeed() {
  fetch(rssFeedUrl)
    .then(response => response.json())
    .then(data => {
    data.stories.forEach(story=> {
// Hier kannst du die Karten erstellen und sie in deiner UI anzeigen
    createCard(story.content.headline);
      });
    })
    .catch(error => {
      console.error('Fehler beim Abrufen oder Parsen des RSS-Feeds:', error);
    });
}

// Funktion zum Erstellen einer Karte (Card) und Anzeigen in der UI
function createCard(title) {
  // Hier kannst du die Logik zum Erstellen und Anzeigen der Karten in deiner UI implementieren
  // Zum Beispiel kannst du <div>-Elemente erstellen und sie mit den Informationen ausstatten.
  console.log(title);
}

// Den RSS-Feed parsen, wenn die Seite geladen wird
parseRssFeed();
