import React, { ReactNode } from 'react';
import cs from 'clsx';
import Layout from '@theme/Layout';
import useBaseUrl from '@docusaurus/useBaseUrl';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import st from './index.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faDownload,
  faHammer,
  faPalette,
  faScrewdriverWrench,
  faTerminal,
} from '@fortawesome/free-solid-svg-icons';
import { faLinux } from '@fortawesome/free-brands-svg-icons';

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={cs('hero hero--primary', st.heroBanner)}>
      <div className="container">
        <h1 className="hero__title">{siteConfig.title}</h1>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
      </div>
    </header>
  );
}

function HomepageImage({ filename }: { filename: string }) {
  const src = useBaseUrl('img/index/' + filename);

  return <img src={src} alt={filename} />;
}

function Tile({
  title,
  href,
  img,
  description,
}: {
  title: string;
  img: ReactNode;
  href?: string;
  description?: string;
}) {
  return (
    <li className={cs(st.tileItem, href && st.hoverable)}>
      <a href={href}>
        {img}
        <div className={st.tileLabel}>
          <b dir="auto">
            <span>{title}</span>
          </b>
          <small>{description}</small>
        </div>
      </a>
    </li>
  );
}

export default function Home(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout description={siteConfig.tagline}>
      <HomepageHeader />
      <main>
        <section className={st.session1}>
          <div className={cs('container', st.container)}>
            {/*
            <h2>
              自动部署工具 &nbsp;
              <FontAwesomeIcon
                style={{ transform: 'scale(0.99)' }}
                icon={faPersonWalkingLuggage}
              />
            </h2>
            <ul className={st.autotools}>
              <li>
                <a title="deploydotfile" href="docs/devenv/deploydotfile">
                  Deploy Dotfile
                </a>
              </li>
              <li>
                <a title="deployworkenv" href="docs/devenv/deployworkenv">
                  Deploy Work Env
                </a>
              </li>
            </ul>
            */}
            <h2>涵盖的内容</h2>
            <ul className={st.tileList}>
              <Tile
                title="Windows"
                description="安装指南"
                href="docs/setup-mswin/catalog"
                img={
                  <img src={useBaseUrl('/img/icons/windows8-original.svg')} />
                }
              />
              <Tile
                title="WSL"
                description="开发环境"
                href="docs/setup-mswin/dev/wsl"
                img={<FontAwesomeIcon icon={faLinux} />}
              />
              <Tile
                title="选择发行版"
                description="推荐的 Linux"
                href="docs/setup-linux/distros"
                img={<FontAwesomeIcon icon={faDownload} />}
              />
              <Tile
                title="Linux"
                description="为极客配置"
                href="docs/setup-linux/require"
                img={<HomepageImage filename="icon_linux.svg" />}
              />
              <Tile
                title="开发环境"
                description="配置"
                href="docs/devenv/catalog"
                img={<img src={useBaseUrl('/img/icons/git.svg')} />}
              />
              <Tile
                title="实用软件"
                description="开源、免费"
                href="docs/goodsoft/catalog"
                img={<FontAwesomeIcon icon={faHammer} />}
              />
              <Tile
                title="浏览器"
                description="查资料"
                href="docs/goodsoft/firefox/config"
                img={<HomepageImage filename="../icons/firefox.svg" />}
              />
              <Tile
                title="桌面美化"
                description="GNOME , KDE , Win"
                img={<FontAwesomeIcon icon={faPalette} />}
              />
              <Tile
                title="摩登命令行"
                description="new unix cli"
                href="docs/devenv/modern-cli"
                img={<FontAwesomeIcon icon={faScrewdriverWrench} />}
              />
              <Tile
                title="Oh My Zsh"
                description="一键安装"
                href="docs/devenv/ohmyzsh"
                img={
                  <FontAwesomeIcon icon={faTerminal} style={{ width: '75%' }} />
                }
              />
            </ul>
          </div>
        </section>
        <section className={st.session2}>
          <div className={cs('container', st.container)}>
            <h2>使用方法</h2>
            <div style={{ margin: '2rem auto', width: 'fit-content' }}>
              <div style={{ margin: '2rem auto', width: 'fit-content' }}>
                <h3 style={{ fontWeight: 'normal' }}>复制代码的方法：</h3>
                <ul>
                  <li>代码一键复制</li>
                  <li>快速三次点击，选中本行</li>
                  <li>Linux 中键会粘贴选中的文本</li>
                </ul>
              </div>
              <strong>
                内容仅供读者参考，配置前请备份好重要数据。作者不承担任何风险与后果！
              </strong>
            </div>
          </div>
          <div style={{ height: '1rem' }} />
          {/*
          <div className={st.buttons}>
            <Link
              className="button button--secondary button--lg"
              to="docs/setup-linux/require"
            >
              开始&nbsp;🚀
            </Link>
          </div>
          */}
        </section>
      </main>
    </Layout>
  );
}

type FeatureItem = {
  title: string;
  image: string;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: '开箱即用',
    image: '/img/index/undraw_order_delivered_re_v4ab.svg',
    description: (
      <>
        使用简易的图形化安装器和少量配置快速部署，
        <br />
        <a href="https://getfedora.org/zh_Hans_CN/workstation/download/">
          下载 ISO
        </a>
        后配置时区、分区和密码即可完成安装
      </>
    ),
  },
  {
    title: '投入生产',
    image: '/img/index/undraw_qa_engineers_dg-5-p.svg',
    description: (
      <>
        RedHat - CentOS 系统同构
        <br />
        拥有成熟稳健的开源商业产品
      </>
    ),
  },
  {
    title: '强大的社区支持',
    image: '/img/index/undraw_community_re_cyrm.svg',
    description: <>集多数红帽工程师支持的开放技术社区</>,
  },
];

function FeatureWithImg({ title, image, description }: FeatureItem) {
  const imgSrc = useBaseUrl(image);

  return (
    <div className={cs('col col--4')}>
      <div className="text--center">
        <img className={st.featureSvg} alt={title} src={imgSrc} />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}
