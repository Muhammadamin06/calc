const sec = document.querySelector('.sekund'),
      min = document.querySelector('.minut'),
      hour = document.querySelector('.soat'),
      set = document.querySelector('.set__btn')

      set.addEventListener('click',function () {
        if (set.innerHTML === 'start') {
            set.innerHTML = 'stop'
        interval =  setInterval(() => {
                start()
            }, 1000);
        }
        else if (set.innerHTML === 'stop'){
            set.innerHTML = 'clear'
        clearInterval(interval)
        }
        else if (set.innerHTML === 'clear'){
            set.innerHTML = 'start'
            sec.innerHTML = 0
            min.innerHTML = 0
            hour.innerHTML = 0
            count = 0
        }
      })

      let count = 0
      
      function start() {
        count++
        if (count < 60 ) {
            sec.innerHTML = count
        } if (count > 59){
            count = 0
            min.innerHTML++
            sec.innerHTML = count
        } if (min.innerHTML > 59){
            hour.innerHTML++
            min.innerHTML = 0
        }
      }


// calc

const screen = document.querySelector('.calc__screen'),
      calcBtn = Array.from(document.querySelectorAll('.symbols'))

      calcBtn.map((btn)=>{
        btn.addEventListener('click',function (e) {
            let ans = e.target.innerHTML
            if (ans === 'ac') screen.innerHTML = ''
            else if (ans === 'ce') screen.innerHTML = screen.innerHTML.slice(0,-1)
            else if (ans === 'π') screen.innerHTML = parseFloat(screen.innerHTML) * 3,14
            else if (ans === '+/-') screen.innerHTML = parseFloat(screen.innerHTML) * -1
            else if (ans === '=') screen.innerHTML = eval(screen.innerHTML)
            else screen.innerHTML.length >= 21
                ? screen.innerHTML = screen.innerHTML
                :screen.innerHTML += ans
        })
      })


    //   function limit() {
    //      if (screen.innerHTML.length >= 20) screen.sytle.fontSize = '20px'
    //      else if (screen.innerHTML.length >= 12) screen.sytle.fontSize = '30px'
    //      else if (screen.innerHTML.length < 12) screen.sytle.fontSize = '40px'
    //   }
      
