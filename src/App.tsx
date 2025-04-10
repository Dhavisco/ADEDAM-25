
import EventDetails from './components/EventDetails';
import Hero from './components/Hero';
import RSVPModal from './components/RSVPModal';
import Story from './components/Story';
import { CountdownTimer } from './CountDown';


export default function App() {

  return (
    <>
      <Hero/>
      <Story/>
      <EventDetails/>
      <CountdownTimer/>
      <RSVPModal/>
    </>
  );
}