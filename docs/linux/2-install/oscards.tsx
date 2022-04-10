import React, { PropsWithChildren, ReactNode } from 'react';
import LogoCard from '@theme/LogoCard';

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
        logo={
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fedora/fedora-plain.svg" />
        }
      />
    );
  },
  FedoraKdePlasma(): ReactNode {
    return (
      <LogoCard
        name="KDE Plasma"
        to="https://spins.fedoraproject.org/kde/download/index.html"
        logo={
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fedora/fedora-original.svg" />
        }
      />
    );
  },
  Ubuntu(): ReactNode {
    return (
      <LogoCard
        name="Ubuntu"
        to="https://cn.ubuntu.com/download/desktop"
        logo={
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/ubuntu/ubuntu-plain.svg" />
        }
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
};
