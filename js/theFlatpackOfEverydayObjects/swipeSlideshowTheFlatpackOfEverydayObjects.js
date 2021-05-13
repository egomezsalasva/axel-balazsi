//////////////////////////////////////
/// Flat Bookcase Swipe Gesture Mobile
//////////////////////////////////////

const flatBookcaseContainer = document.getElementById("flatBookcaseContainer");

var flatBookcaseLeftSwipe = Hammer(flatBookcaseContainer).on("swipeleft", () => {
    
    flatBookcaseRightSwipe.set({ enable: true })

    flatBookcaseImageCounterMob += 1
    document.getElementById("flatBookcaseImageMob").src = flatBookcaseImageArrayMob[flatBookcaseImageCounterMob]
    flatBookcaseNumberCounterMob += 1
    document.getElementById("flatBookcaseNumberMob").innerText = flatBookcaseNumberArrayMob[flatBookcaseNumberCounterMob]

    if(flatBookcaseNumberCounterMob > 0){
        document.getElementById("flatBookcasePrevButtonMob").className = "prevButtonMob"
    }

    if(flatBookcaseNumberCounterMob === 2){
        document.getElementById("flatBookcaseNextButtonMob").className = "nextButtonMob disabledButtonMob"
        flatBookcaseLeftSwipe.set({ enable: false });
    }
})

var flatBookcaseRightSwipe = Hammer(flatBookcaseContainer).on("swiperight", () => {

    flatBookcaseLeftSwipe.set({ enable: true });

    if(flatBookcaseNumberCounterMob > 0){
        flatBookcaseImageCounterMob -= 1
        document.getElementById("flatBookcaseImageMob").src = flatBookcaseImageArrayMob[flatBookcaseImageCounterMob]
        flatBookcaseNumberCounterMob -= 1
        document.getElementById("flatBookcaseNumberMob").innerText = flatBookcaseNumberArrayMob[flatBookcaseNumberCounterMob]
    }

    if(flatBookcaseNumberCounterMob < 2){
        document.getElementById("flatBookcaseNextButtonMob").className = "nextButtonMob"
    }
    if(flatBookcaseNumberCounterMob === 0){
        document.getElementById("flatBookcasePrevButtonMob").className = "prevButtonMob disabledButtonMob"
        flatBookcaseRightSwipe.set({ enable: false })
    }

})


/////////////////////////////////////////////////////
/// Unfunctional Working Station Swipe Gesture Mobile
/////////////////////////////////////////////////////

const unfunctionalWorkingStationContainer = document.getElementById("unfunctionalWorkingStationContainer");

var unfunctionalWorkingStationLeftSwipe = Hammer(unfunctionalWorkingStationContainer).on("swipeleft", () => {
    
    unfunctionalWorkingStationRightSwipe.set({ enable: true })

    unfunctionalWorkingStationImageCounterMob += 1
    document.getElementById("unfunctionalWorkingStationImageMob").src = unfunctionalWorkingStationImageArrayMob[unfunctionalWorkingStationImageCounterMob]
    unfunctionalWorkingStationNumberCounterMob += 1
    document.getElementById("unfunctionalWorkingStationNumberMob").innerText = unfunctionalWorkingStationNumberArrayMob[unfunctionalWorkingStationNumberCounterMob]

    if(unfunctionalWorkingStationNumberCounterMob > 0){
        document.getElementById("unfunctionalWorkingStationPrevButtonMob").className = "prevButtonMob"
    }

    if(unfunctionalWorkingStationNumberCounterMob === 2){
        document.getElementById("unfunctionalWorkingStationNextButtonMob").className = "nextButtonMob disabledButtonMob"
        unfunctionalWorkingStationLeftSwipe.set({ enable: false });
    }
})

var unfunctionalWorkingStationRightSwipe = Hammer(unfunctionalWorkingStationContainer).on("swiperight", () => {

    unfunctionalWorkingStationLeftSwipe.set({ enable: true });

    if(unfunctionalWorkingStationNumberCounterMob > 0){
        unfunctionalWorkingStationImageCounterMob -= 1
        document.getElementById("unfunctionalWorkingStationImageMob").src = unfunctionalWorkingStationImageArrayMob[unfunctionalWorkingStationImageCounterMob]
        unfunctionalWorkingStationNumberCounterMob -= 1
        document.getElementById("unfunctionalWorkingStationNumberMob").innerText = unfunctionalWorkingStationNumberArrayMob[unfunctionalWorkingStationNumberCounterMob]
    }

    if(unfunctionalWorkingStationNumberCounterMob < 2){
        document.getElementById("unfunctionalWorkingStationNextButtonMob").className = "nextButtonMob"
    }
    if(unfunctionalWorkingStationNumberCounterMob === 0){
        document.getElementById("unfunctionalWorkingStationPrevButtonMob").className = "prevButtonMob disabledButtonMob"
        unfunctionalWorkingStationRightSwipe.set({ enable: false })
    }

})


/////////////////////////////////////////////
/// Customized TV Drawer Swipe Gesture Mobile
/////////////////////////////////////////////

const customizedTVDrawerContainer = document.getElementById("customizedTVDrawerContainer");

var customizedTVDrawerLeftSwipe = Hammer(customizedTVDrawerContainer).on("swipeleft", () => {
    
    customizedTVDrawerRightSwipe.set({ enable: true })

    customizedTVDrawerImageCounterMob += 1
    document.getElementById("customizedTVDrawerImageMob").src = customizedTVDrawerImageArrayMob[customizedTVDrawerImageCounterMob]
    customizedTVDrawerNumberCounterMob += 1
    document.getElementById("customizedTVDrawerNumberMob").innerText = customizedTVDrawerNumberArrayMob[customizedTVDrawerNumberCounterMob]

    if(customizedTVDrawerNumberCounterMob > 0){
        document.getElementById("customizedTVDrawerPrevButtonMob").className = "prevButtonMob"
    }

    if(customizedTVDrawerNumberCounterMob === 1){
        document.getElementById("customizedTVDrawerNextButtonMob").className = "nextButtonMob disabledButtonMob"
        customizedTVDrawerLeftSwipe.set({ enable: false });
    }
})

var customizedTVDrawerRightSwipe = Hammer(customizedTVDrawerContainer).on("swiperight", () => {

    customizedTVDrawerLeftSwipe.set({ enable: true });

    if(customizedTVDrawerNumberCounterMob > 0){
        customizedTVDrawerImageCounterMob -= 1
        document.getElementById("customizedTVDrawerImageMob").src = customizedTVDrawerImageArrayMob[customizedTVDrawerImageCounterMob]
        customizedTVDrawerNumberCounterMob -= 1
        document.getElementById("customizedTVDrawerNumberMob").innerText = customizedTVDrawerNumberArrayMob[customizedTVDrawerNumberCounterMob]
    }

    if(customizedTVDrawerNumberCounterMob < 1){
        document.getElementById("customizedTVDrawerNextButtonMob").className = "nextButtonMob"
    }
    if(customizedTVDrawerNumberCounterMob === 0){
        document.getElementById("customizedTVDrawerPrevButtonMob").className = "prevButtonMob disabledButtonMob"
        customizedTVDrawerRightSwipe.set({ enable: false })
    }

})