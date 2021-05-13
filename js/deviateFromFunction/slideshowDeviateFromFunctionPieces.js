///////////////////////
/// Designed To Connect
///////////////////////

//Data
const designedToConnectImageArray = ["./imgs/deviateFromFunction/designedToConnect/designedToConnect2019Desk-1of3.png", 
                                     "./imgs/deviateFromFunction/designedToConnect/designedToConnect2019Desk-2of3.png",
                                     "./imgs/deviateFromFunction/designedToConnect/designedToConnect2019Desk-3of3.png",]

const designedToConnectStyleArray = ["verticalPiece whiteOverlay", 
                                     "horizontalPiece whiteOverlay", 
                                     "verticalPiece whiteOverlay",]

const designedToConnectNumberArray = ["1", "2", "3"]

designedToConnectImageCounter = 0
designedToConnectNumberCounter = 0

//Next Button
document.getElementById("designedToConnectNextButton").addEventListener("click", () => {

    designedToConnectImageCounter += 1
    document.getElementById("designedToConnectImage").src = designedToConnectImageArray[designedToConnectImageCounter]
    document.getElementById("designedToConnectImage").className = designedToConnectStyleArray[designedToConnectImageCounter]
    designedToConnectNumberCounter += 1
    document.getElementById("designedToConnectNumber").innerText = designedToConnectNumberArray[designedToConnectNumberCounter]


    if(designedToConnectNumberCounter > 0){
        document.getElementById("designedToConnectPrevButton").className = "prevButton"
    }

    if(designedToConnectNumberCounter === 2){
        document.getElementById("designedToConnectNextButton").className = "nextButton disabledButton"
    }
})

//Prev Button
document.getElementById("designedToConnectPrevButton").addEventListener("click", () => {

    designedToConnectImageCounter -= 1
    document.getElementById("designedToConnectImage").src = designedToConnectImageArray[designedToConnectImageCounter]
    document.getElementById("designedToConnectImage").className = designedToConnectStyleArray[designedToConnectImageCounter]
    designedToConnectNumberCounter -= 1
    document.getElementById("designedToConnectNumber").innerText = designedToConnectNumberArray[designedToConnectNumberCounter]

    if(designedToConnectNumberCounter < 2){
        document.getElementById("designedToConnectNextButton").className = "nextButton"
    }

    if(designedToConnectNumberCounter === 0){
        document.getElementById("designedToConnectPrevButton").className = "prevButton disabledButton"
    }
})



//////////////////////
/// To Flex Or Extend
/////////////////////

//Data
const toFlexOrExtendImageArray = ["./imgs/deviateFromFunction/toFlexOrExtend/toFlexOrExtend2019Desk-1of2.png", 
                                  "./imgs/deviateFromFunction/toFlexOrExtend/toFlexOrExtend2019Desk-2of2.png"]

const toFlexOrExtendStyleArray = ["verticalPiece whiteOverlay", 
                                  "verticalPiece whiteOverlay",]

const toFlexOrExtendNumberArray = ["1", "2",]

toFlexOrExtendImageCounter = 0
toFlexOrExtendNumberCounter = 0

//Next Button
document.getElementById("toFlexOrExtendNextButton").addEventListener("click", () => {

    toFlexOrExtendImageCounter += 1
    document.getElementById("toFlexOrExtendImage").src = toFlexOrExtendImageArray[toFlexOrExtendImageCounter]
    document.getElementById("toFlexOrExtendImage").className = toFlexOrExtendStyleArray[toFlexOrExtendImageCounter]
    toFlexOrExtendNumberCounter += 1
    document.getElementById("toFlexOrExtendNumber").innerText = toFlexOrExtendNumberArray[toFlexOrExtendNumberCounter]


    if(toFlexOrExtendNumberCounter > 0){
        document.getElementById("toFlexOrExtendPrevButton").className = "prevButton"
    }

    if(toFlexOrExtendNumberCounter === 1){
        document.getElementById("toFlexOrExtendNextButton").className = "nextButton disabledButton"
    }
})

//Prev Button
document.getElementById("toFlexOrExtendPrevButton").addEventListener("click", () => {

    toFlexOrExtendImageCounter -= 1
    document.getElementById("toFlexOrExtendImage").src = toFlexOrExtendImageArray[toFlexOrExtendImageCounter]
    document.getElementById("toFlexOrExtendImage").className = toFlexOrExtendStyleArray[toFlexOrExtendImageCounter]
    toFlexOrExtendNumberCounter -= 1
    document.getElementById("toFlexOrExtendNumber").innerText = toFlexOrExtendNumberArray[toFlexOrExtendNumberCounter]

    if(toFlexOrExtendNumberCounter < 1){
        document.getElementById("toFlexOrExtendNextButton").className = "nextButton"
    }

    if(toFlexOrExtendNumberCounter === 0){
        document.getElementById("toFlexOrExtendPrevButton").className = "prevButton disabledButton"
    }
})

