import React, { PropsWithChildren, ReactNode } from 'react';
import LogoCard from '@theme/LogoCard';
import useBaseUrl from '@docusaurus/useBaseUrl';

export const { Container } = LogoCard;

function LogoName({
  upLabel,
  lowLabel,
  narrowUp,
}: {
  upLabel: string;
  lowLabel: string;
  narrowUp?: boolean;
}) {
  return (
    <span style={{ lineHeight: 1.5 }}>
      <p style={{ fontSize: narrowUp ? 'medium' : 'large', margin: 0 }}>
        {upLabel}
      </p>
      <p style={{ fontSize: 'large', margin: 0 }}>{lowLabel}</p>
    </span>
  );
}

export const cards = {
  FedoraWorkstation(): ReactNode {
    return (
      <LogoCard
        name="Workstation"
        label="GNOME 桌面环境"
        to="https://getfedora.org/zh_Hans_CN/workstation/download/"
        logo={<img src={useBaseUrl('/img/icons/fedora.svg')} />}
      />
    );
  },
  FedoraKdePlasma(): ReactNode {
    return (
      <LogoCard
        name="KDE Plasma"
        to="https://spins.fedoraproject.org/kde/download/index.html"
        logo={<img src={useBaseUrl('/img/icons/fedora-original.svg')} />}
      />
    );
  },
  Ubuntu(): ReactNode {
    return (
      <LogoCard
        name="Ubuntu"
        to="https://cn.ubuntu.com/download/desktop"
        logo={<img src={useBaseUrl('/img/icons/ubuntu.svg')} />}
      />
    );
  },
  Kubuntu(): ReactNode {
    return (
      <LogoCard
        name="Kubuntu"
        label="KDE 版 Ubuntu"
        to="https://kubuntu.org/getkubuntu/"
        logo={
          <img src="https://kde.org/content/distributions/logos/kubuntu.svg" />
        }
      />
    );
  },
  Arch(): ReactNode {
    return (
      <LogoCard
        name="从镜像站获取"
        to="https://mirrorz.org/os/archlinux"
        logo={<img src={useBaseUrl('/img/icons/arch.svg')} />}
      />
    );
  },
};
