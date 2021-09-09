const history = ["Heim","Heim","Heim",]
 let i = 3;
 let Previouspage

window.addEventListener("load", () =>{
    console.log("hello")
});

window.addEventListener("keydown", (e) =>{
    document.body.onkeydown = function(e){
        if (e.keyCode == 8){
        window[Previouspage]();
        console.log(i)
        console.log(Previouspage)
        console.log(history)
    }}})


function Heim(){
    
    Previouspage = "Heim"
    document.getElementById("h2").style.textAlign = "center";
    document.getElementById("h2").innerHTML = "Vælkomin til Ordatok.fo";
    document.getElementById("p1").innerHTML = "Endamáli við síðuni er at samla øll føroysk orðatøk. ríkað títt<br>"
    +"orðatilfeingi við orðatøkum. Veist tú um eitt orðatak sum manglar á<br>"
    +"síðuni, so send okkum ein teldupost á Ordatok@Oradtok.fo. Heldur tú<br>"
    +"teg kenna týdningin av einum orðataki, skriva so eina viðmerking og<br>"
    +"les eisini hvat onnur halda.<br>"
    +"Kennur tú ella hevur tú sjálvur funnið uppá eitt orðatak sum tú heldur<br>"
    +"manglar á síðuni, so send okkum ein teldupost á Ordatok@Oradtok.fo";
    picker()

    history.push("Heim");   // Adds "x" to history array 
    Previouspage = history[i++ -1] // Incriment Array for every new addition and go one index back
    

}

function A(){
    document.getElementById("pickerText").innerHTML = "";
    document.getElementById("center").style.width = "90%";
    document.getElementById("p1").style.textAlign = "left";
    document.getElementById("h2").innerHTML = "";
    document.getElementById("p1").innerHTML = "Alini er av og sponin eftir.<br><br>" 
    +"Allir draga sín bát væl omaneftir.<br><br>"
    +"Allur bati bøtir.<br><br>"
    +"Alt er hinum svanga søtt.<br><br>"
    +"Alt sodnar í sveins maga.<br><br>"
    +"Altíð bagir illum barni okkurt.<br><br>"
    +"Amari kemur aftan á sparara.";
    if(document.getElementById('
"btns").clicked == true)
    {
       alert("button was clicked");
    }

    history.push("A");   // Adds "x" to history array 
     Previouspage = history[i++ -1] // Incriment Array for every new addition and go one index back

}

function Á(){
    Previouspage = "B"
    document.getElementById("pickerText").innerHTML = "";
    document.getElementById("center").style.width = "90%";
    document.getElementById("p1").style.textAlign = "left";
    document.getElementById("h2").innerHTML = "";
    document.getElementById("p1").innerHTML = "Ársgrøði er ársføði<br><br>"
    +"Ást fjalir lýti.<br><br>"
    +"Ámæli doyr ikki.<br><br>"
    +"Ágrýtin hundur fær ofta rivið skinn.<br><br>";

    history.push("Á");   // Adds "x" to history array 
     Previouspage = history[i++ -1] // Incriment Array for every new addition and go one index back
    
}

function B(){
    document.getElementById("pickerText").innerHTML = "";
    document.getElementById("center").style.width = "90%";
    document.getElementById("p1").style.textAlign = "left";
    document.getElementById("h2").innerHTML = "";
    document.getElementById("p1").innerHTML = "Barnamóðir vil bæði eta og heim bera.<br><br>"

+"Barnið dugir hvørki at lúgva ella loyna.<br><br>"
+"Barnið grætur ikki, tá ið tað fær vilja sín.<br><br>"
+"Betri er at elska diggan hund enn illan mann.<br><br>"
+"Bert er bróðurleyst bak.<br><br>"
+"Best er at binda um heilan fingur.<br><br>"
+"Best er heim at aka, meðan vagnurin er heilur.<br><br>"
+"Betri er at vera fyrir varin enn eftir snarin<br><br>"
+"Betri er at flýggja enn at falla.<br><br>"
+"Betri er at vera góðs mans frilla enn gift illa.<br><br>"
+"Betri er at verja borg enn at herja borg.<br><br>"
+"Betri er bøtandi hond enn spillandi tunga.<br><br>"
+"Betri er ill hurð fyri gátt enn eingin.<br><br>"
+"Betri er ill hurð fyri smáttuni enn eingin.<br><br>"
+"Betri er sjálvur at eiga enn bróður at biðja.<br><br>"
+"Betri er sund millum vinir og fjørður millum brøður.<br><br>"
+"Betri eru smáir fiskar enn tómir diskar.<br><br>"
+"Betri lítið leivt, enn ovmikið etið.<br><br>"
+"Blindar eru ókunnar gøtur.<br><br>"
+"Blindur er bókleysur maður.<br><br>"
+"Bráð er barna lund.<br><br>"
+"Brent barn ræðist eld.<br><br>"
+"Betri er vátt enn brent.<br><br>"
+"Bundin er barnamóðir.<br><br>"
+"Bundin er bátleysur maður.<br><br>"
+"Bøndur skulu bóndum bjóða.";

history.push("B");   // Adds "x" to history array 
     Previouspage = history[i++ -1] // Incriment Array for every new addition and go one index back
}

