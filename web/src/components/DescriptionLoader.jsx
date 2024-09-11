import { Separator } from "@radix-ui/react-separator";
import React from "react";

const DescriptionLoader = ({ data }) => {
  const createElement = (type, props, children) => {
    const Tag = type;
    return <Tag {...props}>{children}</Tag>;
  };

  const renderList = (list) => {
    return (
      <ul className="list-disc pl-5">
        {list.map((sublist, index) =>
          Array.isArray(sublist[0]) ? (
            <li key={index}>
              <p className="font-nunito text-lg text-blue-950 font-medium">
                {sublist[0][0]}
              </p>
              {renderList(sublist[0][1])}
            </li>
          ) : (
            <li
              className="font-nunito text-base text-blue-950 font-light"
              key={index}
            >
              {sublist}
            </li>
          )
        )}
      </ul>
    );
  };

  const renderItem = (item) => {
    switch (item.type) {
      case "heading":
        return createElement(
          "h3",
          {
            className: "font-nunito text-2xl text-blue-900 font-semibold my-4",
          },
          item.text
        );
      case "description":
        return createElement(
          "p",
          { className: "font-nunito text-base text-blue-900 font-normal mb-3" },
          item.text
        );
      case "list":
        return (
          <ul className="list-disc pl-6">
            {item.list.map((sublist, index) =>
              Array.isArray(sublist[0]) ? (
                <li key={index}>
                  <p className="font-nunito text-lg text-blue-900 font-medium">
                    {sublist[0][0]}
                  </p>
                  {renderList(sublist[0][1])}
                </li>
              ) : (
                <li
                  className="font-nunito text-base text-blue-900 font-light"
                  key={index}
                >
                  {sublist}
                </li>
              )
            )}
          </ul>
        );
      default:
        return null;
    }
  };

  return (
    <article id="challenge-requirements" className="space-y-6">
      {typeof data === "string" ? (
        <p
          dangerouslySetInnerHTML={{
            __html: data.replace(/\n/g, "<br />"),
          }}
        />
      ) : (
        data?.map((item, index) =>
          item.type === "heading" ? (
            <div className="my-4" key={index}>
              <h3 className="text-2xl text-blue-900 font-bold font-nunito">
                {item.text}
              </h3>
              <Separator className="my-2" />
            </div>
          ) : (
            <div key={index}>{renderItem(item)}</div>
          )
        )
      )}
    </article>
  );
};

export default DescriptionLoader;
