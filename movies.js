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
        link: "https://pan.quark.cn/s/d8e7bcd5ce40"
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
        link: "https://pan.quark.cn/s/2d4628e1893f"
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
        date: "2025-03-14（预定时间）",
        link: "https://pan.quark.cn/s/bb24a59d6d0b"
    },
    {
        id: 4,
        name: {
            original: "Druk(2020)",
            chinese: "酒精计划",
            japanese: "アナザーラウンド",
            english: "ANOTHER ROUND"
        },
        country: "丹麦、荷兰、瑞典",
        language: "英语",
        actors: "麦斯·米科尔森、托马斯·博·拉森、马格努斯·米朗和拉尔斯·兰特",
        plot: "《酒精计划》是2020年丹麦、荷兰、瑞典三国合拍的喜剧剧情片，由丹麦导演托马斯·温特伯格执导，温特伯格和托比亚斯·林道赫姆编剧，麦斯·米科尔森、托马斯·博·拉森、马格努斯·米朗和拉尔斯·兰特主演。影片讲述了四位高中老师体验烂醉的奇趣历程。",
        date: "2025-03-19（预定时间）",
        link: "https://pan.quark.cn/s/d95939ee4b71"
    }
 
];

const tableBody = document.querySelector("#movie-table tbody");

movies.forEach(movie => {
    const row = document.createElement("tr");

    const idCell = document.createElement("td");
    idCell.textContent = movie.id;
    row.appendChild(idCell);

    const nameCell = document.createElement("td");
    nameCell.innerHTML = `
        <strong>${movie.name.original}</strong><br>
        <span>中文: ${movie.name.chinese}</span><br>
        <span>日文: ${movie.name.japanese}</span><br>
        <span>英文: ${movie.name.english}</span>
    `;
    row.appendChild(nameCell);

    const countryCell = document.createElement("td");
    countryCell.textContent = movie.country;
    row.appendChild(countryCell);

    const languageCell = document.createElement("td");
    languageCell.textContent = movie.language;
    row.appendChild(languageCell);

    const actorsCell = document.createElement("td");
    actorsCell.textContent = movie.actors;
    row.appendChild(actorsCell);

    const plotCell = document.createElement("td");
    plotCell.className = "plot";
    plotCell.textContent = movie.plot;
    row.appendChild(plotCell);

    const dateCell = document.createElement("td");
    dateCell.textContent = movie.date;
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