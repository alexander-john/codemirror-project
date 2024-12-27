import { EditorView, basicSetup } from "codemirror";
import { javascript } from "@codemirror/lang-javascript";

// Create a CodeMirror editor instance
let editor = new EditorView({
  extensions: [
    basicSetup,
    javascript(),
    // Listen for updates in the editor state
    EditorView.updateListener.of((update) => {
      if (update.docChanged) {
        const code = update.state.doc.toString();
        console.log(code); // Log the code whenever it changes
      }
    })
  ],
  parent: document.body
});
