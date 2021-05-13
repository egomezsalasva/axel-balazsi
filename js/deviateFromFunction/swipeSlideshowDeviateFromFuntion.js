////////////////////////////////////////////
/// Designed To Connect Swipe Gesture Mobile
///////////////////////////////////////////

const designedToConnectContainer = document.getElementById("designedToConnectContainer");

var designedToConnectLeftSwipe = Hammer(designedToConnectContainer).on("swipeleft", () => {
    
    designedToConnectRightSwipe.set({ enable: true })

    designedToConnectImageCounterMob += 1
    document.getElementById("designedToConnectImageMob").src = designedToConnectImageArrayMob[designedToConnectImageCounterMob]
    designedToConnectNumberCounterMob += 1
    document.getElementById("designedToConnectNumberMob").innerText = designedToConnectNumberArrayMob[designedToConnectNumberCounterMob]

    if(designedToConnectNumberCounterMob > 0){
        document.getElementById("designedToConnectPrevButtonMob").className = "prevButtonMob"
    }

    if(designedToConnectNumberCounterMob === 2){
        document.getElementById("designedToConnectNextButtonMob").className = "nextButtonMob disabledButtonMob"
        designedToConnectLeftSwipe.set({ enable: false });
    }
})

var designedToConnectRightSwipe = Hammer(designedToConnectContainer).on("swiperight", () => {

    designedToConnectLeftSwipe.set({ enable: true });

    if(designedToConnectNumberCounterMob > 0){
        designedToConnectImageCounterMob -= 1
        document.getElementById("designedToConnectImageMob").src = designedToConnectImageArrayMob[designedToConnectImageCounterMob]
        designedToConnectNumberCounterMob -= 1
        document.getElementById("designedToConnectNumberMob").innerText = designedToConnectNumberArrayMob[designedToConnectNumberCounterMob]
    }

    if(designedToConnectNumberCounterMob < 2){
        document.getElementById("designedToConnectNextButtonMob").className = "nextButtonMob"
    }
    if(designedToConnectNumberCounterMob === 0){
        document.getElementById("designedToConnectPrevButtonMob").className = "prevButtonMob disabledButtonMob"
        designedToConnectRightSwipe.set({ enable: false })
    }

})


/////////////////////////////////////////////////////
/// To Flex Or Extend Swipe Gesture Mobile
/////////////////////////////////////////////////////

const toFlexOrExtendContainer = document.getElementById("toFlexOrExtendContainer");

var toFlexOrExtendLeftSwipe = Hammer(toFlexOrExtendContainer).on("swipeleft", () => {
    
    toFlexOrExtendRightSwipe.set({ enable: true })

    toFlexOrExtendImageCounterMob += 1
    document.getElementById("toFlexOrExtendImageMob").src = toFlexOrExtendImageArrayMob[toFlexOrExtendImageCounterMob]
    toFlexOrExtendNumberCounterMob += 1
    document.getElementById("toFlexOrExtendNumberMob").innerText = toFlexOrExtendNumberArrayMob[toFlexOrExtendNumberCounterMob]

    if(toFlexOrExtendNumberCounterMob > 0){
        document.getElementById("toFlexOrExtendPrevButtonMob").className = "prevButtonMob"
    }

    if(toFlexOrExtendNumberCounterMob === 1){
        document.getElementById("toFlexOrExtendNextButtonMob").className = "nextButtonMob disabledButtonMob"
        toFlexOrExtendLeftSwipe.set({ enable: false });
    }
})

var toFlexOrExtendRightSwipe = Hammer(toFlexOrExtendContainer).on("swiperight", () => {

    toFlexOrExtendLeftSwipe.set({ enable: true });

    if(toFlexOrExtendNumberCounterMob > 0){
        toFlexOrExtendImageCounterMob -= 1
        document.getElementById("toFlexOrExtendImageMob").src = toFlexOrExtendImageArrayMob[toFlexOrExtendImageCounterMob]
        toFlexOrExtendNumberCounterMob -= 1
        document.getElementById("toFlexOrExtendNumberMob").innerText = toFlexOrExtendNumberArrayMob[toFlexOrExtendNumberCounterMob]
    }

    if(toFlexOrExtendNumberCounterMob < 1){
        document.getElementById("toFlexOrExtendNextButtonMob").className = "nextButtonMob"
    }
    if(toFlexOrExtendNumberCounterMob === 0){
        document.getElementById("toFlexOrExtendPrevButtonMob").className = "prevButtonMob disabledButtonMob"
        toFlexOrExtendRightSwipe.set({ enable: false })
    }

})

