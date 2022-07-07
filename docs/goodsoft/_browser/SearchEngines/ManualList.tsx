import React, { createContext, useContext } from 'react';
import AutoAddTo from './search-engines.md';

const manualItems: ManualItem[] = [
  {
    name: 'BiliBili',
    keyword: 'bilibili.com',
    url: 'https://search.bilibili.com/all?keyword=%s',
  },
  {
    name: '京东',
    keyword: 'jd.com',
    url: 'https://search.jd.com/Search?enc=utf-8&keyword=%s',
  },
  {
    name: '必应',
    keyword: 'bing.com',
    url: 'https://www.bing.com/search?q=%s',
    chromiumOnly: true,
  },
  {
    name: '知乎',
    keyword: 'zhihu.com',
    url: 'https://www.zhihu.com/search?type=content&q=%s',
    chromiumOnly: true,
  },
];

interface ManualItem {
  name: string;
  keyword: string;
  url: string;
  chromiumOnly?: true;
}

const FirefoxContext = createContext(false);
const ChromiumContext = createContext(false);

export default function ManualList({
  firefox,
  chromium,
}: {
  firefox?: boolean;
  chromium?: boolean;
}) {
  return (
    <div>
      <table className="autoselect-cell-of-table">
        <thead>
          <tr>
            <th>搜索引擎</th>
            <th>关键字</th>
            <th>查询网址</th>
          </tr>
        </thead>
        <tbody>
          {firefox && (
            <FirefoxContext.Provider value>
              <ManualItems />
            </FirefoxContext.Provider>
          )}
          {chromium && (
            <ChromiumContext.Provider value>
              <ManualItems />
            </ChromiumContext.Provider>
          )}
        </tbody>
      </table>
    </div>
  );
}

function ManualItems() {
  const isChromium = useContext(ChromiumContext);

  return (
    <>
      {manualItems.map((item, key) => {
        const { chromiumOnly } = item;
        if (chromiumOnly && !isChromium) return;
        return <TableRow {...{ key, item }} />;
      })}
    </>
  );

  function TableRow({ item }: { item: ManualItem }) {
    const isFirefox = useContext(FirefoxContext);

    return (
      <tr>
        <td>{item.name}</td>
        <td>{item.keyword + (isFirefox ? '/' : '')}</td>
        <td>{item.url}</td>
      </tr>
    );
  }
}
