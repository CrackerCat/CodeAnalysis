import{_ as r,a as p,b as d,c as i,d as s,e as t}from"./cppcheckCreateMisraRules_02-e7adb545.js";import{_ as h,r as n,o as l,c as k,a as c,b as e,d as m,f as o}from"./app-d70e1696.js";const _={},u=o('<h1 id="cppcheck与misra-使用手册" tabindex="-1"><a class="header-anchor" href="#cppcheck与misra-使用手册" aria-hidden="true">#</a> cppcheck与misra 使用手册</h1><h2 id="cppcheck-介绍" tabindex="-1"><a class="header-anchor" href="#cppcheck-介绍" aria-hidden="true">#</a> cppcheck 介绍</h2><blockquote><p>cppcheck是一个静态代码检测工具，用于对c/c++编写的代码进行严格的逻辑检查，从而让开发人员及时发现潜在问题</p></blockquote><h3 id="cppcheck检查类别" tabindex="-1"><a class="header-anchor" href="#cppcheck检查类别" aria-hidden="true">#</a> cppcheck检查类别:</h3><ul><li>自动变量检查</li><li>数组边界检查</li><li>class类检查</li><li>内存泄漏检查</li><li>内存的使用与释放检查</li><li>异常STL 函数使用检查</li><li>废弃,过期函数的调用检查</li><li>代码格式错误，以及性能因素检查</li><li>操作系统资源释放检查，中断，文件描述符等<br> ...</li></ul><h2 id="tca-cppcheck工具版本说明" tabindex="-1"><a class="header-anchor" href="#tca-cppcheck工具版本说明" aria-hidden="true">#</a> TCA cppcheck工具版本说明</h2><p><strong>目前TCA支持两个版本的cppcheck工具:</strong></p><ul><li><code>cppcheck</code>工具 对应 <code>1.78</code>版本</li><li><code>cppcheck2.6</code>工具 对应 <code>2.6</code>版本</li></ul><p><strong>两个版本的工具所支持的规则数量如下:</strong></p><ul><li><code>cppcheck</code> 目前包含 <code>257</code> 条检查规则</li><li><code>cppcheck2.6</code> 目前包含 <code>466</code> 条检查规则(其中包含misra检查规则<code>157</code>条)</li></ul><h2 id="tca-cppcheck2-6工具新增特性" tabindex="-1"><a class="header-anchor" href="#tca-cppcheck2-6工具新增特性" aria-hidden="true">#</a> TCA cppcheck2.6工具新增特性</h2><p><strong>相比老版本<code>cppcheck</code>工具的变化:</strong></p><p><strong>1，新增了一批检查规则，比如：</strong></p>',13),g=c("li",null,[c("code",null,"missingReturn"),e(": 函数缺少return检查")],-1),E=c("li",null,[c("code",null,"incompatibleFileOpen"),e(": 文件在不同流中被同时进行读写访问")],-1),b=c("li",null,"...",-1),f={href:"https://github.com/danmar/cppcheck/releases",target:"_blank",rel:"noopener noreferrer"},A=o('<p><strong>2，支持了misra-c2012检查规则(适用于嵌入式项目的代码检查):</strong></p><blockquote><p>Q: <code>misra</code>是什么?<br> A: <code>misra</code> 是由汽车产业软件可靠性协会提出的 <code>C/C++</code> 语言开发标准，目的是为了增进嵌入式系统的安全性，最早期的<code>misra-c1998</code>只针对汽车制造业的嵌入式开发,到现在的<code>misra-c2012</code>已经扩大覆盖范围到嵌入式开发领域中</p></blockquote><p>目前<code>misra-c2012</code>的所有检查规则都已经集成到<code>cppcheck2.6</code>工具中</p><h2 id="快速接入使用" tabindex="-1"><a class="header-anchor" href="#快速接入使用" aria-hidden="true">#</a> 快速接入使用</h2><h3 id="_1-使用系统推荐的c-c-规则包体验cppcheck工具的检查规则" tabindex="-1"><a class="header-anchor" href="#_1-使用系统推荐的c-c-规则包体验cppcheck工具的检查规则" aria-hidden="true">#</a> (1)使用系统推荐的C/C++规则包体验cppcheck工具的检查规则:</h3><p><strong>step1:</strong> 登记好代码仓库之后, 在【分析项目】页面中会自动提示开启第一次代码分析, 选择分析语言为 <code>C/C++</code>, 勾选<code>代码检查</code>功能, 如下图所示： <img src="'+r+'" alt="include"></p><p><strong>step2:</strong> 创建完成后可以在分析方案的【规则配置】中看到<code>【C/C++】基础规则包</code>自动开启，其中包含了部分系统推荐的cppcheck的检查规则, 如下图所示: <img src="'+p+'" alt="include"></p><p><strong>step3:</strong> 选择刚刚创建的分析项目，直接启动分析即可</p><h3 id="_2-使用自定义规则包配置自己所需的cppcheck检查规则" tabindex="-1"><a class="header-anchor" href="#_2-使用自定义规则包配置自己所需的cppcheck检查规则" aria-hidden="true">#</a> (2)使用自定义规则包配置自己所需的cppcheck检查规则：</h3><p><strong>step1:</strong> 创建【分析方案】，然后在 【规则配置】tab下，可以看到【自定义规则包】，点击<code>查看详细规则</code>, 如下图所示: <img src="'+d+'" alt="include"></p><p><strong>step2:</strong> 在页面右上角点击 <code>添加规则</code>按钮，跳转到添加规则页面，所属工具选择<code>cppcheck</code> 或者 <code>cppcheck2.6</code>，按需添加列表中所需的规则即可, 如下图所示: <img src="'+i+'" alt="include"></p><p><strong>step3:</strong> 最后创建【分析项目】，直接选用此分析方案启动分析即可</p><h3 id="_3-使用misra检查规则" tabindex="-1"><a class="header-anchor" href="#_3-使用misra检查规则" aria-hidden="true">#</a> (3)使用misra检查规则:</h3><p><code>misra-c2012</code>规则目前包含在 <code>cppcheck2.6</code> 工具中，可在工具的规则列表中搜索 <code>misra</code> 关键字，查看到所有的misra检查规则，如下图所示: <img src="'+s+'" alt="include"></p><p><strong>使用方案一:</strong> 按照上述使用<a href="#2%E4%BD%BF%E7%94%A8%E8%87%AA%E5%AE%9A%E4%B9%89%E8%A7%84%E5%88%99%E5%8C%85%E9%85%8D%E7%BD%AE%E8%87%AA%E5%B7%B1%E6%89%80%E9%9C%80%E7%9A%84cppcheck%E6%A3%80%E6%9F%A5%E8%A7%84%E5%88%99"><code>自定义规则</code>的方式</a>添加所需的misra检查规则即可,此处不再赘述</p><p><strong>使用方案二:</strong> 使用系统推荐的misra规则包，里面包含了<code>misra-c2012</code>强制要求的所有规则，可以直接在 【分析方案】-&gt; 【规则配置】中开启即可, 如下图所示: <img src="'+t+'" alt="include"></p>',16);function x(C,B){const a=n("ExternalLinkIcon");return l(),k("div",null,[u,c("ul",null,[g,E,b,c("li",null,[e("more: 更多新增的规则特性可以访问cppcheck项目的"),c("a",f,[e("release页面"),m(a)]),e("了解")])]),A])}const N=h(_,[["render",x],["__file","cppcheck.html.vue"]]);export{N as default};
