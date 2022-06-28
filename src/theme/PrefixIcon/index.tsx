import React, { createContext, ReactNode, useContext } from 'react';
import st from './index.module.scss';
import ShellIcon from './icons/ShellIcon';
import UacIcon from './icons/UacIcon';
import RegistryIcon from './icons/RegistryIcon';
import PwshIcon from './icons/PwshIcon';
import Popper from './Popper';
import { useLocation } from '@docusaurus/router';

const ForWinContext = createContext(false);

export default function PrefixIcon({
  children,
  cmd,
  win,
  admin,
  pwsh,
  reg,
}: {
  children: ReactNode;
  cmd?: boolean;
  win?: boolean;
  admin?: boolean;
  pwsh?: boolean;
  reg?: boolean;
}) {
  const isShellCode = cmd || pwsh;

  const { pathname } = useLocation();
  const isWindows: boolean = win || pathname.startsWith('/docs/setup-mswin');

  const icons: ReactNode = (() => {
    const VariantShellIcon = (() => {
      if (pwsh) return PwshIcon;
      return ShellIcon;
    })();
    if (admin) {
      if (isShellCode) {
        return (
          <WithOtherIcons
            children={
              <Popper
                warning
                hover={
                  <>
                    <p>
                      <strong>执行该命令需要管理员权限</strong>
                    </p>
                    {pwsh && <p>这是 PowerShell 指令代码</p>}
                    <HowToCopyScript />
                    <br />
                    {isWindows && <SingleLineWindowsCommand admin />}
                  </>
                }
                children={<UacIcon slot={<VariantShellIcon />} />}
              />
            }
          />
        );
      } else {
        return (
          <WithOtherIcons
            children={
              <Popper
                warning
                hover="该操作需要管理员权限"
                children={<UacIcon />}
              />
            }
          />
        );
      }
    } else if (isShellCode) {
      return (
        <WithOtherIcons
          children={
            <Popper
              hover={
                <>
                  {pwsh && (
                    <p>
                      <strong>这是 PowerShell 指令代码</strong>
                    </p>
                  )}
                  <HowToCopyScript />
                  {isWindows && !pwsh && <SingleLineWindowsCommand />}
                </>
              }
              children={<VariantShellIcon />}
            />
          }
        />
      );
    } else if (reg) {
      return (
        <WithOtherIcons
          children={
            <Popper
              hover={
                <p>
                  在桌面上右键新建文本文件，改后缀名为 .reg
                  <br />
                  用记事本打开编辑。粘贴代码后保存执行
                </p>
              }
              children={<RegistryIcon />}
            />
          }
        />
      );
    } else {
      return <WithOtherIcons />;
    }

    function WithOtherIcons({
      children,
    }: {
      children?: JSX.Element;
    }): JSX.Element {
      return children || null;
    }
  })();

  return (
    <ForWinContext.Provider value={isWindows}>
      <div className={st.root}>
        <span className={st.icons}>{icons}</span>
        <div className={st.content}>{children}</div>
      </div>
    </ForWinContext.Provider>
  );
}

export function HowToCopyScript() {
  const isWindows = useContext(ForWinContext);
  const pasteMethodLabel = isWindows
    ? '在 Windows 终端内按右键'
    : 'Linux 按中键';

  return (
    <>
      <p>复制代码到终端：</p>
      <ul>
        <li>点击代码区右上角按钮一键复制</li>
        <li>快速三次点击，选中本行复制</li>
      </ul>
      <p>{pasteMethodLabel}可粘贴选中的文本</p>
    </>
  );
}

function SingleLineWindowsCommand({ admin }: { admin?: boolean }) {
  return (
    <>
      <p>要执行单行指令：</p>
      <p>
        <code>Win + R</code> 打开运行对话框，粘贴命令后按下
        {admin ? (
          <>
            <br />
            <code>Ctrl + Shift + Enter</code> 提权运行
          </>
        ) : (
          '回车键执行'
        )}
      </p>
    </>
  );
}
