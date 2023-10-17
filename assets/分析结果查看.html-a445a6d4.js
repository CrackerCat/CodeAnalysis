import{_ as e,a as o,b as t}from"./codelint_03-8fa68424.js";import{_ as a,o as r,c as s,f as c}from"./app-d70e1696.js";const i="/CodeAnalysis/assets/codelint_04-0c416697.png",d={},p=c('<h1 id="代码检查结果查看" tabindex="-1"><a class="header-anchor" href="#代码检查结果查看" aria-hidden="true">#</a> 代码检查结果查看</h1><p>代码分析完毕后，可在<code>分支概览</code>页面查看分析结果概览。如果分析方案含有代码检查功能，则会上报代码检查结果信息到腾讯云代码分析平台，用户可在平台上查看问题列表及问题详情。 <img src="'+i+'" alt="问题列表"></p><h2 id="问题列表" tabindex="-1"><a class="header-anchor" href="#问题列表" aria-hidden="true">#</a> 问题列表</h2><p><img src="'+e+'" alt="问题列表"></p><p>进入代码检查问题列表页面后，默认展示当前分析项目发现的全部未处理问题。</p><p>如果仅希望查看增量问题，可以进入<code>分析历史</code>页面，指定查看某一次的扫描结果即可。也可以在过滤筛选项中填入发现问题的扫描 <code>id</code>进行筛选查看结果（该<code>id</code>为扫描任务 ID，需要到扫描任务列表中查询）。</p><ul><li><p><strong>责任人说明</strong></p><p>责任人为 <code>git blame</code>操作得到的代码提交人。</p></li><li><p><strong>问题级别说明</strong></p><p>代码检查的问题级别是根据对应分析方案中规则设置的严重级别定义的，从高到低分为 <strong><code>致命、错误、警告、提示</code></strong> 。如果调整问题级别，则需要进入分析方案中调整这个规则的严重级别，调整后需要进行全量扫描使得调整生效。</p></li><li><p><strong>批量处理说明</strong></p><p>问题列表支持批量修改问题状态。</p><p><img src="'+o+'" alt="批量处理"></p></li></ul><h2 id="问题详情" tabindex="-1"><a class="header-anchor" href="#问题详情" aria-hidden="true">#</a> 问题详情</h2><p>点击规则信息可以查看规则说明。</p><p><img src="'+t+'" alt="查看规则详情"></p>',10),n=[p];function _(l,h){return r(),s("div",null,n)}const f=a(d,[["render",_],["__file","分析结果查看.html.vue"]]);export{f as default};
