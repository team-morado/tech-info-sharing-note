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
  border: solid 1px #8465e1;
  border-radius: 4px;
  height: 40px;
  overflow: hidden;
  input {
    height: 100%;
    padding: 11px;
    width: calc(100% - 100px);
    display: inline-block;
    text-overflow: ellipsis;

  }
`;

const CopyButton = styled.button`
  float: right;
  background-color: #8465e1;
  color: #fff;
  width: 74px;
  height: 100%;
  &:hover {
    cursor: pointer;
  }
`;
