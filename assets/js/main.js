const checkboxes = document.querySelectorAll('input[type="checkbox"]');
let lastChecked = checkboxes[0];
let inBetween = false;

function handleCheck(e) {
    if (e.shiftKey) {
        checkboxes.forEach(checkbox => {
            if (checkbox === this || checkbox === lastChecked) 
                if (this !== lastChecked)
                    inBetween = !inBetween;
            
            if (inBetween)
                checkbox.checked = true;
        });
    }
    lastChecked = this;
}

checkboxes.forEach(checkbox => checkbox.addEventListener('click', handleCheck));
