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
    createCard(story.content);
      });
    })
    .catch(error => {
      console.error('Fehler beim Abrufen oder Parsen des RSS-Feeds:', error);
    });
}

// Funktion zum Erstellen einer Karte (Card) und Anzeigen in der UI
function createCard(content) {
  
  // Hier kannst du die Logik zum Erstellen und Anzeigen der Karten in deiner UI implementieren
  console.log(content);

  // Erstelle ein <div>-Element für die Karte
  const cardDiv = document.createElement('div');
  cardDiv.className = 'card'; // Füge CSS-Klassen hinzu, um das Styling anzupassen

  // Erstelle ein <img>-Element für das featured_image
  const featuredImageElement = document.createElement('img');
  featuredImageElement.src = content.featured_image.filename; // Setze die Bildquelle (URL)

  // Erstelle ein <h2>-Element für den Titel
  const titleElement = document.createElement('h4');
  titleElement.textContent = content.headline;

  // Erstelle ein <p>-Element für die Beschreibung
  const descriptionElement = document.createElement('p');
  descriptionElement.textContent = content.featured_excerpt;

  // Erstelle ein <a>-Element für den Link
  const linkElement = document.createElement('a');
  linkElement.textContent = 'Mehr lesen';
  linkElement.href = content.link;

  // Füge die erstellten Elemente zur Karte hinzu
  cardDiv.appendChild(featuredImageElement);
  cardDiv.appendChild(titleElement);
  cardDiv.appendChild(descriptionElement);
  cardDiv.appendChild(linkElement);

  // Füge die Karte zum Container hinzu (z.B., einem Container mit der ID 'rssFeedCards')
  const rssFeedCards = document.getElementById('rssFeedCards');
  rssFeedCards.appendChild(cardDiv);
}

// Den RSS-Feed parsen, wenn die Seite geladen wird
parseRssFeed();

