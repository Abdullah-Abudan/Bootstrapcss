let progressSec = document.querySelector('.progress-section') //scroll
let progressBar = document.querySelectorAll('.progress-bar') // width 
let counterSec = document.querySelector('.counter-section') //scroll
let counterValue = document.querySelectorAll('.counter-section h3')



ScrollOut({
    targets: ".progress-section , .counter-section", //data-scroll = "in or out"
  });
  window.onscroll = function(){
    if(progressSec.dataset.scroll == "in"){
        progressBar.forEach(wid => {
            let valueNow = wid.getAttribute('aria-valuenow');
            wid.style.width = valueNow + "%"; // الـعرض قيمته + وحدة القياس
            
            let spanValue = wid.parentElement.parentElement.querySelector('.progress-value span');
            let timer = setInterval(()=>{
                if(Number(spanValue.textContent) < valueNow){
                    spanValue.textContent= Number(spanValue.textContent) + 1
                }
                else{
                    clearInterval(timer)
                }
            },300)
        });
  }
  else{    // حتى يتم التصفير ومن ثم تطبيق الأنيميشن عند الرجوع مرة أخرى
    progressBar.forEach(wid => {
        wid.style.width = 0 + "%"
        wid.parentElement.parentElement.querySelector('.progress-value span').textContent = 0;
    });
  }

    //   Counter section

    if(counterSec.dataset.scroll == "in"){
        counterValue.forEach(num => {
            let timer = setInterval(()=>{
                if(Number(num.textContent) < num.dataset.counter){
                    num.textContent= Number(num.textContent) + 1
                }
                else{
                    clearInterval(timer)
                }
            },300)
        });
  }
  else{    // حتى يتم التصفير ومن ثم تطبيق الأنيميشن عند الرجوع مرة أخرى
    counterValue.forEach(num => {
        num.textContent = 0;
    });
  }
}
// portfolio filterd-items
let filterList = document.querySelectorAll('.list-group li'),
    filterAnchor = document.querySelectorAll('.filterd-items a');
    
filterList.forEach(list => {
    list.onclick = function(){
        document.querySelector('.list-group li.active').classList.remove("active"); // سيُمحى كلاس الآكتيف من العنصر المطبق عليه
        list.classList.add("active"); //سيضاف كلاس الآكتيف على العنصر أو على الليست المنقور عليها
        let filterValue = list.dataset.filter;
        filterAnchor.forEach(anc => {
            if(anc.classList.contains(filterValue)) { // هل الانكور يحتوي على هذا الكلاس ..قيمة الفلتر نفس اسم الكلاس
                anc.classList.remove('hidden');
                anc.classList.add('active');
            }
            else {
                anc.classList.remove('active');
                anc.classList.add('hidden');
            } 
        })
    }
})    
lightGallery(document.getElementById('lightgallery'), { //done init Lgall
    speed: 500
});
//portfolio end

AOS.init(); //done init AOS


var typed = new Typed('.txt-typed', {
    strings: ['Coder Abdullah'],
    smartBackspace: true, // Default value
    showCursor: false,
    typeSpeed: 100,
    loop: true,
    backSpeed: 100,
  });