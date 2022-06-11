// 主页
user_pref('browser.urlbar.suggest.searches', false);
user_pref('browser.newtabpage.activity-stream.showSearch', false);
user_pref('browser.newtabpage.activity-stream.showSponsoredTopSites', false);
user_pref('browser.newtabpage.activity-stream.topSitesRows', 2);
user_pref('browser.newtabpage.activity-stream.section.highlights.rows', 3);
user_pref('browser.newtabpage.activity-stream.feeds.section.highlights', true);
user_pref('browser.newtabpage.activity-stream.feeds.snippets', true);

// HTTPS Only
user_pref('dom.security.https_only_mode', true);
user_pref('dom.security.https_only_mode_ever_enabled', true);

// 行为
user_pref('ui.key.menuAccessKeyFocuses', false);
user_pref('browser.aboutConfig.showWarning', false);
user_pref('media.autoplay.default', 5); // 阻止自动播放
user_pref('findbar.highlightAll', true);

// 地址栏
user_pref('browser.urlbar.suggest.searches', false);

// ECH 技术：https://www.cnbeta.com/articles/tech/1075619.htm
user_pref('network.dns.echconfig.enabled', true);
user_pref('network.dns.http3_echconfig.enabled', true);

// 禁用
user_pref('extensions.pocket.enabled', false);
