---
title: 选择合适的发行版
sidebar_position: 2
---

## 计算机专业

为程序开发、计算机研究推荐：

import { faFedora } from '@fortawesome/free-brands-svg-icons';

<div style={{display:'flex'}}>
 <a className={st.fedora}>
  <FontAwesomeIcon icon={faFedora} />
  <div>
   <strong>Fedora</strong>Linux 入学者
  </div>
 </a>
 <a className={st.arch}>
  <img src="/img/icons/arch-white.svg"/>
  <div>
   <strong>Arch Linux</strong>适用于工程师
  </div>
 </a>
</div>

<a className={st.debian}>
 <img src="/img/icons/debian-white.svg"/>
 <div>
  <strong>Debian</strong>WSL、中间件、服务器
 </div>
</a>

这些发行版相对稳定的、生态成熟、国内交流多的，适于学习使用。

注：

- Fedora 是 RedHat 牵头的社区操作系统试验田，
  是 CentOS stream 的上游源码、最终沉淀为 RHEL 系统
- 关于 [Debian 和 Ubuntu 的对比](https://www.toutiao.com/article/7003371708354658852/),
  简言之：前者是开放社区的产物，后者是免费开源的商业技术
- Debian 与 [Ubuntu LTS](https://www.toutiao.com/article/6872706707538051588/)
  交替迭代提供三到五年的稳定支持服务
- [自由软件之父对部分流行商业系统的批评](https://www.toutiao.com/article/7088881812613054983)

## 普通用户

国产开源桌面系统

<div style={{display:'flex',textAlign:'center'}}>
 <a className={st.deepin} href="https://www.deepin.org/zh/download/">
  <div>
   <strong>Deepin</strong>办公、聊天
  </div>
 </a>
 <a className={st.fydeos} href="https://fydeos.com/download">
  <div>
   <strong>FydeOS</strong>国营 ChromeOS
  </div>
 </a>
</div>

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import st from './distrocard.module.scss'
