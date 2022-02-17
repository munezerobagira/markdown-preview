import { marked } from "marked";
import { useState } from "react";
function App() {
  const [input, setInput] = useState(`# H1
  ## H2
  [I'm an inline-style link](https://www.google.com)

 \`inline code\`
 \`\`\`javascript
 import me from "me"
 \`\`\`
 > This line is part of the same quote
 ![alt text](https://picsum.photos/200/300 "Test")
 **bold**
 * test1
 * test2
 `);
  return (
    <>
      <main className="row">
        <div className="col">
          <h1>Markdown</h1>
          <textarea
            id="editor"
            onChange={(event) => {
              setInput(event.target.value);
            }}
            value={input}
          >
            # Welcome
          </textarea>
        </div>
        <div className="col">
          <h1>Preview</h1>
          <div
            id="preview"
            dangerouslySetInnerHTML={{
              __html: marked(input, { breaks: true }),
            }}
          ></div>
        </div>
      </main>
    </>
  );
}

export default App;
