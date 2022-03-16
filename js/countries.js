const loadCountries =()=>{
        fetch(`https://restcountries.com/v3.1/all`)
        .then(res=>res.json())
        .then(data=>displayCountries(data))
}

const displayCountries=countries=>{
console.log(countries)

const  allCountriesHtml=countries.map(country=>getCountryHtml(country))
console.log(allCountriesHtml);

const container=document.getElementById('countries')
container.innerHTML=allCountriesHtml.join(' ')
}
// orginal
// const getCountryHtml=country=>{

//         return `
//         <div class="country">
//         <h2>${country.name.common}</h2>
//         <img src="${country.flags.svg}">
//         </div>
//         `
// }

// option1
// const getCountryHtml=country=>{
//         //option 1
//         const {name,flags}=country
//         console.log(name.common)

//         return `
//         <div class="country">
//         <h2>${name.common}</h2>
//         <img src="${flags.svg}">
//         </div>
//         `
// }


// option2

const getCountryHtml=({name,flags,area,region})=>{
        //option 1
        // const {name,flags}=country

        return `
        <div class="country">
        <h2>${name.common}</h2>
        <p>Area :${area}</p>
        <p>contient:${region}</p>
        <img src="${flags.svg}">
        </div>
        `
}

loadCountries()


