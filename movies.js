// movies.js
const movies = [
    {
        id: 1,
        name: {
            original: "Hannibal(2001)",
            chinese: "汉尼拔",
            japanese: "ハンニバル",
            english: "Hannibal"
        },
        country: "美国",
        language: "英语",
        actors: "安东尼·霍普金斯",
        plot: "《汉尼拔》（香港译《沉默的杀机》，新加坡、台湾译《人魔》）是一部2001年的美国犯罪心理惊悚电影，为《沉默的羔羊》的续集电影，改编自汤玛斯·哈里斯同名小说。导演是雷德利·斯科特，安东尼·霍普金斯饰演男主角汉尼拔·莱克特，朱丽安·摩尔饰演女主角FBI探员克丽丝·史达琳。该片赢得连续两周的北美票房冠军。为了不想再强化汉尼拔的魅力，电影改编后的结局与原著小说并不同。电影中女主角拒绝了汉尼拔，小说中最后女主角则与汉尼拔在一起。",
        date: "2025-2-28",
        link: "https://www.rrdynb.com/movie/2019/1125/6732.html"
    },
    {
        id: 2,
        name: {
            original: "The Silence of the Lambs(1991)",
            chinese: "沉默的羔羊",
            japanese: "羊たちの沈黙",
            english: "The Silence of the Lambs"
        },
        country: "美国",
        language: "英语",
        actors: "朱迪·福斯特/安东尼·霍普金斯",
        plot: "《沉默的羔羊》（新加坡公映时译《迷离谋杀》），是于1991年上映的美国犯罪心理惊悚片，导演为乔纳森·戴米。内容改编自托马斯·哈里斯于1988年的同名小说，描述一名联邦调查局实习女干员捕捉一名连环杀手的经过。",
        date: "2025-03-08",
        link: "https://www.rrdynb.com/movie/2019/0216/3015.html"
    },
    {
        id: 3,
        name: {
            original: "Hannibal Rising(2007)",
            chinese: "少年汉尼拔",
            japanese: "ハンニバル・ライジング",
            english: "Hannibal Rising"
        },
        country: "美国",
        language: "英语",
        actors: "[法]加斯帕德·尤利尔/巩俐/瑞斯·伊凡斯",
        plot: "二次大战时，与少年历达相依为命的妹妹惨遭变态士兵烹杀裹腹。逃过一劫的历达后来被居于法国的叔叔收养，更遇上他生命中最重要的一个女人――叔叔神秘而美艳的日裔太太，《源氏物语》作者紫式部的后人（巩俐 饰）。历达不单从她身上学习各种知识，更加与她发生暧昧的不伦关系…直至他再次遇上那班杀妹仇人。历达决意要以肉偿肉，以血祭血，不单要赶尽杀绝，还要让他们尝尽最残酷的痛苦！潜藏的嗜血本性，亦由此苏醒……",
        date: "2025-03-14",
        link: "https://www.rrdynb.com/movie/2019/1125/6734.html"
    },
    {
        id: 4,
        name: {
            original: "Druk(2020)",
            chinese: "酒精计划",
            japanese: "アナザーラウンド",
            english: "ANOTHER ROUND"
        },
        country: "丹麦/荷兰/瑞典",
        language: "英语",
        actors: "麦斯·米科尔森/托马斯·博·拉森/马格努斯·米朗和拉尔斯·兰特",
        plot: "《酒精计划》是2020年丹麦、荷兰、瑞典三国合拍的喜剧剧情片，由丹麦导演托马斯·温特伯格执导，温特伯格和托比亚斯·林道赫姆编剧，麦斯·米科尔森、托马斯·博·拉森、马格努斯·米朗和拉尔斯·兰特主演。影片讲述了四位高中老师体验烂醉的奇趣历程。",
        date: "2025-03-19",
        link: "https://www.rrdynb.com/movie/2020/1218/15200.html"
    },
    {
        id: 5,
        name: {
            original: "Bastarden(2023)",
            chinese: "杂种",
            japanese: "愛を耕すひと",
            english: "Bastarden/The Promised Land/King’s Land"
        },
        country: "丹麦/瑞典/挪威/德国",
        language: "丹麦语/瑞典语/德语/挪威语",
        actors: "麦斯·米科尔森",
        plot: "18世纪中期，丹麦国王弗雷德里克五世为了增加税收，宣布对广袤的日德兰岛荒原进行殖民。但是当地土地贫瘠，强梁横行，数十年来许多征服者都无功而返，甚至命丧他乡。直到名叫路德维格·卡伦（麦斯·米科尔森 Mads Mikkelsen 饰）的士兵站了出来。路德维格出身卑微，饱受轻 视，但是他提出用自己退休金来征服荒原，于是终于说服了政府官员。这个坚毅的男人来到充满凶险的陌生之地，经过一番辛苦和博弈终于建立起了国王之家。然而当地的地头蛇并不会轻易将到嘴边的土地让给这个外来户，因此威逼利诱要路德维格就范。双方互不让步，争斗在所难免……",
        date: "2025-03-28",
        link: "https://www.rrdynb.com/movie/2023/1229/40058.html"
    },
    {
        id: 6,
        name: {
            original: "En kongelig affære (2012)",
            chinese: "皇室风流史",
            japanese: "ロイヤル・アフェア 愛と欲望の王宮",
            english: "A Royal Affair"
        },
        country: "丹麦/瑞典/挪威/德国",
        language: "丹麦语/英语/德语/法语",
        actors: "麦斯·米科尔森/艾丽西亚·维坎德",
        plot: "讲述18世纪60到70年代丹麦-挪威王国皇后玛蒂尔德与宫廷御医施特林泽之间所发生的“婚外情”。由于丈夫、丹麦国王克里斯蒂安七世狂躁、轻狂、无礼，智商情商皆不高，因此刚嫁给他的丹麦王后卡洛琳（来自英国，自由派）很郁闷。带着秘密任务接近克里斯蒂安七世的德国医生施特林泽（自由改革派人物）很快获得国王的好感，并顺利掌控国王，影响政局的积极变化。原本一切变革顺利进行，但由于他和王后发生关系并生下一个女儿，最终被保守派抓住把柄，施特林泽和另一人被送上了断头台秘密处决。",
        date: "2025-04-04",
        link: "https://www.rrdynb.com/movie/2020/0609/10860.html"
    },
    {
        id: 7,
        name: {
            original: "Charlie Countryman (2013)",
            chinese: "查理必死",
            japanese: "バレット・オブ・ラヴ",
            english: "Charlie Countryman"
        },
        country: "美国/罗马尼亚",
        language: "英语/罗马尼亚语",
        actors: "希亚·拉博夫/埃文·蕾切尔·伍德/麦斯·米科尔森",
        plot: "查理爱上了一个漂亮女孩盖比，但盖比是黑帮老大尼格尔的老婆。为了让盖比脱离黑手党的控制与自己双宿双飞，查理以极大地勇气制造了一场混乱，谁知却让自己陷入极为不利的境地。",
        date: "2025-04-11",
        link: "https://www.rrdynb.com/movie/2020/1213/15040.html"
        
    },
    {
        id: 8,
        name: {
            original: "Polar (2019)",
            chinese: "极限杀手",
            japanese: "ポーラー 狙われた暗殺者",
            english: "Polar"
        },
        country: "美国/德国",
        language: "英语/俄语",
        actors: "麦斯·米科尔森/凡妮莎·哈金斯",
        plot: "故事叙述一名杀手隐居于寒冷的郊区,以度过自己的退休生活。但贪心的雇主却找来了一群年轻的新世代杀手打算将他斩草除根，而迫使他重拾武器准备大开杀戒。",
        date: "2025-04-18",
        link: "https://www.rrdynb.com/movie/2019/0723/4571.html"
        
    },

    {
        id: 9,
        name: {
            original: "Casino Royale(2006)",
            chinese: "007：大战皇家赌场",
            japanese: "007/カジノ・ロワイヤル",
            english: "Casino Royale"
        },
        country: "美国/英国/德国/捷克/巴哈马",
        language: "英语",
        actors: "丹尼尔·克雷格/伊娃·格林/麦斯米科尔森",
        plot: "-",
        date: "2025-04-27",
        link: "https://www.rrdynb.com/movie/2019/0827/5163.html"
    },
    {
        id: 10,
        name: {
            original: "De grønne slagtere (2003)",
            chinese: "绿色屠夫",
            japanese: "フレッシュ・デリ",
            english: "The Green Butchers"
        },
        country: "丹麦",
        language: "丹麦语",
        actors: "麦斯·米科尔森/尼古拉·雷·卡斯/莱恩·克鲁斯",
        plot: "《绿色屠夫》是一部 2003 年丹麦黑色喜剧电影，由马德斯·米克尔森、尼古拉·雷·卡斯和莱恩·克鲁斯主演，由安诺斯•托马斯•延森编剧和导演。电影讲述了两个屠夫 Svend “Sweat” 和 Bjarne，他们为了摆脱傲慢的老板而开办了自己的商店。后来，他们为了提高生意率而开始制作人肉香肠。",
        date: "2025-05-9",
        link: "https://www.rrdynb.com/movie/2020/0109/7602.html"
    },
    {
        id: 11,
        name: {
            original: "Retfærdighedens ryttere (2020)",
            chinese: "正义骑士",
            japanese: "ライダーズ・オブ・ジャスティス",
            english: "Riders of Justice"
        },
        country: "丹麦",
        language: "丹麦语",
        actors: "麦斯·米科尔森/尼古拉·雷·卡斯/尼可拉斯·布若",
        plot: "故事讲述马库斯的妻子在一场悲剧的火车事故中身亡，马库斯要赶回家陪女儿玛蒂尔德。这场事故似乎是一场意外，但一位数学极客，也是火车中的一位乘客，与他的两个同事现身，说出他们确信这场事故背后另有隐情。",
        date: "2025-05-22",
        link: "https://www.rrdynb.com/movie/2021/0526/18080.html"
    },
    {
        id: 12,
        name: {
            original: "",
            chinese: "初恋这件小事",
            japanese: "",
            english: ""
        },
        country: "泰国",
        language: "泰语",
        actors: "",
        plot: "",
        date: "2025-10-17",
        link: ""
    },
    {
        id: 13,
        name: {
            original: "",
            chinese: "亚当的苹果",
            japanese: "",
            english: ""
        },
        country: "丹麦",
        language: "丹麦语",
        actors: "",
        plot: "",
        date: "2025-11-15",
        link: ""
    },
    {
        id: 14,
        name: {
            original: "Pusher (1996)",
            chinese: "末路狂奔",
            japanese: "プッシャー",
            english: "Pusher"
        },
        country: "丹麦",
        language: "丹麦语 / 瑞典语 / 塞尔维亚-克罗地亚语",
        actors: "金·波德尼亚 / 扎特科·巴瑞克 / 劳拉·德拉斯拜克 / Slavko Labovic / 麦斯·米科尔森",
        plot: "人生都到最底了还能怎么样？毒贩法兰克丢了货也没了钱，奋力求生却只能任由周围黑暗向他逐渐收拢。最生猛的暴力、罪与罚、连篇爆粗口、性、爱与背叛，每一天，都加倍疯狂，也更接近死亡。慢慢削去身为人生存的可能，那么还剩下些什么？有「丹麦的昆汀塔伦提诺」之称的尼古拉斯温丁雷弗恩一次彻底对形式与甜美世界的黑色革命。《末路狂奔三部曲》由1996年的《毒贩子》、2004年的《毒贩子第二集,我的双手沾满血》以及2005年的《毒贩子第三集,我是死亡天使》组成。Pusher已经成为丹麦不朽的电影作品,导演透过三个人物的命运，描绘出哥本哈根黑道贩毒界内阴暗和激动人心的一面。三个人物的命运悲怆感人，他们的生活方式掩盖了其内心深处的创伤。16岁以下不宜。",
        date: "2026-03-13",
        link: "https://www.rrdynb.com/zongyi/2023/1025/38732.html"
    },
    {
        id: 15,
        name: {
            original: "Efter brylluppet(2006)",
            chinese: "婚礼之后",
            japanese: "アフター・ウェディング“，
            english: "After the Wedding“
        },
        country: "丹麦 / 瑞典 / 英国 / 挪威",
        language: ““，
        actors: "“，
        plot: "“，
        date: "2026-03-20”，
        link: "https://www.rrdynb.com/zongyi/2022/0413/25507.html“
    },
    {
        id: 0,
        name: {
            original: "Blinkende lygter (2000)",
            chinese: "闪烁恶人心",
            japanese: "-",
            english: "Flickering Lights"
        },
        country: "丹麦/瑞典",
        language: "丹麦语",
        actors: "麦斯·米科尔森",
        plot: "丹麦第一神（经）编剧安诺斯托马斯延森和美剧《汉尼拔》扮演者麦斯米科尔森早期电影，两人05年合拍神片《亚当的苹果》 还合作过好多黑色喜剧，本片讲四个黑帮分子偷老大的巨款开餐馆且各自回忆童年，充满荒诞和丹麦式冷幽默，结局（看起来）相当治愈，世纪之交的北欧出了好多黑色喜剧，当时丹麦第一神（经）编剧的功力已现端倪，那时麥叔还没成为汉尼拔，居然演了个背心暴力男......",
        date: "2026-00-00（没字幕，未定）",
        link: "https://pan.baidu.com/s/16wahRgyjFU1AGq1124vnyA?pwd=mads"
    },

    {
        id: 0,
        name: {
            original: "메소드 (2017)",
            chinese: "方法派",
            japanese: "メソッド",
            english: "Method"
        },
        country: "韩国",
        language: "韩语",
        actors: "朴成雄/吴承勋",
        plot: "ベテラン俳優のジェハ（パク・ソンウン）と男性アイドルのヨンウ（オ・スンフン）は、『アンチェイン』という二人芝居の舞台で共演することが決まる。この舞台は男性同士の愛を主題にした作品であり、バイク事故で活動を自粛していたヨンウにとって復帰後初の出演作だ。しかし、ヨンウは稽古当初から遅刻し、本読みも真面目に行わないなどやる気がない。そんな態度に苛立ったジェハは、彼の態度を変えようとヨンウの前で迫真の演技を見せる。ヨンウはジェハの仕事に対する情熱に興味を持ち、ジェハが与えた本を読み、劇の小道具を見つけるために外出に同行するようになる。自身をメソッド俳優だと自負するジェハはメソッド演技法を学んでおり、役のアイデンティティを日常生活に引き継ぎ、プライベートでも役として振る舞う。このメソッドを知ったヨンウは密かに同じ方法を実践し、ジェハとヨンウは実際に恋に落ちるがーー",
        date: "待定（预定时间）",
        link: "https://www.rrdynb.com/movie/2022/1209/31574.html"
    }
];

