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
        actors: "朱迪·福斯特, 安东尼·霍普金斯",
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
        actors: "[法]加斯帕德·尤利尔、巩俐、瑞斯·伊凡斯",
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
        actors: "麦斯·米科尔森、托马斯·博·拉森、马格努斯·米朗和拉尔斯·兰特",
        plot: "《酒精计划》是2020年丹麦、荷兰、瑞典三国合拍的喜剧剧情片，由丹麦导演托马斯·温特伯格执导，温特伯格和托比亚斯·林道赫姆编剧，麦斯·米科尔森、托马斯·博·拉森、马格努斯·米朗和拉尔斯·兰特主演。影片讲述了四位高中老师体验烂醉的奇趣历程。",
        date: "2025-03-19（预定时间）",
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
        date: "2025-03-20（预定时间）",
        link: "https://www.rrdynb.com/movie/2023/1229/40058.html"
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
