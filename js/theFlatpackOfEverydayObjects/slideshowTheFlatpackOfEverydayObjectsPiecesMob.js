/////////////////
/// Flat Bookcase
/////////////////

const flatBookcaseImageArrayMob = ["./imgs/theFlatpackOfEverydayObjects/flatBookcase/flatBookcaseMob-1of3.png", 
                                   "./imgs/theFlatpackOfEverydayObjects/flatBookcase/flatBookcaseMob-2of3.png", 
                                   "./imgs/theFlatpackOfEverydayObjects/flatBookcase/flatBookcaseMob-3of3.png", ]

const flatBookcaseStyleArrayMob = ["verticalPiece", 
                                   "verticalPiece", 
                                   "verticalPiece"]

const flatBookcaseNumberArrayMob = ["1", "2", "3"]

flatBookcaseImageCounterMob = 0
flatBookcaseNumberCounterMob = 0

document.querySelector("#flatBookcaseNextButtonMob h3").addEventListener("click", () => {

    flatBookcaseImageCounterMob += 1
    document.getElementById("flatBookcaseImageMob").src = flatBookcaseImageArrayMob[flatBookcaseImageCounterMob]
    // document.getElementById("flatBookcaseImageMob").className = flatBookcaseStyleArrayMob[flatBookcaseImageCounterMob]
    flatBookcaseNumberCounterMob += 1
    document.getElementById("flatBookcaseNumberMob").innerText = flatBookcaseNumberArrayMob[flatBookcaseNumberCounterMob]


    if(flatBookcaseNumberCounterMob > 0){
        document.getElementById("flatBookcasePrevButtonMob").className = "prevButtonMob"
    }

    if(flatBookcaseNumberCounterMob === 2){
        document.getElementById("flatBookcaseNextButtonMob").className = "nextButtonMob disabledButtonMob"
    }
})

document.querySelector("#flatBookcasePrevButtonMob h3").addEventListener("click", () => {

    flatBookcaseImageCounterMob -= 1
    document.getElementById("flatBookcaseImageMob").src = flatBookcaseImageArrayMob[flatBookcaseImageCounterMob]
    // document.getElementById("flatBookcaseImageMob").className = flatBookcaseStyleArrayMob[flatBookcaseImageCounterMob]
    flatBookcaseNumberCounterMob -= 1
    document.getElementById("flatBookcaseNumberMob").innerText = flatBookcaseNumberArrayMob[flatBookcaseNumberCounterMob]

    if(flatBookcaseNumberCounterMob < 2){
        document.getElementById("flatBookcaseNextButtonMob").className = "nextButtonMob"
    }

    if(flatBookcaseNumberCounterMob === 0){
        document.getElementById("flatBookcasePrevButtonMob").className = "prevButtonMob disabledButtonMob"
    }
})


////////////////////////////////
/// Unfunctional Working Station
////////////////////////////////

const unfunctionalWorkingStationImageArrayMob = ["./imgs/theFlatpackOfEverydayObjects/unfunctionalWorkingStation/unfunctionalWorkingStationMob-1of3.png", 
                                                 "./imgs/theFlatpackOfEverydayObjects/unfunctionalWorkingStation/unfunctionalWorkingStationMob-2of3.png",
                                                 "./imgs/theFlatpackOfEverydayObjects/unfunctionalWorkingStation/unfunctionalWorkingStationMob-3of3.png",]

const unfunctionalWorkingStationStyleArrayMob = ["horizontalPiece", 
                                                    "verticalPiece", 
                                                    "verticalPiece"]

const unfunctionalWorkingStationNumberArrayMob = ["1", "2", "3"]

unfunctionalWorkingStationImageCounterMob = 0
unfunctionalWorkingStationNumberCounterMob = 0

document.querySelector("#unfunctionalWorkingStationNextButtonMob h3").addEventListener("click", () => {

    unfunctionalWorkingStationImageCounterMob += 1
    document.getElementById("unfunctionalWorkingStationImageMob").src = unfunctionalWorkingStationImageArrayMob[unfunctionalWorkingStationImageCounterMob]
    // document.getElementById("unfunctionalWorkingStationImageMob").className = unfunctionalWorkingStationStyleArrayMob[unfunctionalWorkingStationImageCounterMob]
    unfunctionalWorkingStationNumberCounterMob += 1
    document.getElementById("unfunctionalWorkingStationNumberMob").innerText = unfunctionalWorkingStationNumberArrayMob[unfunctionalWorkingStationNumberCounterMob]


    if(unfunctionalWorkingStationNumberCounterMob > 0){
        document.getElementById("unfunctionalWorkingStationPrevButtonMob").className = "prevButtonMob"
    }

    if(unfunctionalWorkingStationNumberCounterMob === 2){
        document.getElementById("unfunctionalWorkingStationNextButtonMob").className = "nextButtonMob disabledButtonMob"
    }
})

