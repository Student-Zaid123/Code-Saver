import React from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Calendar, Copy } from 'lucide-react';
import toast from 'react-hot-toast';
import FormatDate from '../utlis/FormatDate';

const ViewPaste = () => {
  const { id } = useParams();
  const pastes = useSelector((state) => state.paste.pastes);
  const paste = pastes.find((p) => p._id === id);

  if (!paste) return <div className="text-center text-red-500">Paste not found</div>;

  const handleCopy = () => {
    navigator.clipboard.writeText(paste.content);
    toast.success('Copied to Clipboard');
  };

  return (
    <div className="p-6 max-w-[1200px] mx-auto">
      <h1 className="text-3xl font-bold mb-4">{paste.title || 'Untitled'}</h1>
      <p className="text-lg mb-4">{paste.content}</p>
      <div className="flex gap-2">
        <button
          onClick={handleCopy}
          className="p-2 rounded bg-white border border-gray-300 hover:bg-gray-100"
        >
          <Copy size={20} />
        </button>
        <div className="flex items-center gap-2">
          <Calendar size={20} />
          <span>{FormatDate(paste.createdAt)}</span>
        </div>
      </div>
    </div>
  );
};

export default ViewPaste;