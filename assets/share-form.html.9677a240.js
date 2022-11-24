import{_ as o,o as d,c as r,a as e,b as l,w as n,e as a,d as t,r as c}from"./app.90758992.js";const s={},u=a('<h1 id="modulo-di-condivisione" tabindex="-1"><a class="header-anchor" href="#modulo-di-condivisione" aria-hidden="true">#</a> Modulo di condivisione</h1><p>Quando apri la pagina <code>/share</code> sulla tua istanza Misskey, apri un modulo per la condivisione via web. Utile, ad esempio, se vuoi che le persone iscritte possano condividere contenuti da un sito esterno.</p><p>Puoi specificare alcune opzioni sui contenuti, tramite la configurazione dei parametri della URL.</p><h2 id="parametri-della-url" tabindex="-1"><a class="header-anchor" href="#parametri-della-url" aria-hidden="true">#</a> Parametri della URL</h2><div class="custom-container tip"><i class="fas fa-info"></i><p>Tutti i parametri sono facoltativi</p></div><table><thead><tr><th>chiave</th><th>valore</th></tr></thead><tbody><tr><td><code>title</code></td><td>Il titolo, verr\xE0 inserito prima del testo, tra parentesi quadre</td></tr><tr><td><code>text</code></td><td>testo della Nota</td></tr><tr><td><code>url</code></td><td>URL, inserito al termine della Nota</td></tr></tbody></table><h3 id="informazioni-sulla-risposta" tabindex="-1"><a class="header-anchor" href="#informazioni-sulla-risposta" aria-hidden="true">#</a> Informazioni sulla risposta</h3><p>Puoi decidere che la Nota venga composta come risposta ad una Nota specifica, indicando uno dei seguenti parametri</p><table><thead><tr><th>chiave</th><th>valore</th></tr></thead><tbody><tr><td><code>replyId</code></td><td>ID della Nota locale a cui vuoi rispondere</td></tr><tr><td><code>replyUri</code></td><td>URL a cui rispondere (specifica l&#39;indirizzo di un post remoto)</td></tr></tbody></table><h3 id="informazioni-sul-rinota" tabindex="-1"><a class="header-anchor" href="#informazioni-sul-rinota" aria-hidden="true">#</a> Informazioni sul Rinota</h3><p>Puoi decidere che la Nota venga composta come un Rinota di una Nota specifica, indicando uno dei seguenti parametri</p><table><thead><tr><th>chiave</th><th>valore</th></tr></thead><tbody><tr><td><code>renoteId</code></td><td>ID della Nota locale che vuoi Rinotare</td></tr><tr><td><code>renoteUri</code></td><td>URL da Rinotare (specifica l&#39;indirizzo di un post remoto)</td></tr></tbody></table><h3 id="ambito-di-pubblicazione" tabindex="-1"><a class="header-anchor" href="#ambito-di-pubblicazione" aria-hidden="true">#</a> Ambito di pubblicazione</h3><p>Queste opzioni ti permettono di scegliere in che ambito pubblicare</p>',14),h=e("thead",null,[e("tr",null,[e("th",null,"chiave"),e("th",null,"valore")])],-1),p=e("tr",null,[e("td",null,[e("code",null,"visibility")]),e("td",null,[t("deve essere "),e("code",null,"public"),t(", "),e("code",null,"home"),t(", "),e("code",null,"followers"),t(" o "),e("code",null,"specified")])],-1),m=e("tr",null,[e("td",null,[e("code",null,"localOnly")]),e("td",null,"0 (Falso) oppure 1 (Vero)")],-1),b=e("tr",null,[e("td",null,[e("code",null,"visibleUserIds")]),e("td",null,"target user IDs")],-1),v=e("td",null,[e("code",null,"visibleAccts")],-1),f=t("target user "),_=t("acct"),g=t("s (comma separated)"),z=a('<div class="custom-container warning"><i class="fas fa-exclamation"></i><p>Se <code>visibility</code> viene impostato a <code>specified</code>, allora occorre inviare anche uno dei parametri <code>visibleUserIds</code> o <code>visibleAccts</code>.</p></div><h3 id="allegati" tabindex="-1"><a class="header-anchor" href="#allegati" aria-hidden="true">#</a> Allegati</h3><p>Puoi specificare allegati caricati nel Drive.</p><table><thead><tr><th>chiave</th><th>valore</th></tr></thead><tbody><tr><td><code>fileIds</code></td><td>ID dei file da allegare (separati da virgole)</td></tr></tbody></table>',4);function y(x,I){const i=c("RouterLink");return d(),r("div",null,[u,e("table",null,[h,e("tbody",null,[p,m,b,e("tr",null,[v,e("td",null,[f,l(i,{to:"/it/docs/glossary.html#acct"},{default:n(()=>[_]),_:1}),g])])])]),z])}var R=o(s,[["render",y],["__file","share-form.html.vue"]]);export{R as default};
