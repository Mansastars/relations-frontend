import React from "react";

const containsHtml = (str) => /<\/?[a-z][\s\S]*>/i.test(str);

const InputContainer = ({
  isRequired,
  title,
  isHeader,
  headerText,
  isadditionalText,
  additionalText,
  children,
  additionalClass,
}) => {
  return (
    <div className={`bg-white flex flex-col rounded-xl items-start w-full`}>
      {isHeader && (
        <div className=" p-5 bg-[#82D4D4] w-full rounded-tl-xl rounded-tr-xl">
          <p>{headerText}</p>
        </div>
      )}
      <div className=" p-5 flex flex-col gap-5 w-full">
        <div className=" flex gap-2 items-center">
          <h2 className=" text-dark-blue font-semibold text-lg">{title}</h2>
          {isRequired && <p className=" text-red-600">*</p>}
        </div>
        {isadditionalText &&
          (containsHtml(additionalText) ? (
            <p
              className="additional-text"
              dangerouslySetInnerHTML={{ __html: additionalText }}
            />
          ) : (
            <p className="additional-text">{additionalText}</p>
          ))}
        {children}
      </div>
    </div>
  );
};

export default InputContainer;
