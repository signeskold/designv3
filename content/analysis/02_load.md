---
Title: Last
Description: Webbplatsers laddningstid
Template: analysis
---

Webbplatsers laddningstid och användbarhet
=======================

Ett antal olika webbplatser har valts ut och testats för att mäta hur snabbt de laddas och om de innehåller några saker som kan förbättras med tanke på laddningstid och användbarhet.

<br>
Urval
-----------------------

Jag har valt att undersöka några kända svenska webbplatser för e-handel.

<br>
- **IKEA Group** är ett multinationellt möbelföretag, som grundades 1943 av Ingvar Kamprad som ett postorderföretag. Det omfattar nära 450 varuhus i omkring 50 länder, men bedriver även en omfattande e-handel. Webbsidan erbjuder c:a 12000 produkter och har årligen över två miljarder besökare[^1].

- **CDON AB** är ett svenskt börsnoterat e-handelsföretag som grundades 1999. CDON säljer produkter delvis från eget lager, men främst via externa handlare. År 2020 hade CDON omkring 1 500 externa handlare anslutna till sin nordiska marknadsplats. På CDON:s webbplats marknadsförs och säljs bland annat hemelektronik, böcker, spel, film, sport och fritidsartiklar, kläder, skor, leksaker, skönhetsprodukter samt möbler och inredning[^2].

- **Dustin** är en återförsäljare av IT-produkter med tillhörande tjänster. Bolaget grundades 1984 i en zoo-butik i Farsta med försäljning av färgade disketter via postorder, men utökade snart sortimentet[^3].

<br>
För varje webbplats har tre olika sidor analyserats:

<br>
- Huvudsidan (den svenska).
- En sida för en kategori av produkter.
- Sidan som informerar om köpevillkor.

<br>
Metod
-----------------------

Verktyget PageSpeed Insights[^4] har använts för att generera rapporter om webbsidornas
prestanda för såväl mobiltelefoner som datorer. Det listar även möjligheter till
förbättring av sidorna.

<br>
PageSpeed Insights har även en färgmarkering för resultatet. Grönt betyder att
värdet är bra, orange acceptabelt och rött att det är dåligt.

<br>
<table class="loadtools">
  <tr>
    <th>Mått</th>
    <th>Grönt</th>
    <th>Orange</th>
    <th>Rött</th>
    <th>Enhet</th>
    <th>Beskrivning</th>
  </tr>
  <tr>
    <td>First contentful paint (FCP)</td>
    <td>0-1,8</td>
    <td>1,8-3,0</td>
    <td>>3,0</td>
    <td>s</td>
    <td>Tiden det tar innan den första texten eller bilden kommer upp på skärmen.</td>
  </tr>
  <tr>
    <td>Speed index (SI)</td>
    <td>0-3,4</td>
    <td>3,4-5,8</td>
    <td>>5,8</td>
    <td>s</td>
    <td>Sammanvägt värde för hur lång tid det tar innan sidan är klar.</td>
  </tr>
  <tr>
    <td>Largest contentful paint (LCP)</td>
    <td>0-2,5</td>
    <td>2,5-4,0</td>
    <td>>4,0</td>
    <td>s</td>
    <td>Tiden det tar innan större delen av texten eller bilden kommer upp på skärmen.</td>
  </tr>
  <tr>
    <td>Time to Interactive (TTI)</td>
    <td>0-3,8</td>
    <td>3,9-7,3</td>
    <td>>7,3</td>
    <td>s</td>
    <td>Tid det tar innan användaren kan interagera helt med sidan.</td>
  </tr>
  <tr>
    <td>Total blocking time (TBT)</td>
    <td>0-200</td>
    <td>200-600</td>
    <td>>600</td>
    <td>ms</td>
    <td>Totala blockeringstiden för alla JavaScript som tar mer än 50 ms att exekvera, mellan FCP och TTI.</td>
  </tr>
  <tr>
    <td>Cumulative layout shift (CLS)</td>
    <td>0-0,1</td>
    <td>0,1-0,25</td>
    <td>>0,25</td>
    <td>-</td>
    <td>Ett mått på hur mycket innehållet flyttas omkring i det synliga området.</td>
  </tr>
  <tr>
    <td>Prestanda</td>
    <td>90-100</td>
    <td>50-89</td>
    <td>0-49</td>
    <td>%</td>
    <td>Medelvärde av måtten ovan, viktat för att ge en balanserad bild av användarens upplevelse av sidans prestanda.</td>
  </tr>
