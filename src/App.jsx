import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

import Header from "./component/Header/Header.jsx";
import Hero from "./component/Hero/Hero.jsx";
import Overview from "./component/Overview/Overview.jsx";
import Participants from "./component/Participants/Participants.jsx";
import Program from "./component/Program/Program.jsx";
import Speakers from "./component/Speakers/Speakers.jsx";
import Title from "./component/Title/Title.jsx";
import Video from "./component/Video/Video.jsx";
import Register from './component/Register/Register.jsx';
import Question from './component/Question/Question.jsx';
import Venue from './component/Venue/Venue.jsx';
import KeepInTouch from './component/KeepInTouch/KeepInTouch.jsx';
import Sponsors from './component/Sponsors/Sponsors.jsx';
import Footer from './component/Footer/Footer.jsx';

function App() {
  return (
    <>
      {/* Header */}
      <Header />
      {/* == End Header== */}

      {/* Main */}
      <main>
        {/* Hero */}
        <Hero />
        {/* == Hero End == */}

        {/* Overview */}
        <Overview />
        {/* == Overview End == */}

        {/* Participants */}
        <Participants />
        {/* == Participants End == */}

        {/* Video */}
        <Video />
        {/* == Video End == */}

        {/* Speakers */}
        <Title title={'Creative'} sub={'speakers'} className={""}
         parag={"Lorem, ipsum dolor sit amet consectetur adipisicing elit.Excepturi ullam corrupti quia"} />
         <Speakers />
        {/* == Speakers End == */}

          {/* Speakers */}
          <Title title={'Our'} sub={'Programs'} className={""}
         parag={" Similique odit explicabo iste maxime dolor vel iure voluptatem id inventore ab."} />
         <Program />
        {/* == Speakers End == */}

        {/* Register */}
         <Register />
        {/* == Register End == */}

        {/* Question */}
        <Title title={'Do You Have'} sub={'Question'} className={""}
         parag={" Similique odit explicabo iste maxime dolor vel iure voluptatem id inventore ab."} />
         <Question />
        {/* == Question End == */}

         {/* Venue */}
         <Venue />
        {/* == Venue End == */}

        {/* Sponsors */}
        {/* <Title title={'Our'} sub={'Sponsors'} className={""}
         parag={" Similique odit explicabo iste maxime dolor vel iure voluptatem id inventore ab."} />
        <Sponsors /> */}
        {/* == Sponsors End == */}

        {/* Keep In Touch */}
        <KeepInTouch />
        {/* == Keep In Touch End == */}

      </main>
      {/* == End Main == */}

       {/* Footer */}
       <Footer />
        {/* == Footer End == */}
    </>
  );
}

export default App;