function D(){
    document.getElementById("pickerText").innerHTML = "";
    document.getElementById("center").style.width = "90%";
    document.getElementById("p1").style.textAlign = "left";
    document.getElementById("h2").innerHTML = "";
    document.getElementById("p1").innerHTML = "Deyður ert tú høvuðleysur.<br><br>"
   +"Djúpt má hann níga, ið kyssa skal hønureyvina.<br><br>"
   +"Drúgt er tað, ið drýpur.<br><br>"
   +"Dugandi maður veit sær altíð vákn.<br><br>"
   +"Dult er gitanda manni orð.<br><br>"
   +"Dúglig móðir elur lata dóttur.<br><br>";
    
   history.push("D");   // Adds "x" to history array 
   Previouspage = history[i++ -1] // Incriment Array for every new addition and go one index back
    
}

function E(){
    document.getElementById("pickerText").innerHTML = "";
    document.getElementById("center").style.width = "90%";
    document.getElementById("p1").style.textAlign = "left";
    document.getElementById("h2").innerHTML = "";
    document.getElementById("p1").innerHTML = "Eftir látur kemur grátur.<br><br>"
    +"Eina ferð lúgvast kúgv í mýri.<br><br>"
    +"Ein kann leiða oksan àt ánni, men tíggju fáa hann ikki at drekka.<br><br>"
    +"Einar eru seinar hendur.<br><br>"
    +"Eingin biskupur er ovlærdur og eingin skúladrongur ovbardur.<br><br>"
    +"Eingin fer so við eikini, at hon ikki flýtur.<br><br>"
    +"Eingin fer so við trænum, at tað ikki flýtur.<br><br>"
    +"Eingin kann allar dyr at goyma.<br><br>"
    +"Eingin kann allar gáttir røkja.<br><br>"
    +"Eingin kennir mannin longri enn at tonnunum.<br><br>"
    +"Eingin kennir mein í annans bein.<br><br>"
    +"Eingin kvøður betur, enn hann kann.<br><br>"
    +"Eingin metir einbýli við tað, tað er vert.<br><br>"
    +"Eingin setur inn á einum streymtanga.<br><br>"
    +"Eingin skal kanna sær bitan, fyrr enn hann er svølgdur.<br><br>"
    +"Eingin toyggir seg longri, enn armarnir røkka.<br><br>"
    +"Eingin veit av søtum at siga, fyrr enn hann á beiskum bítur.<br><br>"
    +"Eingin veit á morgni at siga, hvar hann á kvøldi gistir.<br><br>"
    +"Eingin veit, hvar feigur flakkar.<br><br>"
    +"Einki er so balt, at tað verður ikki eina ferð alt.<br><br>"
    +"Einki er so ringt, at tað ikki er gott fyri okkurt.<br><br>"
    +"Eitil er í øllum feitum.<br><br>"
    +"Eitt brákar, annað brýtur.<br><br>"
    +"Eitt eyga er skjótt at bregða.<br><br>"
    +"Eitt fór í horn, annað í sorn.<br><br>"
    +"Eitt lúgvar, annað brýtur.<br><br>"
    +"Eitt løstar, og annað brýtur.<br><br>"
    +"Eitt toyggir, annað slítur og triðja brýtur.<br><br>"
    +"Elður er góður vinur, men ringur fíggjindi.<br><br>"
    +"Endurgerð og viðurgerð eru longstir vinir.<br><br>"
    +"Eydnan hjálpir tí reysta.<br><br>"
    +"Eyðkendur er úlvur í roði.<br><br>"
    +"Eygað er betri enn ársgerðin.<br><br>"
    +"Eymur er maður, ið agn sparir.<br><br>"
    +"Eymur sparir tað, armur etur.<br><br>";
    
    history.push("E");   // Adds "x" to history array 
     Previouspage = history[i++ -1] // Incriment Array for every new addition and go one index back

}

function F(){
    document.getElementById("pickerText").innerHTML = "";
    document.getElementById("center").style.width = "90%";
    document.getElementById("p1").style.textAlign = "left";
    document.getElementById("h2").innerHTML = "";
    document.getElementById("p1").innerHTML = "Fara upp á tjólegg og detta niður á langlegg."
+"Fátt er betri enn á orði havt.<br><br>"
+"Fátt er sum faðir, einki sum móðir.<br><br>"
+"Fátt man feigum forða.<br><br>"
+"Fátøk kona gevur høsnareggið út, og vil hava gásareggið aftur.<br><br>"
+"Fáur kann eitt barn at eiga.<br><br>"
+"Fáur leikar so í sjey ár sum í sjey dagar.<br><br>"
+"Fáur vurðar einbýli tað, ið tað er vert.<br><br>"
+"Feigdin dregur mannin.<br><br>"
+"Fingin er fest kona.<br><br>"
+"Fjandin er hálur um at halda.<br><br>"
+"Fjálgur er móður andi.<br><br>"
+"Fót setur eingin fyri annan, uttan fallkomin er sjálvur.<br><br>"
+"Fram kemur hann, ið hóvliga fer.<br><br>"
+"Frá høvdinum skalt tú hvalin skera, og frá kjølinum skalt tú bátin gera.<br><br>"
+"Fram kemur hann, ið hóvliga fer.<br><br>"
+"Fremmandur fuglur verður altíð happaður.<br><br>"
+"Frítt er Eystfelli frá at fara.<br><br>"
+"Frótt er høvur á fullum maga.<br><br>"
+"Fult er, áðrenn yvir flýtur.<br><br>"
+"Fyrr brestur enn bognar.<br><br>"
+"Fyrr er fult, enn yvir flýtur.<br><br>"
+"Fyrr trýtur lív enn leistar.<br><br>"
+"Fyrr trýtur streymur í á, enn kvinnu trótar ráð.<br><br>";

history.push("F");   // Adds "x" to history array 
     Previouspage = history[i++ -1] // Incriment Array for every new addition and go one index back
}

