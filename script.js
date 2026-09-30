document.getElementById('year').textContent=new Date().getFullYear();const links=[...document.querySelectorAll('nav a')];const sections=links.map(a=>document.querySelector(a.getAttribute('href'))).filter(Boolean);const observer=new IntersectionObserver(entries=>{entries.forEach(entry=>{if(!entry.isIntersecting)return;links.forEach(a=>a.classList.remove('active'));const active=links.find(a=>a.getAttribute('href')==='#'+entry.target.id);if(active)active.classList.add('active')})},{rootMargin:'-40% 0px -50% 0px'});sections.forEach(s=>observer.observe(s));
const lightbox=document.getElementById('lightbox');
const lightboxImg=document.getElementById('lightbox-img');
const lightboxCaption=document.getElementById('lightbox-caption');
document.querySelectorAll('.project-shot').forEach(img=>{
  img.addEventListener('click',()=>{
    lightboxImg.src=img.src;
    lightboxImg.alt=img.alt;
    const caption=img.closest('figure')?.querySelector('figcaption')?.textContent||img.alt;
    lightboxCaption.textContent=caption;
    lightbox.classList.add('open');
    lightbox.setAttribute('aria-hidden','false');
  });
});
const closeLightbox=()=>{
  lightbox.classList.remove('open');
  lightbox.setAttribute('aria-hidden','true');
  lightboxImg.src='';
};
document.querySelector('.lightbox-close')?.addEventListener('click',closeLightbox);
lightbox?.addEventListener('click',e=>{if(e.target===lightbox)closeLightbox()});
document.addEventListener('keydown',e=>{if(e.key==='Escape')closeLightbox()});
