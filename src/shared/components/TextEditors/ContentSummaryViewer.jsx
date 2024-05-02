import QuillTextEditor from 'quill-react-commercial'
import 'quill-react-commercial/lib/index.css'
import 'highlight.js/styles/stackoverflow-light.min.css'
import './general-text-editor.css'
import './ContentSummaryViewer.css'

const ContentSummaryViewer = ({ body = '' }) => {
  const firstNonEmptyTag = body.match(/<(p|blockquote|ol|ul|pre|h[1-6])>(.*?)<\/\1>(?!<br \/>)/s)?.[0]
  const plainTextIntroduction = body.slice(0, 300)
  const initialContent = firstNonEmptyTag || plainTextIntroduction

  return (
    <div className='ql-viewer ql-summary-viewer-container'>
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
        content={initialContent}
      />
    </div>
  )
}

export default ContentSummaryViewer
