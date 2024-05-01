import QuillTextEditor from 'quill-react-commercial'
import 'quill-react-commercial/lib/index.css'
import 'highlight.js/styles/stackoverflow-light.min.css'
import './general-text-editor.css'
import './ContentViewer.css'

const ContentViewer = ({ body = '' }) => {
  return (
    <div className='ql-viewer post-content-viewer-container'>
      <QuillTextEditor
        modules={{
          codeHighlight: true,
          table: false,
          imageResize: false,
          imageDrop: false,
          magicUrl: true,
          markdown: true,
          link: true,
          toolbarOptions: []
        }}
        readOnly={true}
        content={body}
      />
    </div>
  )
}

export default ContentViewer
