/////////////////////////////////
/// Connect Linked Object Mobile
/////////////////////////////////

const connectLinkedObjectImageArrayMob = ["./imgs/thingsAroundUsWeDontSee/connectLinkedObjects/connectLinkedObjectMob-1of4.png", 
                                          "./imgs/thingsAroundUsWeDontSee/connectLinkedObjects/connectLinkedObjectMob-2of4.png",
                                          "./imgs/thingsAroundUsWeDontSee/connectLinkedObjects/connectLinkedObjectMob-3of4.png",
                                          "./imgs/thingsAroundUsWeDontSee/connectLinkedObjects/connectLinkedObjectMob-4of4.png"]

const connectLinkedObjectStyleArrayMob = ["horizontalPiece", 
                                            "horizontalPiece", 
                                            "verticalPiece", 
                                            "horizontalPiece"]

const connectLinkedObjectNumberArrayMob = ["1", "2", "3", "4"]

let connectLinkedObjectImageCounterMob = 0
let connectLinkedObjectNumberCounterMob = 0

document.querySelector("#connectLinkedObjectNextButtonMob h3").addEventListener("click", () => {

    connectLinkedObjectImageCounterMob += 1
    document.getElementById("connectLinkedObjectImageMob").src = connectLinkedObjectImageArrayMob[connectLinkedObjectImageCounterMob]
    // document.getElementById("connectLinkedObjectImageMob").className = connectLinkedObjectStyleArrayMob[connectLinkedObjectImageCounterMob]
    connectLinkedObjectNumberCounterMob += 1
    document.getElementById("connectLinkedObjectNumberMob").innerText = connectLinkedObjectNumberArrayMob[connectLinkedObjectNumberCounterMob]


    if(connectLinkedObjectNumberCounterMob > 0){
        document.getElementById("connectLinkedObjectPrevButtonMob").className = "prevButtonMob"
    }

    if(connectLinkedObjectNumberCounterMob === 3){
        document.getElementById("connectLinkedObjectNextButtonMob").className = "nextButtonMob disabledButtonMob"
    }
})

document.querySelector("#connectLinkedObjectPrevButtonMob h3").addEventListener("click", () => {

    connectLinkedObjectImageCounterMob -= 1
    document.getElementById("connectLinkedObjectImageMob").src = connectLinkedObjectImageArrayMob[connectLinkedObjectImageCounterMob]
    // document.getElementById("connectLinkedObjectImageMob").className = connectLinkedObjectStyleArrayMob[connectLinkedObjectImageCounterMob]
    connectLinkedObjectNumberCounterMob -= 1
    document.getElementById("connectLinkedObjectNumberMob").innerText = connectLinkedObjectNumberArrayMob[connectLinkedObjectNumberCounterMob]

    if(connectLinkedObjectNumberCounterMob < 3){
        document.getElementById("connectLinkedObjectNextButtonMob").className = "nextButtonMob"
    }

    if(connectLinkedObjectNumberCounterMob === 0){
        document.getElementById("connectLinkedObjectPrevButtonMob").className = "prevButtonMob disabledButtonMob"
    }
})



////////////////////////
/// Designed To Connect
////////////////////////

const designedToConnectImageArrayMob = ["./imgs/thingsAroundUsWeDontSee/designedToConnect/designedToConnectMob-1of4.png", 
                                        "./imgs/thingsAroundUsWeDontSee/designedToConnect/designedToConnectMob-2of4.png",
                                        "./imgs/thingsAroundUsWeDontSee/designedToConnect/designedToConnectMob-3of4.png",
                                        "./imgs/thingsAroundUsWeDontSee/designedToConnect/designedToConnectMob-4of4.png"]

const designedToConnectStyleArrayMob = ["horizontalPiece", 
                                            "verticalPiece", 
                                            "verticalPiece", 
                                            "verticalPiece"]

const designedToConnectNumberArrayMob = ["1", "2", "3", "4"]

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

    if(designedToConnectNumberCounterMob === 3){
        document.getElementById("designedToConnectNextButtonMob").className = "nextButtonMob disabledButtonMob"
    }
})

