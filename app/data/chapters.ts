export type Chapter = {
  num: string
  short: string
  desc: string
  time: string
  content: string[]
}

export const chapters: Chapter[] = [
  {
    num: 'I',
    short: 'Аялалын эхлэл',
    desc: 'Гулливер анх далайд гарч, хөлөг нь сүйрч, Лилипут орны эрэгт олзлогдон унтсаны учир.',
    time: '18 мин',
    content: [
      'Намайг Лемюэл Гулливер гэдэг. Би Английн Ноттингемширийн нутагт, эцгийн жижигхэн газар төрсөн билээ. Гэр бүлийн таван хүүхдийн гурав дахь би байв. Арван дөрвөн настайдаа Кембрижийн Эммануэль колледжид элсэн орж, гурван жилийн турш чин зүтгэлтэй суралцав.',
      'Анагаах ухаанд анхаарлаа төвлөрүүлсэн боловч далайн аяллын татах хүч надад хэзээ ч дийлдсэнгүй. Тийнхүү 1699 оны тавдугаар сарын дөрвөнд би «Антилопэ» хэмээх хөлгөнд гарч, Зүүн Энэтхэгийн зүг чиглэв.',
      'Уудам далайд гарсан биднийг долоо хоногийн дараа гэнэтийн ширүүн шуурга нөмрөн авч, хөлгийг маань Ван Дайменийн нутгийн баруун хойд эрэгт буй хадан хясаа руу шиджээ. Бид арван хүн жижиг завиар амь аврахаар далайд оров. Гэвч уг нь хэдхэн цагийн дараа асар их давалгаа давшилж, завийг хөмрүүлэн нөхдийг минь нүдний өмнө тэр чигт нь живүүлэв. Би ганцаараа усанд тэмүүлэн сэлэв.',
      'Хэр удаан сэлсэн билээ — өдийг хүртэл мэдэхгүй. Эцэст нь хөл минь хөрсөн дээр тулж, би мөлхөн эрэгт гарав. Элсэн дээр ядарч сульдсан биеэрээ дэвлэн хэвтэхдээ нойронд автжээ. Сэрсэн цагт юутай хачирхалтай гэгч нь: бие минь газарт чанга боогдсон, хуруу ч хөдөлгөх аргагүй байсан билээ. Олон зуун жижиг утаснууд намайг тал тал тийш татан газарт бэхэлсэн ажээ.',
      'Удалгүй цээж дээгүүр минь хүний хөлийн чимээ сонсогдов. Дээш харахад зургаан см илүүгүй биетэй жижигхэн хүн миний нүүрэн дээр зогсож, баруун гартаа жад барин, ард нь өөрсдийнх нь нөхөд гарч ирж байсныг үзлээ. Эхэн нь би тэднийг хий үзэгдэл хэмээн санасан ч энэ нь Лилипут хэмээх улсын иргэд болохыг нь дараа нь танин мэдсэн юм.',
    ],
  },
  {
    num: 'II',
    short: 'Лилипутын нутагт',
    desc: 'Эзэн хаан болон бүх ордны хүмүүс Гулливерийг хүлээн авч, нийслэлд хүргэсэн нь.',
    time: '16 мин',
    content: [
      'Лилипутын эзэн хаан Голбасто Момарэн Эвлэм Гурдайло Шефин Мулли Улли Гу намайг өршөөж, нийслэл Милдэндо хот руу зөөн авч явахаар шийдвэрлэв. Хаан зөвлөхүүдээ цуглуулан, ийм аварга биеийг хэрхэн хотод хүргэх тухай нарийн зөвлөлдөв.',
      'Эцэст нь онцгой том тэрэг бүтээж, таван зуун морь, таван зуун тэрэгчин хүчин зүтгэлээр намайг хотын зүгт зөөв. Хотын захын чөлөөтэй талбайд намайг буулгаж, нэгэн эзгүй сүмд байрлуулав. Эзэн хаан хатан хаантайгаа хамт надтай уулзахаар морьдоо унан ирж, надад цагаан талх, шарсан мах, голын дарс гаргаж өгөв.',
      'Хааны ордонд намайг байрлуулах гэснийг боловч, ордны хаалга надад орохын аргагүй жижиг байсан тул хотын захад том сүмийг ор сууц болгон сонгожээ. Гар хөл минь хэдэн зуун утаснаас чөлөөлөгдөөгүй хэвээр байсан боловч намайг аажмаар итгэлтэй гэж үзэх тутам утаснуудыг нэг нэгээр нь тайлж эхлэв.',
      'Эзэн хааны зарлигаар би тэдний хэл соёл, ёс заншлыг судлах болов. Лилипутын хэл нь онцгой богино үсэгтэй, нарийн дүрэмтэй ажээ. Хааны нарийн бичгийн дарга Рэлдрэсэл багш минь болж, тэр өдөр бүр ирж надад хэл зааж эхлэв. Гурван долоо хоногийн дараа би тэдэнтэй чөлөөтэй ярилцаж чадах болсон билээ.',
    ],
  },
  {
    num: 'III',
    short: 'Хааны ордон',
    desc: 'Эзэн хааны ордонд Гулливер ёслолын тэмцээн үзэж, эрх чөлөөнийхөө тангаргийг өргөсөн нь.',
    time: '20 мин',
    content: [
      'Лилипутад өндөр алба тушаалд томилогдох арга нь бидний ертөнцийн ёсноос асар ялгаатай ажээ. Тэд нэр дэвшигчдийг нарийн утсан дээр бүжиглүүлдэг — хамгийн өндөрт үсэрч чадсан, хамгийн удаан унахгүй бүжиглэж чадсан этгээд эрхэм албыг хүртэх журамтай байв.',
      'Хотод буусан нэг сарын дараа намайг хааны нэрэмжит ёслолын тэмцээнд үзүүлэхээр урилаа. Тэнд би хоёр өнгийн утас (хөх, улаан, ногоон) дээгүүр хааны эрхэм нь үсрэх тоглоомыг үзэв. Хаан өөрөө таяг бариад ирвэл, нэр дэвшигчид түүгээр давах буюу доогуур нь өнхрөх ёстой. Хамгийн мэргэн нь өнгөт утаснаас шагнал болгож авдаг ажээ.',
      'Гурван сарын дараа хааны зөвлөл намайг чөлөөтэй явахыг хэлэлцэв. Зарим нь эсэргүүцэхэд хааны итгэлт зөвлөхүүд эрх чөлөөний бичиг боловсруулав. Тэр гэрээгээр надад дараах үүрэг хариуцлагуудыг ноогдуулсан билээ: хаашаа явахаасаа өмнө хааны зөвшөөрлийг авах, иргэдийн нэг ч хүнийг хөл доороо гишгэхгүй болгоомжтой алхах, дайны үед хаанаа үйлчилж туслах, гадаадын элчин сайдад хүндэтгэлтэй хандах гэх мэт.',
      'Тангараг өргөх ёслолыг хаан болон ордны эрхэм түшмэдийн өмнө гүйцэтгэв. Эртний ёсыг дагаж би зүүн хөлөө баруун гартаа барьж, баруун гарын дунд хурууг чихний дайтан, эрхий хурууг толгойн орой дээрээ тавин тангараглах ёстой байв. Тангаргийн дараа хаан тариа будаа, дарс гэх мэт хоол хүнсний тэтгэвэр болон тогооч, үйлчлэгч нарыг надад дайчилж өгөв.',
    ],
  },
  {
    num: 'IV',
    short: 'Нийслэл Милдэндог',
    desc: 'Гулливер нийслэл хотыг тойрч үзэж, эзэн хааны ордонд зочлон, нарийн бичгийн даргатай уулзан, улсын байдлыг сонссон нь.',
    time: '15 мин',
    content: [
      'Эрх чөлөөтэй болсныхоо дараа нийслэл Милдэндог тойрон үзэх зөвшөөрөл хүсэв. Хаан өршөөн зөвшөөрсөнд би маш их баяртай байлаа. Хот нь дотор болон гадна гэсэн хоёр давхар ханатай, тэгш дөрвөлжин хэлбэртэй ажээ. Дотор хана нь арван хоёр алхам өндөртэй, голд нь дорнод барууныг холбосон гол гудамж сунаж тогтсон бөгөөд хоёр гудамж загалмай хэлбэрээр хотыг хуваан тогтоодог байв.',
      'Хааны ордон хотын яг голд байрладаг. Ордны гадаа хана нь см өндөртэй, гол хаалга нь арван найман см өндөртэй учир би хоёр хөлөөрөө сөгдөж, газарт шахагдаж ордог байв. Хоёр талд нь сайхан цэцэрлэгтэй, голд нь хааны амьдрах байр оршино.',
      'Нэгэн өдөр хааны нарийн бичгийн дарга Рэлдрэсэл намайг ордонд урин залсан билээ. Тэр улсын хамгийн чухал хоёр намын байдлыг надад тайлбарлав. Энэ хоёр нам гэгч нь Тремексэн болон Слемексэн нар байсан буюу нэг тал нь өндөр өсгийтэй, нөгөө тал нь намхан өсгийтэй гутал өмсдөг учир ийн нэрлэгджээ. Тэд нэг нэгэндээ маш их өстэй байсан тул нэг намынхан нь нөгөө намынхантайгаа хооллож суух явдал хүртэл ховор ажээ.',
      'Гэхдээ үүнээс ч илүүтэй ширүүн маргаан дэгдсэн зүйл бол өндгийг хаанаас нь цохиж задлах вэ гэдэг тухай байв. Эртнээс эхлэн өндгийг бүдүүн үзүүрээс нь цохиж задладаг ёстой байсан боловч одоогийн эзэн хааны өвөөгийн үед нэгэн дагалдангийн өндгийг хагалах үед хуруу нь зүсэгдсэн учраас тэр цагаас хойш нарийн үзүүрээс нь цохих ёсыг тогтоосон ажээ. Эл шинэчлэлийг үл зөвшөөрсөн зургаан мянган Бүдүүн Үзүүртэн хөрш зэргэлдээ Блефуску улс руу зугтаж очив. Хоёр улс энэхүү өндөгний учир зуун жил тэмцэлдэн, хэдэн тэрбум иргэдээ алджээ.',
    ],
  },
  {
    num: 'V',
    short: 'Флотыг булааж авсан нь',
    desc: 'Гулливер ганцаараа Блефуску улсын усан цэргийн бүх хөлгийг булаан авсан нь.',
    time: '14 мин',
    content: [
      `One day the Emperor summoned me to his palace and gave me a commission of the utmost importance. I was to destroy or carry off the entire fleet of the kingdom of Blefuscu. Blefuscu is an island kingdom, separated from Lilliput only by a narrow channel of sea. At that time the two kingdoms had been at war for more than a hundred years.\n\nНэгэн өдөр хаан намайг ордондоо дуудан, нэгэн чухал даалгавар өгөв. Энэ нь Блефуску улсын усан цэргийн бүх хөлгийг устгаж авчрах ёстой даалгавар билээ. Блефуску гэгч нь нарийн тэнгисийн хоолойгоор тусгаарлагдсан ойрын арал улс юм. Тэр үед энэ хоёр улс зуу гаруй жил дайтаж байсан билээ.`,
      `When I inquired of the guards as to the depth of the channel, they told me that even at its deepest the water did not exceed four and a half feet — about the height of a man's chest to me. Forthwith I commanded ropes and iron hooks to be made to my own measurements. The ropes were spun of thick cotton thread, and the hooks fashioned from the sewing needles of the country. Within three days, fifty ropes and as many hooks were ready.\n\nБи тэнгисийн хоолойн гүнийг харуулуудаас лавлахад хамгийн гүн хэсэгт нь дөрвөн фут хагасаас хэтрэхгүй гэв — түүний цээжний орчим хэмжээ. Тэр даруйд би өөрийнхөө хэмжээгээр гар тоормын олс, төмөр дэгээ хийлгэхээр захиалга өгөв. Олсыг нь хөвөн утсаар, дэгээг нь оёдлын зүүгээр хийсэн ажээ. Гурван өдрийн дотор тавин олс, мөн тооны дэгээг бэлдэв.`,
      `When I waded into the channel and reached the harbour of Blefuscu, several hundred soldiers stood watchful beside their fifty vessels. The moment they spied me, they loosed thousands of arrows upon me. The arrows pricked my face and hands like needles, but I had brought with me a pair of spectacles, which I had drawn forth and set upon my nose; and so my eyes were preserved from harm.\n\nТэнгисийн хоолойд орж, Блефускугийн боомтод хүрэхэд тэдний далан таван хөлгийн дэргэд хэдэн зуун цэрэг сонор сэрэмжтэй зогсож байв. Намайг үзсэн тэр даруйд цэргүүд галт сум хэдэн мянгаараа надруу харвав. Сумнууд миний нүүр гар руу минь зүү шиг хатгасан боловч би нүдний шил авчирсан байсан бөгөөд түүнийгээ сугалаад хамар дээрээ зүүсэн байсан тул нүд минь аюулаас хамгаалагдсан.`,
      `I did not waste a moment in returning fire, but set to my work with all haste. I fastened a hook into the prow of each ship, gathered all the ropes into one bundle in my hand, and tied them together. Meanwhile, a hundred arrows of the enemy still struck my body, but my coat of leather protected me. When all was ready, I drew the ropes mightily, and fifty-five vessels followed me out of the harbour, towed behind me to Lilliput.\n\nБид сум харвахдаа цаашлаагүй, харин шуурхай ажиллав. Би хөлөг онгоцны хошуунд дэгээ зүүж, бүх олсыг гартаа нэг багц болгон цуглуулж, хооронд нь зангидав. Үүний хооронд дайсны зуу гаруй сум миний биед шигдсэн боловч арьсан хүрэм минь хамгаалав. Бүх зүйл бэлэн болсны дараа би олсыг хүчтэй татаж, тавин таван хөлөг онгоц намайг боомтоос гаргаж, Лиллипут руу чирэв.`,
      `The people of Blefuscu stood amazed upon the shore. When I came to the Lilliputian coast, the Emperor and Empress went forth together to receive me, and there and then the Emperor conferred upon me the title of Nardac — the highest dignity in all the kingdom of Lilliput.\n\nБлефускугийн иргэд эрэгт зогсон гайхан байсан билээ. Лилипутын эрэгт хүрэхэд хаан хатан хоёрын хамт намайг угтан гарсан бөгөөд тэр даруйд намайг «Нардак» хэмээх дээд цолоор өргөмжилсөн. Энэ нь Лилипут улсын хамгийн дээд цол хэргэм билээ.`,
    ],
  },
  {
    num: 'VI',
    short: 'Иргэд ба хууль',
    desc: 'Лилипутын иргэдийн ёс заншил, хууль дүрэм, хүүхэд хүмүүжүүлэх журам.',
    time: '22 мин',
    content: [
      `The Lilliputians are by nature an ingenious people, and they show a particular talent for mathematics, geometry, and mechanics. Their manner of writing differs altogether from our own: they write neither from left to right, as the Europeans, nor from top to bottom, as the Chinese, nor in parallel columns, but slanting from one corner of the page to the other — much in the manner in which English ladies of quality are wont to write their letters.\n\nЛиллипутчууд бол төрөлхийн авьяаслаг ард түмэн бөгөөд математик, геометр, механикийн онцгой авьяастай. Тэдний бичих арга барил биднийхээс тэс өөр: тэд европчууд шиг зүүнээс баруун тийш, хятадууд шиг дээрээс доош, зэрэгцээ баганад ч биш, харин хуудасны нэг булангаас нөгөө булан руу хазайж бичдэг - энэ нь Английн бүсгүйчүүд захидал бичдэг заншилтай адил юм.`,
      `Their laws are most curious to consider. Among them, fraud is reckoned a graver crime than theft, for they hold that a clever man who deceives another by his wit injures society more than he who openly takes another's goods. By their statute, the deceiver is therefore punished with death.\n\nХууль ёсны тухайд гэвэл онцгой сонирхолтой ажээ. Тэдэн дотор хууран мэхлэлт нь хулгайгаас ч хүнд гэмт хэрэг гэж тооцогддог, учир нь ухаалаг хүн өөрийн ухаанаар бусдыг хохироох нь өөрөөсөө сул хүнийг хохироохоос илүү буруу үйлдэл хэмээдэг. Үүний дагуу хууран мэхэлсэн этгээдийг цаазаар авах болно.`,
      `Their principles of reward are no less remarkable. Should a man prove that he has lived seven years without breaking any law of the realm, the Emperor bestows upon him a certain sum of gold and the title of Snilpall, meaning legal, or "one who keeps the laws." Thus do they govern their people not by fear of punishment alone, but by hope of reward.\n\nШагнал шийтгэлийн зарчим нь ч өвөрмөц. Хэрэв хэн нэгэн хүн долоон жил хууль зөрчилгүй амьдарсныг нотлон харуулбал хаан түүнд тодорхой хэмжээний хөрөнгө шагнан өгдөг бөгөөд «Снилпол» (хууль сахигч) гэдэг алдар цолыг олгодог байв. Ийм байдлаар тэд иргэдээ зөвхөн шийтгэл айдсаар бус, шагналаар ч урамшуулдаг ажээ.`,
      `In the matter of educating children, they have a most singular custom. They hold that parents are the least fit persons to bring up their own offspring, since affection blinds them and they spoil the child with too much indulgence. Therefore, children of twenty months are taken from their parents and placed in public seminaries provided by the state. Boys and girls are educated apart, and the children of the nobility are instructed in justice, courage, and industry. The children of common folk, of artisans, and of peasants are trained chiefly in agriculture and in the manual arts proper to their station.\n\nХүүхэд хүмүүжлийн талаар тэд маш өвөрмөц журамтай. Тэнд хүүхдийг эцэг эх нь хүмүүжүүлэх ёсгүй гэж үздэг ажээ, учир нь эцэг эх нь хүүхдийг хайраараа эрхлүүлэн муухай заншилд сургадаг гэж тэд тооцдог. Иймд хорин сар хүртэлх настай хүүхдийг улсын тусгай сургалтын газарт өгч хүмүүжүүлдэг билээ. Хөвгүүд охид тус тусдаа сургалтанд явдаг бөгөөд эрхэм язгуурын хүүхдийг шударга ёс, чин зориг, хөдөлмөрч байдалд сурган хүмүүжүүлдэг. Жирийн ард иргэд, тариачдын хүүхдүүд бол газар тариалан, гар урлал, хөдөлмөрийн чадварыг голлон эзэмшдэг ажээ.`,
    ],
  },
  {
    num: 'VII',
    short: 'Блефускуд зугтсан нь',
    desc: 'Хуйвалдааныг мэдсэн Гулливер урвалтаар буруутгагдан, Блефускуд зугтсан нь.',
    time: '19 мин',
    content: [
      `There was a certain person of great consequence at court — Skyresh Bolgolam, the High Admiral — of whom I had long been wary. From the very first he had borne me no goodwill, and made little secret of it. After I had carried off the fleet of Blefuscu and my fame was thereby increased, he conspired together with Flimnap the Treasurer and several other ministers of the court to bring about my ruin.\n\nУсан цэргийн дээд жанжин Скайрэш Болголам хэмээх нэгэн нэр хүндтэй түшмэлийн талаар би эртнээс болгоомжилж явсан билээ. Тэрбээр намайг анхнаасаа үл тааламжтай үзэж байсан нь илэрхий байв. Блефускугийн флотыг олзлон авчирсны дараа миний алдар нэр өсөхийн хэрээр тэрбээр сангийн сайд Флимнап болон ордны хэдэн түшмэдтэй нийлэн, намайг устгах далд хуйвалдаан зохиожээ.`,
      `That very night a close friend of mine came secretly to my lodging and laid the whole matter before me. Articles of impeachment had been drawn up against me in the Emperor's council, charging me with high treason; and were I to flee to Blefuscu, that flight would be reckoned proof of my guilt and punished with death. I had no need to read the several articles one by one, for my friend had already made plain to me the whole of their contents.\n\nТэр шөнө ордны нэгэн дотно найз минь нууцаар над дээр ирж, бүх хэрэг явдлыг дэлгэн ярив. Эзэн хааны зөвлөлд надад эх орноосоо урвасан хэмээх яллах бичиг тогтоосон бөгөөд хэрэв би Блефуску руу зугтвал тэр нь гэм буруугийн баталгаа болж, цаазаар авах ялаар шийтгэгдэх нөхцөлтэй ажээ. Яллах зүйлсийг тус бүрчлэн уншихын ч хэрэггүй болов, учир нь найз минь нэгэнт бүх нарийн учрыг надад тайлбарласан байлаа.`,
      `That same night I sent a letter to the ambassador of Blefuscu, and resolved to quit Lilliput the next morning. To depart without the Emperor's leave was indeed a breach of the terms of my liberty; yet to save my life was of greater moment than all else. I made my way to the channel, and wading across as I had done before, I came to the shore of Blefuscu.\n\nТэр шөнөдөө би Блефускугийн элчин сайдад захидал илгээж, маргааш өглөө нь Лилипутыг орхихоор шийдвэрлэв. Хааны зөвшөөрөлгүйгээр явах нь эрх чөлөөний гэрээгээ зөрчсөн хэрэг боловч амиа аврах нь юунаас ч чухал байлаа. Тэнгисийн хоолойн усанд орж, урьдын адил гатлан, Блефускугийн эрэгт хүрэв.`,
      `The Emperor of Blefuscu received me with full ceremony. They seemed greatly rejoiced to welcome the enemy of their enemy. I was lodged there several days and dined in their company each day; and while I remained, I began to seek out some means by which I might return to my own country.\n\nБлефускугийн хаан намайг ёслол төгөлдөр угтан авав. Тэд дайсныхаа дайсныг хүлээн авсандаа нэн их баяртай байх шиг харагдав. Намайг хэдэн хоног зочлуулан, өдөр бүр хамт хооллож байв. Тэндээ байх хугацаандаа би эх орондоо буцах ямар нэгэн арга замыг эрэлхийлж эхлэв.`,
    ],
  },
  {
    num: 'VIII',
    short: 'Эх орондоо буцсан нь',
    desc: 'Завь олж, далайг туулан, Английн хөлөгт учран, эх орондоо эргэн ирсэн нь.',
    time: '17 мин',
    content: [
      `One day, as I walked along the coast of Blefuscu, my eye fell upon a great boat drifting upon the sea. It seemed but little damaged, and I judged that it might well be repaired. With the help of the Emperor, who lent me many hundreds of men and a number of his vessels, I had the great boat hauled ashore; and craftsmen being set to work upon it, I made ready for the voyage home.\n\nНэгэн өдөр Блефускугийн эрэг дагуу зугаалж явтал далайд хөвж яваа нэгэн том завь миний нүдэнд тусав. Тэр завь нэг их гэмтээгүй байсан тул засаж болохуйц санагдав. Эзэн хааны тусламжтайгаар олон зуун хүн, хэдэн арван хөлгийг дайчлан, тэр асар том завийг эрэг дээр чирэн гаргав. Чадварлаг дархчуудаар засуулж, эх орон руугаа буцах аяллынхаа бэлтгэлийг базаав.`,
      `At that very time there came from Lilliput a message of the gravest import. Therein it was demanded that I be delivered up as a traitor, and that my eyes be put out. But the Emperor of Blefuscu sent back a firm refusal of these demands. This did but hasten my departure all the more.\n\nЯг тэр үед Лилипутаас нэн чухал захидал хүрэлцэн ирэв. Уг захидалд намайг урвагчийн хувьд буцаан тушааж, нүдийг минь сохлохыг шаардсан байжээ. Гэвч Блефускугийн хаан тэр шаардлагыг эрс татгалзан хариу илгээв. Энэ нь миний явахыг улам яаравчлуулав.`,
      `Before I put to sea, I took from the country of Blefuscu a hundred head of cattle and two hundred sheep, together with their fodder. I took likewise a few small living beasts and other curiosities, to carry as proof of my travels and as ballast for the boat. Thus did I set forth upon the long voyage across the sea.\n\nЗавиа далайд гаргахаасаа өмнө би Блефускугийн нутгаас зуун үхэр, хоёр зуун хонь, мөн тэдгээрийн тэжээлийг авлаа. Түүнчлэн хэдэн толгой бяцхан мал болон бусад содон зүйлсийг аяллынхаа гэрч болгон, хөлгийнхөө ачаа болгон тэврэн авав. Тийнхүү тэнгисийг гатлах урт аялалаа эхлүүлэв.`,
      `Three days afterward, far off upon the water, I espied a ship whose sails gleamed in the light of the sun. It was an English man-of-war. When I had been recognized and taken aboard, I knew that at the end of two years of wondrous adventures the hour had come for me to return to my native land. Overcome by the longing to be united once more with my family, I wept tears of joy.\n\nГурав хоногийн дараа алсад далбаа нь наранд гялалзсан нэгэн хөлөг харагдав. Тэр нь Английн далайн цэргийн хөлөг байлаа. Намайг олж таньсны дараа, хоёр жилийн гайхамшигт адал явдлынхаа эцэст эх орондоо эргэн золгох цаг ирснийг би ухаарав. Гэр бүлтэйгээ дахин уулзах хүсэл зоригт автан, нүднээс минь баярын нулимс ёроолгүй урсав.`,
    ],
  },
]
