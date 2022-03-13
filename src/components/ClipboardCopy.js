import styled from "styled-components";
import { useState } from "react";

const ClipboardCopy = ({ url }) => {
  const [isCopied, setIsCopied] = useState(false);

  async function copyTextToClipboard(text) {
    if ("clipboard" in navigator) {
      // 사용 브라우저가 Clipboard API를 지원하는 경우
      return await navigator.clipboard.writeText(text);
    } else {
      // 지원하지 않는 경우
      return document.execCommand("copy", true, text);
    }
  }

  const handleCopyClick = () => {
    copyTextToClipboard(url)
      .then(() => {
        setIsCopied(true);
        setTimeout(() => {
          setIsCopied(false);
        }, 1500);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      <URLCopybox>
        <input type="text" value={url} readOnly />
        <CopyButton onClick={handleCopyClick}>
          {isCopied ? "Copied!" : "Copy"}
        </CopyButton>
      </URLCopybox>
    </div>
  );
};

export default ClipboardCopy;

const URLCopybox = styled.div`
  position: relative;
  overflow: hidden;
  box-sizing: border-box;
  input {
    width: 100%;
    padding: 0 100px 0 0.625rem;
    height: 2.5rem;
    border: solid 1px #8465e1;
    border-radius: 4px;
    font-size: 0.875rem;
    text-overflow: ellipsis;
    box-sizing: border-box;

  }
`;

const CopyButton = styled.button`
  position: absolute;
  right: 0; 
  top: 0;
  background-color: #8465e1;
  border-radius: 0 4px 4px 0;
  color: #fff;
  width: 74px;
  height: 100%;
  font-size: 0.875rem;
  line-height: 2.5rem;
  &:hover {
    cursor: pointer;
  }
`;
