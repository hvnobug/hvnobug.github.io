/**
 * Copyright 2016 Google Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
*/

// DO NOT EDIT THIS GENERATED OUTPUT DIRECTLY!
// This file should be overwritten as part of your build process.
// If you need to extend the behavior of the generated service worker, the best approach is to write
// additional code and include it using the importScripts option:
//   https://github.com/GoogleChrome/sw-precache#importscripts-arraystring
//
// Alternatively, it's possible to make changes to the underlying template file and then use that as the
// new base for generating output, via the templateFilePath option:
//   https://github.com/GoogleChrome/sw-precache#templatefilepath-string
//
// If you go that route, make sure that whenever you update your sw-precache dependency, you reconcile any
// changes made to this original template file with your modified copy.

// This generated service worker JavaScript will precache your site's resources.
// The code needs to be saved in a .js file at the top-level of your site, and registered
// from your pages in order to be used. See
// https://github.com/googlechrome/sw-precache/blob/master/demo/app/js/service-worker-registration.js
// for an example of how you can register this script and handle various service worker events.

/* eslint-env worker, serviceworker */
/* eslint-disable indent, no-unused-vars, no-multiple-empty-lines, max-nested-callbacks, space-before-function-paren, quotes, comma-spacing */
'use strict';

var precacheConfig = [["/404.html","34a5fdb6336e1e0f8c849b08a5ffaa98"],["/about/index.html","734d82ce261c5e43ccd9ec641db4bd6c"],["/album/2/index.html","aaabfe7f59025b93a95545cea5fd1b8b"],["/album/3/index.html","854a7b733e3cd0602b09b1ebc5daa763"],["/album/4/index.html","1ab36a1554095546305ea1f6e9193c5a"],["/album/5/index.html","3ee0e8eca92f4b0afefa339cf0b70e5f"],["/album/6/index.html","eccb8f664daed4aaf1f7f2e56b25b173"],["/album/aikatsu/2/index.html","98e9b00f3ec9903a83e343f26e950c50"],["/album/aikatsu/3/index.html","ffeaa66332227b1e33fc50a3d17acb7b"],["/album/aikatsu/index.html","cd4a5d94e8ddf9ef5560546f579fa8ef"],["/album/akame-ga-kill/2/index.html","633566097c6f167b6c470b28c1b1a135"],["/album/akame-ga-kill/index.html","dfbc309945296294874af99f134ec36d"],["/album/angel/2/index.html","86d9fa2c529e0685ee75205a9c2da287"],["/album/angel/index.html","1d83d52ea88ecb024a1b1b7cf299ec81"],["/album/anonym/index.html","bcdfa4ee6236a62c8db557fec94bfe60"],["/album/aquarian-age/index.html","dafa7b1b253aebdb7c5f50c6219ea78d"],["/album/arknights/2/index.html","010543037b53dae981ddd9c8524c917f"],["/album/arknights/index.html","46a125da2fdc07e130317739a6078e86"],["/album/attack-on-titan/2/index.html","c319e7fd8c25080022f88dd90a5c09bf"],["/album/attack-on-titan/3/index.html","3a968c59649283c5a4c6ecc7ba3f47bb"],["/album/attack-on-titan/4/index.html","04fffb5ea11220c4a4744bfc82ebd906"],["/album/attack-on-titan/index.html","f1362ed27e7a9f2b0d415c36bb4a7a3a"],["/album/binary/index.html","d75989d96960e726aa30703aa19d9e80"],["/album/black-and-white-2/index.html","1da9ece52407d86a0476475f9775609a"],["/album/black-rock-shooter/2/index.html","9f924499ae77f44562941f1d972fe088"],["/album/black-rock-shooter/3/index.html","070bd8e44a8a92dc0f294ff8a582eee6"],["/album/black-rock-shooter/4/index.html","5581a950314af87764eae1afd965b050"],["/album/black-rock-shooter/5/index.html","e44ddaf3d3cd6ddf8d892e5b71176a85"],["/album/black-rock-shooter/index.html","adbdc986d13d920403b8bc2ef1286cdc"],["/album/bleach/2/index.html","800a818911262a5c4182b24ad972a92d"],["/album/bleach/3/index.html","1465aba10a54f485f49d8206e4684c2c"],["/album/bleach/index.html","4b30553a495fd1b9ea96eaf8c7e0a4a3"],["/album/boruto/2/index.html","c4bd4db9a4e04a1bdef0732b531e07e9"],["/album/boruto/3/index.html","513bdece60e322b3fd6eebe9b01db102"],["/album/boruto/4/index.html","c83557b11e7e363931933d517da4d4d9"],["/album/boruto/5/index.html","992e06d0be9b1f05a4521387e43f6d15"],["/album/boruto/6/index.html","bcd9db0cc6758cc3747513efae170fa5"],["/album/boruto/7/index.html","9a7977be4fb4d74129f746f1a31d1043"],["/album/boruto/8/index.html","c2dc089e44866d5131a780b2caf93b49"],["/album/boruto/index.html","df0dac045997be602f3053c607d94fea"],["/album/circuit/2/index.html","2389845422f4b21f7c82ff5ed0d9ac53"],["/album/circuit/index.html","1d607ee56a1254e5094277ad26c6c6de"],["/album/crossover/2/index.html","6af355cee58e398e846f9c8272b0bf73"],["/album/crossover/3/index.html","83401bf19083e239db7cf2b7f780f01f"],["/album/crossover/4/index.html","f1464403c5cfc3c0eb1f42629d1b34ce"],["/album/crossover/5/index.html","17707eb91b38d376e813cdb700bcfe7c"],["/album/crossover/index.html","be6d0e00a164a0d534f65312f5f52f99"],["/album/darling-in-the-franXX/2/index.html","e4df0e57fe986a627fc481bd952bdb93"],["/album/darling-in-the-franXX/3/index.html","2b38b49590cfab7273b9fb207d704d16"],["/album/darling-in-the-franXX/4/index.html","c93d53ccbf4e3118da389ec53f722457"],["/album/darling-in-the-franXX/5/index.html","3d231b830ca8ce96bac6ad13f37dd901"],["/album/darling-in-the-franXX/6/index.html","e5862620feab8e7932296221adc531dc"],["/album/darling-in-the-franXX/7/index.html","c45a056e82c64e81d33d9844b2d42c69"],["/album/darling-in-the-franXX/8/index.html","62153688366894c70c8bbf98fda02b33"],["/album/darling-in-the-franXX/index.html","bbba8881d0dd6981353ad5f24b6771ee"],["/album/date-a-live/10/index.html","8b57b389ce171109ee3ca1ad817be870"],["/album/date-a-live/11/index.html","d3ce33eb6720405f126aa4968ce84eb6"],["/album/date-a-live/12/index.html","10bce1aedd1b9534d23feaac29ea2c25"],["/album/date-a-live/2/index.html","a81e23c59207bc151eba7dc83504ed93"],["/album/date-a-live/3/index.html","83b586ffb450ce2d5ea53e54b1769865"],["/album/date-a-live/4/index.html","ce8a39c68d10ba7f1733a4b3894d7751"],["/album/date-a-live/5/index.html","11f3490313574fc623f36ccd99a04879"],["/album/date-a-live/6/index.html","5e25caf91e38ec3e5aafec13fc7c8d53"],["/album/date-a-live/7/index.html","0fdb042ffef2efc2f2df87260f9af2ff"],["/album/date-a-live/8/index.html","308da54beb0b0044a3704e59ff308d51"],["/album/date-a-live/9/index.html","22fc3e41bce8d5f5afee49065627c395"],["/album/date-a-live/index.html","289e2f3814a4009efb8cf3fafc8df0bf"],["/album/demon-slayer-kimetsu-no-yaiba/2/index.html","44894c446fad899ce8e5e717ad30b818"],["/album/demon-slayer-kimetsu-no-yaiba/3/index.html","26b2d47cf65ad320c998d1d90e0f32ea"],["/album/demon-slayer-kimetsu-no-yaiba/4/index.html","9b6c569f6bfad345dc895276695a3404"],["/album/demon-slayer-kimetsu-no-yaiba/5/index.html","3b7a44235d4a4bec3b78cc4e6be5e281"],["/album/demon-slayer-kimetsu-no-yaiba/index.html","61bc122d719b18aef57be41f7cb44581"],["/album/dragon-ball-gif/2/index.html","3b208eaa9641fd7f8bac6b09aef3696e"],["/album/dragon-ball-gif/3/index.html","6182cee2ff1ab99468b7b35020e85187"],["/album/dragon-ball-gif/index.html","27a6b9c33994d9364be741c3bd4f155a"],["/album/dragon-ball/2/index.html","8c730c5546bb2bcf8d454adbcc8d7ba2"],["/album/dragon-ball/index.html","e8032402fb24031c375ea53402bfd95d"],["/album/dungeon-fighter-online/index.html","c454bd9d661fb8cd4ae8fc7a1436cbf4"],["/album/edens-zero/2/index.html","ee2cd1b415133ca716ae72503cecbc78"],["/album/edens-zero/index.html","ae46832d7daaff5443b673baa40b9f01"],["/album/fate-grand-order/10/index.html","a2b08df9cd076a66170184f420281cd7"],["/album/fate-grand-order/11/index.html","3e7280eea72630e1866bad10ab0e2278"],["/album/fate-grand-order/12/index.html","f5cfdbdee9c3da149971116b7d9f6ea3"],["/album/fate-grand-order/13/index.html","a6da7f7f33e50fef824c4fbc8b60b4b1"],["/album/fate-grand-order/14/index.html","7680ef0ce2fdb759de413bd0b0807a8c"],["/album/fate-grand-order/15/index.html","450387af69621f0cd38e8e82a922581b"],["/album/fate-grand-order/16/index.html","1c7c3f3b1f97e4698738d83df07d68ba"],["/album/fate-grand-order/2/index.html","b91982b2903eb22982b8a30a62b7023c"],["/album/fate-grand-order/3/index.html","c2d5a18d0229ffa5f77259aa2f1cb798"],["/album/fate-grand-order/4/index.html","4b1c6d225a5062572cc1a0612505db27"],["/album/fate-grand-order/5/index.html","6020dc93b6622a50f40f2d6fbdb6b8e9"],["/album/fate-grand-order/6/index.html","e5b7c87fd82cd5ab7ca4a5efbb71b46b"],["/album/fate-grand-order/7/index.html","befea529808f4bde51332d6d5f53b470"],["/album/fate-grand-order/8/index.html","f2b04fe86350e888305bfc06395c69a1"],["/album/fate-grand-order/9/index.html","38c9fd3b0ca1e10129a7ef7fb4887a90"],["/album/fate-grand-order/index.html","b4f76a017b94f3901827a43221669ada"],["/album/fire-emblem-heroes/2/index.html","2c9f9bce9e525b926b46c6c61da0061f"],["/album/fire-emblem-heroes/index.html","18f22af4eceedcbfdb1a4693d1eadee7"],["/album/gintama/2/index.html","39b5867103d70a05fa5d76dd185936a0"],["/album/gintama/3/index.html","20c6e571c3821cc7baa95d1d33ec9d26"],["/album/gintama/4/index.html","ce98a96d8d365706485ef7c386bd4200"],["/album/gintama/index.html","56253d5cddda66937e6fa327b462730d"],["/album/girl/10/index.html","8251af3f9cbe6bfb8085b9865163dcfc"],["/album/girl/11/index.html","94d7404de5f60f4046166a47befcedcc"],["/album/girl/2/index.html","2d854159249866a0c42c0f35cf346eb8"],["/album/girl/3/index.html","6a9829b013021112274818c1d81208c9"],["/album/girl/4/index.html","def39e1ad39f04bc692a71a0666894cd"],["/album/girl/5/index.html","3162c9d657a2dfaaa2ac534b61591133"],["/album/girl/6/index.html","4265af6e66b3ee4c9c4aac20471a9323"],["/album/girl/7/index.html","f89428f78db2987359bac5d1e6c641dd"],["/album/girl/8/index.html","028b8a47caff4f98d9ca80fed0bbbcaa"],["/album/girl/9/index.html","506685035e6f3459bb51f57b0aaf0211"],["/album/girl/index.html","03de58e5385859ca1584fa55b2c62854"],["/album/granblue-fantasy/2/index.html","9bb026389ef0352b9925ccb5513daabf"],["/album/granblue-fantasy/3/index.html","09b4bdc5d8b5d9d203df75102fb4d941"],["/album/granblue-fantasy/4/index.html","d3a0a0683758ce14c15d2a7699a17c2e"],["/album/granblue-fantasy/index.html","541ff19c29696125dafcd8157cf437d2"],["/album/hacker/index.html","1481085feb6a59fe14ffdd23d520e8ff"],["/album/hunter-x-hunter/2/index.html","7e3d439c078c29c5ee15f5d4d918ed12"],["/album/hunter-x-hunter/index.html","9e25ca94b772eb70c877c91e2dc8357c"],["/album/index.html","c9107146c47461452f97ed12564cf8a8"],["/album/jojo-de-bizarre-adventure/2/index.html","ebb80730a21ca77daca8ecae61899274"],["/album/jojo-de-bizarre-adventure/3/index.html","06b568963271a06ca667d0ee7b69310c"],["/album/jojo-de-bizarre-adventure/index.html","52c828302d0a0baaea9a260c3a0c2beb"],["/album/kagerou-project/2/index.html","611a5a150d9eb0cc020f0785154fd0e7"],["/album/kagerou-project/3/index.html","a1382e124434a1021a3653b1d1b7892d"],["/album/kagerou-project/index.html","cd7eba67f67a1697195d24cd8e562e16"],["/album/kill-la-kill/2/index.html","53b7a948fea8f5c3b91406b6d43856f5"],["/album/kill-la-kill/3/index.html","46a16b972493890f0f148e1b80c8b6b6"],["/album/kill-la-kill/4/index.html","1bd3f8c9f869e81400035ee04b1fc845"],["/album/kill-la-kill/5/index.html","43d13ef6bdca2b9a61a3c2518194e90e"],["/album/kill-la-kill/6/index.html","e0535e1a617f6acfb3a1fa860c89f37c"],["/album/kill-la-kill/index.html","daecd1dd25323bec80675bd61335149b"],["/album/konoSuba–god-de-blessing-on-this-wonderful-world/2/index.html","bf9b055c97f9bc97ce64ed8cca869a5f"],["/album/konoSuba–god-de-blessing-on-this-wonderful-world/3/index.html","957ac7af2c9d480563033a10cb4147d1"],["/album/konoSuba–god-de-blessing-on-this-wonderful-world/4/index.html","ca7a0213c6ae72a9b22e1d28652ef5d4"],["/album/konoSuba–god-de-blessing-on-this-wonderful-world/5/index.html","98860e33ae312268fc87f7b15ac52fc2"],["/album/konoSuba–god-de-blessing-on-this-wonderful-world/6/index.html","88bc3d59d660d7af804cd1c9fd24d205"],["/album/konoSuba–god-de-blessing-on-this-wonderful-world/7/index.html","671e061b268201c768ff35576568767d"],["/album/konoSuba–god-de-blessing-on-this-wonderful-world/8/index.html","efe1eb148f25ef937a68fc090b12dbc4"],["/album/konoSuba–god-de-blessing-on-this-wonderful-world/index.html","f51344f35bd25c53563379002f2ec217"],["/album/league-of-legends/2/index.html","a4b3638eebc55d96b2a9bcd1fad9eb3b"],["/album/league-of-legends/3/index.html","d0d63437b62f0f53725094a41f8a45de"],["/album/league-of-legends/4/index.html","48e455e1106db17b21543597b45432be"],["/album/league-of-legends/index.html","bc6b1af0069a885c57371700a67f4b5d"],["/album/linux/2/index.html","f345603baa288d65d0ab660eb9ac2de4"],["/album/linux/index.html","954c8774e82204cb9c9d30569815db2c"],["/album/loading/index.html","31ec5f83b59d3fb83db625e5ecefa70d"],["/album/mac/2/index.html","f4c824048dde4a33c97991dc0f011aa2"],["/album/mac/3/index.html","a6aa6b1866290d0346efe9a12b6f1182"],["/album/mac/index.html","30a713de62862a19b1df11740d78d9ce"],["/album/mirai-nikki/2/index.html","461c417b754d47a495e439f8a4da9bcb"],["/album/mirai-nikki/index.html","7c4dd100de6c69c25e4f7fa3d7b17065"],["/album/my-hero-academia/2/index.html","6c44ded9f847f19f79a22df1bcbf7ee7"],["/album/my-hero-academia/3/index.html","64e8b7b5a154a1fa0fd464f221aed58e"],["/album/my-hero-academia/4/index.html","0681d2b1b379e0b8a7cee96165a02ae1"],["/album/my-hero-academia/5/index.html","dee2ccd9d44849c93f0e03ac226706ba"],["/album/my-hero-academia/6/index.html","47d719f3494e84b3088fc9879d316857"],["/album/my-hero-academia/7/index.html","39ff7021a0248a853900301dc46201bb"],["/album/my-hero-academia/index.html","a9e060f6c13cfc87bef4ee1668df5a46"],["/album/my-youth-romantic-comedy-is-wrong/2/index.html","5f89558085ee13aaec13edbb642e538b"],["/album/my-youth-romantic-comedy-is-wrong/index.html","c9bf928945a61ffab657c17419bf58f6"],["/album/naruto/2/index.html","3b31340f3fba4564d166b16d265eeb45"],["/album/naruto/3/index.html","1c695365efd348150e20d29a48c2b7b8"],["/album/naruto/4/index.html","e809109e9ca594e932205b29277bd4c5"],["/album/naruto/5/index.html","806685c30205ea5d3943ec9c9bd9b01a"],["/album/naruto/6/index.html","f3b06756dd6ba4e4f17a4ed79f3da2ad"],["/album/naruto/index.html","f6ff65d83838747ceab3a7e5ab489ea4"],["/album/neon-genesis-evangelion/2/index.html","14c1d56f5992fbb47d1f9667fd800bf9"],["/album/neon-genesis-evangelion/3/index.html","aee8e6b2fed589c51c806e292aef2d2c"],["/album/neon-genesis-evangelion/index.html","e251dd6394bfa269a517b7d17fad7af4"],["/album/no-game-no-life/2/index.html","63e8bdb286197564935b06087b3bb113"],["/album/no-game-no-life/3/index.html","5a69a9f1403b26eaebaf7cef1abd6cc7"],["/album/no-game-no-life/4/index.html","04ce4e95fd708cc1ab5f66d8dee58931"],["/album/no-game-no-life/index.html","04d32990f3799b88c9b35e0d5e25d56b"],["/album/noragami/2/index.html","05bec0e3712e98d73d17298a89ea50b8"],["/album/noragami/index.html","3f93850e81847c9a4717459e54fe9834"],["/album/one-piece/2/index.html","e4a120fad5da25dff1c8e4b80cb8efd9"],["/album/one-piece/3/index.html","969f4461079829683f285fd677f1e4df"],["/album/one-piece/index.html","d8eeeb94a505d1f4b4ab429617ff06dd"],["/album/original-anime/2/index.html","ac5104d4970b51339562475b6b1be3d7"],["/album/original-anime/3/index.html","f61482f09a21c93d761403f43753a5a1"],["/album/original-anime/4/index.html","a5ea77a8e5c39335359a8585c3feec42"],["/album/original-anime/5/index.html","f87c2fd81b68031c6f6f10df87ec203f"],["/album/original-anime/6/index.html","2842f7b7178172036f9a9719a1495dc7"],["/album/original-anime/7/index.html","fdc53f647fcbfef21ceb591b8999e328"],["/album/original-anime/8/index.html","7f1f4d6ddb3c08f77b5537d3e9c3b9df"],["/album/original-anime/index.html","289399493d65b7cfdd87ce8de92678a4"],["/album/overlord/2/index.html","09160e61d78912c2b39c129bcf273324"],["/album/overlord/index.html","9ddd33a33918b53cf78b3d61f23b700c"],["/album/overwatch/2/index.html","dd5bd2265387ffd8c39a5d4f46a16b34"],["/album/overwatch/3/index.html","cdc27f21f625910530dc4a52a19c9280"],["/album/overwatch/4/index.html","fd76d8d78883edc7ed8aaf19a7436dc6"],["/album/overwatch/index.html","ae93ac20bd7ba8523adc92a3e3fd3d54"],["/album/panty-stocking-with-garterbelt/index.html","7a971a6852a717e932c23d06da7d2fe6"],["/album/persona-5/2/index.html","fd34cf3f7b3b2924c5f41f69ede2de80"],["/album/persona-5/3/index.html","6949fc1bd4d7a443cdd5880ac975a89a"],["/album/persona-5/index.html","c39ba6c570cdac4d87392a38f44754cf"],["/album/physics-chemistry/index.html","aaca5f30ec762bc9ebfc3b35f81a4de7"],["/album/programme/2/index.html","251a16ee3fa4083ecc3526a60fa7652a"],["/album/programme/index.html","c6903c73a1c54b8d184e636a196106e1"],["/album/rascal-does-not-dream-of-bunny-girl-senpai/2/index.html","de9fdaf2f0eb7229ee113f9c023ce332"],["/album/rascal-does-not-dream-of-bunny-girl-senpai/3/index.html","33f9c22efcb4928d12a1d77ef6cb05e8"],["/album/rascal-does-not-dream-of-bunny-girl-senpai/index.html","b3ab7ca0b35ffd02c79f41d252828d94"],["/album/rosario+vampire/2/index.html","2914c9d076dd751f01ba903130f7a1d2"],["/album/rosario+vampire/index.html","056d4cec1a142a02f540aa65a7ef7852"],["/album/shakugan-no-shana/2/index.html","8734fdd010b9da47cd28380345282ffe"],["/album/shakugan-no-shana/3/index.html","03c2360572d7c5f06442153a7067651c"],["/album/shakugan-no-shana/4/index.html","0d3c630fda054902a6f2d05cbd18f002"],["/album/shakugan-no-shana/index.html","7f8a3ff3610ae4e04f740ce4822e1bb7"],["/album/solo-leveling/index.html","a644639daa7c7eb44150a4eebcfaa241"],["/album/sun-and-moon-wallpapers/index.html","2d4642ff968a6ab3c917de0077929bad"],["/album/sword-and-shield/index.html","5d9ed8a873aed099dd1ecdf434bc1bca"],["/album/sword-art-online/2/index.html","2f2504d5bf952e317bb7e80206895058"],["/album/sword-art-online/3/index.html","cb481b69c50915a2725de4d59aedf1df"],["/album/sword-art-online/4/index.html","9392ac20c7e5f6d9774019ef83bdc5fa"],["/album/sword-art-online/index.html","1e7d999c7880ad2ef973ca19b016615a"],["/album/that-time-i-got-reincarnated-as-a-slime/2/index.html","29d463d3f718553cb234538777110b1e"],["/album/that-time-i-got-reincarnated-as-a-slime/3/index.html","ce8235cfc2f786d90bd235f2e53972b7"],["/album/that-time-i-got-reincarnated-as-a-slime/index.html","c1382fa9491c57ba9e62144b62f082b6"],["/album/the-seven-deadly-sins/2/index.html","904cf7c0ee93e70e0e0cfd1ff0d55ff5"],["/album/the-seven-deadly-sins/3/index.html","858a96cab3b05a25a97a9ca28e98a614"],["/album/the-seven-deadly-sins/4/index.html","5b0003c76cdf6106f225b5e59ed276e6"],["/album/the-seven-deadly-sins/5/index.html","08af74c6f5df33ff205b970d4aaf67f2"],["/album/the-seven-deadly-sins/index.html","a432d3567b0fa8df9983248393a4d79e"],["/album/tokyo-ghoul/2/index.html","be56eca8d68317cf760951597200904e"],["/album/tokyo-ghoul/3/index.html","3095b8ed929853bfdbc6f1e60ecc99da"],["/album/tokyo-ghoul/4/index.html","28fc000c3c31a5adf5521508f88c937b"],["/album/tokyo-ghoul/5/index.html","b6fd2f64cfb914c9d1d9ae55c2f45df3"],["/album/tokyo-ghoul/6/index.html","7a616730e9af1c145f792cda6091c8c1"],["/album/tokyo-ghoul/7/index.html","1f73d8285574815d8944b8f84175e9be"],["/album/tokyo-ghoul/index.html","f0704a6258df2a449e499e90ddffbe2b"],["/album/vocaloid/2/index.html","ab1d27dc8037a2a60a5a13851c75c5e2"],["/album/vocaloid/3/index.html","45d345ea0f52bd381a489f574eb85af1"],["/album/vocaloid/4/index.html","e9b4d36079e78343ae6479d88740f0bb"],["/album/vocaloid/5/index.html","ea2fc7722d91a905efcf80dab336a38d"],["/album/vocaloid/index.html","3fcebc13716c53e62fd782a88ea5866e"],["/album/your-lie-in-april/2/index.html","05cd0a145b2fc7c11f8b92b903fb4823"],["/album/your-lie-in-april/3/index.html","294bf486fc056dc8f66046290310fd0a"],["/album/your-lie-in-april/index.html","1835cf7c10af818ae2e60450e53006ef"],["/album/your-name/10/index.html","5d57a4818d53bc20df9d466d1bc0ce15"],["/album/your-name/2/index.html","25200a8a013cde676bb8fe73a7b4717c"],["/album/your-name/3/index.html","855225cc02696619800517d96ccabbac"],["/album/your-name/4/index.html","17ec498cc99c33ee70f0af3933d76acb"],["/album/your-name/5/index.html","e9c956a030098f9e35bbbe39dc4f14bc"],["/album/your-name/6/index.html","9927b4a7962836ee7f9595e967a9f816"],["/album/your-name/7/index.html","273694dca3a8b04e93f2195573c41709"],["/album/your-name/8/index.html","c892089ce2bba4cb1ddea03e64db78f2"],["/album/your-name/9/index.html","0334d155466852063cdb5dbd9d5b8df8"],["/album/your-name/index.html","967f0c6cc678cf7a011ef12b3096de40"],["/album/yuuki-yuuna-wa-yuusha-de-aru/2/index.html","42ac3092ec861a54e51f74a440144279"],["/album/yuuki-yuuna-wa-yuusha-de-aru/3/index.html","fae5f1e45ab3bfbb4895443c50c4abca"],["/album/yuuki-yuuna-wa-yuusha-de-aru/index.html","dbd79a85fd8460e3486d8fd28bbc5709"],["/album/zero-kara-hajimeru-isekai-seikatsu/2/index.html","c7be2f8f17603d88b50dbc09163a7ff9"],["/album/zero-kara-hajimeru-isekai-seikatsu/3/index.html","05c8e73069e6730a8b92c89368006336"],["/album/zero-kara-hajimeru-isekai-seikatsu/index.html","0f3c80035e9d751d2f2f990ffbd36f83"],["/archives/2019/06/index.html","91eb2e2775c5d7a193b71d4d39eb04ed"],["/archives/2019/09/index.html","ecff1329b3027124fb3dc1b6bc78f9b3"],["/archives/2019/10/index.html","f33adc3cc08c75ee87a1f9f27249b688"],["/archives/2019/12/index.html","f792c583d4556239fc0755a3c1142ef9"],["/archives/2019/index.html","7d741d6956fdd65eb36765356c9040ad"],["/archives/2019/page/2/index.html","b29c5f0de5d1539abb7b59446d173e49"],["/archives/2019/page/3/index.html","023d19ceae6c0255462a44d908d585b8"],["/archives/2020/01/index.html","2ec9b6cd3326c6e854353867ff7bd878"],["/archives/2020/03/index.html","377600facbe51791c98226ead6360815"],["/archives/2020/07/index.html","1359f5cbca63332ba892b78583dd5340"],["/archives/2020/08/index.html","6c6a56ecdc3d5a759df5b9b14cf1e2b6"],["/archives/2020/09/index.html","131be5c33042771a24d9b4db2e23d73f"],["/archives/2020/11/index.html","96031dab2c155a67c1de1dd4f5a2fa6d"],["/archives/2020/12/index.html","40a9f9f6d9c3dd1eceae82e854fb148a"],["/archives/2020/index.html","bd7504cbf45fcb4f38b05d90230e898c"],["/archives/2020/page/2/index.html","c49cdb07e2be04b8c4cb8c8843d1f40a"],["/archives/2021/01/index.html","c98220308a3f7ac3e75a652eb3477ce8"],["/archives/2021/02/index.html","57adb8a785dc06eaec210f4a5c670b33"],["/archives/2021/03/index.html","28cd331d51e7c91a114b7eef76a388aa"],["/archives/2021/04/index.html","33f94e14f2b3a140d1f23c0fdb909717"],["/archives/2021/index.html","ccca1007a38e83d20e168aa407c90df4"],["/archives/2021/page/2/index.html","a76b88601aba6f19ff24b3516ddf9150"],["/archives/index.html","a80b566b6e00edcfc2728ceb066924d0"],["/archives/page/2/index.html","de24276aced5a39f9f6392abce552d25"],["/archives/page/3/index.html","2fecfe1599a60f0154c9dd71933df4d3"],["/archives/page/4/index.html","56ecae2541dccba3154c293183933f3c"],["/archives/page/5/index.html","abc609630560ee46078bd2ca448c8dc1"],["/archives/page/6/index.html","dbffedd30ed06e4f9dc18f2ed1a0b700"],["/assets/aplayer.js","da954400b8f951527e05c127fa11a375"],["/assets/lazyload-image.js","b1f504b4a0b8eba19f8f4606da73c4db"],["/books/index.html","401b153f43e969ffd579cf87c8f307f7"],["/categories/cdh/index.html","e7da50b9c832da152d15cd5a77120a1a"],["/categories/cdh/ubuntu/index.html","0bf2e5f999ae59643e4def7091421afe"],["/categories/docker/index.html","c07b13f3126afe0401e3cf90c39231b9"],["/categories/github/index.html","f88186f4b4ce38beec6876f64ae024f9"],["/categories/github/windows/index.html","6c42e85602ee1c933e9ff3f49884fe82"],["/categories/hadoop/hive/index.html","4fddbd3c6a0534a1ffafb567dc49ba8c"],["/categories/hadoop/index.html","4fec9949db30cdb905df6d3ad0185025"],["/categories/hadoop/spark/index.html","5d6163b4d2dc43139f39d022248ffe21"],["/categories/hadoop/ubuntu/index.html","9ab9736b7eb4baca0602d1d3b666cca4"],["/categories/hexo/github/index.html","4d1ef05027a0fd72f2fc3c99b32acd4b"],["/categories/hexo/index.html","3f860da9f307ca3e802e1ebb9bbd7810"],["/categories/ide/index.html","9a6553b705ae5049874c8331eb80ac09"],["/categories/ide/theia/index.html","3eb1fb50cc4a5c672945ca6eec9e8467"],["/categories/index.html","473e040b09cd8f0def44b144b0a5c3de"],["/categories/java/concurrent/index.html","fed01dc8d1745543371991a77c0a9a22"],["/categories/java/index.html","6b8a727524aea1853bc821a5f0cdbcd9"],["/categories/java/page/2/index.html","3543b73e86ba1c6a95e3667fac9efcb2"],["/categories/javascript/index.html","88a830479f245b87e1bb32e6b9f72a94"],["/categories/jdk源码/index.html","160bf6328fd996006f911f2c035e8fcf"],["/categories/jdk源码/java/index.html","29a2e7ce97447bb01a876f89cd394ed2"],["/categories/linux/index.html","bcec1eaec7da9f8d7d03064388ef634d"],["/categories/mac/index.html","b24ad09acce133237e6542f909c55d9c"],["/categories/mq/index.html","0173992c21bb92b29606159b89ba2c1a"],["/categories/nginx/index.html","3f5e9b64a7db2e377317a806042ed1c4"],["/categories/other/index.html","09ddb9f8b2b40089c4a9e93e9ad8971e"],["/categories/python/index.html","63a0d0df75ae6b6e60f3d33200cb8576"],["/categories/selenium/index.html","19c61d39b5cf90f228426cf1a46971f0"],["/categories/selenium/python/12306/index.html","e4aa4355075c52de5fe08276d3f4a46b"],["/categories/selenium/python/index.html","a7ee3e8f44539fa32e3a20db839eea76"],["/categories/vuepress/index.html","b6c59ed5c72f7816593af4c2e8f0ed89"],["/categories/算法/index.html","0ec1f2a5a52fa5cc9a80f0adbc308713"],["/categories/算法/java/index.html","b1d5744934d399db359147d1176284b1"],["/categories/算法/数据结构/index.html","3c98e8bb1e22263c186deb43f05c8402"],["/categories/算法/数据结构/java/index.html","66b695819f3929709e88f2a681ac8b4e"],["/css/index.css","14f2fcb9ca4fd2794db716d40c140d10"],["/css/var.css","a172da936edddc31f945f9d742b2b407"],["/friends/index.html","a5da86adecb072dee4dc8dd69e8f781c"],["/games/index.html","27b1bec15f418403c1281e676c4ec60e"],["/go.html","4bd8d315c2bc41d0ce799fd4df4eca02"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["/index.html","5f59cedf6510a5ae3c39dd2580bdb2f1"],["/js/main.js","1c7d6eb8f8b1a9e2a06c37906146eb84"],["/js/search/algolia.js","e6a9c3f8fa43a7d3421169ea96eef44e"],["/js/search/local-search.js","86e7fcbc5aa273e6c3d2c94b0054809b"],["/js/tw_cn.js","bd869d5fd54e2fe1f1eeee7c46fa46bc"],["/js/utils.js","5720a78dca20fab16f21914ae3ac0757"],["/movies/index.html","268376c719b5c02c4ef749a14ce59c9a"],["/nav/index.html","fea89b504fc1515927ef1df8eaa8615b"],["/page/2/index.html","ae0128d6a874c73a297de073b080889c"],["/page/3/index.html","5f0b71885a2930ac795e1c447e2c2b98"],["/page/4/index.html","536bfd3d0a3874fd0327804d91c1ba67"],["/page/5/index.html","90b417dccb21ca57c0b476df63dc5331"],["/page/6/index.html","64a0ff858f858ed5fdae9d224923be6c"],["/page/7/index.html","7cd3c5a24d986fc917159c3c052b6749"],["/post/12306-open-source.html","4dd37d62bdff0ba17bad5b028395f194"],["/post/about-document-encrypt.html","85a5fc3d62ac358ecedddacc49f92357"],["/post/awesome-java-github-project.html","b71586dffe1c35c8edccd7014ce764d2"],["/post/awesome-java-github-tool.html","1345167e0c20e9f388f6f190c21b6e51"],["/post/bloom-filter-java.html","ad24a5fcd427056389574c4bc8f375ac"],["/post/cloudare-manager-install.html","643a3abcc5e1a0a4044a28158fda3c16"],["/post/concurrent-aqs.html","73531de400548a12d439c1620a48a185"],["/post/concurrent-countdownlatch.html","986882f1abef6c4cda5590b4d5a758f6"],["/post/concurrent-cyclicbarrier.html","f95757cf9d055e0e1caec7c4b00c9a4b"],["/post/concurrent-phaser.html","69ed242d44a525bbee916afd0518ad52"],["/post/concurrent-reentrantlock.html","8db6fee2b02ff0bd7c3b173e20a84496"],["/post/concurrent-reentrantreadwritelock.html","07b8dde7b59ea4165eaa16f50bd82c0f"],["/post/concurrent-semaphore.html","a5c3e0ec5ef97b4496968768c86be8fb"],["/post/docker-remote-access.html","7b028ff9575fed15859a0ad0a5c767f8"],["/post/es6-array.html","6175f994184f446d92a8d8c6776d8a9e"],["/post/es6-promise.html","4ae79da5304b9a3f17467077ba9d3098"],["/post/github-accelerate.html","16ed000382428eb2882b352b37821e97"],["/post/github-action.html","fbd43312575307e34aa9b751b9ddf378"],["/post/github-learning.html","f752e7d20c1981c5dd0e2cedaec8514b"],["/post/hadoop-distributed.html","f1d10ddb18f2a7ef24398d1ef6bc7f8d"],["/post/hadoop-hight-avaliability.html","96b1d40e39c9fbcce6becc1f18200886"],["/post/hadoop-pseudo-distributed.html","5c497a0032e3a920d2759f45d0b4ef60"],["/post/hadoop-standalone.html","ac17b55757759c8acaf61830becf03d3"],["/post/hadoop-ubuntu-compile.html","7a7b1189378ffb9e00272705bf2903d4"],["/post/heap-sort.html","eba71bbd6b6622a94c795c204ecb0bbe"],["/post/hexo-free.html","649490f432cde7e92718fded24bc2d8f"],["/post/hexo-loading-page.html","303b3acd230d9e20abda60caaf6193eb"],["/post/hexo-optimize.html","0632a77dad02482d8e4fad4855f04593"],["/post/hexo-script.html","dfbdab39ddc09c52e5076e5eb593b058"],["/post/hive-install.html","8560a9784f2005b1265a21a00737b235"],["/post/how-interesting-project-thefuck.html","07d865a7f37b60023f9b5006fefccedf"],["/post/java-reflect-type.html","3c5b8e220febccaf02dc8686dfe06b80"],["/post/jdk-source-arraylist.html","d3fdfd0d729dada44ffdf9fcbb0d2fa0"],["/post/jdk-source-hashmap.html","6b5942d307b346d5f444be2c02114379"],["/post/jdk-source-hashset.html","df74ed477223a44c077be879a42b680e"],["/post/jdk-source-linkedlist.html","da10a815a7dc4617e40a26b946c0a7ab"],["/post/jdk-source-stringbuilder.html","99e855fcd3e221ed1d20cf02df2e4a6a"],["/post/lru-java.html","d50b4241bd79b6fb64145e1131f38dbe"],["/post/mac-terminal-iterm2.html","c833c142fac2e087bb13daf89b1c7fa4"],["/post/mq.html","585bf9ed0520aae282c02c2f36700421"],["/post/nginx-variable.html","2812cbe6ee88a91271ca2f296a346cf8"],["/post/opencv-opensource.html","260c6ac68a7cfd5b341338a99241837f"],["/post/recommend-window-github-projects.html","b4d01614915d72e4096c2f788249d544"],["/post/remote-ide.html","172c9cdf5d5b06aef8d3601aa13d1be8"],["/post/rocketmq.html","c77689efb19b11f2607fa65e8542b532"],["/post/selenium-12306-login.html","e92d2f31119400f626ffb6b0adcee197"],["/post/selenium-12306-ticket.html","8b638fe61a613b011325821aaa843478"],["/post/spark-install.html","6a01d68545f23c5cefb0f9830b9ae4f8"],["/post/spring-boot-email.html","6e24382992c79595fd9e862f62968368"],["/post/spring-boot-jpa-multiple-datasource.html","96308075d62882cf8cc3d42fee976027"],["/post/spring-boot-quartz.html","8ae0d8a1905733ab0c9c4cb5d5814892"],["/post/spring-boot-springapplication.html","385c17301d2474cd03e71427fd1ac585"],["/post/spring-security-redirect.html","f42712b421d1feddf527dd0ea6aff1a0"],["/post/ubuntu-nginx-certbot.html","bd865c02e539a3f14f2f7d67a19ee4f6"],["/post/user-mode-linux.html","fb30a5d297c3ca036b1850c27a948827"],["/post/vuepress-theme-dew.html","68427469c2c55cf6257a4458862d7464"],["/pwa/16.png","39dc06014f6226ef8fe0de4c2730c66b"],["/pwa/32.png","6c2412cdc9f38d6a87d1c99f447b1209"],["/pwa/apple-touch-icon.png","1a603ff1663748a6998fbe5a5f1e1857"],["/pwa/safari-pinned-tab.svg","d4f899581da7961a3c43f595637fd6c1"],["/tags/12306/index.html","32ba87e045a06fe72dcdcf6ed603c171"],["/tags/cdh/index.html","181cedf0407e45c2a82c54be7c181b00"],["/tags/concurrent/index.html","124420c398df23aae0d1acf9bbfca7b2"],["/tags/docker/index.html","d3eaecc15ec8514febe193485c3b0180"],["/tags/druid/index.html","de7c6da79164013e789ea3d71c53be82"],["/tags/encrypt/index.html","600ec84f5e0b7d9141b16944f06e0cbf"],["/tags/es6/index.html","41b74e2d0451721439a1438261520707"],["/tags/github/index.html","059cc43adc8cb537c6478850759ea1f9"],["/tags/hadoop/index.html","f052860466d47702a405d63cb6dc8d87"],["/tags/hexo/index.html","1f6a9fabe53099829b027a1953ca9056"],["/tags/hive/index.html","94a34276f6cb06a53b1b2b219bceb149"],["/tags/https/index.html","35b23b735d707d64e51f3906d386aca2"],["/tags/ide/index.html","3b516697e2d34aa015ebaa08f8bf63c8"],["/tags/index.html","371a9f98f8274a1d64eef75090022d5c"],["/tags/java/index.html","3d31618ff6ef10667b9bf498ad4a2a77"],["/tags/java/page/2/index.html","3604cbc961afd3e150a9b206591a98f2"],["/tags/java/page/3/index.html","fd8844b3f83aac1cd39a4c460117ea3f"],["/tags/javascript/index.html","5eee25686f9b1dadfb809b58d3db2a11"],["/tags/jdk源码/index.html","b28ed27f92358b863567c604a8de5b15"],["/tags/js/index.html","8a4a7e38e6810b85d24f0162d9209c9c"],["/tags/linux/index.html","24d0871619439b0465a88c0f9ce65d45"],["/tags/mac/index.html","ea6b5e2f88e6313bb7ee7f6d97cfc9c5"],["/tags/mq/index.html","83d92ad6c65c89d5446a11472a027900"],["/tags/nginx/index.html","009849efdc715436ae88a59c359a580b"],["/tags/opencv/index.html","350b1c25ff46f5a0d29b4a24b9c7e33b"],["/tags/python/index.html","ba09738586f9578041e808f39749df19"],["/tags/quartz/index.html","3f6ae2895c342689e7716a1372439a41"],["/tags/selenium/index.html","dc6aea698abb1b8d1bac4bd58bfbed7e"],["/tags/spark/index.html","61332a0a1f463d9c85a05e38a113c69f"],["/tags/spring-boot/index.html","9faae660e4c69bba44a02a1cd1068b7c"],["/tags/spring-security/index.html","bbfd0e116bb5e4ab540e65acc6437a9a"],["/tags/theia/index.html","3aab53008f760da935dbc2e5748f4095"],["/tags/ubuntu/index.html","8fd90e0cdd471741daa56aa95129617c"],["/tags/vuepress/index.html","01f38227b665b3a9d70d2255b6dfe1cc"],["/tags/windows/index.html","b3df6cac0d04e724c3b533adaeffbd8d"],["/tags/数据结构/index.html","1d74effc68cc9ec9e5e351f8b0e920d2"],["/tags/算法/index.html","0cc72d608e8fe7e533cc4854063eb7a2"]];
var cacheName = 'sw-precache-v3--' + (self.registration ? self.registration.scope : '');


var ignoreUrlParametersMatching = [/^utm_/];



var addDirectoryIndex = function(originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
      url.pathname += index;
    }
    return url.toString();
  };