function G(){
    document.getElementById("pickerText").innerHTML = "";
    document.getElementById("center").style.width = "90%";
    document.getElementById("p1").style.textAlign = "left";
    document.getElementById("h2").innerHTML = "";
    document.getElementById("p1").innerHTML = "Galnir hundar fáa rivið skinn.<br><br>"
+"Gamlar vinir og gamlar gøtur skal eingin gloyma.<br><br>"
+"Gamal ravnur er ikki góður at narra.<br><br>"
+"Gamal ravnur er illur at narra.<br><br>"
+"Góður er gamalur i ráðum.<br><br>"
+"Ger skálkinum gott, hann lønir tær aftur við háð og spott.<br><br>"
+"Gjørd gerð fær onga vend.<br><br>"
+"Gløgt er gestsins eyga.<br><br>"
+"Gott er góðum at tæna.<br><br>"
+"Gott er at rista breiðar álir av annans mans húð.<br><br>"
+"Gott er at verja borg, so leingi eingin søkir.<br><br>"
+"Gott er mettum manni at bjóða.<br><br>"
+"Gott er óføddum at bæsa.<br><br>"
+"Góðar eru fátækra náðir.<br><br>"
+"Góðar gløður eftir góðan eld.<br><br>"
+"Góður er gamal í ráðum.<br><br>"
+"Góðvarin maður kemur seinastur í himmiríki.<br><br>"
+"Grør um gangandi fót, heima situr svøltandi kráka.<br><br>"
+"Gullið ger lítið uttan glitrar, matin vil eingin missa.<br><br>"
+"Gætt er um eitt eyga.<br><br>";

history.push("G");   // Adds "x" to history array 
     Previouspage = history[i++ -1] // Incriment Array for every new addition and go one index back
    
}

function H(){
    document.getElementById("pickerText").innerHTML = "";
    document.getElementById("center").style.width = "90%";
    document.getElementById("p1").style.textAlign = "left";
    document.getElementById("h2").innerHTML = "";
    document.getElementById("p1").innerHTML = "Hann doyr ikki, ið dýrt keypir.<br><br>"
+"Hann eigur ferðina, ið fyri ríður.<br><br>"
+"Hann eigur reiðina, ið fyri ríður.<br><br>"
+"Hann er ikki óður, ið ilt ræðist.<br><br>"
+"Hann er ikki ræddur, ið ilt ræðist.<br><br>"
+"Hann er ikki so haltur, sum hann hinkar.<br><br>"
+"Hann er ikki so ræddur sum illa klæddur.<br><br>"
+"Hann fellur, ið feigur er.<br><br>"
+"Hann fiskar, ið heim rør.<br><br>"
+"Hann fær byr, ið bíðar, og havn, ið rør.<br><br>"
+"Hann grætur ikki eftir gulli, ið ikki hevur sæð tað.<br><br>"
+"Hann missir ikki, ið fyrst fær.<br><br>"
+"Hann tekur at sær, ið sekaður er.<br><br>"
+"Hann verður ikki fiskaður við ongum agni.​<br><br>"
+"Hann, á morgni rýtur, á kvøldi drítur.<br><br>"
+"Hann er sum ein steinur. Hann ferd ikki longur enn tú kastar hann.<br><br>"
+"Hann, ið einki vágar, hann einki vinnur.<br><br>"
+"Hann, ið er sekur, inn at sær tekur.<br><br>"
+"Hann, ið fer reinur til vás, fer ofta skitin til stás.​<br><br>"
+"Hann, ið fer uppskrýddur í flór, fer onkuntíð skitin í kór.<br><br>"
+"Hann, ið nógvum skal bjóða, má hava mikið at sjóða.<br><br>"
+"Hann, sum býr millum úlvar, má ýla við teimum.<br><br>"
+"Hann sum hjálpur í neyð, hjálpur tvær ferðir.<br><br>"
+"Hann, ið ikki etur seg mettan, sleikir seg ikki mettan.<br><br>"
+"Hansara kvørn melur ikki altíð hveiti.<br><br>"
+"Har sum ein skriðan er lopin, er onnur væntandi.<br><br>"
+"Har sum tú ert ikki sjálvur, ert tú ikki meiri enn hálvur.<br><br>"
+"Har var hond happi hollari.​<br><br>"
+"Hatta er ikki hveiti á hansara kvørn.​<br><br>"
+"Heilt er nýtt sár.<br><br>"
+"Heima alin er burtur galin.<br><br>"
+"Her er sama tógvið á snælduni.<br><br>"
+"Hin ríki traðkar skógvarnar á hol, men hin fátæki kagar teir á hol.<br><br>"
+"Hin metti veit ikki, hvat svangur líður.<br><br>"
+"Hundar reka annans ørindi.<br><br>"
+"Hundur veit húsbóndans vilja.<br><br>"
+"Hundurin er sum húsbóndin.<br><br>"
+"Hvat skal heiðin hundur á kirkjugrund?<br><br>"
+"Hvat skal hveiti í hunds búk?<br><br>"
+"Hoyr um annan, hygg um teg sjálvan.<br><br>"
+"Hvønndagsskrúðir eru ikki hátíðisprúðar.<br><br>"
+"Hvør er sínum knúti kunnigastur.<br><br>"
+"Hvør fuglur letur við sínum nevi.<br><br>"
+"Hvør kelling livir til jóla.<br><br>"
+"Hvør rakar brandin at sínari køku.<br><br>"
+"Høgt er heimakeyp.<br><br>"
+"Høgt kall gevur høgt fall.<br><br>";

history.push("H");   // Adds "x" to history array 
     Previouspage = history[i++ -1] // Incriment Array for every new addition and go one index back
}

