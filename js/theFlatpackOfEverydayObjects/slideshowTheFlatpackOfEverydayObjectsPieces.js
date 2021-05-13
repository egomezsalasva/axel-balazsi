//////////////////
/// Flat Bookcase
//////////////////

const flatBookcaseImageArray = ["./imgs/theFlatpackOfEverydayObjects/flatBookcase/flatBookcaseDesk-1of3.png", 
                                "./imgs/theFlatpackOfEverydayObjects/flatBookcase/flatBookcaseDesk-2of3.png",
                                "./imgs/theFlatpackOfEverydayObjects/flatBookcase/flatBookcaseDesk-3of3.png",]

const flatBookcaseStyleArray = ["verticalPiece whiteOverlay", 
                                "verticalPiece whiteOverlay", 
                                "verticalPiece whiteOverlay"]

const flatBookcaseNumberArray = ["1", "2", "3"]

flatBookcaseImageCounter = 0
flatBookcaseNumberCounter = 0

document.getElementById("flatBookcaseNextButton").addEventListener("click", () => {

    flatBookcaseImageCounter += 1
    document.getElementById("flatBookcaseImage").src = flatBookcaseImageArray[flatBookcaseImageCounter]
    document.getElementById("flatBookcaseImage").className = flatBookcaseStyleArray[flatBookcaseImageCounter]
    flatBookcaseNumberCounter += 1
    document.getElementById("flatBookcaseNumber").innerText = flatBookcaseNumberArray[flatBookcaseNumberCounter]


    if(flatBookcaseNumberCounter > 0){
        document.getElementById("flatBookcasePrevButton").className = "prevButton"
    }

    if(flatBookcaseNumberCounter === 2){
        document.getElementById("flatBookcaseNextButton").className = "nextButton disabledButton"
    }
})

document.getElementById("flatBookcasePrevButton").addEventListener("click", () => {

    flatBookcaseImageCounter -= 1
    document.getElementById("flatBookcaseImage").src = flatBookcaseImageArray[flatBookcaseImageCounter]
    document.getElementById("flatBookcaseImage").className = flatBookcaseStyleArray[flatBookcaseImageCounter]
    flatBookcaseNumberCounter -= 1
    document.getElementById("flatBookcaseNumber").innerText = flatBookcaseNumberArray[flatBookcaseNumberCounter]

    if(flatBookcaseNumberCounter < 2){
        document.getElementById("flatBookcaseNextButton").className = "nextButton"
    }

    if(flatBookcaseNumberCounter === 0){
        document.getElementById("flatBookcasePrevButton").className = "prevButton disabledButton"
    }
})


/////////////////////////////////
/// Unfunctional Working Station
/////////////////////////////////

const unfunctionalWorkingStationImageArray = ["./imgs/theFlatpackOfEverydayObjects/unfunctionalWorkingStation/unfunctionalWorkingStationDesk-1of3.png", 
                                              "./imgs/theFlatpackOfEverydayObjects/unfunctionalWorkingStation/unfunctionalWorkingStationDesk-2of3.png",
                                              "./imgs/theFlatpackOfEverydayObjects/unfunctionalWorkingStation/unfunctionalWorkingStationDesk-3of3.png"]

const unfunctionalWorkingStationStyleArray = ["horizontalPiece whiteOverlay", 
                                                "verticalPiece whiteOverlay", 
                                                "verticalPiece whiteOverlay"]

const unfunctionalWorkingStationNumberArray = ["1", "2", "3"]

unfunctionalWorkingStationImageCounter = 0
unfunctionalWorkingStationNumberCounter = 0

