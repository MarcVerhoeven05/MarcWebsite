(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))l(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const m of r.addedNodes)m.tagName==="LINK"&&m.rel==="modulepreload"&&l(m)}).observe(document,{childList:!0,subtree:!0});function t(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function l(s){if(s.ep)return;s.ep=!0;const r=t(s);fetch(s.href,r)}})();function i(e){return`/MarcWebsite/${e.replace(/^\//,"")}`}const d={author:{photo:i("images/marc.png"),socials:{instagram:"https://instagram.com/Marc_verhoeven05",x:"https://www.youtube.com/@m4rcV",email:"mailto:marcverhoeven05@gmail.com",snapchat:"https://snapchat.com/marcverhoeven05",phone:"tel:+31627126898",phoneDisplay:"+31 6 27126898"}},home:{text1:"Bij de knop (Projecten) krijg je een verzameling van projecten te zien. Zodra je op een gekozen project drukt krijg je hier meer info van.",text2:"Druk op (Over mij) om meer te weten te komen over mij.",text3:"Deze website geeft inzicht in wie ik ben als ontwerper en wat mijn eigen stijl is die ik aan het vormen ben."},projectsIntro:"Dit zijn een paar projecten waar ik aan heb gewerk. Druk op een project om meer beeldmateriaal te zien en meer uitleg er over te vinden.",about:{text1:"Wie ben ik? Ik ben Marc, een creatieve student met een passie voor ontwerpen en nieuwe ideeën uitwerken ",text2:"Wat doe ik? Ik maak graag visuele ontwerpen en experimenteer met verschillende stijlen en technieken",text3:"Hoe werk ik? Ik probeer graag nieuwe dingen uit en blijf zoeken tot een ontwerp goed voelt",text4:"Ik geloof dat de beste ideeën niet als eerst komen!"},lmk:{text1:"Hoi ik ben Marc Verhoeven. Ik ben 21 jaar en ik kom uit Tilburg. Ik vind het leuk om andere te helpen met problemen en kijk graag naar oplossingen.",text2:"Ik ben op dit moment veel bezig met school en werk. Ik werk bij de Dolfijn. Dit is een bowlingcentrum in Tilburg. Hier ben ik ook manager. Buiten werk zit ik op de opleiding CMD Breda.",text3:"Ik hou van een schone werkplek en werk graag hard voor de gene die het nodig heeft. Ik geef alle aandacht aan het werk wat ik doe. Ook de dingen die ik niet leuk vind om te doen.",text4:"Het klinkt misschien stom maar ik zeg altijd: Lachen is gratis!"},projects:[{id:"project-1",slug:"project-1",title:"Identity Design",subtitle:"NRGY — Packaging & Graphic Identity",description:"Ik kreeg de opdracht om een blikje + Poster te ontwerpen. Hier zaten wel de eisen aan vast dat het een enrgie drankje moest zijn die het thema Glitchy in zich heeft. Dit heb ik op de volgende manier uitgewerkt.",coverImage:i("images/project-1/foto-1.png"),images:[i("images/project-1/foto-1.png"),i("images/project-1/foto-2.png"),i("images/project-1/foto-3.png"),i("images/project-1/foto-4.png"),i("images/project-1/foto-5.png"),i("images/project-1/foto-6.png")],text1:"Dit is het eindresultaat van het ontworpen blikje. Het effect Glitchy heb ik terug laten komen door tekst over elkaar heen te plaatsen waardoor je een soort error ervaart.",text2:"De poster moest de zelfde vormen taal hebben als het blikje maar het mocht er niet te veel op lijken. Daarom ben ik voor een net andere indeling gegaan."},{id:"project-2",slug:"project-2",title:"3sec.gallery",subtitle:"Poster Campagne",description:"Tijdens deze opdracht mocht ik zelf kiezen welk onderwerp ik wilde gebruiken. Doordat er frictie ontstaat bij mij als ik denk aan muzieksmaken heb ik het ook hierover gedaan. De bedoeling was dat ik een poster moest ontwerpen die laat zien dat iedereen een eigen muzieksmaak heeft.",coverImage:i("images/project-2/foto-1.png"),images:[i("images/project-2/foto-1.png"),i("images/project-2/foto-2.png"),i("images/project-2/foto-3.png"),i("images/project-2/foto-4.png"),i("images/project-2/foto-5.png"),i("images/project-2/foto-6.png"),i("images/project-2/foto-7.png")],text1:"Dit is de poster die ik heb ingeleverd voor de opdrachtgever. Helaas is deze niet uitgekozen. Ik heb er wel veel tijd en moeite ingestopt waardoor je dus veel details ziet.",text2:"Ik ben per muziek genre gaan kijken wat die genre echt speciaal maakt. Dit heb ik onderzocht en toegevoegd aan mijn design."},{id:"project-3",slug:"project-3",title:"Albert Heijn Branding",subtitle:"Signing van het hoofdkantoor",description:"Dit project heb ik gehad tijdens mijn stage op de opleiding Signmaking. Hiervoor moest ik het hoofdkantoor van de Albert Heijn voorzien van een 50 meter lange vloersticker en verschillende cardboards. Dit was mijn eerste solo klus en is mij altijd bijgebleven omdat het goed gelukt was.",coverImage:i("images/project-3/foto-1.jpg"),images:[i("images/project-3/foto-1.jpg"),i("images/project-3/foto-2.jpg"),i("images/project-3/foto-3.jpg"),i("images/project-3/foto-4.jpg"),i("images/project-3/foto-5.jpg"),i("images/project-3/foto-6.jpg"),i("images/project-3/foto-7.jpg"),i("images/project-3/foto-8.jpg"),i("images/project-3/foto-9.jpg"),i("images/project-3/foto-10.jpg"),i("images/project-3/foto-11.jpg"),i("images/project-3/foto-12.jpg"),i("images/project-3/foto-13.jpg")],text1:"Tijdens dit project heb ik verschillende dingen gemaakt. Zoals je kunt zien op de foto's gaat dit over een vloersticker, plakplaatjes en grote cardboards",text2:"Ik heb bij het maken van dit project geleerd dat je eerst alles moet uitleggen voor je iets gaat plakken. Dan zie je namelijk beter of een sticker van 50 meter wel gaat passen en een beetje in het midden ligt."},{id:"project-4",slug:"project-4",title:"Ardbeg",subtitle:"Branding van een nachtclub",description:"Dit was mijn laatste grote klus tijdens mijn stage van de opleiding Signmaking. Hier heb ik in een nachtclub in amsterdam verschillende signing gemonteerd.",coverImage:i("images/project-4/foto-1.jpg"),images:[i("images/project-4/foto-1.jpg"),i("images/project-4/foto-2.jpg"),i("images/project-4/foto-3.jpg"),i("images/project-4/foto-4.jpg"),i("images/project-4/foto-5.jpg"),i("images/project-4/foto-6.jpg"),i("images/project-4/foto-7.jpg"),i("images/project-4/foto-8.jpg"),i("images/project-4/foto-9.jpg")],text1:"Op deze locatie heb ik een variatie aan dingen gemonteerd die je terug ziet op de foto's. Het gaat hierbij om een fotobooth, djbooth, beerpongtafel, wandbelletering en vloerbestickering.",text2:"Ik heb bij dit project geleerd dat communicatie met de opdrachtgever van groot belang is. Dit zorgt ervoor dat je alles al op de juiste plek op kan bouwen en niet alles achteraf nog moet verbouwen."},{id:"project-5",slug:"project-5",title:"Muzus",subtitle:"Hoe laten we rokers stoppen?",description:"Bij deze opdracht heb ik een opdrachtgever gehad die met een vraag aankwam. Hoe laten we jongeren stoppen met roken? Deze vraag heb ik beantwoord en hier heb ik iets op bedacht.",coverImage:i("images/project-5/foto-1.png"),images:[i("images/project-5/foto-1.png"),i("images/project-5/foto-2.png"),i("images/project-5/foto-3.png"),i("images/project-5/foto-4.png"),i("images/project-5/foto-5.png")],text1:"Mijn concept is dat je een plek waar veel jongeren roken helemaal vol gaat hangen met bonnen. Op deze bonnen staat bijvoorbeeld hoe slecht roken is en hoe duur het kan zijn. Door de hangplek dus zo te verpesten hoop ik jongeren weg te jagen van gezamelijk bij 1 komen.",text2:"Bij het project ben ik er achter gekomen dat het niet om de jongeren zelf gaat maar meer om waar ze roken. Daarom heb ik mij vooral gefocust op dit aspect van het probleem."}]},w=(e=32,o="")=>`
  <svg class="doodle star-doodle ${o}" width="${e}" height="${e}" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M20 4V36M4 20H36M8 8L32 32M32 8L8 32" stroke="#181819" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
  </svg>
`,E=(e=60,o=30,t="")=>`
  <svg class="doodle scribble-doodle ${t}" width="${e}" height="${o}" viewBox="0 0 80 40" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M5 25C15 5 25 35 35 12C45 38 55 8 65 28C70 18 75 22 78 20" stroke="#181819" stroke-width="3.2" stroke-linecap="round" stroke-linejoin="round"/>
  </svg>
`,T=(e="down-right",o=50,t=40,l="")=>{let s="M5 10Q25 5 40 30M28 28L40 30L38 18";return e==="up-right"?s="M5 32Q20 30 38 10M25 10L38 10L38 23":e==="left"?s="M42 20Q20 18 8 20M18 10L8 20L18 30":e==="down-left"&&(s="M38 8Q20 10 10 32M12 20L10 32L24 30"),`
    <svg class="doodle arrow-doodle ${l}" width="${o}" height="${t}" viewBox="0 0 50 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="${s}" stroke="#181819" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
  `},A=(e="")=>`
  <svg class="doodle dot-grid ${e}" width="50" height="60" viewBox="0 0 50 60" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="10" cy="10" r="2.5" fill="#181819"/>
    <circle cx="25" cy="12" r="2" fill="#181819"/>
    <circle cx="40" cy="8" r="2.8" fill="#181819"/>
    <circle cx="15" cy="28" r="2.2" fill="#181819"/>
    <circle cx="30" cy="30" r="3" fill="#181819"/>
    <circle cx="42" cy="26" r="2" fill="#181819"/>
    <circle cx="12" cy="48" r="2.8" fill="#181819"/>
    <circle cx="28" cy="50" r="2" fill="#181819"/>
    <circle cx="44" cy="46" r="2.5" fill="#181819"/>
  </svg>
`,M=(e="")=>`
  <svg class="doodle spark-ticks ${e}" width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M6 24L12 8M16 26L22 10" stroke="#181819" stroke-width="3" stroke-linecap="round"/>
  </svg>
`,R=(e="")=>`
  <svg class="doodle crown-doodle ${e}" width="40" height="32" viewBox="0 0 40 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M4 26L2 10L12 16L20 4L28 16L38 10L36 26H4Z" stroke="#181819" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
  </svg>
`,B=()=>`
  <svg viewBox="0 0 32 32">
    <rect x="4" y="4" width="24" height="24" rx="7" />
    <circle cx="16" cy="16" r="6" />
    <circle cx="23" cy="9" r="1.5" fill="#181819" />
  </svg>
`,S=()=>`
  <svg viewBox="0 0 32 32">
    <path d="M6 6L26 26M26 6L6 26" />
  </svg>
`,P=()=>`
  <svg viewBox="0 0 32 32">
    <rect x="4" y="6" width="24" height="20" rx="3" />
    <path d="M4 8L16 18L28 8" />
  </svg>
`,N=()=>`
  <svg viewBox="0 0 32 32">
    <path d="M16 4C10.5 4 7 8 7 12C7 14.5 8 16 9 17C8.5 17.5 7 18 5 18C4.5 18 4 18.5 4 19C4 19.5 4.5 20.5 6 21C8 21.5 10 21 11.5 20.5C12 22 13.5 24 16 24C18.5 24 20 22 20.5 20.5C22 21 24 21.5 26 21C27.5 20.5 28 19.5 28 19C28 18.5 27.5 18 27 18C25 18 23.5 17.5 23 17C24 16 25 14.5 25 12C25 8 21.5 4 16 4Z" />
  </svg>
`,G=()=>`
  <svg viewBox="0 0 32 32">
    <path d="M6 4H10L12.5 10L9.5 12.5C11 16 15 20 18.5 21.5L21 18.5L27 21V25C27 26.5 25.5 28 24 28C13 28 4 19 4 8C4 6.5 5.5 5 6 4Z" />
  </svg>
`;function H(e="/"){const o=e==="/over-mij"?"active":"",t=e==="/projecten"||e.startsWith("/projecten/")?"active":"";return`
    <header class="site-header">
      <div class="header-left-group">
        <div class="header-left">
          <a href="/" class="logo-link" data-link>Marc Verhoeven</a>
        </div>
        
        <nav class="header-nav">
          <a href="/over-mij" class="nav-item ${o}" data-link>over mij</a>
          <a href="/projecten" class="nav-item ${t}" data-link>projecten</a>
        </nav>
      </div>
      
      <div class="header-socials">
        <button id="cursor-studio-trigger" class="nav-item cursor-studio-nav-btn" type="button" title="Teken je eigen cursor">cursor</button>
        <a href="${d.author.socials.instagram}" target="_blank" rel="noopener" class="social-icon-btn" title="Instagram">
          ${B()}
        </a>
        <a href="${d.author.socials.x}" target="_blank" rel="noopener" class="social-icon-btn" title="X">
          ${S()}
        </a>
        <a href="${d.author.socials.email}" class="social-icon-btn" title="Email Marc">
          ${P()}
        </a>
      </div>
    </header>
  `}function F(){return`
    <footer class="site-footer">
      <div class="footer-volg-wrapper">
        <button id="volgMijBtn" class="footer-badge volg-mij-toggle" aria-expanded="false">
          volg mij <span class="toggle-arrow">▼</span>
        </button>
        
        <div id="volgMijMenu" class="volg-mij-dropdown hidden">
          <a href="${d.author.socials.instagram}" target="_blank" rel="noopener" class="volg-menu-item">
            ${B()}
            <span>Instagram</span>
          </a>
          <a href="${d.author.socials.snapchat}" target="_blank" rel="noopener" class="volg-menu-item">
            ${N()}
            <span>Snapchat</span>
          </a>
          <a href="${d.author.socials.phone}" class="volg-menu-item">
            ${G()}
            <span>${d.author.socials.phoneDisplay}</span>
          </a>
        </div>
      </div>

      ${E(120,20,"footer-scribble")}

      <div class="footer-copy">
        &copy; ${new Date().getFullYear()} Marc Verhoeven — Portfolio
      </div>
    </footer>
  `}function K(){const e=document.getElementById("volgMijBtn"),o=document.getElementById("volgMijMenu");e&&o&&(e.addEventListener("click",t=>{t.stopPropagation(),!o.classList.contains("hidden")?(o.classList.add("hidden"),e.setAttribute("aria-expanded","false")):(o.classList.remove("hidden"),e.setAttribute("aria-expanded","true"))}),document.addEventListener("click",t=>{!e.contains(t.target)&&!o.contains(t.target)&&(o.classList.add("hidden"),e.setAttribute("aria-expanded","false"))}))}function W(){return`
    <div class="sketchbook-view home-view">
      <!-- LAAG 1: GIANT BACKGROUND TYPOGRAPHY (100% SCREEN WIDTH) -->
      <div class="bg-typography-container">
        <div class="bg-text bg-text-home-1">
          <span>MARC</span>
        </div>
        <div class="bg-text bg-text-home-2">
          <span>VERHOEVEN</span>
        </div>
      </div>

      <!-- LAAG 2 & 3: COMPOSITION (EXACT MATCH WITH WIREFRAME PAGE 3) -->
      <div class="home-composition" style="position: relative; min-height: 85vh; padding-top: 1rem;">
        
        <!-- LAAG 2: Tekst 1 Top-Left -->
        <div class="text-block-handwritten" style="position: absolute; top: 14%; left: 6%; max-width: 380px;">
          <p>${d.home.text1}</p>
        </div>

        <!-- LAAG 3: Star Left Edge -->
        ${w(44,"star-home-left")}
        <style>
          .star-home-left { position: absolute; top: 36%; left: -0%; }
        </style>

        <!-- LAAG 3: Scribble Bottom-Left -->
        ${E(110,50,"scribble-home-bottom-left")}
        <style>
          .scribble-home-bottom-left { position: absolute; bottom: 4%; left: 4%; transform: rotate(-5deg); }
        </style>

        <!-- LAAG 2: Tekst 1 Center-Left -->
          <div class="text-block-handwritten" style="position: absolute; top: 81%; left: 26%; max-width: 280px;">
            <p>${d.home.text2}</p>
          </div>
        </div>

        <!-- LAAG 3: Dot Cluster Center -->
        ${A("dot-grid-home-center")}
        <style>
          .dot-grid-home-center { position: absolute; top: 60%; left: 46%; opacity: 0.85; }
        </style>

        <!-- LAAG 3: Star Top Center -->
        ${w(46,"star-home-top")}
        <style>
          .star-home-top { position: absolute; top: 18%; left: 54%; transform: rotate(10deg); }
        </style>

        <!-- LAAG 3: Spark Ticks Center Right -->
        ${M("spark-home-right")}
        <style>
          .spark-home-right { position: absolute; top: 38%; left: 62%; }
        </style>

        <!-- LAAG 3: Scribble Top Right -->
        ${E(110,50,"scribble-home-top-right")}
        <style>
          .scribble-home-top-right { position: absolute; top: 22%; right: 10%; transform: rotate(15deg); }
        </style>

        <!-- LAAG 3: Star Bottom Center (Easter Egg Trigger - Foreground) -->
        <div id="easter-egg-star-trigger" style="position: absolute; bottom: 6%; left: 78%; cursor: pointer; z-index: 50;">
          ${w(40,"star-home-bottom")}
        </div>

        <!-- LAAG 2: Tekst 1 Bottom-Right -->
        <div class="text-block-handwritten" style="position: absolute; top: 48%; right: 6%; max-width: 380px;">
          <p>${d.home.text3}</p>
        </div>
        

      </div>
    </div>
  `}function V(){return`
    <div class="sketchbook-view about-view">
      <!-- LAAG 1: GIANT BACKGROUND TYPOGRAPHY (100% SCREEN WIDTH) -->
      <div class="bg-typography-container">
        <div class="bg-text bg-text-about">
          <span>ABOUT</span>
          <span>ME</span>
        </div>
      </div>

      <!-- LAAG 2 & 3: COMPOSITION (EXACT MATCH WITH WIREFRAME PAGE 1) -->
      <div class="about-composition" style="position: relative; min-height: 92vh; padding-top: 1rem;">
        
        <!-- LAAG 2: MARC'S CUTOUT PHOTO -->
        <div class="marc-photo-wrapper" style="position: absolute; right: 38%; top: -6%; width: 48vw; max-width: 650px; z-index: 15;">
          <div style="position: relative;">
            <img src="${d.author.photo}" alt="Marc Verhoeven" style="width: 240%; height: auto; display: block; filter: drop-shadow(8px -12px 0px rgba(251, 232, 12, 0.95)) drop-shadow(12px -16px 0px #181819);" />
          </div>
        </div>

        ${A("dot-grid-about-top-left")}
        <style>.dot-grid-about-top-left { position: absolute; top: 6%; left: 0%; opacity: 0.85; }</style>

        <div class="text-block-handwritten" style="position: absolute; top: 4%; left: 6%; max-width: 360px;">
          <p>${d.about.text1}</p>
        </div>

        <div class="text-block-handwritten" style="position: absolute; top: 85%; left: 36%; max-width: 240px;">
          <p>${d.about.text4}</p>
        </div>

        ${w(46,"star-about-top")}
        <style>.star-about-top { position: absolute; top: 16%; left: 52%; transform: rotate(10deg); }</style>

        ${T("down-right",65,45,"arrow-about-top")}
        <style>.arrow-about-top { position: absolute; top: 24%; left: 46%; }</style>

        <div class="text-block-handwritten" style="position: absolute; top: 40%; left: 15%; max-width: 320px;">
          <p>${d.about.text2}</p>
        </div>

        ${E(110,50,"scribble-about-left")}
        <style>.scribble-about-left { position: absolute; top: 60%; left: 3%; transform: rotate(0deg); }</style>

        <div class="horizontal-stroke-about" style="position: absolute; top: 69%; left: 15%; width: 280px; height: 3px; background-color: var(--black); transform: rotate(-1deg); z-index: 5;"></div>

        ${T("up-right",65,45,"arrow-about-bottom")}
        <style>.arrow-about-bottom { position: absolute; top: 70%; left: 38%; }</style>

        ${w(40,"star-about-bottom")}
        <style>.star-about-bottom { position: absolute; bottom: -10%; left: 30%; }</style>

        <div class="text-block-handwritten" style="position: absolute; top: 96%; left: 0%; max-width: 350px;">
          <p>${d.about.text3}</p>
        </div>

        ${A("dot-grid-about-right")}
        <style>.dot-grid-about-right { position: absolute; top: 10%; right: 4%; opacity: 0.85; }</style>

        ${R("crown-about")}
        <style>.crown-about { position: absolute; top: 44%; right: 2%; transform: rotate(12deg); }</style>

        ${M("spark-about-bottom")}
        <style>.spark-about-bottom { position: absolute; top: 62%; right: 6%; }</style>

      </div>

      <!-- ── LEER MIJ KENNEN KNOP ── -->
      <div class="lmk-btn-wrap">
        <button id="lmk-open-btn" class="lmk-open-btn" type="button">
          Leer mij kennen
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.8" stroke-linecap="round" stroke-linejoin="round">
            <path d="M9 18l6-6-6-6"/>
          </svg>
        </button>
      </div>

      <!-- ── LINKERPANEEL ── -->
      <div id="lmk-panel" class="lmk-panel" aria-hidden="true">

        <!-- Sluit knop bovenin -->
        <button id="lmk-close-btn" class="lmk-panel-close" type="button" aria-label="Sluit paneel">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.8" stroke-linecap="round" stroke-linejoin="round">
            <path d="M19 12H5M12 19l-7-7 7-7"/>
          </svg>
          Ga terug
        </button>

        <div class="lmk-panel-inner">

          <div class="lmk-panel-header">
            ${w(36)}
            <h2 class="lmk-panel-heading">Hey, Marc hier! 👋</h2>
          </div>

          <div class="lmk-panel-cards">

            <div class="lmk-pcard lmk-pcard--yellow">
              <span class="lmk-pcard-icon">🎨</span>
              <div class="lmk-pcard-label">Wie ben ik?</div>
              <p>${d.lmk.text1}</p>
            </div>

            <div class="lmk-pcard">
              <span class="lmk-pcard-icon">💡</span>
              <div class="lmk-pcard-label">Wat doe ik?</div>
              <p>${d.lmk.text2}</p>
            </div>

            <div class="lmk-pcard lmk-pcard--yellow">
              <span class="lmk-pcard-icon">⚙️</span>
              <div class="lmk-pcard-label">Hoe werk ik?</div>
              <p>${d.lmk.text3}</p>
            </div>

            <div class="lmk-pcard">
              <span class="lmk-pcard-icon">✨</span>
              <div class="lmk-pcard-label">Mijn overtuiging</div>
              <p>${d.lmk.text4}</p>
            </div>

          </div>

          <!-- Contact -->
          <div class="lmk-panel-contact">
            <div class="lmk-contact-label">Neem contact op</div>
            <div class="lmk-contact-links">
              <a href="${d.author.socials.email}" class="lmk-cpill">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
                E-mail
              </a>
              <a href="${d.author.socials.instagram}" target="_blank" class="lmk-cpill">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="2" width="20" height="20" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="0.5" fill="currentColor"/></svg>
                Instagram
              </a>
              <a href="${d.author.socials.x}" target="_blank" class="lmk-cpill">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><polygon points="23 7 16 12 23 17 23 7"/><rect x="1" y="5" width="15" height="14" rx="2"/></svg>
                YouTube
              </a>
              <a href="${d.author.socials.phone}" class="lmk-cpill">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 13a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                ${d.author.socials.phoneDisplay}
              </a>
            </div>
          </div>

        </div>
      </div>

      <!-- Donker overlay achter paneel -->
      <div id="lmk-backdrop" class="lmk-backdrop"></div>

    </div>

    <style>
      /* ── KNOP ───────────────────────────────────────── */
      .lmk-btn-wrap {
        position: relative;
        z-index: 20;
        display: flex;
        justify-content: center;
        padding: 6rem 0 6rem;
      }

      .lmk-open-btn {
        display: inline-flex;
        align-items: center;
        gap: 0.55rem;
        background: var(--white, #fff);
        color: var(--black, #111);
        border: 2.5px solid var(--black, #111);
        border-radius: 50px;
        padding: 0.9rem 2.2rem;
        font-size: 1.1rem;
        font-weight: 800;
        cursor: pointer;
        box-shadow: 5px 5px 0 var(--yellow, #F5E642);
        transition: transform 0.18s ease, box-shadow 0.18s ease, background 0.18s ease;
        font-family: inherit;
        letter-spacing: 0.01em;
      }

      .lmk-open-btn:hover {
        transform: translate(-3px, -3px);
        box-shadow: 8px 8px 0 var(--yellow, #F5E642);
        background: var(--yellow, #F5E642);
      }

      /* ── BACKDROP ───────────────────────────────────── */
      .lmk-backdrop {
        position: fixed;
        inset: 0;
        z-index: 8998;
        background: rgba(0,0,0,0.45);
        opacity: 0;
        pointer-events: none;
        transition: opacity 0.35s ease;
      }
      .lmk-backdrop.lmk-open {
        opacity: 1;
        pointer-events: all;
      }

      /* ── LINKERPANEEL ───────────────────────────────── */
      .lmk-panel {
        position: fixed;
        top: 0;
        left: 0;
        height: 100vh;
        width: min(480px, 92vw);
        z-index: 8999;
        background: var(--white, #fff);
        border-right: 2.5px solid var(--black, #111);
        box-shadow: 8px 0 40px rgba(0,0,0,0.18);
        transform: translateX(-110%);
        transition: transform 0.42s cubic-bezier(0.4, 0, 0.2, 1);
        display: flex;
        flex-direction: column;
        overflow: hidden;
      }

      .lmk-panel.lmk-open {
        transform: translateX(0);
      }

      /* ── SLUIT KNOP ─────────────────────────────────── */
      .lmk-panel-close {
        flex-shrink: 0;
        display: flex;
        align-items: center;
        gap: 0.5rem;
        margin: 1.25rem 1.5rem 0;
        background: var(--white, #fff);
        color: var(--black, #111);
        border: 2.5px solid var(--black, #111);
        border-radius: 50px;
        padding: 0.55rem 1.4rem;
        font-size: 0.95rem;
        font-weight: 700;
        cursor: pointer;
        box-shadow: 3px 3px 0 var(--black, #111);
        transition: transform 0.15s ease, box-shadow 0.15s ease, background 0.15s ease;
        font-family: inherit;
        align-self: flex-start;
      }

      .lmk-panel-close:hover {
        transform: translate(-2px, -2px);
        box-shadow: 5px 5px 0 var(--yellow, #F5E642);
        background: var(--yellow, #F5E642);
      }

      /* ── PANEEL INHOUD ──────────────────────────────── */
      .lmk-panel-inner {
        flex: 1;
        overflow-y: auto;
        padding: 1.5rem 1.5rem 3rem;
        display: flex;
        flex-direction: column;
        gap: 1.5rem;
      }

      .lmk-panel-header {
        display: flex;
        align-items: center;
        gap: 0.75rem;
      }

      .lmk-panel-heading {
        font-size: 1.6rem;
        font-weight: 900;
        margin: 0;
        color: var(--black, #111);
        line-height: 1.15;
      }

      /* ── KAARTEN ────────────────────────────────────── */
      .lmk-panel-cards {
        display: flex;
        flex-direction: column;
        gap: 1rem;
      }

      .lmk-pcard {
        background: var(--white, #fff);
        border: 2.5px solid var(--black, #111);
        border-radius: 14px;
        padding: 1.2rem 1.4rem;
        box-shadow: 4px 4px 0 var(--black, #111);
        display: flex;
        flex-direction: column;
        gap: 0.4rem;
        transition: transform 0.15s ease, box-shadow 0.15s ease;
      }

      .lmk-pcard:hover {
        transform: translate(-2px, -2px);
        box-shadow: 6px 6px 0 var(--yellow, #F5E642);
      }

      .lmk-pcard--yellow {
        background: var(--yellow, #F5E642);
        box-shadow: 4px 4px 0 var(--black, #111);
      }

      .lmk-pcard--yellow:hover {
        box-shadow: 6px 6px 0 var(--black, #111);
      }

      .lmk-pcard-icon {
        font-size: 1.6rem;
        line-height: 1;
      }

      .lmk-pcard-label {
        font-size: 0.68rem;
        font-weight: 800;
        letter-spacing: 0.12em;
        text-transform: uppercase;
        color: var(--black, #111);
        opacity: 0.55;
      }

      .lmk-pcard p {
        font-size: 0.97rem;
        line-height: 1.65;
        color: var(--black, #111);
        margin: 0;
      }

      /* ── CONTACT ────────────────────────────────────── */
      .lmk-panel-contact {
        display: flex;
        flex-direction: column;
        gap: 0.75rem;
      }

      .lmk-contact-label {
        font-size: 0.68rem;
        font-weight: 800;
        letter-spacing: 0.12em;
        text-transform: uppercase;
        color: var(--black, #111);
        opacity: 0.45;
      }

      .lmk-contact-links {
        display: flex;
        flex-direction: column;
        gap: 0.6rem;
      }

      .lmk-cpill {
        display: inline-flex;
        align-items: center;
        gap: 0.5rem;
        text-decoration: none;
        color: var(--black, #111);
        font-size: 0.92rem;
        font-weight: 600;
        border: 2px solid var(--black, #111);
        border-radius: 50px;
        padding: 0.5rem 1.2rem;
        background: var(--white, #fff);
        box-shadow: 3px 3px 0 var(--black, #111);
        transition: transform 0.15s ease, box-shadow 0.15s ease, background 0.15s ease;
        align-self: flex-start;
      }

      .lmk-cpill:hover {
        transform: translate(-2px, -2px);
        box-shadow: 5px 5px 0 var(--yellow, #F5E642);
        background: var(--yellow, #F5E642);
      }
    </style>
  `}function U(){const e=document.getElementById("lmk-open-btn"),o=document.getElementById("lmk-close-btn"),t=document.getElementById("lmk-panel"),l=document.getElementById("lmk-backdrop");if(!e||!t)return;const s=()=>{t.classList.add("lmk-open"),l.classList.add("lmk-open"),t.setAttribute("aria-hidden","false"),document.body.style.overflow="hidden"},r=()=>{t.classList.remove("lmk-open"),l.classList.remove("lmk-open"),t.setAttribute("aria-hidden","true"),document.body.style.overflow=""};e.addEventListener("click",s),o==null||o.addEventListener("click",r),l.addEventListener("click",r),document.addEventListener("keydown",m=>{m.key==="Escape"&&t.classList.contains("lmk-open")&&r()})}function _(){const o=d.projects.map((t,l)=>`
    <a href="/projecten/${t.slug}" class="project-grid-card" data-link id="project-card-${l+1}">
      <div class="project-grid-thumb">
        <img src="${t.coverImage}" alt="${t.title}" />
        <div class="project-grid-overlay">
          <span class="project-grid-view-label">Bekijk project →</span>
        </div>
      </div>
      <div class="project-grid-info">
        <div class="project-grid-number">0${l+1}</div>
        <h2 class="project-grid-title">${t.title}</h2>
        <p class="project-grid-subtitle">${t.subtitle}</p>
      </div>
    </a>
  `).join("");return`
    <div class="sketchbook-view projects-view projects-grid-view">
      <!-- LAAG 1: GIANT BACKGROUND TYPOGRAPHY -->
      <div class="bg-typography-container">
        <div class="bg-text bg-text-projects">
          <span>PRO</span>
          <span>JECTEN</span>
        </div>
      </div>

      <!-- INTRO TEKST -->
      <div class="projects-grid-header">
        <div class="text-block-handwritten projects-intro-text">
          <p>${d.projectsIntro}</p>
        </div>
        ${w(46,"star-projects-header")}
      </div>

      <!-- PROJECT GRID -->
      <div class="projects-grid">
        ${o}
      </div>

      <!-- Doodle decorations -->
      ${E(120,60,"scribble-projects-deco")}
      ${A("dot-grid-projects-deco")}

      <style>
        .star-projects-header {
          display: inline-block;
          margin-left: 1.5rem;
          vertical-align: middle;
        }

        .projects-grid-view {
          min-height: 100vh;
          padding-bottom: 6rem;
        }

        .projects-grid-header {
          position: relative;
          z-index: 10;
          padding: 8rem 5% 2rem 5%;
          display: flex;
          align-items: center;
          gap: 1.5rem;
          flex-wrap: wrap;
        }

        .projects-intro-text {
          max-width: 600px;
        }

        .projects-grid {
          position: relative;
          z-index: 10;
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 2.5rem;
          padding: 1rem 5% 4rem 5%;
          max-width: 1400px;
          margin: 0 auto;
        }

        .project-grid-card {
          display: block;
          text-decoration: none;
          color: inherit;
          border: 2.5px solid var(--black, #111);
          border-radius: 16px;
          overflow: hidden;
          background: var(--white, #fff);
          box-shadow: 6px 6px 0px var(--yellow, #F5E642);
          transition: transform 0.2s ease, box-shadow 0.2s ease;
          cursor: pointer;
        }

        .project-grid-card:hover {
          transform: translate(-3px, -3px);
          box-shadow: 9px 9px 0px var(--yellow, #F5E642);
        }

        .project-grid-thumb {
          position: relative;
          width: 100%;
          aspect-ratio: 16/10;
          overflow: hidden;
          background: #eee;
        }

        .project-grid-thumb img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
          transition: transform 0.4s ease;
        }

        .project-grid-card:hover .project-grid-thumb img {
          transform: scale(1.04);
        }

        .project-grid-overlay {
          position: absolute;
          inset: 0;
          background: rgba(0,0,0,0.45);
          display: flex;
          align-items: center;
          justify-content: center;
          opacity: 0;
          transition: opacity 0.3s ease;
        }

        .project-grid-card:hover .project-grid-overlay {
          opacity: 1;
        }

        .project-grid-view-label {
          color: #fff;
          font-size: 1.2rem;
          font-weight: 600;
          letter-spacing: 0.05em;
          text-transform: uppercase;
        }

        .project-grid-info {
          padding: 1.2rem 1.5rem 1.5rem 1.5rem;
          display: flex;
          flex-direction: column;
          gap: 0.3rem;
        }

        .project-grid-number {
          font-size: 2.5rem;
          font-weight: 900;
          color: var(--yellow, #F5E642);
          -webkit-text-stroke: 2px var(--black, #111);
          line-height: 1;
        }

        .project-grid-title {
          font-size: 1.5rem;
          font-weight: 800;
          color: var(--black, #111);
          margin: 0.2rem 0 0 0;
        }

        .project-grid-subtitle {
          font-size: 1rem;
          color: #555;
          margin: 0;
        }

        .scribble-projects-deco {
          position: fixed;
          bottom: 2rem;
          right: 2rem;
          opacity: 0.3;
          pointer-events: none;
          z-index: 1;
        }

        .dot-grid-projects-deco {
          position: fixed;
          top: 6rem;
          right: 1rem;
          opacity: 0.4;
          pointer-events: none;
          z-index: 1;
        }

        @media (max-width: 768px) {
          .projects-grid {
            grid-template-columns: 1fr;
          }
        }
      </style>
    </div>
  `}function Y(e="project-1"){const o=d.projects.find(r=>r.slug===e)||d.projects[0],t=d.projects.findIndex(r=>r.slug===e),l=String(t+1).padStart(2,"0"),s=o.images.map((r,m)=>`
    <div class="detail-photo-item lightbox-trigger" data-src="${r}" style="cursor:pointer;">
      <img src="${r}" alt="${o.title} — foto ${m+1}" loading="lazy" />
    </div>
  `).join("");return`
    <div class="sketchbook-view project-detail-view">

      <div class="detail-wrap">

        <!-- ── HEADER ── -->
        <div class="detail-header">
          <div class="detail-header-meta">
            <span class="detail-project-num">${l}</span>
            <div class="detail-header-text">
              <h1 class="detail-title">${o.title}</h1>
              <p class="detail-subtitle">${o.subtitle}</p>
            </div>
            <div class="detail-star">${w(52)}</div>
          </div>
          <p class="detail-description">${o.description}</p>
        </div>

        <!-- ── TEKSTBLOK 1 ── -->
        <div class="detail-textblock detail-textblock--yellow">
          <div class="detail-textblock-label">Eindconcept</div>
          <p>${o.text1}</p>
        </div>

        <!-- ── FOTOGALERIJ ── -->
        <div class="detail-gallery">
          ${s}
        </div>

        <!-- ── TEKSTBLOK 2 ── -->
        <div class="detail-textblock detail-textblock--white">
          <div class="detail-textblock-label">Schetsen &amp; Proces</div>
          <p>${o.text2}</p>
        </div>

        <!-- ── TERUG KNOP ── -->
        <div class="detail-back">
          <a href="/projecten" class="detail-back-link" data-link>
            ${T("left",32,22)}
            <span>Terug naar alle projecten</span>
          </a>
        </div>

      </div>
    </div>

    <style>
      /* ─── WRAPPER ─────────────────────────────────────── */
      .detail-wrap {
        max-width: 1300px;
        margin: 0 auto;
        padding: 6rem 4% 6rem;
        display: flex;
        flex-direction: column;
        gap: 3rem;
      }

      /* ─── HEADER ──────────────────────────────────────── */
      .detail-header {
        display: flex;
        flex-direction: column;
        gap: 1.5rem;
      }

      .detail-header-meta {
        display: flex;
        align-items: flex-start;
        gap: 1.5rem;
        flex-wrap: wrap;
      }

      .detail-project-num {
        font-size: 5rem;
        font-weight: 900;
        line-height: 1;
        color: var(--yellow, #F5E642);
        -webkit-text-stroke: 2.5px var(--black, #111);
        flex-shrink: 0;
      }

      .detail-header-text {
        flex: 1;
        min-width: 200px;
      }

      .detail-title {
        font-size: clamp(2rem, 5vw, 3.5rem);
        font-weight: 900;
        margin: 0 0 0.3rem 0;
        line-height: 1.1;
        color: var(--black, #111);
      }

      .detail-subtitle {
        font-size: 1.15rem;
        color: #555;
        margin: 0;
        font-style: italic;
      }

      .detail-star {
        flex-shrink: 0;
        margin-top: 0.25rem;
      }

      .detail-description {
        font-size: 1.2rem;
        line-height: 1.7;
        color: var(--black, #111);
        max-width: 780px;
        margin: 0;
        border-left: 3px solid var(--yellow, #F5E642);
        padding-left: 1.25rem;
      }

      /* ─── TEKSTBLOKKEN ────────────────────────────────── */
      .detail-textblock {
        border: 2.5px solid var(--black, #111);
        border-radius: 14px;
        padding: 1.6rem 2rem;
        position: relative;
      }

      .detail-textblock--yellow {
        background: var(--yellow, #F5E642);
        box-shadow: 5px 5px 0 var(--black, #111);
      }

      .detail-textblock--white {
        background: var(--white, #fff);
        box-shadow: 5px 5px 0 var(--yellow, #F5E642);
      }

      .detail-textblock-label {
        font-size: 0.75rem;
        font-weight: 800;
        letter-spacing: 0.12em;
        text-transform: uppercase;
        color: var(--black, #111);
        margin-bottom: 0.6rem;
        opacity: 0.65;
      }

      .detail-textblock p {
        font-size: 1.1rem;
        line-height: 1.75;
        color: var(--black, #111);
        margin: 0;
      }

      /* ─── FOTOGALERIJ ─────────────────────────────────── */
      .detail-gallery {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        gap: 1.5rem;
      }

      .detail-photo-item {
        border: 2.5px solid var(--black, #111);
        border-radius: 12px;
        overflow: hidden;
        background: #f0f0f0;
        aspect-ratio: 4 / 3;
        transition: transform 0.2s ease, box-shadow 0.2s ease;
        box-shadow: 4px 4px 0 var(--black, #111);
      }

      .detail-photo-item:hover {
        transform: translate(-2px, -2px);
        box-shadow: 6px 6px 0 var(--yellow, #F5E642);
      }

      .detail-photo-item img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        display: block;
        transition: transform 0.4s ease;
      }

      .detail-photo-item:hover img {
        transform: scale(1.04);
      }

      /* Odd last photo spans full width */
      .detail-photo-item:last-child:nth-child(odd) {
        grid-column: 1 / -1;
        aspect-ratio: 16 / 7;
      }

      /* ─── TERUG KNOP ──────────────────────────────────── */
      .detail-back {
        display: flex;
        justify-content: center;
        padding-top: 1rem;
      }

      .detail-back-link {
        display: inline-flex;
        align-items: center;
        gap: 0.6rem;
        text-decoration: none;
        color: var(--black, #111);
        font-size: 1.05rem;
        font-weight: 700;
        border: 2.5px solid var(--black, #111);
        border-radius: 50px;
        padding: 0.65rem 1.8rem;
        background: var(--white, #fff);
        box-shadow: 4px 4px 0 var(--black, #111);
        transition: transform 0.18s ease, box-shadow 0.18s ease, background 0.18s ease;
      }

      .detail-back-link:hover {
        transform: translate(-2px, -2px);
        box-shadow: 6px 6px 0 var(--yellow, #F5E642);
        background: var(--yellow, #F5E642);
      }

      /* ─── RESPONSIVE ──────────────────────────────────── */
      @media (max-width: 680px) {
        .detail-wrap {
          padding: 5rem 4% 4rem;
          gap: 2rem;
        }
        .detail-gallery {
          grid-template-columns: 1fr;
          gap: 1rem;
        }
        .detail-photo-item:last-child:nth-child(odd) {
          grid-column: 1;
          aspect-ratio: 4 / 3;
        }
        .detail-project-num {
          font-size: 3rem;
        }
      }
    </style>
  `}function q(){let e=document.getElementById("lightbox-modal");if(!e){e=document.createElement("div"),e.id="lightbox-modal",e.innerHTML=`
      <style>
        #lightbox-modal {
          position: fixed;
          inset: 0;
          z-index: 9999;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          background: rgba(0, 0, 0, 0.92);
          opacity: 0;
          pointer-events: none;
          transition: opacity 0.25s ease;
          padding: 1.5rem;
          box-sizing: border-box;
        }
        #lightbox-modal.lb-open {
          opacity: 1;
          pointer-events: all;
        }
        #lightbox-img-wrap {
          flex: 1;
          display: flex;
          align-items: center;
          justify-content: center;
          width: 100%;
          max-height: calc(100vh - 120px);
          overflow: hidden;
        }
        #lightbox-img {
          max-width: 100%;
          max-height: 100%;
          object-fit: contain;
          border-radius: 10px;
          box-shadow: 0 0 60px rgba(0,0,0,0.6);
          transform: scale(0.93);
          transition: transform 0.28s cubic-bezier(0.34, 1.56, 0.64, 1);
          display: block;
        }
        #lightbox-modal.lb-open #lightbox-img {
          transform: scale(1);
        }
        #lightbox-close-btn {
          flex-shrink: 0;
          margin-top: 1.5rem;
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          background: #fff;
          color: #111;
          border: 2.5px solid #111;
          border-radius: 50px;
          padding: 0.7rem 2rem;
          font-size: 1rem;
          font-weight: 700;
          cursor: pointer;
          box-shadow: 4px 4px 0 #F5E642;
          transition: transform 0.18s ease, box-shadow 0.18s ease, background 0.18s ease;
          font-family: inherit;
        }
        #lightbox-close-btn:hover {
          transform: translate(-2px, -2px);
          box-shadow: 6px 6px 0 #F5E642;
          background: #F5E642;
        }
        #lightbox-close-btn svg {
          flex-shrink: 0;
        }
      </style>
      <div id="lightbox-img-wrap">
        <img id="lightbox-img" src="" alt="Foto groot" />
      </div>
      <button id="lightbox-close-btn" type="button">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.8" stroke-linecap="round" stroke-linejoin="round">
          <path d="M19 12H5M12 19l-7-7 7-7"/>
        </svg>
        Ga terug
      </button>
    `,document.body.appendChild(e);const t=()=>{e.classList.remove("lb-open"),document.body.style.overflow=""};document.getElementById("lightbox-close-btn").addEventListener("click",t),e.addEventListener("click",l=>{(l.target===e||l.target===document.getElementById("lightbox-img-wrap"))&&t()}),document.addEventListener("keydown",l=>{l.key==="Escape"&&e.classList.contains("lb-open")&&t()})}function o(t,l){const s=document.getElementById("lightbox-img");s.src=t,s.alt=l||"Foto",e.classList.add("lb-open"),document.body.style.overflow="hidden"}document.querySelectorAll(".detail-photo-item[data-src]").forEach(t=>{t.addEventListener("click",()=>{var l;o(t.dataset.src,((l=t.querySelector("img"))==null?void 0:l.alt)||"")})}),document.querySelectorAll(".project-detail-view .gallery-item img, .project-detail-view .project2-card img").forEach(t=>{t.style.cursor="zoom-in",t.addEventListener("click",()=>o(t.src,t.alt))})}function X(){let e=document.getElementById("cursor-studio-modal");if(!e){let k=function(){const a=document.createElement("canvas");a.width=48,a.height=48;const n=a.getContext("2d");return n.imageSmoothingEnabled=!1,n.drawImage(r,0,0,48,48),a.toDataURL("image/png")},x=function(){m.clearRect(0,0,g,g);const a=u.children;for(let n=0;n<v.length;n++){const y=v[n],j=a[n];if(y){m.fillStyle=y;const $=n%g,C=Math.floor(n/g);m.fillRect($,C,1,1),j.style.backgroundColor=y}else j.style.backgroundColor="transparent"}b.src=k()},p=function(a){a<0||a>=v.length||(h==="pen"?v[a]=c:h==="eraser"&&(v[a]=null),x())};var t=k,l=x,s=p;e=document.createElement("div"),e.id="cursor-studio-modal",e.className="cursor-modal hidden",e.setAttribute("aria-hidden","true"),e.innerHTML=`
      <div class="cursor-overlay" id="cursor-overlay"></div>
      <div class="cursor-dialog">
        <div class="cursor-dialog-header">
          <h2>✏️ Teken je eigen cursor</h2>
          <button class="cursor-close-x" id="cursor-close-x" type="button" title="Sluiten">&times;</button>
        </div>
        
        <p class="cursor-intro-text">
          Teken je eigen icoontje of figuurtje in het stramien. Klik onderaan op <strong>'Toepassen'</strong> om je tekening als actieve muiscursor te gebruiken!
        </p>

        <div class="cursor-studio-body">
          <!-- CANVAS GRID CONTAINER -->
          <div class="cursor-canvas-wrap">
            <canvas id="cursor-canvas" width="24" height="24"></canvas>
            <div class="canvas-grid-overlay" id="canvas-grid-overlay"></div>
          </div>

          <!-- TOOLS & PALETTE SIDEBAR -->
          <div class="cursor-tools-panel">
            <div class="tool-section">
              <span class="tool-label">Gereedschap:</span>
              <div class="tool-buttons">
                <button type="button" id="tool-pen" class="tool-btn active" title="Pen">✏️ Pen</button>
                <button type="button" id="tool-eraser" class="tool-btn" title="Gum">🧹 Gum</button>
                <button type="button" id="tool-clear" class="tool-btn danger" title="Wissen">🗑️ Wissen</button>
              </div>
            </div>

            <div class="tool-section">
              <span class="tool-label">Kleuren:</span>
              <div class="color-palette">
                <button type="button" class="color-swatch active" data-color="#181819" style="background-color: #181819;" title="Zwart"></button>
                <button type="button" class="color-swatch" data-color="#fbe80c" style="background-color: #fbe80c;" title="Geel"></button>
                <button type="button" class="color-swatch" data-color="#ff4757" style="background-color: #ff4757;" title="Rood"></button>
                <button type="button" class="color-swatch" data-color="#2e86de" style="background-color: #2e86de;" title="Blauw"></button>
                <button type="button" class="color-swatch" data-color="#2ed573" style="background-color: #2ed573;" title="Groen"></button>
                <button type="button" class="color-swatch" data-color="#ffffff" style="background-color: #ffffff; border: 1px solid #ccc;" title="Wit"></button>
              </div>
            </div>

            <div class="tool-section preview-section">
              <span class="tool-label">Voorbeeld op schaal:</span>
              <div class="cursor-preview-box">
                <img id="cursor-preview-img" src="" alt="Cursor Preview" />
              </div>
            </div>
          </div>
        </div>

        <!-- BOTTOM ACTION BUTTONS -->
        <div class="cursor-dialog-footer">
          <button id="cursor-reset-btn" class="cursor-btn-secondary" type="button">Standaard Cursor</button>
          <button id="cursor-apply-btn" class="cursor-btn-primary" type="button">✨ Toepassen</button>
        </div>
      </div>
    `,document.body.appendChild(e);const r=document.getElementById("cursor-canvas"),m=r.getContext("2d"),b=document.getElementById("cursor-preview-img"),u=document.getElementById("canvas-grid-overlay"),g=24;let c="#181819",h="pen",f=!1,v=Array(g*g).fill(null);for(let a=2;a<=16;a++)for(let n=2;n<=a;n++)n===2||n===a||a===16?v[a*g+n]="#181819":v[a*g+n]="#fbe80c";u.style.gridTemplateColumns=`repeat(${g}, 1fr)`,u.innerHTML="";for(let a=0;a<g*g;a++){const n=document.createElement("div");n.className="grid-cell",n.dataset.index=a,u.appendChild(n)}const L=a=>{const n=u.getBoundingClientRect(),y=a.clientX-n.left,j=a.clientY-n.top;if(y>=0&&y<n.width&&j>=0&&j<n.height){const $=Math.floor(y/n.width*g),D=Math.floor(j/n.height*g)*g+$;p(D)}};u.addEventListener("mousedown",a=>{f=!0,L(a)}),window.addEventListener("mousemove",a=>{f&&L(a)}),window.addEventListener("mouseup",()=>{f=!1}),u.addEventListener("touchstart",a=>{f=!0,a.touches.length>0&&L(a.touches[0])}),u.addEventListener("touchmove",a=>{f&&a.touches.length>0&&L(a.touches[0])}),u.addEventListener("touchend",()=>{f=!1}),document.getElementById("tool-pen").addEventListener("click",()=>{h="pen",document.getElementById("tool-pen").classList.add("active"),document.getElementById("tool-eraser").classList.remove("active")}),document.getElementById("tool-eraser").addEventListener("click",()=>{h="eraser",document.getElementById("tool-eraser").classList.add("active"),document.getElementById("tool-pen").classList.remove("active")}),document.getElementById("tool-clear").addEventListener("click",()=>{v.fill(null),x()}),document.querySelectorAll(".color-swatch").forEach(a=>{a.addEventListener("click",()=>{document.querySelectorAll(".color-swatch").forEach(n=>n.classList.remove("active")),a.classList.add("active"),c=a.dataset.color,h="pen",document.getElementById("tool-pen").classList.add("active"),document.getElementById("tool-eraser").classList.remove("active")})}),x();const z=()=>{const a=k();let n=document.getElementById("dynamic-custom-cursor-style");n||(n=document.createElement("style"),n.id="dynamic-custom-cursor-style",document.head.appendChild(n)),n.innerHTML=`
        *, html, body, a, button, input, select, textarea, .nav-item, .project-card-asymmetric {
          cursor: url('${a}') 4 4, auto !important;
        }
      `,I()},O=()=>{const a=document.getElementById("dynamic-custom-cursor-style");a&&a.remove(),I()},I=()=>{e.classList.add("hidden"),e.setAttribute("aria-hidden","true")};document.getElementById("cursor-apply-btn").addEventListener("click",z),document.getElementById("cursor-reset-btn").addEventListener("click",O),document.getElementById("cursor-close-x").addEventListener("click",I),document.getElementById("cursor-overlay").addEventListener("click",I)}const o=document.getElementById("cursor-studio-trigger");o&&o.addEventListener("click",()=>{e.classList.remove("hidden"),e.setAttribute("aria-hidden","false")})}function Z(){let e=document.getElementById("easter-egg-modal"),o=null,t=null,l=null;e||(e=document.createElement("div"),e.id="easter-egg-modal",e.className="easter-egg-modal hidden",e.setAttribute("aria-hidden","true"),e.innerHTML=`
      <div class="easter-egg-overlay"></div>
      <div class="easter-egg-dialog minimal-dialog">
        <!-- ONLY THE PROGRESS BAR -->
        <div id="easter-egg-loading-phase">
          <div class="easter-egg-progress-wrap">
            <div class="easter-egg-progress-bar" id="easter-egg-bar"></div>
          </div>
        </div>
      </div>
    `,document.body.appendChild(e));const s=67,r=10;function m(){const c=document.createElement("canvas");c.className="easter-egg-confetti-canvas",c.width=window.innerWidth,c.height=window.innerHeight,e.appendChild(c);const h=c.getContext("2d"),f=["#fbe80c","#181819","#ff4757","#2e86de","#2ed573","#ffa502","#ff6b81"],v=Array.from({length:140},()=>({x:Math.random()*c.width,y:Math.random()*c.height-c.height,r:Math.random()*8+4,d:Math.random()*90,color:f[Math.floor(Math.random()*f.length)],tilt:Math.random()*10-10,tiltAngleIncremental:Math.random()*.07+.05,tiltAngle:0}));let k;function x(){h.clearRect(0,0,c.width,c.height),v.forEach(p=>{p.tiltAngle+=p.tiltAngleIncremental,p.y+=(Math.cos(p.d)+3+p.r/2)*1.3,p.tilt=Math.sin(p.tiltAngle)*15,h.beginPath(),h.lineWidth=p.r,h.strokeStyle=p.color,h.moveTo(p.x+p.tilt+p.r/2,p.y),h.lineTo(p.x+p.tilt,p.y+p.tilt+p.r/2),h.stroke(),p.y>c.height&&(p.x=Math.random()*c.width,p.y=-20)}),k=requestAnimationFrame(x)}return x(),()=>{cancelAnimationFrame(k),c.remove()}}const b=()=>{t&&clearInterval(t),l&&clearTimeout(l),o&&(o(),o=null),e.classList.add("hidden"),e.setAttribute("aria-hidden","true")},u=()=>{const c=document.getElementById("easter-egg-loading-phase"),h=document.getElementById("easter-egg-bar");b(),c.classList.remove("hidden"),h.style.width="0%",e.classList.remove("hidden"),e.setAttribute("aria-hidden","false");const f=Date.now();t=setInterval(()=>{const v=Date.now()-f,k=Math.min(v/(s*1e3),1),x=Math.floor(k*100);h.style.width=`${x}%`,k>=1&&(clearInterval(t),c.classList.add("hidden"),o=m(),l=setTimeout(()=>{b()},r*1e3))},100)};document.querySelectorAll("#easter-egg-star-trigger, .star-home-bottom").forEach(c=>{c.style.cursor="pointer",c.style.zIndex="50",c.title="✨",c.addEventListener("click",u)})}function J(){const e=document.getElementById("app"),o=[{path:"/",view:()=>W()},{path:"/over-mij",view:()=>V()},{path:"/projecten",view:()=>_()}];function t(r){window.scrollTo({top:0,behavior:"smooth"});let m="",b=r;if(r.startsWith("/projecten/")){const g=r.replace("/projecten/","");m=Y(g)}else{const g=o.find(c=>c.path===r)||o[0];b=g.path,m=g.view()}const u=`
      ${H(b)}
      <main class="site-main">
        ${m}
      </main>
      ${F()}
    `;e.innerHTML=u,s(),K(),q(),U(),X(),Z()}function l(r){history.pushState(null,null,r),t(window.location.pathname)}function s(){document.querySelectorAll("a[data-link]").forEach(r=>{r.addEventListener("click",m=>{m.preventDefault();const b=r.getAttribute("href");b&&b!==window.location.pathname&&l(b)})})}window.addEventListener("popstate",()=>{t(window.location.pathname)}),t(window.location.pathname)}document.addEventListener("DOMContentLoaded",()=>{J()});