function I(){
    document.getElementById("pickerText").innerHTML = "";
    document.getElementById("center").style.width = "90%";
    document.getElementById("p1").style.textAlign = "left";
    document.getElementById("h2").innerHTML = "";
    document.getElementById("p1").innerHTML = "Ikki eigur at smíða nøgluna fyrr enn bátin.<br><br>" 
+"Ikki er alt gull, ið glitrar.<br><br>"
+"Ikki er gott at stjala, har tjóvur er húsbóndi.<br><br>"
+"Ikki er gott gamlan ravn at veiða.<br><br>"
+"Ikki er hundur ovbardur.<br><br>"
+"Ikki fiskast við ongum agni.<br><br>"
+"Ikki kemur í kór tað, ið sjálvt vil fara í flór.<br><br>"
+"Ikki kemur ófeigur í hel.<br><br>"
+"Ikki taka bátin eftir støvnunum ella píkuna eftir hárinum.<br><br>"
+"Ikki tekst kúgv av kúleysum manni.<br><br>"
+"Illur brandur liggur longst á eldinum.<br><br>"
+"Ilt er at binda hund við smørleyp.<br><br>"
+"Ilt er at byggja borð fyri báru.<br><br>"
+"Ilt er at læra gamlan hund uppi at sita.<br><br>"
+"Ilt er at skilja latan drong úr heitari song.<br><br>"
+"Ilt er at vera bæði fátækur og tykkin.<br><br>"
+"Ilt er barndømi at kasta.<br><br>"
+"Ilt er kynið í kettu, og so er alt slagið úteftir.<br><br>"
+"Ilt er svart skinn hvítt at tváa.<br><br>"
+"Ilt nýtst av bráðræsi.<br><br>"
+"Ilt nýtst av illum.<br><br>";
   
history.push("I");   // Adds "x" to history array 
     Previouspage = history[i++ -1] // Incriment Array for every new addition and go one index back

}

function J(){
    document.getElementById("pickerText").innerHTML = "";
    document.getElementById("center").style.width = "90%";
    document.getElementById("p1").style.textAlign = "left";
    document.getElementById("h2").innerHTML = "";
    document.getElementById("p1").innerHTML = "Jú fleiri hundar, jú tynri soðið.";

    history.push("J");   // Adds "x" to history array 
     Previouspage = history[i++ -1] // Incriment Array for every new addition and go one index back
}

function K(){
    document.getElementById("pickerText").innerHTML = "";
    document.getElementById("center").style.width = "90%";
    document.getElementById("p1").style.textAlign = "left";
    document.getElementById("h2").innerHTML = "";
    document.getElementById("p1").innerHTML = "Kallur er tí kollutur, at hann er ofta hárroyttur.<br><br>"

+"Kasta ikki tað skitna vatnið burtur, áðrenn tú kant fáa tað reina aftur.<br><br>"
+"Kemur fyrst ein danskur maður í stovuna, koma væl fleiri eftir.<br><br>"
+"Knívleysur maður er lívleysur.<br><br>"
+"Kráka flýgur best einsamøll.<br><br>"
+"Kráku tykir best um unga sín.<br><br>"
+"Kúrur kemur eftir kæti og tramin eftir marglæti.<br><br>"
+"Køld eru konuráð.<br><br>";

history.push("K");   // Adds "x" to history array 
     Previouspage = history[i++ -1] // Incriment Array for every new addition and go one index back
}

