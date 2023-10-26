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
// Damit es im HTML die Ihalte ausgibt
function createCard(title, description, link) {
  const rssFeedCards = document.getElementById('rssFeedCards');

  // Erstelle ein <div>-Element für die Karte
  const cardDiv = document.createElement('div');
  cardDiv.className = 'card';

  // Füge ein Bild ein ober dem Titel
  

  // Erstelle <h2> für den Titel
  const titleElement = document.createElement('h4');
  titleElement.textContent = title;

  // Erstelle <p> für die Beschreibung
  const descriptionElement = document.createElement('p');
  descriptionElement.textContent = description;

  // Erstelle <a> für den Link
  const linkElement = document.createElement('a');
  linkElement.textContent = 'Mehr lesen';
  linkElement.href = link;

  // Füge die erstellten Elemente zur Karte hinzu
  cardDiv.appendChild(titleElement);
  cardDiv.appendChild(descriptionElement);
  cardDiv.appendChild(linkElement);

  // Füge die Karte zum Container hinzu
  rssFeedCards.appendChild(cardDiv);
}

// Den RSS-Feed parsen, wenn die Seite geladen wird
parseRssFeed();
