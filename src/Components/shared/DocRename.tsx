import { useEffect, useState } from "react";
import type { Dispatch, SetStateAction } from "react";
import type { ClientDocument } from "../../pages";

function DocRename({
  doc,
  setDoc,
}: {
  doc: ClientDocument & {
    newTitle?: string | undefined;
  };
  setDoc: Dispatch<
    SetStateAction<
      ClientDocument & {
        newTitle?: string | undefined;
      }
    >
  >;
}) {
  const [docRename, setDocRename] = useState(doc.title);
  useEffect(() => {
    setDocRename(doc.title + ".md");
  }, [doc.title]); // see if this useEffect is necesssary
  return (
    <div className="group flex items-center justify-start py-4 px-6">
      <svg
        width="14"
        height="16"
        xmlns="http://www.w3.org/2000/svg"
        className=""
      >
        <path
          d="M13.107 3.393c.167.167.31.393.429.678.119.286.178.548.178.786v10.286c0 .238-.083.44-.25.607a.827.827 0 0 1-.607.25h-12a.827.827 0 0 1-.607-.25.827.827 0 0 1-.25-.607V.857C0 .62.083.417.25.25A.827.827 0 0 1 .857 0h8c.238 0 .5.06.786.179.286.119.512.261.678.428l2.786 2.786ZM9.143 1.214v3.357H12.5c-.06-.172-.125-.294-.196-.366L9.509 1.411c-.072-.072-.194-.137-.366-.197Zm3.428 13.643V5.714H8.857a.827.827 0 0 1-.607-.25.827.827 0 0 1-.25-.607V1.143H1.143v13.714H12.57Z"
          fill="#FFF"
        />
      </svg>
      <div className="pl-4">
        <label
          className="hidden text-bodym text-400 tablet:block"
          htmlFor="document-name"
        >
          Document Name
        </label>
        <input
          onMouseLeave={() => {
            if (docRename.slice(docRename.length - 3) !== ".md") {
              setDoc({ ...doc, newTitle: docRename });
              setDocRename(docRename + ".md");
            } else {
              setDoc({
                ...doc,
                newTitle: docRename.slice(0, docRename.length - 3),
              });
            }
          }}
          onKeyUp={(e) => {
            if (e.code === "Enter") {
              if (docRename.slice(docRename.length - 3) !== ".md") {
                setDoc({ ...doc, newTitle: docRename });
                setDocRename(docRename + ".md");
              } else {
                setDoc({
                  ...doc,
                  newTitle: docRename.slice(0, docRename.length - 3),
                });
              }
            }
          }}
          onChange={(e) => {
            setDocRename(e.target.value);
            setDocRename((x) => x.toLowerCase().replace(" ", "-"));
          }}
          value={docRename}
          name="title"
          className="block cursor-pointer border-t-0 border-r-0 border-l-0 border-b border-100 border-opacity-0 bg-800 text-hm text-100 caret-orange outline-none  hover:border-opacity-100 tablet:w-[10rem] desktop:w-[17rem]"
          id="document-name"
        />
      </div>
    </div>
  );
}

export default DocRename;
