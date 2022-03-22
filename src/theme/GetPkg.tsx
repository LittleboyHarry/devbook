import React from 'react';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import CodeBlock from '@theme/CodeBlock';

export default function GetPkg({
  name,
  dnf,
  apt,
  scoop,
  winget,
}: {
  name?: string;
  dnf?: true | string;
  apt?: true | string;
  scoop?: true | string;
  winget?: true | string;
}) {
  const tabs = [];
  if (dnf)
    tabs.push(
      <TabItem key="dnf" value="dnf" label="rpm (Linux)">
        <CodeBlock className="language-shell">
          {`sudo dnf install -y ${dnf === true ? name : dnf}`}
        </CodeBlock>
      </TabItem>
    );
  if (apt)
    tabs.push(
      <TabItem key="apt" value="apt" label="deb (Linux)">
        <CodeBlock className="language-shell">
          {`sudo apt install -y ${apt === true ? name : apt}`}
        </CodeBlock>
      </TabItem>
    );
  if (scoop)
    tabs.push(
      <TabItem key="scoop" value="scoop" label="scoop (Windows)">
        <CodeBlock className="language-batch">
          {`scoop install ${scoop === true ? name : scoop}`}
        </CodeBlock>
      </TabItem>
    );
  if (winget)
    tabs.push(
      <TabItem key="winget" value="winget" label="winget (Windows)">
        <CodeBlock className="language-batch">
          {`winget install ${winget === true ? name : winget}`}
        </CodeBlock>
      </TabItem>
    );
  return <Tabs groupId="package-manager">{tabs}</Tabs>;
}
