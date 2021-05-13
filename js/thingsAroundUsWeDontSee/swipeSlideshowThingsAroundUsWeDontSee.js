//////////////////////////////////////////////
/// Connect Linked Object Swipe Gesture Mobile
//////////////////////////////////////////////

const connectLinkedObjectsContainer = document.getElementById("connectLinkedObjectsContainer");


var connectLinkedObjectsLeftSwipe = Hammer(connectLinkedObjectsContainer).on("swipeleft", () => {
    
    connectLinkedObjectsRightSwipe.set({ enable: true })

    connectLinkedObjectImageCounterMob += 1
    document.getElementById("connectLinkedObjectImageMob").src = connectLinkedObjectImageArrayMob[connectLinkedObjectImageCounterMob]
    connectLinkedObjectNumberCounterMob += 1
    document.getElementById("connectLinkedObjectNumberMob").innerText = connectLinkedObjectNumberArrayMob[connectLinkedObjectNumberCounterMob]

    if(connectLinkedObjectNumberCounterMob > 0){
        document.getElementById("connectLinkedObjectPrevButtonMob").className = "prevButtonMob"
    }

    if(connectLinkedObjectNumberCounterMob === 3){
        document.getElementById("connectLinkedObjectNextButtonMob").className = "nextButtonMob disabledButtonMob"
        connectLinkedObjectsLeftSwipe.set({ enable: false });
    }
})

var connectLinkedObjectsRightSwipe = Hammer(connectLinkedObjectsContainer).on("swiperight", () => {

    connectLinkedObjectsLeftSwipe.set({ enable: true });

    if(connectLinkedObjectNumberCounterMob > 0){
        connectLinkedObjectImageCounterMob -= 1
        document.getElementById("connectLinkedObjectImageMob").src = connectLinkedObjectImageArrayMob[connectLinkedObjectImageCounterMob]
        connectLinkedObjectNumberCounterMob -= 1
        document.getElementById("connectLinkedObjectNumberMob").innerText = connectLinkedObjectNumberArrayMob[connectLinkedObjectNumberCounterMob]
    }

    if(connectLinkedObjectNumberCounterMob < 3){
        document.getElementById("connectLinkedObjectNextButtonMob").className = "nextButtonMob"
    }
    if(connectLinkedObjectNumberCounterMob === 0){
        document.getElementById("connectLinkedObjectPrevButtonMob").className = "prevButtonMob disabledButtonMob"
        connectLinkedObjectsRightSwipe.set({ enable: false })
    }

})


//////////////////////////////////////////////
/// Designed To Connect Swipe Gesture Mobile
//////////////////////////////////////////////

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

    if(designedToConnectNumberCounterMob === 3){
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

    if(designedToConnectNumberCounterMob < 3){
        document.getElementById("designedToConnectNextButtonMob").className = "nextButtonMob"
    }
    if(designedToConnectNumberCounterMob === 0){
        document.getElementById("designedToConnectPrevButtonMob").className = "prevButtonMob disabledButtonMob"
        designedToConnectRightSwipe.set({ enable: false })
    }

})


//////////////////////////////////////////////
/// Mounted Onto The Wall Swipe Gesture Mobile
//////////////////////////////////////////////

const mountedOntoTheWallContainer = document.getElementById("mountedOntoTheWallContainer");

var mountedOntoTheWallLeftSwipe = Hammer(mountedOntoTheWallContainer).on("swipeleft", () => {
    
    mountedOntoTheWallRightSwipe.set({ enable: true })

    mountedOntoTheWallImageCounterMob += 1
    document.getElementById("mountedOntoTheWallImageMob").src = mountedOntoTheWallImageArrayMob[mountedOntoTheWallImageCounterMob]
    mountedOntoTheWallNumberCounterMob += 1
    document.getElementById("mountedOntoTheWallNumberMob").innerText = mountedOntoTheWallNumberArrayMob[mountedOntoTheWallNumberCounterMob]

    if(mountedOntoTheWallNumberCounterMob > 0){
        document.getElementById("mountedOntoTheWallPrevButtonMob").className = "prevButtonMob"
    }

    if(mountedOntoTheWallNumberCounterMob === 3){
        document.getElementById("mountedOntoTheWallNextButtonMob").className = "nextButtonMob disabledButtonMob"
        mountedOntoTheWallLeftSwipe.set({ enable: false });
    }
})

var mountedOntoTheWallRightSwipe = Hammer(mountedOntoTheWallContainer).on("swiperight", () => {

    mountedOntoTheWallLeftSwipe.set({ enable: true });

    if(mountedOntoTheWallNumberCounterMob > 0){
        mountedOntoTheWallImageCounterMob -= 1
        document.getElementById("mountedOntoTheWallImageMob").src = mountedOntoTheWallImageArrayMob[mountedOntoTheWallImageCounterMob]
        mountedOntoTheWallNumberCounterMob -= 1
        document.getElementById("mountedOntoTheWallNumberMob").innerText = mountedOntoTheWallNumberArrayMob[mountedOntoTheWallNumberCounterMob]
    }

    if(mountedOntoTheWallNumberCounterMob < 3){
        document.getElementById("mountedOntoTheWallNextButtonMob").className = "nextButtonMob"
    }
    if(mountedOntoTheWallNumberCounterMob === 0){
        document.getElementById("mountedOntoTheWallPrevButtonMob").className = "prevButtonMob disabledButtonMob"
        mountedOntoTheWallRightSwipe.set({ enable: false })
    }

})