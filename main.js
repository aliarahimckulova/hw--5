document.onmousemove = function(e) {
    if (!dragObject.elem) return;
    if ( !dragObject.avatar ) {
        var moveX = e.pageX - dragObject.downX;
        var moveY = e.pageY - dragObject.downY;
        if ( Math.abs(moveX) < 3 && Math.abs(moveY) < 3 ) {
            return;
        }

        dragObject.avatar = createAvatar(e);
        if (!dragObject.avatar) {
            dragObject = {};
            return;
        }


        var coords = getCoords(dragObject.avatar);
        dragObject.shiftX = dragObject.downX - coords.left;
        dragObject.shiftY = dragObject.downY - coords.top;

        startDrag(e);
    }

    
    dragObject.avatar.style.left = e.pageX - dragObject.shiftX + 'px';
    dragObject.avatar.style.top = e.pageY - dragObject.shiftY + 'px';

    return false;
}