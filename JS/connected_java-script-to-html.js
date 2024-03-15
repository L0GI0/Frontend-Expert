window.addEventListener('DOMContentLoaded', main); /* We can use defer attribute on
<script defer></script> element, we can also use <script async/>, whenever the script is ready
stop parsing the DOM and execute the script. This is usually only for scripts that do not need access
to the DOM, because otherwise the behavior will be inconsistent based on how quickly the script downloaded  */

function main() {
    const button = document.querySelector('button');
    button.addEventListener('click'. setBackgroundColor);
    
    function setBackgroundColor() {
        document.body.style.backgroundColor = '#00334C';
    }
}


