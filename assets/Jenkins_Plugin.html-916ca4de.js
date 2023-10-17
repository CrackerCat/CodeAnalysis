import{_ as i,a as t,b as r,c as d,d as c,e as o,f as h,g as l,h as p,i as u,j as _,k as m,l as g}from"./jenkins_shell-131e349c.js";import{_ as b,r as k,o as x,c as f,a,b as e,d as v,f as s}from"./app-d70e1696.js";const A={},T=s('<h1 id="jenkins插件使用说明" tabindex="-1"><a class="header-anchor" href="#jenkins插件使用说明" aria-hidden="true">#</a> Jenkins插件使用说明</h1><div class="custom-container tip"><p class="custom-container-title">提示</p><p>以下说明以 Jenkins 2.361.2 版本为例。</p></div><h2 id="使用前准备" tabindex="-1"><a class="header-anchor" href="#使用前准备" aria-hidden="true">#</a> 使用前准备</h2><h3 id="获取jenkins插件" tabindex="-1"><a class="header-anchor" href="#获取jenkins插件" aria-hidden="true">#</a> 获取Jenkins插件</h3><p>Jenkins插件有以下两种获取方式：</p><p><strong>方式一</strong>：在 TCA 源码的<code>plugin/jenkins_plugin</code>目录下，执行命令<code>mvm package -DskipTests</code>，打包完成后进入target目录会看到<code>Jenkins_plugin.hpi</code> 的安装包。</p>',6),C=a("strong",null,"方式二",-1),J=a("code",null,"jenkins_plugin.hpi",-1),j={href:"https://github.com/Tencent/CodeAnalysis/releases",target:"_blank",rel:"noopener noreferrer"},E=s('<h3 id="在jenkins安装插件" tabindex="-1"><a class="header-anchor" href="#在jenkins安装插件" aria-hidden="true">#</a> 在Jenkins安装插件</h3><p>在Jenkins中通过【Manage Plugin】-&gt; 【Advanced】-&gt;【Deploy plugin】的方式选择 Jenkins_plugin.hpi文件上传安装，并重启Jenkins。<br><img src="'+i+'" alt=""><img src="'+t+'" width="500"></p><p>最终在【Installed】里搜索出【TCA】代表插件安装成功。 <img src="'+r+'" alt=""></p><h2 id="使用插件" tabindex="-1"><a class="header-anchor" href="#使用插件" aria-hidden="true">#</a> 使用插件</h2><h3 id="在-tca-创建团队和项目" tabindex="-1"><a class="header-anchor" href="#在-tca-创建团队和项目" aria-hidden="true">#</a> 在 TCA 创建团队和项目</h3><p>如已创建后待使用的团队和项目，可跳过此步。</p><p>进入已部署好的TCA页面，点击【创建团队】，成功后【创建项目】。</p><h3 id="配置jenkins环境变量" tabindex="-1"><a class="header-anchor" href="#配置jenkins环境变量" aria-hidden="true">#</a> 配置Jenkins环境变量</h3><p>进入Jenkins设置界面，在【Manage Jenkins】-&gt;【Configure System】-&gt;【Global properties】中添加环境变量：<br> Name：<code>PYTHONPATH</code> Value：xxxx（路径不包含python3）<br> Value：<code>GITPATH</code> Value：xxxx（路径不包含git）<br><img src="'+d+'" alt=""><img src="'+c+'" alt=""><img src="'+o+'" width="400"></p><h3 id="创建一个构建任务-配置代码库信息" tabindex="-1"><a class="header-anchor" href="#创建一个构建任务-配置代码库信息" aria-hidden="true">#</a> 创建一个构建任务，配置代码库信息</h3><p>进入Jenkins，通过【New Item】创建一个空白任务，在任务配置中【Source Code Management】配置待分析的代码库地址和凭证。<br><code>Repository URL</code>: 填入远端仓库地址<br><code>Credentials</code>: 添加仓库的用户名和密码作为凭证，如果是公开仓库，可以不设置仓库凭证</p><img src="'+h+'" width="300"><p><img src="'+l+'" alt=""></p><h3 id="配置-tca-插件" tabindex="-1"><a class="header-anchor" href="#配置-tca-插件" aria-hidden="true">#</a> 配置 TCA 插件</h3><p>在构建任务的【Build】中选择【TCA】插件并配置以下参数：</p><p><code>CodeAnalysis</code>: 拉取代码所在的绝对路径<br><code>团队ID</code>: 在 TCA 中创建的团队的标识ID，可在TCA【团队概览】中获取“团队唯一标识”<br><code>项目名称</code>: 在 TCA 中创建的项目的标识ID，可在TCA【项目概览】中获取“项目唯一标识”<br><code>Token</code>: 在 TCA 的【个人中心】-&gt;【个人令牌】中获取<br><code>分支名称</code>: 需要扫描的代码分析名称<br><code>语言类别</code>: 项目需要扫描的语言<br><code>分析方案模板ID</code>: 需要使用的分析方案模板ID，在分析方案模板的“基础属性”中获取，将根据此模板创建分析方案（选填）<br><code>分析方案名称</code>: 指定创建出来的分析方案的名称（选填）<br><code>全量扫描</code>: 不勾选默认启动增量扫描<br><code>质量门禁</code>: 设置质量门禁值，配置和使用参考 <a href="#%E8%AE%BE%E7%BD%AE%E8%B4%A8%E9%87%8F%E9%97%A8%E7%A6%81">设置质量门禁</a></p><p>配置完成后点击【Save】保存。</p><p><img src="'+p+'" alt=""></p><h3 id="启动构建并查看结果" tabindex="-1"><a class="header-anchor" href="#启动构建并查看结果" aria-hidden="true">#</a> 启动构建并查看结果</h3><p>点击【Build Now】启动构建。<br> 进入构建任务，在【Console Output】中查看执行过程。<br> 执行完成后，可在下方看到代码分析的结果链接，也可在【代码分析报告】中获取代码分析的json报告。<br><img src="'+u+'" alt=""><img src="'+_+'" width="300"><img src="'+m+'" alt=""></p><h2 id="设置质量门禁" tabindex="-1"><a class="header-anchor" href="#设置质量门禁" aria-hidden="true">#</a> 设置质量门禁</h2><p>在上述 TCA 插件配置部分填写<code>质量门禁</code>参数，需要填写一个整数，即当前分支的扫描问题量大于该质量门禁值时，判断为不通过；否则为通过。完成后会将TCA结果状态（<code>success</code>|<code>failure</code>）输出到工作空间下的<code>tca_threshold.txt</code>文件中，供后续步骤判断和终止流水线。</p><p>在TCA插件后增加shell命令步骤，输入以下脚本内容：</p><p><img src="'+g+`" alt=""></p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>tca_status=\`cat tca_threshold.txt\`
if [ &quot;\${tca_status}&quot; == &quot;success&quot; ]; then
  echo &quot;&gt;&gt; tca scan pass!&quot;
else
  echo &quot;&gt;&gt; tca scan fail! exit code 255&quot;
  exit 255
fi
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>当质量门禁不通过时，会终止流水线（退出码：255）。</p>`,26);function I(q,B){const n=k("ExternalLinkIcon");return x(),f("div",null,[T,a("p",null,[C,e("：从TCA release 安装包中，获取"),J,e("："),a("a",j,[e("https://github.com/Tencent/CodeAnalysis/releases"),v(n)]),e("。")]),E])}const y=b(A,[["render",I],["__file","Jenkins_Plugin.html.vue"]]);export{y as default};
