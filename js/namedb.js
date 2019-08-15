var prefixes = [

    {
        "female": "Akor",
        "male": "Alak",
        "eng": "beloved, best, first",
        "hun": "szeretett, legjobb, első",
        "role": "A"
    },
    {
        "female": "Alaun",
        "male": "Alton",
        "eng": "lightning, powerful",
        "hun": "villám, hatalmas",
        "role": "FW"
    },
    {
        "female": "Aly",
        "male": "Kel",
        "eng": "legendary, singing, song",
        "hun": "legendás, éneklő, ének",
        "role": "A"
    },
    {
        "female": "Ang",
        "male": "Adin",
        "eng": "beast, monstrous, savage",
        "hun": "szörny, szörnyű, vad",
        "role": "A"
    },
    {
        "female": "Ardul",
        "male": "Amal",
        "eng": "blessed, divine, godly",
        "hun": "áldott, isteni",
        "role": "A"
    },
    {
        "female": "Aun",
        "male": "Ant",
        "eng": "crypt, dead, deadly, death",
        "hun": "kripta, halott, halálos, halál",
        "role": "CWR"
    },
    {
        "female": "Bae",
        "male": "Bar",
        "eng": "fate, fated, luck, lucky",
        "hun": "sors, végzetes, szerencse, szerencsés",
        "role": "A"
    },
    {
        "female": "Bal",
        "male": "Bel",
        "eng": "burned, burning, fire, flame",
        "hun": "égett, égő, tűz, láng",
        "role": "W"
    },
    {
        "female": "Belar",
        "male": "Bruh",
        "eng": "arrow, lance, pierced",
        "hun": "nyíl, lándzsa, átszúrt",
        "role": "FR"
    },
    {
        "female": "Briz",
        "male": "Berg",
        "eng": "graceful, fluid, water, wet",
        "hun": "kecses, folyadék, víz, nedves",
        "role": "A"
    },
    {
        "female": "Bur",
        "male": "Bhin",
        "eng": "craft, crafty, sly",
        "hun": "jártas, ravasz",
        "role": "R"
    },
    {
        "female": "Chal",
        "male": "Chasz",
        "eng": "earth, stable",
        "hun": "föld, stabil",
        "role": "A"
    },
    {
        "female": "Char",
        "male": "Kron",
        "eng": "sick, venom, venomed",
        "hun": "beteg, méreg, mérgezett",
        "role": "A"
    },
    {
        "female": "Chess",
        "male": "Cal",
        "eng": "noble, lady, lord",
        "hun": "nemes, úr, hölgy",
        "role": "A"
    },
    {
        "female": "Dhaun",
        "male": "Dhaun",
        "eng": "infested, plague",
        "hun": "fertőzött, csapás, pestis",
        "role": "A"
    },
    {
        "female": "Dil",
        "male": "Dur",
        "eng": "cold, ice, still",
        "hun": "hűvös, jég, mozdulatlan",
        "role": "RW"
    },
    {
        "female": "Dirz",
        "male": "Div",
        "eng": "dream, dreaming, fantasy",
        "hun": "álom, álmodás, képzelet",
        "role": "A"
    },
    {
        "female": "Dris",
        "male": "Riz",
        "eng": "ash, dawn, east, eastern",
        "hun": "hamu, hajnal, kelet, keleti",
        "role": "A"
    },
    {
        "female": "Eclav",
        "male": "Elk",
        "eng": "chaos, mad, madness",
        "hun": "káosz, őrült, őrület",
        "role": "A"
    },
    {
        "female": "Elvan",
        "male": "Kalan",
        "eng": "elf, elven, far, lost",
        "hun": "elf, távoli, elveszett",
        "role": "A"
    },
    {
        "female": "Elv",
        "male": "Elaug",
        "eng": "drow, mage, power",
        "hun": "sötét elf, mágus, hatalom",
        "role": "W"
    },    
    {
        "female": "Erel",
        "male": "Rhyl",
        "eng": "eye, moon, spy",
        "hun": "szem, hold, kém",
        "role": "CR"
    },
    {
        "female": "Ethe",
        "male": "Erth",
        "eng": "mithril, resolute",
        "hun": "mithril, elszánt",
        "role": "A"
    },
    {
        "female": "Faer",
        "male": "Selds",
        "eng": "oath, sworn, vow",
        "hun": "eskü, hites, ígéret",
        "role": "A"
    },
    {
        "female": "Felyn",
        "male": "Fil",
        "eng": "pale, thin, weak, white",
        "hun": "sápadt, vékony, gyenge, fehér",
        "role": "RFW"
    },
    {
        "female": "Filf",
        "male": "Phar",
        "eng": "dwarf, dwarven, treacherous",
        "hun": "törpe, áruló",
        "role": "A"
    },
    {
        "female": "Gauss",
        "male": "Orgoll",
        "eng": "dread, fear, feared, vile",
        "hun": "rettegett, félelem, félt, hitvány",
        "role": "A"
    },
    {
        "female": "G'eld",
        "male": "G'eld",
        "eng": "friend, spider",
        "hun": "barát, pók",
        "role": "A"
    },
    {
        "female": "Ghuan",
        "male": "Ghuan",
        "eng": "accursed, curse, unlucky",
        "hun": "megátkozott, átok, szerencsétlen",
        "role": "A"
    },
    {
        "female": "Gin",
        "male": "Din",
        "eng": "berserk, berserker, orc, wild",
        "hun": "megvadult, dühödt, ork, vad",
        "role": "FR"
    },
    {
        "female": "Grey",
        "male": "Gul",
        "eng": "ghost, pale, unliving",
        "hun": "szellem, sápadt, élettelen",
        "role": "A"
    },
    {
        "female": "Hael",
        "male": "Hatch",
        "eng": "marked, trail, way",
        "hun": "megjelölt, nyom, út",
        "role": "A"
    },
    {
        "female": "Hal",
        "male": "Sol",
        "eng": "deft, nimble, spider",
        "hun": "ügyes, fürge, pók",
        "role": "FR"
    },
    {
        "female": "Houn",
        "male": "Rik",
        "eng": "magic, ring, staff",
        "hun": "mágia, gyűrű, bot",
        "role": "CW"
    },
    {
        "female": "Iiv",
        "male": "Dip",
        "eng": "liege, war, warrior",
        "hun": "hűbéres, háború, harcos",
        "role": "F"
    },
    {
        "female": "Iim",
        "male": "Iim",
        "eng": "life, living, spirit, soul",
        "hun": "élet, élő, szellem, lélek",
        "role": "A"
    },
    {
        "female": "Illiam",
        "male": "Im",
        "eng": "devoted, heart, love",
        "hun": "elkötelezett, szív, szeretet",
        "role": "A"
    },
    {
        "female": "In",
        "male": "Sorn",
        "eng": "enchanted, spell",
        "hun": "elbájolt, varázslat",
        "role": "CW"
    },
    {
        "female": "Ilph",
        "male": "Ilph",
        "eng": "emerald, green, lush, tree",
        "hun": "smaragd, zöld, buja, fa",
        "role": "A"
    },
    {
        "female": "Irae",
        "male": "Ilzt",
        "eng": "arcane, mystic, wizard",
        "hun": "arkán, misztikus, varázsló",
        "role": "W"
    },
    {
        "female": "Irr",
        "male": "Izz",
        "eng": "hidden, mask, masked",
        "hun": "rejtett, maszk, elmaszkolt",
        "role": "FR"
    },
    {
        "female": "Iym",
        "male": "Ist",
        "eng": "endless, immortal",
        "hun": "végtelen, öröklétű",
        "role": "A"
    },
    {
        "female": "Jan",
        "male": "Duag",
        "eng": "shield, warded",
        "hun": "pajzs, védett",
        "role": "CFW"
    },
    {
        "female": "Jhael",
        "male": "Gel",
        "eng": "ambitious, clan, kin, family",
        "hun": "ambíciózus, klán, fajta, család",
        "role": "A"
    },
    {
        "female": "Jhul",
        "male": "Jar",
        "eng": "charmed, rune, symbol",
        "hun": "elbűvölt, rúna, szimbólum",
        "role": "CW"
    },
    {
        "female": "Jys",
        "male": "Driz",
        "eng": "hard, steel, unyielding",
        "hun": "kemény, acél, hajthatatlan",
        "role": "A"
    },
    {
        "female": "Lael",
        "male": "Llt",
        "eng": "iron, west, western",
        "hun": "vas, nyugat, nyugati",
        "role": "A"
    },
    {
        "female": "Lar",
        "male": "Les",
        "eng": "binding, bound, law, lawful",
        "hun": "kötő, kötés, törvény, törvényes",
        "role": "A"
    },
    {
        "female": "Lineer",
        "male": "Mourn",
        "eng": "legend, legendary, mythical",
        "hun": "legenda, legendás, mítikus",
        "role": "A"
    },
    {
        "female": "Lird",
        "male": "Ryld",
        "eng": "brand, branded, owned, slave",
        "hun": "márka, márkás, tulajdonolt, rabszolga",
        "role": "FRW"
    },
    {
        "female": "Lua",
        "male": "Lyme",
        "eng": "bright, crystal, light",
        "hun": "ragyogó, kristály, fény",
        "role": "A"
    },
    {
        "female": "Mal",
        "male": "Malag",
        "eng": "mystery, secret",
        "hun": "rejtély, titok",
        "role": "A"
    },
    {
        "female": "May",
        "male": "Mas",
        "eng": "beautiful, beauty, silver",
        "hun": "szép, szépség, ezüst",
        "role": "A"
    },
    {
        "female": "Micar",
        "male": "Micar",
        "eng": "lost, poison, widow",
        "hun": "elveszett, méreg, özvegy",
        "role": "CRF"
    },
    {
        "female": "Min",
        "male": "Ran",
        "eng": "lesser, minor, second",
        "hun": "kisebb, apró, második",
        "role": "A"
    },
    {
        "female": "Mol",
        "male": "Go",
        "eng": "blue, storm, thunder, wind",
        "hun": "kék, vihar, mennydörgés, szél",
        "role": "A"
    },
    {
        "female": "Myr",
        "male": "Nym",
        "eng": "lost, skeleton, skull",
        "hun": "elveszett, csontváz, koponya",
        "role": "A"
    },
    {
        "female": "Nath",
        "male": "Mer",
        "eng": "doom, doomed, fate",
        "hun": "végzet, kudarc, sors",
        "role": "A"
    },
    {
        "female": "Ned",
        "male": "Nad",
        "eng": "cunning, genius, mind, thought",
        "hun": "ravasz, zseniális, tudat, gondolat",
        "role": "A"
    },
    {
        "female": "Nhil",
        "male": "Nal",
        "eng": "fear, horrible, horror, outraged",
        "hun": "félelem, szörnyű, horror, felháborodott",
        "role": "A"
    },
    {
        "female": "Neer",
        "male": "Neer",
        "eng": "core, root, strong",
        "hun": "mag, gyökér, erős",
        "role": "A"
    },
    {
        "female": "Null",
        "male": "Nil",
        "eng": "sad, tear, weeping",
        "hun": "szomorú, könny, síró",
        "role": "A"
    },
    {
        "female": "Olor",
        "male": "Omar",
        "eng": "skin, tattoo, tattooed",
        "hun": "bőr, tetoválás, tetovált",
        "role": "A"
    },
    {
        "female": "Pellan",
        "male": "Relon",
        "eng": "north, platinum, wind",
        "hun": "észak, platinum, szél",
        "role": "A"
    },
    {
        "female": "Phaer",
        "male": "Vorn",
        "eng": "honor, honored",
        "hun": "becsület, megbecsült",
        "role": "A"
    },
    {
        "female": "Phyr",
        "male": "Phyx",
        "eng": "bless, blessed, blessing",
        "hun": "áldás, áldott, megáldó",
        "role": "CFW"
    },
    {
        "female": "Qualn",
        "male": "Quil",
        "eng": "mighty, ocean, sea",
        "hun": "hatalmas, óceán, tenger",
        "role": "A"
    },
    {
        "female": "Quar",
        "male": "Quar",
        "eng": "aged, eternal, time",
        "hun": "koros, örökkévaló, idő",
        "role": "A"
    },
    {
        "female": "Quav",
        "male": "Quev",
        "eng": "charmed, docile, friend",
        "hun": "elbűvölt, engedelmes, barát",
        "role": "A"
    },
    {
        "female": "Qil",
        "male": "Quil",
        "eng": "foe, goblin, slave",
        "hun": "ellenség, goblin, rabszolga",
        "role": "FRW"
    },
    {
        "female": "Rauv",
        "male": "Welv",
        "eng": "cave, rock, stone",
        "hun": "barlang, szikla, kő",
        "role": "A"
    },
    {
        "female": "Ril",
        "male": "Ryl",
        "eng": "foretold, omen",
        "hun": "megjósolt, ómen",
        "role": "A"
    },
    {
        "female": "Sbat",
        "male": "Szor",
        "eng": "amber, yellow",
        "hun": "borostyán, sárga",
        "role": "A"
    },
    {
        "female": "Sab",
        "male": "Tsab",
        "eng": "abyss, empty, void",
        "hun": "abyss, üres, üresség",
        "role": "A"
    },
    {
        "female": "Shi'n",
        "male": "Kren",
        "eng": "fool, foolish, young",
        "hun": "ostoba, bolond, fiatal",
        "role": "FR"
    },
    {
        "female": "Shri",
        "male": "Ssz",
        "eng": "silk, silent",
        "hun": "selyem, csendes",
        "role": "R"
    },
    {
        "female": "Shur",
        "male": "Shar",
        "eng": "dagger, edge, stiletto",
        "hun": "tőr, szél, gyilok",
        "role": "RF"
    },
    {
        "female": "Shynt",
        "male": "Shynt",
        "eng": "invisible, skilled, unseen",
        "hun": "láthatatlan, képzett",
        "role": "RW"
    },
    {
        "female": "Sin",
        "male": "Szin",
        "eng": "festival, joy, pleasure",
        "hun": "fesztivál, öröm, élmény",
        "role": "A"
    },
    {
        "female": "Ssap",
        "male": "That",
        "eng": "learned, skilled, wise",
        "hun": "tanult, képzett, bölcs",
        "role": "CW"
    },
    {
        "female": "Susp",
        "male": "Spir",
        "eng": "burn, burning, fire",
        "hun": "égő, égés, tűz",
        "role": "A"
    },
    {
        "female": "Talab",
        "male": "Tluth",
        "eng": "love, pain, wound, wounded",
        "hun": "szeretet, fájdalom, seb, sebesült",
        "role": "A"
    },
    {
        "female": "Tal",
        "male": "Tar",
        "eng": "bat, winged",
        "hun": "denevér, szárnyas",
        "role": "A"
    },
    {
        "female": "Triel",
        "male": "Taz",
        "eng": "blade, sharp, sword",
        "hun": "penge, éles, kard",
        "role": "RF"
    },
    {
        "female": "T'riss",
        "male": "Teb",
        "eng": "gold, golden, treasure",
        "hun": "arany, aranyozott, kincs",
        "role": "CFW"
    },
    {
        "female": "Ulvir",
        "male": "Uhls",
        "eng": "faith, faithful, true",
        "hun": "hit, hithű, igaz",
        "role": "CF"
    },
    {
        "female": "Umrae",
        "male": "Hurz",
        "eng": "blood, body, flesh",
        "hun": "vér, test, hús",
        "role": "A"
    },
    {
        "female": "Vas",
        "male": "Vesz",
        "eng": "abyss, deep, profound",
        "hun": "abyss, mélység, mély",
        "role": "A"
    },
    {
        "female": "Vic",
        "male": "Vic",
        "eng": "black, dark, darkness",
        "hun": "fekete, sötét, sötétség",
        "role": "A"
    },
    {
        "female": "Vier",
        "male": "Val",
        "eng": "bold, hero, heroic",
        "hun": "bátor, hős, hősies",
        "role": "CF"
    },
    {
        "female": "Vlon",
        "male": "Wod",
        "eng": "deep, hidden, south, southern",
        "hun": "mély, rejtett, dél, déli",
        "role": "A"
    },
    {
        "female": "Waer",
        "male": "Wehl",
        "eng": "humble, third, trivial",
        "hun": "szerény, harmadik, jelentéktelen",
        "role": "FRW"
    },
    {
        "female": "Wuyon",
        "male": "Wruz",
        "eng": "blooded, crimson, ruby",
        "hun": "véres, bíbor, rubin",
        "role": "A"
    },
    {
        "female": "Xull",
        "male": "Url",
        "eng": "demon, fiend, fiendish",
        "hun": "démon, ördög, ördögi",
        "role": "A"
    },
    {
        "female": "Xun",
        "male": "Xun",
        "eng": "riddle, spinning, thread, web",
        "hun": "rejtély, forgó, fonál, háló",
        "role": "A"
    },
    {
        "female": "Yas",
        "male": "Yaz",
        "eng": "dusk, haunted, shadow",
        "hun": "szürkület, kísértetjárta, árny",
        "role": "A"
    },
    {
        "female": "Zar",
        "male": "Zakn",
        "eng": "dragon, lithe, rage, wyrm",
        "hun": "sárkány, karcsú, düh, féreg",
        "role": "A"
    },
    {
        "female": "Zebey",
        "male": "Zek",
        "eng": "ancient, elder, respected",
        "hun": "ősi, öreg, tisztelt",
        "role": "A"
    },
    {
        "female": "Zes",
        "male": "Zsz",
        "eng": "forgotten, old, unknown",
        "hun": "elfeledett, öreg, ismeretlen",
        "role": "A"
    },
    {
        "female": "Zilv",
        "male": "Vuz",
        "eng": "forgotten, old, unknown 2",
        "hun": "elfeledett, öreg, ismeretlen 2",
        "role": "A"
    }    

];




