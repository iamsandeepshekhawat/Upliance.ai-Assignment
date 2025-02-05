import React, { useState, useEffect } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

const RichTextEditor = () => {
  const [editorContent, setEditorContent] = useState('');

  useEffect(() => {
    const savedContent = localStorage.getItem('editorContent');
    if (savedContent) {
      setEditorContent(savedContent);
    }
  }, []);

  const handleEditorChange = (content) => {
    setEditorContent(content);
    localStorage.setItem('editorContent', content);
  };

  return (
    <div className="max-w-xs bg-white p-6 rounded-lg shadow-md">
      <label htmlFor="description" className="block text-lg font-bold text-gray-800 mb-2">Description</label>
      <ReactQuill
        value={editorContent}
        className='border-2 border-black '
        onChange={handleEditorChange}
        placeholder="Enter your description"
        modules={{
          toolbar: [
            [{ 'header': '1'}, {'header': '2'}, { 'font': [] }],
            [{ 'list': 'ordered'}, { 'list': 'bullet' }],
            ['bold', 'italic', 'underline'],
            [{ 'align': [] }],
            ['clean']
          ]
        }}
      />
    </div>
  );
};

export default RichTextEditor;