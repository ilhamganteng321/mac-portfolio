import WindowWrapper from "#hoc/WindowWrapper.jsx";
import { techStack } from "#constants/index.js";
import { Check, Flag } from "lucide-react";
import WindowControls from "#components/WindowControls.jsx";
import { Fragment } from "react";

const Terminal = () => {
  return (
    <>
      <div id="window-header">
        <WindowControls target="terminal" />
        <h2>Tech Stack</h2>
      </div>

      <div className="techstack">
        {/* 👉 SCROLL AREA */}
        <div className="techstack-scroll">
          <p>
            <span className="font-bold">@Ilham Arip % </span>
            show tech stack
          </p>

          <div className="label">
            <p className="w-32">Category</p>
            <p>Technologies</p>
          </div>

          <ul className="content">
            {techStack.map(({ category, items }, idx) => (
              <Fragment key={category}>
                <li className="flex items-start">
                  <Check className="check" size={20} />
                  <h3 className="w-32">{category}</h3>

                  <ul className="flex-1 flex flex-wrap">
                    {items.map((item, index) => (
                      <li key={item} className="mr-1">
                        {item}
                        {index < items.length - 1 && ","}
                      </li>
                    ))}
                  </ul>
                </li>

                {idx < techStack.length - 1 && (
                  <div className="h-px bg-linear-to-r from-transparent via-gray-300 to-transparent dark:via-gray-700 my-3" />
                )}
              </Fragment>
            ))}
          </ul>

          <div className="footnote">
            <p>
              <Check size={20} /> {techStack.length || 0} stacks loaded
              successfully
            </p>
            <p className="text-black">
              <Flag size={15} fill="black" /> Render time: 6ms
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

const TerminalWindow = WindowWrapper(Terminal, "terminal");

export default TerminalWindow;
