import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import LinesEllipsis from 'react-lines-ellipsis'
import 'react-notifications-component/dist/theme.css'
import { Store } from 'react-notifications-component'

export const ellipsisText = (text,line) =>{
    return (
        <LinesEllipsis
            text={text}
            maxLine={line}
            ellipsis='...'
            // trimRight
            // basedOn='letters'
        />
    )
}

export const ScrollToTop = () =>{
    const { pathname } = useLocation();
    useEffect(() => {
      window.scrollTo(0, 0);
    }, [pathname]);
    return null;
}

export const alertFunction = (alertText,isSuccess, title) =>{
    Store.addNotification({
        title: title,
        message: alertText,
        type: isSuccess ? "success" : "danger",
        insert: "top",
        container: "top-right",
        animationIn: ["animate_animated", "animate_fadeIn"],
        animationOut: ["animate_animated", "animate_fadeOut"],
        dismiss: {
          duration: 5000,
          onScreen: true
        }
    });
}

export const inputKeyLengthFixed = (val, setValue) =>{
    setValue(val.replace(/\D/g, ''))
}

export const TestimonialsSlide = (isForward,slickSliderRef) =>{
    isForward ? slickSliderRef.current.slickNext() : slickSliderRef.current.slickPrev();
}

export const WindowOpenLink = (url,type) =>{
    window.open(url,type);
}