function L(){
    document.getElementById("pickerText").innerHTML = "";
    document.getElementById("center").style.width = "90%";
    document.getElementById("p1").style.textAlign = "left";
    document.getElementById("h2").innerHTML = "";
    document.getElementById("p1").innerHTML = "Latur er hann, ið lognina lastar. Lágt má hann lúta, ið høsnareyv skal kyssa.<br><br>"
+"Lágt skal hann lúta, ið hundsrassin skal kyssa.<br><br>"
+"Lán skal koma læandi aftur.<br><br>"
+"Legg lítt til lítt og ger tað títt, so verður tað mikið.<br><br>"
+"Leingi skal góðum kannast.<br><br>"
+"Leingi stendur mansevni til bata.<br><br>"
+"Leti ger einki uttan last.<br><br>"
+"Leys er kúgv á annans bási.<br><br>"
+"Livandi maður er góður at vænta.<br><br>"
+"Lignaranum krevir at hàva gott minni.<br><br>"
+"Lítið batar at breiða reint lak á skitna song.<br><br>"
+"Lítið hjálpa góð orð við slættibøku.<br><br>"
+"Lítið krevur til, at kellingarnev bløðir.<br><br>"
+"Lítil byrði er um langan veg tung.<br><br>"
+"Lítil er barnsins uggi.​<br><br>"
+"Lítil neisti kann birta stóran eld.<br><br>"
+"Lóðrið fylgir fóðri.<br><br>";

history.push("L");   // Adds "x" to history array 
     Previouspage = history[i++ -1] // Incriment Array for every new addition and go one index back
}

function M(){
    document.getElementById("pickerText").innerHTML = "";
    document.getElementById("center").style.width = "90%";
    document.getElementById("p1").style.textAlign = "left";
    document.getElementById("h2").innerHTML = "";
    document.getElementById("p1").innerHTML = "Maður eigur at verða føddur og ikki gøddur.<br><br>"
+"Maður er ikki fjarskotnari frá góðum enn ravnur.<br><br>"
+"Maður er mans gaman.<br><br>"
+"Maður kemur í mans stað.<br><br>"
+"Mangir løkir smáir gera stórar áir.<br><br>"
+"Mangt er dagsins eyga.<br><br>"
+"Mangt er dugandi manni til vápn.<br><br>"
+"Mangt er í neyðini nýtt, sum ikki er í armóðini gitið.<br><br>"
+"Mangt man feigum granda.<br><br>"
+"Mangur dansar og dansar av neyð.<br><br>"
+"Mangur er á orði, ið ikki er á borði.<br><br>"
+"Mangur er deyðs mans arvingi og ikki er deyðs mans bróðir.<br><br>"
+"Mangur er málvinur, sum ikki er alvinur.<br><br>"
+"Mangur fær tað, ið øðrum er ætlað, men eingin fær tað, ið øðrum er lagað.<br><br>"
+"Mangur fæst við boga, ið er ikki mentur upp at toga.<br><br>"
+"Mangur hevur valið og tekur skalið.<br><br>"
+"Mangur sigur frá Ólavi kongi og hevur ikki sæð hann.<br><br>"
+"Mangur slítur silki av armóð.<br><br>"
+"Maturin er undir manningini.<br><br>"
+"Meðan tað ringa er, tá bryggjast tað góða.<br><br>"
+"Meira er um skjól enn um skart.<br><br>"
+"Menniskjan kann spáa, Gud man ráða.<br><br>"
+"Mikið má um miklar menn.<br><br>"
+"Mong er geitin aðrari lík.<br><br>"
+"Mongum brestur ætlan.<br><br>";
    
history.push("M");   // Adds "x" to history array 
     Previouspage = history[i++ -1] // Incriment Array for every new addition and go one index back

}

function N(){
    document.getElementById("pickerText").innerHTML = "";
    document.getElementById("center").style.width = "90%";
    document.getElementById("p1").style.textAlign = "left";
    document.getElementById("h2").innerHTML = "";
    document.getElementById("p1").innerHTML = "Nakað er betri enn einki.<br><br>"
    +"Neyð er ikki nógv breyð.<br><br>"
    +"Neyð ger nasadjarvan.<br><br>"
    +"Neyð lærir nakna kvinnu at spinna.<br><br>"
    +"Neyðin drívur vargin av skóginum.<br><br>"
    +"Nógv fyri at hoyra lús hosta og loppu goyggja.<br><br>"
    +"Nú er alinin av og sponnin eftir.<br><br>";

    history.push("N");   // Adds "x" to history array 
     Previouspage = history[i++ -1] // Incriment Array for every new addition and go one index back
}

function O(){
    document.getElementById("pickerText").innerHTML = "";
    document.getElementById("center").style.width = "90%";
    document.getElementById("p1").style.textAlign = "left";
    document.getElementById("h2").innerHTML = "";
    document.getElementById("p1").innerHTML = "Ofta býr fals undir fríðum skinni.<br><br>" 
+"Ofta býr flagd undir fríðum skinni.<br><br>"
+"Ofta eigur svørt ær hvítt lamb.<br><br>"
+"Ofta er ljótur dreymur fyri lítlum.<br><br>"
+"Ofta etur hundur tað, hann havnar, og ketta tað, hon spýr.<br><br>"
+"Ofta kemur fjól í bóndans stól og bikkja í bóndans sæti.<br><br>"
+"Ofta lýtst happ av hundi.<br><br>"
+"Ofta mælir muður, og fylgir ikki eftir hugur.<br><br>"
+"Ofta nýtst ilt av bræði.<br><br>"
+"Ofta skríður knørrur móti forboð.<br><br>"
+"Ofta taka trøll góða manna børn.<br><br>"
+"Okkurt fær dugandi maður til vápn.<br><br>";

    history.push("O");   // Adds "x" to history array 
     Previouspage = history[i++ -1] // Incriment Array for every new addition and go one index back
    
}

