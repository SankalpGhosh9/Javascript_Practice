const currDate = document.getAnimations("date");
        let weather = document.getElementById("weather");
        const tempStatus = "Clouds";

        const getCurrentDay =()=>{
            let weekday = new Array(7);
            weekday[0] = "Sunday";
            weekday[1] = "Monday";
            weekday[2] = "Tuesday";
            weekday[3] = "Wednesday";
            weekday[4] = "Thursday";
            weekday[5] = "Friday";
            weekday[6] = "Saturday";


            let currTime = new Date();
            console.log(weekday[currTime.getDay()]);

            
        }

        const getCurrentTime = ()=>{
            let now = new Date();
            let month = ["January","February","March" ,"April", "May", "June", "July","August", "September", "October", "November", "December"];
            
            let date  = now.getDate();
            let year = now.getFullYear();
            
            console.log(date + "/" + month[now.getMonth() + 1] + "/" + year)

        }

        getCurrentDay();
        getCurrentTime();