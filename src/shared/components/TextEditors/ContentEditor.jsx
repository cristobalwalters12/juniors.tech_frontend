import { useEffect, useRef } from 'react'
import QuillTextEditor from 'quill-react-commercial'
import { uploadPostImage } from '../../../services/cloudStorage'
import 'quill-react-commercial/lib/index.css'
import 'highlight.js/styles/stackoverflow-light.min.css'
import './general-text-editor.css'
import './ContentEditor.css'

const ContentEditor = ({ onChange, onBlur, initialValue, className }) => {
  const quill = useRef({})

  const getQuill = (quillIns) => {
    quill.current = quillIns
  }

  const handleChange = (delta, old, source) => {
    const text = quill.current.getText()
    const body = quill.current.getSemanticHTML()
    onChange({ body, text })
  }

  useEffect(() => {
    const text = quill.current.getText()
    const body = quill.current.getSemanticHTML()
    onChange({ body, text })
  }, [onChange])

  useEffect(() => {
    if (quill.current) {
      quill.current.root.setAttribute('spellcheck', 'false')
    }
  }, [])

  return (
    <div className={`ql-content-editor-container ${className || ''}`}>
      <QuillTextEditor
        modules={{
          codeHighlight: true,
          table: false,
          imageResize: true,
          imageDrop: true,
          magicUrl: true,
          markdown: true,
          link: true,
          imageHandler: {
            imgUploadApi: async (formData) => await uploadPostImage(formData.get('file')),
            uploadFailCB: (error) => { console.log(error) },
            maxSize: 5,
            imageAccept: 'image/png, image/gif, image/jpeg, image/jpg, image/svg+xml'
          },
          toolbarOptions: [
            ['bold', 'italic', 'strike'],
            [{ list: 'ordered' }, { list: 'bullet' }, 'blockquote'],
            ['code-block', 'link', 'image'],
            ['undo', 'redo', 'clean']
          ]
        }}
        placeholder="Contenido (soporta markdown)"
        getQuill={getQuill}
        onChange={handleChange}
        onBlur={onBlur}
        content={initialValue || ' '}
      />
    </div>
  )
}

export default ContentEditor
