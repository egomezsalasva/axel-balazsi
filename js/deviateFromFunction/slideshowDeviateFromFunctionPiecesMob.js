///////////////////////
/// Designed To Connect
///////////////////////

const designedToConnectImageArrayMob = ["./imgs/deviateFromFunction/designedToConnect/designedToConnect2019Mob-1of3.png", 
                                        "./imgs/deviateFromFunction/designedToConnect/designedToConnect2019Mob-2of3.png",
                                        "./imgs/deviateFromFunction/designedToConnect/designedToConnect2019Mob-3of3.png",]


const designedToConnectNumberArrayMob = ["1", "2", "3"]

designedToConnectImageCounterMob = 0
designedToConnectNumberCounterMob = 0

document.querySelector("#designedToConnectNextButtonMob h3").addEventListener("click", () => {

    designedToConnectImageCounterMob += 1
    document.getElementById("designedToConnectImageMob").src = designedToConnectImageArrayMob[designedToConnectImageCounterMob]
    // document.getElementById("designedToConnectImageMob").className = designedToConnectStyleArrayMob[designedToConnectImageCounterMob]
    designedToConnectNumberCounterMob += 1
    document.getElementById("designedToConnectNumberMob").innerText = designedToConnectNumberArrayMob[designedToConnectNumberCounterMob]


    if(designedToConnectNumberCounterMob > 0){
        document.getElementById("designedToConnectPrevButtonMob").className = "prevButtonMob"
    }

    if(designedToConnectNumberCounterMob === 2){
        document.getElementById("designedToConnectNextButtonMob").className = "nextButtonMob disabledButtonMob"
    }
})

document.querySelector("#designedToConnectPrevButtonMob h3").addEventListener("click", () => {

    designedToConnectImageCounterMob -= 1
    document.getElementById("designedToConnectImageMob").src = designedToConnectImageArrayMob[designedToConnectImageCounterMob]
    // document.getElementById("designedToConnectImageMob").className = designedToConnectStyleArrayMob[designedToConnectImageCounterMob]
    designedToConnectNumberCounterMob -= 1
    document.getElementById("designedToConnectNumberMob").innerText = designedToConnectNumberArrayMob[designedToConnectNumberCounterMob]

    if(designedToConnectNumberCounterMob < 2){
        document.getElementById("designedToConnectNextButtonMob").className = "nextButtonMob"
    }

    if(designedToConnectNumberCounterMob === 0){
        document.getElementById("designedToConnectPrevButtonMob").className = "prevButtonMob disabledButtonMob"
    }
})


////////////////////////////////
/// To Flex Or Extend
////////////////////////////////

const toFlexOrExtendImageArrayMob = ["./imgs/deviateFromFunction/toFlexOrExtend/toFlexOrExtend2019Mob-1of2.png", 
                                     "./imgs/deviateFromFunction/toFlexOrExtend/toFlexOrExtend2019Mob-2of2.png",]

const toFlexOrExtendNumberArrayMob = ["1", "2",]

toFlexOrExtendImageCounterMob = 0
toFlexOrExtendNumberCounterMob = 0

document.querySelector("#toFlexOrExtendNextButtonMob h3").addEventListener("click", () => {

    toFlexOrExtendImageCounterMob += 1
    document.getElementById("toFlexOrExtendImageMob").src = toFlexOrExtendImageArrayMob[toFlexOrExtendImageCounterMob]
    // document.getElementById("toFlexOrExtendImageMob").className = toFlexOrExtendStyleArrayMob[toFlexOrExtendImageCounterMob]
    toFlexOrExtendNumberCounterMob += 1
    document.getElementById("toFlexOrExtendNumberMob").innerText = toFlexOrExtendNumberArrayMob[toFlexOrExtendNumberCounterMob]


    if(toFlexOrExtendNumberCounterMob > 0){
        document.getElementById("toFlexOrExtendPrevButtonMob").className = "prevButtonMob"
    }

    if(toFlexOrExtendNumberCounterMob === 1){
        document.getElementById("toFlexOrExtendNextButtonMob").className = "nextButtonMob disabledButtonMob"
    }
})

document.querySelector("#toFlexOrExtendPrevButtonMob h3").addEventListener("click", () => {

    toFlexOrExtendImageCounterMob -= 1
    document.getElementById("toFlexOrExtendImageMob").src = toFlexOrExtendImageArrayMob[toFlexOrExtendImageCounterMob]
    // document.getElementById("toFlexOrExtendImageMob").className = toFlexOrExtendStyleArrayMob[toFlexOrExtendImageCounterMob]
    toFlexOrExtendNumberCounterMob -= 1
    document.getElementById("toFlexOrExtendNumberMob").innerText = toFlexOrExtendNumberArrayMob[toFlexOrExtendNumberCounterMob]

    if(toFlexOrExtendNumberCounterMob < 1){
        document.getElementById("toFlexOrExtendNextButtonMob").className = "nextButtonMob"
    }

    if(toFlexOrExtendNumberCounterMob === 0){
        document.getElementById("toFlexOrExtendPrevButtonMob").className = "prevButtonMob disabledButtonMob"
    }
})