"use strict";(self.webpackChunkvp=self.webpackChunkvp||[]).push([[5085],{80862:(e,t,a)=>{a.r(t),a.d(t,{comp:()=>f,data:()=>v});var i=a(86904);const o=(0,i.Lk)("h1",{id:"datek-hse2905e",tabindex:"-1"},[(0,i.Lk)("a",{class:"header-anchor",href:"#datek-hse2905e"},[(0,i.Lk)("span",null,"Datek HSE2905E")])],-1),n=(0,i.Lk)("thead",null,[(0,i.Lk)("tr",null,[(0,i.Lk)("th"),(0,i.Lk)("th")])],-1),r=(0,i.Lk)("tr",null,[(0,i.Lk)("td",null,"Model"),(0,i.Lk)("td",null,"HSE2905E")],-1),c=(0,i.Lk)("td",null,"Vendor",-1),s=(0,i.Lk)("tr",null,[(0,i.Lk)("td",null,"Description"),(0,i.Lk)("td",null,"Datek Eva AMS HAN power-meter sensor")],-1),l=(0,i.Lk)("tr",null,[(0,i.Lk)("td",null,"Exposes"),(0,i.Lk)("td",null,"power, energy, current, voltage, current_phase_b, voltage_phase_b, current_phase_c, voltage_phase_c, temperature, linkquality")],-1),u=(0,i.Lk)("tr",null,[(0,i.Lk)("td",null,"Picture"),(0,i.Lk)("td",null,[(0,i.Lk)("img",{src:"https://www.zigbee2mqtt.io/images/devices/HSE2905E.png",alt:"Datek HSE2905E"})])],-1),d=(0,i.Fv)('<h2 id="notes" tabindex="-1"><a class="header-anchor" href="#notes"><span>Notes</span></a></h2><h3 id="pairing" tabindex="-1"><a class="header-anchor" href="#pairing"><span>Pairing</span></a></h3><p>Factory reset by removing the plastic cover and press &amp; hold the power button for 10 seconds. The LED is then starting to blink Red/Blue to indicate in pairing mode.</p><h3 id="should-automatically-support-only-tested-kamstrup" tabindex="-1"><a class="header-anchor" href="#should-automatically-support-only-tested-kamstrup"><span>Should automatically support (only tested Kamstrup)</span></a></h3><ul><li>Aidon</li><li>Kaifa</li><li>Kamstrup</li></ul><h3 id="configuring-interface-mode" tabindex="-1"><a class="header-anchor" href="#configuring-interface-mode"><span>Configuring interface mode</span></a></h3><p>There should be no need to configure into any interface mode as the Eva HAN should autodetect the correct mode.</p><h3 id="not-getting-measurements" tabindex="-1"><a class="header-anchor" href="#not-getting-measurements"><span>Not getting measurements</span></a></h3><p>In case you are not getting any measurements, it could be that your firmware is too old. If firmware are &lt; 0.4 either update fw via Eva Smart HUB or ask Datek for a replacement with min fw 0.4. Tested on 0.4.</p><h3 id="where-do-i-find-this-product" tabindex="-1"><a class="header-anchor" href="#where-do-i-find-this-product"><span>Where do I find this product</span></a></h3><p><a href="https://shop.evasmart.no/produkt/smarthus/maleravleser#product-tabs1" target="_blank" rel="noopener noreferrer">Product page</a></p><h2 id="ota-updates" tabindex="-1"><a class="header-anchor" href="#ota-updates"><span>OTA updates</span></a></h2>',12),p=(0,i.Lk)("h2",{id:"options",tabindex:"-1"},[(0,i.Lk)("a",{class:"header-anchor",href:"#options"},[(0,i.Lk)("span",null,"Options")])],-1),h=(0,i.Fv)('<ul><li><p><code>power_calibration</code>: Calibrates the power value (percentual offset), takes into effect on next report of device. The value must be a number.</p></li><li><p><code>power_precision</code>: Number of digits after decimal point for power, takes into effect on next report of device. This option can only decrease the precision, not increase it. The value must be a number with a minimum value of <code>0</code> and with a with a maximum value of <code>3</code></p></li><li><p><code>energy_calibration</code>: Calibrates the energy value (percentual offset), takes into effect on next report of device. The value must be a number.</p></li><li><p><code>energy_precision</code>: Number of digits after decimal point for energy, takes into effect on next report of device. This option can only decrease the precision, not increase it. The value must be a number with a minimum value of <code>0</code> and with a with a maximum value of <code>3</code></p></li><li><p><code>current_calibration</code>: Calibrates the current value (percentual offset), takes into effect on next report of device. The value must be a number.</p></li><li><p><code>current_precision</code>: Number of digits after decimal point for current, takes into effect on next report of device. This option can only decrease the precision, not increase it. The value must be a number with a minimum value of <code>0</code> and with a with a maximum value of <code>3</code></p></li><li><p><code>voltage_calibration</code>: Calibrates the voltage value (percentual offset), takes into effect on next report of device. The value must be a number.</p></li><li><p><code>voltage_precision</code>: Number of digits after decimal point for voltage, takes into effect on next report of device. This option can only decrease the precision, not increase it. The value must be a number with a minimum value of <code>0</code> and with a with a maximum value of <code>3</code></p></li><li><p><code>current_phase_b_calibration</code>: Calibrates the current_phase_b value (percentual offset), takes into effect on next report of device. The value must be a number.</p></li><li><p><code>current_phase_b_precision</code>: Number of digits after decimal point for current_phase_b, takes into effect on next report of device. This option can only decrease the precision, not increase it. The value must be a number with a minimum value of <code>0</code> and with a with a maximum value of <code>3</code></p></li><li><p><code>voltage_phase_b_calibration</code>: Calibrates the voltage_phase_b value (percentual offset), takes into effect on next report of device. The value must be a number.</p></li><li><p><code>voltage_phase_b_precision</code>: Number of digits after decimal point for voltage_phase_b, takes into effect on next report of device. This option can only decrease the precision, not increase it. The value must be a number with a minimum value of <code>0</code> and with a with a maximum value of <code>3</code></p></li><li><p><code>current_phase_c_calibration</code>: Calibrates the current_phase_c value (percentual offset), takes into effect on next report of device. The value must be a number.</p></li><li><p><code>current_phase_c_precision</code>: Number of digits after decimal point for current_phase_c, takes into effect on next report of device. This option can only decrease the precision, not increase it. The value must be a number with a minimum value of <code>0</code> and with a with a maximum value of <code>3</code></p></li><li><p><code>voltage_phase_c_calibration</code>: Calibrates the voltage_phase_c value (percentual offset), takes into effect on next report of device. The value must be a number.</p></li><li><p><code>voltage_phase_c_precision</code>: Number of digits after decimal point for voltage_phase_c, takes into effect on next report of device. This option can only decrease the precision, not increase it. The value must be a number with a minimum value of <code>0</code> and with a with a maximum value of <code>3</code></p></li><li><p><code>temperature_calibration</code>: Calibrates the temperature value (absolute offset), takes into effect on next report of device. The value must be a number.</p></li><li><p><code>temperature_precision</code>: Number of digits after decimal point for temperature, takes into effect on next report of device. This option can only decrease the precision, not increase it. The value must be a number with a minimum value of <code>0</code> and with a with a maximum value of <code>3</code></p></li></ul><h2 id="exposes" tabindex="-1"><a class="header-anchor" href="#exposes"><span>Exposes</span></a></h2><h3 id="power-numeric" tabindex="-1"><a class="header-anchor" href="#power-numeric"><span>Power (numeric)</span></a></h3><p>Instantaneous measured power. Value can be found in the published state on the <code>power</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The unit of this value is <code>W</code>.</p><h3 id="energy-numeric" tabindex="-1"><a class="header-anchor" href="#energy-numeric"><span>Energy (numeric)</span></a></h3><p>Sum of consumed energy. Value can be found in the published state on the <code>energy</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The unit of this value is <code>kWh</code>.</p><h3 id="current-numeric" tabindex="-1"><a class="header-anchor" href="#current-numeric"><span>Current (numeric)</span></a></h3><p>Instantaneous measured electrical current. Value can be found in the published state on the <code>current</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The unit of this value is <code>A</code>.</p><h3 id="voltage-numeric" tabindex="-1"><a class="header-anchor" href="#voltage-numeric"><span>Voltage (numeric)</span></a></h3><p>Measured electrical potential value. Value can be found in the published state on the <code>voltage</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The unit of this value is <code>V</code>.</p><h3 id="current-phase-b-numeric" tabindex="-1"><a class="header-anchor" href="#current-phase-b-numeric"><span>Current phase B (numeric)</span></a></h3><p>Instantaneous measured electrical current on phase B. Value can be found in the published state on the <code>current_phase_b</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The unit of this value is <code>A</code>.</p><h3 id="voltage-phase-b-numeric" tabindex="-1"><a class="header-anchor" href="#voltage-phase-b-numeric"><span>Voltage phase B (numeric)</span></a></h3><p>Measured electrical potential value on phase B. Value can be found in the published state on the <code>voltage_phase_b</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The unit of this value is <code>V</code>.</p><h3 id="current-phase-c-numeric" tabindex="-1"><a class="header-anchor" href="#current-phase-c-numeric"><span>Current phase C (numeric)</span></a></h3><p>Instantaneous measured electrical current on phase C. Value can be found in the published state on the <code>current_phase_c</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The unit of this value is <code>A</code>.</p><h3 id="voltage-phase-c-numeric" tabindex="-1"><a class="header-anchor" href="#voltage-phase-c-numeric"><span>Voltage phase C (numeric)</span></a></h3><p>Measured electrical potential value on phase C. Value can be found in the published state on the <code>voltage_phase_c</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The unit of this value is <code>V</code>.</p><h3 id="temperature-numeric" tabindex="-1"><a class="header-anchor" href="#temperature-numeric"><span>Temperature (numeric)</span></a></h3><p>Measured temperature value. Value can be found in the published state on the <code>temperature</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The unit of this value is <code>°C</code>.</p><h3 id="linkquality-numeric" tabindex="-1"><a class="header-anchor" href="#linkquality-numeric"><span>Linkquality (numeric)</span></a></h3><p>Link quality (signal strength). Value can be found in the published state on the <code>linkquality</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>255</code>. The unit of this value is <code>lqi</code>.</p>',22),m={},f=(0,a(22652).A)(m,[["render",function(e,t){const a=(0,i.g2)("RouteLink");return(0,i.uX)(),(0,i.CE)("div",null,[o,(0,i.Lk)("table",null,[n,(0,i.Lk)("tbody",null,[r,(0,i.Lk)("tr",null,[c,(0,i.Lk)("td",null,[(0,i.bF)(a,{to:"/supported-devices/#v=Datek"},{default:(0,i.k6)((()=>[(0,i.eW)("Datek")])),_:1})])]),s,l,u])]),d,(0,i.Lk)("p",null,[(0,i.eW)("This device supports OTA updates, for more information see "),(0,i.bF)(a,{to:"/guide/usage/ota_updates.html"},{default:(0,i.k6)((()=>[(0,i.eW)("OTA updates")])),_:1}),(0,i.eW)(".")]),p,(0,i.Lk)("p",null,[(0,i.Lk)("em",null,[(0,i.bF)(a,{to:"/guide/configuration/devices-groups.html#specific-device-options"},{default:(0,i.k6)((()=>[(0,i.eW)("How to use device type specific configuration")])),_:1})])]),h])}]]),v=JSON.parse('{"path":"/devices/HSE2905E.html","title":"Datek HSE2905E control via MQTT","lang":"en-US","frontmatter":{"pageClass":"device-page","title":"Datek HSE2905E control via MQTT","description":"Integrate your Datek HSE2905E via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor\'s bridge or gateway.","addedAt":"2021-03-31T17:47:18.000Z"},"headers":[{"level":2,"title":"Notes","slug":"notes","link":"#notes","children":[{"level":3,"title":"Pairing","slug":"pairing","link":"#pairing","children":[]},{"level":3,"title":"Should automatically support (only tested Kamstrup)","slug":"should-automatically-support-only-tested-kamstrup","link":"#should-automatically-support-only-tested-kamstrup","children":[]},{"level":3,"title":"Configuring interface mode","slug":"configuring-interface-mode","link":"#configuring-interface-mode","children":[]},{"level":3,"title":"Not getting measurements","slug":"not-getting-measurements","link":"#not-getting-measurements","children":[]},{"level":3,"title":"Where do I find this product","slug":"where-do-i-find-this-product","link":"#where-do-i-find-this-product","children":[]}]},{"level":2,"title":"OTA updates","slug":"ota-updates","link":"#ota-updates","children":[]},{"level":2,"title":"Options","slug":"options","link":"#options","children":[]},{"level":2,"title":"Exposes","slug":"exposes","link":"#exposes","children":[{"level":3,"title":"Power (numeric)","slug":"power-numeric","link":"#power-numeric","children":[]},{"level":3,"title":"Energy (numeric)","slug":"energy-numeric","link":"#energy-numeric","children":[]},{"level":3,"title":"Current (numeric)","slug":"current-numeric","link":"#current-numeric","children":[]},{"level":3,"title":"Voltage (numeric)","slug":"voltage-numeric","link":"#voltage-numeric","children":[]},{"level":3,"title":"Current phase B (numeric)","slug":"current-phase-b-numeric","link":"#current-phase-b-numeric","children":[]},{"level":3,"title":"Voltage phase B (numeric)","slug":"voltage-phase-b-numeric","link":"#voltage-phase-b-numeric","children":[]},{"level":3,"title":"Current phase C (numeric)","slug":"current-phase-c-numeric","link":"#current-phase-c-numeric","children":[]},{"level":3,"title":"Voltage phase C (numeric)","slug":"voltage-phase-c-numeric","link":"#voltage-phase-c-numeric","children":[]},{"level":3,"title":"Temperature (numeric)","slug":"temperature-numeric","link":"#temperature-numeric","children":[]},{"level":3,"title":"Linkquality (numeric)","slug":"linkquality-numeric","link":"#linkquality-numeric","children":[]}]}],"git":{"updatedTime":1725034041000},"filePathRelative":"devices/HSE2905E.md"}')}}]);