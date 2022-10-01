function playingCards(cardFace, cardSuit) {
      let faceArr = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
      let suitArr = ['S', 'H', 'D', 'C'];
      if(faceArr.indexOf(cardFace) == -1){
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
console.log(playingCards('A', 'S'))
console.log(playingCards('10', 'H'));
console.log(playingCards('1', 'C')); 