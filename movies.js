// movies.js
const movies = [
    {
        id: 1,
        name: {
            original: "The Shawshank Redemption",
            chinese: "肖申克的救赎",
            japanese: "ショーシャンクの空に",
            english: "The Shawshank Redemption"
        },
        country: "美国",
        language: "英语",
        actors: "蒂姆·罗宾斯, 摩根·弗里曼",
        plot: "讲述了银行家安迪因冤罪入狱后，在肖申克监狱中通过智慧和毅力获得自由的故事。",
        date: "2023-10-01"
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
        date: "2023-09-15"
    },
    {
        id: 3,
        name: {
            original: "Inception",
            chinese: "盗梦空间",
            japanese: "インセプション",
            english: "Inception"
        },
        country: "美国",
        language: "英语",
        actors: "莱昂纳多·迪卡普里奥, 约瑟夫·高登-莱维特",
        plot: "讲述了一群盗梦者通过潜入他人梦境来植入想法的科幻冒险故事。",
        date: "2023-08-20"
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

    tableBody.appendChild(row);
});