document.querySelector("#designedToConnectPrevButtonMob h3").addEventListener("click", () => {

    designedToConnectImageCounterMob -= 1
    document.getElementById("designedToConnectImageMob").src = designedToConnectImageArrayMob[designedToConnectImageCounterMob]
    // document.getElementById("designedToConnectImageMob").className = designedToConnectStyleArrayMob[designedToConnectImageCounterMob]
    designedToConnectNumberCounterMob -= 1
    document.getElementById("designedToConnectNumberMob").innerText = designedToConnectNumberArrayMob[designedToConnectNumberCounterMob]

    if(designedToConnectNumberCounterMob < 3){
        document.getElementById("designedToConnectNextButtonMob").className = "nextButtonMob"
    }

    if(designedToConnectNumberCounterMob === 0){
        document.getElementById("designedToConnectPrevButtonMob").className = "prevButtonMob disabledButtonMob"
    }
})



//////////////////////////
/// Mounted Onto The Wall
//////////////////////////

const mountedOntoTheWallImageArrayMob = ["./imgs/thingsAroundUsWeDontSee/mountedOntoTheWall/mountedOntoTheWallMob-1of4.png", 
                                         "./imgs/thingsAroundUsWeDontSee/mountedOntoTheWall/mountedOntoTheWallMob-2of4.png",
                                         "./imgs/thingsAroundUsWeDontSee/mountedOntoTheWall/mountedOntoTheWallMob-3of4.png",
                                         "./imgs/thingsAroundUsWeDontSee/mountedOntoTheWall/mountedOntoTheWallMob-4of4.png"]

const mountedOntoTheWallStyleArrayMob = ["horizontalPiece", 
                                            "verticalPiece", 
                                            "verticalPiece", 
                                            "verticalPiece"]

const mountedOntoTheWallNumberArrayMob = ["1", "2", "3", "4"]

mountedOntoTheWallImageCounterMob = 0
mountedOntoTheWallNumberCounterMob = 0

document.querySelector("#mountedOntoTheWallNextButtonMob h3").addEventListener("click", () => {

    mountedOntoTheWallImageCounterMob += 1
    document.getElementById("mountedOntoTheWallImageMob").src = mountedOntoTheWallImageArrayMob[mountedOntoTheWallImageCounterMob]
    // document.getElementById("mountedOntoTheWallImageMob").className = mountedOntoTheWallStyleArrayMob[mountedOntoTheWallImageCounterMob]
    mountedOntoTheWallNumberCounterMob += 1
    document.getElementById("mountedOntoTheWallNumberMob").innerText = mountedOntoTheWallNumberArrayMob[mountedOntoTheWallNumberCounterMob]


    if(mountedOntoTheWallNumberCounterMob > 0){
        document.getElementById("mountedOntoTheWallPrevButtonMob").className = "prevButtonMob"
    }

    if(mountedOntoTheWallNumberCounterMob === 3){
        document.getElementById("mountedOntoTheWallNextButtonMob").className = "nextButtonMob disabledButtonMob"
    }
})

document.querySelector("#mountedOntoTheWallPrevButtonMob h3").addEventListener("click", () => {

    mountedOntoTheWallImageCounterMob -= 1
    document.getElementById("mountedOntoTheWallImageMob").src = mountedOntoTheWallImageArrayMob[mountedOntoTheWallImageCounterMob]
    // document.getElementById("mountedOntoTheWallImageMob").className = mountedOntoTheWallStyleArrayMob[mountedOntoTheWallImageCounterMob]
    mountedOntoTheWallNumberCounterMob -= 1
    document.getElementById("mountedOntoTheWallNumberMob").innerText = mountedOntoTheWallNumberArrayMob[mountedOntoTheWallNumberCounterMob]

    if(mountedOntoTheWallNumberCounterMob < 3){
        document.getElementById("mountedOntoTheWallNextButtonMob").className = "nextButtonMob"
    }

    if(mountedOntoTheWallNumberCounterMob === 0){
        document.getElementById("mountedOntoTheWallPrevButtonMob").className = "prevButtonMob disabledButtonMob"
    }
})
