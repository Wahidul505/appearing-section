const lastBlog = document.getElementById('last-blog');
lastBlog.style.display = 'none';
window.addEventListener('scroll',()=>{
    const scrolled = window.scrollY;
    if(scrolled === 635){
        lastBlog.style.display = 'block';
    }

})