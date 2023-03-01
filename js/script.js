// header
try {
    // Home Page Header
    document.addEventListener("scroll", () => {
        if (scrollY > 100) {
            document.querySelector("header").classList.add("shadow-header");

        }
        else {
            document.querySelector("header").classList.remove("shadow-header");
        }
    })

} catch (err) {
    console.log(err);
}
// Mobile Header

try {
    function headerNavFunc(){
        const menuMain = document.querySelector('.header__nav__main');
        console.log(menuMain)
        menuMain.classList.toggle('active');

    }
} catch (err) {
    console.log(err);
}

const menu = document.querySelectorAll('.header__list');
console.log(menu)
try {
    console.log(menu)
    menu.forEach(list => {
        console.log(list)
        list.addEventListener('click', function(e){
            e.preventDefault();
            e.stopPropagation();
            console.log(list)
            document.querySelector('.header__nav__main').classList.remove('active');
        })
    })
    
} catch (error) {
    console.log(error)
}
// product Func
try {
    var listItem = document.querySelectorAll('.nav__links');
    var tabContent = document.querySelectorAll('.tab-pane');
    function changeMenu(link){
        if(link == 'first'){
            document.querySelectorAll('.nav__links').forEach(item => { item.classList.remove('active') });
            document.querySelectorAll('.tab-pane').forEach(item => { item.classList.remove('active') });
            document.querySelectorAll('.tab-pane').forEach(item => { item.classList.remove('show') });
            var currentLink = document.querySelectorAll('.first');
            currentLink.forEach(item => { item.classList.add('active'); });
            var tab = document.querySelector('.first');
            currentLink.forEach(item => { item.classList.add('show'); });
        }
        if(link == 'second'){
            document.querySelectorAll('.nav__links').forEach(item => { item.classList.remove('active') });
            document.querySelectorAll('.tab-pane').forEach(item => { item.classList.remove('active') });
            document.querySelectorAll('.tab-pane').forEach(item => { item.classList.remove('show') });
            var currentLink = document.querySelectorAll('.second');
            currentLink.forEach(item => { item.classList.add('active'); });
            var tab = document.querySelector('.second');
            currentLink.forEach(item => { item.classList.add('show'); });
        }
        if(link == 'third'){
            document.querySelectorAll('.nav__links').forEach(item => { item.classList.remove('active') });
            document.querySelectorAll('.tab-pane').forEach(item => { item.classList.remove('active') });
            document.querySelectorAll('.tab-pane').forEach(item => { item.classList.remove('show') });
            var currentLink = document.querySelectorAll('.third');
            currentLink.forEach(item => { item.classList.add('active'); });
            var tab = document.querySelector('.third');
            currentLink.forEach(item => { item.classList.add('show'); });
        }
        if(link == 'fourth'){
            document.querySelectorAll('.nav__links').forEach(item => { item.classList.remove('active') });
            document.querySelectorAll('.tab-pane').forEach(item => { item.classList.remove('active') });
            document.querySelectorAll('.tab-pane').forEach(item => { item.classList.remove('show') });
            var currentLink = document.querySelectorAll('.fourth');
            currentLink.forEach(item => { item.classList.add('active'); });
            var tab = document.querySelector('.fourth');
            currentLink.forEach(item => { item.classList.add('show'); });
        }
    }
    function deacMenu() {
        listItem.forEach(item => { item.classList.remove('active') });
    }
    function tabContentDiv() {
        tabContent.forEach(item => { item.classList.remove('active') });
    }

} catch (err) {
    console.log(err);
}

// product Desc
try {
    function productDesFunc(path){
        const mainPopupBox = document.querySelector('.popupdetail');
        const img = document.querySelector('.popup__img__main img');
        img.src = path;
        mainPopupBox.classList.toggle('active');
    }
} catch (err) {
    console.log(err);
}
