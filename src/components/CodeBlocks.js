import { CodeBlock, dracula } from "react-code-blocks";

export default function CodeBlocks({ code, language }) {
  return (
    <CodeBlock
      text={code}
      language={language}
      showLineNumbers
      theme={dracula}
    />
  );
}
