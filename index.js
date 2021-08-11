function createFlag(Flag, Country, Population, Region, Capital) {
  const country = Country;
  const population = Population;
  const region = Region;
  const capital = Capital;

  const flag = document.createElement("img");
  flag.src = Flag;
  flag.className = "flag";
  //   flag.innerHTML = `<img src=${flag} class="flag">`;

  const info = document.createElement("div");
  info.setAttribute("class", "info");

  info.innerHTML = `
    <h2>${country}</h2>
    <p><span class="side-heading" >Population : </span> ${population}</p>
    <p><span class="side-heading" >Region :</span> ${region}</p>
    <P><span class="side-heading" >Capital:</span>${capital}</P>
    
    `;
  const contain = document.createElement("div");
  contain.className = "container";
  contain.append(flag, info);

  document.body.append(contain);
}
let flagindia =
  "https://upload.wikimedia.org/wikipedia/en/4/41/Flag_of_India.svg";
createFlag(flagindia, "India", "352, 642, 280", "Asia", "New Delhi");

let flagEngland =
  "https://upload.wikimedia.org/wikipedia/en/b/be/Flag_of_England.svg";
createFlag(flagEngland, "England", "56, 286, 961", "Europe", "London");

let flagAustralia =
  "https://upload.wikimedia.org/wikipedia/commons/8/88/Flag_of_Australia_%28converted%29.svg";
createFlag(flagAustralia, "Australia", "25,845,800", "Australia", "	Sydney");

let flagAfrica =
  "https://upload.wikimedia.org/wikipedia/commons/a/af/Flag_of_South_Africa.svg";
createFlag(flagAfrica, "South Africa", "60,142,978", "Africa", "Pretoria");

let flagKorea =
  "https://upload.wikimedia.org/wikipedia/commons/0/09/Flag_of_South_Korea.svg";
createFlag(flagKorea, "Republic of Korea", "51,709,098", "Europe", "Seoul");

let flagChina =
  "https://upload.wikimedia.org/wikipedia/commons/f/fa/Flag_of_the_People%27s_Republic_of_China.svg";
createFlag(flagChina, "China", "1,411,778,724", "Asia", "Beijing");
