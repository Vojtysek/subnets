"use client";

import { Input } from "@/components/ui/input";
import {
  TableCaption,
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
  Table,
} from "@/components/ui/table";
import { useState } from "react";

export default function PageTor() {
  const data = [
                    {
                        "text": "1.B2B marketing:",
                        "answers": [
                            {
                                "text": "Zkrácená verze označující \"business-to-business\"",
                                "correct": true
                            },
                            {
                                "text": "počet zákazníků je obvykle menší, než je tomu u B2C marketingu",
                                "correct": true
                            },
                            {
                                "text": "je marketing na mezipodnikových trzích",
                                "correct": true
                            },
                            {
                                "text": "označuje marketing, kdy je zákazníkem jiná firma",
                                "correct": true
                            },
                            {
                                "text": "označuje to samé co B2C",
                                "correct": false
                            },
                            {
                                "text": "je marketing na trzích spotřebitelů",
                                "correct": false
                            },
                            {
                                "text": "označuje marketing, kdy je zákazníkem jiný spotřebitel",
                                "correct": false
                            }
                        ]
                    },
                    {
                        "text": "2.B2C marketing je marketing zaměřený na konečného spotřebitele",
                        "answers": [
                            {
                                "text": "ANO",
                                "correct": true
                            },
                            {
                                "text": "NE",
                                "correct": false
                            }
                        ]
                    },
                    {
                        "text": "3.Tzv. marketingová koncepce:",
                        "answers": [
                            {
                                "text": "se zaměřuje primárně na prodej výrobků a jeho zdokonalování",
                                "correct": false
                            },
                            {
                                "text": "se zaměřuje primárně na zákazníka a uspokojování jeho potřeb",
                                "correct": true
                            },
                            {
                                "text": "se zaměřuje primárně na dodavatele",
                                "correct": false
                            },
                            {
                                "text": "se zaměřuje primárně na konkurenci",
                                "correct": false
                            },
                            {
                                "text": "se zaměřuje primárně na prodej výrobků",
                                "correct": false
                            }
                        ]
                    },
                    {
                        "text": "4.B2C marketing je marketing zaměřený na trh organizací:",
                        "answers": [
                            {
                                "text": "NE",
                                "correct": true
                            },
                            {
                                "text": "ANO",
                                "correct": false
                            }
                        ]
                    },
                    {
                        "text": "5.Mezi metody výzkumu primárních dat nepatří:",
                        "answers": [
                            {
                                "text": "experiment",
                                "correct": false
                            },
                            {
                                "text": "Focus Group",
                                "correct": false
                            },
                            {
                                "text": "rešerše",
                                "correct": true
                            }
                        ]
                    },
                    {
                        "text": "6.Základem marketingu je směna hodnot.",
                        "answers": [
                            {
                                "text": "ANO",
                                "correct": true
                            },
                            {
                                "text": "NE",
                                "correct": false
                            }
                        ]
                    },
                    {
                        "text": "8.Validitou informací se rozumí:",
                        "answers": [
                            {
                                "text": "to, že na jejich pořízení byly vynaloženy náklady přiměřené k účelu jejich využití",
                                "correct": false
                            },
                            {
                                "text": "to že vyjadřují a měří to, co vyjadřovat mají",
                                "correct": true
                            },
                            {
                                "text": "to, že při opakovaném použití metod jejich pořízení budou získány stejné výsledky",
                                "correct": false
                            },
                            {
                                "text": "to, že se vztahují ke zkoumané problematice",
                                "correct": false
                            }
                        ]
                    },
                    {
                        "text": "9.Konkurenční síly na trhu podle Portera zahrnují:",
                        "answers": [
                            {
                                "text": "hrozbu substitutů",
                                "correct": true
                            },
                            {
                                "text": "vyjednávací sílu zákazníků",
                                "correct": true
                            },
                            {
                                "text": "konkurenci komplementárních výrobků",
                                "correct": false
                            },
                            {
                                "text": "stávající konkurenci v odvětví",
                                "correct": true
                            }
                        ]
                    },
                    {
                        "text": "10.Podstatu marketingu nejlépe vystihuje následující tvrzení:",
                        "answers": [
                            {
                                "text": "marketing vychází z pochopení problémů zákazníka a nabízí jejich řešení",
                                "correct": true
                            },
                            {
                                "text": "cílem je stálý prodej se ziskem",
                                "correct": false
                            },
                            {
                                "text": "marketing není orientovaný na zisk, ale na zákazníky",
                                "correct": false
                            },
                            {
                                "text": "marketing vychází z předpokladu, že je spotřebitel pasivní",
                                "correct": false
                            },
                            {
                                "text": "marketing je spojen se směnou – je integrovaný soubor činností zaměřených na trh",
                                "correct": true
                            },
                            {
                                "text": "marketing je integrovaný komplex činností, zaměřených na agresivní prodej",
                                "correct": false
                            }
                        ]
                    },
                    {
                        "text": "11.Marketing je možné ztotožnit s prodejem:",
                        "answers": [
                            {
                                "text": "NE",
                                "correct": true
                            },
                            {
                                "text": "ANO",
                                "correct": false
                            }
                        ]
                    },
                    {
                        "text": "12.Konkurenční síly na trhu podle Portera zahrnují:",
                        "answers": [
                            {
                                "text": "konkurenci komplementárních výrobků",
                                "correct": false
                            },
                            {
                                "text": "stávající konkurenci v odvětví",
                                "correct": true
                            },
                            {
                                "text": "vyjednávací sílu dodavatelů",
                                "correct": true
                            },
                            {
                                "text": "vyjednávací sílu zákazníků",
                                "correct": true
                            },
                            {
                                "text": "konkurenci v rámci managementu podniku",
                                "correct": false
                            },
                            {
                                "text": "konkurenci mezi odvětvími",
                                "correct": false
                            }
                        ]
                    },
                    {
                        "text": "13.Tzv. prodejní koncepce je:",
                        "answers": [
                            {
                                "text": "často uplatňována u tzv. \"nehledaného zboží\" (např. pojištění)",
                                "correct": true
                            },
                            {
                                "text": "uplatňována zejména u luxusního zboží",
                                "correct": false
                            },
                            {
                                "text": "přístup trhu založený na \"agresivním\" prodeji",
                                "correct": true
                            },
                            {
                                "text": "přístup, v jehož jádru je výroba velkého množství výrobků bez ohledu na technicky pokrok a design",
                                "correct": false
                            },
                            {
                                "text": "přístup, podle kterého je spotřebitel pasivní",
                                "correct": true
                            },
                            {
                                "text": "přístup, v jehož jádru je výroba kvalitního zboží a jeho neustálého zdokonalování",
                                "correct": false
                            }
                        ]
                    },
                    {
                        "text": "14.Marketingové mikroprostředí je:",
                        "answers": [
                            {
                                "text": "faktor, který firma nemůže příliš ovlivňovat",
                                "correct": false
                            },
                            {
                                "text": "ovlivněno úrovní příjmů v zemi",
                                "correct": false
                            },
                            {
                                "text": "faktor, který firma může přímo ovlivňovat",
                                "correct": true
                            },
                            {
                                "text": "kulturní faktor okolního prostředí ovlivňující marketing firmy",
                                "correct": false
                            }
                        ]
                    },
                    {
                        "text": "15.Kvalitativní marketingový výzkum:",
                        "answers": [
                            {
                                "text": "je typicky obtížně kvantifikovatelný a vyžaduje tak psychologickou interpretaci",
                                "correct": true
                            },
                            {
                                "text": "informativní výzkum používaný pro zjištění motivací a chování zákazníků",
                                "correct": true
                            },
                            {
                                "text": "odpovídá obvykle na otázku: \"Kolik?\"",
                                "correct": false
                            },
                            {
                                "text": "odpovídá obvykle na otázku \"Jaká je kvalita?\"",
                                "correct": false
                            },
                            {
                                "text": "měří intenzitu zkoumaných jevů",
                                "correct": false
                            },
                            {
                                "text": "neumožňuje typicky statistické zpracování a zobecnění na celou populaci",
                                "correct": true
                            }
                        ]
                    },
                    {
                        "text": "16.Výzkum sekundárních dat:",
                        "answers": [
                            {
                                "text": "pracuje s daty, které někde již existují",
                                "correct": true
                            },
                            {
                                "text": "předchází výzkumu primárních dat",
                                "correct": true
                            },
                            {
                                "text": "následuje bezprostředně po výzkumu primárním",
                                "correct": false
                            },
                            {
                                "text": "by měl následovat po terénním výzkumu",
                                "correct": false
                            },
                            {
                                "text": "krátký informativní výzkum pro zjištění předběžných požadavků zákazníků",
                                "correct": false
                            }
                        ]
                    },
                    {
                        "text": "17.Kvalitativní marketingový výzkum:",
                        "answers": [
                            {
                                "text": "odpovídá obvykle na otázku: \"Proč?\"",
                                "correct": true
                            },
                            {
                                "text": "informativní výzkum používaný pro zjištění motivací a chování zákazníků",
                                "correct": true
                            },
                            {
                                "text": "typicky pracuje s velkými reprezentativními vzorky",
                                "correct": false
                            },
                            {
                                "text": "vyžaduje psychologickou interpretaci",
                                "correct": true
                            },
                            {
                                "text": "odpovídá obvykle na otázku \"Jaká je kvalita?\"",
                                "correct": false
                            }
                        ]
                    },
                    {
                        "text": "18.Výběrová šetření v marketingovém výzkumu:",
                        "answers": [
                            {
                                "text": "umožňuje významně redukovat náklady výzkumu",
                                "correct": true
                            },
                            {
                                "text": "mohou mít podobu náhodného výběru nebo výběru zaměřeného (např. kvótního výběru)",
                                "correct": true
                            },
                            {
                                "text": "jsou v praxi využívaná jen výjimečně, protože vytvoření výběru je příliš zdlouhavé",
                                "correct": false
                            },
                            {
                                "text": "využívají jen vybrané jednotky ze základního souboru. Na základě toho výběru se pak usuzuje celek",
                                "correct": true
                            },
                            {
                                "text": "z principu neumožní dobrý vhled do hloubky jevů a zaměření analýzy žádoucím směrem",
                                "correct": false
                            }
                        ]
                    },
                    {
                        "text": "19.Marketingové mikroprostředí je:",
                        "answers": [
                            {
                                "text": "ovlivněno úrovní příjmů v zemi",
                                "correct": false
                            },
                            {
                                "text": "možné popsat pomocí PEST analýzy",
                                "correct": false
                            },
                            {
                                "text": "kulturní faktor okolního prostředí ovlivňující marketing firmy",
                                "correct": false
                            },
                            {
                                "text": "faktor, který nemůže firma příliš ovlivňovat",
                                "correct": false
                            },
                            {
                                "text": "faktor, který může firma ovlivňovat",
                                "correct": true
                            }
                        ]
                    },
                    {
                        "text": "20.Výběrová šetření marketingového výzkumu:",
                        "answers": [
                            {
                                "text": "umožňují významně redukovat náklady na výzkum",
                                "correct": true
                            },
                            {
                                "text": "mohou mít podobu náhodného výběru nebo výběru zaměřeného (např. kvótního výběru)",
                                "correct": true
                            },
                            {
                                "text": "využívají jen vybrané jednotky ze základního souboru. na základě toho výběru se pak usuzuje na celek",
                                "correct": true
                            },
                            {
                                "text": "z principu neumožňují dobrý vhled do hloubky jevů a zaměření analýzy žádoucím směrem",
                                "correct": false
                            },
                            {
                                "text": "jsou v praxi využívané jen výjimečně, protože vytvoření výběru je příliš zdlouhavé.",
                                "correct": false
                            }
                        ]
                    },
                    {
                        "text": "21.Konkurenční síly na trhu podle Portera zahrnují:",
                        "answers": [
                            {
                                "text": "stávající konkurenci v odvětví",
                                "correct": true
                            },
                            {
                                "text": "hrozbu substitutů",
                                "correct": true
                            },
                            {
                                "text": "hrozbu vstupu nových konkurentů",
                                "correct": true
                            },
                            {
                                "text": "externí ovlivňovatelé",
                                "correct": false
                            }
                        ]
                    },
                    {
                        "text": "22.Podstatu marketingu nejlépe vystihuje následující tvrzení:",
                        "answers": [
                            {
                                "text": "marketing je spojen se směnou – je to integrovaný soubor činností zaměřených na trh",
                                "correct": true
                            },
                            {
                                "text": "marketing není orientovaný na zisk, ale na zákazníka",
                                "correct": false
                            },
                            {
                                "text": "marketing vychází z pochopení problému zákazníka a nabízí řešení těchto problémů",
                                "correct": false
                            },
                            {
                                "text": "cílem je stálý prodej se ziskem",
                                "correct": false
                            },
                            {
                                "text": "marketing vychází z předpokladu, že je spotřebitel pasivní",
                                "correct": true
                            },
                            {
                                "text": "marketing je integrovaný komplex činností, zaměřených na agresivní prodej",
                                "correct": false
                            }
                        ]
                    },
                    {
                        "text": "23.Konkurenční síly na trhu podle Portera zahrnují:",
                        "answers": [
                            {
                                "text": "konkurenci komplementárních výrobků",
                                "correct": false
                            },
                            {
                                "text": "konkurenci v rámci managementu podniku",
                                "correct": false
                            },
                            {
                                "text": "hrozbu substitutů",
                                "correct": true
                            },
                            {
                                "text": "stávající konkurenci v odvětví",
                                "correct": true
                            },
                            {
                                "text": "hrozbu vstupu nových konkurentů",
                                "correct": true
                            }
                        ]
                    },
                    {
                        "text": "24.B2B marketing:",
                        "answers": [
                            {
                                "text": "označuje metodu, která slouží k analýze marketingového makroprostředí",
                                "correct": false
                            },
                            {
                                "text": "označuje to samé co B2C marketing",
                                "correct": false
                            },
                            {
                                "text": "je marketing na mezipodnikových trzích",
                                "correct": true
                            },
                            {
                                "text": "označuje marketing, kdy je zákazníkem firma",
                                "correct": true
                            }
                        ]
                    },
                    {
                        "text": "25.Kvalitativní marketingový výzkum:",
                        "answers": [
                            {
                                "text": "obvykle odpovídá na otázku \"Kolik\"",
                                "correct": false
                            },
                            {
                                "text": "obvykle odpovídá na otázku \"Jaké je kvalita\"",
                                "correct": false
                            },
                            {
                                "text": "obvykle odpovídá na otázku \"Proč\"",
                                "correct": true
                            },
                            {
                                "text": "typicky pracuje s velkými reprezentativními vzorky",
                                "correct": false
                            }
                        ]
                    },
                    {
                        "text": "26.Kvalitativní marketingový výzkum:",
                        "answers": [
                            {
                                "text": "obvykle odpovídá na otázku \"Proč\"",
                                "correct": true
                            },
                            {
                                "text": "je používán pro zjištění motivací a chování zákazníků",
                                "correct": true
                            },
                            {
                                "text": "je typicky obtížně kvantifikovatelný a vyžaduje tak psychologickou interpretaci",
                                "correct": true
                            },
                            {
                                "text": "umožňuje deskripci trhu, mapuje tržní situaci a umožňuje přesnou kvantifikaci",
                                "correct": false
                            }
                        ]
                    },
                    {
                        "text": "27.Výběrová šetření v marketingovém výzkumu:",
                        "answers": [
                            {
                                "text": "využívají jen vybrané jednotky ze základního souboru. Na základě tohoto výběru se pak usuzuje na celek.",
                                "correct": true
                            },
                            {
                                "text": "jsou v praxi využívaná jen výjimečně, protože vytvoření výběru je příliš zdlouhavé",
                                "correct": false
                            },
                            {
                                "text": "mohou mít podobu náhodného výběru, nebo výběru záměrného. (např. Kvótního)",
                                "correct": true
                            },
                            {
                                "text": "umožňují významně redukovat náklady výzkumu.",
                                "correct": true
                            }
                        ]
                    },
                    {
                        "text": "28.B2B marketing:",
                        "answers": [
                            {
                                "text": "zkrácená verze označuje \"business-to-buyer\"",
                                "correct": false
                            },
                            {
                                "text": "je marketing na mezipodnikových trzích",
                                "correct": true
                            },
                            {
                                "text": "je marketing na trzích spotřebitelů",
                                "correct": false
                            },
                            {
                                "text": "označuje marketing, kdy je zákazníkem jiná firma",
                                "correct": true
                            }
                        ]
                    },
                    {
                        "text": "29.Tzv. prodejní koncepce je:",
                        "answers": [
                            {
                                "text": "často uplatňována u tzv. \"nehledaného zboží\" (např. pojištění)",
                                "correct": true
                            },
                            {
                                "text": "uplatňována zejména u luxusního zboží",
                                "correct": false
                            },
                            {
                                "text": "přístup trhu založený na \"pasivním\" prodeji",
                                "correct": false
                            },
                            {
                                "text": "přístup, v jehož jádru je výroba kvalitního zboží a jeho neustálého zdokonalování",
                                "correct": false
                            }
                        ]
                    },
                    {
                        "text": "30.B2B marketing:",
                        "answers": [
                            {
                                "text": "je marketing na trzích spotřebitelů",
                                "correct": false
                            },
                            {
                                "text": "označuje to samé co B2C marketing",
                                "correct": false
                            },
                            {
                                "text": "počet zákazníků je obvykle menší, než je tomu v případě B2C marketingu",
                                "correct": true
                            },
                            {
                                "text": "označuje metodu, která slouží k analýze marketingového makroprostředí",
                                "correct": false
                            }
                        ]
                    },
                    {
                        "text": "31.Rozdělení trhu na základě pohlaví odpovídá segmentaci demografické:",
                        "answers": [
                            {
                                "text": "ANO",
                                "correct": true
                            },
                            {
                                "text": "NE",
                                "correct": false
                            }
                        ]
                    },
                    {
                        "text": "32.Při demografické segmentaci je trh rozdělen podle proměnných, jako jsou například, hodnoty či životní styl:",
                        "answers": [
                            {
                                "text": "NE",
                                "correct": true
                            },
                            {
                                "text": "ANO",
                                "correct": false
                            }
                        ]
                    },
                    {
                        "text": "33.Referenční skupina v marketingu:",
                        "answers": [
                            {
                                "text": "označuje skupinu, se kterou jedinec poměřuje své chování",
                                "correct": true
                            },
                            {
                                "text": "často zahrnuje přátelé",
                                "correct": true
                            },
                            {
                                "text": "může být i sekundární sociální skupinou",
                                "correct": true
                            },
                            {
                                "text": "znamená totéž, co sekundární sociální skupina",
                                "correct": false
                            }
                        ]
                    },
                    {
                        "text": "34.Pro kupní chování institucí v obecné rovině platí:",
                        "answers": [
                            {
                                "text": "poptávka institucí bývá více roztříštěná, než je tomu u spotřebitelů – kupní síla zákazníků bývá nižší a prostorové rozptýlení větší",
                                "correct": false
                            },
                            {
                                "text": "poptávka institucí bývá méně pružná nežli poptávka spotřebitelů",
                                "correct": true
                            },
                            {
                                "text": "poptávka institucí je odvozena od poptávky spotřebitelů",
                                "correct": true
                            },
                            {
                                "text": "na kupním rozhodování institucí se obvykle podílí více osob, než-li je tomu u spotřebitelů",
                                "correct": true
                            },
                            {
                                "text": "poptávka institucí bývá více koncentrována – kupní síla zákazníků bývá vyšší a prostorové rozptýlení menší",
                                "correct": true
                            }
                        ]
                    },
                    {
                        "text": "35.V marketingu se rozlišují následující kupní role:",
                        "answers": [
                            {
                                "text": "kupující",
                                "correct": true
                            },
                            {
                                "text": "prodejce",
                                "correct": false
                            },
                            {
                                "text": "marketér",
                                "correct": false
                            },
                            {
                                "text": "uživatel",
                                "correct": true
                            },
                            {
                                "text": "ovlivňovatel",
                                "correct": true
                            },
                            {
                                "text": "rozhodovatel",
                                "correct": true
                            }
                        ]
                    },
                    {
                        "text": "36.První etapou cíleného marketingu je:",
                        "answers": [
                            {
                                "text": "positioning",
                                "correct": false
                            },
                            {
                                "text": "provedení sekundárního výzkumu",
                                "correct": false
                            },
                            {
                                "text": "výběr vhodného marketingového mixu",
                                "correct": false
                            },
                            {
                                "text": "targeting",
                                "correct": false
                            },
                            {
                                "text": "segmentace trhu",
                                "correct": true
                            }
                        ]
                    },
                    {
                        "text": "37.Mezi tzv. behaviorální segmentační kritéria patří:",
                        "answers": [
                            {
                                "text": "pohlaví",
                                "correct": false
                            },
                            {
                                "text": "loajalita/věrnost ke značkám",
                                "correct": true
                            },
                            {
                                "text": "sexualní orientace",
                                "correct": false
                            },
                            {
                                "text": "příjem",
                                "correct": false
                            },
                            {
                                "text": "životní styl",
                                "correct": false
                            },
                            {
                                "text": "fáze životního cyklu",
                                "correct": false
                            },
                            {
                                "text": "stádium připravenosti zákazníka koupit daný produkt",
                                "correct": true
                            },
                            {
                                "text": "míra používání produktu",
                                "correct": true
                            },
                            {
                                "text": "postoj k produktu",
                                "correct": true
                            },
                            {
                                "text": "příležitost užití produktu",
                                "correct": true
                            },
                            {
                                "text": "městská čtvrť, ve které zákazníci žijí",
                                "correct": false
                            },
                            {
                                "text": "vzdělání a povolání",
                                "correct": false
                            },
                            {
                                "text": "kontinent, na kterém zákazníci žijí",
                                "correct": false
                            },
                            {
                                "text": "připravenost k nákupu",
                                "correct": true
                            },
                            {
                                "text": "aktuální lokalita, ve které se zákazníci nacházejí",
                                "correct": false
                            },
                            {
                                "text": "životní hodnoty",
                                "correct": false
                            },
                            {
                                "text": "věk",
                                "correct": false
                            },
                            {
                                "text": "rasa",
                                "correct": false
                            },
                            {
                                "text": "osobnostní profil",
                                "correct": false
                            }
                        ]
                    },
                    {
                        "text": "38.K podmínkám uplatnění výsledků segmentace trhu v cíleném marketingu patří:",
                        "answers": [
                            {
                                "text": "dostatečná velikost segmentu",
                                "correct": true
                            },
                            {
                                "text": "vnitřní heterogenita segmentu",
                                "correct": false
                            },
                            {
                                "text": "vnější heterogenita segmentu",
                                "correct": true
                            },
                            {
                                "text": "vnitřní homogenita segmentu",
                                "correct": true
                            },
                            {
                                "text": "malý počet segmentů",
                                "correct": false
                            }
                        ]
                    },
                    {
                        "text": "39.Spotřební chování vysvětluje marketing na základě:",
                        "answers": [
                            {
                                "text": "blízké, či vzdálené konkurence",
                                "correct": false
                            },
                            {
                                "text": "procesů v černé skříňce spotřebitele",
                                "correct": true
                            },
                            {
                                "text": "psychických procesů spotřebitele",
                                "correct": true
                            },
                            {
                                "text": "procesů v bílé skříňce spotřebitele",
                                "correct": false
                            },
                            {
                                "text": "podle vlivů sociálního prostředí",
                                "correct": true
                            },
                            {
                                "text": "na základě ekonomické racionality",
                                "correct": true
                            }
                        ]
                    },
                    {
                        "text": "40.Aspirační skupina:",
                        "answers": [
                            {
                                "text": "je skupina, ke které si člověk přeje patřit",
                                "correct": true
                            },
                            {
                                "text": "je skupina, jíž je osoba členem",
                                "correct": false
                            },
                            {
                                "text": "je skupina, ke které si člověk nepřeje patřit",
                                "correct": false
                            },
                            {
                                "text": "je skupina, se kterou jedinec nemusí být v kontaktu",
                                "correct": true
                            },
                            {
                                "text": "je skupina, se kterou se člověk identifikuje",
                                "correct": true
                            }
                        ]
                    },
                    {
                        "text": "41.Mikrosegment je označení pro tržní výklenek:",
                        "answers": [
                            {
                                "text": "ANO",
                                "correct": true
                            },
                            {
                                "text": "NE",
                                "correct": false
                            }
                        ]
                    },
                    {
                        "text": "42.Segment trhu by měl splňovat určité požadavky:",
                        "answers": [
                            {
                                "text": "měl by být vnitřně homogenní a vnějškově heterogenní",
                                "correct": true
                            },
                            {
                                "text": "měl by být dostatečně rozptýlený",
                                "correct": false
                            },
                            {
                                "text": "měl by být vnitřně heterogenní a vnějškově homogenní",
                                "correct": false
                            },
                            {
                                "text": "neměl by na daný soubor marketingových stimulů reagovat stejným způsobem",
                                "correct": false
                            }
                        ]
                    },
                    {
                        "text": "43.Který z níže uvedených výroků vystihuje podstatu masového marketingu?",
                        "answers": [
                            {
                                "text": "jde o přístup, kdy firma ignoruje svou konkurenci",
                                "correct": false
                            },
                            {
                                "text": "jde o přístup, kdy firma ignoruje rozdíly mezi zákazníky",
                                "correct": true
                            },
                            {
                                "text": "jde o přístup, založený na diferenciaci nabídky pro jednotlivé tržní segmenty",
                                "correct": false
                            },
                            {
                                "text": "jde o masový přístup firmy ke svým zaměstnancům",
                                "correct": false
                            },
                            {
                                "text": "je použitý téměř stejný produkt, komunikace a distribuce pro zákazníky",
                                "correct": true
                            }
                        ]
                    },
                    {
                        "text": "44.Spotřební chování vysvětluje marketing na základě:",
                        "answers": [
                            {
                                "text": "ekonomické racionality",
                                "correct": true
                            },
                            {
                                "text": "procesů v bílé skříňce spotřebitele",
                                "correct": false
                            },
                            {
                                "text": "vlivů sociálních skupin",
                                "correct": true
                            },
                            {
                                "text": "blízké či vzdálené konkurence",
                                "correct": false
                            },
                            {
                                "text": "procesů v černé skříňce spotřebitele",
                                "correct": true
                            },
                            {
                                "text": "interní či externí konkurenci",
                                "correct": false
                            }
                        ]
                    },
                    {
                        "text": "45.Referenční skupina v marketingu:",
                        "answers": [
                            {
                                "text": "často zahrnuje přátelé",
                                "correct": true
                            },
                            {
                                "text": "znamená totéž co sekundární sociální skupina",
                                "correct": false
                            },
                            {
                                "text": "může být i sekundární sociální skupinou",
                                "correct": true
                            },
                            {
                                "text": "označuje skupinu, se kterou jedinec poměřuje své chování",
                                "correct": true
                            }
                        ]
                    },
                    {
                        "text": "46.V marketingu se rozlišují následující kupní role:",
                        "answers": [
                            {
                                "text": "ovlivňovatel",
                                "correct": true
                            },
                            {
                                "text": "rozhodovatel",
                                "correct": true
                            },
                            {
                                "text": "marketér",
                                "correct": false
                            },
                            {
                                "text": "prodejce",
                                "correct": false
                            }
                        ]
                    },
                    {
                        "text": "47.K segmentaci spotřebních trhů se využívají následující kritéria:",
                        "answers": [
                            {
                                "text": "geografická",
                                "correct": true
                            },
                            {
                                "text": "demografická",
                                "correct": true
                            },
                            {
                                "text": "komunikační",
                                "correct": false
                            },
                            {
                                "text": "konkurenční",
                                "correct": false
                            }
                        ]
                    },
                    {
                        "text": "48.K segmentaci spotřebních trhů se využívají následující kritéria:",
                        "answers": [
                            {
                                "text": "strategická",
                                "correct": false
                            },
                            {
                                "text": "psychografická",
                                "correct": true
                            },
                            {
                                "text": "behaviorální",
                                "correct": true
                            },
                            {
                                "text": "taktická",
                                "correct": false
                            }
                        ]
                    },
                    {
                        "text": "49.Kognitivní disonance:",
                        "answers": [
                            {
                                "text": "je nespokojenost, která se objevuje v první fázi nákupního procesu",
                                "correct": false
                            },
                            {
                                "text": "je nespokojenost, která souvisí s přijímáním inovací",
                                "correct": true
                            },
                            {
                                "text": "je nespokojenost, která se objevuje ve druhé fázi nákupního procesu",
                                "correct": true
                            },
                            {
                                "text": "je nespokojenost, která se objevuje ve třetí fázi nákupního procesu",
                                "correct": false
                            }
                        ]
                    },
                    {
                        "text": "50.Kognitivní disonance:",
                        "answers": [
                            {
                                "text": "je nespokojenost, která souvisí s přijímáním inovací",
                                "correct": false
                            },
                            {
                                "text": "je nespokojenost, vyplývající z toho, že lidé po nákupu přišli o výhody, které by jim poskytla nezvolená značka",
                                "correct": true
                            },
                            {
                                "text": "je nespokojenost kupujícího způsobená nákupním konfliktem",
                                "correct": true
                            },
                            {
                                "text": "je nespokojenost, která se objevuje v první fázi nákupního procesu",
                                "correct": false
                            }
                        ]
                    },
                    {
                        "text": "51.Positioning se týká primárně toho, jakým způsobem bude značka vnímána zákazníky.",
                        "answers": [
                            {
                                "text": "ANO",
                                "correct": true
                            },
                            {
                                "text": "NE",
                                "correct": false
                            }
                        ]
                    },
                    {
                        "text": "52.Tzv. Unique Selling Proposition označuje:",
                        "answers": [
                            {
                                "text": "způsob, jakým je vymezována cena produktu v maloobchodním řetězci",
                                "correct": false
                            },
                            {
                                "text": "způsob positioningu značky, kdy je komunikován nefunkční emocionální atribut",
                                "correct": false
                            },
                            {
                                "text": "jedinečný užitek spojený s danou značkou, který je dlouhodobě komunikován",
                                "correct": true
                            },
                            {
                                "text": "strategii vysokých cen a dalších poplatků",
                                "correct": false
                            },
                            {
                                "text": "agresivní strategii obchodních zástupců",
                                "correct": false
                            }
                        ]
                    },
                    {
                        "text": "53.Privátní značky oslovují v obecné rovině zejména méně spořivé zákazníky",
                        "answers": [
                            {
                                "text": "NE",
                                "correct": true
                            },
                            {
                                "text": "ANO",
                                "correct": false
                            }
                        ]
                    },
                    {
                        "text": "54.Tzv. private label brands využívá např. Tesco.",
                        "answers": [
                            {
                                "text": "ANO",
                                "correct": true
                            },
                            {
                                "text": "NE",
                                "correct": false
                            }
                        ]
                    },
                    {
                        "text": "55.Tzv. private label brands označuje značky výrobce.",
                        "answers": [
                            {
                                "text": "ANO",
                                "correct": false
                            },
                            {
                                "text": "NE",
                                "correct": true
                            }
                        ]
                    },
                    {
                        "text": "56.Globální positioning značky znamená, že firma usiluje o stejné vnímání dané značky na všech trzích.",
                        "answers": [
                            {
                                "text": "NE",
                                "correct": false
                            },
                            {
                                "text": "ANO",
                                "correct": true
                            }
                        ]
                    },
                    {
                        "text": "57.Při procesu positioningu značky firma nebere v potaz asociace, které vyvolávají značky konkurenční.",
                        "answers": [
                            {
                                "text": "NE",
                                "correct": true
                            },
                            {
                                "text": "ANO",
                                "correct": false
                            }
                        ]
                    },
                    {
                        "text": "58.Brand positioning:",
                        "answers": [
                            {
                                "text": "je umístění značky v regálech v maloobchodu",
                                "correct": false
                            },
                            {
                                "text": "je strategické marketingové rozhodnutí",
                                "correct": true
                            },
                            {
                                "text": "je umístění značky produktu do filmu",
                                "correct": false
                            },
                            {
                                "text": "je umístění značky v regálech velkoobchodu",
                                "correct": false
                            }
                        ]
                    },
                    {
                        "text": "59.Identita značky (Brand identity) představuje jedinečný soubor asociací, které má značka u cílové skupiny vyvolávat.",
                        "answers": [
                            {
                                "text": "NE",
                                "correct": false
                            },
                            {
                                "text": "ANO",
                                "correct": true
                            }
                        ]
                    },
                    {
                        "text": "60.Tzv. rozřeďování značky je:",
                        "answers": [
                            {
                                "text": "označení pro proces, kdy se povědomí o značce šíří masivně mezi lidmi",
                                "correct": false
                            },
                            {
                                "text": "označení pro proces postupného posilování značky v dané cílové skupině",
                                "correct": false
                            },
                            {
                                "text": "situace, kdy si lidé přestávají značku spojovat s danou produktovou kategorií (resp. s daným zákaznickým segmentem)",
                                "correct": true
                            },
                            {
                                "text": "úspěšné použití značky pro jinou produktovou kategorii",
                                "correct": false
                            },
                            {
                                "text": "grafická úprava známé úspěšné značky do dalších obdobných modifikací",
                                "correct": false
                            }
                        ]
                    },
                    {
                        "text": "61.Positioning je třetí fází masového marketingu:",
                        "answers": [
                            {
                                "text": "NE",
                                "correct": true
                            },
                            {
                                "text": "ANO",
                                "correct": false
                            }
                        ]
                    },
                    {
                        "text": "62.Jako co-branding se označuje:",
                        "answers": [
                            {
                                "text": "použití dvou a více značek různých firem na jednom produktu",
                                "correct": true
                            },
                            {
                                "text": "použití značky výrobce na daném produktu",
                                "correct": false
                            },
                            {
                                "text": "použití licencovaných značek bez poplatku",
                                "correct": false
                            },
                            {
                                "text": "použití licencovaných značek za sjednaný poplatek",
                                "correct": false
                            },
                            {
                                "text": "že na jedné službě se použijí zavedené značky jiných firem",
                                "correct": true
                            }
                        ]
                    },
                    {
                        "text": "63.Tzv. privátní značka:",
                        "answers": [
                            {
                                "text": "je to samé, co tzv. značka výrobce",
                                "correct": false
                            },
                            {
                                "text": "je to samé, co tzv. maloobchodní značka",
                                "correct": true
                            },
                            {
                                "text": "je označení pro značku, která je v krizi",
                                "correct": false
                            },
                            {
                                "text": "označení pro tzv. rodinnou značku",
                                "correct": false
                            }
                        ]
                    },
                    {
                        "text": "64.Brand positioning:",
                        "answers": [
                            {
                                "text": "je umístění značky v regálech v maloobchodu",
                                "correct": false
                            },
                            {
                                "text": "je to samé co targeting",
                                "correct": false
                            },
                            {
                                "text": "je umístění značky produktu do pc hry",
                                "correct": false
                            },
                            {
                                "text": "představuje jednu z klíčových fází cíleného marketingu",
                                "correct": true
                            }
                        ]
                    },
                    {
                        "text": "65.Positioning značky odpovídá product placement:",
                        "answers": [
                            {
                                "text": "NE",
                                "correct": true
                            },
                            {
                                "text": "ANO",
                                "correct": false
                            }
                        ]
                    },
                    {
                        "text": "66.Nejdelší životní cyklus mají zpravidla výrobky:",
                        "answers": [
                            {
                                "text": "typu ¨růst-úpadek¨",
                                "correct": false
                            },
                            {
                                "text": "módní, se silným psychologickým momentem působení",
                                "correct": false
                            },
                            {
                                "text": "které představují surovinu nebo polotovar pro další zpracování",
                                "correct": true
                            },
                            {
                                "text": "distribuované prostřednictvím maloobchodní, velkoobchodní sítě",
                                "correct": false
                            }
                        ]
                    },
                    {
                        "text": "67.Pojem ¨produkt¨ představuje pouze fyzické zboží:",
                        "answers": [
                            {
                                "text": "NE",
                                "correct": true
                            },
                            {
                                "text": "ANO",
                                "correct": false
                            }
                        ]
                    },
                    {
                        "text": "68.U kterých z uvedených výrobků bude zřejmě nejmenší cenová pružnost:",
                        "answers": [
                            {
                                "text": "osobní PC",
                                "correct": false
                            },
                            {
                                "text": "oblek",
                                "correct": false
                            },
                            {
                                "text": "sůl",
                                "correct": true
                            },
                            {
                                "text": "televizor",
                                "correct": false
                            }
                        ]
                    },
                    {
                        "text": "69.Mezi základní cenové strategie patří:",
                        "answers": [
                            {
                                "text": "strategie roztříštění",
                                "correct": false
                            },
                            {
                                "text": "strategie kolaborace",
                                "correct": false
                            },
                            {
                                "text": "ekonomická strategie",
                                "correct": true
                            },
                            {
                                "text": "strategie pomalého růstu",
                                "correct": false
                            },
                            {
                                "text": "strategie vysoké ceny",
                                "correct": true
                            }
                        ]
                    },
                    {
                        "text": "70.Konkurenční výhodu může představovat např. design výrobku",
                        "answers": [
                            {
                                "text": "ANO",
                                "correct": true
                            },
                            {
                                "text": "NE",
                                "correct": false
                            }
                        ]
                    },
                    {
                        "text": "71.Model 4C zahrnuje následující prvky:",
                        "answers": [
                            {
                                "text": "customer value (hodnotu pro zákazníka)",
                                "correct": true
                            },
                            {
                                "text": "convenience (komfort při převzetí hodnoty, dostupnost)",
                                "correct": true
                            },
                            {
                                "text": "costs (ceny)",
                                "correct": true
                            },
                            {
                                "text": "communication (komunikace)",
                                "correct": true
                            },
                            {
                                "text": "competition (konkurenci)",
                                "correct": false
                            },
                            {
                                "text": "creativity (kreativitu)",
                                "correct": false
                            },
                            {
                                "text": "contacts (kontakty)",
                                "correct": false
                            }
                        ]
                    },
                    {
                        "text": "72.Pod pojmem produkt si lze představit všechno, co lze nabídnout trhu ke koupi, použití či spotřebě, mimo myšlenek.",
                        "answers": [
                            {
                                "text": "ANO",
                                "correct": false
                            },
                            {
                                "text": "NE",
                                "correct": true
                            }
                        ]
                    },
                    {
                        "text": "73.Stádium zavedení výrobku na trh je obvykle:",
                        "answers": [
                            {
                                "text": "značně ziskové",
                                "correct": false
                            },
                            {
                                "text": "velmi rizikové",
                                "correct": true
                            },
                            {
                                "text": "ztrátové",
                                "correct": true
                            },
                            {
                                "text": "spojené se vstupem konkurence a snižováním cen",
                                "correct": false
                            },
                            {
                                "text": "spojené se snižováním tempa růstu prodeje",
                                "correct": false
                            }
                        ]
                    },
                    {
                        "text": "74.Základní metody tvorby cen v marketingu jsou odvozeny od:",
                        "answers": [
                            {
                                "text": "nabídky",
                                "correct": false
                            },
                            {
                                "text": "nákladů",
                                "correct": true
                            },
                            {
                                "text": "konkurence",
                                "correct": true
                            },
                            {
                                "text": "poptávky",
                                "correct": true
                            },
                            {
                                "text": "produktové řady",
                                "correct": false
                            }
                        ]
                    },
                    {
                        "text": "75.Mezi klíčové faktory tvorby ceny patří:",
                        "answers": [
                            {
                                "text": "ceny konkurence",
                                "correct": true
                            },
                            {
                                "text": "náklady",
                                "correct": true
                            },
                            {
                                "text": "hodnota vnímaná zákazníky",
                                "correct": true
                            },
                            {
                                "text": "ani jedna varianta",
                                "correct": false
                            }
                        ]
                    },
                    {
                        "text": "76.Křivka poptávky po běžných produktech je shodná s křivkou po luxusních produktech:",
                        "answers": [
                            {
                                "text": "NE",
                                "correct": true
                            },
                            {
                                "text": "ANO",
                                "correct": false
                            }
                        ]
                    },
                    {
                        "text": "77.Cena je nástroj, který je obsažen v komunikačním mixu:",
                        "answers": [
                            {
                                "text": "ANO",
                                "correct": false
                            },
                            {
                                "text": "NE",
                                "correct": true
                            }
                        ]
                    },
                    {
                        "text": "78.Který z následujících výroků není pravdivý:",
                        "answers": [
                            {
                                "text": "ve fázi uvedení (zavádění) nového výrobku na trh je růst tržeb obvykle velmi rychlý",
                                "correct": true
                            },
                            {
                                "text": "ve fázi zavádění výrobků na trh bývá intenzita reklamy velmi vysoká",
                                "correct": false
                            },
                            {
                                "text": "ve fázi zralosti v rámci životního cyklu výrobků začne růst tržeb zpomalovat",
                                "correct": false
                            },
                            {
                                "text": "fáze růstu je fází životního cyklu produktu, kdy začnou tržby produkce stoupat",
                                "correct": false
                            }
                        ]
                    },
                    {
                        "text": "79.Význam pojmu “vázaný produkt” představuje pouze fyzické zboží:",
                        "answers": [
                            {
                                "text": "NE",
                                "correct": true
                            },
                            {
                                "text": "ANO",
                                "correct": false
                            }
                        ]
                    },
                    {
                        "text": "80.Mezi externí faktory, které ovlivňují výši ceny, patří:",
                        "answers": [
                            {
                                "text": "cíle firmy",
                                "correct": false
                            },
                            {
                                "text": "vláda",
                                "correct": true
                            },
                            {
                                "text": "poptávka",
                                "correct": true
                            },
                            {
                                "text": "typ trhu",
                                "correct": true
                            },
                            {
                                "text": "konkurence",
                                "correct": true
                            },
                            {
                                "text": "distributoři",
                                "correct": true
                            }
                        ]
                    },
                    {
                        "text": "81.Který jev je typický pro výrobky ve fázi růstu:",
                        "answers": [
                            {
                                "text": "neexistující konkurence",
                                "correct": false
                            },
                            {
                                "text": "zisky z výrobků stoupají",
                                "correct": true
                            },
                            {
                                "text": "zisky z výrobků se udržují na stabilní hladině díky velkým marketingovým výdajům",
                                "correct": false
                            }
                        ]
                    },
                    {
                        "text": "82.Který z následujících výroků není pravdivý:",
                        "answers": [
                            {
                                "text": "ve fázi zavádění výrobku na trh bývá intenzita reklamy velmi vysoká",
                                "correct": false
                            },
                            {
                                "text": "v průběhu životního cyklu výrobku firma obvykle mění marketingový mix",
                                "correct": false
                            },
                            {
                                "text": "ve fázi zralosti v rámci životního cyklu výrobků začne růst tržeb zpomalovat",
                                "correct": false
                            },
                            {
                                "text": "v poslední fázi životního cyklu výrobků se intenzita reklamy typicky radikálně zvyšuje – firma se totiž snaží zastavit pokrok a pokles prodeje",
                                "correct": true
                            }
                        ]
                    },
                    {
                        "text": "83.Význam pojmu “vázaný produkt” je shodný s pojmem “komplementární produkt”:",
                        "answers": [
                            {
                                "text": "ANO",
                                "correct": true
                            },
                            {
                                "text": "NE",
                                "correct": false
                            }
                        ]
                    },
                    {
                        "text": "84.Guerilový marketing se obvykle vyznačuje následujícími charakteristikami:",
                        "answers": [
                            {
                                "text": "je typicky velmi nákladný",
                                "correct": false
                            },
                            {
                                "text": "má za úkol překvapit cílovou skupinu",
                                "correct": true
                            },
                            {
                                "text": "většinou jde o využití televizní reklamy",
                                "correct": false
                            },
                            {
                                "text": "typicky využívá tradiční média",
                                "correct": false
                            }
                        ]
                    },
                    {
                        "text": "85.Krizová komunikace bývá považována za podstatnou součást PR:",
                        "answers": [
                            {
                                "text": "ANO",
                                "correct": true
                            },
                            {
                                "text": "NE",
                                "correct": false
                            }
                        ]
                    },
                    {
                        "text": "86.Telemarketing je obvykle považován primárně za nástroj podpory prodeje:",
                        "answers": [
                            {
                                "text": "NE",
                                "correct": true
                            },
                            {
                                "text": "ANO",
                                "correct": false
                            }
                        ]
                    },
                    {
                        "text": "87.Komunikační mix se skládá z následujících disciplín:",
                        "answers": [
                            {
                                "text": "podpora prodeje",
                                "correct": true
                            },
                            {
                                "text": "reklama",
                                "correct": true
                            },
                            {
                                "text": "telemarketing",
                                "correct": false
                            },
                            {
                                "text": "distribuce",
                                "correct": false
                            }
                        ]
                    },
                    {
                        "text": "88.Součástí distribučního mixu je mimo jiné tzv. direct marketing:",
                        "answers": [
                            {
                                "text": "ANO",
                                "correct": true
                            },
                            {
                                "text": "NE",
                                "correct": false
                            }
                        ]
                    },
                    {
                        "text": "89.Guerillové kampaně jsou typické pro tzv. strategii push:",
                        "answers": [
                            {
                                "text": "NE",
                                "correct": true
                            },
                            {
                                "text": "ANO",
                                "correct": false
                            }
                        ]
                    },
                    {
                        "text": "90.Mezi typické nástroje podpory prodeje patří:",
                        "answers": [
                            {
                                "text": "výhodná balení",
                                "correct": true
                            },
                            {
                                "text": "telemarketing",
                                "correct": false
                            },
                            {
                                "text": "product placement",
                                "correct": false
                            },
                            {
                                "text": "virální marketing",
                                "correct": false
                            },
                            {
                                "text": "slevy",
                                "correct": true
                            },
                            {
                                "text": "sampling",
                                "correct": true
                            },
                            {
                                "text": "kupóny",
                                "correct": true
                            },
                            {
                                "text": "direct mail",
                                "correct": false
                            },
                            {
                                "text": "(spotřebitelské) soutěže",
                                "correct": true
                            },
                            {
                                "text": "bonusy",
                                "correct": true
                            },
                            {
                                "text": "emailing",
                                "correct": false
                            },
                            {
                                "text": "tisková zpráva",
                                "correct": false
                            },
                            {
                                "text": "event",
                                "correct": false
                            },
                            {
                                "text": "prémie a dárky",
                                "correct": true
                            }
                        ]
                    },
                    {
                        "text": "91.Tisková konference a tisková zpráva jsou nástroji tzv. mobilního marketingu:",
                        "answers": [
                            {
                                "text": "NE",
                                "correct": true
                            },
                            {
                                "text": "ANO",
                                "correct": false
                            }
                        ]
                    },
                    {
                        "text": "92.Distribuční strategie v závislosti na počtu mezičlánků může být:",
                        "answers": [
                            {
                                "text": "usilovná, výběrová nebo výhradní",
                                "correct": true
                            },
                            {
                                "text": "vertikální, horizontální nebo konvenční",
                                "correct": false
                            },
                            {
                                "text": "zprostředkovací nebo podpůrná-přímá nebo nepřímá",
                                "correct": false
                            },
                            {
                                "text": "intenzivní, selektivní nebo exkluzivní",
                                "correct": true
                            }
                        ]
                    },
                    {
                        "text": "94.Typickým nástrojem media relations jsou tiskové konference:",
                        "answers": [
                            {
                                "text": "ANO",
                                "correct": true
                            },
                            {
                                "text": "NE",
                                "correct": false
                            }
                        ]
                    },
                    {
                        "text": "95.Guerillový marketing se obvykle vyznačuje následujícími charakteristikami:",
                        "answers": [
                            {
                                "text": "je typicky velmi nákladný",
                                "correct": false
                            },
                            {
                                "text": "obvykle využívá nekonvenční přístupy",
                                "correct": true
                            },
                            {
                                "text": "má za úkol překvapit cílovou skupinu",
                                "correct": true
                            },
                            {
                                "text": "je často poměrně nenáročný na finance",
                                "correct": true
                            }
                        ]
                    },
                    {
                        "text": "96.Exkluzivní distribuce znamená, že:",
                        "answers": [
                            {
                                "text": "se firma snaží o to, aby její zboží bylo na co největším počtu prodejních míst",
                                "correct": false
                            },
                            {
                                "text": "firma distribuuje zboží vybraným zákazníkům přímo",
                                "correct": false
                            },
                            {
                                "text": "to samé co výhradní distribuce",
                                "correct": true
                            },
                            {
                                "text": "v každém tržním regionu bývá pouze jeden vybraný distributor",
                                "correct": true
                            }
                        ]
                    },
                    {
                        "text": "97.Integrovaná marketingová komunikace:",
                        "answers": [
                            {
                                "text": "je označení pro kampaně na internetu",
                                "correct": false
                            },
                            {
                                "text": "není v současné firemní praxi používaná",
                                "correct": false
                            },
                            {
                                "text": "je promyšleným propojováním jednotlivých P marketingového mixu",
                                "correct": false
                            },
                            {
                                "text": "je propojování jednotlivých disciplín komunikačního mixu",
                                "correct": true
                            }
                        ]
                    },
                    {
                        "text": "98.Základní metody tvorby cen v marketingu jsou odvozeny od:",
                        "answers": [
                            {
                                "text": "předpisů",
                                "correct": false
                            },
                            {
                                "text": "výdajů",
                                "correct": false
                            },
                            {
                                "text": "produktové řady",
                                "correct": false
                            },
                            {
                                "text": "výrobní kapacity",
                                "correct": false
                            },
                            {
                                "text": "nákladů",
                                "correct": true
                            },
                            {
                                "text": "poptávky",
                                "correct": true
                            },
                            {
                                "text": "konkurence",
                                "correct": true
                            }
                        ]
                    },
                    {
                        "text": "100.Který jev je typický pro výrobky ve fázi růstu:",
                        "answers": [
                            {
                                "text": "zrychlující se tempo růstu prodeje",
                                "correct": true
                            },
                            {
                                "text": "prudký pokles prodeje",
                                "correct": false
                            },
                            {
                                "text": "rychlé přijetí výrobků trhem",
                                "correct": true
                            }
                        ]
                    },
                    {
                        "text": "101.Mezi psychografická segmentační kritéria patří:",
                        "answers": [
                            {
                                "text": "kontinent, na kterém zákazníci žijí",
                                "correct": false
                            },
                            {
                                "text": "životní hodnoty",
                                "correct": true
                            },
                            {
                                "text": "očekávaný užitek",
                                "correct": false
                            },
                            {
                                "text": "pohlaví",
                                "correct": false
                            }
                        ]
                    },
                    {
                        "text": "102. Nediferencovaný (masový) marketing:",
                        "answers": [
                            {
                                "text": "znamená, že firma rozděluje trh na několik segmentů, a každý z vybraných segmentů pak oslovuje specifickou nabídku",
                                "correct": false
                            },
                            {
                                "text": "odpovídá pojmu individualizovaný marketing",
                                "correct": false
                            },
                            {
                                "text": "zahrnuje fázi segmentace, targetingu a positioningu",
                                "correct": false
                            },
                            {
                                "text": "znamená přizpůsobování produktu individuálním potřebám každého jednotlivého zákazníka",
                                "correct": false
                            },
                            {
                                "text": "odpovídá pojmu cílený marketing",
                                "correct": false
                            },
                            {
                                "text": "znamená, že firma oslovuje celý trh jednou standardizovanou nabídkou",
                                "correct": true
                            }
                        ]
                    },
                    {
                        "text": "1. Podstatu marketingu nejlépe vystihuje následující tvrzení:",
                        "answers": [
                            {
                                "text": "marketing vychází z předpokladu, že spotřebitel je pasivní.",
                                "correct": false
                            },
                            {
                                "text": "marketing je integrovaný komplex činností, zaměřených na agresivní prodej.",
                                "correct": false
                            },
                            {
                                "text": "marketing je spojen se směnou – je to integrovaný soubor činností zaměřených na trh.",
                                "correct": true
                            },
                            {
                                "text": "marketing není orientovaný na zisk, ale na zákazníka.",
                                "correct": false
                            }
                        ]
                    },
                    {
                        "text": "2. Který z níže uvedených výroků nejlépe vystihuje podstatu „masového“ marketingu?",
                        "answers": [
                            {
                                "text": "Jde o přístup, založený na diferenciaci nabídky pro jednotlivé tržní segmenty.",
                                "correct": false
                            },
                            {
                                "text": "Jde o nediferencovaný marketing, kdy firma oslovuje trh jedinou nabídkou.",
                                "correct": true
                            },
                            {
                                "text": "Jde o přístup, kdy firma ignoruje svou konkurenci.",
                                "correct": false
                            },
                            {
                                "text": "Jde o masový přístup firmy ke svým zaměstnancům.",
                                "correct": false
                            }
                        ]
                    },
                    {
                        "text": "3. Masový marketing",
                        "answers": [
                            {
                                "text": "se soustředí na tzv. tržní výklenky",
                                "correct": false
                            },
                            {
                                "text": "začíná segmentací trhu",
                                "correct": false
                            },
                            {
                                "text": "začíná tržním zacílením",
                                "correct": false
                            },
                            {
                                "text": "znamená nediferencovaný přístup ke všem zákazníkům",
                                "correct": true
                            }
                        ]
                    },
                    {
                        "text": "4. Mikromarketing označuje:",
                        "answers": [
                            {
                                "text": "jeden z přístupů k segmentaci",
                                "correct": true
                            },
                            {
                                "text": "marketing postavený na tzv. word-of-mouth",
                                "correct": false
                            },
                            {
                                "text": "přizpůsobení marketingových nástrojů úzce definovaným segmentům",
                                "correct": true
                            },
                            {
                                "text": "formu cíleného marketingu",
                                "correct": true
                            }
                        ]
                    },
                    {
                        "text": "5. Positioning je třetí fází cíleného marketingu.",
                        "answers": [
                            {
                                "text": "ANO",
                                "correct": true
                            },
                            {
                                "text": "NE",
                                "correct": false
                            }
                        ]
                    },
                    {
                        "text": "6. Mezi hlavní etapy cíleného marketingu patří:",
                        "answers": [
                            {
                                "text": "segmentace trhu",
                                "correct": true
                            },
                            {
                                "text": "zavedení výrobku na trh",
                                "correct": false
                            },
                            {
                                "text": "positioning",
                                "correct": true
                            },
                            {
                                "text": "rozhodnutí o metodě výzkumu",
                                "correct": false
                            }
                        ]
                    },
                    {
                        "text": "7. Mezi fáze tzv. cíleného marketingu patří:",
                        "answers": [
                            {
                                "text": "marketingový výzkum",
                                "correct": false
                            },
                            {
                                "text": "targeting",
                                "correct": true
                            },
                            {
                                "text": "stanovení tzv. 4 P",
                                "correct": false
                            },
                            {
                                "text": "stanovení komunikačního mixu",
                                "correct": false
                            }
                        ]
                    },
                    {
                        "text": "8. Mezi psychografická kritéria segmentace trhu se řadí",
                        "answers": [
                            {
                                "text": "osobnost",
                                "correct": true
                            },
                            {
                                "text": "rasa",
                                "correct": false
                            },
                            {
                                "text": "vzdělání",
                                "correct": false
                            },
                            {
                                "text": "příjem",
                                "correct": false
                            },
                            {
                                "text": "náboženství",
                                "correct": false
                            },
                            {
                                "text": "životní styl",
                                "correct": true
                            },
                            {
                                "text": "očekávaný užitek",
                                "correct": false
                            },
                            {
                                "text": "postoj k produktu",
                                "correct": false
                            },
                            {
                                "text": "příležitost užití produktu",
                                "correct": false
                            },
                            {
                                "text": "aktuální lokalita, ve které se zákazníci nacházejí",
                                "correct": false
                            },
                            {
                                "text": "loajalita ke značkám",
                                "correct": false
                            },
                            {
                                "text": "městská čtvrť, ve které zákazníci nakupují",
                                "correct": false
                            },
                            {
                                "text": "pohlaví",
                                "correct": false
                            }
                        ]
                    },
                    {
                        "text": "9. Tržní zacílení nebo-li targeting:",
                        "answers": [
                            {
                                "text": "je totéž jako positioning.",
                                "correct": false
                            },
                            {
                                "text": "je proces typický pro tzv. nediferencovaný (masový) marketing.",
                                "correct": false
                            },
                            {
                                "text": "se týká volby cílových segmentů.",
                                "correct": true
                            },
                            {
                                "text": "je fází segmentace trhu.",
                                "correct": false
                            }
                        ]
                    },
                    {
                        "text": "10. Podstatou positioningu značky jsou pravidla, která určují, jakým způsobem je možné nakládat s logem firmy. Daná pravidla jsou obsažena v tzv. grafickém manuálu.",
                        "answers": [
                            {
                                "text": "ANO",
                                "correct": false
                            },
                            {
                                "text": "NE",
                                "correct": true
                            }
                        ]
                    },
                    {
                        "text": "11. Percepční mapa vychází z analýz tzv. oční kamery.",
                        "answers": [
                            {
                                "text": "ANO",
                                "correct": false
                            },
                            {
                                "text": "NE",
                                "correct": true
                            }
                        ]
                    },
                    {
                        "text": "12. Požadavek homogenity segmentu se týká:",
                        "answers": [
                            {
                                "text": "podobnosti jednotlivých segmentů mezi sebou navzájem",
                                "correct": false
                            },
                            {
                                "text": "dostatečné přístupnosti segmentu",
                                "correct": false
                            },
                            {
                                "text": "podobnosti zákazníků v daném segmentu",
                                "correct": true
                            },
                            {
                                "text": "dostatečné velikosti segmentu",
                                "correct": false
                            }
                        ]
                    },
                    {
                        "text": "13. Positioning má vztah k následujícím \"P\" marketingového mixu:",
                        "answers": [
                            {
                                "text": "osobnímu prodeji",
                                "correct": false
                            },
                            {
                                "text": "ceně",
                                "correct": true
                            },
                            {
                                "text": "produktu",
                                "correct": true
                            },
                            {
                                "text": "komunikaci",
                                "correct": true
                            },
                            {
                                "text": "distribuci",
                                "correct": true
                            },
                            {
                                "text": "marketingová strategii",
                                "correct": false
                            },
                            {
                                "text": "targetingu",
                                "correct": false
                            },
                            {
                                "text": "segmentaci",
                                "correct": false
                            }
                        ]
                    },
                    {
                        "text": "14. Které složky jsou zahrnuty v tzv. \"4 P\" marketingového mixu?",
                        "answers": [
                            {
                                "text": "Prodej",
                                "correct": false
                            },
                            {
                                "text": "Distribuce",
                                "correct": true
                            },
                            {
                                "text": "Targeting",
                                "correct": false
                            },
                            {
                                "text": "Produkt",
                                "correct": true
                            },
                            {
                                "text": "Reklama",
                                "correct": true
                            }
                        ]
                    },
                    {
                        "text": "15. Které složky jsou zahrnuty v tzv. \"4 P\" marketingového mixu?",
                        "answers": [
                            {
                                "text": "Výrobek",
                                "correct": true
                            },
                            {
                                "text": "Prodej",
                                "correct": false
                            },
                            {
                                "text": "Segmentace",
                                "correct": false
                            },
                            {
                                "text": "Positioning",
                                "correct": false
                            },
                            {
                                "text": "Cena",
                                "correct": true
                            }
                        ]
                    },
                    {
                        "text": "16. Který z uvedených výroků není správný",
                        "answers": [
                            {
                                "text": "cena má úzkou vazbu na positioning značky",
                                "correct": false
                            },
                            {
                                "text": "cena jako jediná z marketingového mixu generuje příjmy",
                                "correct": false
                            },
                            {
                                "text": "cena nemá vazbu na positioning značky",
                                "correct": true
                            },
                            {
                                "text": "cena je závislá na výši nákladů",
                                "correct": false
                            }
                        ]
                    },
                    {
                        "text": "17. Nejdůležitějším nástrojem marketingového mixu „4P“",
                        "answers": [
                            {
                                "text": "cena",
                                "correct": false
                            },
                            {
                                "text": "produkt",
                                "correct": true
                            },
                            {
                                "text": "komunikace",
                                "correct": false
                            },
                            {
                                "text": "distribuce",
                                "correct": false
                            }
                        ]
                    },
                    {
                        "text": "18. Cena bývá považována za nejpružnější nástroj marketingového mixu?",
                        "answers": [
                            {
                                "text": "ANO",
                                "correct": true
                            },
                            {
                                "text": "NE",
                                "correct": false
                            }
                        ]
                    },
                    {
                        "text": "19.Který z uvedených výroků není pravdivý:",
                        "answers": [
                            {
                                "text": "produkt nemusí mít žádné hmotné rysy",
                                "correct": false
                            },
                            {
                                "text": "produkt je základním nástrojem marketingového mixu",
                                "correct": false
                            },
                            {
                                "text": "životní cyklus většiny výrobků se s technickým rozvojem zkracuje",
                                "correct": false
                            },
                            {
                                "text": "průběh životního cyklu výrobku je zákonitý a lze ho poměrně snadno předvídat a ovlivňovat",
                                "correct": true
                            }
                        ]
                    },
                    {
                        "text": "20. Distribuce je součástí:",
                        "answers": [
                            {
                                "text": "výrobkového mixu",
                                "correct": false
                            },
                            {
                                "text": "komunikačního mixu",
                                "correct": false
                            },
                            {
                                "text": "cenového mixu",
                                "correct": false
                            },
                            {
                                "text": "marketingového mixu",
                                "correct": true
                            }
                        ]
                    },
                    {
                        "text": "21. Cenotvorba (pricing) produktového mixu zahrnuje mimo jiné:",
                        "answers": [
                            {
                                "text": "stanovení positioningu značky.",
                                "correct": false
                            },
                            {
                                "text": "pricing pro vázané produkty.",
                                "correct": true
                            },
                            {
                                "text": "pricing pro doplňkové produkty.",
                                "correct": true
                            },
                            {
                                "text": "pricing pro produktovou sadu.",
                                "correct": true
                            },
                            {
                                "text": "rozhodnutí o cenách jednotlivých produktů v dané produktové řadě",
                                "correct": true
                            },
                            {
                                "text": "rozhodnutí o cenách konkurenčních produktů",
                                "correct": false
                            },
                            {
                                "text": "rozhodnutí o cenách doplňkových produktů",
                                "correct": true
                            },
                            {
                                "text": "rozhodnutí o cenách komplementárních produktů",
                                "correct": true
                            },
                            {
                                "text": "volbu cílového zákaznického segmentu",
                                "correct": false
                            }
                        ]
                    },
                    {
                        "text": "22. Osobní prodej je možné popsat následujícími charakteristikami:",
                        "answers": [
                            {
                                "text": "oproti dalším komunikačním disciplínám je nákladný",
                                "correct": true
                            },
                            {
                                "text": "je důležitý zejména pro trhy B2B",
                                "correct": true
                            },
                            {
                                "text": "oproti dalším komunikačním disciplínám je levný",
                                "correct": false
                            },
                            {
                                "text": "je interaktivní",
                                "correct": true
                            }
                        ]
                    },
                    {
                        "text": "23. Který z následujících výroků není pravdivý",
                        "answers": [
                            {
                                "text": "poslední fázi životního cyklu výrobku se intenzita reklamy typicky radikálně zvyšuje – firma se totiž snaží zastavit pokles prodeje",
                                "correct": true
                            },
                            {
                                "text": "v průběhu životního cyklu výrobku firma obvykle mění marketingový mix",
                                "correct": false
                            },
                            {
                                "text": "ve fázi zavádění výrobku na trh bývá intenzita reklamy velmi vysoká",
                                "correct": false
                            },
                            {
                                "text": "nejméně významným nástrojem komunikace na trzích B2B bývá reklama (reklama je nejvíce důležitá v B2C)",
                                "correct": false
                            },
                            {
                                "text": "vnímaná hodnota zákazníkem je v obecné rovině spodní hranicí pro stanovení ceny",
                                "correct": true
                            }
                        ]
                    },
                    {
                        "text": "24.Které komunikační nástroje jsou typické pro B2B trhy:",
                        "answers": [
                            {
                                "text": "obchodní jednání",
                                "correct": true
                            },
                            {
                                "text": "reklama v městské hromadné dopravě",
                                "correct": false
                            },
                            {
                                "text": "direct mail",
                                "correct": true
                            },
                            {
                                "text": "emailing",
                                "correct": true
                            }
                        ]
                    },
                    {
                        "text": "25.Direct mail je typickým příkladem virálního marketingu",
                        "answers": [
                            {
                                "text": "ANO",
                                "correct": false
                            },
                            {
                                "text": "NE",
                                "correct": true
                            }
                        ]
                    },
                    {
                        "text": "26. Direct mail je:",
                        "answers": [
                            {
                                "text": "přímý prodej pomocí zásilek",
                                "correct": false
                            },
                            {
                                "text": "vhodný pro individuální komunikaci",
                                "correct": true
                            },
                            {
                                "text": "nástroj direct marketingu",
                                "correct": true
                            },
                            {
                                "text": "přímý prodej pomocí telefonu",
                                "correct": false
                            }
                        ]
                    },
                    {
                        "text": "27. Využívají se na trzích B2B přímé distribuční cesty?",
                        "answers": [
                            {
                                "text": "ne, je to organizačně a nákladově pro výrobní podnik příliš náročné",
                                "correct": false
                            },
                            {
                                "text": "ne, je to neekonomické",
                                "correct": false
                            },
                            {
                                "text": "ano, zejména u nestandardních či nákladných strojů a zařízení",
                                "correct": false
                            },
                            {
                                "text": "ano, je to nejčastější forma distribuce",
                                "correct": true
                            }
                        ]
                    },
                    {
                        "text": "28. Pro technicky složité výrobky nabízené na B2B trzích bývá nejvýznamnějším komunikačním nástrojem:",
                        "answers": [
                            {
                                "text": "osobní prodej",
                                "correct": true
                            },
                            {
                                "text": "rádiová reklama",
                                "correct": false
                            },
                            {
                                "text": "sampling",
                                "correct": false
                            },
                            {
                                "text": "outdoorová reklama",
                                "correct": false
                            },
                            {
                                "text": "televizní reklama",
                                "correct": false
                            },
                            {
                                "text": "venkovní reklama",
                                "correct": false
                            },
                            {
                                "text": "product placement",
                                "correct": false
                            },
                            {
                                "text": "POP komunikace",
                                "correct": false
                            }
                        ]
                    },
                    {
                        "text": "29. Nákupní centrum B2B trhu:",
                        "answers": [
                            {
                                "text": "zahrnuje výhradně vrátné, kteří kontrolují tok informací k ostatním.",
                                "correct": false
                            },
                            {
                                "text": "zahrnuje uživatele, ovlivňovatele, nákupčí, rozhodovatele a vrátné.",
                                "correct": true
                            },
                            {
                                "text": "zahrnuje rozhodovatele a spotřebitele.",
                                "correct": false
                            },
                            {
                                "text": "zahrnuje primárně spotřebitele.",
                                "correct": false
                            }
                        ]
                    },
                    {
                        "text": "30. Reklamu je možné popsat následujícími charakteristikami",
                        "answers": [
                            {
                                "text": "dokáže efektivně budovat značky",
                                "correct": true
                            },
                            {
                                "text": "dokáže zasáhnout masy spotřebitelů",
                                "correct": true
                            },
                            {
                                "text": "je interaktivní",
                                "correct": false
                            },
                            {
                                "text": "její význam je největší na trzích B2C",
                                "correct": true
                            }
                        ]
                    },
                    {
                        "text": "31. Marketingová krátkozrakost je typická pro tzv. výrobkovou koncepci (podle Kotlera)",
                        "answers": [
                            {
                                "text": "ANO",
                                "correct": true
                            },
                            {
                                "text": "NE",
                                "correct": false
                            }
                        ]
                    },
                    {
                        "text": "32. Strukturu totálního výrobku dle Kotlera lze znázornit následujícím způsobem:",
                        "answers": [
                            {
                                "text": "ve středu charakteristiky spojené s image, dále pak charakteristiky spojené se základní funkčností, vrchní vrstva charakteristiky spojené s cenou",
                                "correct": false
                            },
                            {
                                "text": "ve středu jádro se základní funkčností, v další vrstvě charakteristiky spojené s vnímáním produktu, vrchní vrstva charakteristiky spojené se službami",
                                "correct": true
                            },
                            {
                                "text": "ve středu jádro se základní funkčností, v další vrstvě charakteristiky spojené se službami, vrchní vrstva charakteristiky spojené s vnímáním produktu",
                                "correct": false
                            },
                            {
                                "text": "ve středu image výrobku, v další vrstvě charakteristiky spojené s funkčností, vrchní vrstva charakteristiky spojené se službami",
                                "correct": false
                            }
                        ]
                    },
                    {
                        "text": "33. Tzv. společenská odpovědnost firem:",
                        "answers": [
                            {
                                "text": "souvisí s prodejní koncepcí (podle Kotlera)",
                                "correct": false
                            },
                            {
                                "text": "souvisí s koncepcí společenského marketingu (podle Kotlera)",
                                "correct": true
                            },
                            {
                                "text": "bývá označována zkratkou 4 C",
                                "correct": false
                            },
                            {
                                "text": "souvisí s výrobkovou koncepcí (podle Kotlera)",
                                "correct": false
                            }
                        ]
                    },
                    {
                        "text": "34. Termín \"marketingová krátkozrakost\" znamená, že podnik",
                        "answers": [
                            {
                                "text": "preferuje současné požadavky spotřebitelů na výrobek před budoucími požadavky",
                                "correct": false
                            },
                            {
                                "text": "soustřeďuje se příliš na výrobek, bez ohledu na faktickou využitelnost jeho charakteristik",
                                "correct": true
                            },
                            {
                                "text": "považuje za cíl maximalizaci zisku v krátkém časovém horizontu",
                                "correct": false
                            },
                            {
                                "text": "preferuje širokou cenovou a distribuční dostupnost výrobku",
                                "correct": false
                            }
                        ]
                    },
                    {
                        "text": "35. Tzv. marketingová krátkozrakost:",
                        "answers": [
                            {
                                "text": "Je typická pro tzv. prodejní koncepci (podle Kotlera).",
                                "correct": false
                            },
                            {
                                "text": "Znamená, že se firma příliš nezabývá potřebami zákazníků.",
                                "correct": true
                            },
                            {
                                "text": "Je typická pro tzv. výrobní koncepci (podle Kotlera).",
                                "correct": false
                            },
                            {
                                "text": "Je typická pro tzv. sociální koncepci marketingu (podle Kotlera).",
                                "correct": false
                            }
                        ]
                    },
                    {
                        "text": "36. Tzv. výrobní koncepce",
                        "answers": [
                            {
                                "text": "je uplatňována tam, kde nabídka převažuje nad poptávkou.",
                                "correct": false
                            },
                            {
                                "text": "je přístup, který se soustředí na výrobu těch nejkvalitnějších produktů a na jejich neustálé zdokonalování.",
                                "correct": false
                            },
                            {
                                "text": "je uplatňována tam, kde poptávka převažuje nad nabídkou.",
                                "correct": true
                            },
                            {
                                "text": "je přístup, jehož podstatou je menší objem výroby s nižšími náklady a přiměřeným ziskem.",
                                "correct": false
                            }
                        ]
                    },
                    {
                        "text": "37. Tzv. sociální koncepce marketingu",
                        "answers": [
                            {
                                "text": "se zakládá na požadavku, aby činnost firem byla v souladu se zájmy zákazníků i s prospěchem celé společnosti.",
                                "correct": true
                            },
                            {
                                "text": "vychází mimo jiné z požadavku, aby dodávané výrobky nebyly zdraví škodlivé, aby byly bezpečné a jejich výroba nevedla k narušování životního prostředí.",
                                "correct": true
                            },
                            {
                                "text": "směřuje k uspokojování potřeb spotřebitelů, ale za cenu nepříznivých důsledků výroby na životní prostředí.",
                                "correct": false
                            }
                        ]
                    },
                    {
                        "text": "38. Tzv. výrobní koncepce",
                        "answers": [
                            {
                                "text": "je přístup, kdy se firma soustředí na vysoký objem výroby a snižování nákladů",
                                "correct": true
                            },
                            {
                                "text": "je uplatňována tam, kde nabídka převažuje nad poptávkou.",
                                "correct": false
                            },
                            {
                                "text": "je přístup, který se soustředí na výrobu těch nejkvalitnějších produktů a na jejich neustálé zdokonalování.",
                                "correct": false
                            },
                            {
                                "text": "je přístup, jehož podstatou je menší objem výroby s nižšími náklady a přiměřeným ziskem.",
                                "correct": false
                            }
                        ]
                    },
                    {
                        "text": "39. Tzv. marketingová koncepce se:",
                        "answers": [
                            {
                                "text": "zaměřuje primárně na dodavatele.",
                                "correct": false
                            },
                            {
                                "text": "zaměřuje primárně na konkurenci.",
                                "correct": false
                            },
                            {
                                "text": "zaměřuje primárně na prodej vyrobeného zboží.",
                                "correct": false
                            },
                            {
                                "text": "zaměřuje primárně na zákazníka a uspokojování jeho potřeb.",
                                "correct": true
                            }
                        ]
                    },
                    {
                        "text": "40. Tzv. výrobková (produktová) koncepce:",
                        "answers": [
                            {
                                "text": "vychází z předpokladu, že zákazník je ochoten zaplatit za vysoce kvalitní výrobek vysokou cenu.",
                                "correct": true
                            },
                            {
                                "text": "se soustředí primárně na výrobek, na potřeby zákazníka již méně – koncepce tak může vést k “marketingové“ krátkozrakosti",
                                "correct": true
                            },
                            {
                                "text": "vychází z předpokladu, že zákazník preferuje velké množství výrobků za přiměřenou cenu",
                                "correct": false
                            },
                            {
                                "text": "vychází z předpokladu, že spotřebitel požaduje vysoce kvalitní výrobek",
                                "correct": true
                            },
                            {
                                "text": "se soustředí zejména na prodej výrobku zákazníkům.",
                                "correct": false
                            }
                        ]
                    },
                    {
                        "text": "41. Označte základní faktory marketingového makroprostředí:",
                        "answers": [
                            {
                                "text": "politicko-legislativní prostředí",
                                "correct": true
                            },
                            {
                                "text": "sociální prostředí",
                                "correct": true
                            },
                            {
                                "text": "distributoři",
                                "correct": false
                            },
                            {
                                "text": "ekonomické prostředí",
                                "correct": true
                            },
                            {
                                "text": "konkurenti",
                                "correct": false
                            },
                            {
                                "text": "zákazníci",
                                "correct": false
                            },
                            {
                                "text": "technologické a přírodní prostředí",
                                "correct": true
                            }
                        ]
                    },
                    {
                        "text": "42. Mezi základní charakteristiky marketingového mikroprostředí patří:",
                        "answers": [
                            {
                                "text": "Podnik",
                                "correct": true
                            },
                            {
                                "text": "Dodavatelé",
                                "correct": true
                            },
                            {
                                "text": "Zákazníci",
                                "correct": true
                            },
                            {
                                "text": "Legislativní Prostředí",
                                "correct": false
                            },
                            {
                                "text": "Úroveň příjmů v zemi",
                                "correct": false
                            },
                            {
                                "text": "Konkurence",
                                "correct": true
                            },
                            {
                                "text": "Kulturní prostředí",
                                "correct": false
                            },
                            {
                                "text": "Politické prostředí",
                                "correct": false
                            }
                        ]
                    },
                    {
                        "text": "43. Na čem je založené marketingové mikroprostředí?",
                        "answers": [
                            {
                                "text": "mikroprostředí lze přímo ovlivňovat. (faktor, který firma může přímo ovlivňovat)",
                                "correct": true
                            }
                        ]
                    },
                    {
                        "text": "44. 4 C označují v marketingu model, který slouží k analýze marketingového makroprostředí",
                        "answers": [
                            {
                                "text": "ANO",
                                "correct": false
                            },
                            {
                                "text": "NE",
                                "correct": true
                            }
                        ]
                    },
                    {
                        "text": "45. Pro kulturu jako faktor marketingového makroprostředí platí:",
                        "answers": [
                            {
                                "text": "kultura se přenáší z generace na generaci",
                                "correct": true
                            },
                            {
                                "text": "kultura je vrozená",
                                "correct": false
                            },
                            {
                                "text": "kultura ovlivňuje mimo jiné základní názory a hodnoty v dané společnosti",
                                "correct": true
                            },
                            {
                                "text": "kultura je naučená",
                                "correct": true
                            },
                            {
                                "text": "kultura je stálá, v čase se nemění",
                                "correct": false
                            },
                            {
                                "text": "kultura nemá žádný vliv na kupní chování zákazníků",
                                "correct": false
                            },
                            {
                                "text": "kulturou se rozumí soubor hodnot, norem, chování, postojů, symbolů či rituálů, které akceptují lidé žijící v určité společnosti",
                                "correct": true
                            }
                        ]
                    },
                    {
                        "text": "46. Marketingové mikroprostředí je:",
                        "answers": [
                            {
                                "text": "faktor, který firma může přímo ovlivňovat.",
                                "correct": true
                            },
                            {
                                "text": "faktor, který firma nemůže příliš ovlivňovat.",
                                "correct": false
                            },
                            {
                                "text": "možné popsat pomocí tzv. PEST analýzy.",
                                "correct": false
                            }
                        ]
                    },
                    {
                        "text": "47. Mezi základní faktory marketingového mikroprostředí patří:",
                        "answers": [
                            {
                                "text": "Dodavatelé",
                                "correct": true
                            },
                            {
                                "text": "Legislativní prostředí",
                                "correct": false
                            },
                            {
                                "text": "Distributoři",
                                "correct": true
                            },
                            {
                                "text": "Politické prostředí",
                                "correct": false
                            }
                        ]
                    },
                    {
                        "text": "48. Tzv. tržní matice zahrnuje:",
                        "answers": [
                            {
                                "text": "marketingové cíle",
                                "correct": false
                            },
                            {
                                "text": "SWOT analýzu",
                                "correct": false
                            },
                            {
                                "text": "BCG matici",
                                "correct": false
                            },
                            {
                                "text": "zákazníky",
                                "correct": true
                            }
                        ]
                    },
                    {
                        "text": "49. PEST analýza je model určený k analýze marketingového mikroprostředí.",
                        "answers": [
                            {
                                "text": "ANO",
                                "correct": false
                            },
                            {
                                "text": "NE",
                                "correct": true
                            }
                        ]
                    },
                    {
                        "text": "50. PEST analýza se soustředí na:",
                        "answers": [
                            {
                                "text": "zákazníka",
                                "correct": false
                            },
                            {
                                "text": "marketingové prostředí",
                                "correct": true
                            },
                            {
                                "text": "konkurenci",
                                "correct": false
                            },
                            {
                                "text": "marketingové mikroprostředí",
                                "correct": false
                            }
                        ]
                    },
                    {
                        "text": "51. PEST analýza zahrnuje následující faktory:",
                        "answers": [
                            {
                                "text": "Politicko-legislativní",
                                "correct": true
                            },
                            {
                                "text": "Tematické",
                                "correct": false
                            },
                            {
                                "text": "Technologické",
                                "correct": true
                            },
                            {
                                "text": "Sociálně-kulturní",
                                "correct": true
                            },
                            {
                                "text": "Ekonomické",
                                "correct": true
                            }
                        ]
                    },
                    {
                        "text": "52. Mezi konkurenční síly na trhu podle Portera patří hrozba konkurence mezi kulturami.",
                        "answers": [
                            {
                                "text": "ANO",
                                "correct": false
                            },
                            {
                                "text": "NE",
                                "correct": true
                            }
                        ]
                    },
                    {
                        "text": "53. Mezi konkurenční síly na trhu podle Portera patří hrozba vstupu nových konkurentů.",
                        "answers": [
                            {
                                "text": "ANO",
                                "correct": true
                            },
                            {
                                "text": "NE",
                                "correct": false
                            }
                        ]
                    },
                    {
                        "text": "54. Panelem se v marketingovém výzkumu rozumí:",
                        "answers": [
                            {
                                "text": "reprezentativní vzorek respondentů dlouhodobě periodicky zkoumaný zvolenou technikou za účelem sledování vývoje a identifikace změn.",
                                "correct": true
                            },
                            {
                                "text": "forma diskuse používaná v marketingovém výzkumu pro účely zjištění příčin chování respondentů.",
                                "correct": false
                            },
                            {
                                "text": "diskuse několika řečníků.",
                                "correct": false
                            },
                            {
                                "text": "nereprezentativní vzorek základního souboru využívaný v tzv. ad hoc výzkumech.",
                                "correct": false
                            }
                        ]
                    },
                    {
                        "text": "55. Uzavřená otázka v marketingovém výzkumu označuje:",
                        "answers": [
                            {
                                "text": "otázku, kde jsou možné odpovědi předem určeny.",
                                "correct": true
                            },
                            {
                                "text": "takovou otázku, na niž je možné odpovědět ve vymezené (uzavřené) době.",
                                "correct": false
                            },
                            {
                                "text": "otázku, na niž respondenti neodpovídají.",
                                "correct": false
                            },
                            {
                                "text": "otázku, na kterou respondenti neradi odpovídají (např. intimní a majetkové poměry).",
                                "correct": false
                            },
                            {
                                "text": "otázku, určenou jen pro omezené/uzavřené skupiny respondentů v rámci výběrového souboru",
                                "correct": false
                            }
                        ]
                    },
                    {
                        "text": "56. Omnibusem se v marketingovém výzkumu rozumí:",
                        "answers": [
                            {
                                "text": "Vícetematický výzkum pro více zadavatelů",
                                "correct": true
                            },
                            {
                                "text": "Pravidelný longitudinální výzkum",
                                "correct": false
                            },
                            {
                                "text": "Opakovaný prognostický výzkum se stále stejnými otázkami",
                                "correct": false
                            },
                            {
                                "text": "Jedno tematický výzkum",
                                "correct": false
                            },
                            {
                                "text": "Totéž, co se rozumí pojmem‘ ‘panelový výzkum‘‘",
                                "correct": false
                            }
                        ]
                    },
                    {
                        "text": "57. Výběrová šetření v marketingovém výzkumu:",
                        "answers": [
                            {
                                "text": "jsou v praxi využívána jen výjimečně, protože vytvoření výběru je příliš zdlouhavé.",
                                "correct": false
                            },
                            {
                                "text": "mohou mít podobu náhodného výběru nebo výběru záměrného (např. kvótního výběru).",
                                "correct": true
                            },
                            {
                                "text": "využívají jen vybrané jednotky ze základního souboru. Na základě tohoto výběru se pak usuzuje na celek.",
                                "correct": true
                            },
                            {
                                "text": "z principu neumožňují dobrý vhled do hloubky jevů a zaměření analýzy žádoucím směrem.",
                                "correct": false
                            }
                        ]
                    },
                    {
                        "text": "58. Primární marketingový výzkum se typicky provádí:",
                        "answers": [
                            {
                                "text": "Následně po sekundárním výzkumu",
                                "correct": true
                            },
                            {
                                "text": "Před sekundárním výzkumem",
                                "correct": false
                            },
                            {
                                "text": "Převážně jako tzv. ‘výzkum od stolu‘‘",
                                "correct": false
                            },
                            {
                                "text": "Zejména metodami kvalitativního výzkumu",
                                "correct": false
                            }
                        ]
                    },
                    {
                        "text": "59. K metodám kvalitativního výzkumu patří:",
                        "answers": [
                            {
                                "text": "panelová diskuse",
                                "correct": false
                            },
                            {
                                "text": "focus group",
                                "correct": true
                            },
                            {
                                "text": "individuální hloubkový rozhovor",
                                "correct": true
                            },
                            {
                                "text": "skupinová diskuse",
                                "correct": true
                            },
                            {
                                "text": "projektivní techniky",
                                "correct": true
                            }
                        ]
                    },
                    {
                        "text": "60. Projekt marketingového výzkumu zahrnuje následující:",
                        "answers": [
                            {
                                "text": "definování problému, stanovení cíle výzkumu a informačních vstupů potřebných k zodpovězení otázek, stanovení postupu a metody výzkumu, harmonogram a rozpočet",
                                "correct": true
                            },
                            {
                                "text": "definování problému, specifikace problému, stanovení plánu výzkumu, pořízení informací, BCG matice, prezentace výsledků",
                                "correct": false
                            },
                            {
                                "text": "definování problému, stanovení metod získávání informací, shromáždění informací, PEST analýza, prezentace výsledků",
                                "correct": false
                            },
                            {
                                "text": "definování problému, stanovení plánu výzkumu, pořízení informací, SWOT analýza, prezentace výsledků",
                                "correct": false
                            }
                        ]
                    },
                    {
                        "text": "61. V případě ankety lze výsledky velmi dobře zobecňovat na celek. Proto je tato výzkumná metoda tolik populární.",
                        "answers": [
                            {
                                "text": "ANO",
                                "correct": false
                            },
                            {
                                "text": "NE",
                                "correct": true
                            }
                        ]
                    },
                    {
                        "text": "62. Panelový efekt označuje v marketingovém výzkumu jev, kdy se v rámci Focus group prosazuje dominantní respondent.",
                        "answers": [
                            {
                                "text": "ANO",
                                "correct": false
                            },
                            {
                                "text": "NE",
                                "correct": true
                            }
                        ]
                    },
                    {
                        "text": "63. Focus Group je jednou z metod marketingového výzkumu.",
                        "answers": [
                            {
                                "text": "ANO",
                                "correct": true
                            },
                            {
                                "text": "NE",
                                "correct": false
                            }
                        ]
                    },
                    {
                        "text": "64. Mystery shopping je jednou z metod marketingového výzkumu.",
                        "answers": [
                            {
                                "text": "ANO",
                                "correct": true
                            },
                            {
                                "text": "NE",
                                "correct": false
                            }
                        ]
                    },
                    {
                        "text": "65. Výzkum prováděný ad hoc:",
                        "answers": [
                            {
                                "text": "je výzkum prováděný pro více zadavatelů zároveň.",
                                "correct": false
                            },
                            {
                                "text": "je výzkum prováděný s periodickým opakováním.",
                                "correct": false
                            },
                            {
                                "text": "je výzkum prováděný pro jediného zadavatele.",
                                "correct": false
                            },
                            {
                                "text": "je jednorázový výzkum pro konkrétní jedinečný účel.",
                                "correct": true
                            }
                        ]
                    },
                    {
                        "text": "66. Individuální hloubkové rozhovory jsou typickou metodou kvalitativního výzkumu",
                        "answers": [
                            {
                                "text": "ANO",
                                "correct": true
                            },
                            {
                                "text": "NE",
                                "correct": false
                            }
                        ]
                    },
                    {
                        "text": "67. Potřebujete zjistit, proč lidé nekupují danou značku piva. Jaký typ marketingového výzkumu je podle vás v této situaci adekvátnější?",
                        "answers": [
                            {
                                "text": "kvantitativní",
                                "correct": false
                            },
                            {
                                "text": "kvalitativní",
                                "correct": true
                            }
                        ]
                    },
                    {
                        "text": "68. Projektivní techniky vyžadují obvykle psychologickou interpretaci.",
                        "answers": [
                            {
                                "text": "ANO",
                                "correct": true
                            },
                            {
                                "text": "NE",
                                "correct": false
                            }
                        ]
                    },
                    {
                        "text": "69. Projektivní techniky jsou typicky velmi dobře kvantifikovatelné a statisticky zpracovatelné.",
                        "answers": [
                            {
                                "text": "ANO",
                                "correct": false
                            },
                            {
                                "text": "NE",
                                "correct": true
                            }
                        ]
                    },
                    {
                        "text": "70. Mezi projektivní techniky patří např. test dokončovací nebo test slovní asociace.",
                        "answers": [
                            {
                                "text": "ANO",
                                "correct": true
                            },
                            {
                                "text": "NE",
                                "correct": false
                            }
                        ]
                    },
                    {
                        "text": "71. Výzkum oční kamerou lze použít typicky např. na testování tiskovin a webových stránek.",
                        "answers": [
                            {
                                "text": "ANO",
                                "correct": true
                            },
                            {
                                "text": "NE",
                                "correct": false
                            }
                        ]
                    },
                    {
                        "text": "72. Který z následujících postupů je marketingovým přístupem?",
                        "answers": [
                            {
                                "text": "firma se zaměřila na co nejvyšší objem výroby své produkce, a proto předpokládá tržní úspěch výrobku",
                                "correct": false
                            },
                            {
                                "text": "firma se zaměřila na co nejvyšší kvalitu výrobků a díky tomu předpokládá tržní úspěch výrobku",
                                "correct": false
                            },
                            {
                                "text": "vedení firmy usoudilo na základě svých osobních zkušeností, že potřeby některých zákazníků nejsou prostřednictvím jejich výrobků uspokojovány, a proto se na tuto oblast firma zaměřila",
                                "correct": false
                            },
                            {
                                "text": "pomocí marketingového výzkumu firma posoudila poptávku a zjistila požadavky zákazníků na výrobky; na tomto základě pak založila svoji nabídku",
                                "correct": true
                            }
                        ]
                    },
                    {
                        "text": "73. Výzkum trhu často vyžaduje získání “primárních” a “sekundárních” dat. Sekundární data mohou být získána např. experimentem:",
                        "answers": [
                            {
                                "text": "ze statistických publikací",
                                "correct": true
                            },
                            {
                                "text": "dotazníkem",
                                "correct": false
                            },
                            {
                                "text": "rešerší dřívějších výzkumných zpráv",
                                "correct": true
                            },
                            {
                                "text": "asociačními technikami",
                                "correct": false
                            },
                            {
                                "text": "pomocí Focus Group",
                                "correct": false
                            },
                            {
                                "text": "projektivními technikami",
                                "correct": false
                            },
                            {
                                "text": "74. Mystery shopping",
                                "correct": false
                            },
                            {
                                "text": "využívá projektivních technik.",
                                "correct": false
                            },
                            {
                                "text": "je metodou marketingového výzkumu, využívající dotazování a pozorování, případně jejich kombinaci.",
                                "correct": true
                            },
                            {
                                "text": "není regulérní metodou marketingového výzkumu.",
                                "correct": false
                            },
                            {
                                "text": "je metoda, která je omezena tzv. panelovým efektem.",
                                "correct": false
                            },
                            {
                                "text": "postup, kdy např. výzkumník vystupuje v roli zákazníka a předstírá zájem o koupi.",
                                "correct": true
                            }
                        ]
                    },
                    {
                        "text": "75. Co je základem kvalitativního marketingového výzkumu?",
                        "answers": [
                            {
                                "text": "Určit odpověď na otázku proč.",
                                "correct": true
                            }
                        ]
                    },
                    {
                        "text": "76. Kvalitativní marketingový výzkum:",
                        "answers": [
                            {
                                "text": "Odpovídá obvykle na otázku „kolik“?",
                                "correct": false
                            },
                            {
                                "text": "Umožňuje deskripci trhu, mapuje tržní situaci a umožňuje přesnou kvalifikaci",
                                "correct": false
                            },
                            {
                                "text": "Je typicky obtížně kvalifikovatelný, a vyžaduje tak psychologickou interpretaci",
                                "correct": true
                            },
                            {
                                "text": "Je aplikací metod statistiky, matematiky a ekonometrie v oblasti marketingového výzkumu",
                                "correct": false
                            }
                        ]
                    },
                    {
                        "text": "77. \"Opinion leader\" je označení pro metodu marketingového výzkumu, která analyzuje veřejné mínění.",
                        "answers": [
                            {
                                "text": "ANO",
                                "correct": false
                            },
                            {
                                "text": "NE",
                                "correct": true
                            }
                        ]
                    },
                    {
                        "text": "78. Je focus group typickou metodou kvantitativního výzkumu?",
                        "answers": [
                            {
                                "text": "ANO",
                                "correct": false
                            },
                            {
                                "text": "NE",
                                "correct": true
                            }
                        ]
                    },
                    {
                        "text": "79. Pro anketu platí:",
                        "answers": [
                            {
                                "text": "respondenti jsou vybráni ze základního souboru pomocí daných výběrových kritérií",
                                "correct": false
                            },
                            {
                                "text": "respondenti se do výběrového souboru vybrali sami",
                                "correct": true
                            },
                            {
                                "text": "dotazovány jsou pouze osoby s úzkým vztahem ke zkoumané problematice",
                                "correct": false
                            },
                            {
                                "text": "dotazovány jsou všechny osoby základního souboru",
                                "correct": false
                            },
                            {
                                "text": "osoby tvoří obvykle NEREPREZENTATIVNÍ soubor",
                                "correct": true
                            }
                        ]
                    },
                    {
                        "text": "80. Mezi základní techniky patří:",
                        "answers": [
                            {
                                "text": "experiment, pozorování a skupinový rozhovor",
                                "correct": false
                            },
                            {
                                "text": "primární a sekundární",
                                "correct": false
                            },
                            {
                                "text": "projektivní techniky a focus group",
                                "correct": false
                            },
                            {
                                "text": "osobní, písemné, telefonické, on-line, kombinované",
                                "correct": true
                            }
                        ]
                    },
                    {
                        "text": "81. Metoda CATI patří mezi metody:",
                        "answers": [
                            {
                                "text": "využívající telefon",
                                "correct": true
                            },
                            {
                                "text": "online",
                                "correct": false
                            },
                            {
                                "text": "přímého marketingu",
                                "correct": true
                            },
                            {
                                "text": "experimentální",
                                "correct": false
                            }
                        ]
                    },
                    {
                        "text": "82. Panelový efekt označuje",
                        "answers": [
                            {
                                "text": "negativní jev, který se řeší obměnou části respondentů v panelu",
                                "correct": true
                            },
                            {
                                "text": "fixní skupinu respondentů, jejíž účastníci jsou pravidelně obměňováni",
                                "correct": false
                            },
                            {
                                "text": "jev, kdy se členové panelu stávají \"profesionálními\" respondenty",
                                "correct": true
                            },
                            {
                                "text": "fixní skupinu expertů na zkoumané téma",
                                "correct": false
                            }
                        ]
                    },
                    {
                        "text": "83. Hofstede popisuje čtyři dimenze. Patří k nim:",
                        "answers": [
                            {
                                "text": "vztah k politice",
                                "correct": false
                            },
                            {
                                "text": "maskulinita a femininita",
                                "correct": true
                            },
                            {
                                "text": "obětavost a důvěřivost",
                                "correct": false
                            },
                            {
                                "text": "vztah ke vzdělání",
                                "correct": false
                            }
                        ]
                    },
                    {
                        "text": "84. Strategie rozvoje trhu znamená:",
                        "answers": [
                            {
                                "text": "Podnik rozšiřuje nabídku svých výrobků",
                                "correct": false
                            },
                            {
                                "text": "Podnik zavádí prodej zdokonalených výrobků na současných trzích",
                                "correct": false
                            },
                            {
                                "text": "Podnik hledá nové trhy pro své stávající produkty",
                                "correct": true
                            },
                            {
                                "text": "Podnik hledá nové odbytiště pro nové produkty",
                                "correct": false
                            }
                        ]
                    },
                    {
                        "text": "85. Spokojenost zákazníka může vést k:",
                        "answers": [
                            {
                                "text": "diskriminaci",
                                "correct": false
                            },
                            {
                                "text": "generalizaci",
                                "correct": true
                            },
                            {
                                "text": "věrnost značce",
                                "correct": true
                            },
                            {
                                "text": "kladné WOM",
                                "correct": true
                            }
                        ]
                    },
                    {
                        "text": "86. S maskulinními hodnotami podle Hofstedeho je typicky spojována:",
                        "answers": [
                            {
                                "text": "optimismus, obětavost, důvěrnost, preference solidarity",
                                "correct": false
                            },
                            {
                                "text": "rozhodnost, výkonnost, hrdinství, odvaha, kariéra, peníze",
                                "correct": true
                            },
                            {
                                "text": "zaměřenost na styl oblékání, módu a vzhled",
                                "correct": false
                            },
                            {
                                "text": "agresivita, manažerské rozhodování, důraz na kvalitu života",
                                "correct": false
                            }
                        ]
                    },
                    {
                        "text": "87. Mezi standardní fáze kupního rozhodovacího procesu spotřebitele patří:",
                        "answers": [
                            {
                                "text": "rozpoznání problému",
                                "correct": true
                            },
                            {
                                "text": "hledání informací",
                                "correct": true
                            },
                            {
                                "text": "targeting",
                                "correct": false
                            },
                            {
                                "text": "odmítnutí značky",
                                "correct": false
                            }
                        ]
                    },
                    {
                        "text": "88. Tzv. kupní centrum označuje všechny jedince, kteří mohou ovlivnit nákupní rozhodnutí v dané organizaci.",
                        "answers": [
                            {
                                "text": "ANO",
                                "correct": true
                            },
                            {
                                "text": "NE",
                                "correct": false
                            }
                        ]
                    },
                    {
                        "text": "89. Ponákupní chování:",
                        "answers": [
                            {
                                "text": "může být spojeno s tzv. kognitivní disonancí.",
                                "correct": true
                            },
                            {
                                "text": "může být spojeno s negativním WOM.",
                                "correct": true
                            },
                            {
                                "text": "není součástí kupního rozhodovacího procesu spotřebitele.",
                                "correct": false
                            },
                            {
                                "text": "je poslední fází kupního rozhodovacího procesu spotřebitele.",
                                "correct": true
                            }
                        ]
                    },
                    {
                        "text": "90. Mezi standardní fáze kupního rozhodovacího procesu spotřebitele patří:",
                        "answers": [
                            {
                                "text": "kupní rozhodnutí",
                                "correct": true
                            },
                            {
                                "text": "ponákupní chování",
                                "correct": true
                            },
                            {
                                "text": "hodnocení variant",
                                "correct": true
                            },
                            {
                                "text": "targeting",
                                "correct": false
                            }
                        ]
                    },
                    {
                        "text": "91. Postoje ovlivňují nákupní chování. Neplatí ovšem, že by kladné postoje k produktu automaticky znamenaly jeho zakoupení:",
                        "answers": [
                            {
                                "text": "ANO",
                                "correct": true
                            },
                            {
                                "text": "NE",
                                "correct": false
                            }
                        ]
                    },
                    {
                        "text": "92. Spotřební chování vysvětluje marketing na základě:",
                        "answers": [
                            {
                                "text": "vlivů sociálních skupin",
                                "correct": true
                            },
                            {
                                "text": "ekonomické racionality",
                                "correct": true
                            },
                            {
                                "text": "procesů v bílé skříňce spotřebitele",
                                "correct": false
                            },
                            {
                                "text": "psychických procesů spotřebitele",
                                "correct": true
                            }
                        ]
                    },
                    {
                        "text": "93. Subkulturou se v marketingu rozumí skupina, která s danou kulturou sdílí centrální rysy, ale některými prvky se od ní významně liší.",
                        "answers": [
                            {
                                "text": "ANO",
                                "correct": true
                            },
                            {
                                "text": "NE",
                                "correct": false
                            }
                        ]
                    },
                    {
                        "text": "94. Pro kupní chování institucí v obecné rovině platí:",
                        "answers": [
                            {
                                "text": "na kupním rozhodování institucí se obvykle podílí více osob, než-li je tomu u spotřebitelů",
                                "correct": true
                            },
                            {
                                "text": "poptávka institucí bývá více roztříštěná, nežli je tomu u spotřebitelů – kupní síla zákazníků bývá nižší a prostorové rozptýlení větší.",
                                "correct": false
                            },
                            {
                                "text": "poptávka institucí bývá více koncentrovaná – kupní síla zákazníků bývá vyšší a prostorové rozptýlení menší",
                                "correct": true
                            },
                            {
                                "text": "poptávka institucí bývá méně pružná nežli poptávka spotřebitelů",
                                "correct": true
                            }
                        ]
                    },
                    {
                        "text": "95. Spokojenost s výrobkem ve fázi ponákupního chování s sebou může typicky nést:",
                        "answers": [
                            {
                                "text": "posílení loajality k dané značce",
                                "correct": true
                            },
                            {
                                "text": "věrnost značce",
                                "correct": true
                            },
                            {
                                "text": "generalizaci;",
                                "correct": true
                            },
                            {
                                "text": "diskriminaci",
                                "correct": false
                            },
                            {
                                "text": "kladné WOM",
                                "correct": true
                            }
                        ]
                    },
                    {
                        "text": "96. Problematika kupního chování zákazníků se týká primárně otázek:",
                        "answers": [
                            {
                                "text": "kdo nakupuje a co nakupuje",
                                "correct": true
                            },
                            {
                                "text": "jak se zákazník chová ve volném čase",
                                "correct": false
                            },
                            {
                                "text": "kdo nakupuje a proč to nakupuje",
                                "correct": true
                            },
                            {
                                "text": "co kdo nakupuje a jak to užívá",
                                "correct": true
                            }
                        ]
                    },
                    {
                        "text": "97. Postoje (multi):",
                        "answers": [
                            {
                                "text": "obsahují složku kognitivní, afektivní a konativní",
                                "correct": true
                            },
                            {
                                "text": "neovlivňují nákupní chování",
                                "correct": false
                            },
                            {
                                "text": "obsahují složku afektovanou a disonantní",
                                "correct": false
                            },
                            {
                                "text": "ovlivňují nákupní chování",
                                "correct": true
                            }
                        ]
                    },
                    {
                        "text": "98. Kultura je jednou z predispozic spotřebního chování. Platí pro ni následující:",
                        "answers": [
                            {
                                "text": "je vrozená, ne naučená",
                                "correct": false
                            },
                            {
                                "text": "je adaptivní – mění se v čase",
                                "correct": true
                            },
                            {
                                "text": "přenáší se mezi generacemi",
                                "correct": true
                            },
                            {
                                "text": "je učená, osvojovaná",
                                "correct": true
                            },
                            {
                                "text": "v průběhu času se nemění",
                                "correct": false
                            }
                        ]
                    },
                    {
                        "text": "99. Konativní složka postoje:",
                        "answers": [
                            {
                                "text": "nemá na spotřební chování žádný vliv.",
                                "correct": false
                            },
                            {
                                "text": "se týká připravenosti jednat vůči danému objektu určitým způsobem.",
                                "correct": true
                            },
                            {
                                "text": "je zcela nezávislá na zbývajících složkách postoje.",
                                "correct": false
                            },
                            {
                                "text": "se týká primárně toho, zda má daný spotřebitel určitý objekt rád, či nikoliv",
                                "correct": false
                            }
                        ]
                    },
                    {
                        "text": "100. Klasický životní cyklus rodiny zahrnuje fáze:",
                        "answers": [
                            {
                                "text": "sociální",
                                "correct": false
                            },
                            {
                                "text": "mladí lidé",
                                "correct": true
                            },
                            {
                                "text": "plná hnízda",
                                "correct": true
                            },
                            {
                                "text": "osamělí",
                                "correct": true
                            },
                            {
                                "text": "prázdná hnízda",
                                "correct": true
                            }
                        ]
                    },
                    {
                        "text": "101. Primární skupina:",
                        "answers": [
                            {
                                "text": "je charakteristická těsnou vazbou, častým stykem, důvěrnými vztahy a neformálností.",
                                "correct": true
                            },
                            {
                                "text": "je výlučně rodina",
                                "correct": false
                            },
                            {
                                "text": "je charakteristická nepřítomností osobních a důvěrných vztahů.",
                                "correct": false
                            },
                            {
                                "text": "je vždy totožná s tzv. disociační skupinou",
                                "correct": false
                            }
                        ]
                    },
                    {
                        "text": "103. Nečlenské referenční skupiny, do kterých chce jedinec patřit, se označují jako tzv. disociační.",
                        "answers": [
                            {
                                "text": "ANO",
                                "correct": false
                            },
                            {
                                "text": "NE",
                                "correct": true
                            }
                        ]
                    },
                    {
                        "text": "104. U postojů se typicky rozlišují následující složky",
                        "answers": [
                            {
                                "text": "centrální",
                                "correct": false
                            },
                            {
                                "text": "afektivní",
                                "correct": true
                            },
                            {
                                "text": "autonomní",
                                "correct": false
                            },
                            {
                                "text": "kognitivní",
                                "correct": true
                            },
                            {
                                "text": "referenční",
                                "correct": false
                            },
                            {
                                "text": "konativní",
                                "correct": true
                            },
                            {
                                "text": "periferní",
                                "correct": false
                            }
                        ]
                    },
                    {
                        "text": "105. Zkratka AIO (activities, interests, opinions)slouží k definování životního stylu spotřebitele.",
                        "answers": [
                            {
                                "text": "ANO",
                                "correct": true
                            },
                            {
                                "text": "NE",
                                "correct": false
                            }
                        ]
                    },
                    {
                        "text": "106. Při pohledu na rozdělení kupních rolí v rodině se rozlišuje",
                        "answers": [
                            {
                                "text": "převaha muže",
                                "correct": true
                            },
                            {
                                "text": "expresivní rozhodování",
                                "correct": false
                            },
                            {
                                "text": "společné rozhodování",
                                "correct": true
                            },
                            {
                                "text": "převaha ženy",
                                "correct": true
                            }
                        ]
                    },
                    {
                        "text": "107. Nákupní centrum B2B trhu:",
                        "answers": [
                            {
                                "text": "zahrnuje výhradně vrátné, kteří kontrolují tok informací k ostatním.",
                                "correct": false
                            },
                            {
                                "text": "zahrnuje uživatele, ovlivňovatele, nákupčí, rozhodovatele a vrátné.",
                                "correct": true
                            },
                            {
                                "text": "zahrnuje rozhodovatele a spotřebitele.",
                                "correct": false
                            },
                            {
                                "text": "zahrnuje primárně spotřebitele.",
                                "correct": false
                            }
                        ]
                    },
                    {
                        "text": "108. Nediferencovaný marketing:",
                        "answers": [
                            {
                                "text": "odpovídá pojmu cílený marketing.",
                                "correct": false
                            },
                            {
                                "text": "znamená, že firma rozděluje trh na malé segmenty a těm přizpůsobuje nabídku.",
                                "correct": false
                            },
                            {
                                "text": "znamená, že firma oslovuje celý trh jednou nabídkou.",
                                "correct": true
                            },
                            {
                                "text": "znamená, že firma oslovuje trh několika odlišnými nabídkami.",
                                "correct": false
                            }
                        ]
                    },
                    {
                        "text": "109. Segment trhu musí splňovat tyto požadavky:",
                        "answers": [
                            {
                                "text": "dostupnost",
                                "correct": true
                            },
                            {
                                "text": "musí být vnitřně homogenní a zvnějšku heterogenní",
                                "correct": true
                            }
                        ]
                    },
                    {
                        "text": "110.Mezi segmentační kritéria uplatňovaná při segmentaci institucionálních trhů patří:",
                        "answers": [
                            {
                                "text": "velikost společnosti",
                                "correct": true
                            },
                            {
                                "text": "odvětví",
                                "correct": true
                            },
                            {
                                "text": "lokalita",
                                "correct": true
                            },
                            {
                                "text": "životní styl",
                                "correct": false
                            }
                        ]
                    },
                    {
                        "text": "111. Při psychografické segmentaci jsou zákazníci rozděleni na základě kritérií, jako jsou např.:",
                        "answers": [
                            {
                                "text": "příjem",
                                "correct": false
                            },
                            {
                                "text": "věrnost značce",
                                "correct": false
                            },
                            {
                                "text": "životní styl",
                                "correct": true
                            },
                            {
                                "text": "míra užití produktu",
                                "correct": false
                            },
                            {
                                "text": "hodnoty",
                                "correct": true
                            }
                        ]
                    },
                    {
                        "text": "112. Psychografická segmentace:",
                        "answers": [
                            {
                                "text": "je specifickým typem behaviorálních segmentačních kritérií.",
                                "correct": false
                            },
                            {
                                "text": "zapojuje typologii osobnosti.",
                                "correct": true
                            },
                            {
                                "text": "využívá diferencí v psychických predispozicích.",
                                "correct": true
                            },
                            {
                                "text": "zapojuje typologii životního stylu.",
                                "correct": true
                            }
                        ]
                    },
                    {
                        "text": "113. Firma cílí na mladé konzervativní muže s vysokými příjmy, kteří žijí ve velkých městech a vyznávají \"tradiční hodnoty\". Která segmentační kritéria firma využila?",
                        "answers": [
                            {
                                "text": "geografická",
                                "correct": true
                            },
                            {
                                "text": "psychografická",
                                "correct": true
                            },
                            {
                                "text": "behaviorální",
                                "correct": false
                            },
                            {
                                "text": "demografická",
                                "correct": true
                            }
                        ]
                    },
                    {
                        "text": "114. Při psychografické segmentaci jsou zákazníci rozděleni na základě kritérií, jako jsou např.:",
                        "answers": [
                            {
                                "text": "Osobnostní rysy",
                                "correct": true
                            },
                            {
                                "text": "Věk",
                                "correct": false
                            },
                            {
                                "text": "Příjem",
                                "correct": false
                            },
                            {
                                "text": "Pohlaví",
                                "correct": false
                            }
                        ]
                    },
                    {
                        "text": "115. Segmentace trhu:",
                        "answers": [
                            {
                                "text": "rozděluje zákazníky na základě vybraných kritérií do homogenních skupin, které vykazují podobné potřeby a chování",
                                "correct": true
                            },
                            {
                                "text": "je to samé co targeting",
                                "correct": false
                            },
                            {
                                "text": "je proces výběru segmentu, na který se chce firma zaměřit",
                                "correct": false
                            },
                            {
                                "text": "je druhou fází cíleného marketingu",
                                "correct": false
                            },
                            {
                                "text": "žádná z předchozích",
                                "correct": false
                            },
                            {
                                "text": "řeší výběr distribučních strategií",
                                "correct": false
                            },
                            {
                                "text": "spočívá ve stanovení benefitů a asociací, které firma komunikuje směrem k danému segmentu",
                                "correct": false
                            },
                            {
                                "text": "je třetí fází cíleného marketingu",
                                "correct": false
                            }
                        ]
                    },
                    {
                        "text": "116. Při behaviorální segmentaci jsou zákazníci rozděleni např. podle:",
                        "answers": [
                            {
                                "text": "povolání",
                                "correct": false
                            },
                            {
                                "text": "osobnostních rysů",
                                "correct": false
                            },
                            {
                                "text": "míry užití produktu",
                                "correct": true
                            },
                            {
                                "text": "příjmu",
                                "correct": false
                            }
                        ]
                    },
                    {
                        "text": "117. Rozdělení trhu na základě pohlaví odpovídá segmentaci demografické.",
                        "answers": [
                            {
                                "text": "ANO",
                                "correct": true
                            },
                            {
                                "text": "NE",
                                "correct": false
                            }
                        ]
                    },
                    {
                        "text": "118. Mezi segmentační kritéria uplatňovaná při segmentaci institucionálních trhů patří:",
                        "answers": [
                            {
                                "text": "velikost společnosti",
                                "correct": true
                            },
                            {
                                "text": "používané technologie",
                                "correct": true
                            },
                            {
                                "text": "lokalita",
                                "correct": true
                            },
                            {
                                "text": "životní styl",
                                "correct": false
                            }
                        ]
                    },
                    {
                        "text": "120. Při demografické segmentaci je trh rozdělen podle proměnných, jako jsou např. hodnoty či životní styl.",
                        "answers": [
                            {
                                "text": "ANO",
                                "correct": false
                            },
                            {
                                "text": "NE",
                                "correct": true
                            }
                        ]
                    },
                    {
                        "text": "121. Firma prodává prací prostředky. Své zákazníky segmentuje podle loajality. Jedná se tedy o psychografickou segmentaci",
                        "answers": [
                            {
                                "text": "ANO",
                                "correct": false
                            },
                            {
                                "text": "NE -> Behaviorální",
                                "correct": true
                            }
                        ]
                    },
                    {
                        "text": "122. Kaskádová internacionalizace znamená, že firmy vstupují na celý multinacionální trh najednou a stejným postupem.",
                        "answers": [
                            {
                                "text": "ANO",
                                "correct": false
                            },
                            {
                                "text": "NE",
                                "correct": true
                            }
                        ]
                    },
                    {
                        "text": "123. Kaskádová internacionalizace je snaha proniknout na zahraniční trhy postupně a diferencovaně.",
                        "answers": [
                            {
                                "text": "ANO",
                                "correct": true
                            },
                            {
                                "text": "NE",
                                "correct": false
                            }
                        ]
                    },
                    {
                        "text": "124. Etnocentrická orientace znamená, že podnik se orientuje primárně na:",
                        "answers": [
                            {
                                "text": "skupinu zemí s podobnými charakteristikami a pro ně má vytvořený jednotný postup.",
                                "correct": false
                            },
                            {
                                "text": "zahraniční trhy, na domácím trhu se tedy neangažuje",
                                "correct": false
                            },
                            {
                                "text": "národní trh.",
                                "correct": true
                            },
                            {
                                "text": "zahraniční trh, a to výhradně",
                                "correct": false
                            }
                        ]
                    },
                    {
                        "text": "125. Příkladem tzv. USP může být např.: (unique selling proposition)",
                        "answers": [
                            {
                                "text": "jedinečné emoce spojené s danou značkou",
                                "correct": false
                            },
                            {
                                "text": "nejlepší servis na trhu",
                                "correct": true
                            },
                            {
                                "text": "nejpokročilejší technologie na trhu",
                                "correct": true
                            },
                            {
                                "text": "nejvyšší kvalita na trhu",
                                "correct": true
                            }
                        ]
                    },
                    {
                        "text": "126. Internacionální marketing je marketing přesahující:",
                        "answers": [
                            {
                                "text": "nadnárodní hranice",
                                "correct": false
                            },
                            {
                                "text": "globální hranice",
                                "correct": false
                            },
                            {
                                "text": "národní hranice",
                                "correct": true
                            },
                            {
                                "text": "evropské hranice",
                                "correct": false
                            }
                        ]
                    },
                    {
                        "text": "127. Délkou produktové řady se rozumí:",
                        "answers": [
                            {
                                "text": "rozsah tzv. co-brandingu.",
                                "correct": false
                            },
                            {
                                "text": "počet produktů, které produktová řada obsahuje.",
                                "correct": true
                            },
                            {
                                "text": "rozsah služeb, které rozšiřují produkt z dané produktové kategorie.",
                                "correct": false
                            },
                            {
                                "text": "rozsah, ve kterém je používáno více značek v dané produktové řadě.",
                                "correct": false
                            }
                        ]
                    },
                    {
                        "text": "128. Jako strategie tzv. mega značek je označována:",
                        "answers": [
                            {
                                "text": "strategie, kdy jsou slabší značky odstraněny a prostředky se soustředí je na nejziskovější značky.",
                                "correct": false
                            },
                            {
                                "text": "strategie, kdy jsou slabší značky odstraněny a prostředky se soustředí jen na značky s nejlepším image v dané produktové kategorii.",
                                "correct": false
                            },
                            {
                                "text": "strategie, kdy jsou slabší značky odstraněny a prostředky se soustředí jen na značky s nejvyšším nebo druhým nejvyšším podílem ve své kategorii.",
                                "correct": true
                            },
                            {
                                "text": "strategie, kdy jsou slabší značky odstraněny a prostředky se soustředí jen na privátní značky.",
                                "correct": false
                            }
                        ]
                    },
                    {
                        "text": "129. Strategie korporátní značky:",
                        "answers": [
                            {
                                "text": "je strategie použití značek, kdy firma vyvine samostatné sortimentní značky pro různé rodiny produktů.",
                                "correct": false
                            },
                            {
                                "text": "je strategie používání značek, kdy firma používá svůj název jako dominantní identitu značek pro všechny své produkty.",
                                "correct": true
                            },
                            {
                                "text": "je strategie, kterou používá např. Mercedes-Benz nebo Philips.",
                                "correct": true
                            },
                            {
                                "text": "je strategie použití značek, kdy firma vytvoří ve stejné produktové kategorii tři či více značek.",
                                "correct": false
                            },
                            {
                                "text": "je strategie použití značek, kdy firma vytvoří ve stejné produktové kategorii dvě či více značek",
                                "correct": false
                            }
                        ]
                    },
                    {
                        "text": "130. Geocentrická orientace znamená, že se podnik soustředí na národní trh. Zahraniční aktivity jsou považovány za sekundární.",
                        "answers": [
                            {
                                "text": "ANO",
                                "correct": false
                            },
                            {
                                "text": "NE",
                                "correct": true
                            }
                        ]
                    },
                    {
                        "text": "131. Percepční mapa je:",
                        "answers": [
                            {
                                "text": "se v marketingové praxi nevyužívá.",
                                "correct": false
                            },
                            {
                                "text": "graf, který znázorňuje, jak zákazníci vnímají značky v dané produktové kategorii.",
                                "correct": true
                            },
                            {
                                "text": "má jen jednu osu.",
                                "correct": false
                            },
                            {
                                "text": "graf, který porovnává, jak často se značky dané produktové kategorie umísťují v médiích.",
                                "correct": false
                            }
                        ]
                    },
                    {
                        "text": "132. Brand positioning je:",
                        "answers": [
                            {
                                "text": "Umístění značky v mezinárodních žebříčcích, které porovnávají značky z hlediska jejich tržní hodnoty",
                                "correct": false
                            },
                            {
                                "text": "Umístění značky produktu do filmu či počítačové hry",
                                "correct": false
                            },
                            {
                                "text": "Proces, při kterém marketéři určují, jakým způsobem má být značka vnímána zákazníky a jaké asociace má vyvolávat",
                                "correct": true
                            },
                            {
                                "text": "Umístění značky v regálech obchodu",
                                "correct": false
                            },
                            {
                                "text": "Jiná možnost",
                                "correct": false
                            }
                        ]
                    },
                    {
                        "text": "133.Tzv. privátní značka je",
                        "answers": [
                            {
                                "text": "je označení pro značku, která je v krizi",
                                "correct": false
                            },
                            {
                                "text": "to samé, co tzv. private label",
                                "correct": true
                            },
                            {
                                "text": "označení pro tzv. rodinnou značku",
                                "correct": false
                            },
                            {
                                "text": "označení pro leadera v dané produktové kategorii",
                                "correct": false
                            }
                        ]
                    },
                    {
                        "text": "134. Tzv. privátní značka je:",
                        "answers": [
                            {
                                "text": "to samé, co tzv. značka výrobce",
                                "correct": false
                            },
                            {
                                "text": "označení pro leadera v dané produktové kategorii",
                                "correct": false
                            },
                            {
                                "text": "to samé, co tzv. maloobchodní značka",
                                "correct": true
                            },
                            {
                                "text": "to samé, co tzv. private label",
                                "correct": true
                            }
                        ]
                    },
                    {
                        "text": "135. Tzv. rozřeďování značky je:",
                        "answers": [
                            {
                                "text": "označení pro proces, kdy je globální značka transformována na značku lokální.",
                                "correct": false
                            },
                            {
                                "text": "situace, kdy si lidé přestávají značku spojovat s danou produktovou kategorií (resp. s daným zákaznickým segmentem).",
                                "correct": true
                            },
                            {
                                "text": "označení pro proces postupného posilování značky v dané cílové skupině.",
                                "correct": false
                            },
                            {
                                "text": "označení pro proces, kdy se povědomí o značce šíří masivně mezi lidmi.",
                                "correct": false
                            }
                        ]
                    },
                    {
                        "text": "136. Typický příklad \"maskulinního\" positioningu představuje značka Marlboro.",
                        "answers": [
                            {
                                "text": "ANO",
                                "correct": true
                            },
                            {
                                "text": "NE",
                                "correct": false
                            }
                        ]
                    },
                    {
                        "text": "137. Repositioning označuje situaci, kdy se firma snaží umístit zboží v prodejnách, kde bylo nasazení neúspěšné.",
                        "answers": [
                            {
                                "text": "ANO",
                                "correct": false
                            },
                            {
                                "text": "NE",
                                "correct": true
                            }
                        ]
                    },
                    {
                        "text": "138. Podstata globálního positioningu značky spočívá v jednotném názvu značky na všech trzích světa.",
                        "answers": [
                            {
                                "text": "ANO",
                                "correct": false
                            },
                            {
                                "text": "NE",
                                "correct": true
                            }
                        ]
                    },
                    {
                        "text": "139. Globální positioning značky znamená, že firma usiluje o stejné vnímání dané značky na všech trzích.",
                        "answers": [
                            {
                                "text": "ANO",
                                "correct": true
                            },
                            {
                                "text": "NE",
                                "correct": false
                            }
                        ]
                    },
                    {
                        "text": "140. Tzv. privátní značky představují určité ohrožení pro značky výrobce.",
                        "answers": [
                            {
                                "text": "ANO",
                                "correct": true
                            },
                            {
                                "text": "NE",
                                "correct": false
                            }
                        ]
                    },
                    {
                        "text": "141. Privátní značky oslovují v obecné rovině zejména méně spořivé zákazníky.",
                        "answers": [
                            {
                                "text": "ANO",
                                "correct": false
                            },
                            {
                                "text": "NE",
                                "correct": true
                            }
                        ]
                    },
                    {
                        "text": "142. Privátní značky jsou typicky výrazně dražší než značky výrobce.",
                        "answers": [
                            {
                                "text": "ANO",
                                "correct": false
                            },
                            {
                                "text": "NE",
                                "correct": true
                            }
                        ]
                    },
                    {
                        "text": "143. Tzv. private label brands označuje značky výrobce.",
                        "answers": [
                            {
                                "text": "ANO",
                                "correct": false
                            },
                            {
                                "text": "NE",
                                "correct": true
                            }
                        ]
                    },
                    {
                        "text": "144. Jedním z měřítek hodnoty značky je míra, v níž jsou zákazníci ochotni platit za značku více peněz, než-li by zaplatili za značku konkurenční.",
                        "answers": [
                            {
                                "text": "ANO",
                                "correct": true
                            },
                            {
                                "text": "NE",
                                "correct": false
                            }
                        ]
                    },
                    {
                        "text": "145. \"Image značky\" je souhrn dojmů a názorů spotřebitelů o značce.",
                        "answers": [
                            {
                                "text": "ANO",
                                "correct": true
                            },
                            {
                                "text": "NE",
                                "correct": false
                            }
                        ]
                    },
                    {
                        "text": "146. \"Znalost značky\" je schopnost spotřebitelů identifikovat značku za různých podmínek.",
                        "answers": [
                            {
                                "text": "ANO",
                                "correct": true
                            },
                            {
                                "text": "NE",
                                "correct": false
                            }
                        ]
                    },
                    {
                        "text": "147. \"Řada značky\" (brand line) je soubor všech produktů prodávaných pod určitou značkou.",
                        "answers": [
                            {
                                "text": "ANO",
                                "correct": true
                            },
                            {
                                "text": "NE",
                                "correct": false
                            }
                        ]
                    },
                    {
                        "text": "148. Co-branding označuje situaci, kdy se dvě či více značek spojí ve společném produktu.",
                        "answers": [
                            {
                                "text": "ANO",
                                "correct": true
                            },
                            {
                                "text": "NE",
                                "correct": false
                            }
                        ]
                    },
                    {
                        "text": "149. Co-branding je označením pro tzv. extenzi značky.",
                        "answers": [
                            {
                                "text": "ANO",
                                "correct": false
                            },
                            {
                                "text": "NE",
                                "correct": true
                            }
                        ]
                    },
                    {
                        "text": "150. Branding může být chápán jako prostředek k zajištění významné konkurenční výhody.",
                        "answers": [
                            {
                                "text": "ANO",
                                "correct": true
                            },
                            {
                                "text": "NE",
                                "correct": false
                            }
                        ]
                    },
                    {
                        "text": "151. Extenze značky:",
                        "answers": [
                            {
                                "text": "je rozšíření značky do nové produktové kategorie nebo na nový zákaznický segment.",
                                "correct": true
                            },
                            {
                                "text": "může skončit neúspěchem, pokud zákazníci extenzi neakceptují.",
                                "correct": true
                            },
                            {
                                "text": "může skončit tzv. rozředěním značky.",
                                "correct": true
                            },
                            {
                                "text": "je rozšíření propagace značky do nových médií.",
                                "correct": false
                            },
                            {
                                "text": "jejím rizikem je tzv. rozdělení značky (rozředění)",
                                "correct": true
                            },
                            {
                                "text": "rizika spojená s extenzí lze do určité míry eliminovat pomocí tzv. podznaček",
                                "correct": true
                            },
                            {
                                "text": "je rozšíření zaběhnuté značky do nového maloobchodního řetězce",
                                "correct": false
                            },
                            {
                                "text": "je přeměna značky na tzv.primární značku",
                                "correct": false
                            },
                            {
                                "text": "jejím rizikem je tvz. zhuštění značky",
                                "correct": false
                            }
                        ]
                    },
                    {
                        "text": "152. Brand positioning:",
                        "answers": [
                            {
                                "text": "je strategické marketingové rozhodnutí.",
                                "correct": true
                            },
                            {
                                "text": "je umístění značky produktu do filmu.",
                                "correct": false
                            },
                            {
                                "text": "je umístění značky produktu do počítačové hry.",
                                "correct": false
                            },
                            {
                                "text": "je umístění značky v regálech velkoobchodu.",
                                "correct": false
                            }
                        ]
                    },
                    {
                        "text": "153. Tzv. Emotional Selling Proposition označuje:",
                        "answers": [
                            {
                                "text": "strategii, kdy jsou využívány nejnižší možné ceny.",
                                "correct": false
                            },
                            {
                                "text": "strategii, kdy jsou využívány nejvyšší možné ceny.",
                                "correct": false
                            },
                            {
                                "text": "nefunkční atribut značky, který vyvolává jedinečné asociace.",
                                "correct": true
                            },
                            {
                                "text": "emocionální nátlak prodejců při obchodním vyjednávání.",
                                "correct": false
                            },
                            {
                                "text": "to samé, co tzv. USP.",
                                "correct": false
                            },
                            {
                                "text": "Jiná možnost",
                                "correct": false
                            }
                        ]
                    },
                    {
                        "text": "156. Tzv. USP:",
                        "answers": [
                            {
                                "text": "je zkratka pro unique segmentation procedure",
                                "correct": false
                            },
                            {
                                "text": "je zkratka pro výraz united selection process",
                                "correct": false
                            },
                            {
                                "text": "je zkratka pro výraz unique selling proposition",
                                "correct": true
                            },
                            {
                                "text": "není v marketingu využíváno",
                                "correct": false
                            }
                        ]
                    },
                    {
                        "text": "157. Tzv. Unique Selling Proposition označuje:",
                        "answers": [
                            {
                                "text": "jedinečný užitek spojený s danou značkou, který je dlouhodobě komunikován.",
                                "correct": true
                            },
                            {
                                "text": "způsob, jakým je vymezována cena produktu v maloobchodním řetězci",
                                "correct": false
                            },
                            {
                                "text": "strategii vysokých cen a dalších poplatků.",
                                "correct": false
                            },
                            {
                                "text": "agresivní strategii obchodních zástupců.",
                                "correct": false
                            }
                        ]
                    },
                    {
                        "text": "158. Komunikační charakteristiky výrobku jsou představovány",
                        "answers": [
                            {
                                "text": "zárukou",
                                "correct": false
                            },
                            {
                                "text": "obalem",
                                "correct": true
                            },
                            {
                                "text": "platebními podmínkami",
                                "correct": false
                            },
                            {
                                "text": "poprodejními službami",
                                "correct": false
                            }
                        ]
                    },
                    {
                        "text": "159. Strategie korporátní značky:",
                        "answers": [
                            {
                                "text": "jiná možnost",
                                "correct": false
                            },
                            {
                                "text": "je strategie použití značek, kdy firma vytvoří ve stejné produktové kategorii tři či více značek",
                                "correct": false
                            },
                            {
                                "text": "je strategie použití značek, kdy firma vytvoří ve stejné produktové řadě dvě či více značek",
                                "correct": false
                            },
                            {
                                "text": "je strategie používání značek, kdy firma používá svůj název jako dominantní identitu značek pro všechny své produkty",
                                "correct": true
                            },
                            {
                                "text": "je strategie, kterou používá například Mercedes-Benz nebo Philips",
                                "correct": true
                            }
                        ]
                    },
                    {
                        "text": "160. Do funkčních charakteristik produktu nepatří:",
                        "answers": [
                            {
                                "text": "trvanlivost, vzhled, chuť, náročnost na údržbu",
                                "correct": false
                            },
                            {
                                "text": "vzhled, trvanlivost, použitá technologie, výkon",
                                "correct": true
                            },
                            {
                                "text": "vzhled, chuť, výkon, náročnost na údržbu",
                                "correct": false
                            },
                            {
                                "text": "výkon, trvanlivost, vzhled, chuť",
                                "correct": false
                            }
                        ]
                    },
                    {
                        "text": "161. Který jev je typický pro výrobky ve fázi růstu?",
                        "answers": [
                            {
                                "text": "velké objemy prodeje",
                                "correct": false
                            },
                            {
                                "text": "prudký pokles prodeje",
                                "correct": false
                            },
                            {
                                "text": "technická vyspělost produktu",
                                "correct": false
                            },
                            {
                                "text": "zrychlující se tempo růstu prodeje",
                                "correct": true
                            }
                        ]
                    },
                    {
                        "text": "162. Adaptace v oblasti výrobkové politiky znamená realizaci globální výrobkové strategie.",
                        "answers": [
                            {
                                "text": "ANO",
                                "correct": false
                            },
                            {
                                "text": "NE",
                                "correct": true
                            }
                        ]
                    },
                    {
                        "text": "163. Standardizace v oblasti výrobkové politiky znamená přizpůsobování výrobků podmínkám různých trhů.",
                        "answers": [
                            {
                                "text": "ANO",
                                "correct": false
                            },
                            {
                                "text": "NE",
                                "correct": true
                            }
                        ]
                    },
                    {
                        "text": "164. Komplexní pojetí výrobku znamená",
                        "answers": [
                            {
                                "text": "že do vnímání výrobku je zahrnuta i cena, prodejní místo a způsob komunikace",
                                "correct": false
                            },
                            {
                                "text": "že výrobek je posuzován z pohledu všech fází životního cyklu",
                                "correct": false
                            },
                            {
                                "text": "žádná odpověď není správná",
                                "correct": true
                            },
                            {
                                "text": "že výrobek je posuzován i z hlediska prospěšnosti vůči životnímu prostředí",
                                "correct": false
                            },
                            {
                                "text": "že výrobkem je cokoliv, co se dá koupit",
                                "correct": false
                            }
                        ]
                    },
                    {
                        "text": "165. Na rozvinutém, silně konkurenčním trhu",
                        "answers": [
                            {
                                "text": "spotřebitele nejvíce zajímá ve struktuře komplexního výrobku jádro výrobku",
                                "correct": false
                            },
                            {
                                "text": "spotřebitele nejvíce zajímají ve struktuře komplexního výrobku funkční charakteristiky",
                                "correct": false
                            },
                            {
                                "text": "je do spotřebitelského vnímání komplexního modelu výrobku zahrnuta cena",
                                "correct": false
                            },
                            {
                                "text": "konkurenční boj se odehrává na úrovni povrchových vrstev struktury komplexního výrobku",
                                "correct": true
                            }
                        ]
                    },
                    {
                        "text": "166. Pro marketingové pojetí výrobku je typický:",
                        "answers": [
                            {
                                "text": "důraz na špičkovou kvalitu",
                                "correct": false
                            },
                            {
                                "text": "důraz na technickou dokonalost",
                                "correct": false
                            },
                            {
                                "text": "důraz na to, jak je vnímán spotřebiteli",
                                "correct": true
                            },
                            {
                                "text": "důraz na jeho hmotnou podstatu",
                                "correct": false
                            }
                        ]
                    },
                    {
                        "text": "167. Pro BCG matici platí:",
                        "answers": [
                            {
                                "text": "Otazníky mají vysoké tempo růstu, ale relativně nízký tržní podíl",
                                "correct": true
                            },
                            {
                                "text": "Otazníky mají nízké tempo růstu a nízký tržní podíl",
                                "correct": false
                            },
                            {
                                "text": "Otazníky mají nízké tempo růstu, ale vysoký tržní podíl",
                                "correct": false
                            },
                            {
                                "text": "Otazníky mají vysoké tempo růstu a relativně vysoký tržní podíl",
                                "correct": false
                            }
                        ]
                    },
                    {
                        "text": "168. Pro BCG matici platí",
                        "answers": [
                            {
                                "text": "Hladoví psi mají nízké tempo růstu, ale vysoký tržní podíl",
                                "correct": false
                            },
                            {
                                "text": "Hladoví psi mají vysoké tempo růstu a relativně vysoký tržní podíl",
                                "correct": false
                            },
                            {
                                "text": "Hladoví psi mají vysoké tempo růstu a nízký tržní podíl",
                                "correct": false
                            },
                            {
                                "text": "Hladoví psi mají nízké tempo růstu a nízký tržní podíl",
                                "correct": true
                            },
                            {
                                "text": "Jedná se obvykle o produkty ve fázi úpadku, do kterých se firmě nevyplácí dále investovat",
                                "correct": true
                            }
                        ]
                    },
                    {
                        "text": "169. Který z následujících výroků je pravdivý? Výrobky zařazené do kvadrantu „hvězdy“ podle BCG jsou charakterizovány",
                        "answers": [
                            {
                                "text": "vysokým relativním tržním podílem a tempem růstu trhu pod 10 %",
                                "correct": false
                            },
                            {
                                "text": "vysokým relativním tržním podílem a tempem růstu trhu nad 10 %",
                                "correct": true
                            },
                            {
                                "text": "nízkým relativním tržním podílem a objemem prodejů nad 10 %",
                                "correct": false
                            },
                            {
                                "text": "vysokým relativním tržním podílem a objemem prodejů pod 10 %",
                                "correct": false
                            }
                        ]
                    },
                    {
                        "text": "170. Pro BCG matici platí:",
                        "answers": [
                            {
                                "text": "Dojné krávy mají vysoké tempo růstu, ale relativně nízký tržní podíl",
                                "correct": false
                            },
                            {
                                "text": "Dojné krávy mají vysoké tempo růstu a relativně vysoký tržní podíl",
                                "correct": false
                            },
                            {
                                "text": "Dojné krávy mají nízké tempo růstu a nízký tržní podíl",
                                "correct": false
                            },
                            {
                                "text": "Dojné krávy mají nízké tempo růstu, ale vysoký tržní podíl",
                                "correct": true
                            }
                        ]
                    },
                    {
                        "text": "171. Spotřebitelské vnímání výrobku znamená především:",
                        "answers": [
                            {
                                "text": "přizpůsobit totální výrobek ekologickým požadavkům",
                                "correct": false
                            },
                            {
                                "text": "navrhnout, realizovat a prezentovat výrobek jako řešení problému spotřebitele",
                                "correct": false
                            },
                            {
                                "text": "vytvořit příznivý poměr mezi cenou a funkčními charakteristikami",
                                "correct": true
                            },
                            {
                                "text": "zlepšování komunikačních charakteristik výrobku",
                                "correct": false
                            }
                        ]
                    },
                    {
                        "text": "172. Jeden z následujících výroků není správný. Který?",
                        "answers": [
                            {
                                "text": "během fáze zavádění výrobku na trh lze obvykle očekávat ztráty",
                                "correct": false
                            },
                            {
                                "text": "když je výrobek ve fázi zralosti, bývá pro něj typický vysoký objem prodejů a snižování tempa jeho nárůstu",
                                "correct": false
                            },
                            {
                                "text": "poptávka organizací po výrobcích je v obecné rovině více pružná než poptávka spotřebitelská",
                                "correct": true
                            },
                            {
                                "text": "životní cyklus výrobku lze různými opatřeními prodloužit",
                                "correct": false
                            }
                        ]
                    },
                    {
                        "text": "173. Komplexní pojetí výrobku znamená:",
                        "answers": [
                            {
                                "text": "že výrobek není kupován pouze pro svoji základní funkci, ale i pro řadu dalších charakteristik",
                                "correct": true
                            },
                            {
                                "text": "že do vnímání výrobku je zahrnuta i cena, prodejní místo a způsob komunikace",
                                "correct": false
                            },
                            {
                                "text": "že výrobek je posuzován z pohledu všech fází životního cyklu.",
                                "correct": false
                            },
                            {
                                "text": "že výrobek je posuzován i z hlediska prospěšnosti vůči životnímu prostředí",
                                "correct": false
                            }
                        ]
                    },
                    {
                        "text": "174. Průběh životního cyklu výrobku zahrnuje následující fáze:",
                        "answers": [
                            {
                                "text": "pricing",
                                "correct": false
                            },
                            {
                                "text": "branding",
                                "correct": false
                            },
                            {
                                "text": "zavedení",
                                "correct": true
                            },
                            {
                                "text": "úpadek",
                                "correct": true
                            },
                            {
                                "text": "zralost",
                                "correct": true
                            },
                            {
                                "text": "růst",
                                "correct": true
                            }
                        ]
                    },
                    {
                        "text": "175. Který z uvedených výroků není pravdivý:",
                        "answers": [
                            {
                                "text": "produkt nemusí mít žádné hmotné rysy",
                                "correct": false
                            },
                            {
                                "text": "produkt je základním nástrojem marketingového mixu",
                                "correct": false
                            },
                            {
                                "text": "životní cyklus většiny výrobků se s technickým rozvojem zkracuje",
                                "correct": false
                            },
                            {
                                "text": "průběh životního cyklu výrobku je zákonitý a lze ho poměrně snadno předvídat a ovlivňovat",
                                "correct": true
                            }
                        ]
                    },
                    {
                        "text": "176. Jaké osy tvoří tzv. BCG matici?",
                        "answers": [
                            {
                                "text": "Relativní tržní podíl",
                                "correct": true
                            },
                            {
                                "text": "Životní cyklus výrobku",
                                "correct": false
                            },
                            {
                                "text": "Fáze životního cyklu produktu",
                                "correct": false
                            },
                            {
                                "text": "Konkurenční pozice",
                                "correct": false
                            },
                            {
                                "text": "Tempo růstu trhu",
                                "correct": true
                            }
                        ]
                    },
                    {
                        "text": "177. S technickým rozvojem se:",
                        "answers": [
                            {
                                "text": "nedá ve vztahu k životnímu cyklu jednoznačně nic prokázat",
                                "correct": false
                            },
                            {
                                "text": "životní cyklus většiny výrobků nemění",
                                "correct": true
                            },
                            {
                                "text": "životní cyklus většiny výrobků zkracuje",
                                "correct": false
                            },
                            {
                                "text": "životní cyklus většiny výrobků prodlužuje",
                                "correct": false
                            }
                        ]
                    },
                    {
                        "text": "178. Životní cyklus výrobku:",
                        "answers": [
                            {
                                "text": "zahrnuje obvykle tři fáze",
                                "correct": false
                            },
                            {
                                "text": "je zákonitý – závisí ale na řadě faktorů, včetně těch, které podnik nemůže ovlivnit",
                                "correct": true
                            },
                            {
                                "text": "zahrnuje obvykle fáze: uvedení na trh, růst, zralost a úpadek",
                                "correct": true
                            },
                            {
                                "text": "má vždy stejný průběh",
                                "correct": false
                            }
                        ]
                    },
                    {
                        "text": "179. Výrobky zařazené do kvadrantu „dojné krávy“ podle BCG matice jsou charakterizovány:",
                        "answers": [
                            {
                                "text": "vysokým relativním tržním podílem a tempem růstu trhu nad 10 %",
                                "correct": false
                            },
                            {
                                "text": "nízkým relativním tržním podílem a objemem prodejů nad 10 %",
                                "correct": false
                            },
                            {
                                "text": "vysokým relativním tržním podílem a objemem prodejů pod 10 %",
                                "correct": false
                            },
                            {
                                "text": "vysokým relativním tržním podílem a tempem růstu trhu pod 10 %",
                                "correct": true
                            }
                        ]
                    },
                    {
                        "text": "180. Výrobky zařazené do kvadrantu „otazníky“ podle BCG matice jsou charakterizovány:",
                        "answers": [
                            {
                                "text": "nízkým relativním tržním podílem a tempem růstu trhu nad 10 %",
                                "correct": true
                            },
                            {
                                "text": "vysokým relativním tržním podílem a objemem prodejů pod 10 %",
                                "correct": false
                            },
                            {
                                "text": "nízkým relativním tržním podílem a objemem prodejů nad 10 %",
                                "correct": false
                            },
                            {
                                "text": "vysokým relativním tržním podílem a tempem růstu trhu pod 10 %",
                                "correct": false
                            }
                        ]
                    },
                    {
                        "text": "181. Nejdynamičtějším obdobím z hlediska přírůstku prodeje je v průběhu životního cyklu výrobku:",
                        "answers": [
                            {
                                "text": "etapa inovace výrobku",
                                "correct": false
                            },
                            {
                                "text": "etapa zavádění výrobku",
                                "correct": false
                            },
                            {
                                "text": "etapa relativního růstu",
                                "correct": false
                            },
                            {
                                "text": "etapa úpadku",
                                "correct": false
                            },
                            {
                                "text": "etapa zralosti",
                                "correct": false
                            },
                            {
                                "text": "etapa růstu",
                                "correct": true
                            }
                        ]
                    },
                    {
                        "text": "182. Z následujících možností označte jev typický pro výrobky ve fázi zralosti z hlediska životního cyklu produktu",
                        "answers": [
                            {
                                "text": "vysoká ztrátovost",
                                "correct": false
                            },
                            {
                                "text": "slabá konkurence",
                                "correct": false
                            },
                            {
                                "text": "zrychlující se tempo růstu prodejů",
                                "correct": false
                            },
                            {
                                "text": "velké objemy prodeje",
                                "correct": true
                            }
                        ]
                    },
                    {
                        "text": "183. Průběh životního cyklu výrobku",
                        "answers": [
                            {
                                "text": "je zákonitý a lze ho snadno předvídat",
                                "correct": false
                            },
                            {
                                "text": "nepodléhá žádné zákonitosti",
                                "correct": false
                            },
                            {
                                "text": "je zákonitý – závisí ale na řadě faktorů, včetně těch, které podnik nemůže ovlivnit",
                                "correct": true
                            },
                            {
                                "text": "je zákonitý a lze ho snadno ovlivňovat",
                                "correct": false
                            }
                        ]
                    },
                    {
                        "text": "184. Jsou následující FÁZE (ETAPY) životního cyklu podniku, a také jejich POŘADÍ OBVYKLÉ? Vznik, růst, stabilizace, krize, zánik.",
                        "answers": [
                            {
                                "text": "ANO",
                                "correct": true
                            },
                            {
                                "text": "NE",
                                "correct": false
                            }
                        ]
                    },
                    {
                        "text": "185. Fáze životního cyklu podniku jsou: založení, vznik, růst, stabilizace, krize, zánik.",
                        "answers": [
                            {
                                "text": "ANO",
                                "correct": false
                            },
                            {
                                "text": "NE",
                                "correct": true
                            }
                        ]
                    },
                    {
                        "text": "186. Model komplexního výrobku dle učebnice Mercator by se dal použít pro následující produkt:",
                        "answers": [
                            {
                                "text": "luxusní lihoviny",
                                "correct": true
                            },
                            {
                                "text": "rádio",
                                "correct": false
                            },
                            {
                                "text": "luxusní parfém",
                                "correct": true
                            }
                        ]
                    },
                    {
                        "text": "187. Stádium zavádění výrobku na trh je typicky:",
                        "answers": [
                            {
                                "text": "spojené se snižováním cen",
                                "correct": false
                            },
                            {
                                "text": "spojené s odchodem konkurence",
                                "correct": false
                            },
                            {
                                "text": "spojené s masivním vstupem konkurence",
                                "correct": false
                            },
                            {
                                "text": "finančně náročné, protože je mimo jiné třeba hradit komunikační kampaň",
                                "correct": true
                            }
                        ]
                    },
                    {
                        "text": "189. Hodnocení výrobku pomocí portfolio analýzy BCG používá dvou základních kritérií. Označte je.",
                        "answers": [
                            {
                                "text": "objem prodejů a tempo růstu trhu",
                                "correct": false
                            },
                            {
                                "text": "relativní tržní podíl a tempo růstu trhu",
                                "correct": true
                            },
                            {
                                "text": "objem prodejů a relativní tržní podíl",
                                "correct": false
                            },
                            {
                                "text": "relativní tržní podíl a cenová úroveň",
                                "correct": false
                            }
                        ]
                    },
                    {
                        "text": "190. Klesne-li poptávané množství o 1 % při zvýšení ceny o 10 % je poptávka",
                        "answers": [
                            {
                                "text": "dokonale neelastická",
                                "correct": false
                            },
                            {
                                "text": "dokonale elastická",
                                "correct": false
                            },
                            {
                                "text": "elastická",
                                "correct": false
                            },
                            {
                                "text": "neelastická",
                                "correct": true
                            }
                        ]
                    },
                    {
                        "text": "191. Osobní prodej je možné popsat následujícími charakteristikami:",
                        "answers": [
                            {
                                "text": "oproti dalším komunikačním disciplínám je nákladný",
                                "correct": true
                            },
                            {
                                "text": "je důležitý zejména pro trhy B2B",
                                "correct": true
                            },
                            {
                                "text": "oproti dalším komunikačním disciplínám je levný",
                                "correct": false
                            },
                            {
                                "text": "je interaktivní",
                                "correct": true
                            }
                        ]
                    },
                    {
                        "text": "192. Klesne-li poptávané množství o 1 % při zvýšení ceny o 10 % je poptávka",
                        "answers": [
                            {
                                "text": "dokonale neelastická",
                                "correct": false
                            },
                            {
                                "text": "dokonale elastická",
                                "correct": false
                            },
                            {
                                "text": "elastická",
                                "correct": false
                            },
                            {
                                "text": "neelastická",
                                "correct": true
                            }
                        ]
                    },
                    {
                        "text": "193. Pokud se při snížení ceny o 1 % zvýší poptávka o 100 %, je možné označit poptávku jako elastickou.",
                        "answers": [
                            {
                                "text": "ANO",
                                "correct": true
                            },
                            {
                                "text": "NE",
                                "correct": false
                            }
                        ]
                    },
                    {
                        "text": "194. Pokud se při snížení ceny o 1 % zvýší poptávka o 100 %, je možné označit poptávku jako neelastickou.",
                        "answers": [
                            {
                                "text": "ANO",
                                "correct": false
                            },
                            {
                                "text": "NE",
                                "correct": true
                            }
                        ]
                    },
                    {
                        "text": "195. Penetrace trhu znamená:",
                        "answers": [
                            {
                                "text": "Podnik se snaží zvýšit prodej svých stávajících produktů dosavadním spotřebitelům.",
                                "correct": true
                            },
                            {
                                "text": "Podnik se snaží rozdělit trh na určité \"penetry\". Poté se snaží odhadovat budoucí poptávku po svých produktech.",
                                "correct": false
                            },
                            {
                                "text": "Podnik se snaží rozšířit prodej stávajících produktů na zcela nové trhy.",
                                "correct": false
                            },
                            {
                                "text": "Podnik se snaží prodat \"za každou cenu\".",
                                "correct": false
                            }
                        ]
                    },
                    {
                        "text": "196. Strategie penetrace trhu využívá vysokých zaváděcích cen.",
                        "answers": [
                            {
                                "text": "ANO",
                                "correct": false
                            },
                            {
                                "text": "NE",
                                "correct": true
                            }
                        ]
                    },
                    {
                        "text": "197. Strategie penetrace trhu využívá nízkých zaváděcích cen",
                        "answers": [
                            {
                                "text": "ANO",
                                "correct": true
                            },
                            {
                                "text": "NE",
                                "correct": false
                            }
                        ]
                    },
                    {
                        "text": "198. Tzv. referenční ceny jsou ceny, které si lidé pamatují a se kterými srovnávají ceny produktů v dané produktové kategorii.",
                        "answers": [
                            {
                                "text": "ANO",
                                "correct": true
                            },
                            {
                                "text": "NE",
                                "correct": false
                            }
                        ]
                    },
                    {
                        "text": "199. Mezi klíčové faktory tvorby ceny patří:",
                        "answers": [
                            {
                                "text": "hodnota vnímaná zákazníky",
                                "correct": true
                            },
                            {
                                "text": "ceny konkurence",
                                "correct": true
                            },
                            {
                                "text": "náklady",
                                "correct": true
                            },
                            {
                                "text": "ani jedna varianta není správně",
                                "correct": false
                            }
                        ]
                    },
                    {
                        "text": "200.Mezi základní metody tvorby ceny patří:",
                        "answers": [
                            {
                                "text": "metoda vycházející z poptávky",
                                "correct": true
                            },
                            {
                                "text": "ani jedna varianta není správně",
                                "correct": false
                            },
                            {
                                "text": "metoda vycházející z cen konkurence",
                                "correct": true
                            },
                            {
                                "text": "metoda založená na nákladech",
                                "correct": true
                            }
                        ]
                    },
                    {
                        "text": "201. Strategie sbírání smetany:",
                        "answers": [
                            {
                                "text": "umožňuje \"sbírání smetany\" díky postupnému snižování úvodní ceny pro segmenty připravené na různé úrovně cen",
                                "correct": true
                            },
                            {
                                "text": "znamená, že firma prodává menší objemy produktu za vyšší cenu",
                                "correct": true
                            },
                            {
                                "text": "je vhodná zejména v případech, kdy firma uvádí na trh inovaci, která je po určitou dobu chráněna před konkurencí",
                                "correct": true
                            },
                            {
                                "text": "je uvedení produktu na trh s vysokými cenami a za podpory masivní komunikační kampaně",
                                "correct": true
                            },
                            {
                                "text": "smyslem této strategie je co nejrychlejší penetrace trhu",
                                "correct": false
                            },
                            {
                                "text": "vytváří prostor pro postupné zvyšování cen",
                                "correct": false
                            },
                            {
                                "text": "se typicky vyznačuje nízkou úvodní cenou a nízkou úrovní reklamy",
                                "correct": false
                            },
                            {
                                "text": "je vhodná zejména u produktů, které jsou již ve fázi úpadku",
                                "correct": false
                            },
                            {
                                "text": "je uvedení produktu na trh s nízkými cenami a za podpory masivní komunikační kampaně",
                                "correct": false
                            },
                            {
                                "text": "je vhodná zejména v případech, kdy je trh citlivý na cenu a kdy jsou bariéry pro vstup konkurence omezené",
                                "correct": false
                            },
                            {
                                "text": "jejím cílem je získání co největšího podílu na trhu a vyřazení konkurence ze hry",
                                "correct": false
                            }
                        ]
                    },
                    {
                        "text": "202. Mezi interní faktory ovlivňující výši ceny patří:",
                        "answers": [
                            {
                                "text": "Marketingová strategie firmy",
                                "correct": true
                            },
                            {
                                "text": "Cíle firmy",
                                "correct": true
                            },
                            {
                                "text": "Náklady",
                                "correct": true
                            },
                            {
                                "text": "Hospodářská situace země",
                                "correct": false
                            },
                            {
                                "text": "hospodářská politika státu",
                                "correct": false
                            }
                        ]
                    },
                    {
                        "text": "203. Neelastická poptávka:",
                        "answers": [
                            {
                                "text": "je typická pro běžné produkty.",
                                "correct": false
                            },
                            {
                                "text": "označuje poptávku po produktech, které jsou velmi málo citlivé na cenu.",
                                "correct": true
                            },
                            {
                                "text": "je typická pro produkty, jejichž cena je oproti příjmům velmi nízká.",
                                "correct": true
                            },
                            {
                                "text": "je typická pro jedinečné exkluzivní produkty.",
                                "correct": true
                            },
                            {
                                "text": "označuje poptávku po produktech, které jsou velmi citlivé na cenu.",
                                "correct": false
                            }
                        ]
                    },
                    {
                        "text": "204. Čím více se koeficient cenové pružnosti blíží nule, tím je výhodnější pro podnik",
                        "answers": [
                            {
                                "text": "cenu snižovat",
                                "correct": false
                            },
                            {
                                "text": "prodej zastavit",
                                "correct": false
                            },
                            {
                                "text": "cenu neměnit",
                                "correct": false
                            },
                            {
                                "text": "cenu zvyšovat",
                                "correct": true
                            }
                        ]
                    },
                    {
                        "text": "205. Strategie \"sbírání smetany\":",
                        "answers": [
                            {
                                "text": "znamená, že firma prodává menší objem za vyšší cenu",
                                "correct": true
                            },
                            {
                                "text": "nastavuje nízké počáteční ceny",
                                "correct": false
                            },
                            {
                                "text": "nastavuje vysoké počáteční ceny",
                                "correct": true
                            },
                            {
                                "text": "znamená, že firma prodává větší objem za nižší cenu",
                                "correct": false
                            }
                        ]
                    },
                    {
                        "text": "206. Základní metody tvorby cen v marketingu jsou odvozeny od:",
                        "answers": [
                            {
                                "text": "nákladů, poptávky, právních předpisů",
                                "correct": false
                            },
                            {
                                "text": "nákladů, poptávky, konkurence",
                                "correct": true
                            },
                            {
                                "text": "nákladů, poptávky, nabídky",
                                "correct": false
                            },
                            {
                                "text": "typu trhu, právních předpisů, poptávky",
                                "correct": false
                            }
                        ]
                    },
                    {
                        "text": "207. Stanovení ceny pro vázané výrobky znamená",
                        "answers": [
                            {
                                "text": "stanovení cen pro komplementární výrobky",
                                "correct": true
                            },
                            {
                                "text": "stanovení cen pro doplňkové výrobky",
                                "correct": false
                            },
                            {
                                "text": "stanovení cen pro sady produktů.",
                                "correct": false
                            },
                            {
                                "text": "stanovení cen pro vedlejší produkty",
                                "correct": false
                            },
                            {
                                "text": "stanovení cen s přirážkou",
                                "correct": false
                            },
                            {
                                "text": "stanovení cen pro výrobky, které je nutné používat společně s hlavním výrobkem",
                                "correct": true
                            }
                        ]
                    },
                    {
                        "text": "208. Transferové ceny jsou:",
                        "answers": [
                            {
                                "text": "ceny, které si účtuje dopravce",
                                "correct": false
                            },
                            {
                                "text": "ceny, které si společnost účtuje za zboží svým zahraničním dceřiným společnostem",
                                "correct": true
                            },
                            {
                                "text": "ceny, které si účtuje dodavatel",
                                "correct": false
                            },
                            {
                                "text": "ceny, které jsou nižší než náklady",
                                "correct": false
                            }
                        ]
                    },
                    {
                        "text": "209. Označte, která z následujících možností představuje klíčovou výhodu nákladově orientované ceny:",
                        "answers": [
                            {
                                "text": "maximalizuje zisk",
                                "correct": false
                            },
                            {
                                "text": "zachycuje i neracionální momenty vnímání ceny",
                                "correct": false
                            },
                            {
                                "text": "stanovení ceny je v tomto případě jednoduché",
                                "correct": true
                            },
                            {
                                "text": "je v těsné vazbě na ceny konkurence",
                                "correct": false
                            }
                        ]
                    },
                    {
                        "text": "210. Nejvíce pružným marketingovým nástrojem se jeví:",
                        "answers": [
                            {
                                "text": "Komunikace",
                                "correct": false
                            },
                            {
                                "text": "Cena",
                                "correct": true
                            },
                            {
                                "text": "Výrobek",
                                "correct": false
                            },
                            {
                                "text": "Distribuce",
                                "correct": false
                            }
                        ]
                    },
                    {
                        "text": "211. Mezi externí faktory, které ovlivňují výši ceny, patří:",
                        "answers": [
                            {
                                "text": "konkurence",
                                "correct": true
                            },
                            {
                                "text": "hospodářská situace země",
                                "correct": true
                            },
                            {
                                "text": "charakter trhu",
                                "correct": true
                            },
                            {
                                "text": "cíle firmy",
                                "correct": false
                            },
                            {
                                "text": "poptávka",
                                "correct": true
                            }
                        ]
                    },
                    {
                        "text": "212. Mezi základní metodologické způsoby tvorby ceny patří:",
                        "answers": [
                            {
                                "text": "dle poptávky",
                                "correct": true
                            },
                            {
                                "text": "dle pravděpodobnosti",
                                "correct": false
                            },
                            {
                                "text": "dle nákladů",
                                "correct": true
                            },
                            {
                                "text": "dle konkurence",
                                "correct": true
                            }
                        ]
                    },
                    {
                        "text": "213. Referenční ceny:",
                        "answers": [
                            {
                                "text": "jsou ceny, které lidé vnímají jako typické pro danou produktovou kategorii.",
                                "correct": true
                            },
                            {
                                "text": "jsou velmi nízké ceny vybraných produktů, které maloobchod zavádí, aby nalákal zákazníky do své provozovny.",
                                "correct": false
                            },
                            {
                                "text": "jsou ceny, které referují o ziskovosti daného podniku.",
                                "correct": false
                            },
                            {
                                "text": "jsou ceny, podle kterých lidé poměřují ceny produktů v dané produktové kategorii",
                                "correct": true
                            },
                            {
                                "text": "férová cena",
                                "correct": true
                            }
                        ]
                    },
                    {
                        "text": "215. Čím méně je poptávka elastická, tím více se vyplatí prodávajícímu cenu:",
                        "answers": [
                            {
                                "text": "snižovat",
                                "correct": false
                            },
                            {
                                "text": "neměnit",
                                "correct": false
                            },
                            {
                                "text": "zvyšovat",
                                "correct": true
                            },
                            {
                                "text": "evokovat",
                                "correct": false
                            }
                        ]
                    },
                    {
                        "text": "216. Pružnou poptávku lze očekávat zejména u výrobků:",
                        "answers": [
                            {
                                "text": "nenahraditelných",
                                "correct": false
                            },
                            {
                                "text": "běžných",
                                "correct": true
                            },
                            {
                                "text": "nezbytných",
                                "correct": false
                            },
                            {
                                "text": "bez substitutů",
                                "correct": false
                            }
                        ]
                    },
                    {
                        "text": "217. Základní metody tvorby cen v marketingu jsou odvozeny od:",
                        "answers": [
                            {
                                "text": "výhradně od nákladů",
                                "correct": false
                            },
                            {
                                "text": "výhradně od konkurence",
                                "correct": false
                            },
                            {
                                "text": "konkurence",
                                "correct": true
                            },
                            {
                                "text": "výdajů",
                                "correct": false
                            }
                        ]
                    },
                    {
                        "text": "218. Krizová komunikace je součástí public relations.",
                        "answers": [
                            {
                                "text": "ANO",
                                "correct": true
                            },
                            {
                                "text": "NE",
                                "correct": false
                            }
                        ]
                    },
                    {
                        "text": "219. Krizová komunikace bývá považována za podstatnou součást public relations.",
                        "answers": [
                            {
                                "text": "ANO",
                                "correct": true
                            },
                            {
                                "text": "NE",
                                "correct": false
                            }
                        ]
                    },
                    {
                        "text": "220. Outdoor je označení pro venkovní reklamu.",
                        "answers": [
                            {
                                "text": "ANO",
                                "correct": true
                            },
                            {
                                "text": "NE",
                                "correct": false
                            }
                        ]
                    },
                    {
                        "text": "221.„Krizovou komunikací“ se v public relations rozumí:",
                        "answers": [
                            {
                                "text": "PR kampaň, která má typicky velký rozpočet.",
                                "correct": false
                            },
                            {
                                "text": "Komunikace v případech, jako jsou např. výrobkové vady, nehody, poškození životního prostředí, korupce, fúze a akvizice, uzavření provozovny, propouštění zaměstnanců či kontroverzní marketingové kampaně.",
                                "correct": true
                            },
                            {
                                "text": "Řešení situace, kdy je pověst značky ohrožena negativní publicitou.",
                                "correct": true
                            },
                            {
                                "text": "PR kampaň, která má jen minimální rozpočet.",
                                "correct": false
                            },
                            {
                                "text": "PR kampaň, která využívá netradiční média.",
                                "correct": false
                            },
                            {
                                "text": "Komunikace s novináři v situaci krize.",
                                "correct": true
                            }
                        ]
                    },
                    {
                        "text": "222. Jedním z nástrojů direct marketingu je i tzv. mobilní marketing.",
                        "answers": [
                            {
                                "text": "ANO",
                                "correct": true
                            },
                            {
                                "text": "NE",
                                "correct": false
                            }
                        ]
                    },
                    {
                        "text": "223. Product placement je možné považovat za typickou součást direct marketingu.",
                        "answers": [
                            {
                                "text": "ANO",
                                "correct": false
                            },
                            {
                                "text": "NE",
                                "correct": true
                            }
                        ]
                    },
                    {
                        "text": "224. Typickým nástrojem media relations je product placement.",
                        "answers": [
                            {
                                "text": "ANO",
                                "correct": false
                            },
                            {
                                "text": "NE",
                                "correct": true
                            }
                        ]
                    },
                    {
                        "text": "225. POP komunikace je totožná s tzv. Word-of-mouth marketingem.",
                        "answers": [
                            {
                                "text": "ANO",
                                "correct": false
                            },
                            {
                                "text": "NE",
                                "correct": true
                            }
                        ]
                    },
                    {
                        "text": "226. Firmy se musí rozhodnout, zda využívat výhradně strategii pull, nebo výhradně strategii push.",
                        "answers": [
                            {
                                "text": "ANO",
                                "correct": false
                            },
                            {
                                "text": "NE",
                                "correct": true
                            }
                        ]
                    },
                    {
                        "text": "227. Mezi reklamní média patří mimo jiné:",
                        "answers": [
                            {
                                "text": "Film",
                                "correct": true
                            },
                            {
                                "text": "Direct mail",
                                "correct": false
                            },
                            {
                                "text": "Spotřebitelská soutěž",
                                "correct": false
                            },
                            {
                                "text": "Telefon",
                                "correct": false
                            }
                        ]
                    },
                    {
                        "text": "228. POP komunikace:",
                        "answers": [
                            {
                                "text": "je jedním z klíčových nástrojů podpory prodeje.",
                                "correct": true
                            },
                            {
                                "text": "může zahrnovat např. direct mailing a emailing.",
                                "correct": false
                            },
                            {
                                "text": "může zahrnovat např. vývěsky a plakáty v prodejně.",
                                "correct": true
                            },
                            {
                                "text": "je označení pro reklamní předměty.",
                                "correct": false
                            }
                        ]
                    },
                    {
                        "text": "229. Direct marketing je obecně možné charakterizovat následujícím způsobem:",
                        "answers": [
                            {
                                "text": "usiluje o vyvolání okamžité reakce oslovených jedinců",
                                "correct": true
                            },
                            {
                                "text": "jeho typickými nástroji jsou direct mail, telemarketing, mobilní marketing atp.",
                                "correct": true
                            },
                            {
                                "text": "jde o personalizovanou komunikaci",
                                "correct": true
                            },
                            {
                                "text": "cílí zejména na masové publikum",
                                "correct": false
                            },
                            {
                                "text": "cílí obvykle na menší segmenty",
                                "correct": true
                            }
                        ]
                    },
                    {
                        "text": "230. Typickými nástroji direct marketingu jsou:",
                        "answers": [
                            {
                                "text": "eventy",
                                "correct": false
                            },
                            {
                                "text": "mobilní marketing",
                                "correct": true
                            },
                            {
                                "text": "POP komunikace",
                                "correct": false
                            },
                            {
                                "text": "telemarketing",
                                "correct": true
                            },
                            {
                                "text": "tisková zpráva",
                                "correct": false
                            },
                            {
                                "text": "prémie a dárky",
                                "correct": false
                            },
                            {
                                "text": "emailing",
                                "correct": true
                            }
                        ]
                    },
                    {
                        "text": "231. Direct mail je:",
                        "answers": [
                            {
                                "text": "nástroj podpory prodeje",
                                "correct": false
                            },
                            {
                                "text": "vhodný pro individuální komunikaci",
                                "correct": true
                            },
                            {
                                "text": "žádná z možností",
                                "correct": false
                            },
                            {
                                "text": "nástroj direct marketingu",
                                "correct": true
                            },
                            {
                                "text": "přímý prodej pomocí zásilek",
                                "correct": false
                            }
                        ]
                    },
                    {
                        "text": "232. Co je to virální marketing?",
                        "answers": [
                            {
                                "text": "jde o využití komerčního sdělení v politické propagandě",
                                "correct": false
                            },
                            {
                                "text": "typicky jde o využití komerčního sdělení, které si lidé zasílají mezi sebou prostřednictvím emailu",
                                "correct": true
                            },
                            {
                                "text": "jde o pojem, který se shoduje s pojmem online marketing",
                                "correct": false
                            },
                            {
                                "text": "jde o marketing zaměřený na retailové řetězce",
                                "correct": false
                            }
                        ]
                    },
                    {
                        "text": "233. Product placement je možné definovat jako:",
                        "answers": [
                            {
                                "text": "umístění značky v mysli spotřebitele",
                                "correct": false
                            },
                            {
                                "text": "pozicování značky způsobem, kterému odpovídá daná image značky (brand image)",
                                "correct": false
                            },
                            {
                                "text": "umístění produktu do vhodného obalu",
                                "correct": false
                            },
                            {
                                "text": "umístění produktu či značky do filmu, počítačové hry atp.",
                                "correct": true
                            }
                        ]
                    },
                    {
                        "text": "234. Osobní prodej je:",
                        "answers": [
                            {
                                "text": "typickou součástí public relations",
                                "correct": false
                            },
                            {
                                "text": "typickou součástí direct marketingu",
                                "correct": true
                            },
                            {
                                "text": "jednou ze základních disciplín komunikačního mixu",
                                "correct": true
                            },
                            {
                                "text": "typickou součástí reklamy",
                                "correct": false
                            }
                        ]
                    },
                    {
                        "text": "235. Komunikačním mixem se rozumí:",
                        "answers": [
                            {
                                "text": "            individuální směs reklamy, osobního prodeje, public relations, podpory prodeje a direct marketingu",
                                "correct": true
                            },
                            {
                                "text": "            marketingový mix",
                                "correct": false
                            },
                            {
                                "text": "            výběr komunikačních disciplín, které firma používá pro dosažení svých komunikačních cílů",
                                "correct": true
                            },
                            {
                                "text": "            značková politika produktového portfolia",
                                "correct": false
                            }
                        ]
                    },
                    {
                        "text": "236. Reklamu je možné popsat následujícími charakteristikami:",
                        "answers": [
                            {
                                "text": "je to forma neosobní komunikace",
                                "correct": true
                            },
                            {
                                "text": "dokáže zasáhnout masy spotřebitelů",
                                "correct": true
                            },
                            {
                                "text": "jejím největším přínosem je vysoká kredibilita",
                                "correct": false
                            },
                            {
                                "text": "její význam je největší na trzích B2C",
                                "correct": true
                            }
                        ]
                    },
                    {
                        "text": "237. Strategie push:",
                        "answers": [
                            {
                                "text": "často využívá podpory prodeje, aby motivovala distribuční mezičlánky",
                                "correct": true
                            },
                            {
                                "text": "se zaměřuje primárně na spotřebitele",
                                "correct": false
                            },
                            {
                                "text": "využívá typicky zejména masovou reklamu",
                                "correct": false
                            },
                            {
                                "text": "využívá typicky zejména osobní prodej, podpory prodeje a dalších nástrojů cílených na distributory",
                                "correct": true
                            },
                            {
                                "text": "odpovídá strategii pull",
                                "correct": false
                            },
                            {
                                "text": "je zaměřena na budování spotřebitelské poptávky",
                                "correct": false
                            },
                            {
                                "text": "zaměřuje se primárně na distribuční mezičlánky",
                                "correct": true
                            },
                            {
                                "text": "jejím cílem je motivovat distributory, aby nabízeli produkty dané značky ve svých provozovnách",
                                "correct": true
                            }
                        ]
                    },
                    {
                        "text": "238. Podporu prodeje by bylo možné definovat jako:",
                        "answers": [
                            {
                                "text": "disciplínu komunikačního mixu, kterou lze ztotožnit s osobním prodejem",
                                "correct": false
                            },
                            {
                                "text": "žádná z předchozích",
                                "correct": false
                            },
                            {
                                "text": "pobídky podporující okamžitý prodej",
                                "correct": true
                            },
                            {
                                "text": "soubor technik, mezi které patří např. kupóny či spotřebitelské soutěže",
                                "correct": true
                            },
                            {
                                "text": "jednu ze základních disciplín komunikačního mixu",
                                "correct": true
                            }
                        ]
                    },
                    {
                        "text": "239. Komunikační mix se skládá z následujících disciplín:",
                        "answers": [
                            {
                                "text": "direct mail",
                                "correct": false
                            },
                            {
                                "text": "distribuce",
                                "correct": false
                            },
                            {
                                "text": "telemarketing",
                                "correct": false
                            },
                            {
                                "text": "public relations",
                                "correct": true
                            },
                            {
                                "text": "osobní prodej",
                                "correct": true
                            },
                            {
                                "text": "podpora prodeje",
                                "correct": true
                            },
                            {
                                "text": "direct marketing",
                                "correct": true
                            }
                        ]
                    },
                    {
                        "text": "241. Reklama se obecně vyznačuje následujícími charakteristikami:",
                        "answers": [
                            {
                                "text": "cílí zejména na masové publikum",
                                "correct": true
                            },
                            {
                                "text": "není součástí komunikačního mixu",
                                "correct": false
                            },
                            {
                                "text": "jde primárně o neplacenou formu propagace produktu",
                                "correct": false
                            },
                            {
                                "text": "jde o placenou formu propagace produktu",
                                "correct": true
                            },
                            {
                                "text": "dokáže efektivně „budovat“ značky",
                                "correct": true
                            }
                        ]
                    },
                    {
                        "text": "242. Spotřebitelské soutěže jsou typickým nástrojem public relations.",
                        "answers": [
                            {
                                "text": "ANO",
                                "correct": false
                            },
                            {
                                "text": "NE",
                                "correct": true
                            }
                        ]
                    },
                    {
                        "text": "243. Osobní prodej je možné popsat následujícími charakteristikami:",
                        "answers": [
                            {
                                "text": "oproti dalším komunikačním disciplínám je nákladný.",
                                "correct": true
                            },
                            {
                                "text": "oproti dalším komunikačním disciplínám je levný.",
                                "correct": false
                            },
                            {
                                "text": "umožňuje přizpůsobit komunikaci konkrétního zákazníka.",
                                "correct": true
                            },
                            {
                                "text": "je důležitý zejména pro trhy B2C",
                                "correct": false
                            }
                        ]
                    },
                    {
                        "text": "244. Komunikačním mixem se rozumí?",
                        "answers": [
                            {
                                "text": "značková politika produktového portfolia",
                                "correct": false
                            },
                            {
                                "text": "individuální směs reklamy, osobního prodeje, public relations, podpory prodeje a direct marketingu",
                                "correct": true
                            },
                            {
                                "text": "marketingový mix, produkt, jeho cena a komunikace",
                                "correct": false
                            }
                        ]
                    },
                    {
                        "text": "245. Typickým nástrojem media relations jsou tiskové konference.",
                        "answers": [
                            {
                                "text": "ANO",
                                "correct": true
                            },
                            {
                                "text": "NE",
                                "correct": false
                            }
                        ]
                    },
                    {
                        "text": "246. Reklamu je možné popsat následujícími charakteristikami:",
                        "answers": [
                            {
                                "text": "dokáže efektivně budovat značky",
                                "correct": true
                            },
                            {
                                "text": "dokáže zasáhnout masy spotřebitelů",
                                "correct": true
                            },
                            {
                                "text": "je interaktivní",
                                "correct": false
                            },
                            {
                                "text": "její význam je největší na trzích B2C",
                                "correct": true
                            }
                        ]
                    },
                    {
                        "text": "247. POP komunikace:",
                        "answers": [
                            {
                                "text": "je označení pro komunikaci v místě prodeje",
                                "correct": true
                            },
                            {
                                "text": "je označení pro slevy",
                                "correct": false
                            },
                            {
                                "text": "je označení pro věrnostní programy",
                                "correct": false
                            },
                            {
                                "text": "je označení pro reklamní předměty",
                                "correct": false
                            },
                            {
                                "text": "soubor nástrojů, které jsou využívány v místě prodeje",
                                "correct": true
                            }
                        ]
                    },
                    {
                        "text": "248. Strategie pull:",
                        "answers": [
                            {
                                "text": "se zaměřuje zejména na získání informací o konkurenci",
                                "correct": false
                            },
                            {
                                "text": "usiluje o protlačení produktu přes distribuční mezičlánky",
                                "correct": false
                            },
                            {
                                "text": "se soustředí zejména na propagaci směrem k obchodníkům",
                                "correct": false
                            },
                            {
                                "text": "je zaměřena na budování spotřebitelské poptávky",
                                "correct": true
                            }
                        ]
                    },
                    {
                        "text": "249. Strategie pull:",
                        "answers": [
                            {
                                "text": "\"tlačí\" produkt distribučními kanály.",
                                "correct": false
                            },
                            {
                                "text": "vyžaduje velké výdaje na propagaci směrem ke spotřebitelům.",
                                "correct": true
                            },
                            {
                                "text": "zaměřuje se na velkoobchodníky.",
                                "correct": false
                            },
                            {
                                "text": "vychází z předpokladu, že spotřebitelé budou žádat produkt po maloobchodech.",
                                "correct": true
                            }
                        ]
                    },
                    {
                        "text": "250. Strategie PUSH:",
                        "answers": [
                            {
                                "text": "se soustředí zejména na velkoobchodníky a maloobchodníky",
                                "correct": true
                            },
                            {
                                "text": "se soustředí zejména na propagaci směrem k distribučním mezičlánkům",
                                "correct": true
                            },
                            {
                                "text": "usiluje o vyvolání spotřebitelské nabídky",
                                "correct": false
                            },
                            {
                                "text": "se soustředí zejména na to, aby byl produkt „protlačen“ přes distribuční mezičlánky",
                                "correct": true
                            }
                        ]
                    },
                    {
                        "text": "251. Word-of-mouth marketing je:",
                        "answers": [
                            {
                                "text": "v České republice zakázán",
                                "correct": false
                            },
                            {
                                "text": "označení pro komunikační kampaně, jejichž primárním cílem je vyvolání negativní publicity",
                                "correct": false
                            },
                            {
                                "text": "jedním z trendů marketingové komunikace",
                                "correct": true
                            },
                            {
                                "text": "jiné označení pro tzv. osobní prodej",
                                "correct": false
                            }
                        ]
                    },
                    {
                        "text": "252. Typickými nástroji podpory prodeje jsou slevy, bonusy a kupóny.",
                        "answers": [
                            {
                                "text": "ANO",
                                "correct": true
                            },
                            {
                                "text": "NE",
                                "correct": false
                            }
                        ]
                    },
                    {
                        "text": "253. Krizová komunikace se vyznačuje minimálními rozpočty a maximálním efektem při budování značek. Je jí možné považovat za trend v marketingové komunikaci.",
                        "answers": [
                            {
                                "text": "ANO",
                                "correct": false
                            },
                            {
                                "text": "NE",
                                "correct": true
                            }
                        ]
                    },
                    {
                        "text": "254. Tisková konference a tisková zpráva jsou nástroji tzv. mobilního marketingu.",
                        "answers": [
                            {
                                "text": "ANO",
                                "correct": false
                            },
                            {
                                "text": "NE",
                                "correct": true
                            }
                        ]
                    },
                    {
                        "text": "256. Mezi reklamní média patří mimo jiné:",
                        "answers": [
                            {
                                "text": "Rádio",
                                "correct": true
                            },
                            {
                                "text": "Print",
                                "correct": true
                            },
                            {
                                "text": "Outdoor",
                                "correct": true
                            },
                            {
                                "text": "Televize",
                                "correct": true
                            }
                        ]
                    },
                    {
                        "text": "257. Co je to virální marketing?",
                        "answers": [
                            {
                                "text": "jde o marketing zaměřený na retailové řetězce",
                                "correct": false
                            },
                            {
                                "text": "typicky jde o marketing cílený na novináře (resp. media)",
                                "correct": false
                            },
                            {
                                "text": "jde o situaci, kdy se marketingové sdělení exponenciálně šíří v prostředí internetu",
                                "correct": true
                            },
                            {
                                "text": "jde o pojem, který se shoduje s pojmem online marketing",
                                "correct": false
                            }
                        ]
                    },
                    {
                        "text": "258. Jako word-of-mouth marketing bývají označovány komunikační kampaně, které:",
                        "answers": [
                            {
                                "text": "využívají nekonvenční přístupy",
                                "correct": true
                            },
                            {
                                "text": "využívají běžné tradiční přístupy",
                                "correct": false
                            },
                            {
                                "text": "jsou zaměřené na potenciální zaměstnance firmy",
                                "correct": false
                            },
                            {
                                "text": "jsou zaměřené na zaměstnance firmy",
                                "correct": false
                            }
                        ]
                    },
                    {
                        "text": "259. Tisková konference a tisková zpráva jsou nástroji tzv. mobilního marketingu.",
                        "answers": [
                            {
                                "text": "ANO",
                                "correct": false
                            },
                            {
                                "text": "NE",
                                "correct": true
                            }
                        ]
                    },
                    {
                        "text": "260. Virální marketing využívá principu \"sněhové koule\", tedy exponenciálního šíření marketingového sdělení mezi lidmi .",
                        "answers": [
                            {
                                "text": "ANO",
                                "correct": true
                            },
                            {
                                "text": "NE",
                                "correct": false
                            }
                        ]
                    },
                    {
                        "text": "261. Franchising je strategie využívající kombinaci nízké ceny a intenzivní marketingové komunikace.",
                        "answers": [
                            {
                                "text": "ANO",
                                "correct": false
                            },
                            {
                                "text": "NE",
                                "correct": true
                            }
                        ]
                    },
                    {
                        "text": "262. Franchising je založen na poskytnutí licence k podnikání jménem poskytovatele.",
                        "answers": [
                            {
                                "text": "ANO",
                                "correct": true
                            },
                            {
                                "text": "NE",
                                "correct": false
                            }
                        ]
                    },
                    {
                        "text": "262. Franchising je zvláštní formou převodu know-how, včetně možnosti užívat loga sítě.",
                        "answers": [
                            {
                                "text": "ANO",
                                "correct": true
                            },
                            {
                                "text": "NE",
                                "correct": false
                            }
                        ]
                    },
                    {
                        "text": "263. Selektivní distribuce:",
                        "answers": [
                            {
                                "text": "znamená, že výrobce navazuje exkluzivní vztahy se všemi svými distribučními mezičlánky",
                                "correct": false
                            },
                            {
                                "text": "zajišťuje dodání zboží na co největší množství prodejních míst",
                                "correct": false
                            },
                            {
                                "text": "odpovídá exkluzivní distribuci",
                                "correct": false
                            },
                            {
                                "text": "znamená, že zboží je k dispozici na omezeném počtu prodejních míst",
                                "correct": true
                            },
                            {
                                "text": "firma využívá omezené vybrané množství distributorů",
                                "correct": true
                            },
                            {
                                "text": "kompromis intenzivní a exkluzivní distribuce",
                                "correct": true
                            }
                        ]
                    },
                    {
                        "text": "264. V marketingu rozlišujeme distribuční cesty:",
                        "answers": [
                            {
                                "text": "hlavní a vedlejší",
                                "correct": false
                            },
                            {
                                "text": "krátkodobé a dlouhodobé",
                                "correct": false
                            },
                            {
                                "text": "podnikové a soukromé",
                                "correct": false
                            },
                            {
                                "text": "přímé a nepřímé",
                                "correct": true
                            }
                        ]
                    },
                    {
                        "text": "265. Kolik mezičlánků mezi dodavatelem a uživatelem může mít nepřímá distribuční cesta?",
                        "answers": [
                            {
                                "text": "dva a více",
                                "correct": false
                            },
                            {
                                "text": "jeden a více",
                                "correct": true
                            },
                            {
                                "text": "maximálně 10",
                                "correct": false
                            },
                            {
                                "text": "žádný",
                                "correct": false
                            }
                        ]
                    },
                    {
                        "text": "266. Pro přímou distribuční cestu je charakteristické:",
                        "answers": [
                            {
                                "text": "neekonomičnost přímých dodávek v případě velké rozptýlenosti zákazníků",
                                "correct": true
                            },
                            {
                                "text": "využití většího množství distribučních mezičlánků",
                                "correct": false
                            },
                            {
                                "text": "snížení nákladů způsobené absencí mezičlánků",
                                "correct": true
                            },
                            {
                                "text": "neekonomičnost přímých dodávek v případě hromadného zboží",
                                "correct": true
                            },
                            {
                                "text": "přímý kontakt mezi výrobcem a spotřebitelem",
                                "correct": false
                            },
                            {
                                "text": "využití jediného distribučního mezičlánku",
                                "correct": false
                            }
                        ]
                    },
                    {
                        "text": "267. Distribuční cesty představují v marketingu spojení mezi:",
                        "answers": [
                            {
                                "text": "dodavatelem a uživatelem",
                                "correct": true
                            },
                            {
                                "text": "spotřebitelem a uživatelem",
                                "correct": false
                            },
                            {
                                "text": "dodavatelem a spotřebitelem",
                                "correct": true
                            },
                            {
                                "text": "výrobcem a uživatelem",
                                "correct": true
                            }
                        ]
                    },
                    {
                        "text": "268. Přímé distribuční cesty využívají především následující formy prodeje:",
                        "answers": [
                            {
                                "text": "prodej v síti maloobchodních jednotek",
                                "correct": false
                            },
                            {
                                "text": "prodejní automaty",
                                "correct": true
                            },
                            {
                                "text": "prodej ve vlastní prodejně",
                                "correct": true
                            },
                            {
                                "text": "prostřednictvím a pod značkou obchodního řetězce",
                                "correct": false
                            },
                            {
                                "text": "pomocí agentů výrobce",
                                "correct": true
                            },
                            {
                                "text": "přímý marketing",
                                "correct": true
                            }
                        ]
                    },
                    {
                        "text": "269. Intenzivní distribuce:",
                        "answers": [
                            {
                                "text": "je typ distribuce, kdy je zboží k dispozici na \"všech možných\" prodejních místech",
                                "correct": true
                            },
                            {
                                "text": "která je typická pro firmy využívající ekonomickou strategii či strategii dobré hodnoty",
                                "correct": true
                            },
                            {
                                "text": "je založena na intenzivních vztazích výrobce s malým počtem prodejců",
                                "correct": false
                            },
                            {
                                "text": "je typ přímé distribuční cesty",
                                "correct": false
                            },
                            {
                                "text": "je typ distribuce s velmi skromným počtem míst, kde je zboží k dispozici",
                                "correct": false
                            }
                        ]
                    },
                    {
                        "text": "270. Přímé distribuční cesty využívají především následující formy prodeje:",
                        "answers": [
                            {
                                "text": "přímý marketing",
                                "correct": true
                            },
                            {
                                "text": "prodejní automaty",
                                "correct": true
                            },
                            {
                                "text": "prodej v síti maloobchodních jednotek",
                                "correct": false
                            },
                            {
                                "text": "prodej ve vlastní prodejně",
                                "correct": true
                            }
                        ]
                    },
                    {
                        "text": "271. Distribuční strategie v závislosti na počtu mezičlánků:",
                        "answers": [
                            {
                                "text": "může být usilovná, výběrová nebo výhradní",
                                "correct": true
                            },
                            {
                                "text": "může být přímá nebo nepřímá",
                                "correct": false
                            },
                            {
                                "text": "vertikální, horizontální a konvenční",
                                "correct": false
                            },
                            {
                                "text": "může být zprostředkující nebo podpůrná",
                                "correct": false
                            }
                        ]
                    },
                    {
                        "text": "272. Přímý marketing jako kombinace nástrojů distribuce a komunikace může představovat:",
                        "answers": [
                            {
                                "text": "prodej prostřednictvím velkoobchodu",
                                "correct": false
                            },
                            {
                                "text": "zásilkový prodej pomocí katalogů",
                                "correct": true
                            },
                            {
                                "text": "prodej prostřednictvím maloobchodu",
                                "correct": false
                            },
                            {
                                "text": "telemarketing",
                                "correct": true
                            }
                        ]
                    },
                    {
                        "text": "273. Mezi nevýhody nepřímých distribučních cest patří:",
                        "answers": [
                            {
                                "text": "ztráta kontroly výrobce nad zbožím",
                                "correct": true
                            },
                            {
                                "text": "neekonomičnost přímých dodávek u hromadného zboží",
                                "correct": false
                            },
                            {
                                "text": "závislost výrobce na marketingové strategii distribučních mezičlánků",
                                "correct": true
                            },
                            {
                                "text": "nutnost motivovat distribuční mezičlánky, aby při prodeji zboží vyvíjely maximální úsilí",
                                "correct": true
                            }
                        ]
                    },
                    {
                        "text": "274. Pro distribuční mezičlánky platí:",
                        "answers": [
                            {
                                "text": "Prostředníci nejsou vlastníky zboží",
                                "correct": false
                            },
                            {
                                "text": "Zprostředkovatelé zprostředkovávají kontakty mezi výrobcem a spotřebitelem",
                                "correct": true
                            },
                            {
                                "text": "Podpůrné distribuční mezičlánky pouze usnadňují směnu zboží",
                                "correct": true
                            },
                            {
                                "text": "Podpůrné distribuční mezičlánky se nestávají vlastníky zboží",
                                "correct": true
                            }
                        ]
                    },
                    {
                        "text": "275. Geografické okolí ovlivňuje zejména:",
                        "answers": [
                            {
                                "text": "výběr pracovní síly",
                                "correct": false
                            },
                            {
                                "text": "logistiku",
                                "correct": true
                            },
                            {
                                "text": "legislativní podmínky",
                                "correct": false
                            },
                            {
                                "text": "daňovou zátěž",
                                "correct": false
                            }
                        ]
                    },
                    {
                        "text": "276. Mezi maloobchodní organizace patří:",
                        "answers": [
                            {
                                "text": "hypermarkety",
                                "correct": true
                            },
                            {
                                "text": "obchodní domy",
                                "correct": true
                            },
                            {
                                "text": "supermarkety",
                                "correct": true
                            },
                            {
                                "text": "organizace \"Cash and Carry“",
                                "correct": false
                            }
                        ]
                    },
                    {
                        "text": "277. Korporační distribuční systém znamená, že dochází ke spojení dvou a více firem na stejné úrovni distribuční cesty, přičemž jedna firma vlastní firmy ostatní.",
                        "answers": [
                            {
                                "text": "ANO",
                                "correct": false
                            },
                            {
                                "text": "NE",
                                "correct": true
                            }
                        ]
                    },
                    {
                        "text": "278. Administrativní distribuční systém koordinuje výrobní a distribuční činnost nezávislých subjektů na základě licenčních ujednání.",
                        "answers": [
                            {
                                "text": "ANO",
                                "correct": false
                            },
                            {
                                "text": "NE",
                                "correct": true
                            }
                        ]
                    },
                    {
                        "text": "279. Maloobchod je firma zabývající se prodejem zboží a služeb spotřebitelům pro jejich osobní potřebu a firmám pro účely dalšího podnikání.",
                        "answers": [
                            {
                                "text": "ANO",
                                "correct": false
                            },
                            {
                                "text": "NE",
                                "correct": true
                            }
                        ]
                    },
                    {
                        "text": "280. \"Cash and Carry\" je označení pro specifickou velkoobchodní organizaci.",
                        "answers": [
                            {
                                "text": "ANO",
                                "correct": true
                            },
                            {
                                "text": "NE",
                                "correct": false
                            }
                        ]
                    },
                    {
                        "text": "281. Polycentrická orientace znamená:",
                        "answers": [
                            {
                                "text": "že se podnik orientuje na národní trh.",
                                "correct": false
                            },
                            {
                                "text": "protipól orientace etnocentrické.",
                                "correct": true
                            },
                            {
                                "text": "protipól orientace regiocentrické.",
                                "correct": false
                            },
                            {
                                "text": "že podnik považuje zahraniční aktivity za sekundární.",
                                "correct": false
                            }
                        ]
                    },
                    {
                        "text": "282. Exkluzivní distribuce:",
                        "answers": [
                            {
                                "text": "znamená to samé, co výhradní distribuce",
                                "correct": true
                            },
                            {
                                "text": "znamená to samé, co selektivní distribuce",
                                "correct": false
                            },
                            {
                                "text": "znamená to samé, co intenzivní distribuce",
                                "correct": false
                            },
                            {
                                "text": "se v marketingu nepoužívá",
                                "correct": false
                            }
                        ]
                    },
                    {
                        "text": "283. Marketingové cíle by měly být tzv. SMART. Znamená to, že by měly být:",
                        "answers": [
                            {
                                "text": "Dosažitelné",
                                "correct": true
                            },
                            {
                                "text": "Inteligentní",
                                "correct": false
                            },
                            {
                                "text": "Nadřazené firemním cílům",
                                "correct": false
                            },
                            {
                                "text": "Měřitelné",
                                "correct": true
                            },
                            {
                                "text": "Konkrétní",
                                "correct": true
                            }
                        ]
                    },
                    {
                        "text": "284. Při plánování se nebere v potaz oblast:",
                        "answers": [
                            {
                                "text": "výroby",
                                "correct": false
                            },
                            {
                                "text": "lidských zdrojů",
                                "correct": true
                            },
                            {
                                "text": "obnovy a údržby hmotného majetku",
                                "correct": false
                            },
                            {
                                "text": "nákupu",
                                "correct": false
                            }
                        ]
                    },
                    {
                        "text": "285.Pro firmu vyrábějící televize mohou být \"příležitostí\" v analýze SWOT následující položky:",
                        "answers": [
                            {
                                "text": "nové technologie (3D televize)",
                                "correct": true
                            },
                            {
                                "text": "vedoucí pozice na trhu plazmových televizí",
                                "correct": false
                            },
                            {
                                "text": "spuštění originální reklamní kampaně",
                                "correct": false
                            },
                            {
                                "text": "silná značka produktů oproti produktům konkurenčním",
                                "correct": false
                            },
                            {
                                "text": "vynikající distribuční síť firmy",
                                "correct": false
                            },
                            {
                                "text": "růst poptávky po velkoplošných televizích",
                                "correct": true
                            }
                        ]
                    },
                    {
                        "text": "286. Které položky patří do SWOT analýzy firmy X:",
                        "answers": [
                            {
                                "text": "technologie výrazně změnila podnikání na daném trhu",
                                "correct": true
                            },
                            {
                                "text": "konkurenční aktivita na daném trhu roste",
                                "correct": true
                            },
                            {
                                "text": "firma X chce investovat do reklamy více než konkurence",
                                "correct": false
                            },
                            {
                                "text": "poptávka se na daném trhu mění",
                                "correct": true
                            }
                        ]
                    },
                    {
                        "text": "287. Které položky patří do SWOT analýzy firmy X:",
                        "answers": [
                            {
                                "text": "technologie výrazně změnila podnikání na daném trhu",
                                "correct": true
                            },
                            {
                                "text": "firma X chce dosáhnout 15% podílu na trhu",
                                "correct": false
                            },
                            {
                                "text": "legislativa se na daném trhu zpřísňuje",
                                "correct": true
                            },
                            {
                                "text": "povědomí o značce firmy X je na daném trhu vysoké – Ústup konkurence z trhu",
                                "correct": true
                            },
                            {
                                "text": "Kvalita produktů podniku",
                                "correct": true
                            },
                            {
                                "text": "Růst poptávky po konkurenčních produktech",
                                "correct": true
                            },
                            {
                                "text": "Špatná image značky podniku",
                                "correct": true
                            }
                        ]
                    },
                    {
                        "text": "289. Které položky patří do SWOT analýzy firmy X:",
                        "answers": [
                            {
                                "text": "firma X má dominantní postavení na trhu",
                                "correct": true
                            },
                            {
                                "text": "povědomí o značce firmy X je na daném trhu vysoké",
                                "correct": true
                            },
                            {
                                "text": "poptávka se na daném trhu mění",
                                "correct": true
                            },
                            {
                                "text": "legislativa se na daném trhu zpřísňuje",
                                "correct": true
                            }
                        ]
                    },
                    {
                        "text": "290. Které faktory patří v rámci SWOT analýzy mezi \"příležitosti a hrozby\"?",
                        "answers": [
                            {
                                "text": "kvalifikovaní zaměstnanci podniku",
                                "correct": false
                            },
                            {
                                "text": "finanční nestabilita podniku",
                                "correct": false
                            },
                            {
                                "text": "růst poptávky",
                                "correct": true
                            },
                            {
                                "text": "silná značka podniku",
                                "correct": false
                            },
                            {
                                "text": "posilující konkurence",
                                "correct": true
                            }
                        ]
                    },
                    {
                        "text": "291. Pro firmu vyrábějící hodinky mohou být \"hrozbou\" ve SWOT analýze následující položky:",
                        "answers": [
                            {
                                "text": "pokles poptávky po luxusních hodinkách v důsledku ekonomické recese",
                                "correct": true
                            },
                            {
                                "text": "relativně nízký rozpočet, který má firma na reklamu a propagaci",
                                "correct": false
                            },
                            {
                                "text": "nízká ziskovost u většiny produktů firmy",
                                "correct": false
                            },
                            {
                                "text": "rostoucí konkurence na trhu",
                                "correct": true
                            }
                        ]
                    },
                    {
                        "text": "292. Marketingový plán obvykle zahrnuje:",
                        "answers": [
                            {
                                "text": "Situační analýzu",
                                "correct": true
                            },
                            {
                                "text": "Marketingové cíle",
                                "correct": true
                            },
                            {
                                "text": "Ani jednu z uvedených možností",
                                "correct": false
                            },
                            {
                                "text": "Marketingovou strategii",
                                "correct": true
                            }
                        ]
                    },
                    {
                        "text": "293. Základy strategického řízení jsou:",
                        "answers": [
                            {
                                "text": "žádná z možností",
                                "correct": false
                            },
                            {
                                "text": "plánování marketingu, plánování výroby, plánování lidských zdrojů",
                                "correct": false
                            },
                            {
                                "text": "příležitosti a hrozby, silné a slabé stránky, hlavní výhody a hlavní nevýhody",
                                "correct": false
                            },
                            {
                                "text": "silné a slabé stránky, příležitosti a hrozby",
                                "correct": true
                            }
                        ]
                    },
                    {
                        "text": "294. SWOT analýza zahrnuje rovněž návrh marketingového mixu.",
                        "answers": [
                            {
                                "text": "            ANO",
                                "correct": false
                            },
                            {
                                "text": "            NE",
                                "correct": true
                            },
                            {
                                "text": "v295. SWOT analýza zahrnuje rovněž návrh marketingové strategie.",
                                "correct": false
                            },
                            {
                                "text": "ANO",
                                "correct": false
                            },
                            {
                                "text": "NE",
                                "correct": true
                            }
                        ]
                    },
                    {
                        "text": "296. Které faktory patří v rámci SWOT analýzy mezi \"silné a slabé stránky\"?",
                        "answers": [
                            {
                                "text": "Špatná image značky podniku",
                                "correct": true
                            },
                            {
                                "text": "Ústup konkurence z trhu",
                                "correct": false
                            },
                            {
                                "text": "Růst poptávky na konkurenčních produktech",
                                "correct": false
                            },
                            {
                                "text": "Pokles poptávky v důsledku recese",
                                "correct": false
                            }
                        ]
                    },
                    {
                        "text": "297. Situační analýza zahrnuje mimo jiné:",
                        "answers": [
                            {
                                "text": "stanovení marketingových cílů",
                                "correct": false
                            },
                            {
                                "text": "identifikaci konkurentů a jejich charakteristik",
                                "correct": true
                            },
                            {
                                "text": "popis trhu",
                                "correct": true
                            },
                            {
                                "text": "odhad vývoje trhu",
                                "correct": true
                            },
                            {
                                "text": "stanovení podnikových cílů",
                                "correct": false
                            }
                        ]
                    },
                    {
                        "text": "298. Ansoffova matice zahrnuje následující strategie:",
                        "answers": [
                            {
                                "text": "Lokální strategii",
                                "correct": false
                            },
                            {
                                "text": "Strategii vývoje produktu",
                                "correct": true
                            },
                            {
                                "text": "Strategii diverzifikace",
                                "correct": true
                            },
                            {
                                "text": "Globální strategii",
                                "correct": false
                            },
                            {
                                "text": "Strategii nízkých cen",
                                "correct": false
                            }
                        ]
                    },
                    {
                        "text": "299. Mezi růstové strategie tzv. Ansoffovy matice patří:",
                        "answers": [
                            {
                                "text": "Diverzifikace",
                                "correct": true
                            },
                            {
                                "text": "Penetrace trhu",
                                "correct": true
                            },
                            {
                                "text": "Vývoj výrobku",
                                "correct": true
                            },
                            {
                                "text": "Vývoj trhu",
                                "correct": true
                            },
                            {
                                "text": "Extenze značky",
                                "correct": false
                            }
                        ]
                    },
                    {
                        "text": "300. Strategie diverzifikace může být popsána následujícím způsobem:",
                        "answers": [
                            {
                                "text": "Podnik hledá nové trhy pro nové výrobky",
                                "correct": true
                            },
                            {
                                "text": "Podnik zavádí prodej zdokonalených výrobků na současných trzích",
                                "correct": false
                            },
                            {
                                "text": "Podnik diverzifikuje riziko neúspěchu vývojem nových výrobků, které nabízí na současných trzích",
                                "correct": false
                            },
                            {
                                "text": "Podnik diverzifikuje riziko neúspěchu hledáním nových trhů pro své běžně prodávané výrobky",
                                "correct": false
                            },
                            {
                                "text": "žádná z předchozích",
                                "correct": false
                            }
                        ]
                    },
                    {
                        "text": "301. Mezi typicky kolektivistické společnosti podle Hofstedeho patří:",
                        "answers": [
                            {
                                "text": "USA",
                                "correct": false
                            },
                            {
                                "text": "Čína",
                                "correct": true
                            },
                            {
                                "text": "Austrálie",
                                "correct": false
                            },
                            {
                                "text": "Indie",
                                "correct": true
                            }
                        ]
                    },
                    {
                        "text": "302. Mezi typické nástroje PR patří:",
                        "answers": [
                            {
                                "text": "tisková konference",
                                "correct": true
                            },
                            {
                                "text": "emailing",
                                "correct": false
                            },
                            {
                                "text": "slevy a slevové kupóny",
                                "correct": false
                            },
                            {
                                "text": "product placement",
                                "correct": false
                            },
                            {
                                "text": "sampling",
                                "correct": false
                            },
                            {
                                "text": "telemarketing",
                                "correct": false
                            },
                            {
                                "text": "prémie a dárky",
                                "correct": false
                            },
                            {
                                "text": "tisková zpráva",
                                "correct": true
                            },
                            {
                                "text": "soutěže",
                                "correct": false
                            },
                            {
                                "text": "krizová komunikace",
                                "correct": true
                            },
                            {
                                "text": "výhodná balení",
                                "correct": false
                            }
                        ]
                    },
                    {
                        "text": "303. Základním nástrojem PR oddělení je:",
                        "answers": [
                            {
                                "text": "            Tisková zpráva",
                                "correct": true
                            }
                        ]
                    },
                    {
                        "text": "304. Mezi 3 základní distribuční strategie podle počtu mezičlánků patří:",
                        "answers": [
                            {
                                "text": "strategie intenzivní distribuce",
                                "correct": true
                            },
                            {
                                "text": "strategie nominální distribuce",
                                "correct": false
                            },
                            {
                                "text": "strategie konvenční distribuce",
                                "correct": false
                            },
                            {
                                "text": "strategie vertikální distribuce",
                                "correct": false
                            }
                        ]
                    },
                    {
                        "text": "305. Pro cenu platí:",
                        "answers": [
                            {
                                "text": "cena musí odpovídat positioningu značky",
                                "correct": true
                            },
                            {
                                "text": "cena nemá vazbu na positioning značky",
                                "correct": false
                            },
                            {
                                "text": "cena je jediné „P“ marketingového mixu, které pro firmu představuje výnosy",
                                "correct": true
                            },
                            {
                                "text": "cena není součástí marketingového mixu",
                                "correct": false
                            },
                            {
                                "text": "cena je jednoznačně nejflexibilnějším nástrojem marketingového mixu",
                                "correct": true
                            },
                            {
                                "text": "cena je jednoznačně nejméně pružným nástrojem marketingového mixu",
                                "correct": false
                            }
                        ]
                    },
                    {
                        "text": "306. Flagship store/vlajková prodejna je:",
                        "answers": [
                            {
                                "text": "Jedná se po prodejnu, která je hlavní pro danou značku, prodává nejvíce zboží, je větší než ostatní obchody značky atd.",
                                "correct": true
                            },
                            {
                                "text": "Prodejna, která je určitým ztělesněním značky a která má zajistit nadšení pro danou značku",
                                "correct": true
                            },
                            {
                                "text": "Maloobchodní prodejna, která prodává výhradně privátní značky",
                                "correct": false
                            },
                            {
                                "text": "Jakákoliv maloobchodní prodejna",
                                "correct": false
                            },
                            {
                                "text": "Jakákoliv velkoobchodní prodejna",
                                "correct": false
                            }
                        ]
                    },
                    {
                        "text": "307. Jako guerillový marketing bývají označovány:",
                        "answers": [
                            {
                                "text": "            kampaně využívající sampling",
                                "correct": false
                            },
                            {
                                "text": "            konvenční reklamní kampaně v televizi",
                                "correct": false
                            },
                            {
                                "text": "            kampaně využívající tradiční média",
                                "correct": false
                            },
                            {
                                "text": "            kampaně využívající outdoorovou metodu",
                                "correct": false
                            },
                            {
                                "text": "            nekonvenční až kontroverzní komunikační kampaně, které mají cílovou skupinu razantním způsobem překvapit",
                                "correct": true
                            }
                        ]
                    },
                    {
                        "text": "308. Mezi základní ukazatele efektivity webových stránek patří:",
                        "answers": [
                            {
                                "text": "míra okamžitého opuštění",
                                "correct": true
                            },
                            {
                                "text": "čas strávený na stránce",
                                "correct": true
                            },
                            {
                                "text": "čas strávený mimo stránku",
                                "correct": false
                            },
                            {
                                "text": "kontroverzní poměr",
                                "correct": false
                            },
                            {
                                "text": "konverzní poměr",
                                "correct": true
                            }
                        ]
                    },
                    {
                        "text": "309. Cyklus produktu předpokládá, že:",
                        "answers": [
                            {
                                "text": "během fáze zralosti se na trhu objeví nový produkt, který se stane pro stávající produkt substitutem",
                                "correct": true
                            },
                            {
                                "text": "fáze růstu je typicky nejdelší stádium z celého cyklu",
                                "correct": false
                            },
                            {
                                "text": "fáze zralosti je typicky nejdelší stádium z celého cyklu",
                                "correct": true
                            },
                            {
                                "text": "fáze uvedení na trh je typicky nejdelší stádium z celého cyklu",
                                "correct": false
                            }
                        ]
                    },
                    {
                        "text": "310. Pro „bídné psy“ v rámci BCG matice platí:",
                        "answers": [
                            {
                                "text": "mají nízký relativní tržní podíl na rychle rostoucím trhu",
                                "correct": false
                            },
                            {
                                "text": "jedná se obvykle o produkty ve fázi úpadku, do který se firmě nevyplácí dále investovat",
                                "correct": true
                            },
                            {
                                "text": "mají vysoký relativní tržní podíl na pomalu rostoucím trhu",
                                "correct": false
                            },
                            {
                                "text": "mají nízký relativní podíl na pomalu rostoucím trhu",
                                "correct": true
                            },
                            {
                                "text": "jedná se o zavedené produkty na zralém trhu, které již nevyžadují větší investice",
                                "correct": false
                            },
                            {
                                "text": "mají nízký relativní podíl na rychle rostoucím trhu",
                                "correct": false
                            },
                            {
                                "text": "mají vysoký relativní tržní podíl na rychle rostoucím trhu",
                                "correct": false
                            }
                        ]
                    },
                    {
                        "text": "311. Targeting:",
                        "answers": [
                            {
                                "text": "je to samé co segmentace trhu",
                                "correct": false
                            },
                            {
                                "text": "je proces výběru segmentu, na který se chce firma zaměřit",
                                "correct": true
                            },
                            {
                                "text": "rozděluje zákazníky na základě vybraných kritérií do homogenních skupin, které vykazují podobné potřeby a chování",
                                "correct": false
                            },
                            {
                                "text": "je druhou fází cíleného marketingu",
                                "correct": true
                            },
                            {
                                "text": "je první fází nediferencovaného (masového) marketingu",
                                "correct": false
                            },
                            {
                                "text": "je proces, při kterém se firma snaží ovlivňovat, jak má být její značka vnímána cílovým zákaznickým segmentem",
                                "correct": false
                            },
                            {
                                "text": "je jednou z metod kvantitativního výzkumu",
                                "correct": false
                            }
                        ]
                    },
                    {
                        "text": "312. Okolí podniku může být:",
                        "answers": [
                            {
                                "text": "etické",
                                "correct": true
                            },
                            {
                                "text": "ekonomické",
                                "correct": true
                            },
                            {
                                "text": "politické",
                                "correct": true
                            },
                            {
                                "text": "sociální",
                                "correct": true
                            }
                        ]
                    },
                    {
                        "text": "313. Pro B2B trhy je charakteristické:",
                        "answers": [
                            {
                                "text": "firmy zde typicky využívají prodej prostřednictvím maloobchodních prodejen",
                                "correct": false
                            },
                            {
                                "text": "cena jednotlivých zakázek na B2B trzích bývá typicky relativně vysoká",
                                "correct": true
                            },
                            {
                                "text": "produkty na B2B trzích bývají často složité, nestandardní a vyžadující individuální servis",
                                "correct": true
                            },
                            {
                                "text": "firmy zde typicky využívají prodej prostřednictvím vlastních prodejců",
                                "correct": true
                            },
                            {
                                "text": "firmy zde typicky využívají nepřímé distribuční cesty",
                                "correct": false
                            },
                            {
                                "text": "firmy zde typicky využívají přímé distribuční cesty",
                                "correct": true
                            },
                            {
                                "text": "cena jednotlivých zakázek na B2B trzích bývá typicky relativně nízká",
                                "correct": false
                            }
                        ]
                    },
                    {
                        "text": "313. Distribuce je součástí:",
                        "answers": [
                            {
                                "text": "výrobkového mixu",
                                "correct": false
                            },
                            {
                                "text": "komunikačního mixu",
                                "correct": false
                            },
                            {
                                "text": "logistického mixu",
                                "correct": false
                            },
                            {
                                "text": "cenového mixu",
                                "correct": false
                            },
                            {
                                "text": "marketingového mixu",
                                "correct": true
                            }
                        ]
                    },
                    {
                        "text": "314. Přirážková metoda tvorby cen:",
                        "answers": [
                            {
                                "text": "zohledňuje poptávku",
                                "correct": false
                            },
                            {
                                "text": "je v obecné rovině nejvhodnějším a nejziskovějším přístupem k cenotvorbě",
                                "correct": false
                            },
                            {
                                "text": "zohledňuje konkurenci",
                                "correct": false
                            },
                            {
                                "text": "její hlavní výhodou je jednoduchost stanovení ceny",
                                "correct": true
                            },
                            {
                                "text": "její hlavní nevýhodou je složitost",
                                "correct": false
                            },
                            {
                                "text": "je přístup k cenotvorbě, kdy firma navyšuje jednotkové náklady o požadovanou ziskovou marži",
                                "correct": true
                            },
                            {
                                "text": "nezohledňuje poptávku",
                                "correct": true
                            },
                            {
                                "text": "opomíjí konkurenci",
                                "correct": true
                            }
                        ]
                    },
                    {
                        "text": "315. Rozpoznání značky (brand recognition):",
                        "answers": [
                            {
                                "text": "nemá žádný vliv na kupní rozhodovací proces zákazníka",
                                "correct": false
                            },
                            {
                                "text": "bývá definováno jako míra, se kterou jsou spotřebitelé schopni vizuálně identifikovat značku v místě prodeje",
                                "correct": true
                            },
                            {
                                "text": "je to samé co TOMA (top of mind awareness)",
                                "correct": false
                            },
                            {
                                "text": "je to samé co vybavení značky (brand recall)",
                                "correct": false
                            },
                            {
                                "text": "určuje, zda si zákazníci danou značku vybaví, když uvažují o příslušné produktové kategorii",
                                "correct": false
                            },
                            {
                                "text": "hraje klíčovou roli mimo jiné při rutinních nákupech",
                                "correct": true
                            }
                        ]
                    },
                    {
                        "text": "316. Kupní rozhodovací proces zákazníků:",
                        "answers": [
                            {
                                "text": "jeho délka se významně liší podle toho, jaký význam danému nákupu zákazníci připisují",
                                "correct": true
                            },
                            {
                                "text": "jeho délka se významně liší v závislosti na produktové kategorii",
                                "correct": true
                            },
                            {
                                "text": "u méně významných nákupů bývá kupní rozhodovací proces složitý a dlouhý",
                                "correct": false
                            },
                            {
                                "text": "u méně významných nákupů je kupní rozhodovací proces krátký",
                                "correct": true
                            },
                            {
                                "text": "u méně významných nákupů jsou produkty často kupovány rutině nebo impulzivně",
                                "correct": true
                            },
                            {
                                "text": "u významnějších nákupů mohou zákazníci po nákupu pociťovat kognitivní disonanci",
                                "correct": true
                            },
                            {
                                "text": "probíhá ve všech produktových kategoriích zcela stejně",
                                "correct": false
                            }
                        ]
                    },
                    {
                        "text": "317. Emotional selling proposition (ESP):",
                        "answers": [
                            {
                                "text": "je přístup k positioningu značky využívající určitý funkční užitek",
                                "correct": false
                            },
                            {
                                "text": "představuje jednu ze základních metod kvalitativního výzkumu",
                                "correct": false
                            },
                            {
                                "text": "představuje jeden ze základních přístupů k positioningu značky",
                                "correct": true
                            },
                            {
                                "text": "představuje jednu ze základních metod kvantitativního výzkumu",
                                "correct": false
                            },
                            {
                                "text": "představuje jeden ze základních přístupů k segmentaci trhu",
                                "correct": false
                            }
                        ]
                    },
                    {
                        "text": "318. Marketingový mix zahrnuje následující rozhodnutí:",
                        "answers": [
                            {
                                "text": "volbu zákazníků, na které chce firma cílit",
                                "correct": false
                            },
                            {
                                "text": "rozhodnutí o tom, jak chce firma udržovat svoji konkurenční výhodu",
                                "correct": false
                            },
                            {
                                "text": "rozhodnutí o podobě produktu",
                                "correct": true
                            },
                            {
                                "text": "rozhodnutí o dostupnosti produktu",
                                "correct": true
                            },
                            {
                                "text": "rozhodnutí o propagaci produktu",
                                "correct": true
                            },
                            {
                                "text": "rozhodnutí o ceně produktu",
                                "correct": true
                            }
                        ]
                    },
                    {
                        "text": "319. CRM je označení pro:",
                        "answers": [
                            {
                                "text": "společenskou odpovědnost firem",
                                "correct": false
                            },
                            {
                                "text": "marketingovou komunikaci v online prostředí",
                                "correct": false
                            },
                            {
                                "text": "marketingový mix",
                                "correct": false
                            },
                            {
                                "text": "udržování dlouhodobých ziskových vztahů se stávajícími zákazníky",
                                "correct": true
                            }
                        ]
                    },
                    {
                        "text": "320. Dotazování:",
                        "answers": [
                            {
                                "text": "může probíhat písemnou formou",
                                "correct": true
                            },
                            {
                                "text": "patří mezi nejčastěji využívané metody sekundárního výzkumu",
                                "correct": false
                            },
                            {
                                "text": "patří mezi nejčastěji využívané metody primárního výzkumu",
                                "correct": true
                            },
                            {
                                "text": "může probíhat osobní formou (bezprostředním kontaktem mezi tazatelem a respondentem)",
                                "correct": true
                            },
                            {
                                "text": "může probíhat online",
                                "correct": true
                            },
                            {
                                "text": "může probíhat telefonicky",
                                "correct": true
                            }
                        ]
                    },
                    {
                        "text": "321. Firma cílí na zákazníky, kteří jsou nejčastějšími uživateli v dané produktové kategorii a kteří jsou zároveň loajální ke značkám konkurence….",
                        "answers": [
                            {
                                "text": "demografická",
                                "correct": false
                            },
                            {
                                "text": "psychografická",
                                "correct": false
                            },
                            {
                                "text": "geografická",
                                "correct": false
                            },
                            {
                                "text": "behaviorální",
                                "correct": true
                            }
                        ]
                    },
                    {
                        "text": "322. Nediferencovaný (masový) marketing:",
                        "answers": [
                            {
                                "text": "znamená, že firma rozděluje trh na několik segmentů, a každý z vybraných segmentů pak oslovuje specifickou nabídku",
                                "correct": false
                            },
                            {
                                "text": "znamená, že firma oslovuje celý trh jednou standardizovanou nabídkou",
                                "correct": true
                            },
                            {
                                "text": "znamená, že firma oslovuje trh několika odlišnými nabídkami",
                                "correct": false
                            },
                            {
                                "text": "je typický pro komoditní trhy, kde jsou možnosti diferenciace nabídky velmi omezené",
                                "correct": true
                            },
                            {
                                "text": "znamená přizpůsobování produktu individuálním potřebám každého jednotlivého zákazníka",
                                "correct": false
                            }
                        ]
                    },
                    {
                        "text": "323. Mezi psychografická segmentační kritéria patří:",
                        "answers": [
                            {
                                "text": "městská čtvrť, ve které zákazníci žijí",
                                "correct": false
                            },
                            {
                                "text": "míra užívání produktu",
                                "correct": false
                            },
                            {
                                "text": "příjem",
                                "correct": false
                            },
                            {
                                "text": "loajalita ke značkám",
                                "correct": false
                            },
                            {
                                "text": "pohlaví",
                                "correct": false
                            },
                            {
                                "text": "aktuální lokalita, ve které se zákazníci nacházejí",
                                "correct": false
                            },
                            {
                                "text": "míra užívání produktu",
                                "correct": false
                            },
                            {
                                "text": "rasa",
                                "correct": false
                            },
                            {
                                "text": "připravenost k nákupu",
                                "correct": false
                            },
                            {
                                "text": "žádná odpověď",
                                "correct": true
                            }
                        ]
                    },
                    {
                        "text": "324. Pro public relations platí:",
                        "answers": [
                            {
                                "text": "v jejich nejužším pojetí je lze definovat jako budování vztahů s médii",
                                "correct": true
                            },
                            {
                                "text": "mezi jejich klíčové nástroje patří kupóny, sampling či slevy",
                                "correct": false
                            },
                            {
                                "text": "mezi jejich klíčové nástroje patří tisková zpráva a tisková konference",
                                "correct": true
                            },
                            {
                                "text": "v jejich nejužším pojetí je lze definovat jako komunikaci v místě prodeje",
                                "correct": false
                            },
                            {
                                "text": "za jejich součást lze považovat krizovou komunikaci",
                                "correct": true
                            },
                            {
                                "text": "jde o nástroj komunikačního mixu, který lze ztotožnit s osobním prodejem",
                                "correct": false
                            },
                            {
                                "text": "jejich cílem je vyvolávání pozitivní publicity a řízení případné publicity negativní",
                                "correct": true
                            },
                            {
                                "text": "mezi jejich klíčové nástroje patří product placement",
                                "correct": false
                            }
                        ]
                    },
                    {
                        "text": "325. PEST analýza:",
                        "answers": [
                            {
                                "text": "zahrnuje klíčové vlivy marketingového mikroprostředí",
                                "correct": false
                            },
                            {
                                "text": "zahrnuje klíčové vlivy marketingového makroprostředí",
                                "correct": true
                            },
                            {
                                "text": "zahrnuje klíčové vlivy zákazníků na daném trhu",
                                "correct": false
                            },
                            {
                                "text": "zahrnuje klíčové vlivy dodavatelů na daném trhu",
                                "correct": false
                            },
                            {
                                "text": "zahrnuje klíčové vlivy konkurence na daném trhu",
                                "correct": false
                            },
                            {
                                "text": "zahrnuje klíčové technologické vlivy na daném trhu",
                                "correct": true
                            },
                            {
                                "text": "zahrnuje klíčové vlivy distributorů na daném trhu",
                                "correct": false
                            },
                            {
                                "text": "zahrnuje klíčové sociálně-kulturní vlivy na daném trhu",
                                "correct": true
                            },
                            {
                                "text": "zahrnuje klíčové ekonomické vlivy na daném trhu",
                                "correct": true
                            },
                            {
                                "text": "zahrnuje klíčové politicko-právní vlivy na daném trhu",
                                "correct": true
                            }
                        ]
                    },
                    {
                        "text": "326. Strategie deštníkové značky:",
                        "answers": [
                            {
                                "text": "nevýhodou této strategie jsou vysoké náklady dané nutnosti budovat větší množství individuálních značek",
                                "correct": false
                            },
                            {
                                "text": "výhodou této strategie jsou nízké náklady dané zejména úsporou reklamních a dalších marketingových výdajů",
                                "correct": true
                            },
                            {
                                "text": "umožňuje oslovovat různé segmenty zákazníků různými značkami (a tedy i různými nabídkami)",
                                "correct": false
                            },
                            {
                                "text": "je strategie, kterou používá např. společnost Philips",
                                "correct": true
                            },
                            {
                                "text": "je prodej všech produktů firmy pod jedinou silnou značkou",
                                "correct": true
                            },
                            {
                                "text": "je totožná se strategií individuálních značek",
                                "correct": false
                            }
                        ]
                    },
                    {
                        "text": "327. SWOT analýza zahrnuje:",
                        "answers": [
                            {
                                "text": "analýzu slabých stránek",
                                "correct": true
                            },
                            {
                                "text": "návrh nových distribučních cest",
                                "correct": false
                            },
                            {
                                "text": "návrh nově komunikační kampaně",
                                "correct": false
                            },
                            {
                                "text": "analýzu hrozeb",
                                "correct": true
                            }
                        ]
                    },
                    {
                        "text": "328. Mezi přímé distribuční cesty patří:",
                        "answers": [
                            {
                                "text": "prodej prostřednictvím velkoobchodu",
                                "correct": false
                            },
                            {
                                "text": "prodej s využitím franšízingu",
                                "correct": false
                            },
                            {
                                "text": "prodej prostřednictvím vlastních prodejen",
                                "correct": true
                            },
                            {
                                "text": "prodej prostřednictvím vlastního e-shopu",
                                "correct": true
                            },
                            {
                                "text": "prodej prostřednictvím katalogu",
                                "correct": true
                            },
                            {
                                "text": "prodej prostřednictvím hypermarketu",
                                "correct": false
                            },
                            {
                                "text": "prodej prostřednictvím vlastních prodejců",
                                "correct": true
                            },
                            {
                                "text": "prodej prostřednictvím supermarketu",
                                "correct": false
                            },
                            {
                                "text": "prodej prostřednictvím telemarketingu",
                                "correct": true
                            },
                            {
                                "text": "prodej prostřednictvím vlastních prodejních automatů",
                                "correct": true
                            }
                        ]
                    },
                    {
                        "text": "329. M-commerce:",
                        "answers": [
                            {
                                "text": "lze řadit mezi nepřímé distribuční cesty",
                                "correct": false
                            },
                            {
                                "text": "jeho význam v posledních letech dynamicky narůstá",
                                "correct": true
                            },
                            {
                                "text": "je prodej prostřednictvím mobilního zařízení, tedy zejména prostřednictvím mobilního telefonu",
                                "correct": true
                            },
                            {
                                "text": "jeho význam v posledních letech setrvale klesá",
                                "correct": false
                            },
                            {
                                "text": "lze řadit mezi přímé distribuční cesty",
                                "correct": true
                            }
                        ]
                    },
                    {
                        "text": "330. Marketingové koncepce:",
                        "answers": [
                            {
                                "text": "vychází z předpokladu, že úspěch firmy závisí na rozpoznávání potřeb zákazníků a schopnosti uspokojovat tyto potřeby lépe než konkurence",
                                "correct": true
                            },
                            {
                                "text": "v jejím centru pozornosti jsou potřeby zákazníků",
                                "correct": true
                            },
                            {
                                "text": "se zaměřuje primárně na prodej již vyrobených výrobků",
                                "correct": false
                            },
                            {
                                "text": "klade primární důraz na efektivitu výroby a snižování nákladů",
                                "correct": false
                            }
                        ]
                    },
                    {
                        "text": "331. CRM je označení pro:",
                        "answers": [
                            {
                                "text": "udržování dlouhodobých ziskových vztahů se stávajícími zákazníky",
                                "correct": true
                            },
                            {
                                "text": "marketingovou komunikaci v online prostředí",
                                "correct": false
                            },
                            {
                                "text": "neetické aktivity firem",
                                "correct": false
                            },
                            {
                                "text": "marketingový mix",
                                "correct": false
                            },
                            {
                                "text": "společenskou odpovědnost firem",
                                "correct": false
                            }
                        ]
                    },
                    {
                        "text": "332.Teorie přijímání inovací předpokládá, že:",
                        "answers": [
                            {
                                "text": "jako poslední přijímají nový produkt opozdilci",
                                "correct": true
                            },
                            {
                                "text": "jako poslední přijímají nový produkt early adapters",
                                "correct": false
                            },
                            {
                                "text": "pokud na trhu zůstávají jen opozdilci, vstupuje produkt do fáze úpadku",
                                "correct": true
                            },
                            {
                                "text": "pokud na trhu zůstávají jen opozdilci, vstupuje produkt do fáze růstu",
                                "correct": false
                            },
                            {
                                "text": "nejprve nový produkt vyzkouší inovátoři, kteří obvykle tvoří jen velmi malé procento potenciálních zákazníků",
                                "correct": true
                            },
                            {
                                "text": "inovátoři produkt kupují hned po jeho uvedení na trh, ve fázi růstu produkt oslovuje early adopters",
                                "correct": true
                            },
                            {
                                "text": "nejprve nový produkt vyzkouší většina, která obvykle tvoří jen velmi malé procento potenciálních zákazníků",
                                "correct": false
                            }
                        ]
                    },
                    {
                        "text": "333. Vybavení značky (brand recall)",
                        "answers": [
                            {
                                "text": "jeho ideální verzí je TOMA (top of mind awareness)",
                                "correct": true
                            },
                            {
                                "text": "nemá žádný vliv na kupní rozhodovací proces zákazníka",
                                "correct": false
                            },
                            {
                                "text": "bývá definováno jako míra, se kterou jsou spotřebitelé schopni vizuálně identifikovat značku v místě prodeje",
                                "correct": false
                            },
                            {
                                "text": "určuje, zda si zákazníci danou značku vybaví, když uvažují o příslušné produktové kategorii",
                                "correct": true
                            },
                            {
                                "text": "je to samé, co rozpoznání značky (brand recognition)",
                                "correct": false
                            }
                        ]
                    },
                    {
                        "text": "334. Mezi silné či slabé stránky v rámci SWOT analýzy patří:",
                        "answers": [
                            {
                                "text": "vysoká či nízká kvalita produktu firmy",
                                "correct": true
                            },
                            {
                                "text": "nové technologie na trhu",
                                "correct": false
                            },
                            {
                                "text": "velký či malý marketingový rozpočet firmy",
                                "correct": true
                            },
                            {
                                "text": "pozitivní či negativní změny v kupní síle zákazníků",
                                "correct": false
                            }
                        ]
                    },
                    {
                        "text": "335. Mezi klíčové předpoklady efektivní segmentace patří:",
                        "answers": [
                            {
                                "text": "zákazníci v každém jednotlivém segmentu by měli být co nejodlišnější, pokud jde o potřeby, chování atp.",
                                "correct": false
                            },
                            {
                                "text": "zákazníci v každém jednotlivém segmentu by si měli být podobní, pokud jde o potřeby, chování atp.",
                                "correct": true
                            },
                            {
                                "text": "vnější heterogenita segmentů",
                                "correct": true
                            },
                            {
                                "text": "vnější homogenita segmentů",
                                "correct": false
                            },
                            {
                                "text": "vnitřní homogenita segmentů",
                                "correct": true
                            },
                            {
                                "text": "vnitřní heterogenita segmentů",
                                "correct": false
                            },
                            {
                                "text": "segmenty by měly být navzájem co nejpodobnější",
                                "correct": false
                            },
                            {
                                "text": "segmenty by měly být navzájem odlišné",
                                "correct": true
                            }
                        ]
                    },
                    {
                        "text": "336. Product placement:",
                        "answers": [
                            {
                                "text": "je volba „pozice“, kterou má určitá značka zaujímat v mysli zákazníků",
                                "correct": false
                            },
                            {
                                "text": "je umisťování produktů do filmů, televizních pořadů, seriálů a dalších audiovizuálních děl",
                                "correct": true
                            },
                            {
                                "text": "je označení pro způsob umístění produktu v maloobchodních prodejnách",
                                "correct": false
                            },
                            {
                                "text": "je jednou z forem reklamy",
                                "correct": true
                            },
                            {
                                "text": "je označení pro způsob umístění produktu do vhodného obalu",
                                "correct": false
                            }
                        ]
                    },
                    {
                        "text": "337. Strategie pull:",
                        "answers": [
                            {
                                "text": "jejím cílem je motivovat distributory, aby nabízeli produkty dané značky ve svých provozovnách",
                                "correct": false
                            },
                            {
                                "text": "odpovídá strategii push",
                                "correct": false
                            },
                            {
                                "text": "je zaměřena na budování spotřebitelské nabídky",
                                "correct": false
                            },
                            {
                                "text": "využívá velmi často reklamy, podpory prodeje a dalších nástrojů cílených na konečné zákazníky",
                                "correct": true
                            }
                        ]
                    },
                    {
                        "text": "338. Kvantitativní výzkum:",
                        "answers": [
                            {
                                "text": "dokáže jí do mnohem větší hloubky než-li výzkum kvalitativní",
                                "correct": false
                            },
                            {
                                "text": "umožňuje statistické zpracování a zobecnění na celou populaci",
                                "correct": true
                            },
                            {
                                "text": "pracuje zpravidla s velkými reprezentativními vzorky respondentů (v řádu stovek i tisíců)",
                                "correct": true
                            },
                            {
                                "text": "zabývá se typicky problémy které nelze jednoduše kvantifikovat",
                                "correct": false
                            },
                            {
                                "text": "měří intenzitu zkoumaných jevů",
                                "correct": true
                            },
                            {
                                "text": "nezkoumá intenzitu zkoumaných jevů, ale spíše příčiny a vztahy",
                                "correct": false
                            },
                            {
                                "text": "zabývá se primárně procesy probíhajícími v mozku zákazníka",
                                "correct": false
                            },
                            {
                                "text": "odpovídá typicky na otázku “Kolik?”",
                                "correct": true
                            },
                            {
                                "text": "jeho výsledkem jsou popisné měřitelné informace",
                                "correct": true
                            }
                        ]
                    },
                    {
                        "text": "339. základními metodami primárního marketingového výzkumu jsou:",
                        "answers": [
                            {
                                "text": "rešerše výročních zpráv firem",
                                "correct": false
                            },
                            {
                                "text": "dotazování",
                                "correct": true
                            },
                            {
                                "text": "pozorování",
                                "correct": true
                            },
                            {
                                "text": "experiment",
                                "correct": true
                            },
                            {
                                "text": "rešerše publikací asociací a vládních agentur",
                                "correct": false
                            }
                        ]
                    },
                    {
                        "text": "340. Repositioning značky:",
                        "answers": [
                            {
                                "text": "je označením pro změnu umístění produktu dané značky v regále maloobchodních řetězců",
                                "correct": false
                            },
                            {
                                "text": "je označením pro změnu „pozice“, kterou má značka zaujmout v mysli cílové skupiny oproti značkám konkurenčním",
                                "correct": true
                            },
                            {
                                "text": "představuje krok, ke kterému by marketéři neměli nikdy přistupovat",
                                "correct": false
                            },
                            {
                                "text": "je označení situace, kdy se firma snaží umístit zboží do nových prodejen",
                                "correct": false
                            }
                        ]
                    },
                    {
                        "text": "341. Produktová koncepce:",
                        "answers": [
                            {
                                "text": "je uplatňována primárně u luxusních produktů",
                                "correct": false
                            },
                            {
                                "text": "vychází z předpokladu, že úspěch firmy závisí na rozpoznávání potřeb zákazníků a schopnosti uspokojovat tyto potřeby lépe než konkurence",
                                "correct": false
                            },
                            {
                                "text": "v jejím centru pozornosti jsou potřeby zákazníků",
                                "correct": false
                            },
                            {
                                "text": "předpokládá, že úspěch firmy závisí primárně na její prodejní a propagační činnosti",
                                "correct": false
                            },
                            {
                                "text": "se zaměřuje primárně na prodej již vyrobených produktů",
                                "correct": false
                            },
                            {
                                "text": "v jejím centru pozornosti je konkurence",
                                "correct": false
                            },
                            {
                                "text": "vychází z předpokladu, že zákazníci preferují levné a široce dostupné produkty",
                                "correct": false
                            },
                            {
                                "text": "je úzce spojena s tzv. tržní orientací",
                                "correct": false
                            },
                            {
                                "text": "se zaměřuje primárně na kvalitu produktu a jeho neustálé zdokonalování",
                                "correct": true
                            },
                            {
                                "text": "je přístup k trhu založený na agresivním prodeji",
                                "correct": false
                            },
                            {
                                "text": "vychází z předpokladu, že zdokonalený produkt si najde svého zákazníka sám",
                                "correct": true
                            },
                            {
                                "text": "vychází z předpokladu, že zákazníci požadují produkty nejvyšší kvality",
                                "correct": true
                            },
                            {
                                "text": "klade primární důraz na efektivitu výroby a snižování nákladů",
                                "correct": false
                            },
                            {
                                "text": "je spojena s rizikem tzv. marketingové krátkozrakosti (marketing myopia)",
                                "correct": true
                            },
                            {
                                "text": "podle této koncepce se firmy mají soustředit primárně na vytváření hodnoty pro zákazníka",
                                "correct": false
                            },
                            {
                                "text": "vychází z předpokladu, že zákazník je pasivní a musí být k nákupu donucen",
                                "correct": false
                            }
                        ]
                    },
                    {
                        "text": "342. Up-sellingové kampaně:",
                        "answers": [
                            {
                                "text": "jejich primárním cílem je akvizice nových zákazníků",
                                "correct": false
                            },
                            {
                                "text": "jejich cílem je navýšení objednávek zákazníků, a to nabídkou produktu souvisejícího či doplňkového",
                                "correct": false
                            },
                            {
                                "text": "jejich cílem je navýšení objednávek zákazníků, a to nabídkou vyšší verze produktu nebo rozšíření objednávky",
                                "correct": true
                            },
                            {
                                "text": "využívají často nástrojů direct marketing",
                                "correct": true
                            }
                        ]
                    },
                    {
                        "text": "343. Privátní značky:",
                        "answers": [
                            {
                                "text": "v České republice představují prodeje privátních značek přibližně 5% celkových tržeb potravin a drogerie",
                                "correct": false
                            },
                            {
                                "text": "v České republice představují prodeje privátních značek přibližně 80% celkových tržeb potravin a drogerie",
                                "correct": false
                            },
                            {
                                "text": "v České republice představují prodeje privátních značek přibližně 20% celkových tržeb potravin a drogerie",
                                "correct": true
                            },
                            {
                                "text": "v České republice představují prodeje privátních značek přibližně 50% celkových tržeb potravin a drogerie",
                                "correct": false
                            }
                        ]
                    },
                    {
                        "text": "344. Privátní značky",
                        "answers": [
                            {
                                "text": "cílí zejména na zákazníky, kteří nejsou citliví na cenu",
                                "correct": false
                            },
                            {
                                "text": "pro retailery představují významný nástroj, jak se odlišit od ostatních řetězců",
                                "correct": true
                            },
                            {
                                "text": "jsou značky maloobchodníků",
                                "correct": true
                            },
                            {
                                "text": "jsou značky výrobců",
                                "correct": false
                            },
                            {
                                "text": "často cílí na cenové citlivé zákazníky, ačkoliv to nemusí být pravidlem",
                                "correct": true
                            }
                        ]
                    },
                    {
                        "text": "344. Marketingová krátkozrakost:",
                        "answers": [
                            {
                                "text": "je důsledkem primárního zaměření na produkt (místo primárního zaměření na potřeby zákazníků)",
                                "correct": true
                            },
                            {
                                "text": "je spojena s tzv. prodejní koncepcí",
                                "correct": false
                            },
                            {
                                "text": "je spojena s tzv výrobní koncepcí",
                                "correct": false
                            },
                            {
                                "text": "je důsledkem primárního zaměření na potřeby zákazníků (místo primárního zaměření na produkt)",
                                "correct": false
                            },
                            {
                                "text": "je spojena s tzv. produktovou koncepcí",
                                "correct": true
                            },
                            {
                                "text": "je spojena s tzv. marketingovou koncepcí",
                                "correct": false
                            }
                        ]
                    },
                    {
                        "text": "345. Prodejní koncepce:",
                        "answers": [
                            {
                                "text": "vychází z předpokladu, že je zákazník pasivní a musí být k nákupu donucen",
                                "correct": true
                            },
                            {
                                "text": "vychází z předpokladu, že zákazníci preferují levné a široce dostupné produkty",
                                "correct": false
                            },
                            {
                                "text": "vychází z předpokladu, že zákazníci požadují produkty nejvyšší kvality",
                                "correct": false
                            },
                            {
                                "text": "vychází z předpokladu, že úspěch firmy závisí na rozpoznávání potřeb zákazníků a schopnosti uspokojovat tyto potřeby lépe než konkurence",
                                "correct": false
                            },
                            {
                                "text": "je spojena s rizikem tzv. marketingové krátkozrakosti (marketing myopia)",
                                "correct": false
                            },
                            {
                                "text": "předpokládá, že úspěch firmy závisí primárně na její prodejní a propagační činnosti",
                                "correct": true
                            },
                            {
                                "text": "klade primární důraz na efektivitu výroby a snižování nákladů",
                                "correct": false
                            },
                            {
                                "text": "podle této koncepce se firmy mají soustředit primárně na vytváření hodnoty pro zákazníka",
                                "correct": false
                            },
                            {
                                "text": "se zaměřuje primárně na kvalitu produktu a jeho neustálé zdokonalování",
                                "correct": false
                            },
                            {
                                "text": "je přístup k trhu založený primárně na agresivním prodeji",
                                "correct": true
                            },
                            {
                                "text": "v jejím centru pozornosti je konkurence",
                                "correct": false
                            },
                            {
                                "text": "vychází z předpokladu, že zdokonalený produkt si najde svého zákazníka sám",
                                "correct": false
                            },
                            {
                                "text": "v jejím centru pozornosti jsou potřeby zákazníků",
                                "correct": false
                            },
                            {
                                "text": "se zaměřuje primárně na prodej již vyrobených výrobků",
                                "correct": true
                            },
                            {
                                "text": "je úzce spojena s tzv. tržní orientací",
                                "correct": false
                            },
                            {
                                "text": "může být oprávněná v případech, kdy poptávka převažuje nad nabídkou (daný produkt je tedy v nedostatku)",
                                "correct": false
                            }
                        ]
                    },
                    {
                        "text": "346. WOM:",
                        "answers": [
                            {
                                "text": "může být výhradně negativní",
                                "correct": false
                            },
                            {
                                "text": "může být pozitivní i negativní",
                                "correct": true
                            },
                            {
                                "text": "může být výhradně pozitivní",
                                "correct": false
                            },
                            {
                                "text": "nabyl na významu v důsledku rozšíření internetu a sociálních sítí",
                                "correct": true
                            },
                            {
                                "text": "je označení pro šíření ústním podáním",
                                "correct": true
                            },
                            {
                                "text": "při nenaplnění očekávání zákazníků může pro firmu představovat zásadní problém",
                                "correct": true
                            },
                            {
                                "text": "představuje pro zákazníky jeden z nejdůvěryhodnějších zdrojů informací",
                                "correct": true
                            }
                        ]
                    },
                    {
                        "text": "347. Marketingové mikroprostředí zahrnuje následující faktory:",
                        "answers": [
                            {
                                "text": "sociálně-kulturní prostředí",
                                "correct": false
                            },
                            {
                                "text": "politicko-právní prostředí",
                                "correct": false
                            },
                            {
                                "text": "technologické a přírodní prostředí",
                                "correct": false
                            },
                            {
                                "text": "zákazníky",
                                "correct": true
                            },
                            {
                                "text": "dodavatele",
                                "correct": true
                            },
                            {
                                "text": "ekonomické prostředí",
                                "correct": false
                            },
                            {
                                "text": "distributory",
                                "correct": true
                            },
                            {
                                "text": "konkurenty",
                                "correct": true
                            }
                        ]
                    },
                    {
                        "text": "348. Marketingová koncepce:",
                        "answers": [
                            {
                                "text": "vychází z předpokladu, že zdokonalený produkt si najde svého zákazníka sám",
                                "correct": false
                            },
                            {
                                "text": "vychází z předpokladu, že zákazník je pasivní a musí být k nákupu donucen",
                                "correct": false
                            },
                            {
                                "text": "vychází z předpokladu, že zákazníci preferují levné a široce dostupné produkty",
                                "correct": false
                            },
                            {
                                "text": "vychází z předpokladu, že úspěch firmy závisí na rozpoznávání potřeb zákazníků a schopnosti uspokojovat tyto potřeby lépe než konkurence",
                                "correct": true
                            },
                            {
                                "text": "je spojena s rizikem tzv. marketingové krátkozrakosti (marketing myopia)",
                                "correct": false
                            },
                            {
                                "text": "se zaměřuje primárně na prodej již vyrobených produktů",
                                "correct": false
                            },
                            {
                                "text": "se zaměřuje primárně na kvalitu produktu a jeho neustálé zdokonalování",
                                "correct": false
                            },
                            {
                                "text": "podle této koncepce se firmy mají soustředit primárně na vytváření hodnoty pro zákazníka",
                                "correct": true
                            },
                            {
                                "text": "je úzce spojena s tzv. tržní orientací",
                                "correct": true
                            },
                            {
                                "text": "klade primární důraz na efektivitu výroby a snižování nákladů",
                                "correct": false
                            },
                            {
                                "text": "předpokládá, že úspěch firmy závisí primárně na její prodejní a propagační činnosti",
                                "correct": false
                            },
                            {
                                "text": "v jejím centru pozornosti jsou potřeby zákazníků",
                                "correct": true
                            }
                        ]
                    },
                    {
                        "text": "349. Referenční skupina:",
                        "answers": [
                            {
                                "text": "zahrnuje výlučně rodinu zákazníka",
                                "correct": false
                            },
                            {
                                "text": "referenční skupiny mohou mít na zákazníka a jeho kupní chování významný vliv",
                                "correct": true
                            },
                            {
                                "text": "referenční skupiny nemají na zákazníka a jeho kupní chování žádný vliv",
                                "correct": false
                            },
                            {
                                "text": "vztah zákazníka k referenční skupině může být výhradně pozitivní",
                                "correct": false
                            },
                            {
                                "text": "vztah zákazníka k referenční skupině může být výhradně negativní",
                                "correct": false
                            },
                            {
                                "text": "vztah zákazníka k referenční skupině může být pozitivní i negativní",
                                "correct": true
                            },
                            {
                                "text": "jedná se o skupinu lidí (případně i o jednotlivce), se kterými se zákazník nějakým způsobem poměřuje",
                                "correct": true
                            }
                        ]
                    },
                    {
                        "text": "350. Postoj:",
                        "answers": [
                            {
                                "text": "může být definován jako relativně trvalé uspořádání motivačních, emocionálních, percepčních a kognitivních procesů ve vztahu k určitému objektu",
                                "correct": true
                            },
                            {
                                "text": "zahrnuje výhradně behaviorální složku, tedy tendenci jedince jednat vzhledem k danému objektu určitým způsobem",
                                "correct": false
                            },
                            {
                                "text": "neovlivňuje žádným způsobem kupní chování zákazníka",
                                "correct": false
                            },
                            {
                                "text": "zahrnuje mimo jiné kognitivní složku",
                                "correct": true
                            },
                            {
                                "text": "zahrnuje mimo jiné emocionální složku",
                                "correct": true
                            },
                            {
                                "text": "zahrnuje mimo jiné behaviorální složku",
                                "correct": true
                            },
                            {
                                "text": "zahrnuje výhradně kognitivní složku, tedy názory a znalosti člověka o určitém objektu",
                                "correct": false
                            },
                            {
                                "text": "představuje způsob, jakým lidé ve vztahu k určitému objektu myslí, cítí a jednají",
                                "correct": true
                            }
                        ]
                    },
                    {
                        "text": "351. Výrobní koncepce",
                        "answers": [
                            {
                                "text": "vychází z předpokladu, že úspěch firmy závisí na rozpoznávání potřeb zákazníků a schopnosti uspokojovat tyto potřeby lépe než komunikace",
                                "correct": false
                            },
                            {
                                "text": "podle této koncepce se firmy mají soustředit primárně na vytváření hodnoty pro zákazníka",
                                "correct": false
                            },
                            {
                                "text": "je spojena s rizikem tzv. marketingové krátkozrakosti (marketing myopia)",
                                "correct": false
                            },
                            {
                                "text": "může být oprávněná v případech, kdy poptávka převažuje nad nabídkou (daný produkt je tedy v nedostatku)",
                                "correct": true
                            },
                            {
                                "text": "předpokládá, že úspěch firmy závisí primárně na její prodejní a propagační činnosti",
                                "correct": false
                            },
                            {
                                "text": "v jejím centru pozornosti je konkurence",
                                "correct": false
                            },
                            {
                                "text": "vychází z předpokladu, že zákazníci požadují produkty nejvyšší kvality",
                                "correct": false
                            },
                            {
                                "text": "je úzce spojena s tzv. tržní orientací",
                                "correct": false
                            },
                            {
                                "text": "je oprávněná v případech, kdy nabídka převažuje nad poptávkou",
                                "correct": false
                            },
                            {
                                "text": "se zaměřuje primárně na prodeji již vyrobených produktů",
                                "correct": false
                            }
                        ]
                    },
                    {
                        "text": "352. Které z následujících vět vystihují význam slova marketing?",
                        "answers": [
                            {
                                "text": "Marketing je v podstatě možné ztotožnit s reklamou",
                                "correct": false
                            },
                            {
                                "text": "Marketing je proces sloužící k identifikaci, anticipaci a uspokojování požadavků zákazníků, a to se ziskem",
                                "correct": true
                            },
                            {
                                "text": "Marketing je v podstatě možné ztotožnit s podporou prodeje",
                                "correct": false
                            },
                            {
                                "text": "Marketing je soubor procesů pro tvorbu, komunikaci, doručení a směnu nabídek, které přinášejí hodnotu zákazníkům",
                                "correct": true
                            },
                            {
                                "text": "Marketing je v podstatě možné ztotožnit s marketingovou komunikací",
                                "correct": false
                            }
                        ]
                    },
                    {
                        "text": "353. Porter ve svém modelu uvádí následující konkurenční síly:",
                        "answers": [
                            {
                                "text": "hrozbu substitutů",
                                "correct": true
                            },
                            {
                                "text": "hrozbu vstupu nových konkurentů",
                                "correct": true
                            },
                            {
                                "text": "konkurenci mezi jednotlivými manažery firmy",
                                "correct": false
                            },
                            {
                                "text": "vyjednávací sílu dodavatelů",
                                "correct": true
                            },
                            {
                                "text": "vyjednávací sílu odběratelů",
                                "correct": true
                            },
                            {
                                "text": "stávající konkurenci na trhu",
                                "correct": true
                            },
                            {
                                "text": "demografické změny",
                                "correct": false
                            },
                            {
                                "text": "technologické změny",
                                "correct": false
                            },
                            {
                                "text": "legislativní změny",
                                "correct": false
                            },
                            {
                                "text": "konkurenci mezi jednotlivými firemními odděleními",
                                "correct": false
                            }
                        ]
                    },
                    {
                        "text": "354. Marketingové makroprostředí zahrnuje následující faktory:",
                        "answers": [
                            {
                                "text": "distributory",
                                "correct": false
                            },
                            {
                                "text": "zákazníky",
                                "correct": false
                            },
                            {
                                "text": "konkurenty",
                                "correct": false
                            },
                            {
                                "text": "sociálně-kulturní prostředí",
                                "correct": true
                            },
                            {
                                "text": "politicko-právní prostředí",
                                "correct": true
                            },
                            {
                                "text": "ekonomické prostředí",
                                "correct": true
                            },
                            {
                                "text": "dodavatele",
                                "correct": false
                            }
                        ]
                    },
                    {
                        "text": "355. Porterův model:",
                        "answers": [
                            {
                                "text": "předjímá, že při vysokých bariérách pro vstup nových konkurentů bude profitabilita trhu spíše nižší",
                                "correct": false
                            },
                            {
                                "text": "zahrnuje pět konkurenčních sil",
                                "correct": true
                            },
                            {
                                "text": "předjímá, že při nízkých bariérách pro vstup nových konkurentů bude profitabilita trhu spíše nižší",
                                "correct": false
                            },
                            {
                                "text": "zahrnuje čtyři konkurenční síly",
                                "correct": false
                            },
                            {
                                "text": "intenzita jednotlivých konkurenčních sil nemá vliv na profitabilitu daného trhu",
                                "correct": false
                            },
                            {
                                "text": "předjímá, že při vysokých bariérách pro vstup konkurentů bude profitabilita na trhu spíše nižší",
                                "correct": false
                            },
                            {
                                "text": "intenzita jednotlivých konkurenčních sil předjímá profitabilitu trhu",
                                "correct": true
                            }
                        ]
                    },
                    {
                        "text": "356. Krátkodobý kapitál:",
                        "answers": [
                            {
                                "text": "je součástí vlastního kapitálu",
                                "correct": false
                            },
                            {
                                "text": "představuje pohledávky podniku",
                                "correct": false
                            },
                            {
                                "text": "není vhodný pro financování stálých aktiv",
                                "correct": true
                            },
                            {
                                "text": "jedná se o položku aktiv",
                                "correct": false
                            },
                            {
                                "text": "představuje náklady spojené s obchodováním, je to tzv. obchodní marže",
                                "correct": false
                            },
                            {
                                "text": "hodí se k financování oběžných aktiv",
                                "correct": true
                            }
                        ]
                    },
                    {
                        "text": "357. Je vlastní kapitál kapitálem dlouhodobým?",
                        "answers": [
                            {
                                "text": "NE",
                                "correct": false
                            },
                            {
                                "text": "ANO",
                                "correct": true
                            }
                        ]
                    },
                    {
                        "text": "358. Hrubý pracovní kapitál:",
                        "answers": [
                            {
                                "text": "slouží jako kapitál potřebný k financování dlouhodobého majetku",
                                "correct": false
                            },
                            {
                                "text": "představuje velikost kapitálu potřebného k financování oběžných aktiv",
                                "correct": true
                            },
                            {
                                "text": "je položkou, kterou vypočítáme jako rozdíl mezi vlastním a cizím kapitálem",
                                "correct": false
                            },
                            {
                                "text": "je vždy tvořen výhradně peněžními prostředky",
                                "correct": false
                            }
                        ]
                    },
                    {
                        "text": "359. Mezi krátkodobý finanční majetek patří:",
                        "answers": [
                            {
                                "text": "peníze v bance na běžném účtu",
                                "correct": true
                            },
                            {
                                "text": "peníze v pokladně",
                                "correct": true
                            },
                            {
                                "text": "krátkodobé cenné papíry",
                                "correct": true
                            },
                            {
                                "text": "zásoby",
                                "correct": false
                            }
                        ]
                    },
                    {
                        "text": "360. Důvody používání vlastního majetku pro financování podniku:",
                        "answers": [
                            {
                                "text": "CK je levnější",
                                "correct": false
                            },
                            {
                                "text": "náklady na VK jej mohou zlevňovat",
                                "correct": false
                            },
                            {
                                "text": "je tím možné využít kladné působení finanční páky",
                                "correct": false
                            },
                            {
                                "text": "VK je vždy levnější než CK",
                                "correct": false
                            }
                        ]
                    },
                    {
                        "text": "361. Ukazatele likvidity měří",
                        "answers": [
                            {
                                "text": "schopnost firmy produkovat zisk",
                                "correct": false
                            },
                            {
                                "text": "schopnost firmy produkovat cash flow",
                                "correct": false
                            },
                            {
                                "text": "rychlost obratu oběžných aktiv",
                                "correct": false
                            },
                            {
                                "text": "schopnost firmy uspokojovat své splatné závazky",
                                "correct": true
                            }
                        ]
                    },
                    {
                        "text": "362. Základními metodami primárního marketingového výzkumu jsou",
                        "answers": [
                            {
                                "text": "dotazování",
                                "correct": true
                            },
                            {
                                "text": "pozorování",
                                "correct": true
                            },
                            {
                                "text": "experiment",
                                "correct": true
                            },
                            {
                                "text": "rešerše publikací obchodních a hospodářských komor",
                                "correct": false
                            },
                            {
                                "text": "rešerše výročních zpráv firem",
                                "correct": false
                            },
                            {
                                "text": "rešerše zpráv statistických úřadů",
                                "correct": false
                            },
                            {
                                "text": "rešerše článků a studií v odborných a vědeckých časopisech",
                                "correct": false
                            }
                        ]
                    },
                    {
                        "text": "363. Mezi geografická segmentační kritéria patří:",
                        "answers": [
                            {
                                "text": "region,ve kterém zákazníci žijí",
                                "correct": true
                            },
                            {
                                "text": "kontinent, na kterém zákazníci žijí",
                                "correct": true
                            },
                            {
                                "text": "městská čtvrť, ve které zákazníci žijí",
                                "correct": true
                            },
                            {
                                "text": "aktuální lokalita, ve které se zákazníci nacházejí",
                                "correct": true
                            },
                            {
                                "text": "věk",
                                "correct": false
                            },
                            {
                                "text": "fáze životního cyklu",
                                "correct": false
                            },
                            {
                                "text": "vzdělání a povolání",
                                "correct": false
                            },
                            {
                                "text": "příjem",
                                "correct": false
                            },
                            {
                                "text": "očekávaný užitek",
                                "correct": false
                            },
                            {
                                "text": "náboženské vyznání",
                                "correct": false
                            },
                            {
                                "text": "loajalita ke značkám",
                                "correct": false
                            },
                            {
                                "text": "životní hodnoty",
                                "correct": false
                            },
                            {
                                "text": "postoj k produktu",
                                "correct": false
                            },
                            {
                                "text": "rasa",
                                "correct": false
                            }
                        ]
                    },
                    {
                        "text": "364. Pro Porterovy generické strategie platí:",
                        "answers": [
                            {
                                "text": "nejziskovější je v každém případě strategie diferenciace",
                                "correct": false
                            },
                            {
                                "text": "nejméně zisková je v každém případě strategie diferenciace",
                                "correct": false
                            },
                            {
                                "text": "nejméně zisková je v každém případě strategie koncentrace",
                                "correct": false
                            },
                            {
                                "text": "nejziskovější je v každém případě strategie vůdčího postavení v nákladech",
                                "correct": false
                            },
                            {
                                "text": "všechny mohou být za určitých okolností dlouhodobě ziskové",
                                "correct": true
                            },
                            {
                                "text": "žádná z nich nemůže být dlouhodobě zisková",
                                "correct": false
                            }
                        ]
                    },
                    {
                        "text": "363. Mezi Porterovy generické strategie patří:",
                        "answers": [
                            {
                                "text": "strategie vůdčího postavení v technologiích",
                                "correct": false
                            },
                            {
                                "text": "strategie vůdčího postavení v zisku",
                                "correct": false
                            },
                            {
                                "text": "strategie adaptace",
                                "correct": false
                            },
                            {
                                "text": "strategie unifikace",
                                "correct": false
                            },
                            {
                                "text": "strategie diferenciace",
                                "correct": true
                            },
                            {
                                "text": "strategie vůdčího postavení v nákladech",
                                "correct": true
                            },
                            {
                                "text": "strategie koncentrace",
                                "correct": true
                            },
                            {
                                "text": "strategie kondenzace",
                                "correct": false
                            }
                        ]
                    },
                    {
                        "text": "365. Firma cílí na muže starší 65 let, kteří jsou nejčastějšími uživateli v dané produktové kategorii. Která segmentační kritéria firma využívá?",
                        "answers": [
                            {
                                "text": "geografická",
                                "correct": false
                            },
                            {
                                "text": "demografická",
                                "correct": true
                            },
                            {
                                "text": "psychografická",
                                "correct": false
                            },
                            {
                                "text": "behaviorální",
                                "correct": true
                            }
                        ]
                    },
                    {
                        "text": "366. CATI:",
                        "answers": [
                            {
                                "text": "je označení pro osobní formu dotazování",
                                "correct": false
                            },
                            {
                                "text": "je označení pro dotazníkové šetření v online prostředí",
                                "correct": false
                            },
                            {
                                "text": "je označení pro telefonickou formu dotazování",
                                "correct": true
                            },
                            {
                                "text": "je označení pro jednu z technik pozorování",
                                "correct": false
                            },
                            {
                                "text": "je označení pro jednu z technik sekundárního výzkumu",
                                "correct": false
                            },
                            {
                                "text": "je označení pro písemné dotazníkové řešení",
                                "correct": false
                            }
                        ]
                    },
                    {
                        "text": "367. Mezi sekundární zdroje je možné řadit:",
                        "answers": [
                            {
                                "text": "publikace obchodních a hospodářských komor",
                                "correct": true
                            },
                            {
                                "text": "publikace asociací a vládních agentur",
                                "correct": true
                            },
                            {
                                "text": "výroční zprávy firem",
                                "correct": true
                            },
                            {
                                "text": "zprávy statistických úřadů",
                                "correct": true
                            },
                            {
                                "text": "tiskové zprávy výzkumných agentur",
                                "correct": true
                            },
                            {
                                "text": "zdroje primárních dat",
                                "correct": false
                            }
                        ]
                    },
                    {
                        "text": "368. Mystery shopping:",
                        "answers": [
                            {
                                "text": "pozorovatel v případě mystery shoppingu typicky předstírá, že má zájem o koupi určitého produktu",
                                "correct": true
                            },
                            {
                                "text": "využívá typicky tzv. oční kamery",
                                "correct": false
                            },
                            {
                                "text": "je metodou marketingového výzkumu založenou na moderované skupinové diskuzi",
                                "correct": false
                            },
                            {
                                "text": "je jednou z metod marketingového výzkumu",
                                "correct": true
                            },
                            {
                                "text": "je výzkumnou metodou, která vychází z kulturní antropologie",
                                "correct": false
                            },
                            {
                                "text": "je využíván např. pro hodnocení kvality služeb v maloobchodních provozovnách či provozovnách služeb",
                                "correct": true
                            },
                            {
                                "text": "může probíhat rovněž telefonicky např. jako mystery call",
                                "correct": true
                            },
                            {
                                "text": "je metodou sekundárního výzkumu",
                                "correct": false
                            },
                            {
                                "text": "je metoda, která je omezena tzv. panelovým efektem.",
                                "correct": false
                            }
                        ]
                    },
                    {
                        "text": "369. Základními metodami primárního marketingového výzkumu jsou:",
                        "answers": [
                            {
                                "text": "rešerše výročních zpráv firem",
                                "correct": false
                            },
                            {
                                "text": "rešerše publikací obchodních a hospodářských komor",
                                "correct": false
                            },
                            {
                                "text": "rešerše publikací asociací a vládních agentur",
                                "correct": false
                            },
                            {
                                "text": "rešerše zpráv statistických úřadů",
                                "correct": false
                            }
                        ]
                    },
                    {
                        "text": "370. Psychografická segmentace:",
                        "answers": [
                            {
                                "text": "životní hodnoty",
                                "correct": true
                            },
                            {
                                "text": "životní styl",
                                "correct": true
                            },
                            {
                                "text": "náboženství",
                                "correct": false
                            },
                            {
                                "text": "postoj k produktu",
                                "correct": false
                            }
                        ]
                    },
                    {
                        "text": "371. V dotazníku můžeme použít:",
                        "answers": [
                            {
                                "text": "otevřené a uzavřené otázky a jejich kombinace",
                                "correct": true
                            },
                            {
                                "text": "pouze uzavřené otázky",
                                "correct": false
                            },
                            {
                                "text": "sémantický diferenciál",
                                "correct": true
                            },
                            {
                                "text": "likertova škála",
                                "correct": true
                            }
                        ]
                    },
                    {
                        "text": "372. Segmentace trhu:",
                        "answers": [
                            {
                                "text": "je to samé co targeting",
                                "correct": false
                            },
                            {
                                "text": "je třetí fází cíleného marketingu",
                                "correct": false
                            },
                            {
                                "text": "je druhou fází cíleného marketingu",
                                "correct": false
                            },
                            {
                                "text": "rozděluje zákazníky na základě vybraných kritérií do homogenních skupin, které vykazují podobné potřeby a chování",
                                "correct": true
                            }
                        ]
                    },
                    {
                        "text": "373. Sekundární výzkum:",
                        "answers": [
                            {
                                "text": "je označován také jako výzkum od stolu",
                                "correct": true
                            },
                            {
                                "text": "v praxi se běžně nepoužívá",
                                "correct": false
                            },
                            {
                                "text": "typicky by měl předcházet výzkumu terénnímu",
                                "correct": true
                            },
                            {
                                "text": "typicky by měl výzkumu primárnímu předcházet",
                                "correct": true
                            },
                            {
                                "text": "následuje typicky až po výzkumu primárním",
                                "correct": false
                            },
                            {
                                "text": "bývá výrazně dražší než výzkum primární",
                                "correct": false
                            }
                        ]
                    },
                    {
                        "text": "374. Pro panel platí:",
                        "answers": [
                            {
                                "text": "rozumí se jím malá skupina atypických respondentů",
                                "correct": false
                            },
                            {
                                "text": "rozumí se jím výzkum názorů několika vybraných expertů",
                                "correct": false
                            },
                            {
                                "text": "rozumí se jím velká skupina atypických respondentů",
                                "correct": false
                            },
                            {
                                "text": "rozumí se jím databáze respondentů, kteří jsou v souvislosti s daným výzkumem opakovaně oslovováni",
                                "correct": true
                            },
                            {
                                "text": "jeho komplikací je tzv. panelový efekt",
                                "correct": true
                            },
                            {
                                "text": "jednou z jeho forem je tzv. panel prodejen",
                                "correct": true
                            }
                        ]
                    },
                    {
                        "text": "375. Segmentace trhu:",
                        "answers": [
                            {
                                "text": "je první fází nediferencovaného (masového) marketingu",
                                "correct": false
                            },
                            {
                                "text": "je proces výběru segmentu (příp. segmentů), na který se chce firma zaměřit",
                                "correct": false
                            },
                            {
                                "text": "je proces, při kterém se firma snaží ovlivňovat, jak má být její značka vnímána cílovým zákaznickým segmentem",
                                "correct": false
                            },
                            {
                                "text": "je třetí fází cíleného marketingu",
                                "correct": false
                            },
                            {
                                "text": "je první fází cíleného marketingu",
                                "correct": true
                            }
                        ]
                    },
                    {
                        "text": "376. Mezi čtyři základní skupiny segmentačních kritérií patří:",
                        "answers": [
                            {
                                "text": "kritéria postojová",
                                "correct": false
                            },
                            {
                                "text": "kritéria demografická",
                                "correct": true
                            },
                            {
                                "text": "kritéria historická",
                                "correct": false
                            },
                            {
                                "text": "kritéria polygrafická",
                                "correct": false
                            },
                            {
                                "text": "kritéria geografická",
                                "correct": true
                            },
                            {
                                "text": "kritéria behaviorální",
                                "correct": true
                            },
                            {
                                "text": "kritéria psychografická",
                                "correct": true
                            },
                            {
                                "text": "kritéria psychoanalytická",
                                "correct": false
                            },
                            {
                                "text": "kritéria monografická",
                                "correct": false
                            }
                        ]
                    },
                    {
                        "text": "377. CAPI:",
                        "answers": [
                            {
                                "text": "je označení pro jednu z technik sekundárního výzkumu",
                                "correct": false
                            },
                            {
                                "text": "je označení pro osobní formu",
                                "correct": true
                            },
                            {
                                "text": "je označení pro telefonickou formu",
                                "correct": false
                            },
                            {
                                "text": "je označení pro písemné dotazníkové šetření",
                                "correct": false
                            }
                        ]
                    },
                    {
                        "text": "388. Cílený marketing má tři klíčové fáze mezi které patří:",
                        "answers": [
                            {
                                "text": "volba metod marketingového výzkumu",
                                "correct": false
                            },
                            {
                                "text": "volba cíle marketingového výzkumu",
                                "correct": false
                            },
                            {
                                "text": "targeting",
                                "correct": true
                            },
                            {
                                "text": "segmentace trhu",
                                "correct": true
                            },
                            {
                                "text": "positioning",
                                "correct": true
                            }
                        ]
                    },
                    {
                        "text": "399. Mezi demografická segmentační kritéria patří:",
                        "answers": [
                            {
                                "text": "míra užívání produktu",
                                "correct": false
                            },
                            {
                                "text": "kontinent, na kterém zákazníci žijí",
                                "correct": false
                            },
                            {
                                "text": "očekávaný užitek",
                                "correct": false
                            },
                            {
                                "text": "městská čtvrť, ve které zákazníci žijí",
                                "correct": false
                            },
                            {
                                "text": "příležitost užití produktu",
                                "correct": false
                            },
                            {
                                "text": "životní hodnoty",
                                "correct": false
                            },
                            {
                                "text": "region, ve kterém zákazníci žijí",
                                "correct": false
                            },
                            {
                                "text": "aktuální lokalita, ve které se zákazníci nacházejí",
                                "correct": false
                            },
                            {
                                "text": "věk",
                                "correct": true
                            },
                            {
                                "text": "pohlaví",
                                "correct": true
                            },
                            {
                                "text": "fáze životního cyklu rodiny",
                                "correct": true
                            },
                            {
                                "text": "sexuální orientace",
                                "correct": true
                            },
                            {
                                "text": "vzdělání a povolání",
                                "correct": true
                            },
                            {
                                "text": "příjem",
                                "correct": true
                            }
                        ]
                    },
                    {
                        "text": "400. CAWI:",
                        "answers": [
                            {
                                "text": "je označení pro písemné dotazníkové šetření",
                                "correct": false
                            },
                            {
                                "text": "je označení pro dotazníkové šetření v online prostředí",
                                "correct": true
                            },
                            {
                                "text": "je označení pro osobní formu",
                                "correct": false
                            },
                            {
                                "text": "je označení pro jednu z technik sekundárního výzkumu",
                                "correct": false
                            },
                            {
                                "text": "je označení pro telefonickou formu",
                                "correct": false
                            },
                            {
                                "text": "je označení pro jednu z technik pozorování",
                                "correct": false
                            }
                        ]
                    },
                    {
                        "text": "401. Panelový efekt označuje v marketingu:",
                        "answers": [
                            {
                                "text": "negativní jev, kdy se chování respondentů zařazených do panelu přibližuje chování běžného zákazníka",
                                "correct": false
                            },
                            {
                                "text": "negativní jev, kterému výzkumné agentury předcházejí postupným obměňováním respondentů v panelu",
                                "correct": true
                            },
                            {
                                "text": "negativní jev, kdy se respondenti zařazení do panelu stávají tak trochu odborníky na zkoumané téma",
                                "correct": true
                            },
                            {
                                "text": "negativní jev, kdy se chování respondentů zařazených do panelu vzdaluje od chování běžného zákazníka",
                                "correct": true
                            },
                            {
                                "text": "negativní jev, kterému výzkumné agentury předcházejí dlouhodobým ponecháním respondentů v panelu (pozn. nepamatuju si přesné znění, ale obsahově sedí)",
                                "correct": false
                            }
                        ]
                    },
                    {
                        "text": "402. Firma cílí na vzdělané ženy ve věku od 30 do 50 let, které žijí ve větších městech. Která segmentační kritéria firma využila?",
                        "answers": [
                            {
                                "text": "behaviorální",
                                "correct": false
                            },
                            {
                                "text": "demografická",
                                "correct": true
                            },
                            {
                                "text": "geografická",
                                "correct": true
                            },
                            {
                                "text": "psychografická",
                                "correct": false
                            },
                            {
                                "text": "zadna z uvedenych",
                                "correct": false
                            }
                        ]
                    },
                    {
                        "text": "403.Kvalitativní výzkum:",
                        "answers": [
                            {
                                "text": "odpovídá typicky na otázku “Proč?”",
                                "correct": true
                            },
                            {
                                "text": "měří intenzitu zkoumaných jevů",
                                "correct": false
                            },
                            {
                                "text": "dokáže jít do mnohem větší hloubky než výzkum kvantitativní",
                                "correct": true
                            },
                            {
                                "text": "zabývá se kvantifikovatelnými problémy",
                                "correct": false
                            },
                            {
                                "text": "zabýva sa typicky problémy, ktoré nelze jednoduše kvantifikovat",
                                "correct": true
                            },
                            {
                                "text": "vyžaduje typicky psychologickou interpretaci",
                                "correct": true
                            },
                            {
                                "text": "pracuje zpravidla s velkými reprezentativními vzorky respondentů (v řádu stovek i tisíců)",
                                "correct": false
                            },
                            {
                                "text": "zabývá se primárne procesy probíhajícími v mozku zákazníka",
                                "correct": true
                            },
                            {
                                "text": "jeho výsledkem jsou popisné měřitelné informace",
                                "correct": false
                            },
                            {
                                "text": "nezkoumá intenzitu zkoumaných jevů, ale spíše příčiny a vztahy",
                                "correct": true
                            },
                            {
                                "text": "neumožňuje typicky statistické zpracování a zobecnění na celou populaci",
                                "correct": true
                            }
                        ]
                    },
                    {
                        "text": "404.Reprezentativnost vzorku v marketingovém výzkumu je možné zajistit:",
                        "answers": [
                            {
                                "text": "reprezentativnost vzorku nelze v mar.výskumu docilit",
                                "correct": false
                            },
                            {
                                "text": "výhradně vyčerpávajícím šetřením",
                                "correct": false
                            },
                            {
                                "text": "náhodným výběrem respondentů",
                                "correct": true
                            },
                            {
                                "text": "využitím ankety",
                                "correct": false
                            },
                            {
                                "text": "kvótním výběrem respondentů",
                                "correct": true
                            }
                        ]
                    },
                    {
                        "text": "405. Dotazník může využívat",
                        "answers": [
                            {
                                "text": "sémantický diferenciál",
                                "correct": true
                            },
                            {
                                "text": "otevřených otázek, uzavřených otázek i jejich kombinace",
                                "correct": true
                            },
                            {
                                "text": "vždy jen otevřených otázek",
                                "correct": false
                            },
                            {
                                "text": "Likertovy škály",
                                "correct": true
                            },
                            {
                                "text": "vždy jen uzavřených otázek",
                                "correct": false
                            }
                        ]
                    },
                    {
                        "text": "406. Zaškrtněte, která z položek patří mezi základní nákladové druhy:",
                        "answers": [
                            {
                                "text": "Variabilní náklady",
                                "correct": false
                            },
                            {
                                "text": "Fixní náklady",
                                "correct": false
                            },
                            {
                                "text": "Režijní náklady",
                                "correct": false
                            },
                            {
                                "text": "Spotřeba materiálu",
                                "correct": true
                            },
                            {
                                "text": "oportunitní náklady",
                                "correct": false
                            },
                            {
                                "text": "jednicové náklady",
                                "correct": false
                            }
                        ]
                    },
                    {
                        "text": "407. Co vyjadřuje bod zvratu?",
                        "answers": [
                            {
                                "text": "minimální rozsah produkce potřebný pro pokrytí fixních nákladů dosaženými tržbami za tuto produkci při určité ceně produktu a výši fixních a variabilních nákladů.",
                                "correct": false
                            },
                            {
                                "text": "minimální rozsah produkce potřebný pro pokrytí běžných nákladů dosaženými tržbami za tuto produkci při určité ceně produktu a výši mimořádných nákladů.",
                                "correct": false
                            },
                            {
                                "text": "minimální rozsah produkce potřebný pro pokrytí provozních nákladů dosaženými tržbami za tuto produkci při určité ceně produktu a výši provozních a finančních nákladů.",
                                "correct": false
                            },
                            {
                                "text": "minimální rozsah produkce potřebný pro pokrytí celkových nákladů dosaženými tržbami za tuto produkci při určité ceně produktu a výši fixních a variabilních nákladů.",
                                "correct": true
                            }
                        ]
                    },
                    {
                        "text": "408.Mezi variabilní náklady nepatří ?",
                        "answers": [
                            {
                                "text": "Poplatky za spotřebovanou elektřinu",
                                "correct": false
                            },
                            {
                                "text": "Poplatky za spotrebovanú vodu",
                                "correct": false
                            },
                            {
                                "text": "Cena za spotřebovaný materiál",
                                "correct": false
                            },
                            {
                                "text": "Úrok z úvěru",
                                "correct": true
                            }
                        ]
                    },
                    {
                        "text": "409. Degrese nákladů je:",
                        "answers": [
                            {
                                "text": "pokles jednotkových nákladů s klesajícím objemem produkce",
                                "correct": false
                            },
                            {
                                "text": "snížení přírůstkových nákladů s klesajícím objemem výroby",
                                "correct": false
                            },
                            {
                                "text": "pokles celkových nákladů",
                                "correct": false
                            },
                            {
                                "text": "pokles jednotkových nákladů s rostoucím objemem výroby",
                                "correct": true
                            },
                            {
                                "text": "pokles výnosů s rostoucím objemem výroby",
                                "correct": false
                            }
                        ]
                    },
                    {
                        "text": "410. Mezi náklady tříděné podle podnikových funkcí patří:",
                        "answers": [
                            {
                                "text": "náklady na odbyt",
                                "correct": true
                            },
                            {
                                "text": "náklady na skladování",
                                "correct": true
                            },
                            {
                                "text": "variabilní náklady",
                                "correct": false
                            },
                            {
                                "text": "fixní náklady",
                                "correct": false
                            }
                        ]
                    },
                    {
                        "text": "411. Mezi výnosy lze řadit:",
                        "answers": [
                            {
                                "text": "nákup výrobního zařízení",
                                "correct": false
                            },
                            {
                                "text": "výplata dividend",
                                "correct": false
                            },
                            {
                                "text": "prodej nepoužitého materiálu",
                                "correct": true
                            },
                            {
                                "text": "spotřeba materiálu",
                                "correct": false
                            },
                            {
                                "text": "prodej vlastních výrobků a služeb",
                                "correct": true
                            }
                        ]
                    },
                    {
                        "text": "412. Zkratka ROE představuje",
                        "answers": [
                            {
                                "text": "výnosnost investovaného kapitálu",
                                "correct": false
                            },
                            {
                                "text": "rentabilitu cizího kapitálu",
                                "correct": false
                            },
                            {
                                "text": "rentabilitu celkových aktiv",
                                "correct": false
                            },
                            {
                                "text": "výnosnost vlastního kapitálu",
                                "correct": true
                            }
                        ]
                    },
                    {
                        "text": "413. Provozování atomové elektrárny je spíše:",
                        "answers": [
                            {
                                "text": "Kapitálově náročná produkce",
                                "correct": true
                            },
                            {
                                "text": "Ani jedna z nabízených",
                                "correct": false
                            },
                            {
                                "text": "Materiálově náročná produkce",
                                "correct": false
                            },
                            {
                                "text": "Na práci náročná produkce",
                                "correct": false
                            }
                        ]
                    },
                    {
                        "text": "414. Net Promoter Score (NPS)",
                        "answers": [
                            {
                                "text": "pokud je NPS záporný, předpokládá se, že firma má silně loajální zákazníky",
                                "correct": false
                            },
                            {
                                "text": "nesouvisí s loajalitou zákazníků",
                                "correct": false
                            },
                            {
                                "text": "vysoké hodnoty NPS jsou považovány za projev silné loajality zákazníků",
                                "correct": true
                            },
                            {
                                "text": "je ukazatel ochoty doporučovat značku",
                                "correct": true
                            },
                            {
                                "text": "vysoké hodnoty NPS jsou považovány za projev nízké! loajality zákazníků",
                                "correct": false
                            },
                            {
                                "text": "je ukazatel míry vybavení značky",
                                "correct": false
                            },
                            {
                                "text": "je ukazatel míry rozpoznání značky",
                                "correct": false
                            }
                        ]
                    },
                    {
                        "text": "415. Rozředění značky (brand dilution):",
                        "answers": [
                            {
                                "text": "je situace, kdy je globální značka transformována na značku lokální",
                                "correct": false
                            },
                            {
                                "text": "je situace, kdy je povědomí o značce v rámci cílového segmentu minimální",
                                "correct": false
                            },
                            {
                                "text": "riziko rozředění značky lze do určité míry eliminovat pomocí tzv. podznaček",
                                "correct": true
                            },
                            {
                                "text": "riziko rozředění značky lze do určité míry eliminovat pomocí tzv. nadznaček",
                                "correct": false
                            },
                            {
                                "text": "je situace, kdy je lokální značka transformována na značku globální",
                                "correct": false
                            },
                            {
                                "text": "je situace, kdy je povědomí o značce masivně rozšířeno v rámci cílového segmentu",
                                "correct": false
                            },
                            {
                                "text": "je situace, kdy značka v důsledku extenze ztratí své klíčové asociace",
                                "correct": true
                            }
                        ]
                    },
                    {
                        "text": "416. Může společnost s ručením omezeným založit a provozovat i jenom jedna osoba?",
                        "answers": [
                            {
                                "text": "ANO",
                                "correct": true
                            },
                            {
                                "text": "NE",
                                "correct": false
                            }
                        ]
                    },
                    {
                        "text": "417. Net Promoter Score (NPS):",
                        "answers": [
                            {
                                "text": "je ukazatel míry rozpoznání značky",
                                "correct": false
                            },
                            {
                                "text": "vysoké hodnoty NPS jsou považovány za projev nízké loajality zákazníků",
                                "correct": false
                            },
                            {
                                "text": "se zjišťuje na základě dotazníkového šetření",
                                "correct": true
                            },
                            {
                                "text": "je ukazatel míry vybavení značky",
                                "correct": false
                            },
                            {
                                "text": "pokud je NSP záporný, předpokládá se, že firma má problémy s loajalitou",
                                "correct": true
                            }
                        ]
                    },
                    {
                        "text": "418. Povědomí o značce:",
                        "answers": [
                            {
                                "text": "je významnou součástí hodnoty značky",
                                "correct": true
                            },
                            {
                                "text": "zahrnuje míru rozpoznání značky,ale nikoliv míru vybavení značky",
                                "correct": false
                            },
                            {
                                "text": "není součástí hodnoty značky",
                                "correct": false
                            },
                            {
                                "text": "zahrnuje míru vybavení značky,ale nikoliv míru rozpoznání značky",
                                "correct": false
                            },
                            {
                                "text": "zahrnuje míru vybavení značky a míru rozpoznání značky",
                                "correct": true
                            },
                            {
                                "text": "nemá zpravidla žádný vliv na kupní rozhodovací proces zákazníka",
                                "correct": false
                            }
                        ]
                    },
                    {
                        "text": "419. Výsledek hospodaření (hospodářský výsledek)",
                        "answers": [
                            {
                                "text": "není součástí pasiv, ale aktiv a to oběžného majetku",
                                "correct": false
                            },
                            {
                                "text": "je součástí pasiv, a to cizího kapitálu",
                                "correct": false
                            },
                            {
                                "text": "není součástí pasiv, ani aktiv - nenalezneme jej tedy vůbec v rozvaze",
                                "correct": false
                            },
                            {
                                "text": "není součástí pasiv, ale aktiv a to dlouhodobého majetku",
                                "correct": false
                            },
                            {
                                "text": "je součástí pasiv, a to vlastního kapitálu",
                                "correct": true
                            }
                        ]
                    },
                    {
                        "text": "420. Positioning značky:",
                        "answers": [
                            {
                                "text": "proces positioningu značky představuje třetí fázi cíleného marketingu",
                                "correct": true
                            },
                            {
                                "text": "představuje strategické marketingové rozhodnutí",
                                "correct": true
                            },
                            {
                                "text": "proces positioningu značky představuje první fázi cíleného marketingu",
                                "correct": false
                            },
                            {
                                "text": "proces positioningu značky představuje první fázi nediferencovaného (masového) marketingu",
                                "correct": false
                            },
                            {
                                "text": "proces positioningu značky představuje druhou fázi cíleného marketingu",
                                "correct": false
                            },
                            {
                                "text": "označuje pozici značky v mezinárodních žebříčcích, které porovnávají značky z hlediska jejich tržní hodnoty",
                                "correct": false
                            },
                            {
                                "text": "označuje „pozici“, kterou má značka zaujmout v mysli cílové skupiny oproti značkám konkurenčním",
                                "correct": true
                            },
                            {
                                "text": "představuje taktické marketingové rozhodnutí",
                                "correct": false
                            },
                            {
                                "text": "odpovídá vždy výsledné image značky",
                                "correct": false
                            }
                        ]
                    },
                    {
                        "text": "421. Strategie individuálních značek",
                        "answers": [
                            {
                                "text": "je strategie, kterou používá např. společnost Phillips",
                                "correct": false
                            },
                            {
                                "text": "nevýhodou této strategie jsou vysoké náklady dané nutností budovat větší množství individuálních značek",
                                "correct": true
                            },
                            {
                                "text": "výhodou této strategie jsou nízké náklady dané zejména úsporou reklamních a dalších marketingových výdajů",
                                "correct": false
                            },
                            {
                                "text": "je prodej všech produktů firmy pod jedinou silnou značkou",
                                "correct": false
                            }
                        ]
                    },
                    {
                        "text": "422. Strategie individuálních značek",
                        "answers": [
                            {
                                "text": "je totožná se strategií deštníkové značky",
                                "correct": false
                            },
                            {
                                "text": "nevýhodou této strategie jsou vysoké náklady dané nutností budovat větší množství individuálních značek",
                                "correct": true
                            },
                            {
                                "text": "umožňuje oslovovat různé segmenty zákazníků různými značkami (a tedy i různými nabídkami)",
                                "correct": true
                            },
                            {
                                "text": "je strategie, kterou používá např. společnost Phillips",
                                "correct": false
                            },
                            {
                                "text": "423. Net Promoter Score (NPS)",
                                "correct": false
                            },
                            {
                                "text": "se zjišťuje na základě dotazníkového šetření mezi zákazníky",
                                "correct": true
                            },
                            {
                                "text": "pokud je NPS záporný předpokládá se, že firma má silné loajální zákazníky",
                                "correct": false
                            },
                            {
                                "text": "vysoké hodnoty NPS jsou považovány za projev silné loajality zákazníků",
                                "correct": true
                            },
                            {
                                "text": "je ukazatel ochoty doporučovat značku",
                                "correct": true
                            },
                            {
                                "text": "je ukazatel míry rozpoznání značek",
                                "correct": false
                            }
                        ]
                    },
                    {
                        "text": "424. Repositioning značky",
                        "answers": [
                            {
                                "text": "je označení pro změnu stávajícího positioningu značky",
                                "correct": true
                            },
                            {
                                "text": "je označením pro změnu “pozice” , kterou má značka zaujmout v mysli cílové skupiny oproti značkám konkurenčním",
                                "correct": true
                            },
                            {
                                "text": "je označení pro zlepšení pozice značky v mezinárodních žebříčcích, které porovnávají značky z hlediska jejich tržní hodnoty",
                                "correct": false
                            },
                            {
                                "text": "představuje krok, ke kterému by makléři neměli nikdy přistupovat",
                                "correct": false
                            },
                            {
                                "text": "je označení pro změnu umístění produktu dané značky v regále maloobchodních řetězců",
                                "correct": false
                            },
                            {
                                "text": "je označení situace, kdy se firma snaží umístit zboží do nových prodejen",
                                "correct": false
                            }
                        ]
                    },
                    {
                        "text": "425. Co-branding",
                        "answers": [
                            {
                                "text": "je jiné označení pro tzv. privátní značky",
                                "correct": false
                            },
                            {
                                "text": "je jiné označení pro tzv. osobnost značky",
                                "correct": false
                            },
                            {
                                "text": "je jiné označení pro strategii deštníkové značky",
                                "correct": false
                            },
                            {
                                "text": "je jiné označení pro tzv. rozředění značky",
                                "correct": false
                            },
                            {
                                "text": "označuje spojení dvou známých zavedených značek v novém společném produktu",
                                "correct": true
                            }
                        ]
                    },
                    {
                        "text": "426. Percepční mapa",
                        "answers": [
                            {
                                "text": "představuje významný nástroj při tvorbě positioningu značky",
                                "correct": true
                            },
                            {
                                "text": "je graf, který zachycuje jednotlivé segmenty na daném trhu",
                                "correct": false
                            },
                            {
                                "text": "má typicky pouze jednu osu",
                                "correct": false
                            },
                            {
                                "text": "je graf, který zachycuje vybrané segmenty, na které firma cílí",
                                "correct": false
                            },
                            {
                                "text": "je graf, který zachycuje image značek v dané kategorii",
                                "correct": true
                            },
                            {
                                "text": "je výstup výzkumu oční kamerou",
                                "correct": false
                            }
                        ]
                    },
                    {
                        "text": "427. Emotional selling proposition (ESP)",
                        "answers": [
                            {
                                "text": "představuje jednu ze základních metod kvantitativního výzkumu",
                                "correct": false
                            },
                            {
                                "text": "představuje jednu ze základních metod kvalitativního výzkumu",
                                "correct": false
                            },
                            {
                                "text": "představuje jeden ze základních přístupů k segmentaci trhu",
                                "correct": false
                            },
                            {
                                "text": "je přístup v positioningu značky využívající určitý emocionální užitek",
                                "correct": true
                            },
                            {
                                "text": "představuje jeden ze základních přístupů k positioningu značky",
                                "correct": true
                            }
                        ]
                    },
                    {
                        "text": "428. Extenze značky",
                        "answers": [
                            {
                                "text": "jejím rizikem je tzv. rozředění značky",
                                "correct": true
                            },
                            {
                                "text": "rizika spojená s extenzí značky lze do určité míry eliminovat pomocí tzv. podznaček",
                                "correct": true
                            },
                            {
                                "text": "rizika spojená s extenzí značky lze do určité míry eliminovat pomocí tzv. nadznaček",
                                "correct": false
                            },
                            {
                                "text": "je rozšíření zaběhnuté značky do nové produktové kategorie nebo na nový zákaznický segment",
                                "correct": true
                            },
                            {
                                "text": "je rozšíření zaběhnuté značky do nového maloobchodního řetězce",
                                "correct": false
                            },
                            {
                                "text": "jejím rizikem je tzv. zhuštění značky",
                                "correct": false
                            }
                        ]
                    },
                    {
                        "text": "429. Co-branding",
                        "answers": [
                            {
                                "text": "je jiné označení pro tzv. osobnost značky",
                                "correct": false
                            },
                            {
                                "text": "je jiné označení pro strategii deštníkové značky",
                                "correct": false
                            },
                            {
                                "text": "označuje spojení dvou známých zavedených značek v novém společném produktu",
                                "correct": true
                            },
                            {
                                "text": "je jiné označení pro tzv. existenci značky",
                                "correct": false
                            }
                        ]
                    },
                    {
                        "text": "430. Unique selling proposition (USP):",
                        "answers": [
                            {
                                "text": "představuje jeden ze základních přístupů k segmentaci trhu",
                                "correct": false
                            },
                            {
                                "text": "představuje jednu ze základních metod kvantitativního výzkumu",
                                "correct": false
                            },
                            {
                                "text": "je přístup k positioningu značky využívající určité místo původu",
                                "correct": false
                            },
                            {
                                "text": "je přístup k positioningu značky využívající určitý emocionální užitek",
                                "correct": false
                            },
                            {
                                "text": "je přístup k positioningu značky využívající určitý funkční užitek",
                                "correct": true
                            },
                            {
                                "text": "představuje jednu ze základních metod kvalitativního výzkumu",
                                "correct": false
                            },
                            {
                                "text": "představuje jeden ze základních přístupů k positioningu značky",
                                "correct": true
                            },
                            {
                                "text": "je označením pro tzv. nostalgický positioning",
                                "correct": false
                            }
                        ]
                    },
                    {
                        "text": "431. Repositioning značky:",
                        "answers": [
                            {
                                "text": "je označení situace, kdy se firma snaží umístit zboží do nových prodejen -představuje krok, ke kterému by marketéři neměli nikdy přistupovat",
                                "correct": false
                            },
                            {
                                "text": "je označení pro změnu stávajícího positioningu značky",
                                "correct": true
                            },
                            {
                                "text": "je označením pro změnu „pozice“, kterou má značka zaujmout v mysli cílové skupiny oproti značkám konkurenčním",
                                "correct": true
                            }
                        ]
                    },
                    {
                        "text": "432. Penetrační strategie:",
                        "answers": [
                            {
                                "text": "znamená, že firma prodává menší objemy produktu za vyšší cenu",
                                "correct": false
                            },
                            {
                                "text": "umožňuje “sbírání smetany” díky postupnému snižování úvodní ceny pro segmenty připravené na různé úrovně cen",
                                "correct": false
                            },
                            {
                                "text": "je vhodná zejména v případech, kdy trh je citlivý na cenu a kdy jsou bariéry pro vstup konkurence omezené",
                                "correct": true
                            },
                            {
                                "text": "je uvedení produktu na trh s nízkými cenami a za podpory masivní komunikační kampaně",
                                "correct": true
                            },
                            {
                                "text": "jejím cílem je získání co největšího podílu na trhu a vyřazení konkurence ze hry",
                                "correct": true
                            },
                            {
                                "text": "smyslem této strategie je co nejrychlejší penetrace trhu",
                                "correct": true
                            },
                            {
                                "text": "je uvedení produktu na trh s vysokými cenami a za podpory masivní komunikační kampaně",
                                "correct": false
                            }
                        ]
                    },
                    {
                        "text": "433. Pro “hvězdy” v rámci BCG matice platí:",
                        "answers": [
                            {
                                "text": "mají nízký relativní tržní podíl na rychle rostoucím trhu",
                                "correct": false
                            },
                            {
                                "text": "jedná se obvykle o produkty ve fázi úpadku, do kterých se firmě nevyplácí dále investovat",
                                "correct": false
                            },
                            {
                                "text": "mají nízký relativní tržní podíl na pomalu rostoucím trhu",
                                "correct": false
                            },
                            {
                                "text": "mají vysoký relativní tržní podíl na pomalu rostoucím trhu",
                                "correct": false
                            },
                            {
                                "text": "jedná se o zavedené produkty na zralém trhu, které již nevyžadují další investice",
                                "correct": false
                            },
                            {
                                "text": "mají vysoký relativní tržní podíl na rychle rostoucím trhu",
                                "correct": true
                            },
                            {
                                "text": "mají nízký relativní tržní podíl na pomalu rostoucím trhu",
                                "correct": false
                            }
                        ]
                    },
                    {
                        "text": "434. Krátkodobé slevové promoce:",
                        "answers": [
                            {
                                "text": "jsou často následovány propadem příjmů, protože zákazníci se produktem během promoce zásobili",
                                "correct": true
                            },
                            {
                                "text": "mohou vyvolat cenovou válku",
                                "correct": true
                            },
                            {
                                "text": "nejsou v našich podmínkách příliš využívány",
                                "correct": false
                            },
                            {
                                "text": "mohou být spojeny s rizikem poškození značky",
                                "correct": true
                            },
                            {
                                "text": "nejsou spojeny s rizikem poškození značky",
                                "correct": false
                            },
                            {
                                "text": "nejsou spojeny s rizikem cenové války",
                                "correct": false
                            },
                            {
                                "text": "vedou typicky k okamžitému a viditelnému snížení příjmů",
                                "correct": false
                            },
                            {
                                "text": "vedou typicky k okamžitému a viditelnému zvýšení příjmů",
                                "correct": true
                            }
                        ]
                    },
                    {
                        "text": "435. Teorie přijímání inovací popisuje čtyři zákaznické segmenty, mezi které patří:",
                        "answers": [
                            {
                                "text": "early adopters",
                                "correct": true
                            },
                            {
                                "text": "inovátoři",
                                "correct": true
                            },
                            {
                                "text": "opozdilci",
                                "correct": true
                            },
                            {
                                "text": "menšina",
                                "correct": false
                            },
                            {
                                "text": "úspěšní",
                                "correct": false
                            },
                            {
                                "text": "většina",
                                "correct": true
                            },
                            {
                                "text": "neúspěšní",
                                "correct": false
                            }
                        ]
                    },
                    {
                        "text": "436. Mezi tři základní cenové strategie patří:",
                        "answers": [
                            {
                                "text": "strategie dobré hodnoty",
                                "correct": true
                            },
                            {
                                "text": "strategie nízké hodnoty",
                                "correct": false
                            },
                            {
                                "text": "strategie vysoké ceny",
                                "correct": true
                            },
                            {
                                "text": "ekonomická strategie",
                                "correct": true
                            },
                            {
                                "text": "strategie diferenciace",
                                "correct": false
                            },
                            {
                                "text": "strategie zacílení",
                                "correct": false
                            }
                        ]
                    },
                    {
                        "text": "437. Životní cyklus produktu předpokládá, že ve fázi zralosti:",
                        "answers": [
                            {
                                "text": "vládne na trhu silná konkurence, později některé méně úspěšné firmy opouštějí trh",
                                "correct": true
                            },
                            {
                                "text": "rostou tržby pomaleji a postupně klesá zisk",
                                "correct": true
                            },
                            {
                                "text": "je konkurence nejnižší ze všech fází životního cyklu",
                                "correct": false
                            },
                            {
                                "text": "rostou tržby i zisk velmi rychlým tempem",
                                "correct": false
                            }
                        ]
                    },
                    {
                        "text": "438. Pro “dojné krávy” v rámci BCG matice platí:",
                        "answers": [
                            {
                                "text": "mají vysoký relativní tržní podíl na pomalu rostoucím trhu",
                                "correct": true
                            },
                            {
                                "text": "mají nízký relativní tržní podíl na pomalu rostoucím trhu",
                                "correct": false
                            },
                            {
                                "text": "jedná se obvykle o produkty ve fázi úpadku, do kterých se firmě nevyplácí dále investovat",
                                "correct": false
                            },
                            {
                                "text": "jedná se o zavedené produkty na zralém trhu, které již nevyžadují větší investice",
                                "correct": true
                            }
                        ]
                    },
                    {
                        "text": "439. Mezi tři nejvýznamnější faktory tvorby ceny patří:",
                        "answers": [
                            {
                                "text": "náklady",
                                "correct": true
                            },
                            {
                                "text": "ceny konkurence",
                                "correct": true
                            },
                            {
                                "text": "hodnota vnímaná zákazníky",
                                "correct": true
                            },
                            {
                                "text": "hodnota vnímaná konkurenty",
                                "correct": false
                            },
                            {
                                "text": "nabídka",
                                "correct": false
                            },
                            {
                                "text": "hodnota vnímaná manažery firmy",
                                "correct": false
                            }
                        ]
                    },
                    {
                        "text": "440. Referenční ceny v marketingu označují:",
                        "answers": [
                            {
                                "text": "ceny, které si lidé pamatují z předchozích nákupů a se kterými srovnávají ceny produktů v dané kategorii",
                                "correct": true
                            },
                            {
                                "text": "jako referenční ceny mohou zákazníci využít také ceny konkurenčních produktů, jež registrují při nákupu v prodejně",
                                "correct": true
                            },
                            {
                                "text": "ceny, které jsou regulovány státem",
                                "correct": false
                            },
                            {
                                "text": "velmi nízké ceny vybraných produktů, které maloobchodu zavádí, aby nalákal zákazníky do své provozovny",
                                "correct": false
                            },
                            {
                                "text": "ceny, které zákazníci vnímají jako běžné, přijatelné, férové atp.",
                                "correct": true
                            }
                        ]
                    },
                    {
                        "text": "441. Pro cenotvorbu platí:",
                        "answers": [
                            {
                                "text": "náklady stanovují nejvyšší možnou hranici ceny",
                                "correct": false
                            },
                            {
                                "text": "náklady stanovují nejnižší možnou hranici ceny",
                                "correct": true
                            },
                            {
                                "text": "hodnota vnímána zákazníky představuje horní hranici ceny",
                                "correct": true
                            },
                            {
                                "text": "hodnota vnímána zákazníky představuje spodní hranici ceny",
                                "correct": false
                            },
                            {
                                "text": "čím nižší je rozdíl mezi cenou, kterou je za produkt ochoten zákazník zaplatit, a náklady, tím vyššího zisku může firma docílit",
                                "correct": false
                            },
                            {
                                "text": "čím vyšší je rozdíl mezi cenou, kterou je za produkt ochoten zákazník zaplatit, a náklady, tím vyššího zisku může firma docílit",
                                "correct": true
                            }
                        ]
                    },
                    {
                        "text": "442. Poptávkově orientovaná tvorba cen:",
                        "answers": [
                            {
                                "text": "je přístup k cenotvorbě, kdy firma navyšuje jednotkové náklady o požadovanou ziskovou marži",
                                "correct": false
                            },
                            {
                                "text": "umožňuje odhadovat spodní hranici ceny",
                                "correct": false
                            },
                            {
                                "text": "umožňuje odhadovat horní hranici ceny (tzv. cenový strop)",
                                "correct": true
                            },
                            {
                                "text": "zohledňuje, jakou hodnotu produktu přisuzuje zákazník",
                                "correct": true
                            },
                            {
                                "text": "její hlavní výhodou je jednoduchost stanovení ceny",
                                "correct": false
                            }
                        ]
                    },
                    {
                        "text": "443. Pro “otazníky” v rámci BCG matice platí:",
                        "answers": [
                            {
                                "text": "mají nízký relativní tržní podíl na rychle rostoucím trhu",
                                "correct": true
                            },
                            {
                                "text": "mají nízký relativní tržní podíl na pomalu rostoucím trhu",
                                "correct": false
                            },
                            {
                                "text": "mají vysoký relativní tržní podíl na rychle rostoucím trhu",
                                "correct": false
                            },
                            {
                                "text": "jedná se o zavedené produkty na zralém trhu, které již vyžadují větší investice",
                                "correct": false
                            },
                            {
                                "text": "jedná se obvykle o produkty ve fázi úpadku, do kterých se firmě nevyplácí dále investovat",
                                "correct": false
                            }
                        ]
                    },
                    {
                        "text": "444. Model životního cyklu produktu zahrnuje následující fáze:",
                        "answers": [
                            {
                                "text": "zralost",
                                "correct": true
                            },
                            {
                                "text": "úpadek",
                                "correct": true
                            },
                            {
                                "text": "transformace produktu",
                                "correct": false
                            },
                            {
                                "text": "růst",
                                "correct": true
                            },
                            {
                                "text": "stažení z trhu",
                                "correct": false
                            },
                            {
                                "text": "uvedení na trh",
                                "correct": true
                            }
                        ]
                    },
                    {
                        "text": "445. Životní cyklus módního produktu:",
                        "answers": [
                            {
                                "text": "mívá rychlou fázi růstu, po kterém následuje velmi rychlý úpadek",
                                "correct": true
                            },
                            {
                                "text": "mívá velmi dlouhou fázi zralosti",
                                "correct": false
                            },
                            {
                                "text": "se v obecné rovině neliší od životního cyklu běžného produktu",
                                "correct": false
                            },
                            {
                                "text": "typicky nemívá fázi zralosti",
                                "correct": true
                            },
                            {
                                "text": "mívá velmi dlouhou fázi úpadku",
                                "correct": false
                            }
                        ]
                    },
                    {
                        "text": "446. BCG matice:",
                        "answers": [
                            {
                                "text": "Rozděluje produkty firmy do 4 kategorií",
                                "correct": true
                            },
                            {
                                "text": "Její osy tvoří relativní tržní podíl a tempo růstu trhu",
                                "correct": true
                            },
                            {
                                "text": "Vychází ze zjištění, že s velikostí tržního podílu, klesají firmě náklady a tím roste její ziskovost",
                                "correct": true
                            },
                            {
                                "text": "Rozděluje produkty firmy do 6 kategorií",
                                "correct": false
                            },
                            {
                                "text": "Vychází ze zjištění, že s velikostí tržního podílu rostou firmě náklady a tím klesá její ziskovost",
                                "correct": false
                            },
                            {
                                "text": "Její osy tvoří absolutní tržní podíl a tempo růstu tržeb firmy",
                                "correct": false
                            }
                        ]
                    },
                    {
                        "text": "447. Fáze produktu předpokládá, že:",
                        "answers": [
                            {
                                "text": "fáze uvedení na trh je typicky nejdelší stádium z celého cyklu",
                                "correct": false
                            },
                            {
                                "text": "během fáze zralosti se na trhu objeví nový produkt, který se stane pro stávající produkt substitutem",
                                "correct": true
                            },
                            {
                                "text": "fáze růstu je typicky nejdelší stádium z celého cyklu",
                                "correct": false
                            },
                            {
                                "text": "fáze zralosti je typicky nejdelší stádium z celého cyklu",
                                "correct": true
                            }
                        ]
                    },
                    {
                        "text": "448. Category management",
                        "answers": [
                            {
                                "text": "jeho cílem je maximalizace ziskovosti v rámci multi-level marketingu",
                                "correct": false
                            },
                            {
                                "text": "jeho cílem je maximalizace efektivity franšízanta",
                                "correct": false
                            },
                            {
                                "text": "jeho cílem je maximalizace efektivity franšízora",
                                "correct": false
                            },
                            {
                                "text": "jeho cílem je maximalizace efektivity marketingového mixu",
                                "correct": false
                            },
                            {
                                "text": "jeho cílem je maximalizace ziskovosti jednotlivých produktových kategorií maloobchodníka",
                                "correct": true
                            }
                        ]
                    },
                    {
                        "text": "449. SEO",
                        "answers": [
                            {
                                "text": "označuje optimalizaci webových stránek pro vyhledávače",
                                "correct": true
                            },
                            {
                                "text": "je označení pro up-selling kampaně",
                                "correct": false
                            },
                            {
                                "text": "je označení pro cross-selling kampaně",
                                "correct": false
                            },
                            {
                                "text": "označuje komunikaci v místě prodeje",
                                "correct": false
                            },
                            {
                                "text": "označuje jeden z klíčových nástrojů media relations",
                                "correct": false
                            }
                        ]
                    },
                    {
                        "text": "450. V ekonomickém životě působí tzv.faktor času, který způsobuje, že:",
                        "answers": [
                            {
                                "text": "hodnota dnešní peněžní jednotky je stejná jako hodnota peněžní jednotky v budoucnu",
                                "correct": false
                            },
                            {
                                "text": "časová hodnota peněz se mění",
                                "correct": true
                            },
                            {
                                "text": "hodnota dnešní peněžní jednotky je cennější, než hodnota peněžní jednotky v budoucnu",
                                "correct": true
                            },
                            {
                                "text": "hodnota dnešní peněžní jednotky je nižší, než hodnota peněžní jednotky v budoucnu",
                                "correct": false
                            }
                        ]
                    },
                    {
                        "text": "451. Mezi tři základní distribuční strategie podle počtu mezičlánků patří:",
                        "answers": [
                            {
                                "text": "strategie horizontální distribuce",
                                "correct": false
                            },
                            {
                                "text": "strategie vertikální distribuce",
                                "correct": false
                            },
                            {
                                "text": "strategie konvenční distribuce",
                                "correct": false
                            },
                            {
                                "text": "strategie selektivní distribuce",
                                "correct": true
                            },
                            {
                                "text": "strategie intenzivní distribuce",
                                "correct": true
                            },
                            {
                                "text": "strategie podpůrné distribuce",
                                "correct": false
                            },
                            {
                                "text": "strategie minimální distribuce",
                                "correct": false
                            },
                            {
                                "text": "strategie exkluzivní distribuce",
                                "correct": true
                            }
                        ]
                    },
                    {
                        "text": "452.Nepřímé distribuční cesty:",
                        "answers": [
                            {
                                "text": "využívá 1 nebo více distribučních mezičlánků",
                                "correct": true
                            },
                            {
                                "text": "nevýhoda spočívá ve ztrátě kontroly nad produktem (např. cenová politika)",
                                "correct": true
                            },
                            {
                                "text": "využívá fanšízing, velkoobchod, maloobchod,...",
                                "correct": true
                            },
                            {
                                "text": "využívá prodejců, prodejní či provozní eshopy",
                                "correct": false
                            }
                        ]
                    },
                    {
                        "text": "451. Focus group",
                        "answers": [
                            {
                                "text": "jedná se o výzkumnou metodu, jejíž výhodou je skupinová dynamika",
                                "correct": true
                            },
                            {
                                "text": "jde o metodu kvalitativního výzkumu",
                                "correct": true
                            },
                            {
                                "text": "šest až dvanáct vybraných respondentů",
                                "correct": true
                            }
                        ]
                    },
                    {
                        "text": "452. Pro nepřímé distribuční cesty platí",
                        "answers": [
                            {
                                "text": "využívají jednoho či více distribučních mezičlánků",
                                "correct": true
                            },
                            {
                                "text": "firma využívá např.: maloobchodní sítě, franšízantů, velkoobchodníků atd.",
                                "correct": true
                            },
                            {
                                "text": "firma využívá mimo jiné svých vlastních prodejců, vlastních prodejen či provozoven, e-shopů atd.",
                                "correct": false
                            },
                            {
                                "text": "firma vstupuje do přímého kontaktu se zákazníkem",
                                "correct": false
                            },
                            {
                                "text": "nevýhodou nepřímých distribučních cest je skutečnost, že firma ztrácí kontrolu nad svými produkty, cenovou politikou atp.",
                                "correct": false
                            },
                            {
                                "text": "výhodou nepřímých distribučních cest je absence nákladů spojených s budováním vlastní distribuční sítě",
                                "correct": true
                            },
                            {
                                "text": "nevyužívají žádné distribuční mezičlánky",
                                "correct": false
                            }
                        ]
                    },
                    {
                        "text": "453. Za součást komunikačního mixu jsou považovány mimo jiné následující nástroje:",
                        "answers": [
                            {
                                "text": "public relations",
                                "correct": true
                            },
                            {
                                "text": "osobní prodej",
                                "correct": true
                            },
                            {
                                "text": "podpora prodeje",
                                "correct": true
                            },
                            {
                                "text": "eventy a sponzoring",
                                "correct": true
                            },
                            {
                                "text": "reklama",
                                "correct": true
                            },
                            {
                                "text": "direct marketing",
                                "correct": true
                            },
                            {
                                "text": "distribuce",
                                "correct": false
                            },
                            {
                                "text": "cena",
                                "correct": false
                            },
                            {
                                "text": "produkt",
                                "correct": false
                            }
                        ]
                    },
                    {
                        "text": "454. Intenzivní distribuce je strategie:",
                        "answers": [
                            {
                                "text": "nevýhodou této strategie je omezená kontrola nad nákupním zážitkem zákazníka",
                                "correct": true
                            },
                            {
                                "text": "kdy firma prodává méně produktů za vyšší cenu",
                                "correct": false
                            },
                            {
                                "text": "která je typická pro prémiové produkty",
                                "correct": false
                            },
                            {
                                "text": "která klade primárně důraz na zážitek poskytovaný zákazníkům při přebírání produktů",
                                "correct": false
                            },
                            {
                                "text": "při které se firma snaží, aby byl její produkt dostupný zákazníkům kdykoliv a kdekoliv si vzpomenou",
                                "correct": true
                            },
                            {
                                "text": "při které firma úmyslně omezuje počet distribučních cest",
                                "correct": false
                            },
                            {
                                "text": "při které firma využívá co největší počet distribučních míst, včetně těch, která lákají zákazníky na nízkou cenu",
                                "correct": true
                            },
                            {
                                "text": "která je typická pro firmy využívající ekonomickou cenovou strategii či strategii dobré hodnoty",
                                "correct": true
                            }
                        ]
                    },
                    {
                        "text": "455. Krizová komunikace:",
                        "answers": [
                            {
                                "text": "jsou komunikační aktivity, které mají zabránit poškození značky",
                                "correct": true
                            },
                            {
                                "text": "je reklamní kampaň, která využívá nekonvenční média",
                                "correct": false
                            },
                            {
                                "text": "je reklamní kampaň, která má jen minimální rozpočet",
                                "correct": false
                            },
                            {
                                "text": "bývá považována za součást podpory prodeje",
                                "correct": false
                            },
                            {
                                "text": "je komunikace v případech, kdy je pověst značky ohrožena negativní publicitou",
                                "correct": true
                            }
                        ]
                    },
                    {
                        "text": "456. Pro B2B trh je charakteristické:",
                        "answers": [
                            {
                                "text": "cena jednotlivých zakázek na B2B trzích bývá typicky relativně nízká",
                                "correct": false
                            },
                            {
                                "text": "firmy zde typicky využívají nepřímé distribuční cesty",
                                "correct": false
                            },
                            {
                                "text": "firmy zde typicky využívají přímé distribuční cesty",
                                "correct": true
                            },
                            {
                                "text": "produkty jsou složité, nestandardní a vyžadují individuální servis",
                                "correct": true
                            }
                        ]
                    },
                    {
                        "text": "457. Současnou hodnotu budoucích příjmů dostaneme:",
                        "answers": [
                            {
                                "text": "diskontováním",
                                "correct": true
                            },
                            {
                                "text": "úrokováním",
                                "correct": false
                            },
                            {
                                "text": "odúročením",
                                "correct": true
                            },
                            {
                                "text": "pomocí anuity",
                                "correct": false
                            }
                        ]
                    },
                    {
                        "text": "458. Mezi typické formy reklamy patří:",
                        "answers": [
                            {
                                "text": "tisková reklama",
                                "correct": true
                            },
                            {
                                "text": "rozhlasová reklama",
                                "correct": true
                            },
                            {
                                "text": "direct mail",
                                "correct": false
                            },
                            {
                                "text": "televizní reklama",
                                "correct": true
                            }
                        ]
                    },
                    {
                        "text": "459. Firma cílí na vzdělané ženy ve věku od 30 do 50 let, které žijí ve větších městech. Které segmentační kritéria firma využila?",
                        "answers": [
                            {
                                "text": "demografická",
                                "correct": true
                            },
                            {
                                "text": "psychologická",
                                "correct": false
                            },
                            {
                                "text": "behaviorální",
                                "correct": false
                            },
                            {
                                "text": "geografická",
                                "correct": true
                            }
                        ]
                    },
                    {
                        "text": "460. Franšízing:",
                        "answers": [
                            {
                                "text": "franšízant hradí franšízorovi licenční poplatky, případně i podíl ze zisku",
                                "correct": true
                            },
                            {
                                "text": "franšízant má právo a povinnost využívat obchodní jméno, ochranné známky, marketingovou strategii a know-how franšízora",
                                "correct": true
                            },
                            {
                                "text": "pro franšízora je tento systém nevýhodný",
                                "correct": false
                            },
                            {
                                "text": "je systém intenzivní spolupráce právně i finančně samostatných a nezávislých podnikatelů (franšízora a jeho franšízantů)",
                                "correct": false
                            },
                            {
                                "text": "pro franšízanta je tento systém výhodný zejména kvůli snížení podnikatelského rizika",
                                "correct": true
                            },
                            {
                                "text": "pro franšízanta je tento systém nevýhodný",
                                "correct": false
                            },
                            {
                                "text": "je systém volné spolupráce franšízora a jeho franšízantů, kteří mohou, ale nemusí využívat obchodní jméno a know-how franšízora",
                                "correct": false
                            },
                            {
                                "text": "pro franšízora je tento systém výhodný tím, že může být výrazně levnější než budování vlastní distribuční sítě",
                                "correct": true
                            }
                        ]
                    },
                    {
                        "text": "461. Trade marketing:",
                        "answers": [
                            {
                                "text": "tato marketingová specializace se zaměřuje primárně na podporu prodeje v maloobchodních prodejnách",
                                "correct": true
                            },
                            {
                                "text": "tato marketingová specializace se zaměřuje primárně na katalogový prodej",
                                "correct": false
                            },
                            {
                                "text": "tato marketingová specializace se zaměřuje primárně na telemarketing",
                                "correct": false
                            },
                            {
                                "text": "tato marketingová specializace se zaměřuje primárně na PR",
                                "correct": false
                            },
                            {
                                "text": "tato marketingová specializace se zaměřuje na produktový výzkum",
                                "correct": false
                            }
                        ]
                    },
                    {
                        "text": "462. Cash & carry:",
                        "answers": [
                            {
                                "text": "je zvláštní druh franšízingu",
                                "correct": false
                            },
                            {
                                "text": "je zvláštní druh velkoobchodu",
                                "correct": true
                            },
                            {
                                "text": "je zvláštní druh multi-level marketingu",
                                "correct": false
                            },
                            {
                                "text": "je zvláštní druh m-commerce",
                                "correct": false
                            },
                            {
                                "text": "je zvláštní druh e-commerce",
                                "correct": false
                            }
                        ]
                    },
                    {
                        "text": "463. Cross-sellingové kampaně:",
                        "answers": [
                            {
                                "text": "jejich primárním cílem je akvizice nových zákazníků",
                                "correct": false
                            },
                            {
                                "text": "jejich cílem je navýšení objednávek zákazníků, a to nabídkou vyšší verze produktu nebo rozšířením objednávky",
                                "correct": false
                            },
                            {
                                "text": "jejich cílem je navýšení objednávek zákazníků, a to nabídkou produktu souvisejícího či doplňkového",
                                "correct": true
                            },
                            {
                                "text": "využívají často nástrojů direct marketingu",
                                "correct": true
                            }
                        ]
                    },
                    {
                        "text": "464. Krizová komunikace",
                        "answers": [
                            {
                                "text": "je reklamní kampaň, která využívá nekonvenční média",
                                "correct": false
                            },
                            {
                                "text": "bývá považována za součást PR",
                                "correct": true
                            },
                            {
                                "text": "je reklamní kampaň, která má jen minimální rozpočet",
                                "correct": false
                            },
                            {
                                "text": "bývá považována za součást reklamy",
                                "correct": false
                            }
                        ]
                    },
                    {
                        "text": "465. Multi-level marketing:",
                        "answers": [
                            {
                                "text": "je typický pro B2B trhy",
                                "correct": false
                            },
                            {
                                "text": "využívá masivní reklamy a prodeje prostřednictvím maloobchodní sítě",
                                "correct": false
                            },
                            {
                                "text": "produkt je komunikován zejména prostřednictvím WOM, resp. prostřednictvím prodejců, kteří jsou zároveň zákazníky",
                                "correct": true
                            },
                            {
                                "text": "cílem je vytvoření mnohovrstevní odběratelské struktury, která se obejde bez využití maloobchodní sítě",
                                "correct": true
                            },
                            {
                                "text": "využívá masivní reklamy a prodeje prostřednictvím velkoobchodní sítě",
                                "correct": false
                            }
                        ]
                    },
                    {
                        "text": "466. Virálním marketingem se rozumí:",
                        "answers": [
                            {
                                "text": "kampaně využívající tiskovou reklamu",
                                "correct": false
                            },
                            {
                                "text": "osvětové kampaně, které mají zvýšit proočkovanost populace",
                                "correct": false
                            },
                            {
                                "text": "kampaně, které mají vyvolat samovolné šíření marketingového sdělení v online prostředí",
                                "correct": true
                            },
                            {
                                "text": "kampaně využívající eventy",
                                "correct": false
                            }
                        ]
                    },
                    {
                        "text": "467. Selektivní distribuce je strategie:",
                        "answers": [
                            {
                                "text": "která je kompromisem mezi strategií intenzivní distribuce a strategie exkluzivní distribuce",
                                "correct": true
                            },
                            {
                                "text": "při které firma využívá co největší počet distribučních míst, včetně těch, která lákají zákazníky na nízkou cenu",
                                "correct": false
                            },
                            {
                                "text": "při které firma volí jen jednoho distributora, a tomu dává výhradní právo prodávat její produkty",
                                "correct": false
                            },
                            {
                                "text": "při které se firma snaží, aby byl její produkt dostupný zákazníkům kdykoliv a kdekoliv si vzpomenou",
                                "correct": false
                            },
                            {
                                "text": "při které využívá firma omezeného počtu vybraných distributorů",
                                "correct": true
                            }
                        ]
                    },
                    {
                        "text": "468. Pro přímé distribuční cesty platí:",
                        "answers": [
                            {
                                "text": "firma využívá mimo jiné svých vlastních prodejců, vlastních prodejen či provozoven, e-shopu atp.",
                                "correct": true
                            },
                            {
                                "text": "firma využívá např.: maloobchodní sítě franšízantů, velkoobchodníků atp",
                                "correct": false
                            },
                            {
                                "text": "nevyužívají žádné distribuční mezičlánky",
                                "correct": true
                            },
                            {
                                "text": "výhodou přímých distribučních cest je skutečnost, že firma neztrácí kontrolu nad svými produkty",
                                "correct": true
                            },
                            {
                                "text": "firma vstupuje do přímého kontaktu se zákazníkem",
                                "correct": true
                            },
                            {
                                "text": "využívají jednoho či více distribučních mezičlánků",
                                "correct": false
                            },
                            {
                                "text": "výhodou přímých distribučních cest je absence nákladu spojených s budováním vlastní distribuční sítě",
                                "correct": false
                            }
                        ]
                    },
                    {
                        "text": "469. Upíří efekt:",
                        "answers": [
                            {
                                "text": "jedná se o případy, kdy prvek určený k zaujetí cílové skupiny stáhne pozornost na sebe (a tedy od cíle kampaně)",
                                "correct": true
                            },
                            {
                                "text": "hrozí především v případech, kdy firma využívá netradiční reklamní média",
                                "correct": false
                            },
                            {
                                "text": "hrozí především v případě, kdy propagovaný produkt úzce souvisí s kreativním ztvárněním",
                                "correct": false
                            },
                            {
                                "text": "hrozí především v případech, kdy firma využívá tradiční reklamní média",
                                "correct": false
                            }
                        ]
                    },
                    {
                        "text": "470. Cash and carry:",
                        "answers": [
                            {
                                "text": "je zvláštní druh velkoobchodu",
                                "correct": true
                            },
                            {
                                "text": "je zvláštní druh e-commerce",
                                "correct": false
                            },
                            {
                                "text": "je zvláštní druh m-commerce",
                                "correct": false
                            },
                            {
                                "text": "je zvláštní druh multi-level marketingu",
                                "correct": false
                            }
                        ]
                    },
                    {
                        "text": "471. Mezi dynamické metody hodnocení investic nepatří:",
                        "answers": [
                            {
                                "text": "metoda doby splacení s diskontovanými hodnotami",
                                "correct": false
                            },
                            {
                                "text": "metoda vnitřního výnosového procenta",
                                "correct": false
                            },
                            {
                                "text": "metoda čisté současné hodnoty",
                                "correct": false
                            },
                            {
                                "text": "prostá doba návratnosti",
                                "correct": true
                            },
                            {
                                "text": "ukazatel výnosnosti investice",
                                "correct": true
                            }
                        ]
                    },
                    {
                        "text": "472. Exkluzivní distribuce je strategie:",
                        "answers": [
                            {
                                "text": "která je typická pro firmy využívající ekonomickou cenovou strategii",
                                "correct": false
                            },
                            {
                                "text": "která klade primární důraz na zážitek poskytovaný zákazníkům při přebírání produktu",
                                "correct": true
                            },
                            {
                                "text": "při které se firma snaží, aby byl její produkt dostupný zákazníkům kdekoli a kdykoli",
                                "correct": false
                            },
                            {
                                "text": "při které firma volí pro určitý region jen jednoho nebo několik málo distributorů, a těm dává výhradní právo prodávat jejich produkty",
                                "correct": true
                            },
                            {
                                "text": "která je typická pro prémiové produkty",
                                "correct": true
                            },
                            {
                                "text": "nevýhodou této strategie je omezená kontrola nad nákupním zážitkem zákazníka",
                                "correct": false
                            }
                        ]
                    },
                    {
                        "text": "473. Mezi typické formy reklamy patří:",
                        "answers": [
                            {
                                "text": "tisková reklama",
                                "correct": true
                            },
                            {
                                "text": "online reklama",
                                "correct": true
                            },
                            {
                                "text": "reklama v kinech",
                                "correct": true
                            },
                            {
                                "text": "media relations",
                                "correct": false
                            },
                            {
                                "text": "sampling",
                                "correct": false
                            },
                            {
                                "text": "televizní reklama",
                                "correct": true
                            },
                            {
                                "text": "venkovní reklama",
                                "correct": true
                            },
                            {
                                "text": "product placement",
                                "correct": true
                            },
                            {
                                "text": "telemarketing",
                                "correct": false
                            }
                        ]
                    },
                    {
                        "text": "474. Investice může být realizována:",
                        "answers": [
                            {
                                "text": "nájmem",
                                "correct": false
                            },
                            {
                                "text": "na zkoušku",
                                "correct": false
                            },
                            {
                                "text": "koupí",
                                "correct": true
                            },
                            {
                                "text": "půjčkou",
                                "correct": false
                            }
                        ]
                    },
                    {
                        "text": "475. Zdrojem financování investic nejsou:",
                        "answers": [
                            {
                                "text": "odpisy",
                                "correct": false
                            },
                            {
                                "text": "zisk",
                                "correct": false
                            },
                            {
                                "text": "investiční náklady",
                                "correct": true
                            },
                            {
                                "text": "nově vydané akcie",
                                "correct": false
                            }
                        ]
                    },
                    {
                        "text": "476. Financování investic v podniku z cizích zdrojů zahrnuje:",
                        "answers": [
                            {
                                "text": "rizikový kapitál (venture capital)",
                                "correct": true
                            },
                            {
                                "text": "dotace ze státního rozpočtu, nebo místního rozpočtu, prostředky EU",
                                "correct": true
                            },
                            {
                                "text": "nerozdělený zisk",
                                "correct": false
                            },
                            {
                                "text": "odpisy",
                                "correct": false
                            }
                        ]
                    },
                    {
                        "text": "477. Pro výpočet EVA potřebujeme znát:",
                        "answers": [
                            {
                                "text": "EBIT a sazbu daně",
                                "correct": true
                            },
                            {
                                "text": "WACC nebo údaje nutné pro jejich výpočet",
                                "correct": true
                            },
                            {
                                "text": "NOPAT",
                                "correct": true
                            },
                            {
                                "text": "očekávané tempo růstu cash flow",
                                "correct": false
                            }
                        ]
                    },
                    {
                        "text": "478. Investujeme-li do výměny výrobního zařízení s cílem snížit náklady, jedná se o mandatorní investici?",
                        "answers": [
                            {
                                "text": "ANO",
                                "correct": false
                            },
                            {
                                "text": "NE",
                                "correct": true
                            }
                        ]
                    },
                    {
                        "text": "479. Zdrojem financování investic v podniku jsou:",
                        "answers": [
                            {
                                "text": "vyplacené dividendy",
                                "correct": false
                            },
                            {
                                "text": "odpisy",
                                "correct": true
                            },
                            {
                                "text": "nerozdělený zisk",
                                "correct": true
                            },
                            {
                                "text": "vklady vlastníků nebo společníků",
                                "correct": true
                            }
                        ]
                    },
                    {
                        "text": "480. Pro produktový mix, nebo-li sortiment platí:",
                        "answers": [
                            {
                                "text": "šíří sortimentu se rozumí průměrný počet variant u každého produktu, který daná firma nabízí",
                                "correct": false
                            },
                            {
                                "text": "hloubkou sortimentu se rozumí počet produktových řad (kategorií), které daná firma nabízí",
                                "correct": false
                            },
                            {
                                "text": "délkou sortimentu se obvykle rozumí průměrný počet produktů v řadě, kterou daná firma nabízí",
                                "correct": true
                            },
                            {
                                "text": "šíří sortimentu se rozumí počet produktových řad, které daná firma nabízí",
                                "correct": true
                            },
                            {
                                "text": "hloubkou sortimentu se rozumí průměrný počet variant u každého produktu, který daná firma nabízí",
                                "correct": true
                            },
                            {
                                "text": "v obecné rovině platí, že relativně malý počet produktů generuje většinu zisku firmy",
                                "correct": true
                            }
                        ]
                    },
                    {
                        "text": "481. Penetrační strategie:",
                        "answers": [
                            {
                                "text": "uvedení produktu na trh s vysokými cenami a za podpory masivní komunikační kampaně",
                                "correct": false
                            },
                            {
                                "text": "jejím cílem je získání co největšího podílu na trhu a vyřazení konkurence ze hry",
                                "correct": true
                            },
                            {
                                "text": "umožňuje \"sbírání smetany\" díky postupnému snižování úvodní ceny pro segmenty připravené na různé cenové úrovně",
                                "correct": false
                            },
                            {
                                "text": "je uvedení produktu na trh s nízkými cenami a za podpory masivní komunikační kampaně",
                                "correct": true
                            }
                        ]
                    },
                    {
                        "text": "482. Krátkodobé slevové promoce:",
                        "answers": [
                            {
                                "text": "jsou často následovány propadem příjmů, zákazníci se produktem během promoce předzásobili",
                                "correct": true
                            },
                            {
                                "text": "nejsou v našich podmínkách moc využívány",
                                "correct": false
                            },
                            {
                                "text": "vedou typicky k okamžitému a viditelnému snížení příjmů",
                                "correct": false
                            },
                            {
                                "text": "mohou být spojeny s rizikem poškození značky",
                                "correct": true
                            }
                        ]
                    },
                    {
                        "text": "483. Koeficient integrálního využití měří využití:",
                        "answers": [
                            {
                                "text": "času",
                                "correct": false
                            },
                            {
                                "text": "výkonu",
                                "correct": false
                            },
                            {
                                "text": "kapacity",
                                "correct": true
                            }
                        ]
                    },
                    {
                        "text": "484. Hodnota čistého pracovního kapitálu by měla být:",
                        "answers": [
                            {
                                "text": "nulové, protože přesně v tomto místě je zajištěno provozní financování oběžného majetku",
                                "correct": false
                            },
                            {
                                "text": "optimální, tedy například i záporná",
                                "correct": false
                            },
                            {
                                "text": "co možná nejvyšší, protože v opačném případě vzniká nekrytý dluh",
                                "correct": false
                            },
                            {
                                "text": "co možná nejnižší, protože jinak je financování příliš drahé",
                                "correct": true
                            }
                        ]
                    },
                    {
                        "text": "485. Okolí podniku může být:",
                        "answers": [
                            {
                                "text": "kulturně-historické",
                                "correct": true
                            },
                            {
                                "text": "politické",
                                "correct": true
                            },
                            {
                                "text": "ekologické",
                                "correct": true
                            },
                            {
                                "text": "sociální",
                                "correct": true
                            }
                        ]
                    },
                    {
                        "text": "486. Geografické okolí ovlivňuje zejména:",
                        "answers": [
                            {
                                "text": "daňovou zátěž",
                                "correct": false
                            },
                            {
                                "text": "legislativní podmínky",
                                "correct": false
                            },
                            {
                                "text": "výběr pracovní síly",
                                "correct": false
                            },
                            {
                                "text": "logistiku",
                                "correct": true
                            }
                        ]
                    },
                    {
                        "text": "487. Okolí podniku může být:",
                        "answers": [
                            {
                                "text": "technologické",
                                "correct": true
                            },
                            {
                                "text": "etické",
                                "correct": true
                            },
                            {
                                "text": "technické",
                                "correct": true
                            },
                            {
                                "text": "sociální",
                                "correct": true
                            }
                        ]
                    },
                    {
                        "text": "488. U veřejné obchodní společnosti ručí podnikatel za závazky:",
                        "answers": [
                            {
                                "text": "do výše vložených peněžitých i nepeněžitých vkladů",
                                "correct": false
                            },
                            {
                                "text": "pouze do určité hranice, plynoucí z konkrétní úpravy",
                                "correct": false
                            },
                            {
                                "text": "celým svým, tj. i osobním majetkem",
                                "correct": true
                            },
                            {
                                "text": "pouze celým majetkem firmy",
                                "correct": false
                            }
                        ]
                    },
                    {
                        "text": "499. Jak se nazývá spoluvlastník komanditní společnosti, který ručí za její závazky pouze vlastním vkladem (tj. nikoliv svým jměním) vypisovací otázka",
                        "answers": [
                            {
                                "text": "komanditista",
                                "correct": true
                            }
                        ]
                    },
                    {
                        "text": "501.Du Pontův rozklad vysvětluje",
                        "answers": [
                            {
                                "text": "ekonomický zisk",
                                "correct": false
                            },
                            {
                                "text": "čistou současnou hodnotu",
                                "correct": false
                            },
                            {
                                "text": "zlaté bilanční pravidlo",
                                "correct": false
                            },
                            {
                                "text": "rentabilitu vlastního kapitálu",
                                "correct": true
                            }
                        ]
                    },
                    {
                        "text": "503. Podnik zaniká:",
                        "answers": [
                            {
                                "text": "automaticky v případě poklesu hodnoty vlastního kapitálu pod nulu (záporný vl. kapitál)",
                                "correct": false
                            },
                            {
                                "text": "dnem výmazu z obchodního rejstříku",
                                "correct": true
                            },
                            {
                                "text": "ukončením likvidace",
                                "correct": false
                            },
                            {
                                "text": "rozhodnutím společníků o zrušení podniku",
                                "correct": false
                            }
                        ]
                    },
                    {
                        "text": "504. V České republice ručí většinoví akcionáři za závazky společnosti i celým svým osobním majetkem.",
                        "answers": [
                            {
                                "text": "Nepravda.",
                                "correct": true
                            },
                            {
                                "text": "Pravda. Případně ručí i majetkem manžela nebo manželky.",
                                "correct": false
                            },
                            {
                                "text": "Pravda. V případě, že jejich majetek nestačí, musí splatit postupně celý zbývající dluh.",
                                "correct": false
                            },
                            {
                                "text": "Pravda. Ale soud je může této povinnosti zprostit.",
                                "correct": false
                            }
                        ]
                    },
                    {
                        "text": "505. Všeobecnými podmínkami provozování živnosti fyzickými osobami jsou:",
                        "answers": [
                            {
                                "text": "bydliště na území České republiky",
                                "correct": false
                            },
                            {
                                "text": "státní občanství České republiky",
                                "correct": false
                            },
                            {
                                "text": "odborné znalosti v předmětu budoucího podnikání",
                                "correct": false
                            },
                            {
                                "text": "zpracování zakladatelského projektu",
                                "correct": false
                            }
                        ]
                    },
                    {
                        "text": "506. Anketa:",
                        "answers": [
                            {
                                "text": "jedná se o šetření, při kterém se respondenti vybírají do vzorku sami",
                                "correct": true
                            },
                            {
                                "text": "jedná se o typickou metodu sekundárního výzkumu",
                                "correct": false
                            },
                            {
                                "text": "její výsledky nelze zobecňovat na celek",
                                "correct": true
                            },
                            {
                                "text": "nereprezentativní výzkum",
                                "correct": true
                            },
                            {
                                "text": "představuje reprezentativní výzkum",
                                "correct": false
                            },
                            {
                                "text": "její výsledky z podstaty odpovídají šetřením, která využívají kvótní výběr",
                                "correct": false
                            },
                            {
                                "text": "její výsledky z podstaty odpovídají šetřením, která využívají náhodný výběr respondentů",
                                "correct": false
                            }
                        ]
                    },
                    {
                        "text": "507. CAPI:",
                        "answers": [
                            {
                                "text": "Je označení pro jednu z technik sekundárního výzkumu",
                                "correct": false
                            },
                            {
                                "text": "Je označení pro osobní formu výzkumu",
                                "correct": true
                            },
                            {
                                "text": "Je označení pro telefonickou formu",
                                "correct": false
                            },
                            {
                                "text": "Je označení pro písemné dotazníkové šetření",
                                "correct": false
                            }
                        ]
                    },
                    {
                        "text": "508. Mezi typické metody kvalitativního výzkumu patří:",
                        "answers": [
                            {
                                "text": "focus group",
                                "correct": true
                            },
                            {
                                "text": "reprezentativní dotazníkové šetření využívající náhodný výběr respondentů",
                                "correct": false
                            },
                            {
                                "text": "hloubkové rozhovory",
                                "correct": true
                            },
                            {
                                "text": "využití nejrůznějších sekundárních zdrojů",
                                "correct": false
                            },
                            {
                                "text": "projektivní techniky (objevuje se v jiné variantě této otázky)",
                                "correct": true
                            },
                            {
                                "text": "ankety (také se objevuje v jiné variantě této otázky)",
                                "correct": false
                            }
                        ]
                    },
                    {
                        "text": "509. Projektivní techniky:",
                        "answers": [
                            {
                                "text": "jednou z projektivních technik je technika dokončování vět",
                                "correct": true
                            },
                            {
                                "text": "mají původ v klinické psychologii",
                                "correct": true
                            },
                            {
                                "text": "jsou výzkumné techniky, které využívají dataprojektor",
                                "correct": false
                            },
                            {
                                "text": "jsou jednou z metod kvantitativního výzkumu",
                                "correct": false
                            },
                            {
                                "text": "jsou jednou z metod kvalitativního výzkumu",
                                "correct": true
                            },
                            {
                                "text": "respondenti nejsou při využití projektivních technik dotazování na určitý problém přímo",
                                "correct": true
                            },
                            {
                                "text": "jednou z projektivních technik jsou asociační testy",
                                "correct": true
                            },
                            {
                                "text": "510. Dotazování:",
                                "correct": false
                            },
                            {
                                "text": "patří mezi nejčastěji využívané metody sekundárního výzkumu",
                                "correct": false
                            },
                            {
                                "text": "produkt je komunikován zejména prostřednictvím WOM, resp. PR",
                                "correct": true
                            },
                            {
                                "text": "patří mezi nejčastěji využívané metody primárního výzkumu",
                                "correct": true
                            },
                            {
                                "text": "může probíhat písemnou formou",
                                "correct": true
                            },
                            {
                                "text": "může probíhat online",
                                "correct": true
                            },
                            {
                                "text": "může probíhat prostřednictvím telefonu",
                                "correct": true
                            },
                            {
                                "text": "může probíhat osobní formou (bezprostředním kontaktem mezi tazatelem a respondentem",
                                "correct": true
                            }
                        ]
                    },
                    {
                        "text": "511. Anketa:",
                        "answers": [
                            {
                                "text": "jedná se o jednu z hlavních projektivních technik",
                                "correct": false
                            },
                            {
                                "text": "jedná se o šetření, při které se respondenti vybírají do vzorku sami",
                                "correct": true
                            },
                            {
                                "text": "její výsledky lze zobecňovat na celek",
                                "correct": false
                            },
                            {
                                "text": "její výsledky z podstaty odpovídají výsledkům vyčerpávajícího šetření",
                                "correct": false
                            }
                        ]
                    },
                    {
                        "text": "512. Projektivní techniky:",
                        "answers": [
                            {
                                "text": "umožňují odhalit skryté či nevědomé motivy, postoje, pocity, významy či představy",
                                "correct": true
                            },
                            {
                                "text": "jsou jednou z metod kvantitativního výzkumu",
                                "correct": false
                            },
                            {
                                "text": "jsou výzkumné techniky, které využívají dataprojektor",
                                "correct": false
                            },
                            {
                                "text": "mají původ v klinické psychologii",
                                "correct": true
                            }
                        ]
                    },
                    {
                        "text": "513. Mezi typické metody kvalitativního výzkumu patří:",
                        "answers": [
                            {
                                "text": "hloubkové rozhovory",
                                "correct": true
                            },
                            {
                                "text": "focus group",
                                "correct": true
                            },
                            {
                                "text": "anketa",
                                "correct": false
                            },
                            {
                                "text": "využití nejrůznějších sekundárních zdrojů",
                                "correct": false
                            }
                        ]
                    },
                    {
                        "text": "514. Postoj:",
                        "answers": [
                            {
                                "text": "zahrnuje mimo jiné behaviorální složku",
                                "correct": true
                            },
                            {
                                "text": "zahrnuje mimo jiné emocionální složku",
                                "correct": true
                            },
                            {
                                "text": "neovlivňuje žádným způsobem kupní chování zákazníka",
                                "correct": false
                            },
                            {
                                "text": "zahrnuje výhradně kognitivní složku, tedy názory a znalosti člověka o určitém objektu",
                                "correct": false
                            }
                        ]
                    },
                    {
                        "text": "515. Vybavení značky (brand recall):",
                        "answers": [
                            {
                                "text": "nemá žádný vliv na kupní rozhodovací proces zákazníka",
                                "correct": false
                            },
                            {
                                "text": "určuje, zda si zákazníci danou značku vybaví, když uvažují o příslušné produktové kategorii",
                                "correct": true
                            },
                            {
                                "text": "jeho ideální verzí je TOMA (top of mind awareness)",
                                "correct": true
                            },
                            {
                                "text": "bývá definováno jako míra, se kterou jsou spotřebitelé schopni vizuálně identifikovat značku v místě prodeje",
                                "correct": false
                            }
                        ]
                    },
                    {
                        "text": "516. Projektivní techniky:",
                        "answers": [
                            {
                                "text": "jsou výzkumné techniky, které využívají dataprojektor",
                                "correct": false
                            },
                            {
                                "text": "jednou z projektivních technik jsou asociační testy",
                                "correct": true
                            },
                            {
                                "text": "jednou z projektivních technik je anketa",
                                "correct": false
                            },
                            {
                                "text": "jednou z projektivních technik je technika dokončování vět",
                                "correct": true
                            }
                        ]
                    },
                    {
                        "text": "517. Mystery shopping:",
                        "answers": [
                            {
                                "text": "je využíván např. pro hodnocení kvality služeb v maloobchodních provozovnách či provozovnách služeb",
                                "correct": true
                            },
                            {
                                "text": "je výzkumnou metodou, která vychází z kulturní antropologie",
                                "correct": false
                            },
                            {
                                "text": "využívá primárně projektivních technik",
                                "correct": false
                            },
                            {
                                "text": "pozorovatel v případě mystery shoppingu typicky předstírá, že má zájem o koupi určitého produktu",
                                "correct": true
                            }
                        ]
                    },
                    {
                        "text": "518. Zlaté bilanční pravidlo pracuje s poměrem:",
                        "answers": [
                            {
                                "text": "žádná z předchozích odpovědí",
                                "correct": true
                            },
                            {
                                "text": "nákupů a pohledávek",
                                "correct": false
                            },
                            {
                                "text": "tržby ..",
                                "correct": false
                            },
                            {
                                "text": "hmotného a nehmotného majetku",
                                "correct": false
                            }
                        ]
                    },
                    {
                        "text": "519. Je možné a pokud ano, tak je výhodné, když jsou aktiva větší než pasiva?",
                        "answers": [
                            {
                                "text": "NE",
                                "correct": true
                            },
                            {
                                "text": "ANO",
                                "correct": false
                            },
                            {
                                "text": "s520. Mezi oběžná aktiva patří:",
                                "correct": false
                            },
                            {
                                "text": "materiál",
                                "correct": true
                            },
                            {
                                "text": "zboží",
                                "correct": true
                            },
                            {
                                "text": "budovy",
                                "correct": false
                            },
                            {
                                "text": "emisní ážio",
                                "correct": false
                            }
                        ]
                    },
                    {
                        "text": "521. Cizí kapitál je obvykle:",
                        "answers": [
                            {
                                "text": "podniku k dispozici na dobu delší než VK",
                                "correct": false
                            },
                            {
                                "text": "stejně drahý jako VK",
                                "correct": false
                            },
                            {
                                "text": "levnější než VK",
                                "correct": true
                            },
                            {
                                "text": "dražší než VK",
                                "correct": false
                            }
                        ]
                    },
                    {
                        "text": "522. Za cizí kapitál lze považovat:",
                        "answers": [
                            {
                                "text": "základní kapitál",
                                "correct": false
                            },
                            {
                                "text": "pozemky",
                                "correct": false
                            },
                            {
                                "text": "stroje",
                                "correct": false
                            },
                            {
                                "text": "krátkodobé bankovní výpůjčky",
                                "correct": true
                            }
                        ]
                    },
                    {
                        "text": "523. Do aktiv patří:",
                        "answers": [
                            {
                                "text": "výsledek hospodaření",
                                "correct": false
                            },
                            {
                                "text": "zásoby",
                                "correct": true
                            },
                            {
                                "text": "bankovní úvěry",
                                "correct": false
                            },
                            {
                                "text": "pohledávky",
                                "correct": true
                            },
                            {
                                "text": "dlouhodobý majetek",
                                "correct": true
                            }
                        ]
                    },
                    {
                        "text": "524. Do kategorie cizí kapitál nepatří:",
                        "answers": [
                            {
                                "text": "závazky",
                                "correct": false
                            },
                            {
                                "text": "kapitálové fondy",
                                "correct": true
                            },
                            {
                                "text": "krátkodobé úvěry, které byly podniku poskytnuty",
                                "correct": false
                            },
                            {
                                "text": "dlouhodobé úvěry, které byly podniku poskytnuty",
                                "correct": false
                            }
                        ]
                    },
                    {
                        "text": "525. Do oběžných aktiv patří:",
                        "answers": [
                            {
                                "text": "budovy",
                                "correct": false
                            },
                            {
                                "text": "zásoby",
                                "correct": true
                            },
                            {
                                "text": "rezervy",
                                "correct": false
                            },
                            {
                                "text": "emisní ážio",
                                "correct": false
                            }
                        ]
                    },
                    {
                        "text": "526. Dlouhodobý nehmotný majetek tvoří:",
                        "answers": [
                            {
                                "text": "Dlouhodobé cenné papíry",
                                "correct": false
                            },
                            {
                                "text": "Goodwill",
                                "correct": true
                            },
                            {
                                "text": "Pohledávky",
                                "correct": false
                            },
                            {
                                "text": "Pozemky",
                                "correct": false
                            }
                        ]
                    },
                    {
                        "text": "527. Dlouhodobý nehmotný majetek tvoří:",
                        "answers": [
                            {
                                "text": "zásoby",
                                "correct": false
                            },
                            {
                                "text": "patenty a licence",
                                "correct": true
                            },
                            {
                                "text": "Dlouhodobé cenné papíry",
                                "correct": false
                            },
                            {
                                "text": "Goodwill",
                                "correct": true
                            },
                            {
                                "text": "Pozemky, budovy",
                                "correct": false
                            },
                            {
                                "text": "Pohledávky",
                                "correct": false
                            }
                        ]
                    },
                    {
                        "text": "528. Zlaté bilanční pravidlo vyrovnání rizika pracuje s poměrem:",
                        "answers": [
                            {
                                "text": "zásob a tržeb",
                                "correct": false
                            },
                            {
                                "text": "vlastního a cizího kapitálu",
                                "correct": true
                            },
                            {
                                "text": "čistého zisku a počtu akcií",
                                "correct": false
                            },
                            {
                                "text": "žádná z předchozích možností",
                                "correct": false
                            }
                        ]
                    },
                    {
                        "text": "529. Součástí dlouhodobého finančního majetku jsou:",
                        "answers": [
                            {
                                "text": "rezervní fondy podniku",
                                "correct": false
                            },
                            {
                                "text": "dlouhodobé závazky",
                                "correct": false
                            },
                            {
                                "text": "dlouhodobé finanční úvěry",
                                "correct": false
                            },
                            {
                                "text": "goodwill a badwill",
                                "correct": false
                            },
                            {
                                "text": "software s dobou užívání déle než 1 rok",
                                "correct": false
                            }
                        ]
                    },
                    {
                        "text": "530. Lze obecně ukazatel EVA vypočítat jako rozdíl provozního CF (cashflow) a kapitálových nákladů?",
                        "answers": [
                            {
                                "text": "ANO",
                                "correct": false
                            },
                            {
                                "text": "NE",
                                "correct": true
                            }
                        ]
                    },
                    {
                        "text": "531. Ve výkazu zisku a ztrát se náklady třídí podle základních oblastí podnikových činností na:",
                        "answers": [
                            {
                                "text": "fixní a variabilní",
                                "correct": false
                            },
                            {
                                "text": "pořizovací, skladovací, správní a odbytné",
                                "correct": false
                            },
                            {
                                "text": "provozní, finanční a mimořádné",
                                "correct": true
                            },
                            {
                                "text": "jednotkové a režijní",
                                "correct": false
                            }
                        ]
                    },
                    {
                        "text": "532. Čistý zisk je:",
                        "answers": [
                            {
                                "text": "ukazatelem relativním",
                                "correct": false
                            },
                            {
                                "text": "příjmem podniku",
                                "correct": false
                            },
                            {
                                "text": "rozdílem mezi variabilními a fixními náklady",
                                "correct": false
                            },
                            {
                                "text": "rozdílem mezi fixními a variabilními náklady",
                                "correct": false
                            },
                            {
                                "text": "rozdíl mezi příjmy a výdaji podniku",
                                "correct": false
                            },
                            {
                                "text": "žádná z předchozích možností",
                                "correct": true
                            }
                        ]
                    },
                    {
                        "text": "533.Celkový kapitál podniku:",
                        "answers": [
                            {
                                "text": "celkový majetek podniku",
                                "correct": true
                            },
                            {
                                "text": "tržby",
                                "correct": false
                            },
                            {
                                "text": "výnosy podniku",
                                "correct": false
                            },
                            {
                                "text": "pasiva",
                                "correct": false
                            },
                            {
                                "text": "příjmy podniku",
                                "correct": false
                            }
                        ]
                    },
                    {
                        "text": "534. Výnosy podniku tvoří:",
                        "answers": [
                            {
                                "text": "provozní výnosy získané v provozně-hospodářské činnosti podniku (tržby za prodej)",
                                "correct": true
                            },
                            {
                                "text": "finanční výnosy získané z finančních investic, cenných papírů, vkladů a účastí",
                                "correct": true
                            },
                            {
                                "text": "mimořádné výnosy získané mimořádně, například prodejem odepsaných strojů",
                                "correct": true
                            },
                            {
                                "text": "odpisy dlouhodobého majetku",
                                "correct": false
                            }
                        ]
                    },
                    {
                        "text": "535. Firma cílí na starší konzervativní muže s vysokými příjmy, kteří žijí ve velkých městech a vyznávají “tradiční hodnoty”.",
                        "answers": [
                            {
                                "text": "demografická",
                                "correct": true
                            },
                            {
                                "text": "behaviorální",
                                "correct": false
                            },
                            {
                                "text": "žádné z uvedených",
                                "correct": false
                            },
                            {
                                "text": "psychografická",
                                "correct": true
                            },
                            {
                                "text": "geografická",
                                "correct": true
                            }
                        ]
                    },
                    {
                        "text": "536. Extenze značky:",
                        "answers": [
                            {
                                "text": "je přeměna značky na tzv. privátní značku",
                                "correct": false
                            },
                            {
                                "text": "jejím rizikem je tzv. zhuštění značky",
                                "correct": false
                            },
                            {
                                "text": "je rozšíření zaběhnuté značky do nové produktové kategorie nebo na nový zákaznický segment",
                                "correct": true
                            },
                            {
                                "text": "rizika spojená s extenzí značky lze do určité míry eliminovat pomocí tzv. podznaček",
                                "correct": true
                            }
                        ]
                    },
                    {
                        "text": "537. Co-branding:",
                        "answers": [
                            {
                                "text": "je jiné označení pro tzv. rozředění značky",
                                "correct": false
                            },
                            {
                                "text": "je jiné označení pro strategii individuálních značek",
                                "correct": false
                            },
                            {
                                "text": "je jiné označení pro strategii deštníkové značky",
                                "correct": false
                            },
                            {
                                "text": "je jiné označení pro tzv. extenzi značky",
                                "correct": false
                            },
                            {
                                "text": "je jiné označení pro tzv. privátní značky",
                                "correct": false
                            },
                            {
                                "text": "je jiné označení pro tzv. osobnost značky",
                                "correct": false
                            }
                        ]
                    },
                    {
                        "text": "538. Percepční mapa:",
                        "answers": [
                            {
                                "text": "je graf, který zachycuje jednotlivé segmenty na daném trhu",
                                "correct": false
                            },
                            {
                                "text": "je graf, který zachycuje image značek v dané kategorii",
                                "correct": true
                            },
                            {
                                "text": "má typickou pouze jednu osu",
                                "correct": false
                            },
                            {
                                "text": "představuje významný nástroj při tvorbě positioningu značky",
                                "correct": true
                            }
                        ]
                    },
                    {
                        "text": "539. Emotional selling proposition (ESP):",
                        "answers": [
                            {
                                "text": "je přístup k positioningu značky využívající určitý emocionální užitek",
                                "correct": true
                            },
                            {
                                "text": "je přístup k positioningu značky využívající určitý funkční užitek",
                                "correct": false
                            },
                            {
                                "text": "představuje jednu ze základních metod kvalitativního výzkumu ?",
                                "correct": false
                            },
                            {
                                "text": "je přístup positioningu značky využívající určité místo původu",
                                "correct": false
                            },
                            {
                                "text": "představuje jednu ze základních metod kvantitativního výzkumu",
                                "correct": false
                            },
                            {
                                "text": "představuje jeden ze základních přístupů k segmentaci trhu",
                                "correct": false
                            }
                        ]
                    },
                    {
                        "text": "540. Positioning značky:",
                        "answers": [
                            {
                                "text": "označuje pozici produktů dané značky v regále maloobchodních řetězců",
                                "correct": false
                            },
                            {
                                "text": "označuje pozici, kterou má značka zaujmout v mysli cílové skupiny oproti značkám konkurenčním",
                                "correct": true
                            },
                            {
                                "text": "označuje pozici v mezinárodních žebříčcích, které porovnávají značky z hlediska jejich tržní hodnoty",
                                "correct": false
                            },
                            {
                                "text": "proces positioningu značky představuje první fázi cíleného marketingu",
                                "correct": false
                            }
                        ]
                    },
                    {
                        "text": "541. Net Promoter Score (NPS):",
                        "answers": [
                            {
                                "text": "pokud je NPS záporný, předpokládá se, že firma má problémy s loajalitou",
                                "correct": true
                            },
                            {
                                "text": "je ukazatel ochoty doporučovat značku",
                                "correct": true
                            },
                            {
                                "text": "je ukazatel míry rozpoznat značky",
                                "correct": false
                            },
                            {
                                "text": "pokud je NPS záporný, předpokládá se, že firma má silné loajální zákazníky",
                                "correct": false
                            },
                            {
                                "text": "vysoké hodnoty NPS jsou považovány za projev silné loajality zákazníků",
                                "correct": true
                            },
                            {
                                "text": "se zjišťuje na základě dotazníkového šetření mezi zákazníky",
                                "correct": true
                            },
                            {
                                "text": "542. Povědomí o značce (brand awareness):",
                                "correct": false
                            },
                            {
                                "text": "není součástí hodnoty značky",
                                "correct": false
                            },
                            {
                                "text": "je významnou součástí hodnoty značky",
                                "correct": true
                            },
                            {
                                "text": "zahrnuje míru rozpoznání značky a míru vybavení značky",
                                "correct": true
                            },
                            {
                                "text": "zahrnuje míru rozpoznání značky, ale nikoli míru vybavení značky",
                                "correct": false
                            }
                        ]
                    },
                    {
                        "text": "543. Model životního cyklu produktu předpokládá, že ve fázi růstu:",
                        "answers": [
                            {
                                "text": "roste konkurence",
                                "correct": true
                            },
                            {
                                "text": "roste poptávka velmi pomalu, důsledku toho klesá zisk",
                                "correct": false
                            },
                            {
                                "text": "klesá konkurence",
                                "correct": false
                            },
                            {
                                "text": "roste velmi rychle poptávka, tržby i zisk",
                                "correct": true
                            }
                        ]
                    },
                    {
                        "text": "544. Podle počtu vyráběných výrobků rozeznáváme výrobu:",
                        "answers": [
                            {
                                "text": "plynulou, vázanou a zakázkovou",
                                "correct": false
                            },
                            {
                                "text": "hlavní, vedlejší a přidruženou",
                                "correct": false
                            },
                            {
                                "text": "kusovou, sériovou a hromadnou",
                                "correct": true
                            },
                            {
                                "text": "hlavní, vedlejší a doplňkovou",
                                "correct": false
                            }
                        ]
                    },
                    {
                        "text": "545. Výhodou malého výrobního podniku oproti velkému výrobnímu podniku je:",
                        "answers": [
                            {
                                "text": "snáze získává úvěr od banky",
                                "correct": false
                            },
                            {
                                "text": "dosahování vyšších zisků díky kusové výrobě",
                                "correct": false
                            },
                            {
                                "text": "může si dovolit výzkumné a vývojové oddělení",
                                "correct": false
                            },
                            {
                                "text": "má schopnost pružně reagovat na změnu poptávky",
                                "correct": true
                            }
                        ]
                    },
                    {
                        "text": "546. Model životního cyklu produktu předpokládá, že ve fázi uvedení na trh:",
                        "answers": [
                            {
                                "text": "bývá míra konkurence relativně nízká",
                                "correct": true
                            },
                            {
                                "text": "bývá růst tržeb typicky velmi rychlý a zisk maximální",
                                "correct": false
                            },
                            {
                                "text": "bývá míra konkurence extrémně vysoká",
                                "correct": false
                            },
                            {
                                "text": "bývá růst tržeb typicky pomalý a zisk záporný",
                                "correct": true
                            }
                        ]
                    },
                    {
                        "text": "547. Pro cenu platí:",
                        "answers": [
                            {
                                "text": "cena je jediné „P“ marketingového mixu, které pro firmu představuje výnosy",
                                "correct": true
                            },
                            {
                                "text": "cena je jednoznačně nejflexibiln4ějším nástrojem marketingového mixu",
                                "correct": true
                            },
                            {
                                "text": "cena nemá vazbu na positioning značky",
                                "correct": false
                            },
                            {
                                "text": "cena je jednoznačně nejméně pružným nástrojem marketingového mixu",
                                "correct": false
                            }
                        ]
                    },
                    {
                        "text": "548. Model životního cyklu produktu předpokládá, že ve fázi zralosti:",
                        "answers": [
                            {
                                "text": "rostou tržby pomaleji a postupně klesá zisk",
                                "correct": true
                            },
                            {
                                "text": "vládne na trhu silná konkurence, později některé méně úspěšné firmy opouštějí trh",
                                "correct": true
                            },
                            {
                                "text": "rostou tržby i zisk velmi rychlým tempem",
                                "correct": false
                            },
                            {
                                "text": "je konkurence nejnižší ze všech fází životního cyklu",
                                "correct": false
                            }
                        ]
                    },
                    {
                        "text": "549. Penetrační strategie:",
                        "answers": [
                            {
                                "text": "je vhodná zejména u produktů, které jsou ve fází úpadku",
                                "correct": false
                            },
                            {
                                "text": "je vhodná zejména v případech, kdy firma uvádí na trh inovaci, která je po určitou dobu chráněna před konkurencí",
                                "correct": false
                            },
                            {
                                "text": "jejím cílem je získání co největšího podílu na trhu a vyřazení konkurence ze hry",
                                "correct": true
                            },
                            {
                                "text": "znamená že firma uvádí menší objemy produktu za vyšší cenu",
                                "correct": false
                            }
                        ]
                    },
                    {
                        "text": "550. Pro produktový mix platí:",
                        "answers": [
                            {
                                "text": "šíří sortimentu se rozumí průměrný počet variant (modelů, forem, vůní, příchutí atp.) u každého produktu, který daná firma nabízí",
                                "correct": false
                            },
                            {
                                "text": "šíří sortimentu se rozumí počet produktových řad (resp. kategorii), které daná firma nabízí",
                                "correct": true
                            },
                            {
                                "text": "hloubka sortimentu znamená průměrný počet variant (modelů, forem, vůní, příchutí atp.) u každého produktu, který daná firma nabízí",
                                "correct": true
                            },
                            {
                                "text": "délkou sortimentu se obvykle rozumí průměrný počet produktů v každé produktové řadě (či kategorii), kterou daná firma nabízí",
                                "correct": true
                            },
                            {
                                "text": "hloubkou sortimentu se rozumí počet produktových řad (resp. kategorií), které daná firma nabízí",
                                "correct": false
                            },
                            {
                                "text": "relativně malý počet produktů generuje většinu zisku firmy",
                                "correct": true
                            }
                        ]
                    },
                    {
                        "text": "551. Cenotvorba produktového mixu zahrnuje mimo jiné:",
                        "answers": [
                            {
                                "text": "rozhodnutí o cenách jednotlivých produktů v dané produktové řadě",
                                "correct": true
                            },
                            {
                                "text": "rozhodnutí o cenách komplementárních produktů",
                                "correct": true
                            },
                            {
                                "text": "volbu cílového zákaznického segmentu",
                                "correct": false
                            },
                            {
                                "text": "stanovení positioningu značky",
                                "correct": false
                            }
                        ]
                    },
                    {
                        "text": "552.Model životního cyklu produktu předpokládá, že:",
                        "answers": [
                            {
                                "text": "fáze uvedení na trh je typicky nejdelší stádium z celého cyklu",
                                "correct": false
                            },
                            {
                                "text": "fáze růstu je typicky nejdelší stádium z celého cyklu",
                                "correct": false
                            },
                            {
                                "text": "fáze zralosti typicky nejdelší stádium z celého cyklu",
                                "correct": true
                            },
                            {
                                "text": "během fáze zralosti se na trhu objeví nový produkt, který se stane pro stávající produkt substitutem",
                                "correct": true
                            }
                        ]
                    },
                    {
                        "text": "553.Mezi typické nástroje direct marketingu patří:",
                        "answers": [
                            {
                                "text": "emailing",
                                "correct": true
                            },
                            {
                                "text": "výhodná balení",
                                "correct": false
                            },
                            {
                                "text": "direct mail",
                                "correct": true
                            },
                            {
                                "text": "event",
                                "correct": false
                            },
                            {
                                "text": "telemarketing",
                                "correct": true
                            }
                        ]
                    },
                    {
                        "text": "554. Financování investic v podniku z vlastních zdrojů zahrnuje:",
                        "answers": [
                            {
                                "text": "leasing",
                                "correct": false
                            },
                            {
                                "text": "investiční úvěr",
                                "correct": false
                            },
                            {
                                "text": "výnosy z prodeje a z likvidace hmotného majetku a zásob",
                                "correct": true
                            },
                            {
                                "text": "dlouhodobé rezervy",
                                "correct": false
                            }
                        ]
                    },
                    {
                        "text": "555. Pro podporu prodeje platí:",
                        "answers": [
                            {
                                "text": "jde o soubor technik, mezi které patří např. sampling, prémie nebo přímo slevy",
                                "correct": true
                            },
                            {
                                "text": "jedná se o jeden ze základních nástrojů komunikačního mixu",
                                "correct": true
                            },
                            {
                                "text": "jde o soubor technik podporujících okamžitý prodej či vyzkoušení produktu",
                                "correct": true
                            },
                            {
                                "text": "jde o soubor technik, mezi které patří např. product placement",
                                "correct": false
                            },
                            {
                                "text": "jde o nástroj komunikačního mixu, který lze ztotožnit s osobním prodejem",
                                "correct": false
                            }
                        ]
                    },
                    {
                        "text": "556: Stačí vždy oprávky na reprodukci existujících stálých aktiv?",
                        "answers": [
                            {
                                "text": "NE",
                                "correct": false
                            },
                            {
                                "text": "ANO",
                                "correct": false
                            }
                        ]
                    },
                    {
                        "text": "558. Krizová komunikace:",
                        "answers": [
                            {
                                "text": "bývá považována za součást podpory prodeje",
                                "correct": false
                            },
                            {
                                "text": "bývá považována za součást direct marketingu",
                                "correct": false
                            },
                            {
                                "text": "je komunikace v případech, kdy je pověst značky ohrožena negativní publicitou",
                                "correct": true
                            },
                            {
                                "text": "je reklamní kampaň, která má jen minimální rozpočet",
                                "correct": false
                            }
                        ]
                    },
                    {
                        "text": "559. Selektivní distribuce je strategie:",
                        "answers": [
                            {
                                "text": "při které firma volí jen jednoho distributora, a tomu dává výhradní právo prodávající její produkty",
                                "correct": false
                            },
                            {
                                "text": "při které se firma snaží, aby byl její produkt dostupný zákazníkům kdykoliv a kdekoliv si vzpomenou",
                                "correct": false
                            },
                            {
                                "text": "při které firma využívá co největší počet distribučních míst, včetně těch, která lákají zákazníky na nízkou cenu",
                                "correct": false
                            },
                            {
                                "text": "která je kompromisem mezi strategií intenzivní distribuce a strategií exkluzivní distribuce",
                                "correct": true
                            }
                        ]
                    },
                    {
                        "text": "560. Jako gerilový marketing bývají označovány:",
                        "answers": [
                            {
                                "text": "nekonvenční až kontroverzní komunikační kampaně, které mají cílovou skupinu razantním způsobem překvapit",
                                "correct": true
                            },
                            {
                                "text": "konvenční reklamní kampaně v televizi",
                                "correct": false
                            },
                            {
                                "text": "kampaně využívající outdoorovou reklamu",
                                "correct": false
                            },
                            {
                                "text": "kampaně využívající sampling",
                                "correct": false
                            }
                        ]
                    },
                    {
                        "text": "561. POP či POS komunikace",
                        "answers": [
                            {
                                "text": "nemá v současné marketingové praxi výraznější uplatnění",
                                "correct": false
                            },
                            {
                                "text": "jedná se o formu reklamy využívající product placement",
                                "correct": false
                            },
                            {
                                "text": "jedná se o soubor nástrojů, mezi které patří např.: druhotná umístění",
                                "correct": true
                            },
                            {
                                "text": "jedná se o formu on-line reklamy využívající pop-up okna",
                                "correct": false
                            }
                        ]
                    },
                    {
                        "text": "562. V praxi se častěji používá:",
                        "answers": [
                            {
                                "text": "úročení je sice povoleno, ale v praxi se nepoužívá",
                                "correct": false
                            },
                            {
                                "text": "v roce 2006 bylo v EU úročení zakázáno",
                                "correct": false
                            },
                            {
                                "text": "složené i jednoduché úročení zhruba stejněcena",
                                "correct": false
                            },
                            {
                                "text": "jednoduché úročení",
                                "correct": false
                            }
                        ]
                    },
                    {
                        "text": "563. Může podnik realizovat investiční projekt finančním leasingem?",
                        "answers": [
                            {
                                "text": "ano",
                                "correct": true
                            },
                            {
                                "text": "ne",
                                "correct": false
                            }
                        ]
                    }
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

  return (
    <>
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
    </>
  );
}
