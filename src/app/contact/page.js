import React from 'react'
import Loading from '../loading'
import ContactCard from '../components/ContactCard'
import ContactForm from '../components/ContactForm'

const Contact = () => {
  return (
    <>
      <div className="container px-14">

        <h1 className="text-3xl font-bold m-5 text-center">Contact Us</h1>
        <ContactCard />
        <ContactForm />
        <div className='w-screen m-auto'>
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3769.080574062542!2d73.07354448885496!3d19.147950000000005!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c007b05013ad%3A0x551016cde1879133!2sKAKE%20WAY%2C%20Casa%20Rio!5e0!3m2!1sen!2sin!4v1686733566669!5m2!1sen!2sin" width={1150} height={450} style={{ border: 0 }} allowFullScreen={true} loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
        </div>


      </div>

    </>
  )
}

export default Contact
