let styleMode = localStorage.getItem('styleMode');
const styleToggle = document.querySelector('.header-btn1');

const enableLightStyle = () => {
    document.body.classList.add('lightmode');
    localStorage.setItem('styleMode', 'light')
}
const disableLightStyle = () => {
    document.body.classList.remove('lightmode');
    localStorage.setItem('styleMode', null)
}


styleToggle.addEventListener('click', () => {
    styleMode = localStorage.getItem('styleMode');
    if (styleMode !== 'light') {
        enableLightStyle();
    }
        else {
            disableLightStyle();
        }
}
)

if(styleMode === 'light') {
    enableLightStyle
}