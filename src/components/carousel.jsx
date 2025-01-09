const Carousel = ({ images }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <Slider {...settings}>
      {images.map((image, index) => (
        <div key={index} className="flex justify-center">
          <img
            src={image.src}
            alt={`Project Image ${index + 1}`}
            className={`${
              image.orientation === "portrait"
                ? "h-auto max-h-[500px] mx-auto"
                : "w-full max-w-[800px]"
            } object-cover rounded-lg shadow-md`}
          />
        </div>
      ))}
    </Slider>
  );
};