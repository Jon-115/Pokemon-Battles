import './css/App.css'
import ashPokemon from './ashPokemon.jpeg'

function App() {
  return (
    <div id='homeMain'>
      <div id='mainCol'>
        <h1 id='welcome'>Welcome</h1>
        <br />
        <img alt='' src={ashPokemon} ></img>
        <br /> <br />

        <div id='About'>
          <h3>About</h3>
          <p> Welcome to Pokemon Battles. Relive your childhood exitement of using your pokemon up aginst one another without the 
            the complicated rules brought upon by the competive trading card game. Build an all round team to become the
            best that no one ever was and defeat all you oppenents. 
          </p>
        </div>
        <br /> <br />

        <div id='Deck'>
          <h3>Deck</h3>
          <p> Every World Class Trainer needs a strong team of pokemon to become the best. Create your team of unstopable
            pokemon by heading over to the Deck page. There you can create a total of 3 different team to use in battle with
            6 pokemon per team. Don't be afraid to change your team though as being able to demonstrate your adapability is an
            important part of being a great trainer. 
          </p>
        </div>
        <br /> <br />

        <div id='Battle'>
          <h3>Battle</h3>
          <p> Reading for battle, head over to the battle page to challenge strong oppents. Climb your way to the top by
            defeating strong oppenents and prove yourself as the best. Even if an oppenent seems to difficult just return
            to the deck page and readjust your stragtigy by developing new creative teams.
          </p>
        </div>
        <br /> <br />

      </div>

    </div>
  );
}

export default App;