</table>
Tabell 1: Mått i PageSpeed Insights.

<br>
Nätverksaktiviteten har mätts med hjälp av Chrome DevTools, ett utvecklingsverktyg
som är integrerat i webbläsaren Google Chrome.

<br>
<table class="loadtools">
  <tr>
    <th>Mått</th>
    <th>Enhet</th>
    <th>Beskrivning</th>
  </tr>
  <tr>
    <td>Devtools/Network/requests (DNr)</td>
    <td>-</td>
    <td>Antalet förfrågningar sedan DevTools öppnades.</td>
  </tr>
  <tr>
    <td>Devtools/Network/transferred (DNt)</td>
    <td>MB</td>
    <td>Förfrågningarnas totala nedladdningsstorlek.</td>
  </tr>
  <tr>
    <td>Devtools/Network/load (DNl)</td>
    <td>s</td>
    <td>Tiden det tar att ladda sidan.</td>
  </tr>
</table>
Tabell 2: Mått i DevTools/Network.

<br>
För varje sida har medelvärdet av tre olika mätningar beräknats.

<br>
Resultat
-----------------------

Rådata samlades i en OpenOffice Calc-fil som har exporterats till html-format[^5].
För varje sida anges tio olika mätvärden; sju från PageSpeed Insights och resten
från DevTools/Network. De listas nedan tillsammans med en kort beskrivning.
Mätvärdena visar namnen på engelska på webbsidan och dessa namn har behållits här.

<br>
## Ikea

<img src="%assets_url%/img/load/ikea.webp" alt="Ikea" width="100%">
Bild 1: ikea.com/sv/se (2021-12-31).

<br>
<table class="loads">
  <tr>
    <th></th>
    <th colspan="2">Huvudsida[6]</th>
    <th colspan="2">Kategori[7]</th>
    <th colspan="2">Köpevillkor[8]</th>    
    <th></th>
  </tr>
  <tr>
    <th></th>
    <th>Mobil</th>
    <th>Dator</th>
    <th>Mobil</th>
    <th>Dator</th>
    <th>Mobil</th>
    <th>Dator</th>
    <th>Enhet</th>
  </tr>
  <tr>
    <th>FCP</th>
    <td class="orange">3,0</td>
    <td class="green">0,8</td>
    <td class="orange">2,6</td>
    <td class="green">0,6</td>
    <td class="orange">2,3</td>
    <td class="green">0,6</td>
    <td>s</td>
  </tr>
  <tr>
    <th>SI</th>
    <td class="red">10,4</td>
    <td class="green">2,2</td>
    <td class="red">8,4</td>
    <td class="green">2,4</td>
    <td class="red">7,4</td>
    <td class="green">2,0</td>
    <td>s</td>
  </tr>
  <tr>
    <th>LCP</th>
    <td class="red">5,9</td>
    <td class="green">1,6</td>
    <td class="red">10,3</td>
    <td class="green">1,0</td>
    <td class="red">9,3</td>
    <td class="green">0,8</td>
    <td>s</td>
  </tr>
  <tr>
    <th>TTI</th>
    <td class="red">18,3</td>
    <td class="green">3,3</td>
    <td class="red">13,4</td>
    <td class="green">2,7</td>
    <td class="red">11,9</td>
    <td class="green">2,0</td>
    <td>s</td>
  </tr>
  <tr>
    <th>TBT</th>
    <td class="red">1820</td>
    <td class="green">97</td>
    <td class="red">1893</td>
    <td class="green">193</td>
    <td class="red">1450</td>
    <td class="green">27</td>
    <td>ms</td>
  </tr>
  <tr>
    <th>CLS</th>
    <td class="green">0,010</td>
    <td class="green">0,001</td>
    <td class="green">0,031</td>
    <td class="green">0,000</td>
    <td class="green">0,031</td>
    <td class="green">0,000</td>
    <td>-</td>
  </tr>
  <tr>
    <th>Prestanda</th>
    <td class="red">29</td>
    <td class="orange">84</td>
    <td class="red">27</td>
    <td class="orange">86</td>
    <td class="red">32</td>
    <td class="green">95</td>
    <td>%</td>
  </tr>
  <tr>
    <th>DNr</th>
    <td>145</td>
    <td>151</td>
    <td>147</td>
    <td>170</td>
    <td>113</td>
    <td>124</td>
    <td>-</td>
  </tr>
  <tr>
    <th>DNt</th>
    <td>3,1</td>
    <td>2,4</td>
    <td>2,1</td>
    <td>2,4</td>
    <td>1,9</td>
    <td>1,9</td>
    <td>MB</td>
  </tr>
  <tr>
    <th>DNl</th>
    <td>2,58</td>
    <td>2,50</td>
    <td>6,74</td>
    <td>4,31</td>
    <td>2,91</td>
    <td>3,44</td>
    <td>s</td>
  </tr>
