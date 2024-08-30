"use strict";(self.webpackChunkvp=self.webpackChunkvp||[]).push([[95401],{22680:(e,o,i)=>{i.r(o),i.d(o,{comp:()=>m,data:()=>b});var t=i(86904);const d=(0,t.Lk)("h1",{id:"aqara-zncwwsq01lm",tabindex:"-1"},[(0,t.Lk)("a",{class:"header-anchor",href:"#aqara-zncwwsq01lm"},[(0,t.Lk)("span",null,"Aqara ZNCWWSQ01LM")])],-1),a=(0,t.Lk)("thead",null,[(0,t.Lk)("tr",null,[(0,t.Lk)("th"),(0,t.Lk)("th")])],-1),n=(0,t.Lk)("tr",null,[(0,t.Lk)("td",null,"Model"),(0,t.Lk)("td",null,"ZNCWWSQ01LM")],-1),s=(0,t.Lk)("td",null,"Vendor",-1),l=(0,t.Lk)("tr",null,[(0,t.Lk)("td",null,"Description"),(0,t.Lk)("td",null,"Smart pet feeder C1")],-1),c=(0,t.Lk)("tr",null,[(0,t.Lk)("td",null,"Exposes"),(0,t.Lk)("td",null,"feed, feeding_source, feeding_size, portions_per_day, weight_per_day, error, schedule, led_indicator, lock (state), mode, serving_size, portion_weight, linkquality")],-1),r=(0,t.Lk)("tr",null,[(0,t.Lk)("td",null,"Picture"),(0,t.Lk)("td",null,[(0,t.Lk)("img",{src:"https://www.zigbee2mqtt.io/images/devices/ZNCWWSQ01LM.png",alt:"Aqara ZNCWWSQ01LM"})])],-1),u=(0,t.Lk)("tr",null,[(0,t.Lk)("td",null,"White-label"),(0,t.Lk)("td",null,"Aqara PETC1-M01")],-1),h=(0,t.Fv)('<h2 id="notes" tabindex="-1"><a class="header-anchor" href="#notes"><span>Notes</span></a></h2><h3 id="pairing" tabindex="-1"><a class="header-anchor" href="#pairing"><span>Pairing</span></a></h3><p>To put the device in pairing mode, hold the reset button for 5 seconds. The LED light should blink quickly and it makes a beep sound once paired.</p><h2 id="ota-updates" tabindex="-1"><a class="header-anchor" href="#ota-updates"><span>OTA updates</span></a></h2>',4),p=(0,t.Fv)('<h2 id="exposes" tabindex="-1"><a class="header-anchor" href="#exposes"><span>Exposes</span></a></h2><h3 id="feed-enum" tabindex="-1"><a class="header-anchor" href="#feed-enum"><span>Feed (enum)</span></a></h3><p>Start feeding. Value can be found in the published state on the <code>feed</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;feed&quot;: NEW_VALUE}</code>. The possible values are: ``, <code>START</code>.</p><h3 id="feeding-source-enum" tabindex="-1"><a class="header-anchor" href="#feeding-source-enum"><span>Feeding source (enum)</span></a></h3><p>Feeding source. Value can be found in the published state on the <code>feeding_source</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The possible values are: <code>schedule</code>, <code>manual</code>, <code>remote</code>.</p><h3 id="feeding-size-numeric" tabindex="-1"><a class="header-anchor" href="#feeding-size-numeric"><span>Feeding size (numeric)</span></a></h3><p>Feeding size. Value can be found in the published state on the <code>feeding_size</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The unit of this value is <code>portion</code>.</p><h3 id="portions-per-day-numeric" tabindex="-1"><a class="header-anchor" href="#portions-per-day-numeric"><span>Portions per day (numeric)</span></a></h3><p>Portions per day. Value can be found in the published state on the <code>portions_per_day</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value.</p><h3 id="weight-per-day-numeric" tabindex="-1"><a class="header-anchor" href="#weight-per-day-numeric"><span>Weight per day (numeric)</span></a></h3><p>Weight per day. Value can be found in the published state on the <code>weight_per_day</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The unit of this value is <code>g</code>.</p><h3 id="error-binary" tabindex="-1"><a class="header-anchor" href="#error-binary"><span>Error (binary)</span></a></h3><p>Indicates whether there is an error with the feeder. Value can be found in the published state on the <code>error</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. If value equals <code>true</code> error is ON, if <code>false</code> OFF.</p><h3 id="schedule-list" tabindex="-1"><a class="header-anchor" href="#schedule-list"><span>Schedule (list)</span></a></h3><p>Feeding schedule. Can be set by publishing to <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;schedule&quot;: [{&quot;days&quot;: VALUE, &quot;hour&quot;: VALUE, &quot;minute&quot;: VALUE, &quot;size&quot;: VALUE}]}</code></p><ul><li><code>days</code> (enum) allowed values: <code>everyday</code>, <code>workdays</code>, <code>weekend</code>, <code>mon</code>, <code>tue</code>, <code>wed</code>, <code>thu</code>, <code>fri</code>, <code>sat</code>, <code>sun</code>, <code>mon-wed-fri-sun</code>, <code>tue-thu-sat</code></li><li><code>hour</code> (numeric)</li><li><code>minute</code> (numeric)</li><li><code>size</code> (numeric)</li></ul><h3 id="led-indicator-binary" tabindex="-1"><a class="header-anchor" href="#led-indicator-binary"><span>Led indicator (binary)</span></a></h3><p>Led indicator. Value can be found in the published state on the <code>led_indicator</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;led_indicator&quot;: NEW_VALUE}</code>. If value equals <code>ON</code> led indicator is ON, if <code>OFF</code> OFF.</p><h3 id="child-lock-lock" tabindex="-1"><a class="header-anchor" href="#child-lock-lock"><span>Child lock (lock)</span></a></h3><p>The current state of this lock is in the published state under the <code>child_lock</code> property (value is <code>LOCK</code> or <code>UNLOCK</code>). To control this lock publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;child_lock&quot;: &quot;LOCK&quot;}</code> or <code>{&quot;child_lock&quot;: &quot;UNLOCK&quot;}</code>. It&#39;s not possible to read (<code>/get</code>) this value.</p><h3 id="mode-enum" tabindex="-1"><a class="header-anchor" href="#mode-enum"><span>Mode (enum)</span></a></h3><p>Feeding mode. Value can be found in the published state on the <code>mode</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;mode&quot;: NEW_VALUE}</code>. The possible values are: <code>schedule</code>, <code>manual</code>.</p><h3 id="serving-size-numeric" tabindex="-1"><a class="header-anchor" href="#serving-size-numeric"><span>Serving size (numeric)</span></a></h3><p>One serving size. Value can be found in the published state on the <code>serving_size</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;serving_size&quot;: NEW_VALUE}</code>. The minimal value is <code>1</code> and the maximum value is <code>10</code>. The unit of this value is <code>portion</code>.</p><h3 id="portion-weight-numeric" tabindex="-1"><a class="header-anchor" href="#portion-weight-numeric"><span>Portion weight (numeric)</span></a></h3><p>Portion weight. Value can be found in the published state on the <code>portion_weight</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;portion_weight&quot;: NEW_VALUE}</code>. The minimal value is <code>1</code> and the maximum value is <code>20</code>. The unit of this value is <code>g</code>.</p><h3 id="linkquality-numeric" tabindex="-1"><a class="header-anchor" href="#linkquality-numeric"><span>Linkquality (numeric)</span></a></h3><p>Link quality (signal strength). Value can be found in the published state on the <code>linkquality</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>255</code>. The unit of this value is <code>lqi</code>.</p>',28),g={},m=(0,i(22652).A)(g,[["render",function(e,o){const i=(0,t.g2)("RouteLink");return(0,t.uX)(),(0,t.CE)("div",null,[d,(0,t.Lk)("table",null,[a,(0,t.Lk)("tbody",null,[n,(0,t.Lk)("tr",null,[s,(0,t.Lk)("td",null,[(0,t.bF)(i,{to:"/supported-devices/#v=Aqara"},{default:(0,t.k6)((()=>[(0,t.eW)("Aqara")])),_:1})])]),l,c,r,u])]),h,(0,t.Lk)("p",null,[(0,t.eW)("This device supports OTA updates, for more information see "),(0,t.bF)(i,{to:"/guide/usage/ota_updates.html"},{default:(0,t.k6)((()=>[(0,t.eW)("OTA updates")])),_:1}),(0,t.eW)(".")]),p])}]]),b=JSON.parse('{"path":"/devices/ZNCWWSQ01LM.html","title":"Aqara ZNCWWSQ01LM control via MQTT","lang":"en-US","frontmatter":{"pageClass":"device-page","title":"Aqara ZNCWWSQ01LM control via MQTT","description":"Integrate your Aqara ZNCWWSQ01LM via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor\'s bridge or gateway.","addedAt":"2022-12-01T15:07:19.000Z"},"headers":[{"level":2,"title":"Notes","slug":"notes","link":"#notes","children":[{"level":3,"title":"Pairing","slug":"pairing","link":"#pairing","children":[]}]},{"level":2,"title":"OTA updates","slug":"ota-updates","link":"#ota-updates","children":[]},{"level":2,"title":"Exposes","slug":"exposes","link":"#exposes","children":[{"level":3,"title":"Feed (enum)","slug":"feed-enum","link":"#feed-enum","children":[]},{"level":3,"title":"Feeding source (enum)","slug":"feeding-source-enum","link":"#feeding-source-enum","children":[]},{"level":3,"title":"Feeding size (numeric)","slug":"feeding-size-numeric","link":"#feeding-size-numeric","children":[]},{"level":3,"title":"Portions per day (numeric)","slug":"portions-per-day-numeric","link":"#portions-per-day-numeric","children":[]},{"level":3,"title":"Weight per day (numeric)","slug":"weight-per-day-numeric","link":"#weight-per-day-numeric","children":[]},{"level":3,"title":"Error (binary)","slug":"error-binary","link":"#error-binary","children":[]},{"level":3,"title":"Schedule (list)","slug":"schedule-list","link":"#schedule-list","children":[]},{"level":3,"title":"Led indicator (binary)","slug":"led-indicator-binary","link":"#led-indicator-binary","children":[]},{"level":3,"title":"Child lock (lock)","slug":"child-lock-lock","link":"#child-lock-lock","children":[]},{"level":3,"title":"Mode (enum)","slug":"mode-enum","link":"#mode-enum","children":[]},{"level":3,"title":"Serving size (numeric)","slug":"serving-size-numeric","link":"#serving-size-numeric","children":[]},{"level":3,"title":"Portion weight (numeric)","slug":"portion-weight-numeric","link":"#portion-weight-numeric","children":[]},{"level":3,"title":"Linkquality (numeric)","slug":"linkquality-numeric","link":"#linkquality-numeric","children":[]}]}],"git":{"updatedTime":1725034041000},"filePathRelative":"devices/ZNCWWSQ01LM.md"}')}}]);