
let inputElem = document.querySelector('input')
let addTask = document.querySelector('.add')
let clearTask = document.querySelector('.clear')
let noTaskElem = document.querySelector('.noTask')
let sureElem = document.querySelector('.youSure')
let bodyStop = document.querySelector('.bodyStop')

noTaskElem.innerHTML = " there is no task !!! "
addTask.addEventListener('click', (select) => {

    select.preventDefault()
    bodyStop.classList.remove('bodyStop')
    //***************************************************** */

    noTaskElem.remove()


    if (inputElem.value === "") {
        inputElem.classList.add('Error')
        inputElem.placeholder = " Write SomeThing "
        console.log(" Write SomeThing ");

    } else {

        inputElem.placeholder = " Type Something (70 char) "
        inputElem.classList.remove('Error')

        const allAddedToDos = document.querySelector('.allAddedToDoS')

        let newLiTag = document.createElement("li")
        newLiTag.classList.add('LiTag')

        let newinputValue = document.createElement('p')
        newinputValue.classList.add('inputValue')
        newinputValue.innerHTML = inputElem.value

        /////////////////////////////////////////////////
        let newtaskBtnS = document.createElement('div')
        newtaskBtnS.classList.add('taskBtnS')

        let done = document.createElement('button')
        done.classList.add('Done')
        done.innerHTML = "Done"
        let remove = document.createElement('button')
        remove.classList.add('Remove')
        
        remove.innerHTML = "Remove"

        newtaskBtnS.append(done, remove)
        //////////////////////////////////////////////////

        newLiTag.append(newinputValue, newtaskBtnS)

        allAddedToDos.append(newLiTag)

        inputElem.value = ""
        ///////////////////////////////////////////////////
        done.addEventListener('click', function () {

            if (done.innerHTML === "Done") {
                newinputValue.classList.add('greenText')
                done.innerHTML = "✅"
            } else if (done.innerHTML = "✅") {
                newinputValue.classList.remove('greenText')
                done.innerHTML = "Done"
            }

        })
        ///////////////////////////////////////////////////
        remove.addEventListener('click', () => {


            let yesBtn = document.querySelector('.yesBtn')
            let noBtn = document.querySelector('.noBtn')

            sureElem.classList.add('youSureVisible')
            bodyStop.classList.add('bodyStopDisplay')

            yesBtn.addEventListener('click', function () {
                newLiTag.remove()
                sureElem.classList.remove('youSureVisible')
            bodyStop.classList.remove('bodyStopDisplay')

            })
            noBtn.addEventListener('click', function () {
                sureElem.classList.remove('youSureVisible')
            bodyStop.classList.remove('bodyStopDisplay')

            })




        })

        clearTask.addEventListener('click', (e) => {

            e.preventDefault()
            noTaskElem.innerHTML = " there is no task !!! ";
            allAddedToDos.remove()

        })


    }

})


////////////////////////////////// change background img in every 2 Min
/*
let imgArray = ['pics/lake-louise-winter-3840x2160-19913.jpg', 'pics/macos-mojave-fusion-3840x2160-20847.png', 'pics/morning-glow-3840x2160-18274.png', 'pics/tide-pool-beach-3840x2160-21135.jpg', 'pics/three-sisters-3840x2160-21162.jpg', 'pics/toDo List Background.jpg']

let index = 0

setInterval(() => {

    while (index < imgArray.length) {

        document.body.style.backgroundImage = `url(${imgArray[index]})`
        index++

        console.log(imgArray.length);
    }

}, 10000);


*/























































