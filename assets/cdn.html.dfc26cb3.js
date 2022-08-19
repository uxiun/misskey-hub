import{_ as s,o as n,c as o,a as e,b as c,d as a,e as i,r}from"./app.a03ede0c.js";const d={},h=e("h1",{id:"set-up-a-cdn",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#set-up-a-cdn","aria-hidden":"true"},"#"),a(" Set up a CDN")],-1),l=a("When publishing your Misskey instance, we strongly recommend using a CDN such as "),u={href:"https://www.cloudflare.com/",target:"_blank",rel:"noopener noreferrer"},p=a("Cloudflare"),_=a("."),f=i('<p>Using a CDN has the following advantages</p><ul><li>You can have static content cached, which reduces the load on your server</li><li>The IP address of the server is less exposed, which can mitigate DoS attacks etc.</li></ul><h2 id="caching" tabindex="-1"><a class="header-anchor" href="#caching" aria-hidden="true">#</a> Caching</h2><p>Misskey Web is completely static and does not require a server to run. Therefore the whole Misskey Web can be cached in a CDN. The Misskey API cannot be cached.</p><p>You need to configure the following settings in your CDN</p><ul><li>Cache all requests except <code>/api/*</code>.</li></ul><div class="custom-container tip"><i class="fas fa-info"></i><p>You don&#39;t need to clear the cache when you update Misskey.</p></div>',7);function g(m,k){const t=r("ExternalLinkIcon");return n(),o("div",null,[h,e("p",null,[l,e("a",u,[p,c(t)]),_]),f])}var y=s(d,[["render",g],["__file","cdn.html.vue"]]);export{y as default};