function Ó(){
    document.getElementById("pickerText").innerHTML = "";
    document.getElementById("center").style.width = "90%";
    document.getElementById("p1").style.textAlign = "left";
    document.getElementById("h2").innerHTML = "";
    document.getElementById("p1").innerHTML = "Ódrúgvur er posamatur.<br><br>"
+"Ólukkan kemur sjáldan einsumøll.<br><br>";

     history.push("Ó");   // Adds "x" to history array 
     Previouspage = history[i++ -1] // Incriment Array for every new addition and go one index back
    
}

function P(){
    document.getElementById("pickerText").innerHTML = "";
    document.getElementById("center").style.width = "90%";
    document.getElementById("p1").style.textAlign = "left";
    document.getElementById("h2").innerHTML = "";
    document.getElementById("p1").innerHTML = "Purkan droymir um dravið og kellingin um stavin.";

    history.push("P");   // Adds "x" to history array 
     Previouspage = history[i++ -1] // Incriment Array for every new addition and go one index back
}

function R(){
    document.getElementById("pickerText").innerHTML = "";
    document.getElementById("center").style.width = "90%";
    document.getElementById("p1").style.textAlign = "left";
    document.getElementById("h2").innerHTML = "";
    document.getElementById("p1").innerHTML = "Ravnur drepur ikki, har hann byggir.<br><br>"
    +"Ravnur er feitastur rakár.<br><br>"
    +"Rignir á prestin, dryppar á deknin.<br><br>"
    +"Ring er tann kvørn, ið mjølið ikki veksur á.<br><br>"
    +"Ringur er fuglur, í sitt reiður drítur.<br><br>"
    +"Ríkir bøndur oksar keypa, mangt má feitt um fátækan leypa.<br><br>"
    +"Rotið er snart brotið.<br><br>"
    +"Rødd er hond í annans fati.<br><br>";
    
    history.push("R");   // Adds "x" to history array 
     Previouspage = history[i++ -1] // Incriment Array for every new addition and go one index back
}

function S(){
    document.getElementById("pickerText").innerHTML = "";
    document.getElementById("center").style.width = "90%";
    document.getElementById("p1").style.textAlign = "left";
    document.getElementById("h2").innerHTML = "";
    document.getElementById("p1").innerHTML = "Samt er tógvið á snælduni.<br><br>"
    +"Sannleikin er illa lýddur.<br><br>"
    +"Sárt bítur sekan.<br><br>"
    +"Sárt bítur soltin lús.<br><br>"
    +"Seigar eru gamlar sinar.<br><br>"
    +"Sein kúgv fær skitið gràs.<br><br>"
    +"Seigur er gamal siður.<br><br>"
    +"Seinar eru einar hendur.<br><br>"
    +"Sekur at sær tekur.<br><br>"
    +"Sit vini tínum nær, men sit ikki av hans lær.<br><br>"
    +"Sjáldan batnar moyggj, ið heiman fer.<br><br>"
    +"Sjáldan er berskakin bestur.<br><br>"
    +"Sjáldan er ein báran støk.<br><br>"
    +"Sjáldan er síðari betri.<br><br>"
    +"Sjáldan er trællur í treytum góður.<br><br>"
    +"Sjáldan gongur roykur av brandi, og ikki eldur er í honum.<br><br>"
    +"Sjálvgjørt er væl gjørt.<br><br>"
    +"Sjáldan hevur góður kvistur sprottið av illum runni.<br><br>"
    +"Sjáldan kemur dúvuungi úr ravnseggi.<br><br>"
    +"Sjáldan kemur eitt óløgi einsamalt.<br><br>"
    +"Sjáldan kemur fluga í feiga manna fat.<br><br>"
    +"Sjáldan rýkur av ongum brandi.<br><br>"
    +"Sjáldan sita heimakonur javnar.<br><br>"
    +"Sjáldan verður forvitin fegin.<br><br>"
    +"Sjálvgjørt er væl gjørt.<br><br>"
    +"Skaði ger mannin klókan, men ikki ríkan.<br><br>"
    +"Skeri eg teg her, so missi eg teg har.<br><br>"
    +"Skjótari bera tveir fuglar í reiður enn ein.<br><br>"
    +"Skjótt bløðir kellingarnøs.<br><br>"
    +"Skjótt er at tippa einar hendur.<br><br>"
    +"Skjótt er óføddum at bæsa.<br><br>"
    +"Skjótt er skitið verk.<br><br>"
    +"Skjótur er hann at lokka, sum sjálvur eftir vil hoppa.<br><br>"
    +"Slíkt kann vattarbakið vera sum skølingurin.<br><br>"
    +"Smáir fuglar verpa smá egg.<br><br>"
    +"Snakidagar koma eftir bakidagar.<br><br>"
    +"So argast hvør, sum hann eldist.<br><br>"
    +"So látast bátar sum skip.<br><br>"
    +"So mangt er tykki sum maðurin.<br><br>"
    +"So mætur fuglur er veiddur sum kráka.<br><br>"
    +"Spottið kemur í spottarans hús og brennir spottaran inni.<br><br>"
    +"Sprongd er ikki gongd.<br><br>"
    +"Stevning fellir ongan mann.<br><br>"
    +"Sum byttan so lokið.<br><br>"
    +"Sum maður røkir knívin, so røkir hann vívið.<br><br>"
    +"Sum tú reiðir, skalt tú liggja.<br><br>"
    +"Svartur verður hann, sum við bik fæst.<br><br>"
    +"Sær er hond hollast.<br><br>"
    +"Sær er siður á landi.<br><br>"
    +"Søtt tykist tí svanga.<br><br>"
    +"Søtur er sjálvgivin biti.<br><br>";

    history.push("S");   // Adds "x" to history array 
     Previouspage = history[i++ -1] // Incriment Array for every new addition and go one index back
}

