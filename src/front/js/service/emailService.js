import emailjs from "@emailjs/browser";

export const sendEmail = (params) => {
  const serviceId = process.env.SERVICE_ID;
  const templateId = process.env.TEMPLATE_ID;
  const key = process.env.KEY;

  const templateParams = {
    from_name: "APP NAME",
    to_email: params.to_email,
    to_name: params.to_name,
    to_link: params.to_link
  };
  emailjs.send(serviceId, templateId, templateParams, key).then(
    (result) => {
      console.log(result.text);
    },
    (error) => {
      console.log(error.text);
    }
  );
};
