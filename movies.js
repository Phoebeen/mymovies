// movies.js
const movies = [
    {
        id: 1,
        name: {
            original: "Hannibal",
            chinese: "汉尼拔",
            japanese: "ハンニバル",
            english: "Hannibal"
        },
        country: "美国",
        language: "英语",
        actors: "麦斯米科尔森",
        plot: "恋爱脑的食人绅士的爱情故事。",
        date: "2025-2-28",
        link: "https://pan.quark.cn/s/d8e7bcd5ce40"
    },
    {
        id: 2,
        name: {
            original: "霸王别姬",
            chinese: "霸王别姬",
            japanese: "さらば、わが愛",
            english: "Farewell My Concubine"
        },
        country: "中国",
        language: "汉语",
        actors: "张国荣, 张丰毅, 巩俐",
        plot: "讲述了两位京剧演员跨越半个世纪的悲欢离合，反映了中国社会的变迁。",
        date: "2023-09-15",
        link: "-"
    },
 
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