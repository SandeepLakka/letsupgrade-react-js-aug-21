import './App.css';
import Card from './Card';

function App() {

  let cardsData = [
    {
      image : "https://placeimg.com/640/480/animals",
      title : "Animals",
      subtitle : "Animals don't hate, and we're supposed to be better than them.",
      description : "The assumption that animals are without rights and the illusion that our treatment of them has no moral significance is a positively outrageous example of Western crudity and barbarity. Universal compassion is the only guarantee of morality."
    },{
      image : "https://placeimg.com/640/480/arch",
      title : "Architecture",
      subtitle : "We shape our buildings; thereafter they shape us.",
      description : "A great building must begin with the immeasurable, must go through measurable means when it is being designed, and in the end must be unmeasured."
    },{
      image : "https://placeimg.com/640/480/nature",
      title : "Nature",
      subtitle : "I like this place and could willingly waste my time in it.",
      description : "We need the tonic of wildness...At the same time that we are earnest to explore and learn all things, we require that all things be mysterious and unexplorable, that land and sea be indefinitely wild, unsurveyed and unfathomed by us because unfathomable. We can never have enough of nature."
    },{
      image : "https://placeimg.com/640/480/people",
      title : "People",
      subtitle : "People often claim to hunger for truth, but seldom like the taste when it's served up.",
      description : "People make mistakes in life through believing too much, but they have a damned dull time if they believe too little."
    },{
      image : "https://placeimg.com/640/480/tech",
      title : "Technology",
      subtitle : "It's still magic even if you know how it's done.",
      description : "First we thought the PC was a calculator. Then we found out how to turn numbers into letters with ASCII — and we thought it was a typewriter. Then we discovered graphics, and we thought it was a television. With the World Wide Web, we've realized it's a brochure."
    }
  ];

  return (
    <div className="App">
      <div className="AppData">
        <h1>Hello React</h1>
      </div>
      <div className="Cards">
        {cardsData.map((card,index) => (
          <Card image={card.image} title={card.title}
          subtitle={card.subtitle} description={card.description}/>
        ))}
      </div>
    </div>
  );
}

export default App;
