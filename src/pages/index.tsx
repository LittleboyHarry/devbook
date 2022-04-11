import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import useBaseUrl from '@docusaurus/useBaseUrl';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './index.module.scss';

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title">{siteConfig.title}</h1>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
      </div>
    </header>
  );
}

function Tile({
  href,
  imgSrc,
  title,
  description,
}: {
  href: string;
  imgSrc: string;
  title: string;
  description: string;
}) {
  const src = useBaseUrl('img/index/' + imgSrc);

  return (
    <li>
      <a href={href}>
        <img src={src} alt="" />
        <div>
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
        {/*
        <section className={styles.features}>
          <div className="container">
            <h2 style={{ textAlign: 'center', marginTop: '2rem' }}>
              本书采用 Fedora 作为 Linux 发行版
            </h2>
            <div className="row">
              {FeatureList.map((props, idx) => (
                <FeatureWithImg key={idx} {...props} />
              ))}
            </div>
          </div>
        </section>
        */}
        <section
          style={{
            display: 'flex',
            alignItems: 'center',
            padding: '2rem 0',
            width: '100%',
            background: '#fcfcfb',
          }}
        >
          <div className="container">
            <h2 style={{ textAlign: 'center' }}>涵盖的内容</h2>
            <ul className={styles.tileList}>
              <Tile
                title="Linux"
                description="为极客配置"
                href="docs/linux/overview"
                imgSrc="icon_linux.svg"
              />
              <Tile
                title="美化"
                description="GNOME"
                href="docs/linux/gnome/basic"
                imgSrc="icon_gnome.svg"
              />
              <Tile
                title="浏览器"
                description="提高工作效率"
                href="docs/browser/intro"
                imgSrc="icon_browser.svg"
              />
              <Tile
                title="开源软件"
                description="倾力推荐"
                href="docs/common/intro"
                imgSrc="icon_foss.svg"
              />
              <Tile
                title="开发"
                description="环境配置"
                href="docs/dev/intro"
                imgSrc="icon_dev.svg"
              />
              <Tile
                title="Windows"
                description="为开发适配"
                href="docs/win/index"
                imgSrc="icon_win.svg"
              />
            </ul>
          </div>
        </section>
        <section
          style={{
            padding: '2rem 0',
            width: '100%',
          }}
        >
          <div className="container">
            <h2 style={{ textAlign: 'center' }}>使用方法</h2>
            <div style={{ margin: '2rem auto', width: 'fit-content' }}>
              <h3>复制代码的技巧：</h3>
              <ul>
                <li>代码一键复制</li>
                <li>快速三次点击，选中本行</li>
                <li>Linux 中键会粘贴选中的文本</li>
              </ul>
              <strong>
                内容仅供读者参考，配置前请备份好重要数据。作者不承担任何风险与后果！
              </strong>
            </div>
          </div>
          <div style={{ height: '1rem' }} />
          <div className={styles.buttons}>
            <Link
              className="button button--secondary button--lg"
              to="docs/linux/overview"
            >
              开始 🚲
            </Link>
          </div>
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
        <a href="https://getfedora.org/zh_Hans_CN/workstation/download/">下载 ISO</a>
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
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <img className={styles.featureSvg} alt={title} src={imgSrc} />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}
