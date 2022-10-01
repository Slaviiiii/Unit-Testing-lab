function deckOfCards(cards) {
  const result = [];

  for (let cardAsString of cards) {
    const face = cardAsString.slice(0, -1);
    const suit = cardAsString.slice(-1);

    try {
      const card = createCard(face, suit);
      result.push(card);
    } catch (err) {
      console.log(`Invalid card: ${face}${suit}`);
      return;
    }
  }
  console.log(result.join(' '));

  function createCard(cardFace, cardSuit) {
    let faceArr = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
    let suitArr = ['S', 'H', 'D', 'C'];
    if (faceArr.indexOf(cardFace) == -1) {
      throw new Error('Invalid face: ' + cardFace);
    }

    if (!faceArr.includes(cardFace) || !suitArr.includes(cardSuit)) {
      throw Error();
    }
    let obj = {
      cardFace: cardFace,
      cardSuit: cardSuit,
      toString() {
        if (cardSuit === 'H') {
          return `${this.cardFace}♥`;
        } else if (cardSuit === 'S') {
          return `${this.cardFace}♠`;
        } else if (cardSuit === 'C') {
          return `${this.cardFace}♣`;
        } else if (cardSuit === 'D') {
          return `${this.cardFace}♦`;
        }
      }
    }
    return obj.toString();
  }
}
deckOfCards(['AS', '10D', 'KH', '2C'])
deckOfCards(['5S', '3D', 'QD', '1C'])