document.getElementById("unfunctionalWorkingStationNextButton").addEventListener("click", () => {

    unfunctionalWorkingStationImageCounter += 1
    document.getElementById("unfunctionalWorkingStationImage").src = unfunctionalWorkingStationImageArray[unfunctionalWorkingStationImageCounter]
    document.getElementById("unfunctionalWorkingStationImage").className = unfunctionalWorkingStationStyleArray[unfunctionalWorkingStationImageCounter]
    unfunctionalWorkingStationNumberCounter += 1
    document.getElementById("unfunctionalWorkingStationNumber").innerText = unfunctionalWorkingStationNumberArray[unfunctionalWorkingStationNumberCounter]


    if(unfunctionalWorkingStationNumberCounter > 0){
        document.getElementById("unfunctionalWorkingStationPrevButton").className = "prevButton"
    }

    if(unfunctionalWorkingStationNumberCounter === 2){
        document.getElementById("unfunctionalWorkingStationNextButton").className = "nextButton disabledButton"
    }
})

document.getElementById("unfunctionalWorkingStationPrevButton").addEventListener("click", () => {

    unfunctionalWorkingStationImageCounter -= 1
    document.getElementById("unfunctionalWorkingStationImage").src = unfunctionalWorkingStationImageArray[unfunctionalWorkingStationImageCounter]
    document.getElementById("unfunctionalWorkingStationImage").className = unfunctionalWorkingStationStyleArray[unfunctionalWorkingStationImageCounter]
    unfunctionalWorkingStationNumberCounter -= 1
    document.getElementById("unfunctionalWorkingStationNumber").innerText = unfunctionalWorkingStationNumberArray[unfunctionalWorkingStationNumberCounter]

    if(unfunctionalWorkingStationNumberCounter < 2){
        document.getElementById("unfunctionalWorkingStationNextButton").className = "nextButton"
    }

    if(unfunctionalWorkingStationNumberCounter === 0){
        document.getElementById("unfunctionalWorkingStationPrevButton").className = "prevButton disabledButton"
    }
})


/////////////////////////
/// Customixed TV Drawer
/////////////////////////

const customizedTVDrawerImageArray = ["./imgs/theFlatpackOfEverydayObjects/customizedTVDrawer/customizedTVDrawerDesk-1of2.png", 
                                      "./imgs/theFlatpackOfEverydayObjects/customizedTVDrawer/customizedTVDrawerDesk-2of2.png",]

const customizedTVDrawerStyleArray = ["verticalPiece whiteOverlay", 
                                      "verticalPiece whiteOverlay"]

const customizedTVDrawerNumberArray = ["1", "2"]

customizedTVDrawerImageCounter = 0
customizedTVDrawerNumberCounter = 0

document.getElementById("customizedTVDrawerNextButton").addEventListener("click", () => {

    customizedTVDrawerImageCounter += 1
    document.getElementById("customizedTVDrawerImage").src = customizedTVDrawerImageArray[customizedTVDrawerImageCounter]
    document.getElementById("customizedTVDrawerImage").className = customizedTVDrawerStyleArray[customizedTVDrawerImageCounter]
    customizedTVDrawerNumberCounter += 1
    document.getElementById("customizedTVDrawerNumber").innerText = customizedTVDrawerNumberArray[customizedTVDrawerNumberCounter]


    if(customizedTVDrawerNumberCounter > 0){
        document.getElementById("customizedTVDrawerPrevButton").className = "prevButton"
    }

    if(customizedTVDrawerNumberCounter === 1){
        document.getElementById("customizedTVDrawerNextButton").className = "nextButton disabledButton"
    }
})

document.getElementById("customizedTVDrawerPrevButton").addEventListener("click", () => {

    customizedTVDrawerImageCounter -= 1
    document.getElementById("customizedTVDrawerImage").src = customizedTVDrawerImageArray[customizedTVDrawerImageCounter]
    document.getElementById("customizedTVDrawerImage").className = customizedTVDrawerStyleArray[customizedTVDrawerImageCounter]
    customizedTVDrawerNumberCounter -= 1
    document.getElementById("customizedTVDrawerNumber").innerText = customizedTVDrawerNumberArray[customizedTVDrawerNumberCounter]

    if(customizedTVDrawerNumberCounter < 1){
        document.getElementById("customizedTVDrawerNextButton").className = "nextButton"
    }

    if(customizedTVDrawerNumberCounter === 0){
        document.getElementById("customizedTVDrawerPrevButton").className = "prevButton disabledButton"
    }
})