var cleanResponse = function(originalResponse) {
    // If this is not a redirected response, then we don't have to do anything.
    if (!originalResponse.redirected) {
      return Promise.resolve(originalResponse);
    }

    // Firefox 50 and below doesn't support the Response.body stream, so we may
    // need to read the entire body to memory as a Blob.
    var bodyPromise = 'body' in originalResponse ?
      Promise.resolve(originalResponse.body) :
      originalResponse.blob();

    return bodyPromise.then(function(body) {
      // new Response() is happy when passed either a stream or a Blob.
      return new Response(body, {
        headers: originalResponse.headers,
        status: originalResponse.status,
        statusText: originalResponse.statusText
      });
    });
  };

var createCacheKey = function(originalUrl, paramName, paramValue,
                           dontCacheBustUrlsMatching) {
    // Create a new URL object to avoid modifying originalUrl.
    var url = new URL(originalUrl);

    // If dontCacheBustUrlsMatching is not set, or if we don't have a match,
    // then add in the extra cache-busting URL parameter.
    if (!dontCacheBustUrlsMatching ||
        !(url.pathname.match(dontCacheBustUrlsMatching))) {
      url.search += (url.search ? '&' : '') +
        encodeURIComponent(paramName) + '=' + encodeURIComponent(paramValue);
    }

    return url.toString();
  };

