"use strict";(self.webpackChunkvp=self.webpackChunkvp||[]).push([[57519],{73564:(e,o,t)=>{t.r(o),t.d(o,{comp:()=>g,data:()=>b});var a=t(86904);const i=(0,a.Lk)("h1",{id:"sonoff-zbminir2",tabindex:"-1"},[(0,a.Lk)("a",{class:"header-anchor",href:"#sonoff-zbminir2"},[(0,a.Lk)("span",null,"SONOFF ZBMINIR2")])],-1),d=(0,a.Lk)("thead",null,[(0,a.Lk)("tr",null,[(0,a.Lk)("th"),(0,a.Lk)("th")])],-1),n=(0,a.Lk)("tr",null,[(0,a.Lk)("td",null,"Model"),(0,a.Lk)("td",null,"ZBMINIR2")],-1),c=(0,a.Lk)("td",null,"Vendor",-1),l=(0,a.Lk)("tr",null,[(0,a.Lk)("td",null,"Description"),(0,a.Lk)("td",null,"Zigbee smart switch")],-1),s=(0,a.Lk)("tr",null,[(0,a.Lk)("td",null,"Exposes"),(0,a.Lk)("td",null,"switch (state), power_on_behavior, turbo_mode, delayed_power_on_state, delayed_power_on_time, detach_relay_mode, external_trigger_mode, inching_control_set, linkquality")],-1),r=(0,a.Lk)("tr",null,[(0,a.Lk)("td",null,"Picture"),(0,a.Lk)("td",null,[(0,a.Lk)("img",{src:"https://www.zigbee2mqtt.io/images/devices/ZBMINIR2.png",alt:"SONOFF ZBMINIR2"})])],-1),u=(0,a.Lk)("h2",{id:"ota-updates",tabindex:"-1"},[(0,a.Lk)("a",{class:"header-anchor",href:"#ota-updates"},[(0,a.Lk)("span",null,"OTA updates")])],-1),h=(0,a.Lk)("h2",{id:"options",tabindex:"-1"},[(0,a.Lk)("a",{class:"header-anchor",href:"#options"},[(0,a.Lk)("span",null,"Options")])],-1),p=(0,a.Fv)('<ul><li><code>state_action</code>: State actions will also be published as &#39;action&#39; when true (default false). The value must be <code>true</code> or <code>false</code></li></ul><h2 id="exposes" tabindex="-1"><a class="header-anchor" href="#exposes"><span>Exposes</span></a></h2><h3 id="switch" tabindex="-1"><a class="header-anchor" href="#switch"><span>Switch</span></a></h3><p>The current state of this switch is in the published state under the <code>state</code> property (value is <code>ON</code> or <code>OFF</code>). To control this switch publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;state&quot;: &quot;ON&quot;}</code>, <code>{&quot;state&quot;: &quot;OFF&quot;}</code> or <code>{&quot;state&quot;: &quot;TOGGLE&quot;}</code>. To read the current state of this switch publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;state&quot;: &quot;&quot;}</code>.</p><h4 id="on-with-timed-off" tabindex="-1"><a class="header-anchor" href="#on-with-timed-off"><span>On with timed off</span></a></h4><p>When setting the state to ON, it might be possible to specify an automatic shutoff after a certain amount of time. To do this add an additional property <code>on_time</code> to the payload which is the time in seconds the state should remain on. Additionally an <code>off_wait_time</code> property can be added to the payload to specify the cooldown time in seconds when the switch will not answer to other on with timed off commands. Support depends on the switch firmware. Some devices might require both <code>on_time</code> and <code>off_wait_time</code> to work Examples : <code>{&quot;state&quot; : &quot;ON&quot;, &quot;on_time&quot;: 300}</code>, <code>{&quot;state&quot; : &quot;ON&quot;, &quot;on_time&quot;: 300, &quot;off_wait_time&quot;: 120}</code>.</p><h3 id="power-on-behavior-enum" tabindex="-1"><a class="header-anchor" href="#power-on-behavior-enum"><span>Power-on behavior (enum)</span></a></h3><p>Controls the behavior when the device is powered on after power loss. If you get an <code>UNSUPPORTED_ATTRIBUTE</code> error, the device does not support it.. Value can be found in the published state on the <code>power_on_behavior</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;power_on_behavior&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;power_on_behavior&quot;: NEW_VALUE}</code>. The possible values are: <code>off</code>, <code>on</code>, <code>toggle</code>, <code>previous</code>.</p><h3 id="turbo-mode-binary" tabindex="-1"><a class="header-anchor" href="#turbo-mode-binary"><span>Turbo mode (binary)</span></a></h3><p>Enable/disable Radio power turbo mode. Value can be found in the published state on the <code>turbo_mode</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;turbo_mode&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;turbo_mode&quot;: NEW_VALUE}</code>. If value equals <code>true</code> turbo mode is ON, if <code>false</code> OFF.</p><h3 id="delayed-power-on-state-binary" tabindex="-1"><a class="header-anchor" href="#delayed-power-on-state-binary"><span>Delayed power on state (binary)</span></a></h3><p>Delayed Power-on State. Value can be found in the published state on the <code>delayed_power_on_state</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;delayed_power_on_state&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;delayed_power_on_state&quot;: NEW_VALUE}</code>. If value equals <code>true</code> delayed power on state is ON, if <code>false</code> OFF.</p><h3 id="delayed-power-on-time-numeric" tabindex="-1"><a class="header-anchor" href="#delayed-power-on-time-numeric"><span>Delayed power on time (numeric)</span></a></h3><p>Delayed Power-on time. Value can be found in the published state on the <code>delayed_power_on_time</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;delayed_power_on_time&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;delayed_power_on_time&quot;: NEW_VALUE}</code>. The minimal value is <code>0.5</code> and the maximum value is <code>3599.5</code>. The unit of this value is <code>seconds</code>.</p><h3 id="detach-relay-mode-binary" tabindex="-1"><a class="header-anchor" href="#detach-relay-mode-binary"><span>Detach relay mode (binary)</span></a></h3><p>Enable/Disable detach relay mode. Value can be found in the published state on the <code>detach_relay_mode</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;detach_relay_mode&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;detach_relay_mode&quot;: NEW_VALUE}</code>. If value equals <code>true</code> detach relay mode is ON, if <code>false</code> OFF.</p><h3 id="external-trigger-mode-enum" tabindex="-1"><a class="header-anchor" href="#external-trigger-mode-enum"><span>External trigger mode (enum)</span></a></h3><p>External trigger mode, which can be one of edge, pulse, following(off), following(on). The appropriate triggering mode can be selected according to the type of external switch to achieve a better use experience.. Value can be found in the published state on the <code>external_trigger_mode</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;external_trigger_mode&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;external_trigger_mode&quot;: NEW_VALUE}</code>. The possible values are: <code>edge</code>, <code>pulse</code>, <code>following(off)</code>, <code>following(on)</code>.</p><h3 id="inching-control-set-composite" tabindex="-1"><a class="header-anchor" href="#inching-control-set-composite"><span>Inching control set (composite)</span></a></h3><p>Device Inching function Settings. The device will automatically turn off (turn on) after each turn on (turn off) for a specified period of time.. Can be set by publishing to <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;inching_control_set&quot;: {&quot;inching_control&quot;: VALUE, &quot;inching_time&quot;: VALUE, &quot;inching_mode&quot;: VALUE}}</code></p><ul><li><code>inching_control</code> (binary): Enable/disable inching function. allowed values: <code>ENABLE</code> or <code>DISABLE</code></li><li><code>inching_time</code> (numeric): Delay time for executing a inching action. min value is 0.5, max value is 3599.5, unit is seconds</li><li><code>inching_mode</code> (binary): Set inching off or inching on mode. allowed values: <code>ON</code> or <code>OFF</code></li></ul><h3 id="linkquality-numeric" tabindex="-1"><a class="header-anchor" href="#linkquality-numeric"><span>Linkquality (numeric)</span></a></h3><p>Link quality (signal strength). Value can be found in the published state on the <code>linkquality</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>255</code>. The unit of this value is <code>lqi</code>.</p>',23),m={},g=(0,t(22652).A)(m,[["render",function(e,o){const t=(0,a.g2)("RouteLink");return(0,a.uX)(),(0,a.CE)("div",null,[i,(0,a.Lk)("table",null,[d,(0,a.Lk)("tbody",null,[n,(0,a.Lk)("tr",null,[c,(0,a.Lk)("td",null,[(0,a.bF)(t,{to:"/supported-devices/#v=SONOFF"},{default:(0,a.k6)((()=>[(0,a.eW)("SONOFF")])),_:1})])]),l,s,r])]),u,(0,a.Lk)("p",null,[(0,a.eW)("This device supports OTA updates, for more information see "),(0,a.bF)(t,{to:"/guide/usage/ota_updates.html"},{default:(0,a.k6)((()=>[(0,a.eW)("OTA updates")])),_:1}),(0,a.eW)(".")]),h,(0,a.Lk)("p",null,[(0,a.Lk)("em",null,[(0,a.bF)(t,{to:"/guide/configuration/devices-groups.html#specific-device-options"},{default:(0,a.k6)((()=>[(0,a.eW)("How to use device type specific configuration")])),_:1})])]),p])}]]),b=JSON.parse('{"path":"/devices/ZBMINIR2.html","title":"SONOFF ZBMINIR2 control via MQTT","lang":"en-US","frontmatter":{"pageClass":"device-page","title":"SONOFF ZBMINIR2 control via MQTT","description":"Integrate your SONOFF ZBMINIR2 via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor\'s bridge or gateway.","addedAt":"2024-06-01T08:47:20.000Z"},"headers":[{"level":2,"title":"OTA updates","slug":"ota-updates","link":"#ota-updates","children":[]},{"level":2,"title":"Options","slug":"options","link":"#options","children":[]},{"level":2,"title":"Exposes","slug":"exposes","link":"#exposes","children":[{"level":3,"title":"Switch","slug":"switch","link":"#switch","children":[]},{"level":3,"title":"Power-on behavior (enum)","slug":"power-on-behavior-enum","link":"#power-on-behavior-enum","children":[]},{"level":3,"title":"Turbo mode (binary)","slug":"turbo-mode-binary","link":"#turbo-mode-binary","children":[]},{"level":3,"title":"Delayed power on state (binary)","slug":"delayed-power-on-state-binary","link":"#delayed-power-on-state-binary","children":[]},{"level":3,"title":"Delayed power on time (numeric)","slug":"delayed-power-on-time-numeric","link":"#delayed-power-on-time-numeric","children":[]},{"level":3,"title":"Detach relay mode (binary)","slug":"detach-relay-mode-binary","link":"#detach-relay-mode-binary","children":[]},{"level":3,"title":"External trigger mode (enum)","slug":"external-trigger-mode-enum","link":"#external-trigger-mode-enum","children":[]},{"level":3,"title":"Inching control set (composite)","slug":"inching-control-set-composite","link":"#inching-control-set-composite","children":[]},{"level":3,"title":"Linkquality (numeric)","slug":"linkquality-numeric","link":"#linkquality-numeric","children":[]}]}],"git":{"updatedTime":1725034041000},"filePathRelative":"devices/ZBMINIR2.md"}')}}]);