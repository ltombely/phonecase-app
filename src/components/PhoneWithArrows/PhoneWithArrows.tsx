import Phone from "../Phone/Phone";

export default function PhoneWithArrows(){
  return(
    <div className="relative md:max-w-xl mt-20">
    <img
        src="/your-image.png"
        alt="your image arrow"
        className="absolute w-40 lg:w-52 left-56 -top-20 select-none hidden sm:block lg:hidden xl:block"
    />
    <img
        src="/line.png"
        alt="line"
        className="absolute w-20 -left-6 -bottom-6 select-none"
    />
    <Phone
        imgSrc="/testimonials/1.jpg"
        className="w-64"
    />
</div>
  )
}