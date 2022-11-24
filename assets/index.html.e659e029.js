import{_ as o,o as s,c as t,a as e,b as n,w as r,e as c,d as i,r as l}from"./app.90758992.js";const d={},p=c(`<h1 id="le-api-di-misskey" tabindex="-1"><a class="header-anchor" href="#le-api-di-misskey" aria-hidden="true">#</a> Le API di Misskey</h1><p>Misskey espone una API che puoi usare per sviluppare client mobile, servizi web connessi a Misskey, bot e altre applicazioni.</p><p>Abbiamo anche una <strong>API di streaming</strong> per ccreare applicazioni con caratteristiche push, in realtime.</p><div class="custom-container tip"><i class="fas fa-info"></i><p>Usando la SDK ufficiale di Misskey, o librerie di terze parti, puoi fruire della API in modo pi\xF9 conveniente. Per esempio semplificando alcuni dei passi descritti in questa pagina.</p></div><p>Tanto per cominciare, ti occorre ottenere il <strong>token di accesso</strong> associato all&#39;account che intendi usare per fruire delle API.</p><p>Questa pagina ti spiega passo passo come ottenerlo e le basi per fruire delle API.</p><h2 id="ottenere-un-token-di-accesso" tabindex="-1"><a class="header-anchor" href="#ottenere-un-token-di-accesso" aria-hidden="true">#</a> Ottenere un token di accesso</h2><p>Le API, in generale, richiedono l&#39;accesso autenticato da un token. Si tratta di un set di credenziali associate ad un profilo, che lo identificano e controllano quali operazioni sia autorizzato a svolgere quello specifico token.</p><div class="custom-container tip"><i class="fas fa-info"></i><p>Tra il profilo e i token c&#39;\xE8 la relazione uno-a-molti, significa che per ogni profilo si possono creare pi\xF9 token (anche con diversi livelli di privilegi)</p></div><p>Ci sono due modi per ottenere il token:</p><ul><li><a href="#richiedere-un-token-di-accesso-manualmente">Richiederlo per se stessi</a></li><li><a href="#richiedere-l-emissione-di-un-token-di-accesso">Richiederlo per un altro profilo che user\xE0 l&#39;applicazione</a></li></ul><h3 id="richiedere-un-token-di-accesso-manualmente" tabindex="-1"><a class="header-anchor" href="#richiedere-un-token-di-accesso-manualmente" aria-hidden="true">#</a> Richiedere un token di accesso manualmente</h3><p>Per ottenere un token per il proprio profilo, \xE8 sufficiente aprire il proprio profilo in Misskey e, nelle impostazioni, scegliere il menu API. Da l\xEC, seguire le indicazioni.</p><div class="custom-container danger"><i class="fas fa-times"></i><p>Fai attenzione! Non condividere il token con nessuno, deve rimanere segreto, altrimenti qualcuno potrebbe ottenere l&#39;accesso del profilo.</p></div><h3 id="richiedere-l-emissione-di-un-token-di-accesso" tabindex="-1"><a class="header-anchor" href="#richiedere-l-emissione-di-un-token-di-accesso" aria-hidden="true">#</a> Richiedere l&#39;emissione di un token di accesso</h3><p>Per richiedere il token di accesso per un altro profile, occorre inizializzare la richiesta come indicato.</p><h4 id="passo-1" tabindex="-1"><a class="header-anchor" href="#passo-1" aria-hidden="true">#</a> Passo 1</h4><p>Genera un UUID (identificativo unico dell&#39;utente). Da ora in poi lo chiameremo <em>ID Sessione</em>.</p><div class="custom-container danger"><i class="fas fa-times"></i><p>L&#39;<strong>ID Sessione</strong> dovrebbe essere generato ogni volta e mai riutilizzato.</p></div><h4 id="passo-2" tabindex="-1"><a class="header-anchor" href="#passo-2" aria-hidden="true">#</a> Passo 2</h4><p>Nel browser della persona utilizzatrice dovrebbe comparire il modulo di autenticazione. Il modulo di autenticazione pu\xF2 essere aperto usando una URL simile a questa:</p><div class="language-text ext-text"><pre class="language-text"><code>https://{host}/miauth/{session}
</code></pre></div><ul><li><code>{host}</code> \xE8 il nome dell&#39;istanza (di solito lo ha digitato la persona stessa)</li><li><code>{session}</code> \xE8 il valore <strong>ID Sessione</strong></li></ul><p>Si possono anche aggiungere alcune opzioni, come parametri GET nella URL:</p><table><thead><tr><th>Nome</th><th>Descrizione</th></tr></thead><tbody><tr><td><code>name</code></td><td>Nome dell&#39;applicazione</td></tr><tr><td><code>icon</code></td><td>Indirizzo URL dell&#39;icona (immagine)</td></tr><tr><td><code>callback</code></td><td>Indirizzo URL a cui reindirizzare dopo l&#39;autenticazione (con <strong>ID Sessione</strong> aggiunto come parametro GET denominato <code>session</code>)</td></tr><tr><td><code>permission</code></td><td>I permessi richiesti dall&#39;applicazione. Permessi multipli vanno suddivisi con la virgola <code>,</code></td></tr></tbody></table><div class="custom-container tip"><i class="fas fa-info"></i><p class="custom-container-title">Esempio concreto</p><div class="language-text ext-text"><pre class="language-text"><code>https://misskey.io/miauth/c1f6d42b-468b-4fd2-8274-e58abdedef6f?name=MyApp&amp;callback=https%3A%2F%2Fmyapp.example.com%2Fcallback&amp;permisson=write:notes,write:following,read:drive
</code></pre></div></div><h4 id="passo-3" tabindex="-1"><a class="header-anchor" href="#passo-3" aria-hidden="true">#</a> Passo 3</h4><p>Dopo che la persona ha autorizzato l&#39;accesso alla tua applicazione, una richiesta HTTP, di tipo <code>POST</code> alla seguente risorsa restituir\xE0 il <strong>token di accesso</strong> come risposta.</p><div class="language-text ext-text"><pre class="language-text"><code>https://{host}/api/miauth/{session}/check
</code></pre></div><ul><li><code>{host}</code> \xE8 il nome dell&#39;istanza della persona utilizzatrice (di solito lo ha digitato egli stessa)</li><li><code>{session}</code> \xE8 il valore <strong>ID Sessione</strong></li></ul><p>Le propriet\xE0 incluse nella risposta sono le seguenti:</p><table><thead><tr><th>Parametro</th><th>Descrizione</th></tr></thead><tbody><tr><td><code>token</code></td><td>token di accesso</td></tr><tr><td><code>user</code></td><td>informazioni sul profilo</td></tr></tbody></table><h2 id="fruire-delle-api" tabindex="-1"><a class="header-anchor" href="#fruire-delle-api" aria-hidden="true">#</a> Fruire delle API</h2><p>Una volta che hai ottenuto il <strong>token di accesso</strong> puoi usare le API inviando richieste HTTP alle varie risorse.</p><p><strong>Tutte le API HTTP ascoltano richieste POST ed entrambe le richieste/risposte sono in formato JSON.</strong></p><div class="custom-container warning"><i class="fas fa-exclamation"></i><p>Le API di Misskey non sono RESTful.</p></div><p>Il <strong>token di accesso</strong> deve essere incluso nel corpo nella richiesta, in un parametro chiamato <code>i</code>. Per avere maggiori informazioni sulle API, vedere il catalogo.</p>`,37),u=i("In aggiunta alle API HTTP, Misskey mette a disposizione anche le "),h=i("Streaming API"),m=i("."),g=e("div",{class:"custom-container tip"},[e("i",{class:"fas fa-info"}),e("p",null,[i("La tua istanza Misskey mette a disposizione il "),e("strong",null,"Catalogo delle API"),i(" e la documentazione, al seguente indirizzo: "),e("code",null,"/api-doc")])],-1);function f(z,v){const a=l("RouterLink");return s(),t("div",null,[p,e("p",null,[u,n(a,{to:"/it/docs/api/streaming/"},{default:r(()=>[h]),_:1}),m]),g])}var b=o(d,[["render",f],["__file","index.html.vue"]]);export{b as default};