function T(){
    document.getElementById("pickerText").innerHTML = "";
    document.getElementById("center").style.width = "90%";
    document.getElementById("p1").style.textAlign = "left";
    document.getElementById("h2").innerHTML = "";
    document.getElementById("p1").innerHTML = "Tað bata eingi føgur orð við slættibøku.<br><br>"
    +"Tað bata so lítið føgur orð við brugdu.<br><br>"
    +"Tað blíðkar fyri hugaðum monnum.<br><br>"
    +"Tað er átari, ið ger mun á eggi.<br><br>"
    +"Tað er betri at spara á kjaftinum enn á botninum.<br><br>"
    +"Tað er eisini eitil í válgara. <br><br>"
    +"Tað er gott at hava tógva sveinar, tá ið annar er úti, er annar heima.<br><br>"
    +"Tað er ikki altíð, matbruður stendur opin.<br><br>"
    +"Tað er ikki hvør dagur bakudagur.<br><br>"
    +"Tað er ikki hvørt orð, tú skalt svara til, og ikki hvørt gildi, tú skalt fara til.<br><br>"
    +"Tað er ikki oftari enn so, at Páll fær røtur.<br><br>"
    +"Tað er ikki svínum líkt, ið er sínum líkt.<br><br>"
    +"Tað er mangur leikur í longum talvi.<br><br>"
    +"Tað er mætari fuglur veiddur enn kráka.<br><br>"
    +"Tað er ringur fuglur, ið drítur í egið reiður.<br><br>"
    +"Tað er tvætt í hvørjari ætt.<br><br>"
    +"Tað er vamm á hvørjum góðgripi.<br><br>"
    +"Tað er vanlukkudýr í hvørjari ætt.<br><br>"
    +"Tað grør ikki undir tí steini, sum altíð verður rassaður.<br><br>"
    +"Tað hanga ikki allir lyklar við eitt konubelti.<br><br>"
    +"Tað livir longst, ið øllum er leiðast.<br><br>"
    +"Tað lívir ikki meira enn Ísland lívir Føroyum.<br><br>"
    +"Tað líður, meðan tað skríður.<br><br>"
    +"Tað skal meira til hestin enn bokslið.<br><br>"
    +"Tað skjýtst ikki alt, ið upp rennur.<br><br>"
    +"Tað verður ikki alt fleytir, ið tyril kemur í.<br><br>"
    +"Tað, ið illa er yrkt, verður illa kvøðið.<br><br>"
    +"Tað, ið ungur nemur, hann gamal fremur.<br><br>"
    +"Tað, sum eygað ikki sær og oyrað ikki hoyrir, tað virkir ikki hjartað.<br><br>"
    +"Tað, sum heima er alið, er burtur galið.<br><br>"
    +"Tað gongur sjón fyri søgn. <br><br>"
    +"Tann sum tíðum rør út, hann fiskar umsíðir.<br><br>"
    +"Tann, ið Gud vil fløva, batar ongum at køva.<br><br>"
    +"Tann, sum er úti stongdur, er inni gloymdur.<br><br>"
    +"Tann, sum fær barnið, fær skarnið.<br><br>"
    +"Tann, sum ikki etur seg mettan, sleikir seg ikki mettan.<br><br>"
    +"Tá ið armur kropnast, tá muður opnast.<br><br>"
    +"Tá ið maður ger, sum hann vil, ger hann, sum hann er til.<br><br>"
    +"Tá ið ravnurin legst í fjøruna, veit hann sær lítið.<br><br>"
    +"Tá ið tann skitni ber vitni, er illa vorðið.<br><br>"
    +"Tá ið tvey ynnast, tey væl finnast.<br><br>"
    +"Tá ið vesalamaður fær vald, kann hann sær ikki afturhald.<br><br>"
    +"Tá ið ølið fer inn, fer vitið út.<br><br>"
    +"Tá veit hin svarti sær lítið, tá ið hann legst í fjøruna.<br><br>"
    +"Teir byggja land, ið liva.<br><br>"
    +"Tey mugu gjalda, sum ikki valda.<br><br>"
    +"Tiga skal millum tveggja vina.<br><br>"
    +"Tí er ikki sætið rótt, at komin er á banasótt.<br><br>"
    +"Tí er kallur kollutur, tí hann er ofta hárruskaður.<br><br>"
    +"Tiðinn rennur sum streymur í á.<br><br>"
    +"Tíðliga skal krøkjast, ið góður krókur skal verða.<br><br>"
    +"Tjóvur trýr, at hvør maður stjelur.<br><br>"
    +"Tolin trívst og treiskin vinnur.<br><br>"
    +"Tráður lívir trevli.<br><br>"
    +"Trøllabørnini gráta eftir hvonnum á jólum.<br><br>"
    +"Tung er takkarleys gerð.<br><br>"
    +"Tungt er at hoyra lús hosta og loppu goyggja.<br><br>"
    +"Tungt er gamla manna fall.<br><br>"
    +"Tungur er tigandi róður.<br><br>"
    +"Tunn eru móður oyra.<br><br>"
    +"Turvin býður mangt.<br><br>"
    +"Tveir harðir steinar mala ikki væl.<br><br>"
    +"Tvey eru eyguni og triði er muðurin.<br><br>"
    +"Tyngst slitin er søtasti bitin.<br><br>"
    +"Tøgn kemur ikki á ting.<br><br>"

    history.push("T");   // Adds "x" to history array 
     Previouspage = history[i++ -1] // Incriment Array for every new addition and go one index back
}

