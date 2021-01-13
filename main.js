$(document).on('click', 'ul li', function () {
    $(this).addClass('active').siblings().removeClass('active')
})


$(document).ready(function () {
    $('#icon').click(function () {
        $('ul').toggleClass('show');
    });
});


$(document).ready(function () {
    $('ul li').click(function () {
        $('ul').toggleClass('show');
    });
});

const scriptURL = 'https://script.google.com/macros/s/AKfycbwR7opDxOi2UvLPa-BZ4L7M6cDJT70N4GBwcpnF9O0ZdIxOWcg/exec'
const form = document.forms['submit-to-google-sheet']

form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form) })
        .then(response => console.log('Success!', response))
        .catch(error => console.error('Error!', error.message))
    document.getElementById('thank').classList.add('show')
})

const toggle = document.getElementById('toggle');

toggle.addEventListener('input', e => {
    const isChecked = e.target.checked;
    if (isChecked) {
        document.documentElement.className = 'theme-dark';
        localStorage.setItem('theme','dark');
    } else {
        document.documentElement.className = 'theme-light';
        localStorage.setItem('theme','light');
    }
});

if (localStorage.getItem('theme') === 'dark') {
    document.getElementById('toggle').checked = true;
    document.documentElement.className = 'theme-dark';
} else if (localStorage.getItem('theme') === 'light') {
    document.documentElement.className = 'theme-light';
}