var isPathWhitelisted = function(whitelist, absoluteUrlString) {
    // If the whitelist is empty, then consider all URLs to be whitelisted.
    if (whitelist.length === 0) {
      return true;
    }

    // Otherwise compare each path regex to the path of the URL passed in.
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function(whitelistedPathRegex) {
      return path.match(whitelistedPathRegex);
    });
  };

var stripIgnoredUrlParameters = function(originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);
    // Remove the hash; see https://github.com/GoogleChrome/sw-precache/issues/290
    url.hash = '';

    url.search = url.search.slice(1) // Exclude initial '?'
      .split('&') // Split into an array of 'key=value' strings
      .map(function(kv) {
        return kv.split('='); // Split each 'key=value' string into a [key, value] array
      })
      .filter(function(kv) {
        return ignoreUrlParametersMatching.every(function(ignoredRegex) {
          return !ignoredRegex.test(kv[0]); // Return true iff the key doesn't match any of the regexes.
        });
      })
      .map(function(kv) {
        return kv.join('='); // Join each [key, value] array into a 'key=value' string
      })
      .join('&'); // Join the array of 'key=value' strings into a string with '&' in between each

    return url.toString();
  };


var hashParamName = '_sw-precache';
var urlsToCacheKeys = new Map(
  precacheConfig.map(function(item) {
    var relativeUrl = item[0];
    var hash = item[1];
    var absoluteUrl = new URL(relativeUrl, self.location);
    var cacheKey = createCacheKey(absoluteUrl, hashParamName, hash, false);
    return [absoluteUrl.toString(), cacheKey];
  })
);

