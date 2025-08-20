function openfeatures() {
    let allelems = document.querySelectorAll(".elem");
    let fullelemspages = document.querySelectorAll(".fullelem");
    let fullelemsbackbtn = document.querySelectorAll(".fullelem .back");


    allelems.forEach(function (elem) {
        elem.addEventListener("click", function () {
            fullelemspages[elem.id].style.display = "block";
        });
    });

    fullelemsbackbtn.forEach(function (back) {
        back.addEventListener("click", function () {
            fullelemspages[back.id].style.display = "none";
        });
    });
}

openfeatures();



function todolist() {

    let form = document.querySelector(".addtask form");
    let taskinput = document.querySelector(".addtask form input");
    let taskdetailsinput = document.querySelector(".addtask form textarea");
    let taskcheckbox = document.querySelector(".addtask form #check");

    let currenttask = [];

    if (localStorage.getItem("currenttask")) {
        currenttask = JSON.parse(localStorage.getItem("currenttask"))
    } else {
        console.log("task list is empty")
    }

    function rendertask() {
        let alltask = document.querySelector(".alltask");

        let sum = "";

        currenttask.forEach(function (elem, idx) {
            sum += `<div class="task">
        <h1>${elem.task} <span class="${elem.check}">imp</span></h1>
        <button id="${idx}">Mark as Completed</button>
        </div>`;
        });

        alltask.innerHTML = sum;

        localStorage.setItem("currenttask", JSON.stringify(currenttask))

        document.querySelectorAll(".task button").forEach(function (btn) {
            btn.addEventListener("click", function () {
                currenttask.splice(btn.id, 1)
                rendertask()
            })
        })
    }
    rendertask();

    form.addEventListener("submit", function (e) {
        e.preventDefault();
        currenttask.push({
            task: taskinput.value,
            details: taskdetailsinput.value,
            check: taskcheckbox.checked,
        });
        rendertask();
        taskinput.value = "";
        taskdetailsinput.value = "";
        taskcheckbox.checked = false;
    });

}

todolist()



function dailypln() {

    let dayplanner = document.querySelector(".dailyplanner");
    let dayplandata = JSON.parse(localStorage.getItem("dayplandata")) || [];
    let hours = Array.from({ length: 18 }, (_, idx) => `${6 + idx}:00 - ${7 + idx}:00`)
    let wholedaysum = ""
    hours.forEach(function (elem, idx) {

        let savedata = dayplandata[idx] || "";
        wholedaysum += `
    <div class="dailyplannertime">
    <p>${elem}</p>
    <input id="${idx}" type="text" placeholder="..." value="${savedata}">
    </div>`
    })
    dayplanner.innerHTML = wholedaysum;

    let dayplannerinput = document.querySelectorAll(".dailyplanner input")
    dayplannerinput.forEach(function (elem) {
        elem.addEventListener('input', function () {
            dayplandata[elem.id] = elem.value
            localStorage.setItem("dayplandata", JSON.stringify(dayplandata))
        })
    })
}

dailypln()

let qts = [
    {
        quotes: "Don’t watch the clock; do what it does. Keep going.",
        author: "Sam Levenson"
       
    },
    {
        quotes: "Success is not in what you have, but who you are.",
        author: "Bo Bennett"
      
    },
    {
        quotes: "The future depends on what you do today.",
        author: "Mahatma Gandhi"
        
    },
    {
        quotes: "Great things never come from comfort zones.",
        author: "Anonymous"
        
    },
    {
        quotes: "Dream bigger. Do bigger.",
        author: "Anonymous"
    
    },
    {
        quotes: "Don’t stop until you’re proud.",
        author: "Anonymous"
    
    },
    {
        quotes: "It always seems impossible until it’s done.",
        author: "Nelson Mandela"
        
    },
    {
        quotes: "Push yourself, because no one else is going to do it for you.",
        author: "Anonymous"
       
    },
    {
        quotes: "Hard work beats talent when talent doesn’t work hard.",
        author: "Tim Notke"
    
    },
    {
        quotes: "Do something today that your future self will thank you for.",
        author: "Sean Patrick Flanery"
      
    },
    {
        quotes: "Little things make big days.",
        author: "Anonymous"
        
    },
    {
        quotes: "Don’t wait for opportunity. Create it.",
        author: "George Bernard Shaw"
        
    },
    {
        quotes: "Sometimes later becomes never. Do it now.",
        author: "Anonymous"
       
    },
    {
        quotes: "Success doesn’t just find you. You have to go out and get it.",
        author: "Anonymous"
        
    },
    {
        quotes: "Your limitation—it’s only your imagination.",
        author: "Anonymous"
      
    },
    {
        quotes: "Great minds discuss ideas; average minds discuss events; small minds discuss people.",
        author: "Eleanor Roosevelt"
        
    },
    {
        quotes: "Act as if what you do makes a difference. It does.",
        author: "William James"
    },
    {
        quotes: "The harder you work for something, the greater you’ll feel when you achieve it.",
        author: "Anonymous"
    },
    {
        quotes: "Believe you can and you’re halfway there.",
        author: "Theodore Roosevelt"
    }
];
let motivationwrapper=document.querySelector(".motivationwrapper")
let qtsinput=document.querySelector(".motivation-2 h1");
let authorinput=document.querySelector(".motivation-3 h1");
let nextbtn=document.querySelector(".motivation-3 button");