var suffixes = [
    {
        "female": "a",
        "male": "agh",
        "eng": "breaker, destruction, end, omega",
        "hun": "megtörő, pusztítás, vég, omega",
        "role": "CF"
    },
    {
        "female": "ace",
        "male": "as",
        "eng": "servant, scholar, wizard",
        "hun": "szolga, tudós, varázsló",
        "role": "W"
    },
    {
        "female": "ae",
        "male": "aun",
        "eng": "dance, dancer, life, player",
        "hun": "tánc, táncos, élet, játékos",
        "role": "A"
    },
    {
        "female": "aer",
        "male": "d",
        "eng": "blood, blood of, heir",
        "hun": "vér, leszármazottja, örökös",
        "role": "A"
    },
    {
        "female": "afae",
        "male": "afein",
        "eng": "bane, executioner, slayer",
        "hun": "csapás, kivégző, ölő",
        "role": "FCR"
    },
    {
        "female": "afay",
        "male": "aufein",
        "eng": "eyes, eyes of, seer, seeress",
        "hun": "szem, szeme, látnok",
        "role": "A"
    },
    {
        "female": "ala",
        "male": "launim",
        "eng": "healer, priestess, priest",
        "hun": "gyógyító, papnő, pap",
        "role": "C"
    },
    {
        "female": "anna",
        "male": "erin",
        "eng": "advisor, counselor to",
        "hun": "tanácsos, tanácsadó",
        "role": "CW"
    },
    {
        "female": "arra",
        "male": "atar",
        "eng": "queen, prince, queen of, prince of",
        "hun": "királynő, herceg",
        "role": "A"
    },
    {
        "female": "aste",
        "male": "aste",
        "eng": "bearer, keeper, slaver",
        "hun": "hordozó, megtartó, rabszolgatartó",
        "role": "A"
    },
    {
        "female": "avin",
        "male": "aonar",
        "eng": "guardian, guard, shield",
        "hun": "őrző, őr, pajzs",
        "role": "CF"
    },
    {
        "female": "ayne",
        "male": "al",
        "eng": "lunatic, maniac, manic, rage",
        "hun": "holdkóros, mániákus, düh",
        "role": "A"
    },   
    {
        "female": "baste",
        "male": "gloth",
        "eng": "path, walker",
        "hun": "út, vándor",
        "role": "A"
    },   
    {
        "female": "breena",
        "male": "antar",
        "eng": "matriarch, patriarch, ruler",
        "hun": "családfő anya, családfő apa, uralkodó",
        "role": "A"
    },   
    {
        "female": "bryn",
        "male": "lyn",
        "eng": "agent, assassin, killer",
        "hun": "ügynök, bérgyilkos, gyilkos",
        "role": "FR"
    },   
    {
        "female": "cice",
        "male": "roos",
        "eng": "born of, child, young",
        "hun": "született, gyermek, fiatal",
        "role": "A"
    },   
    {
        "female": "cyrl",
        "male": "axle",
        "eng": "ally, companion, friend",
        "hun": "szövetséges, társ, barát",
        "role": "A"
    },   
    {
        "female": "da",
        "male": "daer",
        "eng": "illusionist, trickster",
        "hun": "illuzionista, tréfamester",
        "role": "RW"
    },   
    {
        "female": "dia",
        "male": "drin",
        "eng": "rogue",
        "hun": "stealer",
        "role": "R"
    },   
    {
        "female": "diira",
        "male": "diirn",
        "eng": "initiate, sister, brother",
        "hun": "beavatott, testvér",
        "role": "A"
    },   
    {
        "female": "dra",
        "male": "zar",
        "eng": "lover, match, mate",
        "hun": "szerető, pár, társ",
        "role": "A"
    },   
    {
        "female": "driira",
        "male": "driirn",
        "eng": "mother, father, teacher",
        "hun": "anya, apa, tanító",
        "role": "A"
    },   
    {
        "female": "dril",
        "male": "dorl",
        "eng": "knight, sword, warrior",
        "hun": "lovag, kard, harcos",
        "role": "CF"
    },   
    {
        "female": "e",
        "male": "e",
        "eng": "servant, slave, vassal",
        "hun": "szolga, rabszolga, hűbéres",
        "role": "FRW"
    },   
    {
        "female": "eari",
        "male": "erd",
        "eng": "giver, god, patron",
        "hun": "adó, isten, patrónus",
        "role": "A"
    },   
    {
        "female": "eyl",
        "male": "eyl",
        "eng": "archer, arrow, flight, flyer",
        "hun": "íjász, nyílvessző, repülés, repülő",
        "role": "CFR"
    },   
    {
        "female": "ffyn",
        "male": "fein",
        "eng": "ministrel, singer, song",
        "hun": "lantos, énekes, dal",
        "role": "A"
    },   
    {
        "female": "fryn",
        "male": "fryn",
        "eng": "champion, victor, weapon, weapon of",
        "hun": "bajnok, győztes, fegyver, fegyvere",
        "role": "CFR"
    },   
    {
        "female": "iara",
        "male": "ica",
        "eng": "baron, duke, lady, lord",
        "hun": "báró, herceg, hölgy, úr",
        "role": "A"
    },   
    {
        "female": "ice",
        "male": "eth",
        "eng": "obsession, taker, taken",
        "hun": "megszállottság, elvevő, elvett",
        "role": "A"
    },   
    {
        "female": "idil",
        "male": "imar",
        "eng": "alpha, beginning, creator of, maker",
        "hun": "alfa, kezdet, létrehozó",
        "role": "A"
    },   
    {
        "female": "iira",
        "male": "inid",
        "eng": "harbringer, herald",
        "hun": "előjel, hírnök",
        "role": "A"
    },   
    {
        "female": "inidia",
        "male": "inidia",
        "eng": "secret, wall, warder",
        "hun": "titok, fal, őrző",
        "role": "A"
    },   
    {
        "female": "inil",
        "male": "in",
        "eng": "lady, lord, rider, steed",
        "hun": "hölgy, úr, lovas, táltos",
        "role": "CF"
    },   
    {
        "female": "intra",
        "male": "intra",
        "eng": "envoy, messenger, prophet",
        "hun": "követ, hírhozó, próféta",
        "role": "A"
    },   
    {
        "female": "isstra",
        "male": "atlab",
        "eng": "acolyte, apprentice, student",
        "hun": "tanonc, gyakornok, tanuló",
        "role": "A"
    },   
    {
        "female": "ithra",
        "male": "irahc",
        "eng": "dragon, serpent, wyrm",
        "hun": "sárkány, kígyó, féreg",
        "role": "A"
    },   
    {
        "female": "jra",
        "male": "gos",
        "eng": "beast, biter, stinger",
        "hun": "szörny, harapó, szúró",
        "role": "A"
    },   
    {
        "female": "jss",
        "male": "jss",
        "eng": "scout, stalker",
        "hun": "felderítő, követő",
        "role": "FR"
    },   
    {
        "female": "kacha",
        "male": "kah",
        "eng": "beauty, hair, style",
        "hun": "szépség, haj, stílus",
        "role": "A"
    },   
    {
        "female": "kiira",
        "male": "raen",
        "eng": "apostle, disciple",
        "hun": "apostol, tanítvány",
        "role": "CFW"
    },   
    {
        "female": "lay",
        "male": "din",
        "eng": "flight, flyer, wing, wings",
        "hun": "repülés, repülő, szárny",
        "role": "A"
    },   
    {
        "female": "lara",
        "male": "aghar",
        "eng": "cynic, death, end, victim",
        "hun": "cinikus, halál, vég, áldozat",
        "role": "A"
    },   
    {
        "female": "lin",
        "male": "lin",
        "eng": "arm, armour, commander",
        "hun": "fegyver, vért, parancsnok",
        "role": "CF"
    },   
    {
        "female": "lochar",
        "male": "lochar",
        "eng": "messenger, spider",
        "hun": "hírhozó, pók",
        "role": "A"
    },   
    {
        "female": "myce",
        "male": "myr",
        "eng": "bone, bones, necromancer, witch",
        "hun": "csont, csontok, nekromanta, boszorkány",
        "role": "CW"
    },   
    {
        "female": "mur'ss",
        "male": "mur'ss",
        "eng": "shadow, spy, witness",
        "hun": "árnyék, kém, szemtanú",
        "role": "R"
    },   
    {
        "female": "na",
        "male": "nar",
        "eng": "adept, ghost, spirit",
        "hun": "adeptusz, szellem, lélek",
        "role": "CW"
    },   
    {
        "female": "nilee",
        "male": "olil",
        "eng": "corpse, disease, ravager",
        "hun": "holttest, betegség, romboló",
        "role": "A"
    },   
    {
        "female": "niss",
        "male": "nozz",
        "eng": "chance, gambler, game",
        "hun": "esély, szerencsejátékos, játék",
        "role": "A"
    },   
    {
        "female": "nitra",
        "male": "net",
        "eng": "kicker, returned, risen",
        "hun": "rúgó, visszatért, felemelkedett",
        "role": "A"
    },   
    {
        "female": "nolu",
        "male": "nolu",
        "eng": "art, artist, expert, treasure",
        "hun": "művészet, művész, szakértő, kincs",
        "role": "A"
    },   
    {
        "female": "olin",
        "male": "olin",
        "eng": "ascension, love, lover, lust",
        "hun": "felemelkedés, szerelem, szerető, vágy",
        "role": "A"
    },   
    {
        "female": "onia",
        "male": "onim",
        "eng": "rod, staff, token, wand",
        "hun": "pálca, bot, jelző",
        "role": "CW"
    },   
    {
        "female": "oyss",
        "male": "oomph",
        "eng": "binder, judge, law, prison",
        "hun": "kötő, bíró, törvény, börtön",
        "role": "CFW"
    },   
    {
        "female": "qualyn",
        "male": "qualyn",
        "eng": "ally, caller, kin",
        "hun": "szövetséges, hívó, fajtabéli",
        "role": "A"
    },   
    {
        "female": "quarra",
        "male": "net",
        "eng": "horde, host, legion",
        "hun": "horda, házigazda, légió",
        "role": "CFW"
    },   
    {
        "female": "quiri",
        "male": "oj",
        "eng": "aura, cloak, hide, skin",
        "hun": "aura, köpeny, rejtőzés, bőr",
        "role": "RW"
    },   
    {
        "female": "ra",
        "male": "or",
        "eng": "fool, game, prey, quarry",
        "hun": "ostoba, játék, préda, zsákmány",
        "role": "FRW"
    },   
    {
        "female": "rae",
        "male": "rar",
        "eng": "secret, seeker, quest",
        "hun": "titok, kereső, küldetés",
        "role": "A"
    },   
    {
        "female": "raema",
        "male": "orvir",
        "eng": "crafter, fist, hand",
        "hun": "kézműves, ököl, kéz",
        "role": "A"
    },   
    {
        "female": "raena",
        "male": "olvir",
        "eng": "center, haven, home",
        "hun": "középpont, menedék, otthon",
        "role": "A"
    },   
    {
        "female": "riia",
        "male": "rak",
        "eng": "chaos, storm, tempest",
        "hun": "káosz, vihar",
        "role": "A"
    },   
    {
        "female": "ril",
        "male": "ril",
        "eng": "bandit, enemy, raider, outlaw",
        "hun": "bandita, ellenség, lovas",
        "role": "FR"
    },   
    {
        "female": "riina",
        "male": "ree",
        "eng": "enchanter, mage, spellcaster",
        "hun": "elbájoló, mágus, varázshasználó",
        "role": "CW"
    },   
    {
        "female": "ryna",
        "male": "oyn",
        "eng": "follower, hired, mercenary",
        "hun": "követő, felbérelt, zsoldos",
        "role": "FR"
    },   
    {
        "female": "ryne",
        "male": "ryn",
        "eng": "blooded, elder, experienced",
        "hun": "véres, öreg, tapasztalt",
        "role": "A"
    },   
    {
        "female": "shalee",
        "male": "ral",
        "eng": "abjurer, gaze, watch, watcher",
        "hun": "óvó, tekintet, figyelő",
        "role": "W"
    },   
    {
        "female": "ssysn",
        "male": "rysn",
        "eng": "artifact, dweomer, sorcerer, spell",
        "hun": "ereklye, varázsló, varázslat",
        "role": "CW"
    },   
    {
        "female": "stin",
        "male": "trin",
        "eng": "clan, house, merchant, of the house",
        "hun": "klán, ház, kereskedő",
        "role": "A"
    },   
    {
        "female": "stra",
        "male": "tran",
        "eng": "spider, spinner, weaver",
        "hun": "pók, forgó, szövő",
        "role": "A"
    },   
    {
        "female": "tana",
        "male": "ton",
        "eng": "darkness, lurker, prowler",
        "hun": "sötétség, csavargó",
        "role": "A"
    },   
    {
        "female": "thara",
        "male": "tar",
        "eng": "glyph, marker, rune",
        "hun": "írásjel, jel, rúna",
        "role": "CW"
    },   
    {
        "female": "thrae",
        "male": "olg",
        "eng": "charmer, leader, seducer",
        "hun": "elbájoló, vezető, megigéző",
        "role": "A"
    },   
    {
        "female": "tree",
        "male": "tel",
        "eng": "exile, loner, outcast, pariah",
        "hun": "elűzött, magányos, kitaszított",
        "role": "A"
    },   
    {
        "female": "tyrr",
        "male": "tyrr",
        "eng": "dagger, poison, poisoner, scorpion",
        "hun": "tőr, méreg, mérgező, skorpió",
        "role": "R"
    },   
    {
        "female": "ual",
        "male": "dan",
        "eng": "speed, strider",
        "hun": "sebesség, vándor",
        "role": "FRW"
    },   
    {
        "female": "ue",
        "male": "dor",
        "eng": "arm, artisan, fingers",
        "hun": "kar, kézműves, ujjak",
        "role": "A"
    },   
    {
        "female": "uit",
        "male": "dar",
        "eng": "breath, voice, word",
        "hun": "lehelet, hang, szó",
        "role": "A"
    },   
    {
        "female": "une",
        "male": "diin",
        "eng": "diviner, fate, future, oracle",
        "hun": "jós, sors, jövő, orákulum",
        "role": "CW"
    },   
    {
        "female": "uque",
        "male": "uque",
        "eng": "cavern, digger, mole, tunnel",
        "hun": "barlang, ásó, feltúr, alagút",
        "role": "A"
    },   
    {
        "female": "urra",
        "male": "dax",
        "eng": "nomad, renegade, wanderer",
        "hun": "nomád, renegát, vándor",
        "role": "FRW"
    },   
    {
        "female": "va",
        "male": "ven",
        "eng": "comrade, honor, honored",
        "hun": "társ, becsület, megbecsült",
        "role": "A"
    },   
    {
        "female": "vayas",
        "male": "vayas",
        "eng": "forge, forger, hammer, smith",
        "hun": "kohó, kovács, kalapács",
        "role": "F"
    },   
    {
        "female": "vyll",
        "male": "vyll",
        "eng": "punishment, scourge, whip, zealot",
        "hun": "büntetés, korbács, fanatikus",
        "role": "A"
    },   
    {
        "female": "vyrae",
        "male": "vyr",
        "eng": "mistress, master, overseer",
        "hun": "úrnő, mester, felügyelő",
        "role": "CFW"
    },   
    {
        "female": "wae",
        "male": "hrae",
        "eng": "heir, inheritor, princess",
        "hun": "örökös, hercegnő",
        "role": "A"
    },   
    {
        "female": "wiira",
        "male": "hriir",
        "eng": "senechal of, steward",
        "hun": "udvarnok, inas",
        "role": "FRW"
    },   
    {
        "female": "wyss",
        "male": "hrys",
        "eng": "best, creator, starter",
        "hun": "legjobb, létrehozó, kezdő",
        "role": "A"
    },   
    {
        "female": "xae",
        "male": "zaer",
        "eng": "orb, rank, ruler, scepter",
        "hun": "gömb, rang, uralkodó, jogar",
        "role": "CFW"
    },   
    {
        "female": "xena",
        "male": "zen",
        "eng": "cutter, gem, jewel, jeweler",
        "hun": "vágó, ékkő, ékszer, ékszerész",
        "role": "A"
    },   
    {
        "female": "xyra",
        "male": "zyr",
        "eng": "sage, teller",
        "hun": "látnok, jövendőmondó",
        "role": "CW"
    },   
    {
        "female": "yl",
        "male": "yl",
        "eng": "drow, woman, man",
        "hun": "sötét elf, férfi, nő",
        "role": "A"
    },   
    {
        "female": "ylene",
        "male": "yln",
        "eng": "handmaiden, squire, maiden, youth",
        "hun": "udvarhölgy, fegyverhordozó",
        "role": "A"
    },   
    {
        "female": "ymma",
        "male": "inyon",
        "eng": "drider, feet, foot, runner",
        "hun": "drider, láb, futó",
        "role": "A"
    },   
    {
        "female": "ynda",
        "male": "yrd",
        "eng": "captain, custodian, marshal, ranger",
        "hun": "kapitány, marsal, vándor",
        "role": "A"
    },   
    {
        "female": "ynrae",
        "male": "yraen",
        "eng": "heretic, rebel, riot, void",
        "hun": "hitszegő, lázadó, üres",
        "role": "FRW"
    },   
    {
        "female": "vrae",
        "male": "vrae",
        "eng": "architect, founder, mason",
        "hun": "építész, alapító, kőműves",
        "role": "A"
    },   
    {
        "female": "yrr",
        "male": "yrr",
        "eng": "protector, rival, wielder",
        "hun": "védelmező, rivális",
        "role": "A"
    },     
    {
        "female": "zyne",
        "male": "zt",
        "eng": "finder, hunter",
        "hun": "találó, vadász",
        "role": "A"
    }  

	
	
	
];