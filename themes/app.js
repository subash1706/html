const btnNext = document.querySelector('.btn-next')
const adviceId = document.querySelector('.advice-id')
const adviceText = document.querySelector('.advice-text')
const newAdvice = async () => {
    try {
        let API = "https://api.adviceslip.com/advice"
        const res = await fetch(API)
        const data = await res.json()
        
        const id = data.slip.id
        const advice = data.slip.advice

        adviceId.innerText = `Advice #${id}`
        adviceText.innerText = `"${advice}"`        
    } catch (e) {
        console.log(e)
    }   
}

btnNext.addEventListener("click", newAdvice)

window.addEventListener("load", newAdvice)