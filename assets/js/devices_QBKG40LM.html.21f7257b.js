"use strict";(self.webpackChunkvp=self.webpackChunkvp||[]).push([[85302],{72462:(e,t,o)=>{o.r(t),o.d(t,{comp:()=>f,data:()=>g});var a=o(86904);const i=(0,a.Lk)("h1",{id:"aqara-qbkg40lm",tabindex:"-1"},[(0,a.Lk)("a",{class:"header-anchor",href:"#aqara-qbkg40lm"},[(0,a.Lk)("span",null,"Aqara QBKG40LM")])],-1),r=(0,a.Lk)("thead",null,[(0,a.Lk)("tr",null,[(0,a.Lk)("th"),(0,a.Lk)("th")])],-1),d=(0,a.Lk)("tr",null,[(0,a.Lk)("td",null,"Model"),(0,a.Lk)("td",null,"QBKG40LM")],-1),n=(0,a.Lk)("td",null,"Vendor",-1),l=(0,a.Lk)("tr",null,[(0,a.Lk)("td",null,"Description"),(0,a.Lk)("td",null,"Smart wall switch E1 (with neutral, single rocker)")],-1),c=(0,a.Lk)("tr",null,[(0,a.Lk)("td",null,"Exposes"),(0,a.Lk)("td",null,"switch (state), power_outage_memory, device_temperature, flip_indicator_light, operation_mode, action, linkquality")],-1),s=(0,a.Lk)("tr",null,[(0,a.Lk)("td",null,"Picture"),(0,a.Lk)("td",null,[(0,a.Lk)("img",{src:"https://www.zigbee2mqtt.io/images/devices/QBKG40LM.png",alt:"Aqara QBKG40LM"})])],-1),u=(0,a.Fv)('<h2 id="notes" tabindex="-1"><a class="header-anchor" href="#notes"><span>Notes</span></a></h2><h3 id="adapter-firmware" tabindex="-1"><a class="header-anchor" href="#adapter-firmware"><span>Adapter firmware</span></a></h3><p>In order for this device to work (fully), at least the following firmware is required on your adapter:</p><ul><li>CC2530/CC2531: <a href="https://github.com/Koenkk/Z-Stack-firmware/tree/Z-Stack_Home_1.2_20211115/20211116/coordinator/Z-Stack_Home_1.2/bin" target="_blank" rel="noopener noreferrer"><code>20211115</code></a></li><li>CC1352/CC2652: <a href="https://github.com/Koenkk/Z-Stack-firmware/tree/7c5a6da0c41855d42b5e6506e5e3b496be097ba3/coordinator/Z-Stack_3.x.0/bin" target="_blank" rel="noopener noreferrer"><code>20211114</code></a></li><li>CC2538: <a href="https://github.com/jethome-ru/zigbee-firmware/tree/master/ti/coordinator/cc2538_cc2592" target="_blank" rel="noopener noreferrer"><code>20211222</code></a></li><li>Conbee II: <a href="http://deconz.dresden-elektronik.de/deconz-firmware/deCONZ_ConBeeII_0x26720700.bin.GCF" target="_blank" rel="noopener noreferrer"><code>0x26720700</code></a></li></ul><p><em>Note that if you have already paired the device you will need to repair it after upgrading your adapter firmware.</em></p><h2 id="ota-updates" tabindex="-1"><a class="header-anchor" href="#ota-updates"><span>OTA updates</span></a></h2>',6),h=(0,a.Lk)("h2",{id:"options",tabindex:"-1"},[(0,a.Lk)("a",{class:"header-anchor",href:"#options"},[(0,a.Lk)("span",null,"Options")])],-1),p=(0,a.Fv)('<ul><li><p><code>device_temperature_calibration</code>: Calibrates the device_temperature value (absolute offset), takes into effect on next report of device. The value must be a number.</p></li><li><p><code>state_action</code>: State actions will also be published as &#39;action&#39; when true (default false). The value must be <code>true</code> or <code>false</code></p></li></ul><h2 id="exposes" tabindex="-1"><a class="header-anchor" href="#exposes"><span>Exposes</span></a></h2><h3 id="switch" tabindex="-1"><a class="header-anchor" href="#switch"><span>Switch</span></a></h3><p>The current state of this switch is in the published state under the <code>state</code> property (value is <code>ON</code> or <code>OFF</code>). To control this switch publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;state&quot;: &quot;ON&quot;}</code>, <code>{&quot;state&quot;: &quot;OFF&quot;}</code> or <code>{&quot;state&quot;: &quot;TOGGLE&quot;}</code>. To read the current state of this switch publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;state&quot;: &quot;&quot;}</code>.</p><h4 id="on-with-timed-off" tabindex="-1"><a class="header-anchor" href="#on-with-timed-off"><span>On with timed off</span></a></h4><p>When setting the state to ON, it might be possible to specify an automatic shutoff after a certain amount of time. To do this add an additional property <code>on_time</code> to the payload which is the time in seconds the state should remain on. Additionally an <code>off_wait_time</code> property can be added to the payload to specify the cooldown time in seconds when the switch will not answer to other on with timed off commands. Support depends on the switch firmware. Some devices might require both <code>on_time</code> and <code>off_wait_time</code> to work Examples : <code>{&quot;state&quot; : &quot;ON&quot;, &quot;on_time&quot;: 300}</code>, <code>{&quot;state&quot; : &quot;ON&quot;, &quot;on_time&quot;: 300, &quot;off_wait_time&quot;: 120}</code>.</p><h3 id="power-outage-memory-binary" tabindex="-1"><a class="header-anchor" href="#power-outage-memory-binary"><span>Power outage memory (binary)</span></a></h3><p>Enable/disable the power outage memory, this recovers the on/off mode after power failure. Value can be found in the published state on the <code>power_outage_memory</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;power_outage_memory&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;power_outage_memory&quot;: NEW_VALUE}</code>. If value equals <code>true</code> power outage memory is ON, if <code>false</code> OFF.</p><h3 id="device-temperature-numeric" tabindex="-1"><a class="header-anchor" href="#device-temperature-numeric"><span>Device temperature (numeric)</span></a></h3><p>Temperature of the device. Value can be found in the published state on the <code>device_temperature</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The unit of this value is <code>°C</code>.</p><h3 id="flip-indicator-light-binary" tabindex="-1"><a class="header-anchor" href="#flip-indicator-light-binary"><span>Flip indicator light (binary)</span></a></h3><p>After turn on, the indicator light turns on while switch is off, and vice versa. Value can be found in the published state on the <code>flip_indicator_light</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;flip_indicator_light&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;flip_indicator_light&quot;: NEW_VALUE}</code>. If value equals <code>ON</code> flip indicator light is ON, if <code>OFF</code> OFF.</p><h3 id="operation-mode-enum" tabindex="-1"><a class="header-anchor" href="#operation-mode-enum"><span>Operation mode (enum)</span></a></h3><p>Decoupled mode. Value can be found in the published state on the <code>operation_mode</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;operation_mode&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;operation_mode&quot;: NEW_VALUE}</code>. The possible values are: <code>control_relay</code>, <code>decoupled</code>.</p><h3 id="action-enum" tabindex="-1"><a class="header-anchor" href="#action-enum"><span>Action (enum)</span></a></h3><p>Triggered action (e.g. a button click). Value can be found in the published state on the <code>action</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The possible values are: <code>single</code>, <code>double</code>.</p><h3 id="linkquality-numeric" tabindex="-1"><a class="header-anchor" href="#linkquality-numeric"><span>Linkquality (numeric)</span></a></h3><p>Link quality (signal strength). Value can be found in the published state on the <code>linkquality</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>255</code>. The unit of this value is <code>lqi</code>.</p>',18),m={},f=(0,o(22652).A)(m,[["render",function(e,t){const o=(0,a.g2)("RouteLink");return(0,a.uX)(),(0,a.CE)("div",null,[i,(0,a.Lk)("table",null,[r,(0,a.Lk)("tbody",null,[d,(0,a.Lk)("tr",null,[n,(0,a.Lk)("td",null,[(0,a.bF)(o,{to:"/supported-devices/#v=Aqara"},{default:(0,a.k6)((()=>[(0,a.eW)("Aqara")])),_:1})])]),l,c,s])]),u,(0,a.Lk)("p",null,[(0,a.eW)("This device supports OTA updates, for more information see "),(0,a.bF)(o,{to:"/guide/usage/ota_updates.html"},{default:(0,a.k6)((()=>[(0,a.eW)("OTA updates")])),_:1}),(0,a.eW)(".")]),h,(0,a.Lk)("p",null,[(0,a.Lk)("em",null,[(0,a.bF)(o,{to:"/guide/configuration/devices-groups.html#specific-device-options"},{default:(0,a.k6)((()=>[(0,a.eW)("How to use device type specific configuration")])),_:1})])]),p])}]]),g=JSON.parse('{"path":"/devices/QBKG40LM.html","title":"Aqara QBKG40LM control via MQTT","lang":"en-US","frontmatter":{"pageClass":"device-page","title":"Aqara QBKG40LM control via MQTT","description":"Integrate your Aqara QBKG40LM via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor\'s bridge or gateway.","addedAt":"2021-08-01T20:41:55.000Z"},"headers":[{"level":2,"title":"Notes","slug":"notes","link":"#notes","children":[{"level":3,"title":"Adapter firmware","slug":"adapter-firmware","link":"#adapter-firmware","children":[]}]},{"level":2,"title":"OTA updates","slug":"ota-updates","link":"#ota-updates","children":[]},{"level":2,"title":"Options","slug":"options","link":"#options","children":[]},{"level":2,"title":"Exposes","slug":"exposes","link":"#exposes","children":[{"level":3,"title":"Switch","slug":"switch","link":"#switch","children":[]},{"level":3,"title":"Power outage memory (binary)","slug":"power-outage-memory-binary","link":"#power-outage-memory-binary","children":[]},{"level":3,"title":"Device temperature (numeric)","slug":"device-temperature-numeric","link":"#device-temperature-numeric","children":[]},{"level":3,"title":"Flip indicator light (binary)","slug":"flip-indicator-light-binary","link":"#flip-indicator-light-binary","children":[]},{"level":3,"title":"Operation mode (enum)","slug":"operation-mode-enum","link":"#operation-mode-enum","children":[]},{"level":3,"title":"Action (enum)","slug":"action-enum","link":"#action-enum","children":[]},{"level":3,"title":"Linkquality (numeric)","slug":"linkquality-numeric","link":"#linkquality-numeric","children":[]}]}],"git":{"updatedTime":1725034041000},"filePathRelative":"devices/QBKG40LM.md"}')}}]);