function setOfCachedUrls(cache) {
  return cache.keys().then(function(requests) {
    return requests.map(function(request) {
      return request.url;
    });
  }).then(function(urls) {
    return new Set(urls);
  });
}

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return setOfCachedUrls(cache).then(function(cachedUrls) {
        return Promise.all(
          Array.from(urlsToCacheKeys.values()).map(function(cacheKey) {
            // If we don't have a key matching url in the cache already, add it.
            if (!cachedUrls.has(cacheKey)) {
              var request = new Request(cacheKey, {credentials: 'same-origin'});
              return fetch(request).then(function(response) {
                // Bail out of installation unless we get back a 200 OK for
                // every request.
                if (!response.ok) {
                  throw new Error('Request for ' + cacheKey + ' returned a ' +
                    'response with status ' + response.status);
                }

                return cleanResponse(response).then(function(responseToCache) {
                  return cache.put(cacheKey, responseToCache);
                });
              });
            }
          })
        );
      });
    }).then(function() {
      
      // Force the SW to transition from installing -> active state
      return self.skipWaiting();
      
    })
  );
});

self.addEventListener('activate', function(event) {
  var setOfExpectedUrls = new Set(urlsToCacheKeys.values());

  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return cache.keys().then(function(existingRequests) {
        return Promise.all(
          existingRequests.map(function(existingRequest) {
            if (!setOfExpectedUrls.has(existingRequest.url)) {
              return cache.delete(existingRequest);
            }
          })
        );
      });
    }).then(function() {
      
      return self.clients.claim();
      
    })
  );
});


