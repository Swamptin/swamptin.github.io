import { useEffect, useRef, useState } from 'react';
import ReactMarkdown from 'react-markdown';
import 'style.css';

function App(){
  const [markdown, setMarkdown] = useState('');
  const [html, setHtml] = useState('');

  const handleChange = (e) => {
    setMarkdown(e.target.value);
  };

  useEffect(() => {
    const el = document.querySelector('.react-markdown-test');
    if (el){
      const mdHTML = el.innerHTML;
      setHtml(mdHTML);
    }
  }, [markdown]);

  return (
  <div className="App">
    <textarea 
      placeholder="Enter your Markdown text"
      className="textarea"
      input={markdown}
      onChange={(e) => handleChange(e)}
      />
      <ReactMarkdown children={markdown} className="react-markdown-test" />
      <div className="htmlbox">How can I export HTML here?</div>
      <pre>
        <code>{html}</code>
      </pre>
    </div>
  );
}

export default App;
