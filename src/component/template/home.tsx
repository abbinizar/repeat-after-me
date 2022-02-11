import Text from "../atom/text";
import Header from "../organism/header";
import SentenceSection from "../organism/sentence-section";
import VoiceAnswer from "../organism/voice-answer";

const HomePage = () => {
  return (
    <div className="flex w-full flex-col space-y-6">
      <div className="space-y-4">
        <Header />
        <Text
          line1="Read carefully the following sentences. then speak by recording your voice."
          line2="To record your voice, press the microphone button."
          line3="And check your answers."
          line4="Have fun!"
        ></Text>
      </div>
      <div className="space-y-6">
        <SentenceSection />
        <VoiceAnswer />
      </div>
    </div>
  );
};
export default HomePage;
