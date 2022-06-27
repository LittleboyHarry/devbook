import React, { createContext, useContext } from 'react';

const FirefoxContext = createContext(false);

export default function SearchEngines({
  firefox,
  chromium,
}: {
  firefox?: boolean;
  chromium?: boolean;
}) {
  const content = items.map((item, key) => <TableRow {...{ key, item }} />);

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
          {firefox ? (
            <FirefoxContext.Provider value>{content}</FirefoxContext.Provider>
          ) : (
            content
          )}
          {chromium &&
            chromiumItems.map((item, key) => <TableRow {...{ key, item }} />)}
        </tbody>
      </table>
    </div>
  );
}

interface Item {
  name: string;
  keyword: string;
  url: string;
}

const items: Item[] = [
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
];

const chromiumItems: Item[] = [
  {
    name: '必应',
    keyword: 'bing.com',
    url: 'https://www.bing.com/search?q=%s',
  },
  {
    name: '知乎',
    keyword: 'zhihu.com',
    url: 'https://www.zhihu.com/search?type=content&q=%s',
  },
];

function TableRow({ item }: { item: Item }) {
  const isFirefox = useContext(FirefoxContext);

  return (
    <tr>
      <td>{item.name}</td>
      <td>{item.keyword + (isFirefox ? '/' : '')}</td>
      <td>{item.url}</td>
    </tr>
  );
}
