"use strict";(self.webpackChunkvp=self.webpackChunkvp||[]).push([[4079],{33811:(e,t,o)=>{o.r(t),o.d(t,{comp:()=>k,data:()=>v});var a=o(86904);const i=(0,a.Lk)("h1",{id:"ctm-lyng-ax-valve-controller",tabindex:"-1"},[(0,a.Lk)("a",{class:"header-anchor",href:"#ctm-lyng-ax-valve-controller"},[(0,a.Lk)("span",null,"CTM Lyng AX_Valve_Controller")])],-1),l=(0,a.Lk)("thead",null,[(0,a.Lk)("tr",null,[(0,a.Lk)("th"),(0,a.Lk)("th")])],-1),n=(0,a.Lk)("tr",null,[(0,a.Lk)("td",null,"Model"),(0,a.Lk)("td",null,"AX_Valve_Controller")],-1),s=(0,a.Lk)("td",null,"Vendor",-1),d=(0,a.Lk)("tr",null,[(0,a.Lk)("td",null,"Description"),(0,a.Lk)("td",null,"AX Valve Controller, water shutoff valve controller")],-1),r=(0,a.Lk)("tr",null,[(0,a.Lk)("td",null,"Exposes"),(0,a.Lk)("td",null,"switch (state), water_leak, active_water_leak, linkquality")],-1),c=(0,a.Lk)("tr",null,[(0,a.Lk)("td",null,"Picture"),(0,a.Lk)("td",null,[(0,a.Lk)("img",{src:"https://www.zigbee2mqtt.io/images/devices/AX_Valve_Controller.png",alt:"CTM Lyng AX_Valve_Controller"})])],-1),u=(0,a.Lk)("h2",{id:"options",tabindex:"-1"},[(0,a.Lk)("a",{class:"header-anchor",href:"#options"},[(0,a.Lk)("span",null,"Options")])],-1),h=(0,a.Fv)('<ul><li><code>state_action</code>: State actions will also be published as &#39;action&#39; when true (default false). The value must be <code>true</code> or <code>false</code></li></ul><h2 id="exposes" tabindex="-1"><a class="header-anchor" href="#exposes"><span>Exposes</span></a></h2><h3 id="switch" tabindex="-1"><a class="header-anchor" href="#switch"><span>Switch</span></a></h3><p>The current state of this switch is in the published state under the <code>state</code> property (value is <code>ON</code> or <code>OFF</code>). To control this switch publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;state&quot;: &quot;ON&quot;}</code>, <code>{&quot;state&quot;: &quot;OFF&quot;}</code> or <code>{&quot;state&quot;: &quot;TOGGLE&quot;}</code>. To read the current state of this switch publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;state&quot;: &quot;&quot;}</code>.</p><h4 id="on-with-timed-off" tabindex="-1"><a class="header-anchor" href="#on-with-timed-off"><span>On with timed off</span></a></h4><p>When setting the state to ON, it might be possible to specify an automatic shutoff after a certain amount of time. To do this add an additional property <code>on_time</code> to the payload which is the time in seconds the state should remain on. Additionally an <code>off_wait_time</code> property can be added to the payload to specify the cooldown time in seconds when the switch will not answer to other on with timed off commands. Support depends on the switch firmware. Some devices might require both <code>on_time</code> and <code>off_wait_time</code> to work Examples : <code>{&quot;state&quot; : &quot;ON&quot;, &quot;on_time&quot;: 300}</code>, <code>{&quot;state&quot; : &quot;ON&quot;, &quot;on_time&quot;: 300, &quot;off_wait_time&quot;: 120}</code>.</p><h3 id="water-leak-binary" tabindex="-1"><a class="header-anchor" href="#water-leak-binary"><span>Water leak (binary)</span></a></h3><p>Indicates whether the device detected a water leak. Value can be found in the published state on the <code>water_leak</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. If value equals <code>true</code> water leak is ON, if <code>false</code> OFF.</p><h3 id="active-water-leak-binary" tabindex="-1"><a class="header-anchor" href="#active-water-leak-binary"><span>Active water leak (binary)</span></a></h3><p>Indicates whether there is an active water leak. Value can be found in the published state on the <code>active_water_leak</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. If value equals <code>true</code> active water leak is ON, if <code>false</code> OFF.</p><h3 id="linkquality-numeric" tabindex="-1"><a class="header-anchor" href="#linkquality-numeric"><span>Linkquality (numeric)</span></a></h3><p>Link quality (signal strength). Value can be found in the published state on the <code>linkquality</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>255</code>. The unit of this value is <code>lqi</code>.</p>',12),p={},k=(0,o(22652).A)(p,[["render",function(e,t){const o=(0,a.g2)("RouteLink");return(0,a.uX)(),(0,a.CE)("div",null,[i,(0,a.Lk)("table",null,[l,(0,a.Lk)("tbody",null,[n,(0,a.Lk)("tr",null,[s,(0,a.Lk)("td",null,[(0,a.bF)(o,{to:"/supported-devices/#v=CTM%20Lyng"},{default:(0,a.k6)((()=>[(0,a.eW)("CTM Lyng")])),_:1})])]),d,r,c])]),u,(0,a.Lk)("p",null,[(0,a.Lk)("em",null,[(0,a.bF)(o,{to:"/guide/configuration/devices-groups.html#specific-device-options"},{default:(0,a.k6)((()=>[(0,a.eW)("How to use device type specific configuration")])),_:1})])]),h])}]]),v=JSON.parse('{"path":"/devices/AX_Valve_Controller.html","title":"CTM Lyng AX_Valve_Controller control via MQTT","lang":"en-US","frontmatter":{"pageClass":"device-page","title":"CTM Lyng AX_Valve_Controller control via MQTT","description":"Integrate your CTM Lyng AX_Valve_Controller via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor\'s bridge or gateway.","addedAt":"2022-08-01T15:06:58.000Z"},"headers":[{"level":2,"title":"Options","slug":"options","link":"#options","children":[]},{"level":2,"title":"Exposes","slug":"exposes","link":"#exposes","children":[{"level":3,"title":"Switch","slug":"switch","link":"#switch","children":[]},{"level":3,"title":"Water leak (binary)","slug":"water-leak-binary","link":"#water-leak-binary","children":[]},{"level":3,"title":"Active water leak (binary)","slug":"active-water-leak-binary","link":"#active-water-leak-binary","children":[]},{"level":3,"title":"Linkquality (numeric)","slug":"linkquality-numeric","link":"#linkquality-numeric","children":[]}]}],"git":{"updatedTime":1725034041000},"filePathRelative":"devices/AX_Valve_Controller.md"}')}}]);