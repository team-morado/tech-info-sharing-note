import { useEffect } from "react";
const CommonFunc = () => {
  
    const handleContentInner = () => {
        let windowH = window.innerHeight;
            let contentInner = document.querySelector('.ContentInner');
            let headerH = document.querySelector('header').clientHeight;
            let footerH = document.querySelector('footer').clientHeight;
            let changeH = windowH - (headerH + 30) + (footerH);
            contentInner.style.cssText=`
            max-height: ${changeH}px; 
            padding-top: ${headerH}px; 
            padding-bottom: ${footerH + 30}px; 
            overflow-y : auto;
            box-sizing : border-box;`
    }

    useEffect(() => {
        handleContentInner();
    }, [])

    window.addEventListener('resize', handleContentInner)
}
export default CommonFunc;
