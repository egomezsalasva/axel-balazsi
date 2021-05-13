///////////////////////////
/// Connect Linked Object
///////////////////////////

const connectLinkedObjectImageArray = ["./imgs/thingsAroundUsWeDontSee/connectLinkedObjects/connectLinkedObjectDesk-1of4.png", 
                                       "./imgs/thingsAroundUsWeDontSee/connectLinkedObjects/connectLinkedObjectDesk-2of4.png",
                                       "./imgs/thingsAroundUsWeDontSee/connectLinkedObjects/connectLinkedObjectDesk-3of4.png",
                                       "./imgs/thingsAroundUsWeDontSee/connectLinkedObjects/connectLinkedObjectDesk-4of4.png"]

const connectLinkedObjectStyleArray = ["horizontalPiece whiteOverlay", 
                                        "horizontalPiece whiteOverlay", 
                                        "verticalPiece whiteOverlay", 
                                        "horizontalPiece whiteOverlay"]

const connectLinkedObjectNumberArray = ["1", "2", "3", "4"]

connectLinkedObjectImageCounter = 0
connectLinkedObjectNumberCounter = 0

document.getElementById("connectLinkedObjectNextButton").addEventListener("click", () => {

    connectLinkedObjectImageCounter += 1
    document.getElementById("connectLinkedObjectImage").src = connectLinkedObjectImageArray[connectLinkedObjectImageCounter]
    document.getElementById("connectLinkedObjectImage").className = connectLinkedObjectStyleArray[connectLinkedObjectImageCounter]
    connectLinkedObjectNumberCounter += 1
    document.getElementById("connectLinkedObjectNumber").innerText = connectLinkedObjectNumberArray[connectLinkedObjectNumberCounter]


    if(connectLinkedObjectNumberCounter > 0){
        document.getElementById("connectLinkedObjectPrevButton").className = "prevButton"
    }

    if(connectLinkedObjectNumberCounter === 3){
        document.getElementById("connectLinkedObjectNextButton").className = "nextButton disabledButton"
    }
})

document.getElementById("connectLinkedObjectPrevButton").addEventListener("click", () => {

    connectLinkedObjectImageCounter -= 1
    document.getElementById("connectLinkedObjectImage").src = connectLinkedObjectImageArray[connectLinkedObjectImageCounter]
    document.getElementById("connectLinkedObjectImage").className = connectLinkedObjectStyleArray[connectLinkedObjectImageCounter]
    connectLinkedObjectNumberCounter -= 1
    document.getElementById("connectLinkedObjectNumber").innerText = connectLinkedObjectNumberArray[connectLinkedObjectNumberCounter]

    if(connectLinkedObjectNumberCounter < 3){
        document.getElementById("connectLinkedObjectNextButton").className = "nextButton"
    }

    if(connectLinkedObjectNumberCounter === 0){
        document.getElementById("connectLinkedObjectPrevButton").className = "prevButton disabledButton"
    }
})


///////////////////////////
/// Designed To Connect
///////////////////////////

const designedToConnectImageArray = ["./imgs/thingsAroundUsWeDontSee/designedToConnect/designedToConnectDesk-1of4.png", 
                                     "./imgs/thingsAroundUsWeDontSee/designedToConnect/designedToConnectDesk-2of4.png",
                                     "./imgs/thingsAroundUsWeDontSee/designedToConnect/designedToConnectDesk-3of4.png",
                                     "./imgs/thingsAroundUsWeDontSee/designedToConnect/designedToConnectDesk-4of4.png",]

const designedToConnectStyleArray = ["horizontalPiece whiteOverlay", 
                                        "verticalPiece whiteOverlay", 
                                        "verticalPiece whiteOverlay", 
                                        "verticalPiece whiteOverlay"]

const designedToConnectNumberArray = ["1", "2", "3", "4"]

designedToConnectImageCounter = 0
designedToConnectNumberCounter = 0