</table>
Tabell 3: Resultat för Ikea[^6] [^7] [^8].

<br>
<table class="poss">
  <tr>
    <th>Sida</th>
    <th>Mobil</th>
    <th>Dator</th>
  </tr>
  <tr>
    <td rowspan="4">Hem</td>
    <td>Reducera JavaScript som inte används</td>
    <td>Reducera JavaScript som inte används</td>
  </tr>
  <tr>
    <td>Minska serverns första svarstid</td>
    <td>Minska serverns första svarstid</td>
  </tr>
  <tr>
    <td>Ta bort resurser som blockerar renderingen</td>
    <td>Ta bort resurser som blockerar renderingen</td>
  </tr>
  <tr>
    <td>Använd bilder med rätt storlek</td>
    <td>Reducera CSS som inte används</td>
  </tr>
  <tr>
    <td rowspan="4">Kategori</td>
    <td>Minska serverns första svarstid</td>
    <td>Minska serverns första svarstid</td>
  </tr>
  <tr>
    <td>Reducera JavaScript som inte används</td>
    <td>Använd bilder med rätt storlek</td>
  </tr>
  <tr>
    <td>Ta bort resurser som blockerar renderingen</td>
    <td>Reducera JavaScript som inte används</td>
  </tr>
  <tr>
    <td>Reducera CSS som inte används</td>
    <td>Ta bort resurser som blockerar renderingen</td>
  </tr>
  <tr>
    <td rowspan="4">Villkor</td>
    <td>Reducera JavaScript som inte används</td>
    <td>Minska serverns första svarstid</td>
  </tr>
  <tr>
    <td>Ta bort resurser som blockerar renderingen</td>
    <td>Reducera JavaScript som inte används</td>
  </tr>
  <tr>
    <td>Minska serverns första svarstid</td>
    <td>Ta bort resurser som blockerar renderingen</td>
  </tr>
  <tr>
    <td>Reducera CSS som inte används</td>
    <td>Reducera CSS som inte används</td>
  </tr>
</table>
Tabell 4: Förbättringsmöjligheter för Ikea enligt PageSpeed Insights.

<br>
## CDON

<img src="%assets_url%/img/load/cdon.webp" alt="CDON" width="100%">
Bild 2: cdon.se (2021-12-31).

