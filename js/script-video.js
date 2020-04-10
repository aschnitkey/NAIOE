// video selector

let videoSource = ["marketing/marketreports/2020/nai_ohio_equities_2020q1_office.mp4", "marketing/marketreports/2020/nai_ohio_equities_2020q1_industrial.mp4", "marketing/marketreports/2020/nai_ohio_equities_2020q1_retail.mp4"];

let videoTag = document.getElementById("videoSourceTag");

let randomNumber = Math.floor(Math.random() * videoSource.length);

videoTag.setAttribute("src", videoSource[randomNumber]);