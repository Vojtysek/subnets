"use client";

import { Input } from "@/components/ui/input";
import { TableCaption, TableHeader, TableRow, TableHead, TableBody, TableCell, Table } from "@/components/ui/table";
import { useState } from "react";

export default function PageTor() {
  const data = [
    {
      text: "Formát XML vytváří:",
      answers: [
        {
          text: "Hiearchickou struktůru informací",
          correct: true,
        },
        {
          text: "komunikační protokol pro přenos dat",
          correct: false,
        },
        {
          text: "Struktury na validaci dat",
          correct: false,
        },
        {
          text: "Struktury pro prezentaci dat",
          correct: false,
        },
        {
          text: "Struktury pro kontrolu validity dat",
          correct: true,
        },
      ],
    },
    {
      text: "Na to, aby počítač ve školní síti byl schopen odeslat otvírací paket na server www.seznam.cz musí zajistit (znát):",
      answers: [
        {
          text: "Fyzickou adresu cílového počítače",
          correct: false,
        },
        {
          text: "Fyzickou adresu routeru",
          correct: true,
        },
        {
          text: "IP adresu cílového počítače",
          correct: true,
        },
        {
          text: "IP adresu routeru",
          correct: true,
        },
      ],
    },
    {
      text: "Uniform Resource Identifier je:",
      answers: [
        {
          text: "Jedinečný identifikátor přiřazený zdrojům na internetu",
          correct: true,
        },
        {
          text: "Jedinečný identifikátor přiřazený specificky objektům na www.",
          correct: false,
        },
        {
          text: "Se sestává z uvedení schématu a schématu specifické části",
          correct: true,
        },
        {
          text: "Umožňuje přenášet parametry I směrem k serveru",
          correct: true,
        },
        {
          text: "Specifikuje podmínky využívání zdroje",
          correct: false,
        },
      ],
    },
    {
      text: "Druhý oddíl záznamu ISO 2709 se skládá:",
      answers: [
        {
          text: "Konstantního počtu položek stejné délky",
          correct: false,
        },
        {
          text: "Předem daného počtu položek různé délky",
          correct: false,
        },
        {
          text: "Variabilního počtu položek stejné délky",
          correct: true,
        },
        {
          text: "Variabilního počtu položek variabilní délky",
          correct: false,
        },
      ],
    },
    {
      text: "Záznam podle formátu ISO 2709 se skládá ze:",
      answers: [
        {
          text: "2 částí",
          correct: false,
        },
        {
          text: "3 částí",
          correct: false,
        },
        {
          text: "4 částí",
          correct: true,
        },
        {
          text: "5 částí",
          correct: false,
        },
      ],
    },
    {
      text: "Zakódování mailu podle specifikace MIME se děje:",
      answers: [
        {
          text: "V odesílacím klientském programu mailu",
          correct: true,
        },
        {
          text: "V odesílacím SMTP maileru",
          correct: false,
        },
        {
          text: "V přijímacím klientském programu mailu",
          correct: false,
        },
        {
          text: "V přijímacím SMTP maileru",
          correct: false,
        },
      ],
    },
    {
      text: "Dekódování zasílaného mailu pomocí specifikace MIME se děje:",
      answers: [
        {
          text: "V odesílacím klientském programu mailu",
          correct: false,
        },
        {
          text: "V odesílacím SMTP maileru",
          correct: false,
        },
        {
          text: "V přijímacím klientském programu mailu",
          correct: true,
        },
        {
          text: "V přijímacím SMTP maileru",
          correct: false,
        },
      ],
    },
    {
      text: "V ICMP protokolu se přenáší:",
      answers: [
        {
          text: "Informace o typu zprávy",
          correct: true,
        },
        {
          text: "IP hlavička a 64 bitu datové části paketu, který reakci vyvolal",
          correct: true,
        },
        {
          text: "IP hlavička zkrácená na 64 bytů paketu, který chybu vyvolal",
          correct: false,
        },
        {
          text: "Kontrolní součet hlavičky paketu, který reakci vyvolal",
          correct: true,
        },
      ],
    },
    {
      text: "Které informace nemá DNS systém:",
      answers: [
        {
          text: "Aktualizační informace sekundárního DNS serveru",
          correct: false,
        },
        {
          text: "Prioritu IP adres clusterů (spojení více počítačů dohomady)",
          correct: true,
        },
        {
          text: "Prioritu mailových serverů",
          correct: false,
        },
        {
          text: "Typ operačního systému",
          correct: true,
        },
        {
          text: "prioritu synonym doménových jmen",
          correct: true,
        },
      ],
    },
    {
      text: "Protokol UDP se používá:",
      answers: [
        {
          text: "Při internetovém telefonování",
          correct: true,
        },
        {
          text: "Při prohlížení webových stránek",
          correct: false,
        },
        {
          text: "Při přenosu pošty protokolem SMTP",
          correct: false,
        },
        {
          text: "Při přenosu souborů protokolem FTP",
          correct: false,
        },
        {
          text: "Real time hry",
          correct: true,
        },
        {
          text: "VoIp, hlasové služby",
          correct: true,
        },
        {
          text: "Proudy",
          correct: true,
        },
        {
          text: "DNS systém, SNMP (protokol pro spávu sítí), DHCP (Udělování IP adres), RIP (vektorově orientovaný routovací protokol)",
          correct: true,
        },
      ],
    },
    {
      text: "Při nedoručení paketu v protokolu TCP:",
      answers: [
        {
          text: "Není odesláno potvrzení",
          correct: true,
        },
        {
          text: "Odesílací stranou je paket odeslán po časové prodlevě znovu",
          correct: true,
        },
        {
          text: "Přijímací stranou je odeslána žádost o znovu doručení",
          correct: false,
        },
        {
          text: "Routerem je zjištěno nedoručení a odeslán paket znovu",
          correct: false,
        },
      ],
    },
    {
      text: "Během navázání spojení v protokolu TCP je dohodnuto:",
      answers: [
        {
          text: "Maximální komunikační rychlost",
          correct: false,
        },
        {
          text: "Počáteční hodnota sekvenčního čísla",
          correct: true,
        },
        {
          text: "Velikost okna (window)",
          correct: true,
        },
        {
          text: "Vzájemná vzdálenost pro nastavení TTL",
          correct: false,
        },
      ],
    },
    {
      text: 'Text: "Řešení rovnice y=6x +5 najděte pro y=17" bude při zakódování quoted -printable expandovat o:',
      answers: [
        {
          text: "8 bytů",
          correct: false,
        },
        {
          text: "10 bytů",
          correct: false,
        },
        {
          text: "11 bytů",
          correct: false,
        },
        {
          text: "12 bytů",
          correct: true,
        },
      ],
    },
    {
      text: "V protokolu telnet probíhá:",
      answers: [
        {
          text: "Dohadování o parametrech terminálu",
          correct: true,
        },
        {
          text: "Přenášení šifrovaných informací",
          correct: false,
        },
        {
          text: "Přenos souborů",
          correct: false,
        },
        {
          text: "Připojení klávesnice a monitoru k TCP kanálu",
          correct: true,
        },
      ],
    },
    {
      text: "Protokol DHCP přenáší informace o:",
      answers: [
        {
          text: "Masce IP protokolu",
          correct: true,
        },
        {
          text: "Mé IP adrese",
          correct: true,
        },
        {
          text: "Přiřazení fyzických adres k IP adresám",
          correct: false,
        },
        {
          text: "Výchozí bráně",
          correct: true,
        },
      ],
    },
    {
      text: "TCP paket obsahuje v hlavičce:",
      answers: [
        {
          text: "Informace o priorotě routování",
          correct: false,
        },
        {
          text: "Potvrzovací číslo",
          correct: true,
        },
        {
          text: "Sekvenční číslo",
          correct: true,
        },
        {
          text: "Velikost okna",
          correct: true,
        },
      ],
    },
    {
      text: "Po zaplnění výstupního zásobníku (bufferu) router při příchodu dalšího paketu:",
      answers: [
        {
          text: "Odešlě odesílateli ICMP zprávu Buffer overflow",
          correct: false,
        },
        {
          text: "Odešlě odesílateli ICMP zprávu Source Quenche",
          correct: true,
        },
        {
          text: "Odešle paket prioritně do odchozí linky",
          correct: false,
        },
        {
          text: "Paket zahodí",
          correct: true,
        },
      ],
    },
    {
      text: "Potvrzování přes hlavičku máme v protokolu: (blbe definovane, ptal jsem se ho a jde o checksum)",
      answers: [
        {
          text: "ICMP",
          correct: false,
        },
        {
          text: "IP",
          correct: true,
        },
        {
          text: "TCP",
          correct: false,
        },
        {
          text: "UDP",
          correct: false,
        },
      ],
    },
    {
      text: "Potvrzování přes doručená data máme v protokolu: (blbe definovane, ptal jsem se ho a jde o checksum)",
      answers: [
        {
          text: "TCP",
          correct: true,
        },
        {
          text: "UDP",
          correct: true,
        },
        {
          text: "ICMP (má taky checksum)",
          correct: true,
        },
        {
          text: "IP",
          correct: false,
        },
      ],
    },
    {
      text: "Protokol ARP umožňuje:",
      answers: [
        {
          text: "Přiřazení fyzické adresy k počítači",
          correct: false,
        },
        {
          text: "Zjištění fyzické adresy počítače",
          correct: true,
        },
        {
          text: "Přiřazení IP adresy fyzické adrese",
          correct: false,
        },
        {
          text: "Přiřazení výchozí brány",
          correct: false,
        },
        {
          text: "Správu konfiguračních informací z jediného místa",
          correct: false,
        },
      ],
    },
    {
      text: "Každý router provádí při průchodu paketu IP protokolu:",
      answers: [
        {
          text: "Filtrování paketů podle čísla portů",
          correct: false,
        },
        {
          text: "Kontrolu na kontrolní součet z dat",
          correct: false,
        },
        {
          text: "Přepočte kontrolní součet z hlavičky",
          correct: true,
        },
        {
          text: "Snížení hodnoty TTL",
          correct: true,
        },
      ],
    },
    {
      text: "O tom, zda bude stránka nebo jiná informace uložena nebo neuložena v cache, rozhoduje:",
      answers: [
        {
          text: "Cache",
          correct: false,
        },
        {
          text: "Klient",
          correct: true,
        },
        {
          text: "Server",
          correct: true,
        },
        {
          text: "Stav sítě",
          correct: false,
        },
      ],
    },
    {
      text: "XHTML má tagy:",
      answers: [
        {
          text: "Definované pomocí XML",
          correct: true,
        },
        {
          text: "Libovolné",
          correct: false,
        },
        {
          text: "Předem definované",
          correct: true,
        },
        {
          text: "Uživatelem definované",
          correct: false,
        },
      ],
    },
    {
      text: "Resolver systému DNS je tvořen:",
      answers: [
        {
          text: "Knihovnami operačního systému",
          correct: true,
        },
        {
          text: "Programem na straně klienta",
          correct: true,
        },
        {
          text: "Programem na straně serveru komunikujícím s dalším DNS",
          correct: false,
        },
        {
          text: "Programem na straně serveru provádějícím správu informací",
          correct: false,
        },
      ],
    },
    {
      text: "Protokol ICMP přenáší:",
      answers: [
        {
          text: "Chybové zprávy",
          correct: true,
        },
        {
          text: "Požadavky na snížení rychlosti odesílaných dat",
          correct: true,
        },
        {
          text: "Zprávy mezi routerem a počítačem",
          correct: true,
        },
        {
          text: "Zprávy o mimořádné situaci",
          correct: true,
        },
      ],
    },
    {
      text: "Protokol ICMP přenáší:",
      answers: [
        {
          text: "Požadavky na DNS",
          correct: false,
        },
        {
          text: "Požadavky na snížení rychlosti odesílaných dat",
          correct: true,
        },
        {
          text: "Zprávy mezi routerem a počítačem",
          correct: true,
        },
        {
          text: "Řídící zprávy",
          correct: true,
        },
      ],
    },
    {
      text: "V případě doručování SMTP mailu pokud přijímací mailer na položku RCPT TO: nezná adresáta:",
      answers: [
        {
          text: "Je možné označit dalšího ze seznamu adresátu položkou RCPT TO:",
          correct: true,
        },
        {
          text: "Je možné začít nový dopis položkou MAIL FROM:",
          correct: true,
        },
        {
          text: "Je spojení ihned ukončeno",
          correct: false,
        },
        {
          text: "Je zahájen přenos dat",
          correct: false,
        },
      ],
    },
    {
      text: "Informace o znakové sadě, kterou je informace (dopis, stránka) zapsána najdeme v:",
      answers: [
        {
          text: "HTML hlavičce",
          correct: true,
        },
        {
          text: "http hlavičce",
          correct: true,
        },
        {
          text: "MIME hlavičce",
          correct: true,
        },
        {
          text: "Standardní SMTP hlavičce",
          correct: false,
        },
      ],
    },
    {
      text: "Položku u hlaviček Content-type: najdeme v:",
      answers: [
        {
          text: "MIME",
          correct: true,
        },
        {
          text: "Protokolu HTTP verze 0.9",
          correct: false,
        },
        {
          text: "Protokolu HTTP verze 1.1 (i 1.0)",
          correct: true,
        },
        {
          text: "Protokolu SMTP",
          correct: false,
        },
      ],
    },
    {
      text: "Položku u hlaviček Content-transfer-encoding: najdeme v:",
      answers: [
        {
          text: "MIME",
          correct: true,
        },
        {
          text: "Protokolu HTTP verze 0.9",
          correct: false,
        },
        {
          text: "Protokolu HTTP verze 1.1",
          correct: false,
        },
        {
          text: "Protokolu SMTP",
          correct: false,
        },
      ],
    },
    {
      text: "Čísla portů najdeme v protokolu:",
      answers: [
        {
          text: "ICMP",
          correct: false,
        },
        {
          text: "IP",
          correct: false,
        },
        {
          text: "TCP",
          correct: true,
        },
        {
          text: "UDP",
          correct: true,
        },
      ],
    },
    {
      text: "Paket s chybným kontrolním součtem z dat je rozpoznán:",
      answers: [
        {
          text: "Na nejbližším routeru",
          correct: false,
        },
        {
          text: "Na cílovém systému",
          correct: true,
        },
        {
          text: "Na odesílacím systému",
          correct: false,
        },
        {
          text: "Na paketovém filtru",
          correct: false,
        },
      ],
    },
    {
      text: "Mezi základní principy internetu patří:",
      answers: [
        {
          text: "Kontrola dat na každém routeru a na cílovém systému",
          correct: false,
        },
        {
          text: "Přenášení IP protokolu přes jakékoliv datové sítě",
          correct: true,
        },
        {
          text: "Kontrola dat na cílovém systému",
          correct: true,
        },
        {
          text: "Rezervace přenosové kapacity",
          correct: false,
        },
      ],
    },
    {
      text: "V hlavičce IP protokolu není obsažena informace:",
      answers: [
        {
          text: "Životností paketu TTL",
          correct: false,
        },
        {
          text: "Pořadí paketu v datovém proudu SN",
          correct: true,
        },
        {
          text: "Kontrolní součet přes hlavičku",
          correct: false,
        },
        {
          text: "Kontrolní součet přes data",
          correct: true,
        },
      ],
    },
    {
      text: "V položce Set-Cookie: mohou být položky:",
      answers: [
        {
          text: "Expirace",
          correct: true,
        },
        {
          text: "Cesta",
          correct: true,
        },
        {
          text: "Doména",
          correct: true,
        },
        {
          text: "Server",
          correct: false,
        },
      ],
    },
    {
      text: "Informace o nedostupnosti cílového počítače se odesílací systém doví pomocí protokolu:",
      answers: [
        {
          text: "UDP",
          correct: false,
        },
        {
          text: "TCP",
          correct: false,
        },
        {
          text: "ICMP",
          correct: true,
        },
        {
          text: "RIP",
          correct: false,
        },
      ],
    },
    {
      text: "Údaj TTL (time to live) najdeme v hlavičce protokolu:",
      answers: [
        {
          text: "ICMP",
          correct: false,
        },
        {
          text: "TCP",
          correct: false,
        },
        {
          text: "UDP",
          correct: false,
        },
        {
          text: "Fyzického protokolu",
          correct: false,
        },
        {
          text: "IP",
          correct: true,
        },
      ],
    },
    {
      text: "HTTP položky cookies jsou:",
      answers: [
        {
          text: "Informace odeslané klientem a uložené na serveru",
          correct: false,
        },
        {
          text: "Informace odeslané serverem a uložené na klientu",
          correct: true,
        },
        {
          text: "Textové informace",
          correct: true,
        },
        {
          text: "Binární data",
          correct: false,
        },
      ],
    },
    {
      text: "Rozlišování módů přenosu pro různé druhy souborů se děje v protokolu:",
      answers: [
        {
          text: "HTTP",
          correct: false,
        },
        {
          text: "FTP",
          correct: true,
        },
        {
          text: "TCP",
          correct: false,
        },
        {
          text: "GOPHER",
          correct: true,
        },
        {
          text: "SMTP",
          correct: false,
        },
      ],
    },
    {
      text: "Hodnotu text/html najdeme u některé položky v:",
      answers: [
        {
          text: "Hlavičce klasického SMTP dopisu",
          correct: false,
        },
        {
          text: "Hlavičce MIME rozšíření (i v HTML)",
          correct: true,
        },
        {
          text: "Hlavičce HTTP protokolu verze 0.9",
          correct: false,
        },
        {
          text: "Hlavičce HTTP protokolu verze 1.1",
          correct: true,
        },
      ],
    },
    {
      text: "IP adresa je přiřazena:",
      answers: [
        {
          text: "Počítači",
          correct: false,
        },
        {
          text: "Rozhraní počítače",
          correct: true,
        },
        {
          text: "Programu v počítači",
          correct: false,
        },
        {
          text: "Komunikačnímu kanálu",
          correct: false,
        },
      ],
    },
    {
      text: "UDP protokol:",
      answers: [
        {
          text: "Přenáší vyrovnání se s chybou na aplikaci",
          correct: true,
        },
        {
          text: "Kontroluje přenášená data cyklickým součtem",
          correct: true,
        },
        {
          text: "Se používá pro přenášení datových proudů",
          correct: true,
        },
        {
          text: "Se používá pro jednoduché dotazy a jednoduché odpovědi",
          correct: true,
        },
      ],
    },
    {
      text: "UDP paket obsahuje v hlavičce:",
      answers: [
        {
          text: "Porty",
          correct: true,
        },
        {
          text: "Informace o délce",
          correct: true,
        },
        {
          text: "Kontrolní součet",
          correct: true,
        },
        {
          text: "Informaci o začátku dat",
          correct: false,
        },
      ],
    },
    {
      text: "Otevření UDP komunikace je zahájeno:",
      answers: [
        {
          text: "Paketem SYN a odpověď paket ACK",
          correct: false,
        },
        {
          text: "Trojcestným handshakingem SYN, SYN/ACK, ACK",
          correct: false,
        },
        {
          text: "Paketem FIN a odpověď paket ACK",
          correct: false,
        },
        {
          text: "Datovým paketem",
          correct: true,
        },
      ],
    },
    {
      text: "V protokolu HTTP verze 1.0 najdeme odpovědi položky hlaviček:",
      answers: [
        {
          text: "Cache-control:",
          correct: false,
        },
        {
          text: "If-Modified-Since:",
          correct: true,
        },
        {
          text: "Connection:",
          correct: false,
        },
        {
          text: "Host:",
          correct: true,
        },
      ],
    },
    {
      text: "Čísla portů jsou:",
      answers: [
        {
          text: "Na straně serveru přiřazena přesně definovaným způsobem podle typu serveru",
          correct: true,
        },
        {
          text: "Na straně klienta přiřazena přesně definovaným způsobem podle typu klienta",
          correct: false,
        },
        {
          text: "Na straně serveru generována náhodně při každém spojení",
          correct: false,
        },
        {
          text: "Na straně klienta generována náhodně při každém spojení",
          correct: true,
        },
      ],
    },
    {
      text: "Soubor test.jpg o velikosti 3124 bytů bude při kódování base64 (v přípdě, že nebudeme uvažovat vkládané <CR> <LF> pro rozdělení do jednotlivých řádek) expandovat o:",
      answers: [
        {
          text: "1000 bytů",
          correct: false,
        },
        {
          text: "1041 bytů",
          correct: false,
        },
        {
          text: "1042 bytů",
          correct: true,
        },
        {
          text: "1043 bytů",
          correct: false,
        },
      ],
    },
    {
      text: "V HTML dokumetu jsou značky uvedeny jako:",
      answers: [
        {
          text: ">slovo<",
          correct: false,
        },
        {
          text: "(slovo)",
          correct: false,
        },
        {
          text: "{slovo}",
          correct: false,
        },
        {
          text: "<slovo>",
          correct: true,
        },
      ],
    },
    {
      text: "Mezi programovací jazyky na straně serveru řadíme:",
      answers: [
        {
          text: "ASP",
          correct: true,
        },
        {
          text: "PHP",
          correct: true,
        },
        {
          text: "JSP",
          correct: true,
        },
        {
          text: "(CGI)",
          correct: true,
        },
        {
          text: "visual basic script",
          correct: false,
        },
        {
          text: "java script",
          correct: false,
        },
      ],
    },
    {
      text: "Mezi programovací jazyky na straně klienta řadíme:",
      answers: [
        {
          text: "ASP",
          correct: false,
        },
        {
          text: "JavaScript",
          correct: true,
        },
        {
          text: "JSP",
          correct: false,
        },
        {
          text: "Visual Basic Script",
          correct: true,
        },
      ],
    },
    {
      text: "Pro počítače s IP adresami 142.112.174.26 a 142.112.175.17, mají-li oba masku 255.255.254.0 platí:",
      answers: [
        {
          text: "Patří do stejné podsítě",
          correct: true,
        },
        {
          text: "Patří do třídy B",
          correct: true,
        },
        {
          text: "Patří do třídy C",
          correct: false,
        },
        {
          text: "Patří do třídy A",
          correct: false,
        },
      ],
    },
    {
      text: "Příkaz HELO patří do protokolu:",
      answers: [
        {
          text: "SMTP",
          correct: true,
        },
        {
          text: "HTTP 1.0",
          correct: false,
        },
        {
          text: "HTTP 1.1",
          correct: false,
        },
        {
          text: "MIME",
          correct: false,
        },
      ],
    },
    {
      text: "Pro bezpečnou komunikaci se v word wide webu používá:",
      answers: [
        {
          text: "SHA",
          correct: false,
        },
        {
          text: "SSL",
          correct: true,
        },
        {
          text: "SSH",
          correct: false,
        },
        {
          text: "STP",
          correct: false,
        },
      ],
    },
    {
      text: "Odpovědi serveru (FTP, HTTP, SMTP a dalších), které potvrzují úspěšné provedení příkazu, začínají trojciferným číslem, jehož první číslice (stovková) je:",
      answers: [
        {
          text: "2",
          correct: true,
        },
        {
          text: "0",
          correct: false,
        },
        {
          text: "1",
          correct: false,
        },
        {
          text: "3",
          correct: false,
        },
        {
          text: "4",
          correct: false,
        },
        {
          text: "5",
          correct: false,
        },
      ],
    },
    {
      text: "Odpovědi serveru (FTP, HTTP, SMTP a dalších), které oznamují nějakou chybu, začínají trojciferným číslem, jehož první číslice (stovková) je:",
      answers: [
        {
          text: "0",
          correct: false,
        },
        {
          text: "1",
          correct: false,
        },
        {
          text: "2",
          correct: false,
        },
        {
          text: "3",
          correct: false,
        },
        {
          text: "4",
          correct: true,
        },
        {
          text: "5",
          correct: true,
        },
      ],
    },
    {
      text: "Parametr Window najdeme v protokolu:",
      answers: [
        {
          text: "TCP",
          correct: true,
        },
        {
          text: "UDP",
          correct: false,
        },
        {
          text: "IP",
          correct: false,
        },
        {
          text: "ICMP",
          correct: false,
        },
      ],
    },
    {
      text: "Porty máme v protokolu:",
      answers: [
        {
          text: "TCP",
          correct: true,
        },
        {
          text: "UDP",
          correct: true,
        },
        {
          text: "SMTP",
          correct: false,
        },
        {
          text: "HTTP",
          correct: false,
        },
      ],
    },
    {
      text: "Protokol FTP pracuje:",
      answers: [
        {
          text: "Na dvou portech",
          correct: true,
        },
        {
          text: "Na třech portech",
          correct: false,
        },
        {
          text: "Na čtyřech portech",
          correct: false,
        },
        {
          text: "Na jednom portu",
          correct: false,
        },
      ],
    },
    {
      text: "V průběhu navazování SSL komunikace posílá:",
      answers: [
        {
          text: "Klient podporované rozlišení",
          correct: false,
        },
        {
          text: "Klient podporované šifrovací algoritmy",
          correct: true,
        },
        {
          text: "Server svoje certifikáty",
          correct: true,
        },
        {
          text: "Server podporovanou rychlost komunikace",
          correct: false,
        },
      ],
    },
    {
      text: "O tom, zda bude stránka nebo jiná informace uložena nebo neuložena v cache rozhoudje:",
      answers: [
        {
          text: "Klient",
          correct: true,
        },
        {
          text: "Stav sítě",
          correct: false,
        },
        {
          text: "Server",
          correct: true,
        },
        {
          text: "Cache",
          correct: false,
        },
      ],
    },
    {
      text: "Odpovědi serveru, které začínají trojciferným číslem, jejož první číslice (stovková) je 2:",
      answers: [
        {
          text: "Najdeme v protokolu TCP",
          correct: false,
        },
        {
          text: "Najdeme v protokolu FTP",
          correct: true,
        },
        {
          text: "Najdeme v protokolu ICMP",
          correct: false,
        },
        {
          text: "SMTP",
          correct: true,
        },
      ],
    },
    {
      text: "Odpovědi serveru, které začínají trojciferným číslem, jejož první číslice (stovková) je 3:",
      answers: [
        {
          text: "Najdeme v protokolu HTTP 1.1",
          correct: true,
        },
        {
          text: "Najdeme v protokolu FTP",
          correct: true,
        },
        {
          text: "Najdeme v protokolu ICMP",
          correct: false,
        },
        {
          text: "SMTP",
          correct: true,
        },
      ],
    },
    {
      text: "Protokol SSH:",
      answers: [
        {
          text: "Je modernější nástupce FTP",
          correct: false,
        },
        {
          text: "Umožňuje bezpečné přenášení WWW stránek",
          correct: false,
        },
        {
          text: "Je vhodný k připojování k soukromému účtu na vzdáleném počítači",
          correct: true,
        },
        {
          text: "Je modernější nástupce Telnetu",
          correct: true,
        },
        {
          text: "Umožňuje bezpečné přenášení souborů, např. obrázků",
          correct: false,
        },
      ],
    },
    {
      text: "Paket s chybným kontrolním součtem z hlavičky je rozpoznán:",
      answers: [
        {
          text: "TCP protokolem",
          correct: false,
        },
        {
          text: "Nejbližším routerem",
          correct: true,
        },
        {
          text: "Odesílacím systémem",
          correct: false,
        },
        {
          text: "FTP protokolem",
          correct: false,
        },
      ],
    },
    {
      text: "Pro počítače s IP adresami 132.192.174.26 a 132.192.176.17, mají-li oba masku 255.255.254.0 platí:",
      answers: [
        {
          text: "Patří do stejné podsítě",
          correct: false,
        },
        {
          text: "Různé podsítě",
          correct: true,
        },
        {
          text: "patří do třídy B",
          correct: true,
        },
        {
          text: "patří do třídy C",
          correct: false,
        },
      ],
    },
    {
      text: "V hlavičce IP protokolu je obsažena informace:",
      answers: [
        {
          text: "Životností paketu TTL",
          correct: true,
        },
        {
          text: "Pořadí paketu v datovém proudu SN",
          correct: false,
        },
        {
          text: "Kontrolní součet přes hlavičku",
          correct: true,
        },
        {
          text: "Kontrolní součet přes data",
          correct: false,
        },
      ],
    },
    {
      text: "Odpovědi protokolu (FTP, HTTP, SMTP), které začínají trojciferným číslem, jehož první číslice (stovková) je 2:",
      answers: [
        {
          text: "Jsou informační zprávy",
          correct: false,
        },
        {
          text: "Oznamují chybu dotazu",
          correct: false,
        },
        {
          text: "Potvrzují úspěšné provedení příkazu",
          correct: true,
        },
        {
          text: "Oznamují chybu serveru",
          correct: false,
        },
      ],
    },
    {
      text: "V hlavičce UDP protokolu je obsaženo:",
      answers: [
        {
          text: "Pořadí odesílaného paketu",
          correct: false,
        },
        {
          text: "Kontrolní součet přes data",
          correct: true,
        },
        {
          text: "Délka dat",
          correct: true,
        },
        {
          text: "Číslo portu příjemce a odesílatele",
          correct: true,
        },
      ],
    },
    {
      text: "Mezi záznamy v DNS systému se vyskytují:",
      answers: [
        {
          text: "Záznam specifikující délku platnosti informace v systémech, které se dotazují nameserveru",
          correct: true,
        },
        {
          text: "Záznam převádějící IP adresu na doménové jméno",
          correct: true,
        },
        {
          text: "Záznam identifikující nameservery domény nižších úrovní",
          correct: true,
        },
        {
          text: "Záznam přiřazující k IP adrese mail správce tohoto systému",
          correct: false,
        },
      ],
    },
    {
      text: "Mezi záznamy v DNS systému se vyskytují:",
      answers: [
        {
          text: "Záznam identifikující nameservery této domény",
          correct: true,
        },
        {
          text: "Záznam identifikující nameservery domény nižších úrovní",
          correct: true,
        },
        {
          text: "Záznam identifikující nameservery domény nejbližší vyšší úrovně",
          correct: false,
        },
        {
          text: "Záznam převádějící doménové jméno na IP adresu",
          correct: true,
        },
      ],
    },
    {
      text: "Protokol ESMTP pracuje na portu:",
      answers: [
        {
          text: "21",
          correct: false,
        },
        {
          text: "23",
          correct: false,
        },
        {
          text: "25",
          correct: false,
        },
        {
          text: "27",
          correct: true,
        },
        {
          text: "80",
          correct: false,
        },
      ],
    },
    {
      text: "Document type definition",
      answers: [
        {
          text: "podporuje validaci dat",
          correct: false,
        },
        {
          text: "nepodporuje jmenné prostory",
          correct: true,
        },
        {
          text: "definuje značky používané v dokumentu",
          correct: true,
        },
        {
          text: "je podporováno mnoha aplikacemi",
          correct: true,
        },
      ],
    },
    {
      text: "Document type definition",
      answers: [
        {
          text: "podporuje jmenné prostory",
          correct: false,
        },
        {
          text: "podporuje validaci dat",
          correct: false,
        },
        {
          text: "definuje značky používané v dokumentu",
          correct: true,
        },
        {
          text: "je podporováno mnoha aplikacemi",
          correct: true,
        },
      ],
    },
    {
      text: "protokol SMTP",
      answers: [
        {
          text: "má příkazy MAIL FROM, RCPT TO",
          correct: true,
        },
        {
          text: "umožňuje zjistit maximální velikost přijímaného mailu",
          correct: false,
        },
        {
          text: "ukončuje přenášení dopisu tečkou na prázdném řádku",
          correct: true,
        },
        {
          text: "ukončuje přenášení dopisu příkazem QUIT",
          correct: false,
        },
      ],
    },
    {
      text: "Secure socket layer je:",
      answers: [
        {
          text: "vrstva vložená mezi TCP a aplikaci",
          correct: true,
        },
        {
          text: "vrstva vložená mezi IP a TCP",
          correct: false,
        },
        {
          text: "použitelné pouze v HTTP protokolu",
          correct: false,
        },
        {
          text: "vrstva vložená mezi fyzickou vrstvu a IP",
          correct: false,
        },
      ],
    },
    {
      text: "Protokol HTTP verze 1.0:",
      answers: [
        {
          text: "přenáší každý vložený element (jako např. Obrázek) samostatně",
          correct: true,
        },
        {
          text: "pracuje na portu 80",
          correct: true,
        },
        {
          text: "používá přenosovou metodu GET a POST",
          correct: true,
        },
        {
          text: "Přenáší informaci o velikosti přenášeného souboru",
          correct: true,
        },
      ],
    },
    {
      text: "http protokol verze 0.9:",
      answers: [
        {
          text: "Má přenosovou metodu GET",
          correct: true,
        },
        {
          text: "Přenáší informaci o velikosti přenášeného souboru",
          correct: false,
        },
        {
          text: "Má přenosovou metodu GET a POST",
          correct: false,
        },
        {
          text: "Přenáší každý vložený element (jako např. Obrázek) samostatně",
          correct: true,
        },
      ],
    },
    {
      text: "V databázi WHOIS můžeme najít k dané IP adrese informace:",
      answers: [
        {
          text: "O rozsahu IP adres pro organizaci",
          correct: true,
        },
        {
          text: "O emailu zodpovědných osob",
          correct: true,
        },
        {
          text: "O adrese výchozí brány k dané IP adrese",
          correct: false,
        },
        {
          text: "O jméně a adrese orgenizace, jíž patří IP adresa",
          correct: true,
        },
      ],
    },
    {
      text: "Rozlišování módů přenosu pro různé druhy souborů se děje v protokolu:",
      answers: [
        {
          text: "HTTP",
          correct: false,
        },
        {
          text: "FTP",
          correct: true,
        },
        {
          text: "SMTP",
          correct: false,
        },
        {
          text: "TCP",
          correct: false,
        },
      ],
    },
    {
      text: "Certifikát obsahuje:",
      answers: [
        {
          text: "Informace o zneplatnění certifikátu",
          correct: false,
        },
        {
          text: "Osobní údaje vlastníka",
          correct: true,
        },
        {
          text: "Digitální podpis certifikační autority",
          correct: true,
        },
        {
          text: "Soukromé údaje certifikační autority",
          correct: false,
        },
      ],
    },
    {
      text: "Certifikát obsahuje:",
      answers: [
        {
          text: "Veřejná data jeho majitele",
          correct: false,
        },
        {
          text: "Veřejná data certifikační autority",
          correct: true,
        },
        {
          text: "Digitální podpis certifikační autority",
          correct: true,
        },
        {
          text: "Soukromá data jeho majitele",
          correct: true,
        },
      ],
    },
    {
      text: "V hlavičce IP protokolu je pole pro:",
      answers: [
        {
          text: "Kontrolní součet přes paket",
          correct: false,
        },
        {
          text: "Životností paketu TTL",
          correct: true,
        },
        {
          text: "Pořadí odesílaného paketu",
          correct: false,
        },
        {
          text: "Typ vloženého protokolu",
          correct: true,
        },
      ],
    },
    {
      text: "Rozšíření ESMTP umožňuje odesílacímu systému:",
      answers: [
        {
          text: "Při zasílání dopisu dvěma adresátům na stejném systému poslat dopis jednou a dvě doručovací adresy",
          correct: true,
        },
        {
          text: "Zjistit maximální velikost dopisu, který přijímací server přijímá",
          correct: true,
        },
        {
          text: "Zjistit kódování češtiny, které přijímá přijímací systém",
          correct: true,
        },
        {
          text: "Odesílat dopis a přílohy 8-bitově",
          correct: true,
        },
      ],
    },
    {
      text: "Protokol ESMTP:",
      answers: [
        {
          text: "Může při přebírání mailu vyžadovat autentifikaci odesílatele",
          correct: true,
        },
        {
          text: "Umožňuje zjistit maximální velikost přijímacího mailu",
          correct: true,
        },
        {
          text: "Umožňuje zjistit kódování na přijímacím systému",
          correct: true,
        },
        {
          text: "Pracuje na portu 23",
          correct: false,
        },
      ],
    },
    {
      text: "Příkaz RCPT patří do protokolu:",
      answers: [
        {
          text: "FTP",
          correct: false,
        },
        {
          text: "telnet",
          correct: false,
        },
        {
          text: "HTTP",
          correct: false,
        },
        {
          text: "SMTP",
          correct: true,
        },
      ],
    },
    {
      text: "Protokol FTP přenáší:",
      answers: [
        {
          text: "Příkazy na portu 20",
          correct: false,
        },
        {
          text: "Data na portu 20",
          correct: true,
        },
        {
          text: "Data na portu 22",
          correct: false,
        },
        {
          text: "Příkazy na portu 21",
          correct: true,
        },
      ],
    },
    {
      text: "Protokol telnet:",
      answers: [
        {
          text: "Pracuje na portu 23",
          correct: true,
        },
        {
          text: "Pracuje na portu 20",
          correct: false,
        },
        {
          text: "Pracuje na portu 13",
          correct: false,
        },
        {
          text: "Pracuje na portu 25",
          correct: false,
        },
      ],
    },
    {
      text: "Položku hlaviček Date: najdeme v:",
      answers: [
        {
          text: "Rozšíření MIME",
          correct: true,
        },
        {
          text: "Protokolu SMTP",
          correct: true,
        },
        {
          text: "Protokolu HTTP Verze 1.1",
          correct: true,
        },
        {
          text: "Protokolu FTP",
          correct: false,
        },
      ],
    },
    {
      text: "Součástí certifikátu k ověření elektronického podpisu je:",
      answers: [
        {
          text: "Veřejný klíč certifikační autority",
          correct: false,
        },
        {
          text: "Veřejný klíč podpisující osoby",
          correct: true,
        },
        {
          text: "Soukromý klíč podpisující osoby",
          correct: false,
        },
        {
          text: "Identifikace algoritmu podpisu",
          correct: true,
        },
      ],
    },
    {
      text: "Symetrické šifry:",
      answers: [
        {
          text: "Se používají déle než asymetrické",
          correct: true,
        },
        {
          text: "Se obejdou bez klíče",
          correct: false,
        },
        {
          text: "Jsou rychlejší než asymetrické",
          correct: true,
        },
        {
          text: "Mají klíč generovaný speciálním algoritmem",
          correct: false,
        },
      ],
    },
    {
      text: "Kontrolní součet z hlavičky se počítá v protokolu:",
      answers: [
        {
          text: "IP",
          correct: true,
        },
        {
          text: "TCP",
          correct: false,
        },
        {
          text: "ICMP",
          correct: false,
        },
        {
          text: "UDP",
          correct: false,
        },
      ],
    },
    {
      text: "Protokol Gopher:",
      answers: [
        {
          text: "Pracuje na portu 70",
          correct: true,
        },
        {
          text: "Vytvoří spojení a uživatel pracuje na něm",
          correct: true,
        },
        {
          text: "Umožňuje přenášení více souborů v jednom spojení",
          correct: false,
        },
        {
          text: "Je předchůdce WWW",
          correct: true,
        },
      ],
    },
    {
      text: "RAID 5:",
      answers: [
        {
          text: "Zvyšuje bezpečnost uložených dat",
          correct: true,
        },
        {
          text: "Snižuje náklady na uložení dat",
          correct: false,
        },
        {
          text: "Je způsob zapojení počítačů",
          correct: false,
        },
        {
          text: "Je způsob zapojení disků v počítači",
          correct: true,
        },
      ],
    },
    {
      text: 'Text "posílám v příloze obrázek" bude expandovat při kódování quoted -printable o:',
      answers: [
        {
          text: "8 bytů",
          correct: false,
        },
        {
          text: "10 bytů",
          correct: false,
        },
        {
          text: "12 bytů",
          correct: true,
        },
        {
          text: "11 bytů",
          correct: false,
        },
      ],
    },
    {
      text: "certifikační autorita:",
      answers: [
        {
          text: "podepisuje veřejné klíče klientů",
          correct: true,
        },
        {
          text: "skladuje soukromé klíče klientů",
          correct: false,
        },
        {
          text: "skladuje veřejné klíče klientů",
          correct: true,
        },
        {
          text: "ověřuje totožnost klientů",
          correct: true,
        },
      ],
    },
    {
      text: "kontrolní součet z doručených dat se počítá v protokolu:",
      answers: [
        {
          text: "TCP",
          correct: true,
        },
        {
          text: "ICMP",
          correct: true,
        },
        {
          text: "UDP",
          correct: true,
        },
        {
          text: "IP",
          correct: false,
        },
      ],
    },
    {
      text: "Při posílání dat při SSL protokolu je kontrola dat prováděna:",
      answers: [
        {
          text: "V SSL počítáním cyklických součtů CRC",
          correct: false,
        },
        {
          text: "V SSL počítáním hashových funkcí",
          correct: false,
        },
        {
          text: "Je kromě TCP přenechána aplikaci",
          correct: true,
        },
        {
          text: "Jen v TCP protokolu",
          correct: true,
        },
      ],
    },
    {
      text: "Požadavek na snížení rychlosti odesílaných paketů se odesílací systém dozví pomocí protokolu:",
      answers: [
        {
          text: "ICMP",
          correct: true,
        },
        {
          text: "TCP",
          correct: false,
        },
        {
          text: "RIP",
          correct: false,
        },
        {
          text: "ARP",
          correct: false,
        },
      ],
    },
    {
      text: "Zaslání dopisu SMTP je ukončeno odesláním:(připojení se ukončuje přes QUIT, zasílání dopisu tečkou na prázdném řádku. Otázka je blbě položená)",
      answers: [
        {
          text: "Příkazem STOP",
          correct: false,
        },
        {
          text: "Sekvence <cr><lf><cr><lf>",
          correct: false,
        },
        {
          text: "Příkazem EXIT",
          correct: false,
        },
        {
          text: "Příkazem QUIT",
          correct: true,
        },
      ],
    },
    {
      text: "Otevření komunikace je v TCP protokolu zahájeno:",
      answers: [
        {
          text: "Paketem FIN",
          correct: false,
        },
        {
          text: "Datovým paketem",
          correct: false,
        },
        {
          text: "Paketem SYN",
          correct: true,
        },
        {
          text: "Paketem ACK",
          correct: false,
        },
      ],
    },
    {
      text: "Parametr fragmentace najdeme v protokolu:",
      answers: [
        {
          text: "ICMP",
          correct: false,
        },
        {
          text: "UDP",
          correct: false,
        },
        {
          text: "TCP",
          correct: false,
        },
        {
          text: "IP",
          correct: true,
        },
      ],
    },
    {
      text: "Hodnotu image/jpg najdeme u některé položky v hlavičce protokolu:",
      answers: [
        {
          text: "ESMTP",
          correct: false,
        },
        {
          text: "MIME",
          correct: true,
        },
        {
          text: "HTTP 1.1",
          correct: true,
        },
        {
          text: "HTTP 0.9",
          correct: false,
        },
      ],
    },
    {
      text: "Protokol HTTP",
      answers: [
        {
          text: "je transakční protokol",
          correct: false,
        },
        {
          text: "přenáší textové informace",
          correct: true,
        },
        {
          text: "je spojovaný protokol",
          correct: true,
        },
        {
          text: "přenáší binární soubory",
          correct: false,
        },
      ],
    },
    {
      text: "Protokol HTTP verze 1.1",
      answers: [
        {
          text: "pracuje na dvou portech",
          correct: false,
        },
        {
          text: "umožňuje zjistit čas aktualizace souboru před přenesení",
          correct: true,
        },
        {
          text: "umožňuje řízení cache",
          correct: true,
        },
        {
          text: "umožňuje současné stahování souboru z více zdrojů",
          correct: false,
        },
      ],
    },
    {
      text: "Protokol FTP",
      answers: [
        {
          text: "přenáší výpis adresáře v příkazovém kanálu",
          correct: false,
        },
        {
          text: "pracuje na trvalém řídícím spojení",
          correct: true,
        },
        {
          text: "přenáší výpis adresáře datovým kanálem",
          correct: false,
        },
        {
          text: "vyžaduje přístup přes jméno a heslo",
          correct: true,
        },
      ],
    },
    {
      text: "Informace o přesměrování na správný router pro danou IP adresu se počítač dozví pomocí protokolu",
      answers: [
        {
          text: "DHCP",
          correct: false,
        },
        {
          text: "SNMP",
          correct: false,
        },
        {
          text: "IP",
          correct: false,
        },
        {
          text: "ICMP",
          correct: true,
        },
      ],
    },
    {
      text: "Informace, že stránka je umístěna na jiném místě (redirekce) může být zaslána",
      answers: [
        {
          text: "skriptem (např. PHP) v závislosti na parametrech odeslaných klientem",
          correct: true,
        },
        {
          text: "v hlavičce HTML stránky",
          correct: true,
        },
        {
          text: "v těle HTML stránky",
          correct: false,
        },
        {
          text: "v hlavičce http protokolu",
          correct: true,
        },
      ],
    },
    {
      text: "Jaký protokol pracuje na portu 20?",
      answers: [
        {
          text: "protokol FTP přes port 20 posílá data",
          correct: true,
        },
      ],
    },
    {
      text: "Jaký protokol pracuje na portu 21?",
      answers: [
        {
          text: "Protokol FTP přes port 21 posílá příkazy",
          correct: true,
        },
      ],
    },
    {
      text: "Jaký protokol pracuje na portu 23?",
      answers: [
        {
          text: "Na portu 23 pracuje protokol telnet",
          correct: true,
        },
      ],
    },
    {
      text: "Jaký protokol pracuje na portu 25?",
      answers: [
        {
          text: "Na portu 25 pracuje protokol SMTP",
          correct: true,
        },
      ],
    },
    {
      text: "Jaký protokol pracuje na portu 27?",
      answers: [
        {
          text: "Na portu 27 pracuje protokol ESMTP",
          correct: true,
        },
      ],
    },
    {
      text: "Jaký protokol pracuje na portu 70?",
      answers: [
        {
          text: "Na portu 70 pracuje protokol Gopher",
          correct: true,
        },
      ],
    },
    {
      text: "Jaký protokol pracuje na portu 80?",
      answers: [
        {
          text: "Na portu 80 pracuje protokol HTTP",
          correct: true,
        },
      ],
    },
    {
      text: "Jaký protokol pracuje na portu 443?",
      answers: [
        {
          text: "Na portu 443 pracuje protokol HTTPS",
          correct: true,
        },
      ],
    },
  ];

  const [searchQuest, setSearchQuest] = useState("");

  const filteredData = data.filter((item) => {
    const questionMatch = item.text
      .toLocaleLowerCase()
      .includes(searchQuest.toLocaleLowerCase());
    const answerMatch = item.answers.some((answer) =>
      answer.text.toLocaleLowerCase().includes(searchQuest.toLocaleLowerCase())
    );
    return questionMatch || answerMatch;
  });

  return <>
  
  <div className="w-screen h-screen flex flex-col justify-center items-center overflow-auto bg-[#242424] text-white">
      {/* search through questions and ther coresponding answears */}

      <div className="w-full max-w-4xl mb-6">
        <Input
          type="text"
          placeholder="Search questions or answers..."
          value={searchQuest}
          onChange={(e) => setSearchQuest(e.target.value)}
          className="bg-gray-800 text-white border-gray-700"
        />
      </div>

      <Table className="text-">
        <TableCaption>Ter</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>Question</TableHead>
            <TableHead>Answear</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {filteredData.map((question, index) => (
            <TableRow key={index} className="border-gray-700">
              <TableCell className="font-medium">{question.text}</TableCell>
              <TableCell>
                <ul>
                  {question.answers.map((answer, idx) => (
                    <li
                      key={idx}
                      className={
                        answer.correct ? "text-green-500" : "text-red-500"
                      }
                    >
                      {answer.text}
                    </li>
                  ))}
                </ul>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>


  </>;
}