function U(){
    document.getElementById("pickerText").innerHTML = "";
    document.getElementById("center").style.width = "90%";
    document.getElementById("p1").style.textAlign = "left";
    document.getElementById("h2").innerHTML = "";
    document.getElementById("p1").innerHTML = "Umsíðir lúgvast kúgv í mýri.<br><br>"
    +"Ungur nemur, gamal fremur.<br><br>";

    history.push("U");   // Adds "x" to history array 
     Previouspage = history[i++ -1] // Incriment Array for every new addition and go one index back
}

function Ù(){
    document.getElementById("pickerText").innerHTML = "";
    document.getElementById("center").style.width = "90%";
    document.getElementById("p1").style.textAlign = "left";
    document.getElementById("h2").innerHTML = "";
    document.getElementById("p1").innerHTML = "Út kemur innispunnið lín.<br><br>"
    +"Út kemur innispunnið tógv.<br><br>";
}

function V(){
    document.getElementById("pickerText").innerHTML = "";
    document.getElementById("center").style.width = "90%";
    document.getElementById("p1").style.textAlign = "left";
    document.getElementById("h2").innerHTML = "";
    document.getElementById("p1").innerHTML = "Vamm er í hvørjum góðgripi.<br><br>"
    +"Vandi er í hvørjari vælferð.<br><br>"
    +"Vani bítur best.<br><br>"
    +"Vænur vartú illa fór tú.<br><br>"
    +"Vatn kemur aftur, har vatn hevur verið.<br><br>"
    +"Vágan vinnur, og vágan tapir.<br><br>"
    +"Vágin vinnur og vágin missir.<br><br>"
    +"Vágin vinnur.<br><br>"
    +"Vágur millum vinir og fjørður millum frændur.<br><br>"
    +"Vánt er at sova hjá sprundi.<br><br>"
    +"Veðrið blíðkar fyri hugaðum monnum<br><br>"
    +"Verstur brandur liggur longst á eldi.<br><br>"
    +"Vinur er hann, ið vomm sær.<br><br>"
    +"Vís mær at garði, og eg skal siga tær, hvør inni býr.<br><br>"
    +"Vís mær mannin og ikki matkeraldið.<br><br>";

    history.push("V");   // Adds "x" to history array 
     Previouspage = history[i++ -1] // Incriment Array for every new addition and go one index back
}

function Y(){
    document.getElementById("pickerText").innerHTML = "";
    document.getElementById("center").style.width = "90%";
    document.getElementById("p1").style.textAlign = "left";
    document.getElementById("h2").innerHTML = "";
    document.getElementById("p1").innerHTML = "Ymiskt er mansins tykki.<br><br>"
+"Ymiss er mansins eydna.<br><br>"

history.push("Y");   // Adds "x" to history array 
     Previouspage = history[i++ -1] // Incriment Array for every new addition and go one index back
}


function Ø(){
    document.getElementById("pickerText").innerHTML = "";
    document.getElementById("center").style.width = "90%";
    document.getElementById("p1").style.textAlign = "left";
    document.getElementById("h2").innerHTML = "";
    document.getElementById("p1").innerHTML = "Øl er annar maður.<br><br>"
    +"Øllum er ovboðið.<br><br>";

    history.push("Ø");   // Adds "x" to history array 
     Previouspage = history[i++ -1] // Incriment Array for every new addition and go one index back
}

function Samband(){
    document.getElementById("pickerText").innerHTML = "";
    document.getElementById("center").style.width = "90%";
    document.getElementById("p1").style.textAlign = "left";
    document.getElementById("h2").innerHTML = "";
    document.getElementById("p1").innerHTML = "ÀÀÀÀÀÀÀÀ";

    history.push("Samband");   // Adds "x" to history array 
     Previouspage = history[i++ -1] // Incriment Array for every new addition and go one index back
}