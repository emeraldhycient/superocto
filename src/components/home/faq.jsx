import React, { useState } from "react";

function Faq() {
  const [questions, setquestions] = useState([
    {
      title: "What happens after the purchase?",
      description:
        "As soon as the payment is confirmed, you need to check your inbox for the welcome email. Make sure you check both Inbox and Spam folders. The welcome email contains the link to your personal Control Panel and Login credentials. Simply follow the link and login to your Control Panel, where you will find an Installation Wizard. It will walk you through the installation process and help to sync up the new device.      ",
      isopen: false,
    },
    {
      title: "What if I need technical support?      ",
      description:
        "We offer a few levels of  technical assistance:Free Service - e-mail support, live chat assistance.Paid Phone Support – 24/7 personalized customer assistance with each step of the installation process in addition to the free support service.",
      isopen: false,
    },
    {
      title: "Can I change devices without changing the subscription?",
      description:
        "Yes. In case your child has lost their phone, or you've bought them a new one, you can switch to a different device within the same subscription without paying any additional fees.",
      isopen: false,
    },
    {
      title: "How many devices does the subscription cover?      ",
      description:
        "One subscription plan covers one device only. If you want to connect multiple devices, consider getting our Family Kit that allows you to monitor up to 3 devices at the same time.",
      isopen: false,
    },
    {
      title: "Will I be notified if the app is uninstalled?",
      description:
        "Yes. You will receive a notification in case the application was removed from the device.      ",
      isopen: false,
    },
  ]);

  const togglequest = (i) => {
    setquestions(
      questions.map((quest, index) => {
        if (index === i) {
          if (quest.isopen) {
            quest.isopen = false;
          } else {
            quest.isopen = true;
          }
        } else {
          quest.isopen = false;
        }
        return quest;
      })
    );
  };

  return (
    <section id="faq" className="col-md-7 mt-5 mb-5 mx-auto">
      {questions.map((quest, i) => (
        <section
          className="faqcontainer mb-3"
          onClick={(e) => togglequest(i)}
          key={i}
        >
          <h5 className="faqheader">{quest.title}</h5>
          {quest.isopen ? (
            <div className="faqbody">
              <p
                className="text-muted"
                style={{ fontWeight: "400px", fontSize: "14px" }}
              >
                {quest.description}
              </p>
            </div>
          ) : (
            ""
          )}
        </section>
      ))}
    </section>
  );
}

export default Faq;
