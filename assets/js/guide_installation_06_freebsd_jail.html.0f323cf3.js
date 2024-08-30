"use strict";(self.webpackChunkvp=self.webpackChunkvp||[]).push([[37305],{36698:(n,s,e)=>{e.r(s),e.d(s,{comp:()=>r,data:()=>o});var a=e(86904);const i=(0,a.Fv)('<h1 id="freebsd-jail" tabindex="-1"><a class="header-anchor" href="#freebsd-jail"><span>FreeBSD jail</span></a></h1><p>These instructions explain how to run Zigbee2MQTT in a <a href="https://en.wikipedia.org/wiki/FreeBSD_jail" target="_blank" rel="noopener noreferrer">FreeBSD jail</a>.</p><p>For the sake of simplicity this guide assumes running on <a href="https://www.truenas.com/truenas-core/" target="_blank" rel="noopener noreferrer">TrueNAS CORE</a> and installing Zigbee2MQTT in the <em>Mosquitto MQTT</em> jail to be used with Home Assistant. This setup only uses MQTT for interfacing between Zigbee and Home Assistant. The instructions should otherwise work on any FreeBSD machine.</p><h2 id="jail-creation" tabindex="-1"><a class="header-anchor" href="#jail-creation"><span>Jail creation</span></a></h2><p>First we have to create the jail that will run both Zigbee2MQTT and Mosquitto. We can do that by opening the TrueNAS Web UI, navigating to <code>Plugins</code>, selecting <code>Community</code> plugins and then <code>Mosquitto MQTT</code>.</p><p>To enter the jail&#39;s terminal, we can use the Web UI&#39;s <em>Shell</em> feature under <em>Jails</em>, or SSH into TrueNAS and then</p><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line"><span class="token function">sudo</span> iocage console <span class="token operator">&lt;</span>jail-name<span class="token operator">&gt;</span></span>\n<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h2 id="installing" tabindex="-1"><a class="header-anchor" href="#installing"><span>Installing</span></a></h2><p>Enter the following commands inside the jail&#39;s shell:</p><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line"><span class="token comment"># Install Node.js and required dependencies:</span></span>\n<span class="line"><span class="token comment"># - It is recommended to install Node 16 from the official Node repository. Check https://github.com/nodesource/distributions/blob/master/README.md on how to do this.</span></span>\n<span class="line"><span class="token comment"># - Older i386 hardware can work with [unofficial-builds.nodejs.org](https://unofficial-builds.nodejs.org/download/release/v16.15.0/ e.g. Version 16.15.0 should work.</span></span>\n<span class="line"><span class="token comment"># - Selecting `npm` also installs `node`.</span></span>\n<span class="line">pkg <span class="token function">install</span> <span class="token function">npm</span> <span class="token function">git</span> gmake gcc</span>\n<span class="line"></span>\n<span class="line"><span class="token comment"># Verify that the correct nodejs and npm (automatically installed with nodejs)</span></span>\n<span class="line"><span class="token comment"># version has been installed</span></span>\n<span class="line"><span class="token function">node</span> <span class="token parameter variable">--version</span>  <span class="token comment"># Should output V18.x, V20.x, V21.X</span></span>\n<span class="line"><span class="token function">npm</span> <span class="token parameter variable">--version</span>  <span class="token comment"># Should output 9.X or 10.X</span></span>\n<span class="line"></span>\n<span class="line"><span class="token comment"># Create installation folder (/usr/local prefix is used for software not part of the base system)</span></span>\n<span class="line"><span class="token function">mkdir</span> <span class="token parameter variable">-p</span> /usr/local/opt/zigbee2mqtt</span>\n<span class="line"><span class="token builtin class-name">cd</span> /usr/local/opt/zigbee2mqtt</span>\n<span class="line"></span>\n<span class="line"><span class="token comment"># Clone Zigbee2MQTT repository</span></span>\n<span class="line"><span class="token function">git</span> clone <span class="token parameter variable">--depth</span> <span class="token number">1</span> https://github.com/Koenkk/zigbee2mqtt.git <span class="token builtin class-name">.</span></span>\n<span class="line"></span>\n<span class="line"><span class="token comment"># Install dependencies</span></span>\n<span class="line"><span class="token function">npm</span> ci</span>\n<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>If everything went correctly the output of <code>npm ci</code> is similar to (the number of packages and seconds is probably different on your device):</p><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line">node-pre-gyp info ok</span>\n<span class="line">added <span class="token number">383</span> packages <span class="token keyword">in</span> <span class="token number">111</span>.613s</span>\n<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><p>Note that the <code>npm ci</code> produces some <code>warning</code> which can be ignored.</p><h2 id="configuring" tabindex="-1"><a class="header-anchor" href="#configuring"><span>Configuring</span></a></h2>',14),l=(0,a.Fv)('<p>Note that the <code>configuration.yaml</code> is at a different location:</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">/usr/local/opt/zigbee2mqtt/data/configuration.yaml</span>\n<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>Also note that if you need <code>nano</code> for editing the configuration, you&#39;ll have to install it first:</p><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line">pkg <span class="token function">install</span> <span class="token function">nano</span></span>\n<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h2 id="starting-zigbee2mqtt" tabindex="-1"><a class="header-anchor" href="#starting-zigbee2mqtt"><span>Starting Zigbee2MQTT</span></a></h2><p>Now that we have setup everything correctly we can start Zigbee2MQTT.</p><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line"><span class="token builtin class-name">cd</span> /usr/local/opt/zigbee2mqtt</span>\n<span class="line"><span class="token function">npm</span> start</span>\n<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><p>When started successfully, you will see something like:</p><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line">Zigbee2MQTT:info  <span class="token number">2019</span>-11-09T13:04:01: Logging to directory: <span class="token string">&#39;/opt/zigbee2mqtt/data/log/2019-11-09.14-04-01&#39;</span></span>\n<span class="line">Zigbee2MQTT:info  <span class="token number">2019</span>-11-09T13:04:01: Starting Zigbee2MQTT version <span class="token number">1.6</span>.0 <span class="token punctuation">(</span>commit <span class="token comment">#720e393)</span></span>\n<span class="line">Zigbee2MQTT:info  <span class="token number">2019</span>-11-09T13:04:01: Starting zigbee-herdsman<span class="token punctuation">..</span>.</span>\n<span class="line">Zigbee2MQTT:info  <span class="token number">2019</span>-11-09T13:04:03: zigbee-herdsman started</span>\n<span class="line">Zigbee2MQTT:info  <span class="token number">2019</span>-11-09T13:04:03: Coordinator firmware version: <span class="token string">&#39;{&quot;type&quot;:&quot;zStack30x&quot;,&quot;meta&quot;:{&quot;transportrev&quot;:2,&quot;product&quot;:2,&quot;majorrel&quot;:2,&quot;minorrel&quot;:7,&quot;maintrel&quot;:2,&quot;revision&quot;:20190425}}&#39;</span></span>\n<span class="line">Zigbee2MQTT:info  <span class="token number">2019</span>-11-09T13:04:03: Currently <span class="token number">0</span> devices are joined:</span>\n<span class="line">Zigbee2MQTT:warn  <span class="token number">2019</span>-11-09T13:04:03: <span class="token variable"><span class="token variable">`</span>permit_join<span class="token variable">`</span></span> <span class="token builtin class-name">set</span> to  <span class="token variable"><span class="token variable">`</span><span class="token boolean">true</span><span class="token variable">`</span></span> <span class="token keyword">in</span> configuration.yaml.</span>\n<span class="line">Zigbee2MQTT:warn  <span class="token number">2019</span>-11-09T13:04:03: Allowing new devices to join.</span>\n<span class="line">Zigbee2MQTT:warn  <span class="token number">2019</span>-11-09T13:04:03: Set <span class="token variable"><span class="token variable">`</span>permit_join<span class="token variable">`</span></span> to <span class="token variable"><span class="token variable">`</span><span class="token boolean">false</span><span class="token variable">`</span></span> once you joined all devices.</span>\n<span class="line">Zigbee2MQTT:info  <span class="token number">2019</span>-11-09T13:04:03: Zigbee: allowing new devices to join.</span>\n<span class="line">Zigbee2MQTT:info  <span class="token number">2019</span>-11-09T13:04:03: Connecting to MQTT server at mqtt://localhost</span>\n<span class="line">Zigbee2MQTT:info  <span class="token number">2019</span>-11-09T13:04:03: Connected to MQTT server</span>\n<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Zigbee2MQTT can be stopped by pressing <code>CTRL + C</code>.</p><h2 id="optional-running-as-a-daemon-with-rc" tabindex="-1"><a class="header-anchor" href="#optional-running-as-a-daemon-with-rc"><span>(Optional) Running as a daemon with rc</span></a></h2><p>To run Zigbee2MQTT as a daemon (in background) and start it automatically on jail start we will create a service file for it.</p><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line"><span class="token comment"># Create service file for Zigbee2MQTT (assuming `nano` is installed, `vi` can also be used)</span></span>\n<span class="line"><span class="token function">nano</span> /usr/local/etc/rc.d/zigbee2mqtt</span>\n<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><p>Add the following to this file:</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">#!/bin/sh</span>\n<span class="line"></span>\n<span class="line"># PROVIDE: zigbee2mqtt</span>\n<span class="line"># REQUIRE: DAEMON NETWORKING</span>\n<span class="line"># BEFORE: LOGIN</span>\n<span class="line"># KEYWORD: shutdown</span>\n<span class="line"></span>\n<span class="line">. /etc/rc.subr</span>\n<span class="line"></span>\n<span class="line">name=&quot;zigbee2mqtt&quot;</span>\n<span class="line">rcvar=zigbee2mqtt_enable</span>\n<span class="line"></span>\n<span class="line">: ${zigbee2mqtt_enable:=&quot;NO&quot;}</span>\n<span class="line"></span>\n<span class="line"># daemon</span>\n<span class="line">pidfile=&quot;/var/run/${name}.pid&quot;</span>\n<span class="line">node=&quot;/usr/local/bin/node&quot;</span>\n<span class="line">script_js=&quot;/usr/local/opt/zigbee2mqtt/index.js&quot;</span>\n<span class="line">command=/usr/sbin/daemon</span>\n<span class="line">procname=&quot;daemon&quot;</span>\n<span class="line">command_args=&quot; -c -f -P ${pidfile} ${node} ${script_js}&quot;</span>\n<span class="line"></span>\n<span class="line">load_rc_config $name</span>\n<span class="line">run_rc_command &quot;$1&quot;</span>\n<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Save the file and exit.</p><p>Make it executable:</p><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line"><span class="token function">chmod</span> +x /usr/local/etc/rc.d/zigbee2mqtt</span>\n<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>Verify that the configuration works:</p><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line"><span class="token comment"># Start Zigbee2MQTT without enabling it</span></span>\n<span class="line"><span class="token function">service</span> zigbee2mqtt onestart</span>\n<span class="line"></span>\n<span class="line"><span class="token comment"># Show status</span></span>\n<span class="line"><span class="token function">service</span> zigbee2mqtt onestatus</span>\n<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Output should look like:</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">root@zigbee2mqtt:/usr/local/opt/zigbee2mqtt # service zigbee2mqtt onestatus</span>\n<span class="line">zigbee2mqtt is running as pid 80246.</span>\n<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><p>Now that everything works, we want the init system to start Zigbee2MQTT automatically when the jail starts. This can be done by executing:</p><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line"><span class="token function">service</span> zigbee2mqtt <span class="token builtin class-name">enable</span></span>\n<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>Done! 😃</p><p>Some tips that can be handy later:</p><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line"><span class="token comment"># Stopping Zigbee2MQTT</span></span>\n<span class="line"><span class="token function">service</span> zigbee2mqtt stop</span>\n<span class="line"></span>\n<span class="line"><span class="token comment"># Starting Zigbee2MQTT</span></span>\n<span class="line"><span class="token function">service</span> zigbee2mqtt start</span>\n<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="for-later-update-zigbee2mqtt-to-the-latest-version" tabindex="-1"><a class="header-anchor" href="#for-later-update-zigbee2mqtt-to-the-latest-version"><span>(For later) Update Zigbee2MQTT to the latest version</span></a></h2><p>To update Zigbee2MQTT to the latest version, execute:</p><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line"><span class="token comment"># Run the update script from the Zigbee2MQTT directory</span></span>\n<span class="line"><span class="token builtin class-name">cd</span> /opt/zigbee2mqtt</span>\n<span class="line">./update.sh</span>\n<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>',30),t={},r=(0,e(22652).A)(t,[["render",function(n,s){const e=(0,a.g2)("RouteLink");return(0,a.uX)(),(0,a.CE)("div",null,[i,(0,a.Lk)("p",null,[(0,a.eW)("Configuration is the same as on "),(0,a.bF)(e,{to:"/guide/installation/01_linux.html#configuring"},{default:(0,a.k6)((()=>[(0,a.eW)("Linux")])),_:1}),(0,a.eW)(".")]),l])}]]),o=JSON.parse('{"path":"/guide/installation/06_freebsd_jail.html","title":"FreeBSD jail","lang":"en-US","frontmatter":{"pageClass":"content-page","next":"../configuration/"},"headers":[{"level":2,"title":"Jail creation","slug":"jail-creation","link":"#jail-creation","children":[]},{"level":2,"title":"Installing","slug":"installing","link":"#installing","children":[]},{"level":2,"title":"Configuring","slug":"configuring","link":"#configuring","children":[]},{"level":2,"title":"Starting Zigbee2MQTT","slug":"starting-zigbee2mqtt","link":"#starting-zigbee2mqtt","children":[]},{"level":2,"title":"(Optional) Running as a daemon with rc","slug":"optional-running-as-a-daemon-with-rc","link":"#optional-running-as-a-daemon-with-rc","children":[]},{"level":2,"title":"(For later) Update Zigbee2MQTT to the latest version","slug":"for-later-update-zigbee2mqtt-to-the-latest-version","link":"#for-later-update-zigbee2mqtt-to-the-latest-version","children":[]}],"git":{"updatedTime":1725034041000},"filePathRelative":"guide/installation/06_freebsd_jail.md"}')}}]);