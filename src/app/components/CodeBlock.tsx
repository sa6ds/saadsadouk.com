"use client";

import type React from "react";
import { useState, useEffect } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import {
  oneLight,
  oneDark,
} from "react-syntax-highlighter/dist/esm/styles/prism";

type CodeBlockProps = {
  language: string;
  value: string;
  showLineNumbers?: boolean;
};

const CodeBlock = ({
  language,
  value,
  showLineNumbers = true,
}: CodeBlockProps) => {
  const [copied, setCopied] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    setIsDarkMode(document.documentElement.classList.contains("dark"));
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.attributeName === "class") {
          setIsDarkMode(document.documentElement.classList.contains("dark"));
        }
      });
    });
    observer.observe(document.documentElement, { attributes: true });
    return () => observer.disconnect();
  }, []);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(value);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="relative rounded-lg border border-gray-200 bg-gray-50 font-mono text-sm mb-4 dark:border-gray-800 dark:bg-[#121212]">
      <div className="flex items-center justify-between px-4 py-2 border-b border-gray-200 dark:border-gray-800">
        <span className="text-xs text-gray-600 dark:text-gray-400">
          {language}
        </span>
        <button
          onClick={copyToClipboard}
          className="flex items-center text-xs text-gray-600 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-300"
        >
          {copied ? <span>Copied</span> : <span>Copy</span>}
        </button>
      </div>
      <div className="overflow-x-auto p-4">
        <SyntaxHighlighter
          language={language}
          style={
            isDarkMode
              ? {
                  ...oneDark,
                  'pre[class*="language-"]': {
                    ...oneDark['pre[class*="language-"]'],
                    background: "transparent",
                  },
                  'code[class*="language-"]': {
                    ...oneDark['code[class*="language-"]'],
                    background: "transparent",
                  },
                }
              : oneLight
          }
          showLineNumbers={showLineNumbers}
          customStyle={{
            margin: 0,
            background: "transparent",
            padding: 0,
          }}
        >
          {value}
        </SyntaxHighlighter>
      </div>
    </div>
  );
};

export default CodeBlock;