document.querySelector("#unfunctionalWorkingStationPrevButtonMob h3").addEventListener("click", () => {

    unfunctionalWorkingStationImageCounterMob -= 1
    document.getElementById("unfunctionalWorkingStationImageMob").src = unfunctionalWorkingStationImageArrayMob[unfunctionalWorkingStationImageCounterMob]
    // document.getElementById("unfunctionalWorkingStationImageMob").className = unfunctionalWorkingStationStyleArrayMob[unfunctionalWorkingStationImageCounterMob]
    unfunctionalWorkingStationNumberCounterMob -= 1
    document.getElementById("unfunctionalWorkingStationNumberMob").innerText = unfunctionalWorkingStationNumberArrayMob[unfunctionalWorkingStationNumberCounterMob]

    if(unfunctionalWorkingStationNumberCounterMob < 2){
        document.getElementById("unfunctionalWorkingStationNextButtonMob").className = "nextButtonMob"
    }

    if(unfunctionalWorkingStationNumberCounterMob === 0){
        document.getElementById("unfunctionalWorkingStationPrevButtonMob").className = "prevButtonMob disabledButtonMob"
    }
})


/////////////////////////
/// Customized TV Drawer
/////////////////////////

const customizedTVDrawerImageArrayMob = ["./imgs/theFlatpackOfEverydayObjects/customizedTVDrawer/customizedTVDrawerMob-1of2.png", 
                                         "./imgs/theFlatpackOfEverydayObjects/customizedTVDrawer/customizedTVDrawerMob-2of2.png",]

const customizedTVDrawerStyleArrayMob = ["verticalPiece", 
                                            "verticalPiece"]

const customizedTVDrawerNumberArrayMob = ["1", "2"]

customizedTVDrawerImageCounterMob = 0
customizedTVDrawerNumberCounterMob = 0

document.querySelector("#customizedTVDrawerNextButtonMob h3").addEventListener("click", () => {

    customizedTVDrawerImageCounterMob += 1
    document.getElementById("customizedTVDrawerImageMob").src = customizedTVDrawerImageArrayMob[customizedTVDrawerImageCounterMob]
    // document.getElementById("customizedTVDrawerImageMob").className = customizedTVDrawerStyleArrayMob[customizedTVDrawerImageCounterMob]
    customizedTVDrawerNumberCounterMob += 1
    document.getElementById("customizedTVDrawerNumberMob").innerText = customizedTVDrawerNumberArrayMob[customizedTVDrawerNumberCounterMob]


    if(customizedTVDrawerNumberCounterMob > 0){
        document.getElementById("customizedTVDrawerPrevButtonMob").className = "prevButtonMob"
    }

    if(customizedTVDrawerNumberCounterMob === 1){
        document.getElementById("customizedTVDrawerNextButtonMob").className = "nextButtonMob disabledButtonMob"
    }
})

document.querySelector("#customizedTVDrawerPrevButtonMob h3").addEventListener("click", () => {

    customizedTVDrawerImageCounterMob -= 1
    document.getElementById("customizedTVDrawerImageMob").src = customizedTVDrawerImageArrayMob[customizedTVDrawerImageCounterMob]
    // document.getElementById("customizedTVDrawerImageMob").className = customizedTVDrawerStyleArrayMob[customizedTVDrawerImageCounterMob]
    customizedTVDrawerNumberCounterMob -= 1
    document.getElementById("customizedTVDrawerNumberMob").innerText = customizedTVDrawerNumberArrayMob[customizedTVDrawerNumberCounterMob]

    if(customizedTVDrawerNumberCounterMob < 1){
        document.getElementById("customizedTVDrawerNextButtonMob").className = "nextButtonMob"
    }

    if(customizedTVDrawerNumberCounterMob === 0){
        document.getElementById("customizedTVDrawerPrevButtonMob").className = "prevButtonMob disabledButtonMob"
    }
})