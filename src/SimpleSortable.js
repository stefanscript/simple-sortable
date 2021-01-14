function SimpleSortable(newOrderHandler) {
    window.addEventListener("load", () => {
        let dragged;
        let draggedY;
        let target;
        let selectorItems = ".simple-sortable li";
        const list = document.querySelectorAll(selectorItems);
        list.forEach((item) => {
            item.setAttribute("draggable", true);
            item.addEventListener("dragstart", (e) => {
                dragged = e.target;
                draggedY = dragged.getBoundingClientRect().y;
                dragged.style.border = "1px solid #000";
            });
            
            item.addEventListener("dragenter", (e) => {
                if (dragged !== e.target) {
                    target = e.target;
                }
            });
            
            item.addEventListener("dragend", (e) => {
                e.preventDefault();
                if (target) {
                    if (draggedY < target.getBoundingClientRect().y) {
                        dragged.parentNode.removeChild(dragged);
                        target.after(dragged);
                    } else {
                        dragged.parentNode.removeChild(dragged);
                        target.before(dragged);
                    }
                }
                
                dragged.style.border = "0";
                
                let newOrder = [];
                document.querySelectorAll(selectorItems).forEach(a => {
                    newOrder.push(a.dataset.id);
                });
                newOrderHandler(newOrder);
            }, false);
        });
    });
}

export default SimpleSortable;
