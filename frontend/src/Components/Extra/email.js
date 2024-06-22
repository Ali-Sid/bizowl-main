import emailjs from '@emailjs/browser';

export async function sendMail(projectType, projectTimeline, projectBudget, projectRequirements, userFirstName, userLastName, userEmail, userPhone, formType) {

    var serviceId = process.env.REACT_APP_SERVICE_ID;
    var templateId = process.env.REACT_APP_TEMPLATE_ID;
    var publicKey = process.env.REACT_APP_PUBLIC_KEY;

    var templateParams = {
        projectType, projectTimeline, projectBudget, projectRequirements, userFirstName, userLastName, userEmail, userPhone, formType
    };

    return await emailjs.send(serviceId, templateId, templateParams, publicKey).then((res) => {
        console.log({ res });
        return true
    }).catch((err) => {
        console.log({ err });
        return false
    })
}

export async function sendContactMail(projectRequirements, userFirstName, userLastName, userEmail, userPhone, formType) {

    var serviceId = process.env.REACT_APP_SERVICE_ID;
    var templateId = process.env.REACT_APP_TEMPLATE_ID;
    var publicKey = process.env.REACT_APP_PUBLIC_KEY;

    var templateParams = {
        projectRequirements, userFirstName, userLastName, userEmail, userPhone, formType
    };

    return await emailjs.send(serviceId, templateId, templateParams, publicKey).then((res) => {
        console.log({ res });
        return true
    }).catch((err) => {
        console.log({ err });
        return false
    })
}