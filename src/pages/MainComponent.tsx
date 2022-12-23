import type { Session } from "next-auth";
import type { Dispatch, SetStateAction } from "react";
import { useState } from "react";
import Editor from "../Components/Editor";
import Navbar from "../Components/Navbar";
import Sidebar from "../Components/Sidebar";
import type { ClientDocument } from "./index";
const MainComponent = ({
  sessionData,
  isLight,
  setIsLight,
  initDocs,
}: {
  sessionData: Session | null;
  isLight: boolean;
  setIsLight: Dispatch<SetStateAction<boolean>>;
  initDocs: ClientDocument[];
}) => {
  const [docs, setDocs] = useState(initDocs);
  const [doc, setDoc] = useState(initDocs[0] as ClientDocument);
  const [content, setContent] = useState(doc.content);
  const [showSidebar, setShowSidebar] = useState(false);

  return (
    <>
      <main
        className={`flex h-screen w-screen overflow-hidden ${
          isLight ? "" : "dark"
        }`}
      >
        <div className={`${showSidebar ? "" : "hidden"} w-[15.625rem]`}>
          <Sidebar
            isLight={isLight}
            setIsLight={setIsLight}
            docs={docs}
            setDoc={setDoc}
            setDocs={setDocs}
            content={content}
            currentDoc={doc}
          />
        </div>
        <div className="w-full">
          <Navbar
            sessionData={sessionData}
            isLight={isLight}
            setShowSidebar={setShowSidebar}
            showSidebar={showSidebar}
            setDocs={setDocs}
            docs={docs}
            setDoc={setDoc}
            doc={doc}
            content={content}
            setContent={setContent}
          />
          <Editor content={content} setContent={setContent} doc={doc} />
        </div>
      </main>
    </>
  );
};

export default MainComponent;
