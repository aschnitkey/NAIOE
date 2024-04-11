// video selector

let videoSource = [
  'marketing/marketreports/2024/nai_ohio_equities_2024q1_office.mp4',
  'marketing/marketreports/2024/nai_ohio_equities_2024q1_industrial.mp4',
  'marketing/marketreports/2024/nai_ohio_equities_2024q1_retail.mp4',
  // 'marketing/marketreports/2023/nai_ohio_equities_2023q3_multifamily.mp4',
];

let videoTag = document.getElementById('videoSourceTag');

let randomNumber = Math.floor(Math.random() * videoSource.length);

videoTag.setAttribute('src', videoSource[randomNumber]);
