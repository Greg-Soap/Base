'use client';
import React, { useState } from 'react';
import { Button } from './ui/button';

const CopyToClipboardButton: React.FC<{ textToCopy: any }> = ({
  textToCopy,
}) => {
  const [isCopied, setIsCopied] = useState(false);

  const handleCopyClick = () => {
    navigator.clipboard
      .writeText(textToCopy)
      .then(() => {
        setIsCopied(true);
        setTimeout(() => setIsCopied(false), 1500);
      })
      .catch((error) => console.error('Error copying to clipboard:', error));
  };

  return (
    <div className="relative">
      <Button
        className="text-primary"
        variant={'ghost'}
        onClick={handleCopyClick}
      >
        Copy
      </Button>
      {isCopied && (
        <span className="absolute -top-8 left-1/2 -translate-x-1/2 transform bg-black p-1 text-sm font-light text-white ">
          Copied
        </span>
      )}
    </div>
  );
};
export default CopyToClipboardButton;
