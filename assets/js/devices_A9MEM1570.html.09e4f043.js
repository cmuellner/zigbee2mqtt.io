"use strict";(self.webpackChunkvp=self.webpackChunkvp||[]).push([[99144],{79491:(e,a,t)=>{t.r(a),t.d(a,{comp:()=>m,data:()=>b});var o=t(86904);const n=(0,o.Lk)("h1",{id:"schneider-electric-a9mem1570",tabindex:"-1"},[(0,o.Lk)("a",{class:"header-anchor",href:"#schneider-electric-a9mem1570"},[(0,o.Lk)("span",null,"Schneider Electric A9MEM1570")])],-1),i=(0,o.Lk)("thead",null,[(0,o.Lk)("tr",null,[(0,o.Lk)("th"),(0,o.Lk)("th")])],-1),r=(0,o.Lk)("tr",null,[(0,o.Lk)("td",null,"Model"),(0,o.Lk)("td",null,"A9MEM1570")],-1),c=(0,o.Lk)("td",null,"Vendor",-1),s=(0,o.Lk)("tr",null,[(0,o.Lk)("td",null,"Description"),(0,o.Lk)("td",null,"PowerTag power sensor")],-1),l=(0,o.Lk)("tr",null,[(0,o.Lk)("td",null,"Exposes"),(0,o.Lk)("td",null,"power, power_apparent, power_phase_a, power_phase_b, power_phase_c, power_factor, energy, energy_phase_a, energy_phase_b, energy_phase_c, ac_frequency, voltage_phase_a, voltage_phase_b, voltage_phase_c, voltage_phase_ab, voltage_phase_bc, voltage_phase_ca, current_phase_a, current_phase_b, current_phase_c, linkquality")],-1),p=(0,o.Lk)("tr",null,[(0,o.Lk)("td",null,"Picture"),(0,o.Lk)("td",null,[(0,o.Lk)("img",{src:"https://www.zigbee2mqtt.io/images/devices/A9MEM1570.png",alt:"Schneider Electric A9MEM1570"})])],-1),u=(0,o.Lk)("h2",{id:"options",tabindex:"-1"},[(0,o.Lk)("a",{class:"header-anchor",href:"#options"},[(0,o.Lk)("span",null,"Options")])],-1),h=(0,o.Fv)('<ul><li><p><code>power_calibration</code>: Calibrates the power value (percentual offset), takes into effect on next report of device. The value must be a number.</p></li><li><p><code>power_precision</code>: Number of digits after decimal point for power, takes into effect on next report of device. This option can only decrease the precision, not increase it. The value must be a number with a minimum value of <code>0</code> and with a with a maximum value of <code>3</code></p></li><li><p><code>power_phase_b_calibration</code>: Calibrates the power_phase_b value (percentual offset), takes into effect on next report of device. The value must be a number.</p></li><li><p><code>power_phase_b_precision</code>: Number of digits after decimal point for power_phase_b, takes into effect on next report of device. This option can only decrease the precision, not increase it. The value must be a number with a minimum value of <code>0</code> and with a with a maximum value of <code>3</code></p></li><li><p><code>power_phase_c_calibration</code>: Calibrates the power_phase_c value (percentual offset), takes into effect on next report of device. The value must be a number.</p></li><li><p><code>power_phase_c_precision</code>: Number of digits after decimal point for power_phase_c, takes into effect on next report of device. This option can only decrease the precision, not increase it. The value must be a number with a minimum value of <code>0</code> and with a with a maximum value of <code>3</code></p></li><li><p><code>energy_calibration</code>: Calibrates the energy value (percentual offset), takes into effect on next report of device. The value must be a number.</p></li><li><p><code>energy_precision</code>: Number of digits after decimal point for energy, takes into effect on next report of device. This option can only decrease the precision, not increase it. The value must be a number with a minimum value of <code>0</code> and with a with a maximum value of <code>3</code></p></li><li><p><code>voltage_phase_b_calibration</code>: Calibrates the voltage_phase_b value (percentual offset), takes into effect on next report of device. The value must be a number.</p></li><li><p><code>voltage_phase_b_precision</code>: Number of digits after decimal point for voltage_phase_b, takes into effect on next report of device. This option can only decrease the precision, not increase it. The value must be a number with a minimum value of <code>0</code> and with a with a maximum value of <code>3</code></p></li><li><p><code>voltage_phase_c_calibration</code>: Calibrates the voltage_phase_c value (percentual offset), takes into effect on next report of device. The value must be a number.</p></li><li><p><code>voltage_phase_c_precision</code>: Number of digits after decimal point for voltage_phase_c, takes into effect on next report of device. This option can only decrease the precision, not increase it. The value must be a number with a minimum value of <code>0</code> and with a with a maximum value of <code>3</code></p></li><li><p><code>current_phase_b_calibration</code>: Calibrates the current_phase_b value (percentual offset), takes into effect on next report of device. The value must be a number.</p></li><li><p><code>current_phase_b_precision</code>: Number of digits after decimal point for current_phase_b, takes into effect on next report of device. This option can only decrease the precision, not increase it. The value must be a number with a minimum value of <code>0</code> and with a with a maximum value of <code>3</code></p></li><li><p><code>current_phase_c_calibration</code>: Calibrates the current_phase_c value (percentual offset), takes into effect on next report of device. The value must be a number.</p></li><li><p><code>current_phase_c_precision</code>: Number of digits after decimal point for current_phase_c, takes into effect on next report of device. This option can only decrease the precision, not increase it. The value must be a number with a minimum value of <code>0</code> and with a with a maximum value of <code>3</code></p></li></ul><h2 id="exposes" tabindex="-1"><a class="header-anchor" href="#exposes"><span>Exposes</span></a></h2><h3 id="power-numeric" tabindex="-1"><a class="header-anchor" href="#power-numeric"><span>Power (numeric)</span></a></h3><p>Instantaneous measured power. Value can be found in the published state on the <code>power</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The unit of this value is <code>W</code>.</p><h3 id="power-apparent-numeric" tabindex="-1"><a class="header-anchor" href="#power-apparent-numeric"><span>Power apparent (numeric)</span></a></h3><p>Instantaneous measured apparent power. Value can be found in the published state on the <code>power_apparent</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The unit of this value is <code>VA</code>.</p><h3 id="power-phase-a-numeric" tabindex="-1"><a class="header-anchor" href="#power-phase-a-numeric"><span>Power phase a (numeric)</span></a></h3><p>Instantaneous measured power on phase A. Value can be found in the published state on the <code>power_phase_a</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The unit of this value is <code>W</code>.</p><h3 id="power-phase-b-numeric" tabindex="-1"><a class="header-anchor" href="#power-phase-b-numeric"><span>Power phase b (numeric)</span></a></h3><p>Instantaneous measured power on phase B. Value can be found in the published state on the <code>power_phase_b</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The unit of this value is <code>W</code>.</p><h3 id="power-phase-c-numeric" tabindex="-1"><a class="header-anchor" href="#power-phase-c-numeric"><span>Power phase c (numeric)</span></a></h3><p>Instantaneous measured power on phase C. Value can be found in the published state on the <code>power_phase_c</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The unit of this value is <code>W</code>.</p><h3 id="power-factor-numeric" tabindex="-1"><a class="header-anchor" href="#power-factor-numeric"><span>Power factor (numeric)</span></a></h3><p>Instantaneous measured power factor. Value can be found in the published state on the <code>power_factor</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value.</p><h3 id="energy-numeric" tabindex="-1"><a class="header-anchor" href="#energy-numeric"><span>Energy (numeric)</span></a></h3><p>Sum of consumed energy. Value can be found in the published state on the <code>energy</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The unit of this value is <code>kWh</code>.</p><h3 id="energy-phase-a-numeric" tabindex="-1"><a class="header-anchor" href="#energy-phase-a-numeric"><span>Energy phase a (numeric)</span></a></h3><p>Sum of consumed energy on phase A. Value can be found in the published state on the <code>energy_phase_a</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The unit of this value is <code>kWh</code>.</p><h3 id="energy-phase-b-numeric" tabindex="-1"><a class="header-anchor" href="#energy-phase-b-numeric"><span>Energy phase b (numeric)</span></a></h3><p>Sum of consumed energy on phase B. Value can be found in the published state on the <code>energy_phase_b</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The unit of this value is <code>kWh</code>.</p><h3 id="energy-phase-c-numeric" tabindex="-1"><a class="header-anchor" href="#energy-phase-c-numeric"><span>Energy phase c (numeric)</span></a></h3><p>Sum of consumed energy on phase C. Value can be found in the published state on the <code>energy_phase_c</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The unit of this value is <code>kWh</code>.</p><h3 id="ac-frequency-numeric" tabindex="-1"><a class="header-anchor" href="#ac-frequency-numeric"><span>AC frequency (numeric)</span></a></h3><p>Measured electrical AC frequency. Value can be found in the published state on the <code>ac_frequency</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The unit of this value is <code>Hz</code>.</p><h3 id="voltage-phase-a-numeric" tabindex="-1"><a class="header-anchor" href="#voltage-phase-a-numeric"><span>Voltage phase a (numeric)</span></a></h3><p>Measured electrical potential value on phase A. Value can be found in the published state on the <code>voltage_phase_a</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The unit of this value is <code>V</code>.</p><h3 id="voltage-phase-b-numeric" tabindex="-1"><a class="header-anchor" href="#voltage-phase-b-numeric"><span>Voltage phase b (numeric)</span></a></h3><p>Measured electrical potential value on phase B. Value can be found in the published state on the <code>voltage_phase_b</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The unit of this value is <code>V</code>.</p><h3 id="voltage-phase-c-numeric" tabindex="-1"><a class="header-anchor" href="#voltage-phase-c-numeric"><span>Voltage phase c (numeric)</span></a></h3><p>Measured electrical potential value on phase C. Value can be found in the published state on the <code>voltage_phase_c</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The unit of this value is <code>V</code>.</p><h3 id="voltage-phase-ab-numeric" tabindex="-1"><a class="header-anchor" href="#voltage-phase-ab-numeric"><span>Voltage phase ab (numeric)</span></a></h3><p>Measured electrical potential value between phase A and B. Value can be found in the published state on the <code>voltage_phase_ab</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The unit of this value is <code>V</code>.</p><h3 id="voltage-phase-bc-numeric" tabindex="-1"><a class="header-anchor" href="#voltage-phase-bc-numeric"><span>Voltage phase bc (numeric)</span></a></h3><p>Measured electrical potential value between phase B and C. Value can be found in the published state on the <code>voltage_phase_bc</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The unit of this value is <code>V</code>.</p><h3 id="voltage-phase-ca-numeric" tabindex="-1"><a class="header-anchor" href="#voltage-phase-ca-numeric"><span>Voltage phase ca (numeric)</span></a></h3><p>Measured electrical potential value between phase C and A. Value can be found in the published state on the <code>voltage_phase_ca</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The unit of this value is <code>V</code>.</p><h3 id="current-phase-a-numeric" tabindex="-1"><a class="header-anchor" href="#current-phase-a-numeric"><span>Current phase a (numeric)</span></a></h3><p>Instantaneous measured electrical current on phase A. Value can be found in the published state on the <code>current_phase_a</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The unit of this value is <code>A</code>.</p><h3 id="current-phase-b-numeric" tabindex="-1"><a class="header-anchor" href="#current-phase-b-numeric"><span>Current phase b (numeric)</span></a></h3><p>Instantaneous measured electrical current on phase B. Value can be found in the published state on the <code>current_phase_b</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The unit of this value is <code>A</code>.</p><h3 id="current-phase-c-numeric" tabindex="-1"><a class="header-anchor" href="#current-phase-c-numeric"><span>Current phase c (numeric)</span></a></h3><p>Instantaneous measured electrical current on phase C. Value can be found in the published state on the <code>current_phase_c</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The unit of this value is <code>A</code>.</p><h3 id="linkquality-numeric" tabindex="-1"><a class="header-anchor" href="#linkquality-numeric"><span>Linkquality (numeric)</span></a></h3><p>Link quality (signal strength). Value can be found in the published state on the <code>linkquality</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>255</code>. The unit of this value is <code>lqi</code>.</p>',44),d={},m=(0,t(22652).A)(d,[["render",function(e,a){const t=(0,o.g2)("RouteLink");return(0,o.uX)(),(0,o.CE)("div",null,[n,(0,o.Lk)("table",null,[i,(0,o.Lk)("tbody",null,[r,(0,o.Lk)("tr",null,[c,(0,o.Lk)("td",null,[(0,o.bF)(t,{to:"/supported-devices/#v=Schneider%20Electric"},{default:(0,o.k6)((()=>[(0,o.eW)("Schneider Electric")])),_:1})])]),s,l,p])]),u,(0,o.Lk)("p",null,[(0,o.Lk)("em",null,[(0,o.bF)(t,{to:"/guide/configuration/devices-groups.html#specific-device-options"},{default:(0,o.k6)((()=>[(0,o.eW)("How to use device type specific configuration")])),_:1})])]),h])}]]),b=JSON.parse('{"path":"/devices/A9MEM1570.html","title":"Schneider Electric A9MEM1570 control via MQTT","lang":"en-US","frontmatter":{"pageClass":"device-page","title":"Schneider Electric A9MEM1570 control via MQTT","description":"Integrate your Schneider Electric A9MEM1570 via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor\'s bridge or gateway.","addedAt":"2022-04-30T08:00:58.000Z"},"headers":[{"level":2,"title":"Options","slug":"options","link":"#options","children":[]},{"level":2,"title":"Exposes","slug":"exposes","link":"#exposes","children":[{"level":3,"title":"Power (numeric)","slug":"power-numeric","link":"#power-numeric","children":[]},{"level":3,"title":"Power apparent (numeric)","slug":"power-apparent-numeric","link":"#power-apparent-numeric","children":[]},{"level":3,"title":"Power phase a (numeric)","slug":"power-phase-a-numeric","link":"#power-phase-a-numeric","children":[]},{"level":3,"title":"Power phase b (numeric)","slug":"power-phase-b-numeric","link":"#power-phase-b-numeric","children":[]},{"level":3,"title":"Power phase c (numeric)","slug":"power-phase-c-numeric","link":"#power-phase-c-numeric","children":[]},{"level":3,"title":"Power factor (numeric)","slug":"power-factor-numeric","link":"#power-factor-numeric","children":[]},{"level":3,"title":"Energy (numeric)","slug":"energy-numeric","link":"#energy-numeric","children":[]},{"level":3,"title":"Energy phase a (numeric)","slug":"energy-phase-a-numeric","link":"#energy-phase-a-numeric","children":[]},{"level":3,"title":"Energy phase b (numeric)","slug":"energy-phase-b-numeric","link":"#energy-phase-b-numeric","children":[]},{"level":3,"title":"Energy phase c (numeric)","slug":"energy-phase-c-numeric","link":"#energy-phase-c-numeric","children":[]},{"level":3,"title":"AC frequency (numeric)","slug":"ac-frequency-numeric","link":"#ac-frequency-numeric","children":[]},{"level":3,"title":"Voltage phase a (numeric)","slug":"voltage-phase-a-numeric","link":"#voltage-phase-a-numeric","children":[]},{"level":3,"title":"Voltage phase b (numeric)","slug":"voltage-phase-b-numeric","link":"#voltage-phase-b-numeric","children":[]},{"level":3,"title":"Voltage phase c (numeric)","slug":"voltage-phase-c-numeric","link":"#voltage-phase-c-numeric","children":[]},{"level":3,"title":"Voltage phase ab (numeric)","slug":"voltage-phase-ab-numeric","link":"#voltage-phase-ab-numeric","children":[]},{"level":3,"title":"Voltage phase bc (numeric)","slug":"voltage-phase-bc-numeric","link":"#voltage-phase-bc-numeric","children":[]},{"level":3,"title":"Voltage phase ca (numeric)","slug":"voltage-phase-ca-numeric","link":"#voltage-phase-ca-numeric","children":[]},{"level":3,"title":"Current phase a (numeric)","slug":"current-phase-a-numeric","link":"#current-phase-a-numeric","children":[]},{"level":3,"title":"Current phase b (numeric)","slug":"current-phase-b-numeric","link":"#current-phase-b-numeric","children":[]},{"level":3,"title":"Current phase c (numeric)","slug":"current-phase-c-numeric","link":"#current-phase-c-numeric","children":[]},{"level":3,"title":"Linkquality (numeric)","slug":"linkquality-numeric","link":"#linkquality-numeric","children":[]}]}],"git":{"updatedTime":1725034041000},"filePathRelative":"devices/A9MEM1570.md"}')}}]);