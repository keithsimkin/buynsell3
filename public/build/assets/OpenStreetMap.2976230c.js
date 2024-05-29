import{L as o}from"./Control.Geocoder.310b1125.js";import{_ as c}from"./plugin-vue_export-helper.21dcd24c.js";import{j as u,o as m,c as s,n as f}from"./app.72d9fe45.js";const _={name:"LeafletMap",props:{lat:{type:Number,default:16},lng:{type:Number,default:96},mapSize:{type:String,default:"h-64 w-full"},onChange:Function,dragValue:{type:Boolean,default:!0},mapContainer:{type:String,default:"mapContainer"},dir:String},setup(e){let a=null;u(()=>{let l="";e.dir.replaceAll("\\",""),l="";var r=o.icon({iconUrl:l+"/images/assets/marker-icon.png",shadowUrl:l+"/images/assets/marker-shadow.png"});a=o.map(e.mapContainer).setView([e.lat==null||isNaN(e.lat)?16.7967129:e.lat,e.lng==null||isNaN(e.lng)?96.1609916:e.lng],12);var n;o.tileLayer("http://{s}.tile.osm.org/{z}/{x}/{y}.png",{attribution:'&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'}).addTo(a),o.Control.geocoder({defaultMarkGeocode:!1}).addTo(a).on("markgeocode",function(t){a.flyTo(t.geocode.center,12),n=new o.Marker([t.geocode.properties.lat,t.geocode.properties.lon],{icon:r,draggable:e.dragValue}).addTo(a);var d={lat:t.geocode.properties.lat,lng:t.geocode.properties.lon};e.onChange(d),n.on("dragend",i)}),e.dragValue?(n=new o.Marker([e.lat,e.lng],{icon:r,draggable:e.dragValue}).addTo(a),n.on("dragend",i)):(n=new o.Marker([e.lat,e.lng],{icon:r}).addTo(a),n.on("dragend"));function i(t){var d=t.target.getLatLng();e.onChange!=null&&e.onChange(d)}})}},h=["id"];function p(e,a,l,g,r,n){return m(),s("div",{class:f([l.mapSize,"mapContainer"]),id:l.mapContainer},null,10,h)}var v=c(_,[["render",p]]);export{v as default};