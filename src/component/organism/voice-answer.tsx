/* eslint-disable react-hooks/exhaustive-deps */
import Button from "../atom/button";
import ButtonIcon from "../atom/button-icon";
import { FiMic, FiMicOff, FiTrash2 } from "react-icons/fi";
import { useContext, useEffect, useState } from "react";
import { DataContext } from "../../context/data";

declare global {
  interface Window {
    SpeechRecognition: any;
    webkitSpeechRecognition: any;
  }
}
const SpeechRecognition =
  window.SpeechRecognition || window.webkitSpeechRecognition;
const mic = new SpeechRecognition();

mic.continuous = true;
mic.interimResults = true;
mic.lang = "en-US";

const VoiceAnswer = () => {
  const [isRecord, setRecord] = useState(false);
  const [answer, setAnswer] = useState("");
  const { selectedSentence } = useContext(DataContext);
  const [verification, setVerification] = useState(Boolean);
  const [isCheck, setCheck] = useState(false);

  useEffect(() => {
    handleListen();
  }, [isRecord]);

  const handleListen = () => {
    if (isRecord) {
      mic.start();
      mic.onend = () => {
        mic.start();
        setCheck(false);
      };
    } else {
      mic.stop();
      mic.onend = () => {
        setCheck(false);
      };
    }
    mic.onstart = () => {
      setCheck(false);
    };

    mic.onresult = (event: {
      results: Iterable<unknown> | ArrayLike<unknown>;
    }) => {
      const transcript = Array.from(event.results)
        .map((result: any) => result[0])
        .map((result) => result.transcript)
        .join("");
      setAnswer(transcript as string);
      mic.onerror = (event: { error: any }) => {
        console.log(event.error);
      };
    };
  };

  const handleRemove = () => {
    mic.stop();
    setAnswer("");
    setCheck(false);
  };

  const handleVerify = () => {
    const answerText = answer.toLowerCase();
    const sentenceText = selectedSentence.toLowerCase();
    setCheck(true);
    setVerification(answerText === sentenceText);
  };

  return (
    <div className="space-y-3 flex flex-col">
      <p className="text-lg font-bold dark:text-white text-dark-200 flex items-center space-x-4">
        Your voice:{" "}
        {isCheck &&
          (verification ? (
            <span className="text-green-400 ml-2">Correct 🥳</span>
          ) : (
            <span className="text-orange-500 ml-2">Wrong 🙅‍♂️</span>
          ))}
      </p>
      <div className="w-full h-48 rounded-lg p-4 bg-dark-200 text-white overflow-auto">
        {answer}
      </div>
      <div className="flex justify-between">
        <ButtonIcon onClick={handleRemove}>
          <FiTrash2 />
        </ButtonIcon>
        <div className="flex items-center space-x-4">
          {isRecord && (
            <div className="animate-ping bg-pink-400 h-4 w-4 rounded-full"></div>
          )}
          {isRecord ? (
            <ButtonIcon onClick={() => setRecord(false)}>
              <FiMicOff />
            </ButtonIcon>
          ) : (
            <ButtonIcon onClick={() => setRecord(true)}>
              <FiMic />
            </ButtonIcon>
          )}

          <Button
            label="Check!"
            disabled={answer === ""}
            onClick={handleVerify}
          />
        </div>
      </div>
    </div>
  );
};

export default VoiceAnswer;
