export default class Deck extends Array {

#suits = [ 'Hearts', 'Diamonds', 'Clubs', 'Spades' ];
#cards = [ 'Ace', 2, 3, 4, 5, 6, 7, 8, 9, 10, 'Jack', 'Queen', 'King' ];

constructor () {

super ();

const deck = this;

for ( const suit of deck .#suits )
for ( const card of deck .#cards )
deck .push ( { suit, card } );

}

$shuffle () {

const deck = this;
const { length } = deck;

for ( let remainder = deck .length; remainder > 1; remainder-- )
deck .unshift ( 

... deck .splice ( ( length - remainder ) + parseInt ( Math .random () * remainder ), 1 )

);

}

};
