KeymanWeb.KR(new Keyboard_mlym_mozhi());
function Keyboard_mlym_mozhi()
{
  this.KI="Keyboard_mlym_mozhi";
  this.KN="Malayalam Mozhi";
  this.KV=null;
  this.KH='';
  this.KM=0;
  this.KBVER="1.0.3";
  this.s_consonants="കഖഗഘങചഛജഝഞടഠഡഢണതഥദധനപഫബഭമയരലവശഷസഹളഴറ";
  this.s_vowels="അആഇഈഉഊഋൠഌൡഎഏഐഒഓഔ";
  this.s_vowelsigns="ാിീുൂൃൄൢൣെേൈൊോൗ";
  this.s_chills="ൺൻർൽൾൿം";
  this.s_chillSource="NnrlLcm";
  this.s_chillBases="ണനരലളകമ";
  this.s_vDirectSmallValues="അഎഇഒഉ";
  this.s_vDirectSmallKeys="aeiou";
  this.s_vDirectCapsValues="ആഏഐഓഋഊ";
  this.s_vDirectCapsKeys="AEIORU";
  this.s_thinConsonants="കഗചജടഡതദപബസശ";
  this.s_thickConsonants="ഖഘഛഝഠഢഥധഫഭഷഴ";
  this.s_cDirectSmallValues="ബദഫഗഹജകമപസവവയശ";
  this.s_cDirectSmallKeys="bdfghjkmpsvwyz";
  this.s_cDirectCapsValues="ഡശട";
  this.s_cDirectCapsKeys="DST";
  this.s_nonSa="കഖഗഘങചഛജഝഞടഠഡഢണതഥദധനപഫബഭമയരലവശഷഹളഴറ";
  this.s_escapable="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ\\>_~";
  this.KVER="9.0.523.0";
  this.gs=function(t,e) {
    return this.g_main(t,e);
  };
  this.g_main=function(t,e) {
    var k=KeymanWeb,r=0,m=0;
    if(k.KKM(e,16400,51)&&k.KCM(1,t,"ർ",1)) {   // Line 248
      r=m=1;
      k.KO(1,t,"ൎ");
    }
    else if(k.KKM(e,16400,56)&&k.KCM(1,t,"\\",1)) {   // Line 336
      r=m=1;
      k.KO(1,t,"×");
    }
    else if(k.KKM(e,16384,189)&&k.KCM(1,t,"\\",1)) {   // Line 335
      r=m=1;
      k.KO(1,t,"−");
    }
    else if(k.KKM(e,16384,191)&&k.KCM(1,t,"/",1)) {   // Line 324
      r=m=1;
      k.KO(1,t,"ऽ");
    }
    else if(k.KKM(e,16384,191)&&k.KCM(1,t,"\\",1)) {   // Line 337
      r=m=1;
      k.KO(1,t,"÷");
    }
    else if(k.KKM(e,16384,48)&&k.KCM(1,t,"\\",1)) {   // Line 268
      r=m=1;
      k.KO(1,t,"൦");
    }
    else if(k.KKM(e,16384,49)&&k.KCM(1,t,"\\",1)) {   // Line 269
      r=m=1;
      k.KO(1,t,"൧");
    }
    else if(k.KKM(e,16384,50)&&k.KCM(1,t,"\\",1)) {   // Line 270
      r=m=1;
      k.KO(1,t,"൨");
    }
    else if(k.KKM(e,16384,51)&&k.KCM(1,t,"\\",1)) {   // Line 271
      r=m=1;
      k.KO(1,t,"൩");
    }
    else if(k.KKM(e,16384,52)&&k.KCM(1,t,"\\",1)) {   // Line 272
      r=m=1;
      k.KO(1,t,"൪");
    }
    else if(k.KKM(e,16384,53)&&k.KCM(1,t,"\\",1)) {   // Line 273
      r=m=1;
      k.KO(1,t,"൫");
    }
    else if(k.KKM(e,16384,54)&&k.KCM(1,t,"\\",1)) {   // Line 274
      r=m=1;
      k.KO(1,t,"൬");
    }
    else if(k.KKM(e,16384,55)&&k.KCM(1,t,"\\",1)) {   // Line 275
      r=m=1;
      k.KO(1,t,"൭");
    }
    else if(k.KKM(e,16384,56)&&k.KCM(1,t,"\\",1)) {   // Line 276
      r=m=1;
      k.KO(1,t,"൮");
    }
    else if(k.KKM(e,16384,57)&&k.KCM(1,t,"\\",1)) {   // Line 277
      r=m=1;
      k.KO(1,t,"൯");
    }
    else if(k.KKM(e,16400,65)&&k.KA(0,k.KC(2,1,t),this.s_consonants)&&k.KCM(1,t,"്",1)) {   // Line 159
      r=m=1;
      k.KIO(2,this.s_consonants,1,t);
      k.KO(-1,t,"ാ");
    }
    else if(k.KKM(e,16400,65)&&k.KA(0,k.KC(2,1,t),this.s_consonants)&&k.KCM(1,t,"ൃ",1)) {   // Line 219
      r=m=1;
      k.KIO(2,this.s_consonants,1,t);
      k.KO(-1,t,"്രാ");
    }
    else if(k.KKM(e,16400,65)&&k.KA(0,k.KC(1,1,t),this.s_chills)) {   // Line 39
      r=m=1;
      k.KIO(1,this.s_chillBases,1,t);
      k.KO(-1,t,"ാ");
    }
    else if(k.KKM(e,16400,65)&&k.KCM(1,t,"‌",1)) {   // Line 93
      r=m=1;
      k.KO(1,t,"ആ");
    }
    else if(k.KKM(e,16400,65)&&k.KCM(1,t,"‌",1)) {   // Line 98
      r=m=1;
      k.KO(1,t,"ആ");
    }
    else if(k.KKM(e,16400,65)&&k.KCM(1,t,"ഋ",1)) {   // Line 108
      r=m=1;
      k.KO(1,t,"റാ");
    }
    else if(k.KKM(e,16400,65)) {   // Line 97
      r=m=1;
      k.KO(0,t,"ആ");
    }
    else if(k.KKM(e,16400,66)&&k.KA(0,k.KC(2,1,t),this.s_chills)&&k.KCM(1,t,"‌",1)) {   // Line 280
      r=m=1;
      k.KIO(2,this.s_chills,1,t);
      k.KO(-1,t,"ബ്ബ്");
    }
    else if(k.KKM(e,16400,66)) {   // Line 279
      r=m=1;
      k.KO(0,t,"ബ്ബ്");
    }
    else if(k.KKM(e,16400,67)&&k.KA(0,k.KC(2,1,t),this.s_chills)&&k.KCM(1,t,"‌",1)) {   // Line 282
      r=m=1;
      k.KIO(2,this.s_chills,1,t);
      k.KO(-1,t,"ച്ച്");
    }
    else if(k.KKM(e,16400,67)) {   // Line 281
      r=m=1;
      k.KO(0,t,"ച്ച്");
    }
    else if(k.KKM(e,16400,68)&&k.KA(0,k.KC(2,1,t),this.s_chills)&&k.KCM(1,t,"‌",1)) {   // Line 181
      r=m=1;
      k.KIO(2,this.s_chills,1,t);
      k.KO(-1,t,"ഡ്");
    }
    else if(k.KKM(e,16400,68)&&k.KCM(1,t,"ൺ",1)) {   // Line 233
      r=m=1;
      k.KO(1,t,"ണ്ഡ്");
    }
    else if(k.KKM(e,16400,68)) {   // Line 180
      r=m=1;
      k.KO(0,t,"ഡ്");
    }
    else if(k.KKM(e,16400,69)&&k.KA(0,k.KC(2,1,t),this.s_consonants)&&k.KCM(1,t,"്",1)) {   // Line 172
      r=m=1;
      k.KIO(2,this.s_consonants,1,t);
      k.KO(-1,t,"േ");
    }
    else if(k.KKM(e,16400,69)&&k.KA(0,k.KC(2,1,t),this.s_consonants)&&k.KCM(1,t,"ൃ",1)) {   // Line 225
      r=m=1;
      k.KIO(2,this.s_consonants,1,t);
      k.KO(-1,t,"്രേ");
    }
    else if(k.KKM(e,16400,69)&&k.KA(0,k.KC(1,1,t),this.s_chills)) {   // Line 46
      r=m=1;
      k.KIO(1,this.s_chillBases,1,t);
      k.KO(-1,t,"േ");
    }
    else if(k.KKM(e,16400,69)&&k.KA(0,k.KC(1,1,t),this.s_chills)) {   // Line 47
      r=m=1;
      k.KIO(1,this.s_chillBases,1,t);
      k.KO(-1,t,"േ");
    }
    else if(k.KKM(e,16400,69)&&k.KCM(1,t,"‌",1)) {   // Line 93
      r=m=1;
      k.KO(1,t,"ഏ");
    }
    else if(k.KKM(e,16400,69)&&k.KCM(1,t,"‌",1)) {   // Line 98
      r=m=1;
      k.KO(1,t,"ഏ");
    }
    else if(k.KKM(e,16400,69)&&k.KCM(1,t,"ഋ",1)) {   // Line 114
      r=m=1;
      k.KO(1,t,"റേ");
    }
    else if(k.KKM(e,16400,69)&&k.KCM(1,t,"േ",1)) {   // Line 126
      r=m=1;
      k.KO(1,t,"േേ");
    }
    else if(k.KKM(e,16400,69)) {   // Line 97
      r=m=1;
      k.KO(0,t,"ഏ");
    }
    else if(k.KKM(e,16400,71)&&k.KA(0,k.KC(2,1,t),this.s_chills)&&k.KCM(1,t,"‌",1)) {   // Line 284
      r=m=1;
      k.KIO(2,this.s_chills,1,t);
      k.KO(-1,t,"ഗ്ഗ്");
    }
    else if(k.KKM(e,16400,71)&&k.KCM(1,t,"ൺ",1)) {   // Line 318
      r=m=1;
      k.KO(1,t,"ങ്ങ്");
    }
    else if(k.KKM(e,16400,71)) {   // Line 283
      r=m=1;
      k.KO(0,t,"ഗ്ഗ്");
    }
    else if(k.KKM(e,16400,72)&&k.KA(0,k.KC(2,1,t),this.s_chills)&&k.KCM(1,t,"‌",1)) {   // Line 286
      r=m=1;
      k.KIO(2,this.s_chills,1,t);
      k.KO(-1,t,"ഃ");
    }
    else if(k.KKM(e,16400,72)&&k.KCM(2,t,"ട്",2)) {   // Line 317
      r=m=1;
      k.KO(2,t,"ത്ത്");
    }
    else if(k.KKM(e,16400,72)) {   // Line 285
      r=m=1;
      k.KO(0,t,"ഃ");
    }
    else if(k.KKM(e,16400,73)&&k.KA(0,k.KC(2,1,t),this.s_consonants)&&k.KCM(1,t,"്",1)) {   // Line 163
      r=m=1;
      k.KIO(2,this.s_consonants,1,t);
      k.KO(-1,t,"ീ");
    }
    else if(k.KKM(e,16400,73)&&k.KA(0,k.KC(2,1,t),this.s_consonants)&&k.KCM(1,t,"ൃ",1)) {   // Line 221
      r=m=1;
      k.KIO(2,this.s_consonants,1,t);
      k.KO(-1,t,"്രീ");
    }
    else if(k.KKM(e,16400,73)&&k.KA(0,k.KC(1,1,t),this.s_chills)) {   // Line 41
      r=m=1;
      k.KIO(1,this.s_chillBases,1,t);
      k.KO(-1,t,"ീ");
    }
    else if(k.KKM(e,16400,73)&&k.KCM(1,t,"‌",1)) {   // Line 93
      r=m=1;
      k.KO(1,t,"ഐ");
    }
    else if(k.KKM(e,16400,73)&&k.KCM(1,t,"‌",1)) {   // Line 98
      r=m=1;
      k.KO(1,t,"ഐ");
    }
    else if(k.KKM(e,16400,73)&&k.KCM(1,t,"ഋ",1)) {   // Line 110
      r=m=1;
      k.KO(1,t,"റീ");
    }
    else if(k.KKM(e,16400,73)) {   // Line 97
      r=m=1;
      k.KO(0,t,"ഐ");
    }
    else if(k.KKM(e,16400,74)&&k.KA(0,k.KC(2,1,t),this.s_chills)&&k.KCM(1,t,"‌",1)) {   // Line 288
      r=m=1;
      k.KIO(2,this.s_chills,1,t);
      k.KO(-1,t,"ജ്ജ്");
    }
    else if(k.KKM(e,16400,74)&&k.KCM(1,t,"ൺ",1)) {   // Line 319
      r=m=1;
      k.KO(1,t,"ഞ്ഞ്");
    }
    else if(k.KKM(e,16400,74)) {   // Line 287
      r=m=1;
      k.KO(0,t,"ജ്ജ്");
    }
    else if(k.KKM(e,16400,75)&&k.KA(0,k.KC(2,1,t),this.s_chills)&&k.KCM(1,t,"‌",1)) {   // Line 290
      r=m=1;
      k.KIO(2,this.s_chills,1,t);
      k.KO(-1,t,"ക്ക്");
    }
    else if(k.KKM(e,16400,75)) {   // Line 289
      r=m=1;
      k.KO(0,t,"ക്ക്");
    }
    else if(k.KKM(e,16400,76)&&k.KA(0,k.KC(2,1,t),this.s_chills)&&k.KCM(1,t,"‌",1)) {   // Line 34
      r=m=1;
      k.KIO(2,this.s_chills,1,t);
      k.KO(-1,t,"ൾ");
    }
    else if(k.KKM(e,16400,76)&&k.KA(0,k.KC(2,1,t),this.s_nonSa)&&k.KCM(1,t,"ം",1)) {   // Line 192
      r=m=1;
      k.KIO(2,this.s_nonSa,1,t);
      k.KO(-1,t,"മ്ല്");
      k.KDO(-1,t,0);
    }
    else if(k.KKM(e,16400,76)&&k.KA(0,k.KC(2,1,t),this.s_consonants)&&k.KCM(1,t,"്",1)) {   // Line 229
      r=m=1;
      k.KIO(2,this.s_consonants,1,t);
      k.KO(-1,t,"്ല്");
      k.KDO(-1,t,0);
    }
    else if(k.KKM(e,16400,76)&&k.KCM(1,t,"ൻ",1)) {   // Line 244
      r=m=1;
      k.KO(1,t,"ന്ല്");
      k.KDO(-1,t,0);
    }
    else if(k.KKM(e,16400,76)&&k.KCM(1,t,"ൽ",1)) {   // Line 251
      r=m=1;
      k.KO(1,t,"ല്ല്");
      k.KDO(-1,t,0);
    }
    else if(k.KKM(e,16400,76)&&k.KCM(1,t,"ൾ",1)) {   // Line 255
      r=m=1;
      k.KO(1,t,"ള്ള്");
    }
    else if(k.KKM(e,16400,76)&&k.KCM(1,t,"ൿ",1)) {   // Line 262
      r=m=1;
      k.KO(1,t,"ക്ല്");
      k.KDO(-1,t,0);
    }
    else if(k.KKM(e,16400,76)) {   // Line 33
      r=m=1;
      k.KO(0,t,"ൾ");
    }
    else if(k.KKM(e,16400,77)&&k.KA(0,k.KC(2,1,t),this.s_chills)&&k.KCM(1,t,"‌",1)) {   // Line 292
      r=m=1;
      k.KIO(2,this.s_chills,1,t);
      k.KO(-1,t,"മ്മ്");
    }
    else if(k.KKM(e,16400,77)) {   // Line 291
      r=m=1;
      k.KO(0,t,"മ്മ്");
    }
    else if(k.KKM(e,16400,78)&&k.KA(0,k.KC(2,1,t),this.s_chills)&&k.KCM(1,t,"‌",1)) {   // Line 34
      r=m=1;
      k.KIO(2,this.s_chills,1,t);
      k.KO(-1,t,"ൺ");
    }
    else if(k.KKM(e,16400,78)&&k.KCM(1,t,"ൺ",1)) {   // Line 231
      r=m=1;
      k.KO(1,t,"ണ്ണ്");
    }
    else if(k.KKM(e,16400,78)) {   // Line 33
      r=m=1;
      k.KO(0,t,"ൺ");
    }
    else if(k.KKM(e,16400,79)&&k.KA(0,k.KC(2,1,t),this.s_consonants)&&k.KCM(1,t,"്",1)) {   // Line 175
      r=m=1;
      k.KIO(2,this.s_consonants,1,t);
      k.KO(-1,t,"ോ");
    }
    else if(k.KKM(e,16400,79)&&k.KA(0,k.KC(2,1,t),this.s_consonants)&&k.KCM(1,t,"ൃ",1)) {   // Line 227
      r=m=1;
      k.KIO(2,this.s_consonants,1,t);
      k.KO(-1,t,"്രോ");
    }
    else if(k.KKM(e,16400,79)&&k.KA(0,k.KC(1,1,t),this.s_chills)) {   // Line 49
      r=m=1;
      k.KIO(1,this.s_chillBases,1,t);
      k.KO(-1,t,"ോ");
    }
    else if(k.KKM(e,16400,79)&&k.KCM(1,t,"‌",1)) {   // Line 93
      r=m=1;
      k.KO(1,t,"ഓ");
    }
    else if(k.KKM(e,16400,79)&&k.KCM(1,t,"‌",1)) {   // Line 98
      r=m=1;
      k.KO(1,t,"ഓ");
    }
    else if(k.KKM(e,16400,79)&&k.KCM(1,t,"ഋ",1)) {   // Line 116
      r=m=1;
      k.KO(1,t,"റോ");
    }
    else if(k.KKM(e,16400,79)&&k.KCM(1,t,"ോ",1)) {   // Line 127
      r=m=1;
      k.KO(1,t,"ോോ");
    }
    else if(k.KKM(e,16400,79)) {   // Line 97
      r=m=1;
      k.KO(0,t,"ഓ");
    }
    else if(k.KKM(e,16400,80)&&k.KA(0,k.KC(2,1,t),this.s_chills)&&k.KCM(1,t,"‌",1)) {   // Line 294
      r=m=1;
      k.KIO(2,this.s_chills,1,t);
      k.KO(-1,t,"പ്പ്");
    }
    else if(k.KKM(e,16400,80)) {   // Line 293
      r=m=1;
      k.KO(0,t,"പ്പ്");
    }
    else if(k.KKM(e,16400,81)&&k.KA(0,k.KC(2,1,t),this.s_chills)&&k.KCM(1,t,"‌",1)) {   // Line 296
      r=m=1;
      k.KIO(2,this.s_chills,1,t);
      k.KO(-1,t,"ക്യ്");
    }
    else if(k.KKM(e,16400,81)) {   // Line 295
      r=m=1;
      k.KO(0,t,"ക്യ്");
    }
    else if(k.KKM(e,16400,82)&&k.KA(0,k.KC(2,1,t),this.s_consonants)&&k.KCM(1,t,"്",1)) {   // Line 169
      r=m=1;
      k.KIO(2,this.s_consonants,1,t);
      k.KO(-1,t,"ൃ");
    }
    else if(k.KKM(e,16400,82)&&k.KA(0,k.KC(2,1,t),this.s_consonants)&&k.KCM(1,t,"ൃ",1)) {   // Line 170
      r=m=1;
      k.KIO(2,this.s_consonants,1,t);
      k.KO(-1,t,"ൄ");
    }
    else if(k.KKM(e,16400,82)&&k.KA(0,k.KC(1,1,t),this.s_chills)) {   // Line 44
      r=m=1;
      k.KIO(1,this.s_chillBases,1,t);
      k.KO(-1,t,"ൃ");
    }
    else if(k.KKM(e,16400,82)&&k.KA(0,k.KC(1,1,t),this.s_chills)) {   // Line 51
      r=m=1;
      k.KIO(1,this.s_chillBases,1,t);
      k.KO(-1,t,"ൃ");
    }
    else if(k.KKM(e,16400,82)&&k.KCM(1,t,"‌",1)) {   // Line 93
      r=m=1;
      k.KO(1,t,"ഋ");
    }
    else if(k.KKM(e,16400,82)&&k.KCM(1,t,"‌",1)) {   // Line 98
      r=m=1;
      k.KO(1,t,"ഋ");
    }
    else if(k.KKM(e,16400,82)&&k.KCM(1,t,"ഋ",1)) {   // Line 106
      r=m=1;
      k.KO(1,t,"ൠ");
    }
    else if(k.KKM(e,16400,82)&&k.KCM(1,t,"ൄ",1)) {   // Line 125
      r=m=1;
      k.KO(1,t,"ൄൄ");
    }
    else if(k.KKM(e,16400,82)) {   // Line 97
      r=m=1;
      k.KO(0,t,"ഋ");
    }
    else if(k.KKM(e,16400,83)&&k.KA(0,k.KC(2,1,t),this.s_chills)&&k.KCM(1,t,"‌",1)) {   // Line 181
      r=m=1;
      k.KIO(2,this.s_chills,1,t);
      k.KO(-1,t,"ശ്");
    }
    else if(k.KKM(e,16400,83)) {   // Line 180
      r=m=1;
      k.KO(0,t,"ശ്");
    }
    else if(k.KKM(e,16400,84)&&k.KA(0,k.KC(2,1,t),this.s_chills)&&k.KCM(1,t,"‌",1)) {   // Line 181
      r=m=1;
      k.KIO(2,this.s_chills,1,t);
      k.KO(-1,t,"ട്");
    }
    else if(k.KKM(e,16400,84)&&k.KCM(1,t,"ൺ",1)) {   // Line 232
      r=m=1;
      k.KO(1,t,"ണ്ട്");
    }
    else if(k.KKM(e,16400,84)) {   // Line 180
      r=m=1;
      k.KO(0,t,"ട്");
    }
    else if(k.KKM(e,16400,85)&&k.KA(0,k.KC(2,1,t),this.s_consonants)&&k.KCM(1,t,"്",1)) {   // Line 168
      r=m=1;
      k.KIO(2,this.s_consonants,1,t);
      k.KO(-1,t,"ൂ");
    }
    else if(k.KKM(e,16400,85)&&k.KA(0,k.KC(2,1,t),this.s_consonants)&&k.KCM(1,t,"ൃ",1)) {   // Line 223
      r=m=1;
      k.KIO(2,this.s_consonants,1,t);
      k.KO(-1,t,"്രൂ");
    }
    else if(k.KKM(e,16400,85)&&k.KA(0,k.KC(1,1,t),this.s_chills)) {   // Line 43
      r=m=1;
      k.KIO(1,this.s_chillBases,1,t);
      k.KO(-1,t,"ൂ");
    }
    else if(k.KKM(e,16400,85)&&k.KCM(1,t,"‌",1)) {   // Line 93
      r=m=1;
      k.KO(1,t,"ഊ");
    }
    else if(k.KKM(e,16400,85)&&k.KCM(1,t,"‌",1)) {   // Line 98
      r=m=1;
      k.KO(1,t,"ഊ");
    }
    else if(k.KKM(e,16400,85)&&k.KCM(1,t,"ഋ",1)) {   // Line 112
      r=m=1;
      k.KO(1,t,"റൂ");
    }
    else if(k.KKM(e,16400,85)) {   // Line 97
      r=m=1;
      k.KO(0,t,"ഊ");
    }
    else if(k.KKM(e,16400,86)&&k.KA(0,k.KC(2,1,t),this.s_chills)&&k.KCM(1,t,"‌",1)) {   // Line 298
      r=m=1;
      k.KIO(2,this.s_chills,1,t);
      k.KO(-1,t,"വ്വ്");
    }
    else if(k.KKM(e,16400,86)) {   // Line 297
      r=m=1;
      k.KO(0,t,"വ്വ്");
    }
    else if(k.KKM(e,16400,87)&&k.KA(0,k.KC(2,1,t),this.s_chills)&&k.KCM(1,t,"‌",1)) {   // Line 300
      r=m=1;
      k.KIO(2,this.s_chills,1,t);
      k.KO(-1,t,"വ്വ്");
    }
    else if(k.KKM(e,16400,87)) {   // Line 299
      r=m=1;
      k.KO(0,t,"വ്വ്");
    }
    else if(k.KKM(e,16400,88)&&k.KA(0,k.KC(2,1,t),this.s_chills)&&k.KCM(1,t,"‌",1)) {   // Line 302
      r=m=1;
      k.KIO(2,this.s_chills,1,t);
      k.KO(-1,t,"ക്ഷ്");
    }
    else if(k.KKM(e,16400,88)) {   // Line 301
      r=m=1;
      k.KO(0,t,"ക്ഷ്");
    }
    else if(k.KKM(e,16400,89)&&k.KA(0,k.KC(2,1,t),this.s_chills)&&k.KCM(1,t,"‌",1)) {   // Line 304
      r=m=1;
      k.KIO(2,this.s_chills,1,t);
      k.KO(-1,t,"യ്യ്");
    }
    else if(k.KKM(e,16400,89)) {   // Line 303
      r=m=1;
      k.KO(0,t,"യ്യ്");
    }
    else if(k.KKM(e,16400,90)&&k.KA(0,k.KC(2,1,t),this.s_chills)&&k.KCM(1,t,"‌",1)) {   // Line 306
      r=m=1;
      k.KIO(2,this.s_chills,1,t);
      k.KO(-1,t,"ശ്ശ്");
    }
    else if(k.KKM(e,16400,90)) {   // Line 305
      r=m=1;
      k.KO(0,t,"ശ്ശ്");
    }
    else if(k.KKM(e,16384,220)&&k.KCM(4,t,"റ്റ്",4)) {   // Line 57
      r=m=1;
      k.KO(4,t,"ഺ്");
    }
    else if(k.KKM(e,16384,220)&&k.KCM(4,t,"ള്ള്",4)) {   // Line 73
      r=m=1;
      k.KO(4,t,"ൡ");
    }
    else if(k.KKM(e,16384,220)&&k.KCM(4,t,"ള്ള്",4)) {   // Line 75
      r=m=1;
      k.KO(4,t,"ൣ");
    }
    else if(k.KKM(e,16384,220)&&k.KCM(4,t,"1000",4)) {   // Line 330
      r=m=1;
      k.KO(4,t,"൲");
    }
    else if(k.KKM(e,16384,220)&&k.KCM(3,t,"റ്റ",3)) {   // Line 58
      r=m=1;
      k.KO(3,t,"ഺ");
    }
    else if(k.KKM(e,16384,220)&&k.KCM(3,t,"‌ള്",3)) {   // Line 72
      r=m=1;
      k.KO(3,t,"ൢ");
    }
    else if(k.KKM(e,16384,220)&&k.KCM(3,t,"1/4",3)) {   // Line 325
      r=m=1;
      k.KO(3,t,"൳");
    }
    else if(k.KKM(e,16384,220)&&k.KCM(3,t,"1/2",3)) {   // Line 326
      r=m=1;
      k.KO(3,t,"൴");
    }
    else if(k.KKM(e,16384,220)&&k.KCM(3,t,"3/4",3)) {   // Line 327
      r=m=1;
      k.KO(3,t,"൵");
    }
    else if(k.KKM(e,16384,220)&&k.KCM(3,t,"100",3)) {   // Line 329
      r=m=1;
      k.KO(3,t,"൱");
    }
    else if(k.KKM(e,16384,220)&&k.KCM(3,t,"---",3)) {   // Line 332
      r=m=1;
      k.KO(3,t,"—");
    }
    else if(k.KKM(e,16384,220)&&k.KCM(2,t,"ക്",2)) {   // Line 56
      r=m=1;
      k.KO(2,t,"ൿ");
    }
    else if(k.KKM(e,16384,220)&&k.KCM(2,t,"നു",2)) {   // Line 64
      r=m=1;
      k.KO(2,t,"൹");
    }
    else if(k.KKM(e,16384,220)&&k.KCM(2,t," ം",2)) {   // Line 65
      r=m=1;
      k.KO(2,t,"ഀ");
    }
    else if(k.KKM(e,16384,220)&&k.KCM(2,t,"പറ",2)) {   // Line 70
      r=m=1;
      k.KO(2,t,"൏");
    }
    else if(k.KKM(e,16384,220)&&k.KA(0,k.KC(2,1,t),this.s_chills)&&k.KCM(1,t,"\\",1)) {   // Line 82
      r=m=1;
      k.KIO(2,this.s_chillBases,1,t);
      k.KO(-1,t,"്‍");
    }
    else if(k.KKM(e,16384,220)&&k.KCM(2,t,"ഩ്",2)) {   // Line 83
      r=m=1;
      k.KO(2,t,"ന്‍");
    }
    else if(k.KKM(e,16384,220)&&k.KCM(2,t,"മ്",2)) {   // Line 131
      r=m=1;
      k.KO(2,t,"ം");
    }
    else if(k.KKM(e,16384,220)&&k.KA(0,k.KC(2,1,t),this.s_escapable)&&k.KCM(1,t,"\\",1)) {   // Line 208
      r=m=1;
      k.KIO(2,this.s_escapable,1,t);
    }
    else if(k.KKM(e,16384,220)&&k.KCM(2,t,"10",2)) {   // Line 328
      r=m=1;
      k.KO(2,t,"൰");
    }
    else if(k.KKM(e,16384,220)&&k.KCM(2,t,"--",2)) {   // Line 334
      r=m=1;
      k.KO(2,t,"–");
    }
    else if(k.KKM(e,16384,220)&&k.KCM(1,t,"അ",1)) {   // Line 54
      r=m=1;
      k.KO(1,t,"ഽ");
    }
    else if(k.KKM(e,16384,220)&&k.KCM(1,t,"ഈ",1)) {   // Line 55
      r=m=1;
      k.KO(1,t,"ൟ");
    }
    else if(k.KKM(e,16384,220)&&k.KCM(1,t,"ൻ",1)) {   // Line 59
      r=m=1;
      k.KO(1,t,"ഩ്");
    }
    else if(k.KKM(e,16384,220)&&k.KCM(1,t,"ന",1)) {   // Line 60
      r=m=1;
      k.KO(1,t,"ഩ");
    }
    else if(k.KKM(e,16384,220)&&k.KCM(1,t,"ഀ",1)) {   // Line 66
      r=m=1;
      k.KO(1,t,"ഁ");
    }
    else if(k.KKM(e,16384,220)&&k.KCM(1,t,"ർ",1)) {   // Line 67
      r=m=1;
      k.KO(1,t,"ൎ");
    }
    else if(k.KKM(e,16384,220)&&k.KCM(1,t,"$",1)) {   // Line 68
      r=m=1;
      k.KO(1,t,"₹");
    }
    else if(k.KKM(e,16384,220)&&k.KCM(1,t,"₹",1)) {   // Line 69
      r=m=1;
      k.KO(1,t,"₨");
    }
    else if(k.KKM(e,16384,220)&&k.KCM(1,t,"ൾ",1)) {   // Line 71
      r=m=1;
      k.KO(1,t,"ഌ");
    }
    else if(k.KKM(e,16384,220)&&k.KCM(1,t,"ഌ",1)) {   // Line 74
      r=m=1;
      k.KO(1,t,"ൡ");
    }
    else if(k.KKM(e,16384,220)&&k.KCM(1,t,"ൢ",1)) {   // Line 76
      r=m=1;
      k.KO(1,t,"ൣ");
    }
    else if(k.KKM(e,16384,220)&&k.KCM(1,t,"ൗ",1)) {   // Line 77
      r=m=1;
      k.KO(1,t,"ൌ");
    }
    else if(k.KKM(e,16384,220)&&k.KCM(1,t,"്",1)) {   // Line 78
      r=m=1;
      k.KO(1,t,"഼");
    }
    else if(k.KKM(e,16384,220)&&k.KCM(1,t,"഼",1)) {   // Line 79
      r=m=1;
      k.KO(1,t,"഻");
    }
    else if(k.KKM(e,16384,220)&&k.KCM(1,t,"ആ",1)) {   // Line 132
      r=m=1;
      k.KO(1,t,"ാ");
    }
    else if(k.KKM(e,16384,220)&&k.KCM(1,t,"ഇ",1)) {   // Line 133
      r=m=1;
      k.KO(1,t,"ി");
    }
    else if(k.KKM(e,16384,220)&&k.KCM(1,t,"ഈ",1)) {   // Line 134
      r=m=1;
      k.KO(1,t,"ീ");
    }
    else if(k.KKM(e,16384,220)&&k.KCM(1,t,"ഉ",1)) {   // Line 135
      r=m=1;
      k.KO(1,t,"ു");
    }
    else if(k.KKM(e,16384,220)&&k.KCM(1,t,"ഊ",1)) {   // Line 136
      r=m=1;
      k.KO(1,t,"ൂ");
    }
    else if(k.KKM(e,16384,220)&&k.KCM(1,t,"ഋ",1)) {   // Line 137
      r=m=1;
      k.KO(1,t,"ൃ");
    }
    else if(k.KKM(e,16384,220)&&k.KCM(1,t,"ൠ",1)) {   // Line 138
      r=m=1;
      k.KO(1,t,"ൄ");
    }
    else if(k.KKM(e,16384,220)&&k.KCM(1,t,"എ",1)) {   // Line 139
      r=m=1;
      k.KO(1,t,"െ");
    }
    else if(k.KKM(e,16384,220)&&k.KCM(1,t,"ഏ",1)) {   // Line 140
      r=m=1;
      k.KO(1,t,"േ");
    }
    else if(k.KKM(e,16384,220)&&k.KCM(1,t,"ഐ",1)) {   // Line 141
      r=m=1;
      k.KO(1,t,"ൈ");
    }
    else if(k.KKM(e,16384,220)&&k.KCM(1,t,"ഒ",1)) {   // Line 142
      r=m=1;
      k.KO(1,t,"ൊ");
    }
    else if(k.KKM(e,16384,220)&&k.KCM(1,t,"ഓ",1)) {   // Line 143
      r=m=1;
      k.KO(1,t,"ോ");
    }
    else if(k.KKM(e,16384,220)&&k.KCM(1,t,"ഔ",1)) {   // Line 144
      r=m=1;
      k.KO(1,t,"ൗ");
    }
    else if(k.KKM(e,16384,220)&&k.KCM(1,t,"ൗ",1)) {   // Line 145
      r=m=1;
      k.KO(1,t,"ൌ");
    }
    else if(k.KKM(e,16384,220)&&k.KCM(1,t,"ഌ",1)) {   // Line 146
      r=m=1;
      k.KO(1,t,"ൢ");
    }
    else if(k.KKM(e,16384,220)&&k.KCM(1,t,"ൡ",1)) {   // Line 147
      r=m=1;
      k.KO(1,t,"ൣ");
    }
    else if(k.KKM(e,16400,189)&&k.KCM(1,t,"‌",1)) {   // Line 321
      r=m=1;
      k.KO(1,t,"‌");
    }
    else if(k.KKM(e,16400,189)) {   // Line 322
      r=m=1;
      k.KO(0,t,"‌");
    }
    else if(k.KKM(e,16384,65)&&k.KA(0,k.KC(2,1,t),this.s_consonants)&&k.KCM(1,t,"്",1)) {   // Line 158
      r=m=1;
      k.KIO(2,this.s_consonants,1,t);
    }
    else if(k.KKM(e,16384,65)&&k.KA(0,k.KC(2,1,t),this.s_consonants)&&k.KCM(1,t,"ൃ",1)) {   // Line 218
      r=m=1;
      k.KIO(2,this.s_consonants,1,t);
      k.KO(-1,t,"്ര");
    }
    else if(k.KKM(e,16384,65)&&k.KA(0,k.KC(1,1,t),this.s_chills)) {   // Line 38
      r=m=1;
      k.KIO(1,this.s_chillBases,1,t);
    }
    else if(k.KKM(e,16384,65)&&k.KCM(1,t,"‌",1)) {   // Line 92
      r=m=1;
      k.KO(1,t,"അ");
    }
    else if(k.KKM(e,16384,65)&&k.KCM(1,t,"‌",1)) {   // Line 96
      r=m=1;
      k.KO(1,t,"അ");
    }
    else if(k.KKM(e,16384,65)&&k.KCM(1,t,"അ",1)) {   // Line 100
      r=m=1;
      k.KO(1,t,"ആ");
    }
    else if(k.KKM(e,16384,65)&&k.KCM(1,t,"ഋ",1)) {   // Line 107
      r=m=1;
      k.KO(1,t,"റ");
    }
    else if(k.KKM(e,16384,65)&&k.KCM(1,t,"ാ",1)) {   // Line 121
      r=m=1;
      k.KO(1,t,"ാാ");
    }
    else if(k.KKM(e,16384,65)&&k.KA(0,k.KC(1,1,t),this.s_consonants)) {   // Line 160
      r=m=1;
      k.KIO(1,this.s_consonants,1,t);
      k.KO(-1,t,"ാ");
    }
    else if(k.KKM(e,16384,65)) {   // Line 95
      r=m=1;
      k.KO(0,t,"അ");
    }
    else if(k.KKM(e,16384,66)&&k.KA(0,k.KC(2,1,t),this.s_chills)&&k.KCM(1,t,"‌",1)) {   // Line 179
      r=m=1;
      k.KIO(2,this.s_chills,1,t);
      k.KO(-1,t,"ബ്");
    }
    else if(k.KKM(e,16384,66)) {   // Line 178
      r=m=1;
      k.KO(0,t,"ബ്");
    }
    else if(k.KKM(e,16384,67)&&k.KA(0,k.KC(2,1,t),this.s_chills)&&k.KCM(1,t,"‌",1)) {   // Line 34
      r=m=1;
      k.KIO(2,this.s_chills,1,t);
      k.KO(-1,t,"ൿ");
    }
    else if(k.KKM(e,16384,67)&&k.KCM(1,t,"ൿ",1)) {   // Line 265
      r=m=1;
      k.KO(1,t,"ക്ക്");
      k.KDO(-1,t,1);
    }
    else if(k.KKM(e,16384,67)) {   // Line 33
      r=m=1;
      k.KO(0,t,"ൿ");
    }
    else if(k.KKM(e,16384,68)&&k.KA(0,k.KC(2,1,t),this.s_chills)&&k.KCM(1,t,"‌",1)) {   // Line 179
      r=m=1;
      k.KIO(2,this.s_chills,1,t);
      k.KO(-1,t,"ദ്");
    }
    else if(k.KKM(e,16384,68)&&k.KCM(1,t,"ൻ",1)) {   // Line 241
      r=m=1;
      k.KO(1,t,"ന്ദ്");
    }
    else if(k.KKM(e,16384,68)) {   // Line 178
      r=m=1;
      k.KO(0,t,"ദ്");
    }
    else if(k.KKM(e,16384,69)&&k.KA(0,k.KC(2,1,t),this.s_consonants)&&k.KCM(1,t,"െ",1)) {   // Line 164
      r=m=1;
      k.KIO(2,this.s_consonants,1,t);
      k.KO(-1,t,"ീ");
    }
    else if(k.KKM(e,16384,69)&&k.KA(0,k.KC(2,1,t),this.s_consonants)&&k.KCM(1,t,"്",1)) {   // Line 171
      r=m=1;
      k.KIO(2,this.s_consonants,1,t);
      k.KO(-1,t,"െ");
    }
    else if(k.KKM(e,16384,69)&&k.KA(0,k.KC(2,1,t),this.s_consonants)&&k.KCM(1,t,"ൃ",1)) {   // Line 224
      r=m=1;
      k.KIO(2,this.s_consonants,1,t);
      k.KO(-1,t,"്രെ");
    }
    else if(k.KKM(e,16384,69)&&k.KA(0,k.KC(1,1,t),this.s_chills)) {   // Line 45
      r=m=1;
      k.KIO(1,this.s_chillBases,1,t);
      k.KO(-1,t,"െ");
    }
    else if(k.KKM(e,16384,69)&&k.KCM(1,t,"‌",1)) {   // Line 92
      r=m=1;
      k.KO(1,t,"എ");
    }
    else if(k.KKM(e,16384,69)&&k.KCM(1,t,"‌",1)) {   // Line 96
      r=m=1;
      k.KO(1,t,"എ");
    }
    else if(k.KKM(e,16384,69)&&k.KCM(1,t,"ഋ",1)) {   // Line 113
      r=m=1;
      k.KO(1,t,"റെ");
    }
    else if(k.KKM(e,16384,69)&&k.KCM(1,t,"എ",1)) {   // Line 119
      r=m=1;
      k.KO(1,t,"ഈ");
    }
    else if(k.KKM(e,16384,69)) {   // Line 95
      r=m=1;
      k.KO(0,t,"എ");
    }
    else if(k.KKM(e,16384,70)&&k.KA(0,k.KC(2,1,t),this.s_chills)&&k.KCM(1,t,"‌",1)) {   // Line 179
      r=m=1;
      k.KIO(2,this.s_chills,1,t);
      k.KO(-1,t,"ഫ്");
    }
    else if(k.KKM(e,16384,70)) {   // Line 178
      r=m=1;
      k.KO(0,t,"ഫ്");
    }
    else if(k.KKM(e,16384,71)&&k.KCM(4,t,"ന്ന്",4)) {   // Line 211
      r=m=1;
      k.KO(4,t,"ങ്ങ്");
    }
    else if(k.KKM(e,16384,71)&&k.KA(0,k.KC(2,1,t),this.s_chills)&&k.KCM(1,t,"‌",1)) {   // Line 179
      r=m=1;
      k.KIO(2,this.s_chills,1,t);
      k.KO(-1,t,"ഗ്");
    }
    else if(k.KKM(e,16384,71)&&k.KCM(1,t,"ൻ",1)) {   // Line 185
      r=m=1;
      k.KO(1,t,"ങ്");
    }
    else if(k.KKM(e,16384,71)) {   // Line 178
      r=m=1;
      k.KO(0,t,"ഗ്");
    }
    else if(k.KKM(e,16384,72)&&k.KCM(4,t,"ക്ക്",4)&&k.KDM(0,t,1)) {   // Line 201
      r=m=1;
      k.KO(4,t,"ച്ച്");
    }
    else if(k.KKM(e,16384,72)&&k.KCM(4,t,"റ്റ്",4)) {   // Line 212
      r=m=1;
      k.KO(4,t,"ത്");
    }
    else if(k.KKM(e,16384,72)&&k.KCM(4,t,"ന്റ്",4)) {   // Line 214
      r=m=1;
      k.KO(4,t,"ന്ത്");
    }
    else if(k.KKM(e,16384,72)&&k.KCM(4,t,"ട്ട്",4)) {   // Line 316
      r=m=1;
      k.KO(4,t,"ത്ത്");
    }
    else if(k.KKM(e,16384,72)&&k.KA(0,k.KC(2,1,t),this.s_thinConsonants)&&k.KCM(1,t,"്",1)) {   // Line 157
      r=m=1;
      k.KIO(2,this.s_thickConsonants,1,t);
      k.KO(-1,t,"്");
    }
    else if(k.KKM(e,16384,72)&&k.KA(0,k.KC(2,1,t),this.s_chills)&&k.KCM(1,t,"‌",1)) {   // Line 179
      r=m=1;
      k.KIO(2,this.s_chills,1,t);
      k.KO(-1,t,"ഹ്");
    }
    else if(k.KKM(e,16384,72)&&k.KCM(2,t,"ൻൿ",2)) {   // Line 198
      r=m=1;
      k.KO(2,t,"ഞ്ച്");
    }
    else if(k.KKM(e,16384,72)&&k.KCM(1,t,"ൿ",1)) {   // Line 186
      r=m=1;
      k.KO(1,t,"ച്");
    }
    else if(k.KKM(e,16384,72)) {   // Line 178
      r=m=1;
      k.KO(0,t,"ഹ്");
    }
    else if(k.KKM(e,16384,73)&&k.KA(0,k.KC(2,1,t),this.s_consonants)&&k.KCM(1,t,"്",1)) {   // Line 161
      r=m=1;
      k.KIO(2,this.s_consonants,1,t);
      k.KO(-1,t,"ി");
    }
    else if(k.KKM(e,16384,73)&&k.KA(0,k.KC(2,1,t),this.s_consonants)&&k.KCM(1,t,"ി",1)) {   // Line 162
      r=m=1;
      k.KIO(2,this.s_consonants,1,t);
      k.KO(-1,t,"ീ");
    }
    else if(k.KKM(e,16384,73)&&k.KA(0,k.KC(2,1,t),this.s_consonants)&&k.KCM(1,t,"ൃ",1)) {   // Line 220
      r=m=1;
      k.KIO(2,this.s_consonants,1,t);
      k.KO(-1,t,"്രി");
    }
    else if(k.KKM(e,16384,73)&&k.KA(0,k.KC(1,1,t),this.s_chills)) {   // Line 40
      r=m=1;
      k.KIO(1,this.s_chillBases,1,t);
      k.KO(-1,t,"ി");
    }
    else if(k.KKM(e,16384,73)&&k.KCM(1,t,"‌",1)) {   // Line 92
      r=m=1;
      k.KO(1,t,"ഇ");
    }
    else if(k.KKM(e,16384,73)&&k.KCM(1,t,"‌",1)) {   // Line 96
      r=m=1;
      k.KO(1,t,"ഇ");
    }
    else if(k.KKM(e,16384,73)&&k.KCM(1,t,"അ",1)) {   // Line 101
      r=m=1;
      k.KO(1,t,"ഐ");
    }
    else if(k.KKM(e,16384,73)&&k.KCM(1,t,"ഇ",1)) {   // Line 103
      r=m=1;
      k.KO(1,t,"ഈ");
    }
    else if(k.KKM(e,16384,73)&&k.KCM(1,t,"ഋ",1)) {   // Line 109
      r=m=1;
      k.KO(1,t,"റി");
    }
    else if(k.KKM(e,16384,73)&&k.KCM(1,t,"ീ",1)) {   // Line 122
      r=m=1;
      k.KO(1,t,"ീീ");
    }
    else if(k.KKM(e,16384,73)&&k.KA(0,k.KC(1,1,t),this.s_consonants)) {   // Line 173
      r=m=1;
      k.KIO(1,this.s_consonants,1,t);
      k.KO(-1,t,"ൈ");
    }
    else if(k.KKM(e,16384,73)) {   // Line 95
      r=m=1;
      k.KO(0,t,"ഇ");
    }
    else if(k.KKM(e,16384,74)&&k.KCM(4,t,"ന്ന്",4)) {   // Line 210
      r=m=1;
      k.KO(4,t,"ഞ്ഞ്");
    }
    else if(k.KKM(e,16384,74)&&k.KA(0,k.KC(2,1,t),this.s_chills)&&k.KCM(1,t,"‌",1)) {   // Line 179
      r=m=1;
      k.KIO(2,this.s_chills,1,t);
      k.KO(-1,t,"ജ്");
    }
    else if(k.KKM(e,16384,74)&&k.KCM(1,t,"ൻ",1)) {   // Line 239
      r=m=1;
      k.KO(1,t,"ഞ്");
    }
    else if(k.KKM(e,16384,74)) {   // Line 178
      r=m=1;
      k.KO(0,t,"ജ്");
    }
    else if(k.KKM(e,16384,75)&&k.KA(0,k.KC(2,1,t),this.s_chills)&&k.KCM(1,t,"‌",1)) {   // Line 179
      r=m=1;
      k.KIO(2,this.s_chills,1,t);
      k.KO(-1,t,"ക്");
    }
    else if(k.KKM(e,16384,75)&&k.KCM(1,t,"ൻ",1)) {   // Line 238
      r=m=1;
      k.KO(1,t,"ങ്ക്");
    }
    else if(k.KKM(e,16384,75)&&k.KCM(1,t,"ൿ",1)) {   // Line 264
      r=m=1;
      k.KO(1,t,"ക്ക്");
    }
    else if(k.KKM(e,16384,75)) {   // Line 178
      r=m=1;
      k.KO(0,t,"ക്");
    }
    else if(k.KKM(e,16384,76)&&k.KA(0,k.KC(4,1,t),this.s_consonants)&&k.KCM(3,t,"്ല്",3)&&k.KDM(0,t,0)) {   // Line 205
      r=m=1;
      k.KIO(4,this.s_consonants,1,t);
      k.KO(-1,t,"ൢ");
    }
    else if(k.KKM(e,16384,76)&&k.KA(0,k.KC(2,1,t),this.s_chills)&&k.KCM(1,t,"‌",1)) {   // Line 34
      r=m=1;
      k.KIO(2,this.s_chills,1,t);
      k.KO(-1,t,"ൽ");
    }
    else if(k.KKM(e,16384,76)&&k.KA(0,k.KC(2,1,t),this.s_nonSa)&&k.KCM(1,t,"ം",1)) {   // Line 191
      r=m=1;
      k.KIO(2,this.s_nonSa,1,t);
      k.KO(-1,t,"മ്ല്");
    }
    else if(k.KKM(e,16384,76)&&k.KA(0,k.KC(2,1,t),this.s_consonants)&&k.KCM(1,t,"ൢ",1)) {   // Line 215
      r=m=1;
      k.KIO(2,this.s_consonants,1,t);
      k.KO(-1,t,"ൣ");
    }
    else if(k.KKM(e,16384,76)&&k.KA(0,k.KC(2,1,t),this.s_consonants)&&k.KCM(1,t,"്",1)) {   // Line 228
      r=m=1;
      k.KIO(2,this.s_consonants,1,t);
      k.KO(-1,t,"്ല്");
      k.KDO(-1,t,0);
    }
    else if(k.KKM(e,16384,76)&&k.KCM(1,t,"ഌ",1)) {   // Line 118
      r=m=1;
      k.KO(1,t,"ൡ");
    }
    else if(k.KKM(e,16384,76)&&k.KCM(1,t,"ൽ",1)) {   // Line 250
      r=m=1;
      k.KO(1,t,"ല്ല്");
    }
    else if(k.KKM(e,16384,76)&&k.KCM(1,t,"ൾ",1)) {   // Line 256
      r=m=1;
      k.KO(1,t,"ഌ");
    }
    else if(k.KKM(e,16384,76)&&k.KCM(1,t,"ൿ",1)) {   // Line 261
      r=m=1;
      k.KO(1,t,"ക്ല്");
    }
    else if(k.KKM(e,16384,76)) {   // Line 33
      r=m=1;
      k.KO(0,t,"ൽ");
    }
    else if(k.KKM(e,16384,77)&&k.KA(0,k.KC(2,1,t),this.s_consonants)&&k.KA(1,k.KC(1,1,t),this.s_vowels)) {   // Line 26
      r=m=1;
      k.KIO(2,this.s_consonants,1,t);
      k.KIO(-1,this.s_vowels,2,t);
      k.KO(-1,t,"ം");
    }
    else if(k.KKM(e,16384,77)&&k.KA(0,k.KC(2,1,t),this.s_chills)&&k.KCM(1,t,"‌",1)) {   // Line 34
      r=m=1;
      k.KIO(2,this.s_chills,1,t);
      k.KO(-1,t,"ം");
    }
    else if(k.KKM(e,16384,77)&&k.KA(0,k.KC(2,1,t),this.s_chills)&&k.KCM(1,t,"‌",1)) {   // Line 179
      r=m=1;
      k.KIO(2,this.s_chills,1,t);
      k.KO(-1,t,"മ്");
    }
    else if(k.KKM(e,16384,77)&&k.KA(0,k.KC(1,1,t),this.s_consonants)) {   // Line 24
      r=m=1;
      k.KIO(1,this.s_consonants,1,t);
      k.KO(-1,t,"ം");
    }
    else if(k.KKM(e,16384,77)&&k.KA(0,k.KC(1,1,t),this.s_vowels)) {   // Line 25
      r=m=1;
      k.KIO(1,this.s_vowels,1,t);
      k.KO(-1,t,"ം");
    }
    else if(k.KKM(e,16384,77)&&k.KCM(1,t,"ം",1)) {   // Line 188
      r=m=1;
      k.KO(1,t,"മ്മ്");
    }
    else if(k.KKM(e,16384,77)&&k.KCM(1,t,"ൺ",1)) {   // Line 235
      r=m=1;
      k.KO(1,t,"ണ്മ്");
    }
    else if(k.KKM(e,16384,77)&&k.KCM(1,t,"ൻ",1)) {   // Line 243
      r=m=1;
      k.KO(1,t,"ന്മ്");
    }
    else if(k.KKM(e,16384,77)) {   // Line 33
      r=m=1;
      k.KO(0,t,"ം");
    }
    else if(k.KKM(e,16384,77)) {   // Line 178
      r=m=1;
      k.KO(0,t,"മ്");
    }
    else if(k.KKM(e,16384,78)&&k.KA(0,k.KC(2,1,t),this.s_chills)&&k.KCM(1,t,"‌",1)) {   // Line 34
      r=m=1;
      k.KIO(2,this.s_chills,1,t);
      k.KO(-1,t,"ൻ");
    }
    else if(k.KKM(e,16384,78)&&k.KA(0,k.KC(2,1,t),this.s_nonSa)&&k.KCM(1,t,"ം",1)) {   // Line 193
      r=m=1;
      k.KIO(2,this.s_nonSa,1,t);
      k.KO(-1,t,"മ്ന്");
    }
    else if(k.KKM(e,16384,78)&&k.KCM(1,t,"ൻ",1)) {   // Line 240
      r=m=1;
      k.KO(1,t,"ന്ന്");
    }
    else if(k.KKM(e,16384,78)) {   // Line 33
      r=m=1;
      k.KO(0,t,"ൻ");
    }
    else if(k.KKM(e,16384,79)&&k.KA(0,k.KC(2,1,t),this.s_consonants)&&k.KCM(1,t,"ൊ",1)) {   // Line 166
      r=m=1;
      k.KIO(2,this.s_consonants,1,t);
      k.KO(-1,t,"ൂ");
    }
    else if(k.KKM(e,16384,79)&&k.KA(0,k.KC(2,1,t),this.s_consonants)&&k.KCM(1,t,"്",1)) {   // Line 174
      r=m=1;
      k.KIO(2,this.s_consonants,1,t);
      k.KO(-1,t,"ൊ");
    }
    else if(k.KKM(e,16384,79)&&k.KA(0,k.KC(2,1,t),this.s_consonants)&&k.KCM(1,t,"ൃ",1)) {   // Line 226
      r=m=1;
      k.KIO(2,this.s_consonants,1,t);
      k.KO(-1,t,"്രൊ");
    }
    else if(k.KKM(e,16384,79)&&k.KA(0,k.KC(1,1,t),this.s_chills)) {   // Line 48
      r=m=1;
      k.KIO(1,this.s_chillBases,1,t);
      k.KO(-1,t,"ൊ");
    }
    else if(k.KKM(e,16384,79)&&k.KCM(1,t,"‌",1)) {   // Line 92
      r=m=1;
      k.KO(1,t,"ഒ");
    }
    else if(k.KKM(e,16384,79)&&k.KCM(1,t,"‌",1)) {   // Line 96
      r=m=1;
      k.KO(1,t,"ഒ");
    }
    else if(k.KKM(e,16384,79)&&k.KCM(1,t,"ഊ",1)) {   // Line 105
      r=m=1;
      k.KO(1,t,"ഊഊ");
    }
    else if(k.KKM(e,16384,79)&&k.KCM(1,t,"ഋ",1)) {   // Line 115
      r=m=1;
      k.KO(1,t,"റൊ");
    }
    else if(k.KKM(e,16384,79)&&k.KCM(1,t,"ഒ",1)) {   // Line 120
      r=m=1;
      k.KO(1,t,"ഊ");
    }
    else if(k.KKM(e,16384,79)&&k.KCM(1,t,"ൂ",1)) {   // Line 124
      r=m=1;
      k.KO(1,t,"ൂൂ");
    }
    else if(k.KKM(e,16384,79)) {   // Line 95
      r=m=1;
      k.KO(0,t,"ഒ");
    }
    else if(k.KKM(e,16384,80)&&k.KCM(4,t,"ല്പ്",4)) {   // Line 203
      r=m=1;
      k.KO(4,t,"ൽപ്പ്");
    }
    else if(k.KKM(e,16384,80)&&k.KA(0,k.KC(2,1,t),this.s_chills)&&k.KCM(1,t,"‌",1)) {   // Line 179
      r=m=1;
      k.KIO(2,this.s_chills,1,t);
      k.KO(-1,t,"പ്");
    }
    else if(k.KKM(e,16384,80)&&k.KCM(1,t,"ം",1)) {   // Line 190
      r=m=1;
      k.KO(1,t,"മ്പ്");
    }
    else if(k.KKM(e,16384,80)&&k.KCM(1,t,"ൽ",1)) {   // Line 252
      r=m=1;
      k.KO(1,t,"ല്പ്");
    }
    else if(k.KKM(e,16384,80)) {   // Line 178
      r=m=1;
      k.KO(0,t,"പ്");
    }
    else if(k.KKM(e,16384,81)&&k.KA(0,k.KC(2,1,t),this.s_chills)&&k.KCM(1,t,"‌",1)) {   // Line 308
      r=m=1;
      k.KIO(2,this.s_chills,1,t);
      k.KO(-1,t,"ക്ക്");
    }
    else if(k.KKM(e,16384,81)) {   // Line 307
      r=m=1;
      k.KO(0,t,"ക്ക്");
    }
    else if(k.KKM(e,16384,82)&&k.KA(0,k.KC(2,1,t),this.s_chills)&&k.KCM(1,t,"‌",1)) {   // Line 34
      r=m=1;
      k.KIO(2,this.s_chills,1,t);
      k.KO(-1,t,"ർ");
    }
    else if(k.KKM(e,16384,82)&&k.KA(0,k.KC(2,1,t),this.s_nonSa)&&k.KCM(1,t,"ം",1)) {   // Line 189
      r=m=1;
      k.KIO(2,this.s_nonSa,1,t);
      k.KO(-1,t,"മ്ര്");
    }
    else if(k.KKM(e,16384,82)&&k.KCM(1,t,"ൻ",1)) {   // Line 237
      r=m=1;
      k.KO(1,t,"ന്ര്");
    }
    else if(k.KKM(e,16384,82)&&k.KCM(1,t,"ർ",1)) {   // Line 247
      r=m=1;
      k.KO(1,t,"റ്");
    }
    else if(k.KKM(e,16384,82)) {   // Line 33
      r=m=1;
      k.KO(0,t,"ർ");
    }
    else if(k.KKM(e,16384,83)&&k.KA(0,k.KC(2,1,t),this.s_chills)&&k.KCM(1,t,"‌",1)) {   // Line 179
      r=m=1;
      k.KIO(2,this.s_chills,1,t);
      k.KO(-1,t,"സ്");
    }
    else if(k.KKM(e,16384,83)) {   // Line 178
      r=m=1;
      k.KO(0,t,"സ്");
    }
    else if(k.KKM(e,16384,84)&&k.KCM(4,t,"റ്റ്",4)) {   // Line 213
      r=m=1;
      k.KO(4,t,"ട്ട്");
    }
    else if(k.KKM(e,16384,84)&&k.KA(0,k.KC(2,1,t),this.s_chills)&&k.KCM(1,t,"‌",1)) {   // Line 310
      r=m=1;
      k.KIO(2,this.s_chills,1,t);
      k.KO(-1,t,"റ്റ്");
    }
    else if(k.KKM(e,16384,84)&&k.KCM(1,t,"ൻ",1)) {   // Line 242
      r=m=1;
      k.KO(1,t,"ന്റ്");
    }
    else if(k.KKM(e,16384,84)) {   // Line 309
      r=m=1;
      k.KO(0,t,"റ്റ്");
    }
    else if(k.KKM(e,16384,85)&&k.KA(0,k.KC(2,1,t),this.s_consonants)&&k.KCM(1,t,"്",1)) {   // Line 165
      r=m=1;
      k.KIO(2,this.s_consonants,1,t);
      k.KO(-1,t,"ു");
    }
    else if(k.KKM(e,16384,85)&&k.KA(0,k.KC(2,1,t),this.s_consonants)&&k.KCM(1,t,"ു",1)) {   // Line 167
      r=m=1;
      k.KIO(2,this.s_consonants,1,t);
      k.KO(-1,t,"ൂ");
    }
    else if(k.KKM(e,16384,85)&&k.KA(0,k.KC(2,1,t),this.s_consonants)&&k.KCM(1,t,"ൃ",1)) {   // Line 222
      r=m=1;
      k.KIO(2,this.s_consonants,1,t);
      k.KO(-1,t,"്രു");
    }
    else if(k.KKM(e,16384,85)&&k.KA(0,k.KC(1,1,t),this.s_chills)) {   // Line 42
      r=m=1;
      k.KIO(1,this.s_chillBases,1,t);
      k.KO(-1,t,"ു");
    }
    else if(k.KKM(e,16384,85)&&k.KCM(1,t,"‌",1)) {   // Line 92
      r=m=1;
      k.KO(1,t,"ഉ");
    }
    else if(k.KKM(e,16384,85)&&k.KCM(1,t,"‌",1)) {   // Line 96
      r=m=1;
      k.KO(1,t,"ഉ");
    }
    else if(k.KKM(e,16384,85)&&k.KCM(1,t,"അ",1)) {   // Line 102
      r=m=1;
      k.KO(1,t,"ഔ");
    }
    else if(k.KKM(e,16384,85)&&k.KCM(1,t,"ഉ",1)) {   // Line 104
      r=m=1;
      k.KO(1,t,"ഊ");
    }
    else if(k.KKM(e,16384,85)&&k.KCM(1,t,"ഋ",1)) {   // Line 111
      r=m=1;
      k.KO(1,t,"റു");
    }
    else if(k.KKM(e,16384,85)&&k.KCM(1,t,"ൂ",1)) {   // Line 123
      r=m=1;
      k.KO(1,t,"ൂൂ");
    }
    else if(k.KKM(e,16384,85)&&k.KCM(1,t,"ൗ",1)) {   // Line 128
      r=m=1;
      k.KO(1,t,"ൗൗ");
    }
    else if(k.KKM(e,16384,85)&&k.KA(0,k.KC(1,1,t),this.s_consonants)) {   // Line 176
      r=m=1;
      k.KIO(1,this.s_consonants,1,t);
      k.KO(-1,t,"ൗ");
    }
    else if(k.KKM(e,16384,85)) {   // Line 95
      r=m=1;
      k.KO(0,t,"ഉ");
    }
    else if(k.KKM(e,16384,86)&&k.KA(0,k.KC(2,1,t),this.s_chills)&&k.KCM(1,t,"‌",1)) {   // Line 179
      r=m=1;
      k.KIO(2,this.s_chills,1,t);
      k.KO(-1,t,"വ്");
    }
    else if(k.KKM(e,16384,86)&&k.KCM(1,t,"ൺ",1)) {   // Line 234
      r=m=1;
      k.KO(1,t,"ണ്വ്");
    }
    else if(k.KKM(e,16384,86)&&k.KCM(1,t,"ൻ",1)) {   // Line 245
      r=m=1;
      k.KO(1,t,"ന്വ്");
    }
    else if(k.KKM(e,16384,86)&&k.KCM(1,t,"ൽ",1)) {   // Line 253
      r=m=1;
      k.KO(1,t,"ല്വ്");
    }
    else if(k.KKM(e,16384,86)&&k.KCM(1,t,"ൿ",1)) {   // Line 263
      r=m=1;
      k.KO(1,t,"ക്വ്");
    }
    else if(k.KKM(e,16384,86)) {   // Line 178
      r=m=1;
      k.KO(0,t,"വ്");
    }
    else if(k.KKM(e,16384,87)&&k.KA(0,k.KC(2,1,t),this.s_chills)&&k.KCM(1,t,"‌",1)) {   // Line 179
      r=m=1;
      k.KIO(2,this.s_chills,1,t);
      k.KO(-1,t,"വ്");
    }
    else if(k.KKM(e,16384,87)) {   // Line 178
      r=m=1;
      k.KO(0,t,"വ്");
    }
    else if(k.KKM(e,16384,88)&&k.KA(0,k.KC(2,1,t),this.s_chills)&&k.KCM(1,t,"‌",1)) {   // Line 312
      r=m=1;
      k.KIO(2,this.s_chills,1,t);
      k.KO(-1,t,"ക്ഷ്");
    }
    else if(k.KKM(e,16384,88)) {   // Line 311
      r=m=1;
      k.KO(0,t,"ക്ഷ്");
    }
    else if(k.KKM(e,16384,89)&&k.KA(0,k.KC(2,1,t),this.s_chills)&&k.KCM(1,t,"‌",1)) {   // Line 179
      r=m=1;
      k.KIO(2,this.s_chills,1,t);
      k.KO(-1,t,"യ്");
    }
    else if(k.KKM(e,16384,89)&&k.KA(0,k.KC(2,1,t),this.s_nonSa)&&k.KCM(1,t,"ം",1)) {   // Line 194
      r=m=1;
      k.KIO(2,this.s_nonSa,1,t);
      k.KO(-1,t,"മ്യ്");
    }
    else if(k.KKM(e,16384,89)&&k.KA(0,k.KC(2,1,t),this.s_vowelsigns)&&k.KCM(1,t,"ം",1)) {   // Line 195
      r=m=1;
      k.KIO(2,this.s_vowelsigns,1,t);
      k.KO(-1,t,"മ്യ്");
    }
    else if(k.KKM(e,16384,89)&&k.KA(0,k.KC(1,1,t),this.s_chills)) {   // Line 50
      r=m=1;
      k.KIO(1,this.s_chillBases,1,t);
      k.KO(-1,t,"്യ്");
    }
    else if(k.KKM(e,16384,89)) {   // Line 178
      r=m=1;
      k.KO(0,t,"യ്");
    }
    else if(k.KKM(e,16384,90)&&k.KA(0,k.KC(2,1,t),this.s_chills)&&k.KCM(1,t,"‌",1)) {   // Line 179
      r=m=1;
      k.KIO(2,this.s_chills,1,t);
      k.KO(-1,t,"ശ്");
    }
    else if(k.KKM(e,16384,90)) {   // Line 178
      r=m=1;
      k.KO(0,t,"ശ്");
    }
    else if(k.KKM(e,16400,192)&&k.KA(0,k.KC(2,1,t),this.s_chills)&&k.KCM(1,t,"‌",1)) {   // Line 314
      r=m=1;
      k.KIO(2,this.s_chills,1,t);
      k.KO(-1,t,"്");
    }
    else if(k.KKM(e,16400,192)&&k.KA(0,k.KC(1,1,t),this.s_chills)) {   // Line 37
      r=m=1;
      k.KIO(1,this.s_chillBases,1,t);
      k.KO(-1,t,"്");
    }
    else if(k.KKM(e,16400,192)&&k.KCM(1,t,"ഋ",1)) {   // Line 117
      r=m=1;
      k.KO(1,t,"റ്");
    }
    else if(k.KKM(e,16400,192)) {   // Line 313
      r=m=1;
      k.KO(0,t,"്");
    }
    return r;
  };
}