<br>
<table class="loads">
  <tr>
    <th></th>
    <th colspan="2">Huvudsida[9]</th>
    <th colspan="2">Kategori[10]</th>
    <th colspan="2">Köpevillkor[11]</th>
    <th></th>
  </tr>
  <tr>
    <th></th>
    <th>Mobil</th>
    <th>Dator</th>
    <th>Mobil</th>
    <th>Dator</th>
    <th>Mobil</th>
    <th>Dator</th>
    <th>Enhet</th>
  </tr>
  <tr>
    <th>FCP</th>
    <td class="red">3,9</td>
    <td class="green">1,4</td>
    <td class="red">4,4</td>
    <td class="green">1,6</td>
    <td class="orange">2,8</td>
    <td class="green">0,8</td>
    <td>s</td>
  </tr>
  <tr>
    <th>SI</th>
    <td class="red">6,8</td>
    <td class="green">2,2</td>
    <td class="red">6,9</td>
    <td class="green">2,4</td>
    <td class="green">2,8</td>
    <td class="green">0,8</td>
    <td>s</td>
  </tr>
  <tr>
    <th>LCP</th>
    <td class="red">9,2</td>
    <td class="green">2,4</td>
    <td class="red">10,0</td>
    <td class="green">2,1</td>
    <td class="orange">3,4</td>
    <td class="green">0,9</td>
    <td>s</td>
  </tr>
  <tr>
    <th>TTI</th>
    <td class="red">9,9</td>
    <td class="green">1,9</td>
    <td class="red">10,2</td>
    <td class="green">1,6</td>
    <td class="orange">4,6</td>
    <td class="green">1,0</td>
    <td>s</td>
  </tr>
  <tr>
    <th>TBT</th>
    <td class="orange">350</td>
    <td class="green">0</td>
    <td class="orange">220</td>
    <td class="green">0</td>
    <td class="green">197</td>
    <td class="green">7</td>
    <td>ms</td>
  </tr>
  <tr>
    <th>CLS</th>
    <td class="green">0,028</td>
    <td class="green">0,024</td>
    <td class="green">0,018</td>
    <td class="green">0,012</td>
    <td class="green">0,012</td>
    <td class="green">0,000</td>
    <td>-</td>
  </tr>
  <tr>
    <th>Prestanda</th>
    <td class="red">47</td>
    <td class="orange">79</td>
    <td class="red">49</td>
    <td class="orange">79</td>
    <td class="orange">82</td>
    <td class="green">99</td>
    <td>%</td>
  </tr>
  <tr>
    <th>DNr</th>
    <td>152</td>
    <td>161</td>
    <td>107</td>
    <td>110</td>
    <td>30</td>
    <td>29</td>
    <td>-</td>
  </tr>
  <tr>
    <th>DNt</th>
    <td>1,200</td>
    <td>1,200</td>
    <td>0,875</td>
    <td>0,900</td>
    <td>0,435</td>
    <td>0,432</td>
    <td>MB</td>
  </tr>
  <tr>
    <th>DNl</th>
    <td>3,20</td>
    <td>3,67</td>
    <td>3,36</td>
    <td>4,21</td>
    <td>0,66</td>
    <td>0,70</td>
    <td>s</td>
  </tr>
</table>
Tabell 5: Resultat för CDON[^9] [^10] [^11].

<br>
<table class="poss">
  <tr>
    <th>Sida</th>
    <th>Mobil</th>
    <th>Dator</th>
  </tr>
  <tr>
    <td rowspan="3">Hem</td>
    <td>Minska serverns första svarstid</td>
    <td>Reducera JavaScript som inte används</td>
  </tr>
  <tr>
    <td>Reducera JavaScript som inte används</td>
    <td>Minska serverns första svarstid</td>
  </tr>
  <tr>
    <td>Använd bilder med rätt storlek</td>
    <td></td>
  </tr>
  <tr>
    <td rowspan="1">Kategori</td>
    <td>Reducera JavaScript som inte används</td>
    <td>Minska serverns första svarstid</td>
  </tr>
  <tr>
    <td rowspan="3">Villkor</td>
    <td>Ta bort resurser som blockerar renderingen</td>
    <td>Ta bort resurser som blockerar renderingen</td>
  </tr>
  <tr>
    <td>Reducera JavaScript som inte används</td>
    <td>Reducera JavaScript som inte används</td>
  </tr>
  <tr>
    <td>Reducera CSS som inte används</td>
    <td></td>
  </tr>
</table>
Tabell 6: Förbättringsmöjligheter för CDON enligt PageSpeed Insights.

<br>
## Dustinhome

<img src="%assets_url%/img/load/dustinhome.webp" alt="Dustinhome" width="100%">
Bild 3: dustinhome.se (2021-12-31).

