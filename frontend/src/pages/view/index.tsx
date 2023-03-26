import { viewNote } from "../../api";
import paperBg from "../../assets/Paper.png";
import AnimatedEnvelope from "../../components/AnimatedEnvelope";
import Delayed from "../../components/Delayed";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Note, Content } from "../../types";
import { Share } from "../../components/Share";

const View = () => {
  const { short } = useParams() as { short: string };
  // returning text
  const [content, setContent] = useState<Content>({
    text: "loading",
    font: "Redacted Script",
  });
  const [note, setNote] = useState<Note>({
    to: "loading",
    from: "loading",
    title: "loading",
    content: content,
  });
  const [modal, setModal] = useState(false);

  useEffect(() => {
    const getNote = async () => {
      const result = await viewNote(short).then((res) => {
        console.log(res);
        return res;
      });
      setNote(result);
    };
    getNote();
  }, []);

  useEffect(() => {
    setContent(note.content);
  }, [note]);

  const [isAnimationVisible, setIsAnimationVisible] = useState(true);

  setTimeout(() => {
    setIsAnimationVisible(false);
  }, 5000);

  return (
    <>
      <Share
        isOpen={modal}
        setIsOpen={setModal}
        link={"localhost:5173/" + short}
        to=""
      />
      {isAnimationVisible ? <AnimatedEnvelope /> : <> </>}
      <Delayed waitBeforeShow={5000}>
        <div className="relative text-black">
          <img src={paperBg} alt="paper background" className="w-[600px]" />
          <div className="flex-col flex-wrap">
            <h1 className="absolute top-6 right-10 font-libre">03/26/2023</h1>
            <h1 className="absolute top-4 left-10 font-libre">to: {note.to}</h1>
            <h1 className="absolute top-10 left-10 font-libre">
              from: {note.from}
            </h1>
            <h1
              style={{ fontFamily: note.content.font }}
              className="absolute top-20 left-10 font-libre text-3xl max-w-[500px] break-words"
            >
              {/* // establish max character count */}
              {note.title}
            </h1>
            <p
              style={{ fontFamily: note.content.font }}
              className="text-black absolute top-32 left-10 max-w-[500px] break-words"
            >
              {note.content.text}
            </p>
          </div>
          <div className="mt-4 flex justify-between">
            <button
              onClick={() => setModal(true)}
              className="rounded bg-indigo-700 px-6 py-3 text-lg font-serif leading normal text-white"
              type="button"
            >
              Share letter
            </button>
            <a href="/create">
              <button className="rounded bg-indigo-700 px-6 py-3 text-lg font-serif leading normal text-white">
                Create a letter
              </button>
            </a>
          </div>
        </div>
      </Delayed>
    </>
  );
};

export default View;
