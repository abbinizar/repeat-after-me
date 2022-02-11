/* eslint-disable react-hooks/exhaustive-deps */
import { useContext, useEffect, useState } from "react";
import { DataContext } from "../../context/data";
import { sentence } from "../../data/sentence";
import Navigation from "../molecule/navigation";

const SentenceSection = () => {
  const [dataSentence, setDataSentence] = useState(0);
  const { setSelectedSentence } = useContext(DataContext);

  const getSentence = (numb: number) => sentence[numb];

  const setNumb = (numb: number) => {
    let data = dataSentence + numb;
    if (data === -1) {
      data = 70;
    } else if (data === 71) {
      data = 0;
    }
    setDataSentence(data);
  };

  useEffect(() => {
    setSelectedSentence(getSentence(dataSentence));
  }, [dataSentence]);

  return (
    <div className="space-y-3 flex flex-col">
      <p className="text-lg font-bold dark:text-white text-dark-200">
        Sentence:
      </p>
      <div className="w-full h-36 rounded-lg p-4 border border-white bg-dark-200 text-white overflow-auto">
        {getSentence(dataSentence)}
      </div>
      <div className="flex self-end">
        <Navigation
          onClickLeft={() => setNumb(-1)}
          onClickRight={() => setNumb(1)}
        />
      </div>
    </div>
  );
};

export default SentenceSection;
