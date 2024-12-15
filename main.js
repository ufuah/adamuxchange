//market price
fetch('https://api.coingecko.com/api/v3/simple/price?ids=bitcoin%2Cethereum%2Ctether%2Cbnb%2Clitecoin%2Cdogecoin%2Ctether%2C&vs_currencies=usd&include_24hr_change=true')
.then (res => res.json())
.then(json => {

    const container = document.querySelector('.tab-content');
    const coins = Object.getOwnPropertyNames(json);

    for (let coin of coins) {

        const coinInfo = json[`${coin}`];
        const price = coinInfo.usd;
        const change = coinInfo.usd_24h_change.toFixed(5);


        container.innerHTML += `



        <li>
        <div class="trending-card ${change < 0 ?  'falling' : 'rising'}">
            <div class="card-titlewrapper">
                    <img src="./assets/imgs/coins/${coin}.png">
                    <h1 class="card-title">${coin}</h1>
                  
                </div>
                <data class="card-value"></data>
                <div class="card-analysics">
                    <data class="current-price">$${price}</data>
                    <div class="badge change">${change}%</div>
                </div>
            </div>
        </li>





        `;

    }


})




// header bg reveal

const headerbg = () => {
    const header = document.querySelector('.desktop-nav');
    const navLinks = document.querySelector('.nav-links');
    
    window.addEventListener('scroll', function() {
        if (this.scrollY > 0) {
            header.classList.add('shadow');
            navLinks.classList.add('linkscolor')
        } else {
            header.classList.remove('shadow')
            navLinks.classList.remove('linkscolor')
        }
    })
    }
    
    headerbg();



const mobbileheaderbg = () => {
    const header = document.querySelector('.nav-mobile');
    const navLinks = document.querySelector('.nav-links');
    
    window.addEventListener('scroll', function() {
        if (this.scrollY > 0) {
            header.classList.add('shadow');
            navLinks.classList.add('linkscolor')
        } else {
            header.classList.remove('shadow')
            navLinks.classList.remove('linkscolor')
        }
    })
    }
    
    mobbileheaderbg();



    var icon = document.getElementById("mode");

    icon.onclick = function() {
        document.body.classList.toggle("dark-mode")
    }

    let toggleMenu = document.querySelector('.toggleMenu');
    let navigation = document.querySelector('.navigation');

    toggleMenu.onclick = function () {
        navigation.classList.toggle('active');
    }