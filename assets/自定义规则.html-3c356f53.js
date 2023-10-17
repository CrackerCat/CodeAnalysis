import{_ as i,r as t,o as c,c as a,a as e,b as n,d as l,w as s,f as d}from"./app-d70e1696.js";const u={},p=e("h1",{id:"自定义规则",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#自定义规则","aria-hidden":"true"},"#"),n(" 自定义规则")],-1),_=e("p",null,"自定义规则即由业务团队根据自身需求，由业务团队自行设计提供的规则。",-1),h=e("h2",{id:"自定义规则权限说明",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#自定义规则权限说明","aria-hidden":"true"},"#"),n(" 自定义规则权限说明")],-1),g=e("p",null,[n("工具需开放"),e("strong",null,"支持自定义规则"),n("权限，才可添加自定义规则。")],-1),x=e("code",null,"RegexFileScan",-1),m=e("code",null,"RegexScan",-1),A=e("li",null,[e("p",null,[n("开放"),e("strong",null,"支持自定义规则"),n("权限，需平台管理员在"),e("strong",null,"管理入口"),n("-"),e("strong",null,"工具管理"),n("中找到对应工具，并将其权限状态调整为"),e("strong",null,"支持自定义规则"),n("。")])],-1),f=e("li",null,[e("p",null,"自定义规则仅支持团队管理员添加，且默认仅团队内可见。"),e("ul",null,[e("li",null,"满足不同团队自定义规则可能存在的差异和隐私性。")])],-1),E=e("li",null,[e("p",null,"如需将自定义规则加入工具默认规则，需联系工具提供方团队管理员添加。")],-1),R=e("h2",{id:"平台提供的正则工具-tca-armory-r-说明",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#平台提供的正则工具-tca-armory-r-说明","aria-hidden":"true"},"#"),n(" 平台提供的正则工具 TCA-Armory-R 说明")],-1),B=e("h2",{id:"平台提供的正则工具-regexscan-说明",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#平台提供的正则工具-regexscan-说明","aria-hidden":"true"},"#"),n(" 平台提供的正则工具 RegexScan 说明")],-1),b=e("p",null,[e("code",null,"正则工具 RegexScan"),n(" 即为开放了自定义规则功能的工具，可进入工具管理页面，搜索工具名称"),e("code",null,"RegexScan"),n("，查看该工具已存在的规则以及根据团队业务需求，添加自定义规则。")],-1),T=e("p",null,"适用场景：通过正则表达式，能够匹配到目标代码的情况。",-1),k=e("h3",{id:"自定义规则步骤",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#自定义规则步骤","aria-hidden":"true"},"#"),n(" 自定义规则步骤")],-1),y=e("p",null,[e("strong",null,"根据团队业务需求设计正则表达式")],-1),C={class:"custom-container tip"},S=e("p",{class:"custom-container-title"},"TIP",-1),v={href:"http://tool.oschina.net/regex",target:"_blank",rel:"noopener noreferrer"},F=e("p",null,"规则示例：",-1),L=e("ul",null,[e("li",null,[e("p",null,"规则分析场景"),e("p",null,"分析代码中的 usleep() 方法调用，如果参数小于 100 ，容易造成 CPU 使用率过高，造成性能浪费，判断为缺陷。")]),e("li",null,[e("p",null,"正则表达式"),e("p",null,[n("匹配 usleep() 字符串，括号中的内容为 1 位或 2 位整数，那么正则表达式可以写成 "),e("code",null,"\\busleep\\s*\\(\\s*\\d{1,2}\\s*\\)"),n("，这里考虑了字符串中存在空格的情况。")])])],-1),N=d("<li><p><strong>进入正则工具添加自定义规则</strong></p><p>进入工具管理页面，找到正则工具<code>RegexScan</code>，并点击进入自定义规则列表页，点击添加规则按钮。</p></li><li><p><strong>填写规则信息</strong></p><p><strong>规则参数填写说明（必要）：</strong></p><p>参数格式类似 ini 的格式， 也就是 key = value 的格式</p><ul><li><p><strong>【必要】</strong> regex 参数，用于指定分析的正则表达式， 例如: <code>regex = \\busleep\\s*\\(\\s*\\d{1,2}\\s*\\)</code>。</p></li><li><p><strong>【必要】</strong> msg 参数，用于展现 issue 说明， 例如： <code>msg = 函数方法%s 已经废弃，请使用 xxx 方法</code>。</p><p>msg 中的“%s”使用 regex 中的 group（用“()&quot;括起来的部分）一一匹配。</p><p>如果 regex 没有定义 group，则 msg 最多有一个%s, 并由整个 regex 匹配的字符串替代</p><p>如果 msg 里没有包含“%s”，则直接显示 msg</p><p>如果 msg 没有提供，则默认为“发现不规范代码：%s”（不建议使用默认格式，太笼统）</p></li><li><p><strong>【可选填】</strong> ignore_comment 参数，用于指定是否忽略注释代码，可选值：True、true、False、false 。例如 <code>ignore_comment=True</code>, 默认是 False</p></li><li><p><strong>【可选填】</strong> include 参数，用于将指定分析文件匹配范围，使用 unix 的文件匹配格式，多项使用英文分号;隔开。例如 <code>include = path/to/dir;path/to/\\*.cpp</code></p></li><li><p><strong>【可选填】</strong> exclude 参数，用于指定不分析的文件。格式参考 include 参数。</p></li></ul></li><li><p><strong>将自定义规则添加到项目分析方案中</strong></p><p>添加完成，可在分析方案-代码检查-规则配置中添加该自定义规则</p></li>",3);function V(I,w){const o=t("RouterLink"),r=t("ExternalLinkIcon");return c(),a("div",null,[p,_,h,e("ul",null,[e("li",null,[g,e("ul",null,[e("li",null,[e("p",null,[n("当前平台提供的工具中，仅"),l(o,{to:"/en/guide/%E4%BB%A3%E7%A0%81%E6%A3%80%E6%9F%A5/%E5%B7%A5%E5%85%B7/TCA-Armory-R.html"},{default:s(()=>[n("TCA-Armory-R")]),_:1}),n("、"),x,n("、"),m,n("三款工具支持使用用户自定义规则。")])]),A])]),f,E]),R,e("p",null,[n("详见"),l(o,{to:"/en/guide/%E4%BB%A3%E7%A0%81%E6%A3%80%E6%9F%A5/%E5%B7%A5%E5%85%B7/TCA-Armory-R.html"},{default:s(()=>[n("TCA-Armory-R使用手册")]),_:1}),n("。")]),B,b,T,k,e("ol",null,[e("li",null,[y,e("div",C,[S,e("p",null,[n("建议先测试好正则表达式是否正确，正则表达式测试网站推荐："),e("a",v,[n("http://tool.oschina.net/regex"),l(r)])]),F,L])]),N])])}const q=i(u,[["render",V],["__file","自定义规则.html.vue"]]);export{q as default};