const tableBody = document.querySelector("#movie-table tbody");
const searchInput = document.getElementById("search-input");

// 高亮显示关键词
function highlightText(text, keyword) {
    if (!keyword) return text;
    const regex = new RegExp(`(${keyword})`, "gi");
    return text.replace(regex, '<span class="highlight">$1</span>');
}

// 渲染电影列表
function renderMovies(filteredMovies, keyword = "") {
    tableBody.innerHTML = ""; // 清空表格内容
    
    filteredMovies.forEach(movie => {
     const row = document.createElement("tr");

     const idCell = document.createElement("td");
     idCell.textContent = movie.id;
     row.appendChild(idCell);

     const nameCell = document.createElement("td");
     nameCell.innerHTML = `
        <strong>${highlightText(movie.name.original, keyword)}</strong><br>
        <span>中文: ${highlightText(movie.name.chinese, keyword)}</span><br>
        <span>日文: ${highlightText(movie.name.japanese, keyword)}</span><br>
        <span>英文: ${highlightText(movie.name.english, keyword)}</span>
     `;
     row.appendChild(nameCell);

     const countryCell = document.createElement("td");
     countryCell.innerHTML = highlightText(movie.country, keyword);
     row.appendChild(countryCell);

     const languageCell = document.createElement("td");
     languageCell.innerHTML = highlightText(movie.language, keyword);
     row.appendChild(languageCell);

     const actorsCell = document.createElement("td");
     actorsCell.innerHTML = highlightText(movie.actors, keyword);
     row.appendChild(actorsCell);

     const plotCell = document.createElement("td");
     plotCell.className = "plot";
     plotCell.innerHTML = highlightText(movie.plot, keyword);
     row.appendChild(plotCell);

     const dateCell = document.createElement("td");
     dateCell.innerHTML = highlightText(movie.date, keyword);
     row.appendChild(dateCell);
    
     const linkCell = document.createElement("td");
     const link = document.createElement("a");
     link.href = movie.link;
     link.textContent = "观看资源";
     link.target = "_blank";
     linkCell.appendChild(link);
     row.appendChild(linkCell);

     tableBody.appendChild(row);
    });
}

// 初始化渲染所有电影
renderMovies(movies);

// 实现搜索功能
searchInput.addEventListener("input", (event) => {
    const searchTerm = event.target.value.toLowerCase(); // 获取搜索关键词并转为小写

    const filteredMovies = movies.filter(movie => {
        return (
            movie.name.original.toLowerCase().includes(searchTerm) ||
            movie.name.chinese.toLowerCase().includes(searchTerm) ||
            movie.name.japanese.toLowerCase().includes(searchTerm) ||
            movie.name.english.toLowerCase().includes(searchTerm) ||
            movie.actors.toLowerCase().includes(searchTerm) ||
            movie.date.toLowerCase().includes(searchTerm) ||
            movie.country.toLowerCase().includes(searchTerm) ||
            movie.language.toLowerCase().includes(searchTerm) ||
            movie.plot.toLowerCase().includes(searchTerm)
        );
    });

    renderMovies(filteredMovies, searchTerm); // 渲染过滤后的电影列表
});
