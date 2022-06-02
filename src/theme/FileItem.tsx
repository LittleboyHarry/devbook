import React from 'react';
import st from './FileItem.module.scss';
import cs from 'clsx';
import useBaseUrl from '@docusaurus/useBaseUrl';
import { FileIcon } from './fai';

export default function FileItem({
  name,
  path,
  icon,
  hint,
  button,
}: {
  name: string;
  path: string;
  icon?: React.ReactNode;
  hint?: string;
  button?: boolean;
}) {
  const href = useBaseUrl(path);
  const isChromium = !!window['chrome'];
  const title = (hint ? hint + '，' : '') + isChromium?'点击或拖拽下载文件':'点击下载文件';

  return (
    <a
      download={name}
      href={href}
      className={cs(
        button ? st.button : st.card,
        button ? 'button button--lg button--outline button--secondary' : 'card'
      )}
      title={title}
      onDragStartCapture={(e) => {
        if (!(e.target instanceof HTMLAnchorElement)) return;
        const url = toAbsoluteUrl(e.target.getAttribute('href'));
        e.dataTransfer.setData(
          'DownloadURL',
          `:${getFileName(e.target, url)}:${url.href}`
        );
      }}
    >
      <span className={st.icon}>{icon ? icon : <FileIcon />}</span>
      <span className={st.name}>{name}</span>
    </a>
  );
}

// https://github.com/JosephusPaye/drag-to-download/blob/master/src/content-script.js

const toAbsoluteUrl = (function () {
  let anchor: HTMLAnchorElement;
  return function (url: string) {
    if (!anchor) {
      anchor = document.createElement('a');
    }
    anchor.href = url;
    return new URL(anchor.href);
  };
})();

const fileExtensionRegex = /\.[\w-]+$/;

function getFileName(el: HTMLAnchorElement, url: URL) {
  const download = el.getAttribute('download');
  if (download) {
    return download;
  }
  const text = el.textContent.trim().replace(/\:/g, '');
  if (text && fileExtensionRegex.test(text)) {
    return text;
  }
  const last = lastElement(url.pathname.split('/'));
  if (last && fileExtensionRegex.test(last)) {
    return decodeURI(last);
  }
  return decodeURI(last) || text;
  function lastElement<T>(array: T[]) {
    return array[array.length - 1];
  }
}
