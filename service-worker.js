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

var precacheConfig = [["/404.html","34a5fdb6336e1e0f8c849b08a5ffaa98"],["/about/index.html","178ddf03582edd91530f0eadc98ddd33"],["/album/2/index.html","1294fc91bc7ac833324e0edde110c909"],["/album/3/index.html","2e68e9797e8a0b0be1403ce4392ad831"],["/album/4/index.html","370daeea6f1d49514002f059d1af1da1"],["/album/5/index.html","41caf2c3a1e9a58197d004a481c5ae5c"],["/album/6/index.html","2344e7e8753c25aece84f920fbf03108"],["/album/aikatsu/2/index.html","5e07b72a47040d120473481d25a17a37"],["/album/aikatsu/3/index.html","8e61a609573702ff4fbd22b3651d21c2"],["/album/aikatsu/index.html","2112100247eec0bb7b74dda358156b57"],["/album/akame-ga-kill/2/index.html","cddde4e945678c4882e0c0066957f5c7"],["/album/akame-ga-kill/index.html","fb31b851872030a2495fe07a0ee84b97"],["/album/angel/2/index.html","826fa8fc1adac2ecc36ab00c5bd53011"],["/album/angel/index.html","d80c931580c12a00f705a19aa58b90a8"],["/album/anonym/index.html","fb8101fc8696f07a836d6ca93209b015"],["/album/aquarian-age/index.html","daa39e1e0fde4d018c2502b64ab7ac12"],["/album/arknights/2/index.html","66752bb303bce5890bb04576d18bf804"],["/album/arknights/index.html","8ab4235ee43a1b83bac500212c7a2ef4"],["/album/attack-on-titan/2/index.html","2c6d686b86ca8f56cd1a3493cc799000"],["/album/attack-on-titan/3/index.html","fed8281f3acf3c372f60e13d0c3f7acc"],["/album/attack-on-titan/4/index.html","6274319f915ddecd94684344c3363216"],["/album/attack-on-titan/index.html","639afbc835f7c52b90163db013275ae2"],["/album/binary/index.html","3980b9e2a2d4f1c9d8c2b7f72086fc15"],["/album/black-and-white-2/index.html","f2c48e8eb71402145aea0167698e43e7"],["/album/black-rock-shooter/2/index.html","1fadd81c8e502f2457b5f5cc2974681b"],["/album/black-rock-shooter/3/index.html","708004a95ac749d363ca2e5369721852"],["/album/black-rock-shooter/4/index.html","c10c67977440a7e53e25649dfe1b8442"],["/album/black-rock-shooter/5/index.html","fcdf3a8c136a022e618f891630e83e7e"],["/album/black-rock-shooter/index.html","a8d56094deda8b198c6b93a4d9acd60b"],["/album/bleach/2/index.html","4a627352f8da14ea72b851f7f42801d6"],["/album/bleach/3/index.html","f576325cc1fff8629735bc1c916679e3"],["/album/bleach/index.html","e29272f358cce836b51f18a8738c2757"],["/album/boruto/2/index.html","e967432c3b1f715b6519adc8c1b0c099"],["/album/boruto/3/index.html","ca1e5fdb06ebfa245f419fddb50bffbb"],["/album/boruto/4/index.html","5809279e40d8dcb25bd1a486c2adcf5e"],["/album/boruto/5/index.html","84cc5f3e18e027fe19f0f530e7a39d15"],["/album/boruto/6/index.html","03bd585007b8519d66e3a0bf9cd413cf"],["/album/boruto/7/index.html","0b2dea5fb9d16f0a5efb92557cf75ca8"],["/album/boruto/8/index.html","2b8ac95e92541b8890b16225b99ace97"],["/album/boruto/index.html","ee14dbaddc4af05e422e50a2f2b34d31"],["/album/circuit/2/index.html","4f11d98890dedc80a1a12a2986b95fe1"],["/album/circuit/index.html","1175f0dd95625d25fd1905f0e80bdfec"],["/album/crossover/2/index.html","190efdbf39198a431c5f830d614f128f"],["/album/crossover/3/index.html","ca911f27e0520eaaa073a15744d96bb7"],["/album/crossover/4/index.html","0b45c5ea7f31a11681c43b843af6061a"],["/album/crossover/5/index.html","1758f0a3cf25f8a4b59a7ad4a5ea35c1"],["/album/crossover/index.html","40290f342de4cb477c73a0246482192a"],["/album/darling-in-the-franXX/2/index.html","9a73e95cb8214ed840b95301c1c1e135"],["/album/darling-in-the-franXX/3/index.html","f31337bf42a1a81818590498cb5833ba"],["/album/darling-in-the-franXX/4/index.html","13b84b5e7bcb5969fc74ad5aa7f63eaf"],["/album/darling-in-the-franXX/5/index.html","be116da9f05ba7a38c7fb5a57e34ebe0"],["/album/darling-in-the-franXX/6/index.html","809d6982874124adcc292a5e3972c592"],["/album/darling-in-the-franXX/7/index.html","3e7fa171128299dff3a31b4fe3a0c482"],["/album/darling-in-the-franXX/8/index.html","0839177550a579d4e1f12bc96acf4e69"],["/album/darling-in-the-franXX/index.html","7bc6f194aec3320bacd4b1db2b62f7e5"],["/album/date-a-live/10/index.html","432596b10faf1406ca3d9de846556214"],["/album/date-a-live/11/index.html","9f19c3625b50af8e300d4de13e54c2e4"],["/album/date-a-live/12/index.html","71df7e124c23fe62869e697651c7b522"],["/album/date-a-live/2/index.html","9b1b5f1ecda73c403367f85fb3cfee77"],["/album/date-a-live/3/index.html","21d95606131f670c595bf78969153895"],["/album/date-a-live/4/index.html","7417a05d81e92445594d4530dd86c97d"],["/album/date-a-live/5/index.html","61970f2649adbfdb2b509271a6f4f4d0"],["/album/date-a-live/6/index.html","6839cf5b11461d7074cc884ad9c66311"],["/album/date-a-live/7/index.html","ea1094a6062c569d7b27a86e6c0d83ac"],["/album/date-a-live/8/index.html","25a1ff46ebf8dda42c90e5aa7cd63dd9"],["/album/date-a-live/9/index.html","67b96f9701e00f49b6e58768208a2805"],["/album/date-a-live/index.html","9787598fede635d6194def26436ba8d3"],["/album/demon-slayer-kimetsu-no-yaiba/2/index.html","fc21ee30b1a0b7e21ee6dbf1297521a8"],["/album/demon-slayer-kimetsu-no-yaiba/3/index.html","667ae450da99e518d0796d90a39f5cca"],["/album/demon-slayer-kimetsu-no-yaiba/4/index.html","67f8121911ea3ab98df055fe2b8b6f6e"],["/album/demon-slayer-kimetsu-no-yaiba/5/index.html","d758d7476c1656c5d52eb0cc1af7ea93"],["/album/demon-slayer-kimetsu-no-yaiba/index.html","abb04e8df392108dddc3301ed380d725"],["/album/dragon-ball-gif/2/index.html","45296e5aa6b1efef62bae739845577cc"],["/album/dragon-ball-gif/3/index.html","cae6ae113edf95ad33abe09456976d8c"],["/album/dragon-ball-gif/index.html","6a27a8bdff164d9747be364b87e26cdc"],["/album/dragon-ball/2/index.html","d65af2e50606549d016d668f14513061"],["/album/dragon-ball/index.html","1810039055423a491677e3aac3abdf35"],["/album/dungeon-fighter-online/index.html","6d4e6f4a7dd67b0924ebd37d3f760b48"],["/album/edens-zero/2/index.html","e24fc0123e2770dbf07982d19184feb4"],["/album/edens-zero/index.html","d900fc7b0fb5dc00ed912be155416149"],["/album/fate-grand-order/10/index.html","5697bc9d497bed33d380dceef46be715"],["/album/fate-grand-order/11/index.html","d88ea4bad3c3670f23cbf87e7a5a1e5e"],["/album/fate-grand-order/12/index.html","02008c0d61797f45d02c1c720e67362b"],["/album/fate-grand-order/13/index.html","91309d5ee00e8295945f89bf4ac0a56d"],["/album/fate-grand-order/14/index.html","ff257504a1696403d36b60d9cde8dde9"],["/album/fate-grand-order/15/index.html","b7c2fc4417402e50c0e09cf915d865e6"],["/album/fate-grand-order/16/index.html","c7d7e2f71f4f965266226d261cc4cace"],["/album/fate-grand-order/2/index.html","a19e2efac37057ad656a4b4c85f98ae5"],["/album/fate-grand-order/3/index.html","e5769eb3de786d965d5c4ff2d42f9562"],["/album/fate-grand-order/4/index.html","6cb7696d714cdc2c9f1e22c094d65bb0"],["/album/fate-grand-order/5/index.html","9bfd0887714666b4046471507ad6102b"],["/album/fate-grand-order/6/index.html","6b978500db8706107e37f675f19d3626"],["/album/fate-grand-order/7/index.html","fc7dbfbf56eb889d642ccd77cfb22aa4"],["/album/fate-grand-order/8/index.html","c9df17a76f076082e06ac1f078404529"],["/album/fate-grand-order/9/index.html","5a57554c53145dc19f9cf17a06bbf952"],["/album/fate-grand-order/index.html","1a73d94c77698d00d8dadcd95453a1d6"],["/album/fire-emblem-heroes/2/index.html","7f751926747eda66d9b8594da82af317"],["/album/fire-emblem-heroes/index.html","9618b1cde1b992110e9f5f24f55dc189"],["/album/gintama/2/index.html","d1b1b2627ad373458a4b958d12b15359"],["/album/gintama/3/index.html","9eb6672c80b1a9c0d78cc1cd47715e59"],["/album/gintama/4/index.html","41108f9a41e37a311755ab364f26dd7d"],["/album/gintama/index.html","333cd78edbd5863010ef33cf29d04d0d"],["/album/girl/10/index.html","041758e6e5f347f336277d42237557ae"],["/album/girl/11/index.html","25f923ec4b41ca5221ac41dca1cf5aac"],["/album/girl/2/index.html","679b44654917a6280af69ba478f45ccd"],["/album/girl/3/index.html","c134dcd3c8ffcb47b253ee7e14284043"],["/album/girl/4/index.html","287c24e609996e70ee00e470932158cf"],["/album/girl/5/index.html","a63fcee3885d2e5a2be817f6501a8d2d"],["/album/girl/6/index.html","45571858699eaef56b4c6c726c19ebf5"],["/album/girl/7/index.html","3123e88a11e0516d3c268a9f327c11ca"],["/album/girl/8/index.html","dcce2bce296727ce1ba2eaf2f3b4a71a"],["/album/girl/9/index.html","1d9830f05b3b2513bf0838a4a56e5e5d"],["/album/girl/index.html","045dc3a4fefa6e0f3a6f1144bbfdc511"],["/album/granblue-fantasy/2/index.html","6a0984f94325ba9db3447d1cfc01a05e"],["/album/granblue-fantasy/3/index.html","e4cbed216b6089c8a0bf7095a34456e5"],["/album/granblue-fantasy/4/index.html","8184091bee1f7ea913ebaad84be15fb6"],["/album/granblue-fantasy/index.html","34568d77fa69f6aa5cccc09d4be1d91c"],["/album/hacker/index.html","a5c02e1fc45f7cda767a0678fc876ede"],["/album/hunter-x-hunter/2/index.html","cc7b2eb4c24cc7f1d9cc5418b6548436"],["/album/hunter-x-hunter/index.html","b2062677badeba559b97388b1ebd334a"],["/album/index.html","e58d668d6f4148b8aa965bb2665ead42"],["/album/jojo-de-bizarre-adventure/2/index.html","ef2c22655861525f79347e8e2ae09f92"],["/album/jojo-de-bizarre-adventure/3/index.html","65b1a6b728af85d8f60d135fe2a6bd0e"],["/album/jojo-de-bizarre-adventure/index.html","e06009d1740310460f9190f6b9f91f05"],["/album/kagerou-project/2/index.html","6fb5c6f1e0b9ad9292b568bac431aa0c"],["/album/kagerou-project/3/index.html","b5629bcc50b5d23e5d8b95c96d94e406"],["/album/kagerou-project/index.html","69e57c0f3ac507899d7a7efc79b65945"],["/album/kill-la-kill/2/index.html","cc46bbdaff868c65ab3cc9b8357f6e7b"],["/album/kill-la-kill/3/index.html","5a6d96ccd1f9683fb345738298e30b72"],["/album/kill-la-kill/4/index.html","547c5a578c9a8a87b0bda4b53148f058"],["/album/kill-la-kill/5/index.html","902ecb75ee2738b279b09ed75a847d33"],["/album/kill-la-kill/6/index.html","8e7d02588b6df07acfa32b80817ea989"],["/album/kill-la-kill/index.html","87f4ae8c0e1823ff2b2bf9698449225a"],["/album/konoSuba–god-de-blessing-on-this-wonderful-world/2/index.html","949e101a06a8d62dd4374d7cb9ea9033"],["/album/konoSuba–god-de-blessing-on-this-wonderful-world/3/index.html","50e0540efc05ea7fca7f75ec8c093af1"],["/album/konoSuba–god-de-blessing-on-this-wonderful-world/4/index.html","0ab5140d753bb12c24710b928fc05b7f"],["/album/konoSuba–god-de-blessing-on-this-wonderful-world/5/index.html","662873973b84c37c262145d598d5b615"],["/album/konoSuba–god-de-blessing-on-this-wonderful-world/6/index.html","d3e6a432a75c21e030b7157bb27d7820"],["/album/konoSuba–god-de-blessing-on-this-wonderful-world/7/index.html","bf333608e8a0fad12447740f9c0fd4b1"],["/album/konoSuba–god-de-blessing-on-this-wonderful-world/8/index.html","d00869bbf33a3a3e99681689109c222b"],["/album/konoSuba–god-de-blessing-on-this-wonderful-world/index.html","721d75d18964805c5a424463083a2dfe"],["/album/league-of-legends/2/index.html","2f4d99b6c191688480c74b9b15a28956"],["/album/league-of-legends/3/index.html","6a12233f7668b106fe83f0bf12d045ea"],["/album/league-of-legends/4/index.html","47cb7022a3f466cc7aac59893d7df3e8"],["/album/league-of-legends/index.html","6fd0eedde46cae41138e9eeaab3b058b"],["/album/linux/2/index.html","4f5fceca918a814a4b6597d97f9b2a38"],["/album/linux/index.html","e89a4287917d76e6db8f835cc1f7f31c"],["/album/loading/index.html","11f5b3dbde346ed8a566ae9ba94ae2b4"],["/album/mac/2/index.html","0ec022893f3516e2babebe6f88505db7"],["/album/mac/3/index.html","47813460ef52c9c72e87ab71f343ea05"],["/album/mac/index.html","ac92394fcf6c0732941e3ca208a43daa"],["/album/mirai-nikki/2/index.html","d74e1a6856922841b297394b094db779"],["/album/mirai-nikki/index.html","f8d44f8e5215b06f8c817a858772ff01"],["/album/my-hero-academia/2/index.html","8039eb821c9d231c595fb94b12157bdf"],["/album/my-hero-academia/3/index.html","2c94ea50667802423d6f9eff7c9d58fb"],["/album/my-hero-academia/4/index.html","71b92b0d19f54557b1ae845065bae279"],["/album/my-hero-academia/5/index.html","cae3a6c1f20aaeb44e2f356b5e08c5f2"],["/album/my-hero-academia/6/index.html","ce48f0158fc32525b4db47e9379fad1b"],["/album/my-hero-academia/7/index.html","00b8cd2a4f993ad82eb7c15bee2c1771"],["/album/my-hero-academia/index.html","b6f5bf539599dd1b3356d476222d3019"],["/album/my-youth-romantic-comedy-is-wrong/2/index.html","993ed47e7e9b740dcd86f029a46e2382"],["/album/my-youth-romantic-comedy-is-wrong/index.html","680c8b9ac989ec667329121520cc5785"],["/album/naruto/2/index.html","27fe0d5ace86f8a92ecde860db8ae486"],["/album/naruto/3/index.html","1abad5b190273c671276bf05eae42d08"],["/album/naruto/4/index.html","7ee0943aff3685af866deb4577591a18"],["/album/naruto/5/index.html","6ed0f7d412497386b9a6714bcc831bd3"],["/album/naruto/6/index.html","f0d1f42f1980eb1673238c535a0176d8"],["/album/naruto/index.html","3e091ce39eb2c0882e2fcc7d24413190"],["/album/neon-genesis-evangelion/2/index.html","6a05635b2644eb273cead01e07562175"],["/album/neon-genesis-evangelion/3/index.html","397cff44c8079192a529df88caed70eb"],["/album/neon-genesis-evangelion/index.html","deec4815c3929b72c02325d983c2f053"],["/album/no-game-no-life/2/index.html","8d85dc547d59c81e46a06977624d0415"],["/album/no-game-no-life/3/index.html","c90a26148fc3e43b9205390832f9a3d7"],["/album/no-game-no-life/4/index.html","ff00df9e18fe8439b4b5d644e0d0c8df"],["/album/no-game-no-life/index.html","63271bc339e14ed48fd1417899729c59"],["/album/noragami/2/index.html","f2842a9224bd936fb3dd59351ea16e8d"],["/album/noragami/index.html","94616934cdf61f8a5114582f1bc23c11"],["/album/one-piece/2/index.html","fe03fa57f4cbc8034c7e08e7dcd960b1"],["/album/one-piece/3/index.html","a6ad72123cc8a068e50b1a5289f6d240"],["/album/one-piece/index.html","ffe27c3a4c4c5fd1f1a21ebc8c8fa4f8"],["/album/original-anime/2/index.html","4f80c02547cea79c8c32f898929aa30e"],["/album/original-anime/3/index.html","5d230e6666017a1609c352f4f25a0c70"],["/album/original-anime/4/index.html","284bd3e873ee62444c9b43eb01fda788"],["/album/original-anime/5/index.html","cf679563027eaca813e71163a36515c8"],["/album/original-anime/6/index.html","2f2d60684631a9f45e4d6d7b2a3716a3"],["/album/original-anime/7/index.html","5b703a64f42f8f5545b9cdeadf4a5e21"],["/album/original-anime/8/index.html","9d79b1f812e6941a4229c0c1f652969c"],["/album/original-anime/index.html","131daaa730113d38e90f6d0df05bb21b"],["/album/overlord/2/index.html","78dc2b95814652b8993cdccd5c7dba7b"],["/album/overlord/index.html","724730c229957eb8953e53292a67575a"],["/album/overwatch/2/index.html","f50132475f9ca95fc61cd8c9bc51be98"],["/album/overwatch/3/index.html","c85727ee4dc63407aecf3eb93cd0b0ea"],["/album/overwatch/4/index.html","88b66272b0dd2d70abbd2d2cdc126e52"],["/album/overwatch/index.html","29b84f99e0774504eee84364a4ec4528"],["/album/panty-stocking-with-garterbelt/index.html","14c7f6fc0b5ee79ed41152cd76c2fa30"],["/album/persona-5/2/index.html","b8182df4275898f2a7891696815ce7df"],["/album/persona-5/3/index.html","c49f5dd177fdcebb6357f9173acb8fee"],["/album/persona-5/index.html","2e3c8ca883058959ffc0cbb12a6493f1"],["/album/physics-chemistry/index.html","2b7b7b32b37324e405c82aa75e509214"],["/album/programme/2/index.html","7d55b02132bebce156dd87990f99eaee"],["/album/programme/index.html","acf97e6cf8f8170f85e82a9cae237943"],["/album/rascal-does-not-dream-of-bunny-girl-senpai/2/index.html","116c0069cdcbe8a3894f51ec0dc21fa6"],["/album/rascal-does-not-dream-of-bunny-girl-senpai/3/index.html","ca1fd8a240556a2b23799b545222bb5d"],["/album/rascal-does-not-dream-of-bunny-girl-senpai/index.html","6659a0172272c4835db1ae068d2ea393"],["/album/rosario+vampire/2/index.html","4826e40674c74308fc947839dce1842a"],["/album/rosario+vampire/index.html","c3646e9b5b057b6a16b4ee5e4293ace3"],["/album/shakugan-no-shana/2/index.html","509eda0e8af1e980602eba51bd0edce1"],["/album/shakugan-no-shana/3/index.html","5b7db94728b96efd07e321b8f4e15de9"],["/album/shakugan-no-shana/4/index.html","496b28c79059131fd3db41e726c54f66"],["/album/shakugan-no-shana/index.html","6bd2d9c0cb6b5baa9df493597bed5e87"],["/album/solo-leveling/index.html","c42daa52b9162d02d70439f0ed2ba8cf"],["/album/sun-and-moon-wallpapers/index.html","9667552749b0f74f3d9d4d347c834ad3"],["/album/sword-and-shield/index.html","050cce696420d0fce307cf128f4941e3"],["/album/sword-art-online/2/index.html","ce929761d76c5d1af0c3959d44a915ac"],["/album/sword-art-online/3/index.html","113b3b262007a480c7804a4cfc0e03e8"],["/album/sword-art-online/4/index.html","1f52b4ff91441b26fe93811735cf96b7"],["/album/sword-art-online/index.html","b6d45f2c9f2343d217b6b0bf42b6b96b"],["/album/that-time-i-got-reincarnated-as-a-slime/2/index.html","c0c9b2ea835685a7279c0d089e524784"],["/album/that-time-i-got-reincarnated-as-a-slime/3/index.html","b11318698d7558a497517bb83cbafc36"],["/album/that-time-i-got-reincarnated-as-a-slime/index.html","b7f809322c136e2547227e0aeb001348"],["/album/the-seven-deadly-sins/2/index.html","7a134ea06f103269a581257de194f543"],["/album/the-seven-deadly-sins/3/index.html","6169dbbd357c4e4f74c23830b0960765"],["/album/the-seven-deadly-sins/4/index.html","7058bf4e03cf9e3e1dd376c1528e1884"],["/album/the-seven-deadly-sins/5/index.html","f182abe435f61bf7b0607b0a6f6a44fa"],["/album/the-seven-deadly-sins/index.html","6fdc5fd052918b60ccae4725b3005797"],["/album/tokyo-ghoul/2/index.html","d2ac989ded38f719d084993010de60b9"],["/album/tokyo-ghoul/3/index.html","d7358efa57c98aa415c3bb125e028999"],["/album/tokyo-ghoul/4/index.html","73a41a1c00df3bb0a92de3a24127e0c8"],["/album/tokyo-ghoul/5/index.html","a7bea7f666a118a2580d7888d0df9442"],["/album/tokyo-ghoul/6/index.html","8a35ac38a927aed45d5e33f6eabc659c"],["/album/tokyo-ghoul/7/index.html","3efebc91f7763e01b09b96da4ebafc80"],["/album/tokyo-ghoul/index.html","f45e89a100803bd14e89db8ccf00f987"],["/album/vocaloid/2/index.html","cf2bfd327fee80c2e2e6a71af5150c64"],["/album/vocaloid/3/index.html","00c0d65360adb9f705799679db0ea656"],["/album/vocaloid/4/index.html","53804563c8211abfa88d783bdb626a43"],["/album/vocaloid/5/index.html","fef4c58ff26d192de62facf77bfe5302"],["/album/vocaloid/index.html","b6917a63e9ca313556094c62c00367e2"],["/album/your-lie-in-april/2/index.html","235e397565822915154091fdff4d6d3d"],["/album/your-lie-in-april/3/index.html","e257ae5c33f50dc1f866376da18fa2db"],["/album/your-lie-in-april/index.html","ea4c5f08d41f1ac1a07a2ab2f68ff2f3"],["/album/your-name/10/index.html","6a1aa50db28b29c2dbae1ed66dfc0541"],["/album/your-name/2/index.html","9f7ad4b68bd6f80f1de8fa24f2006b17"],["/album/your-name/3/index.html","31d1aa1f83e93601188196892b5297e2"],["/album/your-name/4/index.html","430239e190fc61c3e30fd9421e3453a8"],["/album/your-name/5/index.html","deb86ab38d4a45c290455250b0a928ba"],["/album/your-name/6/index.html","7bd37b1e2b6108a424e22512bf3f8a3e"],["/album/your-name/7/index.html","bde3c5ab8643493e22074a6ba33fba87"],["/album/your-name/8/index.html","a258b8e6a478c8b2d171c3c82c9cc0fe"],["/album/your-name/9/index.html","bee1c800ebd884ac25ce8ac2ae925163"],["/album/your-name/index.html","1b69c922358b6ffe8f4b2795aa571ad4"],["/album/yuuki-yuuna-wa-yuusha-de-aru/2/index.html","396079ab2694e8230f7b3d9cab1278c7"],["/album/yuuki-yuuna-wa-yuusha-de-aru/3/index.html","a0e51e3b47c9a919fefb25caa527a20c"],["/album/yuuki-yuuna-wa-yuusha-de-aru/index.html","8544050b7f2088f77b9058eb7d2d3ed7"],["/album/zero-kara-hajimeru-isekai-seikatsu/2/index.html","c5889326fdc67fc6b3007c40610451a9"],["/album/zero-kara-hajimeru-isekai-seikatsu/3/index.html","30488c4c57fe979155d95eab9993491c"],["/album/zero-kara-hajimeru-isekai-seikatsu/index.html","b5932c030a070b4e993b7614c600be68"],["/archives/2019/06/index.html","896953f79cf4099d3bfe714d348d740f"],["/archives/2019/09/index.html","ba27c38fd07c2cabcf188370c1fd229a"],["/archives/2019/10/index.html","c3c697c348b24ebcd24cfc9760dc0114"],["/archives/2019/12/index.html","a10e7b481fbc7fcee25ae39661d7d29e"],["/archives/2019/index.html","85a04445f419741deb30bba4363e3541"],["/archives/2019/page/2/index.html","592b3b57bc3880a19cadbdb400a2abe9"],["/archives/2019/page/3/index.html","b598eda03029cc279a0a017c3767e4e2"],["/archives/2020/01/index.html","c1a27f263e7db4dd1221fd3cefa0c1e3"],["/archives/2020/03/index.html","fcd87075c6a8ca380cc346d390fdbbbe"],["/archives/2020/07/index.html","8b3a7359342417f67d6f0419a46253fc"],["/archives/2020/08/index.html","6e9e11605823fbc85f1437896a554ea8"],["/archives/2020/09/index.html","eb78e16d21c51708c0f1b5f89028202b"],["/archives/2020/11/index.html","c33a93d56921d21e902f113aa6ef0eb4"],["/archives/2020/12/index.html","25674ce5db0d3cabbc1270a9efc91d3a"],["/archives/2020/index.html","9bdff0f430c65f0bd96bb08f461f7802"],["/archives/2020/page/2/index.html","552f5118c56eb1c43e8970804eca65d2"],["/archives/2021/01/index.html","e6183ec013e31add04d774797b65a496"],["/archives/2021/index.html","a480c0993eb99834269bde4ef80a2a20"],["/archives/index.html","32053d41e12530dc7f0e1c6da7eabf65"],["/archives/page/2/index.html","1353cfffd019c42e86f3e613aac5fb10"],["/archives/page/3/index.html","13b970357ae335e1b9b166f8bd336139"],["/archives/page/4/index.html","8d3607eaafdf5d3a0c03af5c2043198e"],["/archives/page/5/index.html","17125aede9375e881ab1bba1aae56516"],["/assets/aplayer.js","da954400b8f951527e05c127fa11a375"],["/assets/lazyload-image.js","b1f504b4a0b8eba19f8f4606da73c4db"],["/books/index.html","3e7263870d54b784efdaa1d0cbfa83f3"],["/categories/cdh/index.html","0686bdd7b14765688062e448a84e2a76"],["/categories/cdh/ubuntu/index.html","8ac654d5cc2ee4785e79218af810fd49"],["/categories/docker/index.html","813fb75d6c3221a80f6423136adac6c9"],["/categories/github/index.html","e58af903775bea838a35d5865ca41ab7"],["/categories/github/windows/index.html","5dcd94526a464170f227b6d1e59a635f"],["/categories/hadoop/hive/index.html","8886ca67f9291b7d599e6fa41a71af71"],["/categories/hadoop/index.html","c7425aa024d5db315773b99015de71aa"],["/categories/hadoop/spark/index.html","7ab234efceceaca0aa0f767d32d40cfa"],["/categories/hadoop/ubuntu/index.html","cd6fb00c3d07c22e15b19d94a8fc623a"],["/categories/hexo/github/index.html","201857f4f296acd9cfb1cb9fcce2badb"],["/categories/hexo/index.html","2dbb64747aad196489cd31d8b4428367"],["/categories/ide/index.html","6e9b3ee754492343e1e5274822637560"],["/categories/ide/theia/index.html","8cdaa9f8d90285f890b726d1da5187bf"],["/categories/index.html","bcdecb0a64ab1cec06ca7979b667a0b1"],["/categories/java/index.html","72b7c48380b517096ce2a6ee74040a94"],["/categories/javascript/index.html","190dd8ea56072ab97675b289cdd31c8a"],["/categories/jdk源码/index.html","7d7b27afc8f530165e422a24aa55284d"],["/categories/jdk源码/java/index.html","83d169e13e1af957b43f58e1b8f8a053"],["/categories/linux/index.html","6663e9bbf05ece57144dafe300e6094f"],["/categories/mac/index.html","386b9952a12655829ff539008ab79f88"],["/categories/mq/index.html","5ae2521edff72203abd3363371fa33de"],["/categories/nginx/index.html","41cf6da84e417edfac2d1cd35cee2f3a"],["/categories/other/index.html","9fae4e8650ac75aa75137cae575c6fab"],["/categories/python/index.html","054353fb621f42682ca9b4c11bd7646e"],["/categories/selenium/index.html","2511ff80ca9d48373256397810f8008f"],["/categories/selenium/python/12306/index.html","2f013c47c5bec2f4229cdf0995c2a3a2"],["/categories/selenium/python/index.html","ab340fee1e9098574d4d38e118437ed2"],["/categories/vuepress/index.html","36a02dc8c7f679ee1823bd4505b0ba76"],["/categories/算法/index.html","ccf07c5fd49fb1a22a96fb3d6e6efb90"],["/categories/算法/java/index.html","0e7c3ac9c80444f4d8299b5b52ef2fe6"],["/categories/算法/数据结构/index.html","643b344ee161c281e20955bb82fb7958"],["/categories/算法/数据结构/java/index.html","a88399cd021122beeac08b0a02d99251"],["/css/index.css","054a9746dc01d007c398e93c21278b2c"],["/css/var.css","9cbf118f1cc67b1df343f4ff2935afb4"],["/friends/index.html","f55c987375d424e5e2ac2f613edd9c8e"],["/games/index.html","2027b12ad477367b0d97b16da880caa3"],["/go.html","4bd8d315c2bc41d0ce799fd4df4eca02"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["/index.html","9224aaa4bfe88b9f748563c1d8d18c9c"],["/js/main.js","1c7d6eb8f8b1a9e2a06c37906146eb84"],["/js/search/algolia.js","e6a9c3f8fa43a7d3421169ea96eef44e"],["/js/search/local-search.js","86e7fcbc5aa273e6c3d2c94b0054809b"],["/js/tw_cn.js","bd869d5fd54e2fe1f1eeee7c46fa46bc"],["/js/utils.js","5720a78dca20fab16f21914ae3ac0757"],["/movies/index.html","50098ba63c7ca5caac2083155c64c6e3"],["/nav/index.html","fea89b504fc1515927ef1df8eaa8615b"],["/page/2/index.html","054c4f123c6836bc9d097d5314d373e1"],["/page/3/index.html","7cc17e6941f95270bdca40dcf8d27fed"],["/page/4/index.html","421c72dc514925bed8592191b1110ec2"],["/page/5/index.html","7c8b3b7c507b8f5c900cc73768ef0c7d"],["/page/6/index.html","c4d98dd7dcde4e612fd3ed5db6364160"],["/page/7/index.html","42f889d7ffda428b41943d08db29a9c9"],["/post/12306-open-source.html","775d9470adbd09bb94baa687e86816df"],["/post/about-document-encrypt.html","938a30030fe661629edecf7bd77d264c"],["/post/awesome-java-github-project.html","c007c094e74ac48fce6ad7af12aa9a98"],["/post/awesome-java-github-tool.html","48398ad82a5a3a00f27ad46952c651bc"],["/post/bloom-filter-java.html","66308cb975d28cccf09cdfce3f66f601"],["/post/cloudare-manager-install.html","e9a39a99b680a13551b24a55ff916c77"],["/post/docker-remote-access.html","508214e0d511c3dce658e27d8b48c9b5"],["/post/es6-array.html","31dd95987745e623790605c81a73f256"],["/post/es6-promise.html","e37a27a3ef042be3faebdb26718afdce"],["/post/github-accelerate.html","de2d15a56e11260c8fa0dd79dbd883e6"],["/post/github-action.html","3db74dbadf28de9613d8351241a81e30"],["/post/github-learning.html","a4af374bd28ae76fde27a8241ade41ba"],["/post/hadoop-distributed.html","227e35849f2aeb66f28a1b97069b3341"],["/post/hadoop-hight-avaliability.html","096b88af39c737d2b5aede36e2d655bd"],["/post/hadoop-pseudo-distributed.html","fb86264174a97db91ee22dd1b54e3483"],["/post/hadoop-standalone.html","91451db35c3ba394ce17b8b88fc914f3"],["/post/hadoop-ubuntu-compile.html","dbce140b6fbd74459260f94eca541f60"],["/post/heap-sort.html","3c20a4627191538ab6d4038ee7f04de0"],["/post/hexo-free.html","933a6334d22f03d89bbb011972d5a5b2"],["/post/hexo-loading-page.html","965ad1e07cb87b38d4e2729acb7785af"],["/post/hexo-optimize.html","8ba1cd53a10237b7927aa9e17221dddd"],["/post/hexo-script.html","26c67880eeba21490614a263e0b2ba82"],["/post/hive-install.html","6be883eab01413eb6b52d5ab4911509e"],["/post/how-interesting-project-thefuck.html","dc9eb58665d2add68bd425cd19057549"],["/post/java-reflect-type.html","7841f229d6cd08196dcf5e69386daad1"],["/post/jdk-source-arraylist.html","8184b768568be1913537bfbe87482a0d"],["/post/jdk-source-hashmap.html","86af4365890cd5014d1ae29e6ef8738f"],["/post/jdk-source-hashset.html","802a7a794d90aa97cc8e149cb54ae3e8"],["/post/jdk-source-linkedlist.html","7678c056726374ba99e26c09cab18e41"],["/post/jdk-source-stringbuilder.html","995e56a209aa27d2e8a5376330e1705b"],["/post/lru-java.html","5f071cd90e6e0bb8e061de7d34715504"],["/post/mac-terminal-iterm2.html","a9e285d2d30ff937367f043dc5ccb0a8"],["/post/mq.html","574ec9e4a1757bc443b18f2ecfdf961d"],["/post/nginx-variable.html","267bf1d0046f7fae17eae3f54fda4cc1"],["/post/opencv-opensource.html","2bc6bd1af894b98fcefd3c06f0d6ec94"],["/post/recommend-window-github-projects.html","4dbc2557e129b0445283bebcee08bf61"],["/post/remote-ide.html","626d88128d501a2900e7dff2f4c15b78"],["/post/rocketmq.html","721c96e642faf46e24b915631293b675"],["/post/selenium-12306-login.html","34ab2a26ce197cd964a60d5f82ccebe8"],["/post/selenium-12306-ticket.html","ac98f6f95d42ddc32009b992c00fa054"],["/post/spark-install.html","838f77a62c160f91e499785a6f999a41"],["/post/spring-boot-email.html","1baa1fb1820ebfba9300b2e23bfa2a92"],["/post/spring-boot-jpa-multiple-datasource.html","ad108d3c062814bf302a93788ee12f6c"],["/post/spring-boot-quartz.html","8af4b29d4e87eb40fccf8bc351bf7d1d"],["/post/spring-boot-springapplication.html","6473bf571aad67a6b89f105908199e56"],["/post/spring-security-redirect.html","340d5427201147697bdbc37e579ee680"],["/post/ubuntu-nginx-certbot.html","063e095e4335823731e29c92666bdc38"],["/post/user-mode-linux.html","76e4ca4ccaf35264088251ce0d4140ce"],["/post/vuepress-theme-dew.html","e7fa0cac200a8521611d231ab3e7c4b3"],["/pwa/16.png","39dc06014f6226ef8fe0de4c2730c66b"],["/pwa/32.png","6c2412cdc9f38d6a87d1c99f447b1209"],["/pwa/apple-touch-icon.png","1a603ff1663748a6998fbe5a5f1e1857"],["/pwa/safari-pinned-tab.svg","d4f899581da7961a3c43f595637fd6c1"],["/tags/12306/index.html","e095a6b639f6c29ebfdfc7e10b199dcb"],["/tags/cdh/index.html","b767f150c8245367db411b8c905ff010"],["/tags/docker/index.html","ecc32412fd3f48b94d79fa917598f9ff"],["/tags/druid/index.html","284f3cffa16bbd0672f03dd0502067bb"],["/tags/encrypt/index.html","3dc0a9e088b6227d8845836ee8394fed"],["/tags/es6/index.html","245aa428abf65017b727b325383bb58e"],["/tags/github/index.html","5833cd1ba93425fe719072dba16bfc3a"],["/tags/hadoop/index.html","c71c928db1456bbe64d4ea70c01c326b"],["/tags/hexo/index.html","a0c089ba512fae695ec64849227d2499"],["/tags/hive/index.html","b19d3e94fb8de49203dda24cfe652556"],["/tags/https/index.html","c80dd2f51cbd5cd4207ce8081f32137b"],["/tags/ide/index.html","e95371ef5a359a33e5446220cc43c9e6"],["/tags/index.html","dc5f5abd3d87979a6b1a524dee62e6c3"],["/tags/java/index.html","b4d84ef481a302190591e1839681de67"],["/tags/java/page/2/index.html","12fd1c5c63e0b1ccd28c05e74c10fa86"],["/tags/javascript/index.html","0964ef6a2f15a85e651ca6a1208cda98"],["/tags/jdk源码/index.html","d62ce285b50cc6dd5a68a5bcc9c12a86"],["/tags/js/index.html","2b4b27bca0fe5674f26db078eabfdfad"],["/tags/linux/index.html","d6ccd8eff37abe4fb109c728cf1827f2"],["/tags/mac/index.html","206f76e04d70b22d2dd320ed7c1af7a9"],["/tags/mq/index.html","70768174de0670dcee0f3ac2fdd8eb62"],["/tags/nginx/index.html","052d33dae8ad5eb3bc1950240745ad54"],["/tags/opencv/index.html","306b87c5b81e1217bd599bca3c013026"],["/tags/python/index.html","fef7ac69b53438df2a91b7c043e34951"],["/tags/quartz/index.html","4a3ccf5d2461517ab04fc45a1d9e483b"],["/tags/selenium/index.html","219e150c9a7159c844d3ddeeca2cfe21"],["/tags/spark/index.html","d7a901cdaeadb42e509cc566145965ee"],["/tags/spring-boot/index.html","e08a4d3851314576804875fb16319dfa"],["/tags/spring-security/index.html","d2bb25c5359fc1daab92cddb5d34e04a"],["/tags/theia/index.html","a127669cb05595468907f2a5095e239f"],["/tags/ubuntu/index.html","cfdfa8dbc93b810c29e4c1d4d62efd9e"],["/tags/vuepress/index.html","caa7b848a30abf1e83a4604408619c42"],["/tags/windows/index.html","c22af4c3ce99f409f170ba988d1d82d7"],["/tags/数据结构/index.html","86dc7592430d94a58242f72017f75373"],["/tags/算法/index.html","49c2c9eb8ee8622f237d66b3476f271c"]];
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