let index =0;

function qtsshow(){
 let nxtidx= qts[index]
    let output= `<img src="/icons8-quote-100.png" alt="">
            <div class="motivation-1">
              <h1>Quote of the day :-</h1>
            </div>
            <div class="motivation-2">
              <h1>${nxtidx.quotes}</h1>
            </div>
            <div class="motivation-3">
              <button class="next">Next</button>
              <h1>${nxtidx.author}</h1>`

              motivationwrapper.innerHTML=output;

              let newbtn=motivationwrapper.querySelector(".next");
              
              newbtn.addEventListener("click",nextquote)
}
function nextquote(){
    index++
    if(index>=qts.length) index =0;
    qtsshow()
}
qtsshow()






function potimer() {

    let session = document.querySelector(".session")
    let time = document.querySelector(".timer h1")
    let startbtn = document.querySelector(".start")
    let pausebtn = document.querySelector(".pause")
    let resetbtn = document.querySelector(".reset")

    let isworksession = true

    let totalsecound = 25 * 60
    let timeinterval = null

    function updatetimer() {
        let minutes = Math.floor(totalsecound / 60)
        let seconds = totalsecound % 60

        time.innerHTML = `${String(minutes).padStart("2", "0")}:${String(seconds).padStart("2", "0")}`
    }

    function settimer() {
        clearInterval(timeinterval)
        if (isworksession) {
            timeinterval = setInterval(function () {
                if (totalsecound > 0) {
                    totalsecound--
                    updatetimer()
                } else {
                    isworksession = false;
                    clearInterval(timeinterval)
                    time.innerHTML = "05:00"
                    session.innerHTML = "take a break"
                    session.style.backgroundColor = "red"
                    totalsecound = 5 * 60
                }
            }, 1)
        } else {
            timeinterval = setInterval(function () {
                if (totalsecound > 0) {
                    totalsecound--
                    updatetimer()
                } else {
                    isworksession = true
                    clearInterval(timeinterval)
                    time.innerHTML = "25:00"
                    session.style.backgroundColor = "green"
                    session.innerHTML = "worksession"
                    totalsecound = 25 * 60
                }
            }, 1)
        }
    }

    function pause() {
        clearInterval(timeinterval)
    }
    function reset() {
        totalsecound = 25 * 60
        clearInterval(timeinterval)
        updatetimer()
    }
    startbtn.addEventListener('click', settimer)
    pausebtn.addEventListener('click', pause)
    resetbtn.addEventListener('click', reset)
}

potimer()

function weatherFunctionality() {


    // I have removed API key for security purpose
    var apiKey = null
    var city = 'punjab'



    var header1Time = document.querySelector('.header1 h1')
    var header1Date = document.querySelector('.header1 h2')
    var header2Temp = document.querySelector('.header2 h2')
    var header2Condition = document.querySelector('.header2 h4')
    var precipitation = document.querySelector('.header2 .precipitation')
    var humidity = document.querySelector('.header2 .humidity')
    var wind = document.querySelector('.header2 .wind')

    var data = null

    async function weatherAPICall() {
        var response = await fetch(`http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}`)
        data = await response.json()

        header2Temp.innerHTML = `${data.current.temp_c}°C`
        header2Condition.innerHTML = `${data.current.condition.text}`
        wind.innerHTML = `Wind: ${data.current.wind_kph} km/h`
        humidity.innerHTML = `Humidity: ${data.current.humidity}%`
        precipitation.innerHTML = `Heat Index : ${data.current.heatindex_c}%`
    }

    weatherAPICall()


    function timeDate() {
        const totalDaysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

        const monthNames = [
            "January", "February", "March", "April", "May", "June",
            "July", "August", "September", "October", "November", "December"
        ];
        var date = new Date()
        var dayOfWeek = totalDaysOfWeek[date.getDay()]
        var hours = date.getHours()
        var minutes = date.getMinutes()
        var seconds = date.getSeconds()
        var tarik = date.getDate()
        var month = monthNames[date.getMonth()]
        var year = date.getFullYear()

        header1Date.innerHTML = `${tarik} ${month}, ${year}`

        if (hours > 12) {
            header1Time.innerHTML = `${dayOfWeek}, ${String(hours - 12).padStart('2', '0')}:${String(minutes).padStart('2', '0')}:${String(seconds).padStart('2', '0')} PM`

        } else {
            header1Time.innerHTML = `${dayOfWeek}, ${String(hours).padStart('2', '0')}:${String(minutes).padStart('2', '0')}:${String(seconds).padStart('2', '0')} AM`
        }
    }

    setInterval(() => {
        timeDate()
    }, 1000);

}

weatherFunctionality()