self.addEventListener('fetch', function(event) {
  if (event.request.method === 'GET') {
    // Should we call event.respondWith() inside this fetch event handler?
    // This needs to be determined synchronously, which will give other fetch
    // handlers a chance to handle the request if need be.
    var shouldRespond;

    // First, remove all the ignored parameters and hash fragment, and see if we
    // have that URL in our cache. If so, great! shouldRespond will be true.
    var url = stripIgnoredUrlParameters(event.request.url, ignoreUrlParametersMatching);
    shouldRespond = urlsToCacheKeys.has(url);

    // If shouldRespond is false, check again, this time with 'index.html'
    // (or whatever the directoryIndex option is set to) at the end.
    var directoryIndex = 'index.html';
    if (!shouldRespond && directoryIndex) {
      url = addDirectoryIndex(url, directoryIndex);
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond is still false, check to see if this is a navigation
    // request, and if so, whether the URL matches navigateFallbackWhitelist.
    var navigateFallback = '';
    if (!shouldRespond &&
        navigateFallback &&
        (event.request.mode === 'navigate') &&
        isPathWhitelisted([], event.request.url)) {
      url = new URL(navigateFallback, self.location).toString();
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond was set to true at any point, then call
    // event.respondWith(), using the appropriate cache key.
    if (shouldRespond) {
      event.respondWith(
        caches.open(cacheName).then(function(cache) {
          return cache.match(urlsToCacheKeys.get(url)).then(function(response) {
            if (response) {
              return response;
            }
            throw Error('The cached response that was expected is missing.');
          });
        }).catch(function(e) {
          // Fall back to just fetch()ing the request if some unexpected error
          // prevented the cached response from being valid.
          console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
          return fetch(event.request);
        })
      );
    }
  }
});


// *** Start of auto-included sw-toolbox code. ***
/* 
 Copyright 2016 Google Inc. All Rights Reserved.

 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

     http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
*/!function(e){if("object"==typeof exports&&"undefined"!=typeof module)module.exports=e();else if("function"==typeof define&&define.amd)define([],e);else{var t;t="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:this,t.toolbox=e()}}(function(){return function e(t,n,r){function o(c,s){if(!n[c]){if(!t[c]){var a="function"==typeof require&&require;if(!s&&a)return a(c,!0);if(i)return i(c,!0);var u=new Error("Cannot find module '"+c+"'");throw u.code="MODULE_NOT_FOUND",u}var f=n[c]={exports:{}};t[c][0].call(f.exports,function(e){var n=t[c][1][e];return o(n?n:e)},f,f.exports,e,t,n,r)}return n[c].exports}for(var i="function"==typeof require&&require,c=0;c<r.length;c++)o(r[c]);return o}({1:[function(e,t,n){"use strict";function r(e,t){t=t||{};var n=t.debug||m.debug;n&&console.log("[sw-toolbox] "+e)}function o(e){var t;return e&&e.cache&&(t=e.cache.name),t=t||m.cache.name,caches.open(t)}function i(e,t){t=t||{};var n=t.successResponses||m.successResponses;return fetch(e.clone()).then(function(r){return"GET"===e.method&&n.test(r.status)&&o(t).then(function(n){n.put(e,r).then(function(){var r=t.cache||m.cache;(r.maxEntries||r.maxAgeSeconds)&&r.name&&c(e,n,r)})}),r.clone()})}function c(e,t,n){var r=s.bind(null,e,t,n);d=d?d.then(r):r()}function s(e,t,n){var o=e.url,i=n.maxAgeSeconds,c=n.maxEntries,s=n.name,a=Date.now();return r("Updating LRU order for "+o+". Max entries is "+c+", max age is "+i),g.getDb(s).then(function(e){return g.setTimestampForUrl(e,o,a)}).then(function(e){return g.expireEntries(e,c,i,a)}).then(function(e){r("Successfully updated IDB.");var n=e.map(function(e){return t.delete(e)});return Promise.all(n).then(function(){r("Done with cache cleanup.")})}).catch(function(e){r(e)})}function a(e,t,n){return r("Renaming cache: ["+e+"] to ["+t+"]",n),caches.delete(t).then(function(){return Promise.all([caches.open(e),caches.open(t)]).then(function(t){var n=t[0],r=t[1];return n.keys().then(function(e){return Promise.all(e.map(function(e){return n.match(e).then(function(t){return r.put(e,t)})}))}).then(function(){return caches.delete(e)})})})}function u(e,t){return o(t).then(function(t){return t.add(e)})}function f(e,t){return o(t).then(function(t){return t.delete(e)})}function h(e){e instanceof Promise||p(e),m.preCacheItems=m.preCacheItems.concat(e)}function p(e){var t=Array.isArray(e);if(t&&e.forEach(function(e){"string"==typeof e||e instanceof Request||(t=!1)}),!t)throw new TypeError("The precache method expects either an array of strings and/or Requests or a Promise that resolves to an array of strings and/or Requests.");return e}function l(e,t,n){if(!e)return!1;if(t){var r=e.headers.get("date");if(r){var o=new Date(r);if(o.getTime()+1e3*t<n)return!1}}return!0}var d,m=e("./options"),g=e("./idb-cache-expiration");t.exports={debug:r,fetchAndCache:i,openCache:o,renameCache:a,cache:u,uncache:f,precache:h,validatePrecacheInput:p,isResponseFresh:l}},{"./idb-cache-expiration":2,"./options":4}],2:[function(e,t,n){"use strict";function r(e){return new Promise(function(t,n){var r=indexedDB.open(u+e,f);r.onupgradeneeded=function(){var e=r.result.createObjectStore(h,{keyPath:p});e.createIndex(l,l,{unique:!1})},r.onsuccess=function(){t(r.result)},r.onerror=function(){n(r.error)}})}function o(e){return e in d||(d[e]=r(e)),d[e]}function i(e,t,n){return new Promise(function(r,o){var i=e.transaction(h,"readwrite"),c=i.objectStore(h);c.put({url:t,timestamp:n}),i.oncomplete=function(){r(e)},i.onabort=function(){o(i.error)}})}function c(e,t,n){return t?new Promise(function(r,o){var i=1e3*t,c=[],s=e.transaction(h,"readwrite"),a=s.objectStore(h),u=a.index(l);u.openCursor().onsuccess=function(e){var t=e.target.result;if(t&&n-i>t.value[l]){var r=t.value[p];c.push(r),a.delete(r),t.continue()}},s.oncomplete=function(){r(c)},s.onabort=o}):Promise.resolve([])}function s(e,t){return t?new Promise(function(n,r){var o=[],i=e.transaction(h,"readwrite"),c=i.objectStore(h),s=c.index(l),a=s.count();s.count().onsuccess=function(){var e=a.result;e>t&&(s.openCursor().onsuccess=function(n){var r=n.target.result;if(r){var i=r.value[p];o.push(i),c.delete(i),e-o.length>t&&r.continue()}})},i.oncomplete=function(){n(o)},i.onabort=r}):Promise.resolve([])}function a(e,t,n,r){return c(e,n,r).then(function(n){return s(e,t).then(function(e){return n.concat(e)})})}var u="sw-toolbox-",f=1,h="store",p="url",l="timestamp",d={};t.exports={getDb:o,setTimestampForUrl:i,expireEntries:a}},{}],3:[function(e,t,n){"use strict";function r(e){var t=a.match(e.request);t?e.respondWith(t(e.request)):a.default&&"GET"===e.request.method&&0===e.request.url.indexOf("http")&&e.respondWith(a.default(e.request))}function o(e){s.debug("activate event fired");var t=u.cache.name+"$$$inactive$$$";e.waitUntil(s.renameCache(t,u.cache.name))}function i(e){return e.reduce(function(e,t){return e.concat(t)},[])}function c(e){var t=u.cache.name+"$$$inactive$$$";s.debug("install event fired"),s.debug("creating cache ["+t+"]"),e.waitUntil(s.openCache({cache:{name:t}}).then(function(e){return Promise.all(u.preCacheItems).then(i).then(s.validatePrecacheInput).then(function(t){return s.debug("preCache list: "+(t.join(", ")||"(none)")),e.addAll(t)})}))}e("serviceworker-cache-polyfill");var s=e("./helpers"),a=e("./router"),u=e("./options");t.exports={fetchListener:r,activateListener:o,installListener:c}},{"./helpers":1,"./options":4,"./router":6,"serviceworker-cache-polyfill":16}],4:[function(e,t,n){"use strict";var r;r=self.registration?self.registration.scope:self.scope||new URL("./",self.location).href,t.exports={cache:{name:"$$$toolbox-cache$$$"+r+"$$$",maxAgeSeconds:null,maxEntries:null},debug:!1,networkTimeoutSeconds:null,preCacheItems:[],successResponses:/^0|([123]\d\d)|(40[14567])|410$/}},{}],5:[function(e,t,n){"use strict";var r=new URL("./",self.location),o=r.pathname,i=e("path-to-regexp"),c=function(e,t,n,r){t instanceof RegExp?this.fullUrlRegExp=t:(0!==t.indexOf("/")&&(t=o+t),this.keys=[],this.regexp=i(t,this.keys)),this.method=e,this.options=r,this.handler=n};c.prototype.makeHandler=function(e){var t;if(this.regexp){var n=this.regexp.exec(e);t={},this.keys.forEach(function(e,r){t[e.name]=n[r+1]})}return function(e){return this.handler(e,t,this.options)}.bind(this)},t.exports=c},{"path-to-regexp":15}],6:[function(e,t,n){"use strict";function r(e){return e.replace(/[-\/\\^$*+?.()|[\]{}]/g,"\\$&")}var o=e("./route"),i=e("./helpers"),c=function(e,t){for(var n=e.entries(),r=n.next(),o=[];!r.done;){var i=new RegExp(r.value[0]);i.test(t)&&o.push(r.value[1]),r=n.next()}return o},s=function(){this.routes=new Map,this.routes.set(RegExp,new Map),this.default=null};["get","post","put","delete","head","any"].forEach(function(e){s.prototype[e]=function(t,n,r){return this.add(e,t,n,r)}}),s.prototype.add=function(e,t,n,c){c=c||{};var s;t instanceof RegExp?s=RegExp:(s=c.origin||self.location.origin,s=s instanceof RegExp?s.source:r(s)),e=e.toLowerCase();var a=new o(e,t,n,c);this.routes.has(s)||this.routes.set(s,new Map);var u=this.routes.get(s);u.has(e)||u.set(e,new Map);var f=u.get(e),h=a.regexp||a.fullUrlRegExp;f.has(h.source)&&i.debug('"'+t+'" resolves to same regex as existing route.'),f.set(h.source,a)},s.prototype.matchMethod=function(e,t){var n=new URL(t),r=n.origin,o=n.pathname;return this._match(e,c(this.routes,r),o)||this._match(e,[this.routes.get(RegExp)],t)},s.prototype._match=function(e,t,n){if(0===t.length)return null;for(var r=0;r<t.length;r++){var o=t[r],i=o&&o.get(e.toLowerCase());if(i){var s=c(i,n);if(s.length>0)return s[0].makeHandler(n)}}return null},s.prototype.match=function(e){return this.matchMethod(e.method,e.url)||this.matchMethod("any",e.url)},t.exports=new s},{"./helpers":1,"./route":5}],7:[function(e,t,n){"use strict";function r(e,t,n){return n=n||{},i.debug("Strategy: cache first ["+e.url+"]",n),i.openCache(n).then(function(t){return t.match(e).then(function(t){var r=n.cache||o.cache,c=Date.now();return i.isResponseFresh(t,r.maxAgeSeconds,c)?t:i.fetchAndCache(e,n)})})}var o=e("../options"),i=e("../helpers");t.exports=r},{"../helpers":1,"../options":4}],8:[function(e,t,n){"use strict";function r(e,t,n){return n=n||{},i.debug("Strategy: cache only ["+e.url+"]",n),i.openCache(n).then(function(t){return t.match(e).then(function(e){var t=n.cache||o.cache,r=Date.now();if(i.isResponseFresh(e,t.maxAgeSeconds,r))return e})})}var o=e("../options"),i=e("../helpers");t.exports=r},{"../helpers":1,"../options":4}],9:[function(e,t,n){"use strict";function r(e,t,n){return o.debug("Strategy: fastest ["+e.url+"]",n),new Promise(function(r,c){var s=!1,a=[],u=function(e){a.push(e.toString()),s?c(new Error('Both cache and network failed: "'+a.join('", "')+'"')):s=!0},f=function(e){e instanceof Response?r(e):u("No result returned")};o.fetchAndCache(e.clone(),n).then(f,u),i(e,t,n).then(f,u)})}var o=e("../helpers"),i=e("./cacheOnly");t.exports=r},{"../helpers":1,"./cacheOnly":8}],10:[function(e,t,n){t.exports={networkOnly:e("./networkOnly"),networkFirst:e("./networkFirst"),cacheOnly:e("./cacheOnly"),cacheFirst:e("./cacheFirst"),fastest:e("./fastest")}},{"./cacheFirst":7,"./cacheOnly":8,"./fastest":9,"./networkFirst":11,"./networkOnly":12}],11:[function(e,t,n){"use strict";function r(e,t,n){n=n||{};var r=n.successResponses||o.successResponses,c=n.networkTimeoutSeconds||o.networkTimeoutSeconds;return i.debug("Strategy: network first ["+e.url+"]",n),i.openCache(n).then(function(t){var s,a,u=[];if(c){var f=new Promise(function(r){s=setTimeout(function(){t.match(e).then(function(e){var t=n.cache||o.cache,c=Date.now(),s=t.maxAgeSeconds;i.isResponseFresh(e,s,c)&&r(e)})},1e3*c)});u.push(f)}var h=i.fetchAndCache(e,n).then(function(e){if(s&&clearTimeout(s),r.test(e.status))return e;throw i.debug("Response was an HTTP error: "+e.statusText,n),a=e,new Error("Bad response")}).catch(function(r){return i.debug("Network or response error, fallback to cache ["+e.url+"]",n),t.match(e).then(function(e){if(e)return e;if(a)return a;throw r})});return u.push(h),Promise.race(u)})}var o=e("../options"),i=e("../helpers");t.exports=r},{"../helpers":1,"../options":4}],12:[function(e,t,n){"use strict";function r(e,t,n){return o.debug("Strategy: network only ["+e.url+"]",n),fetch(e)}var o=e("../helpers");t.exports=r},{"../helpers":1}],13:[function(e,t,n){"use strict";var r=e("./options"),o=e("./router"),i=e("./helpers"),c=e("./strategies"),s=e("./listeners");i.debug("Service Worker Toolbox is loading"),self.addEventListener("install",s.installListener),self.addEventListener("activate",s.activateListener),self.addEventListener("fetch",s.fetchListener),t.exports={networkOnly:c.networkOnly,networkFirst:c.networkFirst,cacheOnly:c.cacheOnly,cacheFirst:c.cacheFirst,fastest:c.fastest,router:o,options:r,cache:i.cache,uncache:i.uncache,precache:i.precache}},{"./helpers":1,"./listeners":3,"./options":4,"./router":6,"./strategies":10}],14:[function(e,t,n){t.exports=Array.isArray||function(e){return"[object Array]"==Object.prototype.toString.call(e)}},{}],15:[function(e,t,n){function r(e,t){for(var n,r=[],o=0,i=0,c="",s=t&&t.delimiter||"/";null!=(n=x.exec(e));){var f=n[0],h=n[1],p=n.index;if(c+=e.slice(i,p),i=p+f.length,h)c+=h[1];else{var l=e[i],d=n[2],m=n[3],g=n[4],v=n[5],w=n[6],y=n[7];c&&(r.push(c),c="");var b=null!=d&&null!=l&&l!==d,E="+"===w||"*"===w,R="?"===w||"*"===w,k=n[2]||s,$=g||v;r.push({name:m||o++,prefix:d||"",delimiter:k,optional:R,repeat:E,partial:b,asterisk:!!y,pattern:$?u($):y?".*":"[^"+a(k)+"]+?"})}}return i<e.length&&(c+=e.substr(i)),c&&r.push(c),r}function o(e,t){return s(r(e,t))}function i(e){return encodeURI(e).replace(/[\/?#]/g,function(e){return"%"+e.charCodeAt(0).toString(16).toUpperCase()})}function c(e){return encodeURI(e).replace(/[?#]/g,function(e){return"%"+e.charCodeAt(0).toString(16).toUpperCase()})}function s(e){for(var t=new Array(e.length),n=0;n<e.length;n++)"object"==typeof e[n]&&(t[n]=new RegExp("^(?:"+e[n].pattern+")$"));return function(n,r){for(var o="",s=n||{},a=r||{},u=a.pretty?i:encodeURIComponent,f=0;f<e.length;f++){var h=e[f];if("string"!=typeof h){var p,l=s[h.name];if(null==l){if(h.optional){h.partial&&(o+=h.prefix);continue}throw new TypeError('Expected "'+h.name+'" to be defined')}if(v(l)){if(!h.repeat)throw new TypeError('Expected "'+h.name+'" to not repeat, but received `'+JSON.stringify(l)+"`");if(0===l.length){if(h.optional)continue;throw new TypeError('Expected "'+h.name+'" to not be empty')}for(var d=0;d<l.length;d++){if(p=u(l[d]),!t[f].test(p))throw new TypeError('Expected all "'+h.name+'" to match "'+h.pattern+'", but received `'+JSON.stringify(p)+"`");o+=(0===d?h.prefix:h.delimiter)+p}}else{if(p=h.asterisk?c(l):u(l),!t[f].test(p))throw new TypeError('Expected "'+h.name+'" to match "'+h.pattern+'", but received "'+p+'"');o+=h.prefix+p}}else o+=h}return o}}function a(e){return e.replace(/([.+*?=^!:${}()[\]|\/\\])/g,"\\$1")}function u(e){return e.replace(/([=!:$\/()])/g,"\\$1")}function f(e,t){return e.keys=t,e}function h(e){return e.sensitive?"":"i"}function p(e,t){var n=e.source.match(/\((?!\?)/g);if(n)for(var r=0;r<n.length;r++)t.push({name:r,prefix:null,delimiter:null,optional:!1,repeat:!1,partial:!1,asterisk:!1,pattern:null});return f(e,t)}function l(e,t,n){for(var r=[],o=0;o<e.length;o++)r.push(g(e[o],t,n).source);var i=new RegExp("(?:"+r.join("|")+")",h(n));return f(i,t)}function d(e,t,n){return m(r(e,n),t,n)}function m(e,t,n){v(t)||(n=t||n,t=[]),n=n||{};for(var r=n.strict,o=n.end!==!1,i="",c=0;c<e.length;c++){var s=e[c];if("string"==typeof s)i+=a(s);else{var u=a(s.prefix),p="(?:"+s.pattern+")";t.push(s),s.repeat&&(p+="(?:"+u+p+")*"),p=s.optional?s.partial?u+"("+p+")?":"(?:"+u+"("+p+"))?":u+"("+p+")",i+=p}}var l=a(n.delimiter||"/"),d=i.slice(-l.length)===l;return r||(i=(d?i.slice(0,-l.length):i)+"(?:"+l+"(?=$))?"),i+=o?"$":r&&d?"":"(?="+l+"|$)",f(new RegExp("^"+i,h(n)),t)}function g(e,t,n){return v(t)||(n=t||n,t=[]),n=n||{},e instanceof RegExp?p(e,t):v(e)?l(e,t,n):d(e,t,n)}var v=e("isarray");t.exports=g,t.exports.parse=r,t.exports.compile=o,t.exports.tokensToFunction=s,t.exports.tokensToRegExp=m;var x=new RegExp(["(\\\\.)","([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))"].join("|"),"g")},{isarray:14}],16:[function(e,t,n){!function(){var e=Cache.prototype.addAll,t=navigator.userAgent.match(/(Firefox|Chrome)\/(\d+\.)/);if(t)var n=t[1],r=parseInt(t[2]);e&&(!t||"Firefox"===n&&r>=46||"Chrome"===n&&r>=50)||(Cache.prototype.addAll=function(e){function t(e){this.name="NetworkError",this.code=19,this.message=e}var n=this;return t.prototype=Object.create(Error.prototype),Promise.resolve().then(function(){if(arguments.length<1)throw new TypeError;return e=e.map(function(e){return e instanceof Request?e:String(e)}),Promise.all(e.map(function(e){"string"==typeof e&&(e=new Request(e));var n=new URL(e.url).protocol;if("http:"!==n&&"https:"!==n)throw new t("Invalid scheme");return fetch(e.clone())}))}).then(function(r){if(r.some(function(e){return!e.ok}))throw new t("Incorrect response status");return Promise.all(r.map(function(t,r){return n.put(e[r],t)}))}).then(function(){})},Cache.prototype.add=function(e){return this.addAll([e])})}()},{}]},{},[13])(13)});


// *** End of auto-included sw-toolbox code. ***



// Runtime cache configuration, using the sw-toolbox library.

toolbox.router.get("/*", toolbox.cacheFirst, {"origin":"blog.hvnobug.com"});