document.getElementById("designedToConnectNextButton").addEventListener("click", () => {

    designedToConnectImageCounter += 1
    document.getElementById("designedToConnectImage").src = designedToConnectImageArray[designedToConnectImageCounter]
    document.getElementById("designedToConnectImage").className = designedToConnectStyleArray[designedToConnectImageCounter]
    designedToConnectNumberCounter += 1
    document.getElementById("designedToConnectNumber").innerText = designedToConnectNumberArray[designedToConnectNumberCounter]


    if(designedToConnectNumberCounter > 0){
        document.getElementById("designedToConnectPrevButton").className = "prevButton"
    }

    if(designedToConnectNumberCounter === 3){
        document.getElementById("designedToConnectNextButton").className = "nextButton disabledButton"
    }
})

document.getElementById("designedToConnectPrevButton").addEventListener("click", () => {

    designedToConnectImageCounter -= 1
    document.getElementById("designedToConnectImage").src = designedToConnectImageArray[designedToConnectImageCounter]
    document.getElementById("designedToConnectImage").className = designedToConnectStyleArray[designedToConnectImageCounter]
    designedToConnectNumberCounter -= 1
    document.getElementById("designedToConnectNumber").innerText = designedToConnectNumberArray[designedToConnectNumberCounter]

    if(designedToConnectNumberCounter < 3){
        document.getElementById("designedToConnectNextButton").className = "nextButton"
    }

    if(designedToConnectNumberCounter === 0){
        document.getElementById("designedToConnectPrevButton").className = "prevButton disabledButton"
    }
})


///////////////////////////
/// Mounted Onto The Wall
///////////////////////////

const mountedOntoTheWallImageArray = ["./imgs/thingsAroundUsWeDontSee/mountedOntoTheWall/mountedOntoTheWallDesk-1of4.png", 
                                      "./imgs/thingsAroundUsWeDontSee/mountedOntoTheWall/mountedOntoTheWallDesk-2of4.png",
                                      "./imgs/thingsAroundUsWeDontSee/mountedOntoTheWall/mountedOntoTheWallDesk-3of4.png",
                                      "./imgs/thingsAroundUsWeDontSee/mountedOntoTheWall/mountedOntoTheWallDesk-4of4.png",]

const mountedOntoTheWallStyleArray = ["horizontalPiece whiteOverlay", 
                                        "verticalPiece whiteOverlay", 
                                        "verticalPiece whiteOverlay", 
                                        "verticalPiece whiteOverlay"]

const mountedOntoTheWallNumberArray = ["1", "2", "3", "4"]

mountedOntoTheWallImageCounter = 0
mountedOntoTheWallNumberCounter = 0

document.getElementById("mountedOntoTheWallNextButton").addEventListener("click", () => {

    mountedOntoTheWallImageCounter += 1
    document.getElementById("mountedOntoTheWallImage").src = mountedOntoTheWallImageArray[mountedOntoTheWallImageCounter]
    document.getElementById("mountedOntoTheWallImage").className = mountedOntoTheWallStyleArray[mountedOntoTheWallImageCounter]
    mountedOntoTheWallNumberCounter += 1
    document.getElementById("mountedOntoTheWallNumber").innerText = mountedOntoTheWallNumberArray[mountedOntoTheWallNumberCounter]


    if(mountedOntoTheWallNumberCounter > 0){
        document.getElementById("mountedOntoTheWallPrevButton").className = "prevButton"
    }

    if(mountedOntoTheWallNumberCounter === 3){
        document.getElementById("mountedOntoTheWallNextButton").className = "nextButton disabledButton"
    }
})

document.getElementById("mountedOntoTheWallPrevButton").addEventListener("click", () => {

    mountedOntoTheWallImageCounter -= 1
    document.getElementById("mountedOntoTheWallImage").src = mountedOntoTheWallImageArray[mountedOntoTheWallImageCounter]
    document.getElementById("mountedOntoTheWallImage").className = mountedOntoTheWallStyleArray[mountedOntoTheWallImageCounter]
    mountedOntoTheWallNumberCounter -= 1
    document.getElementById("mountedOntoTheWallNumber").innerText = mountedOntoTheWallNumberArray[mountedOntoTheWallNumberCounter]

    if(mountedOntoTheWallNumberCounter < 3){
        document.getElementById("mountedOntoTheWallNextButton").className = "nextButton"
    }

    if(mountedOntoTheWallNumberCounter === 0){
        document.getElementById("mountedOntoTheWallPrevButton").className = "prevButton disabledButton"
    }
})