<br>
<table class="loads">
  <tr>
    <th></th>
    <th colspan="2">Huvudsida[12]</th>
    <th colspan="2">Kategori[13]</th>
    <th colspan="2">Köpevillkor[14]</th>
    <th></th>
  </tr>
  <tr>
    <th></th>
    <th>Mobil</th>
    <th>Dator</th>
    <th>Mobil</th>
    <th>Dator</th>
    <th>Mobil</th>
    <th>Dator</th>
    <th>Enhet</th>
  </tr>
  <tr>
    <th>FCP</th>
    <td class="orange">2,9</td>
    <td class="green">0,7</td>
    <td class="orange">2,4</td>
    <td class="green">0,6</td>
    <td class="orange">2,7</td>
    <td class="green">0,7</td>
    <td>s</td>
  </tr>
  <tr>
    <th>SI</th>
    <td class="red">14,6</td>
    <td class="green">3,3</td>
    <td class="orange">8,6</td>
    <td class="green">2,2</td>
    <td class="orange">5,5</td>
    <td class="green">1,6</td>
    <td>s</td>
  </tr>
  <tr>
    <th>LCP</th>
    <td class="red">12,8</td>
    <td class="orange">2,7</td>
    <td class="red">13,3</td>
    <td class="orange">2,6</td>
    <td class="red">4,2</td>
    <td class="green">0,8</td>
    <td>s</td>
  </tr>
  <tr>
    <th>TTI</th>
    <td class="red">23,4</td>
    <td class="orange">4,8</td>
    <td class="red">16,9</td>
    <td class="green">3,2</td>
    <td class="red">12,4</td>
    <td class="green">2,3</td>
    <td>s</td>
  </tr>
  <tr>
    <th>TBT</th>
    <td class="red">7097</td>
    <td class="orange">403</td>
    <td class="red">5910</td>
    <td class="orange">423</td>
    <td class="red">1553</td>
    <td class="orange">393</td>
    <td>ms</td>
  </tr>
  <tr>
    <th>CLS</th>
    <td class="red">0,344</td>
    <td class="green">0,001</td>
    <td class="green">0,016</td>
    <td class="green">0,001</td>
    <td class="red">0,250</td>
    <td class="green">0,000</td>
    <td>-</td>
  </tr>
  <tr>
    <th>Prestanda</th>
    <td class="red">11</td>
    <td class="orange">55</td>
    <td class="red">25</td>
    <td class="orange">61</td>
    <td class="red">37</td>
    <td class="orange">80</td>
    <td>%</td>
  </tr>
  <tr>
    <th>DNr</th>
    <td>242</td>
    <td>246</td>
    <td>142</td>
    <td>144</td>
    <td>74</td>
    <td>81</td>
    <td>-</td>
  </tr>
  <tr>
    <th>DNt</th>
    <td>2,9</td>
    <td>2,9</td>
    <td>1,3</td>
    <td>1,3</td>
    <td>1,3</td>
    <td>1,3</td>
    <td>MB</td>
  </tr>
  <tr>
    <th>DNl</th>
    <td>2,61</td>
    <td>1,98</td>
    <td>5,20</td>
    <td>3,79</td>
    <td>2,22</td>
    <td>3,44</td>
    <td>s</td>
  </tr>
</table>
Tabell 7: Resultat för Dustinhome[^12] [^13] [^14].

<br>
<table class="poss">
  <tr>
    <th>Sida</th>
    <th>Mobil</th>
    <th>Dator</th>
  </tr>
  <tr>
    <td rowspan="4">Hem</td>
    <td>Reducera JavaScript som inte används</td>
    <td>Reducera JavaScript som inte används</td>
  </tr>
  <tr>
    <td>Skicka bilder i modernare bildformat</td>
    <td>Skicka bilder i modernare bildformat</td>
  </tr>
  <tr>
    <td>Reducera CSS som inte används</td>
    <td></td>
  </tr>
  <tr>
    <td>Ta bort resurser som blockerar renderingen</td>
    <td></td>
  </tr>
  <tr>
    <td rowspan="4">Kategori</td>
    <td>Reducera JavaScript som inte används</td>
    <td>Reducera CSS som inte används</td>
  </tr>
  <tr>
    <td>Reducera CSS som inte används</td>
    <td>Reducera JavaScript som inte används</td>
  </tr>
  <tr>
    <td>Minska serverns första svarstid</td>
    <td>Minska serverns första svarstid</td>
  </tr>
  <tr>
    <td>Ta bort resurser som blockerar renderingen</td>
    <td>Använd bilder med rätt storlek</td>
  </tr>
  <tr>
    <td rowspan="4">Villkor</td>
    <td>Reducera JavaScript som inte används</td>
    <td>Reducera JavaScript som inte används</td>
  </tr>
  <tr>
    <td>Ta bort resurser som blockerar renderingen</td>
    <td>Ta bort resurser som blockerar renderingen</td>
  </tr>
  <tr>
    <td>Reducera CSS som inte används</td>
    <td>Reducera CSS som inte används</td>
  </tr>
  <tr>
    <td>Skjut upp inläsningen av bilder som inte visas på skärmen</td>
    <td></td>
  </tr>
</table>
Tabell 8: Förbättringsmöjligheter för Dustinhome enligt PageSpeed Insights.

<br>
Analys
-----------------------

