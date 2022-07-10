import React, { createContext, ReactNode, useContext } from 'react';
import st from './index.module.scss';
import {
  PwshIcon,
  ShellIcon,
  UacIcon,
  RegistryIcon,
  UserOnlyIcon,
  RestartExplorerIcon,
} from './icons';
import Popper from './Popper';
import { useLocation } from '@docusaurus/router';

const ForWinContext = createContext(false);

export default function CodeType({
  children,
  cmd,
  win,
  admin,
  user,
  pwsh,
  reg,
  restart,
}: {
  children: ReactNode;
  cmd?: boolean;
  win?: boolean;
  admin?: boolean;
  user?: boolean;
  pwsh?: boolean;
  reg?: boolean;
  restart?: 'explorer';
}) {
  const isShellCode = cmd || pwsh;

  const { pathname } = useLocation();
  const isWindows: boolean = win || pathname.startsWith('/docs/setup-mswin');

  const commandIconMixture: ReactNode = (() => {
    const VariantShellIcon = (() => {
      if (pwsh) return PwshIcon;
      return ShellIcon;
    })();
    if (admin) {
      if (isShellCode) {
        return (
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
        );
      } else if (reg) {
        return (
          <Popper
            hover={
              <>
                <p>
                  <strong>需要管理员权限</strong>
                </p>
                <HowToUseRegFile />
              </>
            }
            children={<UacIcon slot={<RegistryIcon />} smaller />}
          />
        );
      } else {
        return (
          <Popper warning hover="该操作需要管理员权限" children={<UacIcon />} />
        );
      }
    } else if (isShellCode) {
      return (
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
      );
    } else if (reg) {
      return (
        <Popper
          hover={
            <>
              <HowToUseRegFile />
              <p>也可以使用 `reg import *.reg` 指令无提权导入</p>
            </>
          }
          children={<RegistryIcon />}
        />
      );
    }
  })();

  return (
    <ForWinContext.Provider value={isWindows}>
      <div className={st.root}>
        <span className={st.icons}>
          {commandIconMixture}
          {user && (
            <Popper hover="仅作用于当前登录用户" children={<UserOnlyIcon />} />
          )}
          {restart === 'explorer' && (
            <Popper
              warning
              hover={
                <>
                  <p>
                    <strong>重启文件资源管理器生效</strong>
                  </p>
                  <p>
                    等效命令：
                    <code style={{ padding: '0.5rem 1rem' }}>
                      powershell kill -n explorer
                    </code>
                  </p>
                </>
              }
              children={<RestartExplorerIcon />}
            />
          )}
        </span>
        <div className={st.content}>{children}</div>
      </div>
    </ForWinContext.Provider>
  );
}

function HowToCopyScript() {
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

function HowToUseRegFile() {
  return <p>打开记事本，右键粘贴并保存为 any.reg。双击文件执行</p>;
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
