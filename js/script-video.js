// video selector

let videoSource = [
    "marketing/marketreports/2020/nai_ohio_equities_2020q4_office.mp4",
    "marketing/marketreports/2020/nai_ohio_equities_2020q4_industrial.mp4",
    "marketing/marketreports/2020/nai_ohio_equities_2020q4_retail.mp4",
    "marketing/marketreports/2020/nai_ohio_equities_2020q4_multifamily.mp4"
];

let videoTag = document.getElementById("videoSourceTag");

let randomNumber = Math.floor(Math.random() * videoSource.length);

videoTag.setAttribute("src", videoSource[randomNumber]);