Prestandamåttet är ett viktat medelvärde av de andra måtten från PageSpeed Insights och
kan därför ses som ett generellt mått på hur användarens upplevelse av en webbplats är.
Man skulle förvänta sig att sidorna med köpevillkor, som saknar bilder och bara innehåller
text och länkar, får det bästa betyget här. Så är också fallet, men för Ikea är skillnaden
inte så stor. Nu är de sidorna knappast de som besökarna dröjer kvar längst vid, utan
det är de andra sidorna som lär vara intressantast. Detta bör vi ha i åtanke vid undersökningen.

<br>
Vi kan då konstatera att ingen av aktörerna kommer upp i prestandamåttet 90, vilket
är gränsen för vad PageSpeed Insights anser vara bra. Generellt så presterar sidorna
bättre på en dator än på en mobiltelefon. Det är bara CDON som närmar sig acceptabla
värden för mobila enheter. Ikeas målgrupp vill nog gärna kunna se ordentligt på produkten,
gärna från olika vinklar och i olika miljöer, medan detta är mindre viktigt för någon
som vill köpa en film från CDON. Detta är en tänkbar förklaring till att CDON tycks
satsa mer på mobila enheter. Dustinhome är också bäst på stora skärmar, men presterar
klart sämst av de tre på båda plattformarna.

<br>
Det som alla är bäst på är den visuella stabiliteten (CLS). När en knapp väl visar
sig i bilden, flyttar den inte på sig precis när man skall trycka på den. Dustinhome
har dock ett par sidor som är flagranta undantag.

<br>
Om vi ser på de förbättringsmöjligheter som PageSpeed Insights visar, så är mönstret
ungefär detsamma för alla aktörerna. Det är JavaScript-koden som slöar ner sidorna. Detta
kan ske på två sätt. Om koden är renderingsblockerande, måste webbläsaren
ladda ner och exekvera skriptet innan den kan fortsätta med andra uppgifter som
behövs för att rita upp sidan. Även om den är asynkron, konkurrerar koden om
bandbredden med andra resurser, vilket försämrar prestandan. En del mobilanvändare
kanske betalar för hur mycket data de laddar ned och vill då inte ha data som inte
används.

<br>
Även CSS-filer slöar ner sidorna om de innehåller regler som inte används. Bilderna
bör heller inte vara större än vad skärmupplösningen medger. Formatet har också betydelse.
JPEG är oftast snabbare än PNG, men PageSpeed Insights rekommenderar istället att
man använder modernare format som WebP och AVIF.

<br>
DevTools har för övrigt verktyg både för att reducera JavaScript och CSS.

<br>
En annan möjlighet till förbättring är att minska serverns svarstid, men det kan
vara svårare att åstadkomma. Kanske servern måste hämta data från en databas. Uppgradering
av hårdvaran kan vara en lösning här.

<br>
Tre sekunder verkar vara en rimlig gräns för laddningstiden. Då bör man i alla
fall kunna se stora delar av sidan. Jag upplever att alla de undersökta webbplatserna
är tillräckligt snabba om man har en bra uppkoppling.

<br>
Vilken är då vinnaren i vår undersökning? Ikea och CDON är ganska likvärdiga när
det gäller datorplattformen, men CDON vinner genom att prestera bättre på mobila
enheter. Dustinhome kommer klart sist.

<br>
Övrigt
-----------------------

Signe Sköld har författat den här rapporten.

<br>
Referenser
-----------------------

[^1]: https://en.wikipedia.org/wiki/IKEA
[^2]: https://sv.wikipedia.org/wiki/CDON
[^3]: https://sv.wikipedia.org/wiki/Dustin
[^4]: https://pagespeed.web.dev/
[^5]: https://www.student.bth.se/~sisl19/dbwebb-kurser/design/me/portfolio/assets/calc/load.html
[^6]: https://www.ikea.com/se/sv
[^7]: https://www.ikea.com/se/sv/cat/moebelgrupper-55036/
[^8]: https://www.ikea.com/se/sv/customer-service/terms-conditions/koep-och-leveransvillkor-pub4a74d9d0
[^9]: https://cdon.se/
[^10]: https://cdon.se/musik/genres/ovriga-genres/julmusik/
[^11]: https://help.cdon.com/hc/sv/articles/360026395371-K%C3%B6p-leveransvillkor
[^12]: https://www.dustinhome.se/
[^13]: https://www.dustinhome.se/group/hardvara/datorer-surfplattor/barbara-datorer/professionella
[^14]: https://www.dustinhome.se/service/forsaljningsvillkor
